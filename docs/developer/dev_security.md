# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Interstitials with Leanplum

Leanplum natively provides a system to display interstitials to the user while they are playing your game. An **interstitial** is a pop-up window that displays full-screen notifications, ad, and/or messages to the user.

## Setting up Interstitials with Leanplum’s Editor 

Leanplum's interstitial editor is intuitive and easy to use. This section provides a quick introductory guide on using the editor.

:::info

There is a known bug on Leanplum’s side that is causing the native button coordinates to be offset if they are entered/edited using the Safari browser. It’s advised to use Chrome to create/edit native interstitials until the bug is resolved. 

:::

To create an interstitial with Leanplum’s editor:

1. Navigate to **Single Message** and select **In-App Message**.
2. Select the **Image Interstitial** template.
3. Click on the **Open Image Interstitial Editor** button.
4. Select **Portrait** or **Landscape** options for your interstitial. This is determined by the supported modes of your app.
5. Select the **Content** element then click on **Choose File** under **Background**. This will allow you to select the actual image of the popup.
6. Click **Add Button** to add the appropriate button touch areas for the interstitial.
7. Resize and position the widgets over all the sections of your interstitial that will serve as buttons.
8. Click **Save Changes** to save and exit the Leanplum editor.

Exiting the editor takes you back to the general configuration page. On the configuration page, you should see new button fields (one for each of the buttons created in the editor). This is where you can select what action is performed when each button is clicked.

:::info

If the button is intended as only a close or dismiss action, leave the action field empty.

:::
