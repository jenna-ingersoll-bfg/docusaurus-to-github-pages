# Telemetry Events

:small_blue_diamond: **Tools to use:** MTS/GTS, BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## What is Telemetry? 

**Telemetry** is the process of collecting and transmitting data from one source to another. In the gaming industry, telemetry data is used to monitor and track how players interact with various parts of the game, such as clicking on ads or reading messages. In addition, you can collect data about the player's mobile device, operating system and more.  

Games published by Big Fish use either the **Mobile Telemetry Service (MTS)** or **Game Telemetry Service (GTS)** to gather and transmit telemetry data: 

- **Mobile Telemetry Service (MTS)** is an analytics gathering service developed by Big Fish to collect game-specific data such as install events, purchases, and session times. MTS is integrated into the BFG SDK, and you can create custom events using the BFG SDK.
- **Game Telemetry Service (GTS)**, like MTS, is an analytics gathering service developed by Big Fish. As its own independent API, you can configure the events you capture to fit your game team's needs. 

Both services will transmit the data to AppsFlyer, GoGame, and any other data collection tools you may have integrated into your game. This data can be used to analyze:

- Campaigns and advertisements for the user
- Tracking install/uninstall rates
- A/B Testing
- Collecting sales data

In addition, MTS/GTS helps developers and support engineers debug and resolve technical issues, as well as track key performance indicators (KPIs).

## Understanding Telemetry Events

MTS/GTS collect and transmit data in the form of telemetry events. **Telemetry events** are actions that are performed at a specific moment in time. All of the events together form an event history of every action taken by a player, which can be useful when analyzing player behavior and patterns.

By default, every game will automatically collect the following GTS/MTS events that coincide with KPIs and collect performance information about a player:

| **MTS Event** | **Description** |
|---|---|
| **Install** | This event fires automatically only on the application's first launch and after the SDK has finished initializing.<br /><br />**Note**: AppsFlyer has its own install event that is sent on the first launch of the application. *This is not the same as the MTS/GTS install event*. AppsFlyer's install event is gated behind both the General Data Policy Regulation (GDPR) and App Tracking Transparency (ATT) selection. |
| **Session Start** | This event fires every time the app returns to foreground. |
| **Session End** | This event fires every time the app goes to background. |
| **Purchase** | This event fires whenever a successful purchase or restore is made. |

:::warning

The expected order of events is: Install, Session Start, Purchase, Session End. This order can differ from expected in the following edge cases:

- Disabled internet connection which causes the Install event to be queued.
- A general timeout of 60 seconds before the Install event can be fired.

:::

## Creating Custom Telemetry Events 

Custom MTS events let you record data that is not included by default with the BFG SDK. Work with your Big Fish producer to identify which custom events are relevant for your game. Examples may include: when a user levels up, gains a collectible, or finishes an in-game event.  

To create a custom event with MTS, use the ``bfgGameReporting.logCustomEvent(name, additionalDetails)`` method of the BFG SDK:

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
```
Coming soon!
```
  </TabItem>
  <TabItem value="ios" label="Native iOS">
```
Coming soon! 
```
  </TabItem>
</Tabs>

The MTS code above is an example of setting up an MTS event and can be expanded to fit any events you want to track. The data structure can be anything relevant to the data you're gathering and does not necessarily need a dictionary. 