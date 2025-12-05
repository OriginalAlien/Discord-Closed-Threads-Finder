// Accessing localStorage via an iframe to bypass Discord's sandboxed context restrictions
const iframe = document.body.appendChild(document.createElement('iframe'));
const localStorage = iframe.contentWindow.localStorage;

// Defining used variables from UserAffinitiesStoreV2 store
let uasV2 = JSON.parse(localStorage.getItem("UserAffinitiesStoreV2"));
let uasV2_state = uasV2["_state"];
let uasV2_userAffinities = uasV2_state["userAffinities"];
let uasV2_lastFetched = uasV2_state["lastFetched"]

// Build + parse formattedUserAffinities dictionary
console.log(`Parsing cached UserAffinities data... 
Last fetched: ${new Date(uasV2_lastFetched).toLocaleString()} | (Unix Time: ${uasV2_lastFetched})
`);

let formattedUserAffinities = {};
uasV2_userAffinities.forEach(entry => {
    if (!entry) return;
    formattedUserAffinities[entry.otherUserId] = {
        communicationRank: entry.communicationRank,
        dmRank: entry.dmRank,
        vcRank: entry.vcRank,
        isFriend: entry.isFriend
    };
});

// Helper function to build both sorted array and formatted query array
function buildRankedLists(rankKey) {
    const sorted = Object.keys(formattedUserAffinities)
        .sort((a, b) => formattedUserAffinities[a][rankKey] - formattedUserAffinities[b][rankKey])
        .map(userId => ({ userId, ...formattedUserAffinities[userId] }));

    const formatted = sorted.map(u => `<@${u.userId}> | isFriend: ${u.isFriend} | userId: ${u.userId}`);
    return { sorted, formatted };
}

// --- dmRank: most recent DMs ---
const { sorted: mostRecentDms, formatted: mostRecentDms_uidQueryFormat } = buildRankedLists("dmRank");

// --- communicationRank: most likely to talk ---
const { sorted: mostLikelyToTalk, formatted: mostLikelyToTalk_uidQueryFormat } = buildRankedLists("communicationRank");

// --- vcRank: most likely to VC with ---
const { sorted: mostLikelyToVc, formatted: mostLikelyToVc_uidQueryFormat } = buildRankedLists("vcRank");

console.log(`
✅ Finished processing Discord user affinity data!

You can now type the following variables in the console to view users you've interacted with:

• mostRecentDms_uidQueryFormat    - Users you DM'd most recently
• mostLikelyToTalk_uidQueryFormat - Users you talked to frequently
• mostLikelyToVc_uidQueryFormat   - Users you VC'd with most frequently

(All lists are sorted from highest relevance: top = most recent/frequent, bottom = least recent/frequent)

Need help? Look at the GitHub!
https://github.com/OriginalAlien/Discord-Closed-Messages-Finder
`);
