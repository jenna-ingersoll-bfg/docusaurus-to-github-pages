# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Push Notifications

:small_blue_diamond: **Tools to use:** Leanplum

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## What are Push Notifications? 

**Push notifications** are alerts or messages that pop up on a player's device, regardless of whether or not the user is actively playing your game. Depending on the device, push notifications can appear on the device's top notification bar and/or home screen. 

:::warning

All mobile devices allow users to turn off notifications, so some of your players will not receive your push notifications. We recommend using multiple messaging channels to ensure you reach all of your players, including [in-app messaging](./feature-inapp-messaging), an [app inbox](./feature-app-inbox.md), and/or [interstitials](./feature-interstitials.md).

:::

Games published by Big Fish use **Leanplum** to send messages from the server to a user's device. 

## Setting up Push Notifications

Sending push notifications with Leanplum requires additional setup. For detailed instructions, see [Set up push notifications](https://docs.leanplum.com/docs/set-up-push-notifications) ::upper-right-arrow:: in Leanplum's documentation. 

### Additional Steps for Android

<details>
  <summary>Add the Firebase Cloud Messaging (FCM) Server Key</summary>

Leanplum uses the Firebase Cloud Messaging service to deliver push notifications on Android devices. Because of this, add the FCM Server key to Leanplum's App Settings:

1. Retrieve and copy your FCM Server Key. 
  - In the Firebase console, click the gear icon next to **Overview**.
  - Go to **Project Settings**.
  - In your project's settings, go to the **Cloud Messaging** tab. In this section, you will find your **Server key**, which is your FCM Server Key.
2. In the Leanplum Dashboard, go to your **App Settings**.
3. Click on **Keys & Settings**.
4. In the left pane, open the **Push Notifications** tab.
5. Paste the FCM key from step 1 into the **Google API key** field.
</details>

<details>
  <summary>Create Notification Channels</summary>

You must define at least one default notification channel before you can start sending push notifications to your players through Leanplum. Use the ``addAndroidNotificationChannel`` and ``deleteAndroidNotificationChannel`` methods of the Leanplum API to add the notification channel(s) you would like to be accessible in the Leanplum dashboard. 

For more information, see Leanplum's documentation:

- [Android notification channels](https://docs.leanplum.com/docs/android-notification-channels) ::upper-right-arrow::
- [addAndroidNotificationChannel Method](https://docs.leanplum.com/reference/post_api-action-addandroidnotificationchannel) ::upper-right-arrow::
- [getAndroidNotificationChannel Method](https://docs.leanplum.com/reference/get_api-action-getandroidnotificationchannels) ::upper-right-arrow::
- [deleteAndroidNotificationChannel Method](https://docs.leanplum.com/reference/post_api-action-deleteandroidnotificationchannel) ::upper-right-arrow::

</details>

<details>
  <summary>Customize the title and message</summary>

By default, Android automatically uses your app's name as the title of push notifications. In addition, the contents of the message is empty. To modify the title and message of your push notification:

1. In the Leanplum dashboard, open the **Advanced Options** for your push notification.
2. Under **Data**, add a new field called "title". Enter the title of your notification.
3. Add a field called "message". Enter the message contents of your notification.

:::info

The above steps will change the title for a _single_ push notification. To apply this to all push notifications, [implement a push customizer](https://docs.leanplum.com/docs/customize-push-notifications-for-android#2-implement-the-push-customizer) ::upper-right-arrow::.

:::

For more information, see [Customize Android push notifications](https://docs.leanplum.com/docs/customize-push-notifications-for-android) ::upper-right-arrow:: in Leanplum's documentation.

</details>

### Additional Steps for iOS

<details>
  <summary>Upload certificates</summary>

Leanplum uses the Apple Push Notification service (APNs) to deliver push notifications on iOS devices. To complete setup, you must upload your iOS certificates to Leanplum:

1. Log in to your Apple Developer Portal provisioning profile.
2. In the **Identifiers > App IDs** section, select your app.
3. Click **Edit**, and enable **Push Notifications**.
4. Click **Create Certificate** for each of the Development and Production certificates and follow the onscreen instructions. _Do not reuse existing certificates_
5. Download the new certificate files.
6. In the Leanplum Dashboard, go to your **App Settings**.
7. Click on **Keys & Settings**.
8. In the left pane, open the **Push Notifications** tab.
9. Upload your .p12 certificates.

</details>

<details>
  <summary>Enable iOS project for push notifications (Unity only)</summary>

You need to enable your iOS project for push notifications. Add the **Push Notifications Capability** to the exported iOS project from Unity, either manually from Xcode or through a post-processor build script from Unity.

</details>

<details>
  <summary>Register for remote notifications</summary>

APNs must know the address of a user’s device before it can send notifications to that device. When you register your app with APNs, you will receive a globally unique device token, which is essentially the address of your app on the current device.

<Tabs>
  <TabItem value="unity" label="Unity iOS" default>
Use the ``Leanplum.RegisterForIOSRemoteNotifications()`` method to register your device through the iOS framework. This method should be called after Leanplum starts (``Leanplum.start()``) and asks the user to allow remote notifications directly from Unity. 

```csharp
// Registers the device through the iOS remote push framework
Leanplum.RegisterForIOSRemoteNotifications();
```
  </TabItem>
  <TabItem value="native" label="Native iOS">
Use ``UIApplication.registerForRemoteNotifications()`` to register your device and use push notification. This method must be used inside of your app delegate's ``applicationDidFinishLaunching`` method.

For more information, see [Configure your app for push notifications](https://docs.leanplum.com/reference/ios-push-notifications#step-7) ::upper-right-arrow:: in Leanplum's documentation.
  </TabItem>
</Tabs>

For more information, see:

- [Registering your app with APNs](https://developer.apple.com/documentation/usernotifications/registering-your-app-with-apns) ::upper-right-arrow::
- [Unity iOS push setup](https://docs.leanplum.com/reference/unity-push-notifications#unity-ios-push-setup) ::upper-right-arrow::
- [iOS push notifications](https://docs.leanplum.com/reference/ios-push-notifications) ::upper-right-arrow::

</details>

<details>
  <summary>Set up rich push notifications (optional)</summary>

Before sending any push notifications with images or items apart from text, follow the instructions on [Configuring your app for rich push](https://docs.leanplum.com/reference/ios-push-notifications#ios-rich-push-setup) ::upper-right-arrow:: in Leanplum's documentation to complete setup. 

</details>

## Creating a Push Notification

Follow these steps to create a new push notification:

1. In the Leanplum dashboard, create a new **Campaign**.
2. Select the **Campaign Type**.
  - For **Single Message** campaigns, select **Push Notification** from the left menu, and name your campaign. Click **Create Campaign**.
  - For **Multi-Message** campaigns, enter a name for your campaign, then click **Create Campaign**. Open the new campaign and select the **Actions** tab. Click **Add Action** then select **Push Notification**. Confirm your select by clicking the **Add Action** button.

## Editing a Push Notification

To edit any push notifications, go to the **Messages** section of the Leanplum dashboard and select the message you wish to edit. 

### Message

Use the **Message** field to define the content of your push notification.

### Title and/or Subtitle

The process to modify the title and/or subtitle of your message differs based on the platform you are using:

<Tabs>
  <TabItem value="android" label="Android" default>

1. In the Leanplum dashboard, open the **Advanced Options** for your push notification.
2. Under **Data**, add a new field called "title". Enter the title of your notification.

  </TabItem>
  <TabItem value="ios" label="iOS">

1. In the Leanplum dashboard, edit your push notification.
2. Under **iOS options**, locate the "Title" and/or "Subtitle" fields. 
3. Enter the title(s) of your notification.
  </TabItem>
</Tabs>

### Open Action

An **open action** is a function that is performed immediately after a user opens your push notification. Be default, the open action will launch your game. You can change this to any of the following options:

- **Open URL**: Opens the URL you enter.
- **Deep Link**: Opens a specific location in your app. 
- **Offer Wall**: Opens the Offer Wall in your app.
- **Chain to New/Existing message**: Triggers the delivery of another Leanplum message.
- **Request App Rating**: Requests the user to rate the app.

## Gifting Items with Push Notifications 

While push notifications typically include text and a call-to-action, you can also gift items using push notifications. 

:::info

To gift with Leanplum, your project will need to implement a custom action to support gifting. The process of creating a custom action won't be covered, but the steps below will guide you on how to attach the custom action to the built-in messaging capabilities of Leanplum.

:::

For creating your templates and custom actions, begin with these Leanplum guides:

- [In-App Messaging](https://docs.leanplum.com/reference/in-app-messaging)
- [Customizing In-App Messaging](https://docs.leanplum.com/reference/customizing-in-app-message-templates)

## Setting Up Gifts using Multi-Message Campaigns 

Follow the instructions below to create a Multi-Message Campaign with the necessary actions to gift:

1. Navigate to your **Campaigns** and create a new **Multi-Message Campaign**.
2. Select your **Audience**.
3. Select the **Delivery Method**.
4. Add the **Push Notification** action.
5. Fill in the Push notification data as needed.
6. Add another action using **Opened Action** or the **+** (plus) symbol.
7. Add an **In-App Message** such as an Image Interstitial.
8. Update the Sub-Delivery to be **Immediate** and **Deliver when Opened**.
9. Add a new Button to the push notification. This is needed to interact with the gift.
10. Add your custom action as an **Open Action** and fill in the details.
11. Update the Sub-Delivery to **Immediate**.

You will now have a Multi-Message Campaign that is configured to allow a gift to be claimed by the user.

## Setting Up Gifts using Messages 

Follow the instructions below to set up a gift push notification message with your custom action:

1. Navigate to the **Messages** board within the **Campaign** dashboard.
2. Click **Create Message**.
3. Fill in the push notification data as needed.
4. Add your custom action as an **Open Action** and fill in the details.
5. Click **Finish** to complete the push notification message.

A new push notification is now created with the associated gift.

## Setting Up Gifts using Messages and Chaining 

Follow the instructions below to set up a gift push notification message that contains chaining.

1. Navigate to the **Messages** board within the **Campaign** dashboard.
2. Click **Create Message**.
3. Select **In-App**.
4. Select **Image Interstitial** or your custom interstitial template.
5. Configure the new interstitial with your custom action **Action** and fill in the details.
6. Click **Finish**.
7. Click **Create Message** to set up another message.
8. Select **Push Notification** and fill in the details.
9. Select **Chain to Existing Message** for its **Open Action** and select the message created in Step 2.

You will now have a push notification with the gifting action that will chain to a follow-up push notification.

## Testing Gifts using Push Notifications 

### Manual Delivery of Push Notifications

If you are doing a test and would like to use a **Manual Delivery** method, ensure that you set the **Attribution window** to 0. This allows you to send the same campaign again without waiting for the Attribution window to end.

Campaigns can be sent using the ``startCampaign`` REST API. For more information on how to do this, follow the [Leanplum Manual Delivery](https://docs.leanplum.com/docs/manual-delivery) guide.

### Testing a Campaign and Making Changes 

The behavior of getting a campaign to fire is inconsistent. Forcing a restart helps with this issue, and we recommend that you always force a restart after editing a campaign.
