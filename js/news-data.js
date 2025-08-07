// お知らせデータ管理
const newsData = [
    
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
        title: "8月2日（土）親子で、まなび、あそぶマルシェ開催！ドローンプログラミング体験、お母さんの癒し・絵本セラピー、大人向け読み聞かせ会、栄養と発達を学ぶ簡単クッキング会など盛りだくさんです！",
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
        featured: true
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