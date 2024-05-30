# Security & Privacy Standards (SANDBOX TESTING PAGE)

# General Data Protection Regulation (GDPR)

:small_blue_diamond: **Tools to use:** BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## What is GDPR? 

The **General Data Protection Regulation (GDPR)** requires organizations to safeguard personal data and uphold the privacy rights of anyone in EU territory. To comply with GDPR, Big Fish has implemented a consent policy service called the **Consent Manager**. On each game launch and resume, the BFG SDK polls the service to find if there are consent policies for the user to see and accept. The game must be prepared to know when a policy is showing and when this policy check and display have been completed.

Each game must also be prepared to alter the behavior of any manually integrated 3rd party SDKs and services based on the user's opt-in preference. For example, if the user chooses to opt-out to 3rd party targeted advertising, each game may need to stop sending data to specific 3rd party SDKs.

:::tip[Pre-Requisite]

You must first integrate the BFG SDK into your game code to use the Consent Manager.

:::

## Implementing the Consent Manager

To implement consent policies, you need to add a call to ``bfgManager.addPolicyListener`` as early as possible in the game's run loop. When a listener is registered, it will immediately get a callback indicating the current state:

- ``willShowPolicies`` if consent is required
- ``onPoliciesCompleted`` if not consent is not required

Games should be prepared for asynchronous callbacks that can occur at seemingly arbitrary times. A good way to think about the callbacks is the ``willShowPolicies`` is a UI red light, and ``onPoliciesCompleted`` is a UI green light. 

:::info 

Games can continue to launch in the background while waiting for the callback from the BFG SDK. However, it is important that you do not show any engaging game UI until after the BFG SDK finishes showing the policies, including custom UI from deep link payloads, interstitial payloads, push notification payloads, branding, or anything else that contains user-actionable UI.

:::

<Tabs>
  <TabItem value="unity" label="Unity" default>

```csharp
// Call this method as early as possible.
void ButtonToAddPolicyListener()
{
  bfgManager.addPolicyListener (willShowPolicies, onPoliciesCompleted);
  Debug.LogFormat("PolicyControls - Listener added");
}

// SDK is about to show policies.
void willShowPolicies (string notification)
{
  Debug.LogFormat("PolicyControls willShowPolicies: " + notification);
}

// SDK has finished showing policies.
void onPoliciesCompleted (string notification)
{
  // Game can start displaying vital game content
  Debug.LogFormat("PolicyControls policiesCompleted: " + notification);
  // After policies have been completed, verify if the user accepted or declined the policy.
  Verify_Policy_Status();
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">

Add the listener in their activity's ``onStart`` method and remove it in the ``onStop`` method. 

```java
private bfgPolicyListener mPolicyListener = new bfgPolicyListener() {
  @Override
  public void willShowPolicies() {
    // halt engaging UI
  }

  @Override
  public void onPoliciesCompleted() {
    // it is now safe to show branding, tutorials, intro videos, etc.
    // This is where games should check for 3rd party control acceptance and gate 3rd party
    // data collection that does not adhere to GDPR requirements if the policy was not accepted.
    // See Step 2 for more info on what to do for control checking.
  }
}

public void onStart() {
  super.onStart();
  bfgManager.addPolicyListener(mPolicyListener);
}

public void onStop() {
  super.onStop();
  bfgManager.removePolicyListener(mPolicyListener);
}
```
  </TabItem>
  <TabItem value="ios" label="Native iOS">

```objectivec
[bfgManager addPolicyListener:self willShowPolicies:nil onPoliciesCompleted:^{
  // it is now safe to show branding, tutorials, intro videos, etc.
}];
```

In your BFGUnityAppController.mm file, add the following to the ``didFinishLaunchingWithOptions`` method:

```objective c
extern "C"
{
  void BfgPolicyListenerWrapper__setBfgPolicyListener();
}
-(BOOL)application:(UIApplication*) application didFinishLaunchingWithOptions:(NSDictionary*) options
{
  BfgPolicyListenerWrapper__setBfgPolicyListener();
  // Initialize the SDK here
  return YES;
}
```
  </TabItem>
</Tabs>

## Checking for Controls

**Controls** are used as signals to block or allow features and/or reporting events sent to 3rd parties based on the user's opt-in preference of a policy. The BFG SDK uses a controls list to determine which 3rd parties will receive data.

The ``bfgManager.didAcceptPolicyControl`` control affects the collection/transmission of data used by 3rd party-directed advertising. This method will return:

- YES / True if the user has accepted the control.
- NO / False if declined or there is no record of the user accepting it.

An example call would look similar to this:

<Tabs>
  <TabItem value="unity" label="Unity" default>

 ```csharp 
