# User Acquisition Telemetry

:small_blue_diamond: **Tools to use:** MTS/GTS, AppsFlyer,GoGame

## What is Telemetry? 

**Telemetry** is the process of collecting and transmitting data from one source to another. In the gaming industry, telemetry data is used to monitor and track how players interact with various parts of the game, such as clicking on ads or reading messages. In addition, you can collect data about the player's mobile device, operating system and more.  

Games published by Big Fish use a combination of tools to collect, transmit and monitor player data:

- **Mobile Telemetry Service (MTS)** is an analytics gathering service developed by Big Fish to collect game-specific data such as install events, purchases, and session times. MTS is integrated into the BFG SDK, and you can create custom events using the BFG SDK.
- **Game Telemetry Service (GTS)**, like MTS, is an analytics gathering service developed by Big Fish. As its own independent API, you can configure the events you capture to fit your game team's needs. 
- **AppsFlyer** tracks and attributes install and post-install events for paid and non-paid marketing channels. 
- **GoGame** is a powerful publishing tool developed by Plarium that receives telemetry data from MTS and applies the data to User Acquisition (UA) activities, such as marketing spending. GoGame has complete write access to changes in budgets, bids, and business rules that can directly impact the business of your game. When your application is configured correctly in GoGame, the system automatically detects the MTS events and converts them into GoGame’s API payload format. Once converted, the payload is sent to GoGame to be accessed by the UA team.

:::tip[Pre-Requisite]

MTS/GTS is integrated directly into the BFG SDK, and most of its functionality is already set up for you. Prior to setting up GoGame, you must first integrate the BFG SDK into your game code to transmit data using either MTS or GTS.

:::

## Setting Up GoGame

The initial setup of GoGame is performed by the User Acquisition (UA) team. Your Big Fish Producer will provide UA with the following information: 

- App name
- App genre
- Three-letter app abbreviation

Once UA has completed the GoGame registration, they will provide you with a GoGame appID. 

## Integrating GoGame 

:::info

GoGame integration is usually started ahead of the Soft Launch retention phase in Production M2 and is not required for Limited Market Tests in the Market Validation phase.

:::

After your application is registered with GoGame, ensure your application is properly set up to utilize GoGame by doing the following:

1. Integrate the BFG SDK.
2. Set up Mobile Telemetry Services (MTS) events.
  - Ensure that your application has at least the four main MTS events (install, session start, session end, and purchase) configured properly. Refer to Mobile Telemetry Service (MTS) with the BFG SDK for more information.
3. Integrate [AppsFlyer](./tools-appsflyer).

Once integrated, the BFG SDK sends and populates MTS events that are then later transformed into GoGame events. You will be able to begin using MTS events to start passing sessions and deposits to GoGame.

## GoGame Events 

:::warning

For iOS apps, GoGame will only receive events from MTS if App Tracking Transparency (ATT) is accepted by the end-user, which returns a status is 3. If the ATT status is not 3, the data will not be sent to GoGame.

:::

Once the BFG SDK is integrated into your game and you are receiving MTS events, GoGame is running. However, there is currently no system for game teams to track whether GoGame events are successful or not. Reach out to your Producer to confirm that events are being sent successfully. In general, it is safe to assume that if an MTS event succeeds, then GoGame is working correctly.

With GoGame events and call tracking being automatic, it is useful to know what event calls will trigger GoGame calls. The following lists all the MTS fields that GoGame tracks:

```
Session Start
Purchase
Custom Events

ip
languageCode
appUserId
data{}
- eventName
raveId
platform
msgPayloadVersion
environment
osInfo

deviceInfo{}
- idfv
- appTrackingTransparencyStatus
- thirdPartyTrackingEnabled
- appsFlyerKey
- ifaEnabled
- ifa
- googleAdvertisingEnabled
- googleAdvertisingId
- amazonAdvertisingId
- amazonAdvertisingEnabled

bundleId
deviceBrand
deviceModel
deviceOsVersion
osVersion

price
currency
transactionId

eventData{}
eventName
```
 