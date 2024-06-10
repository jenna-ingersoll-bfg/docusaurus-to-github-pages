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
  - [BFGBuildSettings](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1_b_f_g_build_settings-members.html)

BFGSDK.BFGBuildSettings Class Reference

BFG Build Settings Stores and provides access to BFG specific build
settings.  
These are set via the BFG Build Menu window in Unity, and may be queried
while the build is running
[More...](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html#details)

Inheritance diagram for BFGSDK.BFGBuildSettings:

![](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.png)

##  Static Public Member Functions

static
[iOSBuildSettings](class_b_f_g_s_d_k_1_1i_o_s_build_settings.html) 

[GetiOSBuildSettings](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html#a249f7c69424007ea6b2ff76950703169)
()

 

Get the current iOS Build Settings for the BFG SDK, which were set in
the BFG Build Menu
[More...](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html#a249f7c69424007ea6b2ff76950703169)  

 

static
[AndroidBuildSettings](class_b_f_g_s_d_k_1_1_android_build_settings.html) 

[GetAndroidBuildSettings](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html#ad4077b43fe03733265a02a1a9b864af6)
()

 

Get the current Android Build Settings for the BFG SDK, which were set
in the BFG Build Menu
[More...](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html#ad4077b43fe03733265a02a1a9b864af6)  

 

static void 

[SetAndroidBuildFlavor](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html#acddcc13d521b59e767357cd76e18d3ba)
([AndroidBuildSettings.Flavor](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84)
flavor)

 

Programmatically set if the current Android build is targeting Google or
Amazon
[More...](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html#acddcc13d521b59e767357cd76e18d3ba)  

 

## Detailed Description

BFG Build Settings Stores and provides access to BFG specific build
settings.  
These are set via the BFG Build Menu window in Unity, and may be queried
while the build is running

## Member Function Documentation

## [◆ ](#ad4077b43fe03733265a02a1a9b864af6)GetAndroidBuildSettings()

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
<td>static <a href="class_b_f_g_s_d_k_1_1_android_build_settings.html" class="el">AndroidBuildSettings</a> BFGSDK.BFGBuildSettings.GetAndroidBuildSettings</td>
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

Get the current Android Build Settings for the BFG SDK, which were set
in the BFG Build Menu

  - Returns  
    Current Android Build Settings

## [◆ ](#a249f7c69424007ea6b2ff76950703169)GetiOSBuildSettings()

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
<td>static <a href="class_b_f_g_s_d_k_1_1i_o_s_build_settings.html" class="el">iOSBuildSettings</a> BFGSDK.BFGBuildSettings.GetiOSBuildSettings</td>
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

Get the current iOS Build Settings for the BFG SDK, which were set in
the BFG Build Menu

  - Returns  
    Current iOS Build Settings

## [◆ ](#acddcc13d521b59e767357cd76e18d3ba)SetAndroidBuildFlavor()

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
<td>static void BFGSDK.BFGBuildSettings.SetAndroidBuildFlavor</td>
<td>(</td>
<td><a href="class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84" class="el">AndroidBuildSettings.Flavor</a> </td>
<td><em>flavor</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Programmatically set if the current Android build is targeting Google or
Amazon

  - Parameters
    
    |        |                                         |
    | ------ | --------------------------------------- |
    | flavor | Android Build Flavor (Google or Amazon) |
    

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
