# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Telemetry with GoGame

GoGame is a powerful publishing tool that is developed by Plarium that allows the User Acquisition (UA) team to plan and monitor marketing spending. It has complete write access to changes in budgets, bids, and business rules that can directly impact the business of your application.

GoGame receives telemetry data from the Mobile Telemetry Service (MTS) events from your application. When your application is configured correctly in GoGame, the system automatically detects the MTS events and converts them into GoGame’s API payload format. Once converted, the payload is sent to GoGame.

Besides the setup with the User Acquisition (UA) team, GoGame telemetry is automatic. Having GoGame operation in your application depends on properly integrating the BFG SDK in the applications.

## Integrating GoGame 

:::info

GoGame integration is usually started ahead of the Soft Launch retention phase in Production M2 and is not required for Limited Market Tests in the Market Validation phase.

:::

To ensure your application can use GoGame you first need to get a GoGame appID. Provide your producer with the following information:

- App name
- App genre
- Three-letter app abbreviation

After your application is registered with GoGame, ensure your application is properly set up to utilize GoGame by doing the following:

1. Integrate the BFG SDK.
2. Set up Mobile Telemetry Services (MTS) events.
  - Ensure that your application has at least the four main MTS events (install, session start, session end, and purchase) configured properly. Refer to Mobile Telemetry Service (MTS) with the BFG SDK for more information.
3. Integrate AppsFlyer.

Once integrated, the BFG SDK sends and populates MTS events that are then later transformed into GoGame events. You will be able to begin using MTS events to start passing sessions and deposits to GoGame.

## GoGame Events 

GoGame will only receive events from MTS if App Tracking Transparency is accepted by the end-user, which returns a status is 3. If the ATT status is not 3, the data will not be sent to GoGame.

Currently, there is no visibility for the Game team to check if a GoGame event is successful. You will have to reach out to the GoGame team to confirm if the events are being sent successfully. It is safe to assume that if an MTS event succeeds then GoGame will have a successful event.

With GoGame events and call tracking being automatic, it is useful to know what event calls will trigger GoGame calls. The following lists all the MTS fields that GoGame is tracking:

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
 
