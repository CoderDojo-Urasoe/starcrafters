// お知らせデータ管理
const newsData = [

    {
        id: 11,
        date: "2026.01.12",
        category: "イベント",
        categoryClass: "category-event",
        title: "1/12開催の遊王祭×CoderDojoでポケカ大会・ヘボコン・ミニ四駆など遊びが集結！",
        link: "news/event-20260112.html",
        featured: true
    },
    {
        id: 10,
        date: "2026.01.12",
        category: "イベント",
        categoryClass: "category-event",
        title: "ヘボコン in 南城の参加者募集ページを公開。ヘボいロボット相撲を笑顔で楽しもう！",
        link: "news/hebocon-entry.html",
        featured: true
    },
    {
        id: 9,
        date: "2025.12.27",
        category: "イベント",
        categoryClass: "category-event",
        title: "DTMを体験しよう！初心者向けの音楽制作ワークショップを開催します。",
        link: "news/event-20251227.html",
        featured: true
    },
    {
        id: 8,
        date: "2025.11.16",
        category: "イベント",
        categoryClass: "category-event",
        title: "「不登校」これからの選択肢を考える！参加者募集！",
        link: "news/event-20251116.html",
        featured: true
    },
    {
        id: 7,
        date: "2025.10.05",
        category: "イベント",
        categoryClass: "category-event",
        title: "ハイブリッド型探究学習2学期！10月〜12月までの全6回、様々な分野の楽しみながら学ぶコンテンツが目白押しです！",
        link: "news/event-202510-12.html",
        featured: true
    },
    {
        id: 6,
        date: "2025.09.27",
        category: "お知らせ",
        categoryClass: "category-notice",
        title: "親子で創作・デジタル体験イベントの午前の部は先着順となります。現時点、申込み多数のため、各ブースともキャンセル待ちとなる可能性が高く、体験できない場合もございますので予めご了承下さい",
        link: "#",
        featured: false
    },
    {
        id: 5,
        date: "2025.09.01",
        category: "イベント",
        categoryClass: "category-event",
        title: "9月28日（日）親子で楽しむ創作体験 with TeacherTeacher 開催！ポッドキャストで大人気のTeacherTeacherのお二人と沖縄で“生”対話できる特別イベントです。",
        link: "news/2025-09-28.html",
        featured: true
    },
    {
        id: 4,
        date: "2025.07.29",
        category: "イベント",
        categoryClass: "category-event",
        title: "8月2日（土）親子で楽しむクッキングイベントの資料ダウンロードはこちらから※当日はブース内のQRコードからもダウンロードできます",
        link: "news/cooking.pdf",
        featured: true
    },
    {
        id: 3,
        date: "2025.07.15",
        category: "イベント",
        categoryClass: "category-event",
        title: "8月2日（土）親子で、まなび、あそぶマルシェ開催！ドローンプログラミング体験、お母さんの癒し・絵本セラビー、大人向け読み聞かせ会、栄養と発達を学ぶ簡単クッキング会など盛りだくさんです！",
        link: "news/event-20250802.html",
        featured: true
    },
    {
        id: 2,
        date: "2024.07.18",
        category: "イベント",
        categoryClass: "category-event",
        title: "8月2日に体験イベントを開催予定です。詳細は後ほどお知らせ致します。",
        link: "#",
        featured: false
    },
    {
        id: 1,
        date: "2024.07.01",
        category: "お知らせ",
        categoryClass: "category-notice",
        title: "NPO法人StarCrafters設立！合わせてウェブサイトを開設しました。コンテンツはこれから充実させていきます。",
        link: "#",
        featured: false
    }
];

// 最新のお知らせを取得する関数
function getLatestNews(count = 3) {
    return newsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);
}

// 全てのお知らせを取得する関数
function getAllNews() {
    return newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// お知らせHTMLを生成する関数
function generateNewsHTML(newsItem) {
    return `
        <a href="${newsItem.link}" class="news-item">
            <div class="news-item-content">
                <div class="news-meta">
                    <span class="news-date">${newsItem.date}</span>
                    <span class="news-category ${newsItem.categoryClass}">${newsItem.category}</span>
                </div>
                <p class="news-title">${newsItem.title}</p>
            </div>
        </a>
    `;
}
