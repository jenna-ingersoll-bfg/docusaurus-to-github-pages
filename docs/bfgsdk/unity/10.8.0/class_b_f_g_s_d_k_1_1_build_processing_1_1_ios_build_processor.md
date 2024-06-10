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
  - [BuildProcessing](namespace_b_f_g_s_d_k_1_1_build_processing.html)
  - [IosBuildProcessor](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor.html)

[Public Member Functions](#pub-methods) | [Static Public Member
Functions](#pub-static-methods) | [Properties](#properties) | [List of
all
members](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor-members.html)

BFGSDK.BuildProcessing.IosBuildProcessor Class Reference

BFG SDK build processor for iOS.
[More...](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor.html#details)

Inheritance diagram for BFGSDK.BuildProcessing.IosBuildProcessor:

![](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor.png)

##  Public Member Functions

void 

**OnPostprocessBuild** (BuildReport report)

 

##  Static Public Member Functions

static void 

[Postprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor.html#adcc6346c68d0cb555949d79e1094f737)
([iOSBuildSettings](class_b_f_g_s_d_k_1_1i_o_s_build_settings.html)
settings, string buildPath)

 

Apply all settings and modifications to an exported Xcode project
required by the BFG SDK.
[More...](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor.html#adcc6346c68d0cb555949d79e1094f737)  

 

##  Properties

int 

**callbackOrder**`  [get] `

 

## Detailed Description

BFG SDK build processor for iOS.

As a part of Unity's build postprocess,
[Postprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor.html#adcc6346c68d0cb555949d79e1094f737 "Apply all settings and modifications to an exported Xcode project required by the BFG SDK.")
will be invoked with the settings you have configured via
[BFGBuildSettings](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html "BFG Build Settings Stores and provides access to BFG specific build settings. These are set via the B..."),
or skipped if you have SDK postprocessing disabled. You can invoke
certain postprocess behaviors by calling
[Postprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_ios_build_processor.html#adcc6346c68d0cb555949d79e1094f737 "Apply all settings and modifications to an exported Xcode project required by the BFG SDK.")
directly with a custom-tailored instance of
[iOSBuildSettings](class_b_f_g_s_d_k_1_1i_o_s_build_settings.html "BFG SDK's iOS Build Settings").

## Member Function Documentation

## [◆ ](#adcc6346c68d0cb555949d79e1094f737)Postprocess()

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
<td>static void BFGSDK.BuildProcessing.IosBuildProcessor.Postprocess</td>
<td>(</td>
<td><a href="class_b_f_g_s_d_k_1_1i_o_s_build_settings.html" class="el">iOSBuildSettings</a> </td>
<td><em>settings</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>buildPath</em> </td>
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

Apply all settings and modifications to an exported Xcode project
required by the BFG SDK.

  - Parameters
    
    |           |                                                                                         |
    | --------- | --------------------------------------------------------------------------------------- |
    | settings  | Settings that dictate which steps are performed, and specify game-specific information. |
    | buildPath | Where Unity exported the Xcode project.                                                 |
    

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
