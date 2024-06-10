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
  - [bfgAppManager](class_b_f_g_s_d_k_1_1bfg_app_manager.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_app_manager-members.html)

BFGSDK.bfgAppManager Class Reference

##  Static Public Member Functions

static bool 

[launchApp](class_b_f_g_s_d_k_1_1bfg_app_manager.html#aacb12f387fcd7a47eb165ac46be9dc2e)
(string bundleIdentifier)

 

Launches an installed app.
[More...](class_b_f_g_s_d_k_1_1bfg_app_manager.html#aacb12f387fcd7a47eb165ac46be9dc2e)  

 

static bool 

[launchAppWithParams](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a288912a017d8a2c2677b8b8b9ba7a0b0)
(string bundleIdentifier, string parameterString)

 

Launches an installed app and passes a parameter string to the app.
[More...](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a288912a017d8a2c2677b8b8b9ba7a0b0)  

 

static bool 

[isAppInstalled](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a3da13117b8d17916fb25db7f16ca38a4)
(string bundleIdentifier)

 

Checks if an app is installed.
[More...](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a3da13117b8d17916fb25db7f16ca38a4)  

 

static void 

[launchStoreWithApp](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a09a07dddd06755acce09cc106285bbce)
(string appID)

 

Presents app in the App Store for user to install.
[More...](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a09a07dddd06755acce09cc106285bbce)  

 

static bool 

[openReferralURL](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a1b49fc91f41b8a9fef5e47887c4cd373)
(string url)

 

Opens a referral link and presents the App Store view (iOS 6+) or
switches to the App Store (iOS 5).
[More...](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a1b49fc91f41b8a9fef5e47887c4cd373)  

 

static void 

**cancelCurrentReferral** ()

 

Attempts to cancel the current referral URL that was started with
[openReferralURL(string)](class_b_f_g_s_d_k_1_1bfg_app_manager.html#a1b49fc91f41b8a9fef5e47887c4cd373 "Opens a referral link and presents the App Store view (iOS 6+) or switches to the App Store (iOS 5)."):  

 

## Member Function Documentation

## [◆ ](#a3da13117b8d17916fb25db7f16ca38a4)isAppInstalled()

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
<td>static bool BFGSDK.bfgAppManager.isAppInstalled</td>
<td>(</td>
<td>string </td>
<td><em>bundleIdentifier</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
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

## [◆ ](#aacb12f387fcd7a47eb165ac46be9dc2e)launchApp()

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
<td>static bool BFGSDK.bfgAppManager.launchApp</td>
<td>(</td>
<td>string </td>
<td><em>bundleIdentifier</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
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

## [◆ ](#a288912a017d8a2c2677b8b8b9ba7a0b0)launchAppWithParams()

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
<td>static bool BFGSDK.bfgAppManager.launchAppWithParams</td>
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
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
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

## [◆ ](#a09a07dddd06755acce09cc106285bbce)launchStoreWithApp()

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
<td>static void BFGSDK.bfgAppManager.launchStoreWithApp</td>
<td>(</td>
<td>string </td>
<td><em>appID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Presents app in the App Store for user to install.

  - Parameters
    
    |       |                                                                                                                                                                                          |
    | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | appID | App's iTunes identifier. This number can be found at <http://linkmaker.itunes.apple.com> and is a string of numbers. For example, the iTunes identifier for the iBooks app is 364709193. |
    

## [◆ ](#a1b49fc91f41b8a9fef5e47887c4cd373)openReferralURL()

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
<td>static bool BFGSDK.bfgAppManager.openReferralURL</td>
<td>(</td>
<td>string </td>
<td><em>url</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
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

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
