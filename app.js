// ===== DEFAULT DATA =====
const DEFAULT_PLACEMENTS = [
    { id: 'WIN', name: 'WIN', bgColor: 'royalblue', textColor: '#ffffff', bold: true },
    // Deprecated visual variant (now applied automatically for multi-WIN columns)
    { id: 'WIN2', name: 'WIN', bgColor: 'darkblue', textColor: '#ffffff', bold: true, hidden: true },
    // All Stars WIN variants (Lip Sync Assassin format)
    { id: 'WIN_LSWIN', name: 'WIN', bgColor: 'darkblue', textColor: '#ffffff', bold: true },
    { id: 'WIN_LSLOSS', name: 'WIN', bgColor: 'deepskyblue', textColor: '#000000', bold: true },
    { id: 'WIN_LSTIE', name: 'WIN', bgColor: 'steelblue', textColor: '#ffffff', bold: true },
    { id: 'TOP', name: 'TOP', bgColor: 'deepskyblue', textColor: '#000000', bold: false },
    // Deprecated numeric TOP variants (now computed automatically per-column)
    { id: 'TOP2', name: 'TOP2', bgColor: 'deepskyblue', textColor: '#000000', bold: false, hidden: true },
    { id: 'TOP3', name: 'TOP3', bgColor: 'deepskyblue', textColor: '#000000', bold: false, hidden: true },
    { id: 'HIGH', name: 'HIGH', bgColor: 'lightblue', textColor: '#000000', bold: false },
    { id: 'HIGH_TEAM', name: 'HIGH<br>TEAM', bgColor: 'aquamarine', textColor: '#000000', bold: false },
    { id: 'HIGH_TEAM_PRAISED', name: 'HIGH<br>TEAM', bgColor: 'mediumturquoise', textColor: '#000000', bold: false },
    { id: 'SAFE', name: 'SAFE', bgColor: '#f9f9ff', textColor: '#000000', bold: false },
    { id: 'IN', name: 'IN', bgColor: 'lightcyan', textColor: '#000000', bold: false },
    { id: 'LOW', name: 'LOW', bgColor: 'lightpink', textColor: '#000000', bold: false },
    { id: 'BTM', name: 'BTM', bgColor: 'tomato', textColor: '#000000', bold: false },
    // Deprecated numeric BTM variants (now computed automatically per-column)
    { id: 'BTM2', name: 'BTM2', bgColor: 'tomato', textColor: '#000000', bold: false, hidden: true },
    { id: 'BTM3', name: 'BTM3', bgColor: 'tomato', textColor: '#000000', bold: false, hidden: true },
    { id: 'BTM7', name: 'BTM7', bgColor: 'tomato', textColor: '#000000', bold: false, hidden: true },
    // Deprecated visual variant (now applied automatically when BTMn appears n times in a column)
    { id: 'BTM6', name: 'BTM', bgColor: 'hotpink', textColor: '#000000', bold: false, hidden: true },
    { id: 'ELIM', name: 'ELIM', bgColor: 'red', textColor: '#000000ff', bold: true },
    { id: 'FELIM', name: 'ELIM', bgColor: 'sienna', textColor: '#ffffff', bold: true },
    // Deprecated visual variant (now applied automatically when 2+ ELIM appear in a column)
    { id: 'DELIM', name: 'ELIM', bgColor: 'darkred', textColor: '#ffffff', bold: true, hidden: true },
    { id: 'EXTM', name: 'EXTM', bgColor: 'red', textColor: '#000000ff', bold: true },
    { id: 'WINNER', name: 'WINNER', bgColor: 'yellow', textColor: '#000000', bold: true },
    { id: 'RUNNERUP', name: 'RUNNER<br>UP', bgColor: 'silver', textColor: '#000000', bold: true },
    { id: 'MISSCON', name: 'MISS<br>CON', bgColor: 'cyan', textColor: '#000000', bold: true },
    { id: 'FIN_TOP3', name: 'TOP3', bgColor: 'lightgreen', textColor: '#000000', bold: true },
    { id: 'FIN_TOP4', name: 'TOP4', bgColor: 'springgreen', textColor: '#000000', bold: true },
    { id: 'LSFTC', name: 'LSFTC', bgColor: '#ffae00', textColor: '#000000', bold: true },
    { id: 'LSFTC_L1', name: 'LOST<br>1ST<br>ROUND', bgColor: '#ff7c00', textColor: '#000000', bold: true },
    { id: 'LSFTC_L2', name: 'LOST<br>2ND<br>ROUND', bgColor: '#ffae00', textColor: '#000000', bold: true },
    { id: 'LSFTC_L3', name: 'LOST<br>3RD<br>ROUND', bgColor: '#ffd100', textColor: '#000000', bold: true },
    // Lip Sync Smackdown round placements (Season 14 Episode 11)
    { id: 'SAFE_R1', name: 'SAFE<br><small><small>(Round 1)</small></small>', bgColor: 'lightcoral', textColor: '#ffffff', bold: false },
    { id: 'SAFE_R2', name: 'SAFE<br><small><small>(Round 2)</small></small>', bgColor: 'indianred', textColor: '#ffffff', bold: false },
    { id: 'SAFE_R3', name: 'SAFE<br><small><small>(Round 3)</small></small>', bgColor: 'crimson', textColor: '#ffffff', bold: false },
    // Rudemption Lip Sync Smackdown placements
    { id: 'SMACK_LOSS', name: 'LOSS', bgColor: '#ff9e9e', textColor: '#000000', bold: false },
    { id: 'SMACK_WIN', name: 'WIN', bgColor: 'lightskyblue', textColor: '#000000', bold: false },
    { id: 'SMACK_SOLO', name: 'SOLO', bgColor: 'lightgreen', textColor: '#000000', bold: false },
    { id: 'FAME', name: 'FAME GAMES WINNER', bgColor: '#C7DDB5', textColor: '#000000', bold: true },
    { id: 'RUN', name: 'RUN', bgColor: '#D3FFB5', textColor: '#000000', bold: true },
    { id: 'GUEST', name: 'GUEST', bgColor: 'gainsboro', textColor: '#000000', bold: false },
    { id: 'DEPT', name: 'DEPT', bgColor: 'plum', textColor: '#000000', bold: true },
    { id: 'RTRN', name: 'RTRN', bgColor: 'orange', textColor: '#000000', bold: true },
    { id: 'QUIT', name: 'QUIT', bgColor: 'palevioletred', textColor: '#000000ff', bold: true },
    { id: 'DISQ', name: 'DISQ', bgColor: 'black', textColor: '#ffffff', bold: true },
    { id: 'ELIM_R1', name: 'ELIM', bgColor: 'darkred', textColor: '#ffffff', bold: true },
    // All Stars specific placements
    { id: 'CUT', name: 'CUT', bgColor: 'red', textColor: '#000000ff', bold: true },
    { id: 'HIGH_CUT', name: 'HIGH<br>+<br>CUT', bgColor: '#D66D73', textColor: '#000000', bold: false },
    { id: 'BLOCK', name: 'BLOCK', bgColor: 'red', textColor: '#000000ff', bold: true },
    { id: 'HIGH_BLOCK', name: 'HIGH<br>+<br>BLOCK', bgColor: '#D66D73', textColor: '#000000', bold: false },
    { id: 'OUT_EVENT', name: 'OUT', bgColor: 'purple', textColor: '#ffffff', bold: true },
    { id: 'OUT', name: '', bgColor: 'darkgrey', textColor: '#000000', bold: false, isOut: true },
    { id: 'EMPTY', name: '', bgColor: '#ffffff', textColor: '#000000', bold: false }
];

// LaLaPaRUZa placements (SDADHH - She Done Already Done Had Herses)
const LALAPARUZA_PLACEMENTS = [
    { id: 'LPRZW', name: 'WINNER', bgColor: '#C7DDB5', textColor: '#000000', bold: true },
    { id: 'LPRZ_L1', name: 'LOST<br>1ST<br>ROUND', bgColor: '#75975E', textColor: '#000000', bold: true },
    { id: 'LPRZ_L2', name: 'LOST<br>2ND<br>ROUND', bgColor: '#87AB69', textColor: '#000000', bold: true },
    { id: 'LPRZ_L3', name: 'LOST<br>3RD<br>ROUND', bgColor: '#A3C585', textColor: '#000000', bold: true },
    { id: 'LPRZ_L4', name: 'LOST<br>4TH<br>ROUND', bgColor: '#B9D3A2', textColor: '#000000', bold: true }
];

// Merge LaLaPaRUZa placements into DEFAULT_PLACEMENTS
const DEFAULT_PLACEMENTS_MERGED = [...DEFAULT_PLACEMENTS, ...LALAPARUZA_PLACEMENTS];

const DEFAULT_PLACEMENT_IDS = new Set(DEFAULT_PLACEMENTS_MERGED.map(p => p.id));
const DEFAULT_PLACEMENTS_BY_ID = Object.fromEntries(DEFAULT_PLACEMENTS_MERGED.map(p => [p.id, p]));

// ===== TERMINAL PLACEMENTS =====
// Centralized sets of placements that mark a contestant as "done competing"
// Used for: auto-fill OUT, rank calculation (TBA vs actual rank), tie grouping

// Elimination/exit placements - trigger auto-fill OUT for remaining episodes
const ELIMINATION_PLACEMENTS = new Set([
    'ELIM',
    'FELIM',
    'DELIM',
    'ELIM_R1',
    'EXTM',
    'QUIT',
    'DISQ',
    'DEPT',
    'CUT',
    'HIGH_CUT',
    'OUT_EVENT'
]);

// Finale placements - contestant finished the competition (doesn't trigger OUT)
const FINALE_PLACEMENTS = new Set([
    'WINNER',
    'RUNNERUP',
    'MISSCON',
    'FIN_TOP3',
    'FIN_TOP4',
    'LSFTC',
    'LSFTC_L1',
    'LSFTC_L2',
    'LSFTC_L3',
    'LPRZW',
    'LPRZ_L1',
    'LPRZ_L2',
    'LPRZ_L3',
    'LPRZ_L4'
]);

// All terminal placements combined - used for rank TBA logic
const TERMINAL_PLACEMENTS = new Set([...ELIMINATION_PLACEMENTS, ...FINALE_PLACEMENTS]);

// Concise hover guidance for placements (shown as tooltips in palette/dropdown/list).
// Keep these short and action-oriented (how to use in track record tables).
const PLACEMENT_HELP = {
    WIN: 'Won the challenge.',
    WIN_LSWIN: 'Top All Star of the week who won the lip sync alongside the Lip Sync Assassin (both won).',
    WIN_LSLOSS: 'Top All Star of the week who lost the lip sync to the Lip Sync Assassin.',
    WIN_LSTIE: 'Top All Star who lost the lip sync but still had elimination power due to a tie in group voting.',
    TOP: 'Top placement; auto-shows TOP2/TOP3 when multiple in a column.',
    HIGH: 'High placement (great week, not top).',
    HIGH_TEAM: 'High as part of a team (no individual win).',
    HIGH_TEAM_PRAISED: 'High in team + praised individually.',
    SAFE: 'Safe (not top or bottom).',
    IN: 'Safe/In (use for split premieres).',
    LOW: 'Low (one of the worst, not bottom).',
    BTM: 'Bottom placement; auto-shows BTM2/BTM3 when multiple in a column.',
    ELIM: 'Eliminated; later empty episodes auto-fill as OUT.',
    FELIM: 'Eliminated (finale/prelim); later empty episodes auto-fill as OUT.',
    // DELIM is a hidden visual variant applied automatically; keep for legacy saves.
    DELIM: 'Double elimination (auto-applied when 2+ ELIM in a column).',
    EXTM: 'Exterminated (Dragula); later empty episodes auto-fill as OUT.',
    WINNER: 'Season winner.',
    RUNNERUP: 'Season runner-up.',
    MISSCON: 'Miss Congeniality.',
    FIN_TOP3: 'Finalist: Top 3.',
    FIN_TOP4: 'Finalist: Top 4.',
    LSFTC: 'Lip Sync For The Crown: pick the round lost below.',
    LSFTC_L1: 'Lost the 1st LSFTC round.',
    LSFTC_L2: 'Lost the 2nd LSFTC round.',
    LSFTC_L3: 'Lost the 3rd LSFTC round.',
    FAME: 'Fame Games Winner',
    RUN: 'Reunion / still in the running (special status).',
    GUEST: 'Guest appearance (post-elimination).',
    DEPT: 'Departed (medical / personal reasons).',
    RTRN: 'Returned to competition.',
    QUIT: 'Quit the competition.',
    DISQ: 'Disqualified.',
    // Lip Sync Smackdown
    SAFE_R1: 'Safe in Round 1 of lip sync smackdown.',
    SAFE_R2: 'Safe in Round 2 of lip sync smackdown.',
    SAFE_R3: 'Safe in Round 3 of lip sync smackdown.',
    ELIM_R1: 'Eliminated in Round 1 of lip sync smackdown.',
    // Rudemption Lip Sync Smackdown
    SMACK_LOSS: 'Lost the Rudemption Lip Sync Smackdown and did not continue.',
    SMACK_WIN: 'Won the Rudemption Lip Sync Smackdown and advanced.',
    SMACK_SOLO: 'Performed solo after opponent chose not to participate and advanced in the Smackdown.',
    // All Stars specific
    CUT: 'Eliminated (All Stars format).',
    HIGH_CUT: 'High placement but eliminated (All Stars).',
    BLOCK: 'Blocked from winning (All Stars twist).',
    HIGH_BLOCK: 'High placement but blocked (All Stars).',
    OUT_EVENT: 'Out/Not competing in this event (use for split premieres or special episodes).',
    OUT: 'Out of the competition (auto-used after ELIM).',
    EMPTY: 'Blank cell.',
    // LaLaPaRUZa (SDADHH)
    LPRZW: 'LaLaPaRUZa winner (Queen of She Done Already Done Had Herses).',
    LPRZ_L1: 'Lost in the 1st round of LaLaPaRUZa.',
    LPRZ_L2: 'Lost in the 2nd round of LaLaPaRUZa.',
    LPRZ_L3: 'Lost in the 3rd round of LaLaPaRUZa.',
    LPRZ_L4: 'Lost in the 4th round of LaLaPaRUZa.'
};

function getPlacementTooltipText(id, fallbackLabel) {
    const placementId = String(id);
    const help = PLACEMENT_HELP[placementId] || '';

    // Dynamic RTRN combinations (RTRN_<BASE>): reuse base placement help.
    if (!help && isRtrnComboId(placementId)) {
        const baseId = getRtrnComboBaseId(placementId);
        const base = baseId ? getPlacementById(canonicalizePlacementId(baseId)) : null;
        const baseLabel = (base?.name || baseId || '').replace(/<br>/g, ' ').trim();
        const baseHelp = baseId ? (PLACEMENT_HELP[String(canonicalizePlacementId(baseId))] || '') : '';
        const label = String(fallbackLabel || (baseLabel ? `RTRN + ${baseLabel}` : placementId) || placementId).trim();
        if (!baseHelp) return label;
        return `${label} — Returned + ${baseHelp}`;
    }

    // Dynamic QUIT combinations (QUIT_<BASE>): reuse base placement help. Shows as BASE + QUIT.
    if (!help && isQuitComboId(placementId)) {
        const baseId = getQuitComboBaseId(placementId);
        const base = baseId ? getPlacementById(canonicalizePlacementId(baseId)) : null;
        const baseLabel = (base?.name || baseId || '').replace(/<br>/g, ' ').trim();
        const baseHelp = baseId ? (PLACEMENT_HELP[String(canonicalizePlacementId(baseId))] || '') : '';
        const label = String(fallbackLabel || (baseLabel ? `${baseLabel} + QUIT` : placementId) || placementId).trim();
        if (!baseHelp) return label;
        return `${label} — ${baseHelp} then quit.`;
    }

    // Dynamic DISQ combinations (DISQ_<BASE>): reuse base placement help. Shows as BASE + DISQ.
    if (!help && isDisqComboId(placementId)) {
        const baseId = getDisqComboBaseId(placementId);
        const base = baseId ? getPlacementById(canonicalizePlacementId(baseId)) : null;
        const baseLabel = (base?.name || baseId || '').replace(/<br>/g, ' ').trim();
        const baseHelp = baseId ? (PLACEMENT_HELP[String(canonicalizePlacementId(baseId))] || '') : '';
        const label = String(fallbackLabel || (baseLabel ? `${baseLabel} + DISQ` : placementId) || placementId).trim();
        if (!baseHelp) return label;
        return `${label} — ${baseHelp} then disqualified.`;
    }

    // Dynamic DEPT combinations (DEPT_<BASE>): reuse base placement help. Shows as BASE + DEPT.
    if (!help && isDeptComboId(placementId)) {
        const baseId = getDeptComboBaseId(placementId);
        const base = baseId ? getPlacementById(canonicalizePlacementId(baseId)) : null;
        const baseLabel = (base?.name || baseId || '').replace(/<br>/g, ' ').trim();
        const baseHelp = baseId ? (PLACEMENT_HELP[String(canonicalizePlacementId(baseId))] || '') : '';
        const label = String(fallbackLabel || (baseLabel ? `${baseLabel} + DEPT` : placementId) || placementId).trim();
        if (!baseHelp) return label;
        return `${label} — ${baseHelp} then departed.`;
    }

    if (!help) return String(fallbackLabel || id || '');
    const label = String(fallbackLabel || id || '').trim();
    return label ? `${label} — ${help}` : help;
}

// Border add-ons: these DO NOT replace a placement; they only add a border style on top of it.
// They are painted in their own palette tab and stored per-cell.
const DEFAULT_BORDER_ADDONS = [
    { id: 'POTION', name: 'POTION', borderColor: '#FE4EDA', borderWidth: 3 },
    { id: 'BEAVER', name: 'BEAVER', borderColor: 'gold', borderWidth: 3 },
    { id: 'CHOCOLATE', name: 'CHOCOLATE', borderColor: 'brown', borderWidth: 3 },
    { id: 'SAVED', name: 'SAVED', borderColor: '#FFED00', borderWidth: 3 }
];

const DEFAULT_BORDER_ADDON_IDS = new Set(DEFAULT_BORDER_ADDONS.map(b => b.id));

// Border hover descriptions
const BORDER_HELP = {
    POTION: 'Immunity potion - drink to save yourself from the bottom.',
    BEAVER: 'Golden Beaver - given to a queen to save them from lipsyncing for their life.',
    CHOCOLATE: 'Chocolate bar twist - unwrap when eliminated, golden bar saves you.',
    SAVED: 'Saved by immunity/advantage (yellow border).'
};

function getBorderTooltipText(id, fallbackLabel) {
    const help = BORDER_HELP[String(id)] || '';
    if (!help) return String(fallbackLabel || id || '');
    const label = String(fallbackLabel || id || '').trim();
    return label ? `${label} — ${help}` : help;
}

// Subtext add-ons: these DO NOT replace a placement; they add small italic text below the placement.
// They are painted in their own palette tab and stored per-cell.
const DEFAULT_SUBTEXT_ADDONS = [
    { id: 'MINI', name: 'MINI', text: 'Mini\nChall.\nWinner' },
    { id: 'TEAMCAP', name: 'TEAM CAPTAIN', text: 'Team\nCaptain' },
    { id: 'DOUBLEDIAM', name: 'DOUBLE DIAMOND', text: 'Double\nDiam.' },
    { id: 'GIFT', name: 'GIFTED BADGE', text: 'Gifted Badge' }
];

const DEFAULT_SUBTEXT_ADDON_IDS = new Set(DEFAULT_SUBTEXT_ADDONS.map(s => s.id));

// Subtext hover descriptions
const SUBTEXT_HELP = {
    MINI: 'Won the mini challenge for this episode.',
    TEAMCAP: 'Team captain for this challenge.',
    DOUBLEDIAM: 'Earned the Double Diamond in this episode.',
    GIFT: 'Received a Gifted Badge in this episode.'
};

function getSubtextTooltipText(id, fallbackLabel) {
    const help = SUBTEXT_HELP[String(id)] || '';
    if (!help) return String(fallbackLabel || id || '');
    const label = String(fallbackLabel || id || '').trim();
    return label ? `${label} — ${help}` : help;
}

// Contestant groups: these style the Contestant name cell and add a small (Group X) label, matching tables.html.
const DEFAULT_GROUPS = [
    { id: 'G1', name: 'Group 1', bgColor: '#db4fa2', textColor: '#ffffff' },
    { id: 'G2', name: 'Group 2', bgColor: '#000000', textColor: '#ffffff' }
];

const PLACEHOLDER_PHOTO_DATA_URI =
        'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110">
    <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#f3f4f6"/>
            <stop offset="1" stop-color="#e5e7eb"/>
        </linearGradient>
    </defs>
    <rect width="110" height="110" rx="8" fill="url(#g)"/>
    <circle cx="55" cy="44" r="18" fill="#cbd5e1"/>
    <path d="M22 104c7-22 25-32 33-32s26 10 33 32" fill="#cbd5e1"/>
    <path d="M32 82c6-10 15-15 23-15s17 5 23 15" fill="#94a3b8" opacity=".25"/>
