export interface INews {
  id: number;
  category: string;
  datetime: number;
  headline: string;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export const news: INews[] = [
  {
    category: "company",
    datetime: 1602894360,
    headline: "Tech’s Influence Over Markets Eclipses Dot-Com Bubble Peak",
    id: 55179994,
    image: "https://images.wsj.net/im-246189/social",
    related: "AAPL",
    source: "wsj",
    summary:
      "Technology companies are set to end the year with their greatest share of the stock market ever, topping a dot-com era peak in the latest illustration of their growing influence on global consumers.",
    url:
      "https://www.wsj.com/articles/techs-influence-over-markets-eclipses-dot-com-bubble-peak-11602894413",
  },
  {
    category: "company",
    datetime: 1602892800,
    headline:
      "A New Era for iPhone with 5G, UScellular to Offer iPhone 12 Pro and iPhone 12, with Orders Starting on October 16",
    id: 55179848,
    image:
      "https://mms.businesswire.com/media/20201016005700/en/824848/23/UScellular_2020_Logo.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "UScellular will offer the new iPhone 12 lineup, introducing a powerful 5G experience.",
    url:
      "https://www.businesswire.com/news/home/20201016005700/en/A-New-Era-for-iPhone-with-5G-UScellular-to-Offer-iPhone-12-Pro-and-iPhone-12-with-Orders-Starting-on-October-16",
  },
  {
    category: "company",
    datetime: 1602892320,
    headline:
      "From 5G to ‘Super-Cycle,’ Here’s What Matters Most for Apple and the iPhone 12",
    id: 55179826,
    image: "https://images.barrons.com/im-245759/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "The most surprising part of the new iPhone 12 is how much wireless carriers want you to have one.",
    url:
      "https://www.marketwatch.com/articles/from-5g-to-super-cycle-heres-what-matters-most-for-apple-and-the-iphone-12-51602892356",
  },
  {
    category: "company",
    datetime: 1602890580,
    headline: "Apple’s iPhone 12 Meets Supercycle Expectations",
    id: 55179639,
    image: "https://images.barrons.com/im-246069/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Demand for the latest model remains to be seen, with networks largely unprepared. But the deals might be too good to pass up.",
    url:
      "https://www.marketwatch.com/articles/apples-iphone-12-meets-supercycle-expectations-51602890612",
  },
  {
    category: "company",
    datetime: 1602890580,
    headline: "Apple’s iPhone 12 Meets Supercycle Expectations",
    id: 55179631,
    image: "https://images.barrons.com/im-246069/social",
    related: "AAPL",
    source: "barrons",
    summary:
      "Demand for the latest model remains to be seen, with networks largely unprepared. But the deals might be too good to pass up.",
    url:
      "https://www.barrons.com/articles/apples-iphone-12-meets-supercycle-expectations-51602890612",
  },
  {
    category: "company",
    datetime: 1602886500,
    headline:
      "River Joins the Crowd of Apps Aggregating and Personalizing Headlines",
    id: 55179604,
    image: "https://images.wsj.net/im-246149/social",
    related: "AAPL",
    source: "wsj",
    summary:
      "Yet another app arrived this week to offer consumers a personalized feed of headlines plucked from the rising flood of news, using a different take on the user experience to try to stand out.",
    url:
      "https://www.wsj.com/articles/river-joins-the-crowd-of-apps-aggregating-and-personalizing-headlines-11602886546",
  },
  {
    category: "company",
    datetime: 1602886320,
    headline: "How did Intel lose its Silicon Valley crown?",
    id: 55179454,
    image:
      "https://s.marketwatch.com/public/resources/images/MW-IR344_intel__ZG_20201016165909.jpg",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Intel Corp., Silicon Valley’s largest chip maker, is still the dominant provider of chips for personal computers and servers, but its reign as the king of...",
    url:
      "https://www.marketwatch.com/story/how-did-intel-lose-its-silicon-valley-crown-2020-10-16",
  },
  {
    category: "company",
    datetime: 1602882517,
    headline:
      "Apple TV Plus free trial extended for early adopters – here’s when it’ll expire",
    id: 55179422,
    image:
      "https://cdn.mos.cms.futurecdn.net/eS3rWvR7BJw7Gp7JWcZ5Uc-1200-80.jpg",
    related: "AAPL",
    source: "https://www.techradar.com",
    summary: "Up to three months free, even for monthly subscribers",
    url:
      "https://www.techradar.com/news/apple-extends-apple-tv-plus-free-trials-until-february",
  },
  {
    category: "company",
    datetime: 1602880059,
    headline: "iPhones will be bigger than your head if sizing trend continues",
    id: 55179486,
    image:
      "https://i.dailymail.co.uk/1s/2020/10/16/20/34484300-0-image-a-19_1602876058204.jpg",
    related: "AAPL",
    source: "https://www.dailymail.co.uk",
    summary:
      "The new iPhone 12 Pro Max is 6.7 inches tall, nearly double the original. If that trend continues, in 2040 iPhones will be 17.5 inches or bigger than a MacBook, according to a recent study.",
    url:
      "https://www.dailymail.co.uk/sciencetech/article-8848669/iPhones-bigger-wine-bottle-2040-current-sizing-trend-continues.html",
  },
  {
    category: "company",
    datetime: 1602879900,
    headline: "Apple Inc. stock falls Friday, underperforms market",
    id: 55179254,
    image: "https://images.mktw.net/im-213861/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Shares of Apple Inc. slid 1.40% to $119.02 Friday, on what proved to be an all-around mixed trading session for the stock market, with the Dow Jones...",
    url:
      "https://www.marketwatch.com/story/apple-inc-stock-falls-friday-underperforms-market-01602879942",
  },
  {
    category: "company",
    datetime: 1602876192,
    headline:
      "Today at Apple comes to India with online photography and music sessions - 9to5Mac",
    id: 55179295,
    image:
      "https://9to5mac.com/wp-content/uploads/sites/6/2020/10/today_at_apple_india.jpg?quality=82&strip=all",
    related: "AAPL",
    source: "https://9to5mac.com",
    summary:
      "Today at Apple is launching online in India, bringing together a new community of creatives with artists and makers from around the world. The free, global program of creative and educational sessions is kicking off just in time for Diwali with the Illuminating Creativity Series. Creatives know Today at Apple for its immersive and inspiring […]",
    url:
      "https://9to5mac.com/2020/10/16/today-at-apple-india-illuminating-creativity/",
  },
  {
    category: "company",
    datetime: 1602874805,
    headline:
      "Qual o futuro do 5G agora que a Apple suporta o sistema? - Computerworld",
    id: 55179177,
    image:
      "https://computerworld.com.br/wp-content/uploads/2020/10/Qual-o-futuro-do-5G-agora-que-o-Apple-suporta-o-sistema.jpg",
    related: "AAPL",
    source: "https://computerworld.com.br",
    summary:
      "O iPhone 12 suporta 5G, mas os problemas permanecem e o momento atual serve para ajustar expectativas",
    url:
      "https://computerworld.com.br/negocios/qual-o-futuro-do-5g-agora-que-a-apple-suporta-o-sistema/",
  },
  {
    category: "company",
    datetime: 1602868203,
    headline: "Apple ditching chargers saves costs but not the planet",
    id: 55180115,
    image:
      "https://cdn.vox-cdn.com/thumbor/E03zBwGe0wjHEu_dXvfZBPQpd88=/0x679:3328x2421/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21963707/1229069000.jpg.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary: "The iPhone 12 doesn’t come with earbuds or a wall charger",
    url: "https://www.theverge.com/2020/10/16/21519466/art-club",
  },
  {
    category: "company",
    datetime: 1602868203,
    headline: "Apple ditching chargers saves costs but not the planet",
    id: 55179926,
    image:
      "https://cdn.vox-cdn.com/thumbor/E03zBwGe0wjHEu_dXvfZBPQpd88=/0x679:3328x2421/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21963707/1229069000.jpg.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary: "The iPhone 12 doesn’t come with earbuds or a wall charger",
    url:
      "https://www.theverge.com/2020/10/16/21519466/apple-iphone-12-chargers-airpods-greenhouse-gas-emissions-e-waste",
  },
  {
    category: "company",
    datetime: 1602866294,
    headline: "iPhone 12 preorders are already selling out",
    id: 55178910,
    image:
      "https://bgr.com/wp-content/uploads/2020/10/Apple_announce-iphone12pro_10132020_big.jpg.large_2x.jpg?quality=70&strip=all",
    related: "AAPL",
    source: "https://bgr.com",
    summary:
      "The iPhone 12 Pro and iPhone 12 are available for preorder in various countries, and some models are already selling out in America. The two phones are virtually identical, with the iPhone 12 Pro g…",
    url:
      "https://bgr.com/2020/10/16/iphone-12-pro-sold-out-vs-iphone-12-specs-price/",
  },
  {
    category: "company",
    datetime: 1602865980,
    headline:
      "Some customers will pay hundreds more for the new iPhone 12. Here’s why",
    id: 55178786,
    image: "https://images.mktw.net/im-245983/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Customers in Europe will pay hundreds of dollars more for the new iPhone than their American counterparts, when it becomes available on October 23.",
    url:
      "https://www.marketwatch.com/story/some-customers-will-pay-hundreds-more-for-the-new-iphone-12-heres-why-11602866015",
  },
  {
    category: "company",
    datetime: 1602865800,
    headline: "Why Apple's iPhone 12 Could Be a Runaway Hit | The Motley Fool",
    id: 55179915,
    image:
      "https://g.foolcdn.com/editorial/images/595378/apple_iphone-12_super-retina-xdr-display_10132020.jpg",
    related: "AAPL",
    source: "https://www.fool.com",
    summary:
      "The smartphone giant has gotten quite a few things right that could help it set the sales charts on fire.",
    url:
      "https://www.fool.com/investing/2020/10/16/why-apples-iphone-12-could-be-a-runaway-hit/",
  },
  {
    category: "company",
    datetime: 1602861991,
    headline: "It Sounds Like Spotify Is In Trouble (NYSE:SPOT)",
    id: 55178704,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "Today, the music streaming business is even more competitive, and the current streaming music market leader could face a similar fate as Pandora.",
    url:
      "https://seekingalpha.com/article/4379422-sounds-like-spotify-is-in-trouble",
  },
  {
    category: "company",
    datetime: 1602861563,
    headline:
      "Drooling for the New iPhone 12? Here's How You Can Get It for Free",
    id: 55180003,
    image:
      "https://1734811051.rsc.cdn77.org/data/images/full/373797/apple-begins-pre-order-for-iphone-12.jpg",
    related: "AAPL",
    source: "https://www.techtimes.com",
    summary: "There are some ways to get the iPhone for free.",
    url:
      "https://www.techtimes.com/articles/253404/20201016/apple-begins-pre-order-iphone-12-heres-free.htm",
  },
  {
    category: "company",
    datetime: 1602860427,
    headline:
      "The DeanBeat: How the ad ecosystem will cope with Apple’s IDFA changes",
    id: 55179879,
    image:
      "https://venturebeat.com/wp-content/uploads/2016/06/Apple-App-Store-search-ads-deck.png?w=1200&strip=all",
    related: "AAPL",
    source: "https://venturebeat.com",
    summary:
      "Apple is ending targeting advertising in the name of privacy. Now the mobile ad ecosystem is figuring out what will happen next.",
    url:
      "https://venturebeat.com/2020/10/16/how-the-ad-ecosystem-will-cope-with-apples-idfa-changes/",
  },
  {
    category: "company",
    datetime: 1602858600,
    headline:
      "iPhone Sales Will Get a Boost From Carriers This Year | The Motley Fool",
    id: 55179917,
    image:
      "https://g.foolcdn.com/editorial/images/595322/apple_iphone-12_super-retina-xdr-display_10132020_full-bleed-imagejpglarge_2x.jpg",
    related: "AAPL",
    source: "https://www.fool.com",
    summary:
      "All three major U.S. wireless carriers are offering aggressive promotions.",
    url:
      "https://www.fool.com/investing/2020/10/16/iphone-sales-will-get-a-boost-from-carriers-this-y/",
  },
  {
    category: "company",
    datetime: 1602857954,
    headline: "Apple Now Accepts iPhone 12, iPhone 12 Pro Pre-Orders",
    id: 55180011,
    image:
      "https://1734811051.rsc.cdn77.org/data/images/full/373788/apple-starts-taking-iphone-12-pre-orders-how-and-where-to-order.jpg",
    related: "AAPL",
    source: "https://www.techtimes.com",
    summary:
      "Today is the day that you can now start to pre-order Apple's iPhone 12. How to pre-order and where to go online.",
    url:
      "https://www.techtimes.com/articles/253402/20201016/apple-starts-taking-iphone-12-pre-orders-where-order.htm",
  },
  {
    category: "company",
    datetime: 1602857100,
    headline:
      "An Apple Watch with Family Setup is an expensive smart watch for your kids",
    id: 55179928,
    image:
      "https://cdn.vox-cdn.com/thumbor/S026AEUeoSi_ut6RNAIcuNZsl-Y=/0x289:2040x1357/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21928309/dseifert_200930_4217_0001.0.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary: "Track your kids, for a price.",
    url:
      "https://www.theverge.com/21518711/apple-watch-family-setup-test-review-features-explainer",
  },
  {
    category: "company",
    datetime: 1602855674,
    headline:
      "IPhone 12 doesn't come with a plug for charging — here's what you need to buy",
    id: 55178219,
    image:
      "https://image.cnbcfm.com/api/v1/image/106747765-1602853699932-Screen_Shot_2020-10-16_at_90631_AM.png?v=1602853705",
    related: "AAPL",
    source: "cnbc",
    summary:
      "The iPhone 12 comes with a USB-C cable in the box, but not the plug for your wall. You should buy a 20-watt charger from Apple or another company to charge at the fastest speeds.",
    url:
      "https://www.cnbc.com/2020/10/16/the-best-iphone-12-charger-to-buy-for-fastest-charging-speeds.html",
  },
  {
    category: "company",
    datetime: 1602855002,
    headline:
      "Which is better, the Samsung Galaxy Tab S7+ or the Apple iPad Pro?",
    id: 55179418,
    image:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/09/samsung-galaxy-tab-s7-plus-review-8.jpg",
    related: "AAPL",
    source: "https://www.androidcentral.com",
    summary:
      "When you eyeball the specs, the Samsung Galaxy Tab S7+ and the Apple iPad Pro look pretty similar. But which one is the better overall option?",
    url:
      "https://www.androidcentral.com/samsung-galaxy-tab-s7-plus-vs-apple-ipad-pro",
  },
  {
    category: "company",
    datetime: 1602853456,
    headline:
      "What to watch today: Stocks set to open higher after three-day drop",
    id: 55178231,
    image:
      "https://image.cnbcfm.com/api/v1/image/106699111-1599837087884-gettyimages-1271945849-dscf0561_20200911102120234.jpeg?v=1602010660",
    related: "AAPL",
    source: "cnbc",
    summary:
      "U.S. stock futures rose Friday, with Pfizer up after saying it could apply for FDA emergency use authorization for its Covid-19 vaccine candidate in late November.",
    url:
      "https://www.cnbc.com/2020/10/16/what-to-watch-today-stocks-set-to-open-higher-after-three-day-drop.html",
  },
  {
    category: "company",
    datetime: 1602853260,
    headline: "Apple Stock at $120: Buy, Sell, or Hold? | The Motley Fool",
    id: 55179903,
    image:
      "https://g.foolcdn.com/editorial/images/595369/apple-stock-buy-sell-hold.jpg",
    related: "AAPL",
    source: "https://www.fool.com",
    summary:
      "With a handful of new products and services, is the tech giant's stock ready to take off?",
    url:
      "https://www.fool.com/investing/2020/10/16/apple-stock-at-120-buy-sell-or-hold/",
  },
  {
    category: "company",
    datetime: 1602853260,
    headline: "Apple Stock at $120: Buy, Sell, or Hold? | The Motley Fool",
    id: 55179846,
    image:
      "https://g.foolcdn.com/editorial/images/595369/apple-stock-buy-sell-hold.jpg",
    related: "AAPL",
    source: "https://markets.businessinsider.com",
    summary:
      "With a handful of new products and services, is the tech giant's stock ready to take off?",
    url:
      "https://markets.businessinsider.com/news/stocks/apple-stock-at-$120--buy--sell--or-hold-9401008",
  },
  {
    category: "company",
    datetime: 1602852842,
    headline:
      "iPad Air orders open – Apple’s $599 tablet promises a sweet-spot",
    id: 55178740,
    image:
      "https://cdn.slashgear.com/wp-content/uploads/2020/10/apple_ipad-air-availability_colors_10162020_big_large_2x.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "Apple’s iPad Air has gone up for sale, joining the iPhone 12 Pro and iPhone 12 in the company’s big Friday launch. Announced back in mid-September, the newest version of Apple’s t…",
    url:
      "https://www.slashgear.com/apple-ipad-air-preorders-price-specifications-colors-release-date-16642994/",
  },
  {
    category: "company",
    datetime: 1602851771,
    headline: "New iPad goes on sale alongside iPhone 12",
    id: 55178370,
    image: "https://static.independent.co.uk/2020/10/16/13/ipads.jpg",
    related: "AAPL",
    source: "https://www.independent.co.uk",
    summary: "",
    url:
      "https://www.independent.co.uk/life-style/gadgets-and-tech/ipad-air-apple-iphone-12-release-date-price-buy-store-b1073759.html",
  },
  {
    category: "company",
    datetime: 1602849420,
    headline: "Pre-orders for the Apple iPhone 12 opened up this morning",
    id: 55178696,
    image:
      "https://media4.s-nbcnews.com/j/newscms/2020_42/3420185/201014-apple-iphone12-2x1-al-1441_c96281ff03587a872e9c81fcce439c41.nbcnews-fp-1200-630.jpg",
    related: "AAPL",
    source: "https://www.nbcnews.com",
    summary:
      "Should you upgrade to Apple’s latest iPhone 12 or iPhone 12 Pro (or Mini or Max)? Tech expert Whitson Gordon weighs in.",
    url:
      "https://www.nbcnews.com/shopping/tech-gadgets/apple-iphone-12-n1243691",
  },
  {
    category: "company",
    datetime: 1602849139,
    headline: "5 things to know before the stock market opens Friday",
    id: 55178241,
    image:
      "https://image.cnbcfm.com/api/v1/image/106717323-1601037129831-2020-06-11T000000Z_1886231381_RC297H9CV5MI_RTRMADP_3_USA-STOCKS.JPG?v=1601037208",
    related: "AAPL",
    source: "cnbc",
    summary:
      "U.S. stock futures rose Friday, with Pfizer up after saying it could apply for FDA emergency use authorization for its Covid-19 vaccine candidate in late November.",
    url:
      "https://www.cnbc.com/2020/10/16/5-things-to-know-before-the-stock-market-opens-october-16-2020.html",
  },
  {
    category: "company",
    datetime: 1602847860,
    headline:
      "All-new iPad Air is available to pre-order today, as release date is finally confirmed",
    id: 55179357,
    image:
      "https://cdn.images.express.co.uk/img/dynamic/59/750x445/1348323.jpg",
    related: "AAPL",
    source: "https://www.express.co.uk",
    summary:
      "APPLE has quietly updated its Apple Store listing to confirm that pre-orders for its all-new iPad Air will launch this afternoon alongside the iPhone 12 and iPhone 12 Pro. Here's how to get your hands on one.",
    url:
      "https://www.express.co.uk/life-style/science-technology/1348323/Apple-iPad-Air-2020-Pre-Order-Today-Release-Date-October-22-UK-Apple-Confirmed",
  },
  {
    category: "company",
    datetime: 1602846002,
    headline:
      "Plastic and aluminum phones are making a comeback, and I'm thrilled",
    id: 55179399,
    image:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/10/pixel-5-vs-pixel-4a-5g_0.jpg",
    related: "AAPL",
    source: "https://www.androidcentral.com",
    summary:
      "For the past several years, the best phones have been metal and mostly glass sandwiches. Thanks to the price wars heating up in the mid- to low-premium space, more manufacturers are cutting costs by reintroducing materials like aluminum and plastic. This little change offers some surprising benefits to consumers.",
    url:
      "https://www.androidcentral.com/i-dont-know-about-you-but-im-very-happy-that-plastic-aluminum-phones-making-comeback",
  },
  {
    category: "company",
    datetime: 1602845410,
    headline:
      "iPhone 12 Pro and Pro Max will be the first iPhones with 6GB of RAM",
    id: 55178916,
    image:
      "https://bgr.com/wp-content/uploads/2020/10/Apple_announce-iphone12pro_10132020_big.jpg.large_2x.jpg?quality=70&strip=all",
    related: "AAPL",
    source: "https://bgr.com",
    summary:
      "According to new findings, the iPhone 12 Pro and iPhone 12 Pro Max will be the first iPhones to feature 6GB of RAM. The cheaper iPhone 12 mini and iPhone 12 will ship with 4GB of RAM, just like the…",
    url:
      "https://bgr.com/2020/10/16/iphone-12-pro-ram-vs-iphone-12-6gb-of-ram/",
  },
  {
    category: "company",
    datetime: 1602844956,
    headline:
      "MacBook, iPads, more on sale today at Woot: 16-inch MacBook Pro $1,875, more - 9to5Toys",
    id: 55179720,
    image:
      "https://9to5toys.com/wp-content/uploads/sites/5/2020/01/Apple-MacBook-Pro-15-inch-i916GB512GB.jpg?quality=82&strip=all",
    related: "AAPL",
    source: "https://9to5toys.com",
    summary:
      "Today only, Woot offers Apple MacBooks, iPads, and accessories from $22. Some listings are beginning to sell out, so act quickly if something catches your eye. Free shipping is available with a Prime membership; otherwise, a $6 delivery fee will apply. Our top pick is the 16-inch MacBook Pro in certified refurbished condition from $1,874.99. As a […]",
    url: "https://9to5toys.com/2020/10/16/macbook-ipad-woot-deals/",
  },
  {
    category: "company",
    datetime: 1602844393,
    headline:
      "Apple online store in India down, company says updating with new changes",
    id: 55177907,
    image:
      "https://images.livemint.com/img/2020/10/16/600x338/Screenshot_(208)_1602844095332_1602844111173.png",
    related: "AAPL",
    source: "https://www.livemint.com",
    summary:
      "The Cupertino tech giant launched its online store in India last month and is aiming to tap into the festive season sales",
    url:
      "https://www.livemint.com/technology/tech-news/apple-online-store-in-india-down-company-says-updating-with-new-changes-11602843654979.html",
  },
  {
    category: "company",
    datetime: 1602841757,
    headline:
      "New eps of Tehran and Long Way Up debut on Apple TV+ | Cult of Mac",
    id: 55178856,
    image:
      "https://cdn.cultofmac.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-16-at-10.14.47.jpg",
    related: "AAPL",
    source: "https://www.cultofmac.com",
    summary:
      "Apple has debuted a new episode of both its hit spy drama Tehran and Ewan McGregor and Charley Boorman-fronted travelogue Long Way Up.",
    url:
      "https://www.cultofmac.com/725650/psa-new-episodes-of-tehran-and-long-way-updebut-on-apple-tv/",
  },
  {
    category: "company",
    datetime: 1602840240,
    headline:
      "Amazon iPhone Sale: Up to 30% off on Apple iPhone 11, 11 Pro Max and others - Times of India",
    id: 55179916,
    image:
      "https://static.toiimg.com/thumb/msid-78699438,width-1070,height-580,imgsize-171979,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    related: "AAPL",
    source: "https://timesofindia.indiatimes.com",
    summary:
      "The biggest discount of the Amazon Great Indian Festival sale is on the iPhone 11. And this came just a day after Apple launched its iPhone 12 series",
    url:
      "https://timesofindia.indiatimes.com/most-searched-products/todays-deals/amazon/amazon-iphone-offers-up-to-30-off-on-apple-iphone-11-11-pro-max-and-others/articleshow/78698824.cms",
  },
  {
    category: "company",
    datetime: 1602838800,
    headline:
      "Sonos Stock Up 9% Despite New Apple Smart Speaker, and Two More Numbers to Know",
    id: 55177733,
    image:
      "https://s.wsj.net/public/resources/MWimages/MW-HA919_barron_NS_20181226134502.png",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "The go-to split between stocks and bonds is changing. K-pop label Big Hit Entertainment goes public. And Sonos rebounds after worries about new competition...",
    url:
      "https://www.marketwatch.com/articles/sonos-stock-up-9-despite-new-apple-smart-speaker-51602838811",
  },
  {
    category: "company",
    datetime: 1602838800,
    headline:
      "Sonos Stock Up 9% Despite New Apple Smart Speaker, and Two More Numbers to Know",
    id: 55177659,
    image: "https://www.barrons.com/asset/barrons/images/social_highres.jpg",
    related: "AAPL",
    source: "barrons",
    summary:
      "The go-to split between stocks and bonds is changing. K-pop label Big Hit Entertainment goes public. And Sonos rebounds after worries about new competition from Apple.",
    url:
      "https://www.barrons.com/articles/sonos-stock-up-9-despite-new-apple-smart-speaker-51602838811",
  },
  {
    category: "company",
    datetime: 1602838063,
    headline:
      "New iPhone 12 (2020) release date, price, specs, news, 5G and what you need to know",
    id: 55179512,
    image:
      "https://cdn.mos.cms.futurecdn.net/aypqk769eMH864ziakjaAG-1200-80.jpg",
    related: "AAPL",
    source: "https://www.techradar.com",
    summary: "The new iPhone is here, and this is what you need to know",
    url:
      "https://www.techradar.com/news/iphone-12-10-big-changes-apple-is-set-to-make-to-the-iphone",
  },
  {
    category: "company",
    datetime: 1602836809,
    headline:
      "Apple TV+ Plus Guide: Here's all the Apple TV shows and movies available now",
    id: 55179338,
    image:
      "https://9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?quality=82&strip=all",
    related: "AAPL",
    source: "https://9to5mac.com",
    summary:
      "Apple TV+ is Apple's new streaming service for original TV shows and movies. Here's the entire TV guide, everything you can watch for your $4.99 per month subscription. New Apple originals are added every month.",
    url: "https://9to5mac.com/2020/10/16/apple-tv-plus-tv-shows-movies-guide/",
  },
  {
    category: "company",
    datetime: 1602836780,
    headline:
      "Expect a ‘dramatic fall’ in markets if U.S. election outcome is contested, warns Mark Mobius",
    id: 55177765,
    image:
      "https://image.cnbcfm.com/api/v1/image/106747130-1602826879019-gettyimages-1185149915-ftptrial-aa_28112019_1063929.jpeg?v=1602826720",
    related: "AAPL",
    source: "cnbc",
    summary:
      'The founding partner of Mobius Capital Partners said markets "hate" uncertainty, and how much markets fall would depend on how long the election dispute lasts.',
    url:
      "https://www.cnbc.com/2020/10/16/mark-mobius-on-market-reaction-to-us-elections-investing-in-tech.html",
  },
  {
    category: "company",
    datetime: 1602832887,
    headline:
      "Apple iPhone maker Foxconn wants to become the Android for electric cars with new vehicle platform",
    id: 55177605,
    image:
      "https://image.cnbcfm.com/api/v1/image/106747126-1602825985749-gettyimages-1091594824-AFP_1CV44F.jpeg?v=1602826064",
    related: "AAPL",
    source: "cnbc",
    summary:
      "Foxconn, the Taiwan company that assembles Apple's iPhone, has launched an platform to help automobile companies make electric cars.",
    url:
      "https://www.cnbc.com/2020/10/16/foxconn-wants-to-become-the-android-for-electric-cars.html",
  },
  {
    category: "company",
    datetime: 1602824400,
    headline: "Houston-area Apple Stores to reopen in time for iPhone 12 sales",
    id: 55179264,
    image: "https://s.hdnux.com/photos/01/14/57/46/20117934/11/rawImage.jpg",
    related: "AAPL",
    source: "https://www.houstonchronicle.com",
    summary:
      "Based on schedules posted on its website, Apple plans to start re-opening some of its Houston-area stores as early as Sunday. The stores have been closed since late June due to the spike in coronavirus infections.",
    url:
      "https://www.houstonchronicle.com/techburger/article/Houston-area-Apple-Stores-to-reopen-in-time-for-15652649.php",
  },
  {
    category: "company",
    datetime: 1602813615,
    headline: "iPhone Event: Finally 5G (NASDAQ:AAPL)",
    id: 55178871,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "The pandemic has wreaked havoc on Apple’s vaunted supply chain mastery, and iPhone has arrived late this year.",
    url: "https://seekingalpha.com/article/4379326-iphone-event-finally-5g",
  },
  {
    category: "company",
    datetime: 1602810420,
    headline:
      "Developers can now offer apps for pre-order on the App Store up to 180 days in advance - 9to5Mac",
    id: 55177318,
    image:
      "https://9to5mac.com/wp-content/uploads/sites/6/2020/10/Pre-order-App-Store.png",
    related: "AAPL",
    source: "https://9to5mac.com",
    summary:
      "Back in 2016, Apple let Nintendo offer Super Mario Run for pre-order via the App Store as the app was featured during the iPhone 7 keynote. Then, in 2017, the company made this feature available to all developers. As of today, developers can offer apps for pre-order on the App Store up to 180 days […]",
    url:
      "https://9to5mac.com/2020/10/15/developers-can-now-offer-apps-for-pre-order-on-the-app-store-up-to-180-days-in-advance/",
  },
  {
    category: "company",
    datetime: 1602807166,
    headline: "iPhone 12 Pro Max Vs. Pro: Worth An Extra $100?",
    id: 55177584,
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-Vs-Pro-Max.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "iPhone 12 Pro Max is worth a closer look.",
    url:
      "https://screenrant.com/iphone-12-pro-max-vs-pro-apple-premium-phone-comparison/",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "What Taiwan Semiconductor Earnings Indicate About These Top Tech Players",
    id: 55180362,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "investing",
    summary:
      "Stocks Analysis by Zacks Investment Research covering: Intel Corporation, Qualcomm Incorporated, Apple Inc, NVIDIA Corporation. Read Zacks Investment Research's latest article on Investing.com",
    url:
      "https://www.investing.com/analysis/what-taiwan-semiconductor-earnings-indicate-about-these-top-tech-players-200541375",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "22 Of The Best iPhone 12 Pro Cases: MagSafe Cases, Clear Cases & More",
    id: 55180094,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f898948627ca5b513c3a8d9%2F0x0.png",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      "From MagSafe cases to ultra protective cases to clear cases that will show off your iPhone 12's new colors, these are best iPhone 12 and iPhone 12 Pro cases you can buy.",
    url:
      "https://www.forbes.com/sites/anthonykarcz/2020/10/16/best-iphone-12-pro-cases-magsafe-cases-clear-cases--more/",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Apple Loop: iPhone 12’s Expensive Secret, Latest iPad Air Revealed, Exciting MacBook Pro Leak",
    id: 55180074,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f8a0a699000f100ffd37114%2F0x0.jpg",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      "This week’s Apple headlines; the launch of the new iPhone 12 handsets, Apple’s secret iPhone 12 price rise, the value of MagSafe, new MacBook laptops confirmed, the latest T2 security details, a tenth beta for macOS Big Sur, the latest iPad Air revealed, and more...",
    url:
      "https://www.forbes.com/sites/ewanspence/2020/10/16/apple-news-headlines-iphone-12-specs-launch-date-hidden-price-ipad-air-t2-security-macbook-pro-macos-arm/",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Wall Street Week Ahead: Big tech nervousness prompts calls to diversify",
    id: 55179052,
    image: "https://i-invdn-com.akamaized.net/trkd-images/LYNXMPEG9F1NE_M.jpg",
    related: "AAPL",
    source: "investing",
    summary:
      "Wall Street Week Ahead: Big tech nervousness prompts calls to diversify",
    url:
      "https://www.investing.com/news/stock-market-news/wall-street-week-ahead-big-tech-nervousness-prompts-calls-to-diversify-2326688",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Global System-on-Chip Market | Increase in 5G Investments to Boost Market Growth | Technavio",
    id: 55179001,
    image:
      "https://mms.businesswire.com/media/20201016005202/en/830952/23/IRTNTR45187.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global System-on-Chip (SoC) Market will grow by $ 5.72 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201016005202/en/4845884/Global-System-on-Chip-Market-Increase-in-5G-Investments-to-Boost-Market-Growth-Technavio",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Global System-on-Chip Market | Increase in 5G Investments to Boost Market Growth | Technavio",
    id: 55179000,
    image:
      "https://mms.businesswire.com/media/20201016005202/en/830952/23/IRTNTR45187.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global System-on-Chip (SoC) Market will grow by $ 5.72 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201016005202/en/4845883/Global-System-on-Chip-Market-Increase-in-5G-Investments-to-Boost-Market-Growth-Technavio",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Global System-on-Chip Market | Increase in 5G Investments to Boost Market Growth | Technavio",
    id: 55178993,
    image:
      "https://mms.businesswire.com/media/20201016005202/en/830952/23/IRTNTR45187.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global System-on-Chip (SoC) Market will grow by $ 5.72 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201016005202/en/Global-System-on-Chip-Market-Increase-in-5G-Investments-to-Boost-Market-Growth-Technavio",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline: "The Best iPhone 12 Pro Cases",
    id: 55178227,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f896cfaafeb047da96ba9a4%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D500%26cropY1%3D0%26cropY2%3D500",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      "You've got your iPhone 12 Pro pre-order, now make sure you've got a case to protect it!",
    url:
      "https://www.forbes.com/sites/anthonykarcz/2020/10/16/the-best-iphone-12-pro-cases/",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Apple Supplier Foxconn Aims To Serve 10% Of All Electric Vehicles Globally Within Next 7 Years",
    id: 55178162,
    image:
      "https://cdn.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/chuttersnap-xjlshl0hiik-unsplash_1_0.jpg",
    related: "AAPL",
    source: "benzinga",
    summary:
      "Apple Inc (NASDAQ: AAPL) supplier Foxconn, formally known as Hon Hai Precision Industry Co, Ltd (OTC: HNHPF), has plans to supply components or services for at least 10...",
    url:
      "https://www.benzinga.com/news/20/10/17932984/apple-supplier-foxconn-aims-to-serve-10-of-all-electric-vehicles-globally-within-next-7-years",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "DearMob Covid-19 Giveaway Promo for iPhone 12 Buyers to Migrant iPhone Data Safely",
    id: 55177943,
    image:
      "https://mms.businesswire.com/media/20201016005179/en/723730/23/b-dm.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "DearMob Convid-9 Giveaway Promo for iPhone 12 Buyers to Migrant iPhone Data Safely",
    url:
      "https://www.businesswire.com/news/home/20201016005179/en/DearMob-Covid-19-Giveaway-Promo-for-iPhone-12-Buyers-to-Migrant-iPhone-Data-Safely",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Global E-Commerce Market Report 2020-2025: Customers Shift Toward Online Platforms Due to COVID-19 - ResearchAndMarkets.com",
    id: 55177717,
    image:
      "https://mms.businesswire.com/media/20201016005273/en/371054/23/ResearchAndMarkets_800px.jpg",
    related: "AAPL",
    source: "businesswire",
    summary: "The",
    url:
      "https://www.businesswire.com/news/home/20201016005273/en/Global-E-Commerce-Market-Report-2020-2025-Customers-Shift-Toward-Online-Platforms-Due-to-COVID-19---ResearchAndMarkets.com",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Artificial Intelligence-as-a-Service Market- Business Strategy for Recovery from the Impact of COVID-19 |Technavio",
    id: 55177244,
    image:
      "https://mms.businesswire.com/media/20201015005855/en/830745/23/IRTNTR41175.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global Artificial Intelligence-as-a-Service (AIaaS) Market will grow by USD 15.14 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201015005855/en/4845379/Artificial-Intelligence-as-a-Service-Market--Business-Strategy-for-Recovery-from-the-Impact-of-COVID-19-Technavio",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Artificial Intelligence-as-a-Service Market- Business Strategy for Recovery from the Impact of COVID-19 |Technavio",
    id: 55177243,
    image:
      "https://mms.businesswire.com/media/20201015005855/en/830745/23/IRTNTR41175.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global Artificial Intelligence-as-a-Service (AIaaS) Market will grow by USD 15.14 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201015005855/en/4845378/Artificial-Intelligence-as-a-Service-Market--Business-Strategy-for-Recovery-from-the-Impact-of-COVID-19-Technavio",
  },
  {
    category: "company",
    datetime: 1602806400,
    headline:
      "Artificial Intelligence-as-a-Service Market- Business Strategy for Recovery from the Impact of COVID-19 |Technavio",
    id: 55177240,
    image:
      "https://mms.businesswire.com/media/20201015005855/en/830745/23/IRTNTR41175.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global Artificial Intelligence-as-a-Service (AIaaS) Market will grow by USD 15.14 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201015005855/en/Artificial-Intelligence-as-a-Service-Market--Business-Strategy-for-Recovery-from-the-Impact-of-COVID-19-Technavio",
  },
  {
    category: "company",
    datetime: 1602805881,
    headline:
      "Take a Bite of the AAPL Conspiracy on SteadyTrade Treats - StocksToTrade.com",
    id: 55176109,
    image:
      "https://stockstotrade.com/wp-content/uploads/2020/10/st_treats_BLOG.jpg",
    related: "AAPL",
    source: "https://stockstotrade.com",
    summary:
      "Bryce Tuohey of SteadyTrade Treats takes a bite of the latest stock market conspiracy theory. What's really going on with the Fed and AAPL?",
    url: "https://stockstotrade.com/aapl-conspiracy-steadytrade-treats/",
  },
  {
    category: "company",
    datetime: 1602803312,
    headline: "Samsung jabs at Apple over missing iPhone 12 wall charger",
    id: 55177137,
    image:
      "https://cdn.slashgear.com/wp-content/uploads/2020/10/samsung_charger_main.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "Apple announced the new iPhone 12 smartphone lineup this week, taking the wraps off its latest flagship, its Pro variant, and all of the new features users can expect. Consumers were quick to latch…",
    url:
      "https://www.slashgear.com/samsung-jabs-at-apple-over-missing-iphone-12-wall-charger-15642854/",
  },
  {
    category: "company",
    datetime: 1602801992,
    headline: "iPhone 12 Price, Pre-Orders, & Shipping Explained",
    id: 55177666,
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/iPhone-12-question-over-money.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "What to know before ordering an iPhone 12.",
    url:
      "https://screenrant.com/iphone-12-5g-price-preorders-delivery-shipping-explained/",
  },
  {
    category: "company",
    datetime: 1602796780,
    headline: "Nike offers $75 of freebies to new Apple Card users",
    id: 55176931,
    image:
      "https://cdn.cultofmac.com/wp-content/uploads/2020/10/A181DED6-A488-403E-9EB5-D1E86FD99E99.jpeg",
    related: "AAPL",
    source: "https://www.cultofmac.com",
    summary:
      "There's a signup bonus for Apple Card for the next month. Open an account, buy $75 or more from Nike in the first 30 days, and get $75 back.",
    url:
      "https://www.cultofmac.com/725618/nike-offers-75-of-freebies-to-new-apple-card-users/",
  },
  {
    category: "company",
    datetime: 1602796115,
    headline: "iPhone 12: How Long Does The Battery Last?",
    id: 55177668,
    image:
      "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/10/iPhone-12-battery.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "iPhone 12 comes with 5G and that impacts on battery.",
    url:
      "https://screenrant.com/iphone-12-mini-pro-max-battery-life-hours-explained/",
  },
  {
    category: "company",
    datetime: 1602795780,
    headline: "Two Chip Stocks That Stand to Win From the 5G iPhones",
    id: 55176456,
    image: "https://images.barrons.com/im-245379/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Truist analyst Wlliam Smith said the shift to fifth-generation wireless technology could support growth of 40% in the amount of semiconductors wireless...",
    url:
      "https://www.marketwatch.com/articles/two-chip-stocks-that-stand-to-win-from-the-5g-iphones-51602795788",
  },
  {
    category: "company",
    datetime: 1602795780,
    headline: "Two Chip Stocks That Stand to Win From the 5G iPhones",
    id: 55176312,
    image: "https://images.barrons.com/im-245379/social",
    related: "AAPL",
    source: "barrons",
    summary:
      "Truist analyst Wlliam Smith said the shift to fifth-generation wireless technology could support growth of 40% in the amount of semiconductors wireless devices contain.",
    url:
      "https://www.barrons.com/articles/two-chip-stocks-that-stand-to-win-from-the-5g-iphones-51602795788",
  },
  {
    category: "company",
    datetime: 1602794924,
    headline: "iPhone Upgrades: How To Get A New iPhone Every Year",
    id: 55177669,
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/iPhone-12-over-money-.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "Apple's program lets iPhone owners easily upgrade.",
    url:
      "https://screenrant.com/iphone-upgrade-program-apple-enrollment-trade-prices/",
  },
  {
    category: "company",
    datetime: 1602793926,
    headline: "I Found $2,000, And Here's How I Invested It",
    id: 55177416,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "Many of us have more money than we think. It's right when you're on the verge of a foolish decision that you realize how much cash you can actually spare.",
    url:
      "https://seekingalpha.com/insight/investing-strategy/article/4379295-i-found-2000-and-how-i-invested",
  },
  {
    category: "company",
    datetime: 1602793500,
    headline: "Apple Inc. stock falls Thursday, still outperforms market",
    id: 55176301,
    image: "https://images.mktw.net/im-213861/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Shares of Apple Inc. slipped 0.40% to $120.71 Thursday, on what proved to be an all-around dismal trading session for the stock market, with the NASDAQ...",
    url:
      "https://www.marketwatch.com/story/apple-inc-stock-falls-thursday-still-outperforms-market-01602793533",
  },
  {
    category: "company",
    datetime: 1602792520,
    headline: "iPhone 12 vs. iPhone 12 Pro: Which should you buy? - 9to5Mac",
    id: 55177518,
    image:
      "https://9to5mac.com/wp-content/uploads/sites/6/2020/10/iphone-12pro-vs-12-1920x1080-1.jpg?quality=82&strip=all",
    related: "AAPL",
    source: "https://9to5mac.com",
    summary:
      "On the surface, the iPhone 12 and iPhone 12 Pro are similar phones, but there are a few differences. Here are the details of iPhone 12 vs. iPhone 12 Pro.",
    url: "https://9to5mac.com/2020/10/15/iphone-12-vs-iphone-12-pro/",
  },
  {
    category: "company",
    datetime: 1602791731,
    headline: "iPhone 12 mini Vs. Pixel 4a 5G: Best Cheapest 5G Phone?",
    id: 55177670,
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/Apple-iPhone-12-mini-Vs.-Google-Pixel-4a-5G.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "iPhone 12 mini or Pixel 4a 5G the better 5G phone buy?",
    url:
      "https://screenrant.com/iphone-12-mini-vs-pixel-4a-5g-apple-google-cheap-5g-phones/",
  },
  {
    category: "company",
    datetime: 1602788640,
    headline:
      "Apple just announced a new wireless charger that 'will be available at a later date.' The last time Apple did this, it ended up canceling the product.",
    id: 55177288,
    image:
      "https://www.businessinsider.in/photo/78690508/apple-just-announced-a-new-wireless-charger-that-will-be-available-at-a-later-date-the-last-time-apple-did-this-it-ended-up-canceling-the-product-.jpg?imgsize=37564",
    related: "AAPL",
    source: "https://www.businessinsider.in",
    summary: "",
    url:
      "https://www.businessinsider.in/tech/news/apple-just-announced-a-new-wireless-charger-that-will-be-available-at-a-later-date-the-last-time-apple-did-this-it-ended-up-canceling-the-product-/articleshow/78690508.cms",
  },
  {
    category: "company",
    datetime: 1602788493,
    headline:
      "When can you pre-order iPhone 12, iPhone 12 Pro, iPhone 12 Pro Max and iPhone 12 Mini in India",
    id: 55175268,
    image:
      "https://images.financialexpress.com/2020/10/Screenshot_2020-10-14-Buy-iPhone-12-Pro-and-iPhone-12-Pro-Max1.png",
    related: "AAPL",
    source: "https://www.financialexpress.com",
    summary:
      "Apple has revealed pre-order details of iPhone 12, iPhone 12 mini, iPhone 12 Pro, and iPhone 12 Pro Max in India.",
    url:
      "https://www.financialexpress.com/industry/technology/when-can-you-pre-order-iphone-12-iphone-12-pro-iphone-12-pro-max-and-iphone-12-mini-in-india/2106515/",
  },
  {
    category: "company",
    datetime: 1602787702,
    headline:
      "If you want a new iPad Air, you’d better start saving: leak claims release date is close",
    id: 55176702,
    image:
      "https://cdn.images.express.co.uk/img/dynamic/59/750x445/1348323.jpg",
    related: "AAPL",
    source: "https://www.express.co.uk",
    summary:
      "APPLE has kept quiet about when we'll see its dramatically redesigned iPad Air appear on shelves (digital and physical) worldwide following its announcement on September 15. However, a new leak might've ruined the surprise... and Apple fans better start saving!",
    url:
      "https://www.express.co.uk/life-style/science-technology/1348323/Apple-iPad-Air-2020-Pre-Order-Release-Date-October-22-UK",
  },
  {
    category: "company",
    datetime: 1602787144,
    headline:
      "iPhone 12 vs. iPhone 12 Pro: Which Should You Buy? | Digital Trends",
    id: 55176669,
    image:
      "https://icdn4.digitaltrends.com/image/digitaltrends/iphone12_composite_201012b-1200x630-c-ar1.91.jpg",
    related: "AAPL",
    source: "https://www.digitaltrends.com",
    summary:
      "Apple has launched the iPhone 12 as four different models. We compare two of them, the iPhone 12 and iPhone 12 Pro, to find out which is most worth your time.",
    url: "https://www.digitaltrends.com/mobile/iphone-12-vs-iphone-12-pro/",
  },
  {
    category: "company",
    datetime: 1602787080,
    headline:
      "‘Our return sucks over the past few years…and we’ve just run out of time,’ says $10 billion value investor calling it quits",
    id: 55176054,
    image: "https://images.mktw.net/im-245573/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Wall Street won't have Ted Aronson to kick around anymore. After a punishing stretch for the investment fund that he helped start nearly four decades ago,...",
    url:
      "https://www.marketwatch.com/story/our-return-sucks-over-the-past-few-yearsand-weve-just-run-out-of-time-says-10-billion-value-investor-calling-it-quits-11602787123",
  },
  {
    category: "company",
    datetime: 1602784672,
    headline:
      "El iPhone 12 se vende sin cargador ni auriculares: ¿ecologismo, postureo o negocio?",
    id: 55178898,
    image:
      "https://rt00.epimg.net/retina/imagenes/2020/10/15/innovacion/1602777889_789806_1602778042_rrss_normal.jpg",
    related: "AAPL",
    source: "https://elpais.com",
    summary:
      "La compañía da un paso hacia la política europea de reducción de desechos electrónicos, aunque mantiene su negativa respecto a la adopción de un cargador universal",
    url:
      "https://elpais.com/tecnologia/2020/10/16/actualidad/1602830180_142841.html",
  },
  {
    category: "company",
    datetime: 1602784672,
    headline:
      "El iPhone 12 se vende sin cargador ni auriculares: ¿ecologismo, postureo o negocio?",
    id: 55177209,
    image:
      "https://rt00.epimg.net/retina/imagenes/2020/10/15/innovacion/1602777889_789806_1602778042_rrss_normal.jpg",
    related: "AAPL",
    source: "https://elpais.com",
    summary:
      "La compañía da un paso hacia la política europea de reducción de desechos electrónicos, aunque mantiene su negativa respecto a la adopción de un cargador universal",
    url:
      "https://elpais.com/retina/2020/10/15/innovacion/1602777889_789806.html",
  },
  {
    category: "company",
    datetime: 1602784642,
    headline: "iPhone 12 Chooses When You Can Access 5G",
    id: 55177671,
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/386F2C78-518B-49E4-943D-97295EA62B25.jpeg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "iPhone 12 supports 5G, but won't always use it.",
    url:
      "https://screenrant.com/iphone-12-5g-connection-apple-smart-data-mode-explained/",
  },
  {
    category: "company",
    datetime: 1602783940,
    headline:
      "Someone at Amazon Is Probably Getting Fired for This Apple Watch Discount | Digital Trends",
    id: 55176571,
    image:
      "https://icdn4.digitaltrends.com/image/digitaltrends/best-smartwatches-apple-watch-series-3-cd-2-3-1200x630-c-ar1.91.jpg",
    related: "AAPL",
    source: "https://www.digitaltrends.com",
    summary:
      "The $199 Apple Watch Series 3 drops to just $169 for a limited time at Amazon, after Prime Day has come to an end.",
    url:
      "https://www.digitaltrends.com/dtdeals/apple-watch-series-3-deal-post-prime-day-2020/",
  },
  {
    category: "company",
    datetime: 1602783645,
    headline:
      "#EndSARS: Nigerian stocks end neutral amid protests | Nairametrics",
    id: 55176448,
    image:
      "https://i2.wp.com/nairametrics.com/wp-content/uploads/2020/06/banking-stocks.jpg?fit=900%2C553&ssl=1",
    related: "AAPL",
    source: "https://nairametrics.com",
    summary: "#EndSARS: Nigerian stocks end neutral amid protests Stock Market",
    url:
      "https://nairametrics.com/2020/10/15/endsars-nigerian-stocks-end-neutral-amid-protests/",
  },
  {
    category: "company",
    datetime: 1602778260,
    headline:
      "Apple’s HomePod Mini Wasn’t a Sonos Threat — and the Stock Just Got Upgraded",
    id: 55175619,
    image: "https://images.barrons.com/im-184604/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Sonos stock was up more than 5% after getting upgraded at Bank of America. The upgraded had little to do with Apple.",
    url:
      "https://www.marketwatch.com/articles/apple-homepod-mini-no-threat-to-sonos-sonos-stock-just-got-upgraded-51602778273",
  },
  {
    category: "company",
    datetime: 1602778260,
    headline:
      "Apple’s HomePod Mini Wasn’t a Sonos Threat — and the Stock Just Got Upgraded",
    id: 55175575,
    image: "https://images.barrons.com/im-184604/social",
    related: "AAPL",
    source: "barrons",
    summary:
      "Sonos stock was up more than 5% after getting upgraded at Bank of America. The upgraded had little to do with Apple.",
    url:
      "https://www.barrons.com/articles/apple-homepod-mini-no-threat-to-sonos-sonos-stock-just-got-upgraded-51602778273",
  },
  {
    category: "company",
    datetime: 1602777993,
    headline:
      "England see red, Scotland soar and Big Picture fades – Football Weekly Extra",
    id: 55175874,
    image:
      "https://i.guim.co.uk/img/media/13386c69d882048ea35e903ca2cefffe08587862/0_116_2920_1753/master/2920.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4a2f745d68eb244fc6c6c041ac70c36b",
    related: "AAPL",
    source: "theguardian",
    summary:
      "Max Rushden is joined by Barry Glendenning, Jacqui Oatley, Jonathan Wilson and Suzanne Wrack to discuss the Nations League, Project Big Picture and more",
    url:
      "https://www.theguardian.com/football/audio/2020/oct/15/football-weekly-extra-nations-league-england-scotland-wales-project-big-picture",
  },
  {
    category: "company",
    datetime: 1602777722,
    headline:
      "DeFi project Kava Incorporates Rigorous Security Measures Like Apple’s App Store",
    id: 55177512,
    image:
      "https://cdn.coingape.com/wp-content/uploads/2020/10/15212935/tw-Harvest-Bitcoin-angle.jpg",
    related: "AAPL",
    source: "https://coingape.com",
    summary:
      "Apple often receives criticism for its stringent App Store guidelines that the company puts into place to insulate its users with the best experience. Deve",
    url:
      "https://coingape.com/defi-project-kava-incorporates-rigorous-security-measures-like-apples-app-store/",
  },
  {
    category: "company",
    datetime: 1602777708,
    headline: "The 4 big Apple launches 2020 could bring after iPhone 12",
    id: 55177132,
    image:
      "https://cdn.slashgear.com/wp-content/uploads/2020/10/apple-iphone-12-oct-2020.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "Apple’s iPhone 12 launch is undoubtedly its biggest announcement of the year, but 2020 isn’t over yet and neither is what we expect from Cupertino. While the events may be virtual these…",
    url:
      "https://www.slashgear.com/the-4-big-apple-launches-2020-could-bring-after-iphone-12-15642770/",
  },
  {
    category: "company",
    datetime: 1602776897,
    headline:
      "Buy iPhone 12 in France and You'll Have Free EarPods and Lightning Connector Inside Box",
    id: 55176348,
    image:
      "https://1734811051.rsc.cdn77.org/data/images/full/373716/iphone-12-comes-with-earpods-and-lightning-connector-in-france-thanks-to-90-000-fine.jpg",
    related: "AAPL",
    source: "https://www.techtimes.com",
    summary: "Who's ready to fly now?",
    url:
      "https://www.techtimes.com/articles/253374/20201015/iphone-12-comes-earpods-lightning-connector-france-thanks-90-000.htm",
  },
  {
    category: "company",
    datetime: 1602776601,
    headline: "There's A Dark Cloud On Dropbox's Horizon (NASDAQ:DBX)",
    id: 55175664,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "Despite years of rapid revenue growth and reaching profitability, the future for this cloud-based storage provider is murky at best.",
    url:
      "https://seekingalpha.com/article/4379233-dark-cloud-on-dropboxs-horizon",
  },
  {
    category: "company",
    datetime: 1602775704,
    headline:
      "Por qué el mercado chino es clave para Apple y es la principal razón por la que los nuevos iPhone 12 abrazan el 5G, según los analistas",
    id: 55175901,
    image:
      "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/grupo-personas-equipadas-mascaras-protectoras-esperan-pasar-test-temperatura-antes-entrar-apple-store-shanghai-1875241.jpg?itok=v_oMO_-7",
    related: "AAPL",
    source: "https://www.businessinsider.es",
    summary:
      "El mercado chino supone el 15% de las ventas de Apple a nivel global y es el país con más conexiones 5G: las razones por las que es clave para el iPhone 12.",
    url: "https://www.businessinsider.es/china-5g-clave-iphone-12-apple-737069",
  },
  {
    category: "company",
    datetime: 1602775693,
    headline:
      "Here are the top 10 Prime Day deals from day two according to our readers",
    id: 55175697,
    image:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/09/prime-day-2020-dates.jpg",
    related: "AAPL",
    source: "https://www.androidcentral.com",
    summary:
      "There are so many deals going on during Prime Day but, ultimately, you decide which ones are worth buying. These are the most popular Prime Day deals according to our readers.",
    url:
      "https://www.androidcentral.com/here-are-top-10-prime-day-deals-day-two-according-our-readers",
  },
  {
    category: "company",
    datetime: 1602774600,
    headline:
      "Apple's iPhone 12 Mini is the small phone everyone has been waiting for after years of giant screens",
    id: 55177292,
    image:
      "https://www.businessinsider.in/photo/78685983/apples-iphone-12-mini-is-the-small-phone-everyone-has-been-waiting-for-after-years-of-giant-screens.jpg?imgsize=88619",
    related: "AAPL",
    source: "https://www.businessinsider.in",
    summary: "",
    url:
      "https://www.businessinsider.in/tech/news/apples-iphone-12-mini-is-the-small-phone-everyone-has-been-waiting-for-after-years-of-giant-screens/articleshow/78685983.cms",
  },
  {
    category: "company",
    datetime: 1602774000,
    headline: "Cell Tower REITs: 5G Is Here",
    id: 55175562,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "The high-flying cell tower sector has thrived throughout the pandemic. Cellular network capacity has been pushed to the limits as businesses, schools, and individuals stay connected via virtual interaction.",
    url: "https://seekingalpha.com/article/4379190-cell-tower-reits-5g-is",
  },
  {
    category: "company",
    datetime: 1602773643,
    headline:
      'Un problème de "flamand" (même pas de néerlandais) : voici pourquoi le HomePod Mini d\'Apple ne sera pas vendu en Belgique',
    id: 55175058,
    image:
      "https://t2.ldh.be/zjJqfCzHwSwCPabakUj9krhBZfA=/0x73:1200x673/940x470/5f8845f3d8ad5827053caab7.jpg",
    related: "AAPL",
    source: "https://www.dhnet.be",
    summary:
      "Défaut d'approvisionnement ? Rupture de stock ? Apple qui se fiche du marché belge ? Rien de tout cela. La raison de l'absence du produit sur notre territoire, ainsi que d'autres du même genre (Amazon Echo ou Fire TV Stick), tient à l'usage du flamand, et de ses patois et...",
    url:
      "https://www.dhnet.be/actu/new-tech/voici-pourquoi-le-homepod-mini-d-apple-ne-sera-pas-vendu-en-belgique-5f884655d8ad5827053cb12a",
  },
  {
    category: "company",
    datetime: 1602773582,
    headline:
      "Voici pourquoi le HomePod Mini d'Apple ne sera pas vendu en Belgique",
    id: 55175083,
    image:
      "https://t2.llb.be/zjJqfCzHwSwCPabakUj9krhBZfA=/0x73:1200x673/940x470/5f8845f3d8ad5827053caab7.jpg",
    related: "AAPL",
    source: "https://www.lalibre.be",
    summary:
      "Défaut d'approvisionnement ? Rupture de stock ? Apple qui se fiche du marché belge ? Rien de tout cela. La raison de l'absence du produit sur notre territoire, ainsi que d'autres du même genre (Amazon Echo ou Fire TV Stick), tient à l'usage du flamand, et de ses patois et...",
    url:
      "https://www.lalibre.be/economie/digital/voici-pourquoi-le-homepod-mini-d-apple-ne-sera-pas-vendu-en-belgique-5f8844fb7b50a66bd8ae9068",
  },
  {
    category: "company",
    datetime: 1602771960,
    headline:
      "Options Activity Indicates Big Investors Have Become More Cautious",
    id: 55175433,
    image: "https://images.barrons.com/im-245358/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Heavy volume in Apple calls has increased trading in single-stock options.",
    url:
      "https://www.marketwatch.com/articles/options-activity-indicates-big-investors-have-become-more-cautious-51602771983",
  },
  {
    category: "company",
    datetime: 1602771960,
    headline:
      "Options Activity Indicates Big Investors Have Become More Cautious",
    id: 55175282,
    image: "https://images.barrons.com/im-245358/social",
    related: "AAPL",
    source: "barrons",
    summary:
      "Heavy volume in Apple calls has increased trading in single-stock options.",
    url:
      "https://www.barrons.com/articles/options-activity-indicates-big-investors-have-become-more-cautious-51602771983",
  },
  {
    category: "company",
    datetime: 1602770269,
    headline:
      "MagSafe Accessories Are Here to Make You Buy More iPhones | Digital Trends",
    id: 55176550,
    image:
      "https://icdn4.digitaltrends.com/image/digitaltrends/magsafe-wireless-charger-table-1200x630-c-ar1.91.jpg",
    related: "AAPL",
    source: "https://www.digitaltrends.com",
    summary:
      "Apple's varied accessory ecosystem has a new member: MagSafe for iPhone, and a lot of companies are busy making products with the technology already.",
    url:
      "https://www.digitaltrends.com/mobile/magsafe-accessories-will-make-you-buy-iphones-for-years/",
  },
  {
    category: "company",
    datetime: 1602769606,
    headline: "One country still gets free Apple EarPods with their iPhone 12",
    id: 55177202,
    image:
      "https://cdn.slashgear.com/wp-content/uploads/2020/10/iphone-12-box.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "Apple’s decision to leave EarPods out of the new iPhone 12 box may be causing controversy, but at least one country won’t have to do without the free earbuds. The decision – which…",
    url:
      "https://www.slashgear.com/one-country-still-gets-free-apple-earpods-with-their-iphone-12-15642747/",
  },
  {
    category: "company",
    datetime: 1602766824,
    headline:
      "From mute to menacing: why TV's portrayal of Muslims still falls short",
    id: 55175478,
    image:
      "https://i.guim.co.uk/img/media/7d2e4d8bfd82ac93ffd20da92cdac09dc05f1a11/286_108_785_471/master/785.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c3612b93f8f21243fdc0d8b554a0b22d",
    related: "AAPL",
    source: "theguardian",
    summary:
      "Though representation has increased, Islam on TV is still largely centred around terrorists and oppressed women. What we need is more complexity – and fewer dangerous cliches",
    url:
      "https://www.theguardian.com/tv-and-radio/2020/oct/15/why-tvs-portrayal-of-muslims-still-falls-short-ramy-bodyguard",
  },
  {
    category: "company",
    datetime: 1602766800,
    headline:
      "Apple's New iPhone 12 Lineup Could Be Less Profitable | The Motley Fool",
    id: 55175801,
    image:
      "https://g.foolcdn.com/editorial/images/595162/apple_announce-iphone12pro_10132020.jpg",
    related: "AAPL",
    source: "https://www.fool.com",
    summary:
      "Here are three reasons why the new smartphones might have lower gross margins.",
    url:
      "https://www.fool.com/investing/2020/10/15/apples-new-iphone-12-lineup-could-be-less-profitab/",
  },
  {
    category: "company",
    datetime: 1602766743,
    headline:
      "Best Buy's Canadian website suggests iPad Air 4 goes on sale October 23",
    id: 55176938,
    image:
      "https://cdn.cultofmac.com/wp-content/uploads/2020/10/iPad-Air-4-Touch-ID.jpg",
    related: "AAPL",
    source: "https://www.cultofmac.com",
    summary:
      "Eagle-eyed Apple watchers may have discovered the release date for Apple's upcoming iPad Air 4. Expect it to arrive on October 23.",
    url:
      "https://www.cultofmac.com/725549/best-buys-canadian-website-suggests-ipad-air-4-goes-on-sale-october-23/",
  },
  {
    category: "company",
    datetime: 1602765673,
    headline: "The Economic Tea Leaves Look Favorable",
    id: 55175094,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "To my mind, the technological advances and capabilities of Apple's new models are breath-taking. On balance, stock prices have been edging higher over the past several years, but the Vix fear index is still elevated.",
    url:
      "https://seekingalpha.com/article/4379199-economic-tea-leaves-look-favorable",
  },
  {
    category: "company",
    datetime: 1602764905,
    headline: "Sony launches Apple TV App on select smart TVs",
    id: 55176648,
    image:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/apple-tv-plus-1602764833.jpg",
    related: "AAPL",
    source: "https://www.indiatvnews.com",
    summary:
      "Sony Electronics has announced that the Apple TV app is coming to its internet-connected TVs.",
    url:
      "https://www.indiatvnews.com/technology/news-sony-launches-apple-tv-app-on-select-smart-tvs-657176",
  },
  {
    category: "company",
    datetime: 1602764160,
    headline:
      "iPhone 12 pre-orders: the one thing you need to do TODAY to ensure you don’t miss out",
    id: 55176708,
    image:
      "https://cdn.images.express.co.uk/img/dynamic/59/750x445/1348144.jpg",
    related: "AAPL",
    source: "https://www.express.co.uk",
    summary:
      "APPLE fans hoping to get their hands on the latest iPhone models - iPhone 12 and iPhone 12 Pro - when pre-orders go live tomorrow should follow a few simple steps today to ensure they're at the front of the (virtual) queue when the first batch of Apple smartphones become available to buy.",
    url:
      "https://www.express.co.uk/life-style/science-technology/1348144/iPhone-12-iPhone-12-Pro-Pre-Order-Release-Date-UK-One-Thing-To-Do",
  },
  {
    category: "company",
    datetime: 1602764123,
    headline: "IBM: Like Microsoft In 2010, Plus A 5.2% Yield (NYSE:IBM)",
    id: 55175041,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "Like Microsoft from a decade ago, IBM is seen and valued as a legacy technology company. I see IBM as being on the cusp of a technology transformation, and believe the hybrid cloud represents a substantial opportunity.",
    url:
      "https://seekingalpha.com/article/4379197-ibm-like-microsoft-in-2010-plus-5_2-yield",
  },
  {
    category: "company",
    datetime: 1602763137,
    headline:
      "UK government to examine impact of streaming on future of music industry",
    id: 55175027,
    image:
      "https://i.guim.co.uk/img/media/bd5eda63d4dfb3f45d7ff280b6aef492959e9801/0_125_3337_2002/master/3337.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3af764f2b8af910137ca09b6dec31be8",
    related: "AAPL",
    source: "theguardian",
    summary:
      "DCMS committee chair Julian Knight said it would investigate whether the business models used by major streaming platforms are fair to writers and performers",
    url:
      "https://www.theguardian.com/music/2020/oct/15/uk-government-to-examine-impact-of-streaming-on-future-of-music-industry",
  },
  {
    category: "company",
    datetime: 1602761468,
    headline:
      "The accessories Apple removed from the iPhone 12 box are now cheaper than ever",
    id: 55174769,
    image:
      "https://bgr.com/wp-content/uploads/2020/10/apple-iphone-12-event-116.jpg?quality=70&strip=all",
    related: "AAPL",
    source: "https://bgr.com",
    summary:
      "Apple no longer bundles free chargers and EarPods with iPhones, whether it’s the new iPhone 12 series or the older iPhone versions that are still available in Apple stores. Apple cut the accessorie…",
    url:
      "https://bgr.com/2020/10/15/iphone-12-accessories-price-cuts-apple-20w-charger-earpods/",
  },
  {
    category: "company",
    datetime: 1602761045,
    headline:
      "Sony publica la 'app' de Apple TV en algunos de sus televisores, ¿cuáles?",
    id: 55176798,
    image:
      "https://d500.epimg.net/cincodias/imagenes/2020/10/15/smarttv/1602741973_675842_1602742018_rrss_normal.jpg",
    related: "AAPL",
    source: "https://cincodias.elpais.com",
    summary: "Llegarán a lo largo de las próximas semanas.",
    url:
      "https://cincodias.elpais.com/cincodias/2020/10/15/smarttv/1602741973_675842.html",
  },
  {
    category: "company",
    datetime: 1602760500,
    headline:
      "Netflix has halted free trials and raised prices in Canada; is a U.S. price hike next?",
    id: 55174859,
    image: "https://images.mktw.net/im-242863/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "“The Canadian price increase supports our view that broader price hikes are probable in the near-term,” Jefferies analyst Alex Giaimo said in an Oct. 8 note.",
    url:
      "https://www.marketwatch.com/story/netflix-has-halted-free-trials-and-raised-prices-in-canada-is-a-u-s-price-hike-next-11602760550",
  },
  {
    category: "company",
    datetime: 1602760320,
    headline: "Sony brings Apple TV app to its smart TVs",
    id: 55175167,
    image:
      "https://www.businessinsider.in/photo/78680570/sony-brings-apple-tv-app-to-its-smart-tvs.jpg?imgsize=159866",
    related: "AAPL",
    source: "https://www.businessinsider.in",
    summary: "",
    url:
      "https://www.businessinsider.in/tech/apps/news/sony-brings-apple-tv-app-to-its-smart-tvs/articleshow/78680570.cms",
  },
  {
    category: "company",
    datetime: 1602760260,
    headline:
      "The 5G iPhone is reigniting the subsidy wars, which is good for Apple and consumers but not mobile carriers",
    id: 55174897,
    image: "https://images.mktw.net/im-245089/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Apple and consumers are set to win as the wireless industry offers its most aggressive launch-day smartphone subsidies in at least five years, but the steep...",
    url:
      "https://www.marketwatch.com/story/the-5g-iphone-is-reigniting-the-subsidy-wars-which-is-good-for-apple-and-consumers-but-not-mobile-carriers-11602760302",
  },
  {
    category: "company",
    datetime: 1602759726,
    headline:
      "Las 8 características más importantes de los nuevos iPhone 12 de Apple: del 5G al nuevo diseño",
    id: 55175898,
    image:
      "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/tim-cook-ceo-apple-2101209.jpg?itok=kESA1v3F",
    related: "AAPL",
    source: "https://www.businessinsider.es",
    summary:
      "5G, sensor LiDAR en la cámara, nuevos accesorios MagSafe... estas son todas las características más importantes que Apple ha integrado en los nuevos iPhone 12.",
    url:
      "https://www.businessinsider.es/caracteristicas-importantes-iphone-12-apple-736965",
  },
  {
    category: "company",
    datetime: 1602759600,
    headline:
      "The Apple TV App Continues to Expand Outside of Apple Hardware | The Motley Fool",
    id: 55175832,
    image:
      "https://g.foolcdn.com/editorial/images/595180/apple_tv_app_shows-screen_032519.jpg",
    related: "AAPL",
    source: "https://www.fool.com",
    summary:
      "Another third-party smart TV manufacturer is adding the TV streaming platform.",
    url:
      "https://www.fool.com/investing/2020/10/15/the-apple-tv-app-continues-to-expand-outside-of-ap/",
  },
  {
    category: "company",
    datetime: 1602759009,
    headline:
      "5 reasons why you should buy the iPhone 12 instead of the iPhone 11",
    id: 55174771,
    image:
      "https://bgr.com/wp-content/uploads/2020/10/iphone-11-vs-iphone-12-1.jpg?quality=70&strip=all",
    related: "AAPL",
    source: "https://bgr.com",
    summary:
      "The iPhone 12 is expected to be the best-sold phone from the iPhone 12 series, following its predecessor’s footsteps, the iPhone 11. Apple will continue to sell the iPhone 11, with prices sta…",
    url:
      "https://bgr.com/2020/10/15/iphone-12-vs-iphone-11-specs-features-upgrades-prices/",
  },
  {
    category: "company",
    datetime: 1602758027,
    headline:
      "Apple demands that Telegram removes posts involving protests in Belarus",
    id: 55176959,
    image:
      "https://cdn.cultofmac.com/wp-content/uploads/2018/02/Telegram-flames.jpg",
    related: "AAPL",
    source: "https://www.cultofmac.com",
    summary:
      "Apple is facing a mini-scandal involving Telegram and posts made by pro-democracy protestors in Belarus, which Apple asked to be removed.",
    url: "https://www.cultofmac.com/725542/apple-telegram-belarus/",
  },
  {
    category: "company",
    datetime: 1602757611,
    headline: "25 Prime Day deals that are still available today",
    id: 55175693,
    image:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/04/amazon-prime-day-packages.jpg",
    related: "AAPL",
    source: "https://www.androidcentral.com",
    summary:
      "Amazon's huge Prime Day bonanza is officially over but some of the deals are sticking around a little longer. Here are the best Prime Day deals still available.",
    url: "https://www.androidcentral.com/prime-day-deals-are-still-available",
  },
  {
    category: "company",
    datetime: 1602757153,
    headline:
      "Apple’s HomePod will soon support Dolby Atmos with the Apple TV 4K",
    id: 55175495,
    image:
      "https://cdn.vox-cdn.com/thumbor/BWkOZ5nAZfEl6U99xBuWx1c01JE=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10159615/jbareham_180202_2266_0057.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary: "But HomePod mini buyers will be out of luck.",
    url: "https://www.theverge.com/2020/10/15/21517321/art-club",
  },
  {
    category: "company",
    datetime: 1602757153,
    headline:
      "Apple’s HomePod will soon support Dolby Atmos with the Apple TV 4K",
    id: 55174997,
    image:
      "https://cdn.vox-cdn.com/thumbor/BWkOZ5nAZfEl6U99xBuWx1c01JE=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10159615/jbareham_180202_2266_0057.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary: "But HomePod mini buyers will be out of luck.",
    url:
      "https://www.theverge.com/2020/10/15/21517321/apple-homepod-dolby-atmos-tv-4k-virtual-surround-sound-5-1-7-1",
  },
  {
    category: "company",
    datetime: 1602757080,
    headline:
      "Amazon Great Indian Festival sale: Apple iPhone 11 to sell for Rs 47,999",
    id: 55175314,
    image:
      "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/iphone_11_505_151020034826.jpg",
    related: "AAPL",
    source: "https://m.businesstoday.in",
    summary:
      "The iPhone 11 will be available for Rs 47,999, which is Rs 7,000 less than its revised price on the Apple Store. The discount is for the 64GB model",
    url:
      "https://m.businesstoday.in/story/amazon-great-indian-festival-sale-apple-iphone-11-to-sell-for-rs-47999/1/419014.html",
  },
  {
    category: "company",
    datetime: 1602752707,
    headline: "Sony launches Apple TV app on smart TVs",
    id: 55175658,
    image:
      "https://i0.wp.com/www.broadbandtvnews.com/wp-content/uploads/2019/03/Apple-TV-.jpg?fit=799%2C450&ssl=1",
    related: "AAPL",
    source: "https://www.broadbandtvnews.com",
    summary:
      "Sony customers can now access the Apple TV app on select Sony smart TVs to watch Apple+, Apple TV channels, new and popular movies and personalised and curated recommendations.",
    url:
      "https://www.broadbandtvnews.com/2020/10/15/sony-launches-apple-tv-app-on-smart-tvs/",
  },
  {
    category: "company",
    datetime: 1602750660,
    headline:
      "A look at iPhone 12: The good, the bad and what Apple failed to mention",
    id: 55175466,
    image:
      "https://image-prod.iol.co.za/resize/5000x366?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/8991b443-8506-5287-a0c5-6da10e7a2c9d&operation=CROP&offset=0x263&resize=5000x2813&webp=false",
    related: "AAPL",
    source: "https://www.iol.co.za",
    summary:
      "Sometimes, it's what Apple doesn't say about a new iPhone that's most revealing.",
    url:
      "https://www.iol.co.za/technology/mobile/a-look-at-iphone-12-the-good-the-bad-and-what-apple-failed-to-mention-2b1d0c34-103e-4132-ad1a-6455a0938a80",
  },
  {
    category: "company",
    datetime: 1602747965,
    headline:
      "Best deals on Apple iPhone 11 series, iPhone XR, iPhone SE (2020)",
    id: 55174400,
    image:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/iphone-11-1602747863.jpg",
    related: "AAPL",
    source: "https://www.indiatvnews.com",
    summary:
      "Flipkart and Amazon are offering jaw-dropping deals on the iPhone XR, iPhone SE (2020), iPhone 11 as well as the iPhone 11 Pro series.",
    url:
      "https://www.indiatvnews.com/technology/news-apple-iphone-11-series-iphone-xr-iphone-se-2020-deals-and-offers-on-flipkart-amazon-657081",
  },
  {
    category: "company",
    datetime: 1602746753,
    headline:
      "Apple iPhone 11 Price Cut: పాపులర్ స్మార్ట్‌ఫోన్ ఐఫోన్ 11 ధరలు భారీగా తగ్గింపు",
    id: 55175564,
    image:
      "https://telugu.cdn.zeenews.com/telugu/sites/default/files/2020/10/15/195012-apple-iphone-11-revised-price.jpg",
    related: "AAPL",
    source: "https://zeenews.india.com",
    summary:
      "Apple iPhone 11 Revised Price: ఐఫోన్ 12 ఆవిష్కరించిన యాపిల్ సంస్థ ప్రపంచంలో అత్యంత పాపులర్ స్మార్ట్‌ఫోన్ మోడల్ ఐఫోన్ 11 ఫోన్లపై భారీగా ధరలు తగ్గించింది. ఐఫోన్ 11 మోడల్ ధరలు తగ్గడంతో ఐఫోన్ 12 కొనుగోలు కన్నా పాత మోడల్ విక్రయాలు పెరిగేలా కనిపిస్తుంది.",
    url:
      "https://zeenews.india.com/telugu/business/apple-iphone-11-got-cheaper-by-minimum-rs-13400-30016%20",
  },
  {
    category: "company",
    datetime: 1602746753,
    headline:
      "Apple iPhone 11 Price Cut: పాపులర్ స్మార్ట్‌ఫోన్ ఐఫోన్ 11 ధరలు భారీగా తగ్గింపు",
    id: 55175555,
    image:
      "https://telugu.cdn.zeenews.com/telugu/sites/default/files/2020/10/15/195012-apple-iphone-11-revised-price.jpg",
    related: "AAPL",
    source: "https://zeenews.india.com",
    summary:
      "Apple iPhone 11 Revised Price: ఐఫోన్ 12 ఆవిష్కరించిన యాపిల్ సంస్థ ప్రపంచంలో అత్యంత పాపులర్ స్మార్ట్‌ఫోన్ మోడల్ ఐఫోన్ 11 ఫోన్లపై భారీగా ధరలు తగ్గించింది. ఐఫోన్ 11 మోడల్ ధరలు తగ్గడంతో ఐఫోన్ 12 కొనుగోలు కన్నా పాత మోడల్ విక్రయాలు పెరిగేలా కనిపిస్తుంది.",
    url:
      "https://zeenews.india.com/telugu/business/apple-iphone-11-got-cheaper-by-minimum-rs-13400-30016",
  },
  {
    category: "company",
    datetime: 1602746082,
    headline:
      "Apple (NASDAQ:AAPL) Given New $140.00 Price Target at Jefferies Financial Group",
    id: 55176784,
    image: "https://www.marketbeat.com/logos/apple-inc-logo.png",
    related: "AAPL",
    source: "https://www.thelincolnianonline.com",
    summary:
      "Apple (NASDAQ:AAPL) had its price objective boosted by Jefferies Financial Group from $135.00 to $140.00 in a report issued on Wednesday, The Fly reports. Jefferies Financial Group currently has a buy rating on the iPhone maker’s stock. A number of other equities research analysts also recently weighed in on the stock. Morgan Stanley raised their […]",
    url:
      "https://www.thelincolnianonline.com/2020/10/15/apple-nasdaqaapl-given-new-140-00-price-target-at-jefferies-financial-group.html",
  },
  {
    category: "company",
    datetime: 1602742126,
    headline:
      "Apple (NASDAQ:AAPL) Upgraded to “Positive” at Wells Fargo & Company",
    id: 55176951,
    image: "https://www.marketbeat.com/logos/apple-inc-logo.png",
    related: "AAPL",
    source: "https://www.thelincolnianonline.com",
    summary:
      "Wells Fargo & Company upgraded shares of Apple (NASDAQ:AAPL) to a positive rating in a report issued on Wednesday, The Fly reports. AAPL has been the subject of several other research reports. Loop Capital raised their target price on Apple from $82.50 to $94.00 and gave the stock a hold rating in a research note […]",
    url:
      "https://www.thelincolnianonline.com/2020/10/15/apple-nasdaqaapl-upgraded-to-positive-at-wells-fargo-company.html",
  },
  {
    category: "company",
    datetime: 1602741343,
    headline:
      "iPhone 12: Apple just fixed the biggest issue with every phone you've ever owned",
    id: 55174461,
    image:
      "https://cdn.images.express.co.uk/img/dynamic/59/750x445/1347968.jpg",
    related: "AAPL",
    source: "https://www.express.co.uk",
    summary:
      "THE iPhone 12 line-up was revealed this week and alongside a swathe of new features, there's one very important reason you might want to own one.",
    url:
      "https://www.express.co.uk/life-style/science-technology/1347968/Apple-iPhone-12-release-update-price",
  },
  {
    category: "company",
    datetime: 1602739980,
    headline:
      "OnePlus 8T vs Apple iPhone 12: Design, price, specifications comparison",
    id: 55175338,
    image:
      "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/collag_505_151020110305.jpg",
    related: "AAPL",
    source: "https://m.businesstoday.in",
    summary:
      "Apple offers a 6.1-inch iPhone 12 with an aspect ratio of 19:5:9 and resolution 1170 X 2532 (457 PPI). Whereas, OnePlus 8T is bigger with a 6.55-inch display with a 1080 X 2400-pixel resolution.",
    url:
      "https://m.businesstoday.in/story/oneplus-8t-vs-apple-iphone-12-design-price-specifications-comparison/1/418964.html",
  },
  {
    category: "company",
    datetime: 1602738029,
    headline:
      "iPhone 12 Pro Max vs Samsung Galaxy S20 Ultra: the ultimate smartphone showdown",
    id: 55174808,
    image:
      "https://cdn.mos.cms.futurecdn.net/MkMJ8du9mvPjjiSU6JJAWR-1200-80.jpg",
    related: "AAPL",
    source: "https://www.techradar.com",
    summary: "It’s a battle of the phablet heavyweights.",
    url:
      "https://www.techradar.com/news/iphone-12-pro-max-vs-samsung-galaxy-s20-ultra-the-ultimate-smartphone-showdown",
  },
  {
    category: "company",
    datetime: 1602738014,
    headline: "Apple: More Than Just Phones (NASDAQ:AAPL)",
    id: 55175312,
    image:
      "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
    related: "AAPL",
    source: "seekingalpha",
    summary:
      "5G-compatible phones open up many opportunities. HomePod mini will help smart speaker market share.",
    url: "https://seekingalpha.com/article/4379147-apple-just-phones",
  },
  {
    category: "company",
    datetime: 1602735217,
    headline:
      "Apple Rumors: 'Beats-Killer' AirPods Studio Faces 'Major Hiccup' in Production!",
    id: 55174223,
    image:
      "https://1734811051.rsc.cdn77.org/data/images/full/373673/airpods-studio.jpeg",
    related: "AAPL",
    source: "https://www.techtimes.com",
    summary:
      "December will be the earliest release for Apple's Headphones. Key features cut?",
    url:
      "https://www.techtimes.com/articles/253354/20201015/apple-rumors-airpods-studio-faces-major-hiccup-key-features-removed.htm",
  },
  {
    category: "company",
    datetime: 1602735156,
    headline:
      "Apple stops selling iPhone 11 Pro, iPhone 11 Pro Max after iPhone 12 launch",
    id: 55173937,
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Screenshot_2020-10-15_at_9.38.-647x363.png?FiX_sAq3SJ6kJDjkxyhdMIiJMcf1HzYQ",
    related: "AAPL",
    source: "https://www.indiatoday.in",
    summary:
      "Apple has discontinued the iPhone 11 Pro and iPhone 11 Pro Max and reduced the prices of its older iPhones including iPhone XR, iPhone SE and iPhone 11.",
    url:
      "https://www.indiatoday.in/technology/news/story/apple-stops-selling-iphone-11-pro-iphone-11-pro-max-after-iphone-12-launch-1731707-2020-10-15",
  },
  {
    category: "company",
    datetime: 1602734580,
    headline:
      "Venmo’s new credit card has personalized rewards — it could affect perks across the industry",
    id: 55174017,
    image: "https://images.mktw.net/im-240511/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Credit card issuers are looking to appeal to Gen Z at a time when travel-heavy rewards programs have lost their luster.",
    url:
      "https://www.marketwatch.com/story/venmos-new-credit-card-has-personalized-rewards-it-could-affect-perks-across-the-industry-11602716060",
  },
  {
    category: "company",
    datetime: 1602734186,
    headline: "Sony brings Apple TV app to Android TV on select smart TVs",
    id: 55174991,
    image:
      "https://cdn.slashgear.com/wp-content/uploads/2020/10/sony-smart-tv-apple-tv.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "How much TV can you handle? If you ask Sony, the answer might be “as many as it can cram into a single device.” Of the major Android phone makers, Sony is perhaps the only one outside o…",
    url:
      "https://www.slashgear.com/sony-brings-apple-tv-app-to-android-tv-on-select-smart-tvs-14642686/",
  },
  {
    category: "company",
    datetime: 1602727891,
    headline: "Apple shares drop nearly 4%, erases $80 bn in market cap",
    id: 55174803,
    image:
      "https://images.livemint.com/img/2020/10/15/600x338/372d8759d2274ae3beaf86d4455fcf07-372d8759d2274ae3beaf86d4455fcf07-1_1602727828722_1602727862103.jpg",
    related: "AAPL",
    source: "https://www.livemint.com",
    summary:
      "Experts said the drop is most likely temporary and is not surprising after a new iPhone is launched",
    url:
      "https://www.livemint.com/market/stock-market-news/apple-shares-drop-nearly-4-erases-80-bn-in-market-cap-11602727404412.html",
  },
  {
    category: "company",
    datetime: 1602727228,
    headline: "iPhone 12 unlikely to drive sales during festive season",
    id: 55174701,
    image:
      "https://images.livemint.com/img/2020/10/15/600x338/c427c134-0e23-11eb-b6f6-6ba3a0b37bef_1602726964933_1602727066923.jpg",
    related: "AAPL",
    source: "https://www.livemint.com",
    summary:
      "Older models are already doing well for the company and are in stock with sellers",
    url:
      "https://www.livemint.com/technology/gadgets/iphone-12-unlikely-to-drive-sales-during-festive-season-11602726965899.html",
  },
  {
    category: "company",
    datetime: 1602723012,
    headline: "iPhone 12 vs. iPhone XR: Time for an Upgrade? | Digital Trends",
    id: 55174458,
    image:
      "https://icdn4.digitaltrends.com/image/digitaltrends/iphone12_composite_201012b-1200x630-c-ar1.91.jpg",
    related: "AAPL",
    source: "https://www.digitaltrends.com",
    summary:
      "If you're currently deciding between the new iPhone 12 and the 2018 iPhone XR, then we're here to help. We're taking a look at both phones side by side.",
    url: "https://www.digitaltrends.com/mobile/iphone-12-vs-iphone-xr/",
  },
  {
    category: "company",
    datetime: 1602722150,
    headline:
      "Forget 5G: MagSafe could be the biggest reason to buy an iPhone 12",
    id: 55173936,
    image:
      "https://cdn.vox-cdn.com/thumbor/kyQR6rT_GWDWRGubHh5-bgjV9x8=/0x83:1152x686/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21958807/magsafe_main_3_2.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary:
      "Personalization could be so much easier — oh, and it charges things too.",
    url: "https://www.theverge.com/circuitbreaker/2020/10/14/21515490/art-club",
  },
  {
    category: "company",
    datetime: 1602722150,
    headline:
      "Forget 5G: MagSafe could be the biggest reason to buy an iPhone 12",
    id: 55173625,
    image:
      "https://cdn.vox-cdn.com/thumbor/kyQR6rT_GWDWRGubHh5-bgjV9x8=/0x83:1152x686/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21958807/magsafe_main_3_2.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary:
      "Personalization could be so much easier — oh, and it charges things too.",
    url:
      "https://www.theverge.com/circuitbreaker/2020/10/14/21515490/apple-iphone-12-magsafe-accessories-ecosystem",
  },
  {
    category: "company",
    datetime: 1602720273,
    headline: "iPhone 12 & iPhone 12 mini Color & Storage Options",
    id: 55173699,
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/Iphone-12-and-mini.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "Once an iPhone is chosen, it's time to pick a color.",
    url:
      "https://screenrant.com/iphone-12-mini-colors-storage-prices-explained/",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "‘More Than A Billion’ Phones Wide Open To ‘Backdoor’ Remote Code Execution In Adtech Company’s Code",
    id: 55178257,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f889fb3b4a469b3fc767b10%2F0x0.jpg",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      '"The backdoor makes it possible for Mintegral to invoke any function and execute arbitrary code ..."',
    url:
      "https://www.forbes.com/sites/johnkoetsier/2020/10/15/more-than-a-billion-phones-wide-open-to-backdoor-remote-code-execution-in-adtech-companys-code/",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline: "Apple Confirms New iPhones Have Serious Problems",
    id: 55178252,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f88d723cc1266cfe615c9d3%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1015%26cropY1%3D5%26cropY2%3D577",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      "Apple's new and old iPhone models have serious price and performance problems...",
    url:
      "https://www.forbes.com/sites/gordonkelly/2020/10/15/apple-iphone-12-pro-max-price-release-date-5g-performance-iphone-11-pro-max-upgrade/",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Apple Entering New Super Growth Cycle, Making The Stock More Attractive",
    id: 55176559,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "https://www.investing.com",
    summary:
      "Stocks Analysis by Investing.com (Haris Anwar/Investing.com) covering: Apple Inc, Verizon Communications Inc. Read Investing.com (Haris Anwar/Investing.com)'s latest article on Investing.com",
    url:
      "https://www.investing.com/analysis/apple-entering-new-super-growth-cycle-making-the-stock-more-attractive-200541066",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Mobile Map Market Highlights the Impact of COVID-19 (2020-2024) | Adoption Of Technologically Advanced Mobiles to boost the Market Growth | Technavio",
    id: 55176506,
    image:
      "https://mms.businesswire.com/media/20201015005659/en/830618/23/IRTNTR41376.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global Mobile Map Market will grow by USD 5.24 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201015005659/en/Mobile-Map-Market-Highlights-the-Impact-of-COVID-19-2020-2024-Adoption-Of-Technologically-Advanced-Mobiles-to-boost-the-Market-Growth-Technavio",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Apple entra in un nuovo ciclo di super crescita e il titolo è più allettante",
    id: 55176405,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "https://it.investing.com",
    summary:
      "Analisi mercati azionari di Investing.com (Haris Anwar/Investing.com) riguardo: Apple Inc, Verizon Communications Inc. Leggi le analisi titoli azionari di Investing.com (Haris Anwar/Investing.com) su Investing.com.",
    url:
      "https://it.investing.com/analysis/apple-entering-new-super-growth-cycle-making-the-stock-more-attractive-200440729",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline: "Apple presentó su iPhone 12: ¿Y ahora qué?",
    id: 55176346,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "https://es.investing.com",
    summary:
      "Análisis de Acciones por Daniel Santacreu cubriendo: Apple Inc. Lea los Análisis de Acciones de Daniel Santacreu en Investing.com.",
    url:
      "https://es.investing.com/analysis/apple-presento-su-iphone-12-perspectivas-200439140",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Apple To Telegram: Delete Posts Exposing The Belarus Dictatorship’s Enforcers",
    id: 55176334,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f88885f1e1088097e9e22d2%2F0x0.jpg",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      "Apple’s ceaseless campaign to make the App Store a clean, well-lit place may now extend to policing what people post in iOS social apps.",
    url:
      "https://www.forbes.com/sites/robpegoraro/2020/10/15/apple-to-telegram-delete-posts-exposing-the-belarus-dictatorships-enforcers/",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "El nuevo ciclo de 'supercrecimiento' de Apple impulsa el atractivo de las acciones",
    id: 55176284,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "https://es.investing.com",
    summary:
      "Análisis de Acciones por Investing.com (Haris Anwar/Investing.com) cubriendo: Apple Inc, Verizon Communications Inc, FactSet Research Systems Inc. Lea los Análisis de Acciones de Investing.com (Haris Anwar/Investing.com) en Investing.com.",
    url:
      "https://es.investing.com/analysis/apple-entering-new-super-growth-cycle-making-the-stock-more-attractive-200439123",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Apple’s Surprise iPhone 12 Pro Upgrade Suddenly Changes The Game",
    id: 55176273,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f883d9466cd405249f905e9%2F0x0.jpg",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      "Apple’s new iPhone 12 Pro has a game-changing feature which no other device in the world can offer.",
    url:
      "https://www.forbes.com/sites/paulmonckton/2020/10/15/apple-iphone-12-pro-dolby-vision-hdr-edit-display-ios/",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Apple Claims The IPhone 12’s A14 Bionic ‘Challenges Laptops’ But Gives No Details",
    id: 55176243,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f889f0d0193935cb636fc66%2F0x0.jpg",
    related: "AAPL",
    source: "https://www.forbes.com",
    summary:
      "#-1 Ranked Industry Analyst Patrick Moorhead dives deeper as Apple hosted its iPhone 12 launch event on Tuesday and gave more details on its newest Apple A14 Bionic SoC.",
    url:
      "https://www.forbes.com/sites/moorinsights/2020/10/15/apple-claims-the-iphone-12s-a14-bionic-challenges-laptops-but-gives-no-details/",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "iPhone 12 and 12 mini vs iPhone 12 Pro and 12 Pro Max: Which should you buy?",
    id: 55176206,
    image:
      "https://images.idgesg.net/images/article/2020/10/iphone-12-mini-pro-100862293-large.3x2.jpg",
    related: "AAPL",
    source: "https://www.macworld.com",
    summary:
      "The iPhone 12, 12 mini, 12 Pro, and 12 Pro Max are very similar, but they have some major differences inside and out.",
    url:
      "https://www.macworld.com/article/3586089/iphone-12-and-12-mini-vs-iphone-12-pro-and-12-pro-max-design-display-performance-camera-price.html",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Over The Top Market will Showcase Positive Impact During 2020-2024|Demand for Cloud Streaming Services to Boost Market Growth | Technavio",
    id: 55175960,
    image:
      "https://mms.businesswire.com/media/20201015005591/en/830561/23/IRTNTR41626.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global Over The Top Market will grow by USD 88.85 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201015005591/en/4845087/Over-The-Top-Market-will-Showcase-Positive-Impact-During-2020-2024Demand-for-Cloud-Streaming-Services-to-Boost-Market-Growth-Technavio",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Over The Top Market will Showcase Positive Impact During 2020-2024|Demand for Cloud Streaming Services to Boost Market Growth | Technavio",
    id: 55175959,
    image:
      "https://mms.businesswire.com/media/20201015005591/en/830561/23/IRTNTR41626.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global Over The Top Market will grow by USD 88.85 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201015005591/en/4845086/Over-The-Top-Market-will-Showcase-Positive-Impact-During-2020-2024Demand-for-Cloud-Streaming-Services-to-Boost-Market-Growth-Technavio",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Over The Top Market will Showcase Positive Impact During 2020-2024|Demand for Cloud Streaming Services to Boost Market Growth | Technavio",
    id: 55175941,
    image:
      "https://mms.businesswire.com/media/20201015005591/en/830561/23/IRTNTR41626.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "The Global Over The Top Market will grow by USD 88.85 bn during 2020-2024",
    url:
      "https://www.businesswire.com/news/home/20201015005591/en/Over-The-Top-Market-will-Showcase-Positive-Impact-During-2020-2024Demand-for-Cloud-Streaming-Services-to-Boost-Market-Growth-Technavio",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "PC Sales Grow at Record Pace in Third Quarter: 4 Stocks to Watch",
    id: 55175484,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "investing",
    summary:
      "Stocks Analysis by Zacks Investment Research covering: Dell Technologies Inc, Apple Inc, Gartner Inc, Lenovo Group Ltd PK. Read Zacks Investment Research's latest article on Investing.com",
    url:
      "https://www.investing.com/analysis/pc-sales-grow-at-record-pace-in-third-quarter-4-stocks-to-watch-200541164",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Asia-Pacific & Middle East Mobile Phone Accessories Markets 2020-2027 - ResearchAndMarkets.com",
    id: 55175318,
    image:
      "https://mms.businesswire.com/media/20201015005726/en/371054/23/ResearchAndMarkets_800px.jpg",
    related: "AAPL",
    source: "businesswire",
    summary: "The",
    url:
      "https://www.businesswire.com/news/home/20201015005726/en/Asia-Pacific-Middle-East-Mobile-Phone-Accessories-Markets-2020-2027---ResearchAndMarkets.com",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Apple Entering New Super Growth Cycle, Making The Stock More Attractive",
    id: 55174540,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "https://uk.investing.com",
    summary:
      "Shares Analysis by Investing.com (Haris Anwar/Investing.com) covering: Apple Inc, Verizon Communications Inc. Read Investing.com (Haris Anwar/Investing.com)'s latest article on Investing.com UK.",
    url:
      "https://uk.investing.com/analysis/apple-entering-new-super-growth-cycle-making-the-stock-more-attractive-200448268",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline: 'Market Down Again as Pre-Election Deal Looks "Difficult"',
    id: 55174451,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "investing",
    summary:
      "Stocks Analysis by Zacks Investment Research covering: Bank of America Corp, Intuitive Surgical Inc, Amazon.com Inc, Wells Fargo & Company. Read Zacks Investment Research's latest article on Investing.com",
    url:
      "https://www.investing.com/analysis/market-down-again-as-preelection-deal-looks-difficult-200541124",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Apple Entering New Super Growth Cycle, Making The Stock More Attractive",
    id: 55174221,
    image:
      "https://i-invdn-com.akamaized.net/redesign/images/seo/v2/investingcom_analysis_og.jpg",
    related: "AAPL",
    source: "investing",
    summary:
      "Stocks Analysis by Investing.com (Haris Anwar/Investing.com) covering: Apple Inc, Verizon Communications Inc. Read Investing.com (Haris Anwar/Investing.com)'s latest article on Investing.com",
    url:
      "https://www.investing.com/analysis/apple-entering-new-super-growth-cycle-making-shares-more-attractive-200541066",
  },
  {
    category: "company",
    datetime: 1602720000,
    headline:
      "Strategy Analytics: Samsung Captures 88 Percent Market-Share of 5G Smartphone Shipments in Western Europe in H1 2020",
    id: 55174128,
    image:
      "https://mms.businesswire.com/media/20201014005970/en/560969/23/Strategy_Analytics_Logo.jpg",
    related: "AAPL",
    source: "businesswire",
    summary:
      "According to the latest research from Strategy Analytics Samsung captured an impressive 88 percent marketshare of all 5G smartphones shipped in Wester",
    url:
      "https://www.businesswire.com/news/home/20201014005970/en/Strategy-Analytics-Samsung-Captures-88-Percent-Market-Share-of-5G-Smartphone-Shipments-in-Western-Europe-in-H1-2020",
  },
  {
    category: "company",
    datetime: 1602717166,
    headline: "How to play for more upside in Apple after iPhone 12 event",
    id: 55173488,
    image:
      "https://image.cnbcfm.com/api/v1/image/106743791-1602677295149-gettyimages-1229061658-PGONCHAR_3E4869.jpeg?v=1602713062",
    related: "AAPL",
    source: "cnbc",
    summary:
      "Todd Gordon, founder of TradingAnalysis.com, says past upgrade cycles suggest Apple stock could have more upside ahead.",
    url:
      "https://www.cnbc.com/2020/10/14/apple-iphone-event-trader-lays-out-bullish-trade-on-stock.html",
  },
  {
    category: "company",
    datetime: 1602716522,
    headline: "iPhone 12 mini Vs. Pixel 5: Best $699 5G Phone?",
    id: 55173701,
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/iPhone-Mini-Vs-Pixel-5.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "At $699, is iPhone 12 mini or Pixel 5 the best buy?",
    url:
      "https://screenrant.com/apple-iphone-12-mini-vs-google-pixel-5g-best-5g-phone/",
  },
  {
    category: "company",
    datetime: 1602715743,
    headline:
      "22 Prime Day deals you can’t miss: Echo, Keurig, AirPods &amp; more",
    id: 55174001,
    image:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/10/keurig-kclassic-coffee-maker-hero.jpg",
    related: "AAPL",
    source: "https://www.androidcentral.com",
    summary:
      "There's just a few hours left to shop the big Prime Day sale but there are plenty of amazing deals still available! Whether you want to buy some tech, smart home products, kitchen gear, or basically anything else, there's something for you here.",
    url:
      "https://www.androidcentral.com/22-prime-day-deals-you-cant-miss-echo-keurig-headphones-more",
  },
  {
    category: "company",
    datetime: 1602715547,
    headline:
      "7 Last Minute Apple Deals to Shop Before Prime Day Ends | Digital Trends",
    id: 55174375,
    image:
      "https://icdn3.digitaltrends.com/image/digitaltrends/apple-watch-se-activity-rings-1200x630-c-ar1.91.jpg",
    related: "AAPL",
    source: "https://www.digitaltrends.com",
    summary:
      "Apple has discounted a host of its products for Prime Day 2020 on Amazon including the AirPods Pro and the 16-inch MacBook Pro.",
    url:
      "https://www.digitaltrends.com/dtdeals/last-minute-apple-deals-prime-day-2020/",
  },
  {
    category: "company",
    datetime: 1602713854,
    headline:
      "Apple Ships iPhone 12 Without Power Charger, Earbuds to Save the Earth",
    id: 55175626,
    image:
      "https://media.breitbart.com/media/2019/07/Tim-Cook-CEO-of-Apple-laughing-640x335.jpg",
    related: "AAPL",
    source: "https://www.breitbart.com",
    summary:
      'Apple announced during its recent reveal of the iPhone 12 that the phone will not ship with a charger or earbuds in the box, citing "environmental reasons," for the decision.',
    url:
      "https://www.breitbart.com/tech/2020/10/14/apple-ships-iphone-12-without-power-charger-earbuds-to-save-the-earth/",
  },
  {
    category: "company",
    datetime: 1602713461,
    headline:
      "Apple Cuts Prices of iPhone Earbuds and Chargers | The Motley Fool",
    id: 55173185,
    image:
      "https://g.foolcdn.com/editorial/images/595192/apple_announce-iphone12pro_10132020_bigjpglarge_2x.jpg",
    related: "AAPL",
    source: "https://www.fool.com",
    summary: "There's a big caveat, though.",
    url:
      "https://www.fool.com/investing/2020/10/14/apple-cuts-prices-of-iphone-earbuds-and-chargers/",
  },
  {
    category: "company",
    datetime: 1602712817,
    headline: "Should you upgrade to the new iPhone 12 – which one is best?",
    id: 55173635,
    image: "https://cdn.slashgear.com/wp-content/uploads/2020/10/iphone12.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "The iPhone 12 with 5G was released in October 2020: Here we look at reasons why you might want to upgrade. We’re also looking at reasons why you might want to steer clear. There are positive …",
    url:
      "https://www.slashgear.com/should-you-upgrade-to-the-new-iphone-12-which-one-is-best-14642656/",
  },
  {
    category: "company",
    datetime: 1602712367,
    headline:
      "Is 5G worth it? Experts say experience depends on location and carrier",
    id: 55175859,
    image:
      "https://i.dailymail.co.uk/1s/2020/10/14/22/34403692-0-image-a-59_1602711737342.jpg",
    related: "AAPL",
    source: "https://www.thisismoney.co.uk",
    summary:
      "Apple's new iPhone 12 is the first of the tech giant's handsets to include 5G, which offers improved internet speeds. But experts say user experience depends on their location and carrier.",
    url:
      "https://www.thisismoney.co.uk/sciencetech/article-8841265/Apples-iPhone-12-support-5G-experts-say-strength-depends-user-location-carrier.html",
  },
  {
    category: "company",
    datetime: 1602712367,
    headline:
      "Is 5G worth it? Experts say experience depends on location and carrier",
    id: 55174149,
    image:
      "https://i.dailymail.co.uk/1s/2020/10/14/22/34403692-0-image-a-59_1602711737342.jpg",
    related: "AAPL",
    source: "https://www.dailymail.co.uk",
    summary:
      "Apple's new iPhone 12 is the first of the tech giant's handsets to include 5G, which offers improved internet speeds. But experts say user experience depends on their location and carrier.",
    url:
      "https://www.dailymail.co.uk/sciencetech/article-8841265/Apples-iPhone-12-support-5G-experts-say-strength-depends-user-location-carrier.html",
  },
  {
    category: "company",
    datetime: 1602712200,
    headline: "Apple enters 5G race with new iPhone 12 range",
    id: 55174133,
    image:
      "https://www.businesstimes.com.sg/sites/default/files/styles/article_img_retina/public/image/2020/10/15/BT_20201015_IPHONE12_4283385.jpg?itok=lfg-m1RO",
    related: "AAPL",
    source: "https://www.businesstimes.com.sg",
    summary:
      "APPLE announced the launch of its next-generation iPhone 12 on Tuesday, with faster 5G connectivity that the California-based company hopes will spur consumers to trade in their old phones and keep its sales booming through the end of the year. Read more at The Business Times.",
    url:
      "https://www.businesstimes.com.sg/technology/apple-enters-5g-race-with-new-iphone-12-range",
  },
  {
    category: "company",
    datetime: 1602711638,
    headline: "5G Opportunity: Apple Finally Hops on the Bandwagon",
    id: 55173471,
    image: "https://investorplace.com/wp-content/uploads/2019/07/aapl1600d.jpg",
    related: "AAPL",
    source: "https://investorplace.com",
    summary:
      "Apple will sell 50 million 5G iPhones this year alone, making it the second biggest 5G phone vendor. Next year, it should overtake the top slot. Clearly, there is a lot of opportunity here.",
    url:
      "https://investorplace.com/2020/10/5g-opportunity-apple-finally-hops-on-the-bandwagon/",
  },
  {
    category: "company",
    datetime: 1602711171,
    headline: "The iPhone 12 pricing fine print could catch you out",
    id: 55173636,
    image:
      "https://cdn.slashgear.com/wp-content/uploads/2020/10/iphone_12_main.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "Apple fans planning to purchase the new iPhone 12 should expect to pay a bit more than anticipated depending on which carrier they choose. Preorders for the new iPhone 12 start later this week and …",
    url:
      "https://www.slashgear.com/the-iphone-12-pricing-fine-print-could-catch-you-out-14642652/",
  },
  {
    category: "company",
    datetime: 1602710922,
    headline: "Goldman Sachs trading business returns to glory",
    id: 55174967,
    image:
      "https://www.arabnews.com/sites/default/files/2020/10/15/2309706-815568005.png",
    related: "AAPL",
    source: "https://www.arabnews.com",
    summary:
      "NEW YORK: Goldman Sachs on Wednesday posted its best quarterly performance in a decade by some measures, as trading has moved back into the limelight and its lack of a big consumer business has switched from a curse to a blessing. The Wall Street bank posted a quarterly return on equity of 17.5 percent, its highest since 2010. Investors closely track that figure because it shows how well a bank uses shareholder money to produce profits.",
    url: "https://www.arabnews.com/node/1749066/business-economy",
  },
  {
    category: "company",
    datetime: 1602710922,
    headline: "Goldman Sachs trading business returns to glory",
    id: 55174705,
    image:
      "https://www.arabnews.com/sites/default/files/2020/10/15/2309706-815568005.png",
    related: "AAPL",
    source: "https://www.arabnews.com",
    summary:
      "NEW YORK: Goldman Sachs on Wednesday posted its best quarterly performance in a decade by some measures, as trading has moved back into the limelight and its lack of a big consumer business has switched from a curse to a blessing. The Wall Street bank posted a quarterly return on equity of 17.5 percent, its highest since 2010. Investors closely track that figure because it shows how well a bank uses shareholder money to produce profits.",
    url: "https://www.arabnews.com/node/1749066",
  },
  {
    category: "company",
    datetime: 1602710896,
    headline: "Apple stops bundling chargers and headphones with all iPhones",
    id: 55173441,
    image:
      "https://cdn.cultofmac.com/wp-content/uploads/2020/10/9FA0627A-1E06-4229-8347-B0B1C806680D.jpeg",
    related: "AAPL",
    source: "https://www.cultofmac.com",
    summary:
      "Apple won’t include a wall charger or a pair of headphones with the upcoming iPhone 12 series. And it doesn’t stop there",
    url:
      "https://www.cultofmac.com/725512/apple-charger-headphones-with-iphone-12-11-se/",
  },
  {
    category: "company",
    datetime: 1602710107,
    headline: "Does iPhone 12 Come With A Charger Or Earbuds?",
    id: 55173703,
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/iPhone-12-with-charger.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "iPhone 12 is missing some familiar accessories",
    url:
      "https://screenrant.com/apple-iphone-12-charger-earpods-earbuds-explained/",
  },
  {
    category: "company",
    datetime: 1602707288,
    headline: "Which phones have 5G right now?",
    id: 55173640,
    image: "https://cdn.slashgear.com/wp-content/uploads/2020/10/5gtime235.jpg",
    related: "AAPL",
    source: "https://www.slashgear.com",
    summary:
      "With 5G we’re on the cusp of a new age of mobile phone data speed and connectivity, and a limited set of phones are ready for it. Even fewer are owned by people who are connected to their cho…",
    url: "https://www.slashgear.com/which-phones-have-5g-right-now-14642641/",
  },
  {
    category: "company",
    datetime: 1602707100,
    headline: "Apple Inc. stock outperforms market on strong trading day",
    id: 55173088,
    image: "https://images.mktw.net/im-213861/social",
    related: "AAPL",
    source: "marketwatch",
    summary:
      "Shares of Apple Inc. inched 0.07% higher to $121.19 Wednesday, on what proved to be an all-around grim trading session for the stock market, with the NASDAQ...",
    url:
      "https://www.marketwatch.com/story/apple-inc-stock-outperforms-market-on-strong-trading-day-01602707135",
  },
  {
    category: "company",
    datetime: 1602706714,
    headline:
      "This MacBook Air Sale is the Best Remaining Prime Day Deal | Digital Trends",
    id: 55174376,
    image:
      "https://icdn4.digitaltrends.com/image/digitaltrends/macbook-air-2020-09-3-1200x630-c-ar1.91.jpg",
    related: "AAPL",
    source: "https://www.digitaltrends.com",
    summary:
      "Need a new laptop? Apple MacBooks are on sale for Amazon Prime day right now.",
    url:
      "https://www.digitaltrends.com/dtdeals/amazon-macbook-air-deal-for-prime-day-2020/",
  },
  {
    category: "company",
    datetime: 1602706446,
    headline:
      "APPLE INC : Credit Suisse conserve son opinion neutre | Zone bourse",
    id: 55174309,
    image: "https://www.zonebourse.com/images/twitter_ZB_fdblanc.png",
    related: "AAPL",
    source: "https://www.zonebourse.com",
    summary: "",
    url:
      "https://www.zonebourse.com/cours/action/APPLE-INC-4849/actualite-broker/APPLE-INC-Credit-Suisse-conserve-son-opinion-neutre-31540758/",
  },
  {
    category: "company",
    datetime: 1602706363,
    headline: "OnePlus 8T Vs. iPhone 12 mini: 5G Phone Comparison",
    id: 55173704,
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/E273560F-A012-49FA-842D-0884E6FC9BAB.jpeg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "Faster charging versus Face ID, among other differences.",
    url:
      "https://screenrant.com/oneplus-8t-vs-iphone-12-mini-5g-phone-features-specs-comparison/",
  },
  {
    category: "company",
    datetime: 1602706200,
    headline: "Wall Street expects Apple's new iPhones to fuel sales surge",
    id: 55174282,
    image:
      "https://static.ffx.io/images/$zoom_0.41493842592592595%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_238%2C$y_82/t_crop_custom/q_86%2Cf_auto/t_smh_no_label_no_age_social_wm/35790b4f027ea4bf658f071e3d52e3182e0d0a4e",
    related: "AAPL",
    source: "https://www.smh.com.au",
    summary:
      "The technology giant has generated relatively little sales growth from its marquee product in recent years but analysts tip that is about to end.",
    url:
      "https://www.smh.com.au/technology/wall-street-expects-apple-s-new-iphones-to-fuel-sales-surge-20201015-p5657p.html",
  },
  {
    category: "company",
    datetime: 1602706200,
    headline: "Wall Street expects Apple's new iPhones to fuel sales surge",
    id: 55173530,
    image:
      "https://static.ffx.io/images/$zoom_0.41493842592592595%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_238%2C$y_82/t_crop_custom/q_86%2Cf_auto/t_theage_no_label_no_age_social_wm/35790b4f027ea4bf658f071e3d52e3182e0d0a4e",
    related: "AAPL",
    source: "https://www.theage.com.au",
    summary:
      "The technology giant has generated relatively little sales growth from its marquee product in recent years but analysts tip that is about to end.",
    url:
      "https://www.theage.com.au/technology/wall-street-expects-apple-s-new-iphones-to-fuel-sales-surge-20201015-p5657p.html",
  },
  {
    category: "company",
    datetime: 1602705972,
    headline:
      "Apple’s huge 5G and Siri bets risk user satisfaction and legal issues",
    id: 55172978,
    image:
      "https://venturebeat.com/wp-content/uploads/2020/10/apple6-e1602678048110.jpg?w=1200&strip=all",
    related: "AAPL",
    source: "https://venturebeat.com",
    summary:
      "Apple's latest event raised questions about whether the Siri digital assistant or relatively new 5G technology are ready to deliver on years of promises.",
    url:
      "https://venturebeat.com/2020/10/14/apples-huge-5g-and-siri-bets-risk-user-satisfaction-and-legal-issues/",
  },
  {
    category: "company",
    datetime: 1602705300,
    headline:
      "Dow Jones Lower as Apple Stock Fails to Get Boost From iPhone 12; Goldman Sachs Reports Blockbuster Numbers | The Motley Fool",
    id: 55174360,
    image:
      "https://g.foolcdn.com/editorial/images/595175/apple_iphone-12_new-design_10132020.jpg",
    related: "AAPL",
    source: "https://markets.businessinsider.com",
    summary:
      "Apple stock is trending lower after a much-anticipated iPhone event, and Goldman Sachs reported exceptional third-quarter results.",
    url:
      "https://markets.businessinsider.com/news/stocks/dow-jones-lower-as-apple-stock-fails-to-get-boost-from-iphone-12;-goldman-sachs-reports-blockbuster-numbers-9393416",
  },
  {
    category: "company",
    datetime: 1602705300,
    headline:
      "Dow Jones Lower as Apple Stock Fails to Get Boost From iPhone 12; Goldman Sachs Reports Blockbuster Numbers | The Motley Fool",
    id: 55173199,
    image:
      "https://g.foolcdn.com/editorial/images/595175/apple_iphone-12_new-design_10132020.jpg",
    related: "AAPL",
    source: "https://www.fool.com",
    summary:
      "Apple stock is trending lower after a much-anticipated iPhone event, and Goldman Sachs reported exceptional third-quarter results.",
    url:
      "https://www.fool.com/investing/2020/10/14/dow-jones-lower-as-apple-stock-fails-to-get-boost/",
  },
  {
    category: "company",
    datetime: 1602704712,
    headline:
      "LiDAR Scanner puts iPhone 12 Pro at the forefront of augmented reality",
    id: 55173438,
    image:
      "https://cdn.cultofmac.com/wp-content/uploads/2020/10/E92E044A-5340-4E77-8CF7-6AEB69E0BA0E.jpeg",
    related: "AAPL",
    source: "https://www.cultofmac.com",
    summary:
      "The LiDAR scanner in the iPhone 12 Pro makes Apple’s new flagship device an AR powerhouse. Potentially. Now it's up to app developers.",
    url:
      "https://www.cultofmac.com/725500/lidar-scanner-puts-iphone-12-pro-at-the-forefront-of-augmented-reality/",
  },
  {
    category: "company",
    datetime: 1602703955,
    headline: "Apple Watch Prime Day Deal: Series 3 For Just $169",
    id: 55173705,
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/Apple-Watch-3-with-sport-band.jpg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "Apple's affordable Watch now even cheaper.",
    url:
      "https://screenrant.com/apple-watch-prime-day-deal-series-3-price-drop/",
  },
  {
    category: "company",
    datetime: 1602703740,
    headline:
      "Apple's newest products come with a powerful chip that's flying under the radar — and it's a key building block for the company's vision of a fully interconnected future",
    id: 55175231,
    image:
      "https://www.businessinsider.in/photo/78670489/the-iphone-12-and-homepod-mini-come-with-a-powerful-new-chip-a-key-building-block-for-apples-vision-of-a-fully-interconnected-future.jpg?imgsize=83281",
    related: "AAPL",
    source: "https://www.businessinsider.in",
    summary: "",
    url:
      "https://www.businessinsider.in/tech/news/the-iphone-12-and-homepod-mini-come-with-a-powerful-new-chip-a-key-building-block-for-apples-vision-of-a-fully-interconnected-future/articleshow/78670489.cms",
  },
  {
    category: "company",
    datetime: 1602703474,
    headline: "#EndSARS protest weighs on Nigerian Stock Market | Nairametrics",
    id: 55174308,
    image:
      "https://i1.wp.com/nairametrics.com/wp-content/uploads/2020/10/114893407_ab462116-b8ee-419b-9c1d-9126e3ff940d.jpg?fit=900%2C506&ssl=1",
    related: "AAPL",
    source: "https://nairametrics.com",
    summary: "#EndSARS protest weighs on Nigerian Stock Market Stock Market",
    url:
      "https://nairametrics.com/2020/10/14/endsars-protest-weighs-on-nigerian-stock-market/",
  },
  {
    category: "company",
    datetime: 1602703397,
    headline: "Apple TV app arrives on some of Sony’s latest 4K TVs",
    id: 55173972,
    image:
      "https://cdn.vox-cdn.com/thumbor/8cwPFqNIQIHQrDcTn59HDnxZvro=/0x172:2040x1240/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13959855/acastro_190218_1777_apple_streaming_0003.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary: "Apple TV is now on Android TV.",
    url: "https://www.theverge.com/2020/10/14/21516418/art-club",
  },
  {
    category: "company",
    datetime: 1602703397,
    headline: "Apple TV app arrives on some of Sony’s latest 4K TVs",
    id: 55173639,
    image:
      "https://cdn.vox-cdn.com/thumbor/8cwPFqNIQIHQrDcTn59HDnxZvro=/0x172:2040x1240/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13959855/acastro_190218_1777_apple_streaming_0003.jpg",
    related: "AAPL",
    source: "https://www.theverge.com",
    summary: "Apple TV is now on Android TV.",
    url:
      "https://www.theverge.com/2020/10/14/21516418/apple-tv-sony-android-now-available-software-update",
  },
  {
    category: "company",
    datetime: 1602703291,
    headline: "Apple users outraged after firm removes charger or EarPods",
    id: 55175845,
    image:
      "https://i.dailymail.co.uk/1s/2020/10/14/20/34398980-0-image-a-46_1602704132123.jpg",
    related: "AAPL",
    source: "https://www.thisismoney.co.uk",
    summary:
      "Apple customers were left frustrated after the tech giant unveiled the iPhone 12 Tuesday, due to the news that the $799 smartphone will not include the free charger or EarPods.",
    url:
      "https://www.thisismoney.co.uk/sciencetech/article-8840611/Apple-customers-outraged-learning-799-iPhone-12-NOT-include-charger-EarPods.html",
  },
  {
    category: "company",
    datetime: 1602703291,
    headline: "Apple users outraged after firm removes charger or EarPods",
    id: 55174148,
    image:
      "https://i.dailymail.co.uk/1s/2020/10/14/20/34398980-0-image-a-46_1602704132123.jpg",
    related: "AAPL",
    source: "https://www.dailymail.co.uk",
    summary:
      "Apple customers were left frustrated after the tech giant unveiled the iPhone 12 Tuesday, due to the news that the $799 smartphone will not include the free charger or EarPods.",
    url:
      "https://www.dailymail.co.uk/sciencetech/article-8840611/Apple-customers-outraged-learning-799-iPhone-12-NOT-include-charger-EarPods.html",
  },
  {
    category: "company",
    datetime: 1602702355,
    headline:
      "La estrategia de Apple para mantener el trono: depender menos de terceros y construir su ecosistema de productos",
    id: 55173927,
    image:
      "https://rt00.epimg.net/retina/imagenes/2020/10/14/innovacion/1602700798_455551_1602701045_rrss_normal.jpg",
    related: "AAPL",
    source: "https://elpais.com",
    summary:
      "La compañía de Cupertino pretende iniciar una nueva era al sustituir los procesadores de Intel por sus propios chips",
    url:
      "https://elpais.com/retina/2020/10/14/innovacion/1602700798_455551.html",
  },
  {
    category: "company",
    datetime: 1602701125,
    headline: "A14 Bionic: Apple's iPhone 12 Chip Explained",
    id: 55173706,
    image:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/3912470F-1A12-496D-A7D7-3F61AB6E7966.jpeg",
    related: "AAPL",
    source: "https://screenrant.com",
    summary: "A14 powers many of the iPhone 12’s best features.",
    url:
      "https://screenrant.com/a14-bionic-iphone-12-apple-chip-features-upgrades/",
  },
];
