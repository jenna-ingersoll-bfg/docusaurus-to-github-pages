  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [IPromoCodeListener](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html)

[Public Member Functions](#pub-methods) | [List of all
members](interface_b_f_g_s_d_k_1_1_i_promo_code_listener-members.html)

BFGSDK.IPromoCodeListener Interface Reference

Receives the result of validating a promotional code.
[More...](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html#details)

Inheritance diagram for BFGSDK.IPromoCodeListener:


##  Public Member Functions

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

 

## Detailed Description

Receives the result of validating a promotional code.

Is passed into the
[PromoCode.Validate](class_b_f_g_s_d_k_1_1_promo_code.html#a7b6080eace862d6917b7d512dfcbcd65 "Asynchronously validate the promoCode to receive the JSON associated with it. The listener's success ...")
method to receive either the payload associated with the promotional
code, or a payload describing how the validation failed. The payload
includes the errorType which can be one of the following:

  - invalidPromo (The promotional code was null or empty)
  - notInit (The SDK wasn't finished initializing)
  - noConnection (There wasn't a connection before starting validation)
  - timeout (The validation timed out)
  - GP7011 (Access Denied)
  - GP7008 (Invalid Redmeption)
  - GP7004 (Non-Existent Promo Code)
  - GP3002 (Gametoken doesn't match any)
  - invHeaders (One or more validation headers is incorrect)
  - invSig (The validation response was edited)
  - misc (An unspecified problem occurred)

The following error codes can also be returned for iOS.

  - connectionError (An unchecked URL error occurred)
  - connectionLost (Connection was lost during validation)

## Member Function Documentation

## [◆ ](#aa5e545dee434ba42132b5a3b7d0d327c)OnValidateFailure()

|                                                  |   |        |                   |   |  |
| ------------------------------------------------ | - | ------ | ----------------- | - |  |
| void BFGSDK.IPromoCodeListener.OnValidateFailure | ( | string | *jsonErrorResult* | ) |  |

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
    \{<span class="stringliteral">"errorCode"</span>: <span class="stringliteral">"abbreviated"</span>, <span class="stringliteral">"errorMessage"</span>: <span class="stringliteral">"Description here"</span>\}
    </div>
    </div></td>
    </tr>
    </tbody>
    </table>

Implemented in
[BFGSDK.WaitingValidationListeners.NoneMatchingListener](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html#a67d7b8589c842a8be5bbc153e74b96a5).

## [◆ ](#a05e24dab31ec1fcea92ed9839fbd123c)OnValidateSuccess()

|                                                  |   |        |                     |   |  |
| ------------------------------------------------ | - | ------ | ------------------- | - |  |
| void BFGSDK.IPromoCodeListener.OnValidateSuccess | ( | string | *jsonSuccessResult* | ) |  |

This is invoked asynchronously when the promo code has been validated
and a JSON payload is available.

  - Parameters
    
    |                   |                                                                                                                            |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
    | jsonSuccessResult | The JSON payload from the service that the game should know how to parse since it was made by one of the game's producers. |
    

Implemented in
[BFGSDK.WaitingValidationListeners.NoneMatchingListener](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html#ac7d9ce8a6b069acbf1bc57d385407fb7).
