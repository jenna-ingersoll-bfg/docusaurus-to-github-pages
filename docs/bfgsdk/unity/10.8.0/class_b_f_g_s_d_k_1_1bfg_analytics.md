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
  - [bfgAnalytics](class_b_f_g_s_d_k_1_1bfg_analytics.html)

[Classes](#nested-classes) | [Static Public Member
Functions](#pub-static-methods) | [Properties](#properties) | [List of
all members](class_b_f_g_s_d_k_1_1bfg_analytics-members.html)

BFGSDK.bfgAnalytics Class Reference

API for interfacing with BFG-managed Firebase Analytics.
[More...](class_b_f_g_s_d_k_1_1bfg_analytics.html#details)

##  Classes

struct  

[InitializationResult](struct_b_f_g_s_d_k_1_1bfg_analytics_1_1_initialization_result.html)

 

Struct indicating the result of a
[bfgAnalytics](class_b_f_g_s_d_k_1_1bfg_analytics.html "API for interfacing with BFG-managed Firebase Analytics.")
initialization attempt.
[More...](struct_b_f_g_s_d_k_1_1bfg_analytics_1_1_initialization_result.html#details)  

 

##  Static Public Member Functions

static async Task\<
[InitializationResult](struct_b_f_g_s_d_k_1_1bfg_analytics_1_1_initialization_result.html)
\> 

[InitializeAsync](class_b_f_g_s_d_k_1_1bfg_analytics.html#a327774162869dc5ec1a42fea7afb0cda)
()

 

Initialize and configure Firebase Analytics. Must be called prior to any
other
[bfgAnalytics](class_b_f_g_s_d_k_1_1bfg_analytics.html "API for interfacing with BFG-managed Firebase Analytics.")
methods.
[More...](class_b_f_g_s_d_k_1_1bfg_analytics.html#a327774162869dc5ec1a42fea7afb0cda)  

 

static void 

**Shutdown** ()

 

Disables Firebase analytics and releases any managed
handles/resources.  

 

##  Properties

static bool 

**ArePoliciesAccepted**`  [get] `

 

## Detailed Description

API for interfacing with BFG-managed Firebase Analytics.

## Member Function Documentation

## [◆ ](#a327774162869dc5ec1a42fea7afb0cda)InitializeAsync()

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
<td>static async Task&lt; <a href="struct_b_f_g_s_d_k_1_1bfg_analytics_1_1_initialization_result.html" class="el">InitializationResult</a> &gt; BFGSDK.bfgAnalytics.InitializeAsync</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Initialize and configure Firebase Analytics. Must be called prior to any
other
[bfgAnalytics](class_b_f_g_s_d_k_1_1bfg_analytics.html "API for interfacing with BFG-managed Firebase Analytics.")
methods.

  - Returns  
    Task used to track the asynchronous initialization operation.

[bfgAnalytics.InitializeAsync()](class_b_f_g_s_d_k_1_1bfg_analytics.html#a327774162869dc5ec1a42fea7afb0cda "Initialize and configure Firebase Analytics. Must be called prior to any other bfgAnalytics methods.").ContinueWith(task
=\> { if (task.Result.Succeeded) { // OK to use
[bfgAnalytics](class_b_f_g_s_d_k_1_1bfg_analytics.html "API for interfacing with BFG-managed Firebase Analytics.")
methods } else { // Not OK to use
[bfgAnalytics](class_b_f_g_s_d_k_1_1bfg_analytics.html "API for interfacing with BFG-managed Firebase Analytics.")
methods Debug.LogError($"Failed to initialize Firebase analytics:
{task.Result}"); } });

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
