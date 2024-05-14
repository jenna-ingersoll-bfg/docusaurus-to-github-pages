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

:::info

Replace ``X.X.X`` with the appropriate version of the Facebook SDK integrated into your version of the BFG SDK. See **3rd Party Version Updates** for more information.

:::


```
implementation ('com.facebook.android:facebook-android-sdk:X.X.X')
```

</details>

### Additional Steps for iOS

<details>
  <summary>Update plist with Facebook values </summary>

:::info

If you are using **Unity**, we recommend that you use the **BFG Build Processor** to update the plist file automatically. _Unity games can safely skip this step_ unless you prefer to manually configure your project without the BFG Build Processor.

This step is required for all games using the **Native iOS** SDK without Unity.

:::

Add the following values to your game's plist file:

**CFBundleURLTypes**
> A list of URL schemes supportd by the app. You will need to add at least two values: the Facebook URL scheme and the Bundle ID. 
>
> The **Facebook URL scheme** is based on your FacebookAppID value, preceded by the letters "fb". For example, if your FacebookAppID is "1234", then your Facebook URL scheme is "fb1234". 
>
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

**FacebookAppID**
> A unique key given to every app created for Facebook. This value is required when using Facebook authentication. You can get the ``FacebookAppID`` from your Big Fish producer. 

```xml
<key>FacebookAppID</key>
<string>{facebook_app_id}</string>
```

**FacebookDisplayName**
> The user facing name of your app on Facebook. This value is required when using Facebook authentication.

```xml
<key>FacebookDisplayName</key>
<string>{PRODUCT_NAME}</string>
```

**LSApplicationQueriesSchemes**
> The URL schemes the app is able to launch from within your game. Each app is limited to 50 distinct query schemes and Facebook requires 4 of these schemes to function properly. 

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>fbapi</string>
  <string>fb-messenger-api</string>
  <string>fbauth2</string>
  <string>fbshareextension</string>
</array>
```

**FacebookSKAdNetworkReportEnabled**
> A boolean value to turn on or off Facebook's SKAdNetwork reporting. Games published by Big Fish use AppsFlyer, which requires that Facebook's SKAdNetwork reporting is turned off. You must disable this setting in your plist.

```xml
<key>FacebookSKAdNetworkReportEnabled</key>
<false/>
```

**FacebookAutoLogAppEventsEnabled** and **FacebookAdvertiserIDCollectionEnabled** (Optional)
> A boolean value to turn on or off Facebook reporting. By default, the BFG SDK programmatically disables the automatic reporting done by the Facebook SDK, in lieu of Big Fish's reporting services. Because of this, you may see warnings in your logs that Facebook reporting is disabled. _These warnings can safely be ignored._ However, if you want to clean up your log and remove these warnings, you can set these values to ``FALSE``.

```xml
<key>FacebookAutoLogAppEventsEnabled</key>
<string>FALSE</string>
<key>FacebookAdvertiserIDCollectionEnabled</key>
<string>FALSE</string>
```

</details>

## Configuring Rave Settings

Several configuration settings can be assigned in the BFG SDK config file, bfg_config.json. To add or modify these settings, add them to the Rave section:

```json
"rave" : {
  "RaveSettings.General.ApplicationID" : "<your Rave application ID>",
  "RaveSettings.General.ServerURL" : "https://client.rave-api.com",
  "RaveSettings.General.AutoCrossAppLogin": 1
}
```

The most commonly used configuration settings are:

**RaveSettings.General.ApplicationID**
> The Rave application ID, provided by your Big Fish producer

**RaveSettings.General.ServerURL**
> The Rave Server URL, start with https://. The ``ServerURL`` is is set by default and should not be changed.

**RaveSettings.General.LogLevel**
> Allows the developer to control the amount of debug information output. This can be set to "error", "verbose", and "debug" for increasing levels of information.

**RaveSettings.General.AutoCrossAppLogin**
> Enables your app to log in to games based on other game logins on the device. This should always be set to ``true`` or ``1`` unless otherwise directed by your Big Fish producer.

**RaveSettings.General.ContactsUpdateInterval**
> Controls how often the friends cache is updated. The time is set in seconds.

For a full list of available settings, see [Available Settings (Android)](https://bf-docs.ravesocial.co/android.html?#available-settings) ::upper-right-arrow or [Available Settings (iOS)](https://bf-docs.ravesocial.co/ios.html#available-settings) ::upper-right-arrow in Rave's documentation.

### Overriding Rave's Default Settings

The BFG SDK automatically overrides Rave's configuration settings with default settings that are most commonly used for our games. 

:::warning

The following code sample details the overrides performed by the BFG SDK. Do not change these settings without first discussing the proposed changes with your Big Fish producer. 

:::

```json
"rave" : {
  "RaveSettings.General.ServerURL" : "https://client.rave-api.com",
  "RaveSettings.General.ConfigUpdateInterval" : "3600",
  "RaveSettings.General.ContactsUpdateInterval" : "21600",
  "RaveSettings.General.AllowForceDisconnect" : "false",
  "RaveSettings.General.AutoCrossAppLogin" : 1,
  "RaveSettings.General.ThirdPartySource" : "bigfishgames",
  "RaveSettings.General.AutoInstallConfigUpdates" : "true",
  "RaveSettings.General.LogLevel" : "Error",
  "RaveSettings.IOS.ApplicationGroupIdentifier" : "group.com.bigfishgames"
}
```

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
```objectivec
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

