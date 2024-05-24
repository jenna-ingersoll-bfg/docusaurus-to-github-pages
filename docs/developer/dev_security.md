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
2. Copy the config file, bfg_config.json from /Packages/com.bfg.sdk/Editor/Plugins/Android/res/raw/bfg_config.json to:
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
2. Copy the launcher manifest, LauncherManifest.xml /SampleApp/Samples/<SampleProject-Root>/Assets/Plugins/Android/LauncherManifest.xml to your own project.

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
