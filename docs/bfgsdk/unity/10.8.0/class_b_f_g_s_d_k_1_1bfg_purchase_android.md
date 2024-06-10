<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><img src="Icon-100.png" alt="Logo" /></td>
<td><div id="projectname">
Big Fish Unity SDK<span id="projectnumber"> 10.8.0</span>
</div>
<div id="projectbrief">
Use to access BFG core SDK functionality
</div></td>
</tr>
</tbody>
</table>

  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgPurchaseAndroid](class_b_f_g_s_d_k_1_1bfg_purchase_android.html)

[Public Types](#pub-types) | [Static Public Member
Functions](#pub-static-methods) | [Static Public
Attributes](#pub-static-attribs) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_purchase_android-members.html)

BFGSDK.bfgPurchaseAndroid Class Reference

This is the
[bfgPurchaseAndroid](class_b_f_g_s_d_k_1_1bfg_purchase_android.html "This is the bfgPurchaseAndroid wrapper class for the native Android purchase functionality.")
wrapper class for the native Android purchase functionality.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#details)

##  Public Types

enum  

[bfgStoreType](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#af90298863ce99fda49d5511cd75312c8)
{ **google** , **amazon** }

 

Enum to define the store type, i.e Google or Amazon.  

 

##  Static Public Member Functions

static string 

[getAppstoreName](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a6e348104a31cd478217d2338cba149dc)
()

 

Gets the name of the app store.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a6e348104a31cd478217d2338cba149dc)  

 

static void 

[setupService](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a81489a72200869eb4803bebc36ea08dd)
()

 

Does preliminary setup in preparation of starting the purchasing service
The following are requirements and extra details for using this method:
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a81489a72200869eb4803bebc36ea08dd)  

 

static void 

**resumeUsingService** ()

 

Resume the service, should be called from onResume.  

 

static void 

**reportPurchaseCompletedSuccessfully** (string receipt)

 

Reports that a purchase was successfully completed.  

 

static string 

[getCurrentUser](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a3ff6447094950304913ae0c826c00882)
()

 

Gets the current user identifier. This is typically only used by Amazon
In-App Purchase.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a3ff6447094950304913ae0c826c00882)  

 

static void 

[setCurrentUser](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#ab80218431a91bda1e48df98cd3829e8f)
(string userId)

 

Mutator for current user identifier. This is typically only used by
Amazon In-App Purchase.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#ab80218431a91bda1e48df98cd3829e8f)  

 

static void 

**stopUsingService** ()

 

Stop using the service, should be called from onPause.  

 

static void 

**cleanupService** ()

 

Clean up the service. Should be called from onDestroy.  

 

static bool 

[beginPurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a072c7ef355a3642446f2f31fded85394)
()

 

Called when a user has selected the "buy" button.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a072c7ef355a3642446f2f31fded85394)  

 

static bool 

[beginPurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a7d91d03996a64a16df3f974a978d374b)
(string productid)

 

Begin a purchase of the product identified by the supplied product id.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a7d91d03996a64a16df3f974a978d374b)  

 

static void 

[completePurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a2bcf5fe2f7e1f14bda2d35f9a5f4b4cf)
(string productid)

 

Called when the user has selected to "buy." Adds the payment to
SKPaymentQueue.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a2bcf5fe2f7e1f14bda2d35f9a5f4b4cf)  

 

static bool 

[completePurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a25fe95f6dfd5e2af6327b5d17e275ed3)
(string productid, string additionalPayload)

 

Called when the user has selected to "buy". Adds the payment to
SKPaymentQueue and allows for an additional payload to be sent as "game"
field in developer payload.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a25fe95f6dfd5e2af6327b5d17e275ed3)  

 

static void 

[restorePurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a3bfa3076513b34622a085a4340e4ae31)
()

 

Call if the user asks to restore previous purchase of default SKU.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a3bfa3076513b34622a085a4340e4ae31)  

 

static void 

[restorePurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#ae03a1b88de865df8df413618e6e463c2)
(string productid)

 

Call if the user asks to restore previous purchase with a specific SKU.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#ae03a1b88de865df8df413618e6e463c2)  

 

static void 

[restorePurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#aef01860219e42352cc0c25d744d4f536)
(List\< string \> productids)

 

Call if the user asks to restore previous purchase with a list of SKUs.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#aef01860219e42352cc0c25d744d4f536)  

 

static void 

[consumePurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a9eb12dbf8473465da124ac7b4a2e093b)
(string productid)

 

Call to consume this purchase.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a9eb12dbf8473465da124ac7b4a2e093b)  

 

static Dictionary\< string, object \> 

[getVolatileInventory](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a8cb0e78650d3913927c1de69fbc13b8a)
()

 

Returns the PublicInventory, which is an instance of AmazonInventory or
GoogleInventory. Use after receiving
NOTIFICATION\_BILLING\_INITIALIZE\_SUCCEEDED or
NOTIFICATION\_RESTORE\_COMPLETED.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a8cb0e78650d3913927c1de69fbc13b8a)  

 

static Dictionary\< string, string \> 

[productInformation](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a31d7f3a23f93d0a577e903382f5cbea3)
(string productid)

 

Obtains product information for a specific SKU.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a31d7f3a23f93d0a577e903382f5cbea3)  

 

static Dictionary\< string, string \> 

[productInformation](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a7633212715fd13b0b6e9a257134da0ba)
()

 

Obtains product information for the default SKU.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a7633212715fd13b0b6e9a257134da0ba)  

 

static bool 

[postCurrentInventory](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a948ae3a587129acfb5652a5db3b45349)
()

 

Used to initiate asynchronous retrieval of a GoogleInventory object from
Google Play services. If the retrieval is successful, the inventory will
be placed in the argument of a
NOTIFICATION\_POST\_CURRENT\_INVENTORY\_SUCCEEDED notification.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a948ae3a587129acfb5652a5db3b45349)  

 

static void 

[defineConsumableSKUs](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a096f7b66322fcfb8e419d062c7bec977)
(List\< string \> skus)

 

This method is used by the application to specify the product SKUs of
purchases that should be consumed automatically.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a096f7b66322fcfb8e419d062c7bec977)  

 

static void 

[finishPurchase](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a33cbf5ecdcde267f87f61790af219ffe)
(string sku)

 

The application uses this method to report that a purchase has been
awarded.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a33cbf5ecdcde267f87f61790af219ffe)  

 

##  Static Public Attributes

const string 

**BFGSETTING\_FULLGAMEPURCHASE\_KEY** =
"BFGSETTING\_FULLGAMEPURCHASE\_KEY"

 

const string 

**NOTIFICATION\_PURCHASE\_ASKUSER** =
bfgCommon.NOTIFICATION\_PURCHASE\_ASKUSER

 

Notification for asking the user to confirm the purchase.  

 

const string 

**NOTIFICATION\_PURCHASE\_NOTALLOWED** =
"NOTIFICATION\_PURCHASE\_NOTALLOWED"

 

Notification that this user is not allowed to make purchases on this
phone.  

 

const string 

**NOTIFICATION\_PURCHASE\_STARTED** = "NOTIFICATION\_PURCHASE\_STARTED"

 

Notification that a purchase has started.  

 

const string 

**NOTIFICATION\_PURCHASE\_REVOKED** =
bfgCommon.NOTIFICATION\_PURCHASE\_REVOKED

 

SKU Revoked.  

 

const string 

**NOTIFICATION\_RESTORE\_COMPLETED** =
bfgCommon.NOTIFICATION\_RESTORE\_COMPLETED

 

Restore completed.  

 

const string 

**NOTIFICATION\_PURCHASE\_CANCELLED** =
bfgCommon.NOTIFICATION\_PURCHASE\_CANCELLED

 

Purchase cancelled.  

 

const string 

**NOTIFICATION\_PURCHASE\_GETUSERID\_SUCCEEDED** =
"NOTIFICATION\_PURCHASE\_GETUSERID\_SUCCEEDED"

 

User id successfully retrieved.  

 

const string 

**NOTIFICATION\_BILLING\_INITIALIZE\_SUCCEEDED** =
bfgCommon.NOTIFICATION\_BILLING\_INITIALIZE\_SUCCEEDED

 

Indicates that purchase services were initialized successfully.  

 

const string 

