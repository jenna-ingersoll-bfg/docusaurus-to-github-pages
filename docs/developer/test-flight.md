# Testing Your Builds with Test Flight (iOS)

When you’ve reached a milestone in the development process and would like to test key features, you can create a .ipa file and upload it to Test Flight in the Apple App Store.

:::info 

Since the introduction of Swift into the Native iOS SDK, the built .ipa file must include the SwiftSupport folder. If this folder is missing, your submission to the App Store will fail with the following message:

**ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.**

:::

Follow the instructions below to ensure your .ipa file complies with all Apple requirements. You have the option to create and upload your build from either the Xcode interface or the Terminal window.

<details>
    <summary>Using the Xcode Interface</summary>
1. Open Xcode.
2. Change the scheme of your app target to Release.
3. Update the Build number under the **General** tab of your app target.
4. Strip the simulator architectures before creating an archive. See !!!!LINK HERE!!!! gs_strip_architectures in the Prepare for Integration section for details.
5. Go to the **Product / Archive** menu in Xcode and wait for the archive to finish. Once complete, the **Organizer** window will open, and you'll see a list of the archives. You can access this window by going to the **Window / Organizer** menu.
6. Select the first archive in the list (the last one created) and click on the **Validate App** button on the right-hand side panel.
7. Select your App Store distribution options: **Strip swift symbols** and **Upload app symbols**.
8. Click the **Distribute App** button when validation succeeds.
9. Select the App Store Connect option from the prompt. This ensures that the uploaded .ipa contains the SwiftSupport folder required by Apple. If you select any of the other options, such as AdHoc, Enterprise, or Development, your submission to Test Flight will fail with the following message: 

```bash
ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.
```

</details>

<details>
    <summary>Using the Terminal</summary>
1. Strip the simulator architectures before creating an archive. See !!!!LINK HERE!!!! gs_strip_architectures in the Prepare for Integration section for details.
2. Create the .xcarchive file. You can do this by executing the following in a terminal:

```bash
xcodebuild -verbose
-project /path/to/My-Project.xcodeproj
-scheme My-Project
-configuration Release build
-archivePath /path/to/My-Project.xcarchive
```

3. Add the following entry in your ExportOptions.plist

```xml
<dict>
    <key>method</key>
    <string>app-store</string>
</dict>
```

This will ensure Apple will not reject your app with the following message:

```bash
ITMS-90426: Invalid Swift Support - The SwiftSupport folder is missing. Rebuild your app using the current public (GM) version of Xcode and resubmit it.
```

4. Export a .ipa from the archive generated in step 2, using the export options defined in step 3:

```bash
xcodebuild -verbose
-exportArchive
-archivePath /path/to/My-Project.xcarchive
-exportPath /path/to/ipa/
-exportOptionsPlist /path/to/ExportOptions.plist
```

At this point, your .ipa is ready to be submitted to the App Store.

</details>
