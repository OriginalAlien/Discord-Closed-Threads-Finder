# Discord-Closed-Channels-Finder

Closed a DM with a long-forgotten friend and can’t remember their username or user ID or blocked them?  
This tool helps you recover that information using Discord’s local affinity cache.

---

## Notes
- This tool is **Web based** and **CLI-based** and currently has no plans for a GUI version.  
- It does **not** include features to help further narrow down users.  
- The project is **open source** — feel free to modify or extend it.

---

## Instructions

1. Open **Discord in your web browser** and log in.  
2. Press **`CTRL + SHIFT + I`** to open Developer Tools.  
3. Navigate to the **Console** tab.  
4. Paste the contents of **`main.js`** and press **Enter**.  
5. Type in one of the following variables into console to search for the person you’re looking for:

   - `mostLikelyToVc_uidQueryFormat`  
     *People you VC’d with the most.*
   
   - `mostLikelyToTalk_uidQueryFormat`  
     *People you talked/messaged with the most.*

   - `mostRecentDms_uidQueryFormat`  
     *People you recently messaged.*

   Lists are sorted **best match first**.  
   (Example: `mostLikelyToVc_uidQueryFormat` shows the most frequent VC partner at the top and least frequent at the bottom.)

6. Copy the list of user ids and paste it into Discord to mention/display each user and try to search for them.

7. If you see **@unknown-user**, read the section below.

---

## Looking Up “@unknown-user”

Users displayed as **@unknown-user** are not currently cached.  
You can still look them up using online tools such as:

* [VaultCord](https://vaultcord.com/tools/discord-id-lookup) -- Only one up as of now *
* [GateCord](https://gatecord.com/discord-id-lookup/)
* [discord.id](http://discord.id/)
* [discordlookup](https://discordlookup.com/)
* [Toolscord](https://toolscord.com/)

If these tools don’t work, you can also:

1. Ban the user in a server by user ID using `/ban` command.  
2. Go to **Server Settings → Bans**.  
3. The user profile will appear there (right click on them).

<img width="476" height="95" alt="image" src="https://github.com/user-attachments/assets/b2d9c37c-2630-413a-905f-79628301320f" />
<img width="1134" height="983" alt="image" src="https://github.com/user-attachments/assets/c6b8a58b-d6cc-407b-8a41-03cda4affde6" />

---

## How This Works

Discord locally stores a “user affinity” cache, which tracks:

- Who you message the most  
- Who you recently messaged  
- Who you VC with  
- Whether you are friends  
- Other interaction metrics (which aren't used in this tool)

This data lives in your browser’s `localStorage` under:

### `UserAffinitiesStoreV2`
<img width="1237" height="715" alt="image" src="https://github.com/user-attachments/assets/68fe224b-e063-4378-a5a8-ab33504b4b9f" />

By reading this cache, the script can rank and format users based on interaction history.  
This helps you identify closed DM partners using meaningful patterns such as:

- Recent messaging  
- Frequent conversation  
- Frequent VC activity

More advanced filtering (like further fetching information for each user) could be added, but there are no plans to do so as of now (feel free to modify to do so, as it is open-sourced).

###### Donate to Support my work
- BTC: bc1ql2s7zk55r9ekafr39wrwtvnsjxynhlwjzd7qpp
- LTC: LKoseEiENqnYo9qpgVMWGUoXDQhYaDqz8X  
- ETH: 0xf124225bb66acba45bDC5b89511Cc10044b5214D

and thanks to chatgpt for generating this <3  

---

Tags (ignore)  
<sub> 
discord, discord dm, discord closed dm, discord closed thread, discord user lookup, discord user recovery, discord id finder, discord affinity, discord cache, discord localstorage, discord dm history, discord contact finder, discord friend finder, discord utility, discord web tool, discord javascript, closed Discord direct messages, closed Discord messages, Discord user recovery, Discord user finder, discord message finder
</sub>
