# Security & Privacy Standards (SANDBOX TESTING PAGE)

# App Tracking Transparency (iOS Only) 

:small_blue_diamond: **Tools to use:** BFG SDK

## What is App Tracking Transparency? 

**App Tracking Transparency** (or **ATT**) requires apps to request user authorization in order to collect app-related data that tracks the user or the device. All apps on iOS devices must use ATT if they collect data about end-users and share it with other companies for the purpose of tracking across apps and websites.

To comply with ATT, the BFG SDK includes Apple's ``AppTrackingTransparency`` framework, which presents an app-tracking authorization request to the user and provides the tracking authorization status.

## Game Requirements 
In order to comply with Apple’s privacy practices, your game must meet the following requirements:

- If the player has not previously made an ATT selection, then upon completion of the ``onPoliciesCompleted`` callback, your game must display a pop-up explaining ATT.
- Your game must configure a listener for the ATT dialog dismissal notification,`` BFGSDK.bfgCommon.BFG_NOTIFICATION_ATT_DIALOG_DISMISSED`` in order to determine whether the user has made an ATT selection.
- Upon dismissal of the pre-pop-up, your game must make a call to ``bfgManager.requestTrackingAuthorization()`` to display the ATT prompt. If done correctly, the BFG SDK will fire the ``BFGSDK.bfgCommon.BFG_NOTIFICATION_ATT_DIALOG_DISMISSED`` notification once the user has made a selection.

# Recommended Workflow 
We recommend using the following high-level workflow to ensure that your game is compliant with Apple’s ATT requirements:

1. Display the GDPR dialog using the BFG SDK, and fire the ``onPoliciesCompleted`` callback.
2. Display a localized pop-up dialog explaining ATT.
3. Upon dismissal of the localized pop-up, call ``bfgManager.requestTrackingAuthorization()`` to display the ATT prompt. If done correctly, the BFG SDK will fire the ``BFGSDK.bfgCommon.BFG_NOTIFICATION_ATT_DIALOG_DISMISSED`` notification once the user has made a selection.
4. Once a selection is made, return the player to the gameplay.

## Available ATT States 
The following key has been added to all [Mobile Telemetry Services (MTS)](./tools-mts) calls in the ``deviceInfo`` section ``appTrackingTransparencyStatus``. This key reflects the current state of the user's ATT selection.

| **State** | **Name** | **Description** |
|---|---|---|
| **0** | Not Determined | The user has not made an ATT selection yet. |
| **1** | Restricted | The user does not have the option of making an ATT selection; this typically occurs for child accounts where tracking is restricted or disabled. |
| **2** | Declined | The user has declined the ATT selection. |
| **3** | Accepted | The user has accepted the ATT selection. |

In addition to the above ATT status flag in MTS events, the existing ``ifaEnabled`` flag is also affected by the user's ATT selection.

:::info

For iOS 14+, this flag will always be 0 unless the user has tracking enabled. The ``ifa`` value itself in MTS events may or may not be valid (non-zero), and is not directly tied to ``ifaEnabled``.

:::

## AppsFlyer and the ATT Timeout 

The BFG SDK uses a timer (default 60 seconds) to delay the initial startup of AppsFlyer, and define when the first set of AppsFlyer network calls will go out. This delay gives the player time to make an ATT selection and obtain a valid Identifier for Advertisers (IFA/IDFA) result.

:::info 

It is important to note that the ATT dialog _must_ be displayed first, before the AppsFlyer network calls will be made even if the timer has expired. If an ATT selection is made by the user before the timer has expired, the AppsFlyer network calls will go out immediately, and the timer is cancelled/waived.

:::

This timer is also configurable by the app if an ``att_timeout`` is supplied in the BFG SDK config file, bfg_config.json. If the app is closed prior to showing ATT, and then cold started, the timeout will start over when the app launches. Only add/change this value if directed by Big Fish Games.

