// ==========================================
// 1. VOCABULARY BASE DATA (N4)
// ==========================================
const rawCards = [
    // Lesson 26 Data[span_0](start_span)[span_0](end_span)
    { kanji: "見ます、診ます", kana: "みます", bn: "দেখা, চেক করা", lesson: 26 }, 
    { kanji: "探します、捜します", kana: "さがします", bn: "খোঁজা, অনুসন্ধান করা", lesson: 26 }, 
    { kanji: "遅れます [時間に～]", kana: "おくれます [じかんに～]", bn: "দেরি করা [সময় ]", lesson: 26 }, 
    { kanji: "間に合います [時間に～]", kana: "まにあいます [じかんに～]", bn: "সময় মত পৌঁছানো", lesson: 26 }, 
    { kanji: "やります", kana: "やります", bn: "করা", lesson: 26 }, 
    { kanji: "拾います", kana: "ひろいます", bn: "তুলে নেওয়া, আরোগ্য", lesson: 26 }, 
    { kanji: "連絡します", kana: "れんらくします", bn: "যোগাযোগ করা", lesson: 26 }, 
    { kanji: "気分がいい", kana: "きぶんがいい", bn: "ভালো অনুভব করা", lesson: 26 }, 
    { kanji: "気分が悪い", kana: "きぶんがわるい", bn: "খারাপ অনুভব করা", lesson: 26 }, 
    { kanji: "運動会", kana: "うんどうかい", bn: "ক্রীড়া দিবস", lesson: 26 }, 
    { kanji: "ぼんおどり", kana: "ぼんおどり", bn: "বন উৎসবের নাচ", lesson: 26 }, 
    { kanji: "フリーマーケット", kana: "フリーマーケット", bn: "সস্তা বাজার", lesson: 26 }, 
    { kanji: "場所", kana: "ばしょ", bn: "জায়গা", lesson: 26 }, 
    { kanji: "ボランティア", kana: "ボランティア", bn: "ভলান্টিয়ার, স্বেচ্ছাসেবক", lesson: 26 }, 
    { kanji: "財布", kana: "さいふ", bn: "মানিব্যাগ", lesson: 26 }, 
    { kanji: "ごみ", kana: "ごみ", bn: "বর্জ্য, ময়লা", lesson: 26 }, 
    { kanji: "国会議事堂", kana: "こっかいぎじどう", bn: "ডায়েট বিল্ডিং", lesson: 26 }, 
    { kanji: "平日", kana: "へいじつ", bn: "সাপ্তাহিক ছুটি", lesson: 26 }, 
    { kanji: "～弁", kana: "～べん", bn: "~ উপভাষা", lesson: 26 }, 
    { kanji: "今度", kana: "こんど", bn: "অন্যসময়, পরের বার", lesson: 26 }, 
    { kanji: "ずいぶん", kana: "ずいぶん", bn: "খুব, সুন্দর", lesson: 26 }, 
    { kanji: "直接", kana: "ちょくせつ", bn: "সরাসরি", lesson: 26 }, 
    { kanji: "いつでも", kana: "いつでも", bn: "যেকোন সময়", lesson: 26 }, 
    { kanji: "どこでも", kana: "どこでも", bn: "যেকোন জায়গা", lesson: 26 }, 
    { kanji: "だれでも", kana: "だれでも", bn: "যে কেউ", lesson: 26 }, 
    { kanji: "何でも", kana: "なんでも", bn: "যেকোন কিছু", lesson: 26 }, 
    { kanji: "こんな ～", kana: "こんな ～", bn: "~ এটার মত", lesson: 26 }, 
    { kanji: "そんな ～", kana: "そんな ～", bn: "~ ওটার মত", lesson: 26 }, 
    { kanji: "あんな ～", kana: "あんな ～", bn: "~ ঐটার মত", lesson: 26 }, 
    { kanji: "片付きます [荷物が～]", kana: "かたづきます [にもつが～]", bn: "গুছানো, সাজানো [জিনিসপত্র]", lesson: 26 }, 
    { kanji: "出します [ごみを～]", kana: "だします [ごみを～]", bn: "বাইরে বের করা [ময়লা]", lesson: 26 }, 
    { kanji: "置き場", kana: "おきば", bn: "কিছু রাখার জায়গা", lesson: 26 }, 
    { kanji: "燃えるごみ", kana: "もえるごみ", bn: "পোড়া ময়লা", lesson: 26 }, 
    { kanji: "横", kana: "よこ", bn: "সাইড", lesson: 26 }, 
    { kanji: "瓶", kana: "びん", bn: "বোতল", lesson: 26 }, 
    { kanji: "缶", kana: "かん", bn: "ক্যান", lesson: 26 }, 
    { kanji: "ガス", kana: "ガス", bn: "গ্যাস", lesson: 26 }, 
    { kanji: "～会社", kana: "～がいしゃ", bn: "~ কোম্পানি", lesson: 26 }, 
    { kanji: "宇宙", kana: "うちゅう", bn: "মহাকাশ", lesson: 26 }, 
    { kanji: "～様", kana: "～さま", bn: "~ জনাব/বেগম", lesson: 26 }, 
    { kanji: "宇宙船", kana: "うちゅうせん", bn: "মহাকাশযান", lesson: 26 }, 
    { kanji: "怖い", kana: "こわい", bn: "ভয়", lesson: 26 }, 
    { kanji: "ステーション", kana: "ステーション", bn: "স্টেশন", lesson: 26 }, 
    { kanji: "違います", kana: "ちがいます", bn: "অন্যরকম", lesson: 26 }, 
    { kanji: "宇宙飛行士", kana: "うちゅうひこうし", bn: "নভোচারী", lesson: 26 }, 
    { kanji: "参加します", kana: "さんかします", bn: "অংশ নেওয়া", lesson: 26 }, 
    { kanji: "申し込みます", kana: "もうしこみます", bn: "আবেদন করা, ভর্তি ফর্ম", lesson: 26 }, 
    { kanji: "都合がいい", kana: "つごうがいい", bn: "সুবিধাজনক সময়", lesson: 26 }, 
    { kanji: "都合が悪い", kana: "つごうがわるい", bn: "অসুবিধাজনক সময়", lesson: 26 }, 
    { kanji: "新聞社", kana: "しんぶんしゃ", bn: "পত্রিকা কোম্পানি", lesson: 26 }, 
    { kanji: "柔道", kana: "じゅうどう", bn: "জুডো", lesson: 26 }, 
    { kanji: "子供の日", kana: "こどものひ", bn: "শিশু দিবস", lesson: 26 }, 
    { kanji: "月水金", kana: "げつすいきん", bn: "সোম বুধ শুক্র", lesson: 26 }, 
    { kanji: "お湯", kana: "おゆ", bn: "গরম পানি", lesson: 26 }, 
    { kanji: "困ったなあ", kana: "こまったなあ", bn: "আমি কি করবো? শান্তিতে", lesson: 26 }, 
    { kanji: "電子メール", kana: "でんしメール", bn: "ইলেকট্রনিক মেইল", lesson: 26 }, 
    { kanji: "別の", kana: "べつの", bn: "আলাদা, অন্য", lesson: 26 }, 
    { kanji: "星出明彦", kana: "ほしであきひこ", bn: "হোশিদেআকিহিকো (জাপানি নভোচারী (১৯৬৮-))", lesson: 26 }, 
    { kanji: "エドヤストア", kana: "エドヤストア", bn: "এডোইয়াস্টোর", lesson: 26 },
    // Lesson 27 Data
    { kanji: "飼います", kana: "かいます", bn: "রাখা (পোষা প্রাণী), পালন করা (প্রাণী)", lesson: 27 },
    { kanji: "走ります [道を～]", kana: "はしります [みちを～]", bn: "চালানো, ড্রাইভ করা [রাস্তায়]", lesson: 27 },
    { kanji: "見えます [山が～]", kana: "みえます [やまが～]", bn: "দেখতে পারা [পর্বত]", lesson: 27 },
    { kanji: "聞こえます [音が～]", kana: "きこえます [おとが～]", bn: "শুনতে পারা [শব্দ]", lesson: 27 },
    { kanji: "できます [道が～]", kana: "できます [みちが～]", bn: "তৈরি করা, সমাপ্ত হওয়া [রাস্তা]", lesson: 27 },
    { kanji: "開きます [教室を～]", kana: "ひらきます [きょうしつを～]", bn: "তৈরি করা [ক্লাস], খোলা, চালু করা", lesson: 27 },
    { kanji: "心配 [な]", kana: "しんぱい [な]", bn: "দুশ্চিন্তা, উদ্বিগ্ন", lesson: 27 },
    { kanji: "ペット", kana: "ペット", bn: "পোষা, পোষ্য", lesson: 27 },
    { kanji: "鳥", kana: "とり", bn: "পাখি", lesson: 27 },
    { kanji: "声", kana: "こえ", bn: "কণ্ঠস্বর", lesson: 27 },
    { kanji: "波", kana: "なみ", bn: "ঢেউ", lesson: 27 },
    { kanji: "花火", kana: "はなび", bn: "আতশবাজি", lesson: 27 },
    { kanji: "道具", kana: "どうぐ", bn: "যন্ত্রপাতি, সরঞ্জাম", lesson: 27 },
    { kanji: "クリーニング", kana: "クリーニング", bn: "লন্ড্রি, পরিষ্কার", lesson: 27 },
    { kanji: "家", kana: "いえ", bn: "বাড়ি", lesson: 27 },
    { kanji: "マンション", kana: "マンション", bn: "বাসাবাড়ি, ফ্ল্যাট", lesson: 27 },
    { kanji: "キッチン", kana: "キッチン", bn: "রান্নাঘর", lesson: 27 },
    { kanji: "～教室", kana: "～きょうしつ", bn: "শ্রেণিকক্ষ", lesson: 27 },
    { kanji: "パーティールーム", kana: "パーティールーム", bn: "পার্টিরুম", lesson: 27 },
    { kanji: "方", kana: "かた", bn: "ব্যক্তি", lesson: 27 },
    { kanji: "～後", kana: "～ご", bn: "পরে ~", lesson: 27 },
    { kanji: "～しか", kana: "～しか", bn: "শুধু ~", lesson: 27 },
    { kanji: "ほかの", kana: "ほかの", bn: "এছাড়াও, পাশাপাশি", lesson: 27 },
    { kanji: "はっきり", kana: "はっきり", bn: "পরিষ্কার, স্পষ্ট", lesson: 27 },
    { kanji: "休みを取ります", kana: "やすみをとります", bn: "ছুটি নেয়া", lesson: 27 },
    { kanji: "漫画", kana: "まんが", bn: "কার্টুন", lesson: 27 },
    { kanji: "ロボット", kana: "ロボット", bn: "রোবট", lesson: 27 },
    { kanji: "家具", kana: "かぐ", bn: "আসবাবপত্র", lesson: 27 },
    { kanji: "本棚", kana: "ほんだな", bn: "বইয়ের তাক", lesson: 27 },
    { kanji: "いつか", kana: "いつか", bn: "একদিন, কিছু দিন", lesson: 27 },
    { kanji: "建てます", kana: "たてます", bn: "নির্মাণ করা", lesson: 27 },
    { kanji: "すばらしい", kana: "すばらしい", bn: "চমৎকার", lesson: 27 },
    { kanji: "子供たち", kana: "こどもたち", bn: "বাচ্চারা", lesson: 27 },
    { kanji: "大好き [な]", kana: "だいすき [な]", bn: "খুব পছন্দ করা", lesson: 27 },
    { kanji: "主人公", kana: "しゅじんこう", bn: "নায়ক, নায়িকা", lesson: 27 },
    { kanji: "形", kana: "かたち", bn: "আকার, আকৃতি", lesson: 27 },
    { kanji: "不思議 [な]", kana: "ふしぎ [な]", bn: "রহস্যময়, দুর্দান্ত", lesson: 27 },
    { kanji: "ポケット", kana: "ポケット", bn: "পকেট", lesson: 27 },
    { kanji: "例えば", kana: "たとえば", bn: "উদাহরণস্বরূপ", lesson: 27 },
    { kanji: "付けます", kana: "つけます", bn: "সংযুক্ত করা, চালু করা", lesson: 27 },
    { kanji: "自由に", kana: "じゆうに", bn: "স্বাধীনভাবে", lesson: 27 },
    { kanji: "空", kana: "そら", bn: "আকাশ", lesson: 27 },
    { kanji: "飛びます", kana: "とびます", bn: "উড়া", lesson: 27 },
    { kanji: "昔", kana: "むかし", bn: "প্রাচীনকাল, পুরোনো দিন", lesson: 27 },
    { kanji: "自分", kana: "じぶん", bn: "নিজের", lesson: 27 },
    { kanji: "将来", kana: "しょうらい", bn: "ভবিষ্যৎ", lesson: 27 },
    { kanji: "景色", kana: "けしき", bn: "দৃশ্য", lesson: 27 },
    { kanji: "昼間", kana: "ひるま", bn: "দিনের সময়", lesson: 27 },
    { kanji: "自動販売機", kana: "じどうはんばいき", bn: "ভেন্ডিং মেশিন", lesson: 27 },
    { kanji: "通信販売", kana: "つうしんはんばい", bn: "ডাকযোগে", lesson: 27 },
    { kanji: "ほとんど", kana: "ほとんど", bn: "প্রায় সব (হ্যাঁ বোধক), খুবই কম (না বোধক)", lesson: 27 },
    { kanji: "関西空港", kana: "かんさいくうこう", bn: "কানসাই বিমানবন্দর", lesson: 27 },
    { kanji: "秋葉原", kana: "あきはばら", bn: "অনেক ইলেকট্রিক ও ইলেকট্রিক্যাল দোকানের শপিং জেলা", lesson: 27 },
    { kanji: "伊豆", kana: "いず", bn: "উপদ্বীপ শিজুকা প্রদেশের", lesson: 27 },
    { kanji: "日曜大工", kana: "にちようだいく", bn: "রবিবারের ছুতোর", lesson: 27 },
    { kanji: "夢", kana: "ゆめ", bn: "স্বপ্ন", lesson: 27 },
    { kanji: "夢を見ます", kana: "ゆめをみます", bn: "স্বপ্ন দেখা", lesson: 27 },
    { kanji: "ドラえもん", kana: "ドラえもん", bn: "ডোরেমন", lesson: 27 },
    // Lesson 28 Data
    { kanji: "売れます [パンが～]", kana: "うれます [パンが～]", bn: "বিক্রি করা [রুটি]", lesson: 28 }, 
    { kanji: "踊ります", kana: "おどります", bn: "নাচ", lesson: 28 }, 
    { kanji: "かみます", kana: "かみます", bn: "চিবানো, কামড়", lesson: 28 }, 
    { kanji: "選びます", kana: "えらびます", bn: "পছন্দ", lesson: 28 }, 
    { kanji: "通います [大学に～]", kana: "かよいます [だいがくに～]", bn: "যাওয়া আসা [বিশ্ববিদ্যালয়ে]", lesson: 28 }, 
    { kanji: "メモします", kana: "メモします", bn: "মেমো করা", lesson: 28 }, 
    { kanji: "まじめ [な]", kana: "まじめ [な]", bn: "সিরিয়াস", lesson: 28 }, 
    { kanji: "熱心 [な]", kana: "ねっしん [な]", bn: "আন্তরিক, উদ্যমী", lesson: 28 }, 
    { kanji: "偉い", kana: "えらい", bn: "মহৎ, প্রশংসনীয়", lesson: 28 }, 
    { kanji: "ちょうどいい", kana: "ちょうどいい", bn: "যথাযথ, ঠিক", lesson: 28 }, 
    { kanji: "景色", kana: "けしき", bn: "দৃশ্য, দেখা", lesson: 28 }, 
    { kanji: "美容院", kana: "びよういん", bn: "চুল কাটার সেলুন", lesson: 28 }, 
    { kanji: "台所", kana: "だいどころ", bn: "রান্নাঘর", lesson: 28 }, 
    { kanji: "経験", kana: "けいけん", bn: "অভিজ্ঞতা", lesson: 28 }, 
    { kanji: "力", kana: "ちから", bn: "শক্তি", lesson: 28 }, 
    { kanji: "人気", kana: "にんき", bn: "জনপ্রিয়তা", lesson: 28 }, 
    { kanji: "形", kana: "かたち", bn: "আকৃতি, আকার", lesson: 28 }, 
    { kanji: "色", kana: "いろ", bn: "রং", lesson: 28 }, 
    { kanji: "味", kana: "あじ", bn: "স্বাদ", lesson: 28 }, 
    { kanji: "ガム", kana: "ガム", bn: "চুইংগাম", lesson: 28 }, 
    { kanji: "品物", kana: "しなもの", bn: "পণ্য", lesson: 28 }, 
    { kanji: "値段", kana: "ねだん", bn: "দাম", lesson: 28 }, 
    { kanji: "給料", kana: "きゅうりょう", bn: "বেতন", lesson: 28 }, 
    { kanji: "ボーナス", kana: "ボーナス", bn: "বোনাস", lesson: 28 }, 
    { kanji: "ゲーム", kana: "ゲーム", bn: "কম্পিউটার গেম", lesson: 28 }, 
    { kanji: "番組", kana: "ばんぐみ", bn: "প্রোগ্রাম", lesson: 28 }, 
    { kanji: "ドラマ", kana: "ドラマ", bn: "নাটক", lesson: 28 }, 
    { kanji: "歌手", kana: "かしゅ", bn: "গায়ক, শিল্পী", lesson: 28 }, 
    { kanji: "小説", kana: "しょうせつ", bn: "উপন্যাস", lesson: 28 }, 
    { kanji: "小説家", kana: "しょうせつか", bn: "ঔপন্যাসিক", lesson: 28 }, 
    { kanji: "～家", kana: "～か", bn: "এইগুলো শব্দের শেষে বসে", lesson: 28 }, 
    { kanji: "～機", kana: "～き", bn: "~যন্ত্র", lesson: 28 }, 
    { kanji: "息子", kana: "むすこ", bn: "আমার ছেলে", lesson: 28 }, 
    { kanji: "息子さん", kana: "むすこさん", bn: "অন্যের ছেলে", lesson: 28 }, 
    { kanji: "娘", kana: "むすめ", bn: "আমার মেয়ে", lesson: 28 }, 
    { kanji: "娘さん", kana: "むすめさん", bn: "অন্যের মেয়ে", lesson: 28 }, 
    { kanji: "自分", kana: "じぶん", bn: "নিজের", lesson: 28 }, 
    { kanji: "将来", kana: "しょうらい", bn: "ভবিষ্যৎ", lesson: 28 }, 
    { kanji: "しばらく", kana: "しばらく", bn: "কিছুক্ষণ", lesson: 28 }, 
    { kanji: "たいてい", kana: "たいてい", bn: "সাধারণত, অধিকাংশ", lesson: 28 }, 
    { kanji: "それに", kana: "それに", bn: "তাছাড়াও", lesson: 28 }, 
    { kanji: "それで", kana: "それで", bn: "এবং তাই", lesson: 28 }, 
    { kanji: "ちょっとお願いがあるんですが。", kana: "ちょっとおねがいがあるんですが。", bn: "আমার ছোট একটা আবদার আছে।", lesson: 28 }, 
    { kanji: "実は", kana: "じつは", bn: "মূলত, সত্য কথা বলতে", lesson: 28 }, 
    { kanji: "会話", kana: "かいわ", bn: "কথোপকথন", lesson: 28 }, 
    { kanji: "うーん", kana: "うーん", bn: "ভালো, আমাকে দেখতে দাও, হুমম.....", lesson: 28 }, 
    { kanji: "お知らせ", kana: "おしらせ", bn: "বিজ্ঞপ্তি", lesson: 28 }, 
    { kanji: "参加します", kana: "さんかします", bn: "অংশগ্রহন করা, যোগ দেয়া", lesson: 28 }, 
    { kanji: "日にち", kana: "ひにち", bn: "তারিখ", lesson: 28 }, 
    { kanji: "土", kana: "ど", bn: "শনিবার", lesson: 28 }, 
    { kanji: "体育館", kana: "たいいくかん", bn: "জিমনেশিয়াম", lesson: 28 }, 
    { kanji: "無料", kana: "むりょう", bn: "খরচ ছাড়া", lesson: 28 }, 
    { kanji: "誘います", kana: "さそいます", bn: "দাওয়াত, কাউকে যোগ দিতে বলা", lesson: 28 }, 
    { kanji: "イベント", kana: "イベント", bn: "ইভেন্ট", lesson: 28 },
    // Lesson 29 Data
    { kanji: "開きます [ドアが～]", kana: "あきます [ドアが～]", bn: "খোলা [দরজা]", lesson: 29 }, 
    { kanji: "閉まります [ドアが～]", kana: "しまります [ドアが～]", bn: "বন্ধ করা [দরজা]", lesson: 29 }, 
    { kanji: "つきます [電気が～]", kana: "つきます [でんきが～]", bn: "চালু করা, অন করা [লাইট]", lesson: 29 }, 
    { kanji: "消えます [電気が～]", kana: "きえます [でんきが～]", bn: "বন্ধ করা [লাইট]", lesson: 29 }, 
    { kanji: "壊れます [いすが～]", kana: "こわれます [いすが～]", bn: "ভাঙ্গা [চেয়ার]", lesson: 29 }, 
    { kanji: "割れます [コップが～]", kana: "われます [コップが～]", bn: "ভাঙ্গা [গ্লাস, কাপ]", lesson: 29 }, 
    { kanji: "折れます [木が～]", kana: "おれます [きが～]", bn: "ভাঙ্গা [গাছ]", lesson: 29 }, 
    { kanji: "破れます [紙が～]", kana: "やぶれます [かみが～]", bn: "ছেঁড়া, বিচ্ছিন্ন করা [কাগজ]", lesson: 29 }, 
    { kanji: "汚れます [服が～]", kana: "よごれます [ふくが～]", bn: "ময়লা করা [পোশাক]", lesson: 29 }, 
    { kanji: "付きます [ポケットが～]", kana: "つきます [ポケットが～]", bn: "লাগানো [পকেট]", lesson: 29 }, 
    { kanji: "外れます [ボタンが～]", kana: "はずれます [ボタンが～]", bn: "খুলে পড়া [বোতাম]", lesson: 29 }, 
    { kanji: "止まります [車が～]", kana: "とまります [くるまが～]", bn: "থামানো, দাঁড় করানো [গাড়ি]", lesson: 29 }, 
    { kanji: "間違えます", kana: "まちがえます", bn: "ভুল করা", lesson: 29 }, 
    { kanji: "落とします", kana: "おとします", bn: "হারিয়ে যাওয়া, পড়ে যাওয়া", lesson: 29 }, 
    { kanji: "掛かります [かぎが～]", kana: "かかります [かぎが～]", bn: "তালা লাগানো", lesson: 29 }, 
    { kanji: "拭きます", kana: "ふきます", bn: "মুছা", lesson: 29 }, 
    { kanji: "取り替えます", kana: "とりかえます", bn: "পরিবর্তন করা", lesson: 29 }, 
    { kanji: "片付けます", kana: "かたづけます", bn: "গোছানো, সাজানো", lesson: 29 }, 
    { kanji: "お皿", kana: "おさら", bn: "প্লেট, ডিশ", lesson: 29 }, 
    { kanji: "お茶碗", kana: "おちゃわん", bn: "ভাতের বোল বা বাটি", lesson: 29 }, 
    { kanji: "コップ", kana: "コップ", bn: "কাপ", lesson: 29 }, 
    { kanji: "ガラス", kana: "ガラス", bn: "গ্লাস", lesson: 29 }, 
    { kanji: "袋", kana: "ふくろ", bn: "ব্যাগ, থলে", lesson: 29 }, 
    { kanji: "書類", kana: "しょるい", bn: "ডকুমেন্ট, কাগজপত্র", lesson: 29 }, 
    { kanji: "枝", kana: "えだ", bn: "শাখা, ব্রাঞ্চ", lesson: 29 }, 
    { kanji: "駅員", kana: "えきいん", bn: "স্টেশন কর্মী", lesson: 29 }, 
    { kanji: "交番", kana: "こうばん", bn: "পুলিশ বক্স", lesson: 29 }, 
    { kanji: "スピーチ", kana: "スピーチ", bn: "বক্তৃতা", lesson: 29 }, 
    { kanji: "返事", kana: "へんじ", bn: "উত্তর দেয়া", lesson: 29 }, 
    { kanji: "お先に どうぞ", kana: "おさきに どうぞ", bn: "আপনার পরে / সামনে যান, প্লিজ", lesson: 29 }, 
    { kanji: "源氏物語", kana: "げんじものがたり", bn: "হেইয়ান যুগে মুরাসাকি শিকিবুর লেখা একটি উপন্যাস", lesson: 29 }, 
    { kanji: "今の電車", kana: "いまのでんしゃ", bn: "এখনকার ট্রেন", lesson: 29 }, 
    { kanji: "忘れ物", kana: "わすれもの", bn: "ভুলে যাওয়া জিনিস", lesson: 29 }, 
    { kanji: "このくらい", kana: "このくらい", bn: "এটা অনেক (বড়)", lesson: 29 }, 
    { kanji: "～側", kana: "～がわ", bn: "~সাইড", lesson: 29 }, 
    { kanji: "ポケット", kana: "ポケット", bn: "পকেট", lesson: 29 }, 
    { kanji: "～辺", kana: "～へん", bn: "চারপাশে~, ~প্রতিবেশি", lesson: 29 }, 
    { kanji: "覚えていません", kana: "おぼえていません", bn: "মনে করতে পারতেছিনা", lesson: 29 }, 
    { kanji: "網棚", kana: "あみだな", bn: "মাথার উপরের তাক", lesson: 29 }, 
    { kanji: "確か", kana: "たしか", bn: "অবশ্যই ঠিক", lesson: 29 }, 
    { kanji: "[ああ、] よかった", kana: "[ああ、] よかった", bn: "[আহ,] এটা ভালো ছিলো/ শুকরিয়া ধন্যবাদ", lesson: 29 }, 
    { kanji: "新宿", kana: "しんじゅく", bn: "শিনজুকু স্টেশন", lesson: 29 }, 
    { kanji: "地震", kana: "じしん", bn: "ভূমিকম্প", lesson: 29 }, 
    { kanji: "壁", kana: "かべ", bn: "দেয়াল", lesson: 29 }, 
    { kanji: "針", kana: "はり", bn: "ঘড়ির কাটা", lesson: 29 }, 
    { kanji: "指します", kana: "さします", bn: "বিন্দু, কেন্দ্রবিন্দু", lesson: 29 }, 
    { kanji: "駅前", kana: "えきまえ", bn: "স্টেশনের সামনে", lesson: 29 }, 
    { kanji: "倒れます", kana: "たおれます", bn: "ভেঙ্গে পড়া, পড়ে যাওয়া", lesson: 29 }, 
    { kanji: "西", kana: "にし", bn: "পশ্চিম", lesson: 29 }, 
    { kanji: "～の 方", kana: "～の ほう", bn: "দিক নির্দেশনা ~", lesson: 29 }, 
    { kanji: "燃えます", kana: "もえます", bn: "পোড়া", lesson: 29 }, 
    { kanji: "レポーター", kana: "レポーター", bn: "রিপোর্টার", lesson: 29 }, 
    { kanji: "込みます [道が～]", kana: "こみます [みちが～]", bn: "জনাকীর্ণ [রাস্তা]", lesson: 29 }, 
    { kanji: "空きます [道が～]", kana: "すきます [みちが～]", bn: "মানুষহীন [রাস্তা]", lesson: 29 }, 
    { kanji: "ひどい", kana: "ひどい", bn: "ভয়ানক, তীব্র", lesson: 29 }, 
    { kanji: "花が咲きます", kana: "はながさきます", bn: "ফুল ফোটা", lesson: 29 }, 
    { kanji: "手袋", kana: "てぶくろ", bn: "হাতের গ্লাভস বা মোজা", lesson: 29 }, 
    { kanji: "死にます", kana: "しにます", bn: "মারা যাওয়া", lesson: 29 },
    // Lesson 30 Data
    { kanji: "貼ります", kana: "はります", bn: "লাগানো, স্থাপন করা", lesson: 30 }, 
    { kanji: "掛けます", kana: "かけます", bn: "ঝুলানো", lesson: 30 }, 
    { kanji: "飾ります", kana: "かざります", bn: "প্রদর্শন করা, সাজানো", lesson: 30 }, 
    { kanji: "並べます", kana: "ならべます", bn: "সারিবদ্ধ করা", lesson: 30 }, 
    { kanji: "植えます", kana: "うえます", bn: "উদ্ভিদ, রোপণ করা", lesson: 30 }, 
    { kanji: "まとめます", kana: "まとめます", bn: "একসাথে করা, যোগ করা", lesson: 30 }, 
    { kanji: "戻します", kana: "もどします", bn: "ফিরত দেয়া", lesson: 30 }, 
    { kanji: "しまいます", kana: "しまいます", bn: "দুরে রাখা", lesson: 30 }, 
    { kanji: "決めます", kana: "きめます", bn: "সিদ্ধান্ত নেয়া", lesson: 30 }, 
    { kanji: "予習します", kana: "よしゅうします", bn: "অধ্যায়ের প্রস্তুতি", lesson: 30 }, 
    { kanji: "復習します", kana: "ふくしゅうします", bn: "অধ্যায় পর্যালোচনা", lesson: 30 }, 
    { kanji: "そのままにします", kana: "そのままにします", bn: "যেভাবে আছে সেভাবে রাখা", lesson: 30 }, 
    { kanji: "授業", kana: "じゅぎょう", bn: "শ্রেণি", lesson: 30 }, 
    { kanji: "講義", kana: "こうぎ", bn: "ভাষণ, শিক্ষা", lesson: 30 }, 
    { kanji: "ミーティング", kana: "ミーティング", bn: "সভা", lesson: 30 }, 
    { kanji: "予定", kana: "よてい", bn: "পরিকল্পনা", lesson: 30 }, 
    { kanji: "お知らせ", kana: "おしらせ", bn: "বিজ্ঞপ্তি", lesson: 30 }, 
    { kanji: "ガイドブック", kana: "ガイドブック", bn: "নির্দেশনা বই", lesson: 30 }, 
    { kanji: "カレンダー", kana: "カレンダー", bn: "দিনপঞ্জিকা", lesson: 30 }, 
    { kanji: "ポスター", kana: "ポスター", bn: "পোষ্টার", lesson: 30 }, 
    { kanji: "予定表", kana: "よていひょう", bn: "পরিকল্পনা", lesson: 30 }, 
    { kanji: "ごみ箱", kana: "ごみばこ", bn: "ময়লা ফেলার বাক্স", lesson: 30 }, 
    { kanji: "人形", kana: "にんぎょう", bn: "পুতুল", lesson: 30 }, 
    { kanji: "花瓶", kana: "かびん", bn: "ফুলদানী", lesson: 30 }, 
    { kanji: "鏡", kana: "かがみ", bn: "আয়না", lesson: 30 }, 
    { kanji: "引き出し", kana: "ひきだし", bn: "ড্রয়ার", lesson: 30 }, 
    { kanji: "玄関", kana: "げんかん", bn: "প্রবেশ পথ, সামনের দরজা", lesson: 30 }, 
    { kanji: "廊下", kana: "ろうか", bn: "করিডোর, হলওয়ে", lesson: 30 }, 
    { kanji: "壁", kana: "かべ", bn: "দেয়াল", lesson: 30 }, 
    { kanji: "池", kana: "いけ", bn: "পুকুর", lesson: 30 }, 
    { kanji: "元の所", kana: "もとのところ", bn: "মূল জায়গা", lesson: 30 }, 
    { kanji: "周り", kana: "まわり", bn: "চারপাশ", lesson: 30 }, 
    { kanji: "真ん中", kana: "まんなか", bn: "কেন্দ্রবিন্দু", lesson: 30 }, 
    { kanji: "隅", kana: "すみ", bn: "কর্ণার", lesson: 30 }, 
    { kanji: "まだ", kana: "まだ", bn: "এখনও", lesson: 30 }, 
    { kanji: "リュック", kana: "リュック", bn: "কাধ থেকে পিঠে ঝুলানোর ব্যাগ", lesson: 30 }, 
    { kanji: "非常袋", kana: "ひじょうぶくろ", bn: "জরুরি কিট বা জিনিস", lesson: 30 }, 
    { kanji: "非常時", kana: "ひじょうじ", bn: "জরুরি", lesson: 30 }, 
    { kanji: "生活します", kana: "せいかつします", bn: "জীবনযাপন করা", lesson: 30 }, 
    { kanji: "懐中電灯", kana: "かいちゅうでんとう", bn: "লাইট, ফ্লাশলাইট", lesson: 30 }, 
    { kanji: "～とか、～とか", kana: "～とか、～とか", bn: "~,~, এবং আরও অনেক কিছু", lesson: 30 }, 
    { kanji: "丸い", kana: "まるい", bn: "গোল, বৃত্ত", lesson: 30 }, 
    { kanji: "ある～", kana: "ある～", bn: "একটি নির্দিষ্ট ~", lesson: 30 }, 
    { kanji: "夢を見ます", kana: "ゆめをみます", bn: "স্বপ্ন", lesson: 30 }, 
    { kanji: "うれしい", kana: "うれしい", bn: "আনন্দিত, খুশি", lesson: 30 }, 
    { kanji: "嫌 [な]", kana: "いや [な]", bn: "ঘৃণা করা, অপছন্দ করা", lesson: 30 }, 
    { kanji: "すると", kana: "すると", bn: "এবং, পরে", lesson: 30 }, 
    { kanji: "目が覚めます", kana: "めがさめます", bn: "জেগে উঠা", lesson: 30 }, 
    { kanji: "知らせます", kana: "しらせます", bn: "তথা জানানো", lesson: 30 }, 
    { kanji: "相談します", kana: "そうだんします", bn: "আলোচনা করা", lesson: 30 }, 
    { kanji: "お子さん", kana: "おこさん", bn: "অন্যের বাচ্চা", lesson: 30 }, 
    { kanji: "ご苦労様", kana: "ごくろうさま", bn: "আপনার কঠোর পরিশ্রমের জন্য ধন্যবাদ", lesson: 30 }, 
    { kanji: "希望", kana: "きぼう", bn: "আশা, অনুরোধ", lesson: 30 }, 
    { kanji: "何かご希望がありますか？", kana: "なにかごきぼうがありますか？", bn: "আপনার কোন অনুরোধ আছে?", lesson: 30 }, 
    { kanji: "ミュージカル", kana: "ミュージカル", bn: "মিউজিক্যাল", lesson: 30 }, 
    { kanji: "これはいいですね", kana: "これはいいですね", bn: "এটা ভালো ধারনা / সুন্দর লাগছে", lesson: 30 }, 
    { kanji: "ブロードウエイ", kana: "ブロードウエイ", bn: "ব্রডওয়ে", lesson: 30 }, 
    { kanji: "月", kana: "つき", bn: "চাঁদ", lesson: 30 }, 
    { kanji: "地球", kana: "ちきゅう", bn: "পৃথিবী", lesson: 30 }, 
    { kanji: "交番", kana: "こうばん", bn: "পুলিশ স্টেশন", lesson: 30 }, 
    { kanji: "ほど", kana: "ほど", bn: "সম্পর্কে, শুধু", lesson: 30 },
    // Lesson 31 Data
    { kanji: "続けます", kana: "つづけます", bn: "চলমান", lesson: 31 }, 
    { kanji: "見つけます", kana: "みつけます", bn: "খোঁজা", lesson: 31 }, 
    { kanji: "取ります [休みを～]", kana: "とります [やすみを～]", bn: "নেওয়া [ছুটি]", lesson: 31 }, 
    { kanji: "受けます [試験を～]", kana: "うけます [しけんを～]", bn: "অংশগ্রহণ করা, দেওয়া [পরীক্ষা]", lesson: 31 }, 
    { kanji: "申し込みます", kana: "もうしこみます", bn: "আবেদন করা, ভর্তি ফর্ম", lesson: 31 }, 
    { kanji: "休憩します", kana: "きゅうけいします", bn: "বিশ্রাম নেওয়া", lesson: 31 }, 
    { kanji: "連休", kana: "れんきゅう", bn: "ধারাবাহিক ছুটির দিন", lesson: 31 }, 
    { kanji: "作文", kana: "さくぶん", bn: "রচনা", lesson: 31 }, 
    { kanji: "発表", kana: "はっぴょう", bn: "ঘোষণা, উপস্থাপন করা", lesson: 31 }, 
    { kanji: "展覧会", kana: "てんらんかい", bn: "প্রদর্শনী", lesson: 31 }, 
    { kanji: "結婚式", kana: "けっこんしき", bn: "বিয়ের অনুষ্ঠান", lesson: 31 }, 
    { kanji: "お葬式", kana: "おそうしき", bn: "অন্ত্যেষ্টিক্রিয়া", lesson: 31 }, 
    { kanji: "式", kana: "しき", bn: "অনুষ্ঠান", lesson: 31 }, 
    { kanji: "本社", kana: "ほんしゃ", bn: "প্রধান অফিস", lesson: 31 }, 
    { kanji: "支店", kana: "してん", bn: "শাখা অফিস", lesson: 31 }, 
    { kanji: "教会", kana: "きょうかい", bn: "চার্চ, গির্জা", lesson: 31 }, 
    { kanji: "大学院", kana: "だいがくいん", bn: "স্নাতক স্কুল", lesson: 31 }, 
    { kanji: "動物園", kana: "どうぶつえん", bn: "চিড়িয়াখানা", lesson: 31 }, 
    { kanji: "温泉", kana: "おんせん", bn: "গরম পানির ঝর্ণা, স্পা", lesson: 31 }, 
    { kanji: "帰り", kana: "かえり", bn: "ফেরত দেয়া", lesson: 31 }, 
    { kanji: "お子さん", kana: "おこさん", bn: "অন্যের বাচ্চা", lesson: 31 }, 
    { kanji: "～号", kana: "～ごう", bn: "ট্রেন নাম্বার, টাইফুন নাম্বার ইত্যাদি", lesson: 31 }, 
    { kanji: "～の方", kana: "～のほう", bn: "দিক নির্দেশক, ~দিকে", lesson: 31 }, 
    { kanji: "ずっと", kana: "ずっと", bn: "সম্পূর্ণ সময়", lesson: 31 }, 
    { kanji: "残ります", kana: "のこります", bn: "বাকী, ছেড়ে যাওয়া, পড়ে থাকা", lesson: 31 }, 
    { kanji: "入学試験", kana: "にゅうがくしけん", bn: "ভর্তি পরীক্ষা", lesson: 31 }, 
    { kanji: "月に", kana: "つきに", bn: "প্রতিমাস", lesson: 31 }, 
    { kanji: "村", kana: "むら", bn: "গ্রাম", lesson: 31 }, 
    { kanji: "卒業します", kana: "そつぎょうします", bn: "স্নাতক", lesson: 31 }, 
    { kanji: "映画館", kana: "えいがかん", bn: "সিনেমা হল, সিনেমা", lesson: 31 }, 
    { kanji: "閉じます", kana: "とじます", bn: "বন্ধ করা", lesson: 31 }, 
    { kanji: "都会", kana: "とかい", bn: "শহর", lesson: 31 }, 
    { kanji: "バリ", kana: "バリ", bn: "বালি (ইন্দোনেশিয়া)", lesson: 31 }, 
    { kanji: "ピカソ", kana: "ピカソ", bn: "পাবলো পিকাসো, স্প্যানিশ চিত্রশিল্পী (১৮৮১-১৯৭৩)", lesson: 31 },
    // Lesson 32 Data
    { kanji: "運動します", kana: "うんどうします", bn: "ব্যায়াম করা", lesson: 32 }, 
    { kanji: "成功します", kana: "せいこうします", bn: "সফল", lesson: 32 }, 
    { kanji: "失敗します [試験に～]", kana: "しっぱいします [しけんに～]", bn: "ব্যর্থ, ফেল করা [পরীক্ষায়]", lesson: 32 }, 
    { kanji: "合格します [試験に～]", kana: "ごうかくします [しけんに～]", bn: "[পরীক্ষায়] পাশ করা", lesson: 32 }, 
    { kanji: "やみます [雨が～]", kana: "やみます [あめが～]", bn: "[বৃষ্টি] থামা, বন্ধ", lesson: 32 }, 
    { kanji: "晴れます", kana: "はれます", bn: "পরিষ্কার (আবহাওয়া)", lesson: 32 }, 
    { kanji: "曇ります", kana: "くもります", bn: "মেঘাচ্ছন্ন", lesson: 32 }, 
    { kanji: "続きます [熱が～]", kana: "つづきます [ねつが～]", bn: "[জ্বর] চলমান, বেড়ে যাওয়া", lesson: 32 }, 
    { kanji: "引きます [風邪を～]", kana: "ひきます [かぜを～]", bn: "লাগা, ধরা [ঠান্ডা], সর্দি", lesson: 32 }, 
    { kanji: "冷やします", kana: "ひやします", bn: "শান্ত, শীতল", lesson: 32 }, 
    { kanji: "込みます [道が～]", kana: "こみます [みちが～]", bn: "[রাস্তা] জনাকীর্ণ", lesson: 32 }, 
    { kanji: "空きます [道が～]", kana: "すきます [みちが～]", bn: "[রাস্তা] জনমানবহীন, মানুষহীন", lesson: 32 }, 
    { kanji: "出ます [試合に／パーティーに～]", kana: "でます [しあいに／パーティーに～]", bn: "অংশগ্রহণ করা [খেলায় / পার্টিতে]", lesson: 32 }, 
    { kanji: "無理をします", kana: "むりをします", bn: "অতিরিক্ত জিনিস", lesson: 32 }, 
    { kanji: "十分 [な]", kana: "じゅうぶん [な]", bn: "পর্যাপ্ত, প্রচুর", lesson: 32 }, 
    { kanji: "おかしい", kana: "おかしい", bn: "হাস্যকর, অদ্ভুত", lesson: 32 }, 
    { kanji: "うるさい", kana: "うるさい", bn: "শব্দ, শোরগোল", lesson: 32 }, 
    { kanji: "先生", kana: "せんせい", bn: "ডাক্তার, শিক্ষক", lesson: 32 }, 
    { kanji: "火傷", kana: "やけど", bn: "পোড়া, পুড়ে যাওয়া", lesson: 32 }, 
    { kanji: "怪我", kana: "けが", bn: "ক্ষত, আঘাতপ্রাপ্ত", lesson: 32 }, 
    { kanji: "咳", kana: "せき", bn: "কাশি, কফ", lesson: 32 }, 
    { kanji: "インフルエンザ", kana: "インフルエンザ", bn: "ইনফ্লুয়েঞ্জা", lesson: 32 }, 
    { kanji: "空", kana: "そら", bn: "আকাশ", lesson: 32 }, 
    { kanji: "太陽", kana: "たいよう", bn: "সূর্য", lesson: 32 }, 
    { kanji: "星", kana: "ほし", bn: "তারা", lesson: 32 }, 
    { kanji: "風", kana: "かぜ", bn: "বায়ু", lesson: 32 }, 
    { kanji: "東", kana: "ひがし", bn: "পূর্ব", lesson: 32 }, 
    { kanji: "西", kana: "にし", bn: "পশ্চিম", lesson: 32 }, 
    { kanji: "南", kana: "みなみ", bn: "দক্ষিণ", lesson: 32 }, 
    { kanji: "北", kana: "きた", bn: "উত্তর", lesson: 32 }, 
    { kanji: "国際～", kana: "こくさい～", bn: "আন্তর্জাতিক~", lesson: 32 }, 
    { kanji: "水道", kana: "すいどう", bn: "কল, ট্যাপ, পানির কল", lesson: 32 }, 
    { kanji: "エンジン", kana: "エンジン", bn: "ইঞ্জিন", lesson: 32 }, 
    { kanji: "チーム", kana: "チーム", bn: "টিম, দল", lesson: 32 }, 
    { kanji: "今夜", kana: "こんや", bn: "এই সন্ধ্যা", lesson: 32 }, 
    { kanji: "夕方", kana: "ゆうがた", bn: "শেষবিকেল", lesson: 32 }, 
    { kanji: "前", kana: "まえ", bn: "অতীতকাল, পূর্বে", lesson: 32 }, 
    { kanji: "遅く", kana: "おそく", bn: "দেরি (সময়)", lesson: 32 }, 
    { kanji: "こんなに", kana: "こんなに", bn: "এই (অনেক)", lesson: 32 }, 
    { kanji: "そんなに", kana: "そんなに", bn: "ওই (অনেক) ২য় ব্যক্তির কাছে", lesson: 32 }, 
    { kanji: "あんなに", kana: "あんなに", bn: "ঐ (অনেক) ৩য় ব্যক্তির কাছে", lesson: 32 }, 
    { kanji: "元気", kana: "げんき", bn: "তেজ, শক্তি", lesson: 32 }, 
    { kanji: "胃", kana: "い", bn: "পেট", lesson: 32 }, 
    { kanji: "ストレス", kana: "ストレス", bn: "চাপ", lesson: 32 }, 
    { kanji: "それはいけませんね", kana: "それはいけませんね", bn: "আমি এটা শুনে দুঃখিত।", lesson: 32 }, 
    { kanji: "星占い", kana: "ほしうらない", bn: "জাতক, জ্যোতিষবিদ্যা", lesson: 32 }, 
    { kanji: "おうし座", kana: "おうしざ", bn: "বৃষরাশি", lesson: 32 }, 
    { kanji: "働きすぎ", kana: "はたらきすぎ", bn: "অতিরিক্ত কাজ", lesson: 32 }, 
    { kanji: "困ります", kana: "こまります", bn: "সমস্যায় পড়া, ঝামেলা", lesson: 32 }, 
    { kanji: "宝くじ", kana: "たからくじ", bn: "লটারি", lesson: 32 }, 
    { kanji: "当たります [宝くじが～]", kana: "あたります [たからくじが～]", bn: "বিজয়ী [লটারি]", lesson: 32 }, 
    { kanji: "健康", kana: "けんこう", bn: "স্বাস্থ্য", lesson: 32 }, 
    { kanji: "恋愛", kana: "れんあい", bn: "ভালোবাসা", lesson: 32 }, 
    { kanji: "恋人", kana: "こいびと", bn: "সুইটহার্ট, বয়ফ্রেন্ড, গার্লফ্রেন্ড", lesson: 32 }, 
    { kanji: "ラッキーアイテム", kana: "ラッキーアイテム", bn: "ভাগ্যবান জিনিস", lesson: 32 }, 
    { kanji: "石", kana: "いし", bn: "পাথর", lesson: 32 }, 
    { kanji: "ヨーロッパ", kana: "ヨーロッパ", bn: "ইউরোপ", lesson: 32 }
];

