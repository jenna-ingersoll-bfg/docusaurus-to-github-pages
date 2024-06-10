  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [AndroidPromoCode](class_b_f_g_s_d_k_1_1_android_promo_code.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_android_promo_code-members.html)

BFGSDK.AndroidPromoCode Class Reference

Inheritance diagram for BFGSDK.AndroidPromoCode:

![](class_b_f_g_s_d_k_1_1_android_promo_code.png)

##  Public Member Functions

bool 

[Validate](class_b_f_g_s_d_k_1_1_android_promo_code.html#a5fdb0364802e817d760850bc5c997c95)
(string promoCode, int validationId, string nativeMessagesReceiverName,
string receiversSuccessListenerName, string receiversErrorListenerName)

 

Android implementation of
[PromoCode](class_b_f_g_s_d_k_1_1_promo_code.html "Validates promotional codes to asynchronously return JSON formatted payloads associated with them.")
validation interface.
[More...](class_b_f_g_s_d_k_1_1_android_promo_code.html#a5fdb0364802e817d760850bc5c997c95)  

 

bool 

[Validate](interface_b_f_g_s_d_k_1_1_i_promo_code.html#aa4069bb614bfdfe60236a558729a88d6)
(string promoCode, int validationId, string nativeMessagesReceiverName,
string receiversSuccessListenerName, string receiversErrorListenerName)

 

Interface to validate Promo Codes.
[More...](interface_b_f_g_s_d_k_1_1_i_promo_code.html#aa4069bb614bfdfe60236a558729a88d6)  

 

## Member Function Documentation

## [◆ ](#a5fdb0364802e817d760850bc5c997c95)Validate()

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
<td>bool BFGSDK.AndroidPromoCode.Validate</td>
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

Android implementation of
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
