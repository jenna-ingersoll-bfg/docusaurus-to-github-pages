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
  - [EditorPromoCode](class_b_f_g_s_d_k_1_1_editor_promo_code.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_editor_promo_code-members.html)

BFGSDK.EditorPromoCode Class Reference

Inheritance diagram for BFGSDK.EditorPromoCode:

![](class_b_f_g_s_d_k_1_1_editor_promo_code.png)

##  Public Member Functions

bool 

[Validate](class_b_f_g_s_d_k_1_1_editor_promo_code.html#ae73535bb2257dbc0eafbadd083337c89)
(string promoCode, int validationId, string nativeMessagesReceiverName,
string receiversSuccessListenerName, string receiversErrorListenerName)

 

Stand alone implementation of
[PromoCode](class_b_f_g_s_d_k_1_1_promo_code.html "Validates promotional codes to asynchronously return JSON formatted payloads associated with them.")
validation interface.
[More...](class_b_f_g_s_d_k_1_1_editor_promo_code.html#ae73535bb2257dbc0eafbadd083337c89)  

 

bool 

[Validate](interface_b_f_g_s_d_k_1_1_i_promo_code.html#aa4069bb614bfdfe60236a558729a88d6)
(string promoCode, int validationId, string nativeMessagesReceiverName,
string receiversSuccessListenerName, string receiversErrorListenerName)

 

Interface to validate Promo Codes.
[More...](interface_b_f_g_s_d_k_1_1_i_promo_code.html#aa4069bb614bfdfe60236a558729a88d6)  

 

## Member Function Documentation

## [◆ ](#ae73535bb2257dbc0eafbadd083337c89)Validate()

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
<td>bool BFGSDK.EditorPromoCode.Validate</td>
<td>(</td>
<td>string </td>
<td><em>promoCode</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>int </td>
<td><em>validationId</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string </td>
<td><em>nativeMessagesReceiverName</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>receiversSuccessListenerName</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string </td>
<td><em>receiversErrorListenerName</em> </td>
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

Stand alone implementation of
[PromoCode](class_b_f_g_s_d_k_1_1_promo_code.html "Validates promotional codes to asynchronously return JSON formatted payloads associated with them.")
validation interface.

  - Parameters
    
    |                              |  |
    | ---------------------------- |  |
    | promoCode                    |  |
    | validationId                 |  |
    | nativeMessagesReceiverName   |  |
    | receiversSuccessListenerName |  |
    | receiversErrorListenerName   |  |
    

Implements
[BFGSDK.IPromoCode](interface_b_f_g_s_d_k_1_1_i_promo_code.html#aa4069bb614bfdfe60236a558729a88d6).

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
