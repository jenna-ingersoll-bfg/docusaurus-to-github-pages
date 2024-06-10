  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [AndroidCallUtility](class_b_f_g_s_d_k_1_1_android_call_utility.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_android_call_utility-members.html)

BFGSDK.AndroidCallUtility Class Reference

This is the wrapper class that lets us call into static Android methods.
[More...](class_b_f_g_s_d_k_1_1_android_call_utility.html#details)

##  Static Public Member Functions

static void 

[CallStatic](class_b_f_g_s_d_k_1_1_android_call_utility.html#a221c6bb009742fd0b1d69866f108f99a)
(string className, string methodName, params object\[\] args)

 

This version of the
[CallStatic()](class_b_f_g_s_d_k_1_1_android_call_utility.html#a221c6bb009742fd0b1d69866f108f99a "This version of the CallStatic() method lets the user call into a native Java method with provided ar...")
method lets the user call into a native Java method with provided
arguments and expects no return value from the native Java method
[More...](class_b_f_g_s_d_k_1_1_android_call_utility.html#a221c6bb009742fd0b1d69866f108f99a)  

 

static T 

[CallStatic\< T
\>](class_b_f_g_s_d_k_1_1_android_call_utility.html#ad3cdaa4259df4c135d13457e1497d49b)
(string className, string methodName, params object\[\] args)

 

This version of the
[CallStatic()](class_b_f_g_s_d_k_1_1_android_call_utility.html#a221c6bb009742fd0b1d69866f108f99a "This version of the CallStatic() method lets the user call into a native Java method with provided ar...")
method lets the user call into a native Java method with provided
arguments and expects a user-specified return value from the native Java
method
[More...](class_b_f_g_s_d_k_1_1_android_call_utility.html#ad3cdaa4259df4c135d13457e1497d49b)  

 

## Detailed Description

This is the wrapper class that lets us call into static Android methods.

## Member Function Documentation

## [◆ ](#a221c6bb009742fd0b1d69866f108f99a)CallStatic()

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
<td>static void BFGSDK.AndroidCallUtility.CallStatic</td>
<td>(</td>
<td>string </td>
<td><em>className</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>methodName</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>params object[] </td>
<td><em>args</em> </td>
</tr>
<tr class="even">
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

This version of the
[CallStatic()](class_b_f_g_s_d_k_1_1_android_call_utility.html#a221c6bb009742fd0b1d69866f108f99a "This version of the CallStatic() method lets the user call into a native Java method with provided ar...")
method lets the user call into a native Java method with provided
arguments and expects no return value from the native Java method

  - Parameters
    
    |            |                                                                       |
    | ---------- | --------------------------------------------------------------------- |
    | className  | The name of the native Java class containing the method to be called. |
    | methodName | The name of the native Java method to be called.                      |
    | args       | The parameters to be passed to the native Java method.                |
    

## [◆ ](#ad3cdaa4259df4c135d13457e1497d49b)CallStatic\< T \>()

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
<td>static T <a href="class_b_f_g_s_d_k_1_1_android_call_utility.html#a221c6bb009742fd0b1d69866f108f99a" class="el">BFGSDK.AndroidCallUtility.CallStatic</a>&lt; T &gt;</td>
<td>(</td>
<td>string </td>
<td><em>className</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>methodName</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>params object[] </td>
<td><em>args</em> </td>
</tr>
<tr class="even">
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

This version of the
[CallStatic()](class_b_f_g_s_d_k_1_1_android_call_utility.html#a221c6bb009742fd0b1d69866f108f99a "This version of the CallStatic() method lets the user call into a native Java method with provided ar...")
method lets the user call into a native Java method with provided
arguments and expects a user-specified return value from the native Java
method

  - Parameters
    
    |            |                                                                       |
    | ---------- | --------------------------------------------------------------------- |
    | className  | The name of the native Java class containing the method to be called. |
    | methodName | The name of the native Java method to be called.                      |
    | args       | The parameters to be passed to the native Java method.                |
    

<!-- end list -->

  - Returns  
    The user-specified type return value from the native Java call.
