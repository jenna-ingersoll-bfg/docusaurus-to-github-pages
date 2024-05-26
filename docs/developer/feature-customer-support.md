# Customer Service Platform

:small_blue_diamond: **Tools to use:** Zendesk, BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## What is a Customer Service Platform? 

A **customer service** platform allows players to get help, view documentation, and file support tickets without ever leaving the game. 

Games published by Big Fish use **Zendesk** to implement a help center, where players can view help articles and get in touch with Big Fish customer support representatatives. When filing a ticket, the BFG SDK passes data such as a RaveID and device info to Big Fish Customer Support (CS), helping them diagnose and resolve issues with your game.

:::tip[Pre-Requisite]

Zendesk is integrated directly into the BFG SDK, and most of the functionality is already set up for you. Prior to configuring Zendesk, you must first integrate the BFG SDK into your game code. 

Big Fish only supports the version of ZenDesk that is shipped with the BFG SDK. All other versions of Zendesk are not supported.

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

## Adding the Help Center 

To wire up the Zendesk help center to your UI, call the  ``bfgManager.showSupport`` method:

<Tabs>
  <TabItem value="unity" label="Unity" default>

```csharp
using BFGSDK;

// This method is triggered when the button for Support is clicked.
// It can have any name of your choosing.
public void On_Main_btn_show_support_Click()
{
  bfgManager.showSupport();
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">

```java
import com.bigfishgames.bfglib.bfgManager;

// This method is triggered when the button for Support is clicked.
// It can have any name of your choosing.
public static void On_Main_btn_show_support_Click()
{
  bfgManager.sharedInstance().showSupport();
}
```
  </TabItem>

  <TabItem value="iOS" label="Native iOS">

```objectivec
- (IBAction)showSupport:(id)sender
{
  [bfgManager showSupport];
}
```
  </TabItem>
</Tabs>

## Sending Player Data 

When a customer submits a support ticket, customer-identifying data is automatically passed to Big Fish with the ticket request, such as their name and Rave ID. However, game-specific data, such as the last level played (``bfgGameReporting.setPlayerSpend``) and the player's total spend in-game (``bfgGameReporting.setLastLevelPlayed``), is not automatically included. Adding these data pieces will give Customer Support additional information to help prioritize and resolve customer requests.

:::info

Any function to send additional data must be called before ``bfgManager.showSupport``. 

:::

## Adding Custom Fields to Support Tickets

:::info

Before custom fields can be added to Zendesk tickets, they must first be set up in the Zendesk portal. Contact your Big Fish producer to set up your custom fields.

:::

Games can add custom fields to Zendesk tickets to get more detailed information about the game's state when a ticket is filed by calling ``bfgGameReporting.setCustomData``. The ``setCustomData`` method takes an ``NSDictionary`` comprised of custom event field IDs and the desired information. The ``setCustomData`` call holds the information until the game is closed.

Each field is defined using a Zendesk-specific ID number and a string value. The string values should be consistently formatted for display, depending on the data type:

- **Text**: Text strings can be formatted as the developer thinks appropriate or as otherwise specified
- **Numeric**: Integer value. Commas and other separators are not allowed
- **Decimal**: Floating point value, formatted in IEEE 754 string format
- **Boolean**: "true" or "false"
- **Date**: ISO 8601 date format string, must be formatted as YYYY-MM-DD(2018-12-06). Including the time is not supported.
- **DropDown**: String that matches the tag for the corresponding value. 

The custom data dictionary can be reset by calling ``setCustomData`` again with a new dictionary. It can be cleared by passing in nil.

:::info 

Because the custom data is saved until the game is closed, any data that is subject to change needs to be updated before each ticket is sent. For this reason, you must call the ``setCustomData`` method before calling ``bfgManager.showSupport``.

:::

In addition to adding custom fields to Zendesk tickets, you can also query to see what custom fields are currently set to be added.To do this, call the ``bfgGameReporting.getCustomData`` method, which returns a dictionary containing all custom field IDs and data that will be added to the tickets.

## Customize the Zendesk Landing Page

When the Zendesk help desk is first launched, the user will see a non-descript, default home page. You can customize this experience by replacing the header image, updating the text on the home page, or locking the orientation of the view to landscape or portrait.

### Replace the Default Header Image

By default, the Zendesk help desk shows a question mark image in its header. To replace the default image with a game-branded image, follow the steps below:

1. Change the file name of your image to **zendesk_landing_page**.
2. Ensure that your image is saved as a valid image format:
  * For iOS, you must save your image as a **png** file. 
  * For Android, use any of the following supported formats: **jpg**, **png**, **bmp**, **webp**
3. Size your image as appropriate for your platform:
  * For iOS, the recommendation is 100 x 100 pixels. If you use a larger image, it will be scaled to fit the header.
  * For Android, the recommended minimum size is 108 x 108 pixels. The image will be scaled to fit the header. **Note**: Android supports the use of density-specific image assets. The required dimensions for density-specific override images are as follows:

| **Density** | **Dimension** | **Resource Folder Location** |
|---|---|---|
| **LDPI** | 54 x 54 | drawable-ldpi |
| **MDPI** | 72 x 72 | drawable-mdpi |
| **HDPI** | 108 x 108 | drawable-hdpi |
| **XHDPI** | 144 x 144 | drawable-xhdpi |
| **XXHDPI** | 216 x 216 | drawable-xxhdpi |
| **XXXHDPI** | 288 x 288 | drawable-xxxhdpi |

4. Copy the image file to the appropriate location based on your platform:
  * For iOS, place the image in the project's main bundle
  * For Android, place the image in the application's drawables resource folder (or if applicable, the density-specific folder detailed above)

If the replacement image does not exist or cannot be resolved, the landing page will be loaded with the default header icon.

### Update the Landing Page Text (Android only)

To customize the text on the Zendesk landing page, add an override string to the game's res/values/strings.xml file. The following string changes the title of the Help Center:

```xml
<string name="welcome_to_our_help_center">Welcome to the Big Fish Games Help Center!</string>
```

### Lock the Help Center Orientation (Android only)

To lock the orientation of the landing page to landscape:

1. Add the tools namespace ``xmlns:tools="http://schemas.android.com/tools"`` to your Android manifest file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  package="foobar"
  android:versionCode="1"
  android:versionName="123" >
```

2. Under the ``application`` tag, add a reference to the SDK's Help Center Activity and override the ``screenOrientation`` value to ``sensorLandscape``:

```xml
<application>
  <!-- Override BFG SDK's zendesk activity to lock orientation to landscape -->
  <activity
    android:name="com.bigfishgames.bfglib.zendesk.ZendeskLandingActivity"
    android:configChanges="orientation|screenSize"
    android:screenOrientation="sensorLandscape"
    android:theme="@style/Theme.MaterialComponents"
    tools:node="merge" />
</application>
```

If you choose to lock your orientation, update the ``screenOrientation`` for all of the following activities:

- com.bigfishgames.bfglib.zendesk.ZendeskLandingActivity
- com.bigfishgames.bfglib.zendesk.ZendeskContactUsActivity
- zendesk.support.guide.HelpCenterActivity
- zendesk.support.guide.ViewArticleActivity
- zendesk.support.request.RequestActivity

### Workaround for Landscape-locked games (iOS Only)

There is a known issue for iOS where games that are locked in landscape orientation may switch to portrait mode when attaching an image or other media in Zendesk. To prevent this behavior from occurring, use the following workaround:

1. Add the following code for the ``_application: supportedInterfaceOrientationsForWindow_`` method inside your ``AppDelegate`` class. If your game already implements this method, work the bdy fo the provided method into your existing implementation.

```objectivec
- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(nullable UIWindow *)window
{
  UIViewController *viewWalker = window.rootViewController;
  while (viewWalker != nil)
  {
    if ([viewWalker isKindOfClass:[UIImagePickerController class]] && !viewWalker.isBeingDismissed)
    {
      return UIInterfaceOrientationMaskAll;
    }
    viewWalker = viewWalker.presentedViewController;
  }
  return UIInterfaceOrientationMaskLandscape;
}
```
