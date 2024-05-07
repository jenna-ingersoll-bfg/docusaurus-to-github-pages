# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Identity Management & Player Authentication

:small_blue_diamond: **Tools to use:** Rave Social, BFG SDK

## What is Identity Management? 

**Identity management** is the process by which an app identifies the user. In casual games, this refers to the identity of the player who is playing a game, allowing Big Fish to track player activities, such as when someone launches the game, levels up or purchases an item. When a player logs into the game using an **authentication method**, they can engage in a secure and continuous gameplay experience across multiple devices. 

Games published by Big Fish use **Rave Social** (Rave) to track and manage players. Rave assigns a unique identifier to every player, even if they have not logged in to the game via an authentication method. This identifier, called a **Rave ID** follows the user through the lifetime of that player's account. Initially, the Rave ID is connected to an anonymous user and no personalized data is attached to the Rave ID. Once a player logs in to the game using an authentication provider (such as Facebook, Google, or SIWA), Rave connects the player's Rave ID to the chosen login method.

:::tip[Pre-Requisite]

Rave is integrated directly into the BFG SDK, and most of the functionality is already set up for you. Prior to configuring Rave, you must first integrate the BFG SDK into your game code.

:::

## Enabling Rave

Enable Rave in the BFG SDK config file, bfg_config.json:

```json
"rave": {
    "RaveSettings.General.ApplicationID" : "<your Rave application ID>"
}
```

:::warning

You must enable Rave in the BFG SDK using ``ApplicationID``. Without this setting, the BFG SDK will crash upon initialization. You can get the ApplicationID from your Big Fish producer.

:::

### Additional Steps for Android

<details>
  <summary>Add Facebook SDK to your app's Gradle file</summary>

Rave includes support for Facebook, and requires the Facebook SDK to run correctly. While the Facebook SDK is integrated into the BFG SDK, you must add the Facebook SDK to your app's Gradle file, build.gradle as follows:

```
implementation ('com.facebook.android:facebook-android-sdk:X.X.X')
```

:::info

Replace ``X.X.X`` with the appropriate version of the Facebook SDK integrated into your version of the BFG SDK. See **3rd Party Version Updates** for more information.

:::

</details>

### Additional Steps for iOS

<details>
  <summary>Update plist with Facebook values </summary>

:::info

If you are using **Unity**, we recommend you use the **BFG Build Processor** to update the plist file automatically. _Unity games can safely skip this step_ unless you prefer to manually configure your project without the BFG Build Processor.

This step is required for all games using the **Native iOS** SDK without Unity.

:::

Add the following values to your game's plist file:

- The **FacebookAppID** is required for Facebook authentication. You can get the ``FacebookAppID`` from your Big Fish producer. 

```xml
<key>FacebookAppID</key>
<string>{facebook_app_id}</string>
```

- The Facebook URL scheme **CFBundleURLTypes** requires two strings: ``CFBundleURLSchemes`` and the ``PRODUCT_BUNDLE_IDENTIFIER``. CFBundleURLSchemes is based on your FacebookAppID value, preceded by the letters "fb". For example, if your FacebookAppID is 1234, then fb1234 would be your Facebook URL scheme. You can get the ``PRODUCT_BUNDLE_IDENTIFIER`` from your Big Fish producer. 

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>fb{facebook_app_id}</string>
      <string>${PRODUCT_BUNDLE_IDENTIFIER}</string>
    </array>
  </dict>
</array>
```

- The **FacebookDisplayName** is a textual identifier required by Facebook.

```xml
<key>FacebookDisplayName</key>
<string>{PRODUCT_NAME}</string>
</details>
```

## Logging in with a 3rd Party Provider 

### Facebook

### Google

### SIWA

## Merging Identities
