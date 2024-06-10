[Public Member Functions](#pub-methods) | [Public
Attributes](#pub-attribs) | [Properties](#properties) | [List of all
members](class_xcode_project_utility-members.html)

XcodeProjectUtility Class Reference

Convenience utilities for working with an exported Xcode project.
[More...](class_xcode_project_utility.html#details)

##  Public Member Functions

 

[XcodeProjectUtility](class_xcode_project_utility.html#a308936d19639a2cc71529a6676fbcf01)
(string projectPath)

 

Instantiates a new instance of the
[XcodeProjectUtility](class_xcode_project_utility.html "Convenience utilities for working with an exported Xcode project.")
class.
[More...](class_xcode_project_utility.html#a308936d19639a2cc71529a6676fbcf01)  

 

void 

**WriteToDisk** ()

 

Writes any modifications to disk.  

 

void 

[AddFile](class_xcode_project_utility.html#ab6965e333e332f9adb363b7778bc7ff7)
(string filePath, string projectPath)

 

Adds a file to the project.
[More...](class_xcode_project_utility.html#ab6965e333e332f9adb363b7778bc7ff7)  

 

void 

[AddDirectory](class_xcode_project_utility.html#a7b18aad849f2dcda39288d935b932f89)
(string directoryPath, string projectPath)

 

Adds a directory reference to the project.
[More...](class_xcode_project_utility.html#a7b18aad849f2dcda39288d935b932f89)  

 

void 

[AddFramework](class_xcode_project_utility.html#adf7573c752991001fdc9c4bdd3775b3c)
(string framework, bool weak)

 

Adds a framework (by name) to the project.
[More...](class_xcode_project_utility.html#adf7573c752991001fdc9c4bdd3775b3c)  

 

void 

[AddCustomFramework](class_xcode_project_utility.html#a1c382005c8cdb67046eaaecdf54c5d5b)
(DirectoryInfo framework, bool embed=true)

 

Adds a custom framework (like an .xcframework) to the project.
[More...](class_xcode_project_utility.html#a1c382005c8cdb67046eaaecdf54c5d5b)  

 

void 

[AddBuildProperty](class_xcode_project_utility.html#a2b1951dee549126f409c93b9089f18cd)
(string name, string value)

 

Appends a value to a property's list of values.
[More...](class_xcode_project_utility.html#a2b1951dee549126f409c93b9089f18cd)  

 

void 

[SetBuildProperty](class_xcode_project_utility.html#aa37bf7c05bae7e7ff0b44697c9ef5149)
(string name, string value)

 

Sets the value of a property. Any existing value(s) will be replaced.
[More...](class_xcode_project_utility.html#aa37bf7c05bae7e7ff0b44697c9ef5149)  

 

void 

[AddShellScriptBuildPhase](class_xcode_project_utility.html#af1635b95db92c2a05c7880392f8b230a)
(string shellPath, string shellScript, List\< string \> inputPaths=null,
string name="Run Script")

 

Adds a build phase that executes a shell script.
[More...](class_xcode_project_utility.html#af1635b95db92c2a05c7880392f8b230a)  

 

void 

[SetEntitlementsFile](class_xcode_project_utility.html#ad20ea2ba565e34441a1b170e84e313c3)
(string entitlementsPath)

 

Sets the entitlements file for this project.
[More...](class_xcode_project_utility.html#ad20ea2ba565e34441a1b170e84e313c3)  

 

##  Public Attributes

readonly PBXProject 

**pbxProject**

 

readonly PlistDocument 

**plist**

 

readonly string 

**pbxProjectPath**

 

readonly string 

**resourcesPath**

 

readonly string 

**plistPath**

 

readonly string 

**projectRoot**

 

string 

**targetGuid**

 

readonly string 

**frameworkGuid**

 

readonly string 

[BFGEnviron](class_xcode_project_utility.html#ac8ec25bf4c843186410287bd38aab5f5)
= IosBuildConstants.DefaultBfgEnvironment

 

readonly string 

[FacebookDisplayName](class_xcode_project_utility.html#ad1bb2fe26da85eb97cf1441679bc6375)
= "${PRODUCT\_NAME}"

 

readonly string 

[FacebookAppID](class_xcode_project_utility.html#a49c08efc7599f7a956d440725b242302)
= "1564213973726672"

 

readonly string 

[crashlyticsShellScript](class_xcode_project_utility.html#a02f39b3186c41aa83c71cbb9aab5206d)

 

readonly string 

[crashlyticsShellPath](class_xcode_project_utility.html#a3a39f3102d49f3f3b59b499f37b1d9e3)
= "/bin/bash -e"

 

readonly string 

[crashlyticsScriptName](class_xcode_project_utility.html#a05b4f1a2624f14693913eec09eb6642e)
= "Run Script"

 

readonly Dictionary\< string, string \> 

[urlSettings](class_xcode_project_utility.html#ad2e6f9fbfb2af123ecd091fba0f6faa2)

 

readonly string\[\] 

[bfgExceptionDomains](class_xcode_project_utility.html#ae045fa245524a2ec245a0170aa68c941)
= IosBuildConstants.BFGExceptionDomains

 

readonly string\[\] 

[lsApplicationQueries](class_xcode_project_utility.html#aca49f6ee892b81335c1806f84b01f891)
= IosBuildConstants.LSApplicationQueries

 

readonly string\[\] 

[frameworks](class_xcode_project_utility.html#a0bce6f5c8c07860c7a700c2eab7b7670)

 

readonly string 

[bfgSDKFramework](class_xcode_project_utility.html#a01efbd3f31ae502e7e254c13fa68acef)
= "bfg\_iOS\_sdk.framework"

 

readonly string\[\] 

[dynamicFrameworks](class_xcode_project_utility.html#a3bcad2525b4dfa3969d133511c69578e)

 

readonly string\[\] 

[facebookFrameworks](class_xcode_project_utility.html#a36eee5278de1cd7cbc71b050f2fbf16b)

 

readonly string\[\] 

[zendeskFrameworks](class_xcode_project_utility.html#aca942e791e2831f42159fc3e0b2b10b3)

 

##  Properties

static string 

**UnityTargetName**`  [get] `

 

Main target generated by Unity.  

 

## Detailed Description

Convenience utilities for working with an exported Xcode project.

This is oddly named, but is kept for compatibility. To use, construct an
instance by providing the path to an exported Xcode project, manipulate
as needed by using the mutator instance methods, then flush to disk
using the
[WriteToDisk](class_xcode_project_utility.html#a21efa79890bebdc702b1d25f711c272e "Writes any modifications to disk.")
method.

## Constructor & Destructor Documentation

## [◆ ](#a308936d19639a2cc71529a6676fbcf01)XcodeProjectUtility()

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
<td>XcodeProjectUtility.XcodeProjectUtility</td>
<td>(</td>
<td>string </td>
<td><em>projectPath</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Instantiates a new instance of the
[XcodeProjectUtility](class_xcode_project_utility.html "Convenience utilities for working with an exported Xcode project.")
class.

  - Parameters
    
    |             |                                                    |
    | ----------- | -------------------------------------------------- |
    | projectPath | Path to which Unity has exported an Xcode project. |
    

## Member Function Documentation

## [◆ ](#a2b1951dee549126f409c93b9089f18cd)AddBuildProperty()

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
<td>void XcodeProjectUtility.AddBuildProperty</td>
<td>(</td>
<td>string </td>
<td><em>name</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>value</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Appends a value to a property's list of values.

  - Parameters
    
    |       |                        |
    | ----- | ---------------------- |
    | name  | Property name.         |
    | value | Property value to add. |
    

## [◆ ](#a1c382005c8cdb67046eaaecdf54c5d5b)AddCustomFramework()

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
<td>void XcodeProjectUtility.AddCustomFramework</td>
<td>(</td>
<td>DirectoryInfo </td>
<td><em>framework</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>bool </td>
<td><em>embed</em> = <code>true</code> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Adds a custom framework (like an .xcframework) to the project.

  - Parameters
    
    |           |                                             |
    | --------- | ------------------------------------------- |
    | framework | Directory that represents the framework.    |
    | embed     | Whether the framework needs to be embedded. |
    

<!-- end list -->

  - Exceptions
    
    |                       |                                                |
    | --------------------- | ---------------------------------------------- |
    | ArgumentNullException | *framework* is null.                           |
    | IOException           | Specified *framework* directory was not found. |
    

## [◆ ](#a7b18aad849f2dcda39288d935b932f89)AddDirectory()

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
<td>void XcodeProjectUtility.AddDirectory</td>
<td>(</td>
<td>string </td>
<td><em>directoryPath</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>projectPath</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Adds a directory reference to the project.

  - Parameters
    
    |               |                                                 |
    | ------------- | ----------------------------------------------- |
    | directoryPath | Path to the real directory.                     |
    | projectPath   | How the directory will appear in the workspace. |
    

<!-- end list -->

  - Exceptions
    
    |                   |                                     |
    | ----------------- | ----------------------------------- |
    | ArgumentException | *directoryPath* could not be found. |
    

## [◆ ](#ab6965e333e332f9adb363b7778bc7ff7)AddFile()

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
<td>void XcodeProjectUtility.AddFile</td>
<td>(</td>
<td>string </td>
<td><em>filePath</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>projectPath</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Adds a file to the project.

  - Parameters
    
    |             |                                            |
    | ----------- | ------------------------------------------ |
    | filePath    | Path to the real file.                     |
    | projectPath | How the file will appear in the workspace. |
    

<!-- end list -->

  - Exceptions
    
    |                   |                                |
    | ----------------- | ------------------------------ |
    | ArgumentException | *filePath* could not be found. |
    

## [◆ ](#adf7573c752991001fdc9c4bdd3775b3c)AddFramework()

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
<td>void XcodeProjectUtility.AddFramework</td>
<td>(</td>
<td>string </td>
<td><em>framework</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>bool </td>
<td><em>weak</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Adds a framework (by name) to the project.

  - Parameters
    
    |           |                                                     |
    | --------- | --------------------------------------------------- |
    | framework | Name of the framework to add.                       |
    | weak      | Whether the framework will be added as a weak link. |
    

## [◆ ](#af1635b95db92c2a05c7880392f8b230a)AddShellScriptBuildPhase()

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
<td>void XcodeProjectUtility.AddShellScriptBuildPhase</td>
<td>(</td>
<td>string </td>
<td><em>shellPath</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>shellScript</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>List&lt; string &gt; </td>
<td><em>inputPaths</em> = <code>null</code>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>name</em> = <code>"Run Script"</code> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Adds a build phase that executes a shell script.

  - Parameters
    
    |             |                                                                       |
    | ----------- | --------------------------------------------------------------------- |
    | shellPath   | Path to the shell to use, along with any shell arguments (like '-e'). |
    | shellScript | Script contents.                                                      |
    | inputPaths  | The shell script input dependencies.                                  |
    | name        | Optional name to give the build phase.                                |
    

## [◆ ](#aa37bf7c05bae7e7ff0b44697c9ef5149)SetBuildProperty()

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
<td>void XcodeProjectUtility.SetBuildProperty</td>
<td>(</td>
<td>string </td>
<td><em>name</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>value</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Sets the value of a property. Any existing value(s) will be replaced.

  - Parameters
    
    |       |                        |
    | ----- | ---------------------- |
    | name  | Property name.         |
    | value | Property value to use. |
    

## [◆ ](#ad20ea2ba565e34441a1b170e84e313c3)SetEntitlementsFile()

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
<td>void XcodeProjectUtility.SetEntitlementsFile</td>
<td>(</td>
<td>string </td>
<td><em>entitlementsPath</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span></span></td>
</tr>
</tbody>
</table>

Sets the entitlements file for this project.

  - Parameters
    
    |                  |                                     |
    | ---------------- | ----------------------------------- |
    | entitlementsPath | Path to the real entitlements file. |
    

<!-- end list -->

  - Exceptions
    
    |                   |                                        |
    | ----------------- | -------------------------------------- |
    | ArgumentException | *entitlementsPath* could not be found. |
    

## Member Data Documentation

## [◆ ](#ac8ec25bf4c843186410287bd38aab5f5)BFGEnviron

|                                                                                          |
| ---------------------------------------------------------------------------------------- |
| readonly string XcodeProjectUtility.BFGEnviron = IosBuildConstants.DefaultBfgEnvironment |

  - Deprecated:\\n Use instead.

## [◆ ](#ae045fa245524a2ec245a0170aa68c941)bfgExceptionDomains

|                                                                                                      |
| ---------------------------------------------------------------------------------------------------- |
| readonly string \[\] XcodeProjectUtility.bfgExceptionDomains = IosBuildConstants.BFGExceptionDomains |

  - Deprecated:\\n Use instead.

## [◆ ](#a01efbd3f31ae502e7e254c13fa68acef)bfgSDKFramework

|                                                                                 |
| ------------------------------------------------------------------------------- |
| readonly string XcodeProjectUtility.bfgSDKFramework = "bfg\_iOS\_sdk.framework" |

  - Deprecated:\\n Unused - Will be removed in a future version.

## [◆ ](#a05b4f1a2624f14693913eec09eb6642e)crashlyticsScriptName

|                                                                          |
| ------------------------------------------------------------------------ |
| readonly string XcodeProjectUtility.crashlyticsScriptName = "Run Script" |

  - Deprecated:\\n The Firebase SDK now attaches the run script
    automatically.

## [◆ ](#a3a39f3102d49f3f3b59b499f37b1d9e3)crashlyticsShellPath

|                                                                           |
| ------------------------------------------------------------------------- |
| readonly string XcodeProjectUtility.crashlyticsShellPath = "/bin/bash -e" |

  - Deprecated:\\n The Firebase SDK now attaches the run script
    automatically.

## [◆ ](#a02f39b3186c41aa83c71cbb9aab5206d)crashlyticsShellScript

|                                                            |
| ---------------------------------------------------------- |
| readonly string XcodeProjectUtility.crashlyticsShellScript |

**Initial value:**

\=

"GOOGLE\_SERVICE\_PLIST=\\"${SRCROOT}/GoogleService-Info.plist\\"\\n" +

"\\"${PROJECT\_DIR}/Resources/Scripts/upload-symbols\\" -gsp
\\"${GOOGLE\_SERVICE\_PLIST}\\" --build-phase"

  - Deprecated:\\n The Firebase SDK now attaches the run script
    automatically.

## [◆ ](#a3bcad2525b4dfa3969d133511c69578e)dynamicFrameworks

|                                                            |
| ---------------------------------------------------------- |
| readonly string \[\] XcodeProjectUtility.dynamicFrameworks |

**Initial value:**

\= {

"AppsFlyerLib.framework",

"openssl.framework",

"RaveSocial.framework",

"WebP.framework"

}

  - Deprecated:\\n Unused - Will be removed in a future version.

## [◆ ](#a49c08efc7599f7a956d440725b242302)FacebookAppID

|                                                                        |
| ---------------------------------------------------------------------- |
| readonly string XcodeProjectUtility.FacebookAppID = "1564213973726672" |

  - Deprecated:\\n Use what's defined in your project's instead.

## [◆ ](#ad1bb2fe26da85eb97cf1441679bc6375)FacebookDisplayName

|                                                                              |
| ---------------------------------------------------------------------------- |
| readonly string XcodeProjectUtility.FacebookDisplayName = "${PRODUCT\_NAME}" |

  - Deprecated:\\n Use what's defined in your project's instead.

## [◆ ](#a36eee5278de1cd7cbc71b050f2fbf16b)facebookFrameworks

|                                                             |
| ----------------------------------------------------------- |
| readonly string \[\] XcodeProjectUtility.facebookFrameworks |

**Initial value:**

\= {

"FBSDKCoreKit.framework",

"FBSDKLoginKit.framework",

"FBSDKPlacesKit.framework",

"FBSDKShareKit.framework"

}

  - Deprecated:\\n Unused - Will be removed in a future version.

## [◆ ](#a0bce6f5c8c07860c7a700c2eab7b7670)frameworks

|                                                     |
| --------------------------------------------------- |
| readonly string \[\] XcodeProjectUtility.frameworks |

**Initial value:**

\=

IosBuildConstants.Frameworks.Concat(IosBuildConstants.WeakFrameworks).ToArray()

  - Deprecated:\\n Use and  
    BFGSDK.BuildProcessing.IosBuildConstants.WeakFrameworks instead.

## [◆ ](#aca49f6ee892b81335c1806f84b01f891)lsApplicationQueries

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| readonly string \[\] XcodeProjectUtility.lsApplicationQueries = IosBuildConstants.LSApplicationQueries |

  - Deprecated:\\n Use instead.

## [◆ ](#ad2e6f9fbfb2af123ecd091fba0f6faa2)urlSettings

|                                                                       |
| --------------------------------------------------------------------- |
| readonly Dictionary\<string, string\> XcodeProjectUtility.urlSettings |

  - Deprecated:\\n No longer maintained; formerly a combination of  
    BFGSDK.BuildProcessing.IosBuildConstants.BaselinePlistValues and
    project-specific environment/Facebook settings.

## [◆ ](#aca942e791e2831f42159fc3e0b2b10b3)zendeskFrameworks

|                                                            |
| ---------------------------------------------------------- |
| readonly string \[\] XcodeProjectUtility.zendeskFrameworks |

**Initial value:**

\= {

"CommonUISDK.framework",

"MessagingAPI.framework",

"MessagingSDK.framework",

"SDKConfigurations.framework",

"SupportProvidersSDK.framework",

"SupportSDK.framework",

"ZendeskCoreSDK.framework"

}

  - Deprecated:\\n Unused - Will be removed in a future version.
