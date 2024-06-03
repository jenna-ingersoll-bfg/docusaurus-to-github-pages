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
  <TabItem value="ios" label="iOS">

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
  <summary>Start the purchasing service</summary>

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
  <TabItem value="ios" label="iOS">

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

On success, your game should unlock the item, award the purchase to the user, and persist the state of the game and purchase. Then, call ``bfgPurchase.finishPurchase`` for every product that succeeds. If you do not make this call, your game will hold the purchase in an incomplete state. You will continue to receive notifications for the purchase each time it starts and the user will not be able to purchase the product again.

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

### Native Android SDK

<details>
  <summary>Add required values to config file</summary>

Add the following values to the BFG SDK config file(s), bfg_config.json. 

```json
{
  "core": {
    "app_name": "Your game's name",
    "app_store": "Your game's App Store: google or amazon",
  },
}
```
</details>

<details>
  <summary>Initialize in-app purchasing</summary>

The in-app purchasing system is initialized in each activity that processes purchases. It begins in the ``bfgActivity onCreate`` method, with processing continuing asynchronously when triggered by notification handler delegates.

The following code example shows an example of the ``bfgActivity`` class that you need to extend.

```java
class MyActivity extends bfgActivity {
private boolean billingIsInitialized = false;  // Flag: The in-app purchasing system is ready for use
@Override
protected void onCreate(Bundle savedInstanceState) {
  // Normally developers would call super.onCreate() as the first statement in the method, but
  // calling this before the SDK is initialized will trigger a warning that the bfgManager was
  // accessed before it was initialized.
  bfgGameReporting.sharedInstance().setDeepLinkListener(this);
  bfgManager.initializeWithActivity(this, savedInstanceState);
  super.onCreate(savedInstanceState);

  // Start the purchasing system
  registerPurchaseNotificationObservers(this);
  bfgPurchase.sharedInstance().setupService(this);
}
```
</details>

<details>
  <summary>Start the purchasing service</summary>

To start the purchasing service, call the ``bfgPurchase.sharedInstance().setupService()`` method from the current Activity's ``onCreate`` event handler:

```java
protected void onCreate(Bundle savedInstanceState) {
  registerPurchaseNotificationObservers(this);
  bfgPurchase.sharedInstance().setupService(this);
}
```

In response, the purchasing service will raise one of the following notifications:

- ``bfgPurchase.NOTIFICATION_BILLING_INITIALIZE_SUCCEEDED``
- ``bfgPurchase.NOTIFICATION_BILLING_INITIALIZE_FAILED``

Games should not use any other ``bfgPurchase`` methods until the ``bfgCommon.NOTIFICATION_BILLING_INITIALIZE_SUCCEEDED`` notification is received.

:::info

If a ``bfgCommon.NOTIFICATION_BILLING_INITIALIZE_FAILED`` notification is received due to lack of a network connection, the biling system will not initialize. However, when the network connectivity is later regained, the billing system will be initialized and a ``bfgCommon.NOTIFICATION_BILLING_INITIALIZE_SUCCEEDED`` notification will be sent asynchronously.

:::
</details>

<details>
  <summary>Acquire product information</summary>

Once the purchasing system is initialized successfully and you have received the ``bfgPurchase.NOTIFICATION_BILLING_INITIALIZE_SUCCEEDED`` notification, the game defines its consumable products and requests updated product information from the Google Play store. 

After product information is retrieved from the store, one of the following notifications will be raised:

- ``bfgPurchase.NOTIFICATION_PURCHASE_PRODUCTINFORMATION``
- ``bfgPurchase.NOTIFICATION_PURCHASE_PRODUCTINFORMATION_FAILED``

When ``bfgPurchase.NOTIFICATION_PURCHASE_PRODUCTINFORMATION`` is received, the game retrieves information about any updated products using ``bfgPurchase productInformation`` method.

```java
// Notification handler: Billing successfully initialized
@SuppressWarnings("unused")
public void handleBillingInitialized(NSNotification notification) {
  billingIsInitialized = true;
  HashSet<String> allProductIds = getProductIdList();  // Generate the list of all products
  bfgPurchase.sharedInstance().defineConsumableSKUs(allProductIds);  // All consumable items
  bfgPurchase.sharedInstance().acquireProductInformation((List<String>) allProductIds);
  //Process notification...
}
```

These methods may also be used later to update the game's definition of which products are available. This is typically done if the game changes the products available during gameplay, such as when a sale starts or ends.

