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
  - [IOSBfgManager](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager-members.html)

BFGSDK.IOSBfgManager Class Reference

This is the [bfgManager](class_b_f_g_s_d_k_1_1bfg_manager.html) wrapper
class for iOS.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#details)

Inherits BFGSDK.IBfgManager.

##  Public Member Functions

void 

[setParentViewController](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a28aa54fda6ae43f85ed107a79a72cc16)
()

 

Currently only works for iOS
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a28aa54fda6ae43f85ed107a79a72cc16)  

 

long 

**userID** ()

 

Get current user ID.  

 

void 

[setUserID](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a51cac8ae1294fe7917d5d1d976134732)
(long
[userID](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#afa1f476ebfaf3a256ff44e47a7c60c1e))

 

Set the current user ID
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a51cac8ae1294fe7917d5d1d976134732)  

 

void 

[setAttributionUserID](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#aef085799e551da7d4562c70e2d5580e8)
(string
[userID](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#afa1f476ebfaf3a256ff44e47a7c60c1e))

 

Set the attribution user ID
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#aef085799e551da7d4562c70e2d5580e8)  

 

long 

**sessionCount** ()

 

Currently only works for iOS. Determines the number of sessions in the
application.  

 

bool 

**isInitialLaunch** ()

 

Currently only works for iOS. Determines if this is the initial launch
or "install" of the application.  

 

bool 

**isFirstTime** ()

 

Currently only works for iOS. Determines if the application has been
started from a cold-start.  

 

bool 

**isInitialized** ()

 

Determines if SDK is initialized yet.  

 

void 

**showSupport** ()

 

Launches the Help Center Activity. Requires that parentViewController is
set.  

 

void 

**showPrivacy** ()

 

Show the Privacy page using the in-game browser.  

 

void 

**showTerms** ()

 

Show the Terms of Use page with the in-game browser.  

 

void 

[showWebBrowser](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ad1fecb6ed113adbc270a595f11976b27)
(string startPage)

 

Show an in-game browser displaying startPage.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ad1fecb6ed113adbc270a595f11976b27)  

 

void 

**removeWebBrowser** ()

 

Removes the in-game browser shown via showWebBrowser:  

 

bool 

**checkForInternetConnection** ()

 

Returns a boolean indicating whether the device can access the Internet.
For convenience, this also displays a built-in alert dialog notifying
the user that an Internet connection was not found.  

 

bool 

[checkForInternetConnectionAndAlert](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a7fe34c0272f6352bf6f6a558ed8831f4)
(bool displayAlert)

 

Returns a boolean indicating whether the device can access the Internet.
Also can display an alert if the device is not connected.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a7fe34c0272f6352bf6f6a558ed8831f4)  

 

void 

**showNoConnectivityAlert** (bool showStore)

 

void 

**addPauseResumeDelegate** ()

 

Currently only works on iOS. Call this method to add a delegate to
listen for pause/resume events from the SDK.  

 

void 

**removePauseResumeDelegate** ()

 

Currently only works on iOS. Call this method to remove a pause/resume
event delegate.  

 

bool 

**isPaused** ()

 

Test to see if game should be paused. Returns true if the game should be
paused.  

 

bool 

[getDebugDictionary](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#aac5633e602d9baacc6babec75f9ea7a7)
(ref string jsonDebugDictionary)

 

Currently only works on iOS. Currently only works on iOS. Gets the debug
dictionary currently being used for purchase testing.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#aac5633e602d9baacc6babec75f9ea7a7)  

 

void 

[setDebugDictionary](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ad7db01233cbaa859f25358d1157c7326)
(string jsonDebugDictionary)

 

Currently only works on iOS. Sets the debug dictionary for purchase
testing based on the given json.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ad7db01233cbaa859f25358d1157c7326)  

 

void 

[addPolicyListener](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ae481982a78dd8fa4cb3bfed8286a1ae8)
(NotificationHandler willShowPolicies, NotificationHandler
onPoliciesCompleted)

 

Adds the policy listener. This method internally creates a notification
observer for
[bfgCommon.BFG\_POLICY\_LISTENER\_WILLSHOWPOLICIES](class_b_f_g_s_d_k_1_1bfg_common.html#a335dafab688b0aae5bdf21af2936ac95 "Indicates that a discovered policy will be shown to the player.")
and
[bfgCommon.BFG\_POLICY\_LISTENER\_ONPOLICIESCOMPLETED](class_b_f_g_s_d_k_1_1bfg_common.html#ab5b89d1752761c7856d830418f2bbb14 "Indicates that a user accepted/rejected every displayed policy so restrictions for the game may have ...").
To remove the policy listeners, please call removePolicyListener with
the notification observers you have created.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ae481982a78dd8fa4cb3bfed8286a1ae8)  

 

void 

[removePolicyListener](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a189635b23b2b68eead2b891798b4fb17)
(NotificationHandler willShowPolicies, NotificationHandler
onPoliciesCompleted)

 

Removes the policy listener.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a189635b23b2b68eead2b891798b4fb17)  

 

bool 

[didAcceptPolicyControl](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a2cb440d00d4f67f56159513b6975aa72)
(string policyControl)

 

Determines if a given policy control was accepted.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a2cb440d00d4f67f56159513b6975aa72)  

 

void 

[setLimitEventAndDataUsage](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a830151f085405c5ea44e72d5a5366102)
(bool limitData)

 

Limits Facebook's use of data to analytics and conversions.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a830151f085405c5ea44e72d5a5366102)  

 

void 

[requestTrackingAuthorization](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ab425a990a680047736436321b14868b1)
()

 

Triggers the display of the Apple App Transparency Tracking prompt to
request user's permission to retrieve IDFA.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ab425a990a680047736436321b14868b1)  

 

bool 

[attSelectionRequired](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ac2b95ecd29abec7f8be0eed78a0942ef)
()

 

Returns TRUE when user must make an AppTrackingTransparency selection.
To be used in conjunction with
[requestTrackingAuthorization()](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ab425a990a680047736436321b14868b1 "Triggers the display of the Apple App Transparency Tracking prompt to request user's permission to re...")
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ac2b95ecd29abec7f8be0eed78a0942ef)  

 

