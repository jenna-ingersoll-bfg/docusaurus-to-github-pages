# Security & Privacy Standards

Security and privacy are essential components of Big Fish's responsible gameplay initiatives and our "player first" philosophy. In accordance with security regulations, we expect every game to comply with Big Fish’s security standards and best practices.

## GDPR Compliance 

The General Data Protection Regulation (GDPR) requires organizations to safeguard personal data and uphold the privacy rights of anyone in EU territory. 

## App Tracking Transparency (ATT) for iOS Devices 

App Tracking Transparency (or ATT) requires apps to request user authorization in order to collect app-related data that tracks the user or the device. All apps on iOS devices must use ATT if they collect data about end-users and share it with other companies for the purpose of tracking across apps and websites.

## Account Deletion 
Both the Google Play and Apple App stores require that all apps allow their players to delete their user accounts from within the app. Account deletion is a significant decision for the player, and the process for initiating and confirming deletion should be straightforward and transparent. The BFG SDK includes methods that ensure your game is compliant with Apple’s and/or Google’s account deletion standards.

```
xcodebuild -verbose
-project /path/to/My-Project.xcodeproj
-scheme My-Project
-configuration Release build
-archivePath /path/to/My-Project.xcarchive
```

<details>
    <summary>Using the Xcode Interface</summary>
1. Strip the simulator architectures before creating an archive. See gs_strip_architectures in the Prepare for Integration section for details.
2. Create the .xcarchive file. You can do this by executing the following in a terminal:

```
xcodebuild -verbose
-project /path/to/My-Project.xcodeproj
-scheme My-Project
-configuration Release build
-archivePath /path/to/My-Project.xcarchive
```

3. Add the following entry in your ExportOptions.plist

```xml
<dict>
    <key>method</key>
    <string>app-store</string>
</dict>
```

This will ensure Apple will not reject your app with the following message:

```bash
ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.
```

4. Export a .ipa from the archive generated in step 2, using the export options defined in step 3:

```bash
xcodebuild -verbose
-exportArchive
-archivePath /path/to/My-Project.xcarchive
-exportPath /path/to/ipa/
-exportOptionsPlist /path/to/ExportOptions.plist
```

</details>
