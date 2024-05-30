# Security & Privacy Standards (SANDBOX TESTING PAGE)

# In-App Purchasing

:small_blue_diamond: **Tools to use:** Firebase Crashlyitcs, BFG SDK

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## What is In-App Purchasing? 

**In-app purchasing (IAP)** allows players to buy extra content and/or assets directly from the game, without interrupting the player experience. There are two types of items that can be purchased:

- **Consumable items** are items in a player's inventory that temporarily increase the playing power of the game. Once used, these items are no longer available and are removed from the player's inventory. Examples include potions to increase health, additional lives, or in-game currency (such as diamonds). 
- **Non-consumable items** are items that are kept for the entirety of the player's history. Examples include removing ads from a game or unlocking a VIP island in the game.

All games published by Big Fish must integrate in-app purchasing into their game using the BFG SDK. 

:::tip[Pre-Requisite]

You must integrate the BFG SDK into your game code to implement in-app purchasing.

:::

## Setting up In-App Purchasing

This process to set up in-app purchasing will be different based on the BFG SDK you are using.

### Unity SDK

<details>
  <summary>Add required values to config file</summary>

Add the following values to the BFG SDK config file(s), bfg_config.json. Note that if you are developing for both Android and iOS, you need to update both config files. 

<Tabs>
  <TabItem value="android" label="Android" default>

```json
{
  "core": {
    "app_name": "Your game's name",
    "app_store": "Your game's App Store: google or amazon",
  },
}
```
  </TabItem>
  <TabItem value="ios" label="iOS" default>

```json
{
  "core": {
    "app_name": "Your game's name",
    "app_store_id": "Your game's Apple Store ID",
    "hbi": "Your game's HBI",
  },
}
```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>Initiate the Purchasing service</summary>

Initiate the purchasing service early in your game's run loop to have it available by the time users start playing your game: 

<Tabs>
  <TabItem value="android" label="Android" default>

```csharp
using BFGSDK;
public void StartService() {
  bfgPurchaseAndroid.setupService();
  hasStarted = bfgPurchaseAndroid.startUsingService();
}
```

The Android purchase service startup is asynchronous. When the purchase service completes, the ``bfgCommon.NOTIFICATION_BILLING_INITIALIZE_SUCCEEDED`` or ``bfgCommon.NOTIFICATION_BILLING_INITIALIZE_FAILED`` notification will be raised. Wait for the successful startup before acquiring product information.

  </TabItem>
  <TabItem value="ios" label="iOS" default>

```csharp
using BFGSDK;
public void StartService() {
  bfgPurchase.startService();
}
```
  </TabItem>
</Tabs>

</details>

<details>
  <summary>Acquire product information</summary>

Once the purchasing service is initialized, acquire the product information for each of the items (both consumable and non-consumable) available for purchase in your game. Contact your Big Fish producer for a list of items that will be available in your game. 

To acquire product information, use the ``bfgPurchase.acquireProductInformation`` method:

<Tabs>
  <TabItem value="android" label="Android" default>

```csharp
using BFGSDK;
public void notification_billing_initialize_succeeded(string notification)
{
  List<string> productIds = new List<string>();
  // Define consumable items
  productIds.Add("com.bigfishgames.bfgsdkandroidgooglef2p.hintcoins";
  productIds.Add("com.bigfishgames.bfgsdkandroidgooglef2p.highestpricew");
  bfgPurchaseAndroid.defineConsumableSKUs(productIds);
  // Add non-consumable items to the overall item list
  productIds.Add("com.bigfishgames.bfgsdkios.seunlock");
  if (!bfgPurchase.acquireProductInformation(productIds))
  {
    Debug.Log("There is no internet connection, try again.");
  }
  else
  {
    Debug.Log("Product information request has been sent.");
  }
}
```
  </TabItem>
  <TabItem value="ios" label="iOS" default>

```csharp
using BFGSDK;
public void StartService() {
  bfgPurchase.startService();

  List<string> productIds = new List<string>();
  productIds.Add("com.bigfishgames.bfgsdkios.consumeme");
  productIds.Add("com.bigfishgames.bfgsdkios.seunlock");
  if (!bfgPurchase.acquireProductInformation(productIds)) {
    Debug.Log("There is no internet connection, try again.");
  }
  else {
    Debug.Log("Product information request has been sent.");
  }
}
```
  </TabItem>
</Tabs>

The ``bfgCommon.NOTIFICATION_PURCHASE_PRODUCTINFORMATION`` notification will be triggered once the operation is finished. It contains a JSON dictionary of two keys. The values associated with these keys are arrays of strings. The strings are product IDs.

- ``BFG_ACQUIRE_PRODUCT_INFO_SUCCESSES_USER_INFO_KEY``: Returns all product IDs for which product information was acquired.
- ``BFG_ACQUIRE_PRODUCT_INFO_FAILURES_USER_INFO_KEY``: Returns all product IDs for which product information could not be acquired. This generally means the product ID was not found in the App Store.

