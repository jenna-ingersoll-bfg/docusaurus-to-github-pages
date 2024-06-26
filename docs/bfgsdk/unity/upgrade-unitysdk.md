# Upgrade the Unity SDK

This section guides you through the steps needed to upgrade the BFG SDK to a newer released version.

All version-specific upgrade steps are included in the BFG SDK Release Notes. Ensure you review the change notes of the newer version for any additional steps you may need to take.

## Remove the Previous SDK(s)

You must remove any previous version files before upgrading to a new version of the Unity SDK. This process must be completed manually because the Unity import tool does not automatically remove lingering files properly.

:::warning

If you are performing an upgrade from an older version (through 7.1.3) to BFG Unity SDK 7.2 or later, this step MUST be completed for your upgrade to proceed successfully. As of version 7.2, we moved from a .unitypackage distribution to the UPM-compatible package.

:::

1. Navigate to your Unity project.
2. Remove previous SDK files from your computer:
  - Upgrading from 7.1.3 or earlier, delete Assets/Plugins/BFGSDK
  - Upgrading from version 7.1.3 or later, delete the old SDK out of your Packages directory
  - Upgrading from version 7.2 or later, ensure that the new and old packages are not active at the same time in your project


:::info 

Beginning with version 7.2, the Unity SDK is structured and deployed as an NPM package and is no longer shipped as a .unitypackage file. With this change, the install location of the Unity SDK in your project has moved:

- Old SDK Project Location: Assets/Plugins/BFGSDK
- New SDK Project Location: Packages/com.bfg.sdk

:::

## Update with UPM (v10.6 and later)

Newer releases of the BFG SDK allow you to integrate and upgrade the Unity SDK through the Unity Package Manager (UPM).

To add the Unity SDK to the UPM:

1. Download the latest unity-sdk-XX.X.X.tgz file from Big Fish’s [GitHub release repo](https://github.com/bigfishgames-external/sdk-unity-releases/releases).  
2. Extract the contents of unity-sdk-XX.X.X.tgz.
3. Open the extracted contents and locate com.bfg.sdk-XX.X.X-upm.tgz.
4. Copy com.bfg.sdk-XX.X.X-upm.tgz to a location on your machine where you would like Unity to import it from.
5. Open Unity and navigate to **Window > Package Manager**.
6. In the Package Manager window, click the **+** button in the upper-left corner.
7. Select **Add package from tarball** and select the Unity SDK tarball file you copied earlier. Unity will automatically re-import and compile once selected.
8. Navigate to your Packages list. You will see the BFG SDK in your Packages list, pointing to version vXX.X.X.

## Import the com.bfg.sdk Package (v10.5 and earlier)

For older releases, upgrade the BFG SDK by downloading and copying the Unity SDK com.bfg.sdk package into your project.

1. Download the latest unity-sdk-XX.X.X.tgz file from Big Fish’s GitHub release repo
2. Extract the contents of  unity-sdk-XX.X.X.tgz. 
3. Open the extracted contents and locate the com.bfg.sdk folder.
4. Close Unity (this is more of a recommendation than a requirement).
5. Copy the com.bfg.sdk folder into your project's **Packages** folder. The result should be located at [PROJECT ROOT]/Packages/com.bfg.sdk.

## Verify Build Settings

In version 7.2 and later, you will have several automatic build processing options accessible through the **BFG > Build Settings** menu in Unity. Step through each option and ensure that they're configured correctly for your particular use case.

For more information on the **BFG > Build Settings** menu, see BFG Unity Build Settings.

:::warning

If you are upgrading from version 7.1.4 or earlier, some options in the **Build Settings** menu are no longer available. To set these (such as the **Enable SIWA** flag for iOS games), you'll need to use an entitlements file that specifies that the setting is enabled by default.

:::

## Update the BFG SDK dependencies (Android only)

New releases of the BFG SDK often include updates to the 3rd party SDKs that are packaged with the BFG SDK. To ensure that your game works correctly after the upgrade, we recommend verifying that the 3rd party dependencies in your project's Gradle file, mainTemplate.gradle, are up-to-date with the supported version(s) for the new BFG SDK. 

You can choose to manually update the Gradle file or simply copy the template file from the BFG SDK Sample App.

