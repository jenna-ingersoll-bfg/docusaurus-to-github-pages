  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgPurchase](class_b_f_g_s_d_k_1_1bfg_purchase.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_purchase-members.html)

BFGSDK.bfgPurchase Class Reference

##  Static Public Member Functions

static bool 

[acquireProductInformation](class_b_f_g_s_d_k_1_1bfg_purchase.html#ab114803e56e3abe900d69f6a3bb5de57)
()

 

acquireProductInformation is used when productInformation does not
return any data.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#ab114803e56e3abe900d69f6a3bb5de57)  

 

static bool 

[acquireProductInformation](class_b_f_g_s_d_k_1_1bfg_purchase.html#a4f55b608d810599a4c8e5654c551fc7e)
(string productId)

 

acquireProductInformation is used when productInformation does not
return any data.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a4f55b608d810599a4c8e5654c551fc7e)  

 

static bool 

[acquireProductInformationForProducts](class_b_f_g_s_d_k_1_1bfg_purchase.html#a9fbd4cd1364eab5353ae9778294bfea7)
(List\< string \> productIds)

 

acquireProductInformation is used when productInformation does not
return any data.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a9fbd4cd1364eab5353ae9778294bfea7)  

 

static bool 

[hasDeferredPayments](class_b_f_g_s_d_k_1_1bfg_purchase.html#ad02e90624cf3d8af5a3763f19c6247c9)
()

 

Checks if there are promoted in-app purchases to queue.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#ad02e90624cf3d8af5a3763f19c6247c9)  

 

static void 

**processDeferredPayments** ()

 

Process promoted in-app purchases queued.  

 

static bool 

[canStartPurchase](class_b_f_g_s_d_k_1_1bfg_purchase.html#ae1dfd480e81287dcea4d932d5e25578b)
(string productId)

 

Test to see if purchase of the specified product can be started. Note
that the method is not guaranteed to return false for a product that has
already been purchased and should not be used as a substitute for
maintaining a proper record of prior purchases. The purpose of the
method is to determine whether the unavailability of network
connectivity or the state of the SDK precludes purchase of an otherwise
eligible product. The method will return false if:

  - the product id is invalid (null or empty string),
  - the network is unavailable,
  - the SDK services are unavailable,
  - a purchase of the product has been initiated and has not completed,
  - restoration of prior purchases is underway,
  - no product information has been retrieved for the SKU, or
  - user is not signed in (Amazon only).

[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#ae1dfd480e81287dcea4d932d5e25578b)  

 

static void 

**finishPurchase** ()

 

The application uses this method to report that a purchase has been
awarded. It should be used only for SKUs that have been registered as
consumable with a call to defineConsumableSKUs. The method should be
called on the UI thread. Use on Google Purchases ONLY. This method will
not do anything on Amazon purchases.  

 

static void 

[finishPurchase](class_b_f_g_s_d_k_1_1bfg_purchase.html#a35d532582244a566cf243a8f94435b79)
(string productId)

 

The application uses this method to report that a purchase has been
awarded. It should be used only for SKUs that have been registered as
consumable with a call to defineConsumableSKUs. The method should be
called on the UI thread. Use on Google Purchases ONLY. This function
will not do anything on Amazon purchases.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a35d532582244a566cf243a8f94435b79)  

 

static bool 

[isPurchaseActive](class_b_f_g_s_d_k_1_1bfg_purchase.html#ad8a4e0d1e88baeded4e9aa30ad1931d6)
()

 

Indicates whether the purchase process is occurring or not for the
default purchase.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#ad8a4e0d1e88baeded4e9aa30ad1931d6)  

 

static bool 

[isPurchaseActive](class_b_f_g_s_d_k_1_1bfg_purchase.html#a9e7dbe9a7ce14c44fd78dcd50a0ea233)
(string productId)

 

Indicates whether the purchase process is occurring or not for the
purchase of a product with the given ID.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a9e7dbe9a7ce14c44fd78dcd50a0ea233)  

 

static bool 

[isRestoreActive](class_b_f_g_s_d_k_1_1bfg_purchase.html#a769489de61ac06a435addd5fc8d9b5c1)
()

 

Indicates whether a purchase process is curently being restored or not.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a769489de61ac06a435addd5fc8d9b5c1)  

 

static bool 

[productInformation](class_b_f_g_s_d_k_1_1bfg_purchase.html#a50d43c1b2bb94aaaed4b205f2c3f0462)
(ref string prodInfoJson)

 

Retrieves information about the default product.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a50d43c1b2bb94aaaed4b205f2c3f0462)  

 

static bool 

[productInformation](class_b_f_g_s_d_k_1_1bfg_purchase.html#adf2ee8e1074b0c690418a73666b3d179)
(string productId, ref string prodInfoJson)

 

Retrieves information about the product with the given id.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#adf2ee8e1074b0c690418a73666b3d179)  

 

static bool 

[purchaseActivityInProgress](class_b_f_g_s_d_k_1_1bfg_purchase.html#a8cc33002d8a69075ce12179ec9220428)
()

 

Currently only works on iOS. Checks if a purchase / restore is in
progress. Should not be displayed.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a8cc33002d8a69075ce12179ec9220428)  

 

static void 

**restorePurchases** ()

 

Restores previous purchases. Receives the same
NOTIFICATION\_PURCHASE\_SUCCEEDED notification as the original
purchase.  

 

static void 

**startPurchase** ()

 

Convenience method for calling
startPurchase:details1:details2:details3:additionalDetails with null
details and null additional details.  

 

static void 

[startPurchase](class_b_f_g_s_d_k_1_1bfg_purchase.html#a4159bfbc232d07eb7acff48a63a34adb)
(string productId)

 

Convenience method for calling
startPurchase:details1:details2:details3:additionalDetails with the
given productId, null details, and null additional details.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a4159bfbc232d07eb7acff48a63a34adb)  

 

static void 

[startPurchase](class_b_f_g_s_d_k_1_1bfg_purchase.html#a11a5d9a66b93f427afff7e841f165804)
(string productId, string details1, string details2, string details3,
Dictionary\< string, string \> additionalDetails)

 

Convenience method for calling
startPurchase:details1:details2:details3:additionalDetails with the
given productId, null details, and null additional details.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a11a5d9a66b93f427afff7e841f165804)  

 

static bool 

[startService](class_b_f_g_s_d_k_1_1bfg_purchase.html#a542dc3c3294b02f6875e916b0b69963b)
()

 

\[iOS-only. Use
[bfgPurchaseAndroid.setupService()](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a81489a72200869eb4803bebc36ea08dd "Does preliminary setup in preparation of starting the purchasing service The following are requiremen...")
for Android\] Calling startService on bfgPurchases enables its
functionality and causes it to resume processing any operations that
were already in progress. All notification listeners should be set up
prior to calling start.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a542dc3c3294b02f6875e916b0b69963b)  

 

static bool 

[startService](class_b_f_g_s_d_k_1_1bfg_purchase.html#a7a0fe29dfc4de71fd7f07a7bdc8b0ee3)
(ref string error)

 

\[iOS-only. Use
[bfgPurchaseAndroid.setupService()](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a81489a72200869eb4803bebc36ea08dd "Does preliminary setup in preparation of starting the purchasing service The following are requiremen...")
for Android\] Calling startService on bfgPurchases enables its
functionality and causes it to resume processing any operations that
were already in progress. All notification listeners should be set up
prior to calling start.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a7a0fe29dfc4de71fd7f07a7bdc8b0ee3)  

 

static bool 

[deliverablePurchases](class_b_f_g_s_d_k_1_1bfg_purchase.html#a6c28ec62d1a4d79efe5d98bf473577f7)
(ref string deliverablePurchasesJson)

 

When a purchase completes, you will receive a notification of its
success or failure. At this time, award the purchase to the user. This
method gives you a secondary way of accessing purchases that should be
awarded after the notification has fired.
[More...](class_b_f_g_s_d_k_1_1bfg_purchase.html#a6c28ec62d1a4d79efe5d98bf473577f7)  

 

static void 

**forceConsumeAllPurchases** ()

 

WARNING: This is an internal SDK debug method. DO NOT CALL THIS METHOD
IN PRODUCTION CODE\!  

 

## Member Function Documentation

## [◆ ](#ab114803e56e3abe900d69f6a3bb5de57)acquireProductInformation() \[1/2\]

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
<td>static bool BFGSDK.bfgPurchase.acquireProductInformation</td>
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

acquireProductInformation is used when productInformation does not
return any data.

  - Returns  
    Boolean true is request for product information sent, false is the
    user is offline.

## [◆ ](#a4f55b608d810599a4c8e5654c551fc7e)acquireProductInformation() \[2/2\]

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
<td>static bool BFGSDK.bfgPurchase.acquireProductInformation</td>
<td>(</td>
<td>string </td>
<td><em>productId</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

acquireProductInformation is used when productInformation does not
return any data.

  - Parameters
    
    |           |                                                                    |
    | --------- | ------------------------------------------------------------------ |
    | productId | String productId identifier of product that was purchased in game. |
    

<!-- end list -->

  - Returns  
    Boolean true is request for product information sent, false is the
    user is offline.

## [◆ ](#a9fbd4cd1364eab5353ae9778294bfea7)acquireProductInformationForProducts()

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
<td>static bool BFGSDK.bfgPurchase.acquireProductInformationForProducts</td>
<td>(</td>
<td>List&lt; string &gt; </td>
<td><em>productIds</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

acquireProductInformation is used when productInformation does not
return any data.

  - Parameters
    
    |            |                                                                               |
    | ---------- | ----------------------------------------------------------------------------- |
    | productIds | List\<String\> productIds identifiers of products that was purchased in game. |
    

<!-- end list -->

  - Returns  
    Boolean true is request for product information sent, false is the
    user is offline.

## [◆ ](#ae1dfd480e81287dcea4d932d5e25578b)canStartPurchase()

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
<td>static bool BFGSDK.bfgPurchase.canStartPurchase</td>
<td>(</td>
<td>string </td>
<td><em>productId</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Test to see if purchase of the specified product can be started. Note
that the method is not guaranteed to return false for a product that has
already been purchased and should not be used as a substitute for
maintaining a proper record of prior purchases. The purpose of the
method is to determine whether the unavailability of network
connectivity or the state of the SDK precludes purchase of an otherwise
eligible product. The method will return false if:

  - the product id is invalid (null or empty string),
  - the network is unavailable,
  - the SDK services are unavailable,
  - a purchase of the product has been initiated and has not completed,
  - restoration of prior purchases is underway,
  - no product information has been retrieved for the SKU, or
  - user is not signed in (Amazon only).

<!-- end list -->

  - Parameters
    
    |           |  |
    | --------- |  |
    | productId |  |
    

<!-- end list -->

  - Returns

## [◆ ](#a6c28ec62d1a4d79efe5d98bf473577f7)deliverablePurchases()

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
<td>static bool BFGSDK.bfgPurchase.deliverablePurchases</td>
<td>(</td>
<td>ref string </td>
<td><em>deliverablePurchasesJson</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

When a purchase completes, you will receive a notification of its
success or failure. At this time, award the purchase to the user. This
method gives you a secondary way of accessing purchases that should be
awarded after the notification has fired.

  - Parameters
    
    |                          |                                                                                                     |
    | ------------------------ | --------------------------------------------------------------------------------------------------- |
    | deliverablePurchasesJson | Purchase objects that were successfully purchased but have not had "finishPurchase" called on them. |
    

<!-- end list -->

  - Returns  
    If true, the purchase objects were succesfully retrieved. If false,
    there was a problem with retrieving purchase objects.

## [◆ ](#a35d532582244a566cf243a8f94435b79)finishPurchase()

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
<td>static void BFGSDK.bfgPurchase.finishPurchase</td>
<td>(</td>
<td>string </td>
<td><em>productId</em></td>
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
awarded. It should be used only for SKUs that have been registered as
consumable with a call to defineConsumableSKUs. The method should be
called on the UI thread. Use on Google Purchases ONLY. This function
will not do anything on Amazon purchases.

  - Parameters
    
    |           |                                              |
    | --------- | -------------------------------------------- |
    | productId | The ID of the product to take off the queue. |
    

## [◆ ](#ad02e90624cf3d8af5a3763f19c6247c9)hasDeferredPayments()

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
<td>static bool BFGSDK.bfgPurchase.hasDeferredPayments</td>
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

Checks if there are promoted in-app purchases to queue.

  - Returns  
    true if promoted in-app purchases are available to queue.

## [◆ ](#ad8a4e0d1e88baeded4e9aa30ad1931d6)isPurchaseActive() \[1/2\]

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
<td>static bool BFGSDK.bfgPurchase.isPurchaseActive</td>
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

Indicates whether the purchase process is occurring or not for the
default purchase.

  - Returns  
    If true, the default product is currently being processed for
    purchase. If false, purchase already in-flight, restore in-flight,
    or other restriction

## [◆ ](#a9e7dbe9a7ce14c44fd78dcd50a0ea233)isPurchaseActive() \[2/2\]

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
<td>static bool BFGSDK.bfgPurchase.isPurchaseActive</td>
<td>(</td>
<td>string </td>
<td><em>productId</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Indicates whether the purchase process is occurring or not for the
purchase of a product with the given ID.

  - Parameters
    
    |           |                                               |
    | --------- | --------------------------------------------- |
    | productId | ID of product to query if purchase is active. |
    

<!-- end list -->

  - Returns  
    YES Purchase is being processed. NO Purchase already in-flight,
    restore in-flight, or other restriction preventing purchase.

## [◆ ](#a769489de61ac06a435addd5fc8d9b5c1)isRestoreActive()

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
<td>static bool BFGSDK.bfgPurchase.isRestoreActive</td>
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

Indicates whether a purchase process is curently being restored or not.

  - Returns  
    If true, restore is being processed or verified. If false, restore
    in-flight or other restriction preventing restore.

## [◆ ](#a50d43c1b2bb94aaaed4b205f2c3f0462)productInformation() \[1/2\]

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
<td>static bool BFGSDK.bfgPurchase.productInformation</td>
<td>(</td>
<td>ref string </td>
<td><em>prodInfoJson</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Retrieves information about the default product.

  - Parameters
    
    |              |                                            |
    | ------------ | ------------------------------------------ |
    | prodInfoJson | The product id to get the information for. |
    

<!-- end list -->

  - Returns  
    If true, the ref param received a valid string. If false, the ref
    param is empty or null.

## [◆ ](#adf2ee8e1074b0c690418a73666b3d179)productInformation() \[2/2\]

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
<td>static bool BFGSDK.bfgPurchase.productInformation</td>
<td>(</td>
<td>string </td>
<td><em>productId</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>ref string </td>
<td><em>prodInfoJson</em> </td>
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

Retrieves information about the product with the given id.

  - Parameters
    
    |              |                                             |
    | ------------ | ------------------------------------------- |
    | productId    | The id of the product to get information on |
    | prodInfoJson | The product id to get the information for.  |
    

<!-- end list -->

  - Returns  
    If true, the ref param received a valid string. If false, the ref
    param is empty or null.

## [◆ ](#a8cc33002d8a69075ce12179ec9220428)purchaseActivityInProgress()

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
<td>static bool BFGSDK.bfgPurchase.purchaseActivityInProgress</td>
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

Currently only works on iOS. Checks if a purchase / restore is in
progress. Should not be displayed.

  - Returns  
    YES Purchase or restore in progress. NO Purchase already in-flight,
    restore in-flight, or other restriction preventing purchase.

## [◆ ](#a4159bfbc232d07eb7acff48a63a34adb)startPurchase() \[1/2\]

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
<td>static void BFGSDK.bfgPurchase.startPurchase</td>
<td>(</td>
<td>string </td>
<td><em>productId</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Convenience method for calling
startPurchase:details1:details2:details3:additionalDetails with the
given productId, null details, and null additional details.

  - Parameters
    
    |           |                                       |
    | --------- | ------------------------------------- |
    | productId | The id of the product being purchased |
    

## [◆ ](#a11a5d9a66b93f427afff7e841f165804)startPurchase() \[2/2\]

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
<td>static void BFGSDK.bfgPurchase.startPurchase</td>
<td>(</td>
<td>string </td>
<td><em>productId</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details1</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string </td>
<td><em>details2</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details3</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>Dictionary&lt; string, string &gt; </td>
<td><em>additionalDetails</em> </td>
</tr>
<tr class="even">
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

Convenience method for calling
startPurchase:details1:details2:details3:additionalDetails with the
given productId, null details, and null additional details.

  - Parameters
    
    |                   |                                                                                                                                                                            |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | productId         | The id of the product being purchased                                                                                                                                      |
    | details1          | An alpha-numeric label to categorize the event. May be null.                                                                                                               |
    | details2          | An alpha-numeric label to categorize the event. May be null.                                                                                                               |
    | details3          | An alpha-numeric label to categorize the event. May be null.                                                                                                               |
    | additionalDetails | Additional data to be associated with this productId. This value may be null. If not null, the value must be a flat dictionary containing only strings as keys and values. |
    

## [◆ ](#a542dc3c3294b02f6875e916b0b69963b)startService() \[1/2\]

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
<td>static bool BFGSDK.bfgPurchase.startService</td>
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

\[iOS-only. Use
[bfgPurchaseAndroid.setupService()](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a81489a72200869eb4803bebc36ea08dd "Does preliminary setup in preparation of starting the purchasing service The following are requiremen...")
for Android\] Calling startService on bfgPurchases enables its
functionality and causes it to resume processing any operations that
were already in progress. All notification listeners should be set up
prior to calling start.

  - Returns  
    YES Purchase has started. NO Purchase has previously started.

## [◆ ](#a7a0fe29dfc4de71fd7f07a7bdc8b0ee3)startService() \[2/2\]

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
<td>static bool BFGSDK.bfgPurchase.startService</td>
<td>(</td>
<td>ref string </td>
<td><em>error</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

\[iOS-only. Use
[bfgPurchaseAndroid.setupService()](class_b_f_g_s_d_k_1_1bfg_purchase_android.html#a81489a72200869eb4803bebc36ea08dd "Does preliminary setup in preparation of starting the purchasing service The following are requiremen...")
for Android\] Calling startService on bfgPurchases enables its
functionality and causes it to resume processing any operations that
were already in progress. All notification listeners should be set up
prior to calling start.

  - Parameters
    
    |       |                                                                                    |
    | ----- | ---------------------------------------------------------------------------------- |
    | error | If service fails to start, error will contain the reason. Otherwise error is null. |
    

<!-- end list -->

  - Returns  
    YES Purchase has started. NO Purchase has previously started.
