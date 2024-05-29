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

Additionally, to use Firebase in your game, you need to register your game with your Firebase project. Registering your app is often called "adding" your app to your project. See Firebase's documentation for more information: 

- [Register your app with Firebase (Unity)](https://firebase.google.com/docs/unity/setup#register-app) :arrow_upper_right:
- [Register your app with Firebase (Android)](https://firebase.google.com/docs/android/setup#register-app) :arrow_upper_right:
- [Register your app with Firebase (iOS)](https://firebase.google.com/docs/ios/setup#register-app) :arrow_upper_right:

:::

## Enabling Firebase Crashlytics 

1. Open the Firebase Console.
2. In the left panel, click **Crashlytics**.
3. If your Firebase project has multiple games registered, select the game from the dropdown next to Crashlytics in the top bar of the console.
4. Click **Enable Crashlytics**.

## Enabling Firebase Analytics

To get features like a list of crash-free users, breadcrumb logs, and velocity alerts, you need to enable Google Analytics in your Firebase project.

- If your existing Firebase project doesn't have Google Analytics enabled, enable it from the **Integrations** tab of the project's **Project settings** in the Firebase Console.
- If you're creating a new Firebase project, enable Google Analytics during the project creation workflow.

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

<details>
  <summary>Force a test crash to finish setup</summary>

To finish setting up Crashlytics and see initial data in the Crashlytics dashboard of the Firebase Console, you need to [force a test crash](#testing-your-implementation).

Once complete, remove the code to crash your app once you have confirmed that your app is sending the crash reports.

</details>

### Native Android SDK

<details>
  <summary>Add Firebase configuration file(s)</summary>

1. Open the Firebase Console.
2. In the left panel, click **Crashlytics**.
3. Click **Download google-services.json**
4. Add the configuration file(s) to the root of your Android project. 

</details>

<details>
  <summary>Add Crashlytics to your app's Gradle file</summary>

:::info

To find the supported version(s) of the Firebase SDKs, see [3rd Party Version Compatibility Charts](../bfgsdk/compatibility-charts). Replace the version ``X.X.X`` in the example below with the appropriate version for the BFG SDK you are using.

:::

1. Add the following Firebase dependencies to your app's Gradle file, build.gradle:

```
dependencies {
  implementation 'com.google.firebase:firebase-crashlytics:X.X.X'
  implementation 'com.google.firebase:firebase-analytics:X.X.X'
  implementation 'com.google.firebase:firebase-messaging:X.X.X'
}
```

2. Add the Crashlytics Gradle plugin to your project's Gradle file, build.gradle:

```
apply plugin: 'com.google.firebase.crashlytics'
```
</details>

<details>
  <summary>Update manifest file with Analytics meta tag</summary>

The following update to your game's manifest file defers any reporting until the BFG SDK enables it and the GDPR conditions are accepted. 

1. Locate and open your app’s main manifest file.
2. In the application section of your main manifest file, add the following entry:

```xml
<meta-data android:name="firebase_analytics_collection_enabled" android:value="false" />
```

</details>

<details>
  <summary>Force a test crash to finish setup</summary>

To finish setting up Crashlytics and see initial data in the Crashlytics dashboard of the Firebase Console, you need to [force a test crash](#testing-your-implementation).

Once complete, remove the code to crash your app once you have confirmed that your app is sending the crash reports.

</details>

## Testing your implementation

1. Add code to your app to force a test crash. The following sample code can be used:

<Tabs>
  <TabItem value="unity" label="Unity" default>

Add the following code to an existing ``GameObject``. This script will cause a test crash a few seconds after you run your app.

```csharp
using System;
using UnityEngine;

public class CrashlyticsTester : MonoBehaviour {
  int updatesBeforeException;

  // Use this for initialization
  void Start () {
    updatesBeforeException = 0;
  }

  // Update is called once per frame
  void Update() {
    // Call an exception-throwing method here so that it's run every frame update
    throwExceptionEvery60Updates();
  }

  // Throw an exception every 60 frame updates. 
  void throwExceptionEvery60Updates() {
    if (updatesBeforeException > 0) {
        updatesBeforeException--;
    }
    else {
      // Set the counter to 60 updates
      updatesBeforeException = 60;

      // Throw an exception to test your Crashlytics implementation
      throw new System.Exception("test exception please ignore");
    }
  }
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">

Add the following code to your game's ``MainActivity``. It adds a button labeled "Test Crash" that, when pressed, causes a crash.

```java
Button crashButton = new Button(this);
crashButton.setText("Test Crash");

crashButton.setOnClickListener(new View.OnClickListener() {
  public void onClick(View view) {
    throw new RuntimeException("Test Crash"); // Force a crash
  }
});

addContentView(crashButton, new ViewGroup.LayoutParams(
  ViewGroup.LayoutParams.MATCH_PARENT,
  ViewGroup.LayoutParams.WRAP_CONTENT));
```
  </TabItem>

  <TabItem value="iOS" label="Native iOS">

Add the following code to your app. It adds a button labeled "Test Crash" that, when pressed, causes a crash.

```objectivec
#import "ViewController.h"

@implementation ViewController
‐ (void)viewDidLoad {
  [super viewDidLoad];

  // Do any additional setup after loading the view, typically from a nib.

  UIButton* button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
  button.frame = CGRectMake(20, 50, 100, 30);
  [button setTitle:@"Test Crash" forState:UIControlStateNormal];
  [button addTarget:self action:@selector(crashButtonTapped:)
    forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:button];
}

‐ (IBAction)crashButtonTapped:(id)sender {
  @[][1];
}

@end
```
  </TabItem>
</Tabs>

2. Build and run your app.

:::warning

  For iOS, the Xcode debugger prevents crash reports from being sent to Crashlytics. You must first disconnect your test device or simulator from the Xcode debugger before forcing a crash.

:::

3. Force the test crash by pressing the "Test Crash" button (Android/iOS) or running your app (Unity). After your app crashes, restart it so your app can send the crash report to Firebase.
4. In the Firebase Console, open the Crashlytics dashboard to see your test crash.

:::info

If you don't see your test crash in the Crashlytics dashboard, try refreshing the console and waiting five minutes. If you still don't see the crash, you can use [debug logging](https://firebase.google.com/docs/crashlytics/test-implementation?platform=android#enable-debug-logging) for Crashlytics to help track down the problem.

:::

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
