# Security & Privacy Standards (SANDBOX TESTING PAGE)

## BFG Unity Build Settings

The Big Fish SDKs require that specific dependencies and settings are applied to the application's Xcode and Android Studio projects, respectively. For example, the iOS build requires that various native frameworks be added/embedded into the exported project, plist updates, and general settings.

To ensure that all build requirements are met, the BFG SDK includes a **BFG > Build Settings** menu directly in the Unity interface. Here, you can set up the build to automatically perform all of the post-processing steps required for your build.

:::warning 

If you do not enable the build settings using the **BFG > Build Settings** menu, you must add all dependencies and settings via your own post processing scripts; otherwise, the exported projects will either fail or have runtime errors.

:::

In the **BFG > Build Settings** menu, your settings are written to a config file, dependent upon the build platform. For the settings to work, you need to check the following configuration files into source control for each of the platforms you are building:

- iOS: Assets/Plugins/BFGSDK/Editor/BuildOptions/iOSBuildConfig.json
- Android: Assets/Plugins/BFGSDK/Editor/BuildOptions/AndroidBuildConfig.json

If the config files are missing from source control, the build will behave as if all settings are disabled. If the build fails to create the .json file you can copy the file from the appropriate Sample Project folder here:
/Samples/BfgUnitySdkSample-XXXX.X.X/Assets/Plugins/BFGSDK/Editor/BuildOptions

## Build Settings Reference 

Below, you will find a list of the build options available in the **BFG > Build Settings** menu:

**Post Process Build**
> Sets whether the BFG SDK build processing code should be run automatically during a Unity build.

### Android-Specific Settings

**Current Build Flavor**
> Sets whether your Android build is targeting Google or Amazon devices. The selected flavor may be queried at build time, eliminating the need to have custom and specialized Google and Amazon build menu options for your game. The flavor option may also be set programmatically from script, so you can automate setting it in build scripts.

**Shared Folder Copied on Post-Process**
> Sets the project-relative path (e.g., Assets/path/to/shared) to a folder that will be recursively copied to the exported Android project, regardless of the currently selected build flavor. Any matching files in the exported project will be overwritten. Meta files will not be copied. Ignored if blank. 

**Product ID**
> Sets the Unity product ID (e.g., ``com.bfg.my-sample-app``) prior to exporting the Android project. Ignored if blank.

**Android Manifest**
> Sets the project-relative path (e.g., Assets/path/to/AndroidManifest.xml) of an android manifest that will be copied to a temporary Android plugins folder prior to building. This lets you use entirely separate android manifests based on the build flavor that will be respected by Unity throughout the build sequence. Ignored if blank.

**Folder Copied on Postprocess**
> Sets the project-relative path (e.g., Assets/path/to/shared) to a folder that will be recursively copied to the exported Android project, regardless of the currently selected build flavor. Any matching files in the exported project will be overwritten. Meta files will not be copied. Ignored if blank. This copy will occur after copying the “Shared Folder Copied on Postprocess” described above. 

<details>
  <summary>Example Locations for Copied Files</summary>

You can utilize the specified copy folders to inject resources, such as the BFG config file or your app icon. Below are examples of where to place them; all paths are relative to what is specified in the “Folder Copied on Postprocess” setting. Here, we only talk about a subset of all the available options. Consult Google's developer guides for specifics on what other resources can be added to Android projects.

- src/main/res/raw/bfg_config.json: The BFG SDK configuration. Must be named bfg_config.json.
- google-services.json: Firebase configuration. Must be named google-services.json.
- src/main/res/mipmap-mdpi/app_icon.png: Static app icon (non-adaptive), set in your manifest using the “android:icon” attribute of your “application” element. The file name can be anything you want.
- src/main/res/mipmap-mdpi/ic_launcher_background.png: Adaptive icon background with a file name of your choice. See [Adaptive icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive) :arrow_upper_right for more information.
- src/main/res/mipmap-mdpi/ic_launcher_foreground.png: Adaptive icon foreground with a file name of your choice. See [Adaptive icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive) :arrow_upper_right for more information.
- src/main/res/xml/network_security_config.xml: This allows you to use existing HTTP domains for API 28+, among other things.
- src/main/res/values/refs.xml: This allows you to override styles in native components (like Zendesk).

</details>

### iOS-Specific Settings

**Build Environment** 
> Sets the environment used for MTS reporting.

**bfg_config.json File Path**
> Sets the project-relative file path (e.g., Assets/path/to/bfg_config.json) of your iOS configuration to be added to the Xcode project. Ignored if blank.

**Update pList** 
> Sets whether the pList should be automatically updated to include all required settings/flags. 

:::warning

Enabling this option may add/duplicate options that you do not wish to ship your game with.

:::

**Add Dependencies**
> Sets whether required dependences (frameworks, bundles, localizations) are automatically added to the Unity build.

**Add Properties**
> Sets whether required build properties are automatically added. When checked, the following Build Settings will be added to your exported iOS build:

```
{"OTHER_LDFLAGS", new[] {"-ObjC", "-lz"}},{
  "LIBRARY_SEARCH_PATHS", new[]
  {
    "$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)",
    "$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)"
  }
}
{"ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES", new[] {"YES"}},
{
  "LD_RUNPATH_SEARCH_PATHS", new[]
  {
    "/usr/lib/swift",
	"@executable_path/Frameworks",
	"$(inherited)"
  }
},
{"DEBUG_INFORMATION_FORMAT", new[] {"dwarf-with-dsym"}},
{"VALIDATE_WORKSPACE", new[] {"YES"}}
```

**Facebook App ID** 
> Sets the ID of the Facebook App associated with your project. Ignored if either this or “Facebook Display Name” is blank.

**Facebook Display Name** 
> Sets the Facebook display name associated with your project.

**Entitlements File Path** 
> Sets the project-relative file path (e.g., Assets/path/to/my.entitlements) of your project's entitlements file to add to the Xcode project. Ignored if blank. 

:::info 

Your provisioning profile must support these entitlements.

:::

**GoogleService-Info.plist File Path** 
> Sets the project-relative file path (e.g., Assets/path/to/GoogleService-Info.plist) to automatically include with the exported Xcode project. Ignored if blank.

**Append Shell Script Build Phase**
> Add an additional script (or scripts) to the build phase on the end. When the **Add Shell Script** button is pressed, the following options become available:
> 
> **Name**: Sets the optional name for the script. Without a name defined, it will appear as Run Script in the exported Xcode project.
> **Shell Path**: Sets the shell interpreter to run the script, with a default provided.
> **Shell Script**: Sets the location of the script to call.
> **Input Path**: Optional arguments passed to the script.


