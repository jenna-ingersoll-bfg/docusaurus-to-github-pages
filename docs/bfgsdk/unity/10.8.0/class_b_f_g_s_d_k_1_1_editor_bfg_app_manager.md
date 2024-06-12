  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [EditorBfgAppManager](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager-members.html)

BFGSDK.EditorBfgAppManager Class Reference

Wrapper code for the iOS native
[bfgAppManager](class_b_f_g_s_d_k_1_1bfg_app_manager.html) class that
takes care of Installing apps from the App Store or Launching already
installed apps on the device.
[More...](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#details)

Inherits BFGSDK.IBfgAppManager.

##  Public Member Functions

bool 

[launchApp](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a417a5b02c8d9304d9b66330b8e617b89)
(string bundleIdentifier)

 

Launches an installed app.
[More...](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a417a5b02c8d9304d9b66330b8e617b89)  

 

bool 

[launchAppWithParams](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#ab39ffb6c52ab72b1fd824b3b1125658f)
(string bundleIdentifier, string parameterString)

 

Launches an installed app and passes a parameter string to the app.
[More...](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#ab39ffb6c52ab72b1fd824b3b1125658f)  

 

bool 

[isAppInstalled](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a801e673b35214b46ea18deca4a4ce273)
(string bundleIdentifier)

 

Checks if an app is installed.
[More...](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a801e673b35214b46ea18deca4a4ce273)  

 

void 

[launchStoreWithApp](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a5fb4316c9d543dfb6e18b67e5a8a8152)
(string appID)

 

Presents app in the App Store for user to install.
[More...](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a5fb4316c9d543dfb6e18b67e5a8a8152)  

 

bool 

[openReferralURL](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a86e6bcded55dafcfc72c8a080beafff3)
(string url)

 

Opens a referral link and presents the App Store view (iOS 6+) or
switches to the App Store (iOS 5).
[More...](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a86e6bcded55dafcfc72c8a080beafff3)  

 

void 

**cancelCurrentReferral** ()

 

Attempts to cancel the current referral URL that was started with
[openReferralURL(string)](class_b_f_g_s_d_k_1_1_editor_bfg_app_manager.html#a86e6bcded55dafcfc72c8a080beafff3 "Opens a referral link and presents the App Store view (iOS 6+) or switches to the App Store (iOS 5)."):  

 

## Detailed Description

Wrapper code for the iOS native
[bfgAppManager](class_b_f_g_s_d_k_1_1bfg_app_manager.html) class that
takes care of Installing apps from the App Store or Launching already
installed apps on the device.

  - Warning  
    iOS only

## Member Function Documentation

## [◆ ](#a801e673b35214b46ea18deca4a4ce273)isAppInstalled()

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
<td>bool BFGSDK.EditorBfgAppManager.isAppInstalled</td>
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

## [◆ ](#a417a5b02c8d9304d9b66330b8e617b89)launchApp()

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
<td>bool BFGSDK.EditorBfgAppManager.launchApp</td>
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

## [◆ ](#ab39ffb6c52ab72b1fd824b3b1125658f)launchAppWithParams()

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
<td>bool BFGSDK.EditorBfgAppManager.launchAppWithParams</td>
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

## [◆ ](#a5fb4316c9d543dfb6e18b67e5a8a8152)launchStoreWithApp()

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
<td>void BFGSDK.EditorBfgAppManager.launchStoreWithApp</td>
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
    | appID | App's iTunes identifier. This number can be found at ()[http://linkmaker.itunes.apple.com] and is a string of numbers. For example, the iTunes identifier for the iBooks app is 364709193. |
    

## [◆ ](#a86e6bcded55dafcfc72c8a080beafff3)openReferralURL()

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
<td>bool BFGSDK.EditorBfgAppManager.openReferralURL</td>
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
