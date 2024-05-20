# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Help Desk and Customer Service

:small_blue_diamond: **Tools to use:** Zendesk, BFG SDK

## What does Customer Service look like in a game? 

A **customer service** platform allows players to get help, view documentation, and file support tickets without ever leaving the game. 

Games published by Big Fish use **Zendesk** to implement a help center, where players can view help articles and get in touch with Big Fish customer support representatatives. When filing a ticket, the BFG SDK passes data such as a RaveID and device info to Big Fish Customer Support (CS), helping them diagnose and resolve issues with your game.

:::tip[Pre-Requisite]

Zendesk is integrated directly into the BFG SDK, and most of the functionality is already set up for you. Prior to configuring Zendesk, you must first integrate the BFG SDK into your game code.

:::

## Enabling Zendesk

Enable Zendesk in the BFG SDK config file, bfg_config.json:

```json
"zendesk": {
    "is_enabled": true,
    "zendesk_url": "https://bigfishgames.zendesk.com",
    "zendesk_app_identifier": "384b2170a8d96d8d1e93bab81e9415a2b59a7aa107185f8b"
}
```

When enabled, the Zendesk help center will load the specified help pages configured with the ``zendesk_url`` and ``zendesk_app_identifier`` keys. If either of these keys are missing or empty, Zendesk will load the general Big Fish help pages. 

### Additional Steps for Android

<details>
  <summary>Add Zendesk maven repository to Gradle file </summary>

In your app’s build.gradle file, add the Zendesk maven repository to the ``repositories`` section:

```
allprojects {
  repositories {
    maven {
      url 'https://zendesk.jfrog.io/zendesk/repo'
    }
  }
}
```

</details>

<details>
  <summary>Update dependencies in Gradle file </summary>

In your app’s build.gradle file, add the Zendesk dependencies to the ``dependencies`` section:

```
dependencies {
  implementation group: 'com.zendesk', name: 'support', version: 'X.X.X'
  implementation 'com.zendesk.belvedere2:belvedere:X.X.X'
  implementation 'com.google.android.material:material:X.X.X'
}
```

</details>

<details>
  <summary>Create layout override</summary>

To modify certain layouts within the Zendesk library, you need to add a layout file, refs.xml to your exported Android Studio project. Once you've added the file, add logic to copy this file as part of your project export, and place it within the /src/main/res/values subdirectory in the exported project. 

Your layout file, refs.xml should have the following contents:

```xml
<resources xmlns:tools="http://schemas.android.com/tools">
  <!-- This is here so that we can override a specific layout in the Zendesk SDK to hide the create ticket buttons -->
  <item name="zs_activity_request_list_scene_empty" type="layout" tools:override="true">@layout/zs_activity_request_list_scene_empty_override</item>
  <item name="zs_activity_request_list" type="layout" tools:override="true">@layout/zs_activity_request_list_override</item>
  <item name="zs_activity_view_article" type="layout" tools:override="true">@layout/zs_activity_view_article_override</item>
  <item name="belvedere_image_stream" type="layout" tools:override="true">@layout/belvedere_image_stream_override</item>
</resources>
```

</details>

### Additional Steps for iOS

<details>
  <summary>Add Zendesk frameworks (Unity only)</summary>

1. In your Unity project, go to **Assets > Import Package > Custom Package**.
2. Navigate to the latest downloaded Unity SDK, com.bfg.sdk-[version].tgz and select it. Click **Open**.
3. In the **Import Unity Package** dialog, open com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic. Select the following frameworks:
  - CommonUISDK.xcframework
  - MessagingAPI.xcframework
  - MessagingSDK.xcframework
  - SDKConfigurations.xcframework
  - SupportProvidersSDK.xcframework
  - SupportSDK.xcframework
  - ZendeskCoreSDK.xcframework
4. Click the **Import** button.

</details>

<details>
  <summary>Add Zendesk frameworks (Native iOS only)</summary>

1. In Xcode, select your project in the **Project Navigator**. 
2. Select the **General** tab.
3. Add the following frameworks to the **Frameworks, Libraries, and Embedded Content** section and mark each as **Embed & Sign**:
  - CommonUISDK.xcframework
  - MessagingAPI.xcframework
  - MessagingSDK.xcframework
  - SDKConfigurations.xcframework
  - SupportProvidersSDK.xcframework
  - SupportSDK.xcframework
  - ZendeskCoreSDK.xcframework

:::info

If prompted, use **Destination - Copy items** and **Added folders - Create groups** as the copy settings.

:::

4. Update the path to ZendeskCoreSDK.xcframework so it matches the location where your frameworks are located in relation to the root of your project.

</details>
