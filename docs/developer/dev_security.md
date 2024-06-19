# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Unity SDK Release Notes

Keep track of every change to the Unity SDK. This changelog lists all additions and updates to the Unity SDK, in chronological order.

**DOWNLOAD RELEASES**: Access to all releases including and after v10.5.0 are available on Big Fish's [GitHub release repo](https://github.com/bigfishgames-external/sdk-unity-releases/releases).

:::note 

The Unity SDK wraps the Native Android and Native iOS SDKs. To complete your upgrade, ensure that you follow the upgrade steps for the Unity SDK in addition to the upgrade steps detailed for each of the Native BFG SDKs you are using in your project.

:::

## 10.8.1 (June 06, 2024) 

- No updates were made to the Native Android SDK in this release.
- Updated the Native iOS SDK to v8.6.1, which includes bug fixes.
- Updated BigFishScenePack to resolve an unexpected error.

**Upgrading to v10.8.1**

<details>
  <summary>Update BigFishScenePack (iOS only)</summary>

1. Replace the BigFishScenePack.xcframework with the new version.
2. Replace the BigFishScenePack.bundle with the new version.
</details>

<hr />

## 10.8.0 (May 21, 2024) 

- Updated the Native Android SDK to v8.8.0, which includes an update to Google Play Billing Library.
- Updated the Native iOS SDK to v8.6.0, which includes updates to 3rd party libraries.
- Updated Facebook Unity SDK for iOS to v17.0.1.
- Fixed a Unity SDK application crash from Unity 2022.3.17 LTS+ due to a missing static method.
- Fixed a bug where Success purchases generated exceptions.

**Upgrading to v10.8.0**

:::info

If your xcworkspace file is not generated after a Unity iOS build, make sure you run the ``pod install`` command for the exported Xcode project.

:::

<details>
  <summary>Update the Facebook SDK</summary>

Update the value of ``facebookClientToken`` in the iOSBuildConfig.json file with the value found under **Settings > Advanced > Client Token** in the Facebook App Dashboard.

Since the BFG SDK now uses the Facebook SDKs as pod dependencies, remove the following Facebook frameworks from the folder, com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic

- FBAEMKit.xcframework
- FBSDKCoreKit_Basics.xcframework
- FBSDKCoreKit.xcframework
- FBSDKLoginKit.xcframework
- FBSDKShareKit.xcframework

</details>

<hr />

## 10.7.1 (March 29, 2024) 

- Updated the Native Android SDK to v8.7.0, which includes an update to the Rave SDK.
- No updates were made to the Native iOS SDK in this release.
- Updated the Firebase Unity SDK to v11.6.0 to support Android API 34.
- **Android Billing**: Removed deprecated methods ``bfgPurchaseAndroid.startUsingService()`` and ``bfgPurchase.startService()`` as they are no longer required for initialization of the billing service. The method ``bfgPurchaseAndroid.setupService()`` should be used to initialize Android purchasing.
- **Android Manifest**: A custom AndroidManifest.xml file can now be placed directly in the Assets/Plugins/Android folder without build errors and file deletion. The path to it can specified in the **Build Settings** option of the **BFG** menu in Unity.

<hr />

## 10.7.0 (March 22, 2024) 

- No updates were made to the Native Android SDK in this release.
- Updated the Native iOS SDK to v8.5.0, which includes the Privacy Manifest file.
- **Firebase Analytics**: The Unity iOS SDK will automatically enable and disable the setting based on the user's GDPR selection.
- **Unity Sample App**: Added the ``priceString`` field to the ``ProductInfo`` class of the APurchaseController file in the Unity Sample App to demonstrate the usage of localized price strings on iOS devices.
- Removed deprecation warnings from ``bfgGameReporting.logCustomEvent()`` methods. These methods are still the preferred way of sending custom events.

**Upgrading to v10.7.0**

<details>
  <summary>Remove calls to Firebase Analytics</summary>

Remove any manual calls to ``FirebaseAnalytics.SetAnalyticsCollectionEnabled(bool)`` within your Unity project. These calls are no longer needed because Firebase Analytics will automatically enable and disable the setting based on the user's GDPR selection.

</details>

<hr />

## 10.6.1 (Feb 15, 2024) 

- Updated the Native Android SDK to v8.6.1, which includes a fix for the standalone newsletter sign-up.
- Updated the Native iOS SDK to v8.4.1, which includes a fix for the standalone newsletter sign-up.
- Updated libraries to include bug fixes in iOS and Android.