int 

[attStatus](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a3d8bdd44a32a3892aec5989cf9aa9e57)
()

 

Return an int representing the user's App Tracking Transparency status
as defined by Apple's enum: ATTrackingManager.AuthorizationStatus
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#a3d8bdd44a32a3892aec5989cf9aa9e57)  

 

## Detailed Description

This is the [bfgManager](class_b_f_g_s_d_k_1_1bfg_manager.html) wrapper
class for iOS.

## Member Function Documentation

## [◆ ](#ae481982a78dd8fa4cb3bfed8286a1ae8)addPolicyListener()

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
<td>void BFGSDK.IOSBfgManager.addPolicyListener</td>
<td>(</td>
<td>NotificationHandler </td>
<td><em>willShowPolicies</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>NotificationHandler </td>
<td><em>onPoliciesCompleted</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Adds the policy listener. This method internally creates a notification
observer for
[bfgCommon.BFG\_POLICY\_LISTENER\_WILLSHOWPOLICIES](class_b_f_g_s_d_k_1_1bfg_common.html#a335dafab688b0aae5bdf21af2936ac95 "Indicates that a discovered policy will be shown to the player.")
and
[bfgCommon.BFG\_POLICY\_LISTENER\_ONPOLICIESCOMPLETED](class_b_f_g_s_d_k_1_1bfg_common.html#ab5b89d1752761c7856d830418f2bbb14 "Indicates that a user accepted/rejected every displayed policy so restrictions for the game may have ...").
To remove the policy listeners, please call removePolicyListener with
the notification observers you have created.

  - Parameters
    
    |                     |                                       |
    | ------------------- | ------------------------------------- |
    | willShowPolicies    | The listener for willShowPolicies.    |
    | onPoliciesCompleted | The listener for onPoliciesCompleted. |
    

## [◆ ](#ac2b95ecd29abec7f8be0eed78a0942ef)attSelectionRequired()

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
<td>bool BFGSDK.IOSBfgManager.attSelectionRequired</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Returns TRUE when user must make an AppTrackingTransparency selection.
To be used in conjunction with
[requestTrackingAuthorization()](class_b_f_g_s_d_k_1_1_i_o_s_bfg_manager.html#ab425a990a680047736436321b14868b1 "Triggers the display of the Apple App Transparency Tracking prompt to request user's permission to re...")

  - Warning  
    Only for iOS 14 and above. On Android and lower iOS versions, this
    method will always return FALSE.

## [◆ ](#a3d8bdd44a32a3892aec5989cf9aa9e57)attStatus()

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
<td>int BFGSDK.IOSBfgManager.attStatus</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Return an int representing the user's App Tracking Transparency status
as defined by Apple's enum: ATTrackingManager.AuthorizationStatus

  - \-3: An error occurred and a value could not be determined
  - \-2: User is running on a non-iOS device; no action required
  - \-1: User is running on a iOS device but pre-iOS 14; no action
    required
  - 0: notDetermined
  - 1: restricted
  - 2: denied
  - 3: authorized

<!-- end list -->

  - Returns  
    int representing user's App Tracking Transparency status

## [◆ ](#a7fe34c0272f6352bf6f6a558ed8831f4)checkForInternetConnectionAndAlert()

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
<td>bool BFGSDK.IOSBfgManager.checkForInternetConnectionAndAlert</td>
<td>(</td>
<td>bool </td>
<td><em>displayAlert</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Returns a boolean indicating whether the device can access the Internet.
Also can display an alert if the device is not connected.

  - Parameters
    
    |              |                                                                 |
    | ------------ | --------------------------------------------------------------- |
    | displayAlert | Whether an alert should be displayed if there is no connection. |
    

## [◆ ](#a2cb440d00d4f67f56159513b6975aa72)didAcceptPolicyControl()

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
<td>bool BFGSDK.IOSBfgManager.didAcceptPolicyControl</td>
<td>(</td>
<td>string </td>
<td><em>policyControl</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Determines if a given policy control was accepted.

  - Parameters
    
    |               |                                  |
    | ------------- | -------------------------------- |
    | policyControl | The policy control name to check |
    

<!-- end list -->

  - Returns  
    TRUE if the control specified by policyControl was accepted,
    otherwise FALSE.

## [◆ ](#aac5633e602d9baacc6babec75f9ea7a7)getDebugDictionary()

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
<td>bool BFGSDK.IOSBfgManager.getDebugDictionary</td>
<td>(</td>
<td>ref string </td>
<td><em>jsonDebugDictionary</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Currently only works on iOS. Currently only works on iOS. Gets the debug
dictionary currently being used for purchase testing.

  - Parameters
    
    |                     |                                          |
    | ------------------- | ---------------------------------------- |
    | jsonDebugDictionary | The current debug dictionary as a string |
    

<!-- end list -->

  - Returns  
    If true, the debug dictionary was successfully retrieved. If false,
    there was a problem while retrieving the debug dictionary.

## [◆ ](#a189635b23b2b68eead2b891798b4fb17)removePolicyListener()

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
<td>void BFGSDK.IOSBfgManager.removePolicyListener</td>
<td>(</td>
<td>NotificationHandler </td>
<td><em>willShowPolicies</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>NotificationHandler </td>
<td><em>onPoliciesCompleted</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Removes the policy listener.

  - Parameters
    
    |                     |                                       |
    | ------------------- | ------------------------------------- |
    | willShowPolicies    | The listener for willShowPolicies.    |
    | onPoliciesCompleted | The listener for onPoliciesCompleted. |
    

## [◆ ](#ab425a990a680047736436321b14868b1)requestTrackingAuthorization()

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
<td>void BFGSDK.IOSBfgManager.requestTrackingAuthorization</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Triggers the display of the Apple App Transparency Tracking prompt to
request user's permission to retrieve IDFA.

  - Warning  
    Only for iOS 14 and above. On Android and lower iOS versions, this
    method will have no effect.

## [◆ ](#aef085799e551da7d4562c70e2d5580e8)setAttributionUserID()

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
<td>void BFGSDK.IOSBfgManager.setAttributionUserID</td>
<td>(</td>
<td>string </td>
<td><em>userID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Set the attribution user ID

  - Parameters
    
    |        |                 |
    | ------ | --------------- |
    | userID | User ID to set. |
    

## [◆ ](#ad7db01233cbaa859f25358d1157c7326)setDebugDictionary()

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
<td>void BFGSDK.IOSBfgManager.setDebugDictionary</td>
<td>(</td>
<td>string </td>
<td><em>jsonDebugDictionary</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Currently only works on iOS. Sets the debug dictionary for purchase
testing based on the given json.

  - Parameters
    
    |                     |                                 |
    | ------------------- | ------------------------------- |
    | jsonDebugDictionary | The new debug dictionary to use |
    

## [◆ ](#a830151f085405c5ea44e72d5a5366102)setLimitEventAndDataUsage()

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
<td>void BFGSDK.IOSBfgManager.setLimitEventAndDataUsage</td>
<td>(</td>
<td>bool </td>
<td><em>limitData</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Limits Facebook's use of data to analytics and conversions.

  - Parameters
    
    |           |                           |
    | --------- | ------------------------- |
    | limitData | Limits data usage if true |
    

## [◆ ](#a28aa54fda6ae43f85ed107a79a72cc16)setParentViewController()

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
<td>void BFGSDK.IOSBfgManager.setParentViewController</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Currently only works for iOS

This sets the view controller to use when showing the GDN or
interstitials for both launch (startup) and resume events in the UI. The
parent view controller is initially set using the
initializeWithActivity, but can be changed by calling this method if a
different view should become the parent view for receiving GDN and
interstitials. If you change your root Activity, you must call this
method.

## [◆ ](#a51cac8ae1294fe7917d5d1d976134732)setUserID()

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
<td>void BFGSDK.IOSBfgManager.setUserID</td>
<td>(</td>
<td>long </td>
<td><em>userID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Set the current user ID

  - Parameters
    
    |        |                 |
    | ------ | --------------- |
    | userID | User ID to set. |
    

## [◆ ](#ad1fecb6ed113adbc270a595f11976b27)showWebBrowser()

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
<td>void BFGSDK.IOSBfgManager.showWebBrowser</td>
<td>(</td>
<td>string </td>
<td><em>startPage</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Show an in-game browser displaying startPage.

  - Parameters
    
    |           |                                                             |
    | --------- | ----------------------------------------------------------- |
    | startPage | startPage URL whose content is to be displayed to the user. |
    

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
