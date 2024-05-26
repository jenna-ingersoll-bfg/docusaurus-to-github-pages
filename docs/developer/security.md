# Security & Privacy Standards

Security and privacy are essential components of Big Fish's responsible gameplay initiatives and our "player first" philosophy. In accordance with security regulations, we expect every game to comply with Big Fish’s security standards and best practices. 

## GDPR Compliance

The General Data Protection Regulation (GDPR) requires organizations to safeguard personal data and uphold the privacy rights of anyone in EU territory. 

To comply with GDPR and other potential regulatory requirements, Big Fish has implemented a consent policy service. On each game launch and resume, the Big Fish SDK polls the service to find if there are consent policies for the user to see and accept. The game must be prepared to know when a policy is showing and when this policy check and display has been completed.

Each game must also be prepared to alter the behavior of any manually integrated third-party SDKs and services to comply with GDPR, based on the user's opt-in preference. For example, if the user chooses to opt-out to third-party targeted advertising, each game may need to stop sending data to specific third-party SDKs.

For more information, see: 

- GDPR Compliance with the BFG SDK
- [General Data Protection Regulation (PDF)](https://gdpr-info.eu)  :arrow_upper_right:

## App Tracking Transparency (ATT) for iOS Devices

App Tracking Transparency (ATT) requires apps to request user authorization in order to collect app-related data that tracks the user or the device. All apps on iOS devices must use ATT if they collect data about end-users and share it with other companies for the purpose of tracking across apps and websites. 

To comply with ATT, the BFG SDK includes Apple's AppTrackingTransparency framework, which presents an app-tracking authorization request to the user and provides the tracking authorization status.

For more information, see: 

- App Tracking Transparency with the BFG SDK
- [App Tracking Transparency (Apple Developer Documentation)](https://developer.apple.com/documentation/apptrackingtransparency) :arrow_upper_right:

## Account Deletion

Both the Google Play and Apple App stores require that all apps allow their players to delete their user accounts from within the app. Account deletion is a significant decision for the player, and the process for initiating and confirming deletion should be straightforward and transparent. The BFG SDK includes methods that ensure your game is compliant with Apple’s and/or Google’s account deletion standards.

For more information, see:

- Account Deletion with the BFG SDK
- [Offering account deletion in your app (Apple Support Documentation)](https://developer.apple.com/support/offering-account-deletion-in-your-app/) :arrow_upper_right:
- [Understanding Google Play’s app account deletion requirements (Google Play Console Help)](https://support.google.com/googleplay/android-developer/answer/13327111?sjid=13588466845803626281-NC) :arrow_upper_right:

## Privacy Manifest for iOS Apps

Apple requires that all 3rd party SDKs must include a privacy manifest if it collects data about the person using apps that include 3rd party SDK's, enables the app to collect data about people using the app, or contacts tracking domains. The privacy manifest file is a property list that records the types of data collected by your app or any 3rd party SDK.

To comply with Apple’s requirement, the BFG SDK now includes a privacy manifest declaring what data the BFG SDK tracks.

For more information, see:

- Declare Data Use with Privacy Manifest (iOS Only)
- [Privacy manifest files (Apple Developer Documentation)](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files) :arrow_upper_right:
