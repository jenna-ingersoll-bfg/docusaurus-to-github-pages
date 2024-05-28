# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Account Deletion

:small_blue_diamond: **Tools to use:** BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## What is Account Deletion? 

All games published by Big Fish must give the player the option to delete the account from within the game itself. This feature, called **account deletion**, ensures that all account information, including any data associatated with the account is completely removed from the developer's (i.e. Big Fish) records. The account deletion feature gives the player complete control over the personal information that they've shared. 

The BFG SDK includes methods that ensure your game is compliant with Apple’s and/or Google’s account deletion standards.

:::info

To use the Account Deletion feature, you must upgrade to one of the following BFG SDK versions or later:

- Unity SDK v9.6.1
- Native Android SDK v7.7.0
- Native iOS SDK v7.7.1

:::

## Account Deletion Workflow 

While it is not required that you use Big Fish’s solution for account deletion, we recommend using the following workflow to ensure that your game is compliant with Apple and Google’s standards:

1. Add an option called **Delete Account** in your game’s settings.
2. When a player clicks **Delete Account**, open a prompt that contains a warning stating the ramifications of deleting their account. Here is some sample text you can use:

<div style={{marginLeft: '50px' }}>
> By tapping <span style={{color: 'red'}}>YES</span>, your request will be submitted to be processed.
>
> Be aware that this will **DELETE ALL** of your **PURCHASES**, **GAME PROGRESS**, and **PROFILES** in **EACH** of your Big Fish games.
>
> **Are you sure you want to request account deletion?**
</div>

3. Provide two options: **YES, Delete My Account** and **No, Go Back**.
  - If the player clicks **No, Go Back**, return to your game’s settings dialog.
  - If the player clicks **YES, Delete My Account**, open a confirmation dialog. Here is some sample text you can use:

<div style={{marginLeft: '50px' }}>
> Are you sure you want to delete your account?
>
> :warning: You will NOT be able to recover your progress. <br />
> :warning: You will NOT be able to reverse this action. <br />
> :warning: Your games will be permanently RESET.
</div>

  - If the player continues with the account deletion, send a request to Customer Support to delete the account.

:::info 

Clicking **YES, Delete My Account** will not immediately delete a player’s data, as the actual account deletion is performed by Customer Support. This process may take up to 2 weeks to complete.

:::

4. Provide two options: **YES, Delete My Account** and **No, Go Back**.
  - If the player clicks **No, Go Back**, return to your game’s settings dialog.
  - If the player clicks **YES, Delete My Account**, open a final dialog confirming that the request has been submitted, log out the player, and reset the game. Here is some sample text you can use:

<div style={{marginLeft: '50px' }}>
> We are processing your account deletion request, which may take up to 14 business days. We will log you out and reset the game at this point.
</div>

5. When the user clicks Done, return to the game’s settings dialog.

:::info 

It’s important to inform the player that the account deletion can take 14 days to process. During this time, up to when the account deletion is complete, the player will be able to continue to log into their account.

:::

## Implementing Account Deletion

The BFG SDK and Rave SDK must be initialized before requesting account deletion. If the call to the ``requestAccountDeletion`` method is made too early, the application will attempt to call an uninitialized method and crash.

After you call the ``requestAccountDeletion`` method, the BFG SDK will send one of the following NSNotifications, depending on the result of the request:

- ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED``
- ``BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED``

The following sample code demonstrates how to add notification observers for the events that can be sent as a result of the account deletion request:

<Tabs>
  <TabItem value="unity" label="Unity" default>

```csharp
NotificationCenter.Instance.AddObserver(OnAccountDeletionRequestSuccess, bfgCommon.BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED);
NotificationCenter.Instance.AddObserver(OnAccountDeletionRequestFailure, bfgCommon.BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED);

private void OnAccountDeletionRequestSuccess(string eventData)
{
  Debug.Log($"OnAccountDeletionRequestSuccess called - {bfgCommon.BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED}");
}

private void OnAccountDeletionRequestFailure(string resultJson)
{
  JSONNode resultNode = JSON.Parse(resultJson);
  int resultCode = resultNode["result"];
  AccountDeletionRequestResult errorResult = (AccountDeletionRequestResult)resultCode;
  Debug.Log($"OnAccountDeletionRequestFailure called - {bfgCommon.BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED}: {errorResult} - {resultCode}");
}
```
  </TabItem>
  <TabItem value="android" label="Native Android">

```java
NSNotificationCenter.defaultCenter() 
  .addObserver(this, "requestAccountDeletionSucceeded", "BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED", null);

NSNotificationCenter.defaultCenter()
  .addObserver(this, "requestAccountDeletionFailed", "BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED", null);
        
public void requestAccountDeletionSucceeded(final NSNotification notification) {
  bfgLog.d(TAG,String.format("requestAccountDeletionSucceeded called - %s", bfgRaveInternal.BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED));

  // User has been logged out of Rave so we need to update the UI to reflect it
  updateRaveUI();
}

public void requestAccountDeletionFailed(final NSNotification notification) {
  Hashtable<String, Integer> notificationData = (Hashtable<String, Integer>)notification.getObject();
  int errorCode = notificationData.get("result");
  bfgRave.AccountDeletionRequestResult errorResult = bfgRave.AccountDeletionRequestResult.values()[errorCode];
  bfgLog.d(TAG,String.format("requestAccountDeletionFailed called - %s: %s - %d", bfgRaveInternal.BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED, errorResult, errorCode));
}
```
  </TabItem>

  <TabItem value="iOS" label="Native iOS">

```objectivec
// Success will result in the user automatically being logged out of Rave by the BFG SDK
[[NSNotificationCenter defaultCenter] addObserver:self
  selector:@selector(accountDeletionSucceeded:)
  name:BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED
  object:nil];
   
// A userInfo object is returned with BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED. It's value is an integer.
// NetworkUnavailable
// FailedToSend
[[NSNotificationCenter defaultCenter] addObserver:self
  selector:@selector(accountDeletionFailed:)
  name:BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED
  object:nil];
}

-(void)accountDeletionSucceeded:(NSNotification *)notification {
  NSLog(@"%@", BFG_RAVE_ACCOUNT_DELETION_REQUEST_SUCCEEDED);
}

-(void)accountDeletionFailed:(NSNotification *)notification {
  NSDictionary *userInfo = notification.userInfo;
  NSNumber * result = [userInfo objectForKey:@"result"];
  long lResult = [result longValue];
  NSString * strResult = @"UNSET";
  switch(lResult) {
    case NetworkUnavailable:
      strResult = @"NetworkUnavailable";
      break;
    case FailedToSend:
      strResult = @"FailedToSend";
      break;
    default: break;
  }
  NSLog(@"%@: %@ - %@", BFG_RAVE_ACCOUNT_DELETION_REQUEST_FAILED, strResult, result);
}
```
  </TabItem>
</Tabs>

## Verifying the implementation

To test your implementation, add the following code to your BFG SDK config file, bfg_config.json when testing. Ensure you REMOVE it for production:

```
"internal_sdk_debugging": { "test_request_account_deletion" : true }
```

This code will append an extra string to the ticket subject so that it will be ignored by Customer Support. You can confirm that a request ticket was sent by searching for tickets containing ``"sdktest123 - Big Fish Account Deletion Request."``

## Additional Resources and Documentation

**Requirements from Apple and Google**

- [Offering account deletion in your app (Apple Support Documentation)](https://developer.apple.com/support/offering-account-deletion-in-your-app) :upper-right-arrow:
- [Understanding Google Play’s app account deletion requirements (Google Play Console Help)](https://support.google.com/googleplay/android-developer/answer/13327111?sjid=13588466845803626281-NC) :upper-right-arrow:

**UI String Localization**

Localization strings are available for the account deletion UI to support games localized in multiple languages. You can access the localization strings [following this link](https://docs.google.com/spreadsheets/d/1FMECXrD1ME7dovdrR22CsUKswMa9EKRS/edit#gid=902652280).

**BFG SDK Sample App Implementation**

An example implementation can be found in the BFG SDK Sample App. The account deletion implementation includes a button, notification observers, and selectors. Locate the implementation in the following files:

- Unity SDK: BfgZendeskListeners.cs
- Native Android SDK: MainActivity.java
- Native iOS SDK: BFGRaveViewController
