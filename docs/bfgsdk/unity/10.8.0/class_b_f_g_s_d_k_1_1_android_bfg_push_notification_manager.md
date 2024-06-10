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
  - [AndroidBfgPushNotificationManager](class_b_f_g_s_d_k_1_1_android_bfg_push_notification_manager.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_android_bfg_push_notification_manager-members.html)

BFGSDK.AndroidBfgPushNotificationManager Class Reference

This is the
[bfgPushNotificationManager](class_b_f_g_s_d_k_1_1bfg_push_notification_manager.html)
wrapper class for Android.
[More...](class_b_f_g_s_d_k_1_1_android_bfg_push_notification_manager.html#details)

Inherits BFGSDK.IBfgPushNotificationManager.

##  Public Member Functions

void 

**registerForPushNotifications** ()

 

Registers with all providers to receive push notifications.  

 

void 

[setIconBadgeNumber](class_b_f_g_s_d_k_1_1_android_bfg_push_notification_manager.html#a4e2fbb9c76e5ea90a7c8c9bdfdb6e094)
(int badgeNumber)

 

Sets the badge number for the app
[More...](class_b_f_g_s_d_k_1_1_android_bfg_push_notification_manager.html#a4e2fbb9c76e5ea90a7c8c9bdfdb6e094)  

 

## Detailed Description

This is the
[bfgPushNotificationManager](class_b_f_g_s_d_k_1_1bfg_push_notification_manager.html)
wrapper class for Android.

## Member Function Documentation

## [◆ ](#a4e2fbb9c76e5ea90a7c8c9bdfdb6e094)setIconBadgeNumber()

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
<td>void BFGSDK.AndroidBfgPushNotificationManager.setIconBadgeNumber</td>
<td>(</td>
<td>int </td>
<td><em>badgeNumber</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Sets the badge number for the app

  - Parameters
    
    |             |                                                                            |
    | ----------- | -------------------------------------------------------------------------- |
    | badgeNumber | The number to display in a red circle on an app. Use 0 to unset the badge. |
    

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
