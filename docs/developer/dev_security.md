# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Mobile Telemetry Service (MTS) with the BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Mobile Telemetry Service (MTS) is an analytics gathering method provided with the BFG SDK. The information you capture within the game will be sent to AppsFlyer or Salesforce to assist in:

- Campaigns and advertisements for the user
- Tracking install/uninstall rates
- A/B Testing
- Collecting sales data

MTS helps developers and support engineers debug and resolve technical issues, as well as track key performance indicators (KPIs).

## Understanding MTS Events

The BFG SDK contains a number of default MTS events that coincide with KPIs and collect performance information about a player. They are:

| **MTS Event** | **Description**                                                                                                                                                                                                                                                                                                                                                                              |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Install       | This event fires automatically only on the application's first launch and after the SDK has finished initializing.<br /><br />Note: AppsFlyer has its own install event that is sent on the first launch of the application. This is not the same as the default install event and is gated behind both the General Data Policy Regulation (GDPR) and App Tracking Transparency (ATT) selection. |
| Session Start | This event fires every time the app returns to foreground.                                                                                                                                                                                                                                                                                                                                       |
| Session End   | This event fires every time the app goes to background.                                                                                                                                                                                                                                                                                                                                          |
| Purchase      | This event fires whenever a successful purchase or restore is made.                                                                                                                                                                                                                                                                                                                              |

:::warning

The expected order of events is: Install, Session Start, Purchase, Session End. This order can differ from expected in the following edge cases:

- Disabled internet connection which causes the Install event to be queued.
- A general timeout of 60 seconds before the Install event can be fired.

:::

You can also create custom MTS events to track other game information such as when a user gains a level or collects enough in-game currency to reach a milestone. Because these events are specific to your game's specifications, they are not included in the BFG SDK by default.

## Creating Custom MTS Events 

Custom MTS events let you record data that is not included by default with the BFG SDK. Work with your Big Fish producer to identify which custom events are relevant for your game. Examples may include: when a user levels up, gains a collectible, or finishes an in-game event.  

To create a custom event, use the ``bfgGameReporting.logCustomEvent(name, additionalDetails)`` method:

<Tabs>
  <TabItem value="unity" label="Unity" default>
```csharp
{
    Dictionary<string, string> additionalDetails = new Dictionary<string, string> ();
    additionalDetails.Add ("customKey", "customValue");
    bfgGameReporting.logCustomEvent("eventName", additionalDetails);
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">
    Coming soon!
  </TabItem>
  <TabItem value="ios" label="Native iOS">
    Coming soon! 
  </TabItem>
</Tabs>

The MTS code above is an example of setting up an MTS event and can be expanded to fit any events you want to track. The data structure can be anything relevant to the data you're gathering and does not necessarily need a dictionary. 
