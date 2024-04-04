# Security & Privacy Standards (SANDBOX TESTING PAGE)

# App Inbox with Leanplum

Leanplum’s App Inbox is a standalone messaging channel that will allow you to send messages to users in your app, similar to an email inbox. These messages don’t require push certifications and allow you to store messages for long periods of time.

## Creating Messages 

1. Navigate to **Campaigns** then click **Messages**.
2. Click on **Create Message**.
3. Select **Create Message in Messaging**.
4. Select **App Inbox Message** inside the message editor.
5. Click on **Change**.
6. Navigate to **Open Action**, and choose from the list presented in the dropdown.

From here, fill the message out with the needed information, depending on what **Open Action** you’ve selected.

## Sending Messages{#sending-messages}

Choose from one of the following modes to send messages:

* **Manual Mode** sends messages via Leanplum’s API. This mode is not recommended. If necessary, refer to Leanplum’s documentation on [App inbox](https://docs.leanplum.com/reference/app-inbox).
* **Immediate Delivery** sends a single message to the target audience. Once sent, you _cannot edit the message_, and you can _only send it once_.
* **Scheduled Delivery** schedules a message to be sent later.
* **Triggered Delivery** sends a message after a user triggers some sort of event or state (such as opening the app or finishing a campaign). The message will be sent as many times as the number of times the event takes place. You can limit the number of times the message will be sent to the same user by either choosing a limit or setting exceptions for the trigger.

For more detailed instructions on setting up your message delivery, expand the mode you’d like to use:

<details>
    <summary>Immediate Delivery</summary>
1. Set the delivery type to **Immediate**. You can find the delivery options near the bottom of the page.
2. Click **Send Now** at the top of the window when you are done constructing your message.
</details>

<details>
    <summary>Scheduled Delivery</summary>
1. Select the delivery type **Scheduled**. You can find the delivery options near the bottom of the page.
2. Enter the **date** you would like the message to be sent.
3. Select the time zone you would like to target and enter the time. You can also choose **optimal time** to let Leanplum decide at which time the user is more likely to be playing the game.

When you need to make a change to an existing message, you can unschedule the message as long as it hasn’t been sent. Look for the **Unschedule** button at the top of the page. Once unscheduled, edit your message and then re-schedule.
</details>

<details>
    <summary>Triggered Delivery</summary>
:::info
 
Leanplum includes many trigger options called “Display Event Options”, which you can find at Display Event Options (Leanplum documentation). These include triggers like opening or closing the app, or changing geographical regions.

:::

1. Select the delivery type **Scheduled**. You can find the delivery options near the bottom of the page.
2. Choose the **trigger** you want to listen for.
3. Set a **delay**, which sets how much time should pass before sending the message. For immediate sending, choose 0 seconds.
4. Choose to set **exclusions** and a **limit** as conditions for sending the message.
5. Click **Start** to enable this message once you have finished constructing your message. From that point onward any user that triggers the chosen event and isn’t _excluded_ and hasn’t reached the _limit_ will receive the message.

**Triggering a message for a Game Event**

Many times, you will need to send a message when a user starts or finishes an event in your game. For this type of action, select and customize the **User Triggers Event** option. Choose the event from a list of already registered events, or write the event manually. If you manually write an event, ensure that the name you write is the same as the event name being sent from the app.

1. From the list of triggers, select **User triggers** event.
2. Select a registered event or enter a new one.
3. Press **Enter** once you’ve selected your registered event.
4. The conditions for the event will be added to the message. You can keep adding as many as you need by clicking on the **OR** button. If any of them are called, the message will be sent.
</details>


## Testing Messages 

When testing messages, keep the following tips in mind:

* Do not start or send the message. Once started, you cannot edit it anymore.
* Choose to test with either **Send Preview** or triggered messages **Active for Test Users**.


<details>
    <summary>Testing with Message Previews</summary>
If you are constructing a message, you can choose to send a preview to your test devices.

:::warning

Message previews will be sent to **all** users under the target audience. If you don’t want to spam your fellow developers, create an audience with only the devices where you will be testing the message.

:::

To send a preview, click on **Send Preview**. Your device should already be registered as a test device and be listed under the target audience for the message if one is selected.
</details>


<details>
    <summary>Testing Triggered Messages with Active for Test Users</summary>
To test messages that are sent after a user triggers some sort of event or state, set up the message as described in [Sending Messages](#sending-messages). _Do not start the message._

Next, check the box for **Active for test devices**. As long as this option is set, all players using a dev version of the game will receive the message when they trigger the event (and only when they trigger it).
</details>

## Settings and Inputs for App Inbox Messages 
Here, you will find the available settings and inputs for messages that you can create in the App Inbox:

**AllowNonLocalized**

> When set to true, if the message doesn’t have one of its fields translated to the game’s current localization, it will default to English (**body**, **header**, **triggerUrl**, and **buttonLabel**). 
> 
> For example, if the game is in Spanish and no Body for the Spanish localization has been set, it will use the English version.

**Body**

> The content and main text you want to send to the player. 
> 
> **NOTE:** The Body cannot be left empty; if left empty, the message will not appear.

**Header**

> The content and main text you want to send to the player.
> 
> **NOTE:** The Header cannot be left empty; if left empty, the message will not appear.

**ButtonLabel**

> The text to be displayed on the CTA button. Works for both Open URL and Rewards. If empty, it will take a default value for the corresponding action.

**Rewards**

> A list of rewards to be given at the moment the message CTA is performed by the player. By default, three items are available that, if left untouched, will not give a reward. More items can be added in the form of groups copying the format of the default ones.
> 
> **Item (Group)**: Can have any value, use for your own organization<br />
> **id (Text)**: the in-game ID/code for the piece or currency that will be rewarded<br />
> **amount (Number)**: the amount of the item to be granted
> 
> **NOTE:** The following characters are not allowed: ‘.’ (periods) or ‘,’ (commas), decimal and negative numbers. If any of these characters are used, all rewards will be ignored.

**TriggerURL**

> The URL to open from the CTA button. If a URL is set, no rewards will be given with the message.
> 
> **NOTE:** Because the TriggerURL field can take any string, ensure that you enter only valid URLs.

**Image**

> An image to show next to the body of the message. You can use an in-game image (identified by an id) or upload an image file.
> 
> **File (File)**: the file to be used<br />
> **InGameAssetOrURL (Text)**: id of the inGame asset, or a URL to a valid image

**SenderIcon**

> An icon to show next to the header of the message. You can use an in-game image (identified by an id) or any file sent along with the message.
> 
> **File (File)**: the file to be used<br />
> **InGameAssetOrURL (Text)**: id of the inGame asset, or a URL to a valid image

**ExpirationDate**

> The message expiration timer. If not set, then the max value of Date will be used, taken as never expiring. 
> 
> The recommended format is ISO 8601 to avoid date display discrepancies between different locales. Otherwise, en-US format will be used to interpret the date. The following dates are all valid and represent the same value, 27th of July, 2021 00:00hs at -7:00 UTC.
> 
> **ISO 8601**: 2021/07/27T00:00:00.0000000-07:00<br />
> **American with timezone**: 07/27/2021 -7:00<br />
> **American with timezone and time**: 07/27/2021 00:00 -7:00
> 
> **NOTE**: In Leanplum, other factors can set the expiration time for a message. In general, the messages are defaulted to no expiration time.

**RequireCompleteTutorial**

> A list of numbers identifying the tutorial stages that need to be completed before displaying a message. The items should be whole numbers separated by commas.
>
> If null or empty, the message won’t be filtered and will display normally. 

**ShowTimer**

> A boolean setting whether the expiration time is shown in-game to the user (in the form of a countdown).
 
**Versions**

> Defines the game version(s) where a message is displayed to the user. If the user is playing a different version than the ones listed, the message will be filtered and not be displayed.
> 
> If empty, no filter is applied and all users will see the message.
> 
> **NOTE**: Be sure to use the proper version formatting. Version numbers (major.minor.patch) are separated by commas (e.g. 1.24.0, 1.23.1, 1.23.0)

## Additional Resources and Documentation 
- [App inbox message basics (Leanplum user documentation)](https://docs.leanplum.com/docs/app-inbox-messages) :arrow_upper_right:
- [App inbox (Leanplum developer documentation)](https://docs.leanplum.com/reference/app-inbox) :arrow_upper_right:
