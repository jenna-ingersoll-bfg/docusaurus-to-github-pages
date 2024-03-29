# Security & Privacy Standards (SANDBOX TESTING PAGE)

AppsFlyer tracks and attributes the install and post-install events for paid and non-paid marketing channels. **Attribution** is the act of determining what caused a user to install an app or to perform post-install acts like re-engagement and re-attribution. There are two types of attribution: 

- **Non-Organic Attribution** occurs when a user interacted with an outside media source (such as clicking on an ad)
- **Organic Attribution** occurs when the user installs (or re-installs) the game without any outside intervention

With this attribution model, AppsFlyer enables the Big Fish marketing and user acquisition teams to analyze the success of campaigns and optimize their spending for your game, and use the data to drive audience growth. 

AppsFlyer is integrated directly into the BFG SDK. To work correctly, use this guide to ensure that the configuration settings are set up in the BFG SDK.

## Enabling AppsFlyer

Enable AppsFlyer in the BFG SDK config file, bfg_config.json:

```json
"appsflyer": {
  "is_enabled": true
}
```

:::info

Each game is assigned an "Application Store ID" (also known as “App ID” or “App Store ID”) to uniquely identify the app in the Apple App Store and/or Google Play Store. This ID is required for all BFG SDK services to work, including AppsFlyer. Ensure that the "app_id" is set in your BFG SDK config file before continuing.

:::

By default, the AppsFlyer configuration will default to using Big Fish's **dev key**, which authenticates events sent by the apps to AppsFlyer. This key is unique per account and is used by all apps in the account. If your game requires a game-specific dev key for its attribution tracking, you can set this in bfg_config.json:

```json
"appsflyer": {
  "is_enabled": true,
  "devkey": your_game_dev_key_here
}
```

## Setting up OneLink

AppsFlyer uses OneLink to create links with attribution, redirection, and deep linking capabilities that convert owned or paid media users into app users. OneLinks can also be set up to auto-detect the platform and redirect the user to the correct app store, so only one link is needed for both iOS and Google.

Work with your Big Fish Producer to set up a OneLink link in the AppsFlyer portal and define a vanity domain specific to your game. The universal OneLink link will then direct users via Android App Links, iOS Universal Links, and the defined URI scheme to the appropriate location based on the device that is used.

Here is an example of a OneLink link set up in AppsFlyer (parts in red need to be specific to your game):

> https://bfgsdk.onelink.me/yryN/

## Supporting SKAdNetwork (SKAN) (iOS Only)

SKAdNetwork (SKAN), part of Apple iOS, lets advertisers measure campaign performance while simultaneously preserving user privacy. AppsFlyer uses SKAN to reliably track install attribution and takes care of all implementation details. However, you need to add the SKAdNetworkIdentifiers for each ad provider to your .plist file. To do so:

1. Set up your game in AppsFlyer's dashboard. 
2. Open your game's Info.plist file.
3. Add an array called SKAdNetworkItems, which contains a dictionary for the allowed ad networks.
4. For each ad provider, add a dictionary entry using the key SKAdNetworkIdentifier with its associated ID. We recommend you add all the ad providers to Info.plist, regardless of the ones currently used in your game. [Click here for a list of all available SKAdNetwork providers and their IDs](https://docs.google.com/spreadsheets/d/12eFcFLjx7ngXTcykHBmZWPLJzex11WkHud1f1ZaBhrk/edit?usp=sharing).

:::tip 

To generate a list of all SKAdNetworkIdentifiers in this spreadsheet, select the **BFG menu** in Google Sheets. From there, you can generate a JSON file or string array to use in your array.

:::

Here is an example of an abbreviated Info.plist file:

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>example100.skadnetwork</string>
    </dict>
    <dict>   
        <key>SKAdNetworkIdentifier</key>
        <string>example200.skadnetwork</string>
    </dict>
</array>
```

## Testing Non-Organic Attribution Behavior

To perform testing for non-organic attribution, you must first set up your testing devices as follows.

### Whitelist Your Device

Manually add your device to the AppsFlyer dashboard to whitelist it using a device ID:

1. Log into the [AppsFlyer dashboard](https://hq1.appsflyer.com/auth/login).
2. Click your name in the upper right corner of the dashboard.
3. Select the Test Devices option.
4. Click on the Add Device button.
5. Add one of the following device parameters, depending on your platform:
    1. **iOS**: Always use IDFA. This can be retrieved from any MTS event.
    2. **Android supporting advertising IDs**: Always use AID (Google) or Fire AID (Amazon). This can be retrieved from any MTS event.
    3. **Android not supporting advertising IDs**: Always use the AndroidID (Google/Amazon). This must be a raw Android ID. This can be retrieved from either Tune or AppsFlyer events as android_id, but only on older devices.
6. Save the new device entry.

### Append Device IDs to the Referral URL 

Once you have the AppsFlyer referral URL (aka, a ‘onelink’) that you will use for testing, append the device ID to the referral URL before install. The keys to use are:

| **Platform**                                            | **Key**                              | **Example**                                                                                      |
|---------------------------------------------------------|--------------------------------------|--------------------------------------------------------------------------------------------------|
| iOS                                                     | idfa=[advertising ID]                | https://bfgsdk.onelink.me/yryN/4f196e66?idfa=aeefc48f-10d1-4c9d-8c3a-ff2685a4c526                |
| Android OS versions supporting advertising IDs (Google) | advertising_id=[advertising ID]      | https://bfgsdk.onelink.me/yryN/4f196e66?advertising_id=aeefc48f-10d1-4c9d-8c3a-ff2685a4c526      |
| Android OS versions supporting advertising IDs (Amazon) | fire_advertising_id=[advertising ID] | https://bfgsdk.onelink.me/yryN/4f196e66?fire_advertising_id=aeefc48f-10d1-4c9d-8c3a-ff2685a4c526 |
| Android OS versions not supporting advertising IDs      | android_id=[Android ID]              | https://bfgsdk.onelink.me/yryN/4f196e66?android_id=c205fe1bd074858b                              |

For more information, refer to [Attribution link structure and parameters](https://support.appsflyer.com/hc/en-us/articles/207447163-AppsFlyer-Tracking-Link-Structure-and-Parameters) in the AppsFlyer documentation.

### Complete Testing 

You should now be set up for install attribution and/or deferred deep link testing with the following steps:

1. Tap the AppsFlyer referral URL you set up above, prior to installing the app, via email.
2. Wait at least 30 seconds before installing and launching the app.

:::info

AppsFlyer has fraud prevention that will block attribution and deferred deep link retrieval if the app is installed too quickly. If this is still not working, wait longer or wait for the click count on the AppsFlyer dashboard to increment due to your click before installing.

:::

3. Install and launch the app. Both install attribution and deferred deep link retrieval should occur at this point. **Note:** There is a Test Device Limit of 250 devices in the AF dashboard.

## Debugging AppsFlyer

When debugging is enabled and a debug version of your application is built, you can find debug output from AppsFlyer in NSLog/Logcat. However, AppsFlyer debugging is not enabled by default. To enable debugging for AppsFlyer:

1. Open your BFG SDK config file, bfg_config.json.
2. Navigate to the internal_sdk_debugging section of the file.
3. Add enable_appsflyer_debug_logging: true to the section:

```
...
  "internal_sdk_debugging": {
    "enable_appsflyer_debug_logging": true
  },
...
```

Once complete, build a debug version of your app.







