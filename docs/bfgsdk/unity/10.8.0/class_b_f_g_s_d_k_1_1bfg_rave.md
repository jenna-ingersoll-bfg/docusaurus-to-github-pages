  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgRave](class_b_f_g_s_d_k_1_1bfg_rave.html)

[Public Types](#pub-types) | [Static Public Member
Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_rave-members.html)

BFGSDK.bfgRave Class Reference

##  Public Types

enum  

[AccountDeletionRequestResult](class_b_f_g_s_d_k_1_1bfg_rave.html#a921a9f166704327943bb3768481b841f)
{ **Success** = 0 , **FailedForAuth** , **NetworkUnavailable** ,
**FailedToSend** }

 

This is used by
[bfgRave.requestAccountDeletion()](class_b_f_g_s_d_k_1_1bfg_rave.html#a685fa585555f66599bf2926c77981bf7 "Sends a Zendesk request for account deletion and logs the user out of Rave.")
These are the possible payload values provided when subscribing to the
bfgCommon.BFG\_RAVE\_ACCOUNT\_DELETION\_REQUEST\_FAILURE notification:
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a921a9f166704327943bb3768481b841f)  

 

##  Static Public Member Functions

static string 

[currentRaveId](class_b_f_g_s_d_k_1_1bfg_rave.html#a8dd194cad7dc3c1f870ba89efa3a715b)
()

 

Returns the current Rave Id, or null if Rave is not initialized
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a8dd194cad7dc3c1f870ba89efa3a715b)  

 

static string 

[currentRaveEmail](class_b_f_g_s_d_k_1_1bfg_rave.html#a75d75e5b803e337f940131b003c05de7)
()

 

Get the Rave email of the current user.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a75d75e5b803e337f940131b003c05de7)  

 

static bool 

[isAuthenticated](class_b_f_g_s_d_k_1_1bfg_rave.html#a0072e9288be9c7f35b70387eb393bef7)
()

 

Get whether the current user is authenticated.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a0072e9288be9c7f35b70387eb393bef7)  

 

static bool 

[isCurrentGuest](class_b_f_g_s_d_k_1_1bfg_rave.html#aaf3beffc2f114ace1facb3b3faf7d4e0)
()

 

Returns whether the current user is a guest or not.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#aaf3beffc2f114ace1facb3b3faf7d4e0)  

 

static string 

[lastRaveId](class_b_f_g_s_d_k_1_1bfg_rave.html#a39a4a734c093985b6f60ec06a3a64b13)
()

 

Returns the previous user's raveId. Note: Returns null if the previous
user and current user are the same.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a39a4a734c093985b6f60ec06a3a64b13)  

 

static bool 

[isLastGuest](class_b_f_g_s_d_k_1_1bfg_rave.html#a71481e8fc0e466a75d366cf97b3c7d67)
()

 

Returns whether the previous user was a guest or not. Note: Returns
false if the previous user is the same as the current user.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a71481e8fc0e466a75d366cf97b3c7d67)  

 

static void 

**logoutCurrentUser** ()

 

Logs out the current Rave user. NOTE: This will result in a new Rave
id.  

 

static void 

**presentSignIn** ()

 

Displays the Rave login page to the user. Rave handles checking for any
needed permissions, giving the user a friendly message about the
permission it's about to request, and then requesting it.  

 

static void 

**presentProfile** ()

 

Shows the Rave Profile model.  

 

static bool 

[isRaveInitialized](class_b_f_g_s_d_k_1_1bfg_rave.html#a0a84e9dcab900d979d3ac9c7399df9e5)
()

 

Returns whether Rave is initialized or not.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a0a84e9dcab900d979d3ac9c7399df9e5)  

 

static string 

[currentRaveDisplayName](class_b_f_g_s_d_k_1_1bfg_rave.html#a05f96429cc7cc00327c5ee9db130f6f8)
()

 

Get the Rave display name of the current user.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a05f96429cc7cc00327c5ee9db130f6f8)  

 

static void 

[changeRaveDisplayName](class_b_f_g_s_d_k_1_1bfg_rave.html#ad0a9afa16114f37be50f0949bd6100e0)
(string raveDisplayName)

 

Call this to set the Rave display name.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#ad0a9afa16114f37be50f0949bd6100e0)  

 

static void 

[fetchCurrentAppDataKey](class_b_f_g_s_d_k_1_1bfg_rave.html#accf19f1603c033bc582cad286c4c71b0)
()

 

Initiate a fetch of the current Rave App Data Key.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#accf19f1603c033bc582cad286c4c71b0)  

 

static void 

[selectRaveAppDataKey](class_b_f_g_s_d_k_1_1bfg_rave.html#a25d7cf2f8a556a1ca9099f4d8a672ced)
(string key)

 

Select the App Data Key.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a25d7cf2f8a556a1ca9099f4d8a672ced)  

 

static bool 

[isCurrentAuthenticated](class_b_f_g_s_d_k_1_1bfg_rave.html#a1c0358f987abb6bbd3962783a5b5a1b6)
()

 

Checks if the current user is authenticated.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a1c0358f987abb6bbd3962783a5b5a1b6)  

 

static bool 

[isCurrentPersonalized](class_b_f_g_s_d_k_1_1bfg_rave.html#af704cee03336a5486879e8fec2b82ae3)
()

 

Is the user logged in and in personalized state.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#af704cee03336a5486879e8fec2b82ae3)  

 

static void 

**presentNewsletterSignup** ()

 

Displays the Rave newsletter sign up page to the user. Rave handles
checking for any needed permissions, giving the user a friendly message
about the permission it's about to request, and then requesting it.  

 

static void 

[presentNewsletterSignupWithOrigin](class_b_f_g_s_d_k_1_1bfg_rave.html#abc80beed3df7b9d805c10fa0d0ffd543)
(string origin)

 

Displays the Rave newsletter sign up page to the user. Rave handles
checking for any needed permissions, giving the user a friendly message
about the permission it's about to request, and then requesting it.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#abc80beed3df7b9d805c10fa0d0ffd543)  

 

static void 

[presentProfileWithOrigin](class_b_f_g_s_d_k_1_1bfg_rave.html#abf605b6f473ee66de9e19f4167e660be)
(string origin)

 

Presents the standard profile screen if the current user is
authenticated or personalized.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#abf605b6f473ee66de9e19f4167e660be)  

 

static void 

[presentSignInWithOrigin](class_b_f_g_s_d_k_1_1bfg_rave.html#a78e24cb6ae0c66aa235985c3eeef564a)
(string origin)

 

Displays the Rave login page to the user. Rave handles checking for any
needed permissions, giving the user a friendly message about the
permission it's about to request, and then requesting it. An origin can
be provided that identifies which screen or app started the AuthFlow
login process. This origin will be provided in the first scene event in
AuthFlow reporting analytics.
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a78e24cb6ae0c66aa235985c3eeef564a)  

 

static void 

[enableFBClassicLoginMode](class_b_f_g_s_d_k_1_1bfg_rave.html#a2d96bf633f6730cf72187e4c8999556c)
(bool enabled)

 

Rave has Facebook's Limited Login enabled by default. Call this method
to enable Facebook's Classic Login mode. The SDK automatically calls
this if/when a user opts in to ATT from
\#bfgManager.requestTrackingAuthorization()
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a2d96bf633f6730cf72187e4c8999556c)  

 

static void 

[setFacebookReadPermissions](class_b_f_g_s_d_k_1_1bfg_rave.html#a30229455a7bcd316db49bea99ba3f51f)
(string permissions)

 

Set Facebook Read Permissions dynamically
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a30229455a7bcd316db49bea99ba3f51f)  

 

static string 

[getCurrentFacebookPermissions](class_b_f_g_s_d_k_1_1bfg_rave.html#adb55549cbed693c385d88302426b0b10)
()

 

Get current Facebook Permissions
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#adb55549cbed693c385d88302426b0b10)  

 

static bool 

[facebookClassicLoginModeEnabled](class_b_f_g_s_d_k_1_1bfg_rave.html#a4d46310208b9b576a3c43e2bb5d62256)
()

 

Determine if Facebook Classic Login mode is enabled
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a4d46310208b9b576a3c43e2bb5d62256)  

 

static string 

[getAuthSource](class_b_f_g_s_d_k_1_1bfg_rave.html#a741e6ab24390f961852074d0a18e0a02)
()

 

Get authentication provider with which the user has authenticated
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a741e6ab24390f961852074d0a18e0a02)  

 

static string\[\] 

[getAllAuthSources](class_b_f_g_s_d_k_1_1bfg_rave.html#a1e9218ab521962f7e56c1bc3e88a09f0)
()

 

Get authentication provider with which the user has authenticated
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a1e9218ab521962f7e56c1bc3e88a09f0)  

 

static void 

[getAppAssociatedFacebookFriends](class_b_f_g_s_d_k_1_1bfg_rave.html#a066fb949f919fcf219d872f6ea1c7a59)
()

 

Initiate a fetch of app-associated facebook friends for the current user
if authenticated through Facebook
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a066fb949f919fcf219d872f6ea1c7a59)  

 

static void 

[requestAccountDeletion](class_b_f_g_s_d_k_1_1bfg_rave.html#a685fa585555f66599bf2926c77981bf7)
()

 

Sends a Zendesk request for account deletion and logs the user out of
Rave.  
[More...](class_b_f_g_s_d_k_1_1bfg_rave.html#a685fa585555f66599bf2926c77981bf7)  

 

## Member Enumeration Documentation

## [◆ ](#a921a9f166704327943bb3768481b841f)AccountDeletionRequestResult

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
| enum [BFGSDK.bfgRave.AccountDeletionRequestResult](class_b_f_g_s_d_k_1_1bfg_rave.html#a921a9f166704327943bb3768481b841f) |

This is used by
[bfgRave.requestAccountDeletion()](class_b_f_g_s_d_k_1_1bfg_rave.html#a685fa585555f66599bf2926c77981bf7 "Sends a Zendesk request for account deletion and logs the user out of Rave.")
These are the possible payload values provided when subscribing to the
bfgCommon.BFG\_RAVE\_ACCOUNT\_DELETION\_REQUEST\_FAILURE notification:

  - Success: Account deletion request was successfully sent through
    Zendesk
  - FailedForAuth: The user is not authenticated through Rave
  - NetworkUnavailable: The user doesn't have a network connection
  - FailedToSend: A network or client error occurred while sending the
    account deletion request through Zendesk

## Member Function Documentation

## [◆ ](#ad0a9afa16114f37be50f0949bd6100e0)changeRaveDisplayName()

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
<td>static void BFGSDK.bfgRave.changeRaveDisplayName</td>
<td>(</td>
<td>string </td>
<td><em>raveDisplayName</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Call this to set the Rave display name.

The potential display name value that is passed in must meet the
following requirements:

  - String cannot be null
  - String length must be between 4 characters and 16 characters in
    length

<!-- end list -->

  - Parameters
    
    |                 |                                                         |
    | --------------- | ------------------------------------------------------- |
    | raveDisplayName | The name that the Rave display name will be changed to. |
    

## [◆ ](#a05f96429cc7cc00327c5ee9db130f6f8)currentRaveDisplayName()

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
<td>static string BFGSDK.bfgRave.currentRaveDisplayName</td>
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

Get the Rave display name of the current user.

  - Returns  
    The Rave display name of the current user or null if there isn't
    one.

## [◆ ](#a75d75e5b803e337f940131b003c05de7)currentRaveEmail()

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
<td>static string BFGSDK.bfgRave.currentRaveEmail</td>
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

Get the Rave email of the current user.

  - Returns  
    The Rave email of the current user or null if there isn't one.

## [◆ ](#a8dd194cad7dc3c1f870ba89efa3a715b)currentRaveId()

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
<td>static string BFGSDK.bfgRave.currentRaveId</td>
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

Returns the current Rave Id, or null if Rave is not initialized

  - Returns  
    The current Rave Id, possibly null.

## [◆ ](#a2d96bf633f6730cf72187e4c8999556c)enableFBClassicLoginMode()

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
<td>static void BFGSDK.bfgRave.enableFBClassicLoginMode</td>
<td>(</td>
<td>bool </td>
<td><em>enabled</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Rave has Facebook's Limited Login enabled by default. Call this method
to enable Facebook's Classic Login mode. The SDK automatically calls
this if/when a user opts in to ATT from
\#bfgManager.requestTrackingAuthorization()

  - Warning  
    iOS only.

<!-- end list -->

  - Since  
    7.2.1
      - Parameters
        
        |         |                                                                           |
        | ------- | ------------------------------------------------------------------------- |
        | enabled | TRUE to enable Facebook Classic Login mode, FALSE to enable Limited Login |
        

## [◆ ](#a4d46310208b9b576a3c43e2bb5d62256)facebookClassicLoginModeEnabled()

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
<td>static bool BFGSDK.bfgRave.facebookClassicLoginModeEnabled</td>
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

Determine if Facebook Classic Login mode is enabled

  - Returns  
    Return TRUE if Facebook's Classic Login mode is enabled, FALSE
    otherwise

## [◆ ](#accf19f1603c033bc582cad286c4c71b0)fetchCurrentAppDataKey()

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
<td>static void BFGSDK.bfgRave.fetchCurrentAppDataKey</td>
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

Initiate a fetch of the current Rave App Data Key.

This makes an asynchronous call to Rave to retrieve the App Data Key. If
the fetch is successful, the delegate method
bfgRaveFetchCurrentAppDataKeyDidSucceed will be called. If the fetch is
unsuccessful, the delegate method
bfgRaveFetchCurrentAppDataKeyDidFailWithError will be called. In the
case where you are offline and have unresolved keys or logged out while
offline, calling this method will call the delegate method
bfgRaveFetchCurrentAppDataKeyDidFailWithError with null as the error
value.

## [◆ ](#a1e9218ab521962f7e56c1bc3e88a09f0)getAllAuthSources()

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
<td>static string[] BFGSDK.bfgRave.getAllAuthSources</td>
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

Get authentication provider with which the user has authenticated

  - Returns  
    A string representing the authentication provider: "unknown\_auth",
    "facebook", "apple", "big\_fish"

## [◆ ](#a066fb949f919fcf219d872f6ea1c7a59)getAppAssociatedFacebookFriends()

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
<td>static void BFGSDK.bfgRave.getAppAssociatedFacebookFriends</td>
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

Initiate a fetch of app-associated facebook friends for the current user
if authenticated through Facebook

This makes an asynchronous call to Rave to retrieve a json string
containing the app-associated friend data.

  - If successful, the
    BFG\_RAVE\_EXTERNALCALLBACK\_GET\_APP\_ASSOCIATED\_FACEBOOK\_FRIENDS\_DID\_SUCCEED
    event will be dispatched containing the json string.
  - If unsuccessful, the
    BFG\_RAVE\_EXTERNALCALLBACK\_GET\_APP\_ASSOCIATED\_FACEBOOK\_FRIENDS\_DID\_FAIL
    event will be dispatched containing the error string.

Due to the nature of how data is marshalled between native code and C\#,
the json string containing the friend data will need to be transformed
into a JsonUtility-friendly format.

Please refer to the sample project for an example implementation.

  - Warning  
    iOS only.

<!-- end list -->

  - Since  
    7.2.4

## [◆ ](#a741e6ab24390f961852074d0a18e0a02)getAuthSource()

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
<td>static string BFGSDK.bfgRave.getAuthSource</td>
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

Get authentication provider with which the user has authenticated

  - Returns  
    A string representing the authentication provider: "unknown\_auth",
    "facebook", "apple", "big\_fish"

## [◆ ](#adb55549cbed693c385d88302426b0b10)getCurrentFacebookPermissions()

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
<td>static string BFGSDK.bfgRave.getCurrentFacebookPermissions</td>
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

Get current Facebook Permissions

  - Returns  
    A string representing the permissions, e.g. "public\_profile,email"
    or "public\_profile,email,user\_friends"

## [◆ ](#a0072e9288be9c7f35b70387eb393bef7)isAuthenticated()

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
<td>static bool BFGSDK.bfgRave.isAuthenticated</td>
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

Get whether the current user is authenticated.

  - Returns  
    YES if the current user is a authenticated, NO if unauthenticated.

## [◆ ](#a1c0358f987abb6bbd3962783a5b5a1b6)isCurrentAuthenticated()

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
<td>static bool BFGSDK.bfgRave.isCurrentAuthenticated</td>
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

Checks if the current user is authenticated.

  - Returns  
    TRUE if the user is authenticated.

## [◆ ](#aaf3beffc2f114ace1facb3b3faf7d4e0)isCurrentGuest()

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
<td>static bool BFGSDK.bfgRave.isCurrentGuest</td>
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

Returns whether the current user is a guest or not.

  - Returns  
    boolean value indicating whether the current user is a guest or not.

## [◆ ](#af704cee03336a5486879e8fec2b82ae3)isCurrentPersonalized()

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
<td>static bool BFGSDK.bfgRave.isCurrentPersonalized</td>
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

Is the user logged in and in personalized state.

  - Returns  
    TRUE if logged in and personalized.

## [◆ ](#a71481e8fc0e466a75d366cf97b3c7d67)isLastGuest()

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
<td>static bool BFGSDK.bfgRave.isLastGuest</td>
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

Returns whether the previous user was a guest or not. Note: Returns
false if the previous user is the same as the current user.

  - Returns  
    boolean value indicating if the last user to use the app was a guest
    or not.

## [◆ ](#a0a84e9dcab900d979d3ac9c7399df9e5)isRaveInitialized()

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
<td>static bool BFGSDK.bfgRave.isRaveInitialized</td>
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

Returns whether Rave is initialized or not.

  - Returns  
    boolean value indicating the status of Rave initilization.

## [◆ ](#a39a4a734c093985b6f60ec06a3a64b13)lastRaveId()

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
<td>static string BFGSDK.bfgRave.lastRaveId</td>
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

Returns the previous user's raveId. Note: Returns null if the previous
user and current user are the same.

  - Returns  
    String the previous user's raveId or null.

## [◆ ](#abc80beed3df7b9d805c10fa0d0ffd543)presentNewsletterSignupWithOrigin()

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
<td>static void BFGSDK.bfgRave.presentNewsletterSignupWithOrigin</td>
<td>(</td>
<td>string </td>
<td><em>origin</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Displays the Rave newsletter sign up page to the user. Rave handles
checking for any needed permissions, giving the user a friendly message
about the permission it's about to request, and then requesting it.

  - Parameters
    
    |        |                                                                                                                                                                                         |
    | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | origin | A string denoting the starting point of the auth flow for reporting. Allows us to measure which areas in the game produce the highest authentication conversions. Example: 'level\_end' |
    

## [◆ ](#abf605b6f473ee66de9e19f4167e660be)presentProfileWithOrigin()

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
<td>static void BFGSDK.bfgRave.presentProfileWithOrigin</td>
<td>(</td>
<td>string </td>
<td><em>origin</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Presents the standard profile screen if the current user is
authenticated or personalized.

  - Parameters
    
    |        |                                                                                                                                                                                         |
    | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | origin | A string denoting the starting point of the auth flow for reporting. Allows us to measure which areas in the game produce the highest authentication conversions. Example: 'level\_end' |
    

## [◆ ](#a78e24cb6ae0c66aa235985c3eeef564a)presentSignInWithOrigin()

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
<td>static void BFGSDK.bfgRave.presentSignInWithOrigin</td>
<td>(</td>
<td>string </td>
<td><em>origin</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Displays the Rave login page to the user. Rave handles checking for any
needed permissions, giving the user a friendly message about the
permission it's about to request, and then requesting it. An origin can
be provided that identifies which screen or app started the AuthFlow
login process. This origin will be provided in the first scene event in
AuthFlow reporting analytics.

  - Parameters
    
    |        |                                                                                                                    |
    | ------ | ------------------------------------------------------------------------------------------------------------------ |
    | origin | Name of the origin activity that launched the sign-in AuthFlow (e.g., "leaderboard"); NULL if no origin specified. |
    

## [◆ ](#a685fa585555f66599bf2926c77981bf7)requestAccountDeletion()

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
<td>static void BFGSDK.bfgRave.requestAccountDeletion</td>
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

Sends a Zendesk request for account deletion and logs the user out of
Rave.  

  - Warning  
    This method MUST be called after BFG\_RAVE\_READY notification is
    received.

The BFG\_RAVE\_ACCOUNT\_DELETION\_REQUEST\_SUCCESSFUL notification is
dispatched upon success.  
The BFG\_RAVE\_ACCOUNT\_DELETION\_REQUEST\_FAILURE notification is
dispatched upon failure with one of the following
AccountDeletionRequestResult failure codes:

  - FailedForAuth (1): The user is not authenticated through Rave.
  - NetworkUnavailable (2): The user doesn't have a network connection.
  - FailedToSend (3): A network or client error occurred while sending
    the account deletion request through Zendesk.

<!-- end list -->

  - Since  
    9.4.1 (iOS), 9.5.0 (Android)

## [◆ ](#a25d7cf2f8a556a1ca9099f4d8a672ced)selectRaveAppDataKey()

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
<td>static void BFGSDK.bfgRave.selectRaveAppDataKey</td>
<td>(</td>
<td>string </td>
<td><em>key</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Select the App Data Key.

NOTE: Only call this after a key is selected(by the user or the game)
from the set of unresolved keys.

  - Parameters
    
    |     |                                                   |
    | --- | ------------------------------------------------- |
    | key | The key that the App Data Key will be changed to. |
    

## [◆ ](#a30229455a7bcd316db49bea99ba3f51f)setFacebookReadPermissions()

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
<td>static void BFGSDK.bfgRave.setFacebookReadPermissions</td>
<td>(</td>
<td>string </td>
<td><em>permissions</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Set Facebook Read Permissions dynamically

  - Warning  
    iOS only.

<!-- end list -->

  - Since  
    7.2.1
      - Parameters
        
        |             |                                                                                                                 |
        | ----------- | --------------------------------------------------------------------------------------------------------------- |
        | permissions | Facebook permissions required by the app, e.g. "public\_profile,email" or "public\_profile,email,user\_friends" |