</svg>
`.trim());

// ===== STATE =====
let state = {
    title: 'Season 1 Track Record',
    showPhotos: true,
    showAge: true,
    showLocation: true,
    allStarsMode: false,
    customEpisodeLabels: false,
    groupsEnabled: false,
    groups: DEFAULT_GROUPS.map(g => ({ ...g })),
    paintPlacementId: 'WIN',
    paintBorderId: 'NONE',
    paintSubtextId: 'NONE',
    // Table appearance settings
    tableScale: 80,
    tableFont: 'Geist, system-ui, sans-serif',
    tableFontSize: 100,
    cellPadding: 100,
    photoSize: 100,
    autoFillOut: true,
    showRankColumn: true,
    placementsById: {},
    placementRoots: [],
    bordersById: {},
    borderRoots: [],
    subtextsById: {},
    subtextRoots: [],
    episodes: [
        { id: 1, groupLabel: 'Ep. 1', challenge: 'Talent<br>Show' },
        { id: 2, groupLabel: 'Ep. 2', challenge: 'Design' },
        { id: 3, groupLabel: 'Ep. 3', challenge: 'Snatch<br>Game' },
        { id: 4, groupLabel: 'Ep. 4', challenge: 'Girl<br>Groups' },
        { id: 5, groupLabel: 'Ep. 5', challenge: 'Finale' }
    ],
    contestants: [
        // Note: TOP/BTM auto-numbering (TOP2/BTM2) is computed per-column.
        { id: 1, name: 'Queen A', photo: '', age: 25, location: 'Los Angeles, CA', groupId: 'G1', placements: ['WIN', 'HIGH', 'BTM', 'WIN', 'WINNER'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] },
        { id: 2, name: 'Queen B', photo: '', age: 28, location: 'New York, NY', groupId: 'G2', placements: ['HIGH', 'WIN', 'LOW', 'BTM', 'RUNNERUP'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] },
        { id: 3, name: 'Queen C', photo: '', age: 30, location: 'Chicago, IL', groupId: 'G1', placements: ['SAFE', 'BTM', 'WIN', 'ELIM', 'GUEST'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] },
        { id: 4, name: 'Queen D', photo: '', age: 22, location: 'Miami, FL', groupId: 'G2', placements: ['TOP', 'BTM', 'ELIM', 'OUT', 'MISSCON'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] }
    ]
};

let activeDropdown = null;
let nextContestantId = 5;
let nextEpisodeId = 6;
let nextPlacementId = 100;
let nextSubtextId = 200;
let nextBorderId = 100;
let nextGroupId = 3;

// ===== INITIALIZATION =====
function syncSettingsUI() {
    // Sync all settings controls with state
    const els = {
        tableTitle: document.getElementById('tableTitle'),
        showPhotos: document.getElementById('showPhotos'),
        showAge: document.getElementById('showAge'),
        showLocation: document.getElementById('showLocation'),
        allStarsMode: document.getElementById('allStarsMode'),
        enableGroups: document.getElementById('enableGroups'),
        enableGroupsSettings: document.getElementById('enableGroupsSettings'),
        customEpisodeLabels: document.getElementById('customEpisodeLabels'),
        customEpisodeLabelsSettings: document.getElementById('customEpisodeLabelsSettings'),
        tableScale: document.getElementById('tableScale'),
        tableScaleValue: document.getElementById('tableScaleValue'),
        tableFont: document.getElementById('tableFont'),
        tableFontSize: document.getElementById('tableFontSize'),
        tableFontSizeValue: document.getElementById('tableFontSizeValue'),
        cellPadding: document.getElementById('cellPadding'),
        cellPaddingValue: document.getElementById('cellPaddingValue'),
        photoSize: document.getElementById('photoSize'),
        photoSizeValue: document.getElementById('photoSizeValue'),
        autoFillOut: document.getElementById('autoFillOut'),
        showRankColumn: document.getElementById('showRankColumn')
    };

    if (els.tableTitle) els.tableTitle.value = state.title || 'Season 1 Track Record';
    if (els.showPhotos) els.showPhotos.checked = !!state.showPhotos;
    if (els.showAge) els.showAge.checked = !!state.showAge;
    if (els.showLocation) els.showLocation.checked = !!state.showLocation;
    if (els.allStarsMode) els.allStarsMode.checked = !!state.allStarsMode;
    if (els.enableGroups) els.enableGroups.checked = !!state.groupsEnabled;
    if (els.enableGroupsSettings) els.enableGroupsSettings.checked = !!state.groupsEnabled;
    if (els.customEpisodeLabels) els.customEpisodeLabels.checked = !!state.customEpisodeLabels;
    if (els.customEpisodeLabelsSettings) els.customEpisodeLabelsSettings.checked = !!state.customEpisodeLabels;

    const scale = state.tableScale ?? 100;
    const fontSize = state.tableFontSize ?? 100;
    const padding = state.cellPadding ?? 100;
    const photoS = state.photoSize ?? 100;
    if (els.tableScale) els.tableScale.value = scale;
    if (els.tableScaleValue) els.tableScaleValue.textContent = `${scale}%`;
    if (els.tableFont) els.tableFont.value = state.tableFont || 'Geist, system-ui, sans-serif';
    if (els.tableFontSize) els.tableFontSize.value = fontSize;
    if (els.tableFontSizeValue) els.tableFontSizeValue.textContent = `${fontSize}%`;
    if (els.cellPadding) els.cellPadding.value = padding;
    if (els.cellPaddingValue) els.cellPaddingValue.textContent = `${padding}%`;
    if (els.photoSize) els.photoSize.value = photoS;
    if (els.photoSizeValue) els.photoSizeValue.textContent = `${photoS}%`;
    if (els.autoFillOut) els.autoFillOut.checked = state.autoFillOut !== false;
    if (els.showRankColumn) els.showRankColumn.checked = state.showRankColumn !== false;
}

document.addEventListener('DOMContentLoaded', () => {
    initPlacementsState();
    initBordersState();
    initSubtextsState();
    initGroupsState();
    normalizeDeprecatedPlacementIdsInContestants();
    migrateBorderAddonsFromPlacements();
    if (!state.paintPlacementId) state.paintPlacementId = 'WIN';
    if (!state.paintBorderId) state.paintBorderId = 'NONE';
    if (!state.paintSubtextId) state.paintSubtextId = 'NONE';
    if (state.tableScale === undefined) state.tableScale = 80;
    if (!state.tableFont) state.tableFont = 'Geist, system-ui, sans-serif';
    if (state.tableFontSize === undefined) state.tableFontSize = 100;
    if (state.cellPadding === undefined) state.cellPadding = 100;
    if (state.photoSize === undefined) state.photoSize = 100;
    if (state.autoFillOut === undefined) state.autoFillOut = true;
    if (state.showRankColumn === undefined) state.showRankColumn = true;
    if (state.allStarsMode === undefined) state.allStarsMode = false;
    syncSettingsUI();
    initTabs();
    renderAll();
    setupEventListeners();
});

function setSidebarCollapsed(isCollapsed) {
    const wrapper = document.querySelector('.sidebar-wrapper');
    if (!wrapper) return;
    wrapper.classList.toggle('is-collapsed', !!isCollapsed);

    const btn = document.getElementById('toggleSidebar');
    if (!btn) return;
    btn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
}

function initGroupsState() {
    if (typeof state.groupsEnabled !== 'boolean') state.groupsEnabled = false;
    if (!Array.isArray(state.groups) || state.groups.length === 0) {
        state.groups = DEFAULT_GROUPS.map(g => ({ ...g }));
    }
    // Ensure required fields exist.
    for (const g of state.groups) {
        if (!g.id) g.id = `G${nextGroupId++}`;
        if (!g.name) g.name = g.id;
        if (!g.bgColor) g.bgColor = '#000000';
        if (!g.textColor) g.textColor = '#ffffff';
    }
    // Compute nextGroupId from existing IDs like G1, G2...
    let maxN = 0;
    for (const g of state.groups) {
        const m = /^G(\d+)$/.exec(String(g.id));
        if (m) maxN = Math.max(maxN, Number(m[1]) || 0);
    }
    nextGroupId = Math.max(nextGroupId, maxN + 1);

    // Ensure contestants have a groupId field (doesn't force assignment unless groups are enabled).
    const fallback = state.groups[0]?.id || '';
    for (const c of state.contestants) {
        if (typeof c.groupId !== 'string') c.groupId = '';
        if (state.groupsEnabled && !c.groupId) c.groupId = fallback;
        if (c.groupId && !getGroupById(c.groupId)) c.groupId = '';
    }
}

function getGroupById(id) {
    return (state.groups || []).find(g => g.id === id) || null;
}

function initBordersState() {
    const hasMap = state.bordersById && Object.keys(state.bordersById).length > 0;
    const hasRoots = Array.isArray(state.borderRoots) && state.borderRoots.length > 0;
    if (!hasMap || !hasRoots) {
        const { bordersById, borderRoots } = buildDefaultBorders();
        state.bordersById = bordersById;
        state.borderRoots = borderRoots;
    }

    // Ensure any new default borders exist without clobbering user customizations.
    for (const b of DEFAULT_BORDER_ADDONS) {
        if (!state.bordersById[b.id]) state.bordersById[b.id] = { ...b };
    }

    // Ensure contestants have a borders array aligned to episodes.
    for (const c of state.contestants) {
        if (!Array.isArray(c.borders)) c.borders = [];
        while (c.borders.length < state.episodes.length) c.borders.push('NONE');
        if (c.borders.length > state.episodes.length) c.borders.length = state.episodes.length;
    }
}

function initSubtextsState() {
    const hasMap = state.subtextsById && Object.keys(state.subtextsById).length > 0;
    const hasRoots = Array.isArray(state.subtextRoots) && state.subtextRoots.length > 0;
    if (!hasMap || !hasRoots) {
        const { subtextsById, subtextRoots } = buildDefaultSubtexts();
        state.subtextsById = subtextsById;
        state.subtextRoots = subtextRoots;
    }

    // Ensure any new default subtexts exist without clobbering user customizations.
    for (const s of DEFAULT_SUBTEXT_ADDONS) {
        if (!state.subtextsById[s.id]) state.subtextsById[s.id] = { ...s };
    }

    // Ensure contestants have a subtexts array aligned to episodes.
    for (const c of state.contestants) {
        if (!Array.isArray(c.subtexts)) c.subtexts = [];
        while (c.subtexts.length < state.episodes.length) c.subtexts.push('NONE');
        if (c.subtexts.length > state.episodes.length) c.subtexts.length = state.episodes.length;
    }
}

function buildDefaultBorders() {
    const bordersById = {};
    for (const b of DEFAULT_BORDER_ADDONS) bordersById[b.id] = { ...b };
    const borderRoots = DEFAULT_BORDER_ADDONS.map(b => b.id);
    return { bordersById, borderRoots };
}

function buildDefaultSubtexts() {
    const subtextsById = {};
    for (const s of DEFAULT_SUBTEXT_ADDONS) subtextsById[s.id] = { ...s };
    const subtextRoots = DEFAULT_SUBTEXT_ADDONS.map(s => s.id);
    return { subtextsById, subtextRoots };
}

function getBorderById(id) {
    return state.bordersById?.[id] || null;
}

function isDefaultBorder(id) {
    return DEFAULT_BORDER_ADDON_IDS.has(id);
}

function getSubtextById(id) {
    return state.subtextsById?.[id] || null;
}

function isDefaultSubtext(id) {
    return DEFAULT_SUBTEXT_ADDON_IDS.has(id);
}

function migrateBorderAddonsFromPlacements() {
    // Back-compat: older projects may have used these as placements.
    // Convert them to border overlays + keep a reasonable base placement.
    const borderPlacementMap = {
        IMMU: { border: 'IMMU', replacement: 'SAFE' },
        SAVED: { border: 'SAVED', replacement: 'BTM' },
        BVR: { border: 'BVR', replacement: 'BTM' },
        CHOCOLATE: { border: 'CHOC', replacement: 'BTM' },
        CHOC: { border: 'CHOC', replacement: 'BTM' }
    };

    for (const c of state.contestants) {
        if (!Array.isArray(c.placements)) continue;
        if (!Array.isArray(c.borders)) c.borders = state.episodes.map(() => 'NONE');
        for (let epIdx = 0; epIdx < c.placements.length; epIdx++) {
            const raw = c.placements[epIdx];
            const m = borderPlacementMap[raw];
            if (!m) continue;
            c.borders[epIdx] = m.border;
            c.placements[epIdx] = m.replacement;
        }
    }
}

function initPlacementsState() {
    // Initialize placements tree if missing (also supports old saved projects)
    const hasMap = state.placementsById && Object.keys(state.placementsById).length > 0;
    const hasRoots = Array.isArray(state.placementRoots) && state.placementRoots.length > 0;
    if (!hasMap || !hasRoots) {
        const { placementsById, placementRoots } = buildDefaultPlacementsTree();
        state.placementsById = placementsById;
        state.placementRoots = placementRoots;
    }

    normalizePlacementTree();
}

function normalizePlacementTree() {
    if (!state.placementsById || !Array.isArray(state.placementRoots)) return;

    // Normalize children arrays (remove missing, hidden, self refs, duplicates)
    for (const id of Object.keys(state.placementsById)) {
        const p = state.placementsById[id];
        if (!p || !Array.isArray(p.children)) continue;
        const seen = new Set();
        p.children = p.children.filter(cId => {
            if (!cId || cId === id) return false;
            const child = state.placementsById[cId];
            if (!child || child.hidden) return false;
            if (seen.has(cId)) return false;
            seen.add(cId);
            return true;
        });
    }

    // Gather all *valid* child IDs referenced anywhere (after normalization)
    const childIds = new Set();
    for (const id of Object.keys(state.placementsById)) {
        const p = state.placementsById[id];
        if (!p || !Array.isArray(p.children)) continue;
        for (const c of p.children) childIds.add(c);
    }

    // Roots should contain only true roots: remove anything that is a child of another node
    const rootSeen = new Set();
    state.placementRoots = state.placementRoots
        .filter(rId => {
            if (!rId) return false;
            const node = state.placementsById[rId];
            if (!node || node.hidden) return false;
            if (childIds.has(rId)) return false;
            if (rootSeen.has(rId)) return false;
            rootSeen.add(rId);
            return true;
        });
}

function buildDefaultPlacementsTree() {
    const placementsById = {};
    for (const p of DEFAULT_PLACEMENTS_MERGED) {
        placementsById[p.id] = { ...p, children: [], collapsed: false };
    }

    // Default grouping (can be changed by user via drag/drop)
    // Keep deprecated visual variants out of the tree; they are applied automatically.
    // Keep this minimal to avoid duplicates in the palette.
    placementsById.WIN.children = ['WIN_LSWIN', 'WIN_LSLOSS', 'WIN_LSTIE'];
    placementsById.HIGH.children = ['HIGH_TEAM', 'HIGH_TEAM_PRAISED'];
    placementsById.SAFE.children = ['SAFE_R1', 'SAFE_R2', 'SAFE_R3', 'IN'];
    placementsById.ELIM.children = ['FELIM', 'DELIM', 'EXTM', 'ELIM_R1'];
    placementsById.LSFTC.children = ['LSFTC_L1', 'LSFTC_L2', 'LSFTC_L3'];
    placementsById.SMACK_LOSS.children = ['SMACK_WIN', 'SMACK_SOLO'];
    placementsById.LPRZW.children = ['LPRZ_L1', 'LPRZ_L2', 'LPRZ_L3', 'LPRZ_L4'];
    placementsById.CUT.children = ['HIGH_CUT'];
    placementsById.BLOCK.children = ['HIGH_BLOCK'];

    // Curated root order (exclude hidden/deprecated variants)
    const placementRoots = [
        'WIN',
        'TOP',
        'SAFE',
        'HIGH',
        'LOW',
        'BTM',
        'ELIM',
        'WINNER',
        'RUNNERUP',
        'MISSCON',
        'FIN_TOP3',
        'FIN_TOP4',
        'LSFTC',
        'LPRZW',
        'SMACK_LOSS',
        'FAME',
        'RUN',
        'GUEST',
        'DEPT',
        'RTRN',
        'QUIT',
        'DISQ',
        'CUT',
        'BLOCK',
        'OUT_EVENT',
        'OUT',
        'EMPTY'
    ].filter(id => placementsById[id] && !placementsById[id].hidden);

    return { placementsById, placementRoots };
}

function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });
}

function setupEventListeners() {
    // Close dropdown on outside click (legacy)
    document.addEventListener('click', (e) => {
        if (activeDropdown && !e.target.closest('.placement-dropdown') && !e.target.closest('.placement-cell')) {
            closeDropdown();
        }
        // Close paint-tabs dropdown on outside click
        if (!e.target.closest('.paint-tabs-dropdown')) {
            const openDropdown = document.querySelector('.paint-tabs-dropdown.open');
            if (openDropdown) {
                openDropdown.classList.remove('open');
                const toggle = openDropdown.querySelector('.paint-tabs-dropdown-toggle');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Paint interactions (palette + click/drag painting)
    const preview = document.getElementById('tablePreview');
    if (preview) {
        preview.addEventListener('click', handlePreviewClick);
        preview.addEventListener('mousedown', handlePreviewMouseDown);
        preview.addEventListener('mouseover', handlePreviewMouseOver);
    }
    document.addEventListener('mouseup', () => {
        if (paintState.isPainting) finalizeStroke();
        paintState.isPainting = false;
        paintState.lastKey = null;
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        const isMac = navigator.platform.toLowerCase().includes('mac');
        const mod = isMac ? e.metaKey : e.ctrlKey;
        if (!mod) return;

        // Ctrl/Cmd+Z => undo; Ctrl/Cmd+Shift+Z => redo; Ctrl/Cmd+Y => redo
        if (key === 'z' && !e.shiftKey) {
            e.preventDefault();
            commitActiveLiveTableEditIfNeeded();
            undo();
        } else if (key === 'z' && e.shiftKey) {
            e.preventDefault();
            commitActiveLiveTableEditIfNeeded();
            redo();
        } else if (key === 'y') {
            e.preventDefault();
            commitActiveLiveTableEditIfNeeded();
            redo();
        }
    });

    // Track/commit live table contenteditable edits (so they're undoable even before blur).
    const tablePreview = document.getElementById('tablePreview');
    if (tablePreview) {
        tablePreview.addEventListener('focusin', handleLiveTableEditFocusIn, true);
        tablePreview.addEventListener('focusout', handleLiveTableEditFocusOut, true);
    }

    // Allow "Paste from clipboard" flow for image menus (Ctrl+V after clicking Paste).
    document.addEventListener('paste', handleArmedImagePaste, true);

    // Settings toggles
    document.getElementById('showPhotos').addEventListener('change', (e) => {
        state.showPhotos = e.target.checked;
        renderTable();
    });

    document.getElementById('showAge').addEventListener('change', (e) => {
        state.showAge = e.target.checked;
        renderTable();
    });

    document.getElementById('showLocation').addEventListener('change', (e) => {
        state.showLocation = e.target.checked;
        renderTable();
    });

    document.getElementById('allStarsMode').addEventListener('change', (e) => {
        state.allStarsMode = e.target.checked;
        renderContestantsList();
        renderTable();
    });

    // Title input (record undo/redo on blur to avoid spamming history)
    const tableTitleInput = document.getElementById('tableTitle');
    let titleEditStart = null;
    if (tableTitleInput) {
        tableTitleInput.addEventListener('focus', () => {
            titleEditStart = state.title;
        });
        tableTitleInput.addEventListener('input', (e) => {
            state.title = e.target.value;
        });
        tableTitleInput.addEventListener('blur', () => {
            if (historyState.isApplying) return;
            const before = titleEditStart;
            const after = state.title;
            titleEditStart = null;
            if (before !== after) {
                pushHistory({ type: 'fields', changes: [{ scope: 'state', id: null, field: 'title', from: before, to: after }] });
            }
        });
    }

    // Export buttons
    document.getElementById('exportHtml').addEventListener('click', exportAsHtml);
    document.getElementById('exportImage').addEventListener('click', exportAsImage);
    document.getElementById('copyHtml').addEventListener('click', copyHtmlToClipboard);

    // Sidebar collapse
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    if (toggleSidebarBtn) {
        // Ensure initial state
        setSidebarCollapsed(document.querySelector('.sidebar-wrapper')?.classList.contains('is-collapsed'));
        toggleSidebarBtn.addEventListener('click', () => {
            const wrapper = document.querySelector('.sidebar-wrapper');
            const isCollapsed = wrapper?.classList.contains('is-collapsed');
            setSidebarCollapsed(!isCollapsed);
        });
    }

    // Add buttons
    document.getElementById('addContestant').addEventListener('click', addContestant);
    document.getElementById('addEpisode').addEventListener('click', addEpisode);
    document.getElementById('addPlacement').addEventListener('click', addPlacement);

    const addBorderAddonBtn = document.getElementById('addBorderAddon');
    if (addBorderAddonBtn) addBorderAddonBtn.addEventListener('click', addBorderAddon);

    const addSubtextAddonBtn = document.getElementById('addSubtextAddon');
    if (addSubtextAddonBtn) addSubtextAddonBtn.addEventListener('click', addSubtextAddon);

    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) closeModal();
    });

    // Load/Save
    document.getElementById('saveProject').addEventListener('click', saveProject);
    document.getElementById('loadProject').addEventListener('click', () => {
        document.getElementById('loadProjectInput').click();
    });
    document.getElementById('loadProjectInput').addEventListener('change', loadProject);
    document.getElementById('newBlankProject').addEventListener('click', newBlankProject);
    document.getElementById('resetProject').addEventListener('click', resetProject);

    // Changelog modal
    const changelogBtn = document.getElementById('showChangelog');
    if (changelogBtn) changelogBtn.addEventListener('click', showChangelogModal);

    // Episode label editing (sync both checkboxes)
    const customEpisodeLabels = document.getElementById('customEpisodeLabels');
    const customEpisodeLabelsSettings = document.getElementById('customEpisodeLabelsSettings');
    const handleEpisodeLabelToggle = (e) => {
        state.customEpisodeLabels = e.target.checked;
        if (customEpisodeLabels) customEpisodeLabels.checked = state.customEpisodeLabels;
        if (customEpisodeLabelsSettings) customEpisodeLabelsSettings.checked = state.customEpisodeLabels;
        renderEpisodesList();
        renderTable();
    };
    if (customEpisodeLabels) customEpisodeLabels.addEventListener('change', handleEpisodeLabelToggle);
    if (customEpisodeLabelsSettings) customEpisodeLabelsSettings.addEventListener('change', handleEpisodeLabelToggle);

    // Groups (sync both checkboxes)
    const enableGroups = document.getElementById('enableGroups');
    const enableGroupsSettings = document.getElementById('enableGroupsSettings');
    const handleGroupsToggle = (e) => {
        state.groupsEnabled = !!e.target.checked;
        if (enableGroups) enableGroups.checked = state.groupsEnabled;
        if (enableGroupsSettings) enableGroupsSettings.checked = state.groupsEnabled;
        initGroupsState();
        renderContestantsList();
        renderGroupsList();
        renderTable();
    };
    if (enableGroups) enableGroups.addEventListener('change', handleGroupsToggle);
    if (enableGroupsSettings) enableGroupsSettings.addEventListener('change', handleGroupsToggle);

    const addGroupBtn = document.getElementById('addGroup');
    if (addGroupBtn) {
        addGroupBtn.addEventListener('click', addGroup);
    }

    // Table appearance settings
    const tableScale = document.getElementById('tableScale');
    const tableScaleValue = document.getElementById('tableScaleValue');
    if (tableScale && tableScaleValue) {
        tableScale.addEventListener('input', (e) => {
            state.tableScale = Number(e.target.value);
            tableScaleValue.textContent = `${state.tableScale}%`;
            renderTable();
        });
    }

    const tableFont = document.getElementById('tableFont');
    if (tableFont) {
        tableFont.addEventListener('change', (e) => {
            state.tableFont = e.target.value;
            renderTable();
        });
    }

    const tableFontSize = document.getElementById('tableFontSize');
    const tableFontSizeValue = document.getElementById('tableFontSizeValue');
    if (tableFontSize && tableFontSizeValue) {
        tableFontSize.addEventListener('input', (e) => {
            state.tableFontSize = Number(e.target.value);
            tableFontSizeValue.textContent = `${state.tableFontSize}%`;
            renderTable();
        });
    }

    const cellPadding = document.getElementById('cellPadding');
    const cellPaddingValue = document.getElementById('cellPaddingValue');
    if (cellPadding && cellPaddingValue) {
        cellPadding.addEventListener('input', (e) => {
            state.cellPadding = Number(e.target.value);
            cellPaddingValue.textContent = `${state.cellPadding}%`;
            renderTable();
        });
    }

    const photoSize = document.getElementById('photoSize');
    const photoSizeValue = document.getElementById('photoSizeValue');
    if (photoSize && photoSizeValue) {
        photoSize.addEventListener('input', (e) => {
            state.photoSize = Number(e.target.value);
            photoSizeValue.textContent = `${state.photoSize}%`;
            renderTable();
        });
    }

    const autoFillOut = document.getElementById('autoFillOut');
    if (autoFillOut) {
        autoFillOut.addEventListener('change', (e) => {
            state.autoFillOut = e.target.checked;
            renderTable();
        });
    }

    const showRankColumn = document.getElementById('showRankColumn');
    if (showRankColumn) {
        showRankColumn.addEventListener('change', (e) => {
            state.showRankColumn = e.target.checked;
            renderTable();
        });
    }
}

let activeLiveTableEdit = null;

function getLiveEditValue(el) {
    if (!el) return '';
    const mode = el.dataset.editMode || 'text';
    return mode === 'html' ? (el.innerHTML ?? '') : (el.innerText ?? '');
}

function normalizeLiveEditValue(scope, field, raw) {
    if (raw === null || raw === undefined) raw = '';
    const s = String(raw);
    if (scope === 'contestant' && field === 'name') {
        return s.split(/\r?\n/)[0].trim();
    }
    if (scope === 'episode' && field === 'challenge') {
        return s;
    }
    return s.trim();
}

function handleLiveTableEditFocusIn(e) {
    const el = e.target?.closest?.('[data-edit-scope][contenteditable="true"]');
    if (!el) return;
    activeLiveTableEdit = {
        el,
        scope: el.dataset.editScope,
        id: el.dataset.editId ? Number(el.dataset.editId) : null,
        field: el.dataset.editField,
        from: normalizeLiveEditValue(el.dataset.editScope, el.dataset.editField, getLiveEditValue(el))
    };
}

function handleLiveTableEditFocusOut(e) {
    const el = e.target?.closest?.('[data-edit-scope][contenteditable="true"]');
    if (!el) return;
    // Only commit if this is the active one.
    if (!activeLiveTableEdit || activeLiveTableEdit.el !== el) return;
    commitActiveLiveTableEditIfNeeded();
    activeLiveTableEdit = null;
}

function commitActiveLiveTableEditIfNeeded() {
    if (historyState.isApplying) return;
    if (!activeLiveTableEdit || !activeLiveTableEdit.el) return;

    const { el, scope, id, field, from } = activeLiveTableEdit;
    const rawNow = getLiveEditValue(el);
    const to = normalizeLiveEditValue(scope, field, rawNow);
    if (to === from) return;

    const change = { scope, id, field, from, to };
    applyFieldChange(change, to);
    pushHistory({ type: 'fields', changes: [change] });

    // Keep UI consistent after normalizing values.
    syncSettingsUI();
    renderAll();
}

function applyFieldChange(change, value) {
    if (!change) return;
    const scope = change.scope;
    const id = change.id;
    const field = change.field;

    if (scope === 'contestant') {
        const c = state.contestants.find(x => x.id === id);
        if (!c) return;
        c[field] = value;
        return;
    }

    if (scope === 'episode') {
        const ep = state.episodes.find(x => x.id === id);
        if (!ep) return;
        ep[field] = value;
        return;
    }

    if (scope === 'group') {
        const g = getGroupById(id);
        if (!g) return;
        g[field] = value;
        return;
    }

    if (scope === 'placement') {
        const p = getPlacementById(id);
        if (!p) return;
        p[field] = value;
        return;
    }

    if (scope === 'border') {
        const b = getBorderById(id);
        if (!b) return;
        b[field] = value;
        return;
    }

    if (scope === 'subtext') {
        const s = getSubtextById(id);
        if (!s) return;
        s[field] = value;
        return;
    }

    if (scope === 'state') {
        state[field] = value;
        if (field === 'title') {
            const input = document.getElementById('tableTitle');
            if (input && document.activeElement !== input) input.value = String(value ?? '');
        }
    }
}

// ===== RENDERING =====
function renderAll() {
    renderContestantsList();
    renderGroupsList();
    renderEpisodesList();
    renderPlacementsList();
    renderBordersList();
    renderSubtextsList();
    renderTable();
}

function renderContestantsList() {
    const container = document.getElementById('contestantsList');
    container.innerHTML = state.contestants.map((c, idx) => `
        <div class="contestant-item" data-id="${c.id}" draggable="true">
            <span class="drag-handle">⋮⋮</span>
            <div class="contestant-img-wrapper" onclick="openContestantPhotoMenu(event, ${c.id})" title="Click for photo options: Upload or Paste">
                <img src="${c.photo || PLACEHOLDER_PHOTO_DATA_URI}" class="contestant-img" alt="${c.name}">
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
                <input type="text" class="form-control" value="${escapeHtml(c.name)}" 
                    onchange="updateContestant(${c.id}, 'name', this.value)" placeholder="Name" style="font-weight: bold;">
                ${state.groupsEnabled ? `
                    <select class="form-control contestant-group-select" onchange="updateContestant(${c.id}, 'groupId', this.value)" title="Group">
                        ${(state.groups || []).map(g => `<option value="${escapeHtml(g.id)}" ${c.groupId === g.id ? 'selected' : ''}>${escapeHtml(g.name)}</option>`).join('')}
                    </select>
                ` : ''}
                ${state.allStarsMode ? `
                <div style="display: flex; gap: 4px;">
                    <input type="text" class="form-control" style="flex: 1" value="${escapeHtml(c.originalSeason || '')}" 
                        onchange="updateContestant(${c.id}, 'originalSeason', this.value)" placeholder="Original Season(s)" title="Original Season(s)">
                    <input type="text" class="form-control" style="flex: 1" value="${escapeHtml(c.originalRank || '')}" 
                        onchange="updateContestant(${c.id}, 'originalRank', this.value)" placeholder="Original Rank(s)" title="Original Rank(s)">
                </div>
                ` : `
                <div style="display: flex; gap: 4px;">
                    <input type="number" class="form-control" style="width: 55px" value="${c.age}" 
                        onchange="updateContestant(${c.id}, 'age', this.value)" placeholder="Age" title="Age">
                    <input type="text" class="form-control" style="flex: 1" value="${escapeHtml(c.location || '')}" 
                        onchange="updateContestant(${c.id}, 'location', this.value)" placeholder="Location" title="Location">
                </div>
                `}
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteContestant(${c.id})" title="Delete">×</button>
        </div>
    `).join('');

    // Setup drag and drop
    setupContestantDragDrop();
}

let imageInputMenuState = null;
let armedImagePaste = null;

function getImageFileFromClipboardData(clipboardData) {
    const items = clipboardData?.items;
    if (!items) return null;
    for (const item of items) {
        if (item.kind !== 'file') continue;
        if (typeof item.type === 'string' && item.type.startsWith('image/')) {
            const file = item.getAsFile();
            if (file) return file;
        }
    }
    return null;
}

function closeImageInputMenu() {
    if (!imageInputMenuState) return;
    const { menuEl, onDocPointerDown, onKeyDown, onResizeOrScroll } = imageInputMenuState;
    if (menuEl && menuEl.parentNode) menuEl.parentNode.removeChild(menuEl);
    document.removeEventListener('pointerdown', onDocPointerDown, true);
    document.removeEventListener('keydown', onKeyDown, true);
    window.removeEventListener('resize', onResizeOrScroll, true);
    window.removeEventListener('scroll', onResizeOrScroll, true);
    imageInputMenuState = null;
    armedImagePaste = null;
}

function positionImageInputMenu(menuEl, anchorEl) {
    const rect = anchorEl.getBoundingClientRect();
    const margin = 6;

    // Start aligned to left edge of anchor; clamp within viewport.
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const menuW = menuEl.offsetWidth || 220;
    const menuH = menuEl.offsetHeight || 120;

    let left = rect.left;
    let top = rect.bottom + margin;

    left = Math.max(margin, Math.min(left, vw - menuW - margin));
    top = Math.max(margin, Math.min(top, vh - menuH - margin));

    menuEl.style.left = `${Math.round(left)}px`;
    menuEl.style.top = `${Math.round(top)}px`;
}

function openImageInputMenu({ anchorEl, contestantId }) {
    closeImageInputMenu();

    const menuEl = document.createElement('div');
    menuEl.className = 'img-input-menu';
    menuEl.setAttribute('role', 'menu');
    menuEl.innerHTML = `
        <button type="button" class="img-input-menu-item" data-action="upload">Upload from computer…</button>
        <button type="button" class="img-input-menu-item" data-action="paste">Paste from clipboard</button>
        <div class="img-input-menu-hint" data-hint>Tip: If paste is blocked, click “Paste” then press Ctrl+V.</div>
    `;
    document.body.appendChild(menuEl);
    positionImageInputMenu(menuEl, anchorEl);

    const onResizeOrScroll = () => {
        if (!imageInputMenuState) return;
        positionImageInputMenu(menuEl, anchorEl);
    };

    const onDocPointerDown = (e) => {
        if (menuEl.contains(e.target) || anchorEl.contains(e.target)) return;
        closeImageInputMenu();
    };

    const onKeyDown = (e) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            closeImageInputMenu();
        }
    };

    menuEl.addEventListener('click', async (e) => {
        const btn = e.target?.closest?.('button[data-action]');
        if (!btn) return;
        const action = btn.getAttribute('data-action');
        if (action === 'upload') {
            closeImageInputMenu();
            triggerPhotoUpload(contestantId);
            return;
        }

        if (action === 'paste') {
            // Try Clipboard API first (best UX), then fall back to "armed" Ctrl+V paste.
            const hintEl = menuEl.querySelector('[data-hint]');
            const ok = await tryPasteContestantPhotoFromClipboard(contestantId);
            if (ok) {
                closeImageInputMenu();
            } else {
                armedImagePaste = { contestantId, expiresAt: Date.now() + 20_000 };
                if (hintEl) hintEl.textContent = 'Now press Ctrl+V to paste an image (Esc to cancel).';
            }
        }
    });

    imageInputMenuState = { menuEl, anchorEl, contestantId, onDocPointerDown, onKeyDown, onResizeOrScroll };
    document.addEventListener('pointerdown', onDocPointerDown, true);
    document.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('resize', onResizeOrScroll, true);
    window.addEventListener('scroll', onResizeOrScroll, true);
}

function openContestantPhotoMenu(e, contestantId) {
    if (e?.preventDefault) e.preventDefault();
    if (e?.stopPropagation) e.stopPropagation();
    const anchorEl = e?.currentTarget || e?.target;
    if (!anchorEl) return;
    openImageInputMenu({ anchorEl, contestantId });
}

function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(blob);
    });
}

function loadImageFromDataUrl(dataUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = dataUrl;
    });
}

async function cropToSquareJpegDataUrl(blob, targetPx = 110, quality = 0.8) {
    const dataUrl = await blobToDataUrl(blob);
    const img = await loadImageFromDataUrl(dataUrl);

    const canvas = document.createElement('canvas');
    const size = Math.min(img.width, img.height);
    canvas.width = targetPx;
    canvas.height = targetPx;
    const ctx = canvas.getContext('2d');

    const sx = (img.width - size) / 2;
    const sy = (img.height - size) / 2;
    ctx.drawImage(img, sx, sy, size, size, 0, 0, targetPx, targetPx);
    return canvas.toDataURL('image/jpeg', quality);
}

function setContestantPhotoDataUrl(contestantId, dataUrl) {
    const contestant = state.contestants.find(c => c.id === contestantId);
    if (!contestant) return;
    const before = contestant.photo;
    const after = dataUrl;
    applyFieldChange({ scope: 'contestant', id: contestantId, field: 'photo' }, after);
    if (!historyState.isApplying && before !== after) {
        pushHistory({ type: 'fields', changes: [{ scope: 'contestant', id: contestantId, field: 'photo', from: before, to: after }] });
    }
    renderAll();
}

async function tryPasteContestantPhotoFromClipboard(contestantId) {
    // Avoid triggering browser permission prompts repeatedly.
    // If clipboard-read isn't already granted (or we're on file://), fall back to Ctrl+V paste.
    if (location.protocol === 'file:') return false;
    if (!navigator.clipboard || typeof navigator.clipboard.read !== 'function') return false;
    if (navigator.permissions && typeof navigator.permissions.query === 'function') {
        try {
            const perm = await navigator.permissions.query({ name: 'clipboard-read' });
            if (perm?.state !== 'granted') return false;
        } catch {
            // If querying permissions fails, don't risk prompting; use Ctrl+V fallback.
            return false;
        }
    }
    try {
        const items = await navigator.clipboard.read();
        for (const item of items) {
            const type = (item.types || []).find(t => String(t).startsWith('image/'));
            if (!type) continue;
            const blob = await item.getType(type);
            const dataUrl = await cropToSquareJpegDataUrl(blob, 110, 0.8);
            setContestantPhotoDataUrl(contestantId, dataUrl);
            return true;
        }
        return false;
    } catch {
        return false;
    }
}

function handleArmedImagePaste(e) {
    if (!armedImagePaste) return;
    if (Date.now() > armedImagePaste.expiresAt) {
        armedImagePaste = null;
        return;
    }
    const file = getImageFileFromClipboardData(e.clipboardData);
    if (!file) return;
    e.preventDefault();
    cropToSquareJpegDataUrl(file, 110, 0.8)
        .then((dataUrl) => setContestantPhotoDataUrl(armedImagePaste.contestantId, dataUrl))
        .finally(() => closeImageInputMenu());
}

function renderGroupsList() {
    const section = document.getElementById('groupsSection');
    const manager = document.getElementById('groupsManager');
    const container = document.getElementById('groupsList');
    if (!container) return;

    if (section) section.hidden = !state.groupsEnabled;
    if (!state.groupsEnabled) {
        container.innerHTML = '';
        return;
    }

    initGroupsState();
    container.innerHTML = (state.groups || []).map(g => {
        return `
            <div class="group-item" data-id="${escapeHtml(g.id)}">
                <input type="color" class="placement-color" value="${colorNameToHex(g.bgColor)}"
                    onchange="updateGroup('${g.id}', 'bgColor', this.value)" title="Background color">
                <input type="color" class="placement-text-color" value="${colorNameToHex(g.textColor)}"
                    onchange="updateGroup('${g.id}', 'textColor', this.value)" title="Text color">
                <input type="text" class="form-control group-name" value="${escapeHtml(g.name)}"
                    onchange="updateGroup('${g.id}', 'name', this.value)" placeholder="Group name">
                <button class="btn btn-danger btn-sm" onclick="deleteGroup('${g.id}')" title="Delete">×</button>
            </div>
        `;
    }).join('');
}

function renderEpisodesList() {
    const container = document.getElementById('episodesList');
    container.innerHTML = state.episodes.map((ep, idx) => `
        <div class="episode-item" data-id="${ep.id}" draggable="true">
            <span class="drag-handle">⋮⋮</span>
            ${state.customEpisodeLabels
                ? `<input type="text" class="form-control episode-name" value="${escapeHtml(getEpisodeGroupLabel(ep, idx))}" 
                    onchange="updateEpisode(${ep.id}, 'groupLabel', this.value)" placeholder="Ep. 1">`
                : `<span class="episode-label" title="Auto-numbered">Ep. ${idx + 1}</span>`
            }
            <input type="text" class="form-control episode-challenge" value="${ep.challenge.replace(/<br>/g, ' ')}" 
                onchange="updateEpisode(${ep.id}, 'challenge', this.value.replace(/ /g, '<br>'))" placeholder="Challenge">
            <button class="btn btn-danger btn-sm" onclick="deleteEpisode(${ep.id})">×</button>
        </div>
    `).join('');

    setupEpisodeDragDrop();
}

function renderPlacementsList() {
    const container = document.getElementById('placementsList');
    const html = renderPlacementTree(state.placementRoots, 0);
    container.innerHTML = html;

    setupPlacementDragDrop();
}

function renderBordersList() {
    const container = document.getElementById('bordersList');
    if (!container) return;
    const ids = Array.isArray(state.borderRoots) ? state.borderRoots : [];
    container.innerHTML = ids
        .map(id => {
            const b = getBorderById(id);
            if (!b) return '';
            const label = (b.name || '').replace(/<br>/g, ' ');
            const width = Number(b.borderWidth) || 3;
            return `
                <div class="border-item" data-id="${escapeHtml(b.id)}">
                    <input type="color" class="placement-color" value="${colorNameToHex(b.borderColor)}"
                        onchange="updateBorderAddon('${b.id}', 'borderColor', this.value)" title="Border color">
                    <input type="number" class="form-control border-width" min="1" max="12" value="${width}"
                        onchange="updateBorderAddon('${b.id}', 'borderWidth', this.value)" title="Border width (px)">
                    <input type="text" class="form-control border-name" value="${escapeHtml(label)}"
                        onchange="updateBorderAddon('${b.id}', 'name', this.value.replace(/ /g, '<br>'))" placeholder="Label">
                    ${!isDefaultBorder(b.id) ? `<button class="btn btn-danger btn-sm" onclick="deleteBorderAddon('${b.id}')" title="Delete">×</button>` : '<span class="placement-spacer"></span>'}
                </div>
            `;
        })
        .join('');
}

function renderSubtextsList() {
    const container = document.getElementById('subtextsList');
    if (!container) return;
    const ids = Array.isArray(state.subtextRoots) ? state.subtextRoots : [];
    container.innerHTML = ids
        .map(id => {
            const s = getSubtextById(id);
            if (!s) return '';
            const label = (s.name || '').replace(/<br>/g, ' ');
            const text = (s.text || '').replace(/\n/g, ' ');
            return `
                <div class="subtext-item" data-id="${escapeHtml(s.id)}">
                    <input type="text" class="form-control subtext-name" value="${escapeHtml(label)}"
                        onchange="updateSubtextAddon('${s.id}', 'name', this.value)" placeholder="Label">
                    <input type="text" class="form-control subtext-text" value="${escapeHtml(text)}"
                        onchange="updateSubtextAddon('${s.id}', 'text', this.value.replace(/ /g, '\\n'))" placeholder="Text (spaces → line breaks)">
                    ${!isDefaultSubtext(s.id) ? `<button class="btn btn-danger btn-sm" onclick="deleteSubtextAddon('${s.id}')" title="Delete">×</button>` : '<span class="placement-spacer"></span>'}
                </div>
            `;
        })
        .join('');
}

function renderPlacementTree(ids, depth) {
    return ids
        .map(id => {
            const p = getPlacementById(id);
            if (!p || p.hidden) return '';

            const hasChildren = Array.isArray(p.children) && p.children.length > 0;
            const isCollapsed = !!p.collapsed;
            const label = (p.name || '').replace(/<br>/g, ' ');
            const tooltip = getPlacementTooltipText(p.id, label || (p.isOut ? '(Out)' : '(Empty)'));

            const row = `
                <div class="placement-item" data-id="${p.id}" draggable="true" style="--placement-depth:${depth}" title="${escapeHtml(tooltip)}">
                    <span class="drag-handle" title="Drag">⋮⋮</span>
                    <button class="placement-toggle" ${hasChildren ? '' : 'disabled'}
                        onclick="togglePlacementCollapse('${p.id}')" title="${hasChildren ? (isCollapsed ? 'Expand' : 'Collapse') : ''}">
                        ${hasChildren ? (isCollapsed ? '▸' : '▾') : ''}
                    </button>
                    ${p.id === 'BTM' && getPlacementById('BTM6') ? `
                        <div class="placement-color-stack" title="Background color">
                            <input type="color" class="placement-color" value="${colorNameToHex(p.bgColor)}" 
                                onchange="updatePlacement('${p.id}', 'bgColor', this.value)" title="BTM color">
                            <input type="color" class="placement-color-save" value="${colorNameToHex(getPlacementById('BTM6').bgColor)}"
                                onchange="updatePlacement('BTM6', 'bgColor', this.value)" title="Save color (no ELIM + 2+ BTM)">
                        </div>
                    ` : `
                        <input type="color" class="placement-color" value="${colorNameToHex(p.bgColor)}" 
                            onchange="updatePlacement('${p.id}', 'bgColor', this.value)" title="Background color">
                    `}
                    <input type="text" class="placement-name" value="${escapeHtml(label)}" 
                        onchange="updatePlacement('${p.id}', 'name', this.value.replace(/ /g, '<br>'))" placeholder="Label" title="${escapeHtml(tooltip)}">
                    <input type="color" class="placement-text-color" value="${colorNameToHex(p.textColor)}" 
                        onchange="updatePlacement('${p.id}', 'textColor', this.value)" title="Text color">
                    <label class="checkbox-group text-sm" title="Bold text">
                        <input type="checkbox" ${p.bold ? 'checked' : ''} 
                            onchange="updatePlacement('${p.id}', 'bold', this.checked)">B
                    </label>
                    ${!isDefaultPlacement(p.id) ? `<button class="btn btn-danger btn-sm" onclick="deletePlacement('${p.id}')" title="Delete">×</button>` : '<span class="placement-spacer"></span>'}
                </div>
            `;

            const children = hasChildren && !isCollapsed ? `
                <div class="placement-children">
                    ${renderPlacementTree(p.children, depth + 1)}
                </div>
            ` : '';

            return row + children;
        })
        .join('');
}

function renderTable() {
    const container = document.getElementById('tablePreview');

    // Preserve scroll position before re-render
    const existingScrollContainer = document.getElementById('tableScroll');
    const scrollLeft = existingScrollContainer?.scrollLeft || 0;
    const scrollTop = existingScrollContainer?.scrollTop || 0;

    // Keep placement palette in sync with latest edits/moves.
    normalizePlacementTree();

    const episodeGroups = buildEpisodeGroups();
    const episodeCounts = computeEpisodePlacementCounts();

    // Apply table appearance settings
    const scale = (state.tableScale || 100) / 100;
    const fontSize = ((state.tableFontSize || 100) / 100) * scale;
    const padding = ((state.cellPadding || 100) / 100) * scale;
    const photoScale = ((state.photoSize || 100) / 100) * scale;
    const fontFamily = state.tableFont || 'Geist, system-ui, sans-serif';

    let tableHtml = `
        <table class="track-record-table wikitable" style="font-size:${fontSize}em; font-family:${fontFamily};">
            <tbody>
                <tr class="header-row" style="padding:${0.5 * padding}em;">
                    ${state.showRankColumn ? '<th rowspan="2">Rank</th>' : ''}
                    <th rowspan="2" style="width:100px;">Contestant</th>
                    ${state.showPhotos ? '<th rowspan="2">Photo</th>' : ''}
                    ${state.allStarsMode ? '<th rowspan="2">Original<br>Season(s)</th>' : (state.showAge ? '<th rowspan="2">Age</th>' : '')}
                    ${state.allStarsMode ? '<th rowspan="2">Original<br>Rank(s)</th>' : (state.showLocation ? '<th rowspan="2" style="width:100px;">Location</th>' : '')}
                    ${episodeGroups.map(g => `<th style="width:17px;" colspan="${g.span}">${escapeHtml(g.label)}</th>`).join('')}
                </tr>
                <tr>
                    ${state.episodes.map(ep => `
                        <th class="episode-header" style="padding:${0.125 * padding}em ${0.25 * padding}em;">
                            <span contenteditable="true" data-edit-scope="episode" data-edit-id="${ep.id}" data-edit-field="challenge" data-edit-mode="html">${ep.challenge}</span>
                        </th>
                    `).join('')}
                    <th class="add-episode-btn-cell" style="padding:0; border:none; background:transparent;">
                        <button class="table-add-btn" onclick="addEpisode()" title="Add episode">+</button>
                    </th>
                </tr>
    `;

    const rankLabels = state.showRankColumn ? computeRankLabelsForCurrentOrder() : null;

    state.contestants.forEach((contestant, cIdx) => {
        const rank = rankLabels ? (rankLabels[cIdx] || getRank(cIdx)) : getRank(cIdx);
        const group = state.groupsEnabled ? getGroupById(contestant.groupId) : null;
        const groupStyle = group ? ` style="background:${group.bgColor};color:${group.textColor};padding:${0.4 * padding}em ${0.75 * padding}em;"` : ` style="padding:${0.4 * padding}em ${0.75 * padding}em;"`;
        const groupLabel = group ? `<br><small contenteditable="false">(${escapeHtml(group.name)})</small>` : '';
        const cellPaddingStyle = `style="padding:${0.25 * padding}em ${0.5 * padding}em;"`;
        const textCellPaddingStyle = `style="padding:${0.4 * padding}em ${0.75 * padding}em;"`;
        tableHtml += `
            <tr class="table-contestant-row" data-id="${contestant.id}">
                ${state.showRankColumn ? `<td class="rank-cell" ${cellPaddingStyle}>${rank}</td>` : ''}
                <td class="contestant-name-cell" ${groupStyle}>
                    <span class="inline-edit" contenteditable="true" data-edit-scope="contestant" data-edit-id="${contestant.id}" data-edit-field="name"><b>${escapeHtml(contestant.name)}</b></span>${groupLabel}
                </td>
                ${state.showPhotos ? `
                    <td class="photo-cell" ${cellPaddingStyle}>
                        <div class="photo-menu-wrapper" style="width:${110 * photoScale}px;height:${110 * photoScale}px;">
                            <img src="${contestant.photo || PLACEHOLDER_PHOTO_DATA_URI}" 
                                 alt="${escapeHtml(contestant.name)}" 
                                 style="width:${110 * photoScale}px;height:${110 * photoScale}px;" 
                                 onclick="openContestantPhotoMenu(event, ${contestant.id})"
                                 title="Click for photo options: Upload or Paste">
                        </div>
                    </td>
                ` : ''}
                ${state.allStarsMode ? `<td class="text-cell" contenteditable="true" ${textCellPaddingStyle} data-edit-scope="contestant" data-edit-id="${contestant.id}" data-edit-field="originalSeason">${escapeHtml(contestant.originalSeason || '')}</td>` : (state.showAge ? `<td class="text-cell" contenteditable="true" ${textCellPaddingStyle} data-edit-scope="contestant" data-edit-id="${contestant.id}" data-edit-field="age">${contestant.age || ''}</td>` : '')}
                ${state.allStarsMode ? `<td class="text-cell" contenteditable="true" ${textCellPaddingStyle} data-edit-scope="contestant" data-edit-id="${contestant.id}" data-edit-field="originalRank">${escapeHtml(contestant.originalRank || '')}</td>` : (state.showLocation ? `<td class="text-cell" contenteditable="true" ${textCellPaddingStyle} data-edit-scope="contestant" data-edit-id="${contestant.id}" data-edit-field="location">${escapeHtml(contestant.location || '')}</td>` : '')}
                ${state.episodes.map((ep, epIdx) => {
                    const placementId = contestant.placements[epIdx] || 'EMPTY';
                    return renderPlacementCell(contestant.id, epIdx, placementId, episodeCounts[epIdx], padding);
                }).join('')}
            </tr>
        `;
    });

    // Add row with button to add new contestant
    tableHtml += `
        <tr class="add-contestant-row">
            <td colspan="${(state.showRankColumn ? 1 : 0) + 1 + (state.showPhotos ? 1 : 0) + (state.allStarsMode ? 2 : ((state.showAge ? 1 : 0) + (state.showLocation ? 1 : 0))) + state.episodes.length}" style="padding:0.75rem; border:none; background:transparent;">
                <button class="table-add-btn" onclick="addContestant()" title="Add contestant">+</button>
            </td>
            <td style="padding:0; border:none; background:transparent;"></td>
        </tr>
    `;

    tableHtml += '</tbody></table>';

    const paletteHtml = renderPaintPalette(state.placementRoots);
    container.innerHTML = `${paletteHtml}<div class="table-top-scrollbar" id="tableTopScrollbar"><div class="table-top-scrollbar-inner" id="tableTopScrollbarInner"></div></div><div class="table-scroll" id="tableScroll"><div class="table-stage"><div id="tableGutter" class="table-gutter" aria-hidden="true"></div><div id="tableOnly">${tableHtml}</div></div></div>`;

    // Restore scroll position after re-render
    const newScrollContainer = document.getElementById('tableScroll');
    if (newScrollContainer) {
        newScrollContainer.scrollLeft = scrollLeft;
        newScrollContainer.scrollTop = scrollTop;
    }
    
    // Setup top scrollbar sync
    setupTopScrollbar();

    // Check if tabs overflow and toggle dropdown mode
    checkPaintTabsOverflow();

    setupTableContestantDragDrop();

    updatePaintCursor();
}

function setupTopScrollbar() {
    const topScrollbar = document.getElementById('tableTopScrollbar');
    const topScrollbarInner = document.getElementById('tableTopScrollbarInner');
    const mainScroll = document.getElementById('tableScroll');
    const tableStage = mainScroll?.querySelector('.table-stage');
    
    if (!topScrollbar || !topScrollbarInner || !mainScroll || !tableStage) return;
    
    // Set the inner width to match the table's scrollable width
    topScrollbarInner.style.width = `${tableStage.scrollWidth}px`;
    
    let isSyncing = false;
    
    // Sync top scrollbar -> main scroll
    topScrollbar.addEventListener('scroll', () => {
        if (isSyncing) return;
        isSyncing = true;
        mainScroll.scrollLeft = topScrollbar.scrollLeft;
        isSyncing = false;
    });
    
    // Sync main scroll -> top scrollbar
    mainScroll.addEventListener('scroll', () => {
        if (isSyncing) return;
        isSyncing = true;
        topScrollbar.scrollLeft = mainScroll.scrollLeft;
        isSyncing = false;
    });
}

function checkPaintTabsOverflow() {
    const toolbar = document.querySelector('.paint-toolbar');
    const tabs = document.querySelector('.paint-tabs');
    const dropdown = document.querySelector('.paint-tabs-dropdown');
    if (!toolbar || !tabs || !dropdown) return;

    // Temporarily show tabs to measure
    tabs.style.display = 'flex';
    dropdown.style.display = 'none';
    toolbar.classList.remove('tabs-overflow');

    // Check if tabs wrap (height increases) or overflow container
    const tabsRect = tabs.getBoundingClientRect();
    const firstTab = tabs.querySelector('.paint-tab');
    const lastTab = tabs.querySelector('.paint-tab:last-child');
    
    if (firstTab && lastTab) {
        const firstRect = firstTab.getBoundingClientRect();
        const lastRect = lastTab.getBoundingClientRect();
        // If last tab's top is below first tab's top, tabs have wrapped
        const hasWrapped = lastRect.top > firstRect.top + 2;
        // Or if tabs overflow their container
        const toolbarTop = toolbar.querySelector('.paint-toolbar-top');
        const hasOverflow = toolbarTop && tabs.scrollWidth > toolbarTop.clientWidth * 0.7;
        
        if (hasWrapped || hasOverflow) {
            toolbar.classList.add('tabs-overflow');
        }
    }

    // Let CSS handle visibility based on class
    tabs.style.display = '';
    dropdown.style.display = '';
}

// Re-check on window resize
window.addEventListener('resize', () => {
    checkPaintTabsOverflow();
});

function updatePaintCursor() {
    const tableOnly = document.getElementById('tableOnly');
    if (!tableOnly) return;

    const activeKey = paintUiState.activeSectionKey;
    let color;
    if (activeKey === 'borders') {
        color = getBorderById(state.paintBorderId)?.borderColor || '#111827';
    } else if (activeKey === 'subtexts') {
        color = '#6b7280'; // Gray for subtext mode
    } else {
        color = (getPlacementById(state.paintPlacementId) || getPlacementById('EMPTY'))?.bgColor || '#888888';
    }
    
    const stroke = 'rgba(15,23,42,0.55)';
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="7" fill="${color}" stroke="${stroke}" stroke-width="2"/>
  <circle cx="12" cy="12" r="2" fill="${stroke}" opacity="0.35"/>
</svg>`.trim();
    const uri = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    // Hotspot near center of the circle
    tableOnly.style.cursor = `url("${uri}") 12 12, crosshair`;
}

function renderPlacementCell(contestantId, epIdx, placementId, episodeCountMap, padding = 1) {
    const canonicalId = canonicalizePlacementId(placementId);
    const placement =
        getPlacementById(canonicalId) ||
        getPlacementById('EMPTY') ||
        { id: 'EMPTY', name: '', bgColor: '#ffffff', textColor: '#000000', bold: false, isOut: false };

    // RTRN/QUIT/DISQ combos should still benefit from TOPn/BTMn auto-numbering.
    let effectivePlacement;
    if (isRtrnComboId(canonicalId)) {
        const baseId = placement?.basePlacementId || getRtrnComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        effectivePlacement = {
            ...effectiveBase,
            name: `RTRN<br>+<br>${baseName}`,
            isOut: false
        };
    } else if (isQuitComboId(canonicalId)) {
        // QUIT combos show as BASE + QUIT and use QUIT's colors
        const quitPlacement = getPlacementById('QUIT');
        const baseId = placement?.basePlacementId || getQuitComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        effectivePlacement = {
            ...effectiveBase,
            name: `${baseName}<br>+<br>QUIT`,
            bgColor: quitPlacement?.bgColor || 'palevioletred',
            textColor: quitPlacement?.textColor || '#000000ff',
            isOut: false
        };
    } else if (isDisqComboId(canonicalId)) {
        // DISQ combos show as BASE + DISQ and use DISQ's colors
        const disqPlacement = getPlacementById('DISQ');
        const baseId = placement?.basePlacementId || getDisqComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        effectivePlacement = {
            ...effectiveBase,
            name: `${baseName}<br>+<br>DISQ`,
            bgColor: disqPlacement?.bgColor || 'black',
            textColor: disqPlacement?.textColor || '#ffffff',
            isOut: false
        };
    } else if (isDeptComboId(canonicalId)) {
        // DEPT combos show as BASE + DEPT and use DEPT's colors
        const deptPlacement = getPlacementById('DEPT');
        const baseId = placement?.basePlacementId || getDeptComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        effectivePlacement = {
            ...effectiveBase,
            name: `${baseName}<br>+<br>DEPT`,
            bgColor: deptPlacement?.bgColor || 'plum',
            textColor: deptPlacement?.textColor || '#000000',
            isOut: false
        };
    } else {
        effectivePlacement = getEffectivePlacementForEpisodeColumn(placement, canonicalId, episodeCountMap);
    }
    const cellPaddingStyle = `padding:${0.25 * padding}em ${0.5 * padding}em;`;
    
    if (effectivePlacement.isOut) {
        return `<td class="out-cell" colspan="1" data-contestant="${contestantId}" data-episode="${epIdx}" style="background:${effectivePlacement.bgColor}; border-bottom:1px solid ${effectivePlacement.bgColor};${cellPaddingStyle}"></td>`;
    }

    // Border add-on overlay (does not replace placement)
    const contestant = state.contestants.find(c => c.id === contestantId);
    const borderId = contestant?.borders?.[epIdx] || 'NONE';
    const border = borderId && borderId !== 'NONE' ? getBorderById(borderId) : null;
    const borderStyle = border ? ` border:${Number(border.borderWidth) || 3}px solid ${border.borderColor};` : '';

    // Subtext add-on overlay (does not replace placement)
    // Multiple subtexts can be stacked together, separated by commas
    const subtextId = contestant?.subtexts?.[epIdx] || 'NONE';
    let subtextHtml = '';
    if (subtextId && subtextId !== 'NONE') {
        const subtextIds = subtextId.split(',').map(id => id.trim()).filter(id => id && id !== 'NONE');
        const subtextTexts = subtextIds
            .map(id => getSubtextById(id))
            .filter(s => s)
            .map(s => s.text.replace(/\n/g, '<br>'));
        if (subtextTexts.length > 0) {
            subtextHtml = `<br><small><i>${subtextTexts.join(', ')}</i></small>`;
        }
    }

    const style = `color:${effectivePlacement.textColor}; background:${effectivePlacement.bgColor};${borderStyle}${cellPaddingStyle}`;
    
    // Build content with per-part bold handling for combo placements
    let content;
    if (isRtrnComboId(canonicalId)) {
        // RTRN + BASE combo: apply bold to each part independently
        const rtrnPlacement = getPlacementById('RTRN');
        const baseId = placement?.basePlacementId || getRtrnComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        
        const rtrnPart = rtrnPlacement?.bold ? '<b>RTRN</b>' : 'RTRN';
        const basePart = effectiveBase?.bold ? `<b>${baseName}</b>` : baseName;
        content = `${rtrnPart}<br>+<br>${basePart}`;
    } else if (isQuitComboId(canonicalId)) {
        // BASE + QUIT combo: apply bold to each part independently
        const quitPlacement = getPlacementById('QUIT');
        const baseId = placement?.basePlacementId || getQuitComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        
        const basePart = effectiveBase?.bold ? `<b>${baseName}</b>` : baseName;
        const quitPart = quitPlacement?.bold ? '<b>QUIT</b>' : 'QUIT';
        content = `${basePart}<br>+<br>${quitPart}`;
    } else if (isDisqComboId(canonicalId)) {
        // BASE + DISQ combo: apply bold to each part independently
        const disqPlacement = getPlacementById('DISQ');
        const baseId = placement?.basePlacementId || getDisqComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        
        const basePart = effectiveBase?.bold ? `<b>${baseName}</b>` : baseName;
        const disqPart = disqPlacement?.bold ? '<b>DISQ</b>' : 'DISQ';
        content = `${basePart}<br>+<br>${disqPart}`;
    } else if (isDeptComboId(canonicalId)) {
        // BASE + DEPT combo: apply bold to each part independently
        const deptPlacement = getPlacementById('DEPT');
        const baseId = placement?.basePlacementId || getDeptComboBaseId(canonicalId);
        const baseCanonical = canonicalizePlacementId(baseId);
        const basePlacement = getPlacementById(baseCanonical) || getPlacementById('EMPTY');
        const effectiveBase = getEffectivePlacementForEpisodeColumn(basePlacement, baseCanonical, episodeCountMap);
        const baseName = effectiveBase?.name || basePlacement?.name || baseCanonical || '';
        
        const basePart = effectiveBase?.bold ? `<b>${baseName}</b>` : baseName;
        const deptPart = deptPlacement?.bold ? '<b>DEPT</b>' : 'DEPT';
        content = `${basePart}<br>+<br>${deptPart}`;
    } else if (canonicalId === 'HIGH_CUT') {
        // HIGH + CUT combo: apply bold to each part independently
        const highPlacement = getPlacementById('HIGH');
        const cutPlacement = getPlacementById('CUT');
        const highPart = highPlacement?.bold ? '<b>HIGH</b>' : 'HIGH';
        const cutPart = cutPlacement?.bold ? '<b>CUT</b>' : 'CUT';
        content = `${highPart}<br>+<br>${cutPart}`;
    } else if (canonicalId === 'HIGH_BLOCK') {
        // HIGH + BLOCK combo: apply bold to each part independently
        const highPlacement = getPlacementById('HIGH');
        const blockPlacement = getPlacementById('BLOCK');
        const highPart = highPlacement?.bold ? '<b>HIGH</b>' : 'HIGH';
        const blockPart = blockPlacement?.bold ? '<b>BLOCK</b>' : 'BLOCK';
        content = `${highPart}<br>+<br>${blockPart}`;
    } else {
        content = effectivePlacement.bold ? `<b>${effectivePlacement.name}</b>` : effectivePlacement.name;
    }
    
    return `<td class="placement-cell" data-contestant="${contestantId}" data-episode="${epIdx}" style="${style}">${content}${subtextHtml}</td>`;
}

// ===== PLACEMENT DROPDOWN =====
function showPlacementDropdown(event, contestantId, epIdx) {
    event.stopPropagation();
    closeDropdown();
    
    const cell = event.currentTarget;
    const dropdown = document.createElement('div');
    dropdown.className = 'placement-dropdown';

    dropdown.innerHTML = `<div class="placement-dropdown-scroll">${renderPlacementDropdownTree(state.placementRoots, contestantId, epIdx)}</div>`;
    
    cell.style.position = 'relative';
    cell.appendChild(dropdown);
    activeDropdown = dropdown;
}

function renderPlacementDropdownTree(ids, contestantId, epIdx) {
    return ids
        .map(id => {
            const p = getPlacementById(id);
            if (!p || p.hidden) return '';
            const label = p.name.replace(/<br>/g, ' ') || (p.isOut ? '(Out)' : '(Empty)');
            const tooltip = getPlacementTooltipText(p.id, label);
            const hasChildren = Array.isArray(p.children) && p.children.length > 0;

            if (!hasChildren) {
                return `
                    <div class="placement-dropdown-item" onclick="selectPlacement(${contestantId}, ${epIdx}, '${p.id}')" title="${escapeHtml(tooltip)}">
                        <div class="placement-dropdown-color" style="background:${p.bgColor};"></div>
                        <span>${label}</span>
                    </div>
                `;
            }

            return `
                <div class="placement-dropdown-item has-children" onclick="selectPlacement(${contestantId}, ${epIdx}, '${p.id}')" title="${escapeHtml(tooltip)}">
                    <div class="placement-dropdown-color" style="background:${p.bgColor};"></div>
                    <span>${label}</span>
                    <span class="placement-dropdown-arrow" aria-hidden="true">›</span>
                    <div class="placement-submenu">
                        ${renderPlacementDropdownTree(p.children, contestantId, epIdx)}
                    </div>
                </div>
            `;
        })
        .join('');
}

function closeDropdown() {
    if (activeDropdown) {
        activeDropdown.remove();
        activeDropdown = null;
    }
}

function selectPlacement(contestantId, epIdx, placementId) {
    applyPlacementToContestant(contestantId, epIdx, placementId);
    closeDropdown();
}

function applyPlacementToContestant(contestantId, epIdx, placementId) {
    return applyPlacementToContestantInternal(contestantId, epIdx, placementId, { suppressHistory: false });
}

function applyPlacementToContestantInternal(contestantId, epIdx, placementId, options) {
    const contestant = state.contestants.find(c => c.id === contestantId);
    if (!contestant) return [];

    const opts = options || { suppressHistory: false };
    placementId = canonicalizePlacementId(placementId);

    const changes = [];

    while (contestant.placements.length <= epIdx) {
        contestant.placements.push('EMPTY');
    }

    const before = contestant.placements[epIdx] || 'EMPTY';

    // Auto-convert RTRN combinations: when painting over RTRN, dynamically create
    // RTRN_<PLACEMENT> and attach it under RTRN in the palette.
    if (!historyState.isApplying && before === 'RTRN' && placementId !== 'EMPTY' && placementId !== 'RTRN') {
        const comboId = `RTRN_${placementId}`;
        ensureRtrnComboPlacement(comboId);
        placementId = comboId;
    }

    // QUIT combo: painting another placement on QUIT creates QUIT_<BASE>
    if (!historyState.isApplying && before === 'QUIT' && placementId !== 'EMPTY' && placementId !== 'QUIT') {
        const comboId = `QUIT_${placementId}`;
        ensureQuitComboPlacement(comboId);
        placementId = comboId;
    }

    // DISQ combo: painting another placement on DISQ creates DISQ_<BASE>
    if (!historyState.isApplying && before === 'DISQ' && placementId !== 'EMPTY' && placementId !== 'DISQ') {
        const comboId = `DISQ_${placementId}`;
        ensureDisqComboPlacement(comboId);
        placementId = comboId;
    }

    // DEPT combo: painting another placement on DEPT creates DEPT_<BASE>
    if (!historyState.isApplying && before === 'DEPT' && placementId !== 'EMPTY' && placementId !== 'DEPT') {
        const comboId = `DEPT_${placementId}`;
        ensureDeptComboPlacement(comboId);
        placementId = comboId;
    }
    
    contestant.placements[epIdx] = placementId;
    changes.push({ contestantId, epIdx, from: before, to: placementId });

    // For auto-fill OUT, extract the base placement from combos
    let autoOutId = placementId;
    if (isRtrnComboId(placementId)) {
        autoOutId = canonicalizePlacementId(getRtrnComboBaseId(placementId));
    } else if (isQuitComboId(placementId)) {
        // QUIT combos are always terminal (QUIT itself is terminal)
        autoOutId = 'QUIT';
    } else if (isDisqComboId(placementId)) {
        // DISQ combos are always terminal (DISQ itself is terminal)
        autoOutId = 'DISQ';
    } else if (isDeptComboId(placementId)) {
        // DEPT combos are always terminal (DEPT itself is terminal)
        autoOutId = 'DEPT';
    }

    // Use centralized ELIMINATION_PLACEMENTS for auto-fill OUT logic
    const shouldAutoFillOut = ELIMINATION_PLACEMENTS.has(autoOutId) || ELIMINATION_PLACEMENTS.has(canonicalizePlacementId(autoOutId));

    if (state.autoFillOut && shouldAutoFillOut) {
        for (let i = epIdx + 1; i < state.episodes.length; i++) {
            const prev = contestant.placements[i] || 'EMPTY';
            if (!prev || prev === 'EMPTY') {
                contestant.placements[i] = 'OUT';
                changes.push({ contestantId, epIdx: i, from: prev || 'EMPTY', to: 'OUT' });
            }
        }
    }

    if (!opts.suppressHistory && !historyState.isApplying) {
        pushHistory({ type: 'placements', changes: changes.filter(ch => ch.from !== ch.to) });
    }

    if (!opts.suppressHistory) renderTable();
    return changes;
}

function applyBorderToContestantInternal(contestantId, epIdx, borderId, options) {
    const contestant = state.contestants.find(c => c.id === contestantId);
    if (!contestant) return [];

    const opts = options || { suppressHistory: false };
    if (!Array.isArray(contestant.borders)) contestant.borders = [];
    while (contestant.borders.length <= epIdx) contestant.borders.push('NONE');

    const normalized = borderId && borderId !== 'NONE' ? borderId : 'NONE';
    const before = contestant.borders[epIdx] || 'NONE';
    contestant.borders[epIdx] = normalized;
    const changes = [{ contestantId, epIdx, from: before, to: normalized }];

    if (!opts.suppressHistory && !historyState.isApplying) {
        pushHistory({ type: 'borders', changes: changes.filter(ch => ch.from !== ch.to) });
    }

    if (!opts.suppressHistory) renderTable();
    return changes;
}

function applySubtextToContestantInternal(contestantId, epIdx, subtextId, options) {
    const contestant = state.contestants.find(c => c.id === contestantId);
    if (!contestant) return [];

    const opts = options || { suppressHistory: false };
    if (!Array.isArray(contestant.subtexts)) contestant.subtexts = [];
    while (contestant.subtexts.length <= epIdx) contestant.subtexts.push('NONE');

    const before = contestant.subtexts[epIdx] || 'NONE';
    
    // Handle multiple subtexts: toggle the clicked subtext in the comma-separated list
    if (subtextId === 'NONE') {
        contestant.subtexts[epIdx] = 'NONE';
    } else {
        const currentIds = before === 'NONE' ? [] : before.split(',').map(id => id.trim()).filter(id => id && id !== 'NONE');
        const idIndex = currentIds.indexOf(subtextId);
        
        if (idIndex >= 0) {
            // Remove if already present (toggle off)
            currentIds.splice(idIndex, 1);
        } else {
            // Add if not present (toggle on)
            currentIds.push(subtextId);
        }
        
        contestant.subtexts[epIdx] = currentIds.length > 0 ? currentIds.join(',') : 'NONE';
    }
    
    const normalized = contestant.subtexts[epIdx];
    const changes = [{ contestantId, epIdx, from: before, to: normalized }];

    if (!opts.suppressHistory && !historyState.isApplying) {
        pushHistory({ type: 'subtexts', changes: changes.filter(ch => ch.from !== ch.to) });
    }

    if (!opts.suppressHistory) renderTable();
    return changes;
}

// ===== CONTESTANT MANAGEMENT =====
function addContestant() {
    const newContestant = {
        id: nextContestantId++,
        name: `Queen ${nextContestantId - 1}`,
        photo: '',
        age: 25,
        location: '',
        originalSeason: '',
        originalRank: '',
        groupId: state.groupsEnabled ? (state.groups?.[0]?.id || '') : '',
        placements: state.episodes.map(() => 'EMPTY'),
        borders: state.episodes.map(() => 'NONE'),
        subtexts: state.episodes.map(() => 'NONE')
    };
    state.contestants.push(newContestant);
    renderAll();
}

function updateContestant(id, field, value) {
    const contestant = state.contestants.find(c => c.id === id);
    if (contestant) {
        const before = contestant[field];
        contestant[field] = value;
        const after = contestant[field];
        if (!historyState.isApplying && before !== after) {
            pushHistory({
                type: 'fields',
                changes: [{ scope: 'contestant', id, field, from: before, to: after }]
            });
        }
        renderTable();
    }
}

function updateContestantFromTable(id, field, value) {
    const contestant = state.contestants.find(c => c.id === id);
    if (contestant) {
        const before = contestant[field];
        let next;
        if (field === 'name') {
            // If groups are enabled, the name cell includes a non-editable (Group X) line.
            // Keep only the first line as the contestant name.
            next = String(value).split(/\r?\n/)[0].trim();
        } else {
            next = String(value ?? '').trim();
        }

        contestant[field] = next;
        const after = contestant[field];
        if (!historyState.isApplying && before !== after) {
            pushHistory({
                type: 'fields',
                changes: [{ scope: 'contestant', id, field, from: before, to: after }]
            });
        }
        // Also update sidebar
        renderContestantsList();
    }
}

function updateEpisodeFromTable(id, field, value) {
    const episode = state.episodes.find(e => e.id === id);
    if (episode) {
        const before = episode[field];
        episode[field] = value;
        const after = episode[field];
        if (!historyState.isApplying && before !== after) {
            pushHistory({
                type: 'fields',
                changes: [{ scope: 'episode', id, field, from: before, to: after }]
            });
        }
        renderEpisodesList();
    }
}

function triggerPhotoUpload(contestantId) {
    // Create a temporary file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => updateContestantPhoto(contestantId, input);
    input.click();
}

function addGroup() {
    initGroupsState();
    state.groupsEnabled = true;
    const id = `G${nextGroupId++}`;
    state.groups.push({ id, name: `Group ${id.replace('G', '')}`, bgColor: '#0b1224', textColor: '#ffffff' });

    // Assign ungrouped contestants to the new group only if they have no group.
    for (const c of state.contestants) {
        if (!c.groupId) c.groupId = state.groups[0]?.id || '';
    }

    const enableGroups = document.getElementById('enableGroups');
    if (enableGroups) enableGroups.checked = true;
    renderContestantsList();
    renderGroupsList();
    renderTable();
}

function updateGroup(id, field, value) {
    const g = getGroupById(id);
    if (!g) return;
    const before = g[field];
    g[field] = value;
    const after = g[field];
    if (!historyState.isApplying && before !== after) {
        pushHistory({
            type: 'fields',
            changes: [{ scope: 'group', id, field, from: before, to: after }]
        });
    }
    renderContestantsList();
    renderGroupsList();
    renderTable();
}

function deleteGroup(id) {
    if (!Array.isArray(state.groups)) return;
    if (state.groups.length <= 1) {
        alert('You must have at least one group (or disable groups).');
        return;
    }
    state.groups = state.groups.filter(g => g.id !== id);
    for (const c of state.contestants) {
        if (c.groupId === id) c.groupId = state.groups[0]?.id || '';
    }
    initGroupsState();
    renderContestantsList();
    renderGroupsList();
    renderTable();
}

function updateContestantPhoto(id, input) {
    const file = input.files[0];
    if (file) {
        cropToSquareJpegDataUrl(file, 110, 0.8)
            .then((dataUrl) => setContestantPhotoDataUrl(id, dataUrl))
            .catch(() => {
                // Ignore
            });
    }
}

function deleteContestant(id) {
    state.contestants = state.contestants.filter(c => c.id !== id);
    renderAll();
}

// ===== EPISODE MANAGEMENT =====
function addEpisode() {
    const newEpisode = {
        id: nextEpisodeId++,
        groupLabel: `Ep. ${nextEpisodeId - 1}`,
        challenge: 'Challenge'
    };
    state.episodes.push(newEpisode);
    
    // Placements that mean the contestant is out of the running
    const outPlacements = new Set([
        'ELIM', 'FELIM', 'DELIM', 'ELIM_R1', 'EXTM', 'QUIT', 'DISQ', 'DEPT', 'CUT', 'HIGH_CUT', 'OUT'
    ]);
    
    // Add placement for all contestants - OUT if already eliminated, EMPTY otherwise
    state.contestants.forEach(c => {
        // Check if contestant has an elimination placement in any previous episode
        const isOut = c.placements.some(p => {
            const canonId = canonicalizePlacementId(p || 'EMPTY');
            let baseId = canonId;
            if (isRtrnComboId(canonId)) {
                baseId = canonicalizePlacementId(getRtrnComboBaseId(canonId));
            } else if (isQuitComboId(canonId)) {
                // QUIT combos are terminal
                baseId = 'QUIT';
            } else if (isDisqComboId(canonId)) {
                // DISQ combos are terminal
                baseId = 'DISQ';
            } else if (isDeptComboId(canonId)) {
                // DEPT combos are terminal
                baseId = 'DEPT';
            }
            return outPlacements.has(baseId);
        });
        c.placements.push(isOut ? 'OUT' : 'EMPTY');
    });
    // Keep border overlays aligned to episodes
    state.contestants.forEach(c => {
        if (!Array.isArray(c.borders)) c.borders = [];
        c.borders.push('NONE');
    });
    // Keep subtext overlays aligned to episodes
    state.contestants.forEach(c => {
        if (!Array.isArray(c.subtexts)) c.subtexts = [];
        c.subtexts.push('NONE');
    });
    renderAll();
}

function updateEpisode(id, field, value) {
    const episode = state.episodes.find(e => e.id === id);
    if (episode) {
        const before = episode[field];
        episode[field] = value;
        const after = episode[field];
        if (!historyState.isApplying && before !== after) {
            pushHistory({
                type: 'fields',
                changes: [{ scope: 'episode', id, field, from: before, to: after }]
            });
        }
        renderTable();
    }
}

function deleteEpisode(id) {
    const idx = state.episodes.findIndex(e => e.id === id);
    if (idx !== -1) {
        state.episodes.splice(idx, 1);
        state.contestants.forEach(c => c.placements.splice(idx, 1));
        state.contestants.forEach(c => {
            if (Array.isArray(c.borders)) c.borders.splice(idx, 1);
        });
        state.contestants.forEach(c => {
            if (Array.isArray(c.subtexts)) c.subtexts.splice(idx, 1);
        });
        renderAll();
    }
}

// ===== PLACEMENT MANAGEMENT =====
function addPlacement() {
    const newPlacement = {
        id: `CUSTOM_${nextPlacementId++}`,
        name: 'NEW',
        bgColor: '#888888',
        textColor: '#ffffff',
        bold: false
    };
    state.placementsById[newPlacement.id] = { ...newPlacement, children: [], collapsed: false };
    state.placementRoots.push(newPlacement.id);
    renderPlacementsList();
    renderTable();
}

function updatePlacement(id, field, value) {
    const placement = getPlacementById(id);
    if (placement) {
        const before = placement[field];
        placement[field] = value;
        const after = placement[field];
        if (!historyState.isApplying && before !== after) {
            pushHistory({
                type: 'fields',
                changes: [{ scope: 'placement', id, field, from: before, to: after }]
            });
        }
        renderPlacementsList();
        renderTable();
    }
}

function deletePlacement(id) {
    const node = getPlacementById(id);
    if (!node) return;

    // Keep the tree intact: when deleting a node with children, promote children to the same level.
    const { parentId, indexInParent } = findPlacementParent(id);
    const children = Array.isArray(node.children) ? [...node.children] : [];

    if (parentId) {
        const parent = getPlacementById(parentId);
        if (parent) {
            parent.children.splice(indexInParent, 1, ...children);
        }
    } else {
        state.placementRoots.splice(indexInParent, 1, ...children);
    }

    // Remove node
    delete state.placementsById[id];

    // Replace deleted placement with EMPTY in contestants
    state.contestants.forEach(c => {
        c.placements = c.placements.map(p => (p === id ? 'EMPTY' : p));
    });

    renderAll();
}

function isDefaultPlacement(id) {
    return DEFAULT_PLACEMENT_IDS.has(id);
}

// ===== BORDER ADD-ON MANAGEMENT =====
function addBorderAddon() {
    const newBorder = {
        id: `BORDER_${nextBorderId++}`,
        name: 'BORDER',
        borderColor: '#111827',
        borderWidth: 3
    };
    if (!state.bordersById) state.bordersById = {};
    if (!Array.isArray(state.borderRoots)) state.borderRoots = [];
    state.bordersById[newBorder.id] = { ...newBorder };
    state.borderRoots.push(newBorder.id);
    renderBordersList();
    renderTable();
}

function addSubtextAddon() {
    const newSubtext = {
        id: `SUBTEXT_${nextSubtextId++}`,
        name: 'SUBTEXT',
        text: 'Text'
    };
    if (!state.subtextsById) state.subtextsById = {};
    if (!Array.isArray(state.subtextRoots)) state.subtextRoots = [];
    state.subtextsById[newSubtext.id] = { ...newSubtext };
    state.subtextRoots.push(newSubtext.id);
    renderSubtextsList();
    renderTable();
}

function updateBorderAddon(id, field, value) {
    const b = getBorderById(id);
    if (!b) return;
    const before = b[field];
    if (field === 'borderWidth') {
        const n = Number.parseInt(String(value), 10);
        b.borderWidth = Number.isFinite(n) ? Math.max(1, Math.min(12, n)) : 3;
    } else {
        b[field] = value;
    }
    const after = b[field];
    if (!historyState.isApplying && before !== after) {
        pushHistory({
            type: 'fields',
            changes: [{ scope: 'border', id, field, from: before, to: after }]
        });
    }
    renderBordersList();
    renderTable();
}

function deleteBorderAddon(id) {
    const b = getBorderById(id);
    if (!b) return;
    if (isDefaultBorder(id)) return;

    delete state.bordersById[id];
    state.borderRoots = (state.borderRoots || []).filter(x => x !== id);
    for (const c of state.contestants) {
        if (!Array.isArray(c.borders)) continue;
        c.borders = c.borders.map(v => (v === id ? 'NONE' : v));
    }
    renderAll();
}

function updateSubtextAddon(id, field, value) {
    const s = getSubtextById(id);
    if (!s) return;
    const before = s[field];
    s[field] = value;
    const after = s[field];
    if (!historyState.isApplying && before !== after) {
        pushHistory({
            type: 'fields',
            changes: [{ scope: 'subtext', id, field, from: before, to: after }]
        });
    }
    renderSubtextsList();
    renderTable();
}

function deleteSubtextAddon(id) {
    const s = getSubtextById(id);
    if (!s) return;
    if (isDefaultSubtext(id)) return;

    delete state.subtextsById[id];
    state.subtextRoots = (state.subtextRoots || []).filter(x => x !== id);
    for (const c of state.contestants) {
        if (!Array.isArray(c.subtexts)) continue;
        c.subtexts = c.subtexts.map(v => (v === id ? 'NONE' : v));
    }
    renderAll();
}

function togglePlacementCollapse(id) {
    const p = getPlacementById(id);
    if (!p) return;
    if (!p.children || p.children.length === 0) return;
    p.collapsed = !p.collapsed;
    renderPlacementsList();
    renderTable();
}

function getPlacementById(id) {
    return state.placementsById ? state.placementsById[id] : undefined;
}

function findPlacementParent(childId) {
    // Returns { parentId: string | null, indexInParent: number }
    for (let i = 0; i < state.placementRoots.length; i++) {
        if (state.placementRoots[i] === childId) return { parentId: null, indexInParent: i };
    }
    const stack = [...state.placementRoots];
    while (stack.length) {
        const id = stack.pop();
        const p = getPlacementById(id);
        if (!p || !p.children) continue;
        const idx = p.children.indexOf(childId);
        if (idx !== -1) return { parentId: p.id, indexInParent: idx };
        for (const c of p.children) stack.push(c);
    }
    return { parentId: null, indexInParent: -1 };
}

function setupPlacementDragDrop() {
    const list = document.getElementById('placementsList');
    if (!list) return;

    const items = list.querySelectorAll('.placement-item');
    items.forEach(item => {
        item.addEventListener('dragstart', handlePlacementDragStart);
        item.addEventListener('dragover', handlePlacementDragOver);
        item.addEventListener('drop', handlePlacementDrop);
        item.addEventListener('dragend', handlePlacementDragEnd);
    });

    // Allow dropping to root area (append)
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    list.addEventListener('drop', (e) => {
        if (!placementDrag.dragId) return;
        if (e.target.closest('.placement-item')) return;
        movePlacementNode(placementDrag.dragId, null, 'inside', null);
        cleanupPlacementDragUI();
        renderPlacementsList();
        renderTable();
        placementDrag = { dragId: null };
    });
}

let placementDrag = { dragId: null };

function handlePlacementDragStart(e) {
    const id = e.currentTarget.dataset.id;
    placementDrag = { dragId: id };
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.classList.add('is-dragging');
}

function handlePlacementDragOver(e) {
    e.preventDefault();
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const ratio = y / rect.height;
    const mode = ratio < 0.25 ? 'before' : ratio > 0.75 ? 'after' : 'inside';
    item.dataset.dropMode = mode;
}

function handlePlacementDrop(e) {
    e.preventDefault();
    const targetId = e.currentTarget.dataset.id;
    const mode = e.currentTarget.dataset.dropMode || 'after';
    const dragId = placementDrag.dragId;
    if (!dragId || dragId === targetId) return;
    movePlacementNode(dragId, targetId, mode);
    cleanupPlacementDragUI();
    renderPlacementsList();
    renderTable();
    placementDrag = { dragId: null };
}

function handlePlacementDragEnd(e) {
    cleanupPlacementDragUI();
    placementDrag = { dragId: null };
}

function cleanupPlacementDragUI() {
    document.querySelectorAll('.placement-item.is-dragging').forEach(el => el.classList.remove('is-dragging'));
    document.querySelectorAll('.placement-item[data-drop-mode]').forEach(el => {
        delete el.dataset.dropMode;
    });
}

function movePlacementNode(dragId, targetId, mode) {
    // Remove dragId from its current parent
    const { parentId: fromParentId, indexInParent: fromIndex } = findPlacementParent(dragId);
    if (fromIndex === -1) return;

    let dragged;
    if (fromParentId) {
        const fromParent = getPlacementById(fromParentId);
        dragged = fromParent.children.splice(fromIndex, 1)[0];
    } else {
        dragged = state.placementRoots.splice(fromIndex, 1)[0];
    }

    // If dropping onto root background
    if (!targetId) {
        state.placementRoots.push(dragged);
        normalizePlacementTree();
        return;
    }

    // Prevent dropping a node into its own descendant
    if (mode === 'inside' && isDescendant(dragId, targetId)) {
        // revert to after
        mode = 'after';
    }

    if (mode === 'inside') {
        const target = getPlacementById(targetId);
        if (!target.children) target.children = [];
        target.children.push(dragged);
        target.collapsed = false;
        normalizePlacementTree();
        return;
    }

    // before/after inserts next to target, within target's parent
    const { parentId: toParentId, indexInParent: toIndex } = findPlacementParent(targetId);
    const insertIndex = mode === 'before' ? toIndex : toIndex + 1;
    if (toParentId) {
        const toParent = getPlacementById(toParentId);
        toParent.children.splice(insertIndex, 0, dragged);
    } else {
        state.placementRoots.splice(insertIndex, 0, dragged);
    }

    normalizePlacementTree();
}

function isDescendant(ancestorId, maybeDescendantId) {
    const ancestor = getPlacementById(ancestorId);
    if (!ancestor || !ancestor.children || ancestor.children.length === 0) return false;
    const stack = [...ancestor.children];
    while (stack.length) {
        const id = stack.pop();
        if (id === maybeDescendantId) return true;
        const node = getPlacementById(id);
        if (node && node.children) {
            for (const c of node.children) stack.push(c);
        }
    }
    return false;
}

// ===== DRAG AND DROP =====
function setupContestantDragDrop() {
    const items = document.querySelectorAll('#contestantsList .contestant-item');
    items.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', (e) => handleDrop(e, 'contestants'));
        item.addEventListener('dragend', handleDragEnd);
    });
}

function setupTableContestantDragDrop() {
    // Drag starts from the left gutter grip, but drop targets include both the full row
    // and the left gutter area (for a forgiving UX).
    // rebuildTableGutterHandles now also attaches the grip event listeners
    rebuildTableGutterHandles();

    const tableScroll = document.getElementById('tableScroll');
    if (tableScroll) {
        tableScroll.addEventListener('scroll', () => {
            rebuildTableGutterHandles();
        });
        // Ctrl+wheel scrolls horizontally instead of vertically
        tableScroll.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                tableScroll.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    // Row drop targets (grips are handled in rebuildTableGutterHandles)
    const rows = document.querySelectorAll('#tableOnly tr.table-contestant-row');
    rows.forEach(row => {
        row.addEventListener('dragover', handleDragOver);
        row.addEventListener('drop', (e) => handleDrop(e, 'contestants'));
    });
}

function rebuildTableGutterHandles() {
    const gutter = document.getElementById('tableGutter');
    if (!gutter) return;

    const rows = Array.from(document.querySelectorAll('#tableOnly tr.table-contestant-row'));
    const gutterRect = gutter.getBoundingClientRect();
    
    gutter.innerHTML = rows
        .map(r => `<div class="table-row-grip" draggable="true" data-id="${escapeHtml(r.dataset.id || '')}" title="Drag to reorder"></div>`)
        .join('');

    const grips = Array.from(gutter.querySelectorAll('.table-row-grip'));
    
    rows.forEach((row, idx) => {
        const g = grips[idx];
        if (!g) return;
        const rowRect = row.getBoundingClientRect();
        const top = rowRect.top - gutterRect.top;
        g.style.top = `${top}px`;
        g.style.height = `${rowRect.height}px`;
    });
    
    // Attach event listeners to the newly created grips (must be done here since innerHTML destroys old listeners)
    grips.forEach(grip => {
        grip.addEventListener('dragstart', handleDragStart);
        grip.addEventListener('dragover', handleDragOver);
        grip.addEventListener('drop', (e) => handleDrop(e, 'contestants'));
        grip.addEventListener('dragend', handleDragEnd);
    });
}

function setupEpisodeDragDrop() {
    const items = document.querySelectorAll('#episodesList .episode-item');
    items.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', (e) => handleDrop(e, 'episodes'));
        item.addEventListener('dragend', handleDragEnd);
    });
}

