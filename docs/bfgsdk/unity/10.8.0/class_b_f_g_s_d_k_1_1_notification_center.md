  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [NotificationCenter](class_b_f_g_s_d_k_1_1_notification_center.html)

[Public Member Functions](#pub-methods) | [Properties](#properties) |
[List of all
members](class_b_f_g_s_d_k_1_1_notification_center-members.html)

BFGSDK.NotificationCenter Class Reference

##  Public Member Functions

bool 

[HandlerSetHasObserver](class_b_f_g_s_d_k_1_1_notification_center.html#a1fcfa65a8103a070b23680e652221454)
(NotificationHandler handler, string notificationName)

 

Determines if a specific handler has already been registered to a
notification.
[More...](class_b_f_g_s_d_k_1_1_notification_center.html#a1fcfa65a8103a070b23680e652221454)  

 

void 

[AddObserver](class_b_f_g_s_d_k_1_1_notification_center.html#a7ac8e5faefe112dedfb5e46ad0e98677)
(NotificationHandler handler, string notificationName)

 

Registers a handler to a notification.
[More...](class_b_f_g_s_d_k_1_1_notification_center.html#a7ac8e5faefe112dedfb5e46ad0e98677)  

 

void 

[RemoveObserver](class_b_f_g_s_d_k_1_1_notification_center.html#a1b11ee61b869697bdd2610652d8778cf)
(NotificationHandler handler, string notificationName)

 

Unregisters a handler from a notification.
[More...](class_b_f_g_s_d_k_1_1_notification_center.html#a1b11ee61b869697bdd2610652d8778cf)  

 

void 

[GetStringAndArgFromJson](class_b_f_g_s_d_k_1_1_notification_center.html#a795b1c8431fea9d22e90203034d93d3b)
(string message, out string name, out string arg)

 

Gets the string and argument values from the message json payload of
format: \{"name": "name\_val", "arg": \{"arg\_json\_val"}.
[More...](class_b_f_g_s_d_k_1_1_notification_center.html#a795b1c8431fea9d22e90203034d93d3b)  

 

##  Properties

static
[NotificationCenter](class_b_f_g_s_d_k_1_1_notification_center.html) 

**Instance**`  [get] `

 

## Member Function Documentation

## [◆ ](#a7ac8e5faefe112dedfb5e46ad0e98677)AddObserver()

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
<td>void BFGSDK.NotificationCenter.AddObserver</td>
<td>(</td>
<td>NotificationHandler </td>
<td><em>handler</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>notificationName</em> </td>
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

Registers a handler to a notification.

  - Parameters
    
    |                  |                                                                    |
    | ---------------- | ------------------------------------------------------------------ |
    | handler          | The function that will be triggered when the notification arrives. |
    | notificationName | The name of the notification to listen for.                        |
    

## [◆ ](#a795b1c8431fea9d22e90203034d93d3b)GetStringAndArgFromJson()

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
<td>void BFGSDK.NotificationCenter.GetStringAndArgFromJson</td>
<td>(</td>
<td>string </td>
<td><em>message</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>out string </td>
<td><em>name</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>out string </td>
<td><em>arg</em> </td>
</tr>
<tr class="even">
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

Gets the string and argument values from the message json payload of
format: \{"name": "name\_val", "arg": \{"arg\_json\_val"}.

  - Parameters
    
    |         |           |
    | ------- | --------- |
    | message | Message.  |
    | name    | Name.     |
    | arg     | Argument. |
    

  

## [◆ ](#a1fcfa65a8103a070b23680e652221454)HandlerSetHasObserver()

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
<td>bool BFGSDK.NotificationCenter.HandlerSetHasObserver</td>
<td>(</td>
<td>NotificationHandler </td>
<td><em>handler</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>notificationName</em> </td>
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

Determines if a specific handler has already been registered to a
notification.

  - Parameters
    
    |                  |                                                                                 |
    | ---------------- | ------------------------------------------------------------------------------- |
    | handler          | The function that was registered to be triggered when the notification arrived. |
    | notificationName | The name of the notification to listen for.                                     |
    

<!-- end list -->

  - Returns  
    `true` If the handler is already registered, `false` otherwise.

## [◆ ](#a1b11ee61b869697bdd2610652d8778cf)RemoveObserver()

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
<td>void BFGSDK.NotificationCenter.RemoveObserver</td>
<td>(</td>
<td>NotificationHandler </td>
<td><em>handler</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>notificationName</em> </td>
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

Unregisters a handler from a notification.

  - Parameters
    
    |                  |                                                                                 |
    | ---------------- | ------------------------------------------------------------------------------- |
    | handler          | The function that was registered to be triggered when the notification arrived. |
    | notificationName | The name of the notification to listen for.                                     |