```objectivec
Coming soon!
```
  </TabItem>
</Tabs>

### Customizing Scene Packs

:::info 

The default scene pack packaged with the BFG SDK is configured with everything you need to create your game, and rarely requires any modifications. Do not customize the scene packs without approval from your Big Fish producer.

:::

In the event the default scene pack does not fit your needs, you can customize it. Select your platform below to learn how:

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

- **SUSI**: Sign in with your Big Fish account
- **Facebook**: Log in with your Facebook account
- **Google**: Log in with your Google account
- **Sign In With Apple (SIWA)**: Log in with your Apple ID (iOS only)

The Rave ID will remain the same no matter which authentication method is used. If a player logs in using a different authentication method, then the Rave ID will be attached to both authentication methods. 

To determine whether the current user is logged in (or "authenticated"), call ``bfgRave.isCurrentAuthenticated`` in the BFG SDK. If this method returns ``NO`` or ``FALSE``, your user is a guest and has not logged into the game with a 3rd party authentication provider.

### Sign in with Facebook 

:::info

The Facebook SDK is automatically included as part of the BFG SDK. If you require any additional Facebook API calls in your game code, you likely do not need to import the Facebook SDK separately. 

For Unity games, you may need to import the Facebook Unity package if there is a feature that is not provided by the BFG SDK. In this case, avoid importing any framework files, as these will conflict with the SDK included in the BFG SDK. Instead, select only the wrapper files (not the frameworks) containing the features you need.

:::

When developing games, you can choose to enable **Facebook Login**, which allows your players to authenticate using their Facebook username and password. Using Facebook authentication in your game requires additional setup: 

<details>
  <summary>Add Facebook permissions to your configuration</summary>

Add the necessary Facebook permissions to your Rave configuration in the BFG SDK config file, bfg_config.json. For games that use Facebook social features (such as friends), use the following permissions: 

```json
"rave": {
  "RaveSettings.Facebook.ReadPermissions" : "public_profile,email,user_friends"
```

Games that **do not** use Facebook social features should use the minimum required permissions, as follows:

```json
"rave": {
  "RaveSettings.Facebook.ReadPermissions" : "public_profile,email"
```
</details>

<details>
  <summary>Set Limited Login (iOS only)</summary>

Due to Apple's tracking and privacy regulations, Facebook allows two different types of logins for players on iOS devices:

- A **Classic Login** allows your app the ability to access (with Facebook approval and user consent) certain Facebook data about a player. This data often improves the player's experience in your app and lets them use advanced features, such as engaging with friends or creating a gaming profile. Classic Login mode utilizes an oAuth 2.0 Access Token which supports Graph API queries.
- A **Limited Login** shares only the essential data required for a player to log into Facebook. This data may include a player's name, profile pic, and (optionally) friend lists or email address. Limited Login mode utilizes a JSON Web Token, which does not support Graph API queries.

If a player opts out of App Tracking Transparency (ATT), your game **must** log them in using Limited Login. Limited login mode is defined in the BFG SDK config file, bfg_config.json, as follows:

```json
"rave": {
  "RaveSettings.Facebook.LimitedLoginTracking" : true
```

:::info

As a best practice, we recommend that you use **Classic Login** mode when you have enabled social features in your game. For all other games that do not use social features, we recommend using **Limited Login** mode.