// ==========================================
// 2. ISOLATED LOCAL STORAGE SYSTEM
// ==========================================
let allCardsDb = [];

function loadLocalDatabase() {
    const storageKey = 'n4_vocabulary_progress'; // Unique key for N4
    const savedData = localStorage.getItem(storageKey); 
    let parsedData = savedData ? JSON.parse(savedData) : null;
    
    if (parsedData && parsedData.length === rawCards.length) {
        return parsedData;
    } else {
        const initialDb = rawCards.map((card, index) => ({
            id: index + 1,
            kanji: card.kanji,
            kana: card.kana,
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
    const storageKey = 'n4_vocabulary_progress';
    localStorage.setItem(storageKey, JSON.stringify(allCardsDb));
}

// ==========================================
// 3. APP STATE & UI LOGIC
// ==========================================
let reviewQueue = [];
let initialDeckSize = 0;
let isFlipped = false;
let totalSwipes = 0;
let correctSwipes = 0;

window.addEventListener('DOMContentLoaded', () => {
    allCardsDb = loadLocalDatabase();
    
    const lessonContainer = document.getElementById('lesson-buttons-container');
    // Generates buttons only for Lessons 26 through 32
    for (let i = 26; i <= 32; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn-lesson';
        btn.innerText = `Lesson ${i}`;
        btn.onclick = () => startSession(i);
        lessonContainer.appendChild(btn);
    }
});

// Intercepts phone swipe-back gesture
window.addEventListener('popstate', () => {
    goHomeLogic();
});

function showScreen(screenId) {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('study-screen').classList.add('hidden');
    document.getElementById('summary-screen').classList.add('hidden');
    document.getElementById(screenId).classList.remove('hidden');
}

function goHomeLogic() {
    showScreen('dashboard');
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('show-answer-btn').classList.remove('hidden');
    document.getElementById('rating-controls').classList.add('hidden');
    isFlipped = false;
}

function goHome() {
    history.back(); 
}

function startSession(lessonSelection) {
    history.pushState({ screen: 'study' }, '', '');
    
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
        history.back();
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
    const mode = document.getElementById('study-mode').value;
    
    // DUAL-MODE LOGIC
    if (mode === 'kanji') {
        document.getElementById('front-jp').innerText = card.kanji || card.kana;
        document.getElementById('back-kana').innerText = card.kana;
        document.getElementById('back-bn').innerText = card.bn;
    } else {
        document.getElementById('front-jp').innerText = card.kana;
        document.getElementById('back-kana').innerText = (card.kanji && card.kanji !== card.kana) ? `Kanji: ${card.kanji}` : "";
        document.getElementById('back-bn').innerText = card.bn;
    }

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
    
    document.getElementById('accuracy-chart').style.background = `conic-gradient(#ffffff ${accuracy}%, rgba(255,255,255,0.2) 0%)`;

    showScreen('summary-screen');
}

