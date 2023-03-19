import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bitcoin, USDC stablecoin rally after US intervenes on SVB - Reuters.com",
            "description": "Bitcoin, USDC stablecoin rally after US intervenes on SVB  Reuters.com",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi11c2RjLXN0YWJsZWNvaW4tcmFsbHktYWZ0ZXItdXMtaW50ZXJ2ZW5lcy1zdmItMjAyMy0wMy0xMy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-13T00:55:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bitcoin steadies near lows hit after fall of Silvergate - Reuters.com",
            "description": "Bitcoin steadies near lows hit after fall of Silvergate  Reuters.com",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1zdGVhZGllcy1uZWFyLWxvd3MtaGl0LWFmdGVyLWZhbGwtc2lsdmVyZ2F0ZS0yMDIzLTAzLTA5L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-09T11:10:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bitcoin rises to highest level since June 2022 - Reuters",
            "description": "Bitcoin rises to highest level since June 2022  Reuters",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9iaXRjb2luLXJpc2VzLWhpZ2hlc3QtbGV2ZWwtc2luY2UtanVuZS0yMDIyLTIwMjMtMDMtMTQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-14T13:22:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Cryptoverse: Bitcoin moves towards Satoshi's payment dream - Reuters",
            "description": "Cryptoverse: Bitcoin moves towards Satoshi's payment dream  Reuters",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtYml0Y29pbi1tb3Zlcy10b3dhcmRzLXNhdG9zaGlzLXBheW1lbnQtZHJlYW0tMjAyMy0wMi0yOC_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-02-28T06:18:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Cryptoverse: Hooked on growth, bitcoin investors turn to smart tokens - Reuters",
            "description": "Cryptoverse: Hooked on growth, bitcoin investors turn to smart tokens  Reuters",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtaG9va2VkLWdyb3d0aC1iaXRjb2luLWludmVzdG9ycy10dXJuLXNtYXJ0LXRva2Vucy0yMDIzLTAzLTA3L9IBAA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-07T06:16:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "Bitcoin edges higher after dismal February for risk assets as investors assess rate outlook and new China data",
            "description": "Bitcoin has surged by more than 40% so far in 2023 and started off March on stronger footing.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-stocks-china-manufacturing-data-risk-assets-copper-2023-3",
            "urlToImage": "https://i.insider.com/63ff5968494c7a0019f21cb0?width=1200&format=jpeg",
            "publishedAt": "2023-03-01T15:48:21Z",
            "content": "Bitcoin pushed higher Wednesday, sustaining its advance alongside other risk assets after the strongest official  manufacturing print in a decade out of China kickstarted trading in March. \r\nThe worl… [+2631 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "Bitcoin notches 9-month high after inflation data bolsters speculation of smaller rate hike",
            "description": "Bitcoin soared to $26,500 shortly after the CPI report was released, surging more than 15% to hit a multi-month high.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-inflation-data-cpi-interest-rates-2023-3",
            "urlToImage": "https://i.insider.com/63cea91bb9a04b0019eda8e3?width=1200&format=jpeg",
            "publishedAt": "2023-03-14T15:32:23Z",
            "content": "Bitcoin jumped to a nearly nine-month high on Tuesday as traders mulled over key inflation data that could bolster odds the Federal Reserve will slow interest rate hikes. \r\nThe rally follows the rele… [+1992 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "Bitcoin plunges under $20,000 to its lowest point in 2 months as Silvergate blow-up and bank fears rattle risk assets",
            "description": "Bitcoin is veering toward a weekly loss as a fresh pain point for the crypto sector emerged from the failure of crypto-friendly Silvergate Bank.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-20000-silvergate-ether-silicon-valley-bank-turmoil-markets-2023-3",
            "urlToImage": "https://i.insider.com/5d669bfb2e22af0e7c65d5e8?width=1200&format=jpeg",
            "publishedAt": "2023-03-10T16:22:49Z",
            "content": "Bitcoin slumped to its lowest price in two months Friday as the collapse of crypto depositor Silvergate Bank and the blow-up of tech startup lender Silicon Valley Bank fueled a retreat by investors f… [+2141 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "rhogg@insider.com (Ryan Hogg)",
            "title": "FTX has a massive $9.5 billion shortfall in top crypto and cash needed to repay customers, the bankrupt exchange's new bosses say",
            "description": "In a presentation, lawyers for the bankrupt FTX identified billions of dollars in shortfalls across bitcoin, ethereum and other liquid assets.",
            "url": "https://markets.businessinsider.com/news/currencies/ftx-crypto-shortfall-billions-sam-bankman-fried-exchange-bankruptcy-ftt-2023-3",
            "urlToImage": "https://i.insider.com/63f892f288f76900192d1d30?width=1200&format=jpeg",
            "publishedAt": "2023-03-03T11:26:38Z",
            "content": "FTX has identified a $9.5 billion shortfall in top crypto and cash needed to repay customers, its new bosses have said, with just $694 million in currency that's easy to cash in.  \r\nIn a press releas… [+1756 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks fall as investors brace for further impacts of Silicon Valley Bank's collapse",
            "description": "Goldman Sachs now expects the Fed to pause its rate hikes at next week's FOMC meeting as uncertainty related to the SVB's collapse soars.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-digest-silicon-valley-bank-collapse-2023-3",
            "urlToImage": "https://i.insider.com/6348425ff900fa001814c580?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T13:43:37Z",
            "content": "US stocks were lower on Monday after the Federal Reserve and US Treasury announced emergency measures to stop the spread of potential bank runs following the collapse of Silicon Valley Bank.\r\nThe mea… [+1210 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
            "title": "Bitcoin rises and crypto market tops $1 trillion again after US regulators bail out SVB customers",
            "description": "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-bitcoin-silicon-valley-bank-svb-customer-bailout-regulators-2023-3",
            "urlToImage": "https://i.insider.com/63cea91bb9a04b0019eda8e3?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T11:44:18Z",
            "content": "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank. \r\nCryptos were staging a comeback fr… [+1897 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "Crypto lost the battle to be an alternative to fiat money after FTX collapse, top economist says",
            "description": "\"Only the legal, historical infrastructure behind central banks can give great credibility [to money],\" a top economist said.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-lost-battle-alternative-fiat-money-central-banks-ftx-crash-2023-2",
            "urlToImage": "https://i.insider.com/63f670355ca81e001855c2af?width=1200&format=jpeg",
            "publishedAt": "2023-02-22T20:53:16Z",
            "content": "Fiat money has beaten out an often-cited use case for certain cryptos an alternative to traditional currencies, according to Agustin Carstens, the head of the Bank for International Settlements.\r\n\"I … [+1660 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "FTX's collapse wiped out $200 billion in the total value of the cryptocurrency market, and it hit retail investors in emerging economies the hardest",
            "description": "Larger crypto investors \"tended to sell their coins right before steep price declines, while smaller investors were still buying,\" a new study found.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-market-retail-investors-ftx-sbf-emerging-economies-bitcoin-ethereum-2023-2",
            "urlToImage": "https://i.insider.com/63f4d2c25ca81e00185586e9?width=1200&format=jpeg",
            "publishedAt": "2023-02-21T15:48:35Z",
            "content": "Cryptocurrency markets lost $200 billion in value in the wake of FTX's downfall in November, a new report found, but losses weren't the same for investors across the board.\r\nRetail investors in emerg… [+1881 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Crypto-mining scheme run from US school crawl space",
            "description": "Police were called after a janitor noticed electrical wires, ductwork and computers that looked amiss.",
            "url": "https://www.bbc.co.uk/news/world-us-canada-64767178",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18622/production/_128747899_crypto.jpg",
            "publishedAt": "2023-02-25T00:41:31Z",
            "content": "A town official was running an illegal cryptocurrency mining operation from a crawl space under a school in the US state of Massachusetts, police say.\r\nNadeam Nahas, 39, who was an assistant faciliti… [+1974 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Mark Frauenfelder",
            "title": "How scammers are using AI voice cloning to trick victims into sending money",
            "description": "The Washington Post reports that scammers are using high-quality AI-generated voice technology to impersonate loved ones and persuade victims that they are in distress and need money urgently.\n\n\n\nOne example in the article is about the parents of a man named …",
            "url": "https://boingboing.net/2023/03/06/how-scammers-are-using-ai-voice-cloning-to-trick-victims-into-sending-money.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/03/clone.jpg?fit=1200%2C832&ssl=1",
            "publishedAt": "2023-03-06T18:53:31Z",
            "content": "The Washington Post reports that scammers are using high-quality AI-generated voice technology to impersonate loved ones and persuade victims that they are in distress and need money urgently.One exa… [+1269 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "DeFi Lender Euler Finance Hit By $197 Million Hack, Experts Say",
            "description": "Decentralized lending protocol Euler Finance was hit by an attack that drained $197 million in cryptocurrencies from its platform on Monday, making it the largest hack in its corner of the digital-assets market this year. From a report: The bulk of the hacker…",
            "url": "https://it.slashdot.org/story/23/03/13/161224/defi-lender-euler-finance-hit-by-197-million-hack-experts-say",
            "urlToImage": "https://a.fsdn.com/sd/topics/security_64.png",
            "publishedAt": "2023-03-13T16:01:00Z",
            "content": "The bulk of the hacker's loot -- worth roughly $135 million -- was denominated in staked Ether tokens (stETH), while the remainder was held in wrapped Bitcoin and stablecoins DAI and USDC, according … [+790 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "2 former Barclays bankers just netted a 700% profit selling Bored Ape NFTs",
            "description": "Mike Anderson and Ovie Faruq offloaded their collection of 72 NFTs for $9.25 million this week, according to OpenSea data.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-investing-news-nft-barclays-bankers-junk-bonds-bored-ape-2023-2",
            "urlToImage": "https://i.insider.com/63f882ec88f76900192d1bf5?width=1200&format=jpeg",
            "publishedAt": "2023-02-24T10:31:02Z",
            "content": "Two former Barclays junk bond traders reportedly netted a 700% profit when they offloaded their collection of Bored Ape Yacht Club NFTs earlier this week.\r\nMike Anderson and Ovie Faruq sold the 72 NF… [+1998 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks rise as bank shares rebound and CPI shows inflation continues to cool",
            "description": "Regional bank stocks surged Tuesday after cratering on SVB concerns a day earlier. Meanwhile, Moody's downgraded its outlook for the US banking sector.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-recession-dow-snaps-losing-streak-sp-2023-3",
            "urlToImage": "https://i.insider.com/63e2c1fd96242f0019e7d91e?width=1200&format=jpeg",
            "publishedAt": "2023-03-14T20:19:18Z",
            "content": "US stocks climbed Tuesday as traders focused on the latest inflation data and continued to assess the fallout from the collapse of Silicon Valley Bank. The Dow Jones Industrial Average closed in the … [+1816 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Thomas Eaton",
            "title": "Which songwriter was musical director for Marlene Dietrich? The Saturday quiz",
            "description": "From Jack Black to Hakuhō Shō, test your knowledge with the Saturday quiz1 Three-year-old Eliza Armstrong was the first patient at which hospital?2 What is the world’s largest trade book fair?3 Marduk was the chief god of which city?4 Which songwriter was mus…",
            "url": "https://www.theguardian.com/lifeandstyle/2023/mar/18/which-songwriter-was-musical-director-for-marlene-dietrich-the-saturday-quiz",
            "urlToImage": "https://i.guim.co.uk/img/media/ca52a7817ef6ed000332b0e99dd9036b7f6edc70/0_224_3626_2174/master/3626.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1c1aaf32499d029a262596f4d77fb73c",
            "publishedAt": "2023-03-18T07:00:06Z",
            "content": "The questions\r\n1 Three-year-old Eliza Armstrong was the first patient at which hospital?2 What is the worlds largest trade book fair?3 Marduk was the chief god of which city?4 Which songwriter was mu… [+1309 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Dan Milmo and agency",
            "title": "Crypto bank Silvergate announces liquidation amid sector turmoil",
            "description": "Wind-down and liquidation plan follows mass withdrawal of deposits after collapse of FTX exchange The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange…",
            "url": "https://www.theguardian.com/technology/2023/mar/09/crypto-bank-silvergate-liquidation-sector-turmoil-wind-down-ftx-exchange",
            "urlToImage": "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_0_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b65d8993a2a83c39065eb43558101253",
            "publishedAt": "2023-03-09T14:45:15Z",
            "content": "The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange FTX.\r\nThe California-based bank had w… [+3223 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "SVB Financial Goes Bankrupt - Bloomberg Television",
            "description": "<ol><li>SVB Financial Goes Bankrupt  Bloomberg Television\r\n</li><li>SVB Financial Group files for Chapter 11 bankruptcy protection  BNN Bloomberg\r\n</li><li>Parent of Silicon Valley Bank seeks bankruptcy protection - Business News  Castanet.net\r\n</li><li>SVB p…",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CCAiC2J2b3Zub1QxXzZBmAEB?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-17T18:06:30Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Eliza Bavin",
            "title": "Man has two more chances before $232M in Bitcoin is lost forever",
            "description": "After misplacing his digital wallet password, this man has only two more attempts before his millions are lost forever.",
            "url": "https://au.finance.yahoo.com/news/man-has-two-more-chances-before-232-million-is-lost-forever-222045101.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-07/8de88490-eda3-11eb-aefe-da5c70e019cd",
            "publishedAt": "2023-03-05T23:55:37Z",
            "content": "The German-born man has used eight of his 10 attempts to access his Bitcoin. (Source: Getty)\r\nBack when Bitcoin was worth only $5 a coin, Stefan Thomas was paid 7,002 of them for making a video expla… [+1554 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "The Associated Press",
            "title": "German investigators take down crypto money laundering site",
            "description": "German investigators say they have taken down a major online money laundering operation, seizing the Germany-based server infrastructure of a platform that dealt in ill-gotten cryptocurrency",
            "url": "https://abcnews.go.com/Business/wireStory/german-investigators-crypto-money-laundering-site-97880159",
            "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
            "publishedAt": "2023-03-15T15:08:50Z",
            "content": "BERLIN -- German investigators said they took down a major online money laundering operation on Wednesday, seizing the Germany-based server infrastructure of a platform that dealt in ill-gotten crypt… [+1285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Kalyeena Makortoff Banking correspondent",
            "title": "City regulator joins Met in raids on suspected crypto ATM operations",
            "description": "Joint investigation with police in London follows similar one in Leeds as part of wider crackdown on sectorThe City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of …",
            "url": "https://www.theguardian.com/technology/2023/mar/08/city-regulator-met-raids-suspected-crypto-atm-operations-police-london-leeds-crackdown-fca",
            "urlToImage": "https://i.guim.co.uk/img/media/f2e32f3b1abdf154154e4d021b13facc51d838b5/0_0_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=84b77443e4ec015e06f4a4ef30c9b2f5",
            "publishedAt": "2023-03-08T12:22:28Z",
            "content": "The City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of a widening crackdown on the sector.\r\nThe joint … [+1974 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks finish higher after volatile session as S&P 500 breaks out of slump",
            "description": "Trading was volatile as the major indexes swung between gains and losses intraday, following a big sell-off earlier in the week.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-ends-losing-streak-gdp-revision-2023-2",
            "urlToImage": "https://i.insider.com/6352c3d7ffcac3001876bb26?width=1200&format=jpeg",
            "publishedAt": "2023-02-23T21:05:21Z",
            "content": "US stocks closed higher on Thursday, with the S&amp;P 500 breaking a streak of four consecutive losses. \r\nMarkets swung between gains and losses, following a big sell-off earlier in the week. The rel… [+1160 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks rise as investors await Fed minutes to gauge interest rate trajectory",
            "description": "Fed presidents like James Bullard and Loretta Mester have recently advocated for a return to 50-basis-point rate hikes to combat inflation.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-interest-rate-clues-inflation-2023-2",
            "urlToImage": "https://i.insider.com/639ccfcbb5600000185b2286?width=1200&format=jpeg",
            "publishedAt": "2023-02-22T14:33:38Z",
            "content": "US stocks edged higher on Wednesday as investors await the release of minutes from the Federal Reserve's last FOMC meeting.\r\nInvestors will look for clues on the trajectory of future interest rate hi… [+1245 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "US stocks rise as investors assess softer employment data and brace for key jobs report",
            "description": "Weekly jobless claims totaled 211,000, an increase of 21,000 from the previous week and ahead of estimates for 195,000.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-jobless-claims-jerome-powell-rate-hikes-2023-3",
            "urlToImage": "https://i.insider.com/61afa5886531110019cef403?width=1200&format=jpeg",
            "publishedAt": "2023-03-09T14:36:51Z",
            "content": "US stocks rose Thursday following higher-than-expected jobless claims data and ahead of Friday's key nonfarm payrolls report. \r\nInitial filings for unemployment clocked in at 211,000 last week, up by… [+860 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks trade mixed as Fed minutes show central bank willing to push on with rate hikes to fight inflation",
            "description": "The Fed minutes showed that some central bankers were supportive of a 50 basis point interest rate hike at its February FOMC meeting.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-more-interest-rate-hikes-2023-2",
            "urlToImage": "https://i.insider.com/639b5eb2b7e0f200180939e7?width=1200&format=jpeg",
            "publishedAt": "2023-02-22T21:06:27Z",
            "content": "US stocks ended mixed on Wednesday after minutes from the Federal Reserve's last meeting showed that inflation remains a top concern for the central bank as it remains well above its long-term target… [+1279 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks rise as the S&P 500 looks to snap a 4-day losing streak",
            "description": "The S&P 500 has notched four straight losses, which is the longest losing streak for the benchmark so far in 2023.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-losing-streak-nasdaq-dow-2023-2",
            "urlToImage": "https://i.insider.com/63f776fb88f76900192cf333?width=1200&format=jpeg",
            "publishedAt": "2023-02-23T14:47:30Z",
            "content": "US stocks opened higher on Thursday, with major indexes set to mark a turnaround from a disappointing week. \r\nThe S&amp;P 500 has notched four straight losses, which is the longest losing streak for … [+1131 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "The stock market has been flipped upside down",
            "description": "JPMorgan says this risk-seeking behavior is practically taunting the Fed, which is still hiking interest rates to bring inflation down.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-trends-flipped-upside-down-investors-defy-fed-2023-2",
            "urlToImage": "https://i.insider.com/63eea93db66c280019d77cbd?width=1200&format=jpeg",
            "publishedAt": "2023-02-18T10:00:00Z",
            "content": "The stock market has been completely flipped upside down so far in 2023 as risky assets that struggled last year stage a big comeback, even in the face of continued rate hikes from the Federal Reserv… [+4365 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "Fake ChatGPT tokens are flooding the market as crypto scammers take advantage of the AI craze",
            "description": "Blockchain security company PeckShield alerted crypto investors that at least one issuer has created \"dozens of tokens with a pump & dump scheme.\"",
            "url": "https://markets.businessinsider.com/news/currencies/chatgpt-tokens-cryptocurrency-fake-scammers-bing-microsoft-ai-artificial-intelligence-2023-2",
            "urlToImage": "https://i.insider.com/63db8cdee33c4000193aa1fb?width=1200&format=jpeg",
            "publishedAt": "2023-02-21T17:07:12Z",
            "content": "ChatGPT's popularity has inspired scammers to unleash a wave of unauthorized cryptocurrencies designed to appear as if they're affiliated with the chatbot that's sparked 2023's AI investing frenzy. \r… [+1335 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks close lower to wrap up losing week as hot inflation data jolts markets",
            "description": "The drop on Friday follows higher-than-expected core PCE data. The two-year Treasury yield neared its highest level since 2007.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-sp500-nasdaq-dow-bond-yields-inflation-data-2023-2",
            "urlToImage": "https://i.insider.com/63dba59ee33c4000193aa450?width=1200&format=jpeg",
            "publishedAt": "2023-02-24T21:08:32Z",
            "content": "US stocks fell on Friday to close out a losing week, with the S&amp;P 500 notching its worst weekly performance since mid-December.\r\nThe Nasdaq Composite and Dow Jones Industrial Average also ended l… [+913 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks rally as traders digest comments from Fed officials on coming rate hikes",
            "description": "The Dow popped more than 300 points, supported by Salesforce's gains. Meanwhile, the 2-year note yield reached levels not seen in over a decade.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-fed-rates-bostic-2023-3",
            "urlToImage": "https://i.insider.com/63e2c1fd96242f0019e7d91e?width=1200&format=jpeg",
            "publishedAt": "2023-03-02T21:05:32Z",
            "content": "US stocks rallied Thursday as a Federal Reserve official's comments on coming interest rates hikes cheered investors.\r\nAfter opening in mixed territory, the major indexes closed in the green, even as… [+1204 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks dip to start the month as investors grapple with fears of interest rates higher for longer",
            "description": "The Federal Reserve is expected to hike interest rates at least two more times to the 5% level, but further increases could be possible.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-fear-high-interest-rates-fed-2023-3",
            "urlToImage": "https://i.insider.com/6360270d0b271e00186bb924?width=1200&format=jpeg",
            "publishedAt": "2023-03-01T14:36:47Z",
            "content": "US stocks started the month of March in the red as investors continue to fear the prospect of higher for longer interest rates.\r\nThe inflation rate unexpectedly accelerated in Germany last month, and… [+901 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks fall as bank worries linger after firms borrow $165 billion from Fed to shore up liquidity",
            "description": "The Federal Reserve lent $165 billion to US banks as they took advantage of their emergency backstop policies in a bid to shore up liquidity.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-bank-worries-linger-fed-borrow-facility-2023-3",
            "urlToImage": "https://i.insider.com/639ccfcbb5600000185b2286?width=1200&format=jpeg",
            "publishedAt": "2023-03-17T13:38:31Z",
            "content": "US stocks edged lower on Friday as investors continued to worry about the current state of the US banking industry.\r\nThe Federal Reserve said late Thursday that it lent a combined $165 billion to var… [+1118 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmohamed@businessinsider.com (Theron Mohamed)",
            "title": "Charlie Munger torched crypto and touted BYD over Tesla. Cathie Wood, Robert Kiyosaki, and Patrick Byrne just called him out.",
            "description": "Warren Buffett's business partner and Berkshire Hathaway's 99-year-old vice-chairman fails to grasp the power of Tesla's innovation, Wood said.",
            "url": "https://markets.businessinsider.com/news/currencies/wood-kiyosaki-byrne-munger-musk-tesla-byd-ev-crypto-bitcoin-2023-2",
            "urlToImage": "https://i.insider.com/63f3505e7b15f100194d28b3?width=1200&format=jpeg",
            "publishedAt": "2023-02-20T11:39:00Z",
            "content": "Charlie Munger panned bitcoin and other cryptocurrencies as stupid, worthless, and dangerous during Daily Journal's recent annual meeting.\r\nThe 99-year-old billionaire and vice-chairman of Warren Buf… [+3458 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "A top exec at the world's largest crypto exchange breaks down the single-biggest risk for the market in 2023",
            "description": "Binance Chief Strategy Officer Patrick Hillmann explained how poor regulation will lead to increased crypto market volatility.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-market-outlook-binance-exec-exchange-sec-regulation-stablecoin-2023-2023-2",
            "urlToImage": "https://i.insider.com/63ed3b49dd6fcf00194a8a3e?width=1200&format=jpeg",
            "publishedAt": "2023-02-20T13:15:00Z",
            "content": "Cryptocurrency markets have made significant strides to recover from 2022' crises, with bitcoin soaring about 50% since the start of the year and the total crypto market value edging back above $1 tr… [+3595 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gigazine.net"
            },
            "author": "@GIGAZINE",
            "title": "NFTアート「TwelveFold」のオークションに22億円分のビットコインが集まる、落札前に入札額を振り込ませる手法に批判も",
            "description": "猿のアイコンのNFTアート「Bored Ape Yacht Club(BAYC)」などを手がけたことで知られているYuga Labsが、ビットコインのブロックチェーンを用いたジェネレーティブアート作品のコレクションである「TwelveFold」のオークションを実施しました。288点のNFTコレクションを扱った今回のオークションでは、わずか24時間で約735BTC(約22億4500万円)ものビットコインが集められました。続きを読む...",
            "url": "https://gigazine.net/news/20230307-yuga-twelvefold-bitcoin-nft-auction/",
            "urlToImage": "https://i.gzn.jp/img/2023/03/07/yuga-twelvefold-bitcoin-nft-auction/00.png",
            "publishedAt": "2023-03-07T05:30:00Z",
            "content": "NFTBored Ape Yacht Club(BAYC)Yuga LabsTwelveFold288NFT24735BTC(224500)\r\nTwelveFoldhttps://twelvefold.io/\r\nYuga Twelvefold Bitcoin NFT Auction Raises $16.5 Million - Decrypthttps://decrypt.co/122836/y… [+1497 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Amy Castor",
            "title": "Was hindert Bitcoin am Proof-of-Stake? Bei Ethereum klappt's doch",
            "description": "Ethereum ist auf ein deutlich umweltfreundlicheres Blockchain-Verfahren umgestiegen. Das zeigt: Es gibt auch für Bitcoin keine Hindernisse.",
            "url": "https://www.heise.de/hintergrund/Was-hindert-Bitcoin-am-Proof-of-Stake-Bei-Ethereum-klappt-s-doch-7531756.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/0/4/0/9/Kryptowaehrungen-c362a7b00046ad4a.jpg",
            "publishedAt": "2023-03-06T06:00:00Z",
            "content": "Inhaltsverzeichnis\r\n2022 wurde Ethereum endlich \"grün\". Die zweitpopulärste Kryptowährung des Planeten stellte auf das Proof-of-Stake-Verfahren um, ein energieeffizientes Framework zum Hinzufügen neu… [+5048 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Amy Castor",
            "title": "Stromverbrauch bei Bitcoin: Warum Forderungen nach Proof-of-Stake laut werden",
            "description": "Ethereum ist auf ein deutlich umweltfreundlicheres Blockchain-Verfahren umgestiegen. Das zeigt: Es gibt auch für Bitcoin keine Hindernisse.",
            "url": "https://www.heise.de/hintergrund/Stromverbrauch-bei-Bitcoin-Warum-Forderungen-nach-Proof-of-Stake-laut-werden-7531756.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/0/4/0/9/Kryptowaehrungen-c362a7b00046ad4a.jpg",
            "publishedAt": "2023-03-06T06:00:00Z",
            "content": "Inhaltsverzeichnis\r\n2022 wurde Ethereum endlich \"grün\". Die zweitpopulärste Kryptowährung des Planeten stellte auf das Proof-of-Stake-Verfahren um, ein energieeffizientes Framework zum Hinzufügen neu… [+5045 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "La minería Bitcoin era un desastre medioambiental: la solución de Estados Unidos es una tasa del 30%",
            "description": "Estados Unidos está dejando de ser el paraíso de las criptomonedas. Además de los movimientos de la SEC, ahora es la Administración Biden la que ha mostrado su propuesta. La principal medida que afecta al Bitcoin es la denominada tasa de hasta el 30% sobre el…",
            "url": "https://www.xataka.com/criptomonedas/mineria-bitcoin-era-desastre-medioambiental-solucion-estados-unidos-tasa-30",
            "urlToImage": "https://i.blogs.es/76b39b/biden-bitcoin/840_560.jpeg",
            "publishedAt": "2023-03-10T18:01:32Z",
            "content": "Estados Unidos está dejando de ser el paraíso de las criptomonedas. Además de los movimientos de la SEC, ahora es la Administración Biden la que ha mostrado su propuesta. La principal medida que afec… [+1840 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks trade mixed as inflation concerns keep traders on edge over higher rates",
            "description": "The S&P 500 and the tech-heavy Nasdaq Composite were both on track for their second consecutive losing week.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-fed-outlook-interest-rates-2023-3",
            "urlToImage": "https://i.insider.com/63f8c9934ca0e30019ba4b45?width=1200&format=jpeg",
            "publishedAt": "2023-03-02T14:45:17Z",
            "content": "US stocks stocks were mixed on Thursday as traders continue to mull the prospect of higher interest rates amid signs the economy remains in high gear. \r\nAll three major indexes were on track for a lo… [+1519 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmohamed@businessinsider.com (Theron Mohamed)",
            "title": "Reddit cofounder Alexis Ohanian paid only $15,000 for ether worth $80 million today - and has made $50 million on the crypto and Coinbase stock",
            "description": "Ohanian bought 50,000 ether for about 30 cents a coin in 2014. The cryptocurrency has surged in price by about 5,600 times to $1,600 since then.",
            "url": "https://markets.businessinsider.com/news/currencies/reddit-alexis-ohanian-crypto-ether-coinbase-stock-blockchain-nft-metaverse-2023-2",
            "urlToImage": "https://i.insider.com/5f29b20c4e52b750cc095bcf?width=1200&format=jpeg",
            "publishedAt": "2023-02-22T17:05:05Z",
            "content": "Alexis Ohanian bought 50,000 ether for only $15,000 in 2014 and has made a combined $50 million from early bets on the cryptocurrency and Coinbase stock, he told Forbes in a recent interview.\r\nWhen h… [+1692 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "Elon Musk says there are similarities between the Silicon Valley Bank crisis and the 1929 Wall Street crash",
            "description": "\"Lot of current year similarities to 1929,\" Musk tweeted Tuesday in response to a thread by Ark Invest CIO Cathie Wood.",
            "url": "https://markets.businessinsider.com/news/stocks/elon-musk-stock-market-crash-svb-silicon-valley-bank-crisis-2023-3",
            "urlToImage": "https://i.insider.com/6411a389b6d9f200189125d9?width=1200&format=jpeg",
            "publishedAt": "2023-03-15T13:16:37Z",
            "content": "Elon Musk has warned that there are similarities between the collapse of Silicon Valley Bank last week and the crisis that sparked the 1929 Wall Street crash.\r\n\"Lot of current year similarities to 19… [+1660 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks shake off contagion fears to trade mixed amid hopes SVB crisis spurs Fed policy shift",
            "description": "\"We are looking at a historic 2-day drop in the 2-year yield, the largest since right after the 1987 crash,\" Carson Group's Ryan Detrick told Insider.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-regional-bank-contagion-fears-crisis-svb-2023-3",
            "urlToImage": "https://i.insider.com/624c427316e2c400196663ce?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T20:13:41Z",
            "content": "US stocks proved resilient on Monday, trading mixed despite the continued fallout from the collapse of Silicon Valley Bank and Signature Bank at the end of last week. \r\nHelping stocks recover from an… [+1297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Axel Kannenberg, mit Material der dpa",
            "title": "Bitcoin steigt auf höchsten Stand seit neun Monaten",
            "description": "Beflügelt die aktuelle Bankenkrise den Bitcoin und die anderen Kryptowährungen? Nach Kursschwäche in der vergangenen Woche geht es wieder rasant bergauf.",
            "url": "https://www.heise.de/news/Bitcoin-steigt-auf-hoechsten-Stand-seit-neun-Monaten-7550080.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/2/0/2/9/5/shutterstock_1888907947-54ebd2bafa9434e9.jpg",
            "publishedAt": "2023-03-17T18:05:00Z",
            "content": "Der Kryptomarkt hat am Freitag trotz angespannter Börsenstimmung weiter zugelegt. Der Bitcoin als nach Marktwert größte Kryptowährung stieg auf der Handelsplattform Bitstamp bis auf 27.025 US-Dollar,… [+2249 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Udo Brandes",
            "title": "heise+ | Node-RED: Daten über Netzwerkprotokolle abrufen",
            "description": "Node-RED kann Daten aus verschiedenen Quellen beziehen. Wir zeigen, wie das geht und wie Sie sich etwa Luftqualität und Bitcoin-Kurse abrufen können.",
            "url": "https://www.heise.de/ratgeber/Node-RED-Daten-ueber-Netzwerkprotokolle-abrufen-7521487.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/4/9/4/2/shutterstock_1514696930-cbf6ef8218c91a69.jpg",
            "publishedAt": "2023-03-07T06:30:00Z",
            "content": "Inhaltsverzeichnis\r\nNetzwerke bestehen grundsätzlich aus Geräten, die drahtlos oder kabelgebunden miteinander verbunden sind. Damit die Geräte in Beziehung treten können, brauchen sie eine Basis, auf… [+2898 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Axel Kannenberg, mit Material der dpa",
            "title": "Miese Stimmung am Kryptomarkt: Bitcoin fällt unter 20.000 US-Dollar",
            "description": "Nachdem die Kryptomärkte freundlicher ins Jahr gestartet waren, geht es nun wieder bergab. Das könnte unter anderem an Turbulenzen im US-Bankensektor liegen.",
            "url": "https://www.heise.de/news/Miese-Stimmung-am-Kryptomarkt-Bitcoin-faellt-unter-20-000-US-Dollar-7542461.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/6/1/4/0/shutterstock_709061209-930a4263b1a2f4ce.jpg",
            "publishedAt": "2023-03-10T15:27:00Z",
            "content": "Die schlechte Stimmung an den Finanzmärkten und weitere Negativfaktoren haben am Freitag für Kursverluste bei zahlreichen Kryptowährungen gesorgt. Der Bitcoin fiel unter die Marke von 20.000 US-Dolla… [+3062 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "John Naughton",
            "title": "Crypto is intended to be hard to regulate, but at least the Treasury wants to have a go | John Naughton",
            "description": "The government’s consultation document on cryptocurrency highlights the challenges that must be faced in the regulatory processFor my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage …",
            "url": "https://www.theguardian.com/commentisfree/2023/feb/25/crypto-is-intended-to-be-hard-to-regulate-but-at-least-the-treasury-wants-to-have-a-go",
            "urlToImage": "https://i.guim.co.uk/img/media/61b8dba17ab10f586222f5c41d20bcf48c460e42/0_213_4734_2841/master/4734.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=448de8728906b8d47d286ec5c6a7f188",
            "publishedAt": "2023-02-25T16:00:05Z",
            "content": "For my sins, I have been reading Future financial services regulatory regime for cryptoassets, 82 pages of prime Whitehall verbiage that was published recently, setting out HM Treasurys plans to gove… [+5792 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Axel Kannenberg",
            "title": "Bundesfinanzhof: Gewinne aus Kryptowährungen sind steuerpflichtig",
            "description": "Ein Kryptowährungsanleger wollte auf Millionengewinne keine Steuern zahlen und ist schließlich vorm Bundesfinanzhof damit gescheitert.",
            "url": "https://www.heise.de/news/Bundesfinanzhof-Gewinne-aus-Kryptowaehrungen-sind-steuerpflichtig-7531920.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/0/4/9/9/shutterstock_1937129161-91f75b37827ffe38.jpg",
            "publishedAt": "2023-03-01T13:48:00Z",
            "content": "Gewinne aus Kauf- und Tauschgeschäften mit Kryptowährungen unterliegen als private Veräußerungsgeschäfte der Einkommenssteuer, hat der Bundesfinanzhof geurteilt (BFH, Az.: IX R 3/22). Steuerfrei sind… [+2276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mullvad.net"
            },
            "author": null,
            "title": "Mullvad campaign against EU chat control",
            "description": "Mullvad is a VPN service that helps keep your online activity, identity, and location private. Only €5/month - We accept Bitcoin, cash, bank wire, credit card, PayPal, and Swish.",
            "url": "https://mullvad.net/en/chatcontrol/campaign",
            "urlToImage": "https://mullvad.net/press/MullvadVPN_logo_Round_RGB_Color_positive.png",
            "publishedAt": "2023-03-10T14:25:48Z",
            "content": "A democratic society is built upon discussions, before law proposals become reality. We started the conversation on the streets of Sweden, during the countrys EU presidency."
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Peter Charalambous",
            "title": "Man arrested after hiding cryptocurrency miner in school crawl space",
            "description": "A small Massachusetts town enlisted the help of the Department of Homeland Security to track down the person who illegally installed a cryptocurrency mining operation.",
            "url": "https://abcnews.go.com/US/massachusetts-man-charged-after-hiding-cryptocurrency-mining-rig/story?id=97440173",
            "urlToImage": "https://s.abcnews.com/images/US/cryptocurrency-mine-ht-thg-230224_1677245117035_hpMain_16x9_992.jpg",
            "publishedAt": "2023-02-24T17:02:35Z",
            "content": "A small Massachusetts town enlisted the help of the Department of Homeland Security to track down the person who illegally installed a cryptocurrency mining operation in a crawl space of a middle sch… [+1648 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: Geldanlage - Mona Linke",
            "title": "Bitcoin: Kann man noch guten Gewissens in Bitcoin investieren?",
            "description": "Das Image der Kryptowährungen ist angeschlagen. Ist das ein guter Zeitpunkt, um günstig einzusteigen – oder sollten Anleger die Finger davon lassen?",
            "url": "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2F2023%2F11%2Fbitcoin-investition-kryptowaehrungen-wallet",
            "urlToImage": null,
            "publishedAt": "2023-03-13T04:17:15Z",
            "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmaxwell@insider.com (Thomas Maxwell)",
            "title": "Inside the self-proclaimed first generative AI conference, executives explain why the hot new technology behind ChatGPT is 'not just hype, but something real'",
            "description": "Move aside, crypto: a new conference in San Francisco put a spotlight on the tech industry's new love: generative AI.",
            "url": "https://www.businessinsider.com/chatgpt-generative-ai-genai-jasper-conference-crypto-san-francisco-2023-2",
            "urlToImage": "https://i.insider.com/63f0287c5ca81e00185567d4?width=1200&format=jpeg",
            "publishedAt": "2023-02-18T11:50:00Z",
            "content": "\"It's a step forward in humanity,\" one VC said of generative AI. An executive compared it to the Gutenberg press. A CEO called the technology  \"not just hype, but something real.\" \r\nThat's how attend… [+5997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Zombie Newspaper Sites Rise from the Grave",
            "description": "What happens when a newspaper dies? Apparently, in some cases, its digital ghost lives on in mysterious, unrecognizable forms. From a report: Minneapolis neighborhood newspaper the Southwest Journal shuttered at the end of 2020, but its web domain continues t…",
            "url": "https://tech.slashdot.org/story/23/03/01/189239/zombie-newspaper-sites-rise-from-the-grave",
            "urlToImage": "https://a.fsdn.com/sd/topics/internet_64.png",
            "publishedAt": "2023-03-01T18:09:00Z",
            "content": "Minneapolis neighborhood newspaper the Southwest Journal shuttered at the end of 2020, but its web domain continues to post fresh content under the auspices of a Delaware \"SEO company\" whose leader l… [+2226 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "The chief executive of an AI-driven markets analytics company breaks down how to invest in the craze sparked by ChatGPT",
            "description": "Insider's Phil Rosen sits down with Jan Szilagyi, the CEO of Toggle AI, to discuss how markets are handling the artificial intelligence boom.",
            "url": "https://www.businessinsider.com/investing-ai-exec-markets-toggle-microsoft-google-amazon-tech-economy-2023-2",
            "urlToImage": "https://i.insider.com/63ef792fe083d60018efbeb2?width=1200&format=jpeg",
            "publishedAt": "2023-02-18T12:00:00Z",
            "content": "Happy Saturday readers. I'm senior reporter Phil Rosen.\r\nAs a journalist, I'm always keen on interesting conversations especially when I get the chance to share them in this newsletter. \r\nHave a sugg… [+5402 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "Crypto giant Tether faked key documents to set up bank accounts – and terrorists then used one of them to launder money, report says",
            "description": "Tether is a key player in crypto because it is the issuer of a dollar-pegged stablecoin with a $71 billion valuation.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-tether-stablecoin-issuer-money-laundering-turkish-terrorists-shell-companies-2023-3",
            "urlToImage": "https://i.insider.com/6405c031934c2c001802b4b2?width=1200&format=jpeg",
            "publishedAt": "2023-03-06T12:06:05Z",
            "content": "Crypto giant Tether used faked documents and shell companies to set up bank accounts in 2018  and one of those was then accessed by terrorists, according to a report.\r\nThe Wall Street Journal said Fr… [+2344 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks fall after new inflation data boosts outlook the Fed will stay aggressive",
            "description": "Stocks fell after hot PCE data. The two-year Treasury yield was nearing its highest level since 2007, ticking up to 4.8%.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-data-pce-fed-interest-rates-economy-2023-2",
            "urlToImage": "https://i.insider.com/62cdd6b3114c1e00187342da?width=1200&format=jpeg",
            "publishedAt": "2023-02-24T14:45:16Z",
            "content": "US stocks dipped on Friday as investors brace for a more hawkish Federal Reserve after key inflation data for January came in hotter than expected. \r\nCore Personal Consumption Expenditure data, the c… [+1921 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Dmitry Ivanov, CoinsPaid",
            "title": "Why this ‘winter’ won’t stop the growing crypto e-commerce adoption",
            "description": "From fast and inexpensive fees to secure transactions and a lack of chargebacks, crypto payments offer a multitude of benefits for retailers.",
            "url": "https://venturebeat.com/virtual/why-this-winter-wont-stop-the-growing-crypto-e-commerce-adoption/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2018/02/crypto-2-e1619080181909.jpg?w=1200&strip=all",
            "publishedAt": "2023-03-15T20:07:00Z",
            "content": "From flight tickets, salaries, and tuition fees to Subway sandwiches and Elon Musks perfume these days you can use crypto to cover most of your everyday expenses. Microsoft, Google, Starbucks and num… [+6857 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Nick Wolny",
            "title": "Can You Write Off Crypto Losses on Your Taxes? - CNET",
            "description": "Capital losses can help you lower your taxable income, but only under certain circumstances.",
            "url": "https://www.cnet.com/personal-finance/taxes/crypto-loss-tax-tips/",
            "urlToImage": "https://www.cnet.com/a/img/resize/1515e0687dffcafe9a451aef43f0838ef8a1eae4/hub/2023/02/14/3d4a9a9c-1451-47f0-8198-42cd658157e9/cash-money-stack-100s-green-grid.png?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2023-03-10T01:48:31Z",
            "content": "This story is part of Taxes 2023, CNET's coverage of the best tax software, tax tips and everything else you need to file your return and track your refund. \r\nLet's just say 2022 wasn't the best year… [+7248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Axel Kannenberg, Daniel AJ Sokolov, mit Material der dpa",
            "title": "Kryptowährungen: Polizei schaltet Geldwäschedienst Chipmixer ab",
            "description": "Laut BKA war es der umsatzstärkste Dienst für Geldwäsche mit Kryptowährungen. Jetzt hat es Chipmixer geschlossen.",
            "url": "https://www.heise.de/news/Kryptowaehrungen-Polizei-schaltet-Geldwaeschedienst-Chipmixer-ab-7547142.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/8/7/0/0/shutterstock_1065446786-cb2dcbd3aa3a2c18.jpg",
            "publishedAt": "2023-03-15T19:18:00Z",
            "content": "Inhaltsverzeichnis\r\nDeutsche und US-amerikanische Behörden haben mit Unterstützung von Europol den Dienst ChipMixer ins Visier genommen, einen in der cyberkriminellen Unterwelt bekannten Kryptowährun… [+4036 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Friedhelm Greis",
            "title": "Gerichtsurteil: Gewinne aus Bitcoin-Verkäufen sind steuerpflichtig",
            "description": "Der Bundesfinanzhof hat ein Grundsatzurteil zur Besteuerung von Kryptowährungsgeschäften gefällt. (Kryptowährung, Wirtschaft)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fgerichtsurteil-gewinne-aus-bitcoin-verkaeufen-sind-steuerpflichtig-2303-172304.html&referer=https%3A%2F%2Ft.co%2F1fca440b0b",
            "urlToImage": null,
            "publishedAt": "2023-03-02T09:21:03Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Alex Hern Technology editor",
            "title": "Near 50% fall in Silvergate’s shares over FTX exposure prompts survival doubts",
            "description": "Stock price of crypto-focused US bank plummeted in Thursday trading and it is assessing its ability to keep goingThe share price of cryptocurrency-focused US bank Silvergate plummeted by nearly 50% in early trading on Thursday after fresh revelations about th…",
            "url": "https://www.theguardian.com/technology/2023/mar/02/near-50-per-cent-fall-in-silvergate-shares-over-ftx-exposure-prompts-survival-doubts",
            "urlToImage": "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_52_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d655d90f79dbd960c66ce45a2b4d4646",
            "publishedAt": "2023-03-02T17:10:12Z",
            "content": "The share price of cryptocurrency-focused US bank Silvergate plummeted by nearly 50% in early trading on Thursday after fresh revelations about the extent of its exposure to the collapse of crypto ex… [+3079 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "bnguyen@insider.com (Britney Nguyen)",
            "title": "A couple in Canada were reportedly scammed out of $21,000 after getting a call from an AI-generated voice pretending to be their son",
            "description": "The couple reportedly received a call from someone claiming to be a lawyer, saying their son was in jail for killing a diplomat in a car accident.",
            "url": "https://www.businessinsider.com/couple-canada-reportedly-lost-21000-in-ai-generated-voice-scam-2023-3",
            "urlToImage": "https://i.insider.com/64063842934c2c001802c680?width=1200&format=jpeg",
            "publishedAt": "2023-03-06T19:40:27Z",
            "content": "A couple in Canada were reportedly scammed out of $21,000 after they received a call from someone claiming to be a lawyer who said their son was in jail for killing a diplomat in a car accident.\r\nBen… [+3094 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "hbullock@insider.com (Hallam Bullock)",
            "title": "Signature Bank and Silicon Valley Bank's turmoil is what happens when easy money runs out - and this could be just the beginning",
            "description": "Insider's Phil Rosen breaks down the collapse of two banks in three days and what Wall Street experts are saying about the turmoil.",
            "url": "https://www.businessinsider.com/silicon-valley-bank-signature-fed-inflation-monetary-policy-financial-markets-2023-3",
            "urlToImage": "https://i.insider.com/640ba50cd81e7e0018be117d?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T11:00:00Z",
            "content": "Phew. Hey there. Senior reporter Phil Rosen here. Before we jump into the newsletter, the Silicon Valley Bank saga is continuing to unfold, so let's quickly break down the latest.\r\nThe big story this… [+6426 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iwillteachyoutoberich.com"
            },
            "author": "Steven Young",
            "title": "We messed up. An apology from Ramit",
            "description": "I want to apologize for yesterday’s email. If you’re subscribed to I Will Teach You To Be Rich, you received this email yesterday. I see a lot of things wrong in that email. “Guaranteed to beat.” (no, nothing is guaranteed in investing) “People have always be…",
            "url": "https://www.iwillteachyoutoberich.com/we-messed-up-an-apology-from-ramit/",
            "urlToImage": "https://iwtoldproddev.wpengine.com/wp-content/uploads/Screen-Shot-2017-11-13-at-8.40.34-PM-e1510691998560.png",
            "publishedAt": "2023-02-27T10:41:55Z",
            "content": "I want to apologize for yesterdays email.\r\nIf youre subscribed to I Will Teach You To Be Rich\r\n, you received this email\r\n yesterday.\r\nI see a lot of things wrong in that email.\r\n<ul><li>Guaranteed t… [+8788 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmohamed@businessinsider.com (Theron Mohamed)",
            "title": "Billionaire investor Ray Dalio says portfolios are like casinos - and crypto hype is overblown. Here are his 7 best quotes from a new interview.",
            "description": "The Bridgewater Associates founder said investing is a zero-sum game like poker, and compared life to a video game and lessons to precious gems.",
            "url": "https://markets.businessinsider.com/news/stocks/ray-dalio-bridgewater-bitcoin-crypto-markets-portfolios-principles-billionaires-lessons-2023-2",
            "urlToImage": "https://i.insider.com/632084c689d2b3001894ce34?width=1200&format=jpeg",
            "publishedAt": "2023-02-20T16:05:06Z",
            "content": "Ray Dalio compared markets to poker and portfolios to casinos in a recent episode of the Richer, Wiser, Happier podcast.\r\nThe billionaire investor and Bridgewater Associates founder questioned crypto… [+2531 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Hadrien Augusto",
            "title": "Sur fond de risque systémique, le Bitcoin à son plus haut en 2023",
            "description": "Le rallye se poursuit pour Bitcoin depuis dimanche, date du plus gros défaut bancaire américain depuis 2008.",
            "url": "https://www.presse-citron.net/risque-systemique-bitcoin-a-son-plus-haut-en-2023/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2021/04/Un-Bitcoin.jpg",
            "publishedAt": "2023-03-14T14:56:54Z",
            "content": "Hélicoptère monétaire, hausse des taux directeurs, défaut bancaire le retour du Bitcoin pour cette semaine prend des proportions de plus en plus grosses. La première crypto-monnaie na pas fait les ch… [+3395 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Daniel Ziegener",
            "title": "Silicon Valley Bank: Bitcoin-Kurs steigt nach Rettungsaktion um 20 Prozent an",
            "description": "Nicht nur Anleger der insolventen Silicon Valley Bank, auch Investoren in Kryptowährung konnten vom Eingreifen der US-Regierung profitieren. (Bitcoin, Silicon Valley)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fsilicon-valley-bank-bitcoin-kurs-steigt-nach-rettungsaktion-um-20-prozent-an-2303-172608.html&referer=https%3A%2F%2Ft.co%2Ff47c171aa6",
            "urlToImage": null,
            "publishedAt": "2023-03-14T09:23:03Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: Digital - Leon Holly",
            "title": "ChipMixer: Ermittler schließen größten Geldwäschedienst im Darknet",
            "description": "Etwa 2,8 Milliarden Euro sollen über die Plattform ChipMixer gewaschen worden sein. Nun haben deutsche Beamte die Server beschlagnahmt – und 44 Millionen Euro in Bitcoin.",
            "url": "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fdigital%2F2023-03%2Fchipmixer-geldwaesche-darknet-server-geschlossen",
            "urlToImage": null,
            "publishedAt": "2023-03-15T14:14:37Z",
            "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
        },
        {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Kryptowährung: Bitcoin steigt auf höchsten Stand seit neun Monaten",
            "description": "",
            "url": "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fnews%2F2023-03%2F17%2Fbitcoin-steigt-auf-hoechsten-stand-seit-neun-monaten",
            "urlToImage": null,
            "publishedAt": "2023-03-17T15:23:53Z",
            "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "Silvergate cierra: adiós al prestamista que se reconvirtió en uno de los mayores criptobancos del mundo",
            "description": "Llega el final para Silvergate. El criptobanco ha anunciado su cierre voluntario, tras no poder superar el impacto de la caída de FTX, con la que mantenía profundos lazos. Según deja claro la organización, el banco devolverá al completo todos los depósitos.\n<…",
            "url": "https://www.xataka.com/criptomonedas/silvergate-cierra-adios-al-prestamista-que-se-reconvirtio-uno-mayores-criptobancos-mundo",
            "urlToImage": "https://i.blogs.es/5c2bd3/silvergate/840_560.jpeg",
            "publishedAt": "2023-03-09T11:01:22Z",
            "content": "Llega el final para Silvergate. El criptobanco ha anunciado su cierre voluntario, tras no poder superar el impacto de la caída de FTX, con la que mantenía profundos lazos. Según deja claro la organiz… [+2414 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "El entusiasmo de Meta por los NFT ha durado menos de un año: Facebook e Instagram les han dicho adiós",
            "description": "El 9 de mayo de 2022, en medio de la fiebre de los NFT, Mark Zuckerberg anunciaba que Meta abrazaría a los tokens no fungibles. En una entrevista con el youtuber Tom Bilyeu, el CEO de la empresa de redes sociales aseguraba que los denominados “artículos colec…",
            "url": "https://www.xataka.com/criptomonedas/entusiasmo-meta-nft-ha-durado-ano-facebook-e-instagram-les-han-dicho-adios",
            "urlToImage": "https://i.blogs.es/fc1786/nft-instagram-coleccionables-adios-1/840_560.jpeg",
            "publishedAt": "2023-03-13T23:17:14Z",
            "content": "El 9 de mayo de 2022, en medio de la fiebre de los NFT, Mark Zuckerberg anunciaba que Meta abrazaría a los tokens no fungibles. En una entrevista con el youtuber Tom Bilyeu, el CEO de la empresa de r… [+2379 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Daniel Szöke",
            "title": "Nostr: Eine Alternative zu Twitter – und Mastodon",
            "description": "Eine Nachricht verfassen, mit einem privaten Schlüssel signieren und zu mehreren Servern schicken: Nostr soll datenschutzfreundlich und zensurfrei sein.",
            "url": "https://www.heise.de/news/Nostr-Eine-Alternative-zu-Twitter-und-Mastodon-7537313.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/3/3/4/6/shutterstock_1914595666-50b27c7327376758.jpg",
            "publishedAt": "2023-03-09T13:30:00Z",
            "content": "Bei dem Github-Projekt Nostr handelt es sich um ein offenes Protokol, mit dem Nutzer signierte Nachrichten senden und empfangen können. Nostr ist ein Akronym für \"Notes and Other Stuff Transmitted by… [+3840 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Bram Berkowitz)",
            "title": "Why Bitcoin, Ethereum, and Bitcoin Cash Are Surging This Week",
            "description": "Cryptocurrencies bucked the broader market this week and zoomed higher.",
            "url": "https://www.fool.com/investing/2023/03/16/why-bitcoin-ethereum-and-bitcoin-cash-are-surging/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724907/generic-upward-15.jpg",
            "publishedAt": "2023-03-16T18:15:28Z",
            "content": "What happened\r\nCryptocurrencies are having a banner week, despite chaos in the broader market, especially in the banking sector, which is likely due to the fact that many see cryptocurrencies as an a… [+2987 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MIT Technology Review"
            },
            "author": "Amy Castor",
            "title": "Ethereum moved to proof of stake. Why can’t Bitcoin?",
            "description": "Tech Review Explains: Let our writers untangle the complex, messy world of technology to help you understand what’s coming next. You can read more here. Last year, Ethereum went green. The second-most popular crypto platform transitioned to proof of stake, an…",
            "url": "https://www.technologyreview.com/2023/02/28/1069190/ethereum-moved-to-proof-of-stake-why-cant-bitcoin/",
            "urlToImage": "https://wp.technologyreview.com/wp-content/uploads/2023/02/bitcoin-mining1b.jpeg?resize=1200,600",
            "publishedAt": "2023-02-28T09:30:00Z",
            "content": "Bitcoin mining, the computationally intensive process by which bitcoin is created and accounted for, has become a global concern. After China cracked down on bitcoin mining in mid-2021, miners sought… [+3387 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Anders Bylund)",
            "title": "Why Bitcoin Miner Stocks Soared This Week",
            "description": "Bitcoin mining company stocks have soared this week, amplifying the gains of Bitcoin itself. Here's what's going on.",
            "url": "https://www.fool.com/investing/2023/03/17/why-bitcoin-miner-stocks-soared-this-week/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724983/assembling-bitcoin-mining-rig.jpeg",
            "publishedAt": "2023-03-17T11:00:00Z",
            "content": "What happened\r\nCryptocurrencies soared this week. According to data from S&amp;P Global Market Intelligence, Bitcoin(BTC 7.52%) led the way, with a 22.2% price gain from the stock market's closing be… [+3392 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "FTX might not have been the only crypto exchange using customer money for other things",
            "description": "Insider's Phil Rosen explains how Binance is coming under scrutiny for its shuffling of customer funds in a way that's strikingly Sam Bankman-Fried's failed exchange.",
            "url": "https://www.businessinsider.com/ftx-shady-crypto-binance-customer-funds-investors-markets-tokens-busd-2023-3",
            "urlToImage": "https://i.insider.com/63ffaae7bb1d0b0018876e87?width=1200&format=jpeg",
            "publishedAt": "2023-03-02T11:05:00Z",
            "content": "Happy Friday eve, Opening Bell crew. Senior reporter Phil Rosen here. \r\nAs if the universe knew that I hadn't written a crypto newsletter in some time, here we go: Binance, the world's largest crypto… [+5366 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Reddit-loving retail investors are making their chaotic presence felt again - and their risky behavior is fueling a stock rally that doesn't look sustainable",
            "description": "Day traders are reviving the meme-stock playbook with big bets on speculative names.",
            "url": "https://markets.businessinsider.com/news/stocks/next-stock-market-crash-reddit-day-trader-risky-retail-investing-2023-2",
            "urlToImage": "https://i.insider.com/63f61a425ca81e001855afce?width=1200&format=jpeg",
            "publishedAt": "2023-02-23T10:00:00Z",
            "content": "Retail investors are partying like it's 2021. \r\nThe everyday traders that powered the meme-stock frenzy of two years ago are back, rebuffing Fed Chair Jerome Powell's hawkishness and helping push equ… [+4991 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "ddefrancesco@businessinsider.com (Dan DeFrancesco)",
            "title": "The winners and losers of the Silicon Valley Bank failure",
            "description": "Silicon Valley Bank's failure set off waves of knock-on effects and also left a massive hole in the industry. Here's who is up and down as a result.",
            "url": "https://www.businessinsider.com/silicon-valley-bank-failure-bailout-winners-losers-2023-3",
            "urlToImage": "https://i.insider.com/640c62ec8b8d9b0018cacdc3?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T19:23:50Z",
            "content": "In times of crisis on Wall Street, one must ask: Who is winning, and who is losing?\r\nDepending on where you stand, the unfortunate/fortunate reality of finance is that it is a zero-sum game. When one… [+5497 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Silicon Valley Bank and inflation complicate the Fed’s next move",
            "description": "Insider's Phil Rosen explains how the latest CPI data and ongoing bank crisis impact the Fed's policy path.",
            "url": "https://www.businessinsider.com/silicon-valley-bank-inflation-cpi-fed-rate-hike-signature-crisis-2023-3",
            "urlToImage": "https://i.insider.com/63650f01ff27460018ed955a?width=1200&format=jpeg",
            "publishedAt": "2023-03-15T10:20:00Z",
            "content": "Howdy team. Senior reporter Phil Rosen here. \r\nEveryday now we've been talking about Silicon Valley Bank SVB and I've had to catch myself several times from saying SBF Sam Bankman-Fried the guy behin… [+5016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Dominic Basulto)",
            "title": "What Do New Crypto Mining Taxes Mean For Bitcoin?",
            "description": "While Bitcoin miners would likely suffer from a new 30% tax on operations, the outlook is much more uncertain for the price of Bitcoin.",
            "url": "https://www.fool.com/investing/2023/03/14/what-do-new-crypto-mining-taxes-mean-for-bitcoin/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724432/bitcoin-hit-by-lightning-crypto.jpg",
            "publishedAt": "2023-03-14T09:13:00Z",
            "content": "In early March, the U.S. Treasury announced plans to impose a 30% tax on U.S.-based crypto mining operations. Moreover, the U.S. Treasury signaled that, moving forward, all crypto mining companies wi… [+5496 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MIT Technology Review"
            },
            "author": "Rhiannon Williams",
            "title": "The Download: making Bitcoin greener, and Elon Musk’s chatbot plans",
            "description": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Ethereum moved to proof of stake. Why can’t Bitcoin?  Last year, Ethereum went green. The second-most popular crypto plat…",
            "url": "https://www.technologyreview.com/2023/02/28/1069215/download-making-bitcoin-greener-elon-musk-chatbot-plans/",
            "urlToImage": "https://wp.technologyreview.com/wp-content/uploads/2023/02/bitcoin-mining1b.jpeg?resize=1200,600",
            "publishedAt": "2023-02-28T13:10:00Z",
            "content": "Last year, Ethereum went green. The second-most popular crypto platform transitioned to proof of stake, an energy-efficient framework for adding new blocks of transactions, NFTs, and other informatio… [+1044 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Andreas Knobloch",
            "title": "Krypto-Hack: 200 Millionen US-Dollar von Krypto-Kreditplattform gestohlen",
            "description": "Hacker haben dem Krypto-Kreditgeber Euler Finance Millionen US-Dollar in Kryptoassets gestohlen. Dieser verspricht Aufklärung und fahndet nach den Geldern.",
            "url": "https://www.heise.de/news/Krypto-Hack-200-Millionen-US-Dollar-von-Krypto-Kreditplattform-gestohlen-7544509.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/7/2/4/8/shutterstock_1767015074-5461a8513a9a9da7.jpg",
            "publishedAt": "2023-03-13T20:05:00Z",
            "content": "Hacker haben der Krypto-Kreditplattform Euler Finance rund 197 Millionen US-Dollar in Kryptowährungen gestohlen. Das berichtet am Montag das Online-Nachrichtenportal TechCrunch.\r\nDem Bericht zufolge … [+2239 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Tesla, Markets, Bitcoin, and Deere (Podcast)",
            "description": "Understand every aspect of the global economy – and know how to make your next move.",
            "url": "https://www.bloomberg.com/news/audio/2023-02-17/tesla-markets-bitcoin-and-deere-podcast",
            "urlToImage": null,
            "publishedAt": "2023-02-17T16:42:02Z",
            "content": "Kevin Tynan, Senior Autos Analyst with Bloomberg Intelligence, joins the program to discuss recent Tesla news and AutoNation earnings. Omar Aguilar, CEO and CIO at Schwab Asset Management, joins the … [+579 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Daniel Szöke",
            "title": "Robinhood bringt Krypto-Wallet fürs Web3",
            "description": "Ethereum, Polygon und über 50 weitere ERC20-Tokens können Nutzer in der iOS-App senden und empfangen. Die Wallet ist \"Non-Custodial\".",
            "url": "https://www.heise.de/news/Robinhood-bringt-Krypto-Wallet-fuers-Web3-7532815.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/0/9/7/6/shutterstock_1906639801-5c948d032c2f1eb3.jpg",
            "publishedAt": "2023-03-03T11:51:00Z",
            "content": "Das amerikanische Fintech-Unternehmen Robinhood veröffentlicht eine Krypto-Wallet für iOS-Geräte, welche die privaten Schlüssel lokal speichern soll. Die Robinhood Wallet ist erst einmal nur für iOS … [+1745 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marginalrevolution.com"
            },
            "author": "Tyler Cowen",
            "title": "Not your grandfather’s crypto?",
            "description": "“Crypto prices soar on support for depositors” (FT) Bitcoin and ether jump 20% in the last three days after US authorities intervene I’ve said it before and I’ll say it again.  Crypto is a “luxury,” long-term financial intermediation project which may or may …",
            "url": "https://marginalrevolution.com/marginalrevolution/2023/03/not-your-grandfathers-crypto.html",
            "urlToImage": "https://marginalrevolution.com/wp-content/uploads/2016/10/MR-logo-thumbnail.png",
            "publishedAt": "2023-03-15T06:28:11Z",
            "content": "“Crypto prices soar on support for depositors” (FT)\r\nBitcoin and ether jump 20% in the last three days after US authorities intervene\r\nI’ve said it before and I’ll say it again.  Crypto is a “luxury,… [+210 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wired.jp"
            },
            "author": "Joel Khalili",
            "title": "生き残りをかけたビットコイン採掘者が直面、“危険なチキンレース”の中身",
            "description": "ビットコインの価格低迷に加え、エネルギーコストの高騰と採掘の難易度の上昇で暗号資産業界は大打撃を受けている。2024年4月には採掘で受け取れる報酬が減少する半減期も控えるなか、採掘者たちは生き残りをかけたチキンレースに挑んでいる。",
            "url": "https://wired.jp/article/bitcoin-mining-halving-crypto-winter/",
            "urlToImage": "https://media.wired.jp/photos/63f2c51861a43ec23c214203/16:9/w_1280,c_limit/Biz-data-mining-934468788.jpg",
            "publishedAt": "2023-02-21T23:00:00Z",
            "content": "Argo BlockchainStronghold Digital Mining\r\nSabre56CEO1020\r\n21Hut 8CEO\r\nHut 8US Bitcoin\r\nHut 81US Bitcoin\r\nUS Bitcoin\r\nBitfarms2116,5002221618\r\nBitfarms226232BlockFi2,10028775104,000Bitfarms"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (David Moadel)",
            "title": "Do This Before Bitcoin Skyrockets",
            "description": "Just because an asset is already pricey doesn't mean it can't make a multibagger move.",
            "url": "https://www.fool.com/investing/2023/03/07/do-this-before-bitcoin-skyrockets/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/723217/btc-bitcoin-coin-cryptocurrency-crypto-digital-assets-cryptocurrencies-cryptos-electronic-currency.jpg",
            "publishedAt": "2023-03-07T18:49:00Z",
            "content": "Bracing for a crypto comeback? Consider buying the granddaddy of cryptocurrencies, Bitcoin (BTC -0.48%), if you're bullish on blockchain-based tokens generally. After all, crypto is already volatile … [+4155 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Emmanuel Musa",
            "title": "The 6 Best Monero (XMR) Wallets",
            "description": "Using Monero? These are the best Monero wallets to help you store, manage, and send your XMR.",
            "url": "https://www.makeuseof.com/best-monero-xmr-wallets/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/monero-coin.jpg",
            "publishedAt": "2023-02-27T13:16:16Z",
            "content": "Monero (XMR) is a privacy-centric digital currency. Since its creation in 2014, Monero's adoption and popularity have grown due to its enhanced privacy features.\r\nMonero wallets are designed for user… [+6281 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "A Look Behind The Celsius Curtain (Podcast)",
            "description": "Each weekday, stacy-marie ishmael dives into everything from Bitcoin to Bored Apes, NFT’s to DeFi, Staking to Web3.",
            "url": "https://www.bloomberg.com/news/audio/2023-02-28/a-look-behind-the-celsius-curtain-podcast",
            "urlToImage": null,
            "publishedAt": "2023-02-28T09:23:53Z",
            "content": "Bloomberg Crypto Podcast Browse all episodesThe story of crypto lender Celsius Networks bankruptcy officially began last summer, when it filed for Chapter 11 and cited a severe liquidity crisis. At t… [+937 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "The Latest on Bitcoin, FTX and Coinbase (Podcast)",
            "description": "Each weekday, stacy-marie ishmael dives into everything from Bitcoin to Bored Apes, NFT’s to DeFi, Staking to Web3.",
            "url": "https://www.bloomberg.com/news/audio/2023-02-24/the-latest-on-bitcoin-ftx-and-coinbase-podcast",
            "urlToImage": null,
            "publishedAt": "2023-02-24T09:22:49Z",
            "content": "Each weekday, stacy-marie ishmael dives into everything from Bitcoin to Bored Apes, NFTs to DeFi, Staking to Web3. Bloomberg Crypto, from Bloomberg and iHeart Radio, goes deeper than the daily market… [+64 chars]"
        },
        {
            "source": {
                "id": "t3n",
                "name": "T3n"
            },
            "author": "Jörn Brien",
            "title": "Bitcoin stürzt auf unter 20.000 Dollar – und das sind die Gründe",
            "description": "Der Kurs des Bitcoin ist in der Nacht zu Freitag um acht Prozent eingebrochen und unter die Marke von 20.000 US-Dollar gefallen. Auch andere Kryptowährungen sowie die Aktienmärkte gaben kräftig nach. Die Gründe dafür sind vielfältig. Tiefrot präsentiert sich …",
            "url": "https://t3n.de/news/bitcoin-kurs-rueckgang-gruende-1540570/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2022/10/Broken-Bitcoin.jpg",
            "publishedAt": "2023-03-10T17:24:14Z",
            "content": "Tiefrot präsentiert sich der Kryptomarkt am Freitag, 10. März 2023. Der Bitcoin-Kurs gab um acht Prozent nach und rutschte unter die Marke von 20.000 Dollar. Ähnlich hohe Verluste verbuchten auch die… [+3609 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "2022 Was a Good Year for Crypto Hackers (Podcast)",
            "description": "Each weekday, stacy-marie ishmael dives into everything from Bitcoin to Bored Apes, NFT’s to DeFi, Staking to Web3.",
            "url": "https://www.bloomberg.com/news/audio/2023-02-23/2022-was-a-good-year-for-crypto-hackers-podcast",
            "urlToImage": null,
            "publishedAt": "2023-02-23T09:16:13Z",
            "content": "Bloomberg Crypto Podcast Browse all episodesWant to hear a big number? How about $3.8 billion. Thats the amount of crypto that hackers managed to steal last year. Thats a new record. The company behi… [+771 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iwillteachyoutoberich.com"
            },
            "author": "Steven Young",
            "title": "High Risk vs. Low Risk Investing (The Reality)",
            "description": "Life isn’t just about target date funds and index funds. Lots of people understand that, logically, they should create a well-diversified portfolio of low-cost funds. But they also want to have fun investing. If you feel this way, sure, use a small part of yo…",
            "url": "https://www.iwillteachyoutoberich.com/high-risk-vs-low-risk-investing/",
            "urlToImage": null,
            "publishedAt": "2023-02-27T11:55:19Z",
            "content": "Life isnt just about target date funds and index funds. Lots of people understand that, logically, they should create a well-diversified portfolio of low-cost funds. But they also want to have fun in… [+8898 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Leo Sun)",
            "title": "Where Will Marathon Digital Stock Be in 1 Year?",
            "description": "The Bitcoin mining company faces some near-term challenges.",
            "url": "https://www.fool.com/investing/2023/03/15/where-will-marathon-digital-stock-be-in-1-year/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724692/bitcoin-tokens.jpg",
            "publishedAt": "2023-03-15T13:03:20Z",
            "content": "In late 2020, Marathon Digital(MARA 6.42%) transformed from a patent holding company into a Bitcoin(BTC -3.08%) mining one. It abandoned its original business model, poured all of its cash into Bitco… [+4766 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Review: Yubico's 5C NFC YubiKey Works Well With Apple's Security Keys Feature",
            "description": "With the launch of iOS 16.3 and macOS 13.2 Ventura, Apple added Security Keys for the Apple ID, offering a more robust way to protect your Apple account and everything associated with your Apple account.\n\n\n\n\n\nA Security Key is a physical device that works wit…",
            "url": "https://www.macrumors.com/review/yubikey-5c-nfc/",
            "urlToImage": "https://images.macrumors.com/t/I7RtipzjsBHjZC5jsl0h58bxxh4=/1600x/article-new/2023/03/yubico-5c-nfc.jpg",
            "publishedAt": "2023-03-17T19:10:00Z",
            "content": "With the launch of iOS 16.3 and macOS 13.2 Ventura, Apple added Security Keys for the Apple ID, offering a more robust way to protect your Apple account and everything associated with your Apple acco… [+7125 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Katie Rees",
            "title": "The 12 Main Pros and Cons of Crypto Explained",
            "description": "Getting into crypto isn't clear-cut, so we've summarized the reasons why you and why you shouldn't.",
            "url": "https://www.makeuseof.com/pros-cons-of-crypto-summarized/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/gold-btc-dog-eth.jpg",
            "publishedAt": "2023-03-04T11:15:15Z",
            "content": "Cryptocurrency is an undeniably controversial kind of asset. While some love the crypto space and have invested thousands in the industry, others steer clear of crypto altogether, believing it to be … [+9071 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "Hacienda tiene claro cómo debe perseguir el fraude en 2023: siguiendo el rastro de las criptomonedas",
            "description": "La Agencia Tributaria de España ha disparado contra las criptomonedas. A través del anuncio del nuevo Plan Anual de Control Tributario, Hacienda ha confirmado que una de las novedades que pretende reforzar en 2023 es la persecución de las criptomonedas y mone…",
            "url": "https://www.xataka.com/criptomonedas/hacienda-tiene-claro-como-debe-perseguir-fraude-2023-siguiendo-rastro-criptomonedas",
            "urlToImage": "https://i.blogs.es/5eb15d/bitcoin-hacienda/840_560.jpeg",
            "publishedAt": "2023-03-03T10:01:38Z",
            "content": "La Agencia Tributaria de España ha disparado contra las criptomonedas. A través del anuncio del nuevo Plan Anual de Control Tributario, Hacienda ha confirmado que una de las novedades que pretende re… [+3343 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Dominic Basulto)",
            "title": "Should You Buy Bitcoin While It's Still Below $25,000?",
            "description": "For investors taking a long-term approach to the crypto market, Bitcoin's current price looks like an incredible bargain.",
            "url": "https://www.fool.com/investing/2023/03/03/should-you-buy-bitcoin-below-25000/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/723062/gold-coin-with-bitcoin-symbol-on-it-cryptocurrency-btc.jpg",
            "publishedAt": "2023-03-03T11:55:00Z",
            "content": "For the first two months of 2023, Bitcoin(BTC -4.50%) has been on a remarkable run. It's now up 41.45% for the year, and trades at just over $23,479. But there are signs that Bitcoin is running out o… [+4164 chars]"
        }
    ]
    constructor() {
        super();
        console.log('Helo from news component')
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    
    render() {
        return (
            <div className='container my-3'>
                <h2>The True News - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="title" description="desc" imageUrl="https://i.guim.co.uk/img/media/7d4c6338f308acf75aad5b8256ccb757d43fa619/0_59_3500_2102/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=69408c4bcf4064af105d1f905493dbd2" newsUrl="TODO" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="title" description="desc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="title" description="desc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News