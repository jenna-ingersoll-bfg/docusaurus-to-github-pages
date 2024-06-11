  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [IPromoCode](interface_b_f_g_s_d_k_1_1_i_promo_code.html)

[Public Member Functions](#pub-methods) | [List of all
members](interface_b_f_g_s_d_k_1_1_i_promo_code-members.html)

BFGSDK.IPromoCode Interface Reference

Inheritance diagram for BFGSDK.IPromoCode:


##  Public Member Functions

bool 

[Validate](interface_b_f_g_s_d_k_1_1_i_promo_code.html#aa4069bb614bfdfe60236a558729a88d6)
(string promoCode, int validationId, string nativeMessagesReceiverName,
string receiversSuccessListenerName, string receiversErrorListenerName)

 

Interface to validate Promo Codes.
[More...](interface_b_f_g_s_d_k_1_1_i_promo_code.html#aa4069bb614bfdfe60236a558729a88d6)  

 

## Member Function Documentation

## [◆ ](#aa4069bb614bfdfe60236a558729a88d6)Validate()

|                                 |   |        |                                 |
| ------------------------------- | - | ------ | ------------------------------- |
| bool BFGSDK.IPromoCode.Validate | ( | string | *promoCode*,                    |
|                                 |   | int    | *validationId*,                 |
|                                 |   | string | *nativeMessagesReceiverName*,   |
|                                 |   | string | *receiversSuccessListenerName*, |
|                                 |   | string | *receiversErrorListenerName*    |
|                                 | ) |        |                                 |

Interface to validate Promo Codes.

  - Parameters
    
    |                              |  |
    | ---------------------------- |  |
    | promoCode                    |  |
    | validationId                 |  |
    | nativeMessagesReceiverName   |  |
    | receiversSuccessListenerName |  |
    | receiversErrorListenerName   |  |
    

Implemented in
[BFGSDK.AndroidPromoCode](class_b_f_g_s_d_k_1_1_android_promo_code.html#a5fdb0364802e817d760850bc5c997c95),
[BFGSDK.EditorPromoCode](class_b_f_g_s_d_k_1_1_editor_promo_code.html#ae73535bb2257dbc0eafbadd083337c89),
[BFGSDK.iOSPromoCode](class_b_f_g_s_d_k_1_1i_o_s_promo_code.html#adf7444bb9b8fe74bdee73a6fe33d057c),
and
[BFGSDK.StandalonePromoCode](class_b_f_g_s_d_k_1_1_standalone_promo_code.html#ac4b3142b9e5af9005e6c869ec0bd02ce).
