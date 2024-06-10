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
  - [UnityMessageHandler](class_b_f_g_s_d_k_1_1_unity_message_handler.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_unity_message_handler-members.html)

BFGSDK.UnityMessageHandler Class Reference

Communicates to Unity the received native notifications.
[More...](class_b_f_g_s_d_k_1_1_unity_message_handler.html#details)

Inheritance diagram for BFGSDK.UnityMessageHandler:

![](class_b_f_g_s_d_k_1_1_unity_message_handler.png)

##  Public Member Functions

void 

[HandleNativeMessage](class_b_f_g_s_d_k_1_1_unity_message_handler.html#a3805c53691460a0cf0a5512551c1937a)
(string message)

 

Triggers all the registered handlers for a native notification when it
is received.
[More...](class_b_f_g_s_d_k_1_1_unity_message_handler.html#a3805c53691460a0cf0a5512551c1937a)  

 

## Detailed Description

Communicates to Unity the received native notifications.

## Member Function Documentation

## [◆ ](#a3805c53691460a0cf0a5512551c1937a)HandleNativeMessage()

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
<td>void BFGSDK.UnityMessageHandler.HandleNativeMessage</td>
<td>(</td>
<td>string </td>
<td><em>message</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Triggers all the registered handlers for a native notification when it
is received.

  - Parameters
    
    |         |                                                                       |
    | ------- | --------------------------------------------------------------------- |
    | message | A notification received from the native platform, i.e iOS or Android. |
    

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
