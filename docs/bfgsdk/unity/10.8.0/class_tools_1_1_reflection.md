  - [Tools](namespace_tools.html)
  - [Reflection](class_tools_1_1_reflection.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_tools_1_1_reflection-members.html)

Tools.Reflection Class Reference

##  Static Public Member Functions

static void 

[InvokePrivateInstanceMethod\< T
\>](class_tools_1_1_reflection.html#a4da25acf1998dbb27b4a99242b276673)
(T instance, string methodName)

 

Invokes the instance method. This is intended for methods that don't
have parameters.
[More...](class_tools_1_1_reflection.html#a4da25acf1998dbb27b4a99242b276673)  

 

static void 

[InvokePrivateInstanceMethod\< T
\>](class_tools_1_1_reflection.html#aabce3f0f6c38fa458074fbfab27d2277)
(T instance, string methodName, object\[\] argValues)

 

Invokes the instance method. This is intended for methods with
parameters.
[More...](class_tools_1_1_reflection.html#aabce3f0f6c38fa458074fbfab27d2277)  

 

## Member Function Documentation

## [◆ ](#a4da25acf1998dbb27b4a99242b276673)InvokePrivateInstanceMethod\< T \>() \[1/2\]

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
<td>static void Tools.Reflection.InvokePrivateInstanceMethod&lt; T &gt;</td>
<td>(</td>
<td>T </td>
<td><em>instance</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>methodName</em> </td>
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

Invokes the instance method. This is intended for methods that don't
have parameters.

  - Parameters
    
    |            |              |
    | ---------- | ------------ |
    | instance   | Instance.    |
    | methodName | Method name. |
    

<!-- end list -->

  - Template Parameters
    
    |   |                         |
    | - | ----------------------- |
    | T | The 1st type parameter. |
    

## [◆ ](#aabce3f0f6c38fa458074fbfab27d2277)InvokePrivateInstanceMethod\< T \>() \[2/2\]

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
<td>static void Tools.Reflection.InvokePrivateInstanceMethod&lt; T &gt;</td>
<td>(</td>
<td>T </td>
<td><em>instance</em>,</td>
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
<td>object[] </td>
<td><em>argValues</em> </td>
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

Invokes the instance method. This is intended for methods with
parameters.

  - Parameters
    
    |            |              |
    | ---------- | ------------ |
    | instance   | Instance.    |
    | methodName | Method name. |
    

<!-- end list -->

  - Template Parameters
    
    |   |                         |
    | - | ----------------------- |
    | T | The 1st type parameter. |
