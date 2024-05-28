# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Privacy Manifest

:small_blue_diamond: **Tools to use:** BFG SDK

## What is a Privacy Manifest?

Apple requires that all 3rd party SDKs must include a **privacy manifest** if it collects data about the person using apps that include 3rd party SDK's, enables the app to collect data about people using the app, or contacts tracking domains. The privacy manifest file is a property list that records the types of data collected by your app or any 3rd party SDK.

:::info

For each type of data and API your app or third-party SDK collects and uses, record the reasons why you are collecting this data in your privacy manifest file. This manifest will be a requirement for apps in the app store after May 1st, 2024. For more information, refer to [Privacy manifest files | Apple Developer Documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files) :arrow_upper_right:.

:::

To comply with Apple’s requirement, the BFG SDK includes a privacy manifest declaring what data the BFG SDK tracks. It also includes the following 3rd party privacy manifest information:

- Zendesk
- Google Firebase
- AppsFlyer
- Rave
- Unity LTS
- MTS

:::warning

The BFG SDK does not include API or data collection information in the privacy manifest for the Facebook SDK's.

:::

## Data Collected by the BFG SDK

The BFG SDK collects user data with our [Mobile Telemetry Service (MTS)](./tools-mts) and Game Telemetry Service (GTS).

The following table lists the types of data collected in the BFG SDK privacy manifest: 

| **Collected Data Type** | **Linked to User** | **Used for Tracking** | **Collection Purposes** | **Sources** |
|---|---|---|---|---|
| **Name<br /><br />Phone Number<br /><br />Other User Contact Info<br /><br />Other User Content** | YES | NO | App functionality<br /><br />Product Personalization | MTS<br /><br />Zendesk |
| **Email Address** | YES | NO | App functionality<br /><br />Product Personalization<br /><br />Developer's Advertising or Marketing | MTS |
| **Coarse Location** | NO | NO | App functionality<br /><br />Analytics | MTS<br /><br />Zendesk<br /><br />AppsFlyer |
| **Precise Location** | NO | NO |   | Zendesk |
| **Device ID** | YES | YES | App functionality<br /><br />Analytics<br /><br />Developer's Advertising or Marketing<br /><br />Other Purposes<br /><br />3rd party Advertising | MTS<br /><br />Zendesk |
| **User ID** | YES | NO | App functionality<br /><br />Analytics<br /><br />Developer's Advertising or Marketing<br>Other Purposes<br /><br />3rd party Advertising | MTS<br /><br />Zendesk |
| **Crash Data** | NO | NO | Analytics | Firebase |
| **Audio Data** | NO | NO | App functionality | Zendesk |
| **Photos or Videos** | NO | NO | App functionality | Zendesk<br /><br />Rave |
| **Browsing History** | YES | YES | App functionality | Zendesk |
| **Search History** | YES | NO | App functionality | Zendesk |
| **Purchase History** | YES | NO | App functionality | MTS<br /><br />AppsFlyer |
| **Advertising Data** | YES | NO | 3rd party Advertising | Zendesk<br /><br />AppsFlyer |
| **Product Interaction** | YES | NO | Analytics | Zendesk<br /><br />Firebase |
| **Customer Support** | NO | NO | App functionality | Zendesk |
| **Other Diagnostic Data** | NO | NO | Analytics | Zendesk |
| **Other Data Type** | NO | NO | Analytics | Firebase |

The following table lists the BFG SDK Required-Reason APIs for the privacy manifest file:

| **API Category** | **Reason** |
|---|---|
| **File Timestamp** | C617.1: Inside app or group container, per documentation |
| **User Defaults** | CA92.1: Access info from the same app, per documentation<br />1C8F.1: Access info from same App Group, per documentation |
| **System Boot Time** | 35F9.1: Measure time on-device, per documentation |

## Requirements for Privacy Manifest Data Inclusion 

If game teams collect some other data on their own or if they have any other 3rd party SDK’s that are not in the BFG SDK, such as Leanplum, IronSource, etc., they should cover the privacy details in their own privacy manifest file.

### Data Collection 

If you need to write your own privacy manifest, follow these steps:

1. Create your privacy manifest file in any convenient place you want in your project.
2. Add your data collection practices to your privacy manifest file.
3. Obtain the Privacy Report from your Archive, this will help you when you declare your data collection in the App Store Connect.

If you have any 3rd party SDK's in your project that contain their own privacy manifest, you can view this file to see what data they collect in the SDK’s privacy report. 

### Required Reason API Usage 

Applications are allowed to track their users with their permission, determined by their GDPR selections, but they are never allowed to track fingerprints. Apple created a new category of APIs called Required Reason APIs to ensure the correct use of the APIs that can be used to track fingerprints to improve user experience. These Required Reason APIs are: 

- [File TimeStamp APIs](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278393) :arrow_upper_right:
- [System Boot Time APIs](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278393) :arrow_upper_right:
3. [Disk Space APIs](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278397) :arrow_upper_right:
4. [Active Keyboards APIs](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278400) :arrow_upper_right:
5. [User Defaults APIs](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api#4278401) :arrow_upper_right:

If you are using one or more of these APIs, you must add them to your privacy manifest file with at least one approved reason for their use.

### Tracking Domains

A Tracking Domain refers to a domain that is used for tracking user activity across websites or apps for advertising or data aggregation purposes.

iOS v17 automatically blocks connections to tracking domains in cases when a user has not provided tracking permission by declining the App Tracking Transparency (ATT). Before iOS v17,  some 3rd party SDK's might start tracking by default, without checking if they can track users unless specifically told not to. To prevent accidental connections like this, Apple requires you to include your tracking domains in your privacy manifest file.

With Xcode 15, the Points of Interest Instrument can show the connections to the tracking domains during your testing. This allows you to find whether a tracking domain is following ATT policy correctly. If the domain is allowed, declare it as a tracking domain in your privacy manifest file.

The BFG SDK’s privacy manifest file includes Firebase, Facebook, and AppsFlyer 3rd party tracking domains. If you have other tracking domains in your app, refer to [Apple’s Guide](https://developer.apple.com/documentation/xcode/detecting-when-your-app-contacts-domains-that-may-be-profiling-users#Analyze-your-apps-networking-behavior) :arrow_upper_right: on using the Points of Interest Instrument to detect them.

## Additional Resources and Documentation 

- [Describing data use in privacy manifests | Apple Developer Documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests) :arrow_upper_right:
- [Describing use of required reason API | Apple Developer Documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api) :arrow_upper_right:
- [Privacy updates for App Store submissions - Latest News - Apple Developer](https://developer.apple.com/news/?id=r1henawx) :arrow_upper_right:
- [Upcoming third-party SDK requirements - Support - Apple Developer](https://developer.apple.com/support/third-party-SDK-requirements) :arrow_upper_right:
- [Get started with privacy manifests - WWDC23 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2023/10060/)
- [Verify app dependencies with digital signatures - WWDC23 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2023/10061) :arrow_upper_right:
