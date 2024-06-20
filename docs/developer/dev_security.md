# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Native iOS SDK Release Notes

Keep track of every change to the Native iOS SDK. This changelog lists all additions and updates to the Native iOS SDK, in chronological order.

**DOWNLOAD RELEASES**: Access to all releases including and after v8.3.0 are available on Big Fish's [GitHub release repo](https://github.com/bigfishgames-external/sdk-ios-releases/releases) :arrow_upper_right:.

<hr />

## 8.6.1 (June 06, 2024) 

- Updated BigFishScenePack to resolve an unexpected error.
- Updated Crashlytics to target iOS v12 and above.

**Upgrading to v8.6.1**

<details>
  <summary>Update BigFishScenePack</summary>

1. In the Xcode Project, navigate to the **General** tab for the **App Target**.
2. Click the '**+**' under **Frameworks, Libraries, and Embedded Content**.
3. Click **Add Other**, then **Add Files** and select the BigFishScenePack.xcframework and set it to **Embed & Sign**.

To update the BigFishScenePack.bundle, replace with the new version from the release.

</details>

<details>
  <summary>Update Crashlytics</summary>

Replace the bfg_iOS_Crashlytics.xcframework with the new version.

</details>

<hr />

## 8.6.0 (May 21, 2024) 

- Added a custom MTS event and bfgLog message to report promoted in-app purchases.
- Updated Facebook SDK to v17.0.0.
- Updated Firebase SDK to v10.24.0.
- Updated RaveSocial SDK to v4.3.1.
- Updated BigFishScenePack with RaveSocial SDK v4.3.1.
- Deprecated the ``-ld64`` flag with Xcode 15, ``-ld_classic`` should be used instead.

**Upgrading to v8.6.0**

<details>
  <summary>Xcode 15 Flag Deprecation</summary>

If you have ``-ld64`` flag in the **Build Settings/Other Linker Flags** of your application target, replace it with -``ld_classic``.

</details>

<details>
  <summary>Update RaveSocial SDK and BigFishScenePack</summary>

To update RaveSocial SDK and the BigFishScenePack, replace the following frameworks:

- RaveSocial.xcframework
- BigFishScenePack.xcframework

Additionally, replace the following bundles:

- RaceSocial.bundle
- BigFishScenePack.bundle

</details>

<details>
  <summary>Update the Facebook SDK</summary>
Update each of the following Facebook frameworks:

- FBAEMKit.xcframework
- FBSDKCoreKit_Basics.xcframework
- FBSDKCoreKit.xcframework
- FBSDKLoginKit.xcframework
- FBSDKShareKit.xcframework

Additionally, add the ``FacebookClientToken`` key to your Info.plist:

1. In the Facebook App Dashboard, open **Settings**.
2. Navigate to **Advanced**.
3. Under the **Client Token** section, add the ``FacebookClientToken`` key.

</details>

<details>
  <summary>Update the Firebase SDK</summary>

Update or add each of the following Firebase Frameworks:

- FirebaseAnalytics
    - FBLPromises.xcframework
    - FirebaseAnalytics.xcframework
    - FirebaseCore.xcframework
    - FirebaseCoreInternal.xcframework
    - FirebaseInstallations.xcframework
    - GoogleAppMeasurement.xcframework
    - GoogleAppMeasurementIdentitySupport.xcframework
    - GoogleUtilities.xcframework
    - nanopb.xcframework
- FirebaseCrashlytics
    - FirebaseCoreExtension.xcframework
    - FirebaseCrashlytics.xcframework
    - FirebaseSessions.xcframework
    - Replace PromisesSwift.xcframework with Promises.xcframework
    - Run the FirebaseCrashlytics executable file
- FirebasePerformance
    - FirebaseABTesting.xcframework
    - FirebasePerformance.xcframework
    - FirebaseRemoteConfig.xcframework
    - Add FirebaseRemoteConfigInterop.xcframework
    - Add FirebaseSharedSwift.xcframework
    - GoogleDataTransport.xcframework

In Xcode:

1. Go to **General** tab.
2. Under the **Frameworks, Libraries, and Embedded Content** section:
    - Replace PromisesSwift.xcframework with Promises.xcframework.
    - Add FirebaseRemoteConfigInterop.xcframework and FirebaseSharedSwift.xcframework.
3. Navigate to the **Build Settings** tab.
    - Add ``$(SDKROOT)/usr/lib/swift`` line to the **Library Search Paths**.
    - Move it to the first line in **Library Search Paths**.

</details>

<hr />

## 8.5.0 (March 22, 2024)

