  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [WaitingValidationListeners](class_b_f_g_s_d_k_1_1_waiting_validation_listeners.html)
  - [NoneMatchingListener](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html)

[Public Member Functions](#pub-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener-members.html)

BFGSDK.WaitingValidationListeners.NoneMatchingListener Class Reference

Inheritance diagram for
BFGSDK.WaitingValidationListeners.NoneMatchingListener:

![](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.png)

##  Public Member Functions

void 

[OnValidateSuccess](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html#ac7d9ce8a6b069acbf1bc57d385407fb7)
(string jsonSuccessResult)

 

This is invoked asynchronously when the promo code has been validated
and a JSON payload is available.
[More...](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html#ac7d9ce8a6b069acbf1bc57d385407fb7)  

 

void 

[OnValidateFailure](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html#a67d7b8589c842a8be5bbc153e74b96a5)
(string jsonErrorResult)

 

This is invoked asynchronously if the promo code is invalid or a network
error occurred.
[More...](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html#a67d7b8589c842a8be5bbc153e74b96a5)  

 

void 

[OnValidateSuccess](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html#a05e24dab31ec1fcea92ed9839fbd123c)
(string jsonSuccessResult)

 

This is invoked asynchronously when the promo code has been validated
and a JSON payload is available.
[More...](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html#a05e24dab31ec1fcea92ed9839fbd123c)  

 

void 

[OnValidateFailure](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html#aa5e545dee434ba42132b5a3b7d0d327c)
(string jsonErrorResult)

 

This is invoked asynchronously if the promo code is invalid or a network
error occurred.
[More...](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html#aa5e545dee434ba42132b5a3b7d0d327c)  

 

## Member Function Documentation

## [◆ ](#a67d7b8589c842a8be5bbc153e74b96a5)OnValidateFailure()

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
<td>void BFGSDK.WaitingValidationListeners.NoneMatchingListener.OnValidateFailure</td>
<td>(</td>
<td>string </td>
<td><em>jsonErrorResult</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

This is invoked asynchronously if the promo code is invalid or a network
error occurred.

  - Parameters
    
    <table>
    <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
    </colgroup>
    <tbody>
    <tr class="odd">
    <td>jsonErrorResult</td>
    <td>JSON representing what kind of error occurred. It will be in the format
    <div class="fragment">
    <div class="line">
    {<span class="stringliteral">"errorCode"</span>: <span class="stringliteral">"abbreviated"</span>, <span class="stringliteral">"errorMessage"</span>: <span class="stringliteral">"Description here"</span>}
    </div>
    </div></td>
    </tr>
    </tbody>
    </table>

Implements
[BFGSDK.IPromoCodeListener](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html#aa5e545dee434ba42132b5a3b7d0d327c).

## [◆ ](#ac7d9ce8a6b069acbf1bc57d385407fb7)OnValidateSuccess()

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
<td>void BFGSDK.WaitingValidationListeners.NoneMatchingListener.OnValidateSuccess</td>
<td>(</td>
<td>string </td>
<td><em>jsonSuccessResult</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

This is invoked asynchronously when the promo code has been validated
and a JSON payload is available.

  - Parameters
    
    |                   |                                                                                                                            |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
    | jsonSuccessResult | The JSON payload from the service that the game should know how to parse since it was made by one of the game's producers. |
    

Implements
[BFGSDK.IPromoCodeListener](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html#a05e24dab31ec1fcea92ed9839fbd123c).