let draggedItem = null;
let tableDropTargetRow = null;

function handleDragStart(e) {
    draggedItem = e.currentTarget;
    e.currentTarget.style.opacity = '0.5';
}

function handleDragOver(e) {
    e.preventDefault();

    // Table row drag: animate an insertion target gap.
    const target = e.currentTarget;
    if (!target || !target.classList) return;

    let row = null;
    if (target.classList.contains('table-contestant-row')) {
        row = target;
    } else if (target.classList.contains('table-row-grip')) {
        const id = target.dataset.id;
        if (id) row = document.querySelector(`#tableOnly tr.table-contestant-row[data-id="${CSS.escape(String(id))}"]`);
    }
    if (row) {
        if (tableDropTargetRow && tableDropTargetRow !== row) {
            tableDropTargetRow.classList.remove('table-drop-target');
        }
        tableDropTargetRow = row;
        tableDropTargetRow.classList.add('table-drop-target');
    }
}

function handleDrop(e, type) {
    e.preventDefault();
    const targetItem = e.currentTarget;

    if (tableDropTargetRow) {
        tableDropTargetRow.classList.remove('table-drop-target');
        tableDropTargetRow = null;
    }
    
    if (draggedItem && draggedItem !== targetItem) {
        const draggedId = parseInt(draggedItem.dataset.id);
        const targetId = parseInt(targetItem.dataset.id);
        
        if (type === 'contestants') {
            reorderArray(state.contestants, draggedId, targetId);
        } else if (type === 'episodes') {
            reorderEpisodes(draggedId, targetId);
        }
        
        renderAll();
    }
}

function handleDragEnd(e) {
    e.currentTarget.style.opacity = '1';
    draggedItem = null;

    if (tableDropTargetRow) {
        tableDropTargetRow.classList.remove('table-drop-target');
        tableDropTargetRow = null;
    }
}

function reorderArray(arr, fromId, toId) {
    const fromIdx = arr.findIndex(item => item.id === fromId);
    const toIdx = arr.findIndex(item => item.id === toId);
    
    if (fromIdx !== -1 && toIdx !== -1) {
        const [item] = arr.splice(fromIdx, 1);
        arr.splice(toIdx, 0, item);
    }
}

function reorderEpisodes(fromId, toId) {
    const fromIdx = state.episodes.findIndex(e => e.id === fromId);
    const toIdx = state.episodes.findIndex(e => e.id === toId);
    
    if (fromIdx !== -1 && toIdx !== -1) {
        // Reorder episodes
        const [episode] = state.episodes.splice(fromIdx, 1);
        state.episodes.splice(toIdx, 0, episode);
        
        // Reorder placements for all contestants
        state.contestants.forEach(c => {
            const [placement] = c.placements.splice(fromIdx, 1);
            c.placements.splice(toIdx, 0, placement);
        });

        renderEpisodesList();
    }
}

// ===== EXPORT =====
function exportAsHtml() {
    const tableHtml = generateExportHtml();
    showExportModal(tableHtml);
}

function buildExportTableElement() {
    const source = document.querySelector('#tableOnly .track-record-table') || document.querySelector('.track-record-table');
    if (!source) return null;

    const table = source.cloneNode(true);

    // Match wiki-like markup
    table.setAttribute('border', '1');

    // Remove interface-only rows/cells/buttons
    table.querySelectorAll('tr.add-contestant-row').forEach(r => r.remove());
    table.querySelectorAll('th.add-episode-btn-cell').forEach(c => c.remove());
    table.querySelectorAll('button.table-add-btn, button').forEach(b => b.remove());

    // Remove contenteditable attributes
    table.querySelectorAll('[contenteditable]').forEach(el => {
        el.removeAttribute('contenteditable');
        el.removeAttribute('onblur');
    });

    // Inline all styles for export consistency (BEFORE removing classes)
    inlineExportStyles(table);

    // Return just the table - wrapper divs with classes won't apply outside editor
    return table;
}

function inlineExportStyles(table) {
    // Get current table settings
    const scale = (state.tableScale || 100) / 100;
    const fontSize = ((state.tableFontSize || 100) / 100) * scale;
    const padding = ((state.cellPadding || 100) / 100) * scale;
    const photoScale = ((state.photoSize || 100) / 100) * scale;
    const fontFamily = state.tableFont || 'Geist, system-ui, sans-serif';

    // Table-level styles
    const existingTableStyle = table.getAttribute('style') || '';
    table.setAttribute('style', `border-collapse:collapse; text-align:center; font-family:${fontFamily}; font-size:${fontSize}em; color:#000; ${existingTableStyle}`);

    // All th and td: border, padding, min-width, color
    const baseCellStyle = `border:1px solid #a2a9b1; min-width:50px; color:#000;`;
    
    // Headers (th)
    table.querySelectorAll('th').forEach(th => {
        const existingStyle = th.getAttribute('style') || '';
        // Check if it's the main header row
        const isHeaderRow = th.closest('.header-row');
        const isEpisodeHeader = th.classList.contains('episode-header');
        
        let headerPadding = `padding:${0.5 * padding}em;`;
        if (isEpisodeHeader) {
            headerPadding = `padding:${0.125 * padding}em ${0.25 * padding}em;`;
        } else if (isHeaderRow) {
            headerPadding = `padding:${0.5 * padding}em;`;
        }
        
        th.setAttribute('style', `${baseCellStyle} background:#eaecf0; font-weight:600; ${headerPadding} ${existingStyle}`);
    });

    // Episode header spans (challenge names)
    table.querySelectorAll('.episode-header span').forEach(span => {
        const existingStyle = span.getAttribute('style') || '';
        span.setAttribute('style', `line-height:1.05; font-size:0.75em; ${existingStyle}`);
    });

    // Contestant name cells
    table.querySelectorAll('.contestant-name-cell').forEach(cell => {
        const existingStyle = cell.getAttribute('style') || '';
        cell.setAttribute('style', `${baseCellStyle} font-weight:500; min-width:100px; padding:${0.4 * padding}em ${0.75 * padding}em; ${existingStyle}`);
    });

    // Text cells (age, location, original season/rank)
    table.querySelectorAll('.text-cell').forEach(cell => {
        const existingStyle = cell.getAttribute('style') || '';
        cell.setAttribute('style', `${baseCellStyle} padding:${0.4 * padding}em ${0.75 * padding}em; ${existingStyle}`);
    });

    // Photo cells
    table.querySelectorAll('.photo-cell').forEach(cell => {
        const existingStyle = cell.getAttribute('style') || '';
        cell.setAttribute('style', `${baseCellStyle} padding:${0.25 * padding}em ${0.5 * padding}em; ${existingStyle}`);
    });
    table.querySelectorAll('.photo-cell img').forEach(img => {
        const existingStyle = img.getAttribute('style') || '';
        img.setAttribute('style', `width:${110 * photoScale}px; height:${110 * photoScale}px; object-fit:cover; ${existingStyle}`);
    });

    // Rank cells
    table.querySelectorAll('.rank-cell').forEach(cell => {
        const existingStyle = cell.getAttribute('style') || '';
        cell.setAttribute('style', `${baseCellStyle} min-width:60px; padding:${0.25 * padding}em ${0.5 * padding}em; ${existingStyle}`);
    });

    // Placement cells (already have inline bg/color, add font-weight and border)
    table.querySelectorAll('td[data-contestant]').forEach(cell => {
        const existingStyle = cell.getAttribute('style') || '';
        // Check if it's an out cell (gray row continuation)
        const isOut = cell.classList.contains('out-cell');
        if (isOut) {
            cell.setAttribute('style', `${baseCellStyle} padding:${0.25 * padding}em ${0.5 * padding}em; ${existingStyle}`);
        } else {
            cell.setAttribute('style', `${baseCellStyle} font-weight:450; min-width:55px; padding:${0.25 * padding}em ${0.5 * padding}em; ${existingStyle}`);
        }
    });

    // Subtext/small styling in placement cells - match CSS .placement-cell small
    table.querySelectorAll('td[data-contestant] small').forEach(small => {
        const existingStyle = small.getAttribute('style') || '';
        small.setAttribute('style', `font-weight:300; font-size:0.7em; opacity:0.85; ${existingStyle}`);
    });
    
    // Group labels in name cells - use slightly different styling
    table.querySelectorAll('.contestant-name-cell small').forEach(small => {
        const existingStyle = small.getAttribute('style') || '';
        small.setAttribute('style', `font-weight:400; font-size:0.85em; ${existingStyle}`);
    });

    // Photo wrapper divs - just need to pass through size
    table.querySelectorAll('.photo-menu-wrapper').forEach(wrapper => {
        const existingStyle = wrapper.getAttribute('style') || '';
        wrapper.setAttribute('style', `display:inline-block; ${existingStyle}`);
    });

    // Remove onclick handlers from images
    table.querySelectorAll('img[onclick]').forEach(img => {
        img.removeAttribute('onclick');
        img.removeAttribute('title');
    });

    // Remove all classes from elements (they won't apply outside the editor)
    table.querySelectorAll('*').forEach(el => {
        el.removeAttribute('class');
    });
    table.removeAttribute('class');

    // Remove data attributes used for interactivity
    table.querySelectorAll('[data-contestant]').forEach(el => el.removeAttribute('data-contestant'));
    table.querySelectorAll('[data-episode]').forEach(el => el.removeAttribute('data-episode'));
    table.querySelectorAll('[data-edit-scope]').forEach(el => el.removeAttribute('data-edit-scope'));
    table.querySelectorAll('[data-edit-id]').forEach(el => el.removeAttribute('data-edit-id'));
    table.querySelectorAll('[data-edit-field]').forEach(el => el.removeAttribute('data-edit-field'));
    table.querySelectorAll('[data-edit-mode]').forEach(el => el.removeAttribute('data-edit-mode'));
}

function generateExportHtml() {
    const wrapper = buildExportTableElement();
    return wrapper ? wrapper.outerHTML : '';
}

function showExportModal(html) {
    const modal = document.getElementById('exportModal');
    document.getElementById('exportHtmlContent').textContent = html;
    modal.classList.add('active');
}

function closeModal() {
    document.querySelector('.modal-overlay.active')?.classList.remove('active');
}

// ===== CHANGELOG MODAL =====
function showChangelogModal() {
    const modal = document.getElementById('changelogModal');
    if (modal) {
        modal.classList.add('active');
        // Close on overlay click
        modal.onclick = (e) => {
            if (e.target === modal) closeChangelogModal();
        };
    }
}

function closeChangelogModal() {
    const modal = document.getElementById('changelogModal');
    if (modal) modal.classList.remove('active');
}

// ===== HELP MODAL =====
function openHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.classList.add('active');
        // Close on overlay click
        modal.onclick = (e) => {
            if (e.target === modal) closeHelpModal();
        };
    }
}

function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) modal.classList.remove('active');
}

function copyHtmlToClipboard() {
    const html = generateExportHtml();
    navigator.clipboard.writeText(html).then(() => {
        alert('HTML copied to clipboard!');
    });
}

async function exportAsImage() {
    // Use html2canvas if available, otherwise provide fallback
    if (typeof html2canvas === 'undefined') {
        // Dynamically load html2canvas
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => captureTableAsImage();
        document.head.appendChild(script);
    } else {
        captureTableAsImage();
    }
}