**NOTIFICATION\_BILLING\_INITIALIZE\_FAILED** =
bfgCommon.NOTIFICATION\_BILLING\_INITIALIZE\_FAILED

 

Indicates that purchase services were unable to be initialized.  

 

const string 

**NOTIFICATION\_PURCHASE\_PRODUCTINFORMATION\_FAILED** =
"NOTIFICATION\_PURCHASE\_PRODUCTINFORMATION\_FAILED"

 

Indicates that product information failed to be retrieved.  

 

const string 

**NOTIFICATION\_PURCHASE\_CONSUMPTION\_SUCCEEDED** =
"NOTIFICATION\_PURCHASE\_CONSUMPTION\_SUCCEEDED"

 

Indicates that the purchase was consumed successfully.  

 

const string 

**NOTIFICATION\_PURCHASE\_CONSUMPTION\_FAILED** =
"NOTIFICATION\_PURCHASE\_CONSUMPTION\_FAILED"

 

Indicates that the purchase failed to be consumed.  

 

const string 

**NOTIFICATION\_PURCHASE\_SUCCEEDED\_WITH\_RECEIPT** =
"NOTIFICATION\_PURCHASE\_SUCCEEDED\_WITH\_RECEIPT"

 

Indicates that the purchase succeeded with receipt.  

 

const string 

**NOTIFICATION\_POST\_CURRENT\_INVENTORY\_SUCCEEDED** =
bfgCommon.NOTIFICATION\_POST\_CURRENT\_INVENTORY\_SUCCEEDED

 

Indicates that a GoogleInventory object was successfully retrieved from
Google Play services.  

 

const string 

**NOTIFICATION\_POST\_CURRENT\_INVENTORY\_FAILED** =
"NOTIFICATION\_POST\_CURRENT\_INVENTORY\_FAILED"

 

Indicates that a GoogleInventory object failed to be retrieved from
Google Play services.  

 

const string 

**kPurchaseKeyPrefix** = "PURCHASEKEY-"

 

const string 

**kPurchaseMapName** = "PurchaseMap"

 

const string 

**kSkuMapName** = "SkuMap"

 

## Detailed Description

This is the
[bfgPurchaseAndroid](class_b_f_g_s_d_k_1_1bfg_purchase_android.html "This is the bfgPurchaseAndroid wrapper class for the native Android purchase functionality.")
wrapper class for the native Android purchase functionality.

## Member Function Documentation

## [◆ ](#a072c7ef355a3642446f2f31fded85394)beginPurchase() \[1/2\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgPurchaseAndroid.beginPurchase</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Called when a user has selected the "buy" button.

Checks that purchase is possible and sends
NOTIFICATION\_PURCHASE\_ASKUSER. The client should respond to message by
prompting user with the purchase dialog.

  - Returns  
    Boolean `true` if able to begin purchase, `false` if not.

