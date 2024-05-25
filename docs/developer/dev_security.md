# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Integrate the BFG SDK

This section walks you through adding the BFG SDK to your game and setting up the most basic interactions required between your game and the BFG SDK.

If you're upgrading from a previous version of the BFG SDK, see [Upgrade to the Latest Version](./upgrade).

The steps for integrating the BFG SDK are unique for the SDK you are using. Select your SDK below:

- [Unity SDK](#unity)
- [Native iOS SDK](#ios)
- [Native Android SDK](#android)

## Unity SDK Integration {#unity}

:::info

Ensure that you are using a compatible version of Unity for your version of the BFG SDK. For more information, see [3rd Party Version Compatibility Charts](./compatibility-charts).

:::

**Add the Unity SDK with Unity Package Manager (v10.6 and later)**

Newer releases of the BFG SDK allow you to integrate and upgrade the Unity SDK through the Unity Package Manager (UPM).

To add the Unity SDK to the UPM:

1. Download the latest release, unity-sdk-XX.X.X.tgz from Big Fish’s [GitHub release repo](https://github.com/bigfishgames-external/sdk-unity-releases/releases).  
2. Extract the contents of the downloaded file, unity-sdk-XX.X.X.tgz.
3. Open the extracted contents and locate the file, com.bfg.sdk-XX.X.X-upm.tgz.
4. Copy the file com.bfg.sdk-XX.X.X-upm.tgz to a location on your machine where you would like Unity to import it from.
5. Open Unity and navigate to **Window > Package Manager**.
6. In the **Package Manager** window, click the **+** button in the upper-left corner.
7. Select **Add package from tarball** and select the Unity SDK tarball file you copied earlier. Unity will automatically re-import it and compile once selected.
8. Navigate to your Packages list. You will see ``[BFG] SDK`` in your Packages list, pointing to the version you downloaded.


**Import the com.bfg.sdk Package (v10.5 and earlier)**

Integrate the Unity SDK by downloading and copying the Unity SDK com.bfg.sdk package into your project.

1. Download the latest unity-sdk-XX.X.X.tgz file from Big Fish’s [GitHub release repo](https://github.com/bigfishgames-external/sdk-unity-releases/releases).
2. Extract the contents of the downloaded file, unity-sdk-XX.X.X.tgz. 
3. Open the extracted contents and locate the folder, com.bfg.sdk.
4. Close Unity (this is more of a recommendation than a requirement).
5. Copy the com.bfg.sdk folder into your project's **Packages** folder. The result should be located at: [PROJECT ROOT]/Packages/com.bfg.sdk.

**Open the Imported Package (v10.5 and earlier)**

Some of the 3rd party SDKs required for game development handle their dependencies through an external and/or proprietary dependency manager. When you first open your imported Unity project, these external managers may ask you to resolve dependencies and add configuration files to your project.

**Receive Native SDK event notifications in Unity**

The Unity SDK is a wrapper for the native Android and iOS SDKs, meaning all SDK event notifications are dispatched at the native SDK layer and sent to the Unity layer.

In order for your Unity SDK NotificationCenter event listeners to be called when a BFG SDK event occurs:

1. Open your bootstrap Unity Scene.
2. Add a GameObject to the scene and name it **PersistentUnityMessageHandler**.
3. Attach the **Persistent Unity Message Handler (Script)** component to the GameObject you just created. This component will automatically add the **Unity Message Handler (Script)** and the **[DontDestroyOnLoad]** attribute to your game object, so it will persist between scene changes.

Below is an example of adding a listener for a Purchase Succeeded notification that the ``UnityMessageHandler`` component will invoke when the ``bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED`` notification is sent from the native SDK:

```csharp
using BFGSDK;

public class PurchaseController {
  public void Initialize() {
    NotificationCenter.Instance.AddObserver(PurchaseSucceeded, bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED);
  }
  
  private void PurchaseSucceeded(string productId) {
    Debug.Log($"Purchase succeeded for product id: {productId}");
  }
}
```

### Additional Steps for Android Targets

<details>
  <summary>Install Android Firebase and Google Dependency Manager</summary>

The .unitypackage of these plugins must be downloaded from the [Google Unity Archives](https://developers.google.com/unity/archive) and installed into your Unity Project.

1. Double-click on the .unitypackage and follow the instructions for the import process.
2. Import everything that Unity recommends in the import package window.

Failing to import everything that Unity lists will result in complications when exporting your Unity Android gradle project, attempting builds in Android Studio, and building an APK directly in Unity.

It may also be beneficial to add a few auto-generated files to your version control system's ignore file, but this step is entirely optional and should be considered based on how your project prefers to handle files that are dirtied from builds:

```
/Assets/StreamingAssets/google-services-desktop.json*
/Assets/Plugins/Android/FirebaseCrashlytics.androidlib/res/values/crashlytics_build_id.xml*
```

</details>

<details>
  <summary>Resolve Firebase dependencies</summary>

After importing the Unity SDK, the external Firebase SDKs (by way of the External Dependency Manager plugin) will embed a number of supporting files within your project. If the External Dependency Manager plugin is not available, you will be prompted to resolve dependencies.

:::info 

If you are not prompted, trigger the Android resolution by selecting **Assets > External Dependency Manager > Android Resolver > Resolve**. The "Force Resolve" option may be needed in rare circumstances.

:::

After resolution, the following files will be added to your project:

- Assets/Plugins/Android/FirebaseApp.androidlib/*
- Assets/Plugins/Android/FirebaseCrashlytics.androidlib/*
- Assets/GeneratedLocalRepo/*

If you have custom gradle build files, the Firebase SDKs will also automatically edit these gradle build files within your project:

- Assets/Plugins/Android/mainTemplate.gradle
- Assets/Plugins/Android/gradleTemplate.properties (Unity v2019.3 or newer)

</details>

<details>
  <summary>Enable 'Android TV Compatibility' setting</summary>

:::info 

If Android TV Compatibility is not enabled, you will receive the following error when building your project:

> BfgUnitySdkSample-2021.3.9/goog/launcher/src/main/AndroidManifest.xml:5:3-30:17: AAPT: error: resource drawable/app_banner (aka com.bigfishgames.bfgsdkunitygoogle:drawable/app_banner) not found.

:::

To enable the ‘Android TV Compatibility’ setting:

1. In Unity, open your **Project Settings**.
2. Navigate to the **Player** section.
3. Expand **Other Settings**.
4. Check **Android TV Compatibility** and **Android Game**.

</details>

<details>
  <summary>Set up the BFG SDK config file</summary>

The BFG SDK configuration file, bfg_config.json, provides the basic settings that will be used as the settings values during the first and subsequent launches. The BFG SDK Sample App provides a template with default values that you can build upon for your project. To copy it into your project:

1. Navigate to the root folder of your unzipped Unity SDK.
2. Copy the config file, bfg_config.json from /SampleApp/com.bfg.sdk/Editor/Plugins/Android/res/raw/bfg_config.json to the following locations in your project:
  - Google: /Assets/Plugins/Android/Google/post-copy/launcher/src/main/res/raw/bfg_config.json
  - Amazon: /Assets/Plugins/Android/Amazon/post-copy/launcher/src/main/res/raw/bfg_config.json

To learn about the settings and configuration options in bfg_config.json, see the Android section of Configure the BFG SDK.
</details>

<details>
  <summary>Set up the project's Gradle file</summary>

:::info

The following code snippets contain placeholder version numbers ‘X.X.X’. Replace these placeholders with the appropriate version for your release of the BFG SDK, found at [3rd Party Version Compatibility Charts](../bfgsdk/compatibility-charts).

:::

Make the following modifications to your project's Gradle file, mainTemplate.gradle:

1. Add the following lines to the top of **mainTemplate.gradle** file:

```
apply plugin: 'com.android.library'
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'
```

2. Modify the **buildscript** code section to match the following:

```
buildscript {
	ext.kotlin_version = 'X.X.X'
	repositories {
		google()
    mavenCentral()
    maven { url 'https://zendesk.jfrog.io/zendesk/repo' }
	}

	dependencies {
		classpath 'com.android.tools.build:gradle:X.X.X'
    classpath 'com.google.firebase:perf-plugin:1.3.1'
    classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
	}
}
```

3. Verify that your dependencies section has all the necessary dependencies for the SDK, as well as the regular Unity dependencies. Note that the below sample code may not be a comprehensive list of all dependencies required for your project. 

```
dependencies {
  // Google Billing dependencies
  implementation 'com.android.billingclient:billing:X.X.X'
      
  // Zendesk
  implementation group: 'com.zendesk', name: 'support', version: 'X.X.X'
  implementation 'com.zendesk.belvedere2:belvedere:X.X.X'
  implementation 'com.google.android.material:material:X.X.X'
  implementation 'com.squareup.okhttp:okhttp:X.X.X'
  implementation 'com.squareup.moshi:moshi:X.X.X'

  // AppsFlyer
  implementation 'com.appsflyer:af-android-sdk:X.X.X'
  implementation 'com.android.installreferrer:installreferrer:X.X.X'

  // Firebase
  implementation 'com.google.firebase:firebase-crashlytics:X.X.X'
  implementation 'com.google.firebase:firebase-analytics:X.X.X'
  implementation 'com.google.firebase:firebase-messaging:X.X.X'
  implementation 'com.google.firebase:firebase-perf:X.X.X'

  // Rave
  implementation 'androidx.security:security-crypto:X.X.X'
  implementation 'androidx.work:work-runtime:X.X.X'
  implementation 'com.google.android.gms:play-services-auth:X.X.X'
  implementation 'com.facebook.android:facebook-android-sdk:X.X.X'
  implementation 'com.android.volley:volley:X.X.X'

  // Other dependencies
  implementation 'androidx.constraintlayout:constraintlayout:X.X.X'
}
```

</details>

<details>
  <summary>Create custom Launcher Manifest</summary>

Big Fish Games uses a custom launcher manifest file to initialize the BFG SDK. To get the file, copy it from the BFG SDK Sample App:

1. Navigate to the root folder of your unzipped Unity SDK.
2. Copy the launcher manifest, LauncherManifest.xml /SampleApp/Samples/\$SampleProjectName/Assets/Plugins/Android/LauncherManifest.xml to your own project.

:::info 

If you need to make any changes to the manifest, do so **after** copying over the file. You can only specify one custom launcher manifest in Unity.

:::

Once the file is copied and modified as needed, ensure you set the **Custom Launcher Manifest** setting in Unity:

1. In Unity, open **Project Settings**.
2. Navigate to the **Player** section.
3. Expand **Publishing Settings** and scroll down to the **Build** section.
4. Check **Custom Launcher Manifest**.

</details>

<details>
  <summary>Verify your integration</summary>

Once you’ve completed the setup for Android, your project should have the following project folder structure. If you are missing any folders and/or files, you can copy the post-copy folder and all its contents from the BFG SDK Sample App into your own project.

| **Directory** | **Description** |
|---|---|
| **Plugins/Android** | Root folder for all needed android integration files. |
| **Plugins/Android/FirebaseApp.androidlib** | Contains needed files for Firebase Analytics. |
| **Plugins/Android/FirebaseCrashlytics.androidlib** | Contains needed files for Firebase Crashlytics. |
| **Plugins/Android/Google** | Contains Android Manifest files. |
| **Plugins/Android/Google/post-copy** | Used by build system to copy specific files to their correct app. |
| **Plugins/Android/Google/post-copy/launcher** | Contains Google services .JSON files. These files are used by Firebase for Crashlytics integration. |
| **Plugins/Android/Google/post-copy/launcher/src/main/res/mipmap** | Contains App Icons. This structure can change depending on team/project setup. |
| **Plugins/Android/Google/post-copy/launcher/src/main/res/raw** | Contains the BFG Config files. |
| **Plugins/Android/Google/post-copy/launcher/src/main/res/values** | Contains refs.xml files. |
| **Plugins/Android/Google/post-copy/launcher/src/main/res/xml** | Contains optional debugging files. |
</details>

### Additional Steps for iOS Targets

<details>
  <summary>Resolve Firebase dependencies</summary>

After importing the Unity SDK, certain dependencies, such as Firebase, will attempt to configure your system to use CocoaPods. This means that the External Dependency Manager's iOS Resolver will be configured to include CocoaPods dependencies within a .xcworkspace file, and all of your developer and build tools will need to open/operate on the .xcworkspace file instead of the .xcodeproj file. 

While it's safer to use CocoaPods to manage iOS dependencies, it may not be appropriate for all projects. You may decide to use an alternative setup:

**Alternative 1: Embed CocoaPods directly within a generated .xcodeproj file**

One alternative is to embed CocoaPods directly within the generated .xcodeproj by changing the iOS Resolver Settings:

1. In Unity, go to **Assets > External Dependency Manager > iOS Resolver > Settings** to open your iOS Resolver settings.
2. Change the value of the "Cocoapods Integration" dropdown from "Xcode Workspace - Add Cocoapods to the Xcode Workspace" to "Xcode Project - Add Cocoapods to the Xcode project."
3. Verify the setting was changed within ProjectSettings/GvhProjectSettings.xml and track the change in your source control system.

**Alternative 2: Add Firebase dependencies without CocoaPods**

If your project is not capable of supporting CocoaPods, then the Firebase dependencies can be included with the use of a support package.

:::warning 

Your project may already include references to other iOS libraries outside of Firebase. The process detailed in this section does not automatically resolve any dependencies apart from Firebase, and you will need to manage them manually on your own.

:::

1. In Unity, go to **Assets > External Dependency Manager > iOS Resolver > Settings** to open your iOS Resolver settings.
2. Locate **CocoaPods Integration** setting and change it to "None - Do not integrate CocoaPods."
3. Verify the setting was changed within ProjectSettings/GvhProjectSettings.xml and track the change in your source control system.
4. Download the Firebase support file, com.bfg.sdk.ext.firebase-support*, from the same place you downloaded the Unity SDK package.
5. Extract the package and rename the extracted folder to something that will be unique in your project's "Packages" directory. We recommend naming it "com.bfg.sdk.ext.firebase-support" to stay aligned with the package's ID, but it's ultimately up to your project's preferred naming scheme.
6. Move or copy the folder into your project's root "Packages" folder.

After performing the above, the BFG Unity SDK will automatically include Firebase's dependencies within your generated Xcode project.

Note that your resulting Xcode project will still have a "Pods" folder, even though the project is not using CocoaPods. This is to allow the Firebase Unity SDK's automatic symbol upload build phase to run as expected.

</details>

<details>
  <summary>Verify minimum iOS version</summary>

1. In Unity, open your **Project Settings**.
2. Navigate to the **Player** section.
3. Expand **Other Settings**.
4. For **Target minimum iOS Version**, verify that the correct minimum supported iOS version is selected.

Alternatively, you can set the "MinimumOSVersion" key in your Info.plist file.

</details>

<details>
  <summary>Set up the BFG SDK config file</summary>

The BFG SDK config file, bfg_config.json, provides the basic settings that will be used as the settings values during the first and subsequent launches. The BFG SDK Sample App provides a template with default values that you can build upon for your project. To copy it into your project:

1. Navigate to the root folder of your unzipped Unity SDK.
2. Copy the config file, bfg_config.json from /Packages/com.bfg.sdk/Editor/Plugins/iOS/bfg_config.json to the following location in your project: /Assets/Plugins/iOS/bfg_config.json
3. In Unity, open the **BFG > Build Settings** dialog.
4. Under **iOS Settings**, set the file path for **bfg_config.json File Path**.

To learn about the settings and configuration options in the BFG SDK config file, go to the iOS section of Configure the BFG SDK.
</details>

<details>
  <summary>Modify the BFGUnityAppController.mm file</summary>

Big Fish Games uses a custom BFGUnityAppController.mm file to initialize the BFG SDK. In most integrations, you can simply use the sample BFGUnityAppController.mm in the BFG SDK Sample App:

1. Navigate to the root folder of your unzipped Unity SDK.
2. Copy BFGUnityAppController.mm from /SampleApp/com.bfg.sdk/Runtime/Plugins/iOS/ to your own project.

BFGUnityAppController.mm will be copied over to the exported iOS project and will act as the App Delegate in Xcode.

:::info

If you choose to make changes to this file after exporting the iOS Xcode project, then be sure to replicate those changes back into the file at Packages/com.bfg.sdk/Runtime/Plugins/iOS/BFGUnityAppController.mm.

:::

**(Optional) Add a Pause/Resume Delegate to BFGUnityAppController.mm** 

To add the ability to pause and resume, add this code to set the bfgManagerPauseResumeDelegate:

```objectivec
@interface BFGUnityAppController : UnityAppController <bfgManagerPauseResumeDelegate>
@end

@implementation BFGUnityAppController
- (BOOL)application:(UIApplication*) application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Set the Pause Resume delegate
  [bfgManager addPauseResumeDelegate:self];
}

// Implement bfgManagerPauseResumeDelegate callbacks
- (void)bfgManagerShouldPauseGame
{
  NSLog(@"Game should be paused because the Native iOS SDK is about to block the display.");
}
- (void)bfgManagerShouldResumeGame
{
  NSLog(@"Game can resume because the Native iOS SDK is about to unblock the display.");
}
@end
```

**(Optional) Customize the top view controller** 

The sample BFGUnityAppController.mm file assumes that your top view controller window is inside the App Delegate. However, if your top view controller will not be ready until later, use the following procedure to initialize the Native iOS SDK:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [bfgManager initWithLaunchOptions:launchOptions];
}
```

When your main window is ready, use the following code:

```objectivec
- (void)myViewControllerReady
{
  [bfgManager startWithParentViewController:myMainViewController];
}
```

**(Optional) Workaround for games locked in landscape orientation** 

:::warning

This workaround should only be used if your game is meant to be **locked** on Landscape mode. Do not use this if your game supports both Portrait and Landscape modes on iOS devices.

:::

A crash sometimes occurs for games that only support landscape orientation on an iPhone. The current fix is to add the following code to your BFGUnityAppController.mm file:

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

</details>

<details>
  <summary>Export the project to Xcode</summary>

Developers will have more flexibility to customize the integration of the Big Fish and Rave SDKs by exporting the Unity project to Xcode.

1. In Unity, go to **BFG > Build Settings** to set your Big Fish build settings. For more information about these settings, see BFG Unity Build Settings.
2. Once you’re done, close the **Build Settings** dialog.
3. Open Unity’s **Build Settings**.
4. Select **iOS** from the **Platform** list, then click the **Switch Platform** button.
5. Click **Build And Run**.
6. Navigate to the desired location on your computer, and save the project.

If you enabled the Big Fish build settings in Step 1, the build will automatically perform all of the post-processing steps required for your build and ensure that all supporting settings files, startup calls, plist entries, linked frameworks, build phases, build settings, etc are integrated correctly into the exported Xcode project.

:::warning

If you do not enable the build settings using the BFG > Build Settings menu, you must add all dependencies and settings via your own post processing scripts; otherwise, the exported projects will either fail or have runtime errors.

:::

:::info

When building your project with Xcode or the Xcode command line tools, you must use the generated .xcworkspace instead of the generated .xcodeproj unless you change your iOS Resolver settings (see “CocoaPods Alternatives” under “Resolve Firebase dependencies”, above).

:::
</details>

<details>
  <summary>Update plist file</summary>

After you export your project from Unity to Xcode, verify that your Info.plist file has all the required settings:

**Mobile Telemetry Services (MTS)**

> To support Big Fish reporting through Mobile Telemetry Services (MTS), add the following key-value pair to your Info.plist file. The “BFG_ENVIRON_TEST” is a String value type. This step is necessary to ensure that MTS data gets routed to the appropriate environment once the game goes live. Without this setting, you will see a warning on the Xcode and device consoles. 

```xml
<key>BFGEnviron</key>
<string>BFG_ENVIRON_TEST</string>
```

**AppIdentifierPrefix Setting**

> The SDK requires the AppIdentifierPrefix to be added to the game's Info.plist file. 

```xml
<key>AppIdentifierPrefix</key>
<string>${AppIdentifierPrefix}</string>
```

**Privacy Settings and Localized InfoPlist.strings**

> The four required privacy text settings (``NSCameraUsageDescription``, ``NSPhotoLibraryUsageDescription``, ``NSBluetoothAlwaysUsageDescription``, and ``NSBluetoothPeripheralUsageDescription``) can be localized by using localized Info.plists in Xcode.
> 
> There are five supported languages for the Permission strings located in the localized InfoPlist.strings files:

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

<details>
  <summary>Enable Swift support in Xcode</summary>

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
  <summary>Add Linked Flags to Xcode's Build Settings</summary>

1. Navigate to the **Build Settings** tab in your Xcode project.
2. To support Rave, add **-ObjC** to "Other Linker Flags".
3. If you previously had **-lz** in "Other Linker Flags", you may now remove it.

</details>

<details>
  <summary>Verify your integration</summary>

Here are some steps to help you verify that the Unity SDK for iOS integration was successful:

1. Verify that the exported Xcode project is set up to link to all required frameworks.
  1. Select your Target in the Project Navigator.
  2. Select the **General** tab.
  3. Scroll down to the **Frameworks, Libraries, and Embedded Content** section.
2. Ensure that the correct provisioning profile is being used to build the project. In Xcode, this is found in the **Signing & Capabilities** tab. Additionally, make sure that **Automatically manage signing** is unchecked.
3. If you are building locally, then add the Capabilities for any feature you would like to test in the local build. In the **Signing & Capabilities** tab, click the “+ Capabilities” button and add any of the following capabilities:
  - Associated Domains (for Universal Links)
  - In-App purchase
  - Push Notification
  - Sign In With Apple

You can run the app without including any capabilities but certain features will not function properly unless the corresponding Capability has been added.

:::info

In the event that Step 3 fails to build or launch the app on a device, you might need to change which build system Xcode is using. In Xcode 11, all projects default to being built with Apple's **New Build System**. Generally this works without issue; however, build issues may occur especially if you are running custom build scripts. If your game doesn't successfully build and run on the device, change back to using the Legacy Build System. To do so, go to **File > Project Settings** and change the two Build System drop downs to **Legacy Build System**.

:::
</details>
