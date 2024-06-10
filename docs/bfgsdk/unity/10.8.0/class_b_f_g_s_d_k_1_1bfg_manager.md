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
  - [bfgManager](class_b_f_g_s_d_k_1_1bfg_manager.html)

[Classes](#nested-classes) | [Static Public Member
Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_manager-members.html)

BFGSDK.bfgManager Class Reference

##  Static Public Member Functions

static void 

[setParentViewController](class_b_f_g_s_d_k_1_1bfg_manager.html#a545ff1aad1cee26b3855c9517dba8638)
()

 

Currently only works for iOS
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a545ff1aad1cee26b3855c9517dba8638)  

 

static long 

**userID** ()

 

Get current user ID.  

 

static void 

[setUserID](class_b_f_g_s_d_k_1_1bfg_manager.html#a3e6b1c7d84d5e0cc742b5f6251908dd1)
(long
[userID](class_b_f_g_s_d_k_1_1bfg_manager.html#ac265d3ef9ffff115d436aa6072f74b7c))

 

Set the current user ID
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a3e6b1c7d84d5e0cc742b5f6251908dd1)  

 

static void 

[setAttributionUserID](class_b_f_g_s_d_k_1_1bfg_manager.html#a5763138d374fe71cc40d4a542f983fb3)
(string
[userID](class_b_f_g_s_d_k_1_1bfg_manager.html#ac265d3ef9ffff115d436aa6072f74b7c))

 

Set the current attribution user ID
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a5763138d374fe71cc40d4a542f983fb3)  

 

static long 

**sessionCount** ()

 

Determines the number of sessions in the application.  

 

static bool 

**isInitialLaunch** ()

 

Determines if this is the initial launch or "install" of the
application.  

 

static bool 

**isFirstTime** ()

 

Currently only works for iOS. Determines if the application has been
started from a cold-start.  

 

static bool 

**isInitialized** ()

 

Determines if SDK is initialized yet.  

 

static void 

**showSupport** ()

 

Launches the Help Center Activity. Requires that parentViewController is
set.  

 

static void 

**showPrivacy** ()

 

Show the Privacy page using the in-game browser.  

 

static void 

**showTerms** ()

 

Show the Terms of Use page with the in-game browser.  

 

static void 

[showWebBrowser](class_b_f_g_s_d_k_1_1bfg_manager.html#abdaf9376fec1ea61c9087deb31caa107)
(string startPage)

 

Show an in-game browser displaying startPage.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#abdaf9376fec1ea61c9087deb31caa107)  

 

static void 

**removeWebBrowser** ()

 

Removes the in-game browser shown via showWebBrowser:  

 

static bool 

**checkForInternetConnection** ()

 

Returns a boolean indicating whether the device can access the Internet.
For convenience, this also displays a built-in alert dialog notifying
the user that an Internet connection was not found.  

 

static bool 

[checkForInternetConnectionAndAlert](class_b_f_g_s_d_k_1_1bfg_manager.html#a154a2d730386edbccc24edce0aca663c)
(bool displayAlert)

 

Returns a boolean indicating whether the device can access the Internet.
Also can display an alert if the device is not connected.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a154a2d730386edbccc24edce0aca663c)  

 

static void 

**showNoConnectivityAlert** (bool showStore=false)

 

static void 

**addPauseResumeDelegate** ()

 

Currently only works on iOS. Call this method to add a delegate to
listen for pause/resume events from the SDK.  

 

static void 

**removePauseResumeDelegate** ()

 

Currently only works on iOS. Call this method to remove a pause/resume
event delegate.  

 

static bool 

**isPaused** ()

 

Test to see if game should be paused. Returns true if the game should be
paused.  

 

static bool 

[getDebugDictionary](class_b_f_g_s_d_k_1_1bfg_manager.html#a9376c0be79984e36363ce2313f6ebb26)
(ref string jsonDebugDictionary)

 

Currently only works on iOS. Gets the debug dictionary currently being
used for purchase testing.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a9376c0be79984e36363ce2313f6ebb26)  

 

static void 

[setDebugDictionary](class_b_f_g_s_d_k_1_1bfg_manager.html#aae89b95ebf41582f62f7cbd5a981bf0a)
(string jsonDebugDictionary)

 

Currently only works on iOS. Sets the debug dictionary for purchase
testing based on the given json.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#aae89b95ebf41582f62f7cbd5a981bf0a)  

 

static void 

[addPolicyListener](class_b_f_g_s_d_k_1_1bfg_manager.html#ac34f16215683f9bfa903b3c685d46830)
(NotificationHandler willShowPolicies, NotificationHandler
onPoliciesCompleted)

 

Adds the policy listener. This method internally creates a notification
observer for
[bfgCommon.BFG\_POLICY\_LISTENER\_WILLSHOWPOLICIES](class_b_f_g_s_d_k_1_1bfg_common.html#a335dafab688b0aae5bdf21af2936ac95 "Indicates that a discovered policy will be shown to the player.")
and
[bfgCommon.BFG\_POLICY\_LISTENER\_ONPOLICIESCOMPLETED](class_b_f_g_s_d_k_1_1bfg_common.html#ab5b89d1752761c7856d830418f2bbb14 "Indicates that a user accepted/rejected every displayed policy so restrictions for the game may have ...").
To remove the policy listeners, please call removePolicyListener with
the notification observers you have created.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#ac34f16215683f9bfa903b3c685d46830)  

 

static void 

[removePolicyListener](class_b_f_g_s_d_k_1_1bfg_manager.html#a79a3c407298bfa2df617ba165e6ad0e9)
(NotificationHandler willShowPolicies, NotificationHandler
onPoliciesCompleted)

 

Removes the policy listener.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a79a3c407298bfa2df617ba165e6ad0e9)  

 

static bool 

[didAcceptPolicyControl](class_b_f_g_s_d_k_1_1bfg_manager.html#a2717b8bb605b4f90adcda0ca4ed569a3)
(string policyControl)

 

Determines if a given policy control was accepted.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a2717b8bb605b4f90adcda0ca4ed569a3)  

 

static void 

[setLimitEventAndDataUsage](class_b_f_g_s_d_k_1_1bfg_manager.html#a716799ad435ee107d0737a0624e1a092)
(bool limitData)

 

Limits Facebook's use of data to analytics and conversions.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a716799ad435ee107d0737a0624e1a092)  

 

static void 

[requestTrackingAuthorization](class_b_f_g_s_d_k_1_1bfg_manager.html#aec03e56333e6513b3bba18897bae187c)
()

 

Triggers the display of the Apple App Transparency Tracking prompt to
request user's permission to retrieve IDFA. Utilize the
[attSelectionRequired()](class_b_f_g_s_d_k_1_1bfg_manager.html#af736c8162c1228db14aefe380ff4b543 "Determine if AppTrackingTransparency dialog should be displayed to the user. Typically used with pre-...")
method to determine if the user has made an ATT selection.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#aec03e56333e6513b3bba18897bae187c)  

 

static bool 

[attSelectionRequired](class_b_f_g_s_d_k_1_1bfg_manager.html#af736c8162c1228db14aefe380ff4b543)
()

 

Determine if AppTrackingTransparency dialog should be displayed to the
user. Typically used with pre-ATT pop up dialog and in conjunction with
the
[requestTrackingAuthorization()](class_b_f_g_s_d_k_1_1bfg_manager.html#aec03e56333e6513b3bba18897bae187c "Triggers the display of the Apple App Transparency Tracking prompt to request user's permission to re...")
method.
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#af736c8162c1228db14aefe380ff4b543)  

 

static int 

[attStatus](class_b_f_g_s_d_k_1_1bfg_manager.html#a66128e6602d3f68da93920a3426ed962)
()

 

Return an int representing the user's App Tracking Transparency status
as defined by Apple's enum: ATTrackingManager.AuthorizationStatus
[More...](class_b_f_g_s_d_k_1_1bfg_manager.html#a66128e6602d3f68da93920a3426ed962)  

 

## Member Function Documentation

## [◆ ](#ac34f16215683f9bfa903b3c685d46830)addPolicyListener()

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
<td>static void BFGSDK.bfgManager.addPolicyListener</td>
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
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
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
    

## [◆ ](#af736c8162c1228db14aefe380ff4b543)attSelectionRequired()

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
<td>static bool BFGSDK.bfgManager.attSelectionRequired</td>
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

Determine if AppTrackingTransparency dialog should be displayed to the
user. Typically used with pre-ATT pop up dialog and in conjunction with
the
[requestTrackingAuthorization()](class_b_f_g_s_d_k_1_1bfg_manager.html#aec03e56333e6513b3bba18897bae187c "Triggers the display of the Apple App Transparency Tracking prompt to request user's permission to re...")
method.

  - Returns  
    TRUE if user must interact with ATT dialog

<!-- end list -->

  - Warning  
    Only for iOS 14 and above. On Android and lower iOS versions, this
    method will ALWAYS return FALSE.

## [◆ ](#a66128e6602d3f68da93920a3426ed962)attStatus()

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
<td>static int BFGSDK.bfgManager.attStatus</td>
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

Return an int representing the user's App Tracking Transparency status
as defined by Apple's enum: ATTrackingManager.AuthorizationStatus

  - \-1: User is running on a non-iOS device OR a pre-iOS 14 OS; no
    action required
  - 0: notDetermined
  - 1: restricted
  - 2: denied
  - 3: authorized

<!-- end list -->

  - Returns  
    int representing user's App Tracking Transparency status

## [◆ ](#a154a2d730386edbccc24edce0aca663c)checkForInternetConnectionAndAlert()

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
<td>static bool BFGSDK.bfgManager.checkForInternetConnectionAndAlert</td>
<td>(</td>
<td>bool </td>
<td><em>displayAlert</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Returns a boolean indicating whether the device can access the Internet.
Also can display an alert if the device is not connected.

  - Parameters
    
    |              |                                                                 |
    | ------------ | --------------------------------------------------------------- |
    | displayAlert | Whether an alert should be displayed if there is no connection. |
    

## [◆ ](#a2717b8bb605b4f90adcda0ca4ed569a3)didAcceptPolicyControl()

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
<td>static bool BFGSDK.bfgManager.didAcceptPolicyControl</td>
<td>(</td>
<td>string </td>
<td><em>policyControl</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
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

## [◆ ](#a9376c0be79984e36363ce2313f6ebb26)getDebugDictionary()

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
<td>static bool BFGSDK.bfgManager.getDebugDictionary</td>
<td>(</td>
<td>ref string </td>
<td><em>jsonDebugDictionary</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Currently only works on iOS. Gets the debug dictionary currently being
used for purchase testing.

  - Parameters
    
    |                     |                                          |
    | ------------------- | ---------------------------------------- |
    | jsonDebugDictionary | The current debug dictionary as a string |
    

<!-- end list -->

  - Returns  
    If true, the debug dictionary was successfully retrieved. If false,
    there was a problem while retrieving the debug dictionary.

## [◆ ](#a79a3c407298bfa2df617ba165e6ad0e9)removePolicyListener()

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
<td>static void BFGSDK.bfgManager.removePolicyListener</td>
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
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Removes the policy listener.

  - Parameters
    
    |                     |                                       |
    | ------------------- | ------------------------------------- |
    | willShowPolicies    | The listener for willShowPolicies.    |
    | onPoliciesCompleted | The listener for onPoliciesCompleted. |
    

## [◆ ](#aec03e56333e6513b3bba18897bae187c)requestTrackingAuthorization()

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
<td>static void BFGSDK.bfgManager.requestTrackingAuthorization</td>
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

Triggers the display of the Apple App Transparency Tracking prompt to
request user's permission to retrieve IDFA. Utilize the
[attSelectionRequired()](class_b_f_g_s_d_k_1_1bfg_manager.html#af736c8162c1228db14aefe380ff4b543 "Determine if AppTrackingTransparency dialog should be displayed to the user. Typically used with pre-...")
method to determine if the user has made an ATT selection.

  - Warning  
    Only for iOS 14 and above. On Android and lower iOS versions, this
    method will have no effect.

## [◆ ](#a5763138d374fe71cc40d4a542f983fb3)setAttributionUserID()

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
<td>static void BFGSDK.bfgManager.setAttributionUserID</td>
<td>(</td>
<td>string </td>
<td><em>userID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Set the current attribution user ID

  - Parameters
    
    |        |                 |
    | ------ | --------------- |
    | userID | User ID to set. |
    

## [◆ ](#aae89b95ebf41582f62f7cbd5a981bf0a)setDebugDictionary()

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
<td>static void BFGSDK.bfgManager.setDebugDictionary</td>
<td>(</td>
<td>string </td>
<td><em>jsonDebugDictionary</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Currently only works on iOS. Sets the debug dictionary for purchase
testing based on the given json.

  - Parameters
    
    |                     |                                 |
    | ------------------- | ------------------------------- |
    | jsonDebugDictionary | The new debug dictionary to use |
    

## [◆ ](#a716799ad435ee107d0737a0624e1a092)setLimitEventAndDataUsage()

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
<td>static void BFGSDK.bfgManager.setLimitEventAndDataUsage</td>
<td>(</td>
<td>bool </td>
<td><em>limitData</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Limits Facebook's use of data to analytics and conversions.

  - Parameters
    
    |           |                           |
    | --------- | ------------------------- |
    | limitData | Limits data usage if true |
    

## [◆ ](#a545ff1aad1cee26b3855c9517dba8638)setParentViewController()

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
<td>static void BFGSDK.bfgManager.setParentViewController</td>
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

Currently only works for iOS

This sets the view controller to use when showing the GDN or
interstitials for both launch (startup) and resume events in the UI. The
parent view controller is initially set using the
initializeWithActivity, but can be changed by calling this method if a
different view should become the parent view for receiving GDN and
interstitials. If you change your root Activity, you must call this
method.

## [◆ ](#a3e6b1c7d84d5e0cc742b5f6251908dd1)setUserID()

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
<td>static void BFGSDK.bfgManager.setUserID</td>
<td>(</td>
<td>long </td>
<td><em>userID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Set the current user ID

  - Parameters
    
    |        |                 |
    | ------ | --------------- |
    | userID | User ID to set. |
    

## [◆ ](#abdaf9376fec1ea61c9087deb31caa107)showWebBrowser()

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
<td>static void BFGSDK.bfgManager.showWebBrowser</td>
<td>(</td>
<td>string </td>
<td><em>startPage</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
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
