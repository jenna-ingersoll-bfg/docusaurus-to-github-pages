# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Deep Linking

:small_blue_diamond: **Tools to use:** AppsFlyer, BFG SDK

## What is Deep Linking?

A **deep link** is a generic term for any link that opens the game remotely, whether or not it is installed on the user's device. From the player's perspective, they will click a link on an offer, ad, or message and be sent straight to the game advertised by the link. There are two different types of deep links:

- **Referral links** direct the user to an app (rather than a specific location in the app). If the app is installed on the device, the app will open. If it is not installed, then the user will be directed to the App Store to download the game.
- **Deferred Deep Links** go to a specific location in the app, but cannot be executed immediately. If the app is not installed, the user will be prompted to install the game. Once installed and launched, a call-back is made to retrieve the deep link and execute it.

Games published by Big Fish use **AppsFlyer** to create and manage deep links through campaigns. 

:::tip[Pre-Requisite]

Before continuing, ensure you meet the following pre-requisites:

- Integrate the BFG SDK ([Unity](../bfgsdk/integrate-unitysdk) | [Native Android](../bfgsdk/integrate-androidsdk) | [Native iOS](../bfgsdk/integrate-iossdk))
- [Enable AppsFlyer](./tools-appsflyer#enabling-appsflyer)

:::

## Receiving Deep Link Notifications (Unity only)

The Unity SDK includes the ability to deep link notifications. To listen for deep link notifications, you first need to register the deep link notifications defined in ``bfgCommon.cs``: 

```csharp
void Start ()
{
  NotificationCenter.Instance.AddObserver(deeplink_notification_received, bfgCommon.NOTIFICATION_DEEPLINK_ONDEEPLINKRECEIVED);
}

// Triggered when the deep link notification is received
public void deeplink_notification_received(string notification) {
  Debug.Log (deeplink_notification_received: notification=" + notification);
}
```

## Setting up Deep Links

The process to set up deep links depends on which BFG SDK you are using. 

### Unity SDK (Android Targets)

<details>
  <summary>Set up intent filters</summary>

Your Big Fish producer will send you a code snippet of an intent filter to put into manifest file of your app. An **intent filter** determines the type of requests that come from another app component (such as AppsFlyer). To complete setup for deep links on Android, copy the intent-filter into the relevant ``<activity>`` on your AndroidManifest.xml file. The snippet contains the following values:

- The ``host`` value, provided by your Big Fish producer.
- The four-character pathPrefix, an auto-generated value from the AppsFlyer portal that is unique to your game.

Here is an example of the code snippet for an intent filter:

```xml
<intent-filter android:autoVerify="true">
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="https"
    android:host="bfgsdk.onelink.me"
    android:pathPrefix="/yryN" />
</intentfilter>
```

</details>

<details>
  <summary>Set up URI Scheme</summary>

A URI scheme is a URL that leads users directly to your game, and is required for AppsFlyer links to work in Facebook. Whenever a Universal Link fails to open the app, the URI scheme can be used as a fallback to open the application.

Your Big Fish producer will provide you with the scheme you need to define in your manifest file. Add another filter to your manifest that handles specific deep link schemes for your game. In the following example, the scheme is ``bfgsample``. Include this filter right below the intent filter you previously added for AppsFlyer:

```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="bfgsample" />
</intent-filter>
```

</details>

### Unity SDK (iOS Targets)

<details>
  <summary>Set the Delegate to Receive Callbacks</summary>

1. Open the file, com.bfg.sdk/Runtime/Plugins/iOS/BFGUnityAppController.mm
2. In BFGUnityAppController.mm, add the following code to the ``didFinishLaunchingWithOptions`` method before initializing the BFG SDK:

```csharp
extern "C"
{
  void BfgDeepLinkDelegateWrapper_setDeepLinkListener();
}
-(BOOL)application:(UIApplication*) application didFinishLaunchingWithOptions:(NSDictionary*) options
{
  BfgDeepLinkDelegateWrapper_setDeepLinkListener();

  // Initialize the BFG SDK here

  return YES;
}
```

</details>

<details>
  <summary>Update the App Delegate to Use Universal Links</summary>

1. Open the file, com.bfg.sdk/Runtime/Plugins/iOS/BFGUnityAppController.mm
2. In BFGUnityAppController.mm, add another pass-through call to ``bfgManager``, which will update the App Delegate to use universal links through AppsFlyer.

```csharp
-(BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> *restorableObjects))restorationHandler;
{
  return [bfgManager applicationContinueUserActivity:userActivity restorationHandler:restorationHandler];
}
```

</details>

<details>
  <summary>Add URI scheme to your plist</summary>

A URI scheme is a URL that leads users directly to your game, and is required for AppsFlyer links to work in Facebook. Whenever a Universal Link fails to open the app, the URI scheme can be used as a fallback to open the application.

Your Big Fish producer will provide you with the scheme you need to define in your game configuration. In the following example, the scheme is ``bfgsample``. The scheme is added to your game's plist file:

```xml
<key>CFBundleURLSchemes</key>
<array>
  <string>bfgsample</string>
</array>
```

</details>

### Native Android SDK 

<details>
  <summary>Implement the bfgDeepLinkListener</summary>

Implement the ``bfgDeepLinkListener`` in your main ``bfgActivity``:

```java
public class AndroidExampleActivity extends bfgActivity implements bfgDeepLinkListener
```

</details>

<details>
  <summary>Override the OnDeepLinkReceived callback</summary>

Override the ``onDeepLinkReceived`` callback to handle the received deep link:

```java
public void onDeepLinkReceived(final String deepLink, Map<String,String> conversionData, final String error) {
  if (!TextUtils.isEmpty(deepLink)) {
    bfgLog.d(this.getLocalClassName(), "Deep link received: \n" + deepLink);
  } else if (!TextUtils.isEmpty(error)) {
    bfgLog.d(this.getLocalClassName(), "Deep link retrieve error: " + error + " from UA tracking provider");
  }
  // The UA tracking provider returned additional information about the deep link that launched
  // the app. Inspect its content to gain insight regarding the source of the link. For links
  // originated from Facebook the deepLinkString will always be null and you'll need to look
  // for the deeplink in the conversionData dictionary. Ask your producer for the specific field
  // you should be looking for in this dictionary.
  // An example payload for a basic Facebook link could look like:
  // conversionData = {
  //    "af_ad": "testadname",
  //    "af_deeplink": true,
  //    "af_sub1": "testsubpub",
  //    "af_sub2": "testplacement",
  //    "campaign": "testcampaign",
  //    "host": "sdktest",
  //    "is_retargeting": true,
  //    "media_source": "Social Facebook",
  //    "path": "/reward/coins/1000/abc123",
  //    "scheme": "bfgsample",
  //    "shortlink": "dlfbpost"
  // }
  // For this example, you might be interested in the 'path' field of the dictionary, where you could extract
  // a promo code or other meaningful information for your game.
  if (conversionData != null) {
    bfgLog.d(this.getLocalClassName(), "onDeepLinkReceived: conversion data: " + conversionData + " from UA tracking provider");
  }
}
```

</details>

<details>
  <summary>Set listener callback</summary>

Set your listener callback with setDeepLinkListener in onCreate().

:::info

Set the listener callback before initializing the SDK to ensure that deep links are not missed.

:::

```java
bfgGameReporting.sharedInstance().setDeepLinkListener(this);
```

</details>

<details>
  <summary>Set up intent filters</summary>

Your Big Fish producer will send you a code snippet of an intent filter to put into manifest file of your app. An **intent filter** determines the type of requests that come from another app component (such as AppsFlyer). To complete setup for deep links on Android, copy the intent-filter into the relevant ``<activity>`` on your AndroidManifest.xml file. The snippet contains the following values:

- The ``host`` value, provided by your Big Fish producer.
- The four-character pathPrefix, an auto-generated value from the AppsFlyer portal that is unique to your game.

Here is an example of the code snippet for an intent filter:

```xml
<intent-filter android:autoVerify="true">
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="https"
    android:host="bfgsdk.onelink.me"
    android:pathPrefix="/yryN" />
</intentfilter>
```

<details>
  <summary>Set up URI Scheme</summary>

A URI scheme is a URL that leads users directly to your game, and is required for AppsFlyer links to work in Facebook. Whenever a Universal Link fails to open the app, the URI scheme can be used as a fallback to open the application.

Your Big Fish producer will provide you with the scheme you need to define in your manifest file. Add another filter to your manifest that handles specific deep link schemes for your game. In the following example, the scheme is ``bfgsample``. Include this filter right below the intent filter you previously added for AppsFlyer:

```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="bfgsample" />
</intent-filter>
```

**Referral URL / URI Scheme**

You will get the shared scheme in the ``deepLinkString`` field if a referral URL opens your game. Nothing needs to be done by the game at this point since the goal of the referral is to simply open the app.

```
"deepLinkString": "bfgsample://",
"conversionData": {
    "af_dp": "bfgsample://",
    "link": "https://bfgsample.onelink.me/lmNv/dlfbpost"
}
```

**First Launch Installation Attribution**

When your game launches for the first time, you will receive an ``onDeepLinkReceived`` callback with information on the installation attribution. The **deepLink** parameter will be ``null`` unless the first launch resulted from a deferred deep link. The contents of the ``conversionData`` collection will vary, depending on whether the installation was organic, from a deep link, or a deferred deep link from one of our advertising partners, such as Facebook.

For example, an organic installation will provide the following ``conversionData``:

```
"af_message": "organic install",
"af_status": "Organic",
"is_first_launch": "true"
```

For a full list of all the possible data provided in the ``conversionData`` collection, see [Conversion data payloads and scenarios](https://support.appsflyer.com/hc/en-us/articles/360000726098-Conversion-data-payloads-and-scenarios) :arrow_upper_right: in AppsFlyer's documentation.

</details>