<hr />

## 10.6.0 (Jan 09, 2024) 

- Updated the Native Android SDK to v8.6.0, which includes an update to the Facebook SDK.
- Updated the Native iOS SDK to v8.4.0, which includes an update to the Zendesk SDK.
- **Unity Update**: Updated to Unity v2022.3.10 LTS which includes an update to Gradle v7.1.2. Additionally, updated the Sample App to support the new version of Unity.
- **UPM Integration**: Added the ability to integrate or upgrade the Unity SDK using the “Add package from tarball” Unity Package Manager option.
- Added Newsletter Opt-In checkbox for all localities and text updates for the checkbox and policies.
- [iOS] Updated to Zendesk v7.0 for chatbot support.

**Upgrading to v10.6.0**

<details>
  <summary>Update to Unity v2022.3.10 LTS</summary>

With the update to Unity v2022.3.10 LTS, the minimum requirements are now:
- iOS v12
- Java v11
- Gradle v7.1.2
- Android Studio Bumblebee v2021.1.1+

Update Gradle by setting the two new gradle files, baseProjectTemplate.gradle and settingsTemplate.gradle, in the **Android Player Settings**.

</details>

<details>
  <summary>Update Unity Sample App</summary>

Overwrite the modified files in your project’s /Assets/Plugins/Android/ folder with the files in the BfgUnitySdkSample-2022.3.10/Assets/Plugins/Android/ folder and re-apply any changes your team also made to those files. Additionally, add the two new gradle files as "Custom Base Gradle Template" and "Custom Gradle Settings Template" in the **Android Player Settings**.

</details>

<details>
  <summary>Update for UPM Integration</summary>

