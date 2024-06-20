# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Native Android SDK Release Notes

Keep track of every change to the Native Android SDK. This changelog lists all additions and updates to the Native Android SDK, in chronological order.

**DOWNLOAD RELEASES**: Access to all releases including and after v8.5.0 are available on Big Fish's [GitHub release repo](https://github.com/bigfishgames-external/sdk-android-releases/releases).

## 8.8.0 (May 21, 2024) 

- Updated Google Play Billing Library to v6.2.0.
- Updated Crashlytics to v18.6.3.
- Update Moshi to v1.14.0.
- Updated Kotlin to v1.7.10.
- Updated Gradle wrapper to v6.7.1.
- Updated Rave to v4.2.7.
- Fixed an MTS install event not being sent properly when first opening the app and closing the app without an internet connection

**Upgrading to v8.8.0**

<details>
  <summary>Update Gradle file</summary>

Update the Google Billing, Crashlytics, and Moshi versions in your project's gradle file, build.gradle:

```
implementation("com.android.billingclient:billing:6.2.0")
implementation("com.google.firebase:firebase-crashlytics:18.6.3")
implementation("com.squareup.moshi:moshi:1.14.0")
```

Additionally, update the version of Kotlin:

```
ext.kotlin_version = '1.7.10'
```

</details>

<details>
  <summary>Update Rave </summary>

1. Download Rave v4.2.7 from Rave Android Release.
2. Unpack the new version of Rave and replace all corresponding AARs in your project with the newest version.
</details>

<hr />

## 8.7.0 (March 29, 2024) 

- Updated Rave to v4.2.4. This requires the Android Minimum SDK to be updated from v21 to v23.
- **Android Billing**: Removed deprecated method ``bfgPurchase.sharedInstance().startUsingService()`` as it is no longer required for initialization of the billing service.
- Removed deprecation warnings from ``bfgGameReporting.logCustomEvent()`` methods. These methods are still the preferred way of sending custom events.

**Upgrading to v8.7.0**

<details>
  <summary>Update Rave</summary>

1. Replace Rave aar files in their folders (RaveFacebookPlugin.aar, RaveGooglePlugin.aar, RaveSocial.aar, RaveUtils.aar, and xmlScene.aar) with the updated v4.2.4 files.
2. Rave v4.2.4 requires three additional library dependencies. Add the following in your project's gradle file, build.gradle.

```
dependencies {     
  implementation 'androidx.security:security-crypto:1.0.0'
  implementation 'androidx.work:work-runtime:2.8.1'
  implementation 'com.android.volley:volley:1.2.1'
}
```

3. In your project's manifest file, AndroidManifest.xml, override ``RaveUniversalActivity`` orientation by adding the following new activity within the application tag:

```xml
<activity android:name="co.ravesocial.sdk.RaveUniversalActivity" tools:replace="android:screenOrientation" android:screenOrientation = "user" />
```

4. In the config file, bfg_config.json, remove the following Rave keys if they are in use:

```
"RaveSettings.General.PhoneContactsUpdateInterval"
"RaveSettings.Facebook.ContactsUpdateInterval"
```

