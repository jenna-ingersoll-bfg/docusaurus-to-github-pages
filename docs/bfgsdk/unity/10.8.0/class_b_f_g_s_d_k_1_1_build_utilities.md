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
  - [BuildUtilities](class_b_f_g_s_d_k_1_1_build_utilities.html)

[Static Public Member Functions](#pub-static-methods) |
[Properties](#properties) | [List of all
members](class_b_f_g_s_d_k_1_1_build_utilities-members.html)

BFGSDK.BuildUtilities Class Reference

##  Static Public Member Functions

static bool 

**ReplaceFileContents** (string src, string dst)

 

static bool 

**ReplaceContentsInDirectory** (string src, string dst)

 

static bool 

**FileContentEqual** (string src, string dst)

 

static bool 

**DirectoryContentEqual** (string src, string dst)

 

static void 

**DeleteDirectory** (string dir)

 

##  Properties

static DirectoryInfo 

[SdkRoot](class_b_f_g_s_d_k_1_1_build_utilities.html#adc63f07748b7b95d09f3c7f3afd73149)` 
[get] `

 

Retrieves the root folder for the SDK.
[More...](class_b_f_g_s_d_k_1_1_build_utilities.html#adc63f07748b7b95d09f3c7f3afd73149)  

 

static DirectoryInfo 

[SdkPluginsRoot](class_b_f_g_s_d_k_1_1_build_utilities.html#a3be239078826b9b88a30ebf0453af6ed)` 
[get] `

 

Root Plugins folder for the SDK.
[More...](class_b_f_g_s_d_k_1_1_build_utilities.html#a3be239078826b9b88a30ebf0453af6ed)  

 

## Property Documentation

## [◆ ](#a3be239078826b9b88a30ebf0453af6ed)SdkPluginsRoot

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
<td>DirectoryInfo BFGSDK.BuildUtilities.SdkPluginsRoot</td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">static</span><span class="mlabel">get</span></span></td>
</tr>
</tbody>
</table>

Root Plugins folder for the SDK.

  - Exceptions
    
    |                           |                                      |
    | ------------------------- | ------------------------------------ |
    | InvalidOperationException | Root plugins folder cannot be found. |
    

## [◆ ](#adc63f07748b7b95d09f3c7f3afd73149)SdkRoot

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
<td>DirectoryInfo BFGSDK.BuildUtilities.SdkRoot</td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">static</span><span class="mlabel">get</span></span></td>
</tr>
</tbody>
</table>

Retrieves the root folder for the SDK.

If the SDK is installed as a package, this will return the virtualized
package root. Otherwise, this will search the project directory for a
folder named "BFGSDK" (breadth-first).

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
