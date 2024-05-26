# Build & Release

By partnering with Big Fish Games, you have access to our comprehensive Build & Release pipeline to build, test, and publish your game. 

:::tip[Pre-requisite]

You must have a Big Fish user account in Okta as outlined in [The Onboarding Process](./onboarding). You will also need to complete setup for access to the [GitHub external repository](./onboarding-github) and [Nexus](./onboarding-nexus).

:::

The Big Fish build & release pipeline has three different workflows:

- The [Build Workflow](#build) is used to compile new builds for your game. 
- The [Re-sign Workflow](#resign) is used to update your game files and re-sign them with the Big Fish Games signature and credentials.
- The [Publish Workflow](#publish) is triggered automatically and uploads the binary files to the App Center for testing.

## Creating a New Build {#build}

The **Build** workflow compiles a new build for your game, which you will need to initiate to update your game with any new code changes. 

To start a new build, create a Pull Request with your source code changes to your game’s GitHub repository.

From there, the build workflow will automatically:

- Pull down your source code changes
- Kick off a build with Jenkins
- Complete a code quality and security check with SonarQube
- Build and sign the game binaries with Amazon EKS
- Complete automated tests with the Big Fish Settings File Verification Tool
- Kick off the [Publish Workflow](#publish)

## Re-signing Your Game {#resign}

The **Re-sign** workflow re-signs all of your game files and assets with the Big Fish Games signature and credentials. 

To begin the re-signing workflow, upload your game binaries and revision text to Nexus. 

From there, the re-sign workflow will automatically:

- Kick off a build with Jenkins
- Download the updated files from Nexus
- Re-sign the binaries with the Big Fish Games signature and credentials
- Complete automated tests with the Big Fish Settings File Verification Tool
- Kick off the [Publish Workflow](#publish)

## Publishing Your Game {#publish}

The **Publish** workflow automatically kicks off after you [build](#build) or [re-sign](#resign) your game. It automatically:

- Prepares your game’s binary files
- Uploads the binary files to Nexus
- Pushes the binary files to App Center for easy distribution to testers
- Uploads the binary files to Google Play, Apple App and/or Amazon stores
- Sends a message to your game’s Slack channel notifying stakeholders of the build results