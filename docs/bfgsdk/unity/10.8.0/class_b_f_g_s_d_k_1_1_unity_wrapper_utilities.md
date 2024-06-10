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
  - [UnityWrapperUtilities](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities-members.html)

BFGSDK.UnityWrapperUtilities Class Reference

This class defines utilities to simplify the process of serializing and
deserializing Json.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#details)

##  Static Public Member Functions

static string 

[ConvertDictionaryOfStringsToJsonString](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#af18aa882bea0a94159018087ab637eaa)
(Dictionary\< string, string \> dictionaryOfStrings)

 

This method creates a Json string representation of a dictionary of
strings.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#af18aa882bea0a94159018087ab637eaa)  

 

static string 

[ConvertDictionaryToJsonString\< TKey, TValue
\>](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a7e00c6b18ac059daaff098f1409222eb)
(Dictionary\< TKey, TValue \> genericDictionary)

 

Generic method that creates a Json string representation of a dictionary
with any type.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a7e00c6b18ac059daaff098f1409222eb)  

 

static string 

[ConvertArrayOfStringsToJsonString](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a5c3ed6f4cf762ebe7c5a5ee8aed790c4)
(List\< string \> listOfStrings)

 

This method creates a Json string representation of a list of strings.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a5c3ed6f4cf762ebe7c5a5ee8aed790c4)  

 

static string 

[ConvertObjectToJsonString](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a6c05ba5d1e0626bc744c966f4c846153)
(System.Object objectToSerialize)

 

This method creates a Json string representation of an object.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a6c05ba5d1e0626bc744c966f4c846153)  

 

static TKey\[\] 

[GetDictionaryKeysAsArray\< TKey, TValue
\>](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a79331ad4cb70c60534fe305054b12474)
(Dictionary\< TKey, TValue \> genericDictionary)

 

This method returns the keys of a dictionary as an array.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a79331ad4cb70c60534fe305054b12474)  

 

static TValue\[\] 

[GetDictionaryValuesAsArray\< TKey, TValue
\>](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a1f86c0e513da4f3e3b00fb89e3d3a65a)
(Dictionary\< TKey, TValue \> genericDictionary)

 

This method returns the values of a dictionary as an array.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a1f86c0e513da4f3e3b00fb89e3d3a65a)  

 

static Dictionary\< TKey, TValue \> 

[GetDictionaryFromKeyValueArrays\< TKey, TValue
\>](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a53b3a0cee2d3248ac0d05c7cc52a8cab)
(TKey\[\] keys, TValue\[\] values)

 

This method constructs a dictionary from an array of keys and an array
of values.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a53b3a0cee2d3248ac0d05c7cc52a8cab)  

 

static Dictionary\< string, string \> 

[ConvertJsonToDictionary](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a438a63f17e2eea9bffec3c776cf985fe)
(string json)

 

This method deserializes a Json string into a flat dictionary.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a438a63f17e2eea9bffec3c776cf985fe)  

 

static Dictionary\< string, object \> 

[ConvertJsonToNestedDictionary](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a931b42e130addec835dbdc575f8a9343)
(string json)

 

This method deserializes a Json string into a nested dictionary.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a931b42e130addec835dbdc575f8a9343)  

 

static string 

[DecryptBase64Json](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a29360d6003c4ba11f08ec42cae7f9db3)
(string base64String)

 

