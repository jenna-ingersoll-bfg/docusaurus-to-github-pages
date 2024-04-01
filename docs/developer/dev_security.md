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

### Additional Steps for Android

<details>
  <summary>Updating your Gradle dependencies</summary>

In your app’s build.gradle file, add an entry for AppsFlyer:

1. Locate the dependencies section of your app’s build.gradle file.
2. Add the following new section to the dependencies. Note that the following example uses placeholders, and you need to replace the following ‘X.X.X’ with the appropriate version of AppsFlyer.

```
dependencies {
     ...
     implementation 'com.appsflyer:af-android-sdk:X.X.X'
     implementation 'com.android.installreferrer:installreferrer:2.2'
     ...
}
```

:::note

The 'com.android.installreferrer:installreferrer:2.2' dependency is required to support Google's Play Install Referrer API. Using this API improves attribution accuracy, protects from install fraud, and more.

Developers who are using ProGuard and want to use Google's [Play Install Referrer API](https://developer.android.com/google/play/installreferrer/overview) must also set the following ProGuard rule: ``-dontwarn com.android.installreferrer

:::

</details>

<details>
  <summary>Updating your manifest with CHANNEL entry (Amazon Only)</summary>

:::warning

The following section applies only to Amazon builds. **Do not include this entry for any Google builds.**

:::

AppsFlyer requires a "CHANNEL" entry in your manifest file for out-of-store apps, like Amazon. Therefore, for Amazon builds only, perform this additional setup:

1. Locate and open your app’s main manifest file.
2. In the application section of your main manifest file, add the following entry:

```xml
<meta-data android:name="CHANNEL" android:value="Amazon" />
```
</details>

### Additional Steps for iOS

<details>
  <summary>Supporting SKAdNetwork (SKAN)</summary>

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
</details>

<details>
  <summary>Provisioning devices and setting up Associated Domains</summary>

If you need to test AppsFlyer locally, your Big Fish Producer will provide a provisioning profile with Associated Domains enabled. Install this provisioning profile and ensure that it is selected for each of your build targets. After you submit your game, the Associated Domains will be updated by Big Fish.

:::note

Associated Domains must be configured properly for marketing links to work.

:::

Once Associated Domains are enabled in your provisioning profile, add your specific AppsFlyer domain value:

1. In Xcode, select your project, select your target and navigate to the **Capabilities** tab. If you have multiple targets, repeat this step for each target.
2. Scroll until you see **Associated Domains**. Make sure the toggle on the right is set to **On**.
3. Press the "+" sign to add an Associated Domain. Add the app link supplied by your Big Fish Producer for your game. The domain should be prefixed with "applinks:"; for example, ``applinks:bfgsdk.onelink.me``.

You can add associated domains automatically using an Entitlements file. Here's an example entitlements file containing a configured associated domain:

</details>

<details>
  <summary>Removing Facebook SDK event warnings</summary>

The Facebook SDK, which is integrated into the BFG SDK, automatically reports certain events for its apps. To prevent duplication of these events, the BFG SDK programmatically disables the Facebook SDK automatic reporting. As a result, you may see warnings for ``FacebookAutoLogAppEventsEnabled`` and ``FacebookAdvertiserIDCollectionEnabled``. **These warnings can safely be ignored.**

However, if you want to address them, set the following in your game's .plist after exporting to Xcode:

```xml
<key>FacebookAutoLogAppEventsEnabled</key>
<string>FALSE</string>
<key>FacebookAdvertiserIDCollectionEnabled</key>
<string>FALSE</string>
```

## Setting up OneLink

AppsFlyer uses OneLink to create links with attribution, redirection, and deep linking capabilities that convert owned or paid media users into app users. OneLinks can also be set up to auto-detect the platform and redirect the user to the correct app store, so only one link is needed for both iOS and Google.

Work with your Big Fish Producer to set up a OneLink link in the AppsFlyer portal and define a vanity domain specific to your game. The universal OneLink link will then direct users via Android App Links, iOS Universal Links, and the defined URI scheme to the appropriate location based on the device that is used.

Here is an example of a OneLink link set up in AppsFlyer:

> https://bfgsdk.onelink.me/yryN/

### Additional Steps for Android

<details>
  <summary>Updating intent filters</summary>

Your Big Fish Producer will send you a code snippet of an intent filter to put into manifest file of your app. To complete setup for OneLink on Android, copy the intent-filter into the relevant ``<activity>`` on your AndroidManifest.xml file. The snippet contains the following values:

* The ``host`` value, provided by your Big Fish Producer.
* The four-character pathPrefix, an auto-generated value from the AppsFlyer portal that is unique to your game.

Here is an example of the code snippet for an intent filter:

```xml
<intent-filter android:autoVerify="true">
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="https"
    android:host="bfgsdk.onelink.me"
    android:pathPrefix="/yryN" />
</intentfilter>
```

</details>

## Testing Non-Organic Attribution Behavior

To perform testing for non-organic attribution, you must first set up your testing devices as follows.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>com.apple.developer.associated-domains</key>
    <array>
      <string>applinks:bfgsdk.onelink.me</string>
    </array>
  </dict>
</plist>
```

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

## Transitioning to AppsFlyer from another attribution vendor

Other attribution vendors report events manually through the Facebook SDK. However once you transition to AppsFlyer, you no longer need to report these events manually in your code base. Be sure to remove all instances of the following Facebook logging events:

* FBSDKAppEvents.logPurchase
* FBSDKAppEvents.logEvent
* FBSDKAppEvents.logPushNotificationOpen
* FBSDKAppEvents.activateApp

:::warning

Failure to remove these methods when AppsFlyer is enabled will result in duplicate logs and impact proper ad spend optimizations.

:::

## Additional Resources and Documentation

* Deep Linking with AppsFlyer and the BFG SDK
* [AppsFlyer Help Center](https://support.appsflyer.com/hc/en-us)
