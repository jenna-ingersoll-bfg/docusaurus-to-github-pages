# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Integrate the Native Android SDK

This section walks you through adding the Native Android SDK to your game and setting up the most basic interactions required between your game and the BFG SDK.

If you're upgrading from a previous version of the Native Android SDK, see [Upgrade to the Latest Version](./upgrade-androidsdk).

:::info 

Ensure that you are targeting the correct Android version for your version of the BFG SDK. For more information, see [3rd Party Version Compatibility Charts](./compatibility-charts)

:::

## Import the Native Android SDK Archive (AAR)

1. Download the most up-to-date version of the Native Android SDK from Big Fish’s [GitHub release repo](https://github.com/bigfishgames-external/sdk-android-releases/releases).  
2. For the SDK release you want to integrate, extract the contents of the gzipped tarball.
3. In Android Studio, add the following AAR files from the extracted SDK to your project:
  - /AARs/bfgLib-release.aar
  - /AARs/bfgLib-debug.aar
  - /AARs/RaveFacebookPlugin.aar
  - /AARs/RaveGooglePlugin.aar
  - /AARs/RaveSocial.aar
  - /AARs/RaveUtils.aar
  - /AARs/XMLScene.aar
4. Add a module dependency to each of the above AARs.

## Set up the BFG SDK config file

The BFG SDK config file, bfg_config.json provides the basic settings that will be used during the first and subsequent launches. The BFG SDK Sample App provides a template with default values that you can build upon for your project. To copy it into your project:

1. Navigate to the root folder of your unzipped Native Android SDK.
2. Copy the config file, bfg_config.json from /android_studio_projects/bfgSampleApps/src/googleF2p/res/raw/bfg_config.json into your project. This file must be in the /src/main/res/raw folder in the exported Android Studio project or the SDK will crash at startup.

To learn about the settings and configuration options in bfg_config.json, see the Configure the BFG SDK.

## Set up the project's Gradle file

:::info

The following code snippets contain placeholder version numbers ‘X.X.X’. Replace these placeholders with the appropriate version for your release of the BFG SDK, found at [3rd Party Version Compatibility Charts](../bfgsdk/compatibility-charts).

:::

Make the following changes to your project’s build.gradle file:

<details>
  <summary>Add plugins</summary>

Add the following plugins to the beginning of your build.gradle file:

```
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services'
apply plugin: 'com.google.firebase.crashlytics'
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'
```

</details>

<details>
  <summary>Verify dependencies</summary>

Verify that your dependencies section has all the necessary dependencies for the SDK. Note that the below sample code may not be a comprehensive list of all dependencies required for your project. 

```
dependencies {
    // Google Billing dependencies
    implementation 'com.android.billingclient:billing:X.X.X'
        
    // Zendesk
    implementation group: 'com.zendesk', name: 'support', version: 'X.X.X'
    implementation 'com.zendesk.belvedere2:belvedere:X.X.X'
    implementation 'com.google.android.material:material:X.X.X'

    // AppsFlyer
    implementation 'com.appsflyer:af-android-sdk:X.X.X'
    implementation 'com.android.installreferrer:installreferrer:X.X.X'

    // Firebase
    implementation 'com.google.firebase:firebase-crashlytics:X.X.X'
    implementation 'com.google.firebase:firebase-analytics:X.X.X'
    implementation 'com.google.firebase:firebase-messaging:X.X.X'
    implementation 'com.google.firebase:firebase-perf:19.0.7'

    // Rave
    implementation 'androidx.security:security-crypto:1.0.0'
    implementation 'androidx.work:work-runtime:2.8.1'
    implementation 'com.google.android.gms:play-services-auth:X.X.X'
    implementation 'com.google.android.gms:play-services-plus:X.X.X'
    implementation 'com.facebook.android:facebook-android-sdk:X.X.X'
  
    // Other dependencies
    implementation group: 'com.squareup.okhttp', name: 'okhttp', version: 'X.X.X'
    implementation 'com.squareup.moshi:moshi:X.X.X'
    implementation 'androidx.constraintlayout:constraintlayout:X.X.X'
    implementation 'androidx.multidex:multidex:X.X.X'
    implementation 'com.google.code.gson:gson:X.X.X'
    implementation 'com.google.android.flexbox:flexbox:3.0.0'
    implementation 'androidx.legacy:legacy-support-v4:1.0.0'
    implementation 'com.android.volley:volley:1.2.1'

}
```

</details>

<details>
  <summary>Update the buildscript code</summary>

Modify the buildscript code section to match the following:

```
buildscript {
  ext.kotlin_version = 'X.X.X'
  repositories {
    mavenCentral()
    google()
  }
  dependencies {
    classpath 'com.android.tools.build:gradle:X.X.X'
    classpath 'com.google.gms:google-services:X.X.X'
    classpath 'com.google.firebase:firebase-crashlytics-gradle:X.X.X'
    classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
  }
}
```

</details>

<details>
  <summary>Include maven repositories</summary>

Include the Google and Zendesk maven repository at the end of your build.gradle file:

```
allprojects {
  repositories {
    google()
    mavenCentral()
    maven {
      url 'https://zendesk.jfrog.io/zendesk/repo'
    }
    maven {
      url 'https://maven.google.com'
    }
  }
}
```

</details>

<details>
  <summary>(Optional) Enable multidex support</summary>

If your minSdkVersion is set to 20 or lower, multidex support is required to integrate the BFG SDK successfully. In addition to adding a dependency (outlined above), enable multidex support by adding ``multiDexEnabled true`` to the default config section:

```
android {
defaultConfig {
  applicationId "com.example.myapplication"
  minSdkVersion 16
  targetSdkVersion 29
  versionCode 1
  versionName "1.0"
  multiDexEnabled true
}
```

</details>

## Set up the Android manifest file 

Make the following changes to your project’s manifest file:

<details>
  <summary>Add permissions for Sticky Broadcasts</summary>

Add the required permission for Sticky Broadcasts:

```xml
<uses-permission android:name="android.permission.BROADCAST_STICKY" />
```

</details>

<details>
  <summary>Specify environments for production and release builds</summary>

To support sending to the correct environment for production and release builds, you must specify this value in the meta-data of the manifest file.

:::warning 

The meta-data entry must be at the \<application> level of the manifest or it won't be recognized.

:::

For non-production builds, use the following code:

```xml
<application>
  <meta-data android:name="com.bigfishgames.BFGEnviron" android:value="test"/>
</application>
```

For production builds, use the following code:

```xml
<application>
  <meta-data android:name="com.bigfishgames.BFGEnviron" android:value="prod"/>
</application>
```

If you are using Android Studio to build, you can set the environment in the build.gradle file by adding a manifest placeholder to your build.gradle file:

1. In the AndroidManifest.xml file, set up a variable for the value:

```xml
<application>
  <meta-data android:name="com.bigfishgames.BFGEnviron" android:value="${bfglibEnviron}"/>
</application>
```

2. In the build.gradle for your application, define your variables for the different build types. Note that your build types may be different than this example.

```
buildTypes {
  debug {
    debuggable true
    minifyEnabled false
    manifestPlaceholders = ["bfglibEnviron":"test"]
  }
  release {
    minifyEnabled true
    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.txt'
    manifestPlaceholders = ["bfglibEnviron":"prod"]
  }
}
```

</details>

## Initialize the BFG SDK

To initialize the BFG SDK, use the ``BFGPlayerActivity`` class as the primary Activity for your application. If you have multiple activities, you can change this later with ``bfgManager.setParentViewController()``.

You must call ``bfgManager.initializeWithActivity()`` before calling any BFG SDK methods.

```java
public class MainActivity extends bfgActivity {
  public void onCreate(Bundle savedInstanceState) {
    bfgManager.initializeWithActivity(this, savedInstanceState);
    super.onCreate(savedInstanceState);
    bfgRave.sharedInstance().setDelegate(new mybfgRaveDelegate());
  }
}
```
