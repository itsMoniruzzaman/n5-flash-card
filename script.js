// ==========================================
// 1. HARDCODED USERS LIST (Add more anytime)
// ==========================================
const ALLOWED_USERS = [
    { username: "moniruzzaman", password: "20121419" },
    { username: "faysal", password: "123456" },
    // Want to add another user later? Just paste below like this:
    // { username: "friend123", password: "mypassword" }
];

// ==========================================
// 2. SUPABASE & AUTH STATE
// ==========================================
const SUPABASE_URL = 'https://cidpknsujfwbufzwlsba.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable__MUUqVJg0hnM1G3xB59qeg_0yQ8EJYZ';

let supabaseClient = null; 
let currentUser = null;
let allCardsDb = [];

try {
    if (!SUPABASE_URL.includes('your-project')) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (error) {
    console.error("Supabase skipped.");
}

// Check if user is already remembered in this browser session
window.addEventListener('DOMContentLoaded', () => {
    const savedUser = sessionStorage.getItem('jlpt_active_user');
    if (savedUser) {
        currentUser = savedUser;
        initAppForUser(currentUser);
    }
});

function handleLogin() {
    const userInput = document.getElementById('login-user').value.trim().toLowerCase();
    const passInput = document.getElementById('login-pass').value.trim();
    const errorEl = document.getElementById('login-error');

    // Check match against authorized list
    const matchedUser = ALLOWED_USERS.find(u => u.username === userInput && u.password === passInput);

    if (matchedUser) {
        errorEl.style.display = 'none';
        currentUser = matchedUser.username;
        sessionStorage.setItem('jlpt_active_user', currentUser);
        initAppForUser(currentUser);
    } else {
        errorEl.style.display = 'block';
    }
}

function handleLogout() {
    sessionStorage.removeItem('jlpt_active_user');
    currentUser = null;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('login-user').value = '';
    document.getElementById('login-pass').value = '';
}

function initAppForUser(username) {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('current-username').innerText = username;
    
    // Load isolated local database for this specific user
    allCardsDb = loadLocalDatabase(username);
    updateSyncUI();
}

function updateSyncUI() {
    const statusEl = document.getElementById('sync-status');
    const textEl = document.getElementById('sync-text');
    if (supabaseClient && navigator.onLine) {
        statusEl.classList.remove('local');
        statusEl.classList.add('cloud');
        textEl.innerText = 'Cloud Synced';
    } else {
        statusEl.classList.remove('cloud');
        statusEl.classList.add('local');
        textEl.innerText = 'Local Mode';
    }
}

// ==========================================
// 3. VOCABULARY BASE DATA
// ==========================================
const rawCards = [
    // Lesson 1
    { jp: "わたし", bn: "আমি", lesson: 1 },
    { jp: "わたしたち", bn: "আমরা", lesson: 1 },
    { jp: "あなた", bn: "তুমি / আপনি", lesson: 1 },
    { jp: "あのひと", bn: "ওই ব্যক্তি", lesson: 1 },
    { jp: "あのかた", bn: "ওই ব্যক্তি (সম্মানসূচক)", lesson: 1 },
    { jp: "みなさん", bn: "আপনারা সবাই", lesson: 1 },
    { jp: "～さん", bn: "জনাব / বেগম", lesson: 1 },
    { jp: "～ちゃん", bn: "(বাচ্চাদের নামের শেষে ব্যবহৃত সম্মানসূচক শব্দ)", lesson: 1 },
    { jp: "～くん", bn: "(ছেলেদের নামের শেষে ব্যবহৃত)", lesson: 1 },
    { jp: "～じん", bn: "~ জাতি / অধিবাসী", lesson: 1 },
    { jp: "せんせい", bn: "শিক্ষক (নিজের ক্ষেত্রে ব্যবহৃত হয় না)", lesson: 1 },
    { jp: "きょうし", bn: "শিক্ষক (পেশা হিসেবে)", lesson: 1 },
    { jp: "がくせい", bn: "ছাত্র / ছাত্রী", lesson: 1 },
    { jp: "かいしゃいん", bn: "কোম্পানির কর্মচারী / চাকরিজীবী", lesson: 1 },
    { jp: "しゃいん", bn: "কর্মচারী (কোম্পানির নামের সাথে বসে)", lesson: 1 },
    { jp: "ぎんこういん", bn: "ব্যাংক কর্মকর্তা", lesson: 1 },
    { jp: "いしゃ", bn: "ডাক্তার", lesson: 1 },
    { jp: "けんきゅうしゃ", bn: "গবেষক", lesson: 1 },
    { jp: "エンジニア", bn: "প্রকৌশলী", lesson: 1 },
    { jp: "だいがく", bn: "বিশ্ববিদ্যালয়", lesson: 1 },
    { jp: "びょういん", bn: "হাসপাতাল", lesson: 1 },
    { jp: "でんき", bn: "বিদ্যুৎ / আলো", lesson: 1 },
    { jp: "だれ", bn: "কে", lesson: 1 },
    { jp: "どなた", bn: "কে (সম্মানসূচক)", lesson: 1 },
    { jp: "～さい", bn: "~ বছর বয়স", lesson: 1 },
    { jp: "なんさい", bn: "কত বয়স", lesson: 1 },
    { jp: "おいくつ", bn: "কত বয়স (সম্মানসূচক)", lesson: 1 },
    { jp: "はい", bn: "হ্যাঁ", lesson: 1 },
    { jp: "いいえ", bn: "না", lesson: 1 },
    { jp: "しつれいですが", bn: "মাফ করবেন, কিন্তু...", lesson: 1 },
    { jp: "おなまえは？", bn: "আপনার নাম কী?", lesson: 1 },
    { jp: "はじめまして", bn: "আপনার সাথে পরিচিত হয়ে ভালো লাগলো (প্রথম দেখায়)", lesson: 1 },
    { jp: "どうぞよろしく", bn: "আমার প্রতি সদয় হবেন", lesson: 1 },
    { jp: "こちらは～さんです", bn: "ইনি হচ্ছেন জনাব/বেগম ~", lesson: 1 },
    { jp: "～からきました", bn: "~ থেকে এসেছি", lesson: 1 },

    // Lesson 2
    { jp: "これ", bn: "এটা", lesson: 2 },
    { jp: "それ", bn: "ওটা", lesson: 2 },
    { jp: "あれ", bn: "ওইটা (দূরে)", lesson: 2 },
    { jp: "この", bn: "এই ~", lesson: 2 },
    { jp: "その", bn: "ওই ~", lesson: 2 },
    { jp: "あの", bn: "ওই ~ (দূরে)", lesson: 2 },
    { jp: "ほん", bn: "বই", lesson: 2 },
    { jp: "じしょ", bn: "অভিধান / ডিকশনারি", lesson: 2 },
    { jp: "ざっし", bn: "ম্যাগাজিন / পত্রিকা", lesson: 2 },
    { jp: "しんぶん", bn: "সংবাদপত্র", lesson: 2 },
    { jp: "ノート", bn: "খাতা / নোটবুক", lesson: 2 },
    { jp: "てちょう", bn: "পকেট ডায়েরি", lesson: 2 },
    { jp: "めいし", bn: "ভিজিটিং কার্ড", lesson: 2 },
    { jp: "カード", bn: "কার্ড", lesson: 2 },
    { jp: "テレホンカード", bn: "টেলিফোন কার্ড", lesson: 2 },
    { jp: "えんぴつ", bn: "পেন্সিল", lesson: 2 },
    { jp: "ボールペン", bn: "বলপেন", lesson: 2 },
    { jp: "シャープペンシル", bn: "মেকানিক্যাল পেন্সিল", lesson: 2 },
    { jp: "かぎ", bn: "চাবি", lesson: 2 },
    { jp: "とけい", bn: "ঘড়ি", lesson: 2 },
    { jp: "かさ", bn: "ছাতা", lesson: 2 },
    { jp: "かばん", bn: "ব্যাগ", lesson: 2 },
    { jp: "カセットテープ", bn: "ক্যাসেট টেপ", lesson: 2 },
    { jp: "テープレコーダー", bn: "টেপ রেকর্ডার", lesson: 2 },
    { jp: "テレビ", bn: "টেলিভিশন", lesson: 2 },
    { jp: "ラジオ", bn: "রেডিও", lesson: 2 },
    { jp: "カメラ", bn: "ক্যামেরা", lesson: 2 },
    { jp: "コンピューター", bn: "কম্পিউটার", lesson: 2 },
    { jp: "じどうしゃ", bn: "গাড়ি / অটোমোবাইল", lesson: 2 },
    { jp: "つくえ", bn: "টেবিল / ডেস্ক", lesson: 2 },
    { jp: "いす", bn: "চেয়ার", lesson: 2 },
    { jp: "チョコレート", bn: "চকলেট", lesson: 2 },
    { jp: "コーヒー", bn: "কফি", lesson: 2 },
    { jp: "えいご", bn: "ইংরেজি ভাষা", lesson: 2 },
    { jp: "にほんご", bn: "জাপানি ভাষা", lesson: 2 },
    { jp: "～ご", bn: "~ ভাষা", lesson: 2 },
    { jp: "なん", bn: "কী", lesson: 2 },
    { jp: "そう", bn: "তাই", lesson: 2 },
    { jp: "ちがいます", bn: "ভুল / না, তা নয়", lesson: 2 },
    { jp: "そうですか", bn: "তাই নাকি? / বুঝতে পেরেছি", lesson: 2 },
    { jp: "あのう", bn: "উমম... (দ্বিধা প্রকাশ করতে)", lesson: 2 },
    { jp: "ほんのきもちです", bn: "সামান্য উপহার মাত্র", lesson: 2 },
    { jp: "どうぞ", bn: "দয়া করে / এই নিন", lesson: 2 },
    { jp: "どうも", bn: "ধন্যবাদ", lesson: 2 },
    { jp: "どうもありがとうございます", bn: "অনেক ধন্যবাদ", lesson: 2 },
    { jp: "これからおせわになります", bn: "এখন থেকে আপনার সাহায্য কামনা করছি", lesson: 2 },
    { jp: "こちらこそよろしく", bn: "আমার পক্ষ থেকেও শুভেচ্ছা", lesson: 2 },

    // Lesson 3
    { jp: "ここ", bn: "এখানে", lesson: 3 },
    { jp: "そこ", bn: "ওখানে", lesson: 3 },
    { jp: "あそこ", bn: "ওইখানে (দূরে)", lesson: 3 },
    { jp: "どこ", bn: "কোথায়", lesson: 3 },
    { jp: "こちら", bn: "এদিকে / এই স্থান (সম্মানসূচক)", lesson: 3 },
    { jp: "そちら", bn: "ওদিকে / ওই স্থান (সম্মানসূচক)", lesson: 3 },
    { jp: "あちら", bn: "ওইদিকে / ওই স্থান (সম্মানসূচক)", lesson: 3 },
    { jp: "どちら", bn: "কোন দিকে / কোথায় (সম্মানসূচক)", lesson: 3 },
    { jp: "きょうしつ", bn: "শ্রেণিকক্ষ", lesson: 3 },
    { jp: "しょくどう", bn: "খাবার ঘর / ক্যান্টিন", lesson: 3 },
    { jp: "じむしょ", bn: "অফিস", lesson: 3 },
    { jp: "かいぎしつ", bn: "মিটিং রুম", lesson: 3 },
    { jp: "うけつけ", bn: "অভ্যর্থনা কক্ষ / রিসেপশন", lesson: 3 },
    { jp: "ロビー", bn: "লবি", lesson: 3 },
    { jp: "へや", bn: "রুম / কক্ষ", lesson: 3 },
    { jp: "トイレ（おてあらい）", bn: "টয়লেট / ওয়াশরুম", lesson: 3 },
    { jp: "かいだん", bn: "সিঁড়ি", lesson: 3 },
    { jp: "エレベーター", bn: "লিফট", lesson: 3 },
    { jp: "エスカレーター", bn: "চলন্ত সিঁড়ি", lesson: 3 },
    { jp: "おくに", bn: "দেশ", lesson: 3 },
    { jp: "かいしゃ", bn: "কোম্পানি", lesson: 3 },
    { jp: "うち", bn: "বাড়ি", lesson: 3 },
    { jp: "でんわ", bn: "ফোন", lesson: 3 },
    { jp: "くつ", bn: "জুতা", lesson: 3 },
    { jp: "ネクタイ", bn: "নেকটাই", lesson: 3 },
    { jp: "ワイン", bn: "ওয়াইন", lesson: 3 },
    { jp: "たばこ", bn: "সিগারেট", lesson: 3 },
    { jp: "うりば", bn: "বিক্রয়কেন্দ্র / কাউন্টার", lesson: 3 },
    { jp: "ちか", bn: "আন্ডারগ্রাউন্ড / পাতাল", lesson: 3 },
    { jp: "～かい", bn: "~ তলা", lesson: 3 },
    { jp: "なんがい", bn: "কত তলা", lesson: 3 },
    { jp: "えん", bn: "ইয়েন (জাপানি মুদ্রা)", lesson: 3 },
    { jp: "いくら", bn: "দাম কত", lesson: 3 },
    { jp: "ひゃく", bn: "একশ", lesson: 3 },
    { jp: "せん", bn: "এক হাজার", lesson: 3 },
    { jp: "まん", bn: "দশ হাজার", lesson: 3 },
    { jp: "すみません", bn: "মাফ করবেন", lesson: 3 },
    { jp: "～でございます", bn: "~ বটে (Desu-এর সম্মানসূচক রূপ)", lesson: 3 },
    { jp: "みせてください", bn: "দয়া করে দেখান", lesson: 3 },
    { jp: "じゃ", bn: "তাহলে", lesson: 3 },
    { jp: "～をください", bn: "দয়া করে ~ দিন", lesson: 3 },

    // Lesson 4
    { jp: "おきます", bn: "ঘুম থেকে ওঠা", lesson: 4 },
    { jp: "ねます", bn: "ঘুমানো", lesson: 4 },
    { jp: "はたらきます", bn: "কাজ করা", lesson: 4 },
    { jp: "やすみます", bn: "বিশ্রাম নেওয়া / ছুটি নেওয়া", lesson: 4 },
    { jp: "べんきょうします", bn: "পড়াশোনা করা", lesson: 4 },
    { jp: "おわります", bn: "শেষ হওয়া", lesson: 4 },
    { jp: "デパート", bn: "ডিপার্টমেন্টাল স্টোর", lesson: 4 },
    { jp: "ぎんこう", bn: "ব্যাংক", lesson: 4 },
    { jp: "ゆうびんきょく", bn: "পোস্ট অফিস", lesson: 4 },
    { jp: "としょかん", bn: "লাইব্রেরি", lesson: 4 },
    { jp: "びじゅつかん", bn: "শিল্পকলা জাদুঘর", lesson: 4 },
    { jp: "いま", bn: "এখন", lesson: 4 },
    { jp: "～じ", bn: "~ টা (সময়)", lesson: 4 },
    { jp: "～ふん / ～ぷん", bn: "~ মিনিট", lesson: 4 },
    { jp: "はん", bn: "অর্ধেক / সাড়ে", lesson: 4 },
    { jp: "なんじ", bn: "কয়টা বাজে", lesson: 4 },
    { jp: "なんぷん", bn: "কত মিনিট", lesson: 4 },
    { jp: "ごぜん", bn: "সকাল (AM)", lesson: 4 },
    { jp: "ごご", bn: "বিকেল/রাত (PM)", lesson: 4 },
    { jp: "あさ", bn: "সকাল", lesson: 4 },
    { jp: "ひる", bn: "দুপুর", lesson: 4 },
    { jp: "ばん（よる）", bn: "সন্ধ্যা (রাত)", lesson: 4 },
    { jp: "おととい", bn: "গতপরশু", lesson: 4 },
    { jp: "きのう", bn: "গতকাল", lesson: 4 },
    { jp: "きょう", bn: "আজ", lesson: 4 },
    { jp: "あした", bn: "আগামীকাল", lesson: 4 },
    { jp: "あさって", bn: "আগামীপরশু", lesson: 4 },
    { jp: "けさ", bn: "আজ সকালে", lesson: 4 },
    { jp: "こんばん", bn: "আজ রাতে", lesson: 4 },
    { jp: "やすみ", bn: "ছুটি / বিশ্রাম", lesson: 4 },
    { jp: "ひるやすみ", bn: "দুপুরের ছুটি", lesson: 4 },
    { jp: "まいあさ", bn: "প্রতিদিন সকালে", lesson: 4 },
    { jp: "まいばん", bn: "প্রতিদিন রাতে", lesson: 4 },
    { jp: "まいにち", bn: "প্রতিদিন", lesson: 4 },
    { jp: "げつようび", bn: "সোমবার", lesson: 4 },
    { jp: "かようび", bn: "মঙ্গলবার", lesson: 4 },
    { jp: "すいようび", bn: "বুধবার", lesson: 4 },
    { jp: "もくようび", bn: "বৃহস্পতিবার", lesson: 4 },
    { jp: "きんようび", bn: "শুক্রবার", lesson: 4 },
    { jp: "どようび", bn: "শনিবার", lesson: 4 },
    { jp: "にちようび", bn: "রবিবার", lesson: 4 },
    { jp: "なんようび", bn: "কী বার", lesson: 4 },
    { jp: "ばんごう", bn: "নম্বর", lesson: 4 },
    { jp: "なんばん", bn: "কত নম্বর", lesson: 4 },
    { jp: "～から", bn: "~ থেকে", lesson: 4 },
    { jp: "～まで", bn: "~ পর্যন্ত", lesson: 4 },
    { jp: "と", bn: "এবং", lesson: 4 },
    { jp: "そちら", bn: "আপনার স্থান / ওদিক", lesson: 4 },
    { jp: "たいへんですね", bn: "খুব কঠিন, তাই না!", lesson: 4 },
    { jp: "えーと", bn: "উমম (ভাবার সময় ব্যবহৃত)", lesson: 4 },
    { jp: "おねがいします", bn: "দয়া করে", lesson: 4 },
    { jp: "かしこまりました", bn: "বুঝতে পেরেছি (সম্মানসূচক)", lesson: 4 },
    { jp: "おといあわせのばんごう", bn: "জিজ্ঞাসিত নম্বর", lesson: 4 },
    { jp: "どうもありがとうございました", bn: "অনেক ধন্যবাদ", lesson: 4 },

    // Lesson 5
    { jp: "いきます", bn: "যাওয়া", lesson: 5 },
    { jp: "きます", bn: "আসা", lesson: 5 },
    { jp: "かえります", bn: "ফিরে আসা / বাড়ি ফেরা", lesson: 5 },
    { jp: "がっこう", bn: "স্কুল", lesson: 5 },
    { jp: "スーパー", bn: "সুপারমার্কেট", lesson: 5 },
    { jp: "えき", bn: "স্টেশন", lesson: 5 },
    { jp: "ひこうき", bn: "বিমান", lesson: 5 },
    { jp: "ふね", bn: "জাহাজ", lesson: 5 },
    { jp: "でんしゃ", bn: "ট্রেন", lesson: 5 },
    { jp: "ちかてつ", bn: "পাতালরেল", lesson: 5 },
    { jp: "しんかんせん", bn: "বুলেট ট্রেন", lesson: 5 },
    { jp: "バス", bn: "বাস", lesson: 5 },
    { jp: "タクシー", bn: "ট্যাক্সি", lesson: 5 },
    { jp: "じてんしゃ", bn: "সাইকেল", lesson: 5 },
    { jp: "あるいて", bn: "হেঁটে", lesson: 5 },
    { jp: "ひと", bn: "মানুষ", lesson: 5 },
    { jp: "ともだち", bn: "বন্ধু", lesson: 5 },
    { jp: "かれ", bn: "সে (ছেলে) / প্রেমিক", lesson: 5 },
    { jp: "かのじょ", bn: "সে (মেয়ে) / প্রেমিকা", lesson: 5 },
    { jp: "かぞく", bn: "পরিবার", lesson: 5 },
    { jp: "ひとりで", bn: "একা", lesson: 5 },
    { jp: "せんしゅう", bn: "গত সপ্তাহ", lesson: 5 },
    { jp: "こんしゅう", bn: "এই সপ্তাহ", lesson: 5 },
    { jp: "らいしゅう", bn: "আগামী সপ্তাহ", lesson: 5 },
    { jp: "せんげつ", bn: "গত মাস", lesson: 5 },
    { jp: "こんげつ", bn: "এই মাস", lesson: 5 },
    { jp: "らいげつ", bn: "আগামী মাস", lesson: 5 },
    { jp: "きょねん", bn: "গত বছর", lesson: 5 },
    { jp: "ことし", bn: "এই বছর", lesson: 5 },
    { jp: "らいねん", bn: "আগামী বছর", lesson: 5 },
    { jp: "～ねん", bn: "~ বছর", lesson: 5 },
    { jp: "なんねん", bn: "কোন সাল / কত বছর", lesson: 5 },
    { jp: "～がつ", bn: "~ মাস", lesson: 5 },
    { jp: "なんがつ", bn: "কোন মাস", lesson: 5 },
    { jp: "ついたち～さんじゅういちにち", bn: "১ তারিখ থেকে ৩১ তারিখ", lesson: 5 },
    { jp: "なんにち", bn: "কত তারিখ / কয় দিন", lesson: 5 },
    { jp: "いつ", bn: "কবে / কখন", lesson: 5 },
    { jp: "たんじょうび", bn: "জন্মদিন", lesson: 5 },
    { jp: "ふつう", bn: "সাধারণ (লোকাল ট্রেন)", lesson: 5 },
    { jp: "きゅうこう", bn: "এক্সপ্রেস ট্রেন", lesson: 5 },
    { jp: "とっきゅう", bn: "সুপার এক্সপ্রেস ট্রেন", lesson: 5 },
    { jp: "つぎの", bn: "পরবর্তী", lesson: 5 },
    { jp: "どういたしまして", bn: "আপনাকে স্বাগতম / কিছু মনে করবেন না", lesson: 5 },
    { jp: "～ばんせん", bn: "~ নম্বর প্ল্যাটফর্ম", lesson: 5 },
    
    // Lesson 6
    { jp: "たべます", bn: "খাওয়া", lesson: 6 },
    { jp: "のみます", bn: "পান করা", lesson: 6 },
    { jp: "すいます", bn: "ধূমপান করা", lesson: 6 },
    { jp: "みます", bn: "দেখা", lesson: 6 },
    { jp: "ききます", bn: "শোনা", lesson: 6 },
    { jp: "よみます", bn: "পড়া", lesson: 6 },
    { jp: "かきます", bn: "লেখা", lesson: 6 },
    { jp: "かいます", bn: "কেনা", lesson: 6 },
    { jp: "とります", bn: "ছবি তোলা", lesson: 6 },
    { jp: "します", bn: "করা", lesson: 6 },
    { jp: "あいます", bn: "দেখা করা / সাক্ষাৎ করা", lesson: 6 },
    { jp: "ごはん", bn: "ভাত / খাবার", lesson: 6 },
    { jp: "あさごはん", bn: "সকালের নাস্তা", lesson: 6 },
    { jp: "ひるごはん", bn: "দুপুরের খাবার", lesson: 6 },
    { jp: "ばんごはん", bn: "রাতের খাবার", lesson: 6 },
    { jp: "パン", bn: "রুটি", lesson: 6 },
    { jp: "たまご", bn: "ডিম", lesson: 6 },
    { jp: "にく", bn: "মাংস", lesson: 6 },
    { jp: "さかな", bn: "মাছ", lesson: 6 },
    { jp: "やさい", bn: "সবজি", lesson: 6 },
    { jp: "くだもの", bn: "ফল", lesson: 6 },
    { jp: "みず", bn: "পানি", lesson: 6 },
    { jp: "おちゃ", bn: "চা (সাধারণত গ্রিন টি)", lesson: 6 },
    { jp: "こうちゃ", bn: "লাল চা", lesson: 6 },
    { jp: "ぎゅうにゅう（ミルク）", bn: "দুধ", lesson: 6 },
    { jp: "ジュース", bn: "জুস", lesson: 6 },
    { jp: "ビール", bn: "বিয়ার", lesson: 6 },
    { jp: "おさけ", bn: "মদ / সাকে", lesson: 6 },
    { jp: "ビデオ", bn: "ভিডিও", lesson: 6 },
    { jp: "えいが", bn: "সিনেমা", lesson: 6 },
    { jp: "CD", bn: "সিডি", lesson: 6 },
    { jp: "てがみ", bn: "চিঠি", lesson: 6 },
    { jp: "レポート", bn: "রিপোর্ট", lesson: 6 },
    { jp: "しゃしん", bn: "ছবি", lesson: 6 },
    { jp: "みせ", bn: "দোকান", lesson: 6 },
    { jp: "レストラン", bn: "রেস্তোরাঁ", lesson: 6 },
    { jp: "にわ", bn: "বাগান", lesson: 6 },
    { jp: "しゅくだい", bn: "বাড়ির কাজ", lesson: 6 },
    { jp: "テニス", bn: "টেনিস", lesson: 6 },
    { jp: "サッカー", bn: "ফুটবল", lesson: 6 },
    { jp: "おはなみ", bn: "চেরি ফুল দেখা (ঐতিহ্যবাহী উৎসব)", lesson: 6 },
    { jp: "なに", bn: "কী", lesson: 6 },
    { jp: "いっしょに", bn: "একসাথে", lesson: 6 },
    { jp: "ちょっと", bn: "একটু", lesson: 6 },
    { jp: "いつも", bn: "সবসময়", lesson: 6 },
    { jp: "ときどき", bn: "মাঝে মাঝে", lesson: 6 },
    { jp: "それから", bn: "তারপর", lesson: 6 },
    { jp: "ええ", bn: "হ্যাঁ (সাধারণ)", lesson: 6 },
    { jp: "いいですね", bn: "ভালো তো!", lesson: 6 },
    { jp: "わかりました", bn: "বুঝতে পেরেছি", lesson: 6 },
    { jp: "なんですか", bn: "কী ব্যাপার?", lesson: 6 },
    { jp: "じゃ、また", bn: "তাহলে, আবার দেখা হবে", lesson: 6 },

    // Lesson 7
    { jp: "きります", bn: "কাটা", lesson: 7 },
    { jp: "おくります", bn: "পাঠানো", lesson: 7 },
    { jp: "あげます", bn: "দেওয়া", lesson: 7 },
    { jp: "もらいます", bn: "পাওয়া", lesson: 7 },
    { jp: "かします", bn: "ধার দেওয়া", lesson: 7 },
    { jp: "かります", bn: "ধার নেওয়া", lesson: 7 },
    { jp: "おしえます", bn: "শেখানো / বলে দেওয়া", lesson: 7 },
    { jp: "ならいます", bn: "শেখা", lesson: 7 },
    { jp: "かけます", bn: "ফোন করা", lesson: 7 },
    { jp: "て", bn: "হাত", lesson: 7 },
    { jp: "はし", bn: "চপস্টিক", lesson: 7 },
    { jp: "スプーン", bn: "চামচ", lesson: 7 },
    { jp: "ナイフ", bn: "ছুরি", lesson: 7 },
    { jp: "フォーク", bn: "কাঁটাচামচ", lesson: 7 },
    { jp: "はさみ", bn: "কাঁচি", lesson: 7 },
    { jp: "ファクス", bn: "ফ্যাক্স", lesson: 7 },
    { jp: "ワープロ", bn: "ওয়ার্ড প্রসেসর", lesson: 7 },
    { jp: "パソコン", bn: "পার্সোনাল কম্পিউটার", lesson: 7 },
    { jp: "パンチ", bn: "পাঞ্চ মেশিন", lesson: 7 },
    { jp: "ホッチキス", bn: "স্ট্যাপলার", lesson: 7 },
    { jp: "セロテープ", bn: "স্কচটেপ", lesson: 7 },
    { jp: "けしゴム", bn: "ইরেজার / রাবার", lesson: 7 },
    { jp: "かみ", bn: "কাগজ", lesson: 7 },
    { jp: "はな", bn: "ফুল", lesson: 7 },
    { jp: "シャツ", bn: "শার্ট", lesson: 7 },
    { jp: "プレゼント", bn: "উপহার", lesson: 7 },
    { jp: "にもつ", bn: "মালপত্র / লাগেজ", lesson: 7 },
    { jp: "おかね", bn: "টাকা", lesson: 7 },
    { jp: "きっぷ", bn: "টিকিট", lesson: 7 },
    { jp: "クリスマス", bn: "বড়দিন", lesson: 7 },
    { jp: "ちち", bn: "বাবা (নিজের)", lesson: 7 },
    { jp: "はは", bn: "মা (নিজের)", lesson: 7 },
    { jp: "おとうさん", bn: "বাবা (অন্যের)", lesson: 7 },
    { jp: "おかあさん", bn: "মা (অন্যের)", lesson: 7 },
    { jp: "もう", bn: "ইতিমধ্যে", lesson: 7 },
    { jp: "まだ", bn: "এখনো না", lesson: 7 },
    { jp: "これから", bn: "এখন থেকে", lesson: 7 },
    { jp: "すてきですね", bn: "চমৎকার!", lesson: 7 },
    { jp: "ごめんください", bn: "কেউ আছেন কি? (কারো বাড়িতে গেলে)", lesson: 7 },
    { jp: "いらっしゃい", bn: "স্বাগতম", lesson: 7 },
    { jp: "どうぞおあがりください", bn: "দয়া করে ভিতরে আসুন", lesson: 7 },
    { jp: "しつれいします", bn: "মাফ করবেন (ভিতরে ঢোকার সময়)", lesson: 7 },
    { jp: "～はいかがですか", bn: "~ কেমন হয়?", lesson: 7 },
    { jp: "いただきます", bn: "খাবার শুরুর আগের কৃতজ্ঞতা প্রকাশ", lesson: 7 },
    { jp: "りょこう", bn: "ভ্রমণ", lesson: 7 },
    { jp: "おみやげ", bn: "স্যুভেনির / উপহার", lesson: 7 },

    // Lesson 8
    { jp: "ハンサム", bn: "সুদর্শন", lesson: 8 },
    { jp: "きれい", bn: "সুন্দর / পরিষ্কার", lesson: 8 },
    { jp: "しずか", bn: "শান্ত", lesson: 8 },
    { jp: "にぎやか", bn: "কোলাহলপূর্ণ", lesson: 8 },
    { jp: "ゆうめい", bn: "বিখ্যাত", lesson: 8 },
    { jp: "しんせつ", bn: "দয়ালু", lesson: 8 },
    { jp: "げんき", bn: "সুস্থ / প্রাণবন্ত", lesson: 8 },
    { jp: "ひま", bn: "অবসর", lesson: 8 },
    { jp: "べんり", bn: "সুবিধাজনক", lesson: 8 },
    { jp: "すてき", bn: "চমৎকার", lesson: 8 },
    { jp: "おおきい", bn: "বড়", lesson: 8 },
    { jp: "ちいさい", bn: "ছোট", lesson: 8 },
    { jp: "あたらしい", bn: "নতুন", lesson: 8 },
    { jp: "ふるい", bn: "পুরাতন", lesson: 8 },
    { jp: "いい（よい）", bn: "ভালো", lesson: 8 },
    { jp: "わるい", bn: "খারাপ", lesson: 8 },
    { jp: "あつい", bn: "গরম (তাপমাত্রা / আবহাওয়া)", lesson: 8 },
    { jp: "さむい", bn: "ঠান্ডা (আবহাওয়া)", lesson: 8 },
    { jp: "つめたい", bn: "ঠান্ডা (স্পর্শ)", lesson: 8 },
    { jp: "むずかしい", bn: "কঠিন", lesson: 8 },
    { jp: "やさしい", bn: "সহজ", lesson: 8 },
    { jp: "たかい", bn: "দামি / উঁচু", lesson: 8 },
    { jp: "やすい", bn: "সস্তা", lesson: 8 },
    { jp: "ひくい", bn: "নিচু", lesson: 8 },
    { jp: "おもしろい", bn: "মজাদার / আকর্ষণীয়", lesson: 8 },
    { jp: "おいしい", bn: "সুস্বাদু", lesson: 8 },
    { jp: "いそがしい", bn: "ব্যস্ত", lesson: 8 },
    { jp: "たのしい", bn: "আনন্দদায়ক", lesson: 8 },
    { jp: "しろい", bn: "সাদা", lesson: 8 },
    { jp: "くろい", bn: "কালো", lesson: 8 },
    { jp: "あかい", bn: "লাল", lesson: 8 },
    { jp: "あおい", bn: "নীল", lesson: 8 },
    { jp: "さくら", bn: "চেরি ফুল", lesson: 8 },
    { jp: "やま", bn: "পাহাড়", lesson: 8 },
    { jp: "まち", bn: "শহর", lesson: 8 },
    { jp: "たべもの", bn: "খাবার", lesson: 8 },
    { jp: "くるま", bn: "গাড়ি", lesson: 8 },
    { jp: "ところ", bn: "জায়গা / স্থান", lesson: 8 },
    { jp: "りょう", bn: "হোস্টেল / ডরমিটরি", lesson: 8 },
    { jp: "べんきょう", bn: "পড়াশোনা", lesson: 8 },
    { jp: "せいかつ", bn: "জীবনযাপন", lesson: 8 },
    { jp: "おしごと", bn: "কাজ / পেশা", lesson: 8 },
    { jp: "どう", bn: "কেমন", lesson: 8 },
    { jp: "どんな", bn: "কেমন (ধরন)", lesson: 8 },
    { jp: "どれ", bn: "কোনটি", lesson: 8 },
    { jp: "とても", bn: "খুব", lesson: 8 },
    { jp: "あまり", bn: "তেমন না (নেতিবাচক অর্থে)", lesson: 8 },
    { jp: "そして", bn: "এবং / তারপর", lesson: 8 },
    { jp: "が", bn: "কিন্তু", lesson: 8 },
    { jp: "おげんきですか", bn: "আপনি কেমন আছেন?", lesson: 8 },
    { jp: "そうですね", bn: "তাই তো!", lesson: 8 },
    { jp: "にほんのせいかつになれましたか", bn: "জাপানের জীবনের সাথে কি অভ্যস্ত হয়েছেন?", lesson: 8 },
    { jp: "～もういっぱいいかがですか", bn: "আরও এক কাপ ~ খাবেন কি?", lesson: 8 },
    { jp: "いいえ、けっこうです", bn: "না, ধন্যবাদ (আর প্রয়োজন নেই)", lesson: 8 },
    { jp: "もう～ですね", bn: "ইতিমধ্যে ~ বেজে গেছে", lesson: 8 },
    { jp: "そろそろしつれいします", bn: "এবার আমরা উঠবো", lesson: 8 },
    { jp: "またいらっしゃってください", bn: "আবার আসবেন", lesson: 8 },

    // Lesson 9
    { jp: "わかります", bn: "বুঝতে পারা", lesson: 9 },
    { jp: "あります", bn: "আছে (জড়বস্তু)", lesson: 9 },
    { jp: "すき", bn: "পছন্দ", lesson: 9 },
    { jp: "きらい", bn: "অপছন্দ", lesson: 9 },
    { jp: "じょうず", bn: "দক্ষ", lesson: 9 },
    { jp: "へた", bn: "অদক্ষ", lesson: 9 },
    { jp: "りょうり", bn: "রান্না / খাবার", lesson: 9 },
    { jp: "のみもの", bn: "পানীয়", lesson: 9 },
    { jp: "スポーツ", bn: "খেলাধুলা", lesson: 9 },
    { jp: "やきゅう", bn: "বেসবল", lesson: 9 },
    { jp: "ダンス", bn: "নাচ", lesson: 9 },
    { jp: "おんがく", bn: "সঙ্গীত", lesson: 9 },
    { jp: "うた", bn: "গান", lesson: 9 },
    { jp: "クラシック", bn: "ক্লাসিক্যাল মিউজিক", lesson: 9 },
    { jp: "ジャズ", bn: "জ্যাজ", lesson: 9 },
    { jp: "コンサート", bn: "কনসার্ট", lesson: 9 },
    { jp: "カラオケ", bn: "কারাওকে", lesson: 9 },
    { jp: "かぶき", bn: "কাবুকি (ঐতিহ্যবাহী জাপানি নাটক)", lesson: 9 },
    { jp: "え", bn: "ছবি / পেইন্টিং", lesson: 9 },
    { jp: "じ", bn: "অক্ষর", lesson: 9 },
    { jp: "かんじ", bn: "কাঞ্জি", lesson: 9 },
    { jp: "ひらがな", bn: "হিরাগানা", lesson: 9 },
    { jp: "カタカナ", bn: "কাতাকানা", lesson: 9 },
    { jp: "ローマじ", bn: "রোমাজি", lesson: 9 },
    { jp: "こまかいおかね", bn: "ভাঙতি টাকা", lesson: 9 },
    { jp: "チケット", bn: "টিকিট", lesson: 9 },
    { jp: "じかん", bn: "সময়", lesson: 9 },
    { jp: "ようじ", bn: "কাজ / ব্যস্ততা", lesson: 9 },
    { jp: "やくそく", bn: "প্রতিশ্রুতি / অ্যাপয়েন্টমেন্ট", lesson: 9 },
    { jp: "ごしゅじん", bn: "স্বামী (অন্যের)", lesson: 9 },
    { jp: "おっと/しゅじん", bn: "স্বামী (নিজের)", lesson: 9 },
    { jp: "おくさん", bn: "স্ত্রী (অন্যের)", lesson: 9 },
    { jp: "つま/かない", bn: "স্ত্রী (নিজের)", lesson: 9 },
    { jp: "こども", bn: "শিশু / সন্তান", lesson: 9 },
    { jp: "よく", bn: "ভালোভাবে / প্রায়ই", lesson: 9 },
    { jp: "だいたい", bn: "মোটামুটি", lesson: 9 },
    { jp: "たくさん", bn: "অনেক", lesson: 9 },
    { jp: "すこし", bn: "একটু / সামান্য", lesson: 9 },
    { jp: "ぜんぜん", bn: "একদম না", lesson: 9 },
    { jp: "はやく", bn: "তাড়াতাড়ি / দ্রুত", lesson: 9 },
    { jp: "から", bn: "~ কারণ", lesson: 9 },
    { jp: "どうして", bn: "কেন", lesson: 9 },
    { jp: "ざんねんですね", bn: "দুঃখজনক", lesson: 9 },
    { jp: "すみません", bn: "মাফ করবেন", lesson: 9 },
    { jp: "もしもし", bn: "হ্যালো (ফোনে)", lesson: 9 },
    { jp: "ああ", bn: "আহা / ওহ", lesson: 9 },
    { jp: "いっしょにいかがですか", bn: "একসাথে যাবেন নাকি?", lesson: 9 },
    { jp: "～はちょっと・・・", bn: "~ একটু সমস্যা... (ভদ্রভাবে প্রত্যাখ্যান)", lesson: 9 },
    { jp: "だめですか", bn: "হবে না? / সম্ভব না?", lesson: 9 },
    { jp: "またこんどおねがいします", bn: "আবার কোনো এক সময় দেখা যাবে", lesson: 9 },

    // Lesson 10
    { jp: "います", bn: "আছে (প্রাণী/মানুষ)", lesson: 10 },
    { jp: "あります", bn: "আছে (জড়বস্তু)", lesson: 10 },
    { jp: "いろいろ", bn: "বিভিন্ন", lesson: 10 },
    { jp: "おとこのひと", bn: "পুরুষ মানুষ", lesson: 10 },
    { jp: "おんなのひと", bn: "মহিলা মানুষ", lesson: 10 },
    { jp: "おとこのこ", bn: "বালক", lesson: 10 },
    { jp: "おんなのこ", bn: "বালিকা", lesson: 10 },
    { jp: "いぬ", bn: "কুকুর", lesson: 10 },
    { jp: "ねこ", bn: "বিড়াল", lesson: 10 },
    { jp: "き", bn: "গাছ", lesson: 10 },
    { jp: "もの", bn: "জিনিস", lesson: 10 },
    { jp: "フィルム", bn: "ফিল্ম", lesson: 10 },
    { jp: "でんち", bn: "ব্যাটারি", lesson: 10 },
    { jp: "はこ", bn: "বাক্স", lesson: 10 },
    { jp: "スイッチ", bn: "সুইচ", lesson: 10 },
    { jp: "れいぞうこ", bn: "ফ্রিজ", lesson: 10 },
    { jp: "テーブル", bn: "টেবিল", lesson: 10 },
    { jp: "ベッド", bn: "বিছানা", lesson: 10 },
    { jp: "たな", bn: "তাক / শেলফ", lesson: 10 },
    { jp: "ドア", bn: "দরজা", lesson: 10 },
    { jp: "まど", bn: "জানালা", lesson: 10 },
    { jp: "ポスト", bn: "পোস্টবক্স", lesson: 10 },
    { jp: "ビル", bn: "বিল্ডিং", lesson: 10 },
    { jp: "こうえん", bn: "পার্ক", lesson: 10 },
    { jp: "きっさてん", bn: "কফিশপ", lesson: 10 },
    { jp: "ほんや", bn: "বইয়ের দোকান", lesson: 10 },
    { jp: "～や", bn: "~ দোকান", lesson: 10 },
    { jp: "のりば", bn: "বাসস্ট্যান্ড / ট্যাক্সিস্ট্যান্ড", lesson: 10 },
    { jp: "けん", bn: "প্রিফেকচার (জাপানের প্রদেশ)", lesson: 10 },
    { jp: "うえ", bn: "উপরে", lesson: 10 },
    { jp: "した", bn: "নিচে", lesson: 10 },
    { jp: "まえ", bn: "সামনে", lesson: 10 },
    { jp: "うしろ", bn: "পিছনে", lesson: 10 },
    { jp: "みぎ", bn: "ডান", lesson: 10 },
    { jp: "ひだり", bn: "বাম", lesson: 10 },
    { jp: "なか", bn: "ভিতরে", lesson: 10 },
    { jp: "そと", bn: "বাইরে", lesson: 10 },
    { jp: "となり", bn: "পাশে", lesson: 10 },
    { jp: "ちかく", bn: "কাছে", lesson: 10 },
    { jp: "あいだ", bn: "মাঝে", lesson: 10 },
    { jp: "や～など", bn: "~ এবং ~ ইত্যাদি", lesson: 10 },
    { jp: "いちばん", bn: "সবচেয়ে", lesson: 10 },
    { jp: "～だんめ", bn: "~ তলা / তাক", lesson: 10 },
    { jp: "どうもすみません", bn: "অনেক ধন্যবাদ/ক্ষমা করবেন", lesson: 10 },
    { jp: "チリソース", bn: "চিলি সস", lesson: 10 },
    { jp: "おく", bn: "ভিতরে / শেষ প্রান্তে", lesson: 10 },
    { jp: "スパイスコーナー", bn: "মসলার কর্নার", lesson: 10 },

    // Lesson 11
    { jp: "います（こどもが）", bn: "আছে (সন্তান)", lesson: 11 },
    { jp: "います（にほんに）", bn: "থাকা (জাপানে)", lesson: 11 },
    { jp: "かかります", bn: "লাগা (সময় বা টাকা)", lesson: 11 },
    { jp: "やすみます（かいしゃを）", bn: "ছুটি নেওয়া (অফিস থেকে)", lesson: 11 },
    { jp: "ひとつ ～ とお", bn: "১ থেকে ১০ (সাধারণ বস্তু গণনার একক)", lesson: 11 },
    { jp: "いくつ", bn: "কয়টি", lesson: 11 },
    { jp: "ひとり ～ ふたり", bn: "১ জন, ২ জন", lesson: 11 },
    { jp: "～にん", bn: "~ জন (মানুষ গণনার একক)", lesson: 11 },
    { jp: "～だい", bn: "~ টি (মেশিন/গাড়ি গণনার একক)", lesson: 11 },
    { jp: "～まい", bn: "~ টি (পাতলা বস্তু গণনার একক)", lesson: 11 },
    { jp: "～かい", bn: "~ বার", lesson: 11 },
    { jp: "りんご", bn: "আপেল", lesson: 11 },
    { jp: "みかん", bn: "কমলা", lesson: 11 },
    { jp: "サンドイッチ", bn: "স্যান্ডউইচ", lesson: 11 },
    { jp: "カレーライス", bn: "কারি রাইস", lesson: 11 },
    { jp: "アイスクリーム", bn: "আইসক্রিম", lesson: 11 },
    { jp: "きって", bn: "ডাকটিকিট", lesson: 11 },
    { jp: "はがき", bn: "পোস্টকার্ড", lesson: 11 },
    { jp: "ふうとう", bn: "খাম", lesson: 11 },
    { jp: "そくたつ", bn: "এক্সপ্রেস ডেলিভারি", lesson: 11 },
    { jp: "かきとめ", bn: "রেজিস্টার্ড মেইল", lesson: 11 },
    { jp: "エアメール（こうくうびん）", bn: "এয়ারমেইল", lesson: 11 },
    { jp: "ふなびん", bn: "সারফেস মেইল (জাহাজে)", lesson: 11 },
    { jp: "りょうしん", bn: "বাবা-মা", lesson: 11 },
    { jp: "きょうだい", bn: "ভাইবোন", lesson: 11 },
    { jp: "あに / おにいさん", bn: "বড় ভাই (নিজের / অন্যের)", lesson: 11 },
    { jp: "あね / おねえさん", bn: "বড় বোন (নিজের / অন্যের)", lesson: 11 },
    { jp: "おとうと / おとうとさん", bn: "ছোট ভাই (নিজের / অন্যের)", lesson: 11 },
    { jp: "いもうと / いもうとさん", bn: "ছোট বোন (নিজের / অন্যের)", lesson: 11 },
    { jp: "がいこく", bn: "বিদেশ", lesson: 11 },
    { jp: "～じかん", bn: "~ ঘণ্টা", lesson: 11 },
    { jp: "～しゅうかん", bn: "~ সপ্তাহ", lesson: 11 },
    { jp: "～かげつ", bn: "~ মাস", lesson: 11 },
    { jp: "～ねん", bn: "~ বছর", lesson: 11 },
    { jp: "～ぐらい", bn: "~ এর মতো / প্রায়", lesson: 11 },
    { jp: "どのくらい", bn: "কতক্ষণ / কতটুকু", lesson: 11 },
    { jp: "ぜんぶで", bn: "সর্বমোট", lesson: 11 },
    { jp: "みんな", bn: "সবাই", lesson: 11 },
    { jp: "～だけ", bn: "শুধু ~", lesson: 11 },
    { jp: "いらっしゃいませ", bn: "স্বাগতম (দোকানে)", lesson: 11 },
    { jp: "いいおてんきですね", bn: "সুন্দর আবহাওয়া, তাই না?", lesson: 11 },
    { jp: "おでかけですか", bn: "বাইরে যাচ্ছেন নাকি?", lesson: 11 },
    { jp: "ちょっと～まで", bn: "একটু ~ পর্যন্ত যাচ্ছি", lesson: 11 },
    { jp: "いってらっしゃい", bn: "সাবধানে যাবেন (যেয়ে ফিরে আসবেন)", lesson: 11 },
    { jp: "いってまいります", bn: "আসছি (যেয়ে ফিরে আসবো)", lesson: 11 },
    { jp: "それから", bn: "তারপর", lesson: 11 },

    // Lesson 12
    { jp: "かんたん", bn: "সহজ", lesson: 12 },
    { jp: "ちかい", bn: "কাছে", lesson: 12 },
    { jp: "とおい", bn: "দূরে", lesson: 12 },
    { jp: "はやい", bn: "দ্রুত / তাড়াতাড়ি", lesson: 12 },
    { jp: "おそい", bn: "দেরি", lesson: 12 },
    { jp: "おおい", bn: "অনেক", lesson: 12 },
    { jp: "すくない", bn: "কম", lesson: 12 },
    { jp: "あたたかい", bn: "উষ্ণ", lesson: 12 },
    { jp: "すずしい", bn: "শীতল / ঠান্ডা", lesson: 12 },
    { jp: "あまい", bn: "মিষ্টি", lesson: 12 },
    { jp: "からい", bn: "ঝাল", lesson: 12 },
    { jp: "おもい", bn: "ভারী", lesson: 12 },
    { jp: "かるい", bn: "হালকা", lesson: 12 },
    { jp: "いい（コーヒーが）", bn: "(কফি) হলে ভালো হয়", lesson: 12 },
    { jp: "きせつ", bn: "ঋতু", lesson: 12 },
    { jp: "はる", bn: "বসন্ত", lesson: 12 },
    { jp: "なつ", bn: "গ্রীষ্ম", lesson: 12 },
    { jp: "あき", bn: "শরৎ", lesson: 12 },
    { jp: "ふゆ", bn: "শীত", lesson: 12 },
    { jp: "てんき", bn: "আবহাওয়া", lesson: 12 },
    { jp: "あめ", bn: "বৃষ্টি", lesson: 12 },
    { jp: "ゆき", bn: "তুষার", lesson: 12 },
    { jp: "くもり", bn: "মেঘলা", lesson: 12 },
    { jp: "ホテル", bn: "হোটেল", lesson: 12 },
    { jp: "くうこう", bn: "বিমানবন্দর", lesson: 12 },
    { jp: "うみ", bn: "সমুদ্র", lesson: 12 },
    { jp: "せかい", bn: "বিশ্ব", lesson: 12 },
    { jp: "パーティー", bn: "পার্টি", lesson: 12 },
    { jp: "おまつり", bn: "উৎসব", lesson: 12 },
    { jp: "しけん", bn: "পরীক্ষা", lesson: 12 },
    { jp: "すきやき", bn: "সুকিয়াকি (জাপানি খাবার)", lesson: 12 },
    { jp: "さしみ", bn: "সাশিমি (কাঁচা মাছ)", lesson: 12 },
    { jp: "おすし", bn: "সুশি", lesson: 12 },
    { jp: "てんぷら", bn: "তেম্পুরা", lesson: 12 },
    { jp: "いけばな", bn: "ফুল সাজানো (ঐতিহ্যবাহী)", lesson: 12 },
    { jp: "もみじ", bn: "ম্যাপল গাছ / লাল পাতা", lesson: 12 },
    { jp: "どちら", bn: "কোনটি (দুটির মধ্যে)", lesson: 12 },
    { jp: "どちらも", bn: "দুটিই", lesson: 12 },
    { jp: "ずっと", bn: "অনেক বেশি", lesson: 12 },
    { jp: "はじめて", bn: "প্রথমবার", lesson: 12 },
    { jp: "ただいま", bn: "আমি ফিরেছি", lesson: 12 },
    { jp: "おかえりなさい", bn: "স্বাগতম (ফিরে আসায়)", lesson: 12 },
    { jp: "すごいですね", bn: "দারুণ তো!", lesson: 12 },
    { jp: "でも", bn: "কিন্তু", lesson: 12 },
    { jp: "つかれました", bn: "ক্লান্ত হয়ে গেছি", lesson: 12 },

    // Lesson 13
    { jp: "あそびます", bn: "খেলা করা / ঘুরে বেড়ানো", lesson: 13 },
    { jp: "およぎます", bn: "সাঁতার কাটা", lesson: 13 },
    { jp: "むかえます", bn: "স্বাগত জানানো / রিসিভ করা", lesson: 13 },
    { jp: "つかれます", bn: "ক্লান্ত হওয়া", lesson: 13 },
    { jp: "だします（てがみを）", bn: "পাঠানো (চিঠি)", lesson: 13 },
    { jp: "はいります（きっさてんに）", bn: "প্রবেশ করা (কফিশপে)", lesson: 13 },
    { jp: "でます（きっさてんを）", bn: "বের হওয়া (কফিশপ থেকে)", lesson: 13 },
    { jp: "けっこんします", bn: "বিয়ে করা", lesson: 13 },
    { jp: "かいものします", bn: "কেনাকাটা করা", lesson: 13 },
    { jp: "しょくじします", bn: "খাবার খাওয়া", lesson: 13 },
    { jp: "さんぽします", bn: "হাঁটা (পার্কে)", lesson: 13 },
    { jp: "たいへん", bn: "খুব / কঠিন", lesson: 13 },
    { jp: "ほしい", bn: "চাওয়া / ইচ্ছা", lesson: 13 },
    { jp: "さびしい", bn: "একাকী / নিঃসঙ্গ", lesson: 13 },
    { jp: "ひろい", bn: "প্রশস্ত / বড়", lesson: 13 },
    { jp: "せまい", bn: "সংকীর্ণ / ছোট", lesson: 13 },
    { jp: "しやくしょ", bn: "সিটি অফিস / পৌরসভা", lesson: 13 },
    { jp: "プール", bn: "সুইমিং পুল", lesson: 13 },
    { jp: "かわ", bn: "নদী", lesson: 13 },
    { jp: "けいざい", bn: "অর্থনীতি", lesson: 13 },
    { jp: "びじゅつ", bn: "চারুকলা", lesson: 13 },
    { jp: "つり", bn: "মাছ ধরা", lesson: 13 },
    { jp: "スキー", bn: "স্কিইং", lesson: 13 },
    { jp: "かいぎ", bn: "মিটিং", lesson: 13 },
    { jp: "とうろく", bn: "নিবন্ধন", lesson: 13 },
    { jp: "しゅうまつ", bn: "সপ্তাহান্ত / উইকেন্ড", lesson: 13 },
    { jp: "～ごろ", bn: "~ এর দিকে (সময়)", lesson: 13 },
    { jp: "なにか", bn: "কিছু", lesson: 13 },
    { jp: "どこか", bn: "কোথাও", lesson: 13 },
    { jp: "おなかがすきました", bn: "ক্ষুধা লেগেছে", lesson: 13 },
    { jp: "おなかがいっぱいです", bn: "পেট ভরা", lesson: 13 },
    { jp: "のどがかわきました", bn: "তৃষ্ণা পেয়েছে", lesson: 13 },
    { jp: "そうしましょう", bn: "তাই করা যাক", lesson: 13 },
    { jp: "ごちゅうもんは", bn: "আপনি কি অর্ডার করবেন?", lesson: 13 },
    { jp: "ていしょく", bn: "সেট মেন্যু", lesson: 13 },
    { jp: "ぎゅうどん", bn: "গরুর মাংসের বাটি (খাবার)", lesson: 13 },
    { jp: "しょうしょうおまちください", bn: "একটু অপেক্ষা করুন", lesson: 13 },
    { jp: "べつべつに", bn: "আলাদা আলাদা", lesson: 13 },

    // Lesson 14
    { jp: "つけます", bn: "চালু করা (সুইচ)", lesson: 14 },
    { jp: "けします", bn: "বন্ধ করা (সুইচ)", lesson: 14 },
    { jp: "あけます", bn: "খোলা", lesson: 14 },
    { jp: "しめます", bn: "বন্ধ করা", lesson: 14 },
    { jp: "いそぎます", bn: "তাড়াহুড়ো করা", lesson: 14 },
    { jp: "まちます", bn: "অপেক্ষা করা", lesson: 14 },
    { jp: "とめます", bn: "থামানো", lesson: 14 },
    { jp: "まがります（みぎへ）", bn: "মোড় নেওয়া (ডানে)", lesson: 14 },
    { jp: "もちます", bn: "ধরা / বহন করা", lesson: 14 },
    { jp: "とります", bn: "নেওয়া", lesson: 14 },
    { jp: "てつだいます", bn: "সাহায্য করা", lesson: 14 },
    { jp: "よびます", bn: "ডাকা", lesson: 14 },
    { jp: "はなします", bn: "কথা বলা", lesson: 14 },
    { jp: "みせます", bn: "দেখানো", lesson: 14 },
    { jp: "おしえます（じゅうしょを）", bn: "জানানো (ঠিকানা)", lesson: 14 },
    { jp: "はじめます", bn: "শুরু করা", lesson: 14 },
    { jp: "ふります（あめが）", bn: "বৃষ্টি পড়া", lesson: 14 },
    { jp: "コピーします", bn: "কপি করা", lesson: 14 },
    { jp: "エアコン", bn: "এসি", lesson: 14 },
    { jp: "パスポート", bn: "পাসপোর্ট", lesson: 14 },
    { jp: "なまえ", bn: "নাম", lesson: 14 },
    { jp: "じゅうしょ", bn: "ঠিকানা", lesson: 14 },
    { jp: "ちず", bn: "মানচিত্র", lesson: 14 },
    { jp: "しお", bn: "লবণ", lesson: 14 },
    { jp: "さとう", bn: "চিনি", lesson: 14 },
    { jp: "よみかた", bn: "পড়ার নিয়ম", lesson: 14 },
    { jp: "～かた", bn: "~ করার নিয়ম", lesson: 14 },
    { jp: "ゆっくり", bn: "ধীরে ধীরে", lesson: 14 },
    { jp: "すぐ", bn: "জলদি", lesson: 14 },
    { jp: "また", bn: "আবার", lesson: 14 },
    { jp: "あとで", bn: "পরে", lesson: 14 },
    { jp: "もうすこし", bn: "আরেকটু", lesson: 14 },
    { jp: "もう～", bn: "আর ~", lesson: 14 },
    { jp: "いいですよ", bn: "ঠিক আছে", lesson: 14 },
    { jp: "さあ", bn: "আসুন / চলুন", lesson: 14 },
    { jp: "あれ？", bn: "তাই নাকি? / ওহ?", lesson: 14 },
    { jp: "しんごうをみぎへまがってください", bn: "সিগন্যাল থেকে ডানে মোড় নিন", lesson: 14 },
    { jp: "まっすぐ", bn: "সোজা", lesson: 14 },
    { jp: "これでおねがいします", bn: "এটা দিয়ে রাখুন (টাকা দেওয়ার সময়)", lesson: 14 },
    { jp: "おつり", bn: "খুচরা ফেরত / ভাংতি", lesson: 14 },

    // Lesson 15
    { jp: "たちます", bn: "দাঁড়ানো", lesson: 15 },
    { jp: "すわります", bn: "বসা", lesson: 15 },
    { jp: "つかいます", bn: "ব্যবহার করা", lesson: 15 },
    { jp: "おきます", bn: "রাখা", lesson: 15 },
    { jp: "つくります", bn: "তৈরি করা", lesson: 15 },
    { jp: "うります", bn: "বিক্রি করা", lesson: 15 },
    { jp: "しります", bn: "জানা", lesson: 15 },
    { jp: "すみます", bn: "বসবাস করা", lesson: 15 },
    { jp: "けんきゅうします", bn: "গবেষণা করা", lesson: 15 },
    { jp: "しっています", bn: "জানি", lesson: 15 },
    { jp: "すんでいます", bn: "বাস করছি", lesson: 15 },
    { jp: "しりょう", bn: "তথ্য / ডকুমেন্টস", lesson: 15 },
    { jp: "カタログ", bn: "ক্যাটালগ", lesson: 15 },
    { jp: "じこくひょう", bn: "সময়সূচি", lesson: 15 },
    { jp: "ふく", bn: "পোশাক", lesson: 15 },
    { jp: "せいひん", bn: "পণ্য", lesson: 15 },
    { jp: "ソフト", bn: "সফটওয়্যার", lesson: 15 },
    { jp: "せんもん", bn: "বিশেষজ্ঞ / প্রধান বিষয়", lesson: 15 },
    { jp: "はいしゃ", bn: "ডেন্টিস্ট", lesson: 15 },
    { jp: "とこや", bn: "নাপিত / সেলুন", lesson: 15 },
    { jp: "プレイガイド", bn: "টিকিট কাটার স্থান", lesson: 15 },
    { jp: "どくしん", bn: "অবিবাহিত", lesson: 15 },
    { jp: "とくに", bn: "বিশেষ করে", lesson: 15 },
    { jp: "おもいだします", bn: "মনে পড়া", lesson: 15 },
    { jp: "ごかぞく", bn: "আপনার পরিবার", lesson: 15 },
    { jp: "いらっしゃいます", bn: "আছেন (সম্মানসূচক)", lesson: 15 },
    { jp: "こうこう", bn: "হাইস্কুল", lesson: 15 },

    // Lesson 16
    { jp: "のります（でんしゃに）", bn: "চড়া (ট্রেনে)", lesson: 16 },
    { jp: "おります（でんしゃを）", bn: "নামা (ট্রেন থেকে)", lesson: 16 },
    { jp: "のりかえます", bn: "পরিবর্তন করা (ট্রেন/বাস)", lesson: 16 },
    { jp: "あびます（シャワーを）", bn: "গোসল করা (শাওয়ারে)", lesson: 16 },
    { jp: "いれます", bn: "ঢোকানো", lesson: 16 },
    { jp: "だします", bn: "বের করা", lesson: 16 },
    { jp: "はいります（だいがくに）", bn: "ভর্তি হওয়া (বিশ্ববিদ্যালয়ে)", lesson: 16 },
    { jp: "でます（だいがくを）", bn: "স্নাতক হওয়া (বিশ্ববিদ্যালয় থেকে)", lesson: 16 },
    { jp: "やめます（かいしゃを）", bn: "ছেড়ে দেওয়া (কোম্পানি)", lesson: 16 },
    { jp: "おします", bn: "চাপা / চাপ দেওয়া", lesson: 16 },
    { jp: "わかい", bn: "তরুণ", lesson: 16 },
    { jp: "ながい", bn: "লম্বা", lesson: 16 },
    { jp: "みじかい", bn: "খাটো", lesson: 16 },
    { jp: "あかるい", bn: "উজ্জ্বল", lesson: 16 },
    { jp: "くらい", bn: "অন্ধকার", lesson: 16 },
    { jp: "せがたかい", bn: "লম্বা (উচ্চতা)", lesson: 16 },
    { jp: "あたまがいい", bn: "বুদ্ধিমান", lesson: 16 },
    { jp: "からだ", bn: "শরীর", lesson: 16 },
    { jp: "あたま", bn: "মাথা", lesson: 16 },
    { jp: "かみ", bn: "চুল", lesson: 16 },
    { jp: "かお", bn: "মুখমণ্ডল", lesson: 16 },
    { jp: "め", bn: "চোখ", lesson: 16 },
    { jp: "みみ", bn: "কান", lesson: 16 },
    { jp: "くち", bn: "মুখ", lesson: 16 },
    { jp: "は", bn: "দাঁত", lesson: 16 },
    { jp: "おなか", bn: "পেট", lesson: 16 },
    { jp: "あし", bn: "পা", lesson: 16 },
    { jp: "サービス", bn: "সেবা / সার্ভিস", lesson: 16 },
    { jp: "ジョギング", bn: "জগিং", lesson: 16 },
    { jp: "シャワー", bn: "শাওয়ার", lesson: 16 },
    { jp: "みどり", bn: "সবুজ", lesson: 16 },
    { jp: "おてら", bn: "মন্দির (বৌদ্ধ)", lesson: 16 },
    { jp: "じんじゃ", bn: "মন্দির (শিন্তো)", lesson: 16 },
    { jp: "りゅうがくせい", bn: "বিদেশি ছাত্র", lesson: 16 },
    { jp: "～ばん", bn: "~ নম্বর", lesson: 16 },
    { jp: "どうやって", bn: "কীভাবে", lesson: 16 },
    { jp: "どの～", bn: "কোনটি", lesson: 16 },
    { jp: "[いいえ、]まだまだです", bn: "[না] এখনো অনেক বাকি (প্রশংসার জবাবে)", lesson: 16 },
    { jp: "おひきだしですか", bn: "টাকা তুলবেন কি?", lesson: 16 },
    { jp: "まず", bn: "প্রথমত", lesson: 16 },
    { jp: "キャッシュカード", bn: "ক্যাশ কার্ড / এটিএম কার্ড", lesson: 16 },
    { jp: "あんしょうばんごう", bn: "পিন নম্বর", lesson: 16 },
    { jp: "つぎに", bn: "তারপর", lesson: 16 },
    { jp: "きんがく", bn: "পরিমাণ (টাকা)", lesson: 16 },
    { jp: "かくにん", bn: "নিশ্চিত করা", lesson: 16 },
    { jp: "ボタン", bn: "বোতাম", lesson: 16 },

    // Lesson 17
    { jp: "おぼえます", bn: "মনে রাখা / মুখস্থ করা", lesson: 17 },
    { jp: "わすれます", bn: "ভুলে যাওয়া", lesson: 17 },
    { jp: "なくします", bn: "হারানো", lesson: 17 },
    { jp: "だします（レポートを）", bn: "জমা দেওয়া (রিপোর্ট)", lesson: 17 },
    { jp: "はらいます", bn: "পেমেন্ট করা", lesson: 17 },
    { jp: "かえします", bn: "ফেরত দেওয়া", lesson: 17 },
    { jp: "でかけます", bn: "বাইরে যাওয়া", lesson: 17 },
    { jp: "ぬぎます", bn: "খোলা (পোশাক/জুতো)", lesson: 17 },
    { jp: "もっていきます", bn: "নিয়ে যাওয়া", lesson: 17 },
    { jp: "もってきます", bn: "নিয়ে আসা", lesson: 17 },
    { jp: "しんぱいします", bn: "চিন্তা করা", lesson: 17 },
    { jp: "ざんぎょうします", bn: "ওভারটাইম কাজ করা", lesson: 17 },
    { jp: "しゅっちょうします", bn: "ব্যবসায়িক কাজে বাইরে যাওয়া", lesson: 17 },
    { jp: "のみます（くすりを）", bn: "খাওয়া (ওষুধ)", lesson: 17 },
    { jp: "はいります（おふろに）", bn: "গোসল করা (বাথটাবে)", lesson: 17 },
    { jp: "たいせつ", bn: "গুরুত্বপূর্ণ", lesson: 17 },
    { jp: "だいじょうぶ", bn: "ঠিক আছে", lesson: 17 },
    { jp: "あぶない", bn: "বিপজ্জনক", lesson: 17 },
    { jp: "もんだい", bn: "সমস্যা / প্রশ্ন", lesson: 17 },
    { jp: "こたえ", bn: "উত্তর", lesson: 17 },
    { jp: "きんえん", bn: "ধূমপান নিষেধ", lesson: 17 },
    { jp: "けんこうほけんしょう", bn: "স্বাস্থ্য বীমা কার্ড", lesson: 17 },
    { jp: "かぜ", bn: "ঠান্ডা / জ্বর", lesson: 17 },
    { jp: "ねつ", bn: "জ্বর", lesson: 17 },
    { jp: "びょうき", bn: "রোগ / অসুস্থতা", lesson: 17 },
    { jp: "くすり", bn: "ওষুধ", lesson: 17 },
    { jp: "おふろ", bn: "বাথটাব (গোসলের স্থান)", lesson: 17 },
    { jp: "うわぎ", bn: "জ্যাকেট / উপরের পোশাক", lesson: 17 },
    { jp: "したぎ", bn: "অন্তর্বাস", lesson: 17 },
    { jp: "せんせい", bn: "ডাক্তার (ডাক্তারকে সম্বোধন)", lesson: 17 },
    { jp: "に、さんにち", bn: "২-৩ দিন", lesson: 17 },
    { jp: "に、さん～", bn: "২-৩ ~", lesson: 17 },
    { jp: "～までに", bn: "~ এর মধ্যে (সময়সীমা)", lesson: 17 },
    { jp: "ですから", bn: "তাই / সেই কারণে", lesson: 17 },
    { jp: "どうしましたか", bn: "কী হয়েছে?", lesson: 17 },
    { jp: "いたい", bn: "ব্যথা", lesson: 17 },
    { jp: "のど", bn: "গলা", lesson: 17 },
    { jp: "おだいじに", bn: "দ্রুত আরোগ্য কামনা করছি", lesson: 17 },

    // Lesson 18
    { jp: "できます", bn: "পারতে", lesson: 18 },
    { jp: "あらいます", bn: "ধোয়া", lesson: 18 },
    { jp: "ひきます", bn: "বাজানো (পিয়ানো/গিটার)", lesson: 18 },
    { jp: "うたいます", bn: "গাওয়া", lesson: 18 },
    { jp: "あつめます", bn: "সংগ্রহ করা", lesson: 18 },
    { jp: "すてます", bn: "ফেলে দেওয়া", lesson: 18 },
    { jp: "かえます", bn: "পরিবর্তন করা", lesson: 18 },
    { jp: "うんてんします", bn: "চালানো (গাড়ি)", lesson: 18 },
    { jp: "よやくします", bn: "বুকিং করা", lesson: 18 },
    { jp: "けんがくします", bn: "পরিদর্শন করা", lesson: 18 },
    { jp: "ピアノ", bn: "পিয়ানো", lesson: 18 },
    { jp: "～メートル", bn: "~ মিটার", lesson: 18 },
    { jp: "こくさい", bn: "আন্তর্জাতিক", lesson: 18 },
    { jp: "げんきん", bn: "নগদ টাকা", lesson: 18 },
    { jp: "しゅみ", bn: "শখ", lesson: 18 },
    { jp: "にっき", bn: "ডায়েরি", lesson: 18 },
    { jp: "おいのり", bn: "প্রার্থনা", lesson: 18 },
    { jp: "かちょう", bn: "সেকশন চিফ", lesson: 18 },
    { jp: "ぶちょう", bn: "ডিপার্টমেন্ট চিফ", lesson: 18 },
    { jp: "しゃちょう", bn: "কোম্পানির প্রেসিডেন্ট", lesson: 18 },
    { jp: "どうぶつ", bn: "প্রাণী", lesson: 18 },
    { jp: "うま", bn: "ঘোড়া", lesson: 18 },
    { jp: "へえ", bn: "তাই নাকি! (আশ্চর্য প্রকাশ)", lesson: 18 },
    { jp: "それはおもしろいですね", bn: "এটা তো বেশ মজার", lesson: 18 },
    { jp: "なかなか", bn: "সহজে (নেতিবাচক বাক্যের সাথে)", lesson: 18 },
    { jp: "ぼくじょう", bn: "খামার", lesson: 18 },
    { jp: "ほんとうですか", bn: "সত্যি কি?", lesson: 18 },
    { jp: "ぜひ", bn: "অবশ্যই", lesson: 18 },

    // Lesson 19
    { jp: "のぼります（やまに）", bn: "আরোহণ করা (পাহাড়ে)", lesson: 19 },
    { jp: "とまります（ホテルに）", bn: "থাকা (হোটেল)", lesson: 19 },
    { jp: "そうじします", bn: "পরিষ্কার করা", lesson: 19 },
    { jp: "せんたくします", bn: "ধোলাই করা", lesson: 19 },
    { jp: "れんしゅうします", bn: "অনুশীলন করা", lesson: 19 },
    { jp: "なります", bn: "হওয়া", lesson: 19 },
    { jp: "ねむい", bn: "ঘুম ঘুম ভাব", lesson: 19 },
    { jp: "つよい", bn: "শক্তিশালী", lesson: 19 },
    { jp: "よわい", bn: "দুর্বল", lesson: 19 },
    { jp: "ちょうしがいい", bn: "অবস্থা ভালো (শারীরিক বা মেশিনের)", lesson: 19 },
    { jp: "ちょうしがわるい", bn: "অবস্থা খারাপ", lesson: 19 },
    { jp: "ちょうし", bn: "অবস্থা", lesson: 19 },
    { jp: "ゴルフ", bn: "গলফ", lesson: 19 },
    { jp: "すもう", bn: "সুমো (জাপানি কুস্তি)", lesson: 19 },
    { jp: "パチンコ", bn: "পাচিঙ্কো (গেমিং)", lesson: 19 },
    { jp: "おちゃ", bn: "চা অনুষ্ঠান", lesson: 19 },
    { jp: "ひ", bn: "দিন", lesson: 19 },
    { jp: "いちど", bn: "একবার", lesson: 19 },
    { jp: "いちども", bn: "একবারও না", lesson: 19 },
    { jp: "だんだん", bn: "ধীরে ধীরে", lesson: 19 },
    { jp: "もうすぐ", bn: "খুব শীঘ্রই", lesson: 19 },
    { jp: "おかげさまで", bn: "আপনার আশীর্বাদে / ভালো আছি", lesson: 19 },
    { jp: "かんぱい", bn: "চিয়ার্স!", lesson: 19 },
    { jp: "じつはおちゃを", bn: "আসলে আমি চা...", lesson: 19 },
    { jp: "ダイエット", bn: "ডায়েট", lesson: 19 },
    { jp: "なんかいも", bn: "অনেক বার", lesson: 19 },
    { jp: "しかし", bn: "কিন্তু", lesson: 19 },
    { jp: "むり", bn: "অসম্ভব / কঠিন", lesson: 19 },
    { jp: "からだにいい", bn: "শরীরের জন্য ভালো", lesson: 19 },
    { jp: "ケーキ", bn: "কেক", lesson: 19 },

    // Lesson 20
    { jp: "いります（ビザが）", bn: "প্রয়োজন (ভিসা)", lesson: 20 },
    { jp: "しらべます", bn: "পরীক্ষা করা / খোঁজা", lesson: 20 },
    { jp: "なおします", bn: "ঠিক করা / মেরামত করা", lesson: 20 },
    { jp: "しゅうりします", bn: "মেরামত করা", lesson: 20 },
    { jp: "でんわします", bn: "ফোন করা", lesson: 20 },
    { jp: "ぼく", bn: "আমি (পুরুষদের জন্য সাধারণ রূপ)", lesson: 20 },
    { jp: "きみ", bn: "তুমি (পুরুষদের দ্বারা ব্যবহৃত)", lesson: 20 },
    { jp: "くん", bn: "(বন্ধুদের নামের শেষে ব্যবহৃত)", lesson: 20 },
    { jp: "うん", bn: "হ্যাঁ (সাধারণ রূপ)", lesson: 20 },
    { jp: "ううん", bn: "না (সাধারণ রূপ)", lesson: 20 },
    { jp: "サラリーマン", bn: "চাকরিজীবী", lesson: 20 },
    { jp: "ことば", bn: "শব্দ / ভাষা", lesson: 20 },
    { jp: "ぶっか", bn: "দ্রব্যমূল্য", lesson: 20 },
    { jp: "きもの", bn: "কিমোনো", lesson: 20 },
    { jp: "ビザ", bn: "ভিসা", lesson: 20 },
    { jp: "はじめ", bn: "শুরু", lesson: 20 },
    { jp: "おわり", bn: "শেষ", lesson: 20 },
    { jp: "こっち", bn: "এদিকে (সাধারণ)", lesson: 20 },
    { jp: "そっち", bn: "ওদিকে (সাধারণ)", lesson: 20 },
    { jp: "あっち", bn: "ওইদিকে (সাধারণ)", lesson: 20 },
    { jp: "どっち", bn: "কোন দিকে / কোনটি (সাধারণ)", lesson: 20 },
    { jp: "このあいだ", bn: "কিছুদিন আগে", lesson: 20 },
    { jp: "みんなで", bn: "সবাই মিলে", lesson: 20 },
    { jp: "～けど", bn: "কিন্তু", lesson: 20 },
    { jp: "くにへかえるの？", bn: "দেশে ফিরবে নাকি?", lesson: 20 },
    { jp: "どうするの？", bn: "কী করবে?", lesson: 20 },
    { jp: "どうしようかな", bn: "কী করা যায় ভাবছি", lesson: 20 },
    { jp: "よかったら", bn: "যদি ভালো লাগে / সম্ভব হয়", lesson: 20 },
    { jp: "いろいろ", bn: "অনেক কিছু", lesson: 20 },

    // Lesson 21
    { jp: "おもいます", bn: "মনে করা", lesson: 21 },
    { jp: "いいます", bn: "বলা", lesson: 21 },
    { jp: "たります", bn: "যথেষ্ট হওয়া", lesson: 21 },
    { jp: "かちます", bn: "জেতা", lesson: 21 },
    { jp: "まけます", bn: "হারা", lesson: 21 },
    { jp: "あります（おまつりが）", bn: "অনুষ্ঠিত হওয়া (উৎসব)", lesson: 21 },
    { jp: "やくにたちます", bn: "উপকারে আসা", lesson: 21 },
    { jp: "むだ", bn: "অপচয়", lesson: 21 },
    { jp: "ふべん", bn: "অসুবিধাজনক", lesson: 21 },
    { jp: "おなじ", bn: "একই", lesson: 21 },
    { jp: "すごい", bn: "দারুণ", lesson: 21 },
    { jp: "しゅしょう", bn: "প্রধানমন্ত্রী", lesson: 21 },
    { jp: "だいとうりょう", bn: "রাষ্ট্রপতি", lesson: 21 },
    { jp: "せいじ", bn: "রাজনীতি", lesson: 21 },
    { jp: "ニュース", bn: "খবর", lesson: 21 },
    { jp: "スピーチ", bn: "ভাষণ / বক্তৃতা", lesson: 21 },
    { jp: "しあい", bn: "খেলা / ম্যাচ", lesson: 21 },
    { jp: "アルバイト", bn: "খণ্ডকালীন কাজ", lesson: 21 },
    { jp: "いけん", bn: "মতামত", lesson: 21 },
    { jp: "おはなし", bn: "গল্প / কথা", lesson: 21 },
    { jp: "ユーモア", bn: "রসিকতা / হিউমার", lesson: 21 },
    { jp: "デザイン", bn: "ডিজাইন", lesson: 21 },
    { jp: "こうつう", bn: "পরিবহন ব্যবস্থা", lesson: 21 },
    { jp: "ラッシュ", bn: "ভিড়", lesson: 21 },
    { jp: "さいきん", bn: "সম্প্রতি", lesson: 21 },
    { jp: "たぶん", bn: "সম্ভবত", lesson: 21 },
    { jp: "きっと", bn: "নিশ্চয়ই", lesson: 21 },
    { jp: "ほんとうに", bn: "সত্যি", lesson: 21 },
    { jp: "そんなに", bn: "অতটা", lesson: 21 },
    { jp: "について", bn: "সম্পর্কে", lesson: 21 },
    { jp: "しかたありません", bn: "কিছু করার নেই", lesson: 21 },
    { jp: "しばらくですね", bn: "অনেকদিন পর দেখা", lesson: 21 },

    // Lesson 22
    { jp: "きます（シャツを）", bn: "পরা (শার্ট)", lesson: 22 },
    { jp: "はきます（くつを）", bn: "পরা (জুতো/প্যান্ট)", lesson: 22 },
    { jp: "かぶります（ぼうしを）", bn: "পরা (টুপি)", lesson: 22 },
    { jp: "かけます（めがねを）", bn: "পরা (চশমা)", lesson: 22 },
    { jp: "うまれます", bn: "জন্ম নেওয়া", lesson: 22 },
    { jp: "コート", bn: "কোট", lesson: 22 },
    { jp: "スーツ", bn: "স্যুট", lesson: 22 },
    { jp: "セーター", bn: "সোয়েটার", lesson: 22 },
    { jp: "ぼうし", bn: "টুপি", lesson: 22 },
    { jp: "めがね", bn: "চশমা", lesson: 22 },
    { jp: "よく", bn: "প্রায়ই / ভালোভাবে", lesson: 22 },
    { jp: "おめでとうございます", bn: "অভিনন্দন", lesson: 22 },
    { jp: "こちら", bn: "এই দিক / এই জিনিস", lesson: 22 },
    { jp: "やちん", bn: "বাড়িভাড়া", lesson: 22 },
    { jp: "うーん", bn: "উমম (ভাবার সময়)", lesson: 22 },
    { jp: "ダイニングキチン", bn: "ডাইনিং কিচেন", lesson: 22 },
    { jp: "わしつ", bn: "জাপানি স্টাইলের রুম", lesson: 22 },
    { jp: "おしいれ", bn: "জাপানি স্টাইলের আলমারি", lesson: 22 },
    { jp: "ふとん", bn: "ফুতন (জাপানি বিছানা)", lesson: 22 },
    { jp: "アパート", bn: "অ্যাপার্টমেন্ট", lesson: 22 },
    { jp: "パリ", bn: "প্যারিস", lesson: 22 },
    { jp: "ばんりのちょうじょう", bn: "চীনের মহাপ্রাচীর", lesson: 22 },
    { jp: "よかかいはつセンター", bn: "অবসর উন্নয়ন কেন্দ্র", lesson: 22 },
    { jp: "レジャーはくしょ", bn: "লেজার শ্বেতপত্র (রিপোর্ট)", lesson: 22 },

    // Lesson 23
    { jp: "ききます（せんせいに）", bn: "জিজ্ঞাসা করা (শিক্ষককে)", lesson: 23 },
    { jp: "まわします", bn: "ঘোরানো", lesson: 23 },
    { jp: "ひきます", bn: "টানা", lesson: 23 },
    { jp: "かえます", bn: "পরিবর্তন করা", lesson: 23 },
    { jp: "さわります（ドアに）", bn: "স্পর্শ করা (দরজায়)", lesson: 23 },
    { jp: "でます（おつりが）", bn: "বের হওয়া (খুচরা টাকা)", lesson: 23 },
    { jp: "うごきます（とけいが）", bn: "চলা / নড়াচড়া করা (ঘড়ি)", lesson: 23 },
    { jp: "あるきます（みちを）", bn: "হাঁটা (রাস্তায়)", lesson: 23 },
    { jp: "わたります（はしを）", bn: "পার হওয়া (সেতু)", lesson: 23 },
    { jp: "きをつけます（くるまに）", bn: "সাবধান হওয়া (গাড়ির প্রতি)", lesson: 23 },
    { jp: "ひっこしします", bn: "বাসা বদল করা", lesson: 23 },
    { jp: "でんきや", bn: "ইলেকট্রনিক্সের দোকান", lesson: 23 },
    { jp: "～や", bn: "~ দোকান", lesson: 23 },
    { jp: "サイズ", bn: "সাইজ", lesson: 23 },
    { jp: "おと", bn: "শব্দ / সাউন্ড", lesson: 23 },
    { jp: "きかい", bn: "মেশিন", lesson: 23 },
    { jp: "つまみ", bn: "নব / ঘোরানোর বোতাম", lesson: 23 },
    { jp: "こしょう", bn: "নষ্ট / ব্রেকডাউন", lesson: 23 },
    { jp: "みち", bn: "রাস্তা", lesson: 23 },
    { jp: "こうさてん", bn: "মোড় / চৌরাস্তা", lesson: 23 },
    { jp: "しんごう", bn: "ট্রাফিক সিগন্যাল", lesson: 23 },
    { jp: "かど", bn: "কোণ", lesson: 23 },
    { jp: "はし", bn: "সেতু", lesson: 23 },
    { jp: "ちゅうしゃじょう", bn: "পার্কিং লট", lesson: 23 },
    { jp: "～め", bn: "~ তম", lesson: 23 },
    { jp: "おしょうがつ", bn: "নববর্ষ", lesson: 23 },
    { jp: "ごちそうさまでした", bn: "খাবার শেষে ধন্যবাদ জ্ঞাপন", lesson: 23 },
    { jp: "たてもの", bn: "ভবন", lesson: 23 },
    { jp: "がいこくじんとうろくしょう", bn: "এলিয়েন রেজিস্ট্রেশন কার্ড", lesson: 23 },

    // Lesson 24
    { jp: "くれます", bn: "দেওয়া (আমাকে বা আমার কাউকে)", lesson: 24 },
    { jp: "つれていきます", bn: "সাথে করে নিয়ে যাওয়া (কাউকে)", lesson: 24 },
    { jp: "つれてきます", bn: "সাথে করে নিয়ে আসা (কাউকে)", lesson: 24 },
    { jp: "おくります（ひとを）", bn: "এগিয়ে দেওয়া (কাউকে)", lesson: 24 },
    { jp: "しょうかいします", bn: "পরিচয় করিয়ে দেওয়া", lesson: 24 },
    { jp: "あんないします", bn: "পথ দেখানো / গাইড করা", lesson: 24 },
    { jp: "せつめいします", bn: "ব্যাখ্যা করা", lesson: 24 },
    { jp: "いれます（コーヒーを）", bn: "বানানো (কফি)", lesson: 24 },
    { jp: "おじいさん/おじいちゃん", bn: "দাদা/নানা / বৃদ্ধ মানুষ", lesson: 24 },
    { jp: "おばあさん/おばあちゃん", bn: "দাদি/নানি / বৃদ্ধা", lesson: 24 },
    { jp: "じゅんび", bn: "প্রস্তুতি", lesson: 24 },
    { jp: "いみ", bn: "অর্থ", lesson: 24 },
    { jp: "おかし", bn: "মিষ্টি / স্ন্যাকস", lesson: 24 },
    { jp: "ぜんぶ", bn: "সব", lesson: 24 },
    { jp: "じぶんで", bn: "নিজে নিজে", lesson: 24 },
    { jp: "ほかに", bn: "তাছাড়া / অন্য কিছু", lesson: 24 },
    { jp: "ワゴンしゃ", bn: "স্টেশন ওয়াগন গাড়ি", lesson: 24 },
    { jp: "おべんとう", bn: "বক্স লাঞ্চ / টিফিন", lesson: 24 },

    // Lesson 25
    { jp: "かんがえます", bn: "চিন্তা করা / ভাবা", lesson: 25 },
    { jp: "つきます（えきに）", bn: "পৌঁছানো (স্টেশনে)", lesson: 25 },
    { jp: "りゅうがくします", bn: "বিদেশে পড়াশোনা করা", lesson: 25 },
    { jp: "とります（としを）", bn: "বয়স বাড়া", lesson: 25 },
    { jp: "いなか", bn: "গ্রাম / মফস্বল", lesson: 25 },
    { jp: "たいしかん", bn: "দূতাবাস", lesson: 25 },
    { jp: "グループ", bn: "গ্রুপ", lesson: 25 },
    { jp: "チャンス", bn: "সুযোগ", lesson: 25 },
    { jp: "おく", bn: "একশ মিলিয়ন (দশ কোটি)", lesson: 25 },
    { jp: "もし（～たら）", bn: "যদি (~ হয়)", lesson: 25 },
    { jp: "いくら（～ても）", bn: "যতই (~ হোক না কেন)", lesson: 25 },
    { jp: "てんきん", bn: "বদলি", lesson: 25 },
    { jp: "こと", bn: "বিষয় / ব্যাপার", lesson: 25 },
    { jp: "いっぱいのみましょう", bn: "এক পানীয় পান করা যাক (চলুন পান করি)", lesson: 25 },
    { jp: "いろいろおせわになりました", bn: "অনেক সাহায্য করেছেন, ধন্যবাদ", lesson: 25 },
    { jp: "がんばります", bn: "চেষ্টা করবো / লেগে থাকবো", lesson: 25 },
    { jp: "どうぞおげんきで", bn: "ভালো থাকবেন", lesson: 25 }
    
    
];
// ==========================================
// 4. USER-ISOLATED STORAGE SYSTEM
// ==========================================
function loadLocalDatabase(username) {
    const storageKey = `jlpt_progress_${username}`;
    const savedData = localStorage.getItem(storageKey); 
    let parsedData = savedData ? JSON.parse(savedData) : null;
    
    if (parsedData && parsedData.length === rawCards.length) {
        return parsedData;
    } else {
        const initialDb = rawCards.map((card, index) => ({
            id: index + 1,
            jp: card.jp,
            bn: card.bn,
            lesson: parseInt(card.lesson), 
            interval: 0,        
            ease: 2.5,          
            nextReview: 0 
        }));
        
        localStorage.setItem(storageKey, JSON.stringify(initialDb));
        return initialDb;
    }
}

function saveProgressLocally() {
    if (!currentUser) return;
    const storageKey = `jlpt_progress_${currentUser}`;
    localStorage.setItem(storageKey, JSON.stringify(allCardsDb));
}

// ==========================================
// 5. APP STATE & UI LOGIC
// ==========================================
let reviewQueue = [];
let initialDeckSize = 0;
let isFlipped = false;
let totalSwipes = 0;
let correctSwipes = 0;

const lessonContainer = document.getElementById('lesson-buttons-container');
for (let i = 1; i <= 25; i++) {
    const btn = document.createElement('button');
    btn.className = 'btn-lesson';
    btn.innerText = `Lesson ${i}`;
    btn.onclick = () => startSession(i);
    lessonContainer.appendChild(btn);
}

function showScreen(screenId) {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('study-screen').classList.add('hidden');
    document.getElementById('summary-screen').classList.add('hidden');
    document.getElementById(screenId).classList.remove('hidden');
}

function goHome() {
    showScreen('dashboard');
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('show-answer-btn').classList.remove('hidden');
    document.getElementById('rating-controls').classList.add('hidden');
    isFlipped = false;
}

function startSession(lessonSelection) {
    const now = Date.now();
    
    if (lessonSelection === 'master') {
        reviewQueue = allCardsDb.filter(card => card.nextReview <= now);
        document.getElementById('study-title').innerText = "Master Deck";
    } else {
        reviewQueue = allCardsDb.filter(card => card.lesson === lessonSelection && card.nextReview <= now);
        document.getElementById('study-title').innerText = `Lesson ${lessonSelection}`;
    }

    if (reviewQueue.length === 0) {
        alert("No cards due right now! You are all caught up.");
        return;
    }

    reviewQueue = reviewQueue.sort(() => Math.random() - 0.5);
    initialDeckSize = reviewQueue.length;
    totalSwipes = 0;
    correctSwipes = 0;
    document.getElementById('progress-bar').style.width = '0%';

    showScreen('study-screen');
    loadNextCard();
}

function loadNextCard() {
    if (reviewQueue.length === 0) {
        finishSession();
        return;
    }

    const card = reviewQueue[0]; 
    document.getElementById('front-jp').innerText = card.jp;
    document.getElementById('back-jp').innerText = card.jp;
    document.getElementById('back-bn').innerText = card.bn;

    document.getElementById('flashcard').classList.remove('flipped');
    
    setTimeout(() => {
        document.getElementById('show-answer-btn').classList.remove('hidden');
        document.getElementById('rating-controls').classList.add('hidden');
        isFlipped = false;
    }, 150);
}

function showAnswer() {
    if (isFlipped) return; 
    if (navigator.vibrate) navigator.vibrate(50);

    document.getElementById('flashcard').classList.add('flipped');
    document.getElementById('show-answer-btn').classList.add('hidden');
    document.getElementById('rating-controls').classList.remove('hidden');
    isFlipped = true;
}

function gradeCard(grade, event) {
    event.stopPropagation(); 
    if (navigator.vibrate) navigator.vibrate(20); 
    
    const currentCard = reviewQueue.shift(); 
    totalSwipes++; 

    if (grade === 'again') {
        currentCard.interval = 0;
        currentCard.nextReview = Date.now(); 
        reviewQueue.push(currentCard); 
    } else {
        correctSwipes++;
        
        if (currentCard.interval === 0) currentCard.interval = 1;
        else if (grade === 'hard') currentCard.interval *= 1.2;
        else if (grade === 'good') currentCard.interval *= currentCard.ease;
        else if (grade === 'easy') currentCard.interval *= (currentCard.ease * 1.3);

        currentCard.nextReview = Date.now() + (currentCard.interval * 24 * 60 * 60 * 1000);

        const completed = initialDeckSize - reviewQueue.length;
        const percentage = (completed / initialDeckSize) * 100;
        document.getElementById('progress-bar').style.width = `${percentage}%`;
    }

    const dbIndex = allCardsDb.findIndex(c => c.id === currentCard.id);
    if (dbIndex !== -1) {
        allCardsDb[dbIndex] = currentCard;
    }

    saveProgressLocally();
    loadNextCard();
}

function finishSession() {
    const accuracy = Math.round((correctSwipes / totalSwipes) * 100) || 0;
    
    document.getElementById('accuracy-display').innerText = `${accuracy}%`;
    document.getElementById('correct-count').innerText = correctSwipes;
    document.getElementById('total-count').innerText = totalSwipes;
    
    document.getElementById('accuracy-chart').style.background = `conic-gradient(#10b981 ${accuracy}%, rgba(255,255,255,0.2) 0%)`;

    showScreen('summary-screen');
}