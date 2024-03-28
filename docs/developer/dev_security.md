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
    <div>
        <ul>
            <li>Open Xcode.</li>
            <li>Change the scheme of your app target to Release.</li>
            <li>Update the Build number under the <b>General</b> tab of your app target.</li>
            <li>Strip the simulator architectures before creating an archive. See !!!!LINK HERE!!!! gs_strip_architectures in the Prepare for Integration section for details.</li>
            <li>Go to the <b>Product / Archive</b> menu in Xcode and wait for the archive to be finished. Once done, the <b>Organizer</b> window will open, and you'll see a list of the archives. You can access this window by going to the <b>Window / Organizer</b> menu.</li>
            <li>Select the first archive in the list (the last one created) and click on the <b>Validate App</b> button on the right-hand side panel.</li>
            <li>Select your App Store distribution options: <b>Strip swift symbols</b> and <b>Upload app symbols</b>.</li>
            <li>Click the <b>Distribute App</b> button when validation succeeds.</li>
            <li>Select the App Store Connect option from the prompt. This ensures that the uploaded .ipa contains the SwiftSupport folder required by Apple. If you select any of the other options, such as AdHoc, Enterprise, or Development, your submission to Test Flight will fail with the following message: ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.</li>
        </ul>
    </div>
</details>