async function captureTableAsImage() {
    try {
        closeDropdown();

        // Prompt for filename
        const defaultName = (state.title || 'track-record').replace(/[<>:"/\\|?*]+/g, '').trim() || 'track-record';
        const filename = prompt('Enter filename for the image:', defaultName);
        if (filename === null) return; // User cancelled
        const safeName = (filename.trim() || 'track-record').replace(/[<>:"/\\|?*]+/g, '');

        const exportEl = buildExportTableElement();
        if (!exportEl) return;
        exportEl.style.position = 'fixed';
        exportEl.style.left = '-100000px';
        exportEl.style.top = '0';
        exportEl.style.background = '#ffffff';
        document.body.appendChild(exportEl);

        const exportScale = Math.max(2, Math.ceil(window.devicePixelRatio || 1));
        const canvas = await html2canvas(exportEl, {
            backgroundColor: '#ffffff',
            scale: exportScale,
            useCORS: true,
            logging: false
        });

        exportEl.remove();
        
        const link = document.createElement('a');
        link.download = safeName + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (err) {
        alert('Error exporting image: ' + err.message);
    }
}

// ===== SAVE/LOAD =====
function saveProject() {
    // Prompt for filename, ask first
    const defaultName = (state.title || 'track-record-project').replace(/[<>:"/\\|?*]+/g, '').trim() || 'track-record-project';
    const filename = prompt('Enter filename for the project:', defaultName);
    if (filename === null) return; // User cancelled
    const safeName = (filename.trim() || 'track-record-project').replace(/[<>:"/\\|?*]+/g, '');

    const data = JSON.stringify(state, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.download = safeName + '.json';
    link.href = url;
    link.click();
    
    URL.revokeObjectURL(url);
}

function loadProject(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const loaded = JSON.parse(event.target.result);
                state = { ...state, ...loaded };

                normalizePlacementsFromLoadedState();
                initBordersState();
                initSubtextsState();
                initGroupsState();
                normalizeDeprecatedPlacementIdsInContestants();
                migrateBorderAddonsFromPlacements();
                
                // Update IDs
                nextContestantId = Math.max(...state.contestants.map(c => c.id)) + 1;
                nextEpisodeId = Math.max(...state.episodes.map(e => e.id)) + 1;
                // Best-effort for custom border IDs
                nextBorderId = Math.max(nextBorderId, (state.borderRoots || []).length + 100);
                nextSubtextId = Math.max(nextSubtextId, (state.subtextRoots || []).length + 200);
                
                // Ensure new settings have defaults
                if (state.tableScale === undefined) state.tableScale = 80;
                if (!state.tableFont) state.tableFont = 'Geist, system-ui, sans-serif';
                if (state.tableFontSize === undefined) state.tableFontSize = 100;
                if (state.cellPadding === undefined) state.cellPadding = 100;
                if (state.photoSize === undefined) state.photoSize = 100;
                if (state.autoFillOut === undefined) state.autoFillOut = true;
                if (state.showRankColumn === undefined) state.showRankColumn = true;
                if (state.allStarsMode === undefined) state.allStarsMode = false;
                
                // Ensure contestants have All Stars properties
                state.contestants.forEach(c => {
                    if (c.originalSeason === undefined) c.originalSeason = '';
                    if (c.originalRank === undefined) c.originalRank = '';
                });

                // Update UI
                syncSettingsUI();
                
                renderAll();
                alert('Project loaded successfully!');
            } catch (err) {
                alert('Error loading project: ' + err.message);
            }
        };
        reader.readAsText(file);
    }
    e.target.value = '';
}

function newBlankProject() {
    if (confirm('Create a new blank table? All current changes will be lost.')) {
        state = {
            title: 'Track Record',
            showPhotos: true,
            showAge: true,
            showLocation: true,
            allStarsMode: false,
            customEpisodeLabels: false,
            groupsEnabled: false,
            groups: DEFAULT_GROUPS.map(g => ({ ...g })),
            paintPlacementId: 'WIN',
            paintBorderId: 'NONE',
            paintSubtextId: 'NONE',
            tableScale: 80,
            tableFont: 'Geist, system-ui, sans-serif',
            tableFontSize: 100,
            cellPadding: 100,
            photoSize: 100,
            autoFillOut: true,
            showRankColumn: true,
            placementsById: buildDefaultPlacementsTree().placementsById,
            placementRoots: buildDefaultPlacementsTree().placementRoots,
            bordersById: buildDefaultBorders().bordersById,
            borderRoots: buildDefaultBorders().borderRoots,
            subtextsById: buildDefaultSubtexts().subtextsById,
            subtextRoots: buildDefaultSubtexts().subtextRoots,
            episodes: [],
            contestants: []
        };
        nextContestantId = 1;
        nextEpisodeId = 1;
        nextPlacementId = 100;
        nextBorderId = 100;
        nextSubtextId = 200;
        nextGroupId = 3;
        
        syncSettingsUI();
        renderAll();
    }
}

function resetProject() {
    if (confirm('Are you sure you want to reset? All changes will be lost.')) {
        state = {
            title: 'Season 1 Track Record',
            showPhotos: true,
            showAge: true,
            showLocation: true,
            allStarsMode: false,
            customEpisodeLabels: false,
            groupsEnabled: false,
            groups: DEFAULT_GROUPS.map(g => ({ ...g })),
            paintPlacementId: 'WIN',
            paintBorderId: 'NONE',
            paintSubtextId: 'NONE',
            tableScale: 80,
            tableFont: 'Geist, system-ui, sans-serif',
            tableFontSize: 100,
            cellPadding: 100,
            photoSize: 100,
            autoFillOut: true,
            showRankColumn: true,
            placementsById: buildDefaultPlacementsTree().placementsById,
            placementRoots: buildDefaultPlacementsTree().placementRoots,
            bordersById: buildDefaultBorders().bordersById,
            borderRoots: buildDefaultBorders().borderRoots,
            subtextsById: buildDefaultSubtexts().subtextsById,
            subtextRoots: buildDefaultSubtexts().subtextRoots,
            episodes: [
                { id: 1, groupLabel: 'Ep. 1', challenge: 'Talent<br>Show' },
                { id: 2, groupLabel: 'Ep. 2', challenge: 'Design' },
                { id: 3, groupLabel: 'Ep. 3', challenge: 'Snatch<br>Game' },
                { id: 4, groupLabel: 'Ep. 4', challenge: 'Girl<br>Groups' },
                { id: 5, groupLabel: 'Ep. 5', challenge: 'Finale' }
            ],
            contestants: [
                // Defaults mirror the example table screenshot.
                // Note: TOP/BTM auto-numbering (TOP2/BTM2) is computed per-column.
                { id: 1, name: 'Queen A', photo: '', age: 25, location: 'Los Angeles, CA', groupId: 'G1', placements: ['WIN', 'HIGH', 'BTM', 'WIN', 'WINNER'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] },
                { id: 2, name: 'Queen B', photo: '', age: 28, location: 'New York, NY', groupId: 'G2', placements: ['HIGH', 'WIN', 'LOW', 'BTM', 'RUNNERUP'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] },
                { id: 3, name: 'Queen C', photo: '', age: 30, location: 'Chicago, IL', groupId: 'G1', placements: ['SAFE', 'BTM', 'WIN', 'ELIM', 'GUEST'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] },
                { id: 4, name: 'Queen D', photo: '', age: 22, location: 'Miami, FL', groupId: 'G2', placements: ['TOP', 'BTM', 'ELIM', 'OUT', 'MISSCON'], borders: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'], subtexts: ['NONE', 'NONE', 'NONE', 'NONE', 'NONE'] }
            ]
        };
        nextContestantId = 5;
        nextEpisodeId = 6;
        nextPlacementId = 100;
        nextBorderId = 100;
        nextSubtextId = 200;
        nextGroupId = 3;
        
        syncSettingsUI();
        renderAll();
    }
}

function normalizePlacementsFromLoadedState() {
    // Supports older saves where `placements` was a flat array.
    let convertedFromFlat = false;
    if (Array.isArray(state.placements)) {
        convertedFromFlat = true;
        const placementsById = {};
        for (const p of state.placements) {
            placementsById[p.id] = { ...p, children: [], collapsed: false };
        }
        state.placementsById = placementsById;
        state.placementRoots = state.placements.map(p => p.id);
        delete state.placements;
    }

    if (!state.placementsById || !state.placementRoots) {
        const { placementsById, placementRoots } = buildDefaultPlacementsTree();
        state.placementsById = placementsById;
        state.placementRoots = placementRoots;
    }

    if (!state.paintPlacementId) state.paintPlacementId = 'WIN';

    // Ensure any new default nodes (incl. hidden variants) exist without clobbering user customizations
    for (const p of DEFAULT_PLACEMENTS) {
        if (!state.placementsById[p.id]) {
            state.placementsById[p.id] = { ...p, children: [], collapsed: false };
        }
    }

    // Ensure every node has required fields
    for (const id of Object.keys(state.placementsById)) {
        const p = state.placementsById[id];
        if (!Array.isArray(p.children)) p.children = [];
        if (typeof p.collapsed !== 'boolean') p.collapsed = false;
    }

    // Dynamic RTRN combos: if the grid references RTRN_* placements, materialize them
    // and attach them under RTRN.
    for (const c of state.contestants || []) {
        for (const raw of c.placements || []) {
            const id = String(raw || '');
            if (isRtrnComboId(id)) {
                ensureRtrnComboPlacement(id);
            } else if (isQuitComboId(id)) {
                ensureQuitComboPlacement(id);
            } else if (isDisqComboId(id)) {
                ensureDisqComboPlacement(id);
            } else if (isDeptComboId(id)) {
                ensureDeptComboPlacement(id);
            }
        }
    }

    // Legacy migration: older saves often had ELIM and FELIM as separate root chips.
    // If the tree is still "flat" (no groupings) and FELIM is a root, prefer nesting FELIM under ELIM.
    // (Users can still drag/drop to change this after load.)
    const elim = getPlacementById('ELIM');
    const felim = getPlacementById('FELIM');
    const treeLooksFlat = convertedFromFlat || Object.keys(state.placementsById).every(id => {
        const p = state.placementsById[id];
        return !p || !Array.isArray(p.children) || p.children.length === 0;
    });
    if (
        treeLooksFlat &&
        elim &&
        felim &&
        Array.isArray(state.placementRoots) &&
        state.placementRoots.includes('ELIM') &&
        state.placementRoots.includes('FELIM')
    ) {
        if (!Array.isArray(elim.children)) elim.children = [];
        if (!elim.children.includes('FELIM')) elim.children.push('FELIM');
    }

    // Ensure base TOP/BTM are reachable in the tree for older projects.
    ensurePlacementReachable('TOP');
    ensurePlacementReachable('BTM');

    normalizePlacementTree();
}

function canonicalizePlacementId(id) {
    // Backward-compat / deprecated variant IDs.
    if (id === 'WIN2') return 'WIN';
    if (id === 'TOP2' || id === 'TOP3') return 'TOP';
    if (id === 'BTM2' || id === 'BTM3' || id === 'BTM6') return 'BTM';
    if (id === 'DELIM') return 'ELIM';
    return id || 'EMPTY';
}

function isRtrnComboId(id) {
    return typeof id === 'string' && id.startsWith('RTRN_') && id.length > 'RTRN_'.length;
}

function getRtrnComboBaseId(comboId) {
    if (!isRtrnComboId(comboId)) return '';
    return comboId.slice('RTRN_'.length);
}

function ensureRtrnComboPlacement(comboId) {
    if (!isRtrnComboId(comboId)) return;
    if (!state.placementsById) return;

    const baseId = getRtrnComboBaseId(comboId);
    const baseCanonical = canonicalizePlacementId(baseId);
    const base = getPlacementById(baseCanonical);
    if (!base) return;

    if (!state.placementsById[comboId]) {
        state.placementsById[comboId] = {
            id: comboId,
            name: `RTRN<br>+<br>${base.name || baseCanonical || baseId}`,
            bgColor: base.bgColor,
            textColor: base.textColor,
            bold: base.bold,
            isOut: false,
            hidden: false,
            children: [],
            collapsed: false,
            basePlacementId: baseCanonical
        };
    } else {
        // Old saves may have these as hidden prebuilt variants; unhide and normalize.
        state.placementsById[comboId].hidden = false;
        state.placementsById[comboId].basePlacementId = state.placementsById[comboId].basePlacementId || baseCanonical;
        if (!Array.isArray(state.placementsById[comboId].children)) state.placementsById[comboId].children = [];
        if (typeof state.placementsById[comboId].collapsed !== 'boolean') state.placementsById[comboId].collapsed = false;
    }

    const rtrn = state.placementsById.RTRN;
    if (rtrn) {
        if (!Array.isArray(rtrn.children)) rtrn.children = [];
        if (!rtrn.children.includes(comboId)) rtrn.children.push(comboId);
    }
}

// ===== QUIT COMBO HELPERS =====
function isQuitComboId(id) {
    return typeof id === 'string' && id.startsWith('QUIT_') && id.length > 'QUIT_'.length;
}

function getQuitComboBaseId(comboId) {
    if (!isQuitComboId(comboId)) return '';
    return comboId.slice('QUIT_'.length);
}

function ensureQuitComboPlacement(comboId) {
    if (!isQuitComboId(comboId)) return;
    if (!state.placementsById) return;

    const baseId = getQuitComboBaseId(comboId);
    const baseCanonical = canonicalizePlacementId(baseId);
    const base = getPlacementById(baseCanonical);
    if (!base) return;

    const quitPlacement = getPlacementById('QUIT');

    if (!state.placementsById[comboId]) {
        // QUIT combos show as BASE + QUIT and use QUIT's colors
        state.placementsById[comboId] = {
            id: comboId,
            name: `${base.name || baseCanonical || baseId}<br>+<br>QUIT`,
            bgColor: quitPlacement?.bgColor || 'palevioletred',
            textColor: quitPlacement?.textColor || '#000000ff',
            bold: quitPlacement?.bold ?? true,
            isOut: false,
            hidden: false,
            children: [],
            collapsed: false,
            basePlacementId: baseCanonical
        };
    } else {
        // Old saves may have these as hidden prebuilt variants; unhide and normalize.
        state.placementsById[comboId].hidden = false;
        state.placementsById[comboId].basePlacementId = state.placementsById[comboId].basePlacementId || baseCanonical;
        if (!Array.isArray(state.placementsById[comboId].children)) state.placementsById[comboId].children = [];
        if (typeof state.placementsById[comboId].collapsed !== 'boolean') state.placementsById[comboId].collapsed = false;
    }

    const quit = state.placementsById.QUIT;
    if (quit) {
        if (!Array.isArray(quit.children)) quit.children = [];
        if (!quit.children.includes(comboId)) quit.children.push(comboId);
    }
}

// ===== DISQ COMBO HELPERS =====
function isDisqComboId(id) {
    return typeof id === 'string' && id.startsWith('DISQ_') && id.length > 'DISQ_'.length;
}

function getDisqComboBaseId(comboId) {
    if (!isDisqComboId(comboId)) return '';
    return comboId.slice('DISQ_'.length);
}

function ensureDisqComboPlacement(comboId) {
    if (!isDisqComboId(comboId)) return;
    if (!state.placementsById) return;

    const baseId = getDisqComboBaseId(comboId);
    const baseCanonical = canonicalizePlacementId(baseId);
    const base = getPlacementById(baseCanonical);
    if (!base) return;

    const disqPlacement = getPlacementById('DISQ');

    if (!state.placementsById[comboId]) {
        // DISQ combos show as BASE + DISQ and use DISQ's colors
        state.placementsById[comboId] = {
            id: comboId,
            name: `${base.name || baseCanonical || baseId}<br>+<br>DISQ`,
            bgColor: disqPlacement?.bgColor || 'black',
            textColor: disqPlacement?.textColor || '#ffffff',
            bold: disqPlacement?.bold ?? true,
            isOut: false,
            hidden: false,
            children: [],
            collapsed: false,
            basePlacementId: baseCanonical
        };
    } else {
        // Old saves may have these as hidden prebuilt variants; unhide and normalize.
        state.placementsById[comboId].hidden = false;
        state.placementsById[comboId].basePlacementId = state.placementsById[comboId].basePlacementId || baseCanonical;
        if (!Array.isArray(state.placementsById[comboId].children)) state.placementsById[comboId].children = [];
        if (typeof state.placementsById[comboId].collapsed !== 'boolean') state.placementsById[comboId].collapsed = false;
    }

    const disq = state.placementsById.DISQ;
    if (disq) {
        if (!Array.isArray(disq.children)) disq.children = [];
        if (!disq.children.includes(comboId)) disq.children.push(comboId);
    }
}

// ===== DEPT COMBO HELPERS =====
function isDeptComboId(id) {
    return typeof id === 'string' && id.startsWith('DEPT_') && id.length > 'DEPT_'.length;
}

function getDeptComboBaseId(comboId) {
    if (!isDeptComboId(comboId)) return '';
    return comboId.slice('DEPT_'.length);
}

function ensureDeptComboPlacement(comboId) {
    if (!isDeptComboId(comboId)) return;
    if (!state.placementsById) return;

    const baseId = getDeptComboBaseId(comboId);
    const baseCanonical = canonicalizePlacementId(baseId);
    const base = getPlacementById(baseCanonical);
    if (!base) return;

    const deptPlacement = getPlacementById('DEPT');

    if (!state.placementsById[comboId]) {
        // DEPT combos show as BASE + DEPT and use DEPT's colors
        state.placementsById[comboId] = {
            id: comboId,
            name: `${base.name || baseCanonical || baseId}<br>+<br>DEPT`,
            bgColor: deptPlacement?.bgColor || 'plum',
            textColor: deptPlacement?.textColor || '#000000',
            bold: deptPlacement?.bold ?? true,
            isOut: false,
            hidden: false,
            children: [],
            collapsed: false,
            basePlacementId: baseCanonical
        };
    } else {
        // Old saves may have these as hidden prebuilt variants; unhide and normalize.
        state.placementsById[comboId].hidden = false;
        state.placementsById[comboId].basePlacementId = state.placementsById[comboId].basePlacementId || baseCanonical;
        if (!Array.isArray(state.placementsById[comboId].children)) state.placementsById[comboId].children = [];
        if (typeof state.placementsById[comboId].collapsed !== 'boolean') state.placementsById[comboId].collapsed = false;
    }

    const dept = state.placementsById.DEPT;
    if (dept) {
        if (!Array.isArray(dept.children)) dept.children = [];
        if (!dept.children.includes(comboId)) dept.children.push(comboId);
    }
}

function isWinVariant(id) {
    // All WIN variants should count as WIN for TOP auto-numbering
    return id === 'WIN' || (typeof id === 'string' && id.startsWith('WIN_'));
}

function getPlacementIdForCounts(rawId) {
    const id = canonicalizePlacementId(rawId);
    if (isRtrnComboId(id)) return canonicalizePlacementId(getRtrnComboBaseId(id));
    if (isQuitComboId(id)) return canonicalizePlacementId(getQuitComboBaseId(id));
    if (isDisqComboId(id)) return canonicalizePlacementId(getDisqComboBaseId(id));
    if (isDeptComboId(id)) return canonicalizePlacementId(getDeptComboBaseId(id));
    // Map all WIN variants to 'WIN' for counting purposes (TOP auto-numbering)
    if (isWinVariant(id)) return 'WIN';
    return id;
}

function normalizeDeprecatedPlacementIdsInContestants() {
    const map = {
        WIN2: 'WIN',
        TOP2: 'TOP',
        TOP3: 'TOP',
        BTM2: 'BTM',
        BTM3: 'BTM',
        BTM6: 'BTM',
        DELIM: 'ELIM'
    };
    state.contestants.forEach(c => {
        if (!Array.isArray(c.placements)) c.placements = [];
        c.placements = c.placements.map(p => map[p] || p);
    });
}

function computeEpisodePlacementCounts() {
    const counts = [];
    for (let epIdx = 0; epIdx < state.episodes.length; epIdx++) {
        const map = new Map();
        for (const contestant of state.contestants) {
            const raw = contestant.placements?.[epIdx] || 'EMPTY';
            const canonical = getPlacementIdForCounts(raw);
            map.set(canonical, (map.get(canonical) || 0) + 1);
            // Track strict WIN count separately for multi-WIN visual logic
            // (only normal WIN, not WIN_LSWIN, WIN_LSLOSS, etc.)
            const strictId = canonicalizePlacementId(raw);
            if (strictId === 'WIN') {
                map.set('WIN_STRICT', (map.get('WIN_STRICT') || 0) + 1);
            }
        }
        counts.push(map);
    }
    return counts;
}

function getEffectivePlacementForEpisodeColumn(placement, canonicalId, episodeCountMap) {
    if (!episodeCountMap) return placement;
    let bgColor = placement.bgColor;
    let name = placement.name;
    let textColor = placement.textColor;

    const winCount = episodeCountMap.get('WIN') || 0; // All WIN variants combined (for TOP numbering)
    const winStrictCount = episodeCountMap.get('WIN_STRICT') || 0; // Only normal WIN (for multi-WIN visual)
    const topCount = episodeCountMap.get('TOP') || 0;
    const btmCount = episodeCountMap.get('BTM') || 0;
    const elimCount = (episodeCountMap.get('ELIM') || 0) + (episodeCountMap.get('FELIM') || 0);
    const elimOnlyCount = episodeCountMap.get('ELIM') || 0;

    // Multi-WIN: if 2+ normal WIN in the same episode column (variants don't trigger this).
    if (canonicalId === 'WIN' && winStrictCount >= 2) {
        const base = getPlacementById('WIN');
        const baseHex = colorNameToHex(base?.bgColor || DEFAULT_PLACEMENTS_BY_ID.WIN?.bgColor || 'royalblue');
        const defaultBaseHex = colorNameToHex(DEFAULT_PLACEMENTS_BY_ID.WIN?.bgColor || 'royalblue');
        const isCustomBase = baseHex.toLowerCase() !== defaultBaseHex.toLowerCase();
        if (isCustomBase) {
            bgColor = darkenColor(baseHex, 0.35);
        } else {
            bgColor = (getPlacementById('WIN2') && getPlacementById('WIN2').bgColor) || DEFAULT_PLACEMENTS_BY_ID.WIN2?.bgColor || 'darkblue';
        }
    }

    // Double ELIM visual: if 2+ ELIM (regular) in the same episode column.
    // Keeps the value as ELIM; only changes the color.
    if (canonicalId === 'ELIM' && elimOnlyCount >= 2) {
        const base = getPlacementById('ELIM');
        const baseHex = colorNameToHex(base?.bgColor || DEFAULT_PLACEMENTS_BY_ID.ELIM?.bgColor || 'red');
        const defaultBaseHex = colorNameToHex(DEFAULT_PLACEMENTS_BY_ID.ELIM?.bgColor || 'red');
        const isCustomBase = baseHex.toLowerCase() !== defaultBaseHex.toLowerCase();
        if (isCustomBase) {
            bgColor = darkenColor(baseHex, 0.35);
        } else {
            bgColor = (getPlacementById('DELIM') && getPlacementById('DELIM').bgColor) || DEFAULT_PLACEMENTS_BY_ID.DELIM?.bgColor || 'darkred';
        }
        // Requirement: multi-ELIM variant should use white text by default.
        textColor = (getPlacementById('DELIM') && getPlacementById('DELIM').textColor) || '#ffffff';
    }

    // TOP auto-numbering: TOPn where n = WIN + TOP in the column (when n >= 2)
    if (canonicalId === 'TOP') {
        const topGroupSize = winCount + topCount;
        name = topGroupSize >= 2 ? `TOP${topGroupSize}` : 'TOP';
    }

    // BTM auto-numbering:
    // - if there is an ELIM/FELIM in the column: BTMn where n = ELIM + BTM (when n >= 2)
    // - if there is no ELIM/FELIM: it's a "save" -> hotpink, BTMn where n = BTM (when n >= 2)
    if (canonicalId === 'BTM') {
        const bottomGroupSize = elimCount > 0 ? (elimCount + btmCount) : btmCount;
        name = bottomGroupSize >= 2 ? `BTM${bottomGroupSize}` : 'BTM';
        if (elimCount === 0 && btmCount >= 2) {
            bgColor = (getPlacementById('BTM6') && getPlacementById('BTM6').bgColor) || DEFAULT_PLACEMENTS_BY_ID.BTM6?.bgColor || 'hotpink';
        }
    }

    if (bgColor === placement.bgColor && name === placement.name && textColor === placement.textColor) return placement;
    return { ...placement, bgColor, name, textColor };
}

function ensurePlacementReachable(id) {
    const node = getPlacementById(id);
    if (!node || node.hidden) return;
    const found = placementExistsInTree(id);
    if (!found) state.placementRoots.push(id);
}

function placementExistsInTree(id) {
    if (state.placementRoots.includes(id)) return true;
    const stack = [...state.placementRoots];
    while (stack.length) {
        const cur = stack.pop();
        const p = getPlacementById(cur);
        if (!p || !p.children) continue;
        if (p.children.includes(id)) return true;
        for (const childId of p.children) stack.push(childId);
    }
    return false;
}

// ===== PAINT PALETTE =====
let paintState = { isPainting: false, lastKey: null, stroke: null };
let historyState = { undo: [], redo: [], isApplying: false };
let paintUiState = { openMenuIds: new Set(), activeSectionKey: null, renderScheduled: false };

function scheduleRenderTable() {
    if (paintUiState.renderScheduled) return;
    paintUiState.renderScheduled = true;
    requestAnimationFrame(() => {
        paintUiState.renderScheduled = false;
        renderTable();
    });
}

function renderPaintPalette(rootIds) {
    const sections = buildPaintSections(rootIds);
    const undoDisabled = historyState.undo.length === 0 ? 'disabled' : '';
    const redoDisabled = historyState.redo.length === 0 ? 'disabled' : '';

    // Keep the active tab valid.
    if (!paintUiState.activeSectionKey || !sections.some(s => s.key === paintUiState.activeSectionKey)) {
        paintUiState.activeSectionKey = sections[0]?.key || null;
    }

    const activeSection = sections.find(s => s.key === paintUiState.activeSectionKey);
    const activeSectionTitle = activeSection ? escapeHtml(activeSection.title) : '';

    return `
        <div class="paint-toolbar" role="toolbar" aria-label="Placements">
            <div class="paint-toolbar-top">
                <div class="paint-tabs" role="tablist" aria-label="Placement groups">
                    ${sections.map(s => {
                        const isActive = s.key === paintUiState.activeSectionKey;
                        return `
                            <button type="button" class="paint-tab ${isActive ? 'active' : ''}" role="tab" aria-selected="${isActive ? 'true' : 'false'}" data-action="tab" data-tab="${escapeHtml(s.key)}" title="${escapeHtml(s.title)}">
                                ${escapeHtml(s.title)}
                            </button>
                        `;
                    }).join('')}
                </div>
                <div class="paint-tabs-dropdown">
                    <button type="button" class="paint-tabs-dropdown-toggle" data-action="toggle-tabs-dropdown" aria-haspopup="listbox" aria-expanded="false">
                        <span class="paint-tabs-dropdown-label">${activeSectionTitle}</span>
                        <svg class="paint-tabs-dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="paint-tabs-dropdown-menu" role="listbox">
                        ${sections.map(s => {
                            const isActive = s.key === paintUiState.activeSectionKey;
                            return `
                                <button type="button" class="paint-tabs-dropdown-item ${isActive ? 'active' : ''}" role="option" aria-selected="${isActive ? 'true' : 'false'}" data-action="tab" data-tab="${escapeHtml(s.key)}">
                                    ${escapeHtml(s.title)}
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>
                <div class="paint-toolbar-actions" aria-label="History">
                    <button type="button" class="paint-action" data-action="undo" ${undoDisabled} title="Undo (Ctrl+Z)" aria-label="Undo">
                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1.3 11v6h6" />
                            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-9 9" />
                        </svg>
                    </button>
                    <button type="button" class="paint-action" data-action="redo" ${redoDisabled} title="Redo (Ctrl+Y / Ctrl+Shift+Z)" aria-label="Redo">
                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M21 11v6h-6" />
                            <path d="M1.3 17a9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="paint-tabpanes">
                ${sections.map(s => {
                    const isActive = s.key === paintUiState.activeSectionKey;
                    let content;
                    if (s.kind === 'border') {
                        content = renderBorderPalette(s.ids);
                    } else if (s.kind === 'subtext') {
                        content = renderSubtextPalette(s.ids);
                    } else {
                        content = renderPaintPaletteTree(s.ids);
                    }
                    return `
                        <div class="paint-tabpane ${isActive ? 'active' : ''}" role="tabpanel" data-tabpane="${escapeHtml(s.key)}">
                            <div class="paint-palette">${content}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function buildPaintSections(rootIds) {
    // Simple, readable grouping (keeps layout tidy without adding new screens)
    // Note: "Other" placements are merged into the main Placements tab (right after ELIM).
    const other = ['OUT', 'EMPTY'];
    const performance = ['WIN', 'TOP', 'HIGH', 'SAFE', 'LOW', 'BTM', 'ELIM', ...other];
    const finale = ['WINNER', 'RUNNERUP', 'GUEST', 'MISSCON', 'FIN_TOP3', 'FIN_TOP4', 'LSFTC', 'FAME'];
    const events = ['RUN', 'LPRZW', 'SMACK_LOSS', 'CUT', 'BLOCK', 'OUT_EVENT', 'RTRN', 'QUIT', 'DISQ', 'DEPT'];

    // Only show true roots in the palette (never show an ID both as a root chip and as a submenu item).
    const childIds = new Set();
    for (const id of Object.keys(state.placementsById || {})) {
        const p = getPlacementById(id);
        if (!p || !Array.isArray(p.children)) continue;
        for (const cId of p.children) {
            const child = getPlacementById(cId);
            if (child && !child.hidden) childIds.add(cId);
        }
    }
    const trueRootIds = (rootIds || []).filter(id => {
        const p = getPlacementById(id);
        if (!p || p.hidden) return false;
        return !childIds.has(id);
    });

    const present = new Set(trueRootIds);
    const filterPresent = (ids) => ids.filter(id => present.has(id) && getPlacementById(id) && !getPlacementById(id).hidden);

    const used = new Set([...performance, ...finale, ...events]);
    const extras = trueRootIds.filter(id => !used.has(id) && getPlacementById(id) && !getPlacementById(id).hidden);

    const sections = [
        { key: 'placements', title: 'Placements', kind: 'placement', ids: filterPresent(performance) },
        { key: 'finale', title: 'Finale', kind: 'placement', ids: filterPresent(finale) },
        { key: 'events', title: 'Events', kind: 'placement', ids: filterPresent(events) }
    ].filter(s => s.ids.length > 0);

    if (extras.length) sections.push({ key: 'custom', title: 'Custom', kind: 'placement', ids: extras });

    // Border add-ons live in their own tab.
    const borderIds = ['NONE', ...(Array.isArray(state.borderRoots) ? state.borderRoots : []).filter(id => !!getBorderById(id))];
    sections.push({ key: 'borders', title: 'Borders', kind: 'border', ids: borderIds });

    // Subtext add-ons live in their own tab.
    const subtextIds = ['NONE', ...(Array.isArray(state.subtextRoots) ? state.subtextRoots : []).filter(id => !!getSubtextById(id))];
    sections.push({ key: 'subtexts', title: 'Subtexts', kind: 'subtext', ids: subtextIds });

    return sections;
}

function renderBorderPalette(ids) {
    return (ids || [])
        .map(id => {
            if (id === 'NONE') {
                const selected = state.paintBorderId === 'NONE';
                return `
                    <div class="paint-item ${selected ? 'selected' : ''}">
                        <button type="button" class="paint-select" data-role="select-border" data-border-id="NONE" title="No border">
                            <span class="paint-swatch" style="background:#ffffff;"></span>
                            <span class="paint-label">NONE</span>
                        </button>
                    </div>
                `;
            }
            const b = getBorderById(id);
            if (!b) return '';
            const label = (b.name || '').replace(/<br>/g, ' ') || id;
            const tooltip = getBorderTooltipText(b.id, label);
            const selected = state.paintBorderId === b.id;
            return `
                <div class="paint-item ${selected ? 'selected' : ''}">
                    <button type="button" class="paint-select" data-role="select-border" data-border-id="${escapeHtml(b.id)}" title="${escapeHtml(tooltip)}">
                        <span class="paint-swatch" style="background:${b.borderColor};"></span>
                        <span class="paint-label">${escapeHtml(label)}</span>
                    </button>
                </div>
            `;
        })
        .join('');
}

function renderSubtextPalette(ids) {
    return (ids || [])
        .map(id => {
            if (id === 'NONE') {
                const selected = state.paintSubtextId === 'NONE';
                return `
                    <div class="paint-item ${selected ? 'selected' : ''}">
                        <button type="button" class="paint-select" data-role="select-subtext" data-subtext-id="NONE" title="No subtext">
                            <span class="paint-swatch" style="background:#ffffff;"></span>
                            <span class="paint-label">NONE</span>
                        </button>
                    </div>
                `;
            }
            const s = getSubtextById(id);
            if (!s) return '';
            const label = (s.name || '').replace(/<br>/g, ' ') || id;
            const tooltip = getSubtextTooltipText(s.id, label);
            const selected = state.paintSubtextId === s.id;
            return `
                <div class="paint-item ${selected ? 'selected' : ''}">
                    <button type="button" class="paint-select" data-role="select-subtext" data-subtext-id="${escapeHtml(s.id)}" title="${escapeHtml(tooltip)}">
                        <span class="paint-swatch" style="background:#e5e7eb;"><small><i>Aa</i></small></span>
                        <span class="paint-label">${escapeHtml(label)}</span>
                    </button>
                </div>
            `;
        })
        .join('');
}

function renderPaintPaletteTree(ids) {
    return ids
        .map(id => {
            const p = getPlacementById(id);
            if (!p || p.hidden) return '';
            const children = (Array.isArray(p.children) ? p.children : []).filter(cId => {
                const child = getPlacementById(cId);
                return !!(child && !child.hidden);
            });
            const hasChildren = children.length > 0;
            const label = (p.name || '').replace(/<br>/g, ' ') || (p.isOut ? '(Out)' : '(Empty)');
            const tooltip = getPlacementTooltipText(p.id, label);
            const selected = state.paintPlacementId === p.id;
            const isOpen = paintUiState.openMenuIds.has(p.id);
            // IMPORTANT: do not nest <button> inside <button> (invalid HTML, breaks submenu rendering).
            const item = `
                <div class="paint-item ${hasChildren ? 'has-children' : ''} ${selected ? 'selected' : ''} ${isOpen ? 'is-open' : ''}" data-paint-id="${p.id}" ${hasChildren ? `aria-expanded="${isOpen ? 'true' : 'false'}"` : ''}>
                    <button type="button" class="paint-select" data-role="select" data-paint-id="${p.id}" title="${escapeHtml(tooltip)}">
                        <span class="paint-swatch" style="background:${p.bgColor};"></span>
                        <span class="paint-label">${label}</span>
                    </button>
                    ${hasChildren ? `<button type="button" class="paint-caret-btn" data-role="caret" data-paint-id="${p.id}" aria-label="Toggle submenu" title="More">▾</button>` : ''}
                    ${hasChildren ? `<div class="paint-submenu">${renderPaintPaletteTree(children)}</div>` : ''}
                </div>
            `;
            return item;
        })
        .join('');
}

function handlePreviewClick(e) {
    const actionBtn = e.target.closest('.paint-action');
    if (actionBtn && actionBtn.dataset.action) {
        if (actionBtn.dataset.action === 'undo') undo();
        if (actionBtn.dataset.action === 'redo') redo();
        return;
    }

    // Handle dropdown toggle
    const dropdownToggle = e.target.closest('.paint-tabs-dropdown-toggle');
    if (dropdownToggle) {
        const dropdown = dropdownToggle.closest('.paint-tabs-dropdown');
        dropdown.classList.toggle('open');
        dropdownToggle.setAttribute('aria-expanded', dropdown.classList.contains('open'));
        return;
    }

    // Handle dropdown item click
    const dropdownItem = e.target.closest('.paint-tabs-dropdown-item');
    if (dropdownItem && dropdownItem.dataset.tab) {
        paintUiState.openMenuIds.clear();
        paintUiState.activeSectionKey = dropdownItem.dataset.tab;
        const dropdown = dropdownItem.closest('.paint-tabs-dropdown');
        if (dropdown) dropdown.classList.remove('open');
        renderTable();
        return;
    }

    const tabBtn = e.target.closest('.paint-tab');
    if (tabBtn && tabBtn.dataset.action === 'tab' && tabBtn.dataset.tab) {
        paintUiState.openMenuIds.clear();
        paintUiState.activeSectionKey = tabBtn.dataset.tab;
        renderTable();
        return;
    }

    const caretBtn = e.target.closest('[data-role="caret"]');
    if (caretBtn && caretBtn.dataset.paintId) {
        const paintId = caretBtn.dataset.paintId;
        if (paintUiState.openMenuIds.has(paintId)) {
            paintUiState.openMenuIds.delete(paintId);
        } else {
            paintUiState.openMenuIds.add(paintId);
        }
        renderTable();
        return;
    }

    const selectBtn = e.target.closest('[data-role="select"]');
    if (selectBtn && selectBtn.dataset.paintId) {
        const paintId = selectBtn.dataset.paintId;
        paintUiState.openMenuIds.clear();
        state.paintPlacementId = paintId;
        renderTable();
        return;
    }

    const borderSelectBtn = e.target.closest('[data-role="select-border"]');
    if (borderSelectBtn && borderSelectBtn.dataset.borderId) {
        const borderId = borderSelectBtn.dataset.borderId;
        state.paintBorderId = borderId || 'NONE';
        renderTable();
        return;
    }

    const subtextSelectBtn = e.target.closest('[data-role="select-subtext"]');
    if (subtextSelectBtn && subtextSelectBtn.dataset.subtextId) {
        const subtextId = subtextSelectBtn.dataset.subtextId;
        state.paintSubtextId = subtextId || 'NONE';
        renderTable();
        return;
    }
}

function handlePreviewMouseDown(e) {
    const cell = e.target.closest('td.placement-cell, td.out-cell');
    if (!cell) return;
    const contestantId = Number.parseInt(cell.dataset.contestant || '', 10);
    const epIdx = Number.parseInt(cell.dataset.episode || '', 10);
    if (!Number.isFinite(contestantId) || !Number.isFinite(epIdx)) return;
    paintState.isPainting = true;
    const activeKey = paintUiState.activeSectionKey;
    let kind = 'placements';
    if (activeKey === 'borders') kind = 'borders';
    else if (activeKey === 'subtexts') kind = 'subtexts';
    paintState.stroke = { kind, changesByKey: new Map() };
    paintCell(contestantId, epIdx);
}

function handlePreviewMouseOver(e) {
    if (!paintState.isPainting) return;
    if (e.buttons !== 1) return;
    const cell = e.target.closest('td.placement-cell, td.out-cell');
    if (!cell) return;
    const contestantId = Number.parseInt(cell.dataset.contestant || '', 10);
    const epIdx = Number.parseInt(cell.dataset.episode || '', 10);
    if (!Number.isFinite(contestantId) || !Number.isFinite(epIdx)) return;
    paintCell(contestantId, epIdx);
}

function paintCell(contestantId, epIdx) {
    const activeKey = paintUiState.activeSectionKey;
    let value, mode;
    if (activeKey === 'borders') {
        mode = 'B';
        value = state.paintBorderId || 'NONE';
    } else if (activeKey === 'subtexts') {
        mode = 'S';
        value = state.paintSubtextId || 'NONE';
    } else {
        mode = 'P';
        value = state.paintPlacementId || 'EMPTY';
    }
    
    const key = `${contestantId}:${epIdx}:${mode}:${value}`;
    if (paintState.lastKey === key) return;
    paintState.lastKey = key;

    let changes;
    if (mode === 'B') {
        changes = applyBorderToContestantInternal(contestantId, epIdx, value, { suppressHistory: true });
    } else if (mode === 'S') {
        changes = applySubtextToContestantInternal(contestantId, epIdx, value, { suppressHistory: true });
    } else {
        changes = applyPlacementToContestantInternal(contestantId, epIdx, value, { suppressHistory: true });
    }
    
    if (paintState.stroke) recordStrokeChanges(paintState.stroke, changes);

    // Re-render live while painting (once per animation frame)
    scheduleRenderTable();
}

function recordStrokeChanges(stroke, changes) {
    for (const ch of changes) {
        const k = `${ch.contestantId}:${ch.epIdx}`;
        const existing = stroke.changesByKey.get(k);
        if (!existing) {
            stroke.changesByKey.set(k, { ...ch });
        } else {
            // Keep the earliest "from", update the latest "to"
            existing.to = ch.to;
        }
    }
}

function finalizeStroke() {
    const stroke = paintState.stroke;
    paintState.stroke = null;
    if (!stroke) return;
    const changes = Array.from(stroke.changesByKey.values()).filter(ch => ch.from !== ch.to);
    if (!changes.length) return;
    pushHistory({ type: stroke.kind || 'placements', changes });
    // Undo/Redo enabled state is computed during render; refresh right after committing history.
    scheduleRenderTable();
}

function pushHistory(entry) {
    historyState.undo.push(entry);
    historyState.redo = [];
}

function undo() {
    const entry = historyState.undo.pop();
    if (!entry) return;
    historyState.isApplying = true;
    try {
        // Apply reverse
        for (const ch of entry.changes) {
            if (entry.type === 'fields') {
                applyFieldChange(ch, ch.from);
            } else if (entry.type === 'borders') {
                applyBorderToContestantInternal(ch.contestantId, ch.epIdx, ch.from, { suppressHistory: true });
            } else if (entry.type === 'subtexts') {
                applySubtextToContestantInternal(ch.contestantId, ch.epIdx, ch.from, { suppressHistory: true });
            } else {
                applyPlacementToContestantInternal(ch.contestantId, ch.epIdx, ch.from, { suppressHistory: true });
            }
        }
    } finally {
        historyState.isApplying = false;
    }
    historyState.redo.push(entry);
    if (entry.type === 'fields') {
        syncSettingsUI();
        renderAll();
    } else {
        renderTable();
    }
}

function redo() {
    const entry = historyState.redo.pop();
    if (!entry) return;
    historyState.isApplying = true;
    try {
        for (const ch of entry.changes) {
            if (entry.type === 'fields') {
                applyFieldChange(ch, ch.to);
            } else if (entry.type === 'borders') {
                applyBorderToContestantInternal(ch.contestantId, ch.epIdx, ch.to, { suppressHistory: true });
            } else if (entry.type === 'subtexts') {
                applySubtextToContestantInternal(ch.contestantId, ch.epIdx, ch.to, { suppressHistory: true });
            } else {
                applyPlacementToContestantInternal(ch.contestantId, ch.epIdx, ch.to, { suppressHistory: true });
            }
        }
    } finally {
        historyState.isApplying = false;
    }
    historyState.undo.push(entry);
    if (entry.type === 'fields') {
        syncSettingsUI();
        renderAll();
    } else {
        renderTable();
    }
}

function getEpisodeGroupLabel(episode, idx) {
    if (!state.customEpisodeLabels) return `Ep. ${idx + 1}`;
    const raw = (episode.groupLabel ?? '').toString().trim();
    return raw.length ? raw : `Ep. ${idx + 1}`;
}

function buildEpisodeGroups() {
    const groups = [];
    for (let i = 0; i < state.episodes.length; i++) {
        const label = getEpisodeGroupLabel(state.episodes[i], i);
        const prev = groups[groups.length - 1];
        if (prev && prev.label === label) {
            prev.span += 1;
        } else {
            groups.push({ label, span: 1 });
        }
    }
    return groups;
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function getRank(index) {
    return getOrdinal(index + 1);
}

function getOrdinal(n) {
    const num = Math.max(1, Number(n) || 1);
    const mod100 = num % 100;
    if (mod100 >= 11 && mod100 <= 13) return `${num}th`;
    const mod10 = num % 10;
    if (mod10 === 1) return `${num}st`;
    if (mod10 === 2) return `${num}nd`;
    if (mod10 === 3) return `${num}rd`;
    return `${num}th`;
}

function formatRankRange(minPos, maxPos) {
    const a = Math.max(1, Number(minPos) || 1);
    const b = Math.max(a, Number(maxPos) || a);
    if (a === b) return getOrdinal(a);
    if (b === a + 1) return `${getOrdinal(a)}/${getOrdinal(b)}`;
    return `${getOrdinal(a)}-${getOrdinal(b)}`;
}

function computeRankLabelsForCurrentOrder() {
    const labels = state.contestants.map(() => 'TBA');
    const totalContestants = state.contestants.length;
    
    // Collect contestants with terminal placements and their exit info
    const rankedContestants = [];
    
    for (let idx = 0; idx < state.contestants.length; idx++) {
        const c = state.contestants[idx];
        
        // Check if contestant has hit any terminal placement (and hasn't returned since)
        const hasTerminalPlacement = contestantHasTerminalPlacement(c);
        if (!hasTerminalPlacement) {
            labels[idx] = 'TBA';
            continue;
        }
        
        const exitInfo = getContestantExitInfo(c);
        rankedContestants.push({ idx, exitInfo });
    }
    
    // Sort by exit priority (lower = eliminated earlier = worse rank = higher number)
    // Finale placements have high priority (1000+), regular exits have episode number
    rankedContestants.sort((a, b) => {
        const aPriority = a.exitInfo.priority;
        const bPriority = b.exitInfo.priority;
        
        // Higher priority = better rank (lower number)
        if (aPriority !== bPriority) return aPriority - bPriority;
        
        // Same priority - they tie
        return 0;
    });
    
    // Group ties by tieKey
    const tieGroups = new Map();
    for (const { idx, exitInfo } of rankedContestants) {
        const key = exitInfo.tieKey;
        const arr = tieGroups.get(key) || [];
        arr.push(idx);
        tieGroups.set(key, arr);
    }
    
    // Assign ranks from the bottom up
    // First eliminated = last place (total queens), last eliminated = best rank among eliminated
    // Number of TBA queens at elimination determines rank
    let eliminatedSoFar = 0;
    const processedKeys = new Set();
    
    for (const { exitInfo } of rankedContestants) {
        const key = exitInfo.tieKey;
        if (processedKeys.has(key)) continue;
        processedKeys.add(key);
        
        const indices = tieGroups.get(key) || [];
        // Rank = total contestants - number eliminated before this group
        const rankStart = totalContestants - eliminatedSoFar;
        const rankEnd = rankStart - indices.length + 1;
        
        if (indices.length === 1) {
            labels[indices[0]] = getRank(rankStart - 1); // getRank is 0-indexed
        } else {
            // Tied contestants share a range (e.g., "5th-6th")
            const label = formatRankRange(rankEnd, rankStart);
            for (const i of indices) labels[i] = label;
        }
        eliminatedSoFar += indices.length;
    }

    return labels;
}

// Get exit information for ranking purposes
function getContestantExitInfo(contestant) {
    if (!contestant || !Array.isArray(contestant.placements)) {
        return { priority: -1000, tieKey: 'UNKNOWN' };
    }

    const placements = contestant.placements.map(p => canonicalizePlacementId(p || 'EMPTY'));
    const numEpisodes = placements.length;

    // Finale placements get highest priority
    if (placements.includes('WINNER')) {
        return { priority: numEpisodes + 1000, tieKey: 'FINAL:WINNER' };
    }
    if (placements.includes('RUNNERUP')) {
        return { priority: numEpisodes + 999, tieKey: 'FINAL:RUNNERUP' };
    }

    // LSFTC losers
    const lsftcEarlyRounds = ['LSFTC_L1', 'LSFTC_L2'];
    for (let epIdx = 0; epIdx < placements.length; epIdx++) {
        const p = placements[epIdx];
        if (lsftcEarlyRounds.includes(p)) {
            return { priority: numEpisodes + 998, tieKey: `FINAL:LSFTC_EP${epIdx}` };
        }
    }
    if (placements.includes('LSFTC_L3')) {
        return { priority: numEpisodes + 997, tieKey: 'FINAL:LSFTC_L3' };
    }

    // Find the LAST terminal placement episode (after any returns)
    let lastTerminalEpisode = -1;
    let lastReturnEpisode = -1;
    
    for (let epIdx = 0; epIdx < placements.length; epIdx++) {
        const raw = placements[epIdx];
        
        if (raw === 'RTRN' || isRtrnComboId(raw)) {
            lastReturnEpisode = epIdx;
            continue;
        }
        
        let baseId = raw;
        if (isQuitComboId(raw)) baseId = 'QUIT';
        else if (isDisqComboId(raw)) baseId = 'DISQ';
        else if (isDeptComboId(raw)) baseId = 'DEPT';
        
        if (ELIMINATION_PLACEMENTS.has(baseId)) {
            // Only count if after last return
            if (epIdx > lastReturnEpisode) {
                lastTerminalEpisode = epIdx;
            }
        }
    }

    if (lastTerminalEpisode >= 0) {
        // Priority = episode number (later = higher priority = better rank)
        return { priority: lastTerminalEpisode, tieKey: `EXIT:${lastTerminalEpisode}` };
    }

    return { priority: -1000, tieKey: 'UNKNOWN' };
}

// Check if a contestant has any terminal placement (elimination or finale)
// Returns false if they returned to the competition after being eliminated
function contestantHasTerminalPlacement(contestant) {
    if (!contestant || !Array.isArray(contestant.placements)) return false;
    
    let lastTerminalEpisode = -1;
    let lastReturnEpisode = -1;
    
    for (let epIdx = 0; epIdx < contestant.placements.length; epIdx++) {
        const p = contestant.placements[epIdx];
        const raw = canonicalizePlacementId(p || 'EMPTY');
        
        // Check if this is a RTRN or RTRN combo (they returned to competition)
        if (raw === 'RTRN' || isRtrnComboId(raw)) {
            lastReturnEpisode = epIdx;
            continue;
        }
        
        // Handle combo placements (QUIT_, DISQ_, DEPT_)
        let baseId = raw;
        if (isQuitComboId(raw)) {
            baseId = 'QUIT'; // QUIT combos are terminal
        } else if (isDisqComboId(raw)) {
            baseId = 'DISQ'; // DISQ combos are terminal
        } else if (isDeptComboId(raw)) {
            baseId = 'DEPT'; // DEPT combos are terminal
        }
        
        if (TERMINAL_PLACEMENTS.has(baseId)) {
            lastTerminalEpisode = epIdx;
        }
    }
    
    // If they returned AFTER their last terminal placement, they're back in competition (TBA)
    if (lastReturnEpisode > lastTerminalEpisode) {
        return false;
    }
    
    // They have a terminal placement and haven't returned since
    return lastTerminalEpisode >= 0;
}

function getContestantTieKey(contestant) {
    if (!contestant || !Array.isArray(contestant.placements)) return null;

    const placements = contestant.placements.map(p => canonicalizePlacementId(p || 'EMPTY'));

    // Finale placements first (explicit markers)
    if (placements.includes('WINNER')) return 'FINAL:WINNER';
    if (placements.includes('RUNNERUP')) return 'FINAL:RUNNERUP';

    // LSFTC losers: LOST 1ST and LOST 2ND in the same EPISODE (column) share a rank,
    // since they lost at the same bracket level. LOST 3RD is separate (they're runner-up).
    const lsftcEarlyRounds = ['LSFTC_L1', 'LSFTC_L2'];
    for (let epIdx = 0; epIdx < placements.length; epIdx++) {
        const p = placements[epIdx];
        if (lsftcEarlyRounds.includes(p)) {
            return `FINAL:LSFTC_EP${epIdx}`;
        }
    }
    // LOST 3RD gets its own tie group (runner-up level)
    if (placements.includes('LSFTC_L3')) return 'FINAL:LSFTC_L3';

    // Group together contestants who stop competing in the same episode.
    // This covers double eliminations, multiple finale eliminations, etc.
    for (let epIdx = 0; epIdx < placements.length; epIdx++) {
        const raw = placements[epIdx] || 'EMPTY';
        
        // Handle combo placements
        let baseId = raw;
        if (isRtrnComboId(raw)) {
            baseId = canonicalizePlacementId(getRtrnComboBaseId(raw));
        } else if (isQuitComboId(raw)) {
            baseId = 'QUIT';
        } else if (isDisqComboId(raw)) {
            baseId = 'DISQ';
        } else if (isDeptComboId(raw)) {
            baseId = 'DEPT';
        }
        
        if (ELIMINATION_PLACEMENTS.has(baseId)) return `EXIT:${epIdx}`;
    }

    return null;
}

function colorNameToHex(color) {
    if (color.startsWith('#')) return color;
    
    // Create temp element to convert color name to hex
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = color;
    return ctx.fillStyle;
}

function darkenColor(color, amount) {
    // amount: 0..1 (0 = no change, 1 = black)
    const a = Math.max(0, Math.min(1, Number(amount) || 0));
    const hex = colorNameToHex(String(color || '#000000'));

    // Supports #rgb, #rrggbb, or canvas-produced rgb(...)
    const rgb = hexToRgb(hex) || cssRgbToRgb(hex);
    if (!rgb) return String(color || '#000000');

    const r = Math.round(rgb.r * (1 - a));
    const g = Math.round(rgb.g * (1 - a));
    const b = Math.round(rgb.b * (1 - a));
    return rgbToHex(r, g, b);
}

function hexToRgb(hex) {
    const s = String(hex || '').trim();
    if (!s.startsWith('#')) return null;
    const raw = s.slice(1);
    if (raw.length === 3) {
        const r = parseInt(raw[0] + raw[0], 16);
        const g = parseInt(raw[1] + raw[1], 16);
        const b = parseInt(raw[2] + raw[2], 16);
        if ([r, g, b].some(n => Number.isNaN(n))) return null;
        return { r, g, b };
    }
    if (raw.length === 6) {
        const r = parseInt(raw.slice(0, 2), 16);
        const g = parseInt(raw.slice(2, 4), 16);
        const b = parseInt(raw.slice(4, 6), 16);
        if ([r, g, b].some(n => Number.isNaN(n))) return null;
        return { r, g, b };
    }
    return null;
}

function cssRgbToRgb(s) {
    const str = String(s || '').trim();
    const m = /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(str);
    if (!m) return null;
    const r = Math.max(0, Math.min(255, Number(m[1]) || 0));
    const g = Math.max(0, Math.min(255, Number(m[2]) || 0));
    const b = Math.max(0, Math.min(255, Number(m[3]) || 0));
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    const to2 = (n) => {
        const v = Math.max(0, Math.min(255, Number(n) || 0));
        return v.toString(16).padStart(2, '0');
    };
    return `#${to2(r)}${to2(g)}${to2(b)}`;
}
