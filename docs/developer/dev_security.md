# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Gifting with Push Notifications with Leanplum

This document will provide a high-level guide through the multiple ways to gift through Push Notifications with Leanplum as well as providing a few tips for testing in a QA environment. It’s important to have some knowledge of how interstitials and push notifications are created separately before continuing.

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
