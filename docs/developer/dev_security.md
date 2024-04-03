# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Ad Delivery Services with ironSource

ironSource allows an app to implement ad delivery services using several ad networks (Facebook, TapJoy, UnityAds, Vungle, etc.), all housed within the framework of one single 3rd party SDK. It handles logic to serve the most effective ads to the client automatically. ironSource supports rewarded videos, interstitials, and banners.

:::info

The ironSource SDK is not included in the BFG SDK and needs to be integrated separately.

:::

## Integrating ironSource  

To integrate ironSource into your game, follow the instructions on ironSource’s documentation:

- [Getting started with Unity](https://developers.is.com/ironsource-mobile/unity/levelplay-starter-kit) :arrow_upper_right:
- [Getting started with Android](https://developers.is.com/ironsource-mobile/android/getting-started-android) :arrow_upper_right: 
- [Getting started with iOS](https://developers.is.com/ironsource-mobile/ios/getting-started-ios) :arrow_upper_right:

## Verifying ironSource 

ironSource provides an Integration Helper, which tests compatibility and verifies that you’ve successfully integrated the SDK and adapters.

For more information, see ironSource’s documentation:

- [Integration Helper for Unity](https://developers.ironsrc.com/ironsource-mobile/unity/integration-helper-unity) :arrow_upper_right:
- [Integration Helper for Android](https://developers.ironsrc.com/ironsource-mobile/android/integration-helper-android) :arrow_upper_right:
- [Integration Helper for iOS](https://developers.ironsrc.com/ironsource-mobile/ios/integration-helper-ios) :arrow_upper_right:

In addition, we recommend that you verify GDPR protocols for your ironSource dialog. These can be viewed in your Console output logs. All of Big Fish’s test passes should reflect the results found in the output logs.

## ironSource Versioning 

Each of the following has its unique version number:

- ironSource SDK
- Ad Network SDK 
- Ad Network’s Mediation Adapter for iOS, Android, and Unity (ironSource wraps the Ad Network’s SDK into an adapter which is identified by a unique version number assigned by ironSource)

To successfully use ironSource and its mediation networks, you must ensure that the versions of all components are compatible with one another.

For more information, see ironSource’s documentation:

- [Check ironSource SDK & Adapter Compatibility (Unity)](https://developers.is.com/ironsource-mobile/unity/mediation-networks-unity/#step-2) :arrow_upper_right:
- [ironSource SDK and adapter compatibility (Android)](https://developers.is.com/ironsource-mobile/android/mediation-networks-android/#step-3) :arrow_upper_right:
- [ironSource SDK and adapter compatibility (iOS)](https://developers.is.com/ironsource-mobile/ios/mediation-networks-ios/#step-3) :arrow_upper_right:

## User Identification in ironSource 

To identify the players of your game, ensure that you set the UserID parameter in ironSource. The UserID is a unique identifier that will differentiate between your different players, and ironSource uses it to know which user to reward upon successful ad completion through server-to-server callbacks.

For more information, see ironSource’s documentation:

- [Additional SDK Settings for Unity](https://developers.is.com/ironsource-mobile/unity/additional-sdk-settings) :arrow_upper_right:
- [Advanced Settings for Android](https://developers.is.com/ironsource-mobile/android/advanced-settings) :arrow_upper_right:
- [Advanced Settings for iOS](https://developers.is.com/ironsource-mobile/ios/advanced-settings-2) :arrow_upper_right:
