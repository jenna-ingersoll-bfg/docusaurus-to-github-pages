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
  <summary>Apple Framework</summary>

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
| **CoreData.framework** | Required | Required for Rave integration. |
| **CoreGraphics.framework** | Required | C-based API based on the Quartz advanced drawing engine. |
| **CoreLocation.framework** | Required | Lets you determine the current location or heading associated with a device. |
| **CoreTelephony.framework** | Required | Features for obtaining information about a user’s home cellular service provider. |
| **CoreText.framework** | Required | API for laying out text and handling fonts. |
| **Foundation.framework** | Required | Defines the base layering of Objective-C classes. |
| **GameKit.framework** | Required | Features for creating social games. |
| **iAd.framework** | Required | Required to support AppsFlyer. |
| **libc.tbd** | Required | Imports all your C methods. |
| **libc++.tbd** | Required | Required to support Crashlytics. |
| **libicucore.tbd** | Required | The core library for the International Components for Unicode open source project, which enables internationalization and globalization features. Required to support Rave. |
| **libsqlite3.tbd** | Required | SQLite dynamic library. Required to support Rave. |
| **libxml2.tbd** | Required | XML dynamic library. Required to support Rave. |
| **libz.tbd** | Required | A general compression library. |
| **MobileCoreServices.framework** | Required | Defines the low-level types used in uniform type identifiers (UTIs). |
| **OpenGLES.framework** | Required | OpenGL for embedded systems. Provides classes to create 2D and 3D graphics. |
| **Photos.framework** | Optional | Search for and display photos, required by Facebook. |
| **SafariServices.framework** | Optional | Provides support for programmatically adding URLs to the user's Safari reading list. Should be marked as "optional" (not "required"). NOTE: This framework is optional in the sense that added frameworks can be marked as "required" or "optional". Since this required framework did not exist in earlier but still supported iOS versions, you should mark it as "optional" after adding it in Xcode. |
| **Security.framework** | Required | Provides decryption support. |
| **Social.framework** | Required | Integrates your app with supported social networking services. |
| **StoreKit.framework** | Required | Provides the classes to deliver In-App Purchase for iOS. |
| **SystemConfiguration.framework** | Required | Provides functionality to monitor the network state of iOS devices and detect network errors. |
| **UIKit.framework** | Required | Provides the classes to construct and manage the UI for iOS. |
| **UserNotifications.framework** | Optional | Provides checking if push notifications are enabled. |
| **WebKit.framework** | Required | Supports Apple's web technologies. |
</details>
