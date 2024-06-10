  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [IosShellScriptBuildPhase](class_b_f_g_s_d_k_1_1_ios_shell_script_build_phase.html)

[Public Attributes](#pub-attribs) | [List of all
members](class_b_f_g_s_d_k_1_1_ios_shell_script_build_phase-members.html)

BFGSDK.IosShellScriptBuildPhase Class Reference

This class describes a shell script build phase that will be provided to
the method AddShellScriptBuildPhase on the PBXProject configuration
[More...](class_b_f_g_s_d_k_1_1_ios_shell_script_build_phase.html#details)

##  Public Attributes

string 

**name**

 

The name identifier to this build phase  

 

string 

**shellPath** = "/bin/bash -e"

 

The path for the shell executable that will run the shell script  

 

string 

**shellScript**

 

The path to the shell script  

 

List\< string \> 

**inputPaths**

 

The input paths that will be provided to the shell script build phase  

 

## Detailed Description

This class describes a shell script build phase that will be provided to
the method AddShellScriptBuildPhase on the PBXProject configuration