:::

To identify or change the login mode any time after your game is initialized, use the ``bfgRave enableFBClassicLoginMode`` method.

</details>

### Sign in with Apple (SIWA) - iOS Only

:::tip[Pre-Requisite]

You must use Xcode 11 or higher to enable SIWA in your game.

:::

When developing games for iOS, you can choose to enable **Sign in with Apple (SIWA)**, which allows your players to authenticate using an Apple ID. SIWA support is integrated directly into the Rave SDK, and you can enable it using the Rave SDK or BFG SDK. 

In order to test SIWA, your game will need to include the SIWA entitlement. Big Fish will automatically add the SIWA entitlement into your game during our [build and release](./build-release) process. 

:::warning

Before submitting a build to Big Fish, make sure that any entitlements that you add manually, including the SIWA entitlement, are removed. 

:::

If you wish to use SIWA in a build outside of a Big Fish environment (such as a local or test build), you will need to add the SIWA entitlement file manually. To do so: 

1. Verify that ``AuthenticationServices.framework`` and ``Photos.framework`` are included in your game. If you use the BFG Build Processor in Unity, then these frameworks are automatically added for you.
2. In Xcode, select your project, then select your target. 
3. Navigate to the **Signing & Capabilities** tab.
4. Click on the **+ Capability** button in the upper left corner.
5. Either enter "Sign in With Apple" into the search bar, or scroll down until you find **Sign In With Apple**. Double-click on **Sign in With Apple**.

If you have multiple targets, repeat these steps for each one.

The following code sample shows an example entitlements file that enables SIWA:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>com.apple.developer.applesignin</key>
  <array>
    <string>Default</string>
  </array>
</dict>
</plist>
```

:::info

For Unity games, you can automate the configuration of SIWA (and other entitlements) by configuring the **BFG Build Settings** to use an Entitlements file. 

:::

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

## Receiving Rave Notifications

The BFG SDK includes the ability to receive and track events that occur in Rave. The process to set up notifications depends on which BFG SDK you are using. Select your SDK below for more information:

<details>
  <summary>Unity SDK </summary>

To listen for Rave notifications, you first need to register to observe any of the Rave notifications defined in ``bfgCommon.cs``: 

```csharp
private void Start()
{
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_READY);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_PROFILE_FAILED_WITH_ERROR);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_PROFILE_SUCCEEDED);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_PROFILE_CANCELLED);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_SIGN_IN_COPPA_TRUE);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_SIGN_IN_COPPA_FALSE);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_SIGN_IN_CANCELLED);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_SIGN_IN_SUCCEEDED);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_SIGN_IN_FAILED_WITH_ERROR);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_USER_DID_LOGIN);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_USER_DID_LOGOUT);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_USER_LOGIN_ERROR);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_CHANGE_DISPLAY_NAME_DID_SUCCEED);
    NotificationCenter.Instance.AddObserver(rave_callback, bfgCommon.BFG_RAVE_CHANGE_DISPLAY_NAME_DID_FAIL_WITH_ERROR);
}

// Triggered when the notification is received
public void rave_callback(string notification)
{
    Debug.Log ("rave_callback: notification=" + notification);
}
```

If you need unique callbacks per notification type, you can define them as follows:

```csharp
private void Start()
{
  NotificationCenter.Instance.AddObserver(RaveUserDidLogin, bfgCommon.BFG_RAVE_USER_DID_LOGIN);
}