</details>

<details>
  <summary>Add purchase workflow</summary>

After the available items and their product information are obtained, you can allow users to start purchasing. When a player purchases an item, call the following:

```java
public void buy(final String productid) {
// record that this was a direct user action
userTriggeredPurchase = true;
bfgManager.getParentViewController().runOnUiThread(new Runnable() {
  @Override
  public void run() {
    if (bfgPurchase.sharedInstance().canStartPurchase(productid)) {
      if (!bfgPurchase.sharedInstance().beginPurchase(productid)) {
        purchaseFailedDialog();
      }
    } else {
      bfgLog.w(TAG, String.format("Attempt to purchase '%s' when a purchase can't be started. Skipping purchase.", productid));
      purchaseFailedDialog();
    }
  }
});
```

The purchase will either succeed or fail, and you will receive one of the following notifications:

- ``bfgPurchase.NOTIFICATION_PURCHASE_SUCCEEDED`` (providing the purchased product's product ID)
- ``bfgPurchase.NOTIFICATION_PURCHASE_SUCCEEDED_WITH_RECEIPT`` (providing the product ID and a receipt returned by the store)
- ``bfgPurchase.NOTIFICATION_PURCHASE_FAILED``

On success, your game should unlock the item, award the purchase to the user, and persist the state of the game and purchase. Then, call ``bfgPurchase.finishPurchase`` for every product that succeeds to notify the store that the purchase transaction is complete. If you do not make this call, your game will hold the purchase in an incomplete state. You will continue to receive notifications for the purchase each time it starts and the user will not be able to purchase the product again.

:::warning

The following methods are deprecated: 

- ``consumePurchase``
-  ``defineConsumableSKUs`` 

If your game uses either of these methods, update your game code to use ``finishPurchase`` instead.

:::

When a purchase fails, the ``bfgPurchase.NOTIFICATION_PURCHASE_FAILED`` notification is raised. The notification's payload includes the product ID, but does not provide any details about possible causes of the failure. However, a ``PurchaseStatus`` object is created that provides detailed information on the failure. Use the ``bfgPurchase.sharedInstance().getPurchaseStatus`` method at any time to return the ``PurchaseStatus`` object with information on the most recent purchase attempt for any given product ID.

```java
@SuppressWarnings("unused")
public void handlePurchaseFailed(NSNotification notification) {
    String productId = (String) notification.getObject();
    PurchaseStatus purchaseStatus = bfgPurchase.sharedInstance().getPurchaseStatus(productId);
}
```

The PurchaseStatus object provides the following properties with information about the purchase attempt:

- ``productID``: 	A string returning the product ID (SKU)
- ``errorCode``: A string returning the error. Possible values include:
    - "SUCCESS": The most recent purchase attempt was successful
    - "BILLING_UNAVAILABLE": The in-app purchase system is not currently available
    - "DEVELOPER_ERROR": Attempt to purchase an undefined product or other invalid use of the purchase system
    - "ERROR": The purchase failed for an unexpected reason. No further information is available
    - "FEATURE_NOT_SUPPORTED": The game attempted to perform an operation that is not supported
- ``isRestored``: A boolean returning whether the product was previously purchased and has been restored from the store

</details>

### Native iOS SDK

<details>
  <summary>Add required values to config file</summary>

Add the following values to the BFG SDK config file(s), bfg_config.json.

```json
{
  "core": {
    "app_name": "Your game's name",
    "app_store_id": "Your game's Apple Store ID",
    "hbi": "Your game's HBI",
  },
}
```

</details>

<details>
  <summary>Start the purchasing service</summary>

To start the purchasing service, call the ``startService`` method:

```objectivec
[bfgPurchase startService]
```

:::info

When you start purchase services, you may immediately begin receiving notifications if any outstanding purchases did not complete.

:::

To support Promoted In-App Purchases (purchases that are configured and initiated at the App Store), place the ``startService`` command before the root view controller is initialized in your app delegate's ``didFinishLaunchingWithOptions``.

</details>

<details>
  <summary>Acquire product information</summary>

Once the purchasing service is initialized, acquire the product information for each of the items available for purchase in your game. 

```objectivec
NSSet *allProductIds = [NSSet setWithArray:@[ kProductIdConsumable, kProductIdUnlock ]];
[bfgPurchase acquireProductInformationForProducts:allProductIds];
```

The ``bfgPurchase.NOTIFICATION_PURCHASE_PRODUCTINFORMATION`` notification will be triggered once the operation is finished. It contains a dictionary of two keys, ``*_SUCCESSES_*`` and ``*_FAILURES_*``. The values associated with these keys are arrays of strings. The strings are product IDs.

- ``BFG_ACQUIRE_PRODUCT_INFO_SUCCESSES_USER_INFO_KEY``: Returns all product IDs for which product information was acquired.
- ``BFG_ACQUIRE_PRODUCT_INFO_FAILURES_USER_INFO_KEY``: Returns all product IDs for which product information could not be acquired. This generally means the product ID was not found in the App Store.

The following code demonstrates how a successful transaction appears, when the call succeeds but no product information has been returned yet:

```objectivec
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(acquireProductInfoDidSucceed:) name:NOTIFICATION_PURCHASE_PRODUCTINFORMATION object:nil];

- (void)acquireProductInfoDidSucceed:(NSNotification *)notification {
  NSArray *successes = notification.userInfo[BFG_ACQUIRE_PRODUCT_INFO_SUCCESSES_USER_INFO_KEY];
  if ([successes count]) {
    // Add debug logging showing that the request succeeded
    // Set a global flag that purchasing is ready
    return;
  }
  else {
    // Add debug logging showing that the request failed
    // You'll need to retry acquire later
  }
}
```

:::info

If the ``acquireProductInformation`` method returns ``NO``, you will need to try again. No purchases can occur until this method succeeds, and you have been notified with the product information.

Products are managed in iTunes Connect, so be sure to handle success and failure cases. The notification `*_USER_INFO_KEY` will contain a dictionary with a single ``bfgPurchaseObject SKPaymentTransaction``. This is the object you receive when you are notified that a purchase succeeded (or failed).

:::

</details>

<details>
  <summary>Add purchasing workflow</summary>

After the available items and their product information are obtained, you can allow users to start purchasing. When a player purchases an item, call the following:

```objectivec
NSString *productId = @"your_product_id";
if ([bfgPurchase canStartPurchase:productId]) {
  [bfgPurchase startPurchase:productId];
}
else {
  // Present UI indicating that the purchase cannot be completed at this time.
}
```

The purchase will either succeed or fail, and you will receive one of the following notifications:

- ``NOTIFICATION_PURCHASE_SUCCEEDED``
- ``NOTIFICATION_PURCHASE_FAILED``

These notifications contain a ``userInfo`` object that will be a dictionary with a key ``BFG_PURCHASE_OBJECT_USER_INFO_KEY`` whose value is a ``bfgPurchaseObject``.

On success, your game should unlock the item, award the purchase to the user, and persist the state of the game and purchase. Then, call ``bfgPurchase finishPurchase`` for every product that succeeds. If you do not make this call, your game will hold the purchase in an incomplete state. You will continue to receive notifications for the purchase each time it starts and the user will not be able to purchase the product again.

Once the purchase finishes, you will receive a notification called ``NOTIFICATION_FINISH_PURCHASE_COMPLETE`` containing a ``userInfo`` dictionary object with a key ``BFG_PURCHASE_OBJECT_USER_INFO_KEY`` whose value is a ``bfgPurchaseObject`.

You can discover products that have been successfully purchased but not yet been awarded to the player by calling ``bfgPurchase + (NSArray<bfgPurchaseObject *> *)deliverablePurchases``.

:::info

The ``bfgPurchaseObject`` has a field called canceled. When a purchase is started, Apple allows the user to accept or cancel the purchase. If the user cancels the purchase, the purchase fails. When your code is notified that the purchase failed, check the canceled field of the ``bfgPurchaseObject``.

- If the value is ``NO``, let the user know that the purchase did not succeed
- If the value is ``YES``, you do not need to do anything, as the user expected the purchase to fail

:::

</details>

## Restoring Purchases

If the user re-installs the game and had previously purchased non-consumable items, your game must restore those purchased items back to the user. Only **non-consumable items** can be restored. 

:::info[INFO - iOS ONLY]

Due to Apple guidelines, the restore process must be triggered by the user. To accomplish this, we recommend adding a button to your UI that allows the user to restore their previous purchases.

:::

Use the ``bfgPurchase.restorePurchases`` method to restore purchases:


<Tabs>
  <TabItem value="unity" label="Unity" default>

```csharp
public void Restore() {
  bfgPurchase.restorePurchases();
}
```
  </TabItem>
  <TabItem value="android" label="Android" default>

```java
bfgPurchase.sharedInstance().restorePurchase(productIds);
```
  </TabItem>
</Tabs>

You should receive a ``bfgCommon.NOTIFICATION_PURCHASE_SUCCEEDED`` notification for each previously purchased non-consumable that is restored. After all of these notifications have posted, ``bfgCommon.NOTIFICATION_RESTORE_SUCCEEDED``  or ``bfgCommon.NOTIFICATION_RESTORE_FAILED`` will be posted indicating the restore process has either completed or failed.

When restoring purchases, we recommend you follow these best practices:

- On Success, unlock the item, award the purchase to the user, and persist the state
- Wait for ``bfgCommon.NOTIFICATION_RESTORE_SUCCEEDED``. This is your indication that all products that can be restored at this time have been.
- If you receive ``bfgCommon.NOTIFICATION_RESTORE_FAILED``, then the Apple App Store and/or Google Play Store could not be reached and you should indicate to the user that the restore could not be completed.


## Receiving IAP Notifications

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


## Implement receipt verification (Android only)

Games running on Android devices can verify purchases with a receipt returned by the Google Play store. If you want to implement your own server-side receipt verification process, follow this procedure:

1. Subscribe to the ``bfgPurchase.NOTIFICATION_PURCHASE_SUCCEEDED_WITH_RECEIPT`` notification (rather than ``bfgPurchase.NOTIFICATION_PURCHASE_SUCCEEDED``).
2. Add the following code in your notification method:

<Tabs>
  <TabItem value="google" label="Google" default>

```java
Purchase purchase = (Purchase)notification.getObject();
String receipt = purchase.getReceipt();
```
  </TabItem>
  <TabItem value="amazon" label="Amazon" default>

```java
AmazonPurchase purchase = (AmazonPurchase)notification.getObject();
String receiptId = purchase.getReceiptId();
String userId = purchase.getUserId
```
  </TabItem>
</Tabs>

3. Get a list of unconsumed Google purchases by calling the ``bfgPurchase.getVolatileInventory`` method after you receive the ``bfgPurchase.NOTIFICATION_PURCHASE_PRODUCTINFORMATION`` notification. Requesting product information first, triggers an update to your inventory from Google (the inventory authority), and will give you the most up-to-date inventory.

```java
if (bfgPurchase.sharedInstance() instanceof bfgPurchaseGoogle) {
  ((bfgPurchaseGoogle) bfgPurchase.sharedInstance()).getVolatileInventory();
}
```

:::info

Alternatively, you can use the ``bfgPurchase.postCurrentInventory`` method for Google Play purchases to request asynchronous delivery of the inventory data. If delivery succeeds, ``bfgPurchase.NOTIFICATION_POST_CURRENT_INVENTORY_SUCCEEDED`` will be issued, and the notification argument will contain the GoogleInventory object.

```java
NSNotificationCenter.defaultCenter().addObserver(this, "notification_post_current_inventory_succeeded", bfgPurchase.NOTIFICATION_POST_CURRENT_INVENTORY_SUCCEEDED, null);

if (bfgPurchase.sharedInstance() instanceof bfgPurchaseGoogle) { 
  ((bfgPurchaseGoogle) bfgPurchase.sharedInstance()).postCurrentInventory(); 
}

public void notification_post_current_inventory_succeeded(NSNotification notification) { 
  GoogleInventory currentGoogleInventory = (GoogleInventory)(notification.getObject());
}
```

:::
 
4. (Optional) To add additional parameters to the developer payload, call ``completePurchase(String productID, String additionalPayload)``:

```java
if (bfgPurchase.sharedInstance() instanceof bfgPurchaseGoogle) {
  // this is a google purchase
  ((bfgPurchaseGoogle) bfgPurchase.sharedInstance()).completePurchase(productId, additionalPayloadString);
}
else {
  // this is an amazon purchase
  bfgPurchase.completePurchase(productId);
}
```

:::info 

When validating the developer payload in the receipt, be sure to only validate against the "game" portion of the developer payload JSON object.

```json
JSONObject oReceipt = new JSONObject(receipt);
String developerPayload = oReceipt.getString("developerPayload");
JSONObject oDeveloperPayload = new JSONObject(developerPayload);
String gameDeveloperPayload = oDeveloperPayload.getString("game");
//validate against gameDeveloperPayload, not the full developer payload.
```

:::

### Restrictions when using the Native Android SDK

Big Fish servers do not implement inventory management for Android purchases. The Native Android SDK relies on Google Play and the Amazon Store to record customer inventories and purchase histories.

The Native Android SDK's own receipt verification algorithm is applied to product purchases only; it is not applied to purchase restore operations or to the confirmation of purchase consume operations. For this reason, an application can receive a ``NOTIFICATION_RESTORE_SUCCEEDED`` notification for a product SKU during the purchase restore flow, even if the product failed due to an unsuccessful receipt verification.

Developers' options for awarding purchases are as follows:

- The application awards purchases in response to ``NOTIFICATION_PURCHASE_SUCCEEDED`` and ``NOTIFICATION_RESTORE_SUCCEEDED``. In this case, receipt verification cannot prevent the award of falsified purchases, e.g., purchases falsified using a program that impersonates Google Play. However, receipt verification is useful to Big Fish for reporting purposes.
- The application awards purchases in response to ``NOTIFCATION_PURCHASE_SUCCEEDED``, but does not award purchases in response to ``NOTIFICATION_RESTORE_SUCCEEDED``. Note that this policy should NOT be used for products like a “buy-wall” product. Purchase restoration should always be applied to such products because it should be possible for the customer to purchase the product on one device and receive it on another device. This policy can also result in the loss of a legitimate purchase if, for example, network connectivity is lost after the customer's payment has been accepted but before ``NOTIFICATION_PURCHASE_SUCCEEDED`` is issued.
- Implement a server-based inventory management system to retain information about purchases that passed receipt verification. This can be used to:
    - Restore only verified purchases
    - Mitigate or eliminate loss of legitimate purchases

For information on Google's documented best practices for developer-implemented receipt verification, also see:

- [Google Play In-App Billing - Security and Design](http://developer.android.com/google/play/billing/billing_best_practices.html) :arrow_upper_right:
- [Google Play Developer API - Using the API Efficiently](https://developer.android.com/google/play/developer-api.html#practices) :arrow_upper_right: 

### Using non-Big Fish Servers

If you are implementing your own server-side receipt verification, you can get a token by casting the purchase to the appropriate product type for the Android-based store (Google Play or Amazon): 

<Tabs>
  <TabItem value="google" label="Google" default>

```java
Purchase purchase;
(GooglePurchase) purchase.getToken();
```
  </TabItem>
  <TabItem value="amazon" label="Amazon" default>

```java
(AmazonPurchase) purchase.getReceiptId();
```
  </TabItem>
</Tabs>

## Promoted In-App Purchases (iOS Only)

With iOS, you can promote in-app purchases so users can browse them directly on the App Store. **Promoted In-App Purchases** are displayed on your game's product page and visible in search results on the App Store. pThey fall into two main categories:

- One-time purchases
- Subscriptions

To support promoted in-app purchases, call the ``startService`` method at the top of your app's ``didFinishLaunchingWithOptions`` method in the App Delegate, before the root view controller is initialized.
 
By default, promoted in-app prrchases are deferred when they are received. These purchases are processed at the discretion of the game developer after onboarding.

- Call ``bfgPurchase hasDeferredPayments`` to determine if there are promoted in-app purchases waiting to be processed
- Call ``bfgPurchase processDeferredPayments`` to add promoted in-app purchases into the payment flow

:::info

 ``hasDeferredPayments`` is optional, as nothing will happen if there are no purchases to process when calling processDeferredPayments.

:::

### Testing Promoted In-App Purchases

To test the promoted in-app purchases workflow:

1. Create a [test URL](https://developer.apple.com/documentation/storekit/in-app_purchase/testing_promoted_in-app_purchases) :arrow_upper_right: such as:

```
itms-services://?action=purchaseIntent&bundleId=com.bigfishgames.bfgsdkios&productIdentifier=com.bigfishgames.bfgsdkios.consumeme
```

2. Launch the app on a device through Xcode.
3. Send the test URL above to the device using iMessage. Copy and paste the test URL into Safari. The app should open and finish the purchasing process flow for the product id in the test URL.

:::info

MTS events will trigger based on the result of the purchase attempt. This is true for both the ``NOTIFICATION_PURCHASE_SUCCEEDED`` and ``NOTIFICATION_PURCHASE_FAILED`` notifications.

:::
