# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Identity Management & Player Authentication

:small_blue_diamond: **Tools to use:** Rave Social, BFG SDK

## What is Identity Management? 

**Identity management** is the process by which an app identifies the user. In casual games, this refers to the identity of the player who is playing a game, allowing Big Fish to track player activities, such as when someone launches the game, levels up or purchases an item. When a player logs into the game using an **authentication method**, they can engage in a secure and continuous gameplay experience across multiple devices. 

Games published by Big Fish use **Rave Social** (Rave) to track and manage players. Rave assigns a unique identifier to every player, even if they have not logged in to the game via an authentication method. This identifier, called a **Rave ID** follows the user through the lifetime of that player's account. Initially, the Rave ID is connected to an anonymous user and no personalized data is attached to the Rave ID. Once a player logs in to the game using an authentication provider (such as Facebook, Google, or SIWA), Rave connects the player's Rave ID to the chosen login method.

:::tip[Pre-Requisite]

Rave is integrated directly into the BFG SDK, and most of the set up is already completed. Prior to configuring Rave, you must first integrate the BFG SDK into your game code.

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

Rave includes support for Facebook, and requires the Facebook SDK to run correctly. While the Facebook SDK is integrated into the BFG SDK, you must add the Facebook SDK to your app's Gradle file.

:::note

Replace ``X.X.X`` with the appropriate version of the Facebook SDK integrated into your version of the BFG SDK. See **3rd Party Version Updates** for more information.

:::


```
implementation ('com.facebook.android:facebook-android-sdk:X.X.X')
```

</details>

### Additional Steps for iOS

<details>
  <summary>Update plist with Facebook values </summary>

:::note

If you are using **Unity**, we recommend that you use the **BFG Build Processor** to update the plist file automatically. _Unity games can safely skip this step_ unless you prefer to manually configure your project without the BFG Build Processor.

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
```

</details>


## Logging in with a 3rd Party Provider 

### Facebook

:::info

The Facebook SDK is automatically included as part of the BFG SDK. If you require any additional Facebook API calls in your game code, you likely do not need to import the Facebook SDK separately. 

For Unity games, you may need to import the Facebook Unity package if there is a feature that is not provided by the BFG SDK. In this case, avoid importing any framework files, as these will conflict with the SDK included in the BFG SDK. Instead, select only the wrapper files (not the frameworks) containing the features you need.

:::

### Google

### SIWA

## Merging Identities

Rave provides a unique identifier for every user. A user will always have one ID. That ID must be used to refer to the user both in the game code, as well as in the data collected from and about the user.

Rave IDs can handle merged identities, where anonymous accounts are merged due to:

- A user signing in on a new device
- A game that does not have cross-app login enabled
- The user signs out and back in on the same device

## Handling Cross-App Login

A cross app login occurs when a player logs in to one game published by Big Fish and then launches another game. In general, once a player logs in to one game, Rave will automatically log the player into all other Big Fish games on the device. In these cases, the current Rave ID and the last known Rave ID will be the same on launch.

:::info

You can optionally disable cross-app login in the Rave section of the BFG SDK config file, bfg_config.json. **Do not change this setting unless instructed to by your Big Fish producer.**

```json
"rave": {
    "RaveSettings.General.AutoCrossAppLogin" : "false"
}
```

:::

## Using App Data Keys (ADKs)
However, there are scenarios where the Rave ID between games and/or logins will not match. For example: 

- A player is logged into both "Game A" and "Game B". When the user logs out of "Game A," they want to remain logged in to "Game B".
- The player then logs back in to "Game A" with a different login. They remain logged in to "Game B" under the original login. 
- The player then installs and clicks to log in to "Game C". Rave will default to using the login method for "Game A" since it was the last used login method. 

In the above scenario, you may have multiple Rave IDs registered on the same device. If the Rave IDs do not match, you must resolve it in your game code. In this case:

- Both IDs must be checked for save data.
- If only one ID has save data, that data should be associated with the new ID.
- If both IDs have save data, a conflict window must be displayed that provides the user with adequate information to choose their preferred save state.



Rave ID changes can also occur due to a player logging in with an authentication method already associated with another ID. This case must be handled the same way as cross app login. Both the anonymous and authenticated IDs must be checked for data, and a conflict window must be displayed if necessary.

The final time an ID change occurs is when a player logs out of an authenticated account, the listener will report a log out. In this case, the player must be taken to the start of the game with no data associated with the new ID.