private void RaveUserDidLogin(string notification)
{
  if(raveReady)
  {
    Debug.Log("BFG_RAVE_USER_DID_LOGIN notification received: notification payload= " + notification);
  }
}
```

(iOS Only) Next, you need to set the delegate to receive callbacks:

1. Open the imported file, com.bfg.sdk/Runtime/Plugins/iOS/BFGUnityAppController.mm
2. In BFGUnityAppController.mm, add the following code to the ``didFinishLaunchingWithOptions`` method before initializing the BFG SDK:

```csharp
extern "C"
{
  void BfgRaveDelegateWrapper__setRaveDelegate();
  void BfgRaveDelegateWrapper__setRaveReadyListener();
  // Add this line if you registed the external callback for login state changes
  void BfgRaveDelegateWrapper__setupLoginStatusWithExternalCallback();
  // Add this line if your game supports Rave ADK
  void BfgRaveDelegateWrapper__setRaveAppDataKeyDelegate
}
-(BOOL)application:(UIApplication*) application didFinishLaunchingWithOptions:(NSDictionary*) options
{
    ...
    BfgRaveDelegateWrapper__setRaveDelegate();
    BfgRaveDelegateWrapper__setRaveReadyListener();
    // Add this line if you registed the external callback for login state changes
    BfgRaveDelegateWrapper__setupLoginStatusWithExternalCallback();
    // Add this line if your game supports Rave ADK
    BfgRaveDelegateWrapper__setRaveAppDataKeyDelegate
    ...
    // Initialize the Big Fish SDK here
    ...
    return YES;
}
```

</details>

<details>
  <summary>Native Android SDK</summary>
  
For your game to receive notifications about Rave status changes or error events, you need to define a class that implements the ``bfgRaveDelegate``. The ``bfgRaveDelegate`` provides an interface for implementing numerous Rave SDK callback methods. The BFG SDK has basic handling for all of these events, but you need to add custom handling for these scenarios in your game code.

```java
import com.bigfishgames.bfglib.bfgreporting.bfgRave;
private class RaveDelegate implements bfgRave.bfgRaveDelegate {
  @Override
  public void bfgRaveUserLoginError(Exception e) {\}
  @Override
  public void bfgRaveSignInCOPPAResult(boolean b) {\}
  @Override
  public void bfgRaveSignInCancelled() {}
  @Override
  public void bfgRaveSignInSucceeded() {}
  @Override
  public void bfgRaveUserDidLogin(bfgRave.LoginDetails details) {}
  @Override
  public void bfgRaveUserDidLogout() {}
  @Override
  public void bfgRaveProfileFailedWithError(Exception e) {}
  @Override
  public void bfgRaveProfileSucceeded() {}
  @Override
  public void bfgRaveProfileCanceled() {}
  @Override
  public void bfgRaveChangeDisplayNameDidSucceed() {}
  @Override
  public void bfgRaveChangeDisplayNameDidFailWithError(Exception e) {}
  @Override
  public void bfgRaveSignInFailedWithError(Exception e) {}
}
```

The BFG SDK automatically receives login status change events from the Rave SDK and will call your overridden ``bfgRaveDelegate`` methods:

- bfgRaveUserLoginError
- bfgRaveUserDidLogin
- bfgRaveUserDidLogout

If you also want to set an external listener, use the ``bfgRave.setupLoginStatusCallbackWithExternalCallback(yourCallback)`` method. This will pass the ``RaveLoginStatus`` object and the ``RaveException`` to your external callback method every time the ``onLoginStatusChanged`` method is triggered.

Be aware that the external listener will be called AFTER your ``bfgRaveDelegate`` override is called.

</details>

<details>
  <summary>Native iOS SDK</summary>

To receive notifications, you need to set the ``bfgRave`` delegates _before_ Rave is initialized. To do so, call ``bfgRave [listenForRaveReady:]`` and use the callback to set the necessary ``bfgRave`` delegates:

```objectivec
[bfgRave listenForRaveReady:^(NSString * _Nullable raveId, NSError * _Nullable error) {
    if (!error)
    {
        [bfgRave setDelegate:self];
    }
}];
```

From there, you can set up your notifications:

```objectivec
#pragma mark - bfgRaveDelegate

- (void)bfgRaveProfileSucceeded 
{ 
  // Enter code for each notification. Example:
  // BFGUIKitExampleLog(@"Rave profile updated successfully.");
  // [self updateCurrentRaveID];
  // self.outputTextView.text = @"Rave profile updated successfully.";
}

- (void)bfgRaveProfileCancelled { }
- (void)bfgRaveProfileFailedWithError:(NSError *)error { }
- (void)bfgRaveSignInSucceeded { }
- (void)bfgRaveSignInCOPPAResult:(BOOL)passedCOPPA { }
- (void)bfgRaveSignInCancelled { }
- (void)bfgRaveSignInFailedWithError:(NSError *)error { } 
- (void)bfgRaveUserDidLogin { }
- (void)bfgRaveUserDidLogout { }
- (void)bfgRaveUserLoginError:(NSError *)loginError { } 
- (void)bfgRaveChangeDisplayNameDidSucceed { }
- (void)bfgRaveChangeDisplayNameDidFailWithError:(NSError *)error { }
```

</details>


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

