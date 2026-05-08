// お知らせデータ管理
const newsData = [
    {
        id: 13,
        date: "2026.05.08",
        category: "お知らせ",
        categoryClass: "category-notice",
        title: "通信制高校・サポート校 進路相談会のお知らせ",
        link: "news/info-20260620.html",
        featured: true
    },
    {
        id: 12,
        date: "2026.05.01",
        category: "イベント",
        categoryClass: "category-event",
        title: "CoderDojo南城プレ開催・参加者募集!!",
        link: "news/info-20260510.html",
        featured: true
    },
    {
        id: 11,
        date: "2026.02.10",
        category: "イベント",
        categoryClass: "category-event",
        title: "ミチシルベ2026に参加します（2月14日）ドローン・生成AI・プログラミング体験！",
        link: "news/event-20260214.html",
        featured: true
    },
    {
        id: 10,
        date: "2026.01.27",
        category: "イベント",
        categoryClass: "category-event",
        title: "Minecraft DAY!!（2月1日）開催！純粋にマイクラを楽しむ一日。参加者募集中！",
        link: "news/event-20260201.html",
        featured: true
    },
    {
        id: 9,
        date: "2026.01.23",
        category: "イベント",
        categoryClass: "category-event",
        title: "ハイブリッド型探究学習3学期！1月〜3月の全5回で多彩な学びを楽しもう。",
        link: "news/event-202601-03.html",
        featured: true
    },
    {
        id: 8,
        date: "2025.12.31",
        category: "イベント",
        categoryClass: "category-event",
        title: "Minecraftカウントダウン2026！新年をマイクラワールドで祝おう!",
        link: "news/event-20251231.html",
        featured: true
    },
    {
        id: 7,
        date: "2025.12.20",
        category: "イベント",
        categoryClass: "category-event",
        title: "遊王祭×CoderDojo（1月12日）でポケカ・ミニ四駆・ヘボコンなど“遊びの祭り”を開催！",
        link: "news/event-20260112.html",
        featured: true
    },
    {
        id: 6,
        date: "2025.12.20",
        category: "イベント",
        categoryClass: "category-event",
        title: "ヘボコン in 南城の参加者募集ページを公開。ヘボいロボット相撲で笑い合おう！",
        link: "news/hebocon-entry.html",
        featured: true
    },
    {
        id: 5,
        date: "2025.12.27",
        category: "イベント",
        categoryClass: "category-event",
        title: "（募集終了）DTMを体験しよう！初心者向けの音楽制作ワークショップを開催します。",
        link: "news/event-20251227.html",
        featured: true
    },
    {
        id: 4,
        date: "2025.11.16",
        category: "イベント",
        categoryClass: "category-event",
        title: "「不登校」これからの選択肢を考える！参加者募集！",
        link: "news/event-20251116.html",
        featured: true
    },
    {
        id: 3,
        date: "2025.10.05",
        category: "イベント",
        categoryClass: "category-event",
        title: "ハイブリッド型探究学習2学期！10月〜12月までの全6回、様々な分野の楽しみながら学ぶコンテンツが目白押しです！",
        link: "news/event-202510-12.html",
        featured: true
    },
    {
        id: 2,
        date: "2025.09.27",
        category: "お知らせ",
        categoryClass: "category-notice",
        title: "親子で創作・デジタル体験イベントの午前の部は先着順となります。現時点、申込み多数のため、各ブースともキャンセル待ちとなる可能性が高く、体験できない場合もございますので予めご了承下さい",
        link: "#",
        featured: false
    },
    {
        id: 1,
        date: "2025.09.01",
        category: "イベント",
        categoryClass: "category-event",
        title: "9月28日（日）親子で楽しむ創作体験 with TeacherTeacher 開催！ポッドキャストで大人気のTeacherTeacherのお二人と沖縄で“生”対話できる特別イベントです。",
        link: "news/2025-09-28.html",
        featured: true
    }
];

// 最新のお知らせを取得する関数
function getLatestNews(count = 3) {
    const parseNewsDate = (dateStr) => new Date(dateStr.replace(/\./g, "-"));
    return newsData
        .sort((a, b) => parseNewsDate(b.date) - parseNewsDate(a.date))
        .slice(0, count);
}

// 全てのお知らせを取得する関数
function getAllNews() {
    const parseNewsDate = (dateStr) => new Date(dateStr.replace(/\./g, "-"));
    return newsData.sort((a, b) => parseNewsDate(b.date) - parseNewsDate(a.date));
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
