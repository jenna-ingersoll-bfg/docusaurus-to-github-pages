  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgLocalNotificationManager](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_local_notification_manager-members.html)

BFGSDK.bfgLocalNotificationManager Class Reference

Provides a straightforward interface for scheduling and cancelling local
notifications. The class enables standardized management of local
notifications that can survive a restart of the device.
[More...](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html#details)

##  Static Public Member Functions

static void 

[cancelNotification](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html#a8644ebe0cf43143159cbcf209e930b71)
(long notificationId)

 

Cancel a pending or already-published notification.
[More...](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html#a8644ebe0cf43143159cbcf209e930b71)  

 

static long 

[scheduleNotification](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html#aefd6fcf33ad667cdb82ee08730104145)
(string title, string content, int iconResourceId, long
replaceNotificationId, long epochTimeInMilliseconds, bool autoDismiss)

 

Schedules a new notification with an explicit identifier. The method may
also cancel a pending or already-published notification.
[More...](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html#aefd6fcf33ad667cdb82ee08730104145)  

 

static long 

[scheduleNotification](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html#aa19aef26d35ab8e51d7406cc15c881b0)
(string title, string content, int iconResourceId, long
epochTimeInMilliseconds, bool autoDismiss)

 

Schedules a new notification with an explicit identifier. The method may
also cancel a pending or already-published notification.
[More...](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html#aa19aef26d35ab8e51d7406cc15c881b0)  

 

## Detailed Description

Provides a straightforward interface for scheduling and cancelling local
notifications. The class enables standardized management of local
notifications that can survive a restart of the device.

**How local notifications work:** Use scheduleNotification to request
submission of a new notification at a specified time. The method may
also be used to cancel a pending or published notification in favor of a
newly-scheduled notification.

  - Warning  
    Android only.

Use cancelNotification to cancel submission of a pending notification or
to remove an already-published notification.

## Member Function Documentation

## [◆ ](#a8644ebe0cf43143159cbcf209e930b71)cancelNotification()

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
<td>static void BFGSDK.bfgLocalNotificationManager.cancelNotification</td>
<td>(</td>
<td>long </td>
<td><em>notificationId</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Cancel a pending or already-published notification.

Immediately cancel the notification identified by the argument. If the
notification is pending (i.e., scheduled, but not yet published), then
publication will be cancelled. If the notification has already been
published, then it will be removed from the notification tray.

  - Parameters
    
    |                |                                                                                                                                                                                                                                 |
    | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | notificationId | A value of type long that uniquely identifies the notification. It may have been assigned in a prior call to scheduleNotification (value passed for replaceNotificationId) or returned by a prior call to scheduleNotification. |
    

## [◆ ](#aa19aef26d35ab8e51d7406cc15c881b0)scheduleNotification() \[1/2\]

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
<td>static long BFGSDK.bfgLocalNotificationManager.scheduleNotification</td>
<td>(</td>
<td>string </td>
<td><em>title</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>content</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>int </td>
<td><em>iconResourceId</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>long </td>
<td><em>epochTimeInMilliseconds</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>bool </td>
<td><em>autoDismiss</em> </td>
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

Schedules a new notification with an explicit identifier. The method may
also cancel a pending or already-published notification.

Schedule a notification for publication at a specific time. The
replaceNotificationId argument may be used to cancel a pending
publication or to remove a notification that has already been published.
The remaining arguments describe the appearance of the notification and
an Android intent to be executed when the notification is tapped.

  - Parameters
    
    |                         |                                                                                                                                                                                                                                                                                      |
    | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | title                   | A string value specifying the notification's title.                                                                                                                                                                                                                                  |
    | content                 | A string value specifying the text content of the notification.                                                                                                                                                                                                                      |
    | iconResourceId          | An integer resource ID identifying the icon to use in the notification display. Note that this argument is required and that it must identify a valid "drawable" icon.                                                                                                               |
    | epochTimeInMilliseconds | This determines the time at which the notification will be published. It is specified as "epoch time"; i.e., UTC time in milliseconds since 00h00:00 January 1, 1970. For example, use (System.currentTimeMillis() + 300000) to schedule a notification for 5 minutes in the future. |
    | autoDismiss             | This argument determines whether the notification will be removed from the notification tray automatically when the user taps the notification. Note that the argument will be ignored unless a non-null Intent is provided for the intent argument.                                 |
    

<!-- end list -->

  - Returns  
    An integer value (Java type long) that uniquely identifies the
    scheduled notification. It may be used in cancelNotification or a
    subsequent call to scheduleNotification (replaceNotificationId
    argument) to cancel or replace the notification.

## [◆ ](#aefd6fcf33ad667cdb82ee08730104145)scheduleNotification() \[2/2\]

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
<td>static long BFGSDK.bfgLocalNotificationManager.scheduleNotification</td>
<td>(</td>
<td>string </td>
<td><em>title</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>content</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>int </td>
<td><em>iconResourceId</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>long </td>
<td><em>replaceNotificationId</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>long </td>
<td><em>epochTimeInMilliseconds</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>bool </td>
<td><em>autoDismiss</em> </td>
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

Schedules a new notification with an explicit identifier. The method may
also cancel a pending or already-published notification.

Schedule a notification for publication at a specific time. The
replaceNotificationId argument may be used to cancel a pending
publication or to remove a notification that has already been published.
The remaining arguments describe the appearance of the notification and
an Android intent to be executed when the notification is tapped.

  - Parameters
    
    |                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | title                   | A string value specifying the notification's title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | content                 | A string value specifying the text content of the notification.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | iconResourceId          | An integer resource ID identifying the icon to use in the notification display. Note that this argument is required and that it must identify a valid "drawable" icon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | replaceNotificationId   | An integer identifier value assigned to the notification. If this ID is used in a subsequent call to scheduleNotification, then the prior notification will be cancelled (if it is still pending) or removed from the notification tray (if it has already been published). Note that, when the method is called without a parameter value for replaceNotificationId, [bfgLocalNotificationManager](class_b_f_g_s_d_k_1_1bfg_local_notification_manager.html "Provides a straightforward interface for scheduling and cancelling local notifications....") will automatically assign a negative integer identifier. Accordingly, developers may avoid clashes between user-assigned identifiers and SDK-assigned identifiers by using only non-negative integers for the former. |
    | epochTimeInMilliseconds | This determines the time at which the notification will be published. It is specified as "epoch time"; i.e., UTC time in milliseconds since 00h00:00 January 1, 1970. For example, use (System.currentTimeMillis() + 300000) to schedule a notification for 5 minutes in the future.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | autoDismiss             | This argument determines whether the notification will be removed from the notification tray automatically when the user taps the notification. Note that the argument will be ignored unless a non-null Intent is provided for the intent argument.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    

<!-- end list -->

  - Returns  
    An integer value (Java type long) that uniquely identifies the
    scheduled notification. It may be used in cancelNotification or a
    subsequent call to scheduleNotification (replaceNotificationId
    argument) to cancel or replace the notification.
