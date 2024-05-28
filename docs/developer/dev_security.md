# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Crash Reporting

:small_blue_diamond: **Tools to use:** Firebase Crashlyitcs, BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## What is Crash Reporting? 

A **crash reporting system** monitors your app for crashes and helps you track, prioritize, and fix stability issues that affect the quality of your game. Crash reports often include data such as stack traces, type of crash, trends and version of software.

Games published by Big Fish use **Firebase Crashlytics** to provide real-time crash data for your game. Firebase Crashlytics saves you troubleshooting time by intelligently grouping crashes and highlighting the circumstances that lead up to them. 

:::tip[Pre-Requisite]

Firebase Crashlytics is integrated directly into the BFG SDK, and most of the functionality is already set up for you. Prior to configuring Firebase Crashlytics, you must first integrate the BFG SDK into your game code. 

:::

## Enabling Firebase Crashlytics 

1. Open the Firebase Console.
2. In the left panel, click **Crashlytics**.
3. If your Firebase project has multiple games registered, select the game from the dropdown next to Crashlytics in the top bar of the console.
4. Click **Enable Crashlytics**.

## Integrating Firebase Crashlytics

To get started with Firebase, you must install the Firebase SDK to your project. This process will be different based on the BFG SDK you are using. 

### Unity SDK

<details>
  <summary>Download the Firebase SDK package</summary>

:::tip [Pre-Requisite]

For iOS development, you must have CocoaPods installed to handle iOS dependencies.

:::

1. Download the Firebase Unity SDK package. **NOTE**: The BFG SDK may not support the latest Firebase Unity SDK. Use one of the following links to download the supported version(s) for the BFG SDK release you are using. See [3rd Party Compatibility Charts](../bfgsdk/compatibility-charts) to identify which version to download.
  - [Firebase Unity SDK v11.6.0](https://dl.google.com/firebase/sdk/unity/firebase_unity_sdk_11.6.0.zip) :arrow_upper_right:
  - [Firebase Unity SDK v9.3.0](https://dl.google.com/firebase/sdk/unity/firebase_unity_sdk_9.3.0.zip) :arrow_upper_right:
2. Unzip the downloaded Firebase Unity SDK file.
2. In Unity, go to **Assets > Import Package > Custom Package**.
3. Import the following SDKs:
  - Crashlytics: FirebaseCrashlytics.unitypackage
  - Analytics: FirebaseAnalytics.unitypackage
4. In the **Import Unity Package** window, click **Import**.

</details>

<details>
  <summary>Add Firebase configuration file(s)</summary>

1. Open the Firebase Console.
2. In the left panel, click **Crashlytics**.
3. Download your Firebase config file: 
  - For Android: Click **Download google-services.json**
  - For iOS: Click **Download GoogleService-Info.plist**
4. Add the configuration file(s) to the root of your Android and/or Xcode project. 
5. In Unity, open the **BFG > Build Settings** menu.
6. Locate the option "Folder Copied on Postprocess". Specify the path to your configuration file(s).

The Unity SDK ships with a post-processor build script that handles many of the modifications that occur to your Android and/or Xcode project during the build process. 

For iOS, when the iOS Build Processor runs, it will add the ``<key>FIREBASE_ANALYTICS_COLLECTION_ENABLED</key><false>`` entry to the game's plist file to ensure it is disabled by default if the "Update pList" flag is set. This ensures that the GDPR consent dialog will be displayed prior to initializing Firebase Analytics and Crashlytics.

</details>

<details>
  <summary>Update manifest file with Analytics meta tag (Android only)</summary>

The following update to your game's manifest file defers any reporting until the BFG SDK enables it and the GDPR conditions are accepted. 

1. Locate and open your app’s main manifest file.
2. In the application section of your main manifest file, add the following entry:

```xml
<meta-data android:name="firebase_analytics_collection_enabled" android:value="false" />
```

</details>

<details>
  <summary>Set up CocoaPods (iOS only)</summary>

The Firebase Unity SDKs utilize CocoaPods to manage iOS dependencies. Ensure that you have CocoaPods installed on your system before installing the Firebase Unity SDKs.

**CocoaPods Error Message**

Certain combinations of macOS and Xcode versions have issues when automatically setting up CocoaPods on your project export. You may receive the following error message: 

> Failed to install CocoaPods for the current user.
> 
> It will not be possible to install CocoaPods in the generated Xcode project which will result in link errors when building your application.

You can further verify this issue by looking for the following in the error output:

```
In file included from /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby.h:33:  /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby/ruby.h:24:10: fatal error: 'ruby/config.h' file not found
```

In the event of this error, perform the following steps:

1. Close Unity.
2. In a Terminal window, enter the following code:

```
sudo cp /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/universal-darwin20/ruby/config.h /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby/
cd $(xcode-select -p)/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0
sudo ln -s universal-darwin20 universal-darwin19
gem install --user-install cocoapods
```

:::info

An alternative to the above steps is to to install the latest version of Ruby via Homebrew. However, Homebrew does not automatically add its version to your $PATH. If you choose to install Ruby via Homebrew, you need to manually add its version to your path.

:::

</details>




## Initializing Firebase Crashlytics

Select the BFG SDK you are using to find out how to initialize Firebase Crashlytics:

<Tabs>
  <TabItem value="unity" label="Unity" default>

In order to work, you must initialize Crashlytics by invoking ``bfgCrashlytics.InitializeAsync`` during startup. Nothing will be captured by Crashlytics until initialization. Since initialization is asynchronous, we recommend waiting until the async task is complete before doing anything that should be tracked by Crashlytics.

If your game supports any sort of soft-reset mechanism that reinitializes your game and its dependencies, we recommend calling ``bfgCrashlytics.Shutdown()`` prior to the restart.

```csharp
bfgCrashlytics.InitializeAsync().ContinueWith(task => {
  if (task.Result.Succeeded) {
    // OK to use bfgCrashlytics methods
  }
  else {
    // Not OK to use bfgCrashlytics methods
    Debug.LogError($"Failed to initialize crashlytics: {task.Result}");
  }
});
```
  </TabItem>
  <TabItem value="android" label="Native Android">

```java
Coming soon! 
```
  </TabItem>

  <TabItem value="iOS" label="Native iOS">

You must initialize Firebase Crashlytics and Firebase Analytics before initializing the Native iOS SDK: 

```objectivec
// *** This import statement is required in your AppDelegate.
#import <bfg_iOS_Crashlytics/bfg_iOS_Crashlytics.h>
...
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  ...
  // *** Initialize Firebase Crashlytics and Analytics BEFORE initializing BFG SDK
  [[bfgCrashlytics getInstance] start];
  // *** Actually start the Big Fish SDK
  [bfgManager startWithLaunchOptions:launchOptions parentViewController:rootVC];
  ...
}
@end
```
  </TabItem>
</Tabs>







For more information on Firebase Crashlytics, see Google’s documentation at Getting Started with Firebase Crashlytics or watch their video at Introducing Firebase Crashlytics.