Below are some examples to help visualize the behavior described above, all of which use the default 60-second timeout:

| **Scenarios** | **Result** |
|---|---|
| **App launches.<br />ATT is displayed after 10 seconds.<br />User chooses accept or decline the dialog after 10 seconds.** | AppsFlyer network calls are made after the dialog is dismissed (i.e., 20 seconds after app launch). The IFA sent to AppsFlyer is based on the user’s ATT selection (valid if accepted; all-zeros if declined). |
| **App launches.<br />ATT is displayed after 10 seconds.<br />User does not make an ATT selection for the next 2 minutes.** | AppsFlyer network calls are made 60 seconds after launch, while the ATT dialog is displayed, and an all-zero IFA is sent to AppsFlyer. |
| **App launches.<br />ATT is not displayed until 2 minutes later.** | AppsFlyer network calls are made immediately upon the ATT dialog being displayed, and an all-zero IFA is sent to AppsFlyer. |

## Additional Information

Below is a collection of additional information and notes about ATT and how ATT affects other systems within the BFG SDK.

<details>
  <summary>How ATT Affects Deep Linking and Attribution</summary>

Since deferred deep linking requires an IFA for the deep link to be retrieved (after the app is installed and launched), if a user declines ATT, AppsFlyer will be unable to retrieve the deep link. This applies only to deferred deep linking, tapping a deep link prior to the app being installed and then retrieving the deep link automatically on the first launch.

If the user accepts ATT, this is not an issue.

Non-deferred deep linking scenarios still work normally, regardless of the ATT selection made by the user.

</details>

<details>
  <summary>Disable Tracking for ATT in iOS14+</summary>

There are two ways of disabling tracking for ATT in iOS 14+. There is no functional difference between these two methods, except the option in **Privacy > Tracking** allows for enabling/disabling globally for all apps.

1. In the **Privacy > Tracking** settings.
2. In the app’s settings.

The tracking options above will not appear for the specific app until the ATT dialog is displayed in the app first. However, the global option for disabling/enabling tracking is still available regardless.
</details>

<details>
  <summary>Customize the ATT Text</summary>

Add the ``NSUserTrackingUsageDescription`` entry to the game's Info.plist file to customize verbiage around the ATT prompt.
</details>

<details>
  <summary>Additional Notes</summary>

-  The MTS ATT key (``appTrackingTransparencyStatus``) is not added to payloads for iOS 13 and lower, even though Limit Ad Tracking is available in lower OS versions.
- If a device is upgraded from iOS 13 or lower to iOS 14, and Limit Ad Tracking was enabled, then the Tracking setting will automatically be disabled for all apps in iOS 14.
- Unity contains additional ATT status values that are not available in the native iOS SDK. These are internal values that should never appear in MTS payloads:
  - -1: iOS version is less than iOS 14; ATT status does not apply.
  - -2: Non-iOS device.
  - -3: An error occurred when trying to determine the ATT status.

- When an app is launched for the first time with ATT having already been disabled globally, the ‘appTrackingTransparencyStatus’ key’s value in MTS events will be set as 'declined' (and not undetermined). The ATT dialog will also not be displayed in this case, even if the requestTrackingAuthorization API call is made by the developer which is what triggers ATT to display normally.
- The ATT dialog will only ever display once per app install. Once the user has made an ATT selection, it will not display again regardless of whether or not the tracking is enabled or disabled repeatedly in Settings.
- AppsFlyer purchase events are still sent, even if the user declines ATT, however, the IFA will obviously not be attached to the event like all AppsFlyer events.
</details>

## Additional Resources and Documentation 

**BFG SDK Sample App Implementation**

An example implementation can be found in the BFG SDK Sample App. Locate the implementation in the following files:

- Unity SDK: HandleAttNotification.cs, BfgPolicyListener.cs
- Native iOS SDK: BFGUIKitExampleAppDelegate.m with the didFinishLaunchingWithOptions method

