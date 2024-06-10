  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [IOSBfgAppManager](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager-members.html)

BFGSDK.IOSBfgAppManager Class Reference

This is the [bfgAppManager](class_b_f_g_s_d_k_1_1bfg_app_manager.html)
wrapper class for iOS.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#details)

Inherits BFGSDK.IBfgAppManager.

##  Public Member Functions

bool 

[launchApp](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a25c9e65ba61f51ec3fa5756be781793e)
(string bundleIdentifier)

 

Launches an installed app.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a25c9e65ba61f51ec3fa5756be781793e)  

 

bool 

[launchAppWithParams](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a26c40222793047b3ea7ebe894d1dd214)
(string bundleIdentifier, string parameterString)

 

Launches an installed app and passes a parameter string to the app.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a26c40222793047b3ea7ebe894d1dd214)  

 

bool 

[isAppInstalled](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a99ec3403dbd0720f60d05aa7a247642b)
(string bundleIdentifier)

 

Checks if an app is installed.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a99ec3403dbd0720f60d05aa7a247642b)  

 

void 

[launchStoreWithApp](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a43b34919d7c4335d68cf10f2ddf904e8)
(string appID)

 

Presents app in the App Store for user to install.
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#a43b34919d7c4335d68cf10f2ddf904e8)  

 

bool 

[openReferralURL](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#acea38816ac13a3f06fd0429643e7f5c7)
(string url)

 

Opens a referral link and presents the App Store view (iOS 6+) or
switches to the App Store (iOS 5).
[More...](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#acea38816ac13a3f06fd0429643e7f5c7)  

 

void 

**cancelCurrentReferral** ()

 

Attempts to cancel the current referral URL that was started with
[openReferralURL(string)](class_b_f_g_s_d_k_1_1_i_o_s_bfg_app_manager.html#acea38816ac13a3f06fd0429643e7f5c7 "Opens a referral link and presents the App Store view (iOS 6+) or switches to the App Store (iOS 5)."):  

 

## Detailed Description

This is the [bfgAppManager](class_b_f_g_s_d_k_1_1bfg_app_manager.html)
wrapper class for iOS.

## Member Function Documentation

## [◆ ](#a99ec3403dbd0720f60d05aa7a247642b)isAppInstalled()

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
<td>bool BFGSDK.IOSBfgAppManager.isAppInstalled</td>
<td>(</td>
<td>string </td>
<td><em>bundleIdentifier</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Checks if an app is installed.

  - Parameters
    
    |                  |                                    |
    | ---------------- | ---------------------------------- |
    | bundleIdentifier | Bundle identifier of app to check. |
    

<!-- end list -->

  - Returns  
    Will return an error if the target app is not whitelisted. See
    LSApplicationQueriesSchemes

## [◆ ](#a25c9e65ba61f51ec3fa5756be781793e)launchApp()

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
<td>bool BFGSDK.IOSBfgAppManager.launchApp</td>
<td>(</td>
<td>string </td>
<td><em>bundleIdentifier</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Launches an installed app.

Will launch an app if it is installed on the device.

  - Parameters
    
    |                  |                                     |
    | ---------------- | ----------------------------------- |
    | bundleIdentifier | Bundle identifier of app to launch. |
    

<!-- end list -->

  - Returns  
    true if the app was successfully launched. false if the app is not
    installed.

## [◆ ](#a26c40222793047b3ea7ebe894d1dd214)launchAppWithParams()

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
<td>bool BFGSDK.IOSBfgAppManager.launchAppWithParams</td>
<td>(</td>
<td>string </td>
<td><em>bundleIdentifier</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>parameterString</em> </td>
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

Launches an installed app and passes a parameter string to the app.

  - Parameters
    
    |                  |                                                            |
    | ---------------- | ---------------------------------------------------------- |
    | bundleIdentifier | Bundle identifier of app to launch.                        |
    | parameterString  | Parameter string that is passed to the app being launched. |
    

<!-- end list -->

  - Returns  
    true if the app was successfully launched. false if the app is not
    installed.

## [◆ ](#a43b34919d7c4335d68cf10f2ddf904e8)launchStoreWithApp()

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
<td>void BFGSDK.IOSBfgAppManager.launchStoreWithApp</td>
<td>(</td>
<td>string </td>
<td><em>appID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Presents app in the App Store for user to install.

  - Parameters
    
    |       |                                                                                                                                                                                          |
    | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | appID | App's iTunes identifier. This number can be found at <http://linkmaker.itunes.apple.com> and is a string of numbers. For example, the iTunes identifier for the iBooks app is 364709193. |
    

## [◆ ](#acea38816ac13a3f06fd0429643e7f5c7)openReferralURL()

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
<td>bool BFGSDK.IOSBfgAppManager.openReferralURL</td>
<td>(</td>
<td>string </td>
<td><em>url</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Opens a referral link and presents the App Store view (iOS 6+) or
switches to the App Store (iOS 5).

A URL connection is made in the background and redirects are followed.
When an App Store link is detected, the app ID is extracted and an App
Store view is used to present the app in-game (iOS 6), or the user is
switched to the App Store to view the app (iOS 5).

  - Parameters
    
    |     |                        |
    | --- | ---------------------- |
    | url | The URL to connect to. |
    

<!-- end list -->

  - Returns  
    true if the URL connection has started successfully. false if the
    URL failed to start or the URL does not match one of the supported
    referral domains.