1. Download unity-sdk-10.6.0.tgz from Big Fish’s [GitHub release repo](https://github.com/bigfishgames-external/sdk-unity-releases/releases).  
2. Extract the contents of the downloaded file, unity-sdk-10.6.0.tgz.
3. Open the extracted contents and locate the file, unity-sdk-10.6.0-upm.tgz.
4. Copy the file unity-sdk-10.6.0-upm.tgz to a location on your machine where you would like Unity to import it from.
5. Open Unity and navigate to **Window > Package Manager**.
6. In the **Package Manager** window, click the **+** button in the upper-left corner.
7. Select **Add package from tarball** and select the Unity SDK tarball file you copied earlier. Unity will automatically re-import it and compile once selected.
8. Navigate to your Packages list. You will see ``[BFG] SDK`` in your Packages list, pointing to the version you downloaded.

</details>

<details>
  <summary>(iOS) Update Zendesk Version</summary>

Remove the existing Zendesk xcframework files from your project and replace them with the frameworks found in/frameworks/ThirdParty/Zendesk/*. It's no longer necessary to strip architectures before submitting your game to the App Store.

</details>

<details>
  <summary>(iOS) Update to support Newsletter Opt-In</summary>

Update your /Frameworks/ThirdParty/RaveSocial.xcframework and /Frameworks/Resources/BigFishScenePack.bundle or the entire com.bfg.sdk package with the files from the release.

</details>

<hr />

## 10.5.0 (Sept 26, 2023) 

- Updated the Native Android SDK to v8.5.0, which adds support for Google Billing 6.
- Updated the Native iOS SDK to v8.3.0, which includes minor updates to the iOS Sample App.
- Updated Google Billing libraries to v6.0.1.
- Hardened purchasing for null product properties in iOS.

**Upgrading to v10.5.0**

<details>
  <summary>(Android) Update to Google Billing v6</summary>

To update Google Billing to v6.0.1, update the Google billing version in the mainTemplate.gradle file to 6.0.1:

```json
dependencies {    
  implementation 'com.android.billingclient:billing:6.0.1'
}
```

</details>

<hr />

## 10.4.0 (June 23, 2023) 

- Updated the Native Android SDK to v8.4.0, which adds support for Google Billing 5.
- Updated the Native iOS SDK to v8.2.0, which updates the Facebook SDK.
- Updated Google Billing version to v5.0.0.
- Updated the Unity iOS Facebook SDK to v11.2.1. Facebook Graph API v10 will be deprecated at the end of June 2023.
- Added a new SDK component ``PersistentUnityMessageHandler``, which is used to receive Unity SDK notifications across all Unity scenes. Prior to this release, developers used the ``UnityMessageHandler`` component to every scene individually. 
- Added ``DisableBitcode.cs`` post-build step to the Unity Sample App in response to Xcode 14 ending support for the ``BITCODE_ENABLED`` option.
- Fixed a typo in the BFG SDK notification variable ``bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED_WITH_RECEIPT``. This typo caused purchase data, including the purchase receipt, to not be passed into Unity observers of ``bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED_WITH_RECEIPT``. Refer to GooglePurchaseController.cs in the Unity Sample App for usage of ``NOTIFICATION_PURCHASE_SUCCEEDED_WITH_RECEIPT``.

**Upgrading to v10.4.0**

<details>
  <summary>Update Facebook Graph Version</summary>

Facebook Graph API v10 will be deprecated at the end of June 2023.

1. Update the version used in any calls to the Facebook Graph API for your app.
2. Update the version used in the Facebook dashboard under **Settings > Advanced > Update API Version**.

</details>

<details>
  <summary>Update to PersistentUnityMessageHandler</summary>

To use the new ``PersistentUnityMessageHandler``:

1. Remove all instances of the ``UnityMessageHandler`` component usage from all Unity scenes in your app.
2. Inside your init/bootstrap scene, create a new ``GameObject`` and add the ``PersistentUnityMessageHandler`` component to it.

The ``UnityMessageHandler`` component, which actually handles processing the notifications and calling your listeners in Unity, will automatically be added next to the ``PersistentUnityMessageHandler`` component in your GameObject.

</details>

<details>
  <summary>(Android) Update to Google Billing v5</summary>

To update Google Billing to v5.0.0, update the Google billing version in the mainTemplate.gradle file to 5.0.0:

```json
dependencies {    
  implementation 'com.android.billingclient:billing:5.0.0'
}
```

</details>

<details>
  <summary>(iOS) Update Facebook SDK</summary>

To update the Facebook SDK for iOS targets:

1. Remove the following frameworks from your project:
    - FBSDKCoreKit.framework
    - FBSDKLoginKit.framework
    - FBSDKShareKit.framework
2. Replace the removed frameworks with their xcframework files found in com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic.
3. Add FBAEMKit.xcframework and FBSDKCoreKit_Basics.xcframework from the same directory.
4. In the Unity Editor, navigate to **General > Frameworks & Libraries** and set each of the xcframeworks above to ‘Embed and sign’.

</details>

<hr />

## 10.3.0 (Apr 6, 2023) 

- Updated the Native Android SDK to v8.3.0, which includes minor bug fixes.
- Updated the Native iOS SDK to v8.1.0, which includes updates to AppsFlyer, Zendesk, and the minimum iOS version.
- [iOS] Updated the Sample App to disable bitcode for iOS in a Unity project. Apps submitted to the Apps Store as of April 2023 must be built in Xcode 14 with bitcode disabled. The updated sample project can be found in Samples/BfgUnitySdkSample-2021.3.9/Assets/Scripts/Editor/DisableBitcode.cs.

**Upgrading to v10.3.0**

<details>
  <summary>(iOS) Update to Xcode 14</summary>

Apps submitted to the Apps Store as of April 2023 must be built in Xcode 14 with bitcode disabled. After updating to Xcode 14, ensure you disable bitcode:

1. In Xcode, open **Build Settings**.
2. Search for ‘bitcode’ and set **Bitcode Enabled** to "NO" for your project and targets.

This does not impact dependencies.

</details>

<details>
  <summary>(iOS) Update AppsFlyer</summary>

Remove AppsFlyerLib.xcframework from your project and replace it with the new version found in the framework/ThirdParty directory.

The AppsFlyerLib.xcframework is found in com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic

</details>

<details>
  <summary>(iOS) Update Zendesk</summary>

1. Remove the reference to the strip-architectures script from your **Build Phases > Run Script** that points to the old Zendesk frameworks.
2. Change the minimum SDK version to 11 under the **General** tab.
3. Remove the following old Zendesk frameworks from your project:
    - CommonUISDK.framework
    - ZendeskCoreSDK.framework
    - ZendeskProviderSDK.framework  
    - ZendeskSDK.framework
4. Add the following new xcframeworks from the distribution framework/ThirdParty/Zendesk directory to your project:
    - CommonUISDK.xcframework
    - MessagingAPI.xcframework
    - MessagingSDK.xcframework
    - SDKConfigurations.xcframework
    - SupportProvidersSDK.xcframework
    - SupportSDK.xcframework
    - ZendeskCoreSDK.xcframework
5. Go to **General > Frameworks & Libraries** to set each of the xcframeworks above to "Embed and sign".

The Zendesk xcframework files are found in com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic

</details>

<hr />

## 10.2.0 (Nov 23, 2022) 

- Updated the Native Android SDK to v8.2.0, which includes an update to Zendesk.
- Updated the Native iOS SDK to v8.0.0, which includes minor bug fixes.
- **Unity Sample App**: Updated the Big Fish Unity Sample to run on LTS Unity 2021.3.9f1. Older versions of the Unity sample app are removed.
- Added LTS Unity 2021.3.9f1 support. LTS Unity can be downloaded from here using the Unity Hub install option.
- (Android) Updated minimum Android SDK to v22. NOTE: If you’re updating to Unity 2021 then the minimum Android SDK is v22. If you are on Unity 2020 or earlier, the minimum Android SDK remains v21.
- Updated the Unity SDK to encrypt the config file, bfg_config.json file during post-build. The file, bfg_config_encrypted is added to the exported project, and the SDK will load the encrypted config if available. The config file, bfg_config.json can be removed if desired for security reasons. If the encrypted file is removed, the SDK will fall back and use the plain text version instead.
- Fixed a crash in the Unity SDK that occurs when attempting to purchase using a null ``productId``.
- (Android) Added support for the latest Android Studio versions Chipmunk and Dolphin.
- (Android) Built Native Android plugin with Gradle v6.5.1 to align more with the Unity toolchain requirements (unity 2021.3.9f1 requires min version 6.1.1).
- (iOS) Updated Unity SDK hardware strings and device common names for the latest iOS devices.
- (iOS) Investigated compatibility with newer Apple M1 chips. Due to 3rd party dependencies, apps built with Apple M1 chips need to disable bitcode.

**Upgrading to v10.2.0**

<details>
  <summary>(Android) Upgrade Zendesk and minSdkVersion
To update Zendesk and the minimum SDK version:

1. Open the ProjectSettings.asset file through **Unity Player Settings**.
2. Navigate to the “Other Settings” drop-down.
3. Update the minimum SDK.API version to 22.
4. Open the project manifest file, AndroidManifest.xml file and add the following code:

```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
```

5. Open your mainTemplate.gradle file and add/update the following dependencies:

```json
dependencies {
  implementation group: 'com.zendesk', name: 'support', version: '5.1.0'
  implementation 'com.zendesk.belvedere2:belvedere:3.0.5'
}
```

</details>

<details>
  <summary>(Android) Resolve android:screenOrientation errors</summary>

To resolve an error referring to android:screenOrientation when building your app:

1. Open your project's launcher manifest file, LauncherManifest.xml.
2. Find the ``<Activity>`` tag and add the following:

```
tools:replace="android:screenOrientation"
```

3. Open your project's gradle file, mainTemplate.gradle.
4. Add the following line to the very bottom of your gradle file when using IL2CPP as your scripting backend:

```
**IL_CPP_BUILD_SETUP**
```

</details>

<hr />

## 10.1.0 (Aug 25, 2022) 

- Updated Native Android SDK to v8.1.0, which adds support for Google Billing 4 and Android 13.
- Updated Unity (iOS & Android) SDK Firebase Crashlytics and Analytics to version 9.3.0 to keep the SDK and game teams up-to-date with the latest changes and fixes.
- Fixed the following warning when building an exported Unity-Android gradle project in Android Studio: “The option setting 'android.enableR8=false' is deprecated”.
- Updated com.google.gms:google-services:4.3.0 to com.google.gms:google-services:4.3.2 in launcherTemplate.gradle to fix the following warning in Android Studio:

```
”WARNING: API 'variant.getMergeResources()' is obsolete and has been replaced with 'variant.getMergeResourcesProvider()'“.
```

- Added encryption of the bfg_config.json file during post build.

**Upgrading to v10.1.0**

<details>
  <summary>Update Firebase Crashlytics and Analytics</summary>

1. Remove all current Crashlytics and Analytics 7.0.1 folders from your Unity Project
2. Remove all external-dependency-manager@1.2.162 folders from your Unity Project

:::info

external-dependency-manager@1.2.172 is required for the Crashlytics and Analytics updates and will be installed automatically when either the updated Crashlytics or Analytics 9.3.0 .unitypackage is installed.

:::

3. Download the [Crashlytics 9.3.0](https://dl.google.com/firebase/sdk/unity/dotnet4/FirebaseCrashlytics_9.3.0.unitypackage) unitypackage.
4. Download the [Analytics 9.3.0(https://dl.google.com/firebase/sdk/unity/dotnet4/FirebaseAnalytics_9.3.0.unitypackage) unitypackage.
5. Install Crashlytics and Analytics 9.3.0 into your Unity app using the **Assets > Import Package > Custom Package** menu.

:::info 

The Google Dependency Manager will try to resolve the installation. If it fails to do so or you experience issues, you can try forcing the resolution using the Unity menu: **Assets > External Dependency Manager > Android Resolver > Force Resolve**.

:::

If you run into a CocoaPods compatibility error, you will need to update your Cocoapods to the version the error mentions before building.

</details>

<details>
  <summary>(Android) Upgrade to Android 13 support</summary>

Update the Target API Level value to 33 in your Unity Project in the **Android Player Settings**.

</details>

<details>
  <summary>(Android) Fix API warning errors</summary>

Update your project's gradle file, mainTemplate.gradle file with the following in order to resolve the warning: “WARNING: API 'variant.getMergeResources()' is obsolete and has been replaced with 'variant.getMergeResourcesProvider()' “.

```json
dependencies {
  classpath 'com.google.gms:google-services:4.3.2'
}
```

</details>

<details>
  <summary>Configure bfg_config.json encryption</summary>

The file bfg_config_encrypted is added to the exported project, and the SDK will load the encrypted config if available. The bfg_config.json can be removed if desired for security reasons. If the bfg_config_encrypted file is removed, the SDK will fall back and use the plain text bfg_config.json file.

</details>

<hr />

## 10.0.0 (July 25, 2022) 

- Updated the Native Android SDK to v8.0.0, which adds support for Android 12 / API 31.
- Updated the Native iOS SDK to v7.7.2, which adds the ability to configure AppsFlyer via the bfg_config.json file.
- Added Android 12 (API 31) support.
- Added LTS Unity 2020.3.32f1 support.
- Updated the Big Fish Unity Sample to run on LTS Unity 2020.3.32f1. The updated sample is now named BfgUnitySdkSample-2020.3.32.
- Added the ability to configure AppsFlyer dev key may now be configured from bfg_config.json.
- Expanded ``bfgRave.sharedInstance().requestAccountDeletion()`` method to support deletion of non-authenticated (“guest”) Rave accounts.
- Removed the ``FailedForAuth`` notification.
- Removed BfgUnitySdkSample-2019.4-unsupported sample project. 

**Upgrading to v10.0.0**

<details>
  <summary>(Android) Update versionCode in Gradle file</summary>

Update the ``versionCode`` in your build.gradle file to ``[10.0.0]``. If you fail to update the version code, you will receive the following error: 

```
Rave Socialization Error

Required Rave Setting
"ravesettings.general.serveurl" is not set
```

</details>

<details>
  <summary>(Android) Upgrade targetSDKVersion in Gradle file</summary>

Update the targetSdkVersion and compileSdkVersion to 31 in your project's gradle file, build.gradle as follows:

```
compileSdkVersion 31

defaultConfig {
  minSdkVersion 16
  targetSdkVersion 31
}
```

</details>

<details>
  <summary>(Android) Update 3rd Party Dependencies</summary>
  
Update the 3rd party dependencies in your project's gradle file and gradle properties file to fix an incompatibility with the current Facebook SDK version and Android 12.

1. Make the following updates to the dependencies section of your project's gradle file, build.gradle:

```
classpath 'com.android.tools.build:gradle:4.0.0'
implementation 'com.facebook.android:facebook-android-sdk:12.3.0'
implementation 'com.squareup.moshi:moshi:1.12.0'
ext.kotlin_version = '1.5.10'
```

2. Make the following updates to your gradle properties file, gradle-wrapper.properties:

```
distributionUrl=https\://services.gradle.org/distributions/gradle-6.1.1-all.zip
```

Note: If you compile in release mode and get the following error: [Invoke-customs are only supported starting with android 0 --min-api 26](https://stackoverflow.com/questions/49891730/invoke-customs-are-only-supported-starting-with-android-0-min-api-26), the cause is most likely due to the Kotlin update. This problem can be fixed by adding the following to your build.gradle file:

```json
android {
  lintOptions {
    abortOnError false
  }
  compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
  }
}
```

</details>

<details>
  <summary>Update the Moshi plugin</summary>

Updating the JSON plugin called Moshi is required. After upgrading your app, this update introduced an issue with how the SDK handles auto-loading and caching config files, specifically for Rave initialization.

Note: Fresh app installs do not have this issue.

</details>

<details>
  <summary>(Android) Set android:exported values to "true"</summary>

Set the ``android:exported="true/false"`` flag in all activity, service, and receiver tags to "true":

```xml
<activity
  android:name=".MainActivity"
  android:label="@string/app_name"
  android:launchMode="singleTask"
  android:theme="@style/BFG.Material.DarkActionBar.Fullscreen"
  android:exported="true">
  <intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
  </intent-filter>

</activity>
```

:::warning

If you set the value to "false" in your main activity, your app will not launch. 

:::

</details>

<details>
  <summary>Remove FailedForAuth notification code</summary>

If you are gating account deletion on users currently logged into a Rave-based account, you need to remove this gate. Rave creates and tracks “guest” account information for users who aren’t logged in, which must be removed when an account deletion request is made. Any code that depends on the ``FailedForAuth`` notification will no longer be called. We recommend that you either remove or re-write any required code that depends on the ``FailedForAuth`` notification.

</details>

<hr />

## 9.6.1 (June 8, 2022) 

- Updated Native iOS SDK to v7.7.1, which contains an account deletion hot fix. To comply with Apple account deletion policy, ``requestAccountDeletion()`` has been expanded to handle unauthenticated (guest) accounts.
- Removed the ``FailedForAuth`` notification, and any code that depends on this will no longer be called. We recommend that you either remove or re-write any required code that depends on the ``FailedForAuth`` notification being sent from iOS to Unity.

<hr />

## 9.6.0 (May 13, 2022) 

- Updated Native Android SDK to v7.8.0, which removes the Cross Sell functionality from the BFG SDK.
- Updated Native iOS SDK to v7.7.0, which removes the Cross Sell functionality from the BFG SDK.
- Removed the Cross Sell button from the Unity Sample App. This completes the removal of all Cross Sell functionality. If you have any remaining Cross Sell Button logic or UI in your project, you will need to remove it.
- Added Android functionality to access the user’s current Rave email address using ``bfgRave.currentRaveEmail()``.

<hr />

## 9.5.0 (Feb 28, 2022) 

- Updated Native Android SDK to v7.7.0, which adds support for Account Deletion on Android mobile devices.
- Updated Native iOS SDK to v7.6.0, which adds support for Promoted In-App Purchases and updates iOS AppsFlyer.
- **Android Account Deletion**: Added a new wrapper method ``bfgRave.sharedInstance().requestAccountDeletion()``. This method will send a Zendesk support request including the current rave id to Customer Service for processing. One of the following ``NSNotifications`` will be received from this method: ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED`` or ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED``.
- **iOS Promoted In-App Purchases**: Added two new wrapper methods to support promoted in-app purchases. Use ``bfgPurchase.hasDeferredPayments()`` to determine if there are Promoted In-App Purchases to queue and ``bfgPurchase.processDeferredPayments()`` to process queued Promoted In-App Purchases.

<hr />

## 9.4.1 (Jan 4, 2022) 

This release adds support for iOS Account Deletion on iOS mobile devices to support privacy requirements effective June 30th, 2022. An Android version will come in a future release as it is not a requirement by the Google Play Store (yet).

This release contains the following changes:

- Updated Native iOS SDK to v7.5.1, which adds support for Account Deletion on iOS mobile devices.
- **iOS Account Deletion**: Added new wrapper method ``bfgRave.requestAccountDeletion()``. This method will send a Zendesk support request including the current rave id to Customer Service for processing. One of the following ``NSNotifications`` will be received from this method: ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED`` or ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED``.

<hr />

## 9.4.0 (Nov 18, 2021) 

- Updated Native Android SDK to v7.6.0, which addresses the JCenter deprecation.
- Updated Native iOS SDK to v7.5.0, which fixes a display issue in Zendesk.
- (Android) Fixed the method ``bfgPurchaseAndroid.finishPurchase()`` to correctly be called for non-consumables on purchase completion.
- (Android) Removed the "Re Enable Non-Consumable" button and command from the sample application because no automatic mechanism for this exists on Google's end. If you need to re-enable a non-consumable purchase:
    - Make the purchase of the non-consumable product, change it to a consumable product, refund it through the Google Play Console, then finally change it back to a non-consumable product.
- (Android) Added missing SDK localization for DE, NL, JA, KR, ES, FR, PT-BR, ZH-CN, ZH-TW, RU, and IT.
- (Android) Added missing Google and Amazon purchasing event handlers to the Sample App.

<hr />

## 9.3.2 (Oct 25, 2021) 

This release updates the Native Android SDK to v7.5.1, which addresses missing localization strings.

<hr />

## 9.3.1 (Oct 19, 2021) 

- (Android) Fixed a bug in v9.3.0, where MTS incorrectly reported the BFG Android SDK build version

:::warning 

If you upgraded to v9.3.0, you are required to upgrade to v9.3.1. To do so, simply replace your Android .aar with the 9.3.1 .aar to get the version number update. 

:::

<hr />

## 9.3.0 (Oct 14, 2021) 

This version adds compatibility to [Android 11/API 30](https://developer.android.com/distribute/play-policies#APILevel30). Games will need to be compatible with Android 11 / API 30 starting November 1, 2021 if you want to be able to post updates to Google Play Store moving forward. 

This release includes the following changes:

- Updated Native Android SDK to v7.5.0, which adds Android 11 / API 30 compatibility.
- Updated Native iOS SDK to v7.4.0, which adds iOS 15 compatibility.
- **Android 11 / API 30 compatibility check**: The Unity SDK is compatible with Android 11 / API 30.
- **iOS 15 compatibility check**: The Unity SDK is compatible with iOS version 15.
- (iOS) The "bfgsdkunity" URI scheme is no longer erroneously included in the built Xcode project's Info.plist for external teams when using the SDK post-process build system.
- Removed all references to the Age Gate functionality as it has been deprecated.

<hr />

## 9.2.1 (Sept 29, 2021) 

(Android) Fixed a bug in v9.2.0, where MTS incorrectly reported the BFG Android SDK build version.

:::warning 

If you upgraded to v9.2.0, you are required to upgrade to v9.2.1. To do so, simply replace your Android .aar with the 9.2.1 .aar to get the version number update. 

:::

<hr />

## 9.2.0 (Sept 24, 2021) 

- Updated Native Android SDK to v7.4.0, which includes minor bug fixes.
- Updated Native iOS SDK to v7.3.0, which includes minor bug fixes.
- Deprecated BfgUnitySdkSample-2019.4 and renamed to BfgUnitySdkSample-2019.4-unsupported.
- Removed BfgUnitySdkSample-2019.2 which will no longer be supported.
- Added BfgUnitySdkSample-2020.3 built off of Unity 2020.3.3f1 LTS. Using Unity 2020+ will require you to set iOS 11 as the minimum iOS version within Unity "Player Settings".

<hr />

## 9.1.0 (Aug 24, 2021) 

- Updated Native Android SDK to v7.3.0, which includes required updates to Android billing.
- Updated Native iOS SDK to v7.2.5, which includes minor bug fixes.
- Adds the ``GetAllAuthSources`` API to ``BfgRaveUtilities`` to retrieve auth types a user is signed in with.

<hr />

## 9.0.2 (May 24, 2021) 

- Updated Native iOS SDK to v7.2.4. This includes a change to how games retrieve Facebook permissions in Limited Login and Classic modes.
- Updated Facebook SDK to v9.2.0. This update supports additional social permissions in limited login mode.
- Updated Rave SDK to version 3.9.11
- Updated AppsFlyer SDK to version 6.2.6
- (Sample app only) Removes calls to set Facebook read permissions after the ATT dialog is dismissed
- Adds the ability to retrieve app-associated Facebook friends, if the user is authenticated through Facebook, using the new asynchronous method ``bfgRave getAppAssociatedFacebookFriends``. 

<hr />

## 9.0.1 (Apr 29, 2021) 

This release modifies ``bfgutils::attStatus`` to return the status for all iOS versions again. This is needed to properly set the FB login mode on iOS versions 14.0 through 14.4.

- Updated the Native iOS SDK to v7.2.3.

**Known Issues**

Our Sample code currently does not handle two edge case scenarios, though these could be handled fairly easily at the game implementation level if needed:

- On iOS 14.0 to 14.4, since ATT is not displayed, toggling the global ATT setting does not cause a cold start for the application. Because of this, if a game uses the sample code we have in our Sample apps or in the developer docs, the Facebook login mode is not updated immediately (i.e., when the app is warm started after the ATT tracking setting has changed). It will be updated appropriately on the next cold start. This can be handled by checking the ATT status on every warm start.
- On iOS 14.0 to 14.4, a user may globally disable the ATT tracking, which will cause the app to be set to limited login mode. If the user then re-enables tracking globally, there is currently no sample code for the app to re-enable classic login mode. We cannot reenable classic mode without prompting the user for ATT, so it is not advised to switch back to classic mode. This can be handled by the app by checking for iOS 14.0 to 14.4 on every warm or cold start, and switching the login mode back to classic.

<hr />

## 9.0.0 (Apr 27, 2021) 

Apple released information on April 20th, Upcoming App Tracking Transparency requirements, which states that iOS 14.5 will become the first version where App Tracking Transparency is enforced.

This hotfix includes the following changes to account for this update:

- Disables ATT consent calls for iOS 14.0 - iOS 14.4 (ATT dialog cannot be displayed)
- Add a new method to check whether or not the ATT dialog should be displayed: ``bfgManager::attMeetsSystemRequirements``. This will only return true for iOS 14.5 and higher versions.
- Modified ``attSelectionRequired`` and ``requestTrackingAuthorization`` to use this new method.
- Modified ``bfgutils::attStatus`` to use this new method (but this was quickly ‘undone’ in 7.2.3 (see change list above for 7.2.3)
- This also changes MTS events so that the ``appTrackingTransparencyStatus`` flag will not be included for iOS versions 14.0 to 14.4 (and it is still not included in iOS 13 and lower - though this is not new to 7.2.2).
- Removes AppsFlyer call for ``waitForATTUserAuthorization`` (timeout for starting AF) when ATT consent dialog is not shown (this fix applies to games on earlier versions of iOS14)). The game could still add this call themselves however.

**Unity Note**

This was the first release where we moved the Unity SDK to be on a new versioning line of its own. Unity is now version 9.0.0, which includes the Native iOS SDK v7.2.2 and Native Android SDK v7.1.5.

<hr />

## 7.2.1 (Apr 7, 2021) 

- Updated the AppsFlyer SDK to 6.2.4. This includes fixes for SKAdNetwork.
- Updated the Facebook SDK to 9.0.1 and includes Limited Login
- Updated the Rave SDK to 3.9.10-402, which includes support for Limited Login and a fix for SIWA login. Note: the BigFishScenePack.bundle was updated and must be updated by all games.
- Update Zendesk to send iOS 9 users to a non-javascript web portal
- Update Zendesk to handle sending users to the correct localized Zendesk site, or default to English for non-supported languages, on a game by game basis.
- Expose a new API for sending custom events to AppsFlyer (support for SKAdNetwork)
- Updated Crashlytics on Unity builds to include the Unity version for fatal and non-fatal events (key: “UnityVersion”)
- Fixed an issue with ``bfgResourcesUniversal`` targeting the iPhoneSimulator platform, which was causing build issues in Unity
- Added an optional ‘game controlled AppsFlyer startup’ mode that is intended to be used only by games that are not displaying the ATT dialog
- Fixed high severity issue in deserializing MTS events for older versions of the SDK.  

<hr />

## 7.2.0 (Jan 21, 2021) 

- Unity SDK now delivered as a Unity Package for ease of integration
- ATT framework APIs exposed via new SDK methods, wrapped for Unity developers
- ATT status now included in MTS device info payload
- Minimum iOS version support is now 10
- Firebase Crashlytics (7.0.1) and Analytics (7.0.1) are now included using the official Unity SDKs rather than embedding in the native layers
- Updated 3rd Party SDKs
    - AppsFlyer SDK updated to version 6.0.3
    - Facebook SDK updated to version 8.2
    - Rave SDK updated to version 3.9.8-399
    - Zendesk SDK updated to version 4.0.1

<hr />

## 7.1.1 (Aug 2020) 

- Fixed high severity issue in deserializing MTS events for older versions of the SDK.  

<hr />

## 7.1.0 (July 2020) 

- Updated Zendesk SDK to version 5.0 (iOS) and 3.0.2 (Android). This update to Zendesk removes the UIWebView which was present in their SDK.
- PromoCode (aka redemption service) support is now included in the SDK. 
- Added support for developers who integrate Firebase Analytics.