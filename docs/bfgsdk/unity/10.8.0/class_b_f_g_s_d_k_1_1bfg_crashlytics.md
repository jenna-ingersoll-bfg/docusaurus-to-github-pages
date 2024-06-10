  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgCrashlytics](class_b_f_g_s_d_k_1_1bfg_crashlytics.html)

[Classes](#nested-classes) | [Static Public Member
Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_crashlytics-members.html)

BFGSDK.bfgCrashlytics Class Reference

API for interfacing with BFG-managed Crashlytics.
[More...](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#details)

##  Classes

struct  

[InitializationResult](struct_b_f_g_s_d_k_1_1bfg_crashlytics_1_1_initialization_result.html)

 

Struct indicating the result of a
[bfgCrashlytics](class_b_f_g_s_d_k_1_1bfg_crashlytics.html "API for interfacing with BFG-managed Crashlytics.")
initialization attempt.
[More...](struct_b_f_g_s_d_k_1_1bfg_crashlytics_1_1_initialization_result.html#details)  

 

##  Static Public Member Functions

static async Task\<
[InitializationResult](struct_b_f_g_s_d_k_1_1bfg_crashlytics_1_1_initialization_result.html)
\> 

[InitializeAsync](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#a6013b0ba541302c309d096a6d92099d1)
()

 

Initialize and configure Crashlytics. Must be called prior to any other
[bfgCrashlytics](class_b_f_g_s_d_k_1_1bfg_crashlytics.html "API for interfacing with BFG-managed Crashlytics.")
methods.
[More...](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#a6013b0ba541302c309d096a6d92099d1)  

 

static void 

**Shutdown** ()

 

Disables Crashlytics and releases any managed handles/resources.  

 

static void 

[Log](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#a3a072e21e6fce8ee080e2092f210364a)
(string message)

 

Adds logging that is sent with your crash data. The logging is only
visible in the Crashlytics dashboard.
[More...](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#a3a072e21e6fce8ee080e2092f210364a)  

 

static void 

[LogException](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#ae63bef754ac97b6f39089fbb37351440)
(Exception exception)

 

Records a non-fatal event. The events are grouped and displayed
similarly to crashes. Keep in mind that this method can be expensive.
The total number of events that can be recorded during your app's
life-cycle is limited by a fixed-size circular buffer. If the buffer is
overrun, the oldest data is dropped. Errors are relayed to Crashlytics
on a subsequent launch of your application.
[More...](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#ae63bef754ac97b6f39089fbb37351440)  

 

static void 

[SetCustomKey](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#ad9d86732aacef0ce5802b1d38fa0f7ff)
(string key, string value)

 

Records a custom key and value to be associated with subsequent fatal
and non-fatal reports. Multiple calls to this method with the same key
will update the value for that key. The value of any key at the time of
a fatal or non-fatal event will be associated with that event.
[More...](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#ad9d86732aacef0ce5802b1d38fa0f7ff)  

 

## Detailed Description

API for interfacing with BFG-managed Crashlytics.

## Member Function Documentation

## [◆ ](#a6013b0ba541302c309d096a6d92099d1)InitializeAsync()

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
<td>static async Task&lt; <a href="struct_b_f_g_s_d_k_1_1bfg_crashlytics_1_1_initialization_result.html" class="el">InitializationResult</a> &gt; BFGSDK.bfgCrashlytics.InitializeAsync</td>
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

Initialize and configure Crashlytics. Must be called prior to any other
[bfgCrashlytics](class_b_f_g_s_d_k_1_1bfg_crashlytics.html "API for interfacing with BFG-managed Crashlytics.")
methods.

  - Returns  
    Task used to track the asynchronous initialization operation.

[bfgCrashlytics.InitializeAsync()](class_b_f_g_s_d_k_1_1bfg_crashlytics.html#a6013b0ba541302c309d096a6d92099d1 "Initialize and configure Crashlytics. Must be called prior to any other bfgCrashlytics methods.").ContinueWith(task
=\> { if (task.Result.Succeeded) { // OK to use
[bfgCrashlytics](class_b_f_g_s_d_k_1_1bfg_crashlytics.html "API for interfacing with BFG-managed Crashlytics.")
methods } else { // Not OK to use
[bfgCrashlytics](class_b_f_g_s_d_k_1_1bfg_crashlytics.html "API for interfacing with BFG-managed Crashlytics.")
methods Debug.LogError($"Failed to initialize crashlytics:
{task.Result}"); } });

## [◆ ](#a3a072e21e6fce8ee080e2092f210364a)Log()

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
<td>static void BFGSDK.bfgCrashlytics.Log</td>
<td>(</td>
<td>string </td>
<td><em>message</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Adds logging that is sent with your crash data. The logging is only
visible in the Crashlytics dashboard.

  - Parameters
    
    |         |                     |
    | ------- | ------------------- |
    | message | The message to log. |
    

## [◆ ](#ae63bef754ac97b6f39089fbb37351440)LogException()

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
<td>static void BFGSDK.bfgCrashlytics.LogException</td>
<td>(</td>
<td>Exception </td>
<td><em>exception</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Records a non-fatal event. The events are grouped and displayed
similarly to crashes. Keep in mind that this method can be expensive.
The total number of events that can be recorded during your app's
life-cycle is limited by a fixed-size circular buffer. If the buffer is
overrun, the oldest data is dropped. Errors are relayed to Crashlytics
on a subsequent launch of your application.

  - Parameters
    
    |           |                                                                                        |
    | --------- | -------------------------------------------------------------------------------------- |
    | exception | A C\# Exception object that will be transformed to a native error for iOS and Android. |
    

## [◆ ](#ad9d86732aacef0ce5802b1d38fa0f7ff)SetCustomKey()

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
<td>static void BFGSDK.bfgCrashlytics.SetCustomKey</td>
<td>(</td>
<td>string </td>
<td><em>key</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>value</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Records a custom key and value to be associated with subsequent fatal
and non-fatal reports. Multiple calls to this method with the same key
will update the value for that key. The value of any key at the time of
a fatal or non-fatal event will be associated with that event.

A maximum of 64 key/value pairs can be written, and new keys added
beyond that limit will be ignored. Keys or values that exceed 1024
characters will be truncated.

  - Parameters
    
    |       |                                                                                                                                                                                          |
    | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | key   | A unique key                                                                                                                                                                             |
    | value | A value to be associated with the given key. This can be any of the following data types: String, int or Integer, boolean or Boolean, float or Float, double or Double, or long or Long. |
