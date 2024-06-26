# Upgrade the Native Android SDK

This section guides you through the steps needed to upgrade the BFG SDK to a newer released version.

All version-specific upgrade steps are included in the BFG SDK Release Notes. Ensure you review the change notes of the newer version for any additional steps you may need to take.

## Remove the Previous SDK(s)

Ensure that you remove all of the files and dependencies for the older version of the SDK(s) from your system.

## Download the Updated SDK

1. Download the most up-to-date version of the Native Android SDK from Big Fish’s [GitHub release repo](https://github.com/bigfishgames-external/sdk-android-releases/releases).  
2. Replace the files you removed with the new BFG SDK release.

## Update the BFG SDK dependencies

New releases of the BFG SDK often include updates to the 3rd party SDKs that are packaged with the BFG SDK. To ensure that your game works correctly after the upgrade, we recommend verifying that the 3rd party dependencies in your project's Gradle file, mainTemplate.gradle, are up-to-date with the supported version(s) for the new BFG SDK. 

You can choose to manually update the Gradle file or simply copy the template file from the BFG SDK Sample App.