5. Refer to the following links to ensure that all deprecated/removed settings are replaced:
    - [Deprecated/Replaced Rave Settings](https://bf-docs.ravesocial.co/android-changelog.html#android-4-2-0-release) :arrow-upper-right:
    - [Upgrading the Rave SDK](https://bf-docs.ravesocial.co/android.html#upgrading-the-rave-sdk) :arrow-upper-right:
    - [Rave Available Settings](https://bf-docs.ravesocial.co/android.html#available-settings) :arrow-upper-right:

:::info 

You might have a manifest merge conflict when compiling your application due to Rave changing the resolution strategy ``android:allowBackup`` to false. This happens if you declared ``android:allowBackup="true"`` in the application tag of an AndroidManifest.xml and you have no resolution strategy is defined. For more information about handling merge manifests conflicts, visit [Manage manifest files | Android Studio | Android Developers](https://developer.android.com/build/manage-manifests) :arrow-upper-right:

:::

</details>

<hr />

## 8.6.1 (Feb 15, 2024) 

- Fixed a bug in the Standalone Newsletter sign-up flow. It was not functioning correctly due to the removal of a UI element in the Rave SDK code.

<hr />

## 8.6.0 (Jan 09, 2024) 

- Updated the Facebook SDK to v16.2.0.
- Added email marketing explicit opt-in with updated BF scene pack.

**Upgrading to v8.6.0**

<details>
  <summary>Update Facebook SDK</summary>

1. Update the ``facebook-android-sdk`` version in the project's gradle file, build.gradle to 16.2.0:

```json
dependencies {    
  implementation 'com.facebook.android:facebook-android-sdk:16.2.0
}
```

2. Add the Facebook Client Token to your app’s strings.xml and AndroidManifest.xml files in addition to the app-id that is already there. This is required by Facebook for v13 and above.

3. Add ``facebook_app_id`` and ``facebook_client_token`` to your Strings.xml file:

```xml
<string name="facebook_app_id">[app-id]</string>
<string name="facebook_client_token">[app-token]</string>
```

4. Add the string entries to the project's manifest file, AndroidManifest.xml:

```xml
<application android:label="@string/app_name" >
  <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
  <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
</application>
```

</details>

<details>
  <summary>Update Email Marketing Explicit Opt-In</summary>

Simply ensure you are using the latest Scene pack.

A checkbox was added to accept marketing emails and the privacy policy text changed. Additionally, users based in the United States will see a birth year selection as a requirement while other regions will not see this requirement.

</details>

<hr />

## 8.5.0 (Sept 26, 2023) 

- Added a new method ``bfgManager.sharedInstance().isInitialLaunch()`` that returns true when the application has been launched for the first time ever, otherwise, it returns false.
- Moved the Account Deletion SDK notification strings ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED`` and ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED`` from the BFG SDK internal class ``bfgRaveInternal`` to the public ``bfgRave`` class.
- Updated the following 3rd party libraries:
    - Android v14 (Target API v34)
    - Facebook v16.0.1
    - Google Billing v6.0.1
    - Rave v3.9.14

**Upgrading to v8.5.0**

<details>
  <summary>Update Account Deletion notification strings</summary>

Replace the following Account Deletion notification IDs:

```
bfgRaveInternal.BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED
bfgRaveInternal.BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED
```

with the following:

```
bfgRave.BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED
bfgRave.BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED
```

</details>

<details>
  <summary>Update to Android v14</summary>

The Android SDK now supports the target API v34. Update ``targetSdkVersion`` in the project's gradle file, build.gradle to 34:

```json
defaultConfig {
  targetSdkVersion 34
}
```

</details>

<details>
  <summary>Update Facebook</summary>

1. Update the facebook-android-sdk version in the project's gradle file, build.gradle to 16.0.1:

```json
dependencies {    
  implementation 'com.facebook.android:facebook-android-sdk:16.0.1
}
```

2. Add ``facebook_app_id`` and ``facebook_client_token`` to your strings.xml file

```xml
<string name="facebook_app_id">[app-id]</string>
<string name="facebook_client_token">[app-token]</string>
```

3. Add the string entries to the project's manifest file, AndroidManifest.xml:

```xml
<application android:label="@string/app_name">
  <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
  <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
</application>
```

</details>

<details>
  <summary>Update Google Billing </summary>

Update the billing client version in the project's gradle file, build.gradle to v6.0.1:

```json
dependencies {    
  implementation 'com.android.billingclient:billing:6.0.1'
}
```

</details>

<details>
  <summary>Update Rave</summary>

Copy the files from the release (in the AARs folder) and replace existing AARs files with the following new files:

- RaveFacebookPlugin.aar
- RaveSocial.aar
- XMLScene.aar
- RaveGooglePlugin.aar
- RaveUtils.aar

</details>

<hr />

## 8.4.0 (June 23, 2023) 

- Updated Google Billing version to v5.0.0.
- Updated ``BFGUnityPlayerActivity`` to now implement ``IUnityPlayerLifecycleEvents``. Lifecycle events are now being passed to the Unity Player just as the standard `UnityPlayerActivity` does. Unity-classes.jar is also updated to include this change.

**Upgrading to v8.4.0**

<details>
  <summary>Amazon Tester App testing for API 30+</summary>

It was discovered that Amazon purchasing does not work on API 30 and above when using the Amazon Tester App. This can be fixed by modifying the AndroidManifest.xml file for your Amazon app. This does not apply to Amazon Live App Testing builds.

In order to purchase using the Amazon Tester App for Amazon devices running API 30 or higher, you will need to add the following to your manifest file, at the root level of the file, under the manifest tag:

```xml
<queries>
  <package android:name="com.amazon.sdktestclient" />
</queries>
```

</details>

<details>
  <summary>Update Google Billing</summary>

Update the billing client version in the project's gradle file, build.gradle to v5.0.0:

```json
dependencies {    
  implementation 'com.android.billingclient:billing:5.0.0'
}
```

</details>

<hr />

## 8.3.0 (Apr 6, 2023) 

- Modified the Account Deletion Request Subject to remove a duplicate instance of the word ‘Account’.
- Updated Android logic for generating the ``BFGUDID``.
- Added debug output when a purchase fails because no test users are logged into the device.

<hr />

## 8.2.0 (Nov 23, 2022) 

- **Zendesk Update**: Updated Zendesk to v5.1.0. This update addresses crashes during ticket attachment and provides more context about required permissions when adding attachments to Zendesk tickets (a Google featuring requirement). It also supports Android 13 (API 33), which requires new granular media permissions for attaching images to Zendesk tickets.
- Updated minimum Android SDK to v21 as a required part of the Zendesk v5.1.0 update.
- Upgraded Gradle to v6.5.1 in support of Unity 2021.3.9f1 and Unity toolchain requirements.
- Added support for the latest Android Studio versions Chipmunk and Dolphin.
- Fixed a crash when attempting to make a purchase using a null ``productId``.

**Upgrading to v8.2.0**

<details>
  <summary>Update Zendesk and minSDKVersion</summary>

1. Open your project's manifest file, AndroidManifest.xml and add the following code:

```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
```

2. Open your project's gradle file, build.gradle and add the following dependencies:

```json
defaultConfig {
  minSdkVersion 21
}

dependencies {
  implementation group: 'com.zendesk', name: 'support', version: '5.1.0'
  implementation 'com.zendesk.belvedere2:belvedere:3.0.5'
}
```

</details>

<hr />

## 8.1.0 (Aug 25, 2022) 

- Updated the Google Play Billing library to v4.1
- **Android 13 / API 33 Compatibility**: The Android target API level has been increased to 33, which is Android 13.
- Made general improvements to our Billing API
- Updated Firebase Crashlytics to 18.2.12 to keep the SDK and game teams up-to-date with the latest changes and fixes.

<details>
  <summary>Update Google Billing Library</summary>

:::info 

The Google Play Console introduced a new, "Allow users to purchase more than 1 of this product in a single transaction" option for Google Billing 4, but the BFG SDK does not support it at this time. Ensure that the "Allow users to purchase more than 1 of this product in a single transaction" checkbox in Google Play Console is unchecked when creating or updating IAP SKUs for your apps.

:::

Update your app’s gradle file, build.gradle with the following changes:

```json
dependencies {
  implementation 'com.android.billingclient:billing:4.1.0'
}
```

</details>

<details>
  <summary>Update Android target version</summary>

Update your app’s gradle file, build.gradle with the following changes:

```json
android {
  compileSdkVersion 33
    
  defaultConfig {
    targetSdkVersion 33
  }
}
```

</details>

<details>
  <summary>Update Firebase Crashlytics</summary>

Update your app’s gradle file, build.gradle with the following changes:

```json
dependencies {
  classpath 'com.google.firebase:firebase-crashlytics-gradle:2.9.1'
  implementation 'com.google.firebase:firebase-crashlytics:18.2.12'
}
```

</details>

<hr />

## 8.0.0 (July 25, 2022) 

- **Android 12 / API 31 Compatibility**: The Android target API level has been increased to 31, which is Android 12.
- **3rd Party Library Updates**: To support the upgrade to Android 12, the following 3rd party SDK updates are included in this release:
    - Updated the Facebook library to 12.3.0
    - Updated Rave SDK to 3.9.8
    - Updated Kotlin library to 1.5.10
    - Updated the Gradle distribution to 6.1.1-all
    - Updated the Android Gradle plugin to 4.0.0
    - Updated the Moshi CodeGen to 1.12.0
- Corrected a rare condition that may distort MTS session length telemetry.
- The method ``requestAccountDeletion()`` has been expanded to support non-authenticated accounts.
- Added the ability to configure AppsFlyer dev key may now be configured from bfg_config.json.
- Expanded the ``bfgRave.sharedInstance().requestAccountDeletion()`` method to support deletion of non-authenticated (“guest”) Rave accounts.
- Removed ``FailedForAuth`` notification.

**Upgrading to v8.8.0**

<details>
  <summary>Upgrade Target SDK Version</summary>

Update the targetSdkVersion and compileSdkVersion to 31 in the project's gradle file, build.gradle as follows:

```json
compileSdkVersion 31

defaultConfig {

minSdkVersion 16
targetSdkVersion 31
}
```

</details>

<details>
  <summary>Update 3rd Party Dependencies</summary>

Update 3rd party dependencies to fix an incompatibility with the current Facebook SDK version and Android 12. Update the following values in your build.gradle and gradle-wrapper.properties files:

```json
classpath 'com.android.tools.build:gradle:4.0.0'
implementation 'com.facebook.android:facebook-android-sdk:12.3.0'
implementation 'com.squareup.moshi:moshi:1.12.0'
ext.kotlin_version = '1.5.10'
gradle-wrapper.properties
```

```
distributionUrl=https\://services.gradle.org/distributions/gradle-6.1.1-all.zip
```

Note: If you compile in release mode and get the following error: [Invoke-customs are only supported starting with android 0 --min-api 26](https://stackoverflow.com/questions/49891730/invoke-customs-are-only-supported-starting-with-android-0-min-api-26); the cause of the error is most likely due to the Kotlin update. This problem can be fixed by adding the following to your build.gradle file:

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

Update the JSON plugin called Moshi is required. After upgrading your app, this update introduced an issue with how the SDK handles auto-loading and caching config files, specifically for Rave initialization.

Note: Fresh app installs do not have this issue.

</details>

<details>
  <summary>Set android:exported values to "true"</summary>

Set ``android:exported="true/false"`` flag in all activity, service, and receiver tags.

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

If you set the value to false in your main activity, your app will not launch. 

:::

</details>

<details>
  <summary>Remove FailedForAuth notification code</summary>

If you are gating account deletion on users currently logged into a Rave-based account, you need to remove this gate. Rave creates and tracks “guest” account information for users who aren’t logged in, which must be removed when an account deletion request is made. Any code that depends on the ``FailedForAuth`` notification will no longer be called. We recommend that you either remove or re-write any required code that depends on the ``FailedForAuth`` notification.

</details>

<hr />

## 7.8.0 (May 13, 2022) 

- Removed Cross Sell button from the BFG SDK. This completes the removal of all Cross Sell functionality. If you have any remaining Cross Sell Button logic or UI in your project, you will need to remove it.
- Removed deprecated Android Date functionality to reduce warnings in the SDK output.
- Moved BFG SDK ``UnitySendMessage`` call off the Android UI thread to reduce potential ANRs.
- Fixed a Dark Mode Text Bug for the Zendesk age picker.
- Added a new script ``printGitHash.sh``. This script prints the Android SDK's git hash that was last built against from the Terminal. This file will need to be distributed separately as it is in the SDK's tools folder which is stripped out of the released android .aar file we distribute to game teams through SVN.
    - Example usage: ``./printGitHash.sh <path-to-android-sdk-aar>``
- Added functionality to access the user’s current Rave email address if they’re logged into Rave and have email address sharing enabled using bfgRave.getCurrentEmail().
- Added the ability to configure the AppsFlyer dev key via bfg_config.json. To do so, add ``“devkey” : “<your key>”`` to the appsflyer section of bfg_config. If no dev key is provided, the Big Fish dev key is used by default.

<hr />

## 7.7.0 (Feb 28, 2022)

- **Account Deletion**: Added a new wrapper method ``bfgRave.sharedInstance().requestAccountDeletion()``. This method will send a Zendesk support request including the current rave id to Customer Service for processing. One of the following ``NSNotifications`` will be received from this method: ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED`` or ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED``.
- Updated the Rave SDK to v3.9.8.
- Removed nearly all of the remaining semaphores in the Android Unity wrapper code to prevent future ANR concerns.
- Fixed several UI display issues.
- Fixed a crash involving the age date picker when creating a SUSI account on Android API 30+.
- Handled an ‘out of memory’ exception that can be thrown in RaveSocial.getCurrentUser.

<hr />

## 7.6.0 (Nov 18, 2021) 

- **JCenter Deprecation**: Migrated third-party SDKs to mavenCentral() repository from JCenter. As of February 1, 2022, JCenter will be deprecated and made read-only.
- Updated the AppsFlyer library to v6.4.2 in order to stay up to date with security fixes.
- Updated the Google Play Billing library to v3.0.3 to correct an issue where Google sometimes did not continue processing a purchase that was canceled before it was finished by upgrading to Google Play Billing library v3.0.3.
- Rewrote the method ``bfgPurchaseGoogle.postCurrentInventory()`` to fix a crash and return a json string of all purchased non-consumable items. Prior to v7.3.0, this method returned a list of all available non-consumable items. If you use this method, switch to using ``GetProductInfo()`` for retrieving available sku data.
    - To prevent the API from breaking, the method ``bfgPurchaseGoogle.postCurrentInventory()`` will always return true, even if an internet connection is unavailable. 
    - The Google Play Billing library was changed in 3.x to cache the last-pulled inventory and to update when the internet connection is restored. The purchased non-consumables will be sent in the ``NOTIFICATION_POST_CURRENT_INVENTORY_SUCCEEDED`` payload (as they were previously).

**Upgrading to v7.6.0**

<details>
  <summary>Remove references to JCenter</summary>

In this release, we migrated the third-party SDKs to ``mavenCentral()`` repository from JCenter. Replace any references to ``jcenter()`` within the "repositories" section(s) with ``mavenCentral()`` as follows:

```
repositories {
  // Replaces jcenter()
  mavenCentral()
}
```

</details>

<details>
  <summary>Update Google Billing libraries</summary>

In this release, we updated the Google Play Billing library to v3.0.3. Update your build.gradle file as follows:

```json
dependencies {
  implementation 'com.android.billingclient:billing:3.0.3'
}
```

</details>

<details>
  <summary>Update AppsFlyer</summary>

In this release, we updated the AppsFlyer library to 6.4.2 in order to stay up to date with security fixes. Update your app’s build.gradle ``com.appsflyer:af-android-sdk`` entry to 6.4.2 and ``com.android.installreferrer:installreferrer`` to 2.2 as follows:

```json
dependencies {
  implementation 'com.appsflyer:af-android-sdk:6.4.2'
  implementation 'com.android.installreferrer:installreferrer:2.2'
}
```

</details>

<hr />

## 7.5.2 (Oct 27, 2021) 

This release fixed notifications and reporting for non-consumable products. All changes do not impact games that only use consumable products.

The following bugs were identified and resolved:

- Multiple ``NOTIFICATION_PURCHASE_SUCCEEDED`` and ``NOTIFICATION_PURCHASE_SUCCEEDED_WITH_RECEIPT`` notifications were sometimes sent for the same purchase of a non-consumable product
- Multiple MTS messages were sometimes sent for the same purchase of a non-consumable product
- The ``NOTIFICATION_RESTORE_SUCCEEDED`` notification wasn't sent for non-consumable purchases in response to the ``restorePurchase`` method call. Both ``NOTIFICATION_RESTORE_COMPLETED`` and ``NOTIFICATION_RESTORE_SUCCEEDED`` are now sent when calling ``restorePurchase``.
- In addition, the Sample App has been updated to support receipt of both ``restorePurchase`` notifications, (``NOTIFICATION_RESTORE_COMPLETED`` and ``NOTIFICATION_RESTORE_SUCCEEDED``) and now displays a toast containing a list of restored products, if any, on launch.

<hr />

## 7.5.1 (Oct 25, 2021) 

This minor release addresses missing strings that could have prevented Google Featuring for several games. The missing and/or incomplete localizations that Google cited were Korean and Chinese (Simplified and Traditional); however, to be proactive, we moved forward with a complete localization effort across all supported languages.

The localization languages supported by the SDK as of this release are:

- EN
- DE
- NL
- JA
- KR
- ES
- FR
- PT-BR
- CN-ZH (Simplified Chinese)
- ZH-TW (Traditional Chinese)
- RU
- IT

<hr />

## 7.5.0 (Oct 14, 2021) 

- **Android 11 / API 30 Compatibility**: The Android target API level has been increased to 30, which is Android 11.
- Removed the Age Gate feature from the library and sample app. This feature is no longer in use by any of our games, and is not expected to be used moving forward.
- Added new permission to the manifest - ``com.google.android.gms.permission.AD_ID`` - to make it compatible with Android 12 future updates. 

**Upgrading to v7.5.0**

<details>
  <summary>Upgrade Android Studio</summary>

In order to develop on Android 11 / API 30, you must upgrade Android Studio to v2020.3 or higher. This upgrade includes updates to both Kotlin (203.1.x) and Java (11.0.x).

:::info 

A change in Android Studio’s versioning scheme occurred during with their latest release; for more information, see the https://developer.android.com/studio/releases#new-version-numbering.

:::

</details>

<hr />

## 7.4.0 (Sept 24, 2021) 

:::warning

Reporting of non-consumable products is broken in Android SDK v7.4 due to a change in Android's minimum requirements. If your game uses non-consumable products, do not use this version. You must upgrade to Android SDK v7.5 or later in order to support Android 11 / API 30.

::::

- Updated the AppsFlyer deep link handler to share the "deep_link_value" string from appsflyer if no ``af_dp`` value is set.
- Removed multiple semaphores from methods in bfgPurchaseUnityWrapper.java to prevent a threadlock ANR when multiple threads attempt to interact with the Unity thread.
- Removed the semaphore on ``bfgUtilsUnityWrapper.BfgUDID()`` to prevent a threadlock ANR when multiple threads are interacting with the object.
- Increased the logging level on MTS server errors to assist developers with debugging event reporting.
- Added documentation for the max size of ``logCustomEvent()``. This has been a long-standing limit and is not new functionality.
- Fixed an issue for Zendesk where UI was unreadable in dark mode.

<hr />

## 7.3.0 (Aug 24, 2021) 

- **Google Play Billing**: The in-app billing system has been updated to replace the obsolete AIDL-based Google purchase system with Google's new Google Play Billing system.
- **Firebase Upgrade**: Firebase support remains at version, V7.0.1, but has been reconfigured to remain in parity with Firebase no longer supporting UPM.
- **Amazon Device Manager (ADM) Upgrade**: The Amazon Device Manager has been upgraded to v1.1 to fix a crash and support Amazon devices running Fire OS7.
- **API Update**: The method signature ``setCustomValue(key, value)`` has been renamed to ``setCustomData``. This method replaces the ``setBoolean``, ``setDouble``, ``setFloat``, ``setInt``, and ``setString`` methods of ``bfgCrashlytics`` in the Native Android SDK and will allow users to pass different data types into Crashlytics using a single method.

Several minor changes have been incorporated into this release that do not expose changes to games beyond possible changes to the game's Gradle file:

- Updated all uses of bfgAssert.nullParameter within the SDK to provide better logging if the SDK is called improperly from a game.
- Removed all warning and supporting code for default products in in-app billing. No games are using this unsupported feature.
- Updated library dependencies for Gradle in the Android Sample App to match new SDK requirements.
- Removed support for non-default Notification Channels. No games are using this feature extension or intend to do so in the foreseeable future.
- Deprecated the ``bfgPlacements.setSuppressPlacement`` function. Use the ``bfgreporting.bfgGameReporting.setSuppressPlacement`` function instead.
- Fixed an application crash that occurs when there is a missing AppsFlyer end date in the Mobile Admin Dashboard.

**Upgrading to v7.3.0**

<details>
  <summary>Update Firebase signing certificate</summary>

The Firebase library requires creating/updating the [SHA-1 fingerprint of the signing certificate](https://firebase.google.com/support/guides/launch-checklist) :arrow-upper-right: for the Android platform. The SHA-1 fingerprint can be created by [following these steps](https://developers.google.com/android/guides/client-auth#using_play_app_signing) :arrow-upper-right:. Once created, add the fingerprint to your Firebase project by [following these steps](https://support.google.com/firebase/answer/9137403?hl=en#:~:text=In%20your%20Project%20settings%2C%20go,SHA%20fingerprint%2C%20then%20click%20Save) :arrow-upper-right:.

If you already have a SHA-1 fingerprint, Google recommends deleting it and following the steps above.

</details>

<details>
  <summary>Update Amazon Device Manager (ADM) Updates</summary>

:::info

The following ADM changes fix a crash that occurs in newer Amazon devices running Fire OS 7.

:::

The Amazon Device Manager has been upgraded to v1.1 to fix a crash and support Amazon devices running Fire OS7. To support this update, follow these steps:

1. From your build.gradle file, remove

```
compileOnly files('libs/amazon-device-messaging-1.0.1.jar')
```

2. Remove amazon-device-messaging-1.0.1.jar from your Android project files. This file is no longer needed to support ADM.
3. Update AndroidManifest.xml to implement a correction identified by Amazon in their previously required settings for push notification handling in apps that target Amazon devices. This change can be safely included in both Amazon and Google manifests.

```xml
<application>
  <activity>
    <service android:name="com.bigfishgames.bfglib.bfgPush.bfgADMMessageHandler"
      android:permission="android.permission.BIND_JOB_SERVICE"
      android:exported="false" />
    <service android:name="com.bigfishgames.bfglib.bfgPush.bfgLegacyADMMessageHandler"
      android:exported="false" />
  </activity>
</application>
```

</details>

<details>
  <summary>Update 3rd party dependencies</summary>

A number of 3rd party libraries and dependencies were recently added, updated and/or removed. Ensure that these library versions have been updated in the dependencies section of your build.gradle file:

```json
dependencies {
  // Required for updates to Google Billing in BFG Android SDK v7.3.0
  implementation 'com.android.billingclient:billing:3.0.0'
  
  // Updated in BFG Android SDK v7.1.6/v7.1.7
  implementation 'com.appsflyer:af-android-sdk:6.2.3'
  implementation 'com.android.installreferrer:installreferrer:2.1'
  implementation 'com.facebook.android:facebook-android-sdk:8.2.0' 
  implementation 'com.birbit:android-priority-jobqueue:2.0.1'
  implementation 'com.google.android.gms:play-services-auth:18.1.0'
  implementation 'com.google.android.gms:play-services-plus:17.0.0
}
```

This dependency is no longer required and can safely be removed from your build.gradle file:

```
'com.google.android.gms:play-services-identity:15.0.0'
```

</details>

<details>
  <summary>Remove instances of consumePurchase method</summary>

The changes to Android purchasing in v7.3 require no changes in the game code. Note, however, that the ``consumePurchase`` method, previously used to consume a consumable product before finishing the purchase flow, is no longer needed and all instances of this method should be removed.

If you keep the ``consumePurchase`` method in your code, it will behave as follows:

- When used with a product that was defined using bfgPurchase's ``defineConsumableSKUs`` method, it has no effect.
- If used with a product that was not properly defined using bfgPurchase's ``defineConsumableSKUs`` method, it adds the product SKU to the list of consumable SKUs. If one is pending, it consumes the purchase and it then has no further effect for the same product SKU.

</details>

<hr />

## 7.1.7 (July 25, 2021) 

- **Facebook SDK Update to v 8.2.0**: Due to security issues involving Facebook login authentication through embedded browsers on Android devices, beginning in August 2021, Facebook will no longer allow login through embedded browsers on Facebook SDK versions less than 8.2.0. To resolve this issue, the Native BFG SDK has updated the Facebook SDK to version 8.2.0. For Facebook login authentication via Rave, this will require updating the ``implementation ('com.facebook.android:facebook-android-sdk:x.x.x')`` entry to 8.2.0 in your game's gradle build file, as well as updating your bfgLib-release.aar file with the version in this release. If your team uses the Facebook SDK directly for other purposes (such as GraphAPI v8.0 calls) to retrieve friend lists, you will need to test to make sure this functionality still works correctly.

<hr />

## 7.1.6 (June 25, 2021) 

- **AppsFlyer SDK Update to v6.2.3**: This addresses an issue where v4.11 does not properly reporting launch events, causing some AppsFlyer reporting to be lost. This was especially critical when purchase events were not reported properly. This release provides support for AppsFlyer 6.2.3 to address this problem and provide support for current AppsFlyer versions.

<hr />

## 7.1.5 (Dec 2020) 

This release addresses a crash that is unique to EverMerge while retrieving a Firebase push token.

<hr />

## 7.1.4 (Nov 2020) 

The SDK now includes the name value in all custom events logged by games. This addresses an issue in custom events where Android clients were no longer sending custom events which conformed to their requirements due to a missing field, name. This bug in the ``logCustomEvent`` method was introduced in v7.0.

<hr />

## 7.1.3 (Nov 2020) 

- Made some minor modifications to bfgCrashlytics:
    - Updated the SDK internal logging (bfgLog) that flows into bfgCrashlytics to occur in both debug and release builds, instead of only release.
    - Added bfgCrashlytics ``getInstance()`` and deprecated ``sharedInstance()`` - this was basically just a name change.
- Updated misc external libraries to newer versions including: google-services, firebase-crashlytics-gradle, firebase-analytics, firebase-messaging, mockito-core
- Fix a bug for Newsletter Signup

<hr />

## 7.1.2 (Sept 2020) 

- Updated Android SDK to avoid ANR in ``bfgSettings`` code

<hr />

## 7.1.1 (Sept 2020) 

- Updated Android SDK to avoid NPE in Zendesk error scenario

<hr />

## 7.1.0 (July 2020) 

- Updated Zendesk SDK to v3.0.2 (Android). This update removes the UIWebView from the SDK and underlying code.
- PromoCode (aka redemption service) support is now included in the SDK. 
- Added support for developers who integrate Firebase Analytics

<hr />

## 7.0.0 (Mar 2020) 

:::warning 

**IMPORTANT KNOWN ISSUE**: [28-May-2020] There is a known issue where crashes are sometimes not reported properly to the Firebase Crashlytics console. Although this works properly in almost all cases, there are known instances where a crash doesn't get reported, especially for forced crashes. If guaranteed crash reporting is important to your game, you should strongly consider upgrading to the v7.1 release.

:::

This release includes the following changes:

- **New, unified config file**: Support for bfg_first_launch_settings.json and bfg_upgrade_settings.json have been removed and their functionality has been replaced with the bfg_config.json file.
- **Logical modularity**: SDK dependencies are required, but feature integration and configuration is optional.
- **Deprecated code removed**: Several deprecated features were removed and are no longer supported:
    - Corner Cross Sell button and its related classes (replaced by Cross Sell Button)
    - TUNE
    - Kontagent
    - bfgGameReporting.setDeferredDeepLinkDelegate
    - All Premium mobile game supporting features
    - bfgReachability
    - bfgDownload and its related classes

**Deprecation of existing code**

``com.bigfishgames.bfglib.bfgRating`` is deprecated and will be removed in 7.1

``com.bigfishgames.bfglib.bfgBrandingViewController`` and related Branding functionality is deprecated and will be removed in the future