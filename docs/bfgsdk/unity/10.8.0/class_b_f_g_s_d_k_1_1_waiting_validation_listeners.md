  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [WaitingValidationListeners](class_b_f_g_s_d_k_1_1_waiting_validation_listeners.html)

[Classes](#nested-classes) | [Public Member Functions](#pub-methods) |
[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_waiting_validation_listeners-members.html)

BFGSDK.WaitingValidationListeners Class Reference

##  Classes

class  

[NoneMatchingListener](class_b_f_g_s_d_k_1_1_waiting_validation_listeners_1_1_none_matching_listener.html)

 

##  Public Member Functions

void 

**AddListener** (int validationId,
[IPromoCodeListener](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html)
promoCodeListener)

 

void 

**RemoveListenerWithId** (int validationId)

 

bool 

**ContainsIdentifierWithId** (int validationId)

 

[IPromoCodeListener](interface_b_f_g_s_d_k_1_1_i_promo_code_listener.html) 

**GetListener** (int validationId)

 

##  Static Public Member Functions

static
[WaitingValidationListeners](class_b_f_g_s_d_k_1_1_waiting_validation_listeners.html) 

**GetInstance** ()
