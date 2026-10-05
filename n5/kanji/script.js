// ==========================================
// 1. DATASET (All 170 N5 Kanji in 10 Thematic Decks)
// ==========================================
const KANJI_DATA = [
    // --- DECK 1: Numbers & Counters (1-13) ---
    { id: "N5K001", kanji: "一", meaning: "one / এক", kunyomi: ["ひと"], onyomi: ["イチ"], vocabulary: [{ word: "一つ", reading: "ひとつ", meaning: "one thing / একটি জিনিস" }], sentences: [{ japanese: "一つください。", reading: "ひとつ ください。", meaning: "Please give me one. / আমাকে একটি দিন।" }], deck: 1 },
    { id: "N5K002", kanji: "二", meaning: "two / দুই", kunyomi: ["ふた"], onyomi: ["ニ"], vocabulary: [{ word: "二つ", reading: "ふたつ", meaning: "two things / দুটি জিনিস" }], sentences: [{ japanese: "二人が来ました。", reading: "ふたりが きました。", meaning: "Two people came. / দুজন মানুষ এসেছে।" }], deck: 1 },
    { id: "N5K003", kanji: "三", meaning: "three / তিন", kunyomi: ["みっ"], onyomi: ["サン"], vocabulary: [{ word: "三日", reading: "みっか", meaning: "3rd day / ৩ তারিখ" }], sentences: [{ japanese: "三日やすみます。", reading: "みっか やすみます。", meaning: "I will rest for 3 days. / আমি তিন দিন বিশ্রাম নেব।" }], deck: 1 },
    { id: "N5K004", kanji: "四", meaning: "four / চার", kunyomi: ["よん", "よ", "よっ"], onyomi: ["シ"], vocabulary: [{ word: "四月", reading: "しがつ", meaning: "April / এপ্রিল মাস" }], sentences: [{ japanese: "四時に行きます。", reading: "よじに いきます。", meaning: "I will go at 4 o'clock. / আমি চারটায় যাব।" }], deck: 1 },
    { id: "N5K005", kanji: "五", meaning: "five / পাঁচ", kunyomi: ["いつ"], onyomi: ["ゴ"], vocabulary: [{ word: "五つ", reading: "いつつ", meaning: "five things / পাঁচটি জিনিস" }], sentences: [{ japanese: "五円です。", reading: "ごえん です。", meaning: "It is 5 yen. / এটা ৫ ইয়েন।" }], deck: 1 },
    { id: "N5K006", kanji: "六", meaning: "six / ছয়", kunyomi: ["むっ"], onyomi: ["ロク"], vocabulary: [{ word: "六日", reading: "むいか", meaning: "6th day / ৬ তারিখ" }], sentences: [{ japanese: "六時に起きます。", reading: "ろくじに おきます。", meaning: "I wake up at 6. / আমি ৬টায় উঠি।" }], deck: 1 },
    { id: "N5K007", kanji: "七", meaning: "seven / সাত", kunyomi: ["なな"], onyomi: ["シチ"], vocabulary: [{ word: "七月", reading: "しちがつ", meaning: "July / জুলাই মাস" }], sentences: [{ japanese: "七人います。", reading: "ななにん います。", meaning: "There are 7 people. / সাতজন মানুষ আছে।" }], deck: 1 },
    { id: "N5K008", kanji: "八", meaning: "eight / আট", kunyomi: ["やっ"], onyomi: ["ハチ"], vocabulary: [{ word: "八つ", reading: "やっつ", meaning: "eight things / আটটি জিনিস" }], sentences: [{ japanese: "八時半です。", reading: "はちじはん です。", meaning: "It is 8:30. / এখন সাড়ে আটটা।" }], deck: 1 },
    { id: "N5K009", kanji: "九", meaning: "nine / নয়", kunyomi: ["ここの"], onyomi: ["キュウ", "ク"], vocabulary: [{ word: "九月", reading: "くがつ", meaning: "September / সেপ্টেম্বর মাস" }], sentences: [{ japanese: "九月は暑い。", reading: "くがつは あつい。", meaning: "September is hot. / সেপ্টেম্বর মাস গরম।" }], deck: 1 },
    { id: "N5K010", kanji: "十", meaning: "ten / দশ", kunyomi: ["とお"], onyomi: ["ジュウ"], vocabulary: [{ word: "十分", reading: "じゅっぷん", meaning: "10 minutes / ১০ মিনিট" }], sentences: [{ japanese: "十日かかります。", reading: "とおか かかります。", meaning: "It takes 10 days. / দশ দিন সময় লাগবে।" }], deck: 1 },
    { id: "N5K011", kanji: "百", meaning: "hundred / একশ", kunyomi: [], onyomi: ["ヒャク"], vocabulary: [{ word: "三百", reading: "さんびゃく", meaning: "300 / তিনশ" }], sentences: [{ japanese: "百円です。", reading: "ひゃくえん です。", meaning: "It is 100 yen. / এটা ১০০ ইয়েন।" }], deck: 1 },
    { id: "N5K012", kanji: "千", meaning: "thousand / হাজার", kunyomi: ["ち"], onyomi: ["セン"], vocabulary: [{ word: "三千", reading: "さんぜん", meaning: "3,000 / তিন হাজার" }], sentences: [{ japanese: "千円札があります。", reading: "せんえんさつが あります。", meaning: "I have a 1000 yen bill. / আমার কাছে ১০০০ ইয়েনের নোট আছে।" }], deck: 1 },
    { id: "N5K013", kanji: "万", meaning: "ten thousand / দশ হাজার", kunyomi: [], onyomi: ["マン"], vocabulary: [{ word: "一万", reading: "いちまん", meaning: "10,000 / দশ হাজার" }], sentences: [{ japanese: "一万円払います。", reading: "いちまんえん はらいます。", meaning: "I will pay 10k yen. / আমি দশ হাজার ইয়েন দেব।" }], deck: 1 },

    // --- DECK 2: Time, Days & Calendar ---
    { id: "N5K014", kanji: "日", meaning: "day / sun / দিন", kunyomi: ["ひ", "か"], onyomi: ["ニチ", "ジツ"], vocabulary: [{ word: "今日", reading: "きょう", meaning: "today / আজ" }], sentences: [{ japanese: "今日はいい天気です。", reading: "きょうは いいてんき です。", meaning: "Weather is good today. / আজকের আবহাওয়া ভালো।" }], deck: 2 },
    { id: "N5K015", kanji: "月", meaning: "month / moon / মাস", kunyomi: ["つき"], onyomi: ["ゲツ", "ガツ"], vocabulary: [{ word: "今月", reading: "こんげつ", meaning: "this month / এই মাস" }], sentences: [{ japanese: "月がきれいです。", reading: "つきが きれいです。", meaning: "The moon is beautiful. / চাঁদ সুন্দর।" }], deck: 2 },
    { id: "N5K016", kanji: "火", meaning: "fire / আগুন", kunyomi: ["ひ"], onyomi: ["カ"], vocabulary: [{ word: "火曜日", reading: "かようび", meaning: "Tuesday / মঙ্গলবার" }], sentences: [{ japanese: "火に気をつけて。", reading: "ひに きをつけて。", meaning: "Careful with fire. / আগুন থেকে সাবধানে থাকবেন।" }], deck: 2 },
    { id: "N5K017", kanji: "水", meaning: "water / পানি", kunyomi: ["みず"], onyomi: ["スイ"], vocabulary: [{ word: "水曜日", reading: "すいようび", meaning: "Wednesday / বুধবার" }], sentences: [{ japanese: "水を飲みます。", reading: "みずを のみます。", meaning: "I drink water. / আমি পানি পান করি।" }], deck: 2 },
    { id: "N5K018", kanji: "木", meaning: "tree / wood / গাছ", kunyomi: ["き"], onyomi: ["モク"], vocabulary: [{ word: "木曜日", reading: "もくようび", meaning: "Thursday / বৃহস্পতিবার" }], sentences: [{ japanese: "大きな木ですね。", reading: "おおきな きですね。", meaning: "That's a big tree. / ওটা একটা বড় গাছ।" }], deck: 2 },
    { id: "N5K019", kanji: "金", meaning: "gold / money / স্বর্ণ, টাকা", kunyomi: ["かね"], onyomi: ["キン"], vocabulary: [{ word: "お金", reading: "おかね", meaning: "money / টাকা" }], sentences: [{ japanese: "お金がありません。", reading: "おかねが ありません。", meaning: "I don't have money. / আমার কাছে টাকা নেই।" }], deck: 2 },
    { id: "N5K020", kanji: "土", meaning: "soil / earth / মাটি", kunyomi: ["つち"], onyomi: ["ド"], vocabulary: [{ word: "土曜日", reading: "どようび", meaning: "Saturday / শনিবার" }], sentences: [{ japanese: "土曜日は休みです。", reading: "どようびは やすみです。", meaning: "I'm off on Saturday. / শনিবার আমার ছুটি।" }], deck: 2 },
    { id: "N5K021", kanji: "曜", meaning: "weekday / বার", kunyomi: [], onyomi: ["ヨウ"], vocabulary: [{ word: "日曜日", reading: "にちようび", meaning: "Sunday / রবিবার" }], sentences: [{ japanese: "何曜日ですか。", reading: "なんようび ですか。", meaning: "What day is it? / আজ কী বার?" }], deck: 2 },
    { id: "N5K056", kanji: "今", meaning: "now / এখন", kunyomi: ["いま"], onyomi: ["コン"], vocabulary: [{ word: "今", reading: "いま", meaning: "now / এখন" }], sentences: [{ japanese: "今は何時ですか。", reading: "いまは なんじですか。", meaning: "What time is it now? / এখন কয়টা বাজে?" }], deck: 2 },
    { id: "N5K057", kanji: "時", meaning: "time, hour / সময়, ঘণ্টা", kunyomi: ["とき"], onyomi: ["ジ"], vocabulary: [{ word: "時間", reading: "じかん", meaning: "time / সময়" }], sentences: [{ japanese: "時間がありません。", reading: "じかんが ありません。", meaning: "I have no time. / আমার কাছে সময় নেই।" }], deck: 2 },
    { id: "N5K058", kanji: "分", meaning: "minute, part / মিনিট, অংশ", kunyomi: ["わ.かる"], onyomi: ["フン", "ブン"], vocabulary: [{ word: "五分", reading: "ごふん", meaning: "5 minutes / ৫ মিনিট" }], sentences: [{ japanese: "日本語が分かります。", reading: "にほんごが わかります。", meaning: "I understand Japanese. / আমি জাপানি ভাষা বুঝি।" }], deck: 2 },
    { id: "N5K059", kanji: "半", meaning: "half / অর্ধেক", kunyomi: ["なか.ば"], onyomi: ["ハン"], vocabulary: [{ word: "半分", reading: "はんぶん", meaning: "half / অর্ধেক" }], sentences: [{ japanese: "九時半です。", reading: "くじはん です。", meaning: "It is 9:30. / এখন সাড়ে নয়টা।" }], deck: 2 },
    { id: "N5K060", kanji: "年", meaning: "year / বছর", kunyomi: ["とし"], onyomi: ["ネン"], vocabulary: [{ word: "来年", reading: "らいねん", meaning: "next year / আগামী বছর" }], sentences: [{ japanese: "来年、日本へ行きます。", reading: "らいねん、にほんへ いきます。", meaning: "I go to Japan next year. / আগামী বছর আমি জাপান যাব।" }], deck: 2 },
    { id: "N5K061", kanji: "午", meaning: "noon / দুপুর", kunyomi: [], onyomi: ["ゴ"], vocabulary: [{ word: "午後", reading: "ごご", meaning: "afternoon / বিকেল" }], sentences: [{ japanese: "午後に会いましょう。", reading: "ごごに あいましょう。", meaning: "Let's meet in the afternoon. / বিকেলে দেখা করি।" }], deck: 2 },
    { id: "N5K062", kanji: "前", meaning: "before, front / আগে, সামনে", kunyomi: ["まえ"], onyomi: ["ゼン"], vocabulary: [{ word: "名前", reading: "なまえ", meaning: "name / নাম" }], sentences: [{ japanese: "駅の前にいます。", reading: "えきの まえに います。", meaning: "I am in front of the station. / আমি স্টেশনের সামনে আছি।" }], deck: 2 },
    { id: "N5K063", kanji: "後", meaning: "after, behind / পরে, পিছনে", kunyomi: ["うし.ろ", "あと"], onyomi: ["ゴ"], vocabulary: [{ word: "後ろ", reading: "うしろ", meaning: "behind / পিছনে" }], sentences: [{ japanese: "後で電話します。", reading: "あとで でんわします。", meaning: "I'll call you later. / আমি পরে ফোন করব।" }], deck: 2 },
    { id: "N5K121", kanji: "朝", meaning: "morning / সকাল", kunyomi: ["あさ"], onyomi: ["チョウ"], vocabulary: [{ word: "毎朝", reading: "まいあさ", meaning: "every morning / প্রতিদিন সকালে" }], sentences: [{ japanese: "朝ごはんを食べます。", reading: "あさごはんを たべます。", meaning: "I eat breakfast. / আমি সকালে নাস্তা খাই।" }], deck: 2 },
    { id: "N5K122", kanji: "昼", meaning: "noon, daytime / দুপুর", kunyomi: ["ひる"], onyomi: ["チュウ"], vocabulary: [{ word: "昼休み", reading: "ひるやすみ", meaning: "lunch break / দুপুরের ছুটি" }], sentences: [{ japanese: "昼に寝ます。", reading: "ひるに ねます。", meaning: "I sleep at noon. / আমি দুপুরে ঘুমাই।" }], deck: 2 },
    { id: "N5K123", kanji: "夜", meaning: "night / রাত", kunyomi: ["よる", "よ"], onyomi: ["ヤ"], vocabulary: [{ word: "今夜", reading: "こんや", meaning: "tonight / আজ রাত" }], sentences: [{ japanese: "夜、テレビを見ます。", reading: "よる、てれびを みます。", meaning: "I watch TV at night. / আমি রাতে টিভি দেখি।" }], deck: 2 },
    { id: "N5K124", kanji: "夕", meaning: "evening / সন্ধ্যা", kunyomi: ["ゆう"], onyomi: ["セキ"], vocabulary: [{ word: "夕方", reading: "ゆうがた", meaning: "evening / সন্ধ্যা" }], sentences: [{ japanese: "夕方、雨が降りました。", reading: "ゆうがた、あめが ふりました。", meaning: "It rained in the evening. / সন্ধ্যায় বৃষ্টি হয়েছিল।" }], deck: 2 },
    { id: "N5K167", kanji: "毎", meaning: "every / প্রতি", kunyomi: [], onyomi: ["マイ"], vocabulary: [{ word: "毎日", reading: "まいにち", meaning: "every day / প্রতিদিন" }], sentences: [{ japanese: "毎日勉強します。", reading: "まいにち べんきょうします。", meaning: "I study every day. / আমি প্রতিদিন পড়ি।" }], deck: 2 },
    { id: "N5K168", kanji: "週", meaning: "week / সপ্তাহ", kunyomi: [], onyomi: ["シュウ"], vocabulary: [{ word: "来週", reading: "らいしゅう", meaning: "next week / আগামী সপ্তাহ" }], sentences: [{ japanese: "来週、テストがあります。", reading: "らいしゅう、てすとが あります。", meaning: "There is a test next week. / আগামী সপ্তাহে পরীক্ষা আছে।" }], deck: 2 },

    // --- DECK 3: People & Family ---
    { id: "N5K022", kanji: "人", meaning: "person / মানুষ", kunyomi: ["ひと"], onyomi: ["ジン", "ニン"], vocabulary: [{ word: "日本人", reading: "にほんじん", meaning: "Japanese person / জাপানি মানুষ" }], sentences: [{ japanese: "あの人は誰ですか。", reading: "あのひとは だれですか。", meaning: "Who is that person? / ওই মানুষটি কে?" }], deck: 3 },
    { id: "N5K023", kanji: "子", meaning: "child / শিশু", kunyomi: ["こ"], onyomi: ["シ"], vocabulary: [{ word: "子供", reading: "こども", meaning: "child / শিশু" }], sentences: [{ japanese: "子供が走っています。", reading: "こどもが はしっています。", meaning: "Child is running. / শিশুটি দৌড়াচ্ছে।" }], deck: 3 },
    { id: "N5K024", kanji: "男", meaning: "man / পুরুষ", kunyomi: ["おとこ"], onyomi: ["ダン"], vocabulary: [{ word: "男の人", reading: "おとこのひと", meaning: "man / পুরুষ" }], sentences: [{ japanese: "男の人がいます。", reading: "おとこのひとが います。", meaning: "There is a man. / একজন পুরুষ আছেন।" }], deck: 3 },
    { id: "N5K025", kanji: "女", meaning: "woman / নারী", kunyomi: ["おんな"], onyomi: ["ジョ"], vocabulary: [{ word: "女の子", reading: "おんなのこ", meaning: "girl / মেয়ে" }], sentences: [{ japanese: "女の人が話しています。", reading: "おんなのひとが はなしています。", meaning: "A woman is speaking. / একজন নারী কথা বলছেন।" }], deck: 3 },
    { id: "N5K026", kanji: "私", meaning: "I / private / আমি", kunyomi: ["わたし"], onyomi: ["シ"], vocabulary: [{ word: "私", reading: "わたし", meaning: "I / আমি" }], sentences: [{ japanese: "私は学生です。", reading: "わたしは がくせい です。", meaning: "I am a student. / আমি একজন ছাত্র।" }], deck: 3 },
    { id: "N5K111", kanji: "父", meaning: "father / বাবা", kunyomi: ["ちち"], onyomi: ["フ"], vocabulary: [{ word: "父", reading: "ちち", meaning: "father / বাবা" }], sentences: [{ japanese: "父は元気です。", reading: "ちちは げんきです。", meaning: "My father is well. / আমার বাবা ভালো আছেন।" }], deck: 3 },
    { id: "N5K112", kanji: "母", meaning: "mother / মা", kunyomi: ["はは"], onyomi: ["ボ"], vocabulary: [{ word: "母", reading: "はは", meaning: "mother / মা" }], sentences: [{ japanese: "母は先生です。", reading: "ははは せんせいです。", meaning: "My mother is a teacher. / আমার মা একজন শিক্ষক।" }], deck: 3 },
    { id: "N5K113", kanji: "兄", meaning: "older brother / বড় ভাই", kunyomi: ["あに"], onyomi: ["キョウ"], vocabulary: [{ word: "兄", reading: "あに", meaning: "older brother / বড় ভাই" }], sentences: [{ japanese: "兄がいます。", reading: "あにが います。", meaning: "I have an older brother. / আমার বড় ভাই আছে।" }], deck: 3 },
    { id: "N5K114", kanji: "弟", meaning: "younger brother / ছোট ভাই", kunyomi: ["おとうと"], onyomi: ["ダイ"], vocabulary: [{ word: "弟", reading: "おとうと", meaning: "younger brother / ছোট ভাই" }], sentences: [{ japanese: "弟は学生です。", reading: "おとうとは がくせいです。", meaning: "Younger brother is a student. / ছোট ভাই একজন ছাত্র।" }], deck: 3 },
    { id: "N5K115", kanji: "姉", meaning: "older sister / বড় বোন", kunyomi: ["あね"], onyomi: ["シ"], vocabulary: [{ word: "姉", reading: "あね", meaning: "older sister / বড় বোন" }], sentences: [{ japanese: "姉は結婚しています。", reading: "あねは けっこんしています。", meaning: "Older sister is married. / বড় বোন বিবাহিত।" }], deck: 3 },
    { id: "N5K116", kanji: "妹", meaning: "younger sister / ছোট বোন", kunyomi: ["いもうと"], onyomi: ["マイ"], vocabulary: [{ word: "妹", reading: "いもうと", meaning: "younger sister / ছোট বোন" }], sentences: [{ japanese: "妹が来ます。", reading: "いもうとが きます。", meaning: "Younger sister is coming. / ছোট বোন আসবে।" }], deck: 3 },

    // --- DECK 4: Verbs & Actions I ---
    { id: "N5K027", kanji: "行", meaning: "go / যাওয়া", kunyomi: ["い.く"], onyomi: ["コウ"], vocabulary: [{ word: "行く", reading: "いく", meaning: "to go / যাওয়া" }], sentences: [{ japanese: "学校へ行きます。", reading: "がっこうへ いきます。", meaning: "I go to school. / আমি স্কুলে যাই।" }], deck: 4 },
    { id: "N5K028", kanji: "来", meaning: "come / আসা", kunyomi: ["く.る"], onyomi: ["ライ"], vocabulary: [{ word: "来る", reading: "くる", meaning: "to come / আসা" }], sentences: [{ japanese: "友達が来ました。", reading: "ともだちが きました。", meaning: "A friend came. / বন্ধু এসেছে।" }], deck: 4 },
    { id: "N5K029", kanji: "食", meaning: "eat / খাওয়া", kunyomi: ["た.べる"], onyomi: ["ショク"], vocabulary: [{ word: "食べる", reading: "たべる", meaning: "to eat / খাওয়া" }], sentences: [{ japanese: "ご飯を食べます。", reading: "ごはんを たべます。", meaning: "I eat rice. / আমি ভাত খাই।" }], deck: 4 },
    { id: "N5K030", kanji: "見", meaning: "see / দেখা", kunyomi: ["み.る"], onyomi: ["ケン"], vocabulary: [{ word: "見る", reading: "みる", meaning: "to see / দেখা" }], sentences: [{ japanese: "映画を見ます。", reading: "えいがを みます。", meaning: "I watch a movie. / আমি সিনেমা দেখি।" }], deck: 4 },
    { id: "N5K031", kanji: "飲", meaning: "drink / পান করা", kunyomi: ["の.む"], onyomi: ["イン"], vocabulary: [{ word: "飲む", reading: "のむ", meaning: "to drink / পান করা" }], sentences: [{ japanese: "水を飲みます。", reading: "みずを のみます。", meaning: "I drink water. / আমি পানি পান করি।" }], deck: 4 },
    { id: "N5K032", kanji: "読", meaning: "read / পড়া", kunyomi: ["よ.む"], onyomi: ["ドク"], vocabulary: [{ word: "読む", reading: "よむ", meaning: "to read / পড়া" }], sentences: [{ japanese: "本を読みます。", reading: "ほんを よみます。", meaning: "I read a book. / আমি বই পড়ি।" }], deck: 4 },
    { id: "N5K033", kanji: "書", meaning: "write / লেখা", kunyomi: ["か.く"], onyomi: ["ショ"], vocabulary: [{ word: "書く", reading: "かく", meaning: "to write / লেখা" }], sentences: [{ japanese: "手紙を書きます。", reading: "てがみを かきます。", meaning: "I write a letter. / আমি চিঠি লিখি।" }], deck: 4 },
    { id: "N5K034", kanji: "言", meaning: "say / বলা", kunyomi: ["い.う"], onyomi: ["ゲン"], vocabulary: [{ word: "言葉", reading: "ことば", meaning: "word / শব্দ" }], sentences: [{ japanese: "彼ははいと言いました。", reading: "かれは はいと いいました。", meaning: "He said yes. / সে হ্যাঁ বলেছে।" }], deck: 4 },
    { id: "N5K035", kanji: "話", meaning: "speak / কথা বলা", kunyomi: ["はな.す", "はなし"], onyomi: ["ワ"], vocabulary: [{ word: "話す", reading: "はなす", meaning: "to speak / কথা বলা" }], sentences: [{ japanese: "先生と話します。", reading: "せんせいと はなします。", meaning: "I talk with the teacher. / আমি শিক্ষকের সাথে কথা বলি।" }], deck: 4 },
    { id: "N5K036", kanji: "買", meaning: "buy / কেনা", kunyomi: ["か.う"], onyomi: ["バイ"], vocabulary: [{ word: "買う", reading: "かう", meaning: "to buy / কেনা" }], sentences: [{ japanese: "鞄を買いました。", reading: "かばんを かいました。", meaning: "I bought a bag. / আমি একটি ব্যাগ কিনেছি।" }], deck: 4 },
    { id: "N5K085", kanji: "立", meaning: "stand / দাঁড়ানো", kunyomi: ["た.つ"], onyomi: ["リツ"], vocabulary: [{ word: "立つ", reading: "たつ", meaning: "to stand / দাঁড়ানো" }], sentences: [{ japanese: "立ってください。", reading: "たって ください。", meaning: "Please stand up. / দয়া করে দাঁড়ান।" }], deck: 4 },
    { id: "N5K086", kanji: "休", meaning: "rest / বিশ্রাম", kunyomi: ["やす.む", "やす.み"], onyomi: ["キュウ"], vocabulary: [{ word: "休み", reading: "やすみ", meaning: "holiday / ছুটি" }], sentences: [{ japanese: "今日は休みです。", reading: "きょうは やすみ です。", meaning: "Today is a holiday. / আজ ছুটি।" }], deck: 4 },
    { id: "N5K087", kanji: "入", meaning: "enter / প্রবেশ করা", kunyomi: ["はい.る", "い.れる"], onyomi: ["ニュウ"], vocabulary: [{ word: "入る", reading: "はいる", meaning: "to enter / প্রবেশ করা" }], sentences: [{ japanese: "部屋に入ります。", reading: "へやに はいります。", meaning: "I enter the room. / আমি রুমে প্রবেশ করি।" }], deck: 4 },
    { id: "N5K088", kanji: "出", meaning: "exit / বের হওয়া", kunyomi: ["で.る", "だ.す"], onyomi: ["シュツ"], vocabulary: [{ word: "出口", reading: "でぐち", meaning: "exit / বাহির হওয়ার পথ" }], sentences: [{ japanese: "家を出ます。", reading: "いえを でます。", meaning: "I leave the house. / আমি বাড়ি থেকে বের হই।" }], deck: 4 },
    { id: "N5K089", kanji: "開", meaning: "open / খোলা", kunyomi: ["あ.ける"], onyomi: ["カイ"], vocabulary: [{ word: "開ける", reading: "あける", meaning: "to open / খোলা" }], sentences: [{ japanese: "ドアを開けてください。", reading: "どあを あけてください。", meaning: "Please open the door. / দয়া করে দরজা খুলুন।" }], deck: 4 },
    { id: "N5K090", kanji: "閉", meaning: "close / বন্ধ করা", kunyomi: ["し.める"], onyomi: ["ヘイ"], vocabulary: [{ word: "閉める", reading: "しめる", meaning: "to close / বন্ধ করা" }], sentences: [{ japanese: "窓を閉めます。", reading: "まどを しめます。", meaning: "I close the window. / আমি জানালা বন্ধ করি।" }], deck: 4 },
    { id: "N5K091", kanji: "乗", meaning: "ride / চড়া", kunyomi: ["の.る"], onyomi: ["ジョウ"], vocabulary: [{ word: "乗る", reading: "のる", meaning: "to ride / চড়া" }], sentences: [{ japanese: "電車に乗ります。", reading: "でんしゃに のります。", meaning: "I ride the train. / আমি ট্রেনে উঠি।" }], deck: 4 },
    { id: "N5K092", kanji: "降", meaning: "descend, fall / নামা, পড়া", kunyomi: ["お.りる", "ふ.る"], onyomi: ["コウ"], vocabulary: [{ word: "降りる", reading: "おりる", meaning: "to get off / নামা" }], sentences: [{ japanese: "バスを降ります。", reading: "ばすを おります。", meaning: "I get off the bus. / আমি বাস থেকে নামি।" }], deck: 4 },
    { id: "N5K093", kanji: "会", meaning: "meet / দেখা করা", kunyomi: ["あ.う"], onyomi: ["カイ"], vocabulary: [{ word: "会う", reading: "あう", meaning: "to meet / দেখা করা" }], sentences: [{ japanese: "友達に会います。", reading: "ともだちに あいます。", meaning: "I meet a friend. / আমি বন্ধুর সাথে দেখা করি।" }], deck: 4 },

    // --- DECK 5: Verbs & Actions II ---
    { id: "N5K094", kanji: "思", meaning: "think / ভাবা", kunyomi: ["おも.う"], onyomi: ["シ"], vocabulary: [{ word: "思う", reading: "おもう", meaning: "to think / ভাবা" }], sentences: [{ japanese: "いいと思います。", reading: "いいと おもいます。", meaning: "I think it is good. / আমার মনে হয় এটা ভালো।" }], deck: 5 },
    { id: "N5K134", kanji: "歩", meaning: "walk / হাঁটা", kunyomi: ["ある.く"], onyomi: ["ホ"], vocabulary: [{ word: "歩く", reading: "あるく", meaning: "to walk / হাঁটা" }], sentences: [{ japanese: "歩いて行きます。", reading: "あるいて いきます。", meaning: "I will go on foot. / আমি হেঁটে যাব।" }], deck: 5 },
    { id: "N5K135", kanji: "走", meaning: "run / দৌড়ানো", kunyomi: ["はし.る"], onyomi: ["ソウ"], vocabulary: [{ word: "走る", reading: "はしる", meaning: "to run / দৌড়ানো" }], sentences: [{ japanese: "公園を走ります。", reading: "こうえんを はしります。", meaning: "I run in the park. / আমি পার্কে দৌড়াই।" }], deck: 5 },
    { id: "N5K136", kanji: "勉", meaning: "exertion / অধ্যবসায়", kunyomi: [], onyomi: ["ベン"], vocabulary: [{ word: "勉強", reading: "べんきょう", meaning: "study / পড়াশোনা" }], sentences: [{ japanese: "日本語を勉強します。", reading: "にほんごを べんきょうします。", meaning: "I study Japanese. / আমি জাপানি পড়াশোনা করি।" }], deck: 5 },
    { id: "N5K137", kanji: "強", meaning: "strong / শক্তিশালী", kunyomi: ["つよ.い"], onyomi: ["キョウ"], vocabulary: [{ word: "強い", reading: "つよい", meaning: "strong / শক্তিশালী" }], sentences: [{ japanese: "風が強いです。", reading: "かぜが つよいです。", meaning: "Wind is strong. / বাতাস শক্তিশালী।" }], deck: 5 },
    { id: "N5K138", kanji: "答", meaning: "answer / উত্তর দেওয়া", kunyomi: ["こた.える"], onyomi: ["トウ"], vocabulary: [{ word: "答える", reading: "こたえる", meaning: "to answer / উত্তর দেওয়া" }], sentences: [{ japanese: "質問に答えます。", reading: "しつもんに こたえます。", meaning: "I answer the question. / আমি প্রশ্নের উত্তর দিই।" }], deck: 5 },
    { id: "N5K139", kanji: "住", meaning: "live, dwell / বাস করা", kunyomi: ["す.む"], onyomi: ["ジュウ"], vocabulary: [{ word: "住む", reading: "すむ", meaning: "to live / বাস করা" }], sentences: [{ japanese: "東京に住んでいます。", reading: "とうきょうに すんでいます。", meaning: "I live in Tokyo. / আমি টোকিওতে বাস করি।" }], deck: 5 },
    { id: "N5K140", kanji: "知", meaning: "know / জানা", kunyomi: ["し.る"], onyomi: ["チ"], vocabulary: [{ word: "知る", reading: "しる", meaning: "to know / জানা" }], sentences: [{ japanese: "あの人を知っています。", reading: "あのひとを しっています。", meaning: "I know that person. / আমি ওই মানুষটিকে চিনি।" }], deck: 5 },
    { id: "N5K141", kanji: "作", meaning: "make / তৈরি করা", kunyomi: ["つく.る"], onyomi: ["サク"], vocabulary: [{ word: "作る", reading: "つくる", meaning: "to make / তৈরি করা" }], sentences: [{ japanese: "ケーキを作ります。", reading: "けーきを つくります。", meaning: "I make a cake. / আমি কেক তৈরি করি।" }], deck: 5 },
    { id: "N5K142", kanji: "海", meaning: "sea / সাগর", kunyomi: ["うみ"], onyomi: ["カイ"], vocabulary: [{ word: "海", reading: "うみ", meaning: "sea / সাগর" }], sentences: [{ japanese: "海へ行きたいです。", reading: "うみへ いきたいです。", meaning: "I want to go to the sea. / আমি সাগরে যেতে চাই।" }], deck: 5 },

    // --- DECK 6: Adjectives & Opposites ---
    { id: "N5K037", kanji: "大", meaning: "big / বড়", kunyomi: ["おお.きい"], onyomi: ["ダイ", "タイ"], vocabulary: [{ word: "大学", reading: "だいがく", meaning: "university / বিশ্ববিদ্যালয়" }], sentences: [{ japanese: "大きな家です。", reading: "おおきな いえ です。", meaning: "It is a big house. / এটি একটি বড় বাড়ি।" }], deck: 6 },
    { id: "N5K038", kanji: "小", meaning: "small / ছোট", kunyomi: ["ちい.さい"], onyomi: ["ショウ"], vocabulary: [{ word: "小さい", reading: "ちいさい", meaning: "small / ছোট" }], sentences: [{ japanese: "小さい犬です。", reading: "ちいさい いぬ です。", meaning: "It is a small dog. / এটি একটি ছোট কুকুর।" }], deck: 6 },
    { id: "N5K039", kanji: "高", meaning: "high, exp / উঁচু, দামি", kunyomi: ["たか.い"], onyomi: ["コウ"], vocabulary: [{ word: "高い", reading: "たかい", meaning: "expensive / দামি" }], sentences: [{ japanese: "この本は高いです。", reading: "この ほんは たかい です。", meaning: "This book is expensive. / এই বইটি দামি।" }], deck: 6 },
    { id: "N5K040", kanji: "安", meaning: "cheap, safe / সস্তা, নিরাপদ", kunyomi: ["やす.い"], onyomi: ["アン"], vocabulary: [{ word: "安い", reading: "やすい", meaning: "cheap / সস্তা" }], sentences: [{ japanese: "安い靴を買いました。", reading: "やすい くつを かいました。", meaning: "I bought cheap shoes. / আমি সস্তা জুতো কিনেছি।" }], deck: 6 },
    { id: "N5K041", kanji: "新", meaning: "new / নতুন", kunyomi: ["あたら.しい"], onyomi: ["シン"], vocabulary: [{ word: "新しい", reading: "あたらしい", meaning: "new / নতুন" }], sentences: [{ japanese: "新しい車が欲しい。", reading: "あたらしい くるまが ほしい。", meaning: "I want a new car. / আমি একটি নতুন গাড়ি চাই।" }], deck: 6 },
    { id: "N5K042", kanji: "古", meaning: "old / পুরাতন", kunyomi: ["ふる.い"], onyomi: ["コ"], vocabulary: [{ word: "古い", reading: "ふるい", meaning: "old / পুরাতন" }], sentences: [{ japanese: "古い時計です。", reading: "ふるい とけい です。", meaning: "It is an old watch. / এটি একটি পুরাতন ঘড়ি।" }], deck: 6 },
    { id: "N5K075", kanji: "多", meaning: "many / অনেক", kunyomi: ["おお.い"], onyomi: ["タ"], vocabulary: [{ word: "多い", reading: "おおい", meaning: "many / অনেক" }], sentences: [{ japanese: "人が多いです。", reading: "ひとが おおいです。", meaning: "There are many people. / অনেক মানুষ আছে।" }], deck: 6 },
    { id: "N5K076", kanji: "少", meaning: "few / কম", kunyomi: ["すく.ない", "すこ.し"], onyomi: ["ショウ"], vocabulary: [{ word: "少し", reading: "すこし", meaning: "a little / একটু" }], sentences: [{ japanese: "少し待ってください。", reading: "すこし まってください。", meaning: "Please wait a little. / একটু অপেক্ষা করুন।" }], deck: 6 },
    { id: "N5K077", kanji: "長", meaning: "long / লম্বা", kunyomi: ["なが.い"], onyomi: ["チョウ"], vocabulary: [{ word: "長い", reading: "ながい", meaning: "long / লম্বা" }], sentences: [{ japanese: "髪が長いです。", reading: "かみが ながいです。", meaning: "Hair is long. / চুল লম্বা।" }], deck: 6 },
    { id: "N5K078", kanji: "短", meaning: "short / খাটো", kunyomi: ["みじか.い"], onyomi: ["タン"], vocabulary: [{ word: "短い", reading: "みじかい", meaning: "short / খাটো" }], sentences: [{ japanese: "短い鉛筆です。", reading: "みじかい えんぴつ です。", meaning: "It is a short pencil. / এটি একটি ছোট পেন্সিল।" }], deck: 6 },
    { id: "N5K079", kanji: "明", meaning: "bright / উজ্জ্বল", kunyomi: ["あか.るい"], onyomi: ["メイ"], vocabulary: [{ word: "明日", reading: "あした", meaning: "tomorrow / আগামীকাল" }], sentences: [{ japanese: "明るい部屋です。", reading: "あかるい へや です。", meaning: "It is a bright room. / এটি একটি উজ্জ্বল ঘর।" }], deck: 6 },
    { id: "N5K080", kanji: "暗", meaning: "dark / অন্ধকার", kunyomi: ["くら.い"], onyomi: ["アン"], vocabulary: [{ word: "暗い", reading: "くらい", meaning: "dark / অন্ধকার" }], sentences: [{ japanese: "外は暗いです。", reading: "そとは くらい です。", meaning: "It is dark outside. / বাইরে অন্ধকার।" }], deck: 6 },
    { id: "N5K081", kanji: "白", meaning: "white / সাদা", kunyomi: ["しろ"], onyomi: ["ハク"], vocabulary: [{ word: "白い", reading: "しろい", meaning: "white / সাদা" }], sentences: [{ japanese: "白い犬です。", reading: "しろい いぬ です。", meaning: "It is a white dog. / এটি একটি সাদা কুকুর।" }], deck: 6 },
    { id: "N5K082", kanji: "黒", meaning: "black / কালো", kunyomi: ["くろ"], onyomi: ["コク"], vocabulary: [{ word: "黒い", reading: "くろい", meaning: "black / কালো" }], sentences: [{ japanese: "黒い猫がいます。", reading: "くろい ねこが います。", meaning: "There is a black cat. / একটি কালো বিড়াল আছে।" }], deck: 6 },
    { id: "N5K083", kanji: "赤", meaning: "red / লাল", kunyomi: ["あか"], onyomi: ["セキ"], vocabulary: [{ word: "赤い", reading: "あかい", meaning: "red / লাল" }], sentences: [{ japanese: "赤いりんごです。", reading: "あかい りんご です。", meaning: "It is a red apple. / এটি একটি লাল আপেল।" }], deck: 6 },
    { id: "N5K084", kanji: "青", meaning: "blue / নীল", kunyomi: ["あお"], onyomi: ["セイ"], vocabulary: [{ word: "青い", reading: "あおい", meaning: "blue / নীল" }], sentences: [{ japanese: "青い空がきれいです。", reading: "あおい そらが きれいです。", meaning: "The blue sky is beautiful. / নীল আকাশ সুন্দর।" }], deck: 6 },

    // --- DECK 7: Environment, Nature & Weather ---
    { id: "N5K043", kanji: "上", meaning: "up, above / উপরে", kunyomi: ["うえ"], onyomi: ["ジョウ"], vocabulary: [{ word: "上", reading: "うえ", meaning: "above / উপরে" }], sentences: [{ japanese: "机の上にあります。", reading: "つくえの うえに あります。", meaning: "It is on the desk. / এটি টেবিলের উপরে।" }], deck: 7 },
    { id: "N5K044", kanji: "下", meaning: "down, below / নিচে", kunyomi: ["した"], onyomi: ["カ", "ゲ"], vocabulary: [{ word: "下", reading: "した", meaning: "below / নিচে" }], sentences: [{ japanese: "机の下にあります。", reading: "つくえの したに あります。", meaning: "It is under the desk. / এটি টেবিলের নিচে।" }], deck: 7 },
    { id: "N5K045", kanji: "中", meaning: "inside, middle / ভিতরে, মাঝখানে", kunyomi: ["なか"], onyomi: ["チュウ"], vocabulary: [{ word: "中", reading: "なか", meaning: "inside / ভিতরে" }], sentences: [{ japanese: "箱の中にあります。", reading: "はこの なかに あります。", meaning: "It is inside the box. / এটি বাক্সের ভিতরে।" }], deck: 7 },
    { id: "N5K046", kanji: "外", meaning: "outside / বাইরে", kunyomi: ["そと"], onyomi: ["ガイ"], vocabulary: [{ word: "外", reading: "そと", meaning: "outside / বাইরে" }], sentences: [{ japanese: "外は寒いです。", reading: "そとは さむい です。", meaning: "It is cold outside. / বাইরে ঠাণ্ডা।" }], deck: 7 },
    { id: "N5K064", kanji: "山", meaning: "mountain / পাহাড়", kunyomi: ["やま"], onyomi: ["サン"], vocabulary: [{ word: "山", reading: "やま", meaning: "mountain / পাহাড়" }], sentences: [{ japanese: "山に登ります。", reading: "やまに のぼります。", meaning: "I climb a mountain. / আমি পাহাড়ে উঠি।" }], deck: 7 },
    { id: "N5K065", kanji: "川", meaning: "river / নদী", kunyomi: ["かわ"], onyomi: ["セン"], vocabulary: [{ word: "川", reading: "かわ", meaning: "river / নদী" }], sentences: [{ japanese: "川で泳ぎます。", reading: "かわで およぎます。", meaning: "I swim in the river. / আমি নদীতে সাঁতার কাটি।" }], deck: 7 },
    { id: "N5K066", kanji: "天", meaning: "heaven / আকাশ, স্বর্গ", kunyomi: ["あま"], onyomi: ["テン"], vocabulary: [{ word: "天気", reading: "てんき", meaning: "weather / আবহাওয়া" }], sentences: [{ japanese: "今日はいい天気です。", reading: "きょうは いい てんき です。", meaning: "Weather is nice today. / আজকের আবহাওয়া ভালো।" }], deck: 7 },
    { id: "N5K067", kanji: "気", meaning: "spirit, mood / মন, মেজাজ", kunyomi: ["き"], onyomi: ["キ"], vocabulary: [{ word: "元気", reading: "げんき", meaning: "healthy / সুস্থ" }], sentences: [{ japanese: "お元気ですか。", reading: "おげんき ですか。", meaning: "How are you? / আপনি কেমন আছেন?" }], deck: 7 },
    { id: "N5K068", kanji: "空", meaning: "sky, empty / আকাশ, খালি", kunyomi: ["そら"], onyomi: ["クウ"], vocabulary: [{ word: "空", reading: "そら", meaning: "sky / আকাশ" }], sentences: [{ japanese: "空が青いです。", reading: "そらが あおいです。", meaning: "The sky is blue. / আকাশ নীল।" }], deck: 7 },
    { id: "N5K069", kanji: "雨", meaning: "rain / বৃষ্টি", kunyomi: ["あめ"], onyomi: ["ウ"], vocabulary: [{ word: "雨", reading: "あめ", meaning: "rain / বৃষ্টি" }], sentences: [{ japanese: "雨が降っています。", reading: "あめが ふっています。", meaning: "It is raining. / বৃষ্টি পড়ছে।" }], deck: 7 },
    { id: "N5K117", kanji: "春", meaning: "spring / বসন্তকাল", kunyomi: ["はる"], onyomi: ["シュン"], vocabulary: [{ word: "春", reading: "はる", meaning: "spring / বসন্তকাল" }], sentences: [{ japanese: "春が来ました。", reading: "はるが きました。", meaning: "Spring has come. / বসন্তকাল এসেছে।" }], deck: 7 },
    { id: "N5K118", kanji: "夏", meaning: "summer / গ্রীষ্মকাল", kunyomi: ["なつ"], onyomi: ["カ"], vocabulary: [{ word: "夏休み", reading: "なつやすみ", meaning: "summer vacation / গ্রীষ্মের ছুটি" }], sentences: [{ japanese: "夏は暑いです。", reading: "なつは あついです。", meaning: "Summer is hot. / গ্রীষ্মকাল গরম।" }], deck: 7 },
    { id: "N5K119", kanji: "秋", meaning: "autumn / শরৎকাল", kunyomi: ["あき"], onyomi: ["シュウ"], vocabulary: [{ word: "秋", reading: "あき", meaning: "autumn / শরৎকাল" }], sentences: [{ japanese: "秋が来ました。", reading: "あきが きました。", meaning: "Autumn has come. / শরৎকাল এসেছে।" }], deck: 7 },
    { id: "N5K120", kanji: "冬", meaning: "winter / শীতকাল", kunyomi: ["ふゆ"], onyomi: ["トウ"], vocabulary: [{ word: "冬", reading: "ふゆ", meaning: "winter / শীতকাল" }], sentences: [{ japanese: "冬は雪が降ります。", reading: "ふゆは ゆきが ふります。", meaning: "It snows in winter. / শীতকালে বরফ পড়ে।" }], deck: 7 },
    { id: "N5K143", kanji: "林", meaning: "woods / বন", kunyomi: ["はやし"], onyomi: ["リン"], vocabulary: [{ word: "林", reading: "はやし", meaning: "woods / বন" }], sentences: [{ japanese: "林の中を歩く。", reading: "はやしの なかを あるく。", meaning: "Walk in the woods. / বনের ভেতর হাঁটি।" }], deck: 7 },
    { id: "N5K144", kanji: "森", meaning: "forest / জঙ্গল", kunyomi: ["もり"], onyomi: ["シン"], vocabulary: [{ word: "森", reading: "もり", meaning: "forest / জঙ্গল" }], sentences: [{ japanese: "深い森です。", reading: "ふかい もりです。", meaning: "It is a deep forest. / এটি একটি গভীর জঙ্গল।" }], deck: 7 },
    { id: "N5K145", kanji: "花", meaning: "flower / ফুল", kunyomi: ["はな"], onyomi: ["カ"], vocabulary: [{ word: "花", reading: "はな", meaning: "flower / ফুল" }], sentences: [{ japanese: "花を買います。", reading: "はなを かいます。", meaning: "I buy flowers. / আমি ফুল কিনি।" }], deck: 7 },
    { id: "N5K146", kanji: "草", meaning: "grass / ঘাস", kunyomi: ["くさ"], onyomi: ["ソウ"], vocabulary: [{ word: "草", reading: "くさ", meaning: "grass / ঘাস" }], sentences: [{ japanese: "草の上に座る。", reading: "くさの うえに すわる。", meaning: "Sit on the grass. / ঘাসের উপর বসি।" }], deck: 7 },

    // --- DECK 8: Body & Senses ---
    { id: "N5K070", kanji: "目", meaning: "eye / চোখ", kunyomi: ["め"], onyomi: ["モク"], vocabulary: [{ word: "目", reading: "め", meaning: "eye / চোখ" }], sentences: [{ japanese: "目が痛いです。", reading: "めが いたいです。", meaning: "My eyes hurt. / আমার চোখ ব্যথা করছে।" }], deck: 8 },
    { id: "N5K071", kanji: "耳", meaning: "ear / কান", kunyomi: ["みみ"], onyomi: ["ジ"], vocabulary: [{ word: "耳", reading: "みみ", meaning: "ear / কান" }], sentences: [{ japanese: "耳が聞こえません。", reading: "みみが きこえません。", meaning: "I cannot hear. / আমি কানে শুনতে পাই না।" }], deck: 8 },
    { id: "N5K072", kanji: "口", meaning: "mouth / মুখ", kunyomi: ["くち"], onyomi: ["コウ"], vocabulary: [{ word: "出口", reading: "でぐち", meaning: "exit / বাহির হওয়ার পথ" }], sentences: [{ japanese: "口を開けてください。", reading: "くちを あけてください。", meaning: "Please open your mouth. / দয়া করে মুখ খুলুন।" }], deck: 8 },
    { id: "N5K073", kanji: "手", meaning: "hand / হাত", kunyomi: ["て"], onyomi: ["シュ"], vocabulary: [{ word: "手紙", reading: "てがみ", meaning: "letter / চিঠি" }], sentences: [{ japanese: "手を洗います。", reading: "てを あらいます。", meaning: "I wash my hands. / আমি হাত ধুই।" }], deck: 8 },
    { id: "N5K074", kanji: "足", meaning: "foot, leg / পা", kunyomi: ["あし"], onyomi: ["ソク"], vocabulary: [{ word: "足", reading: "あし", meaning: "foot / পা" }], sentences: [{ japanese: "足が長いです。", reading: "あしが ながいです。", meaning: "Legs are long. / পা লম্বা।" }], deck: 8 },
    { id: "N5K156", kanji: "体", meaning: "body / শরীর", kunyomi: ["からだ"], onyomi: ["タイ"], vocabulary: [{ word: "体", reading: "からだ", meaning: "body / শরীর" }], sentences: [{ japanese: "体にいいです。", reading: "からだに いいです。", meaning: "It is good for the body. / এটি শরীরের জন্য ভালো।" }], deck: 8 },
    { id: "N5K157", kanji: "顔", meaning: "face / মুখমণ্ডল", kunyomi: ["かお"], onyomi: ["ガン"], vocabulary: [{ word: "顔", reading: "かお", meaning: "face / মুখমণ্ডল" }], sentences: [{ japanese: "顔を洗います。", reading: "かおを あらいます。", meaning: "I wash my face. / আমি মুখ ধুই।" }], deck: 8 },
    { id: "N5K158", kanji: "心", meaning: "heart, mind / হৃদয়, মন", kunyomi: ["こころ"], onyomi: ["シン"], vocabulary: [{ word: "安心", reading: "あんしん", meaning: "peace of mind / নিশ্চিন্ত" }], sentences: [{ japanese: "心から感謝します。", reading: "こころから かんしゃします。", meaning: "Thank you from my heart. / হৃদয় থেকে ধন্যবাদ।" }], deck: 8 },
    { id: "N5K159", kanji: "声", meaning: "voice / কণ্ঠস্বর", kunyomi: ["こえ"], onyomi: ["セイ"], vocabulary: [{ word: "声", reading: "こえ", meaning: "voice / কণ্ঠস্বর" }], sentences: [{ japanese: "大きな声で話します。", reading: "おおきな こえで はなします。", meaning: "Speak in a loud voice. / জোরে কথা বলি।" }], deck: 8 },

    // --- DECK 9: Society, School & Daily Life ---
    { id: "N5K047", kanji: "国", meaning: "country / দেশ", kunyomi: ["くに"], onyomi: ["コク"], vocabulary: [{ word: "外国", reading: "がいこく", meaning: "foreign country / বিদেশ" }], sentences: [{ japanese: "お国はどちらですか。", reading: "おくには どちら ですか。", meaning: "Where is your country? / আপনার দেশ কোথায়?" }], deck: 9 },
    { id: "N5K048", kanji: "学", meaning: "study / পড়াশোনা", kunyomi: ["まな.ぶ"], onyomi: ["ガク"], vocabulary: [{ word: "学生", reading: "がくせい", meaning: "student / ছাত্র" }], sentences: [{ japanese: "学校へ行きます。", reading: "がっこうへ いきます。", meaning: "I go to school. / আমি স্কুলে যাই।" }], deck: 9 },
    { id: "N5K049", kanji: "校", meaning: "school / স্কুল", kunyomi: [], onyomi: ["コウ"], vocabulary: [{ word: "学校", reading: "がっこう", meaning: "school / স্কুল" }], sentences: [{ japanese: "学校で勉強します。", reading: "がっこうで べんきょうします。", meaning: "I study at school. / আমি স্কুলে পড়ি।" }], deck: 9 },
    { id: "N5K050", kanji: "先", meaning: "before, ahead / আগে", kunyomi: ["さき"], onyomi: ["セン"], vocabulary: [{ word: "先生", reading: "せんせい", meaning: "teacher / শিক্ষক" }], sentences: [{ japanese: "お先に失礼します。", reading: "おさきに しつれいします。", meaning: "Excuse me for leaving first. / আমি আগে যাচ্ছি, মাফ করবেন।" }], deck: 9 },
    { id: "N5K051", kanji: "生", meaning: "life, birth / জীবন, জন্ম", kunyomi: ["い.きる"], onyomi: ["セイ", "ショウ"], vocabulary: [{ word: "学生", reading: "がくせい", meaning: "student / ছাত্র" }], sentences: [{ japanese: "先生の話を聞きます。", reading: "せんせいの はなしを ききます。", meaning: "I listen to the teacher. / আমি শিক্ষকের কথা শুনি।" }], deck: 9 },
    { id: "N5K052", kanji: "本", meaning: "book, root / বই, মূল", kunyomi: ["もと"], onyomi: ["ホン"], vocabulary: [{ word: "本", reading: "ほん", meaning: "book / বই" }], sentences: [{ japanese: "本を読みます。", reading: "ほんを よみます。", meaning: "I read a book. / আমি বই পড়ি।" }], deck: 9 },
    { id: "N5K053", kanji: "語", meaning: "language, word / ভাষা, শব্দ", kunyomi: ["かた.る"], onyomi: ["ゴ"], vocabulary: [{ word: "日本語", reading: "にほんご", meaning: "Japanese language / জাপানি ভাষা" }], sentences: [{ japanese: "日本語を話します。", reading: "にほんごを はなします。", meaning: "I speak Japanese. / আমি জাপানি ভাষায় কথা বলি।" }], deck: 9 },
    { id: "N5K054", kanji: "何", meaning: "what / কী", kunyomi: ["なに", "なん"], onyomi: ["カ"], vocabulary: [{ word: "何", reading: "なに", meaning: "what / কী" }], sentences: [{ japanese: "それは何ですか。", reading: "それは なんですか。", meaning: "What is that? / ওটা কী?" }], deck: 9 },
    { id: "N5K055", kanji: "友", meaning: "friend / বন্ধু", kunyomi: ["とも"], onyomi: ["ユウ"], vocabulary: [{ word: "友達", reading: "ともだち", meaning: "friend / বন্ধু" }], sentences: [{ japanese: "友達と遊びます。", reading: "ともだちと あそびます。", meaning: "I play with a friend. / আমি বন্ধুর সাথে খেলি।" }], deck: 9 },
    { id: "N5K095", kanji: "店", meaning: "shop / দোকান", kunyomi: ["みせ"], onyomi: ["テン"], vocabulary: [{ word: "店", reading: "みせ", meaning: "shop / দোকান" }], sentences: [{ japanese: "店でパンを買います。", reading: "みせで ぱんを かいます。", meaning: "I buy bread at the shop. / আমি দোকানে রুটি কিনি।" }], deck: 9 },
    { id: "N5K096", kanji: "道", meaning: "road / রাস্তা", kunyomi: ["みち"], onyomi: ["ドウ"], vocabulary: [{ word: "道", reading: "みち", meaning: "road / রাস্তা" }], sentences: [{ japanese: "道を歩きます。", reading: "みちを あるきます。", meaning: "I walk on the road. / আমি রাস্তায় হাঁটি।" }], deck: 9 },
    { id: "N5K097", kanji: "駅", meaning: "station / স্টেশন", kunyomi: [], onyomi: ["エキ"], vocabulary: [{ word: "駅", reading: "えき", meaning: "station / স্টেশন" }], sentences: [{ japanese: "駅で待ちます。", reading: "えきで まちます。", meaning: "I wait at the station. / আমি স্টেশনে অপেক্ষা করি।" }], deck: 9 },
    { id: "N5K098", kanji: "電", meaning: "electricity / বিদ্যুৎ", kunyomi: [], onyomi: ["デン"], vocabulary: [{ word: "電車", reading: "でんしゃ", meaning: "train / ট্রেন" }], sentences: [{ japanese: "電気を消してください。", reading: "でんきを けしてください。", meaning: "Please turn off the light. / দয়া করে আলো নিভিয়ে দিন।" }], deck: 9 },
    { id: "N5K099", kanji: "車", meaning: "car / গাড়ি", kunyomi: ["くるま"], onyomi: ["シャ"], vocabulary: [{ word: "車", reading: "くるま", meaning: "car / গাড়ি" }], sentences: [{ japanese: "車で行きます。", reading: "くるまで いきます。", meaning: "I go by car. / আমি গাড়িতে করে যাই।" }], deck: 9 },
    { id: "N5K100", kanji: "社", meaning: "company / কোম্পানি", kunyomi: ["やしろ"], onyomi: ["シャ"], vocabulary: [{ word: "会社", reading: "かいしゃ", meaning: "company / কোম্পানি" }], sentences: [{ japanese: "父は会社員です。", reading: "ちちは かいしゃいん です。", meaning: "My father is an office worker. / আমার বাবা কোম্পানির চাকরিজীবী।" }], deck: 9 },
    { id: "N5K105", kanji: "名", meaning: "name / নাম", kunyomi: ["な"], onyomi: ["メイ"], vocabulary: [{ word: "名前", reading: "なまえ", meaning: "name / নাম" }], sentences: [{ japanese: "お名前は何ですか。", reading: "おなまえは なんですか。", meaning: "What is your name? / আপনার নাম কী?" }], deck: 9 },
    { id: "N5K106", kanji: "銀", meaning: "silver / রূপা", kunyomi: [], onyomi: ["ギン"], vocabulary: [{ word: "銀行", reading: "ぎんこう", meaning: "bank / ব্যাংক" }], sentences: [{ japanese: "銀行はお休みです。", reading: "ぎんこうは おやすみです。", meaning: "The bank is closed. / ব্যাংক বন্ধ।" }], deck: 9 },
    { id: "N5K107", kanji: "病", meaning: "illness / রোগ", kunyomi: ["やまい"], onyomi: ["ビョウ"], vocabulary: [{ word: "病院", reading: "びょういん", meaning: "hospital / হাসপাতাল" }], sentences: [{ japanese: "病気になりました。", reading: "びょうきに なりました。", meaning: "I became sick. / আমি অসুস্থ হয়ে পড়েছি।" }], deck: 9 },
    { id: "N5K108", kanji: "院", meaning: "institution / প্রতিষ্ঠান", kunyomi: [], onyomi: ["イン"], vocabulary: [{ word: "大学院", reading: "だいがくいん", meaning: "graduate school / স্নাতক স্কুল" }], sentences: [{ japanese: "病院へ行きます。", reading: "びょういんへ いきます。", meaning: "I go to the hospital. / আমি হাসপাতালে যাই।" }], deck: 9 },
    { id: "N5K169", kanji: "紙", meaning: "paper / কাগজ", kunyomi: ["かみ"], onyomi: ["シ"], vocabulary: [{ word: "手紙", reading: "てがみ", meaning: "letter / চিঠি" }], sentences: [{ japanese: "紙に書きます。", reading: "かみに かきます。", meaning: "I write on paper. / আমি কাগজে লিখি।" }], deck: 9 },
    { id: "N5K170", kanji: "門", meaning: "gate / গেট", kunyomi: ["かど"], onyomi: ["モン"], vocabulary: [{ word: "専門", reading: "せんもん", meaning: "specialty / বিশেষত্ব" }], sentences: [{ japanese: "学校の門で待ちます。", reading: "がっこうの もんで まちます。", meaning: "I wait at the school gate. / আমি স্কুলের গেটে অপেক্ষা করি।" }], deck: 9 },

    // --- DECK 10: Animals, Food & Surroundings ---
    { id: "N5K101", kanji: "東", meaning: "east / পূর্ব", kunyomi: ["ひがし"], onyomi: ["トウ"], vocabulary: [{ word: "東", reading: "ひがし", meaning: "east / পূর্ব" }], sentences: [{ japanese: "東に行きます。", reading: "ひがしに いきます。", meaning: "I go east. / আমি পূর্ব দিকে যাই।" }], deck: 10 },
    { id: "N5K102", kanji: "西", meaning: "west / পশ্চিম", kunyomi: ["にし"], onyomi: ["セイ"], vocabulary: [{ word: "西", reading: "にし", meaning: "west / পশ্চিম" }], sentences: [{ japanese: "太陽が西に沈む。", reading: "たいようが にしに しずむ。", meaning: "Sun sets in the west. / সূর্য পশ্চিমে অস্ত যায়।" }], deck: 10 },
    { id: "N5K103", kanji: "南", meaning: "south / দক্ষিণ", kunyomi: ["みなみ"], onyomi: ["ナン"], vocabulary: [{ word: "南", reading: "みなみ", meaning: "south / দক্ষিণ" }], sentences: [{ japanese: "南口で会いましょう。", reading: "みなみぐちで あいましょう。", meaning: "Let's meet at the south exit. / দক্ষিণ গেটে দেখা করি।" }], deck: 10 },
    { id: "N5K104", kanji: "北", meaning: "north / উত্তর", kunyomi: ["きた"], onyomi: ["ホク"], vocabulary: [{ word: "北", reading: "きた", meaning: "north / উত্তর" }], sentences: [{ japanese: "北風が冷たいです。", reading: "きたかぜが つめたいです。", meaning: "North wind is cold. / উত্তরের হাওয়া ঠাণ্ডা।" }], deck: 10 },
    { id: "N5K109", kanji: "左", meaning: "left / বাম", kunyomi: ["ひだり"], onyomi: ["サ"], vocabulary: [{ word: "左", reading: "ひだり", meaning: "left / বাম" }], sentences: [{ japanese: "左に曲がります。", reading: "ひだりに まがります。", meaning: "Turn left. / বাম দিকে মোড় নিন।" }], deck: 10 },
    { id: "N5K110", kanji: "右", meaning: "right / ডান", kunyomi: ["みぎ"], onyomi: ["ウ", "ユウ"], vocabulary: [{ word: "右", reading: "みぎ", meaning: "right / ডান" }], sentences: [{ japanese: "右を見てください。", reading: "みぎを みてください。", meaning: "Please look right. / দয়া করে ডান দিকে তাকান।" }], deck: 10 },
    { id: "N5K147", kanji: "茶", meaning: "tea / চা", kunyomi: [], onyomi: ["チャ", "サ"], vocabulary: [{ word: "お茶", reading: "おちゃ", meaning: "tea / চা" }], sentences: [{ japanese: "お茶を飲みます。", reading: "おちゃを のみます。", meaning: "I drink tea. / আমি চা পান করি।" }], deck: 10 },
    { id: "N5K148", kanji: "肉", meaning: "meat / মাংস", kunyomi: [], onyomi: ["ニク"], vocabulary: [{ word: "牛肉", reading: "ぎゅうにく", meaning: "beef / গরুর মাংস" }], sentences: [{ japanese: "肉が好きです。", reading: "にくが すきです。", meaning: "I like meat. / আমি মাংস পছন্দ করি।" }], deck: 10 },
    { id: "N5K149", kanji: "魚", meaning: "fish / মাছ", kunyomi: ["さかな"], onyomi: ["ギョ"], vocabulary: [{ word: "魚", reading: "さかな", meaning: "fish / মাছ" }], sentences: [{ japanese: "魚を食べます。", reading: "さかなを たべます。", meaning: "I eat fish. / আমি মাছ খাই।" }], deck: 10 },
    { id: "N5K150", kanji: "鳥", meaning: "bird / পাখি", kunyomi: ["とり"], onyomi: ["チョウ"], vocabulary: [{ word: "小鳥", reading: "ことり", meaning: "small bird / ছোট পাখি" }], sentences: [{ japanese: "鳥が飛んでいます。", reading: "とりが とんでいます。", meaning: "A bird is flying. / একটি পাখি উড়ছে।" }], deck: 10 },
    { id: "N5K151", kanji: "牛", meaning: "cow / গরু", kunyomi: ["うし"], onyomi: ["ギュウ"], vocabulary: [{ word: "牛乳", reading: "ぎゅうにゅう", meaning: "milk / দুধ" }], sentences: [{ japanese: "牛乳を飲みます。", reading: "ぎゅうにゅうを のみます。", meaning: "I drink milk. / আমি দুধ পান করি।" }], deck: 10 },
    { id: "N5K152", kanji: "犬", meaning: "dog / কুকুর", kunyomi: ["いぬ"], onyomi: ["ケン"], vocabulary: [{ word: "犬", reading: "いぬ", meaning: "dog / কুকুর" }], sentences: [{ japanese: "犬がいます。", reading: "いぬが います。", meaning: "There is a dog. / একটি কুকুর আছে।" }], deck: 10 },
    { id: "N5K153", kanji: "色", meaning: "color / রঙ", kunyomi: ["いろ"], onyomi: ["ショク"], vocabulary: [{ word: "色々", reading: "いろいろ", meaning: "various / বিভিন্ন" }], sentences: [{ japanese: "何色が好きですか。", reading: "なにいろが すきですか。", meaning: "What color do you like? / আপনি কোন রঙ পছন্দ করেন?" }], deck: 10 },
    { id: "N5K154", kanji: "町", meaning: "town / শহর", kunyomi: ["まち"], onyomi: ["チョウ"], vocabulary: [{ word: "町", reading: "まち", meaning: "town / শহর" }], sentences: [{ japanese: "きれいな町です。", reading: "きれいな まちです。", meaning: "It's a beautiful town. / এটি একটি সুন্দর শহর।" }], deck: 10 },
    { id: "N5K155", kanji: "村", meaning: "village / গ্রাম", kunyomi: ["むら"], onyomi: ["ソン"], vocabulary: [{ word: "村", reading: "むら", meaning: "village / গ্রাম" }], sentences: [{ japanese: "小さな村です。", reading: "ちいさな むらです。", meaning: "It's a small village. / এটি একটি ছোট গ্রাম।" }], deck: 10 },
    { id: "N5K160", kanji: "音", meaning: "sound / শব্দ", kunyomi: ["おと"], onyomi: ["オン"], vocabulary: [{ word: "音楽", reading: "おんがく", meaning: "music / সঙ্গীত" }], sentences: [{ japanese: "音楽を聞きます。", reading: "おんがくを ききます。", meaning: "I listen to music. / আমি সঙ্গীত শুনি।" }], deck: 10 },
    { id: "N5K161", kanji: "楽", meaning: "music, fun / সঙ্গীত, আনন্দ", kunyomi: ["たの.しい"], onyomi: ["ガク", "ラク"], vocabulary: [{ word: "楽しい", reading: "たのしい", meaning: "fun / মজাদার" }], sentences: [{ japanese: "パーティーは楽しいです。", reading: "ぱーてぃーは たのしいです。", meaning: "Party is fun. / পার্টি আনন্দদায়ক।" }], deck: 10 },
    { id: "N5K162", kanji: "歌", meaning: "song, sing / গান, গাওয়া", kunyomi: ["うた", "うた.う"], onyomi: ["カ"], vocabulary: [{ word: "歌う", reading: "うたう", meaning: "to sing / গান গাওয়া" }], sentences: [{ japanese: "歌を歌います。", reading: "うたを うたいます。", meaning: "I sing a song. / আমি গান গাই।" }], deck: 10 },
    { id: "N5K163", kanji: "写", meaning: "copy / অনুলিপি", kunyomi: ["うつ.す"], onyomi: ["シャ"], vocabulary: [{ word: "写真", reading: "しゃしん", meaning: "photo / ছবি" }], sentences: [{ japanese: "写真を撮ります。", reading: "しゃしんを とります。", meaning: "I take a photo. / আমি ছবি তুলি।" }], deck: 10 },
    { id: "N5K164", kanji: "真", meaning: "true, reality / সত্য", kunyomi: ["ま"], onyomi: ["シン"], vocabulary: [{ word: "真っ白", reading: "まっしろ", meaning: "pure white / ধবধবে সাদা" }], sentences: [{ japanese: "きれいな写真ですね。", reading: "きれいな しゃしんですね。", meaning: "Beautiful photo. / সুন্দর ছবি।" }], deck: 10 },
    { id: "N5K165", kanji: "映", meaning: "reflect / প্রতিফলিত", kunyomi: ["うつ.る"], onyomi: ["エイ"], vocabulary: [{ word: "映画", reading: "えいが", meaning: "movie / সিনেমা" }], sentences: [{ japanese: "映画を見に行きます。", reading: "映画を みに いきます。", meaning: "I go to see a movie. / আমি সিনেমা দেখতে যাই।" }], deck: 10 },
    { id: "N5K166", kanji: "画", meaning: "picture / চিত্র", kunyomi: [], onyomi: ["ガ", "カク"], vocabulary: [{ word: "映画館", reading: "えいがかん", meaning: "movie theater / সিনেমা হল" }], sentences: [{ japanese: "日本の映画が好きです。", reading: "にほんの えいがが すきです。", meaning: "I like Japanese movies. / আমি জাপানি সিনেমা পছন্দ করি।" }], deck: 10 }
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

const STORAGE_KEY = 'n5_kanji_progress';
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
    if (confirm("Reset all Kanji progress and scheduling data?\n\nThis cannot be undone.")) {
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
    // Using your exact 10 thematic decks + master deck mapping
    const deckMap = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], master: [] };
    
    KANJI_DATA.forEach(card => {
        if (deckMap[card.deck]) deckMap[card.deck].push(card);
        deckMap.master.push(card);
    });

    const deckTitles = { 
        1: "Deck 1: Numbers & Counters", 
        2: "Deck 2: Time, Days & Calendar", 
        3: "Deck 3: People & Family", 
        4: "Deck 4: Verbs & Actions I", 
        5: "Deck 5: Verbs & Actions II", 
        6: "Deck 6: Adjectives & Opposites", 
        7: "Deck 7: Environment, Nature & Weather", 
        8: "Deck 8: Body & Senses", 
        9: "Deck 9: Society, School & Daily Life", 
        10: "Deck 10: Animals, Food & Surroundings", 
        master: "MASTER DECK (All 170 Kanji)" 
    };

    let dashboardHTML = ''; 

    // Render Master Deck first, followed by Decks 1 to 10
    ['master', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].forEach(deckId => {
        const cards = deckMap[deckId];
        if (!cards || cards.length === 0) return;

        let stats = { new: 0, learning: 0, due: 0, strong: 0, weak: 0 };
        cards.forEach(card => {
            const record = kanjiProgress[card.id] || createDefaultRecord();
            if (record.state === 'new') stats.new++;
            else if (record.state === 'learning') stats.learning++;
            if (isDue(record, now) && record.state !== 'new') stats.due++;
            if (record.state === 'review' && record.interval > 21) stats.strong++;
            if (record.lapses >= 2 || (record.attempts > 3 && record.ease < 2.0)) stats.weak++;
        });

        const isMaster = deckId === 'master';
        dashboardHTML += `
            <div class="deck-card ${isMaster ? 'master-deck' : ''}">
                <div class="deck-header">
                    <div class="deck-title">${deckTitles[deckId]}</div>
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
                    <button class="btn-action action-due" onclick="startSession('${deckId}', 'due')">Due</button>
                    <button class="btn-action" onclick="startSession('${deckId}', 'new')">New</button>
                    <button class="btn-action" onclick="startSession('${deckId}', 'weak')">Weak</button>
                    <button class="btn-action" onclick="startSession('${deckId}', 'all')">All</button>
                </div>
            </div>
        `;
    });
    DOM.deckList.innerHTML = dashboardHTML;
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
    let cards = deckId === 'master' ? KANJI_DATA : KANJI_DATA.filter(c => c.deck == deckId);
    
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

const btnBackDeck = document.getElementById('btn-back-deck');
if (btnBackDeck) {
    btnBackDeck.addEventListener('click', () => { renderDashboard(); switchView('view-dashboard'); });
}

const btnReviewAgain = document.getElementById('btn-review-again');
if (btnReviewAgain) {
    btnReviewAgain.addEventListener('click', () => {
        sessionQueue = [...sessionFailures];
        sessionStats = { total: sessionQueue.length, reviewed: 0, again: 0, hard: 0, good: 0, easy: 0 };
        sessionFailures = [];
        switchView('view-practice');
        nextCard();
    });
}

window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderDashboard();
});
