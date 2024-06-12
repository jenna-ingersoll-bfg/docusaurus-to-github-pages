  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [AndroidBuildSettings](class_b_f_g_s_d_k_1_1_android_build_settings.html)

[Public Types](#pub-types) | [Public Attributes](#pub-attribs) | [List
of all
members](class_b_f_g_s_d_k_1_1_android_build_settings-members.html)

BFGSDK.AndroidBuildSettings Class Reference

BFG SDK's Android Build Settings
[More...](class_b_f_g_s_d_k_1_1_android_build_settings.html#details)

##  Public Types

enum  

[Flavor](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84)
\{
[Google](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84a8b36e9207c24c76e6719268e49201d94)
= 0 ,
[Amazon](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84ab3b3a6ac74ecbd56bcdbefa4799fb9df)
= 1 \}

 

BFG SDK's supported build flavors for Android targets
[More...](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84)  

 

##  Public Attributes

[Flavor](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84) 

**flavor**

 

Stores the current Android build flavor  

 

string 

**sharedCopyDirectoryPath**

 

Stores the path to the directory that's copied on export, regardless of
flavor  

 

[AndroidFlavorBuildSettings](class_b_f_g_s_d_k_1_1_android_flavor_build_settings.html) 

**googleFlavorSettings**

 

Stores the build settings to use when the current flavor is
[Flavor.Google](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84a8b36e9207c24c76e6719268e49201d94 "Google").  

 

[AndroidFlavorBuildSettings](class_b_f_g_s_d_k_1_1_android_flavor_build_settings.html) 

**amazonFlavorSettings**

 

Stores the build settings to use when the current flavor is
[Flavor.Amazon](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84ab3b3a6ac74ecbd56bcdbefa4799fb9df "Amazon").  

 

bool 

**performRequiredPostProcessing**

 

Stores whether or not the BFG SDK should automatically perform all of
it's required post processing for Android during build. If true the SDK
will automatically perform the post processing, if false the game must
perform the post processing itself.  

 

## Detailed Description

BFG SDK's Android Build Settings

## Member Enumeration Documentation

## [◆ ](#af6efca103e5e27caf97004e756f4de84)Flavor

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| enum [BFGSDK.AndroidBuildSettings.Flavor](class_b_f_g_s_d_k_1_1_android_build_settings.html#af6efca103e5e27caf97004e756f4de84) |

BFG SDK's supported build flavors for Android targets

Enumerator

Google 

Google

Amazon 

Amazon