## [◆ ](#a7d91d03996a64a16df3f974a978d374b)beginPurchase() \[2/2\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgPurchaseAndroid.beginPurchase</td>
<td>(</td>
<td>string </td>
<td><em>productid</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Begin a purchase of the product identified by the supplied product id.

Checks that purchase is possible and sends
NOTIFICATION\_PURCHASE\_ASKUSER. The client should respond to message by
prompting user with the purchase dialog.

  - Parameters
    
    |           |                             |
    | --------- | --------------------------- |
    | productId | The product id to purchase. |
    

<!-- end list -->

  - Returns  
    Boolean `true` if able to begin purchase, `false` if not.

## [◆ ](#a2bcf5fe2f7e1f14bda2d35f9a5f4b4cf)completePurchase() \[1/2\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.completePurchase</td>
<td>(</td>
<td>string </td>
<td><em>productid</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Called when the user has selected to "buy." Adds the payment to
SKPaymentQueue.

If sent an "askuser" notification, then the code should either call
"complete" or "cancel" the purchase, depending upon the user's choice.
This method will send a purchase failed notification if the product is
already in the active purchases list or there is no Internet
connectivity.

  - Parameters
    
    |           |                             |
    | --------- | --------------------------- |
    | productId | of product to be purchased. |
    

## [◆ ](#a25fe95f6dfd5e2af6327b5d17e275ed3)completePurchase() \[2/2\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgPurchaseAndroid.completePurchase</td>
<td>(</td>
<td>string </td>
<td><em>productid</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>additionalPayload</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Called when the user has selected to "buy". Adds the payment to
SKPaymentQueue and allows for an additional payload to be sent as "game"
field in developer payload.

This additional Payload is max length 128 characters. The purchase will
fail if a string larger than 128 characters is used. This will be useful
only if you are doing your own server-side receipt verification.

  - Warning  
    Google only.

<!-- end list -->

  - Parameters
    
    |                   |                                             |
    | ----------------- | ------------------------------------------- |
    | productId         | of product to be purchased.                 |
    | additionalPayload | String with a max length of 128 characters. |
    

## [◆ ](#a9eb12dbf8473465da124ac7b4a2e093b)consumePurchase()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.consumePurchase</td>
<td>(</td>
<td>string </td>
<td><em>productid</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Call to consume this purchase.

**NOTIFICATION\_PURCHASE\_CONSUMPTION\_SUCCEEDED** if the product was
consumed successfully. **NOTIFICATION\_PURCHASE\_CONSUMPTION\_FAILED**
otherwise.

The method will send NOTIFICATION\_RESTORE\_COMPLETED if the call
completes successfully, regardless of whether the product has been
purchased. If the method does not complete successfully, it will send
NOTIFICATION\_RESTORE\_FAILED.

  - Warning  
    Google only.

<!-- end list -->

  - Parameters
    
    |           |                            |
    | --------- | -------------------------- |
    | productid | Product Id to be consumed. |
    

## [◆ ](#a096f7b66322fcfb8e419d062c7bec977)defineConsumableSKUs()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.defineConsumableSKUs</td>
<td>(</td>
<td>List&lt; string &gt; </td>
<td><em>skus</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method is used by the application to specify the product SKUs of
purchases that should be consumed automatically.

The method should be called on the UI thread.

  - Warning  
    Use on Google Purchases ONLY. This method will not do anything on
    Amazon purchases.

<!-- end list -->

  - Parameters
    
    |      |                                                                                        |
    | ---- | -------------------------------------------------------------------------------------- |
    | skus | List of SKUs for products whose purchases should be consumed automatically by the SDK. |
    

## [◆ ](#a33cbf5ecdcde267f87f61790af219ffe)finishPurchase()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.finishPurchase</td>
<td>(</td>
<td>string </td>
<td><em>sku</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

The application uses this method to report that a purchase has been
awarded.

It should be used only for SKUs that have been registered as consumable
with a call to defineConsumableSKUs. The method should be called on the
UI thread.

## [◆ ](#a6e348104a31cd478217d2338cba149dc)getAppstoreName()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static string BFGSDK.bfgPurchaseAndroid.getAppstoreName</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Gets the name of the app store.

  - Returns  
    String "google" or "amazon".

## [◆ ](#a3ff6447094950304913ae0c826c00882)getCurrentUser()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static string BFGSDK.bfgPurchaseAndroid.getCurrentUser</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Gets the current user identifier. This is typically only used by Amazon
In-App Purchase.

  - Returns  
    String userId, the current user id or null.

## [◆ ](#a8cb0e78650d3913927c1de69fbc13b8a)getVolatileInventory()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static Dictionary&lt; string, object &gt; BFGSDK.bfgPurchaseAndroid.getVolatileInventory</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Returns the PublicInventory, which is an instance of AmazonInventory or
GoogleInventory. Use after receiving
NOTIFICATION\_BILLING\_INITIALIZE\_SUCCEEDED or
NOTIFICATION\_RESTORE\_COMPLETED.

  - Warning  
    Google only.

<!-- end list -->

  - Returns  
    An empty "" string if not a google inventory, otherwise a dictionary
    with the Google inventory.

## [◆ ](#a948ae3a587129acfb5652a5db3b45349)postCurrentInventory()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgPurchaseAndroid.postCurrentInventory</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Used to initiate asynchronous retrieval of a GoogleInventory object from
Google Play services. If the retrieval is successful, the inventory will
be placed in the argument of a
NOTIFICATION\_POST\_CURRENT\_INVENTORY\_SUCCEEDED notification.

  - Returns  
    `true` if retrieval could be initiated, false if a network
    connection was unavailable.

## [◆ ](#a7633212715fd13b0b6e9a257134da0ba)productInformation() \[1/2\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static Dictionary&lt; string, string &gt; BFGSDK.bfgPurchaseAndroid.productInformation</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Obtains product information for the default SKU.

  - Returns  
    Hashtable\<String, Object\> of SKUs mapped to their respective item
    information or null.

## [◆ ](#a31d7f3a23f93d0a577e903382f5cbea3)productInformation() \[2/2\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static Dictionary&lt; string, string &gt; BFGSDK.bfgPurchaseAndroid.productInformation</td>
<td>(</td>
<td>string </td>
<td><em>productid</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Obtains product information for a specific SKU.

  - Parameters
    
    |            |                                            |
    | ---------- | ------------------------------------------ |
    | productId. | The product id to get the information for. |
    

<!-- end list -->

  - Returns  
    Hashtable\<String, Object\> of SKUs mapped to their respective item
    information or null.

## [◆ ](#a3bfa3076513b34622a085a4340e4ae31)restorePurchase() \[1/3\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.restorePurchase</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Call if the user asks to restore previous purchase of default SKU.

This sends a NOTIFICATION\_RESTORE\_SUCCEEDED with default SKU if the
product identified by that SKU has been purchased. After receiving that
notification, credit the user with the item. The method will send
NOTIFICATION\_RESTORE\_COMPLETED if the call completes successfully,
regardless of whether the product has been purchased. If the method does
not complete successfully, it will send NOTIFICATION\_RESTORE\_FAILED.

## [◆ ](#aef01860219e42352cc0c25d744d4f536)restorePurchase() \[2/3\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.restorePurchase</td>
<td>(</td>
<td>List&lt; string &gt; </td>
<td><em>productids</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Call if the user asks to restore previous purchase with a list of SKUs.

This sends a NOTIFICATION\_RESTORE\_SUCCEEDED with default SKU if the
product identified by that SKU has been purchased. After receiving that
notification, credit the user with the item. The method will send
NOTIFICATION\_RESTORE\_COMPLETED if the call completes successfully,
regardless of whether the product has been purchased. If the method does
not complete successfully, it will send NOTIFICATION\_RESTORE\_FAILED.
This is the preferred API to call if the application needs to restore
purchases for multiple SKUs.

  - Parameters
    
    |            |                                 |
    | ---------- | ------------------------------- |
    | productids | List of product Ids to restore. |
    

## [◆ ](#ae03a1b88de865df8df413618e6e463c2)restorePurchase() \[3/3\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.restorePurchase</td>
<td>(</td>
<td>string </td>
<td><em>productid</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Call if the user asks to restore previous purchase with a specific SKU.

This sends a NOTIFICATION\_RESTORE\_SUCCEEDED with default SKU if the
product identified by that SKU has been purchased. After receiving that
notification, credit the user with the item. The method will send
NOTIFICATION\_RESTORE\_COMPLETED if the call completes successfully,
regardless of whether the product has been purchased. If the method does
not complete successfully, it will send NOTIFICATION\_RESTORE\_FAILED.
This is the preferred API to call if the application needs to restore
purchases for only one SKU. In that case, you will usually specify a
product SKU that was defined by your producer.

  - Parameters
    
    |           |                               |
    | --------- | ----------------------------- |
    | productId | Id of product to be restored. |
    

## [◆ ](#ab80218431a91bda1e48df98cd3829e8f)setCurrentUser()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.setCurrentUser</td>
<td>(</td>
<td>string </td>
<td><em>userId</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Mutator for current user identifier. This is typically only used by
Amazon In-App Purchase.

  - Parameters
    
    |        |                                          |
    | ------ | ---------------------------------------- |
    | userId | String representing the current user id. |
    

## [◆ ](#a81489a72200869eb4803bebc36ea08dd)setupService()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgPurchaseAndroid.setupService</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Does preliminary setup in preparation of starting the purchasing service
The following are requirements and extra details for using this method:

1.  This method must be called before any purchasing start calls are
    made.
2.  This method should be called after setting up all of the billing
    notifications
3.  This method should be called from the UI thread
4.  This method establishes the relationship between the Activity and
    the SDK
5.  Calling this method will result in sending billing initialization
    notifications

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
