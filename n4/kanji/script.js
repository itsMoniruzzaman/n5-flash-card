// ==========================================
// 1. DATASET (N4 Kanji Lessons 1-20 / IDs N4K001 - N4K201 - Fully Verified)
// ==========================================
const KANJI_DATA = [
    // --- LESSON 1 ---
    { id: "N4K001", kanji: "住", meaning: "to live / বাস করা", kunyomi: ["す.む"], onyomi: ["ジュウ"], vocabulary: [{ word: "住む", reading: "すむ", meaning: "to live / বাস করা" }, { word: "住民", reading: "じゅうみん", meaning: "inhabitants / বাসিন্দা" }], sentences: [{ japanese: "京都に住んでいます。", reading: "きょうとに すんでいます。", meaning: "I live in Kyoto. / আমি কিয়োটোতে বাস করি।" }], lesson: 1 },
    { id: "N4K002", kanji: "所", meaning: "place / জায়গা, ঠিকানা", kunyomi: ["ところ", "どころ"], onyomi: ["ショ", "ジョ"], vocabulary: [{ word: "場所", reading: "ばしょ", meaning: "place / জায়গা" }, { word: "住所", reading: "じゅうしょ", meaning: "address / ঠিকানা" }, { word: "台所", reading: "だいどころ", meaning: "kitchen / রান্নাঘর" }], sentences: [{ japanese: "ここは静かな所です。", reading: "ここは しずかな ところです。", meaning: "This is a quiet place. / এটি একটি শান্ত জায়গা।" }], lesson: 1 },
    { id: "N4K003", kanji: "京", meaning: "capital / রাজধানী (টোকিও)", kunyomi: ["みやこ"], onyomi: ["キョウ"], vocabulary: [{ word: "東京", reading: "とうきょう", meaning: "Tokyo / টোকিও" }, { word: "京都", reading: "きょうと", meaning: "Kyoto / কিয়োটো" }], sentences: [{ japanese: "東京へ行きます。", reading: "とうきょうへ いきます。", meaning: "I will go to Tokyo. / আমি টোকিও যাব।" }], lesson: 1 },
    { id: "N4K004", kanji: "都", meaning: "capital, metropolis / রাজধানী, মহানগরী", kunyomi: ["みやこ"], onyomi: ["ト", "ツ"], vocabulary: [{ word: "東京都", reading: "とうきょうと", meaning: "Metropolis of Tokyo / টোকিও প্রিফেকচার" }, { word: "都合がいい", reading: "つごうがいい", meaning: "convenient / সুবিধাজনক" }, { word: "首都", reading: "しゅと", meaning: "capital / রাজধানী" }], sentences: [{ japanese: "明日は都合が悪いです。", reading: "あしたは つごうが わるいです。", meaning: "Tomorrow is inconvenient for me. / কাল আমার একটু অসুবিধা আছে।" }], lesson: 1 },
    { id: "N4K005", kanji: "府", meaning: "prefecture, government office / প্রিফেকচার, সরকার", kunyomi: [], onyomi: ["フ"], vocabulary: [{ word: "京都府", reading: "きょうとふ", meaning: "Kyoto Prefecture / কিয়োটো প্রিফেকচার" }, { word: "大阪府", reading: "おおさかふ", meaning: "Osaka Prefecture / ওসাকা প্রিফেকচার" }, { word: "政府", reading: "せいふ", meaning: "government / সরকার" }], sentences: [{ japanese: "京都府に住んでいます。", reading: "きょうとふに すんでいます。", meaning: "I live in Kyoto Prefecture. / আমি কিয়োটো প্রিফেকচারে বাস করি।" }], lesson: 1 },
    { id: "N4K006", kanji: "県", meaning: "prefecture / প্রিফেকচার, জেলা", kunyomi: [], onyomi: ["ケン"], vocabulary: [{ word: "山口県", reading: "やまぐちけん", meaning: "Yamaguchi Prefecture / ইয়ামাগুচি প্রিফেকচার" }, { word: "県知事", reading: "けんちじ", meaning: "prefecture governor / প্রিফেকচার গভর্নর/শাসক" }], sentences: [{ japanese: "日本には県が43あります。", reading: "にほんには まが よんじゅうさん あります。", meaning: "There are 43 prefectures in Japan. / জাপানে ৪৩টি প্রিফেকচার রয়েছে।" }], lesson: 1 },
    { id: "N4K007", kanji: "市", meaning: "city, market / শহর, বাজার", kunyomi: ["いち"], onyomi: ["シ"], vocabulary: [{ word: "京都市", reading: "きょうとし", meaning: "Kyoto city / কিয়োটো শহর" }, { word: "市長", reading: "しちょう", meaning: "mayor / মেয়র" }, { word: "市場", reading: "いちば", meaning: "market / মার্কেট, বাজার" }], sentences: [{ japanese: "京都市は歴史の町です。", reading: "きょうとしは れきしの まちです。", meaning: "Kyoto city is a historical town. / কিয়োটো শহর একটি ঐতিহাসিক শহর।" }], lesson: 1 },
    { id: "N4K008", kanji: "区", meaning: "ward, district / ওয়ার্ড, অঞ্চল", kunyomi: [], onyomi: ["ク"], vocabulary: [{ word: "北区", reading: "きたく", meaning: "Kita Ward / কিতা ওয়ার্ড" }, { word: "文京区", reading: "ぶんきょうく", meaning: "Bunkyo Ward / বুনকিও ওয়ার্ড" }, { word: "区長", reading: "くちょう", meaning: "ward mayor / ওয়ার্ড মেয়র" }], sentences: [{ japanese: "東京都には区が23あります。", reading: "とうきょうとには くが にじゅうさん あります。", meaning: "There are 23 wards in Tokyo. / টোকিওতে ২৩টি ওয়ার্ড রয়েছে।" }], lesson: 1 },
    { id: "N4K009", kanji: "町", meaning: "town, street / শহর, পাড়া", kunyomi: ["まち"], onyomi: ["チョウ"], vocabulary: [{ word: "町", reading: "まち", meaning: "town / শহর" }, { word: "下町", reading: "したまち", meaning: "downtown / শহরের কেন্দ্রস্থল, পুরানো এলাকা" }, { word: "町長", reading: "ちょうちょう", meaning: "town leader / শহরের নেতা" }], sentences: [{ japanese: "この町はぎやかです。", reading: "このまちは にぎやかです。", meaning: "This town is lively. / এই শহরটি প্রাণবন্ত।" }], lesson: 1 },
    { id: "N4K010", kanji: "村", meaning: "village / গ্রাম", kunyomi: ["むら"], onyomi: ["ソン"], vocabulary: [{ word: "村", reading: "むら", meaning: "village / গ্রাম" }, { word: "村人", reading: "むらびと", meaning: "villager / গ্রামবাসী" }, { word: "村長", reading: "そんちょう", meaning: "village leader / গ্রামের নেতা" }], sentences: [{ japanese: "となりの村までサイクリングします。", reading: "となりの むらまで さいくりんぐします。", meaning: "I will cycle to the neighboring village. / পাশের গ্রামে সাইক্লিং করব।" }], lesson: 1 },

    // --- LESSON 2 ---
    { id: "N4K011", kanji: "明", meaning: "bright, cheerful / উজ্জ্বল, প্রফুল্ল", kunyomi: ["あか.るい", "あか.る"], onyomi: ["メイ"], vocabulary: [{ word: "明るい", reading: "あかるい", meaning: "bright, cheerful / উজ্জ্বল, প্রফুল্ল" }, { word: "明日", reading: "あした", meaning: "tomorrow / আগামীকাল" }, { word: "説明", reading: "せつめい", meaning: "explanation / ব্যাখ্যা" }, { word: "発明", reading: "はつめい", meaning: "invention / আবিষ্কার" }], sentences: [{ japanese: "部屋が明るいです。", reading: "へやが あかるいです。", meaning: "The room is bright. / ঘরটি উজ্জ্বল।" }], lesson: 2 },
    { id: "N4K012", kanji: "暗", meaning: "dark / অন্ধকার", kunyomi: ["くら.い"], onyomi: ["アン"], vocabulary: [{ word: "暗い", reading: "くらい", meaning: "dark / অন্ধকার" }, { word: "暗号", reading: "あんごう", meaning: "secret code / গোপন কোড" }], sentences: [{ japanese: "夜道は暗いです。", reading: "よみちは くらいです。", meaning: "The night road is dark. / রাতের রাস্তা অন্ধকার।" }], lesson: 2 },
    { id: "N4K013", kanji: "遠", meaning: "far / দূরে", kunyomi: ["とお.い"], onyomi: ["エン"], vocabulary: [{ word: "遠い", reading: "とおい", meaning: "far / দূরে" }, { word: "遠足", reading: "えんそく", meaning: "excursion / ভ্রমণ" }], sentences: [{ japanese: "学校は遠いです。", reading: "がっこうは とおいです。", meaning: "The school is far. / স্কুলটি দূরে।" }], lesson: 2 },
    { id: "N4K014", kanji: "近", meaning: "near / কাছে, আশেপাশে", kunyomi: ["ちか.い"], onyomi: ["キン"], vocabulary: [{ word: "近い", reading: "ちかい", meaning: "near / কাছে" }, { word: "近所", reading: "きんじょ", meaning: "neighborhood / প্রতিবেশিশা/পাড়া/আশপাশ" }, { word: "最近", reading: "さいきん", meaning: "recently / সম্প্রতি" }], sentences: [{ japanese: "駅に近い所に住んでいます。", reading: "えきに ちかい ところに すんでいます。", meaning: "I live in a place close to the station. / আমি স্টেশনের কাছাকাছি জায়গায় বাস করি।" }], lesson: 2 },
    { id: "N4K015", kanji: "強", meaning: "strong / শক্তিশালী", kunyomi: ["つよ.い"], onyomi: ["キョウ"], vocabulary: [{ word: "強い", reading: "つよい", meaning: "strong / শক্তিশালী" }, { word: "勉強する", reading: "べんきょうする", meaning: "to study / লেখাপড়া করা" }, { word: "強風", reading: "きょうふう", meaning: "big wind / প্রচণ্ড বাতাস" }], sentences: [{ japanese: "風が強いです。", reading: "かぜが つよいます。", meaning: "The wind is strong. / বাতাস প্রবল।" }], lesson: 2 },
    { id: "N4K016", kanji: "弱", meaning: "weak / দুর্বল", kunyomi: ["よわ.い"], onyomi: ["ジャク"], vocabulary: [{ word: "弱い", reading: "よわい", meaning: "weak / দুর্বল" }, { word: "強弱", reading: "きょうじゃく", meaning: "strong and weak / শক্তিশালী এবং দুর্বল" }], sentences: [{ japanese: "彼は体が弱いです。", reading: "かれは からだがい よわいです。", meaning: "He is physically weak. / সে শারীরিকভাবে দুর্বল।" }], lesson: 2 },
    { id: "N4K017", kanji: "重", meaning: "heavy, important / ভারী, গুরুত্বপূর্ণ", kunyomi: ["おも.い"], onyomi: ["ジュウ", "チョウ"], vocabulary: [{ word: "重い", reading: "おもい", meaning: "heavy / ভারী" }, { word: "重大な", reading: "じゅうだいな", meaning: "important / গুরুত্বপূর্ণ" }, { word: "体重", reading: "たいじゅう", meaning: "body weight / শরীরের ওজন" }], sentences: [{ japanese: "この荷物は重いです。", reading: "このにもつは おもいです。", meaning: "This luggage is heavy. / এই মালপত্রটি ভারী।" }], lesson: 2 },
    { id: "N4K018", kanji: "軽", meaning: "light / হালকা", kunyomi: ["かる.い"], onyomi: ["ケイ"], vocabulary: [{ word: "軽い", reading: "かるい", meaning: "light / হালকা" }, { word: "軽食", reading: "けいしょく", meaning: "snack / হালকা খাবার/জল খাবার" }], sentences: [{ japanese: "このカバンは軽いです。", reading: "このかばんは かるいです。", meaning: "This bag is light. / এই ব্যাগটি হালকা।" }], lesson: 2 },
    { id: "N4K019", kanji: "太", meaning: "fat, thick / মোটা, সূর্য", kunyomi: ["ふと.い"], onyomi: ["タイ"], vocabulary: [{ word: "太い", reading: "ふとい", meaning: "fat, thick / মোটা" }, { word: "太陽", reading: "たいよう", meaning: "sun / সূর্য" }], sentences: [{ japanese: "太陽が昇ります。", reading: "たいようが のぼります。", meaning: "The sun rises. / সূর্য ওঠে।" }], lesson: 2 },
    { id: "N4K020", kanji: "細", meaning: "slender, fine / পাতলা, সরু, কারুকাজ", kunyomi: ["ほそ.い", "こま.かい"], onyomi: ["サイ"], vocabulary: [{ word: "細い", reading: "ほそい", meaning: "slender, thin / পাতলা" }, { word: "細かい", reading: "こまかい", meaning: "fine, detailed / জরিমানা (বা সূক্ষ্ম/খুচরা)" }, { word: "細工", reading: "さいく", meaning: "craftsmanship / কারুকাজ" }], sentences: [{ japanese: "この鉛筆は細いです。", reading: "このえんぴつは ほそいです。", meaning: "This pencil is thin. / এই পেন্সিলটি সরু/পাতলা।" }], lesson: 2 },

    // --- LESSON 3 ---
    { id: "N4K021", kanji: "特", meaning: "special / বিশেষ, বিশেষ করে", kunyomi: ["とく.に"], onyomi: ["トク"], vocabulary: [{ word: "特に", reading: "とくに", meaning: "especially / বিশেষ করে" }, { word: "特別な", reading: "とくべつな", meaning: "special / বিশেষ" }, { word: "特急", reading: "とっきゅう", meaning: "limited express / সীমিত এক্সপ্রেস" }], sentences: [{ japanese: "今日は特に暑いです。", reading: "きょうは とくに あついです。", meaning: "It is especially hot today. / আজ বিশেষ করে গরম।" }], lesson: 3 },
    { id: "N4K022", kanji: "別", meaning: "separate, another / আলাদা, পৃথক", kunyomi: ["わか.れる"], onyomi: ["ベツ"], vocabulary: [{ word: "別れる", reading: "わかれる", meaning: "to separate / আলাদা হওয়া" }, { word: "別々に", reading: "べつべつに", meaning: "separately / পৃথকভাবে" }, { word: "区別する", reading: "くべつする", meaning: "to distinguish / পার্থক্য করা" }, { word: "分別する", reading: "ふんべつする", meaning: "to classify / শ্রেণীবিন্যাস করা" }], sentences: [{ japanese: "友達と別れました。", reading: "ともだちと わかれました。", meaning: "I parted ways with my friend. / বন্ধুর সাথে আলাদা হয়ে গেলাম।" }], lesson: 3 },
    { id: "N4K023", kanji: "有", meaning: "exist, possess / থাকা, বিখ্যাত", kunyomi: ["あ.る"], onyomi: ["ユウ", "ウ"], vocabulary: [{ word: "有る", reading: "ある", meaning: "to exist, to be / থাকা" }, { word: "有名な", reading: "ゆうめいな", meaning: "famous / বিখ্যাত" }, { word: "有料", reading: "ゆうりょう", meaning: "pay toll / টোল পরিশোধ করা" }], sentences: [{ japanese: "彼は有名な歌手です。", reading: "かれは ゆうめいな かしゅです。", meaning: "He is a famous singer. / সে একজন বিখ্যাত গায়ক।" }], lesson: 3 },
    { id: "N4K024", kanji: "便", meaning: "convenience, mail / চিঠি, পোস্ট অফিস, মেইল", kunyomi: ["たよ.り"], onyomi: ["ベン", "ビン"], vocabulary: [{ word: "便り", reading: "たより", meaning: "letter / চিঠি" }, { word: "郵便局", reading: "ゆうびんきょく", meaning: "post office / পোস্ট অফিস" }, { word: "船便", reading: "ふなびん", meaning: "sea mail / নৌপথে মেইল" }], sentences: [{ japanese: "実家から便りが来ました。", reading: "じっかから たよりが きました。", meaning: "A letter came from my parents' home. / গ্রামের বাড়ি থেকে চিঠি এসেছে।" }], lesson: 3 },
    { id: "N4K025", kanji: "利", meaning: "advantage, profit / সুবিধাজনক, ব্যবহার করা, সুদ", kunyomi: ["り.き"], onyomi: ["リ"], vocabulary: [{ word: "便利な", reading: "べんりな", meaning: "convenient / সুবিধাজনক" }, { word: "利用する", reading: "りようする", meaning: "to use / ব্যবহার করা" }, { word: "利子", reading: "りし", meaning: "interest / সুদ" }, { word: "有利な", reading: "ゆうりな", meaning: "advantageous / সুবিধাজনক" }], sentences: [{ japanese: "この町は便利です。", reading: "このまちは べんりです。", meaning: "This town is convenient. / এই শহরটি সুবিধাজনক।" }], lesson: 3 },
    { id: "N4K026", kanji: "不", meaning: "not, un- / অ-, না, কম পড়া", kunyomi: [], onyomi: ["フ", "ブ"], vocabulary: [{ word: "不便な", reading: "ふべんな", meaning: "inconvenient / অসুবিধাজনক" }, { word: "不足する", reading: "ふそくする", meaning: "to run short / কম পড়া, ঘাটতি হওয়া" }, { word: "不安な", reading: "ふあんな", meaning: "anxious / উদ্বিগ্ন, উদবিগ্ন" }, { word: "不運な", reading: "ふうんな", meaning: "unfortunate / দুর্ভাগ্যজনক" }], sentences: [{ japanese: "ここは交通が不便です。", reading: "ここは こうつうが ふべんです。", meaning: "Transportation here is inconvenient. / এখানকার যোগাযোগ ব্যবস্থা অসুবিধাজনক।" }], lesson: 3 },
    { id: "N4K027", kanji: "切", meaning: "cut, important / কাটা, গুরুত্বপূর্ণ, দয়ালু", kunyomi: ["き.る", "き.れ"], onyomi: ["セツ"], vocabulary: [{ word: "切る", reading: "きる", meaning: "to cut / কাটা/কেটে ছোট করা" }, { word: "切手", reading: "きって", meaning: "postage stamp / ডাকটিকিট" }, { word: "大切な", reading: "たいせつな", meaning: "important / গুরুত্বপূর্ণ" }, { word: "親切な", reading: "しんせつな", meaning: "kind / দয়ালু" }], sentences: [{ japanese: "ハサミで紙を切ります。", reading: "はさみで かみを きります。", meaning: "I cut paper with scissors. / কাঁচি দিয়ে কাগজ কাটি।" }], lesson: 3 },
    { id: "N4K028", kanji: "元", meaning: "origin, original / ভালো, সক্রিয়, নতুন বছর", kunyomi: ["もと"], onyomi: ["ゲン", "ガン"], vocabulary: [{ word: "元気な", reading: "げんきな", meaning: "fine, active / ভালো, সক্রিয়" }, { word: "元日", reading: "がんじつ", meaning: "New Year's Day / নতুন বছরের দিন" }, { word: "紀元前", reading: "きげんぜん", meaning: "Before Christ / খ্রিস্টপূর্ব" }], sentences: [{ japanese: "祖父は元気です。", reading: "そふは げんきです。", meaning: "My grandfather is well/energetic. / আমার দাদু সুস্থ আছেন।" }], lesson: 3 },
    { id: "N4K029", kanji: "好", meaning: "like, favorite / পছন্দ, স্নেহ", kunyomi: ["す.き", "す.く"], onyomi: ["コウ"], vocabulary: [{ word: "好きな", reading: "すきな", meaning: "favorite / পছন্দ, খুব পছন্দ" }, { word: "好意", reading: "こうい", meaning: "affection / স্নেহ" }, { word: "好物", reading: "こうぶつ", meaning: "favorite dish / পছন্দের খাবার" }], sentences: [{ japanese: "私はりんごが好きです。", reading: "わたしは りんごが すきです。", meaning: "I like apples. / আমি আপেল পছন্দ করি।" }], lesson: 3 },
    { id: "N4K030", kanji: "急", meaning: "sudden, hurry / হঠাৎ করে, দ্রুত, জরুরি", kunyomi: ["いそ.ぐ"], onyomi: ["キュウ"], vocabulary: [{ word: "急に", reading: "きゅうに", meaning: "suddenly / হঠাৎ করে" }, { word: "特急", reading: "とっきゅう", meaning: "limited express / সীমিত এক্সপ্রেস" }, { word: "急ぐ", reading: "いそぐ", meaning: "to hurry / তাড়াহুড়ো করা" }, { word: "急用", reading: "きゅうよう", meaning: "urgent business / জরুরি ব্যবসা/কাজ" }], sentences: [{ japanese: "急に雨が降りました。", reading: "きゅうに あめが ふりました。", meaning: "It suddenly started raining. / হঠাৎ করে বৃষ্টি শুরু হলো।" }], lesson: 3 },

    // --- LESSON 4 ---
    { id: "N4K031", kanji: "低", meaning: "low, short / কম, নিচু", kunyomi: ["ひく.い"], onyomi: ["テイ"], vocabulary: [{ word: "低い", reading: "ひくい", meaning: "low / কম, নিচু" }, { word: "低下する", reading: "ていかする", meaning: "to fall / কমে যাওয়া, পতন হওয়া" }, { word: "低気圧", reading: "ていきあつ", meaning: "low pressure / নিম্নচাপ" }], sentences: [{ japanese: "この机は背が低いです。", reading: "このつくえは せが ひくいです。", meaning: "This desk is low. / এই টেবিলটি নিচু।" }], lesson: 4 },
    { id: "N4K032", kanji: "広", meaning: "wide, spacious / প্রশস্ত, বিশাল", kunyomi: ["ひろ.い"], onyomi: ["コウ"], vocabulary: [{ word: "広い", reading: "ひろい", meaning: "spacious, wide / প্রশস্ত" }, { word: "広場", reading: "ひろば", meaning: "plaza / প্লাজা, চত্বর" }, { word: "広大な", reading: "こうだいな", meaning: "vast / বিশাল" }], sentences: [{ japanese: "公園は広いです。", reading: "こうえんは ひろいです。", meaning: "The park is spacious. / পার্কটি প্রশস্ত।" }], lesson: 4 },
    { id: "N4K033", kanji: "短", meaning: "short / খাটো, সংক্ষিপ্ত", kunyomi: ["みじか.い"], onyomi: ["タン"], vocabulary: [{ word: "短い", reading: "みじかい", meaning: "short / ছোট, খাটো, সংকীর্ণ" }, { word: "短時間", reading: "たんじかん", meaning: "short time / অল্প সময়" }], sentences: [{ japanese: "鉛筆が短くなりました。", reading: "えんぴつが みじかくなりました。", meaning: "The pencil has become short. / পেন্সিলটি ছোট হয়ে গেছে।" }], lesson: 4 },
    { id: "N4K034", kanji: "良", meaning: "good / ভালো", kunyomi: ["よ.い", "い.い"], onyomi: ["リョウ"], vocabulary: [{ word: "良い", reading: "よい / いい", meaning: "good / ভালো" }, { word: "良心", reading: "りょうしん", meaning: "conscience / বিবেক, ন্যায়পরতা" }], sentences: [{ japanese: "今日は良い天気です。", reading: "きょうは よい てんきです。", meaning: "Today is good weather. / আজকের আবহাওয়া ভালো।" }], lesson: 4 },
    { id: "N4K035", kanji: "悪", meaning: "bad, evil / খারাপ", kunyomi: ["わる.い"], onyomi: ["アク"], vocabulary: [{ word: "悪い", reading: "わるい", meaning: "bad / খারাপ" }, { word: "悪人", reading: "あくにん", meaning: "bad person / খারাপ লোক" }], sentences: [{ japanese: "気分が悪いです。", reading: "きぶんが わるいです。", meaning: "I feel sick/bad. / শরীর খারাপ লাগছে।" }], lesson: 4 },
    { id: "N4K036", kanji: "正", meaning: "correct, right / সঠিক, প্রধান", kunyomi: ["ただ.しい", "まさ"], onyomi: ["セイ", "ショウ"], vocabulary: [{ word: "正しい", reading: "ただしい", meaning: "correct, right / সঠিক" }, { word: "正月", reading: "しょうがつ", meaning: "The New Year / নতুন বছর" }, { word: "正門", reading: "せいもん", meaning: "main gate / প্রধান গেট" }], sentences: [{ japanese: "答えは正しいです。", reading: "こたえは ただしいです。", meaning: "The answer is correct. / উত্তরটি সঠিক।" }], lesson: 4 },
    { id: "N4K037", kanji: "変", meaning: "change, strange / পরিবর্তন, অদ্ভুত, কঠিন", kunyomi: ["か.わる", "か.える"], onyomi: ["ヘン"], vocabulary: [{ word: "変わる", reading: "かわる", meaning: "to change / পরিবর্তন করা" }, { word: "変な", reading: "へんな", meaning: "strange / অদ্ভুত, অপরিচিত" }, { word: "大変な", reading: "たいへんな", meaning: "hard, tough / কঠিন, মারাত্মক" }], sentences: [{ japanese: "信号が赤に変わりました。", reading: "しんごうが あかに かわりました。", meaning: "The traffic light changed to red. / ট্রাফিক লাইট লাল রঙে পরিবর্তিত হলো।" }], lesson: 4 },
    { id: "N4K038", kanji: "赤", meaning: "red / লাল", kunyomi: ["あか.い"], onyomi: ["セキ"], vocabulary: [{ word: "赤い", reading: "あかい", meaning: "red / লাল" }, { word: "赤ちゃん", reading: "あかちゃん", meaning: "baby / শিশু" }, { word: "赤信号", reading: "あかしんごう", meaning: "red light / লাল বাতি" }, { word: "赤道", reading: "せきどう", meaning: "equator / বিষুবরেখা" }], sentences: [{ japanese: "赤いりんごを食べます。", reading: "あかい りんごを たべます。", meaning: "I eat a red apple. / আমি লাল আপেল খাই।" }], lesson: 4 },
    { id: "N4K039", kanji: "青", meaning: "blue / নীল", kunyomi: ["あお.い"], onyomi: ["セイ", "ショウ"], vocabulary: [{ word: "青い", reading: "あおい", meaning: "blue / নীল" }, { word: "青空", reading: "あおぞら", meaning: "blue sky / নীল আকাশ" }, { word: "青春", reading: "せいしゅん", meaning: "youth / যুবক / যৌবন" }], sentences: [{ japanese: "空が青いです。", reading: "そらが あおいです。", meaning: "The sky is blue. / আকাশ নীল।" }], lesson: 4 },
    { id: "N4K040", kanji: "黒", meaning: "black / কালো", kunyomi: ["くろ.い"], onyomi: ["コク"], vocabulary: [{ word: "黒い", reading: "くろい", meaning: "black / কালো" }, { word: "真っ黒", reading: "まっくろ", meaning: "pitch black / কুচকুচে কালো" }], sentences: [{ japanese: "黒い猫がいます。", reading: "くろい ねこが います。", meaning: "There is a black cat. / একটি কালো বিড়াল আছে।" }], lesson: 4 },

    // --- LESSON 5 ---
    { id: "N4K041", kanji: "映", meaning: "to reflect, projection / প্রতিবিম্বিত করা, চলচ্চিত্র", kunyomi: ["うつ.す", "うつ.る"], onyomi: ["エイ"], vocabulary: [{ word: "映す", reading: "うつす", meaning: "to reflect / প্রতিবিম্বিত করা" }, { word: "映画", reading: "えいが", meaning: "movie / চলচ্চিত্র" }, { word: "映画館", reading: "えいがかん", meaning: "movie theater / সিনেমা থিয়েটার" }], sentences: [{ japanese: "日曜日には映画を見ます。", reading: "にちようびには えいがを みます。", meaning: "I watch movies on Sundays. / রবিবারে সিনেমা দেখি।" }], lesson: 5 },
    { id: "N4K042", kanji: "画", meaning: "picture, stroke / চিত্র, পরিকল্পনা, চিত্রকর", kunyomi: ["え"], onyomi: ["ガ", "カク"], vocabulary: [{ word: "計画", reading: "けいかく", meaning: "plan / পরিকল্পনা" }, { word: "画家", reading: "がか", meaning: "painter / চিত্রকর" }, { word: "日本画", reading: "にほんが", meaning: "Japanese painting / জাপানিজ পেইন্টিং" }], sentences: [{ japanese: "来週の旅行の計画を立てます。", reading: "らいしゅうの りょこうの けいかくを たてます。", meaning: "I will make plans for next week's trip. / আগামী সপ্তাহের ভ্রমণের পরিকল্পনা করব।" }], lesson: 5 },
    { id: "N4K043", kanji: "音", meaning: "sound / শব্দ, উচ্চারণ", kunyomi: ["おと"], onyomi: ["オン"], vocabulary: [{ word: "音", reading: "おと", meaning: "sound / শব্দ" }, { word: "発音", reading: "はつおん", meaning: "pronunciation / উচ্চারণ" }, { word: "高音", reading: "こうおん", meaning: "high note / উচ্চ নোট" }], sentences: [{ japanese: "変な音が聞こえます。", reading: "へんな おとが きこえます。", meaning: "I hear a strange sound. / একটি অদ্ভুত শব্দ শুনতে পাচ্ছি।" }], lesson: 5 },
    { id: "N4K044", kanji: "楽", meaning: "music, comfort, ease / উপভোগ্য, সঙ্গীত, সহজ", kunyomi: ["たの.しい"], onyomi: ["ガク", "ラク"], vocabulary: [{ word: "楽しい", reading: "たのしい", meaning: "enjoyable / উপভোগ্য" }, { word: "音楽", reading: "おんがく", meaning: "music / সঙ্গীত" }, { word: "楽な", reading: "らくな", meaning: "easy / সহজ, আরামদায়ক" }], sentences: [{ japanese: "音楽を聞きながら勉強します。", reading: "おんがくを ききながら べんきょうします。", meaning: "I study while listening to music. / গান শুনতে শুনতে পড়াশোনা করি।" }], lesson: 5 },
    { id: "N4K045", kanji: "歌", meaning: "song, to sing / গান, গান গাওয়া", kunyomi: ["うた", "うた.う"], onyomi: ["カ"], vocabulary: [{ word: "歌う", reading: "うたう", meaning: "to sing / গান গাওয়া" }, { word: "歌手", reading: "かしゅ", meaning: "singer / সঙ্গীত শিল্পী" }], sentences: [{ japanese: "彼は上手に歌を歌います。", reading: "かれは じょうずに うたを うたいます。", meaning: "He sings songs very well. / সে সুন্দরভাবে গান গায়।" }], lesson: 5 },
    { id: "N4K046", kanji: "写", meaning: "copy, photograph / ছবি, নকল করা", kunyomi: ["うつ.す", "うつ.る"], onyomi: ["シャ"], vocabulary: [{ word: "写真", reading: "しゃしん", meaning: "a photograph / ছবি" }, { word: "写す", reading: "う写す / うつす", meaning: "to copy / প্রতিপিলি তৈরি করা/নকল করা" }], sentences: [{ japanese: "ここで写真を撮らないでください。", reading: "ここで しゃしんを とらないで ください。", meaning: "Please do not take pictures here. / এখানে ছবি তুলবেন না।" }], lesson: 5 },
    { id: "N4K047", kanji: "真", meaning: "true, pure / মাঝামঝি, বিশুদ্ধ", kunyomi: ["ま", "まっ"], onyomi: ["シン"], vocabulary: [{ word: "真ん中", reading: "まんなか", meaning: "midmost / মাঝামঝি" }, { word: "真っ白", reading: "まっしろ", meaning: "pure white / ধবধবে সাদা" }, { word: "真実", reading: "しんじつ", meaning: "truth / সত্য" }], sentences: [{ japanese: "部屋の真ん中に机を置きます。", reading: "へやの まんなかに つくえを おきます。", meaning: "I will place the desk in the middle of the room. / ঘরের মাঝখানে টেবিল রাখব।" }], lesson: 5 },
    { id: "N4K048", kanji: "旅", meaning: "trip, travel / ভ্রমণ, জাপানি হোটেল", kunyomi: ["たび"], onyomi: ["リョ"], vocabulary: [{ word: "旅行する", reading: "りょこうする", meaning: "to take a trip / ভ্রমণ করা" }, { word: "旅館", reading: "りょかん", meaning: "Japanese-style hotel / জাপানিজ স্টাইল হোটেল" }, { word: "旅", reading: "たび", meaning: "trip / ভ্রমণ" }], sentences: [{ japanese: "来月、京都へ旅行します。", reading: "らいげつ、きょうとへ りょこうします。", meaning: "Next month, I will travel to Kyoto. / আগামী মাসে কিয়োটোতে ভ্রমণ করব।" }], lesson: 5 },
    { id: "N4K049", kanji: "世", meaning: "world, society, generation / পৃথিবী, সমাজ, শতাব্দী", kunyomi: ["せかい", "よ"], onyomi: ["セ", "セイ"], vocabulary: [{ word: "世話をする", reading: "せわをする", meaning: "to take care of / যত্ন নেওয়া" }, { word: "世の中", reading: "よのなか", meaning: "world, society / পৃথিবী, সমাজ" }, { word: "21世紀", reading: "にじゅういっせいき", meaning: "21st century / ২১ শতক" }], sentences: [{ japanese: "子供の世話をします。", reading: "こどもの せわを します。", meaning: "I take care of the children. / বাচ্চার যত্ন নিই।" }], lesson: 5 },
    { id: "N4K050", kanji: "界", meaning: "world / পৃথিবী, জগৎ", kunyomi: [], onyomi: ["カイ"], vocabulary: [{ word: "世界", reading: "せかい", meaning: "world / পৃথিবী" }, { word: "政界", reading: "せいかい", meaning: "political world / রাজনৈতিক জগৎ" }], sentences: [{ japanese: "世界にはいろいろな国があります。", reading: "せかいには いろいろな くにが あります。", meaning: "There are various countries in the world. / পৃথিবীতে বিভিন্ন দেশ রয়েছে।" }], lesson: 5 },

    // --- LESSON 6 ---
    { id: "N4K051", kanji: "仕", meaning: "attend, doing / চাকরি, উপায় নেই", kunyomi: ["つか.える"], onyomi: ["シ"], vocabulary: [{ word: "仕事", reading: "しごと", meaning: "job / চাকরি, কাজ" }, { word: "仕方がない", reading: "しかたがない", meaning: "there is no choice / উপায় নেই" }], sentences: [{ japanese: "明日は仕事があります。", reading: "あしたは しごとが あります。", meaning: "I have work tomorrow. / কাল আমার কাজ আছে।" }], lesson: 6 },
    { id: "N4K052", kanji: "事", meaning: "thing, matter, business / ব্যাপার, ব্যবসা, গুরুত্বপূর্ণ", kunyomi: ["こと"], onyomi: ["ジ"], vocabulary: [{ word: "火事", reading: "かじ", meaning: "fire / আগুন" }, { word: "用事", reading: "ようじ", meaning: "business / কাজ, জরুরি ব্যাপার" }, { word: "大事な", reading: "だいじな", meaning: "important / গুরুত্বপূর্ণ" }, { word: "こと", reading: "こと", meaning: "matter / ব্যাপার, বিষয়" }], sentences: [{ japanese: "午後に大事な用事があります。", reading: "ごごに だいじな ようじが あります。", meaning: "I have important business in the afternoon. / বিকেলে আমার একটি জরুরি কাজ আছে।" }], lesson: 6 },
    { id: "N4K053", kanji: "銀", meaning: "silver / রূপা, ব্যাংক", kunyomi: [], onyomi: ["ギン"], vocabulary: [{ word: "銀行", reading: "ぎんこう", meaning: "bank / ব্যাংক" }, { word: "銀", reading: "ぎん", meaning: "silver / রূপা" }, { word: "銀座", reading: "ぎんざ", meaning: "Ginza (place) / গিনজা (জায়গার নাম)" }], sentences: [{ japanese: "銀行でお金を借ります。", reading: "ぎんこうで おかねを かります。", meaning: "I borrow money at the bank. / ব্যাংক থেকে টাকা ধার নিই।" }], lesson: 6 },
    { id: "N4K054", kanji: "員", meaning: "member, employee / সদস্য, কর্মকর্তা, কেরানি", kunyomi: [], onyomi: ["イン"], vocabulary: [{ word: "会社員", reading: "かいしゃいん", meaning: "employee of a company / কোম্পানি কর্মকর্তা" }, { word: "銀行員", reading: "ぎんこういん", meaning: "bank clerk / ব্যাংক কর্মকর্তা" }, { word: "店員", reading: "てんいん", meaning: "clerk / কেরানি, দোকানকর্মী" }, { word: "会員", reading: "かいいん", meaning: "membership / সদস্যপদ" }], sentences: [{ japanese: "彼は会社員です。", reading: "かれは かいしゃいん です。", meaning: "He is a company employee. / সে একজন কোম্পানির চাকরিজীবী।" }], lesson: 6 },
    { id: "N4K055", kanji: "医", meaning: "doctor, medicine / ডাক্তার, চিকিৎসা বিজ্ঞান", kunyomi: [], onyomi: ["イ"], vocabulary: [{ word: "医者", reading: "いしゃ", meaning: "doctor / ডাক্তার" }, { word: "医学", reading: "いがく", meaning: "medical science / চিকিৎসা বিজ্ঞান" }, { word: "医院", reading: "いいん", meaning: "doctor's office / ক্লিনিক" }], sentences: [{ japanese: "医者に診てもらいます。", reading: "いしゃに みて もらいます。", meaning: "I will have a doctor examine me. / ডাক্তারের কাছ থেকে পরীক্ষা করাবো।" }], lesson: 6 },
    { id: "N4K056", kanji: "者", meaning: "person / ব্যক্তি, পেশাজীবী", kunyomi: ["もの"], onyomi: ["シャ"], vocabulary: [{ word: "歯医者", reading: "はいしゃ", meaning: "dentist / দাঁতের ডাক্তার" }, { word: "学者", reading: "がくしゃ", meaning: "scholar / পণ্ডিত, জ্ঞানী" }, { word: "作者", reading: "さくしゃ", meaning: "author / লেখক" }], sentences: [{ japanese: "彼は有名な学者です。", reading: "かれは ゆうめいな がくしゃです。", meaning: "He is a famous scholar. / তিনি একজন বিখ্যাত পণ্ডিত।" }], lesson: 6 },
    { id: "N4K057", kanji: "働", meaning: "to work / কাজ করা, শ্রমিক", kunyomi: ["はたら.く"], onyomi: ["ドウ"], vocabulary: [{ word: "働く", reading: "はたらく", meaning: "to work / কাজ করা" }, { word: "労働者", reading: "ろうどうしゃ", meaning: "laborer, worker / শ্রমিক" }], sentences: [{ japanese: "毎日会社で働きます。", reading: "まいにち かいしゃで はたらきます。", meaning: "I work at the company every day. / আমি প্রতিদিন কোম্পানিতে কাজ করি।" }], lesson: 6 },
    { id: "N4K058", kanji: "屋", meaning: "shop, roof, room / ঘরের ছাদ, দোকান, ঘর", kunyomi: ["や"], onyomi: ["オク"], vocabulary: [{ word: "本屋", reading: "ほんや", meaning: "bookstore / বইয়ের দোকান" }, { word: "屋上", reading: "おくじょう", meaning: "roof, housetop / ছাদ, ঘরের ছাদ" }, { word: "八百屋", reading: "やおや", meaning: "grocery / মুদি দোকান" }, { word: "部屋", reading: "へや", meaning: "room / ঘর" }], sentences: [{ japanese: "本屋で本を買います。", reading: "ほんやで ほんを かいます。", meaning: "I buy books at the bookstore. / বইয়ের দোকান থেকে বই কিনি।" }], lesson: 6 },
    { id: "N4K059", kanji: "産", meaning: "give birth, produce, property / জন্ম দেওয়া, উৎপাদন করা, সম্পত্তি", kunyomi: ["う.む"], onyomi: ["サン"], vocabulary: [{ word: "産む", reading: "うむ", meaning: "to give birth / জন্ম দেওয়া" }, { word: "生産する", reading: "せいさんする", meaning: "to produce / উৎপাদন করা" }, { word: "財産", reading: "ざいさん", meaning: "fortune / সম্পত্তি" }], sentences: [{ japanese: "猫が子犬を産みました。", reading: "ねこが こいぬを うみました。", meaning: "The cat gave birth to puppies. [Note: typo in translation context, usually kittens] / বিড়ালটি বাচ্চা প্রসব করেছে।" }], lesson: 6 },
    { id: "N4K060", kanji: "業", meaning: "industry, business, class / শিল্প, উৎপাদন, ক্লাস, বন্ধ", kunyomi: ["わざ"], onyomi: ["ギョウ"], vocabulary: [{ word: "産業", reading: "さんぎょう", meaning: "industry / শিল্প" }, { word: "工業", reading: "こうぎょう", meaning: "manufacture / উৎপাদন, শিল্প" }, { word: "授業", reading: "じゅぎょう", meaning: "class, lesson / ক্লাস, পাঠ" }, { word: "本日休業", reading: "ほんじつきゅうぎょう", meaning: "closed today / আজ বন্ধ" }], sentences: [{ japanese: "午後は授業があります。", reading: "ごごは じゅぎょうが あります。", meaning: "There is a class in the afternoon. / বিকেলে ক্লাস আছে।" }], lesson: 6 },

    // --- LESSON 7 ---
    { id: "N4K061", kanji: "林", meaning: "wood, grove / কাঠ, উদ্যান, বন", kunyomi: ["はやし"], onyomi: ["リン"], vocabulary: [{ word: "林", reading: "はやし", meaning: "wood, grove / কাঠ, উদ্যান" }, { word: "小林さん", reading: "こばやしさん", meaning: "Mr. or Ms. Kobayashi / কোবায়াসী" }, { word: "林道", reading: "りんどう", meaning: "forest road / বন রাস্তা" }], sentences: [{ japanese: "林の中を歩きます。", reading: "はやしの なかを あるきます。", meaning: "I walk through the woods. / বনের ভেতর দিয়ে হাঁটি।" }], lesson: 7 },
    { id: "N4K062", kanji: "森", meaning: "forest / বন, জঙ্গল", kunyomi: ["もり"], onyomi: ["シン"], vocabulary: [{ word: "森", reading: "もり", meaning: "forest / বন" }, { word: "森さん", reading: "もりさん", meaning: "Mr. or Ms. Mori / মি. ও মিস. মোরি" }, { word: "森林", reading: "しんりん", meaning: "forest / বন" }], sentences: [{ japanese: "大きな森があります。", reading: "おおきな もりが あります。", meaning: "There is a big forest. / একটি বড় বন আছে।" }], lesson: 7 },
    { id: "N4K063", kanji: "地", meaning: "earth, ground, land / মানচিত্র, পাতাল রেল, ভূমি, ভূমিকম্প", kunyomi: [], onyomi: ["ジ", "チ"], vocabulary: [{ word: "地図", reading: "ちず", meaning: "map / মানচিত্র" }, { word: "地下鉄", reading: "ちかてつ", meaning: "subway / পাতাল রেল" }, { word: "土地", reading: "とち", meaning: "land / জমি" }, { word: "地震", reading: "じしん", meaning: "earthquake / ভূমিকম্প" }], sentences: [{ japanese: "地下鉄で会社へ行きます。", reading: "ちかてつで かいしゃへ いきます。", meaning: "I go to the company by subway. / পাতাল রেলে করে কোম্পানিতে যাই।" }], lesson: 7 },
    { id: "N4K064", kanji: "池", meaning: "pond, battery / পুকুর, ব্যাটারি", kunyomi: ["いけ"], onyomi: ["チ"], vocabulary: [{ word: "池", reading: "いけ", meaning: "pond / পুকুর" }, { word: "電池", reading: "でんち", meaning: "battery / ব্যাটারি" }], sentences: [{ japanese: "池に魚がいます。", reading: "いけに さかなが います。", meaning: "There are fish in the pond. / পুকুরে মাছ আছে।" }], lesson: 7 },
    { id: "N4K065", kanji: "海", meaning: "sea, ocean / সমুদ্র, বিদেশ, হোক্কাইডো", kunyomi: ["うみ"], onyomi: ["カイ"], vocabulary: [{ word: "海", reading: "うみ", meaning: "the sea, the ocean / সমুদ্র" }, { word: "海外", reading: "かいがい", meaning: "overseas / বিদেশ" }, { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido / হোক্কাইডো" }], sentences: [{ japanese: "夏休みに海へ行きます。", reading: "なつやすみに うみへ いきます。", meaning: "I will go to the sea during summer vacation. / গ্রীষ্মের ছুটিতে সমুদ্রে যাব।" }], lesson: 7 },
    { id: "N4K066", kanji: "洋", meaning: "ocean, western style / পশ্চিম, পূর্ব, পোশাক, আটলান্টিক মহাসাগর", kunyomi: [], onyomi: ["ヨウ"], vocabulary: [{ word: "西洋", reading: "せいよう", meaning: "the West / পশ্চিম" }, { word: "東洋", reading: "とうよう", meaning: "the East / পূর্ব" }, { word: "洋服", reading: "ようふく", meaning: "clothes / পোশাক" }, { word: "大西洋", reading: "たいせいよう", meaning: "the Atlantic (Ocean) / আটলান্টিক (মহাসাগর)" }], sentences: [{ japanese: "洋服を買いました。", reading: "ようふくを かいました。", meaning: "I bought western clothes. / পশ্চিমা পোশাক কিনেছি।" }], lesson: 7 },
    { id: "N4K067", kanji: "雪", meaning: "snow / তুষার, ভারী তুষার, তাজা তুষার", kunyomi: ["ゆき"], onyomi: ["セツ"], vocabulary: [{ word: "雪", reading: "ゆき", meaning: "snow / তুষার" }, { word: "大雪", reading: "おおゆき", meaning: "heavy snow / ভারী তুষার" }, { word: "新雪", reading: "しんせつ", meaning: "fresh snow / তাজা তুষার" }], sentences: [{ japanese: "冬に雪が降ります。", reading: "ふゆに ゆきが ふります。", meaning: "It snows in winter. / শীতে বরফ পড়ে।" }], lesson: 7 },
    { id: "N4K068", kanji: "光", meaning: "light, to shine / আলো, জ্বলজ্বলে, সূর্যের আলো, দর্শনীয় স্থান", kunyomi: ["ひかり", "ひか.る"], onyomi: ["コウ"], vocabulary: [{ word: "光", reading: "ひかり", meaning: "light / আলো" }, { word: "光る", reading: "ひかる", meaning: "to shine / জ্বলজ্বল করা" }, { word: "日光", reading: "にっこう", meaning: "sunlight / সূর্যের আলো (নিক্কো স্থান)" }, { word: "観光", reading: "かんこう", meaning: "sightseeing / দর্শনীয় স্থান, ভ্রমণ" }], sentences: [{ japanese: "星が光っています。", reading: "ほしが ひかっています。", meaning: "The stars are shining. / তারাগুলো জ্বলজ্বল করছে।" }], lesson: 7 },
    { id: "N4K069", kanji: "台", meaning: "table, counter for machines / টেবিল, রান্নাঘর, ফাউেন্ডেশন, যন্ত্রপাতির একক", kunyomi: [], onyomi: ["ダイ", "タイ"], vocabulary: [{ word: "台", reading: "だい", meaning: "table / টেবিল" }, { word: "台所", reading: "だいどころ", meaning: "kitchen / রান্নাঘর" }, { word: "~台", reading: "~だい", meaning: "counter for machines / যন্ত্রপাতির গণনার একক" }, { word: "土台", reading: "どだい", meaning: "foundation / ফাউেন্ডেশন" }], sentences: [{ japanese: "車が三台あります。", reading: "くるまが さんだい あります。", meaning: "There are three cars. / তিনটি গাড়ি আছে।" }], lesson: 7 },
    { id: "N4K070", kanji: "風", meaning: "wind, style, scenery / বাতাস, টাইফুন, পশ্চিমা স্টাইল, দৃশ্য", kunyomi: ["かぜ"], onyomi: ["フウ", "フ"], vocabulary: [{ word: "風", reading: "かぜ", meaning: "wind / বাতাস" }, { word: "台風", reading: "たいふう", meaning: "typhoon / টাইফুন" }, { word: "洋風", reading: "ようふう", meaning: "western style / পশ্চিমা স্টাইল" }, { word: "風景", reading: "ふうけい", meaning: "scenery / দৃশ্য" }], sentences: [{ japanese: "今日は風が強いです。", reading: "きょうは かぜが つよいです。", meaning: "The wind is strong today. / আজ বাতাস প্রবল।" }], lesson: 7 },

    // --- LESSON 8 ---
    { id: "N4K071", kanji: "季", meaning: "season / ঋতু", kunyomi: [], onyomi: ["キ"], vocabulary: [{ word: "四季", reading: "しき", meaning: "four seasons / চার ঋতু" }, { word: "季節", reading: "きせつ", meaning: "seasons / ঋতু" }], sentences: [{ japanese: "日本の四季は美しいです。", reading: "にほんの しきは うつくしいです。", meaning: "The four seasons of Japan are beautiful. / জাপানের চার ঋতু সুন্দর।" }], lesson: 8 },
    { id: "N4K072", kanji: "節", meaning: "season, node, period / ঋতু, শীতের ঐতিহ্যগত দিন, সিসবুন", kunyomi: ["ふし"], onyomi: ["セツ"], vocabulary: [{ word: "季節", reading: "きせつ", meaning: "season / ঋতু" }, { word: "節分", reading: "せつぶん", meaning: "The traditional end of winter / শীতের ঐতিহ্যগত দিন, সিসবুন" }], sentences: [{ japanese: "春の季節が好きです。", reading: "はるの きせつが すきです。", meaning: "I like the spring season. / আমি বসন্ত ঋতু পছন্দ করি।" }], lesson: 8 },
    { id: "N4K073", kanji: "春", meaning: "spring / বসন্ত, তরুণ/যুবক", kunyomi: ["はる"], onyomi: ["シュン"], vocabulary: [{ word: "春", reading: "はる", meaning: "spring / বসন্ত" }, { word: "青春", reading: "せいしゅん", meaning: "youth / তরুণ/যুবক, ইয়াং" }], sentences: [{ japanese: "春になると花が咲きます。", reading: "はるになると はなが さきます。", meaning: "When spring comes, flowers bloom. / বসন্ত এলে ফুল ফোটে।" }], lesson: 8 },
    { id: "N4K074", kanji: "夏", meaning: "summer / গ্রীষ্ম, গ্রীষ্মের ছুটি, উৎসব, পোশাক", kunyomi: ["なつ"], onyomi: ["カ"], vocabulary: [{ word: "夏", reading: "なつ", meaning: "summer / গ্রীষ্ম" }, { word: "夏休み", reading: "なつやすみ", meaning: "summer holidays / গ্রীষ্মের ছুটি" }, { word: "夏まつり", reading: "なつまつり", meaning: "summer festival / গ্রীষ্মের উৎসব" }, { word: "夏服", reading: "なつふく", meaning: "summer clothes / গ্রীষ্মের পোশাক" }], sentences: [{ japanese: "今年の夏は暑いです。", reading: "ことしの なつは あついです。", meaning: "This summer is hot. / এবারের গ্রীষ্ম গরম।" }], lesson: 8 },
    { id: "N4K075", kanji: "秋", meaning: "autumn / শরৎকাল, আকিতা প্রিফেকচার, শারদীয় বিষुব দিন", kunyomi: ["あき"], onyomi: ["シュウ"], vocabulary: [{ word: "秋", reading: "あき", meaning: "autumn / শরৎকাল" }, { word: "秋田県", reading: "あきたけん", meaning: "Akita Prefecture / আকিতা প্রিফেকচার" }, { word: "秋分の日", reading: "しゅうぶんのひ", meaning: "Autumnal Equinox Day / শারদীয় বিষুব দিন" }], sentences: [{ japanese: "秋は過ごしやすいです。", reading: "あきは すごしやすいです。", meaning: "Autumn is easy to spend time in. / শরৎকাল কাটানোর জন্য বেশ আরামদায়ক।" }], lesson: 8 },
    { id: "N4K076", kanji: "冬", meaning: "winter / শীত, শীতের ছুটি, চার ঋতু", kunyomi: ["ふゆ"], onyomi: ["トウ"], vocabulary: [{ word: "冬", reading: "ふゆ", meaning: "winter / শীত" }, { word: "冬休み", reading: "ふゆやすみ", meaning: "winter holidays / শীতের ছুটি" }, { word: "春夏秋冬", reading: "しゅんかしゅうとう", meaning: "Spring, summer, autumn, winter / বসন্ত, গ্রীষ্ম, শরৎ এবং শীত" }], sentences: [{ japanese: "冬は寒いです。", reading: "ふゆは さむいです。", meaning: "Winter is cold. / শীতকাল ঠান্ডা।" }], lesson: 8 },
    { id: "N4K077", kanji: "暑", meaning: "hot / গরম, গ্রীষ্মের শেষের দিকের তাপ", kunyomi: ["あつ.い"], onyomi: ["ショ"], vocabulary: [{ word: "暑い", reading: "あつい", meaning: "hot / গরম" }, { word: "残暑", reading: "ざんしょ", meaning: "late-summer heat / গ্রীষ্মের শেষের দিকের তাপ" }], sentences: [{ japanese: "今日はとても暑いです。", reading: "きょうは とても あついです。", meaning: "Today is very hot. / আজ খুব গরম।" }], lesson: 8 },
    { id: "N4K078", kanji: "寒", meaning: "cold / ঠান্ডা, শৈত্যপ্রবাহ", kunyomi: ["さむ.い"], onyomi: ["サン"], vocabulary: [{ word: "寒い", reading: "さむい", meaning: "cold / ঠান্ডা" }, { word: "寒波", reading: "かんば", meaning: "cold wave / শৈত্যপ্রবাহ" }], sentences: [{ japanese: "部屋の中も寒いです。", reading: "へやの なかも さむいです。", meaning: "Inside the room is also cold. / ঘরের ভিতরটাও ঠান্ডা।" }], lesson: 8 },
    { id: "N4K079", kanji: "暖", meaning: "warm / গরম, উষ্ণ শীত, হিটিং, উষ্ণায়ন", kunyomi: ["あたた.かい"], onyomi: ["ダン"], vocabulary: [{ word: "暖かい", reading: "あたたかい", meaning: "warm / গরম, উষ্ণ" }, { word: "暖冬", reading: "だんとう", meaning: "warm winter / উষ্ণ শীত" }, { word: "暖房", reading: "だんぼう", meaning: "heating / গরম (হিটিং)" }, { word: "温暖化", reading: "おんだんか", meaning: "warming / উষ্ণায়ন" }], sentences: [{ japanese: "春は暖かいです。", reading: "はるは あたたかいです。", meaning: "Spring is warm. / বসন্তকাল উষ্ণ।" }], lesson: 8 },
    { id: "N4K080", kanji: "涼", meaning: "cool / ঠান্ডা, শীতল বাতাস", kunyomi: ["すず.しい"], onyomi: ["リョウ"], vocabulary: [{ word: "涼しい", reading: "すずしい", meaning: "cool / ঠান্ডা, শীতল" }, { word: "涼風", reading: "りょうふう", meaning: "cool breeze / শীতল বাতাস" }], sentences: [{ japanese: "秋風が涼しいです。", reading: "あきかぜが すずしいです。", meaning: "The autumn breeze is cool. / শরতের বাতাস শীতল।" }], lesson: 8 },

    // --- LESSON 9 ---
    { id: "N4K081", kanji: "体", meaning: "body / শরীর", kunyomi: ["からだ"], onyomi: ["タイ"], vocabulary: [{ word: "体", reading: "からだ", meaning: "body / শরীর" }, { word: "体力", reading: "たいりょく", meaning: "physical strength / শারীরিক শক্তি" }, { word: "体重", reading: "たいじゅう", meaning: "body weight / শরীরের ওজন" }], sentences: [{ japanese: "体を鍛えます。", reading: "からだを きたえます。", meaning: "I train my body. / আমি শরীর গঠন করি।" }], lesson: 9 },
    { id: "N4K082", kanji: "頭", meaning: "head / মাথা", kunyomi: ["あたま"], onyomi: ["ズ"], vocabulary: [{ word: "頭", reading: "あたま", meaning: "head / মাথা" }, { word: "頭がいい", reading: "あたまがいい", meaning: "smart / স্মার্ট, বুদ্ধিমান" }, { word: "頭痛", reading: "ずつう", meaning: "headache / মাথাব্যথা" }], sentences: [{ japanese: "頭が痛いです。", reading: "あたまが いたいです。", meaning: "I have a headache. / আমার মাথা ব্যথা করছে।" }], lesson: 9 },
    { id: "N4K083", kanji: "顔", meaning: "face / মুখ, চেহারা", kunyomi: ["かお"], onyomi: ["ガン"], vocabulary: [{ word: "顔", reading: "かお", meaning: "face / মুখ" }, { word: "顔色", reading: "かおいろ", meaning: "complexion / রূপ / চেহারা" }], sentences: [{ japanese: "顔を洗います。", reading: "かおを あらいます。", meaning: "I wash my face. / আমি মুখ ধুই।" }], lesson: 9 },
    { id: "N4K084", kanji: "首", meaning: "neck, capital, wrist / ঘাড়, রাজধানী, কবজি, প্রধানমন্ত্রী", kunyomi: ["くび"], onyomi: ["シュ"], vocabulary: [{ word: "首", reading: "くび", meaning: "neck / ঘাড়" }, { word: "首都", reading: "しゅと", meaning: "capital / রাজধানী" }, { word: "手首", reading: "てくび", meaning: "wrist / কবজি" }, { word: "首相", reading: "しゅしょう", meaning: "Prime Minister / প্রধানমন্ত্রী" }], sentences: [{ japanese: "首が痛いです。", reading: "くびが いたいです。", meaning: "My neck hurts. / আমার ঘাড় ব্যথা করছে।" }], lesson: 9 },
    { id: "N4K085", kanji: "心", meaning: "heart, mind / হৃদয়, কেন্দ্র", kunyomi: ["こころ"], onyomi: ["シン"], vocabulary: [{ word: "心", reading: "こころ", meaning: "heart / হৃদয়" }, { word: "安心する", reading: "あんしんする", meaning: "to be relieved / নিরাপদ বোধ / মুক্ত হওয়া" }, { word: "心配する", reading: "しんぱいする", meaning: "to worry / দুশ্চিন্তা করা" }, { word: "中心", reading: "ちゅうしん", meaning: "center / কেন্দ্র" }], sentences: [{ japanese: "親の事を心配します。", reading: "おやの ことを しんぱいします。", meaning: "I worry about my parents. / আমি মা-বাবাকে নিয়ে দুশ্চিন্তা করি।" }], lesson: 9 },
    { id: "N4K086", kanji: "声", meaning: "voice / কণ্ঠ, উচ্চস্বর", kunyomi: ["こえ"], onyomi: ["セイ"], vocabulary: [{ word: "声", reading: "こえ", meaning: "voice / কণ্ঠ" }, { word: "大声", reading: "おおごえ", meaning: "loud voice / উচ্চস্বর" }], sentences: [{ japanese: "大きな声で話します。", reading: "おおきな こえで はなします。", meaning: "I speak in a loud voice. / আমি উচ্চস্বরে কথা বলি।" }], lesson: 9 },
    { id: "N4K087", kanji: "病", meaning: "illness, sick / অসুস্থতা, হাসপাতাল, হঠাৎ অসুস্থতা", kunyomi: ["やまい"], onyomi: ["ビョウ"], vocabulary: [{ word: "病気", reading: "びょうき", meaning: "illness / অসুস্থতা" }, { word: "病院", reading: "びょういん", meaning: "hospital / হাসপাতাল" }, { word: "病人", reading: "びょうにん", meaning: "sick person / অসুস্থ ব্যক্তি" }, { word: "急病", reading: "きゅうびょう", meaning: "sudden illness / হঠাৎ অসুস্থতা" }], sentences: [{ japanese: "病気で学校を休みました。", reading: "びょうきで がっこうを やすみました。", meaning: "I was absent from school due to illness. / অসুস্থতার কারণে স্কুলে যাইনি।" }], lesson: 9 },
    { id: "N4K088", kanji: "薬", meaning: "medicine / ওষুধ, আই ড্রপ", kunyomi: ["くすり"], onyomi: ["ヤク"], vocabulary: [{ word: "薬", reading: "くすり", meaning: "medicine / ওষুধ" }, { word: "目薬", reading: "めぐすり", meaning: "eye lotion / চোখের ড্রপ" }, { word: "薬品", reading: "やくひん", meaning: "medicine / ওষুধপত্র" }], sentences: [{ japanese: "薬を飲みます。", reading: "くすりを のみます。", meaning: "I take medicine. / আমি ওষুধ খাই।" }], lesson: 9 },
    { id: "N4K089", kanji: "科", meaning: "department, course / বিজ্ঞান, সার্জারি, পাঠ্যপুস্তক", kunyomi: [], onyomi: ["カ"], vocabulary: [{ word: "科学", reading: "かがく", meaning: "science / বিজ্ঞান" }, { word: "教科書", reading: "きょうかしょ", meaning: "textbook / পাঠ্যবই" }, { word: "外科", reading: "げか", meaning: "surgery / সার্জারি বিভাগ" }, { word: "内科", reading: "ないか", meaning: "internal medicine / অভ্যন্তরীণ চিকিৎসা বিভাগ" }], sentences: [{ japanese: "学校で科学を勉強します。", reading: "がっこうで かがくを べんきょうします。", meaning: "I study science at school. / আমি স্কুলে বিজ্ঞান পড়ি।" }], lesson: 9 },
    { id: "N4K090", kanji: "内", meaning: "inside, inner / ভিতরে, অভ্যন্তরীণ, গাড়ি", kunyomi: ["うち"], onyomi: ["ナイ"], vocabulary: [{ word: "内", reading: "うち", meaning: "inside / ভিতরে" }, { word: "内側", reading: "うちがわ", meaning: "inside / অভ্যন্তরীণ দিক" }, { word: "車内", reading: "しゃない", meaning: "in the car / গাড়ির ভেতরে" }, { word: "案内する", reading: "あんないする", meaning: "to guide / পথ দেখানো" }], sentences: [{ japanese: "部屋の中に猫がいます。", reading: "へやの なかに ねこが います。", meaning: "There is a cat inside the room. / ঘরের ভেতরে একটি বিড়াল আছে।" }], lesson: 9 },

    // --- LESSON 10 ---
    { id: "N4K091", kanji: "朝", meaning: "morning / সকাল", kunyomi: ["あさ"], onyomi: ["チョウ"], vocabulary: [{ word: "朝", reading: "あさ", meaning: "morning / সকাল" }, { word: "今朝", reading: "けさ", meaning: "this morning / আজ সকাল" }, { word: "朝日", reading: "あさひ", meaning: "the morning sun / সকালের সূর্য" }, { word: "朝食", reading: "ちょうしょく", meaning: "breakfast / সকালের নাস্তা" }], sentences: [{ japanese: "毎朝、牛乳を飲みます。", reading: "まいあさ、ぎゅうにゅうを のみます。", meaning: "I drink milk every morning. / আমি প্রতিদিন সকালে দুধ পান করি।" }], lesson: 10 },
    { id: "N4K092", kanji: "昼", meaning: "noon, daytime / দুপুর, দুপুরের খাবার", kunyomi: ["ひる"], onyomi: ["チュウ"], vocabulary: [{ word: "昼", reading: "ひる", meaning: "noon / দুপুর" }, { word: "昼休み", reading: "ひるやすみ", meaning: "lunch break / দুপুরের খাবারের বিরতি" }, { word: "昼ご飯", reading: "ひるごはん", meaning: "lunch / দুপুরের খাবার" }, { word: "昼食", reading: "ちゅうしょく", meaning: "lunch / দুপুরের খাবার" }], sentences: [{ japanese: "昼ご飯を食べます。", reading: "ひるごはんを たべます。", meaning: "I eat lunch. / আমি দুপুরের খাবার খাই।" }], lesson: 10 },
    { id: "N4K093", kanji: "夜", meaning: "night / রাত", kunyomi: ["よる", "よ"], onyomi: ["ヤ"], vocabulary: [{ word: "夜", reading: "よる", meaning: "night / রাত" }, { word: "今夜", reading: "こんや", meaning: "tonight / আজ রাত" }, { word: "夜店", reading: "よみせ", meaning: "night stall / রাতের দোকান" }, { word: "夜食", reading: "やしょく", meaning: "bedtime snack / শোবার সময় জলখাবার" }], sentences: [{ japanese: "夜、テレビを見ます。", reading: "よる、てれびを みます。", meaning: "I watch TV at night. / আমি রাতে টিভি দেখি।" }], lesson: 10 },
    { id: "N4K094", kanji: "夕", meaning: "evening, sunset / সন্ধ্যা, সূর্যাস্ত", kunyomi: ["ゆうがた", "ゆう"], onyomi: ["セキ"], vocabulary: [{ word: "夕日", reading: "ゆうひ", meaning: "sunset / সূর্যাস্ত" }, { word: "夕食", reading: "ゆうしょく", meaning: "supper / রাতের খাবার" }, { word: "七夕", reading: "たなばた", meaning: "Star festival / তারকা উৎসব (তানাবাত্তা)" }], sentences: [{ japanese: "夕方、散歩します。", reading: "ゆうがた、さんぽします。", meaning: "I take a walk in the evening. / আমি সন্ধ্যায় হাঁটাহাঁটি করি।" }], lesson: 10 },
    { id: "N4K095", kanji: "方", meaning: "direction, person, method / পড়ার পদ্ধতি, সন্ধ্যা, এই ব্যক্তি, পদ্ধতি", kunyomi: ["ほう", "かた"], onyomi: ["ホウ"], vocabulary: [{ word: "読み方", reading: "よみかた", meaning: "how to read / পড়ার পদ্ধতি" }, { word: "夕方", reading: "ゆうがた", meaning: "evening / সন্ধ্যা" }, { word: "あの方", reading: "あのかた", meaning: "that person / এই ব্যক্তি / ঐ ব্যক্তি" }, { word: "方法", reading: "ほうほう", meaning: "method / পদ্ধতি" }], sentences: [{ japanese: "この漢字の読み方を教えてください。", reading: "この かんじの よみかたを おしえて ください。", meaning: "Please teach me how to read this kanji. / এই কান্জিটি পড়ার নিয়ম শিখিয়ে দিন।" }], lesson: 10 },
    { id: "N4K096", kanji: "晩", meaning: "evening, night / প্রতি রাত, রাতের খাবার", kunyomi: [], onyomi: ["バン"], vocabulary: [{ word: "毎晩", reading: "まいばん", meaning: "every night / প্রতি রাত" }, { word: "晩ご飯", reading: "ばんごはん", meaning: "dinner / রাতের খাবার" }], sentences: [{ japanese: "毎晩、日本語を勉強します。", reading: "まいばん、にほんごを べんきょうします。", meaning: "I study Japanese every night. / আমি প্রতি রাতে জাপানি ভাষা পড়ি।" }], lesson: 10 },
    { id: "N4K097", kanji: "計", meaning: "measure, plan / ঘড়ি, পরিকল্পনা, পরিমাপ করা, মোট", kunyomi: ["はか.る"], onyomi: ["ケイ"], vocabulary: [{ word: "時計", reading: "とけい", meaning: "watch, clock / ঘড়ি" }, { word: "計画", reading: "けいかく", meaning: "plan / পরিকল্পনা" }, { word: "計る", reading: "はかる", meaning: "to measure / পরিমাপ করা" }, { word: "合計", reading: "ごうけい", meaning: "total / মোট" }], sentences: [{ japanese: "新しい時計を買いました。", reading: "あたらしい とけいを かいました。", meaning: "I bought a new watch. / আমি একটি নতুন ঘড়ি কিনেছি।" }], lesson: 10 },
    { id: "N4K098", kanji: "曜", meaning: "day of the week / দিন, বার", kunyomi: [], onyomi: ["ヨウ"], vocabulary: [{ word: "日曜日", reading: "にちようび", meaning: "Sunday / রবিবার" }, { word: "水曜日", reading: "すいようび", meaning: "Wednesday / বুধবার" }, { word: "何曜日", reading: "なんようび", meaning: "what day of the week / সপ্তাহের কোন দিন" }], sentences: [{ japanese: "今日は何曜日ですか。", reading: "きょうは なんようび ですか。", meaning: "What day of the week is it today? / আজ কী বার?" }], lesson: 10 },
    { id: "N4K099", kanji: "以", meaning: "compared to, by means of / এর চেয়ে বেশি, এর চেয়ে কম, ছাড়া, পূর্বে", kunyomi: [], onyomi: ["イ"], vocabulary: [{ word: "以上", reading: "いじょう", meaning: "more than / এর চেয়ে বেশি" }, { word: "以下", reading: "いか", meaning: "less than / এর চেয়ে কম" }, { word: "以外", reading: "いがい", meaning: "except / ছাড়া" }, { word: "以前", reading: "いぜん", meaning: "previously / পূর্বে" }], sentences: [{ japanese: "10歳以上の子どもです。", reading: "じゅっさい いじょうの こどもです。", meaning: "Children 10 years old and above. / ১০ বছর বা তার বেশি বয়সি শিশু।" }], lesson: 10 },
    { id: "N4K100", kanji: "度", meaning: "times, degrees / একবার, পরবর্তী সময়, ২৫ ডিগ্রি, তাপমাত্রা", kunyomi: ["たび", "ど"], onyomi: ["ド"], vocabulary: [{ word: "一度", reading: "いちど", meaning: "once / একবার" }, { word: "今度", reading: "こんど", meaning: "next time / পরবর্তী সময়, অন্যসময়" }, { word: "25度", reading: "にじゅうごど", meaning: "25 degrees / ২৫ ডিগ্রি" }, { word: "温度", reading: "おんど", meaning: "temperature / তাপমাত্রা" }], sentences: [{ japanese: "もう一度言ってください。", reading: "もう いちど いって ください。", meaning: "Please say it once more. / আর একবার বলুন।" }], lesson: 10 },

    // --- LESSON 11 ---
    { id: "N4K101", kanji: "止", meaning: "to stop / থামা, বাতিল, বিরতি", kunyomi: ["と.まる", "と.める"], onyomi: ["シ"], vocabulary: [{ word: "止まる", reading: "とまる", meaning: "to stop / থামা" }, { word: "中止する", reading: "ちゅうしする", meaning: "to call off / বাতিল" }, { word: "一時停止", reading: "いちじていし", meaning: "stop sign / বিরতি, সাময়িক বিরতি" }], sentences: [{ japanese: "ここで車が止まります。", reading: "ここで くるまが とまります。", meaning: "The car stops here. / এখানে গাড়ি থামে।" }], lesson: 11 },
    { id: "N4K102", kanji: "歩", meaning: "to walk / হাঁটা, হাঁটাহাঁটি করা, উন্নতি করা, চৌরাস্তা", kunyomi: ["ある.く"], onyomi: ["ホ", "ポ"], vocabulary: [{ word: "歩く", reading: "あるく", meaning: "to walk / হাঁটা" }, { word: "散歩する", reading: "さんぽする", meaning: "to take a walk / হাঁটাহাঁটি করা" }, { word: "進歩する", reading: "しんぽする", meaning: "to make progress / উন্নতি করা" }, { word: "横断歩道", reading: "おうだんほどう", meaning: "crosswalk / চৌরাস্তা / জেব্রা ক্রসিং" }], sentences: [{ japanese: "公園を歩きます。", reading: "こうえんを あるきます。", meaning: "I walk in the park. / আমি পার্কে হাঁটি।" }], lesson: 11 },
    { id: "N4K103", kanji: "走", meaning: "to run / দৌড়ানো", kunyomi: ["はし.る"], onyomi: ["ソウ"], vocabulary: [{ word: "走る", reading: "はしる", meaning: "to run / দৌড়ানো" }, { word: "力走する", reading: "りきそうする", meaning: "to run as fast as possible / যথ 가능한 দ্রুত দৌড়ানো" }], sentences: [{ japanese: "グラウンドを走ります。", reading: "ぐらうんどを はしります。", meaning: "I run on the ground. / মাঠে দৌড়াই।" }], lesson: 11 },
    { id: "N4K104", kanji: "起", meaning: "to get up, wake up / ওঠা (ঘুম থেকে), ভোরে ঘুম থেকে ওঠা, উদ্যোক্তা", kunyomi: ["お.きる", "お.こる"], onyomi: ["キ"], vocabulary: [{ word: "起きる", reading: "おきる", meaning: "to get up / ওঠা (ঘুম থেকে)" }, { word: "早起き", reading: "はやおき", meaning: "early riser / ভোরে ঘুম থেকে ওঠা ব্যক্তি" }, { word: "起業家", reading: "きぎょうか", meaning: "entrepreneur / উদ্যোক্তা" }], sentences: [{ japanese: "毎朝六時に起きます。", reading: "まいあさ ろくじに おきます。", meaning: "I get up at 6 every morning. / প্রতিদিন সকালে ৬টায় উঠি।" }], lesson: 11 },
    { id: "N4K105", kanji: "持", meaning: "to hold, have / ধরে রাখা, অনুভূতি, জিনিসপত্র, সমর্থন করা", kunyomi: ["も.つ"], onyomi: ["ジ"], vocabulary: [{ word: "持つ", reading: "もつ", meaning: "to hold / ধরে রাখা" }, { word: "気持ち", reading: "きもち", meaning: "feeling / অনুভূতি" }, { word: "持ち物", reading: "もちもの", meaning: "belongings / জিনিসপত্র" }, { word: "支持する", reading: "しじする", meaning: "to support / সমর্থন করা" }], sentences: [{ japanese: "傘を持っています。", reading: "かさを もっています。", meaning: "I have an umbrella. / আমার কাছে ছাতা আছে।" }], lesson: 11 },
    { id: "N4K106", kanji: "待", meaning: "to wait / অপেক্ষা করা, মিলনস্থল, আমন্ত্রণ জানানো, প্রত্যাশা করা", kunyomi: ["ま.つ"], onyomi: ["タイ"], vocabulary: [{ word: "待つ", reading: "まつ", meaning: "to wait / অপেক্ষা করা" }, { word: "待ち合わせ", reading: "まちあわせ", meaning: "rendezvous / মিলনস্থল" }, { word: "招待する", reading: "しょうたいする", meaning: "to invite / আমন্ত্রণ জানানো" }, { word: "期待する", reading: "きたいする", meaning: "to hope / প্রত্যাশা করা" }], sentences: [{ japanese: "駅で友達を待っています。", reading: "えきで ともだちを まっています。", meaning: "I am waiting for a friend at the station. / স্টেশনে বন্ধুর জন্য অপেক্ষা করছি।" }], lesson: 11 },
    { id: "N4K107", kanji: "借", meaning: "to borrow / ধার নেওয়া, ঋণ", kunyomi: ["か.りる"], onyomi: ["シャク"], vocabulary: [{ word: "借りる", reading: "かりる", meaning: "to borrow / ধার নেওয়া" }, { word: "借金", reading: "しゃっきん", meaning: "debt / ঋণ" }], sentences: [{ japanese: "図書館で本を借ります。", reading: "としょかんで ほんを かります。", meaning: "I borrow books from the library. / লাইব্রেরি থেকে বই ধার নিই।" }], lesson: 11 },
    { id: "N4K108", kanji: "貸", meaning: "to lend / ধার দেওয়া, ভাড়া বাড়ি, ভাড়া করা অ্যাপার্টমেন্ট", kunyomi: ["か.す"], onyomi: ["タイ"], vocabulary: [{ word: "貸す", reading: "かす", meaning: "to lend / ধার দেওয়া" }, { word: "貸家", reading: "かしや", meaning: "house for rent / ভাড়া বাড়ি" }, { word: "賃貸マンション", reading: "ちんたいまんしょん", meaning: "rented apartment / ভাড়া করা অ্যাপার্টমেন্ট" }], sentences: [{ japanese: "友達に本を貸しました。", reading: "ともだちに ほんを かしました。", meaning: "I lent a book to my friend. / বন্ধুকে বই ধার দিয়েছি।" }], lesson: 11 },
    { id: "N4K109", kanji: "始", meaning: "to begin, start / শুরু, প্রথম ট্রেন", kunyomi: ["はじ.める", "はじ.まる"], onyomi: ["シ"], vocabulary: [{ word: "始まる", reading: "はじまる", meaning: "to begin / শুরু" }, { word: "開始する", reading: "かいしする", meaning: "to start / শুরু" }, { word: "始発", reading: "し発 / しはつ", meaning: "first train / প্রথম ট্রেন" }], sentences: [{ japanese: "授業が始まります。", reading: "じゅぎょうが はじまります.", meaning: "The class begins. / ক্লাস শুরু হয়।" }], lesson: 11 },
    { id: "N4K110", kanji: "終", meaning: "to end / শেষ, শেষ ট্রেন, শেষ পর্ব", kunyomi: ["お.わる"], onyomi: ["シュウ"], vocabulary: [{ word: "終わる", reading: "おわる", meaning: "to end / শেষ" }, { word: "終電", reading: "しゅうでん", meaning: "last train / শেষ ট্রেন" }, { word: "最終回", reading: "さいしゅうかい", meaning: "final episode / শেষ পর্ব" }], sentences: [{ japanese: "仕事が終わりました。", reading: "しごとが おわりました。", meaning: "Work has ended. / কাজ শেষ হয়েছে।" }], lesson: 11 },

    // --- LESSON 12 ---
    { id: "N4K111", kanji: "家", meaning: "house, family / বাড়ি, চিত্রকর, স্ত্রী, পরিবার", kunyomi: ["いえ", "や"], onyomi: ["カ", "ケ"], vocabulary: [{ word: "家", reading: "いえ", meaning: "house / বাড়ি" }, { word: "画家", reading: "がか", meaning: "painter / চিত্রকর" }, { word: "家内", reading: "かない", meaning: "wife / স্ত্রী" }, { word: "家庭", reading: "かてい", meaning: "family / পরিবার" }], sentences: [{ japanese: "私の家は大きいです。", reading: "わたしの いえは おおきいです。", meaning: "My house is big. / আমার বাড়িটি বড়।" }], lesson: 12 },
    { id: "N4K112", kanji: "族", meaning: "family, tribe / পরিবার, জাতিগোষ্ঠী, অ্যাকোয়ারিয়াম", kunyomi: [], onyomi: ["ゾク"], vocabulary: [{ word: "家族", reading: "かぞく", meaning: "family / পরিবার" }, { word: "民族", reading: "みんぞく", meaning: "race / জাতিগোষ্ঠী" }, { word: "水族館", reading: "すいぞくかん", meaning: "aquarium / অ্যাকোয়ারিয়াম" }], sentences: [{ japanese: "家族と東京に住んでいます。", reading: "かぞくと とうきょうに すんでいます。", meaning: "I live in Tokyo with my family. / পরিবারের সাথে টোকিওতে থাকি।" }], lesson: 12 },
    { id: "N4K113", kanji: "私", meaning: "I, private / আমি, প্রাইভেট বিশ্ববিদ্যালয়, ব্যক্তিগত জীবন", kunyomi: ["わたし", "わたくし"], onyomi: ["シ"], vocabulary: [{ word: "私", reading: "わたし / わたくし", meaning: "I / আমি" }, { word: "私立大学", reading: "しりつだいがく", meaning: "private university / প্রাইভেট বিশ্ববিদ্যালয়" }, { word: "私生活", reading: "しせいかつ", meaning: "private life / ব্যক্তিগত জীবন" }], sentences: [{ japanese: "私は学生です。", reading: "わたしは がくせいです。", meaning: "I am a student. / আমি একজন ছাত্র।" }], lesson: 12 },
    { id: "N4K114", kanji: "自", meaning: "self / নিজে, স্বয়ংক্রিয় দরজা, স্বাধীনতা, প্রকৃতি", kunyomi: ["じぶん", "みずか.ら"], onyomi: ["ジ", "シ"], vocabulary: [{ word: "自分", reading: "じぶん", meaning: "oneself / নিজে" }, { word: "自動ドア", reading: "じどうどあ", meaning: "automatic door / স্বয়ংক্রিয় দরজা" }, { word: "自由", reading: "じゆう", meaning: "freedom / স্বাধীনতা" }, { word: "自然", reading: "しぜん", meaning: "nature / প্রকৃতি" }], sentences: [{ japanese: "自分で宿題をします。", reading: "じぶんでき しゅくだいを します。", meaning: "I do my homework by myself. / নিজে নিজে হোমওয়ার্ক করি।" }], lesson: 12 },
    { id: "N4K115", kanji: "親", meaning: "parent, intimate / পিতা-মাতা, মা, দয়ালু, বন্ধুত্বপূর্ণ, কাছাকাছি", kunyomi: ["おや", "した.しい"], onyomi: ["シン"], vocabulary: [{ word: "親", reading: "おや", meaning: "parent / পিতা-মাতা" }, { word: "母親", reading: "ははおや", meaning: "mother / মা" }, { word: "親切な", reading: "しんせつな", meaning: "kind / দয়ালু" }, { word: "親しい", reading: "したしい", meaning: "close / বন্ধুত্বপূর্ণ, ঘনিষ্ঠ" }], sentences: [{ japanese: "親切な人に会いました。", reading: "しんせつな ひとに あいました。", meaning: "I met a kind person. / একজন দয়ালু মানুষের সাথে দেখা হলো।" }], lesson: 12 },
    { id: "N4K116", kanji: "両", meaning: "both / পিতা-মাতা, উভয়, উভয় হাত, টাকা বিনিময়", kunyomi: [], onyomi: ["リョウ"], vocabulary: [{ word: "両親", reading: "りょうしん", meaning: "parents / পিতা-মাতা" }, { word: "双方", reading: "りょうほう", meaning: "both / উভয়" }, { word: "両手", reading: "りょうて", meaning: "both hands / উভয় হাত" }, { word: "両替え", reading: "りょうがえ", meaning: "money exchange / টাকা বিনিময়" }], sentences: [{ japanese: "両親と旅行します。", reading: "りょうしんと りょこうします。", meaning: "I will travel with my parents. / বাবা-মায়ের সাথে ভ্রমণ করব।" }], lesson: 12 },
    { id: "N4K117", kanji: "兄", meaning: "older brother / বড় ভাই (নিজের ও অন্যের)", kunyomi: ["あに"], onyomi: ["ケイ", "キョウ"], vocabulary: [{ word: "兄", reading: "あに", meaning: "one's elder brother / (নিজের) বড় ভাই" }, { word: "お兄さん", reading: "おにいさん", meaning: "elder brother / (অন্যের) বড় ভাই" }], sentences: [{ japanese: "兄は会社員です。", reading: "あには かいしゃいんです。", meaning: "My older brother is a company employee. / আমার বড় ভাই কোম্পানির চাকরিজীবী।" }], lesson: 12 },
    { id: "N4K118", kanji: "弟", meaning: "younger brother / ছোট ভাই, ভাই-বোন", kunyomi: ["おとうと"], onyomi: ["ダイ", "デ"], vocabulary: [{ word: "弟", reading: "おとうと", meaning: "one's younger brother / (নিজের) ছোট ভাই" }, { word: "兄弟", reading: "きょうだい", meaning: "brothers / ভাই-বোন" }], sentences: [{ japanese: "弟は学生です。", reading: "おとうとは がくせいです。", meaning: "My younger brother is a student. / আমার ছোট ভাই একজন ছাত্র।" }], lesson: 12 },
    { id: "N4K119", kanji: "姉", meaning: "older sister / বড় বোন (নিজের ও অন্যের)", kunyomi: ["あね"], onyomi: ["シ"], vocabulary: [{ word: "姉", reading: "あね", meaning: "one's elder sister / (নিজের) বড় বোন" }, { word: "お姉さん", reading: "おねえさん", meaning: "elder sister / (অন্যের) বড় বোন" }], sentences: [{ japanese: "姉は医者です。", reading: "あねは いしゃです。", meaning: "My older sister is a doctor. / আমার বড় বোন একজন ডাক্তার।" }], lesson: 12 },
    { id: "N4K120", kanji: "妹", meaning: "younger sister / ছোট বোন, বোন, সিস্টার সিটি", kunyomi: ["いもうと"], onyomi: ["マイ"], vocabulary: [{ word: "妹", reading: "いもうと", meaning: "one's younger sister / (নিজের) ছোট বোন" }, { word: "姉妹", reading: "しまい", meaning: "sister / বোন" }, { word: "姉妹都市", reading: "しまいとし", meaning: "sister city / সিস্টার সিটি" }], sentences: [{ japanese: "妹は本を読んでいます。", reading: "いもうとは ほんを よんでいいます。", meaning: "My younger sister is reading a book. / আমার ছোট বোন বই পড়ছে।" }], lesson: 12 },

    // --- LESSON 13 ---
    { id: "N4K121", kanji: "活", meaning: "lively, living, active / জীবন, কার্যক্রম, সক্রিয়", kunyomi: ["いき.いき"], onyomi: ["カツ"], vocabulary: [{ word: "生活", reading: "せいかつ", meaning: "living / জীবন" }, { word: "活動", reading: "かつどう", meaning: "activity / কার্যক্রম" }, { word: "活発な", reading: "かっぱつな", meaning: "active / সক্রিয়" }], sentences: [{ japanese: "規則正しい生活をします。", reading: "きそく正しい せいかつを します。", meaning: "I lead a regular life. / আমি নিয়মমাফিক জীবনযাপন করি।" }], lesson: 13 },
    { id: "N4K122", kanji: "回", meaning: "to turn, times / মোড়/ফেরা, ১ বার, শেষ বার, পরিবাহক-বেল্ট সুশি", kunyomi: ["まわ.る", "まわ.す"], onyomi: ["カイ"], vocabulary: [{ word: "回す", reading: "まわす", meaning: "to turn / ঘুরানো" }, { word: "1回", reading: "いっかい", meaning: "once / ১ বার" }, { word: "前回", reading: "ぜんかい", meaning: "the last time / শেষ বার" }, { word: "回転ずし", reading: "かいてんずし", meaning: "conveyer-belt sushi / পরিবাহক-বেল্ট সুশি" }], sentences: [{ japanese: "ドアの取っ手を回します。", reading: "どあの とってを まわします。", meaning: "I turn the door handle. / দরজার হাতল ঘুরাই।" }], lesson: 13 },
    { id: "N4K123", kanji: "主", meaning: "main, master, lord / স্বামী, প্রধান খাদ্য, প্রধান, মালিক", kunyomi: ["おも.な", "ぬし"], onyomi: ["シュ"], vocabulary: [{ word: "主人", reading: "しゅじん", meaning: "husband / স্বামী" }, { word: "主食", reading: "しゅしょく", meaning: "staple food / প্রধান খাদ্য" }, { word: "主な", reading: "おもな", meaning: "main / প্রধান" }, { word: "持ち主", reading: "もちぬし", meaning: "owner / মালিক" }], sentences: [{ japanese: "この会社の主人は誰ですか。", reading: "この かいしゃの しゅじんは だれですか。", meaning: "Who is the owner of this company? / এই কোম্পানির মালিক কে?" }], lesson: 13 },
    { id: "N4K124", kanji: "色", meaning: "color / রঙ, বাদামী রঙ, বৈশিষ্ট্য, দৃশ্য", kunyomi: ["いろ"], onyomi: ["ショク", "シキ"], vocabulary: [{ word: "色", reading: "いろ", meaning: "color / রঙ" }, { word: "茶色", reading: "ちゃいろ", meaning: "brown / বাদামী রঙ" }, { word: "特色", reading: "とくしょく", meaning: "characteristic / বৈশিষ্ট্য" }, { word: "景色", reading: "けしき", meaning: "scenery / দৃশ্য" }], sentences: [{ japanese: "空の色が青いです。", reading: "そらの いろが あおいです。", meaning: "The color of the sky is blue. / আকাশের রঙ নীল।" }], lesson: 13 },
    { id: "N4K125", kanji: "形", meaning: "shape, figure / কাঠামো, পুতুল, বর্গক্ষেত্র, আকৃতি", kunyomi: ["かたち"], onyomi: ["ケイ", "ギョウ"], vocabulary: [{ word: "形", reading: "かたち", meaning: "shape / কাঠামো" }, { word: "人形", reading: "にんぎょう", meaning: "doll / পুতুল" }, { word: "正方形", reading: "せいほうけい", meaning: "square / বর্গক্ষেত্র" }, { word: "図形", reading: "ずけい", meaning: "figure / আকৃতি" }], sentences: [{ japanese: "このケーキは星の形をしています。", reading: "この けーきは ほしの かたちを しています。", meaning: "This cake is in the shape of a star. / এই কেকটি তারার আকৃতির।" }], lesson: 13 },
    { id: "N4K126", kanji: "品", meaning: "goods, article / পণ্য, খাবার, ইলেকট্রিক পণ্য, কাজ", kunyomi: ["しな"], onyomi: ["ヒン"], vocabulary: [{ word: "品物", reading: "しなもの", meaning: "goods / পণ্য" }, { word: "食料品", reading: "しょくりょうひん", meaning: "food / খাবার" }, { word: "電気製品", reading: "でんせいひん", meaning: "electrical appliance / বৈদ্যুতিক পণ্য" }, { word: "作品", reading: "さくひん", meaning: "piece of work / কাজ" }], sentences: [{ japanese: "スーパーで食料品を買います。", reading: "すーぱーで しょくりょうひんを かいます。", meaning: "I buy groceries at the supermarket. / সুপার মার্কেট থেকে খাদ্যদ্রব্য কিনি।" }], lesson: 13 },
    { id: "N4K127", kanji: "民", meaning: "people, nation / রাষ্ট্রের নাগরিক, নাগরিক, জাতিগোষ্ঠী/উপজাতি, গণতন্ত্র", kunyomi: ["ひとびと"], onyomi: ["ミン"], vocabulary: [{ word: "国民", reading: "こくみん", meaning: "citizens of the state / রাষ্ট্রের নাগরিক" }, { word: "市民", reading: "しみん", meaning: "citizen / নাগরিক" }, { word: "民族", reading: "みんぞく", meaning: "tribe / জাতিগোষ্ঠী / উপজাতি" }, { word: "民主主義", reading: "みんしゅしゅぎ", meaning: "democracy / গণতন্ত্র" }], sentences: [{ japanese: "私たちは日本人です。", reading: "わたしたちは にほんじんです。", meaning: "We are citizens. / আমরা নাগরিক।" }], lesson: 13 },
    { id: "N4K128", kanji: "服", meaning: "clothing / পোশাক, পশ্চিমা পোশাক, জাপানি পোশাক, ইউসিফর্ম", kunyomi: [], onyomi: ["フク"], vocabulary: [{ word: "服", reading: "ふく", meaning: "clothes / পোশাক" }, { word: "洋服", reading: "ようふく", meaning: "western clothing / পশ্চিমা পোশাক" }, { word: "和服", reading: "わふく", meaning: "Japanese clothing / জাপানি পোশাক" }, { word: "制服", reading: "せいふく", meaning: "uniform / ইউনিফর্ম" }], sentences: [{ japanese: "新しい服を着ます。", reading: "あたらしい ふくを きます。", meaning: "I wear new clothes. / নতুন পোশাক পরি।" }], lesson: 13 },
    { id: "N4K129", kanji: "犬", meaning: "dog / কুকুর, কুকুরছানা, জাপানি কুকুর", kunyomi: ["いぬ"], onyomi: ["ケン"], vocabulary: [{ word: "犬", reading: "いぬ", meaning: "dog / কুকুর" }, { word: "子犬", reading: "こいぬ", meaning: "puppy / কুকুরছানা" }, { word: "日本犬", reading: "にほんけん", meaning: "Japanese dog / জাপানি কুকুর" }], sentences: [{ japanese: "公園で犬が走っています。", reading: "こうえんで いぬが はしっています。", meaning: "A dog is running in the park. / পার্কে একটি কুকুর দৌড়াচ্ছে।" }], lesson: 13 },
    { id: "N4K130", kanji: "同", meaning: "same / একই রকম, একই সময়, সহপাঠী", kunyomi: ["おな.じ"], onyomi: ["ドウ"], vocabulary: [{ word: "同じ", reading: "おなじ", meaning: "same / একই রকম" }, { word: "同時に", reading: "どうじに", meaning: "at the same time / একই সময়" }, { word: "同級生", reading: "どうきゅうせい", meaning: "classmate / সহপাঠী" }], sentences: [{ japanese: "私と友達は同じペンを持っています。", reading: "わたしと ともだちは おなじ ぺんを もっています。", meaning: "My friend and I have the same pen. / আমার এবং আমার বন্ধুর কাছে একই কলম আছে।" }], lesson: 13 },

    // --- LESSON 14 ---
    { id: "N4K131", kanji: "米", meaning: "rice / চাল, ভাত, মার্কিন যুক্তরাষ্ট্র", kunyomi: ["こめ"], onyomi: ["マイ", "ベイ"], vocabulary: [{ word: "米", reading: "こめ", meaning: "rice / চাল / ভাত" }, { word: "米国", reading: "べいこく", meaning: "U.S.A / মার্কিন যুক্তরাষ্ট্র" }, { word: "白米", reading: "はくまい", meaning: "polished rice / সাদা চাল" }], sentences: [{ japanese: "毎日、米を食べます。", reading: "まいにち、こめを たべます。", meaning: "I eat rice every day. / আমি প্রতিদিন ভাত খাই।" }], lesson: 14 },
    { id: "N4K132", kanji: "料", meaning: "fee, materials / ফি, চার্জ, খাদ্য সামগ্রী, নথিপত্র, উপকরণ", kunyomi: [], onyomi: ["リョウ"], vocabulary: [{ word: "料金", reading: "りょうきん", meaning: "fee, charge / ফি, চার্জ" }, { word: "食料品", reading: "しょくりょうひん", meaning: "foods / খাদ্য সামগ্রী" }, { word: "資料", reading: "しりょう", meaning: "documents, data / নথি, তথ্য" }, { word: "材料", reading: "ざいりょう", meaning: "materials / উপকরণ" }], sentences: [{ japanese: "料理の材料を買います。", reading: "りょうりの ざいりょうを かいます。", meaning: "I buy cooking ingredients. / রান্নার উপকরণ কিনি।" }], lesson: 14 },
    { id: "N4K133", kanji: "理", meaning: "reason, logic / রান্না, ভূগোল, অসম্ভব, কারণ", kunyomi: [], onyomi: ["リ"], vocabulary: [{ word: "料理", reading: "りょうり", meaning: "cooking / রান্না" }, { word: "地理", reading: "ちり", meaning: "geography / ভূগোল" }, { word: "無理な", reading: "むりな", meaning: "impossible / অসম্ভব" }, { word: "理由", reading: "りゆう", meaning: "reason / কারণ" }], sentences: [{ japanese: "母は美味しい料理を作ります。", reading: "ははは おいしい りょうりを つくります。", meaning: "My mother cooks delicious food. / মা সুস্বাদু রান্না করেন।" }], lesson: 14 },
    { id: "N4K134", kanji: "肉", meaning: "meat / মাংস, গরুর মাংস, কসাই, পেশী", kunyomi: [], onyomi: ["ニク"], vocabulary: [{ word: "肉", reading: "にく", meaning: "meat / মাংস" }, { word: "牛肉", reading: "ぎゅうにく", meaning: "beef / গরুর মাংস" }, { word: "肉屋", reading: "にくや", meaning: "butcher / কসাই" }, { word: "筋肉", reading: "きんにく", meaning: "muscle / পেশী" }], sentences: [{ japanese: "牛肉が好きです。", reading: "ぎゅうにくが すきです。", meaning: "I like beef. / আমি গরুর মাংস পছন্দ করি।" }], lesson: 14 },
    { id: "N4K135", kanji: "鳥", meaning: "bird / পাখি, ছোট পাখি, রাজহাঁস", kunyomi: ["とり"], onyomi: ["チョウ"], vocabulary: [{ word: "鳥", reading: "とり", meaning: "bird / পাখি" }, { word: "小鳥", reading: "ことり", meaning: "little bird / ছোট পাখি" }, { word: "白鳥", reading: "はくちょう", meaning: "swan / রাজহাঁস" }], sentences: [{ japanese: "空を鳥が飛んでいます。", reading: "そらを とりが とんでいます。", meaning: "Birds are flying in the sky. / আকাশে পাখি উড়ছে।" }], lesson: 14 },
    { id: "N4K136", kanji: "野", meaning: "field, plain / মাঠ, বন্য পাখি, ধারা, এলাকা", kunyomi: ["の", "のはら"], onyomi: ["ヤ"], vocabulary: [{ word: "野原", reading: "のはら", meaning: "field / মাঠ" }, { word: "野鳥", reading: "やちょう", meaning: "wild bird / বন্য পাখি" }, { word: "分野", reading: "ぶんや", meaning: "genre, area / ধারা, এলাকা" }], sentences: [{ japanese: "野原を走ります。", reading: "のはらを はしります。", meaning: "I run in the field. / মাঠে দৌড়াই।" }], lesson: 14 },
    { id: "N4K137", kanji: "菜", meaning: "vegetable / সবজি, নিরামিষ খাবার, সবুজ শাক-সবজি", kunyomi: [], onyomi: ["サイ"], vocabulary: [{ word: "野菜", reading: "やさい", meaning: "vegetable / সবজি" }, { word: "菜食", reading: "さいしょく", meaning: "vegetarian diet / নিরামিষ খাবার" }, { word: "青菜", reading: "あおな", meaning: "leafy green vegetable / সবুজ শাক-সবজি" }], sentences: [{ japanese: "毎日野菜を食べます。", reading: "まいにち やさいを たべます。", meaning: "I eat vegetables every day. / আমি প্রতিদিন সবজি খাই।" }], lesson: 14 },
    { id: "N4K138", kanji: "茶", meaning: "tea / চা, বাদামী রঙ, কফি দোকান, কালো চা", kunyomi: [], onyomi: ["チャ", "サ"], vocabulary: [{ word: "お茶", reading: "おちゃ", meaning: "tea / চা" }, { word: "茶色", reading: "ちゃいろ", meaning: "brown / বাদামী রঙ" }, { word: "喫茶店", reading: "きっさてん", meaning: "coffee shop / কফির দোকান" }, { word: "紅茶", reading: "こうちゃ", meaning: "black tea / কালো চা" }], sentences: [{ japanese: "お茶を飲みます。", reading: "おちゃを のみます。", meaning: "I drink tea. / আমি চা পান করি।" }], lesson: 14 },
    { id: "N4K139", kanji: "飯", meaning: "meal, cooked rice / রান্না করা ভাত, খাবার, রাতের খাবার, দুপুরের খাবার", kunyomi: ["めし"], onyomi: ["ハン"], vocabulary: [{ word: "ご飯", reading: "ごはん", meaning: "cooked rice, meal / রান্না করা ভাত, খাবার" }, { word: "夕飯", reading: "ゆうはん", meaning: "supper / রাতের খাবার" }, { word: "晩ご飯", reading: "ばんごはん", meaning: "supper / রাতের খাবার" }, { word: "昼飯", reading: "ひるめし", meaning: "lunch / দুপুরের খাবার" }], sentences: [{ japanese: "美味しいご飯を食べました。", reading: "おいしい ごはんを たべました。", meaning: "I ate delicious rice/meal. / সুস্বাদু খাবার খেলাম।" }], lesson: 14 },
    { id: "N4K140", kanji: "味", meaning: "flavor, taste / স্বাদ, অর্থ, শখ, সুদ", kunyomi: ["あじ"], onyomi: ["ミ"], vocabulary: [{ word: "味", reading: "あじ", meaning: "taste / স্বাদ" }, { word: "意味", reading: "いみ", meaning: "meaning / অর্থ" }, { word: "趣味", reading: "しゅみ", meaning: "hobby / শখ" }, { word: "興味", reading: "きょうみ", meaning: "interest / সুদ" }], sentences: [{ japanese: "この料理は味が良いです。", reading: "この りょうりは あじが よいです。", meaning: "This dish tastes good. / এই রান্নার স্বাদ ভালো।" }], lesson: 14 },

    // --- LESSON 15 ---
    { id: "N4K141", kanji: "代", meaning: "substitute, age, charge / প্রতিস্থাপন, পরিবর্তে, বয়স, গ্যাস ফি", kunyomi: ["か.わる", "かわ.り", "か.える"], onyomi: ["ダイ", "タイ"], vocabulary: [{ word: "代わる", reading: "かわる", meaning: "take somebody's place / প্রতিস্থাপন করা" }, { word: "代わりに", reading: "かわりに", meaning: "instead / পরিবর্তে" }, { word: "時代", reading: "じだい", meaning: "age / বয়স / যুগ" }, { word: "ガス代", reading: "がすだい", meaning: "gas charge / গ্যাস ফি" }], sentences: [{ japanese: "父の代わりに手紙を書きます。", reading: "ちちの かわりに てがみを かきます。", meaning: "I write a letter on behalf of my father. / বাবার পরিবর্তে আমি চিঠি লিখি।" }], lesson: 15 },
    { id: "N4K142", kanji: "使", meaning: "to use / ব্যবহার করা, দূতাবাস, কোনো কিছুতে নিযুক্ত হওয়া", kunyomi: ["つか.う"], onyomi: ["シ"], vocabulary: [{ word: "使う", reading: "つかう", meaning: "to use / ব্যবহার করা" }, { word: "大使館", reading: "たいしかん", meaning: "embassy / দূতাবাস" }, { word: "使用中", reading: "しようちゅう", meaning: "be engaged on something / কোনো কিছুতে নিযুক্ত হওয়া / ব্যাস্ত" }], sentences: [{ japanese: "ペンを使います。", reading: "ぺんを つかいます。", meaning: "I use a pen. / আমি কলম ব্যবহার করি।" }], lesson: 15 },
    { id: "N4K143", kanji: "作", meaning: "to make / তৈরি করা, রচনা, লেখক, কাজ", kunyomi: ["つく.る"], onyomi: ["サク", "サ"], vocabulary: [{ word: "作る", reading: "つくる", meaning: "to make / তৈরি করা" }, { word: "作文", reading: "さくぶん", meaning: "essay / রচনা" }, { word: "作家", reading: "さっか", meaning: "writer / লেখক" }, { word: "作業", reading: "さぎょう", meaning: "operation / কাজ" }], sentences: [{ japanese: "晩ご飯を作ります。", reading: "ばんごはんを つくります。", meaning: "I make dinner. / আমি রাতের খাবার তৈরি করি।" }], lesson: 15 },
    { id: "N4K144", kanji: "化", meaning: "change, -ize / পরিবর্তন, সংস্কৃতি, রসায়ন, মুভি রূপান্তর করা", kunyomi: ["か.わる", "ば.ける"], onyomi: ["カ", "ケ"], vocabulary: [{ word: "変化する", reading: "へんかする", meaning: "to change / পরিবর্তন" }, { word: "文化", reading: "ぶんか", meaning: "culture / সংস্কৃতি" }, { word: "化学", reading: "かがく", meaning: "chemistry / রসায়ন" }, { word: "映画化", reading: "えいがか", meaning: "making into a movie / মুভি রূপান্তর করা" }], sentences: [{ japanese: "日本の文化に興味があります。", reading: "にほんの ぶんかに きょうみが あります。", meaning: "I am interested in Japanese culture. / জাপানি সংস্কৃতির প্রতি আমার আগ্রহ আছে।" }], lesson: 15 },
    { id: "N4K145", kanji: "信", meaning: "to believe, trust / বিশ্বাস করা, সংকেত, আত্মবিশ্বাস, যোগাযোগ/চিঠিপত্র", kunyomi: ["しん.じる"], onyomi: ["シン"], vocabulary: [{ word: "信じる", reading: "しんじる", meaning: "to believe / বিশ্বাস করা" }, { word: "信号", reading: "しんごう", meaning: "signal / সংকেত / ট্রাফিক সিগন্যাল" }, { word: "自信", reading: "じしん", meaning: "confidence / আত্মবিশ্বাস" }, { word: "通信", reading: "つうしん", meaning: "correspondence / যোগাযোগ / চিঠিপত্র" }], sentences: [{ japanese: "彼の言葉を信じます。", reading: "かれの ことばを しんじます。", meaning: "I believe his words. / আমি তার কথা বিশ্বাস করি।" }], lesson: 15 },
    { id: "N4K146", kanji: "進", meaning: "to proceed, advance / এগিয়ে যাওয়া, অগ্রগতি, উন্নত দেশ", kunyomi: ["すす.む", "すす.める"], onyomi: ["シン"], vocabulary: [{ word: "進む", reading: "すすむ", meaning: "to proceed / এগিয়ে যাওয়া" }, { word: "進歩", reading: "しんぽ", meaning: "progress / অগ্রগতি" }, { word: "先進国", reading: "せんしんこく", meaning: "advanced nation / উন্নত দেশ" }], sentences: [{ japanese: "前に進んでください。", reading: "まえに すすんで ください。", meaning: "Please move forward. / সামনে এগিয়ে যান।" }], lesson: 15 },
    { id: "N4K147", kanji: "送", meaning: "to send / পাঠানো, রেমিট্যান্স, সম্প্রচার, ই-মেইল পাঠানো", kunyomi: ["おく.る"], onyomi: ["ソウ"], vocabulary: [{ word: "送る", reading: "おくる", meaning: "to send / পাঠানো" }, { word: "送金", reading: "そうきん", meaning: "remittance / রেমিট্যান্স" }, { word: "放送", reading: "ほうそう", meaning: "broadcasting / সম্প্রচার" }, { word: "送信", reading: "そうしん", meaning: "send (e-mail) / পাঠানো (ই-মেইল)" }], sentences: [{ japanese: "友達に手紙を送ります。", reading: "ともだちに てがみを おくります。", meaning: "I send a letter to my friend. / বন্ধুর কাছে চিঠি পাঠাই।" }], lesson: 15 },
    { id: "N4K148", kanji: "返", meaning: "to return / ফেরত আসা, উত্তর, উত্তর দেওয়া (ই-মেইল), পুনরাবৃত্তি", kunyomi: ["かえ.す", "かえ.る"], onyomi: ["ヘン"], vocabulary: [{ word: "返す", reading: "かえす", meaning: "return / ফেরত আসা" }, { word: "返事", reading: "へんじ", meaning: "answer / উত্তর" }, { word: "返信", reading: "へんしん", meaning: "reply (e-mail) / উত্তর দেওয়া (ই-মেইল)" }, { word: "繰り返す", reading: "くりかえす", meaning: "to repeat / পুনরাবৃত্তি" }], sentences: [{ japanese: "図書館の本を返します。", reading: "としょかんの ほんを かえします。", meaning: "I return the library book. / লাইব্রেরির বই ফেরত দিই।" }], lesson: 15 },
    { id: "N4K149", kanji: "洗", meaning: "to wash / ধোয়া, হাত ধোয়া, টয়লেট, ধোয়া (কাপড়)", kunyomi: ["あら.う"], onyomi: ["セン"], vocabulary: [{ word: "洗う", reading: "あらう", meaning: "to wash / ধোয়া" }, { word: "手洗い", reading: "てあらい", meaning: "hand wash / হাত ধোয়া" }, { word: "お手洗い", reading: "おてあらい", meaning: "rest room / টয়লেট" }, { word: "洗濯", reading: "せんたく", meaning: "washing / ধোয়া (কাপড়)" }], sentences: [{ japanese: "手を洗ってください。", reading: "てを あらって ください。", meaning: "Please wash your hands. / হাত ধুয়ে নিন।" }], lesson: 15 },
    { id: "N4K150", kanji: "注", meaning: "to pour, notice / সাবধান, আদেশ করা, ইনজেকশন", kunyomi: ["そそ.ぐ"], onyomi: ["チュウ"], vocabulary: [{ word: "注意する", reading: "ちゅういする", meaning: "to pay attention / সাবধান" }, { word: "注文する", reading: "ちゅうもんする", meaning: "to order / আদেশ করা / অর্ডার করা" }, { word: "注射", reading: "ちゅうしゃ", meaning: "injection / ইনজেকশন" }], sentences: [{ japanese: "車に注意してください。", reading: "くるまに ちゅういして ください。", meaning: "Please watch out for cars. / গাড়ি সম্পর্কে সতর্ক থাকুন।" }], lesson: 15 },

    // --- LESSON 16 ---
    { id: "N4K151", kanji: "場", meaning: "place / জায়গা, কারখানা, স্কোয়ার/বর্গক্ষেত্র, খেলার মাঠ", kunyomi: ["ば"], onyomi: ["ジョウ"], vocabulary: [{ word: "場所", reading: "ばしょ", meaning: "place / জায়গা" }, { word: "工場", reading: "こうじょう", meaning: "factory / কারখানা" }, { word: "広場", reading: "ひろば", meaning: "square / স্কোয়ার / বর্গক্ষেত্র" }, { word: "運動場", reading: "うんどうじょう", meaning: "playground / খেলার মাঠ" }], sentences: [{ japanese: "ここは広い場所です。", reading: "ここは ひろい ばしょです。", meaning: "This is a wide place. / এটি একটি প্রশস্ত জায়গা।" }], lesson: 16 },
    { id: "N4K152", kanji: "建", meaning: "to build / তৈরি করা, বিল্ডিং, নির্মাণ", kunyomi: ["た.てる", "た.つ"], onyomi: ["ケン"], vocabulary: [{ word: "建てる", reading: "たてる", meaning: "to build / তৈরি করা" }, { word: "建物", reading: "たてもの", meaning: "building / বিল্ডিং" }, { word: "建築", reading: "けんちく", meaning: "construction / নির্মাণ" }], sentences: [{ japanese: "新しい家を建てます。", reading: "あたらしい いえを たてます。", meaning: "I will build a new house. / আমি নতুন বাড়ি নির্মাণ করব।" }], lesson: 16 },
    { id: "N4K153", kanji: "物", meaning: "thing / বস্তু, শপিং, পশুপাখি, লাগেজ", kunyomi: ["もの"], onyomi: ["ブツ", "モツ"], vocabulary: [{ word: "物", reading: "もの", meaning: "thing / বস্তু" }, { word: "買い物", reading: "かいもの", meaning: "shopping / শপিং" }, { word: "動物", reading: "どうぶつ", meaning: "animal / পশুপাখি" }, { word: "荷物", reading: "にもつ", meaning: "baggage / লাগেজ" }], sentences: [{ japanese: "スーパーで買い物をします。", reading: "すーぱーで かいものを します。", meaning: "I do shopping at the supermarket. / সুপার মার্কেটে শপিং করি।" }], lesson: 16 },
    { id: "N4K154", kanji: "院", meaning: "institution / হাসপাতাল, হাসপাতালে ভর্তি করা, স্নাতকোত্তর/মাস্টার্স", kunyomi: [], onyomi: ["イン"], vocabulary: [{ word: "病院", reading: "びょういん", meaning: "hospital / হাসপাতাল" }, { word: "入院する", reading: "にゅういんする", meaning: "to be hospitalized / হাসপাতালে ভর্তি করা" }, { word: "大学院", reading: "だいがくいん", meaning: "graduate school / স্নাতকোত্তর / মাস্টার্স" }], sentences: [{ japanese: "病気を治すために病院へ行きます。", reading: "びょうきを なおす ために びょういんへ いきます。", meaning: "I go to the hospital to cure my illness. / রোগ সারানোর জন্য হাসপাতালে যাই।" }], lesson: 16 },
    { id: "N4K155", kanji: "館", meaning: "building, hall / সিনেমা হল, দূতাবাস, হোটেল, আর্ট মিউজিয়াম", kunyomi: [], onyomi: ["カン"], vocabulary: [{ word: "映画館", reading: "えいがかん", meaning: "movie theater / সিনেমা হল" }, { word: "大使館", reading: "たいしかん", meaning: "embassy / দূতাবাস" }, { word: "旅館", reading: "りょかん", meaning: "inn / হোটেল" }, { word: "美術館", reading: "びじゅつかん", meaning: "art museum / আর্ট মিউজিয়াম" }], sentences: [{ japanese: "週末に美術館へ行きます。", reading: "しゅうまつに びじゅつかんへ いきます。", meaning: "I will go to the art museum on the weekend. / সপ্তাহের ছুটির দিনে আর্ট মিউজিয়ামে যাব।" }], lesson: 16 },
    { id: "N4K156", kanji: "食", meaning: "food, eat / ডাইনিং রুম, অডিটোরিয়াম", kunyomi: ["く.らう", "た.べる"], onyomi: ["ショク"], vocabulary: [{ word: "食堂", reading: "しょくどう", meaning: "dining room / ডাইনিং রুম" }, { word: "講堂", reading: "こうどう", meaning: "auditorium / অডিটোরিয়াম" }], sentences: [{ japanese: "食堂で昼ご飯を食べます。", reading: "しょくどうで ひるごはんを たべます。", meaning: "I eat lunch in the dining room. / ডাইনিং রুমে দুপুরের খাবার খাই।" }], lesson: 16 },
    { id: "N4K157", kanji: "室", meaning: "room / ক্লাসরুম, বেসমেন্ট, অপেক্ষা করার ঘর, অফিস", kunyomi: ["へや"], onyomi: ["シツ"], vocabulary: [{ word: "教室", reading: "きょうしつ", meaning: "classroom / ক্লাসরুম" }, { word: "地下室", reading: "ちかしつ", meaning: "basement / বেসমেন্ট" }, { word: "待合室", reading: "まちあいしつ", meaning: "waiting room / অপেক্ষা করার ঘর" }, { word: "事務室", reading: "じむしつ", meaning: "office / অফিস" }], sentences: [{ japanese: "学生は教室にいます。", reading: "がくせいは きょうしつに います。", meaning: "The students are in the classroom. / ছাত্রছাত্রীরা ক্লাসরুমে আছে।" }], lesson: 16 },
    { id: "N4K158", kanji: "工", meaning: "craft, construction / কারখানা, নির্মাণ, উৎপাদন, কারুশিল্প", kunyomi: [], onyomi: ["コウ", "ク"], vocabulary: [{ word: "工場", reading: "こうじょう / こうば", meaning: "factory / কারখানা" }, { word: "工事", reading: "こうじ", meaning: "construction / নির্মাণ" }, { word: "工業", reading: "こうぎょう", meaning: "manufacturing / উৎপাদন" }, { word: "工作", reading: "こうさく", meaning: "handcraft / কারুশিল্প" }], sentences: [{ japanese: "この工場で車を作ります。", reading: "この こうじょうで くるまを つくります。", meaning: "Cars are made in this factory. / এই কারখানায় গাড়ি তৈরি করা হয়।" }], lesson: 16 },
    { id: "N4K159", kanji: "図", meaning: "drawing, map / চিত্র, মানচিত্র, লাইব্রেরি, সংকেত", kunyomi: ["はかる"], onyomi: ["ズ", "ト"], vocabulary: [{ word: "図", reading: "ず", meaning: "figure / চিত্র" }, { word: "地図", reading: "ちず", meaning: "map / মানচিত্র" }, { word: "図書館", reading: "としょかん", meaning: "library / লাইব্রেরি" }, { word: "合図", reading: "あいず", meaning: "signal / সংকেত" }], sentences: [{ japanese: "図書館で本を借ります。", reading: "としょかんで ほんを かります。", meaning: "I borrow books at the library. / লাইব্রেরি থেকে বই ধার নিই।" }], lesson: 16 },
    { id: "N4K160", kanji: "号", meaning: "number, signal / টেলিফোন নম্বর, রুম নম্বর-৩, আদেশ, সংকেত", kunyomi: [], onyomi: ["ゴウ"], vocabulary: [{ word: "信号", reading: "しんごう", meaning: "singal / সংকেত" }, { word: "電話番号", reading: "でんわばんごう", meaning: "telephone number / টেলিফোন নম্বর" }, { word: "3号室", reading: "さんごうしつ", meaning: "Room No. 3 / রুম নম্বর-৩" }, { word: "号令", reading: "ごうれい", meaning: "command / আদেশ" }], sentences: [{ japanese: "私の電話番号は〇〇です。", reading: "わたしの でんわばんごうは 〇〇です。", meaning: "My telephone number is 00. / আমার টেলিফোন নম্বর হলো ০০।" }], lesson: 16 },

    // --- LESSON 17 ---
    { id: "N4K161", kanji: "交", meaning: "traffic, cross / ট্রাফিক, অতিক্রম, পুলিশ বক্স, পরিবর্তন/প্রতিস্থাপন", kunyomi: ["まじ.わる", "まじ.える", "かわ.す"], onyomi: ["コウ"], vocabulary: [{ word: "交通", reading: "こうつう", meaning: "traffic / ট্রাফিক" }, { word: "交差点", reading: "こうさてん", meaning: "crossing / অতিক্রম" }, { word: "交番", reading: "こうばん", meaning: "police box / পুলিশ বক্স" }, { word: "交代", reading: "こうたい", meaning: "change / পরিবর্তন / প্রতিস্থাপন" }], sentences: [{ japanese: "交通ルールを守ります。", reading: "こうつうるーるを まもります。", meaning: "I obey traffic rules. / আমি ট্রাফিক নিয়ম মেনে চলি।" }], lesson: 17 },
    { id: "N4K162", kanji: "通", meaning: "to pass through, commute / মাধ্যমে যাওয়া, যাতায়াত, স্কুলে যাতায়াত, প্রধান রাস্তা", kunyomi: ["とお.る", "とお.す", "通.う"], onyomi: ["ツウ", "ツ"], vocabulary: [{ word: "通る", reading: "とおる", meaning: "to go through / মাধ্যমে যাওয়া" }, { word: "通う", reading: "かよう", meaning: "to commute / যাতায়াত" }, { word: "通学", reading: "つうがく", meaning: "commute to school / স্কুলে যাতায়াত" }, { word: "大通り", reading: "おおどおり", meaning: "main street / প্রধান রাস্তা" }], sentences: [{ japanese: "この道をまっすぐ通ります。", reading: "このみちを まっすぐ とおります。", meaning: "Go straight through this road. / এই রাস্তা দিয়ে সোজা যাবেন।" }], lesson: 17 },
    { id: "N4K163", kanji: "動", meaning: "to move / সরানো, ব্যায়াম, গাড়ি, পশুপাখি", kunyomi: ["うご.く", "うご.かす"], onyomi: ["ドウ"], vocabulary: [{ word: "動く", reading: "うごく", meaning: "to move / সরানো" }, { word: "運動", reading: "うんどう", meaning: "exercise / ব্যায়াম" }, { word: "自動車", reading: "じどうしゃ", meaning: "car / গাড়ি" }, { word: "動物", reading: "どうぶつ", meaning: "animal / পশুপাখি" }], sentences: [{ japanese: "毎日運動をします。", reading: "まいにち うんどうを します。", meaning: "I exercise every day. / আমি প্রতিদিন ব্যায়াম করি।" }], lesson: 17 },
    { id: "N4K164", kanji: "乗", meaning: "to ride, get on / ওঠা/চড়া, ট্যাক্সি রাখার জায়গা, ওঠার জন্য টিকিট", kunyomi: ["の.る", "の.せる"], onyomi: ["ジョウ"], vocabulary: [{ word: "乗る", reading: "のる", meaning: "to get on / ওঠা / চড়া" }, { word: "タクシー乗り場", reading: "たくしーのりば", meaning: "taxi stand / ট্যাক্সি রাখার জায়গা" }, { word: "乗車券", reading: "じょうしゃけん", meaning: "ticket to ride / ওঠার জন্য টিকিট" }], sentences: [{ japanese: "電車に乗ります。", reading: "でんしゃに のります。", meaning: "I get on the train. / আমি ট্রেনে উঠি।" }], lesson: 17 },
    { id: "N4K165", kanji: "降", meaning: "to descend, fall / নামা, বৃষ্টি হওয়া, ওঠা ও নামা, বৃষ্টিপাত", kunyomi: ["お.りる", "お.ろす", "ふ.る"], onyomi: ["コウ"], vocabulary: [{ word: "降りる", reading: "おりる", meaning: "to get off / নামা" }, { word: "降る", reading: "ふる", meaning: "to rain / বৃষ্টি হওয়া" }, { word: "乗り降り", reading: "のりおり", meaning: "get on and get off / ওঠা ও নামা" }, { word: "降雨量", reading: "こううりょう", meaning: "rainfall / বৃষ্টিপাত" }], sentences: [{ japanese: "バスを降ります。", reading: "ばすを おります。", meaning: "I get off the bus. / আমি বাস থেকে নামি।" }], lesson: 17 },
    { id: "N4K166", kanji: "運", meaning: "carry, luck / বহন, ব্যায়াম করা, সৌভাগ্য, ভাড়া", kunyomi: ["はこ.ぶ"], onyomi: ["ウン"], vocabulary: [{ word: "運ぶ", reading: "はこぶ", meaning: "to transport / বহন" }, { word: "運動", reading: "うんどう", meaning: "exercise / ব্যায়াম করা" }, { word: "運がいい", reading: "うんがいい", meaning: "lucky / সৌভাগ্য" }, { word: "運賃", reading: "うんちん", meaning: "fare / ভাড়া" }], sentences: [{ japanese: "荷物を運んでください。", reading: "にもつを はこんで ください。", meaning: "Please carry the luggage. / লাগেজটি বহন করুন।" }], lesson: 17 },
    { id: "N4K167", kanji: "転", meaning: "to roll, turn / গাড়ি চালানো, সাইকেল, ঘূর্ণন, চাকরিতে স্থানান্তর", kunyomi: ["ころ.がる", "ころ.げる", "ころ.かす", "ころ.ぶ"], onyomi: ["テン"], vocabulary: [{ word: "運転する", reading: "うんてんする", meaning: "to drive / গাড়ি চালানো" }, { word: "自転車", reading: "じてんしゃ", meaning: "bicycle / সাইকেল" }, { word: "回転", reading: "かいてん", meaning: "rolling / ঘূর্ণন" }, { word: "転勤", reading: "てんきん", meaning: "job transfer / চাকরিতে স্থানান্তর" }], sentences: [{ japanese: "車を運転します。", reading: "くるまを うんてんします。", meaning: "I drive a car. / আমি গাড়ি চালাই।" }], lesson: 17 },
    { id: "N4K168", kanji: "帰", meaning: "to return / ফিরে আসা, নিজ দেশে ফিরে আসা, বাড়িতে স্বাগতম", kunyomi: ["かえ.る", "かえ.す"], onyomi: ["キ"], vocabulary: [{ word: "帰る", reading: "かえる", meaning: "to return / ফিরে আসা" }, { word: "帰国する", reading: "きこくする", meaning: "to return one's country / নিজ দেশে ফিরে আসা" }, { word: "お帰りなさい", reading: "おかえりなさい", meaning: "welcome home / বাড়িতে স্বাগতম" }], sentences: [{ japanese: "家に帰ります。", reading: "いえに かえります。", meaning: "I return home. / আমি বাড়ি ফিরে যাই।" }], lesson: 17 },
    { id: "N4K169", kanji: "発", meaning: "start, discharge / প্রস্থান, আবিষ্কার, উদ্ভব, প্রস্থান (ট্রেন/যানবাহন)", kunyomi: [], onyomi: ["ハツ", "ホツ"], vocabulary: [{ word: "出発する", reading: "しゅっぱつする", meaning: "to leave / প্রস্থান" }, { word: "発見", reading: "はっけん", meaning: "discovery / আবিষ্কার" }, { word: "発明", reading: "はつめい", meaning: "invention / উদ্ভাবন" }, { word: "発車", reading: "はっしゃ", meaning: "departure / প্রস্থান" }], sentences: [{ japanese: "電車が出発します。", reading: "でんしゃが しゅっぱつします。", meaning: "The train departs. / ট্রেন ছেড়ে যায়।" }], lesson: 17 },
    { id: "N4K170", kanji: "着", meaning: "to wear, arrive / পরিধান করা, পৌঁছানো, কিমোনো, ই-মেইল আসা", kunyomi: ["き.る", "き.せる", "つ.く", "つ.ける"], onyomi: ["チャク"], vocabulary: [{ word: "着る", reading: "きる", meaning: "to put on clothes / পরিধান করা" }, { word: "着く", reading: "つく", meaning: "to arrive / পৌঁছানো" }, { word: "着物", reading: "きもの", meaning: "clothes, kimono / কিমোনো" }, { word: "着信", reading: "ちゃくしん", meaning: "incoming e-mail / ই-মেইল আসা" }], sentences: [{ japanese: "駅に着きました。", reading: "えきに つきました。", meaning: "I arrived at the station. / স্টেশনে পৌঁছেছি।" }], lesson: 17 },

    // --- LESSON 18 ---
    { id: "N4K171", kanji: "漢", meaning: "Chinese character / কান্জি, চাইনিজ ভেষজ ঔষধ", kunyomi: [], onyomi: ["カン"], vocabulary: [{ word: "漢字", reading: "かんじ", meaning: "Chinese character / কান্জি" }, { word: "漢方薬", reading: "かんぽうやく", meaning: "Chinese herbal medicine / চাইনিজ ভেষজ ঔষধ" }], sentences: [{ japanese: "毎日漢字を勉強します。", reading: "まいにち かんじを べんきょうします。", meaning: "I study kanji every day. / আমি প্রতিদিন কান্জি পড়ি।" }], lesson: 18 },
    { id: "N4K172", kanji: "字", meaning: "letter, character / অক্ষর, কান্জি, প্রকার/ধরণ, ক্যালিগ্রাফি", kunyomi: ["あざ"], onyomi: ["ジ"], vocabulary: [{ word: "字", reading: "じ", meaning: "letter / অক্ষর" }, { word: "漢字", reading: "かんじ", meaning: "Chinese character / কান্জি" }, { word: "活字", reading: "かつじ", meaning: "type / প্রকার/ধরণ" }, { word: "習字", reading: "しゅうじ", meaning: "calligraphy / ক্যালিগ্রাফি" }], sentences: [{ japanese: "きれいな字を書きます。", reading: "きれいな じを かきます。", meaning: "I write neat letters. / সুন্দর অক্ষর লিখি।" }], lesson: 18 },
    { id: "N4K173", kanji: "文", meaning: "sentence, literature / বাক্য, সাহিত্য, অক্ষর, অধীন", kunyomi: ["ふみ"], onyomi: ["ブン", "モン"], vocabulary: [{ word: "文", reading: "ぶん", meaning: "sentence / বাক্য" }, { word: "文学", reading: "ぶんがく", meaning: "literature / সাহিত্য" }, { word: "文字", reading: "もじ", meaning: "character / অক্ষর" }, { word: "注文する", reading: "ちゅうもんする", meaning: "to order / অধীন" }], sentences: [{ japanese: "この文の意味が分かりません。", reading: "この ぶんの いみが わかりません。", meaning: "I don't understand the meaning of this sentence. / এই বাক্যের অর্থ বুঝতে পারছি না।" }], lesson: 18 },
    { id: "N4K174", kanji: "教", meaning: "to teach / শিক্ষা দেওয়া, ক্লাস রুম, পাঠ্য বই, গির্জা/চার্চ", kunyomi: ["おし.える", "おそ.わる"], onyomi: ["キョウ"], vocabulary: [{ word: "教える", reading: "おしえる", meaning: "to teach / শিক্ষা দেওয়া" }, { word: "教室", reading: "きょうしつ", meaning: "class room / ক্লাসরুম" }, { word: "教科書", reading: "きょうかしょ", meaning: "text book / পাঠ্য বই" }, { word: "教会", reading: "きょうかい", meaning: "church / গির্জা/চার্চ" }], sentences: [{ japanese: "日本語を教えてください。", reading: "にほんごを おしえて ください。", meaning: "Please teach me Japanese. / আমাকে জাপানি ভাষা শিখিয়ে দিন।" }], lesson: 18 },
    { id: "N4K175", kanji: "勉", meaning: "to study, make effort / লেখাপড়া করা", kunyomi: ["つと.める"], onyomi: ["ベン"], vocabulary: [{ word: "勉強する", reading: "べんきょうする", meaning: "to study / লেখাপড়া করা" }], sentences: [{ japanese: "毎日日本語を勉強します。", reading: "まいニチ にほんごを べんきょうします。", meaning: "I study Japanese every day. / আমি প্রতিদিন জাপানি ভাষা অধ্যয়ন করি।" }], lesson: 18 },
    { id: "N4K176", kanji: "習", meaning: "to learn / শিখা, চর্চা করা, পর্যালোচনা করা, প্রথা/রীতি", kunyomi: ["なら.う"], onyomi: ["シュウ"], vocabulary: [{ word: "習う", reading: "ならう", meaning: "to learn / শিখা" }, { word: "練習", reading: "れんしゅう", meaning: "practice / চর্চা করা" }, { word: "復習する", reading: "ふくしゅうする", meaning: "to review / পর্যালোচনা করা" }, { word: "習慣", reading: "しゅうかん", meaning: "custom / প্রথা/রীতি" }], sentences: [{ japanese: "ピアノを習っています。", reading: "ぴあのを ならっています。", meaning: "I am learning the piano. / আমি পিয়ানো শিখছি।" }], lesson: 18 },
    { id: "N4K177", kanji: "英", meaning: "English, excellent / ইংরেজি ভাষা, ইংল্যান্ড, হিরো", kunyomi: ["すぐ.れた"], onyomi: ["エイ"], vocabulary: [{ word: "英語", reading: "えいご", meaning: "English / ইংরেজি ভাষা" }, { word: "英国", reading: "えいこく", meaning: "England / ইংল্যান্ড" }, { word: "英雄", reading: "えいゆう", meaning: "hero / হিরো" }], sentences: [{ japanese: "英語を話すことができます。", reading: "えいごを はなす ことが できます。", meaning: "I can speak English. / আমি ইংরেজি বলতে পারি।" }], lesson: 18 },
    { id: "N4K178", kanji: "考", meaning: "to think / চিন্তা করা/ভাবা, প্রত্নতত্ত্ব, রেফারেন্স বই", kunyomi: ["かんが.える"], onyomi: ["コウ"], vocabulary: [{ word: "考える", reading: "かんがえる", meaning: "to think / চিন্তা করা/ভাবা" }, { word: "考古学", reading: "こうこがく", meaning: "archaeology / প্রত্নতত্ত্ব" }, { word: "参考書", reading: "さんこうしょ", meaning: "reference book / রেফারেন্স বই" }], sentences: [{ japanese: "よく考えてから答えます。", reading: "よく かんがえてから こたえます。", meaning: "I will answer after thinking carefully. / ভালোভাবে ভেবে উত্তর দেব।" }], lesson: 18 },
    { id: "N4K179", kanji: "研", meaning: "to polish, research / গবেষণা করা", kunyomi: ["みが.く"], onyomi: ["ケン"], vocabulary: [{ word: "研究する", reading: "けんきゅうする", meaning: "do research / গবেষণা করা" }], sentences: [{ japanese: "大学で経済を研究します。", reading: "だいがくで けいざいを けんきゅうします。", meaning: "I research economics at the university. / বিশ্ববিদ্যালয়ে অর্থনীতি নিয়ে গবেষণা করি।" }], lesson: 18 },
    { id: "N4K180", kanji: "究", meaning: "research, investigate / গবেষক, ল্যাবরেটরি", kunyomi: ["きわ.める"], onyomi: ["キュウ"], vocabulary: [{ word: "研究者", reading: "けんきゅうしゃ", meaning: "researcher / গবেষক" }, { word: "研究室", reading: "けんきゅうしつ", meaning: "laboratory / ল্যাবরেটরি" }], sentences: [{ japanese: "研究室で実験をします。", reading: "けんきゅうしつで じっけんを します。", meaning: "I do experiments in the laboratory. / ল্যাবরেটরিতে পরীক্ষা-নিরীক্ষা করি।" }], lesson: 18 },

    // --- LESSON 19 ---
    { id: "N4K181", kanji: "問", meaning: "question / প্রশ্ন", kunyomi: ["たず.ねる", "と.う"], onyomi: ["モン"], vocabulary: [{ word: "問", reading: "もん", meaning: "question / প্রশ্ন" }, { word: "問題", reading: "もんだい", meaning: "question / প্রশ্ন" }, { word: "質問する", reading: "しつもんする", meaning: "to ask a question / প্রশ্ন জিজ্ঞেস করা" }], sentences: [{ japanese: "先生に質問します。", reading: "せんせいに しつもんします。", meaning: "I ask the teacher a question. / শিক্ষককে প্রশ্ন করি।" }], lesson: 19 },
    { id: "N4K182", kanji: "題", meaning: "title, topic, problem / শিরোনাম, সমস্যা/প্রশ্ন, বাড়ির কাজ, বিষয়", kunyomi: [], onyomi: ["ダイ"], vocabulary: [{ word: "題名", reading: "だいめい", meaning: "title / শিরোনাম" }, { word: "問題", reading: "もんだい", meaning: "question / সমস্যা / প্রশ্ন" }, { word: "宿題", reading: "しゅくだい", meaning: "homework / বাড়ির কাজ" }, { word: "話題", reading: "わだい", meaning: "topic / বিষয়" }], sentences: [{ japanese: "宿題を終わりました。", reading: "しゅくだいを おわりました。", meaning: "I finished my homework. / বাড়ির কাজ শেষ করেছি।" }], lesson: 19 },
    { id: "N4K183", kanji: "試", meaning: "test, try / ম্যাচ, পরীক্ষা, ভর্তি পরীক্ষা, চেষ্টা করা", kunyomi: ["ため.す", "ため.ーす"], onyomi: ["シ"], vocabulary: [{ word: "試合", reading: "しあい", meaning: "game / ম্যাচ" }, { word: "試験", reading: "しけん", meaning: "examination / পরীক্ষা" }, { word: "入試", reading: "にゅうし", meaning: "entrance exam / ভর্তি পরীক্ষা" }, { word: "試す", reading: "ためす", meaning: "to try / চেষ্টা করা" }], sentences: [{ japanese: "来週、試験があります。", reading: "らいしゅう、しけんが あります。", meaning: "There is an exam next week. / আগামী সপ্তাহে পরীক্ষা আছে।" }], lesson: 19 },
    { id: "N4K184", kanji: "験", meaning: "effect, testing / পরীক্ষা, অভিজ্ঞতা, পরীক্ষা নেওয়া", kunyomi: ["しら.べる"], onyomi: ["ケン"], vocabulary: [{ word: "試験", reading: "しけん", meaning: "examination / পরীক্ষা" }, { word: "実験", reading: "じっけん", meaning: "experiment / পরীক্ষা" }, { word: "経験", reading: "けいけん", meaning: "experience / অভিজ্ঞতা" }, { word: "受験する", reading: "じゅけんする", meaning: "to take an examination / পরীক্ষা দেওয়া" }], sentences: [{ japanese: "科学の実験をします。", reading: "かがくの じっけんを します。", meaning: "I will do a science experiment. / বিজ্ঞানের পরীক্ষা-নিরীক্ষা করব।" }], lesson: 19 },
    { id: "N4K185", kanji: "質", meaning: "quality, matter / প্রশ্ন জিজ্ঞেস করা, গুণমান", kunyomi: [], onyomi: ["シツ"], vocabulary: [{ word: "質問する", reading: "しつもんする", meaning: "to ask a question / প্রশ্ন জিজ্ঞেস করা" }, { word: "品質", reading: "ひんしつ", meaning: "quality / গুণমান" }], sentences: [{ japanese: "この製品は品質が良いです。", reading: "この せいひんは ひんしつが よいです。", meaning: "This product is of good quality. / এই পণ্যটির গুণমান ভালো।" }], lesson: 19 },
    { id: "N4K186", kanji: "会", meaning: "meet, meeting / সময় মত দেখা, ম্যাচ", kunyomi: ["あ.う"], onyomi: ["カイ", "エ"], vocabulary: [{ word: "間に合う", reading: "まにあう", meaning: "to be in time / সময় মত দেখা / সময়মতো উপস্থিত হওয়া" }, { word: "試合", reading: "しあい", meaning: "game / ম্যাচ" }], sentences: [{ japanese: "電車に間に合いました。", reading: "でんしゃに まにあいました。", meaning: "I made it in time for the train. / ট্রেনটি সময়মতো ধরতে পেরেছি।" }], lesson: 19 },
    { id: "N4K187", kanji: "場", meaning: "place / মামলা, সুবিধাজনক", kunyomi: ["ば"], onyomi: ["ジョウ", "ゴウ"], vocabulary: [{ word: "場合", reading: "ばあい", meaning: "case / মামলা" }, { word: "都合がいい", reading: "つごうがいい", meaning: "convenient / সুবিধাজনক" }], sentences: [{ japanese: "その場合は連絡してください。", reading: "その ばあいは れんらくして ください。", meaning: "Please contact me in that case. / সেই ক্ষেত্রে যোগাযোগ করবেন।" }], lesson: 19 },
    { id: "N4K188", kanji: "答", meaning: "answer / উত্তর", kunyomi: ["こた.える", "こた.え"], onyomi: ["トウ"], vocabulary: [{ word: "答える", reading: "こたえる", meaning: "to answer / উত্তর" }, { word: "答え", reading: "こたえ", meaning: "answer / উত্তর" }, { word: "解答", reading: "かいとう", meaning: "answer / উত্তর" }], sentences: [{ japanese: "質問に答えてください。", reading: "しつもんには こたえて ください。", meaning: "Please answer the question. / প্রশ্নের উত্তর দিন।" }], lesson: 19 },
    { id: "N4K189", kanji: "用", meaning: "utilize, business / কাজ, ব্যবহার করা, শিশুদের জন্য, ব্যবহার নিষিদ্ধ", kunyomi: ["もち.いる"], onyomi: ["ヨウ"], vocabulary: [{ word: "用事", reading: "ようじ", meaning: "business / কাজ" }, { word: "利用する", reading: "りようする", meaning: "to use / ব্যবহার করা" }, { word: "子ども用", reading: "こどもよう", meaning: "for children / শিশুদের জন্য" }, { word: "使用禁止", reading: "しようきんし", meaning: "do not use / ব্যবহার নিষিদ্ধ" }], sentences: [{ japanese: "今日は用事があります。", reading: "きょうは ようじが あります。", meaning: "I have business today. / আজ আমার কাজ আছে।" }], lesson: 19 },
    { id: "N4K190", kanji: "紙", meaning: "paper / কাগজ, চিঠি, কাগজ কপি করা, সংবাদপত্র", kunyomi: ["かみ"], onyomi: ["シ"], vocabulary: [{ word: "紙", reading: "かみ", meaning: "paper / কাগজ" }, { word: "手紙", reading: "てがみ", meaning: "letter / চিঠি" }, { word: "コピー用紙", reading: "こぴーようし", meaning: "photocopying paper / কাগজ কপি করা" }, { word: "新聞紙", reading: "しんぶんし", meaning: "a piece of newspaper / সংবাদপত্র" }], sentences: [{ japanese: "紙に名前を書きます。", reading: "かみに なまえを かきます。", meaning: "I write my name on paper. / কাগজে নাম লিখি।" }], lesson: 19 },
    { id: "N4K191", kanji: "意", meaning: "mind, idea / অর্থ, সাবধান, প্রস্তুত করা, মতামত", kunyomi: [], onyomi: ["イ"], vocabulary: [{ word: "意味", reading: "いみ", meaning: "meaning / অর্থ" }, { word: "注意する", reading: "ちゅういする", meaning: "to pay attention / সাবধান" }, { word: "用意する", reading: "よういする", meaning: "to prepare / প্রস্তুত করা" }, { word: "意見", reading: "いけん", meaning: "opinion / মতামত" }], sentences: [{ japanese: "自分の意見を言います。", reading: "じぶんの いけんを いいます。", meaning: "I state my own opinion. / নিজের মতামত প্রকাশ করি।" }], lesson: 19 },

    // --- LESSON 20 ---
    { id: "N4K192", kanji: "引", meaning: "to pull / টানা, টাকা তোলা, মহাকর্ষ", kunyomi: ["ひ.く", "ひ.き", "ひ.ーく"], onyomi: ["イン"], vocabulary: [{ word: "引く", reading: "ひく", meaning: "to pull / টানা" }, { word: "引き出し", reading: "ひきだし", meaning: "Withdraw money / টাকা তোলা" }, { word: "引力", reading: "いんりょく", meaning: "Gravity / মহাকর্ষ" }], sentences: [{ japanese: "ドアを引いてください。", reading: "どあを ひいて ください。", meaning: "Please pull the door. / দরজাটি টানুন।" }], lesson: 20 },
    { id: "N4K193", kanji: "開", meaning: "to open / খোলা, দোকানের উদ্বোধন, শুরু করা", kunyomi: ["あ.ける", "あ.く", "ひら.く"], onyomi: ["カイ"], vocabulary: [{ word: "開ける", reading: "あける", meaning: "To open / খোলা" }, { word: "開く", reading: "ひらく", meaning: "To open / খোলা" }, { word: "開店", reading: "かいてん", meaning: "Opening of shop / দোকানের উদ্বোধন" }, { word: "開始する", reading: "かいしする", meaning: "To start / শুরু করা" }], sentences: [{ japanese: "窓を開けます。", reading: "まどを あけます。", meaning: "I open the window. / জানালা খুলি।" }], lesson: 20 },
    { id: "N4K194", kanji: "閉", meaning: "to close / বন্ধ করা, (সুবিধাগুলো) বন্ধ করা, সমাপনী অনুষ্ঠান", kunyomi: ["し.める", "し.まる", "と.じる"], onyomi: ["ヘイ"], vocabulary: [{ word: "閉める", reading: "しめる", meaning: "To close / বন্ধ করা" }, { word: "閉じる", reading: "とじる", meaning: "To close / বন্ধ করা" }, { word: "閉館する", reading: "へいかんする", meaning: "To close facilities / (সুবিধাগুলো) বন্ধ করা" }, { word: "閉会式", reading: "へいかいしき", meaning: "Closing ceremony / সমাপনী অনুষ্ঠান" }], sentences: [{ japanese: "ドアを閉めます。", reading: "どあを しめます。", meaning: "I close the door. / দরজা বন্ধ করি।" }], lesson: 20 },
    { id: "N4K195", kanji: "去", meaning: "past, leave / গত বছর, অতীত, মুছে ফেলা", kunyomi: ["さ.る"], onyomi: ["キョ", "コ"], vocabulary: [{ word: "去年", reading: "きょねん", meaning: "Last year / গত বছর" }, { word: "過去", reading: "かこ", meaning: "The past / অতীত" }, { word: "消去", reading: "しょうきょ", meaning: "Erasing / মুছে ফেলা" }], sentences: [{ japanese: "去年、日本へ来ました。", reading: "きょねん、にほんへ きました。", meaning: "I came to Japan last year. / গত বছর জাপানে এসেছি।" }], lesson: 20 },
    { id: "N4K196", kanji: "死", meaning: "death, die / মরা, মৃত, আকস্মিক মৃত্যু, রোগে মরা", kunyomi: ["し.ぬ"], onyomi: ["シ"], vocabulary: [{ word: "死ぬ", reading: "しぬ", meaning: "To die / মরা" }, { word: "死者", reading: "ししゃ", meaning: "The dead / মৃত" }, { word: "急死", reading: "きゅうし", meaning: "Sudden death / আকস্মিক মৃত্যু" }, { word: "病死", reading: "びょうし", meaning: "Die of disease / রোগে মরা" }], sentences: [{ japanese: "命を大切にします。", reading: "いのちを たいせつに します。", meaning: "I value life. / জীবনকে মূল্যবান মনে করি।" }], lesson: 20 },
    { id: "N4K197", kanji: "集", meaning: "to gather, collect / সংগ্রহ করা, জড়ো করা, বিবিধ, একসাথে জড়ো করা", kunyomi: ["あつ.める", "あつ.まる", "つど.う"], onyomi: ["シュウ"], vocabulary: [{ word: "集める", reading: "あつめる", meaning: "To collect / সংগ্রহ করা" }, { word: "集まる", reading: "あつまる", meaning: "To gather / জড়ো করা" }, { word: "文集", reading: "ぶんしゅう", meaning: "Miscellany / বিবিধ" }, { word: "集合する", reading: "しゅうごうする", meaning: "To get together / একসাথে জড়ো করা" }], sentences: [{ japanese: "切手を集めています。", reading: "きってを あつめて います。", meaning: "I am collecting stamps. / ডাকটিকিট সংগ্রহ করছি।" }], lesson: 20 },
    { id: "N4K198", kanji: "知", meaning: "to know / জানা, পরিচিত, নোটিশ, জ্ঞান", kunyomi: ["し.る"], onyomi: ["チ"], vocabulary: [{ word: "知る", reading: "しる", meaning: "To know / জানা" }, { word: "知り合い", reading: "しりあい", meaning: "Acquaintance / পরিচিত" }, { word: "通知", reading: "つうち", meaning: "Notice / নোটিশ" }, { word: "知識", reading: "ちしき", meaning: "Knowledge / জ্ঞান" }], sentences: [{ japanese: "この道を知っていますか。", reading: "このみちを しって いますか。", meaning: "Do you know this road? / আপনি কি এই রাস্তাটি চেনেন?" }], lesson: 20 },
    { id: "N4K199", kanji: "売", meaning: "to sell / বিক্রি করা, দোকান, কাউন্টার/বিকেরির এলাকা, ভেন্ডিং মেশিন", kunyomi: ["う.る", "う.れる"], onyomi: ["バイ"], vocabulary: [{ word: "売る", reading: "うる", meaning: "To sell / বিক্রি করা" }, { word: "売店", reading: "ばいてん", meaning: "Stand / দোকান" }, { word: "売り場", reading: "うりば", meaning: "Counter / কাউন্টার / বিক্রির এলাকা" }, { word: "自動販売機", reading: "じどうはんばいき", meaning: "Vending machine / ভেন্ডিং মেশিন" }], sentences: [{ japanese: "本を売ります。", reading: "ほんを うります。", meaning: "I sell books. / বই বিক্রি করি।" }], lesson: 20 },
    { id: "N4K200", kanji: "説", meaning: "explanation, theory / ব্যাখ্যা করা, উপন্যাস", kunyomi: ["と.く"], onyomi: ["セツ"], vocabulary: [{ word: "説明する", reading: "せつめいする", meaning: "To explain / ব্যাখ্যা করা" }, { word: "小説", reading: "しょうせつ", meaning: "Novel / উপন্যাস" }], sentences: [{ japanese: "ルールを説明してください。", reading: "るーるを せつめいして ください。", meaning: "Please explain the rules. / নিয়মগুলো ব্যাখ্যা করুন।" }], lesson: 20 },
    { id: "N4K201", kanji: "思", meaning: "to think / চিন্তা করা, মনে করা / স্মরণ করা, স্মৃতি, চিন্তা", kunyomi: ["おも.う"], onyomi: ["シ"], vocabulary: [{ word: "思う", reading: "おもう", meaning: "To think / চিন্তা করা" }, { word: "思い出す", reading: "おもいだす", meaning: "To remember / মনে করা / স্মরণ করা" }, { word: "思い出", reading: "おもいで", meaning: "Memory / স্মৃতি" }, { word: "思想", reading: "しそう", meaning: "Thought / চিন্তা" }], sentences: [{ japanese: "そう思います。", reading: "そう おもいます。", meaning: "I think so. / আমি তাই মনে করি।" }], lesson: 20 }
];

// ==========================================
// 2. SCHEDULER CONFIGURATION
// ==========================================
const SRS_CONFIG = {
    startingEase: 2.5,
    minEase: 1.3,
    maxEase: 3.5,
    learningSteps: [1, 10], 
    dayInMs: 24 * 60 * 60 * 1000,
    minInMs: 60 * 1000,
    graduatingIntervalDays: 1,
    easyInitialIntervalDays: 2,
    easyBonus: 1.3,
    hardMultiplier: 1.2,
    maxIntervalDays: 60
};

const STORAGE_KEY = 'n4_kanji_progress';
let kanjiProgress = {};

// ==========================================
// 3. LOCAL STORAGE MANAGEMENT
// ==========================================
function loadProgress() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        kanjiProgress = JSON.parse(data).cards || {};
    } else {
        kanjiProgress = {};
    }
    
    KANJI_DATA.forEach(card => {
        if (!kanjiProgress[card.id]) {
            kanjiProgress[card.id] = createDefaultRecord();
        }
    });
}

function saveProgress() {
    const payload = { version: 1, cards: kanjiProgress };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function createDefaultRecord() {
    return {
        state: "new", due: null, interval: 0, ease: SRS_CONFIG.startingEase, step: 0,            
        reps: 0, lapses: 0, attempts: 0, again: 0, hard: 0, good: 0, easy: 0, lastReview: null
    };
}

function resetProgress() {
    if (confirm("Reset all N4 Kanji progress and scheduling data?\n\nThis cannot be undone.")) {
        localStorage.removeItem(STORAGE_KEY);
        loadProgress();
        renderDashboard();
    }
}

// ==========================================
// 4. SCHEDULER ALGORITHM
// ==========================================
function isDue(record, now) {
    if (record.state === 'new') return true;
    if (record.due === null) return true;
    return record.due <= now;
}

function calculateNextInterval(record, rating, now) {
    let next = { ...record };
    next.attempts++;
    next.lastReview = now;
    
    if (rating === 'again') next.again++;
    if (rating === 'hard') next.hard++;
    if (rating === 'good') next.good++;
    if (rating === 'easy') next.easy++;

    if (next.state === 'new' || next.state === 'learning') {
        if (rating === 'again') {
            next.state = 'learning';
            next.step = 0;
            next.due = now + (SRS_CONFIG.learningSteps[0] * SRS_CONFIG.minInMs);
        } else if (rating === 'hard') {
            next.state = 'learning';
            let currentStepMin = SRS_CONFIG.learningSteps[next.step] || SRS_CONFIG.learningSteps[0];
            next.due = now + (currentStepMin * SRS_CONFIG.minInMs);
        } else if (rating === 'good') {
            next.state = 'learning';
            next.step++;
            if (next.step >= SRS_CONFIG.learningSteps.length) {
                next.state = 'review';
                next.interval = SRS_CONFIG.graduatingIntervalDays;
                next.due = now + (next.interval * SRS_CONFIG.dayInMs);
            } else {
                next.due = now + (SRS_CONFIG.learningSteps[next.step] * SRS_CONFIG.minInMs);
            }
        } else if (rating === 'easy') {
            next.state = 'review';
            next.interval = SRS_CONFIG.easyInitialIntervalDays;
            next.due = now + (next.interval * SRS_CONFIG.dayInMs);
        }
    } else if (next.state === 'review') {
        if (rating === 'again') {
            next.lapses++;
            next.ease = Math.max(SRS_CONFIG.minEase, next.ease - 0.2);
            next.state = 'learning';
            next.step = 0;
            next.interval = 0;
            next.due = now + (SRS_CONFIG.learningSteps[0] * SRS_CONFIG.minInMs);
        } else if (rating === 'hard') {
            next.ease = Math.max(SRS_CONFIG.minEase, next.ease - 0.15);
            next.interval = next.interval * SRS_CONFIG.hardMultiplier;
            next.due = now + (next.interval * SRS_CONFIG.dayInMs);
        } else if (rating === 'good') {
            next.interval = next.interval * next.ease;
            next.due = now + (next.interval * SRS_CONFIG.dayInMs);
        } else if (rating === 'easy') {
            next.ease = Math.min(SRS_CONFIG.maxEase, next.ease + 0.15);
            next.interval = next.interval * next.ease * SRS_CONFIG.easyBonus;
            next.due = now + (next.interval * SRS_CONFIG.dayInMs);
        }
        if (next.state === 'review') {
            next.interval = Math.min(next.interval, SRS_CONFIG.maxIntervalDays);
        }
    }
    return next;
}

function getNextTimes(record) {
    const now = Date.now();
    const formats = {};
    const ratings = ['again', 'hard', 'good', 'easy'];
    ratings.forEach(rating => {
        let simulated = calculateNextInterval(record, rating, now);
        let diffMs = simulated.due - now;
        formats[rating] = formatTimeDiff(diffMs);
    });
    return formats;
}

function formatTimeDiff(ms) {
    let mins = Math.round(ms / 60000);
    if (mins < 60) return `${mins}m`;
    let hours = Math.round(mins / 60);
    if (hours < 24) return `${hours}h`;
    let days = Math.round(hours / 24);
    if (days < 30) return `${days}d`;
    let mo = Math.round(days / 30);
    return `${mo}mo`;
}

// ==========================================
// 5. DASHBOARD & UI NAVIGATION
// ==========================================
const DOM = {
    viewDashboard: document.getElementById('view-dashboard'),
    viewPractice: document.getElementById('view-practice'),
    viewSummary: document.getElementById('view-summary'),
    deckList: document.getElementById('deck-list'),
    flashcard: document.getElementById('flashcard'),
    btnReveal: document.getElementById('btn-reveal'),
    ratingControls: document.getElementById('rating-controls')
};

function switchView(viewId) {
    DOM.viewDashboard.classList.add('hidden');
    DOM.viewPractice.classList.add('hidden');
    DOM.viewSummary.classList.add('hidden');
    document.getElementById(viewId).classList.remove('hidden');
}

function renderDashboard() {
    const now = Date.now();
    let deckMap = { master: [] };
    
    for(let i=1; i<=20; i++) {
        deckMap[i] = [];
    }

    KANJI_DATA.forEach(card => {
        if (deckMap[card.lesson]) deckMap[card.lesson].push(card);
        deckMap.master.push(card);
    });

    let dashboardHTML = ''; 

    for(let i=1; i<=20; i++) {
        const cards = deckMap[i];
        if (cards.length === 0) continue;

        let stats = { new: 0, learning: 0, due: 0, strong: 0, weak: 0 };
        cards.forEach(card => {
            const record = kanjiProgress[card.id];
            if (record.state === 'new') stats.new++;
            else if (record.state === 'learning') stats.learning++;
            if (isDue(record, now) && record.state !== 'new') stats.due++;
            if (record.state === 'review' && record.interval > 21) stats.strong++;
            if (record.lapses >= 2 || (record.attempts > 3 && record.ease < 2.0)) stats.weak++;
        });

        dashboardHTML += `
            <div class="deck-card">
                <div class="deck-header">
                    <div class="deck-title">Lesson ${i}</div>
                    <div class="deck-count">${cards.length} Kanji</div>
                </div>
                <div class="deck-stats">
                    <span>New: ${stats.new}</span>
                    <span>Learn: ${stats.learning}</span>
                    <span>Due: ${stats.due}</span>
                    <span>Strong: ${stats.strong}</span>
                    ${stats.weak > 0 ? `<span style="background:rgba(239,68,68,0.2); color:#fca5a5;">Weak: ${stats.weak}</span>` : ''}
                </div>
                <div class="deck-actions">
                    <button class="btn-action action-due" onclick="startSession('${i}', 'due')">Due</button>
                    <button class="btn-action" onclick="startSession('${i}', 'new')">New</button>
                    <button class="btn-action" onclick="startSession('${i}', 'weak')">Weak</button>
                    <button class="btn-action" onclick="startSession('${i}', 'all')">All</button>
                </div>
            </div>
        `;
    }

    let masterCards = deckMap.master;
    let masterStats = { new: 0, learning: 0, due: 0, strong: 0, weak: 0 };
    masterCards.forEach(card => {
        const record = kanjiProgress[card.id];
        if (record.state === 'new') masterStats.new++;
        else if (record.state === 'learning') masterStats.learning++;
        if (isDue(record, now) && record.state !== 'new') masterStats.due++;
        if (record.state === 'review' && record.interval > 21) masterStats.strong++;
        if (record.lapses >= 2 || (record.attempts > 3 && record.ease < 2.0)) masterStats.weak++;
    });

    let masterHTML = `
        <div class="deck-card master-deck">
            <div class="deck-header">
                <div class="deck-title">MASTER DECK</div>
                <div class="deck-count">${masterCards.length} Kanji</div>
            </div>
            <div class="deck-stats">
                <span>New: ${masterStats.new}</span>
                <span>Learn: ${masterStats.learning}</span>
                <span>Due: ${masterStats.due}</span>
                <span>Strong: ${masterStats.strong}</span>
                ${masterStats.weak > 0 ? `<span style="background:rgba(239,68,68,0.2); color:#fca5a5;">Weak: ${masterStats.weak}</span>` : ''}
            </div>
            <div class="deck-actions">
                <button class="btn-action action-due" onclick="startSession('master', 'due')">Due</button>
                <button class="btn-action" onclick="startSession('master', 'new')">New</button>
                <button class="btn-action" onclick="startSession('master', 'weak')">Weak</button>
                <button class="btn-action" onclick="startSession('master', 'all')">All</button>
            </div>
        </div>
    `;

    DOM.deckList.innerHTML = masterHTML + dashboardHTML;
}

// ==========================================
// 6. SESSION MANAGEMENT
// ==========================================
let sessionQueue = [];
let sessionStats = { total: 0, reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
let currentCard = null;
let sessionFailures = [];
let isFlipped = false;

function startSession(deckId, mode) {
    const now = Date.now();
    let cards = deckId === 'master' ? KANJI_DATA : KANJI_DATA.filter(c => c.lesson == deckId);
    
    if (mode === 'due') {
        cards = cards.filter(c => isDue(kanjiProgress[c.id], now));
    } else if (mode === 'new') {
        cards = cards.filter(c => kanjiProgress[c.id].state === 'new');
    } else if (mode === 'weak') {
        cards = cards.filter(c => {
            const r = kanjiProgress[c.id];
            return r.lapses >= 2 || (r.attempts > 3 && r.ease < 2.0);
        });
    }

    if (cards.length === 0) {
        alert("No cards match this criteria.");
        return;
    }

    sessionQueue = cards.sort((a, b) => {
        const ra = kanjiProgress[a.id];
        const rb = kanjiProgress[b.id];
        const stateOrder = { 'learning': 1, 'review': 2, 'new': 3 };
        if (stateOrder[ra.state] !== stateOrder[rb.state]) return stateOrder[ra.state] - stateOrder[rb.state];
        if (ra.due !== rb.due) return (ra.due || 0) - (rb.due || 0);
        return Math.random() - 0.5;
    });

    sessionStats = { total: sessionQueue.length, reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
    sessionFailures = [];
    switchView('view-practice');
    nextCard();
}

function nextCard() {
    if (sessionQueue.length === 0) {
        endSession();
        return;
    }

    currentCard = sessionQueue.shift();
    const record = kanjiProgress[currentCard.id];
    
    DOM.flashcard.classList.remove('flipped');
    DOM.btnReveal.classList.remove('hidden');
    DOM.ratingControls.classList.add('hidden');
    isFlipped = false;
    
    document.getElementById('kanji-display-front').innerText = currentCard.kanji;
    
    const remain = sessionQueue.length + 1;
    document.getElementById('session-progress').innerText = `${sessionStats.reviewed + 1} / ${sessionStats.total + (sessionStats.reviewed - sessionStats.total + remain)}`;

    document.getElementById('kanji-display-back').innerText = currentCard.kanji;
    document.getElementById('kanji-meaning').innerText = currentCard.meaning;
    document.getElementById('kanji-kunyomi').innerText = currentCard.kunyomi.join(', ') || '-';
    document.getElementById('kanji-onyomi').innerText = currentCard.onyomi.join(', ') || '-';
    
    document.getElementById('kanji-vocab').innerHTML = currentCard.vocabulary.map(v => 
        `<li><span class="ex-jp">${v.word}</span><span class="ex-read">${v.reading}</span><span class="ex-en">${v.meaning}</span></li>`
    ).join('');
    
    document.getElementById('kanji-sentences').innerHTML = currentCard.sentences.map(s => 
        `<li><span class="ex-jp">${s.japanese}</span><span class="ex-read">${s.reading}</span><span class="ex-en">${s.meaning}</span></li>`
    ).join('');

    const times = getNextTimes(record);
    document.getElementById('time-again').innerText = times.again;
    document.getElementById('time-hard').innerText = times.hard;
    document.getElementById('time-good').innerText = times.good;
    document.getElementById('time-easy').innerText = times.easy;
    
    document.querySelector('.card-back-scroll').scrollTop = 0;
}

function revealCard() {
    if(isFlipped) return;
    DOM.flashcard.classList.add('flipped');
    DOM.btnReveal.classList.add('hidden');
    DOM.ratingControls.classList.remove('hidden');
    isFlipped = true;
}

DOM.flashcard.addEventListener('click', () => { if (!isFlipped) revealCard(); });
DOM.btnReveal.addEventListener('click', (e) => { e.stopPropagation(); revealCard(); });

function rateCard(rating) {
    const now = Date.now();
    let record = kanjiProgress[currentCard.id];
    const nextRecord = calculateNextInterval(record, rating, now);
    kanjiProgress[currentCard.id] = nextRecord;
    saveProgress();
    
    sessionStats.reviewed++;
    sessionStats[rating]++;
    
    if (rating === 'again') {
        if (!sessionFailures.includes(currentCard)) sessionFailures.push(currentCard);
    }
    if (nextRecord.due - now < (15 * 60 * 1000)) {
        const insertIndex = Math.min(sessionQueue.length, Math.floor(Math.random() * 3) + 2);
        sessionQueue.splice(insertIndex, 0, currentCard);
    }
    nextCard();
}

function endSession() {
    document.getElementById('sum-reviewed').innerText = sessionStats.reviewed;
    document.getElementById('sum-again').innerText = sessionStats.again;
    document.getElementById('sum-hard').innerText = sessionStats.hard;
    document.getElementById('sum-good').innerText = sessionStats.good;
    document.getElementById('sum-easy').innerText = sessionStats.easy;
    
    const btnReviewAgain = document.getElementById('btn-review-again');
    if (sessionFailures.length > 0) btnReviewAgain.classList.remove('hidden');
    else btnReviewAgain.classList.add('hidden');

    switchView('view-summary');
}

// ==========================================
// 7. EVENT LISTENERS
// ==========================================
document.getElementById('btn-reset').addEventListener('click', resetProgress);
document.getElementById('btn-exit-session').addEventListener('click', () => { renderDashboard(); switchView('view-dashboard'); });

document.querySelectorAll('.btn-rate').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        rateCard(e.currentTarget.getAttribute('data-rating'));
    });
});

document.getElementById('btn-back-deck').addEventListener('click', () => { renderDashboard(); switchView('view-dashboard'); });

document.getElementById('btn-review-again').addEventListener('click', () => {
    sessionQueue = [...sessionFailures];
    sessionStats = { total: sessionQueue.length, reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
    sessionFailures = [];
    switchView('view-practice');
    nextCard();
});

window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderDashboard();
});
