# In-App Messaging

:small_blue_diamond: **Tools to use:** Leanplum

## What is In-App Messaging? 

**In-app messages** are targeted messages that pop up for a player when they are actively using your app. Most of the time, in-app messages encourage the player to complete a task, such as completing a level or buying an item. 

Games published by Big Fish use **Leanplum** to create and display in-app messages. Leanplum comes with several in-app messaging templates out of the box to manage different types of messages including alerts, confirmations, offers, and other interstitial popup messages. When creating a new in-app message, you can customize not only the text of your message, but also the look and feel (colors, images, size, etc).

:::info

Because LeanPlum is not included in the BFG SDK, you need to integrate it separately into your game code.

:::

## Enabling In-App Messaging 

To enable in-app messaging, ensure that the Leanplum SDK is integrated into your game code. Once integrated, run your application at least once in development mode to ensure it is working correctly.

:::info

Currently, In-App messages cannot be triggered by events via Leanplum's REST API. Instead, events must be triggered and come from the client with the SDK installed.

:::

## Setting up In-App Messaging 

Setting up In-App Messaging is platform-specific. Below is a list of articles in Leanplum's official documentation to help you configure In-App Messaging for your game: 

| **Guide** | **Description** |
|---|---|
| [Unity In-App Messages](https://docs.leanplum.com/reference/unity-in-app-messages) | Helps you set up In-App Messaging for Unity platforms. All versions of the Unity SDK support In-App Messages on both iOS and Android devices. |
| [IAM Handlers (iOS/Android)](https://docs.leanplum.com/reference/iam-handlers) | Provides guidance on how to work with the In-App Messaging Handler, which gives you complete control over the In-App Messages in your app. |
| [Add dialog customizer (Android)](https://docs.leanplum.com/reference/android-add-dialog-customizer) | Provides information on setting up a dialog customizer that provides an interface to customize the Dialog and content View before showing a message. |
| [Custom Templates (iOS/Android)](https://docs.leanplum.com/reference/customizing-in-app-message-templates) | Shows how to create and manage custom templates with code samples for sample projects for both iOS and Android platforms. |

# Using In-App Messaging 

Leanplum provides a thorough guide and basic usage tutorial on how to use In-App messages. Refer to Leanplum’s [In-App Message Basics](https://docs.leanplum.com/docs/in-app-messages) guide on how to create, edit, personalize, and set display triggers.
