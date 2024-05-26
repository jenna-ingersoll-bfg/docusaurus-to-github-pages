# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Configure the Unity SDK

The BFG SDK config file, bfg_config.json, provides the basic settings that will be used during the launch of your game. In addition, it enables optional features within your game and configures settings that are specific to the BFG SDK. 

For Unity games, you will need a separate config file for each platform you are developing on. This means that if your game is for both Android and iOS devices, then you will two config files: one for Android and another for iOS. 

For iOS Targets, the config file, bfg_config.json must be located somewhere in the application bundle.

For Android Targets, the config file, bfg_config.json must be located in the /src/main/res/raw folder in the exported Android Studio project.

:::warning

The config file, bfg_config.json is required for the BFG SDK to function. If the BFG SDK cannot find the file, then your game will crash on startup.

:::

## JSON Structure 

The config file, bfg_config.json is a JSON file broken down into sections based on their configuration area:

| **Section Name** | **Required / Optional** | **Description** |
|---|---|---|
| **core** | Required | Settings that identify, set up and configure the game |
| **rave** | Required | Settings that configure identity and authentication using Rave |
| **tacklebox_marketing** | Optional | Settings used to integrate our TackleBox marketing platform<br /><br />NOTE: Please use this for backwards compatibility only. Newer apps should use LeanPlum and/or brainCloud for Marketing functionality. |
| **user_authentication** | Optional | Settings for optional features related to user authentication |
| **appsflyer** | Optional | Settings for AppsFlyer install attribution |
| **gdpr** | Optional | Settings for testing GDPR and other policies |
| **zendesk** | Optional | Settings to configure the Zendesk help center |
| **debugging** | Optional | Settings that enable various SDK debug features |

### Required Sections

These sections must be included in the config file of every game using the BFG SDK, otherwise, it will crash upon initialization.

<details>
  <summary>Core</summary>

The **Core** section contains settings that are integral to your game, such as the app name and the platforms the game will be distributed on. The values will differ based on platform (Android vs iOS):

```json
"core": {
  "app_name": "...",
  "app_store": "..."
},
```

| **Value Name** | **Platform** | **Required / Optional** | **Description** |
|---|---|---|---|
| **app_name** | iOS<br />Android | Required | The English human readable name for your game, such as "Gummy Drop!" or "Fairway Solitaire". The ``app_name`` is used for reporting in Big Fish data analytics and user acquisition. Confirm with your Big Fish producer what to use for your app name.<br /><br />**NOTE**: In order to identify your game consistently, all non-alphanumeric characters must be removed from the app name. On Android platforms, this is done automatically by the BFG SDK and no further configuration is needed. However, if you are developing for iOS, then you must remove all non-alphanumeric characters from the name in your game code. |
| **app_store** | Android | Required | A string value that should be set to either "google" or "amazon" depending on which App Store the APK is being deployed to. |
| **app_store_id** | iOS | Required | The identifier given to your game in Apple's App Store Connect portal. Confirm your ``app_store_id`` with your Big Fish producer. |
| **custom_events_enabled** | iOS | Optional | A Boolean flag that enables/disables custom event reporting. This value defaults to ``true`` if not specified. Check with your Big Fish producer before setting this value to ``false``. |
| **hbi** | iOS | Optional | A identifier that stands for Hashed Bundle Identifier. This value is used as an anti-fraud measure. The BFG SDK checks to verify the bundle ID is correct when the purchase service is initialized and will also verify the bundle ID and product ID found in receipts.<br /><br />If your game does not enable In-App Purchasing, this value is optional and defaults to ``nil`` if not specified.<br /><br />**NOTE**: The hbi value is required for In-App Purchasing. If your app supports In-App Purchasing, ensure that this value is specified in your config file. Confirm your ``hbi`` with your Big Fish producer. |

</details>

<details>
  <summary>Rave</summary>

The Rave section is passed directly to the Rave SDK as part of the BFG SDK initialization. It has several different configuration values, but the ``ApplicationID`` is the only one that is required. Confirm your ``ApplicationID`` with your Big Fish producer.

```json
"rave": {
  "RaveSettings.General.ApplicationID": "..."
},
```