if (bfgManager.didAcceptPolicyControl(bfgCommon.THIRDPARTYTARGETEDADVERTISING))
{
  // The game is clear to do stuff that may send data eventually provided to 3rd party targeted advertisers.
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">

```java
if (bfgManager.sharedInstance().didAcceptPolicyControl(bfgManager.PolicyControlConstants.THIRD_PARTY_TARGETED_ADVERTISING)) {
  // The game is clear to do stuff that may send data eventually provided to 3rd party targeted advertisers.
}
```
  </TabItem>
  <TabItem value="ios" label="Native iOS">

```objectivec
if ([bfgManager didAcceptPolicyControl:@"THIRDPARTYTARGETEDADVERTISING")
{
  // The game is clear to do stuff that may send data eventually provided to 3rd party targeted advertisers.
}
```
  </TabItem>
</Tabs>

Any 3rd party features included in the SDK (AppsFlyer, Facebook, Rave, etc) are handled, and any additional ones added by the team outside of the BFG SDK (ironSource, LeanPlum, etc) need to be handled separately. 


## Handling Facebook if user does not consent

If a user does not consent, Facebook events should no longer be used for targeted advertising. In order to do this, you first need to verify if the user has accepted or declined the last policy displayed, and then if it has been declined, disable Facebook's targeted advertising.

<Tabs>
  <TabItem value="unity" label="Unity" default>

```csharp
void Verify_Policy_Status ()
{
  bool didAccept = bfgManager.didAcceptPolicyControl(bfgCommon.THIRDPARTYTARGETEDADVERTISING);
  if (!didAccept)
  {
    Debug.LogFormat("PolicyControls declined. Disable Facebook targeted advertising.");
    bfgManager.setLimitEventAndDataUsage(true);
  }
}
```
  </TabItem>
  <TabItem value="native" label="Native Android / iOS">

1. Use the Facebook SDK's ``setLimitEventAndDataUsage`` method.
2. Set it to true if the user has not accepted ``THIRDPARTYTARGETEDADVERTISING``.

The Facebook SDK can still initialize and even send the install event. Further events must wait for the result of the user's opt-in preference. Then use the ``setLimitEventAndDataUsage`` method accordingly.
  </TabItem>
</Tabs>

## Using the Sample Policy

:::warning

Testing the sample policies is only supported in debug builds of the BFG SDK.

:::

The BFG SDK contains a sample policy that can be used when no policy is set up yet on the Big Fish servers. This allows developers to test their GDPR integration with 3rd party targeted advertising without setting up game-specific policies on the server. To use this feature, add the following setting to the BFG SDK config file, bfg_config.json:

```json
"gdpr": {
  "useSamplePolicies": true
}
```

:::info 

After testing with a sample policy, uninstall your app from the device you have used for testing. 3rd party reporting may have been disabled during testing.

:::

The following code sample demonstrates a sample policy file, sample_policies.json, which you can use to verify the content of what is being displayed. The sample policy includes two policies that will be shown in succession.

- The first policy is an optional policy with 3rd party targeted advertising control.
- The second policy is a mandatory policy that the player must accept to continue.

```json
[
  {
    "id": "5cbac95c-7c53-42ed-8701-802449a93e40",
    "title": "Terms of Service",
    "policyText": "<h1>H1 header<\/h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<h3>Links<\/h3><a href=\"https:\/\/www.bigfishgames.com\/company\/privacy.html\">Tap here<\/a><h3>Bold text<\/h3><p>Some <strong>bold<\/strong> text inside regular text<\/p><br><h3>Unordered List<\/h3><ul><li>Coffee<\/li><li>Tea<\/li><li>Milk<\/li><\/ul><br><h3>Ordered List<\/h3><ol><li>Coffee<\/li><li>Tea<\/li><li>Milk<\/li><\/ol>",
    "instructionText": "Scroll to bottom and accept.",
    "acceptButtonText": "Accept",
    "declineButtonText": "Decline",
    "controls": ["THIRDPARTYTARGETEDADVERTISING"],
    "optInText": ["I Accept One", "I Accept Two. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    "config": {
      "placementEvent": "startup",
      "userGroup": "new",
      "ageVerification": false,
      "optional": true
    }
  },
  {
    "id": "470556f8-34ff-4e2f-8e77-49931e0247a8",
    "title": "Terms of Service 2",
    "policyText": "<h1>H1 header<\/h1><h3>Unordered List<\/h3><ul><li>Coffee<\/li><li>Tea<\/li><li>Milk<\/li><\/ul><br><h3>Ordered List<\/h3><ol><li>Coffee<\/li><li>Tea<\/li><li>Milk<\/li><\/ol>",
    "instructionText": "Scroll to bottom and accept.",
    "acceptButtonText": "Accept",
    "optInText": ["I Accept"],
    "controls": [],
    "config": {
      "placementEvent": "startup",
      "userGroup": "new",
      "ageVerification": false,
      "optional": false
    }
  }
]
```