This method decrypts a string in base 64 format.
[More...](class_b_f_g_s_d_k_1_1_unity_wrapper_utilities.html#a29360d6003c4ba11f08ec42cae7f9db3)  

 

## Detailed Description

This class defines utilities to simplify the process of serializing and
deserializing Json.

## Member Function Documentation

## [◆ ](#a5c3ed6f4cf762ebe7c5a5ee8aed790c4)ConvertArrayOfStringsToJsonString()

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
<td>static string BFGSDK.UnityWrapperUtilities.ConvertArrayOfStringsToJsonString</td>
<td>(</td>
<td>List&lt; string &gt; </td>
<td><em>listOfStrings</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method creates a Json string representation of a list of strings.

  - Parameters
    
    |               |                    |
    | ------------- | ------------------ |
    | listOfStrings | A list of strings. |
    

<!-- end list -->

  - Returns  
    A Json representation of the given list.

## [◆ ](#af18aa882bea0a94159018087ab637eaa)ConvertDictionaryOfStringsToJsonString()

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
<td>static string BFGSDK.UnityWrapperUtilities.ConvertDictionaryOfStringsToJsonString</td>
<td>(</td>
<td>Dictionary&lt; string, string &gt; </td>
<td><em>dictionaryOfStrings</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method creates a Json string representation of a dictionary of
strings.

  - Parameters
    
    |                     |                                               |
    | ------------------- | --------------------------------------------- |
    | dictionaryOfStrings | A dictionary with keys and values as strings. |
    

<!-- end list -->

  - Returns  
    A Json string representing the given dictionary.

## [◆ ](#a7e00c6b18ac059daaff098f1409222eb)ConvertDictionaryToJsonString\< TKey, TValue \>()

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
<td>static string BFGSDK.UnityWrapperUtilities.ConvertDictionaryToJsonString&lt; TKey, TValue &gt;</td>
<td>(</td>
<td>Dictionary&lt; TKey, TValue &gt; </td>
<td><em>genericDictionary</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Generic method that creates a Json string representation of a dictionary
with any type.

  - Template Parameters
    
    |        |                                                   |
    | ------ | ------------------------------------------------- |
    | TKey   | The type for the key entries of the dictionary.   |
    | TValue | The type for the value entries of the dictionary. |
    

<!-- end list -->

  - Parameters
    
    |                   |                                            |
    | ----------------- | ------------------------------------------ |
    | genericDictionary | A dictionary with generic keys and values. |
    

<!-- end list -->

  - Returns  
    A Json string representation of the given dictionary.

## [◆ ](#a438a63f17e2eea9bffec3c776cf985fe)ConvertJsonToDictionary()

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
<td>static Dictionary&lt; string, string &gt; BFGSDK.UnityWrapperUtilities.ConvertJsonToDictionary</td>
<td>(</td>
<td>string </td>
<td><em>json</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method deserializes a Json string into a flat dictionary.

  - Parameters
    
    |      |                                                                                                |
    | ---- | ---------------------------------------------------------------------------------------------- |
    | json | A Json string to be deserialized that contains a flat dictionary structure of keys and values. |
    

<!-- end list -->

  - Returns  
    A dictionary created from the given Json string.

## [◆ ](#a931b42e130addec835dbdc575f8a9343)ConvertJsonToNestedDictionary()

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
<td>static Dictionary&lt; string, object &gt; BFGSDK.UnityWrapperUtilities.ConvertJsonToNestedDictionary</td>
<td>(</td>
<td>string </td>
<td><em>json</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method deserializes a Json string into a nested dictionary.

  - Parameters
    
    |      |                                                                                                         |
    | ---- | ------------------------------------------------------------------------------------------------------- |
    | json | A Json string to be deserialized that contains a complex dictionary structure with nested dictionaries. |
    

<!-- end list -->

  - Returns  
    A dictionary created from the given Json string.

## [◆ ](#a6c05ba5d1e0626bc744c966f4c846153)ConvertObjectToJsonString()

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
<td>static string BFGSDK.UnityWrapperUtilities.ConvertObjectToJsonString</td>
<td>(</td>
<td>System.Object </td>
<td><em>objectToSerialize</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method creates a Json string representation of an object.

  - Parameters
    
    |                   |                              |
    | ----------------- | ---------------------------- |
    | objectToSerialize | The object to be serialized. |
    

<!-- end list -->

  - Returns  
    A Json string representation of the given object.

## [◆ ](#a29360d6003c4ba11f08ec42cae7f9db3)DecryptBase64Json()

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
<td>static string BFGSDK.UnityWrapperUtilities.DecryptBase64Json</td>
<td>(</td>
<td>string </td>
<td><em>base64String</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method decrypts a string in base 64 format.

  - Parameters
    
    |              |                                       |
    | ------------ | ------------------------------------- |
    | base64String | A string encripted in base 64 format. |
    

<!-- end list -->

  - Returns  
    The decrypted string obtained from the given base 64 string.

## [◆ ](#a53b3a0cee2d3248ac0d05c7cc52a8cab)GetDictionaryFromKeyValueArrays\< TKey, TValue \>()

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
<td>static Dictionary&lt; TKey, TValue &gt; BFGSDK.UnityWrapperUtilities.GetDictionaryFromKeyValueArrays&lt; TKey, TValue &gt;</td>
<td>(</td>
<td>TKey[] </td>
<td><em>keys</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>TValue[] </td>
<td><em>values</em> </td>
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

This method constructs a dictionary from an array of keys and an array
of values.

  - Template Parameters
    
    |        |                             |
    | ------ | --------------------------- |
    | TKey   | Generic type of the keys.   |
    | TValue | Generic type of the values. |
    

<!-- end list -->

  - Parameters
    
    |        |                     |
    | ------ | ------------------- |
    | keys   | An array of keys.   |
    | values | An array of values. |
    

<!-- end list -->

  - Returns  
    A dictionary created from the keys and values given arrays.

## [◆ ](#a79331ad4cb70c60534fe305054b12474)GetDictionaryKeysAsArray\< TKey, TValue \>()

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
<td>static TKey[] BFGSDK.UnityWrapperUtilities.GetDictionaryKeysAsArray&lt; TKey, TValue &gt;</td>
<td>(</td>
<td>Dictionary&lt; TKey, TValue &gt; </td>
<td><em>genericDictionary</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method returns the keys of a dictionary as an array.

  - Template Parameters
    
    |        |                                                |
    | ------ | ---------------------------------------------- |
    | TKey   | Generic type for the keys of the dictionary.   |
    | TValue | Generic type for the values of the dictionary. |
    

<!-- end list -->

  - Parameters
    
    |                   |                                            |
    | ----------------- | ------------------------------------------ |
    | genericDictionary | A dictionary with generic keys and values. |
    

<!-- end list -->

  - Returns  
    An array containing the keys of a dictionary.

## [◆ ](#a1f86c0e513da4f3e3b00fb89e3d3a65a)GetDictionaryValuesAsArray\< TKey, TValue \>()

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
<td>static TValue[] BFGSDK.UnityWrapperUtilities.GetDictionaryValuesAsArray&lt; TKey, TValue &gt;</td>
<td>(</td>
<td>Dictionary&lt; TKey, TValue &gt; </td>
<td><em>genericDictionary</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

This method returns the values of a dictionary as an array.

  - Template Parameters
    
    |        |                                                |
    | ------ | ---------------------------------------------- |
    | TKey   | Generic type for the keys of the dictionary.   |
    | TValue | Generic type for the values of the dictionary. |
    

<!-- end list -->

  - Parameters
    
    |                   |                                            |
    | ----------------- | ------------------------------------------ |
    | genericDictionary | A dictionary with generic keys and values. |
    

<!-- end list -->

  - Returns  
    An array containing the values of a dictionary.

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
