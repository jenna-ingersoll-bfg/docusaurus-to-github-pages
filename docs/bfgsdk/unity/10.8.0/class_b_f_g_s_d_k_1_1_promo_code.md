  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [PromoCode](class_b_f_g_s_d_k_1_1_promo_code.html)

[Public Member Functions](#pub-methods) | [Properties](#properties) |
[List of all members](class_b_f_g_s_d_k_1_1_promo_code-members.html)

BFGSDK.PromoCode Class Reference

Validates promotional codes to asynchronously return JSON formatted
payloads associated with them.
[More...](class_b_f_g_s_d_k_1_1_promo_code.html#details)

##  Public Member Functions

void 

[Validate](class_b_f_g_s_d_k_1_1_promo_code.html#a7b6080eace862d6917b7d512dfcbcd65)
(string promoCode,
[IPromoCodeListener](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html)
listener)

 

Asynchronously validate the promoCode to receive the JSON associated
with it. The listener's success method receives a JSON formatted String
(format is not checked by the SDK) defined by the game
developers/producers. The listener's failure method can receive a JSON
formatted String (format is not checked by the SDK) that holds a code
and message associated with the error that occurred.
[More...](class_b_f_g_s_d_k_1_1_promo_code.html#a7b6080eace862d6917b7d512dfcbcd65)  

 

##  Properties

static [PromoCode](class_b_f_g_s_d_k_1_1_promo_code.html) 

**Instance**`  [get] `

 

Retrieve a reference to the
[PromoCode](class_b_f_g_s_d_k_1_1_promo_code.html "Validates promotional codes to asynchronously return JSON formatted payloads associated with them.")
singleton instance.  

 

## Detailed Description

Validates promotional codes to asynchronously return JSON formatted
payloads associated with them.

Promotional codes must be validated using the class's Validate method.
The promotional code may be expired or already redeemed enough times to
reach the limit set for it in TackleBox, an error response will be sent
in these cases.

## Member Function Documentation

## [◆ ](#a7b6080eace862d6917b7d512dfcbcd65)Validate()

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
<td>void BFGSDK.PromoCode.Validate</td>
<td>(</td>
<td>string </td>
<td><em>promoCode</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td><a href="interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html" class="el">IPromoCodeListener</a> </td>
<td><em>listener</em> </td>
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

Asynchronously validate the promoCode to receive the JSON associated
with it. The listener's success method receives a JSON formatted String
(format is not checked by the SDK) defined by the game
developers/producers. The listener's failure method can receive a JSON
formatted String (format is not checked by the SDK) that holds a code
and message associated with the error that occurred.

An example of a valid payload would be the following:

\{

"rewardType": "coins",

"coins": "1000"

}

An example of an error payload would be the following:

\{

"errorCode": "abbreviated",

"errorMessage": "Description here"

}

  - Parameters
    
    |           |                                                       |
    | --------- | ----------------------------------------------------- |
    | promoCode | The promo code to vadalidate                          |
    | listener  | The listener to receive the results of the validation |