The following code demonstrates how the notification should be treated when it is received:

```csharp
void notification_product_information (string notification) {
  if (!String.IsNullOrEmpty(notification)) {
    JSONNode root_node = JSON.Parse(notification);
    JSONArray successes = root_node["BFG_ACQUIRE_PRODUCT_INFO_SUCCESSES_KEY"].AsArray;
    JSONArray failures = root_node["BFG_ACQUIRE_PRODUCT_INFO_FAILURES_KEY"].AsArray;
    if (failures.Count > 0)
    {
      Debug.Log("Unexpected failures acquiring product info for the following products: " +
          failures.ToString());
      Debug.Log("Purchases can not start, try again.");
      return;
    }
    string successesString = successes.ToString();
    Debug.Log("Acquired product info for: " + successesString + ". Purchases can be made now.");
  }
}
```

</details>

<details>
  <summary>Implement in-app purchases</summary>

After the available items and their product information are obtained, you can render your game's catalog and allow users to start purchasing. Do this by setting a specific product ID to each element in your catalog. When the user taps on an element of the catalog, the following can be called:

```csharp
public bool Purchase(string productId)
{
  // canStartPurchase is optional, but recommended. This method 
  // verifies that your game is ready to process purchases
  if (bfgPurchase.canStartPurchase(productId))
  {
    bfgPurchase.startPurchase(productId);
    return true;
  }
  return false;
}
```

The purchase will either succeed or fail, and you will receive one of the following notifications:

- ``bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED`` 
- ``bfgCommon.NOTIFICATION_PURCHASE_FAILED``

On success, your game should perform unlock the item, award award the purchase to the user, and persist the state of the game and purchase. Then, call ``bfgPurchase.finishPurchase`` for every product that succeeds. If you do not make this call, your game will continue to receive notifications for completed purchases each time it starts and the user will not be able to purchase the product again.

:::info

Consider storing a record that the purchase completed successfully. The BFG SDK does not automatically store purchase information.

:::

The following code demonstrates how to complete a purchase event, by granting the item or notifying the user of a failure:

```csharp
void purchase_succeeded(string notification) {
  Debug.Log("notification_purchase_succeeded: notification=" + notification);
  string productId = "";
  // Parse root node of notification JSON
  JSONNode root_node = JSON.Parse (notification);
  // Extract productID
  productId = root_node ["BFG_PURCHASE_OBJECT_USER_INFO_KEY"]["productInfo"]["productID"];
  if (String.IsNullOrEmpty(productId)) {
    Debug.Log("notification_purchase_succeeded: unable to retrieve product ID: " + notification);
    return;
  }
  // Extract restore value and productTitle
  bool isRestore = root_node ["BFG_PURCHASE_OBJECT_USER_INFO_KEY"]["restore"].AsBool;
  string productTitle = root_node ["BFG_PURCHASE_OBJECT_USER_INFO_KEY"]["productInfo"]["title"];
  bfgPurchase.finishPurchase(productId);
  if (isRestore) {
    Debug.Log("Your purchase has been restored.");
  }
  else {
    Debug.Log("Thank you for your purchase.");
  }
  // Unlock the purchase(award the purchase to the user).
  // Get the product information by calling bfgPurchase.productInformation(productId) and persist it with the game state.
  // Surface a popover UI or other action to thank the user for their purchase.
}
void purchase_failed(string productId) {
  Debug.Log("purchase_failed: purchase has failed for product: " + productId);
  // Inform the user of the failure and prompt them to try again.
}
```
</details>

<details>
  <summary>(Optional) Detect and deliver unawarded completed purchases</summary>

The standard way of handling in-app purchases is to listen for ``bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED`` notifications, award the product when you receive one, then call the ``bfgPurchase.finishPurchase`` method.

An alternative is to detect if there are any completed purchases that have not yet been awarded to the player by calling the ``bfgPurchase.deliverablePurchases`` method. If you are concerned that you are somehow missing purchase notifications, this method will return anything that you should be awarding the player.

As usual, after awarding a purchase, you must call ``bfgPurchase.finishPurchase`` to complete the purchase.

</details>

## Restoring Purchases

If the user re-installs the game and had previously purchased non-consumable items, your game must restore those purchased items back to the user. Only **non-consumable items** can be restored. 

:::info[INFO - iOS ONLY]

Due to Apple guidelines, the restore process must be triggered by the user. To accomplish this, we recommend adding a button to your UI that allows the user to restore their previous purchases.

:::

Use the bfgPurchase.restorePurchases() function to restore purchases:

```csharp
public void Restore() {
  bfgPurchase.restorePurchases();
}
```

You should receive a ``bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED`` notification for each previously purchased non-consumable that is restored. After all of these notifications have posted, ``bfgCommon.NOTIFICATION_RESTORE_SUCCEEDED``  or ``bfgCommon.NOTIFICATION_RESTORE_FAILED`` will be posted.

When restoring purchases, we recommend you follow these best practices:

