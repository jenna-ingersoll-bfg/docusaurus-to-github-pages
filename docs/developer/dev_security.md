# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Identity Management & Player Authentication

:small_blue_diamond: **Tools to use:** Rave Social, BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

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

**FacebookAppID**
> A unique key given to every app created for Facebook. This value is required when using Facebook authentication. You can get the ``FacebookAppID`` from your Big Fish producer. 

```xml
<key>FacebookAppID</key>
<string>{facebook_app_id}</string>
```

**CFBundleURLTypes**
> A list of URL schemes supportd by the app. You will need to add at least two values: the Facebook URL scheme and the Bundle ID. 
> The **Facebook URL scheme** is based on your FacebookAppID value, preceded by the letters "fb". For example, if your FacebookAppID is "1234", then your Facebook URL scheme is "fb1234". 
> The **Bundle ID** is a unique key created for your game. You can get the Bundle ID from your Big Fish producer.

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

**FacebookDisplayName**
> The user facing name of your app on Facebook. This value is required when using Facebook authentication.

```xml
<key>FacebookDisplayName</key>
<string>{PRODUCT_NAME}</string>
```

</details>

## Configuring the Login UI

Both the BFG SDK and the Rave SDK provides scene packs that contain all of the UI necessary to enable authentication within a game.  The available scenes are:

- Login
- Account Info
- Create Account

### Using the BFG SDK scene packs

The following code demonstrates how to use the BFG SDK to display the Rave login scene:

<Tabs>
  <TabItem value="unity" label="Unity" default>
```csharp
public void raveSignin(View v) {
  Rave.sharedInstance().presentSignIn(this);
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">
```java
// Origin of reporting for Authentication Flow (normally the app name)
private static final String SAMPLE_ORIGIN = "bfgSampleApp";

