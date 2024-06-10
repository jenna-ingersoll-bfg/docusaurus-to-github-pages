  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgSettings](class_b_f_g_s_d_k_1_1bfg_settings.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_settings-members.html)

BFGSDK.bfgSettings Class Reference

##  Static Public Member Functions

static bool 

[getBoolean](class_b_f_g_s_d_k_1_1bfg_settings.html#a8effa41a50d9836de84f01b562d4c4c8)
(string key, bool withDefault)

 

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual boolean value.
[More...](class_b_f_g_s_d_k_1_1bfg_settings.html#a8effa41a50d9836de84f01b562d4c4c8)  

 

static double 

[getDouble](class_b_f_g_s_d_k_1_1bfg_settings.html#aa832915ac16f6088788e18854a9679ed)
(string key, double withDefault)

 

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual double value.
[More...](class_b_f_g_s_d_k_1_1bfg_settings.html#aa832915ac16f6088788e18854a9679ed)  

 

static int 

[getInteger](class_b_f_g_s_d_k_1_1bfg_settings.html#a38a10e20e7108013895c53c0f611f044)
(string key, int withDefault)

 

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual integer value.
[More...](class_b_f_g_s_d_k_1_1bfg_settings.html#a38a10e20e7108013895c53c0f611f044)  

 

static long 

[getLong](class_b_f_g_s_d_k_1_1bfg_settings.html#a00839a5723a02d8c51f7a84f312a3c63)
(string key, long withDefault)

 

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual long value.
[More...](class_b_f_g_s_d_k_1_1bfg_settings.html#a00839a5723a02d8c51f7a84f312a3c63)  

 

static string 

[getString](class_b_f_g_s_d_k_1_1bfg_settings.html#a4b411dd9da4ed49833192fa900acf019)
(string key, string withDefault)

 

This version of the get() method lets the caller avoid having to do
casting in order to get at the string value.
[More...](class_b_f_g_s_d_k_1_1bfg_settings.html#a4b411dd9da4ed49833192fa900acf019)  

 

## Member Function Documentation

## [◆ ](#a8effa41a50d9836de84f01b562d4c4c8)getBoolean()

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
<td>static bool BFGSDK.bfgSettings.getBoolean</td>
<td>(</td>
<td>string </td>
<td><em>key</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>bool </td>
<td><em>withDefault</em> </td>
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

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual boolean value.

  - Parameters
    
    |             |                                                   |
    | ----------- | ------------------------------------------------- |
    | key         | String whose associated object is to be returned. |
    | withDefault | Boolean value to return if the key is not found.  |
    

<!-- end list -->

  - Returns  
    Value as a primitive boolean. TRUE if boolean TRUE or Integer
    non-zero (e.g., 0/1 for FALSE/TRUE) NOTE: Integer 0/1 is supported
    for compatibility with older code that stored booleans as 0/1
    integers.

## [◆ ](#aa832915ac16f6088788e18854a9679ed)getDouble()

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
<td>static double BFGSDK.bfgSettings.getDouble</td>
<td>(</td>
<td>string </td>
<td><em>key</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>double </td>
<td><em>withDefault</em> </td>
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

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual double value.

  - Parameters
    
    |             |                                                   |
    | ----------- | ------------------------------------------------- |
    | key         | String whose associated object is to be returned. |
    | withDefault | Integer value to return if the key is not found.  |
    

<!-- end list -->

  - Returns  
    Value as a primitive double.

## [◆ ](#a38a10e20e7108013895c53c0f611f044)getInteger()

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
<td>static int BFGSDK.bfgSettings.getInteger</td>
<td>(</td>
<td>string </td>
<td><em>key</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>int </td>
<td><em>withDefault</em> </td>
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

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual integer value.

  - Parameters
    
    |             |                                                   |
    | ----------- | ------------------------------------------------- |
    | key         | String whose associated object is to be returned. |
    | withDefault | Integer value to return if the key is not found.  |
    

<!-- end list -->

  - Returns  
    Value as a primitive integer.

## [◆ ](#a00839a5723a02d8c51f7a84f312a3c63)getLong()

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
<td>static long BFGSDK.bfgSettings.getLong</td>
<td>(</td>
<td>string </td>
<td><em>key</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>long </td>
<td><em>withDefault</em> </td>
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

This version of the get() method lets the caller avoid having to do
casting in order to get at the actual long value.

  - Parameters
    
    |             |                                                   |
    | ----------- | ------------------------------------------------- |
    | key         | String whose associated object is to be returned. |
    | withDefault | Long value to return if the key is not found.     |
    

<!-- end list -->

  - Returns  
    Value as a primitive long.

## [◆ ](#a4b411dd9da4ed49833192fa900acf019)getString()

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
<td>static string BFGSDK.bfgSettings.getString</td>
<td>(</td>
<td>string </td>
<td><em>key</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>withDefault</em> </td>
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

This version of the get() method lets the caller avoid having to do
casting in order to get at the string value.

  - Parameters
    
    |             |                                                   |
    | ----------- | ------------------------------------------------- |
    | key         | String whose associated object is to be returned. |
    | withDefault | String to return if the key is not found.         |
    

<!-- end list -->

  - Returns  
    Value as a string object or the withDefault value if it does not
    exist.