- On Success, unlock the item, award the purchase to the user, and persist the state
- Wait for ``bfgCommon.NOTIFICATION_RESTORE_SUCCEEDED``. This is your indication that all products that can be restored at this time have been.
- If you receive ``bfgCommon.NOTIFICATION_RESTORE_FAILED``, then the Apple App Store and/or Google Play Store could not be reached and you should indicate to the user that the restore could not be completed.


## Receiving notifications for in-app purchases

The BFG SDK includes the ability to receive and track in-app purchase events. Notifications may be sent at any time after the purchasing system is initialized. The game should always be ready to process these notifications, not just after starting a purchase flow.

The process to set up notifications depends on which BFG SDK you are using. Select your SDK below for more information:

<details>
  <summary>Unity SDK</summary>

To listen for in-app purchase notifications, you first need to register to observe IAP notifications defined in ``bfgCommon.cs``: 

```csharp
// Notifies when a purchase is completed successfully
NotificationCenter.Instance.AddObserver(purchase_succeeded, bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED);
// Notifies when a purchase fails
NotificationCenter.Instance.AddObserver(purchase_failed, bfgCommon.NOTIFICATION_PURCHASE_FAILED);
// Notifies when a restoration of a purchase is successful
NotificationCenter.Instance.AddObserver(restore_succeeded, bfgCommon.NOTIFICATION_RESTORE_SUCCEEDED);
// Notifies when a restoration of a purchase fails
NotificationCenter.Instance.AddObserver(restore_failed, bfgCommon.NOTIFICATION_RESTORE_FAILED);
// When a purchase is made, contains the product information about the purchase
NotificationCenter.Instance.AddObserver(notification_product_information, bfgCommon.NOTIFICATION_PURCHASE_PRODUCTINFORMATION);
// (Android only) Notifies when purchase services were initialized successfully
NotificationCenter.Instance.AddObserver (notification_billing_initialize_succeeded, bfgCommon.NOTIFICATION_BILLING_INITIALIZE_SUCCEEDED);
// (Android only) Notifies when purchase services were unable to be initialized
NotificationCenter.Instance.AddObserver (notification_billing_initialize_failed, bfgCommon.NOTIFICATION_BILLING_INITIALIZE_FAILED);
```
</details>

<details>
  <summary>Native Android SDK</summary>

After the game has initialized the Big Fish SDK, start listening for the following notifications:

```java
// Notifies when purchase services were initialized successfully
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_billing_init_succeeded",
    bfgPurchase.NOTIFICATION_BILLING_INITIALIZE_SUCCEEDED);

// Notifies when purchase services were unable to be initialized
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_billing_init_failed",
    bfgPurchase.NOTIFICATION_BILLING_INITIALIZE_FAILED);

// When a purchase is made, contains the product information about the purchase
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_productinformation",
    bfgPurchase.NOTIFICATION_PURCHASE_PRODUCTINFORMATION);

// Notifies when a purchase is completed successfully
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_purchase_succeeded",
    bfgPurchase.NOTIFICATION_PURCHASE_SUCCEEDED);

// Notifies of a successful purchase with a receipt for processing on the server
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_purchase_succeeded_with_receipt",
    bfgPurchase.NOTIFICATION_PURCHASE_SUCCEEDED_WITH_RECEIPT);

// Notifies when a purchase fails
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_purchase_failed",
    bfgPurchase.NOTIFICATION_PURCHASE_FAILED);

// Notifies when a restoration of a purchase is successful
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_restore_succeeded",
    bfgPurchase.NOTIFICATION_RESTORE_SUCCEEDED);

// Notifies when a restoration of a purchase fails
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_restore_failed",
    bfgPurchase.NOTIFICATION_RESTORE_FAILED);

// Notifies when the process to restore a purchase is complete
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_restore_completed",
    bfgPurchase.NOTIFICATION_RESTORE_COMPLETED);

// Notifies when a purchase SKU is revoked and no longer available
NSNotificationCenter.defaultCenter()
  .addObserver(this,
    "notification_purchase_revoked",
    bfgPurchase.NOTIFICATION_PURCHASE_REVOKED);
```
</details>

<details>
  <summary>Native iOS SDK</summary>

After the game has initialized the SDK, start listening for these notifications:

```objectivec
// When a purchase is made, contains the product information about the purchase
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(acquireProductInfoDidSucceed:) name:NOTIFICATION_PURCHASE_PRODUCTINFORMATION object:nil];
// Notifies when a purchase fails
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(purchaseDidFail:) name:NOTIFICATION_PURCHASE_FAILED object:nil];
// 	Notifies when a purchase is completed successfully
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(purchaseDidSucceed:) name:NOTIFICATION_PURCHASE_SUCCEEDED object:nil];
// Notifies when a restoration of a purchase fails
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(restoreDidFail:) name:NOTIFICATION_RESTORE_FAILED object:nil];
// Notifies when a restoration of a purchase is successful
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(restoreDidSucceed:) name:NOTIFICATION_RESTORE_SUCCEEDED object:nil];
```
</details>
