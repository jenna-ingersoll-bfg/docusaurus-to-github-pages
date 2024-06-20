# Security & Privacy Standards (SANDBOX TESTING PAGE)

## Google Data Safety Checklist

This checklist is designed to assist game teams in answering the Google Play privacy and security questions within the data safety form on the App Content page in Play Console.

To learn more about Google Play’s privacy:

- [Provide Information for Google Play’s Data Safety Section](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en) :arrow_upper_right:
- [Google Play's Data Types](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en#types&zippy=%2Cdata-types) :arrow_upper_right:
- [Understanding Google Play’s App Account Deletion Requirements](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en) :arrow_upper_right:

## Definitions 

The following are definitions of the unique terms listed in this document:

- **Collected**: Data that is transmitted off the user’s device, either to you or a third-party. Some types of data are exempt.
- **Ephemerally**: Accessing and using data while it is only stored in memory, and is retained for no longer than necessary to service the specific request in real-time. Data collected in this way must still be disclosed, but will not be shown to users on your store listing.
- **Shared**: Data that is transferred to a third-party, either on or off the user’s device. Some types of data transfers are exempt.

## What Needs to be Disclosed 

The following lists what you will need to disclose to be in line with Google Play’s privacy policy:

- Any of the required user data types that are collected and/or shared.
- Any user data sent off the user’s device by libraries or SDKs used in your app, regardless if the information is transmitted to you or a third-party.
- Any user data transferred from your server to a third-party, or transferred to another third-party app on the same device.
- Any user data collected or transferred through a webview that can be opened from your app, unless users are navigating the open web.

## Account Deletion Requests Examples 

Below is a list of examples of how to present the account deletion policy that will allow users to request the deletion of some or all of their information or account:

- [Cooking Craze: Restaurant Game](https://cookingcraze.zendesk.com/hc/en-us/articles/19899281027995) :arrow_upper_right:
- [EverMerge: Merge 3 Puzzle](https://evermerge.zendesk.com/hc/en-us/articles/19899301018523) :arrow_upper_right:
- [Fairway Solitaire - Card Game](https://fairwaysolitaire.zendesk.com/hc/en-us/articles/19899425789083) :arrow_upper_right:
- [Gummy Drop! Match 3 to Build](https://gummydrop.zendesk.com/hc/en-us/articles/19899468182939) :arrow_upper_right:

## Data Collection and Security 

Review the list of required user data types that you will need to disclose below.

<table>
  <thead>
    <tr>
      <th><strong>Topic</strong></th>
      <th><strong>Description</strong></th>
      <th><strong>Collected / Shared</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"><strong>Required User Data</strong></td>
      <td>Does your app collect or share any of the required user data types?</td>
      <td>No</td>
    </tr>
    <tr> 
      <td>Is all of the user data collected by your app encrypted in transit? Learn about how you should answer.</td>
      <td>No</td>
    </tr>
  </tbody>
</table>