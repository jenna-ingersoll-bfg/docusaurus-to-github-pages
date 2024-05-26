# Interstitials

:small_blue_diamond: **Tools to use:** Leanplum

## What are Interstitials?

**Interstitial** messages are pop-up windows that display full-screen notifications, ads, and/or messages to the user. 

Games published by Big Fish uses **Leanplum**'s in-app messaging templates to display interstitials to the user while they are playing your game. This template contains a background image, text, and a single button at the bottom of the screen (not including the X button at the top corner). 

:::info

Because LeanPlum is not included in the BFG SDK, you need to integrate it separately into your game code.

:::

## Setting up Interstitials with Leanplum’s Editor 

Leanplum's interstitial editor is intuitive and easy to use. This section provides a quick introductory guide on using the editor.

:::info

There is a known bug on Leanplum’s side that is causing the native button coordinates to be offset if they are entered/edited using the Safari browser. We recommend using Chrome to create/edit native interstitials until this bug is resolved. 

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