- Added the Privacy Manifest file. For more information, refer to our [Privacy Manifest](../developer/feature-privacy-manifest) documentation.
- Updated to Firebase v10.7.0.
- Updated Deployment Target and Minimum iOS to v12.
- **Sample App**: Added fatal and non-fatal crash buttons as examples for testing Crashlytics crash events.
- Removed deprecation warnings from ``bfgGameReporting.logCustomEvent()`` methods. These methods are still the preferred way of sending custom events.

**Upgrading to v8.5.0**

<details>
  <summary>Update Firebase</summary>

Add Frameworks/ThirdParty/Firebase/Firebase.h and all libraries in the Firebase directory to your application bundle when linking ``bfg_iOS_Crashlytics`` as static dependencies.

- Most games should omit ``FirebaseAnalyticsSwift`` and use ``FirebaseAnalytics`` instead. ``FirebaseAnalyticsSwift`` should be used for SwiftUI projects.

Linking these libraries in the app bundle is a new requirement as of this release, as they were previously encapsulated in bfg_iOS_Crashlytics.xcframework. This change is required due to the changes in Apple's build tools.

If your game doesn’t already contain Swift files, add an empty Swift file to your project and allow Xcode to generate a Bridging Header, as many of these new libraries contain Swift.

If your game uses SwiftUI views, link ``FirebaseAnalyticsSwift.xcframework`` along with the other Firebase xcframeworks.

</details>

<details>
  <summary>Support for iOS v12</summary>

:::info 

These upgrade steps are not needed if your minimum iOS is v13 or higher.

:::

An additional framework (SwiftUI) is required to support iOS v12, regardless of whether or not your app uses Swift UI views. To weakly link the SwiftUI framework:

1. In the Xcode Project Navigator, select your project file (blue Xcode icon) at the topmost of the tree.
2. In the editor that opens, ensure your app target is selected or the target you are using for SwiftUI.
3. Select the **Build Phases** tab.
4. Open the **Link Binary With Libraries** section.
5. Click the **+** button under the list that appears.
6. Type "SwiftUI" into the search field of the popup sheet.
7. Select **SwiftUI.framework** and click **Add**.
8. On the new row in the table, click the **Required** popup button in the last column.
9. Change the value to "Optional".

</details>

<hr />

## 8.4.1 (Feb 15, 2024) 

- Fixed a bug in the Standalone Newsletter sign-up flow. It was not functioning correctly due to the removal of a UI element in the Rave SDK code.
- Fixed a bug where content was missing for non-US locales in email login.

<hr />

## 8.4.0 (Jan 09, 2024) 

- Updated to Zendesk v7.0 for chatbot support.
- Added Newsletter Opt-In checkbox for all localities and text updates for the checkbox and policies.
- Added alert for players when the internet isn’t available in Zendesk when requesting help articles or requests.
- Added helpful debug output for ‘failed to acquire product info’ error.

**Upgrading to v8.4.0**

<details>
  <summary>Update Zendesk </summary>

