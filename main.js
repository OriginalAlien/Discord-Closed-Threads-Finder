// Accessing localStorage via an iframe to bypass Discord's sandboxed context restrictions
const iframe = document.body.appendChild(document.createElement('iframe'));
const localStorage = iframe.contentWindow.localStorage;

// Parse UserAffinitiesStoreV2
let uasV2 = JSON.parse(localStorage.getItem("UserAffinitiesStoreV2"));
let uasV2_state = uasV2["_state"];
let uasV2_userAffinities = uasV2_state["userAffinities"];

// Build formattedUserAffinities dictionary
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
