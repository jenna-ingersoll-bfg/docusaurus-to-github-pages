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

 

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