Remove the existing Zendesk xcframeworks from your project and replace them with the frameworks found in /frameworks/ThirdParty/Zendesk/*. It's no longer necessary to strip architectures before submitting your game to the App Store.

</details>

<details>
  <summary>Update iOS for Newsletter Opt-In</summary>

Update /Frameworks/ThirdParty/RaveSocial.xcframework and /Frameworks/Resources/BigFishScenePack.bundle.

</details>

<hr />

## 8.3.0 (Sept 26, 2023)

- **Sample App**: Updated the deprecated ``UIAlertView`` to ``UIAlertController`` in the iOS Sample App BFGUIKitExample.
- Hardened purchasing for ``null produpropertiesct`` in the Native iOS SDK.

<hr />

## 8.2.0 (June 23, 2023) 

- Updated Facebook SDKto v11.2.1. Facebook Graph API v10 will be deprecated at the end of June 2023.
- Removed all bcsymbolmap files from the iOS SDK. The SDK is now built with Xcode v14.3, which no longer supports bitcode. The bcsymbolmap files cause build errors and are no longer needed.

**Upgrading to v8.2.0**

<details>
  <summary>Update Facebook Graph Version</summary>

Facebook Graph API v10 will be deprecated at the end of June 2023.

1. Update the version used in any calls to the Facebook Graph API for your app.
2. Update the version used in the Facebook dashboard under **Settings > Advanced > Update API Version**.

</details>

<details>
  <summary>Update Facebook SDK</summary>

1. Remove the following frameworks from your project:
    - FBSDKCoreKit.framework
    - FBSDKLoginKit.framework
    - FBSDKShareKit.framework
2. Replace the removed frameworks with their xcframework files found incom.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic.
3. Add the FBAEMKit.xcframework and FBSDKCoreKit_Basics.xcframework from the same directory.
4. In the Unity Editor, navigate to **General > Frameworks & Libraries** and set each of the xcframeworks above to ‘Embed and sign’.

</details>

<hr />

## 8.1.0 (Apr 6, 2023) 

- Updated Zendesk to version v6.0.0. This fixes an issue where users cannot access or add an image to an existing ticket.
- Updated AppsFlyerLib to v6.10.0 to supports SKAdNetwork v4.0. This also fixes an issue with a double invocation of ``didResolveDeepLink`` on links based on URI scheme, and adds improved re-install detection by adding local storage.
- Updated minimum iOS version from v9.1 to v11.
- Modified the Account Deletion Request Subject to remove a duplicate instance of the word ‘Account’.

**Upgrading to v8.1.0**

<details>
  <summary>Update SDAdNetwork for UA Campaigns for iOS 14+</summary>

SKAdNetwork v4.0 is required for creating UA campaigns targeting iOS 14+.

</details>

<details>
  <summary>Update to Xcode 14</summary>

Xcode 14 ends support for bitcode. To disable bitcode:

1. Open your project **Build Settings**.
2. Search for ‘bitcode’ and set **Bitcode Enabled** to "NO" for your project and targets.

Apps submitted to the Apps Store as of April 2023 must be built in Xcode 14 with bitcode disabled. This does not impact dependencies.

</details>

<details>
  <summary>Update AppsFlyerLib</summary>

Remove AppsFlyerLib.xcframework from your project and replace it with the new version found in the framework/ThirdParty directory.

The AppsFlyerLib xcframework can be found in com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic.

</details>

<details>
  <summary>Update Zendesk</summary>

1. Remove the reference to the strip-architectures script from your **Build Phases > Run Script** that points to the old Zendesk frameworks.
2. Change the minimum SDK version to 11 under the **General** Tab.
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
5. Go to **General > Frameworks & Libraries** to set each of the xcframeworks above to **Embed and sign**.

The Zendesk xcframeworks can be found in com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic.

</details>

<hr />

## 8.0.0 (Nov 23, 2022)

- Fixed a crash when attempting to purchase using a ``null productId``.
- Updated the hardware strings and device common names for the latest iOS devices.

<hr />

## 7.7.2 (July 25, 2022) 

- Added the ability to configure the AppsFlyer dev key via bfg_config.json. To do so, add ``devkey : "<your key>"`` to the ``appsflyer`` section of bfg_config.json. If no dev key is provided, the Big Fish dev key is used by default.

<hr />

## 7.7.1 (June 8, 2022) 

- To comply with Apple account deletion policy, ``requestAccountDeletion()`` has been expanded to handle unauthenticated (guest) accounts.
- Removed the ``FailedForAuth`` notification, and any code that depends on this will no longer be called. We recommend that you either remove or re-write any required code that depends on the ``FailedForAuth`` notification.

<hr />

## 7.7.0 (May 13, 2022) 

- Removed the Cross Sell button from the SDK and Sample App. This completes the removal of all Cross Sell functionality. If you have any remaining Cross Sell Button logic or UI in your project, you will need to remove it.
- Fixed an issue causing the UI to hang when a payment transaction was canceled twice.

<hr />

## 7.6.0 (Feb 28, 2022) 

- **Promoted In-App Purchases**: Added two new methods. Call ``[bfgPurchase hasDeferredPayments]`` to determine if there are promoted in-app purchases waiting to be processed. Call ``[bfgPurchase processDeferredPayments]`` to add promoted in-app purchases into the payment flow.
- Updated AppsFlyer library to v6.4.2 in order to stay up to date with security fixes.
- Fixed navbar background color on some devices in dark mode for the Zendesk My Tickets view.
- Fixed AppsFlyer deferred deep links which were causing a crash when ``af_dp`` value was null.

<hr />

## 7.5.1 (Jan 4, 2022) 

- **Account Deletion**: Added new method ``[bfgRave requestAccountDeletion]``. This method will send a Zendesk support request including the current rave id to Customer Service for processing. One of the following ``NSNotifications`` will be received from this method: ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED`` or ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED``.

<hr />

## 7.5.0 (Nov 18, 2021) 

- Fixed a dark mode display issue when viewing open Zendesk tickets

<hr />

## 7.4.0 (Oct 14, 2021) 

- **iOS 15 Compatibility**: Added new device codes for products shipped starting Sep 24th 2021.
- Removed all references to Age Gate APIs and documentation as the feature has been deprecated.

<hr />

## 7.3.0 (Sept 24, 2021) 

- Updated the AppsFlyer deep link handler to share the ``deep_link_value`` string from AppsFlyer if no ``af_dp`` value is set.

<hr />

## 7.2.5 (Aug 24, 2021) 

- Added the newer iOS devices - iPhone 12 variants, iPad Pro 11 and 12.9 inch variants - to the internal list, so they will properly be attributed to Zendesk and MTS events.
- Minor update to Zendesk integration, fixing a country code.
- Updated the provisioning profile to use “com.bigfishgames.bfgsdkios_dev”.
- The routine ``[bfgRave getAllAuthSources]`` was added in order to surface how the user is signed in, if they are. The routine returns an array that contains facebook, big_fish, none, and others.

<hr />

## 7.2.4 (May 24, 2021) 

- Facebook SDK updated to v9.2.0
- Rave SDK updated to v3.9.11
- AppsFlyer SDK updated to v6.2.6
- Facebook now allows developers to request the ``user_friends`` in Limited Login mode. With this change, games no longer need to change their Facebook permissions based on the ATT selection via the ``setFacebookReadPermissions`` method when switching to classic mode.

:::info 

When upgrading from 7.2.1, any users that previously declined ATT will no longer have access to ``user_friends``, even after you upgrade to 7.2.4. In this scenario, games will need to implement logic that will update the permissions and allow access to these users who declined ATT using 7.2.1.

:::

- Adds the ability to retrieve app-associated Facebook friends, if the user is authenticated through Facebook, using the new asynchronous methods ``[bfgRave getAppAssociatedFacebookFriends]`` and ``[bfgRave getAppAssociatedFacebookFriendsJson]`` if you need it in JSON format.

<hr />

## 7.2.3 (Apr 29, 2021) 

- Updated ``[bfgutils attStatus]`` to return the status for App Tracking Transparency for all iOS 14 versions, including iOS 14.0 to 14.4+. Checking the ATT status on these lower iOS 14 versions is still necessary to properly set the login mode for Facebook, even though the ATT dialog is not displayed on these versions.

<hr />

## 7.2.2 (Apr 27, 2021) 

The minimum iOS required version for App Transparency Tracking (ATT) has changed from 14.0+ to 14.5+. This hotfix disables ATT consent calls for iOS 14.0 - 14.4.

Note that limited login mode for Facebook should still be respected for all iOS 14 versions, including 14.0 to 14.4.

<hr />

## 7.2.1 (Apr 7, 2021) 
- Zendesk updated to send iOS 9 users to a non-javascript web portal
- Zendesk updated to handle sending users to the correct localized Zendesk site, or default to English for non-supported languages, on a game by game basis.
- Exposed a new API for sending custom events to AppsFlyer (support for SKAdNetwork)
- Updated Crashlytics on Unity builds to include the Unity version for fatal and non-fatal events (key: “UnityVersion”)
- Fixed an issue with ``bfgResourcesUniversal`` targeting the iPhoneSimulator platform, which was causing build issues in Unity
- Added an optional ‘game controlled AppsFlyer startup’ mode that is intended to be used only by games that are not displaying the ATT dialog
- Updated 3rd Party SDKs:
    - AppsFlyer SDK updated to v6.2.4
    - Facebook SDK updated to v9.0.1 (Includes Limited Login)
    - Rave SDK updated to v3.9.10 - 402 (Support for Limited Login)

**Note**: The BigFishScenePack.bundle was updated and must be updated by all games. The new Rave SDK also includes a fix for a SIWA login bug

<hr />

## 7.1.3 (Nov 2020) 

- Updates to Firebase Crashlytics Support: With the upcoming deprecation of the version of Firebase Crashlytics that was in the SDK, we've include a supported version in iOS and provided better Unity level APIs.
    - Added a new framework - ``bfgCrashlytics`` (Firebase Crashlytics wrapped as ``bfgCrashlytics``). This replaces the older Fabric Crashlytics implementation.
    - A ‘Font Fix’ for Zendesk (UITraitCollection)
    - App Name bfg_config fix (strip non-alphanumberic characters from the app_name in the config - match pre-7.x SDK behavior)
    - Update the Rave SDK that contains a fix for SIWA, where some games (Fairway & Casino) could not log into SIWA after uninstalling and reinstalling the app.
    - A Zendesk fix to load help articles when the language is English or Canadian English, and the country code is something other than United States.

<hr />

## 7.1.2 (Oct 2020) 

This release was an ad-hoc release for Casino and Fairway to address an iOS 10 fonts issue both games experienced.

<hr />

## 7.1.1 (Aug 2020) 

- Fixed a high severity issue in deserializing MTS events for older versions of the SDK. 

<hr />

## 7.1.0 (July 2020) 

- Updated Zendesk SDK to version 5.0. This update to Zendesk removes the ``UIWebView`` which was present in their SDK.
- ``PromoCode`` (aka redemption service) support is now included in the SDK. 
- Added support for developers who integrate Firebase Analytics.