public static void toggleRaveLogin() {
  bfgRave.sharedInstance().presentSignIn(getParentViewController(), SAMPLE_ORIGIN);
}
```
  </TabItem>
  <TabItem value="ios" label="Native iOS">
```c
- (IBAction)presentSignIn:(id)sender
{
    [bfgRave presentSignInWithOrigin:NSStringFromClass(self.class)];
} 
```
  </TabItem>
</Tabs>

### Using the Rave SDK scene packs

The following code demonstrates how to use the Rave SDK to display the login scene:

<Tabs>
  <TabItem value="unity" label="Unity" default>
```csharp
RaveLoginScene loginScene = new RaveLoginScene(activity);
loginScene.setXmlResourceFileName("LoginScene.xml");
loginScene.setListener(new BigFishSignUpListener() {
  @Override
  public void onSceneComplete(RaveCallbackResult result, BigFishSignUpData signUpData, RaveException exception) {
    // Handle the RaveCallbackResult
    switch (result) {
      case RESULT_CANCELED:
        ...
      break;
      case RESULT_ERROR:
        ...
      break;
      case RESULT_SUCCESSFUL:
        ...
      break;  
    }
  }
});
try {
  loginScene.show();
} 
catch (Exception e) {
  // Handle any exception that are thrown when attempting to show the loginScene
  ...
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">
```java
Coming soon!
```
  </TabItem>
  <TabItem value="ios" label="Native iOS">
```c
Coming soon!
```
  </TabItem>
</Tabs>

### Customizing Scene Packs

In the event the default scene pack does not fit your needs, you can customize it. Select your platform below to learn how.

:::info 

The default scene pack packaged with the BFG SDK is configured with everything you need to create your game, and rarely requires any modifications. Do not customize the scene packs without approval from your Big Fish producer.

:::

<details>
  <summary>Android</summary>

1. Navigate to the bfgLib-release.aar file.
2. Unzip bfgLib-release.aar. 
  - On Windows, simply change the extension to .zip and unzip the file normally. 
  - On Mac, use an unarchiver to unzip the file.
3. After unzipping the aar file, locate all the xml files in the new bfgLib-release/assets/resources/default directory. You can either replace the entire default folder or navigate inside it to replace an individual xml file.
4. After replacing any files, run the following command to recreate the aar file with the modified bfgLib-release directory:

```
jar cvf bfgLib-release.aar -C bfgLib-release/
```

</details>

<details>
  <summary>iOS</summary>

1. In Xcode, navigate to the BigFishScenePack.bundle file.
2. Right-click on BigFishScenePack.bundle and show its contents.
3. Navigate to the image or fonts folder located in /assets/resources/default
4. Replace any image or font files you want to customize.

</details>


## Logging in with a 3rd Party Provider 

The first time a Big Fish game is launched on a device, an anonymous Rave ID is generated. This Rave ID is shared between all Big Fish games on the device. Once an anonymous player logs in via a 3rd party authentication provider, Rave automatically attaaches the anonymous Rave ID to the authenticated account. 

Big Fish currently supports the following 3rd party authentication methods:

- Big Fish ID
- Facebook
- Google
- Sign In With Apple (SIWA)

The Rave ID will remain the same no matter which authentication method is used. If a player logs in using a different authentication method, then the Rave ID will be attached to both authentication methods. 

To determine whether the current user is logged in (or "authenticated"), call ``bfgRave.isCurrentAuthenticated`` in the BFG SDK. If this method returns ``NO`` or ``FALSE``, your user is a guest and has not logged into the game with a 3rd party authentication provider.

### Facebook

:::info

The Facebook SDK is automatically included as part of the BFG SDK. If you require any additional Facebook API calls in your game code, you likely do not need to import the Facebook SDK separately. 

For Unity games, you may need to import the Facebook Unity package if there is a feature that is not provided by the BFG SDK. In this case, avoid importing any framework files, as these will conflict with the SDK included in the BFG SDK. Instead, select only the wrapper files (not the frameworks) containing the features you need.

:::

### Google

### SIWA

## Tracking Player Save States

The Rave ID must be used by all games to track each player's save state. In some cases, there will be conflicts between the data associated with an anonymous ID and the data associated with an authenticated login, such as Facebook, Google or SIWA. These conflicts typically occur when a user logs in after playing a game on a different device, or when cross-app login is disabled. 

If there is a conflict, the game must give the player an option to choose which save state they'd like to maintain. To do so, your game must display a conflict dialogue that provides the player with ample information on what each save contains. From there, the player will choose, and the game will restore the selected save point.

The BFG SDK provides a number of methods in the ``bfgRave`` class to track Rave IDs for player activity.  For more information, see:

- BFGSDK.bfgRave Class Reference (Unity)
- bfgRave Class Reference (Native Android)
- bfgRave Class Reference (Native iOS)

## Merging Identities

Rave creates a new Rave ID for each anonymous (or "guest") player session. Once an anonymous player logs in via a 3rd party provider (such as Facebook, Google or SIWA), the Rave ID is merged into the authenticated account. The player's Rave ID is used to refer to the user both in the game code, as well as in the data collected from and about the user.

There will be times when a user with an anonymous Rave ID logs in to an account that already has a Rave ID associated with it. Such cases include:

- A player signs in to a game on a new device (at game launch, each device will give the player a new Rave ID before they log in)
- A player opens two different games on their device, and the games do not have cross-app login enabled. Each game will assign the player a new Rave ID.
- A player signs out of a game and logs back in on the same device. Each log in will assign the player a new Rave ID. 

In these cases, once a player logs in to the game, Rave will add the current anonymous Rave ID to a list of **merged IDs**. A single player's account will include a list of all anonymous Rave IDs that have been merged with it. To obtain a list of all merged IDs associated with a player's account, use the ``RaveUsersManager.fetchIdentities`` method of the Rave API.

:::info

Once a Rave ID has been merged with a player's account, the Rave ID can no longer be used as an account by itself. Any attempt to treat a merged ID as an account or request data about a merged ID will result in an error.

:::

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

## Getting COPPA Compliance Status

If you are in the US region, you can get the status of the Children’s Online Privacy Protection Rule (COPPA) compliance through the Rave SDK. To do so, either:

1. Listen for the ``BFG_RAVE_SIGN_IN_COPPA_TRUE`` and ``BFG_RAVE_SIGN_IN_COPPA_FALSE`` notifications. This Rave authentication notification is sent whenever a login event occurs; and/or
2. Implement the delegate call for ``bfgRaveSignInCOPPAResult`` in the BFG SDK. If ``passedCOPPA`` is ``NO``, then the user is under 13.

