# Uploading to Nexus

To re-sign your game files, you need to upload your updated game files to Nexus. 

:::tip[Pre-requisite]

Before completing these steps, ensure that you have set up your Nexus user account as outlined in [Nexus Onboarding](./onboarding-nexus).

:::

## Manual Uploads

To manually upload files to Nexus:

1. Navigate to either:
    1. Your [Okta Dashboard](https://aristocrat.okta.com/app/UserHome) and select the **Nexus** tile.
    2. The [Big Fish Nexus Repository](https://nexus.bigfishgames.com) and select **Login via SSO** from the top-right.
2. Select **Upload** on the left after navigating to the correct Nexus repository.
3. Select the appropriate folder for your release.
4. Select your file using the **Browse** button.
    1. Provide a new name for the file for when it's uploaded to Nexus.
    2. Enter the desired directory that the file will be stored in Nexus. **Note**: Do not include the filename in the directory.
    3. Provide any tags necessary. (Optional)
5. Select Upload.

## Automated Uploads

The following steps will guide you through automating your upload process to Nexus.

### Getting Nexus Credentials

1. Navigate to either:
    1. Your [Okta Dashboard](https://aristocrat.okta.com/app/UserHome) and select the **Nexus** tile
    2. The [Big Fish Nexus Repository](https://nexus.bigfishgames.com) and select **Login via SSO** from the top-right
2. Select the username from the top-right.
3. Select **User Token** from the left.
4. Select **Access user token**. 

:::info 

Take note of the token name code and user token passcode for future reference.

:::

### Uploading to Nexus

To assemble your cURL command to upload your files to Nexus you will want to the following format. Substitute the following:

- ``${USER_TOKEN}`` and ``${PASS_TOKEN}`` are the two strings you took note of in Nexus.
- ``${LOCAL_FILENAME}`` is the path to the file you want to upload from your disk.
- ``${REPO_NAME}`` is the name of your repository inside Nexus. For example, for Android builds this would be ``game-name-android-client-builds``.
- ``${TARGET_FILENAME}`` is the path to where the file should go inside the repository, including the filename in the repo. 

```
curl -v -u ${USER_TOKEN}:${PASS_TOKEN} --upload-file ${LOCAL_FILENAME} https://nexus.bigfishgames.com/repository/${REPO_NAME}/${TARGET_FILENAME}
```

### Continuous Integration & Continuous Deployment (CI/CD)

The automation team maintains an ``upload_to_nexus`` script in the [ci-utils](https://github.com/bigfishgames/ci-utilsConnect) repository on GitHub.
