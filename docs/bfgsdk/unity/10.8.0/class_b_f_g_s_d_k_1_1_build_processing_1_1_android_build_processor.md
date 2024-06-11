  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [BuildProcessing](namespace_b_f_g_s_d_k_1_1_build_processing.html)
  - [AndroidBuildProcessor](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html)

[Public Member Functions](#pub-methods) | [Static Public Member
Functions](#pub-static-methods) | [Properties](#properties) | [List of
all
members](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor-members.html)

BFGSDK.BuildProcessing.AndroidBuildProcessor Class Reference

BFG SDK build processor for Android.
[More...](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#details)

Inheritance diagram for BFGSDK.BuildProcessing.AndroidBuildProcessor:


##  Public Member Functions

void 

**OnPreprocessBuild** (BuildReport report)

 

void 

**OnPostGenerateGradleAndroidProject** (string path)

 

##  Static Public Member Functions

static
[AndroidBuildContext](struct_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_context.html) 

[Preprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#ab6abe78a936ed6d34e277477abf23238)
([AndroidBuildSettings](class_b_f_g_s_d_k_1_1_android_build_settings.html)
settings)

 

Apply all settings and modifications required by the BFG SDK to the
Unity project prior to export.
[More...](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#ab6abe78a936ed6d34e277477abf23238)  

 

static void 

[Postprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#a4890a19b4848d84a29cb344d11683f87)
([AndroidBuildSettings](class_b_f_g_s_d_k_1_1_android_build_settings.html)
settings, string buildPath,
[AndroidBuildContext](struct_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_context.html)
context=default)

 

Apply all settings and modifications required by the BFG SDK to an
exported Android project.
[More...](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#a4890a19b4848d84a29cb344d11683f87)  

 

##  Properties

int 

**callbackOrder**`  [get] `

 

## Detailed Description

BFG SDK build processor for Android.

As a part of Unity's build processes,
[Postprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#a4890a19b4848d84a29cb344d11683f87 "Apply all settings and modifications required by the BFG SDK to an exported Android project.")
will be invoked with the settings you have configured via
[BFGBuildSettings](class_b_f_g_s_d_k_1_1_b_f_g_build_settings.html "BFG Build Settings Stores and provides access to BFG specific build settings. These are set via the B..."),
or skipped if you have SDK build processing disabled. You can invoke
certain build process behaviors by calling
[Postprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#a4890a19b4848d84a29cb344d11683f87 "Apply all settings and modifications required by the BFG SDK to an exported Android project.")
or
[Preprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#ab6abe78a936ed6d34e277477abf23238 "Apply all settings and modifications required by the BFG SDK to the Unity project prior to export.")
directly with a custom-tailored instance of
[AndroidBuildSettings](class_b_f_g_s_d_k_1_1_android_build_settings.html "BFG SDK's Android Build Settings").

## Member Function Documentation

## [◆ ](#a4890a19b4848d84a29cb344d11683f87)Postprocess()

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
<td>static void BFGSDK.BuildProcessing.AndroidBuildProcessor.Postprocess</td>
<td>(</td>
<td><a href="class_b_f_g_s_d_k_1_1_android_build_settings.html" class="el">AndroidBuildSettings</a> </td>
<td><em>settings</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>buildPath</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td><a href="struct_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_context.html" class="el">AndroidBuildContext</a> </td>
<td><em>context</em> = <code>default</code> </td>
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

Apply all settings and modifications required by the BFG SDK to an
exported Android project.

  - Parameters
    
    |           |                                                                                                                                                                                                                                                                    |
    | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | settings  | Settings that dictate which steps are performed, and specify game-specific information.                                                                                                                                                                            |
    | buildPath | Where Unity exported the Android project.                                                                                                                                                                                                                          |
    | context   | Optional build context returned from [Preprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#ab6abe78a936ed6d34e277477abf23238 "Apply all settings and modifications required by the BFG SDK to the Unity project prior to export."). |
    

## [◆ ](#ab6abe78a936ed6d34e277477abf23238)Preprocess()

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
<td>static <a href="struct_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_context.html" class="el">AndroidBuildContext</a> BFGSDK.BuildProcessing.AndroidBuildProcessor.Preprocess</td>
<td>(</td>
<td><a href="class_b_f_g_s_d_k_1_1_android_build_settings.html" class="el">AndroidBuildSettings</a> </td>
<td><em>settings</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Apply all settings and modifications required by the BFG SDK to the
Unity project prior to export.

  - Parameters
    
    |          |                                                                                         |
    | -------- | --------------------------------------------------------------------------------------- |
    | settings | Settings that dictate which steps are performed, and specify game-specific information. |
    

<!-- end list -->

  - Returns  
    Context to use when calling
    [Postprocess](class_b_f_g_s_d_k_1_1_build_processing_1_1_android_build_processor.html#a4890a19b4848d84a29cb344d11683f87 "Apply all settings and modifications required by the BFG SDK to an exported Android project.").