A full list of Rave configuration values is available on Rave’s documentation: 
- [Available Settings (iOS)](https://bf-docs.ravesocial.co/ios.html#available-settings) 
- [Available Settings (Android)](https://bf-docs.ravesocial.co/android.html#available-settings)

</details>

### Optional Settings

The following sections are optional, and you only need to include them if you are using their features in your game.

<details>
  <summary>User Authentication</summary>
  
This section controls how various parts of the BFG SDK behave when a user logs in to your game.

```json
"user_authentication": {
  "welcome_toast_enabled": false,
  "rave_adk_enabled": false
},
```

| **Value Name** | **Optional / Required** | **Description** |
|---|---|---|
| **welcome_toast_enabled** | Optional | A Boolean indicating if the BFG SDK should display a welcome back notification UI to a returning user. If not specified, defaults to ``false``. |
| **rave_adk_enabled** | Optional | A Boolean indicating if your game will use Rave's App Data Keys feature. If not specified, defaults to ``false``. |
</details>

<details>
  <summary>AppsFlyer</summary>

This section controls AppsFlyer attribution. For more information, see [Ad Attribution and Analytics](../developer/feature-ad-attribution).

```json
"appsflyer": {
  "is_enabled": false
},
```

| **Value Name** | **Optional / Required** | **Description** |
|---|---|---|
| **is_enabled** | Optional | A boolean indicating whether AppsFlyer has been properly configured for your game. If not specified, defaults to ``false``. |
| **att_timeout** | Optional | An integer that sets the amount of time (in seconds) before AppsFlyer begins sending network calls, allowing for an ATT selection. |

</details>

<details>
  <summary>GDPR</summary>

The BFG SDK contains a sample GDPR policy that can be used in the case where there is no GDPR policy set up yet on the Big Fish servers. This section allows developers to validate their GDPR integration with third-party targeted advertising.

```json
"gdpr": {
  "use_sample_policies": false
},
```

| **Value Name** | **Optional / Required** | **Description** |
|---|---|---|
| **use_sample_policies** | Optional | A boolean that controls whether or not the Consent Manager uses the sample policy in debug builds instead of the real policies from the server. If not specified, defaults to ``false``. |

</details>

<details>
  <summary>Zendesk</summary>

This section controls the Zendesk integration. For more information, see [Customer Service Platform](../developer/feature-customer-support).

```json
"zendesk": {
  "is_enabled": false,
  "zendesk_url": "https://bigfishgames.zendesk.com/hc/"
  "zendesk_app_identifier": "384b2170a8d96d8d1e93bab81e9415a2b59a7aa107185f8b"
},
```

| **Value Name** | **Optional / Required** | **Description** |
|---|---|---|
| **is_enabled** | Optional | A boolean indicating whether Zendesk has been configured in your game. This setting controls whether or not the BFG SDK will show the support page if the ``bfgManager.showSupport()`` method is called. If not specified, defaults to ``false``. |
| **zendesk_url** | Optional | A string value that allows you to specify a unique URL for your Zendesk support page. This value will be provided by your Big Fish producer. The default value directs the user to a generic Big Fish Zendesk url (https://bigfishgames.zendesk.com).<br /><br />**NOTE**:The ``zendesk_url`` must include the full URL with https, but do not include any of the path following the domain. |
| **zendesk_app_identifier** | Optional | A string value that uniquely identifies your game in Zendesk. This value will be provided by your Big Fish producer. If not specified, defaults to a generic Big Fish Zendesk app identifier (384b2170a8d96d8d1e93bab81e9415a2b59a7aa107185f8b).  |

</details>

<details>
  <summary>Debugging</summary>

This section prints information about the parsing of the bfg_config.json file to the Logcat or Xcode's console window. This can help you understand if typos or other values are not being used or set properly.

:::info


The ``log_json_report`` value will not work with the release versions of the frameworks, only the debug versions.

:::

```json
"debugging": {
  "log_json_report": false
},
```

| **Value Name** | **Optional / Required** | **Description** |
|---|---|---|
| **log_json_report** | Optional | A boolean value that, when set to ``true``, will print to the Logcat or Xcode's console window a report of what values were parsed in the bfg_config.json file. If not specified, defaults to ``false``. |

</details>

<details>
  <summary>Tacklebox Marketing</summary>

Add this section when using any of the Tacklebox marketing features, such as push notifications and interstitials. This requirement will be clearly called out in each feature article.

:::warning 

Big Fish Games has discontinued support of Tacklebox tools and services at the end of 2021. As an alternative to Tacklebox, we recommend using top-shelf solutions like brainCloud and LeanPlum for any live ops and messaging needs.

:::

```json
"tacklebox_marketing": {
  "game_service_identifier": "..."
},
```

| **Value Name** | **Optional / Required** | **Description** |
|---|---|---|
| **game_service_identifier** | Required | A string that is a unique game-specific value. This value will be provided by your Big Fish producer. |

</details> 

## Sample Config

Here is a sample bfg_config.json file for an Android app. Depending on your game's platform, features, and requirements, your config file may look different. Do not reuse the various IDs listed here for your own game.

```json
{
  "debugging": {
    "log_json_report": true
  },
  "tacklebox_marketing": {
    "game_service_identifier": "uikitexample"
  },
  "core": {
    "app_name": "BFGUIKitExample",
    "app_store_id": "577295518",
    "custom_events_enabled": true,
    "hbi": "e7338febd01d7911fdb2156ba4bfbe1d1922d4a9"
  },
  "user_authentication": {
    "welcome_toast_enabled": false,
    "rave_adk_enabled": false
  },
  "appsflyer": {
    "is_enabled": true
  },
  "gdpr": {
    "use_sample_policies": false
  },
  "cross_sell_button": {
    "is_enabled": true,
    "use_sample_button": false
  },
  "zendesk": {
    "is_enabled": true,
    "zendesk_url": "https://bigfishgames.zendesk.com",
    "zendesk_app_identifier": "384b2170a8d96d8d1e93bab81e9415a2b59a7aa107185f8b"
  },
  "rave": {
    "RaveSettings.General.ApplicationID": "1ab1efeebeff4089932754eed47eb75a"
    }
}
```
