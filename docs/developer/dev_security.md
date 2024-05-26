# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Integrate the Native iOS SDK

This section walks you through adding the Native iOS SDK to your game and setting up the most basic interactions required between your game and the BFG SDK.

If you're upgrading from a previous version of the Native iOS SDK, see [Upgrade to the Latest Version](./upgrade-iossdk).

:::info 

Ensure that you are targeting the correct minimum iOS version for your version of the BFG SDK. For more information, see [3rd Party Version Compatibility Charts](./compatibility-charts)

:::

## Download the BFG SDK

Download the most up-to-date version of the Native iOS SDK from Big Fish’s [GitHub release repo](https://github.com/bigfishgames-external/sdk-ios-releases/releases).  


## Modify the Info.plist settings

Make the following changes to the Info.plist file:

<details>
  <summary>Mobile Telemetry Services (MTS)</summary>

To support Big Fish reporting through Mobile Telemetry Services (MTS), add the following key-value pair to your Info.plist file. The “BFG_ENVIRON_TEST” is a String value type. This step is necessary to ensure that MTS data gets routed to the appropriate environment once the game goes live. Without this setting, you will see a warning on the Xcode and device consoles. 

```xml
<key>BFGEnviron</key>
<string>BFG_ENVIRON_TEST</string>
```

</details>

<details>
  <summary>AppIdentifierPrefix Setting</summary>

The SDK requires the ``AppIdentifierPrefix`` to be added to the game's Info.plist file. 

```xml
<key>AppIdentifierPrefix</key>
<string>${AppIdentifierPrefix}</string>
```

</details>

<details>
  <summary>Privacy Settings and Localized InfoPlist.strings</summary>

The four required privacy text settings (``NSCameraUsageDescription``, ``NSPhotoLibraryUsageDescription``, ``NSBluetoothAlwaysUsageDescription``, and ``NSBluetoothPeripheralUsageDescription``) can be localized by using localized Info.plists in Xcode.

There are five supported languages for the Permission strings located in the localized InfoPlist.strings files:

```xml title="EN"
"NSCameraUsageDescription" = "Used to take a profile picture.";
"NSPhotoLibraryUsageDescription" = "Used to choose a profile picture.";
"NSBluetoothAlwaysUsageDescription" = "Used to find, connect and transfer data between different devices.";
"NSBluetoothPeripheralUsageDescription" = "Used to find, connect and transfer data between different devices.";
```

```xml title="FR"
"NSCameraUsageDescription" = "Sert à prendre une photo pour le profil.";
"NSPhotoLibraryUsageDescription" = "Sert à choisir une photo pour le profil.";
"NSBluetoothAlwaysUsageDescription" = "Utilisé pour rechercher, connecter et transférer des données entre différents appareils.";
"NSBluetoothPeripheralUsageDescription" = "Utilisé pour rechercher, connecter et transférer des données entre différents appareils.";
```

```xml title="DE"
"NSCameraUsageDescription" = "Um ein Profilbild zu machen.";
"NSPhotoLibraryUsageDescription" = "Für die Auswahl eines Profilbildes.";
"NSBluetoothAlwaysUsageDescription" = "Damit können Geräte gefunden, miteinander verbunden und Daten übertragen werden.";
"NSBluetoothPeripheralUsageDescription" = "Damit können Geräte gefunden, miteinander verbunden und Daten übertragen werden.";
```

```xml title="JA"
"NSCameraUsageDescription" = "プロフィール写真の撮影に使用します。";
"NSPhotoLibraryUsageDescription" = "プロフィール写真の選択に使用します。";
"NSBluetoothAlwaysUsageDescription" = "異なるデバイス間でデータを検索、接続、転送するために使用されます。";
"NSBluetoothPeripheralUsageDescription" = "異なるデバイス間でデータを検索、接続、転送するために使用されます。";
```

```xml title="RU"
"NSCameraUsageDescription" = "Сделайте фото профиля.";
"NSPhotoLibraryUsageDescription" = "Выберите фото профиля.";
"NSBluetoothAlwaysUsageDescription" = "Используется для поиска, подключения и передачи данных между разными устройствами.";
"NSBluetoothPeripheralUsageDescription" = "Используется для поиска, подключения и передачи данных между разными устройствами.";
```

</details>

<details>
  <summary>Run plist_updater.py script</summary>

The plist_updater.py script whitelists most of Big Fish's third-party library domains in your Info.plist “App Transport Security” settings. It has one parameter, the full path to the Xcode project. The script will make a backup of the files it modifies.

Run it here: https://extsvn.bigfishgames.com/svn/bfglib/releases/tools/plist_updater.py

:::warning

Ensure that you download/copy the script with execute permissions. If the script is copied without execute permissions, it will not run.

:::

</details>

## Update Xcode Build Settings

<details>
  <summary>Validate Workspace setting</summary>

1. Navigate to the **Build Settings** tab in your Xcode project.
2. In the **Build Options** section, set "Validate Workspace" to **YES**.

</details>

<details>
  <summary>Swift Support</summary>

The iOS SDK uses Swift for some of its implementation, and you must enable Swift in Xcode.

:::info 

If your game already uses Swift, you might not need to make the below changes. However, we recommend that you review these settings and verify that they match your game's current settings.

:::

1. Navigate to the **Build Settings** tab in your Xcode project.
2. In the **Build Options** section, set "Always Embed Swift Standard Libraries" to **YES**.
3. In the **Linking** section, add an entry to the "Runpath Search Path" for **/usr/lib/swift @executable_path/Frameworks**

:::info 

The order of the entries in the “Runpath Search Paths” are important. "/usr/lib/swift" needs to be the first path in the list.

:::

4. In the **Packaging** section, set "Defines Module" to **YES**.
5. In the **Search Paths** section, add the following entries:

```
$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)
$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)
```

6. In the **Apple Clang - Language - Modules** section, set the "Enable Modules (C and Objective-C)" and "Enable Clang Module Debugging" options to **YES**

</details>

<details>
  <summary>Add Linker Flags</summary>

1. Navigate to the **Build Settings** tab in your Xcode project.
2. To support Rave, add **-ObjC** to "Other Linker Flags".
3. If you previously had **-lz** in "Other Linker Flags", you may now remove it.

</details>

## Add Required Frameworks and Libraries


<details>
  <summary>Apple Frameworks</summary>

The BFG SDK depends upon the following frameworks and libraries in the iOS Developer Library. Add them to the Frameworks directory before you build your project with the Native iOS SDK integrated.

:::info

Any frameworks below that are marked as Optional should still be present in your game's Xcode project. However, they must be set as Optional instead of Required.

:::

| **Framework / Lib** | **Status** | **Description** |
|---|---|---|
| **[Accounts.framework](https://developer.apple.com/reference/accounts)** | Required | Helps users access and manage their external accounts from within your app, without requiring them to enter login credentials. Required to support Rave. |
| **[AddressBook.framework](https://developer.apple.com/reference/addressbook)** | Required | Provides access to the centralized database for storing users' contacts. |
| **[AdSupport.framework](https://developer.apple.com/library/ios/#documentation/DeviceInformation/Reference/AdSupport_Framework/_index.html)** | Required | Provides applications with access to an identifier that can be used only for serving advertisements. |
| **[AuthenticationServices.framework](https://developer.apple.com/documentation/authenticationservices?language=objc)** | Optional | Use the Authentication Services framework to support Sign in with Apple. |
| **[CFNetwork.framework](https://developer.apple.com/library/mac/documentation/networking/conceptual/cfnetwork/Introduction/Introduction.html)** | Required | Provides a library of abstractions for network protocols. |
| **[CoreData.framework](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/CoreData_ObjC/)** | Required | Required for Rave integration. |
| **[CoreGraphics.framework](http://developer.apple.com/library/ios/#documentation/CoreGraphics/Reference/CoreGraphics_Framework/_index.html)** | Required | C-based API based on the Quartz advanced drawing engine. |
| **[CoreLocation.framework](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CoreLocation_Framework/)** | Required | Lets you determine the current location or heading associated with a device. |
| **[CoreTelephony.framework](http://developer.apple.com/library/ios/#documentation/NetworkingInternet/Reference/CoreTelephonyFrameworkReference/_index.html)** | Required | Features for obtaining information about a user’s home cellular service provider. |
| **[CoreText.framework](https://developer.apple.com/library/mac/documentation/Carbon/Reference/CoreText_Framework_Ref/_index.html)** | Required | API for laying out text and handling fonts. |
| **[Foundation.framework](http://developer.apple.com/library/ios/#documentation/Cocoa/Reference/Foundation/ObjC_classic/_index.html)** | Required | Defines the base layering of Objective-C classes. |
| **[GameKit.framework](http://developer.apple.com/library/ios/#documentation/GameKit/Reference/GameKit_Collection/_index.html)** | Required | Features for creating social games. |
| **[iAd.framework](http://developer.apple.com/library/ios/#documentation/UserExperience/Reference/iAd_ReferenceCollection/_index.html)** | Required | Required to support AppsFlyer. |
| **libc.tbd** | Required | Imports all your C methods. |
| **libc++.tbd** | Required | Required to support Crashlytics. |
| **libicucore.tbd** | Required | The core library for the International Components for Unicode open source project, which enables internationalization and globalization features. Required to support Rave. |
| **libsqlite3.tbd** | Required | SQLite dynamic library. Required to support Rave. |
| **libxml2.tbd** | Required | XML dynamic library. Required to support Rave. |
| **libz.tbd** | Required | A general compression library. |
| **[MobileCoreServices.framework](https://developer.apple.com/documentation/mobilecoreservices)** | Required | Defines the low-level types used in uniform type identifiers (UTIs). |
| **[OpenGLES.framework](http://developer.apple.com/library/ios/#documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html)** | Required | OpenGL for embedded systems. Provides classes to create 2D and 3D graphics. |
| **[Photos.framework](https://developer.apple.com/documentation/sirikit/photos)** | Optional | Search for and display photos, required by Facebook. |
| **[SafariServices.framework](https://developer.apple.com/documentation/safariservices)** | Optional | Provides support for programmatically adding URLs to the user's Safari reading list. Should be marked as "optional" (not "required"). **NOTE**: This framework is optional in the sense that added frameworks can be marked as "required" or "optional". Since this required framework did not exist in earlier but still supported iOS versions, you should mark it as "optional" after adding it in Xcode. |
| **[Security.framework](https://developer.apple.com/documentation/security)** | Required | Provides decryption support. |
| **[Social.framework](https://developer.apple.com/reference/social)** | Required | Integrates your app with supported social networking services. |
| **[StoreKit.framework](https://developer.apple.com/documentation/storekit)** | Required | Provides the classes to deliver In-App Purchase for iOS. |
| **[SystemConfiguration.framework](https://developer.apple.com/documentation/systemconfiguration)** | Required | Provides functionality to monitor the network state of iOS devices and detect network errors. |
| **[UIKit.framework](https://developer.apple.com/documentation/uikit)** | Required | Provides the classes to construct and manage the UI for iOS. |
| **[UserNotifications.framework](https://developer.apple.com/documentation/usernotifications)** | Optional | Provides checking if push notifications are enabled. |
| **[WebKit.framework](https://developer.apple.com/documentation/webkit)** | Required | Supports Apple's web technologies. |

</details>

<details>
  <summary>3rd Party Dynamic Frameworks</summary>

The BFG SDK ships with dynamic versions of all the 3rd party libraries it requires. All the following dynamic frameworks need to be added to your Xcode project either by dragging and dropping them into the Framework folder or by using the **+** button in the **Frameworks, Libraries, and Embedded Content** section under the **General** tab in Xcode.

The 3rd party frameworks are all located in the ThirdParty directory of the BFG SDK delivery package. The Facebook and Zendesk SDKs are comprised of multiple frameworks packaged in their subdirectories within the ThirdParty folder.

:::warning

Full support for the 3rd party frameworks is not expected until their respective features are integrated; however all frameworks need to be added to the project for the SDK to successfully link and run. At this step of the integration, none of the 3rd party SDKs are expected to be fully configured and set up in your game. 

:::

**General Third-Party Frameworks**

- AppsFlyerLib.xcframework
- openssl.xcframework
- RaveSocial.xcframework
- WebP.xcframework

**Facebook Frameworks**

- FBAEMKit.xcframework
- FBSDKCoreKit.xcframework
- FBSDKCoreKit_Basics.xcframework
- FBSDKLoginKit.xcframework
- FBSDKShareKit.xcframework

**Zendesk Frameworks**

- CommonUISDK.xcframework
- MessagingAPI.xcframework
- MessagingSDK.xcframework
- SDKConfigurations.xcframework
- SupportSDK.xcframework
- ZendeskCoreSDK.xcframework


</details>

<details>
  <summary>BFG SDK Frameworks</summary>

There are two versions of the bfg_iOS_sdk.xcframework, and only one of these versions can be linked with your app at a time:

- **Release**: Found in the Release Directory
- **Debug**: Found in the Debug Directory, this version enables the SDK’s debugging features.

The bfg_iOS_sdk.xcframework can be added to your Xcode project either by dragging and dropping them into the Framework folder or by using the **+** button in the **Frameworks, Libraries, and Embedded Content** section under the **General** tab in Xcode.

</details>

## Configure Framework Settings

<details>
  <summary>Verify Dynamic Frameworks are set to Embed & Sign</summary>

Dynamic frameworks need to be embedded in your game and code signed, or else they won't be packaged or usable in your game's build. It is important to double-check that each dynamic framework was correctly added to the project.

To verify that the frameworks were correctly added:

1. Select your game’s **Target** in the **Xcode Targets** window.
2. Select the **General** tab.
3. Scroll down to the **Frameworks, Libraries, and Embedded Content** section.
4. Look through the list of frameworks for each dynamic (non-Apple) framework you added to your project. Verify that each one is set to **Embed & Sign** in the **Embed** column.
5. Select the **Build Phases** tab and open the **Embed Frameworks** section.
6. Verify that the **Destination** drop-down is set to **Frameworks**.
7. Verify that all the added dynamic frameworks appear in the list.
8. For each dynamic framework, verify that the **Code Sign On Copy** box is checked.

</details>

<details>
  <summary>Add Framework search paths</summary>

After adding the bfg_iOS_sdk.xcframework to your project:

1. Open the **Build Settings** tab in Xcode.
2. Locate "Framework Search Paths".
3. Verify that the field has the correct path to the bfg_iOS_sdk.xcframework and all third-party dependencies.

The paths will vary depending on where the frameworks exist relative to the Xcode project. For example, if you downloaded the bfg_iOS_sdk.xcframework at the same level as your game's project file, the frameworks would be located at:

```
${PROJECT_DIR}/bfg_iOS_sdk/framework/Release
${PROJECT_DIR}/bfg_iOS_sdk/framework/ThirdParty
${PROJECT_DIR}/bfg_iOS_sdk/framework/ThirdParty/Facebook
${PROJECT_DIR}/bfg_iOS_sdk/framework/ThirdParty/Zendesk
```

For debug testing, you will need to build using the bfg_iOS_sdk debug xcframework. To use this framework for debugging builds:

1. Click the arrow to the left of **Frame Work Search Paths** to expand the search paths list.
2. Add the path to the debug framework location (it should be located in the Debug folder in the SDK package) by entering its location to the right of the Debug key.

</details>

<details>
  <summary>Add required resource bundles</summary>

To add the required resource bundles to your project:

1. Navigate to your project's **Built Target** and add:
  - bfgResourcesUniversal.bundle
  - RaveSocial.bundle
  - BigFishScenePack.bundle

Big Fish assets for branding can be found in the bfg_gamespecific_resources directory.

</details>

<details>
  <summary>Import Big Fish headers</summary>

All Native iOS SDK methods are made accessible to your game by adding ``#import <bfg_iOS_sdk/bfg_iOS_sdk.h>`` in your source files.

</details>

## Set up the BFG SDK config file

The BFG SDK config file, bfg_config.json provides the basic settings that will be used during the first and subsequent launches. The BFG SDK Sample App provides a template with default values that you can build upon for your project. To copy it into your project:

1. Navigate to the root folder of your unzipped Native iOS SDK.
2. Copy the config file, bfg_config.json from /examples/UIKitExample/Resources/bfglib_gamespecific_resources/bfg_config.json into application bundle.

To learn about the settings and configuration options in bfg_config.json, see the Configure the BFG SDK.

## Set Delegates 

The Native iOS SDK will communicate with your app using delegates and NSNotifications. Before you initialize ``bfgManager``, be sure to set all your Big Fish delegates (e.g. ``bfgManagerPauseResumeDelegate``).

The following example demonstrates an implementation of placements, pause/resume, deferred deep linking, and push notifications:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Set all of your delegates FIRST
  [bfgManager addPauseResumeDelegate:self];
}
```

**The bfgManagerPauseResumeDelegate Delegate** 

If you want to pause and resume your game when the BFG SDK is doing something that will obscure your game window (e.g., presenting an ad):

1. Call the ``bfgManager`` + ``(void) addPauseResumeDelegate: (id<bfgManagerPauseResumeDelegate >)`` delegate method.
2. Add a delegate to listen for pause/resume events from the BFG SDK.

**UIApplicationDelegate Wrapper Method Calls**

You will need to call the BFG SDK from many of the methods in your App Delegate for it to work properly. The calls to ``bfgManager`` mimic the names of the delegate calls.

Implement the following required method:

- ``bfgManager applicationOpenURL:options:``
 
**(Optional) Workaround for games locked in landscape orientation** 

:::warning

This workaround should only be used if your game is meant to be **locked** on Landscape mode. Do not use this if your game supports both Portrait and Landscape modes on iOS devices.

:::

A crash sometimes occurs for games that only support landscape orientation on an iPhone. The current fix is to add the following code to your ``application: supportedInterfaceOrientationsForWindow`` method inside your ``AppDelegate`` class.

```objectivec
- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(nullable UIWindow *)window
{
  UIViewController *viewWalker = window.rootViewController;
  while (viewWalker != nil)
  {
    if ([viewWalker isKindOfClass:[UIImagePickerController class]] && !viewWalker.isBeingDismissed)
    {
      return UIInterfaceOrientationMaskAll;
    }
    viewWalker = viewWalker.presentedViewController;
  }
  return UIInterfaceOrientationMaskLandscape;
}
```

## Initialize bfgManager

You should initialize ``bfgManager`` when your application finishes launching with your top view controller used for the game's drawing.

If your top view controller window is inside the AppDelegate, then you will use this call:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [bfgManager startWithLaunchOptions:launchOptions parentViewController:myRootViewController];
}
```

If your top view controller will not be ready until later, you will need to modify your ``AppDelegate`` with the following:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [bfgManager initWithLaunchOptions:launchOptions];
}
```

Then, add the following code when your main window is ready:

```objectivec
- (void)myViewControllerReady
{
  [bfgManager startWithParentViewController:myMainViewController];
}
```

## Strip invalid architectures

Big Fish distributes some dependencies with simulator architectures to accommodate testing with simulators in Xcode. Simulator architectures must be removed before uploading to Test Flight or the App Store; otherwise, the game will be rejected.

Before archiving your project into a .ipa for distribution, all the simulator architectures (i386 and x86_64) must be removed from each of the (dynamic) embedded frameworks in your project.

Use the framework/Scripts/strip-architectures.sh script (provided with the Native iOS SDK package) to ensure proper removal of the invalid architectures. Following the ``./strip-architectures`` command, enter a path to the fat file or the folder of the frameworks you need to strip architectures from.

```
$ cd core-ios-sdk/framework/Scripts
$ ./strip-architectures ../Debug/bfg_iOS_sdk.framework/bfg_iOS_sdk
$ ./strip-architectures ../Release/bfg_iOS_sdk.framework/bfg_iOS_sdk
$ ./strip-architectures ../ReleaseQA/bfg_iOS_sdk.framework/bfg_iOS_sdk
$ ./strip-architectures ../ThirdParty
```

If you do not run ``/b strip-architectures.sh`` to remove all the simulator architectures, you will still be able to archive your app and generate an .ipa, but it won't pass the Apple validation process due to a failed code signing. 

Once you run the script, you can continue testing your integration via Xcode on a device, but simulator support will be gone.

## Verify your integration

Once you’ve completed the setup for iOS, your project should have the following project folder structure. If you are missing any folders and/or files, you can copy the post-copy folder and all its contents from the BFG SDK Sample App into your own project.

| **Resource** | **Description** |
|---|---|
| **bfg_gamespecific_resources** | This folder contains a **bfgbranding_resources.zip** with Big Fish Assets. Games are required to have at least one Big Fish asset in their branding, and they can either be obtained from this zip file or from your Big Fish producer. |
| **examples** | Contains a fully working example project called UIKitExample that implements best practices on Big Fish SDK usage. There is also a templates directory with samples for **bfg_config.json** and **bfgLog.json**. |
| **framework/Release** | The release version of **bfg_iOS_sdk.xcframework** |
| **framework/Debug** | The debug version of **bfg_iOS_sdk.xcframework**. Use it in conjunction with the **bfgLog.json** to see verbose logs. |
| **framework/Resources** | The **bfgResourcesUniversal.bundle**, **BigFishScenePack.bundle** and **RaveSocial.bundle**. |
| **framework/Plugin** | The release and debug versions of the static **bfg_iOS_Crashlytics.framework**. |
| **framework/ThirdParty** | All the supported third party xcframeworks and frameworks. Note that these are dynamic frameworks that should be embedded and signed by your app. |
| **framework/Scripts** | Executable files for uploading symbols to Crashlytics and stripping simulator architectures from Facebook and Zendesk dependencies. |
| **release_notes.txt** | A plain text document with the current version number. |

## Using the SDK Debugging Logs

The BFG SDK's debug logging will only work when using a debug version of the bfg_iOS_sdk.framework with the bfgLog.json file included in your project. 

The bfgLog.json file contains a simple JSON structure consisting of a list of publicly accessible classes in the Native iOS SDK and a boolean value for each. Editing the boolean with ``true`` or ``false`` values will toggle the logging for the associated class. 

To turn on the debugging logs: 

1. Change the framework search path to reference the debug framework found in framework/Debug.
2. Navigate to your **Build Settings** and add a debug pre-compiler definition of ``BFGLIB_DEBUG``.
3. Add the bfgLog.json file to your project. The basic bfgLog.json file can be found in core-ios-sdk/bfg_source/bfgutils/.
4. Open the bfgLog.json file and edit the boolean value associated with any class you wish to enable logging for (``true`` enables logging, while ``false`` disables logging).
5. Run your application. Any debug logs for the classes enabled in the bfgLog.json file will be displayed in the console.

If you have correctly enabled debug logging, one of the first things you should see in the console output is a list of all the classes for which logging has been enabled. For example, enabling all the classes in the provided bfgLog file will result in the following being printed out:

```
Debug logging enabled for: (
  bfgAppManager,
  bfgBrandingViewController,
  bfgGameReporting,
  bfgGenericAlertView,
  bfgManager,
  bfgNetwork,
  bfgPurchase,
  bfgPurchaseObject,
  bfgPushNotificationManager,
  bfgRave,
  bfgRating,
  bfgSettings,
  bfgStrings,
  bfgutils
)
```
As you run the application, you should see log statements from each of the classes that were enabled. The logs will be in the format ``<class name> <method name> <log message>``. For example, if you enabled logging for ``bfgManager`` for the initial launch of the application, you will see the following message printed out in the console:

```
bfgManager isInitialLaunch is initiallaunch 1
```
