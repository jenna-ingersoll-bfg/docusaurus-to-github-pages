# Security & Privacy Standards (SANDBOX TESTING PAGE)

# Account Deletion

:small_blue_diamond: **Tools to use:** BFG SDK

## What is Account Deletion? 

All games published by Big Fish must give the player the option to delete the account from within the game itself. This feature, called **account deletion**, ensures that all account information, including any data associatated with the account is completely removed from the developer's (i.e. Big Fish) records. The account deletion feature gives the player complete control over the personal information that they've shared. 

The BFG SDK includes methods that ensure your game is compliant with Apple’s and/or Google’s account deletion standards.

:::info

To use the Account Deletion feature, you must upgrade to one of the following BFG SDK versions or later:

- Unity SDK v9.6.1
- Native Android SDK v7.7.0
- Native iOS SDK v7.7.1

:::

## Account Deletion Workflow 

While it is not required that you use Big Fish’s solution for account deletion, we recommend using the following workflow to ensure that your game is compliant with Apple and Google’s standards:

1. Add an option called **Delete Account** in your game’s settings.
2. When a player clicks **Delete Account**, open a prompt that contains a warning stating the ramifications of deleting their account. Here is some sample text you can use:

<div style={{marginLeft: '50px' }}>
> By tapping <span style={{color: 'red'}}>YES</span>, your request will be submitted to be processed.
>
> Be aware that this will **DELETE ALL** of your **PURCHASES**, **GAME PROGRESS**, and **PROFILES** in **EACH** of your Big Fish games.
>
> **Are you sure you want to request account deletion?**
</div>

3. Provide two options: **YES, Delete My Account** and **No, Go Back**.
  - If the player clicks **No, Go Back**, return to your game’s settings dialog.
  - If the player clicks **YES, Delete My Account**, open a confirmation dialog. Here is some sample text you can use:

<div style={{marginLeft: '50px' }}>
> Are you sure you want to delete your account?
>
> :warning: You will NOT be able to recover your progress. <br />
> :warning: You will NOT be able to reverse this action. <br />
> :warning: Your games will be permanently RESET.
</div>

  - If the player continues with the account deletion, send a request to Customer Support to delete the account.

:::info 

Clicking **YES, Delete My Account** will not immediately delete a player’s data, as the actual account deletion is performed by Customer Support. This process may take up to 2 weeks to complete.

:::

4. Provide two options: **YES, Delete My Account** and **No, Go Back**.
  - If the player clicks **No, Go Back**, return to your game’s settings dialog.
  - If the player clicks **YES, Delete My Account**, open a final dialog confirming that the request has been submitted, log out the player, and reset the game. Here is some sample text you can use:

<div style={{marginLeft: '50px' }}>
> We are processing your account deletion request, which may take up to 14 business days. We will log you out and reset the game at this point.
</div>

5. When the user clicks Done, return to the game’s settings dialog.

:::info 

It’s important to inform the player that the account deletion can take 14 days to process. During this time, up to when the account deletion is complete, the player will be able to continue to log into their account.

:::

