  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [iOSBuildSettings](class_b_f_g_s_d_k_1_1i_o_s_build_settings.html)

[Public Attributes](#pub-attribs) | [List of all
members](class_b_f_g_s_d_k_1_1i_o_s_build_settings-members.html)

BFGSDK.iOSBuildSettings Class Reference

BFG SDK's iOS Build Settings
[More...](class_b_f_g_s_d_k_1_1i_o_s_build_settings.html#details)

##  Public Attributes

string 

**entitlementsFilePath**

 

Stores the project-relative entitlements file path (e.g.,
'Assets/my-file.entitlements').  

 

bool 

**updatePlist**

 

Stores whether or not the BFG SDK should automatically update the pList
during build.  
This may include options that a game doesn't want  

 

bool 

**addDependencies**

 

Stores whether or not required frameworks, bundles, and localizations
are added during build.  

 

bool 

**addRequiredProperties**

 

Stores whether or not required project properties are set during
build.  

 

string 

**bfgConfigPath**

 

Stores the project-relative bfg\_config.json file (e.g.,
'Assets/bfg\_config.json')  

 

string 

[bfgEnvironment](class_b_f_g_s_d_k_1_1i_o_s_build_settings.html#a697a7d6f835eca81e4ef19f2fc5340f3)

 

Stores the environment for the build
[More...](class_b_f_g_s_d_k_1_1i_o_s_build_settings.html#a697a7d6f835eca81e4ef19f2fc5340f3)  

 

string 

**facebookAppId**

 

Stores the Facebook App ID  

 

string 

**facebookDisplayName**

 

Stores the user-facing Facebook app name  

 

string 

**facebookClientToken**

 

Stores the Facebook Client Token  

 

string 

**googleServicesPlistPath**

 

Stores the project-relative GoogleService-Info.plist (e.g.,
'Assets/GoogleService-Info.plist')  

 

bool 

**performRequiredPostProcessing**

 

Stores whether or not the BFG SDK should automatically perform all of
it's required post processing of iOS during build If true the SDK will
automatically perform the post processing, if false the game must  

 

List\<
[IosShellScriptBuildPhase](class_b_f_g_s_d_k_1_1_ios_shell_script_build_phase.html)
\> 

**addShellScriptBuildPhase**

 

This container holds instructions for adding shell script build phases
to the iOS Project to execute during the build process.  

 

## Detailed Description

BFG SDK's iOS Build Settings

## Member Data Documentation

## [◆ ](#a697a7d6f835eca81e4ef19f2fc5340f3)bfgEnvironment

|                                               |
| --------------------------------------------- |
| string BFGSDK.iOSBuildSettings.bfgEnvironment |

Stores the environment for the build

As of this writing, valid values are:

  - "BFG\_ENVIRON\_TEST"
  - "prod"
  - "test"
