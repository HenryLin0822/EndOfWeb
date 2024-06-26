module.exports = {
  title: ['2000級 陳俊仰（Grindr President & CTO）'],
  hashtags: [
    '系友專訪',
    '陳俊仰',
    '2000級',
    'B85',
    'Caltech',
    'Facebook',
    'Instagram',
    'Grindr',
    'President',
    'CTO',
  ],
  sections: [
    {
      bigtitle: '一、前言',
      sections: [
        {
          title: '',
          section:
            '陳俊仰學長在從台大電信所（通訊組）畢業後，在 Caltech 唸了五年 PhD，研究領域是通訊和雷達的信號處理。從 Caltech 畢業後進入 Facebook，目前在世界最大的同志交友平台 Grindr 擔任總裁兼技術長。學長經營了一個部落格，紀錄了唸 PhD 時的生活點滴，以及進入職場後的觀察。 ',
        },
      ],
    },
    {
      bigtitle: '二、Life at Facebook',
      sections: [
        {
          title: ' 契機：「誤打誤撞」進入軟體業第一志願',
          section:
            '2009 年博士班畢業時，美國處於全球金融危機的浪潮中，以外國人的身份在當地找工作格外困難。那時候同樣在 Caltech 有四位台灣同學，後來三位回去台灣（其中兩位目前從事教職）。當時我的目標很明確──留在美國工作，所以去應徵了很多家公司。我的專長是通訊和雷達的信號處理，最初找工作時也想進入相關的產業，但是通訊方面（例如：無線通訊 IC 廠）職缺不多，新鮮人的工作機會更少，而雷達方面雖較不受景氣影響，但是國防相關的工作外國人無法從事。了解就業市場中愈偏應用層工作機會愈多，軟體又比硬體多的事實後，我下定決心，花兩個月學習演算法和資料結構等知識，也解一些 puzzles 練習寫些演算法類的程式最後有收到錄取通知的包括：Google、Facebook、Microsoft 三家。選擇 Facebook 其實單純就是底薪比較多，當時還看不懂股權，後來才知道那是最有價值的，單純就只看了底薪就做了這個決定，幸好沒有選錯！我還不知道 Facebook 當時在美國已經是軟體工作的第一志願。',
        },
        {
          title: '從 Data Infrastructure 到 People Search，Instagram 到 AI Team',
          section:
            '我在 Facebook 的經驗非常的多樣性，從最底層的大數據基礎一直到針對用戶的產品和用戶增長我都接觸過。剛加入 Facebook 時的第一個組是 Data Infrastructure Team，這組管的是大數據的存儲和計算，我參予了數據可靠度和分散式計算的開發。當時 Hadoop 有一個主節點負責分發計算任務，在 Facebook 的超大規模之下，一個主節點要管理三、四千台計算節點，當時這是最大的 Hadoop 機群了，這使得主節點因負荷不了而形成瓶頸。於是我們在上面多分一層管理資源，使得計算分派可以用多個節點實現，開發這個專案讓我寫了很多程式，深度了解了分散式系統，很有成就感。之後我轉組到 Search 團隊，因為我想要做一個接近用戶的產品，這時候我也開始從技術慢慢轉型成管理職，最後我成了 People Search 團隊的經理，在這段期間我學到搜索系統的實現：從怎麼用數據建立索引，一直到怎麼用機器學習優化排序，也學到怎麼開發一個針對用戶的產品，我還開發了給Search 用的 AB 測試平台，我在這個團隊的時候還帶領團隊來過台灣做用戶研究，看台灣人怎麼用Facebook找人。後來在我管的 Search 團隊中有個人轉組去剛剛收購的 Instagram，從他得知 Instagram 正在招一名廣告工程的經理，我一直很想學習廣告，也就是 Facebook 這家公司的核心業務，加上 Instagram 正在初始階段，我就從 Facebook Search 離開，加入了 Instagram。在 Instagram 期間人事變動非常快速，我上半年管的是廣告工程團隊，下半年改成管理用戶增長團隊。用戶增長的知識對後來加入其他公司非常有幫助。最後在 Facebook 待的團隊是 Facebook Core Machine Learning Team。這跟另外一個 Facebook AI Research Team, FAIR （led by Yann LeCun）最大的差別是前者主要做應用，後者以發表學術論文為目標。在這個團隊，我才真正用上 PhD 習得的知識，每天都會讀幾篇機器學習的論文，不停的學習。這團隊在 Facebook 中是非常關鍵的，負責開發廣告和動態消息的機器學習演算法，常常一個小改變就可以幫公司帶來上億美金的收入增加，非常受到重視，當時我的座位就在 Sheryl Sandberg 隔壁桌，可見團隊的重要性，團隊之中有很多學問和實作能力都非常強的人，讓我學到很多。',
        },
        {
          title: '「換組」：看遍公司主要業務，提升溝通基礎',
          section:
            '在 Facebook 換組很正常，好處是可以了解各項主要業務，多元的經驗讓與不同組同事溝通的過程更加順利。早年 Facebook 規模比較小，組織較扁平，現在規模變大後分工也變得比較細，以前一個人要做的事，現在有十個人一起做。隨著公司大規模成長，要在不同部門間轉換，熟悉多種業務的機會也變少了。當初在 Facebook 不同組學到的事情，對我後來的工作也很有幫助。現在工作上不論是用戶增長、廣告、做實驗、用戶研究、甚至是大數據或是運維，我都能和團隊溝通和討論，靠的就是當初在 Facebook 的歷練。',
        },
      ],
    },
    {
      bigtitle: '三、在CS組的經驗分享',
      sections: [
        {
          title: 'Why CS?',
          section:
            '在過去的世代，最大的企業是生產油公司和生產車的公司，而這個世代市值最高的前幾家公司都是軟體服務公司。原因是網路在各方面大幅度增加了人們的效率，人們現今可以在網路上上快速且大量地交換資訊。網路也讓各類交易成本大幅下降，讓人類的生活變得更有效率。我估計未來幾年對人類生活大幅影響的還是軟體公司，媒體和娛樂、電子商務、交通和住宿，這一波革命還會持續一段時間。',
        },
        {
          title: '軟體業求職建議',
          section:
            '台灣的學校環境很奇妙，科系要招多少人，不是由市場決定的，所以經常與產業發展近況脫節；很多教授沒有業界經驗，只重視發表學術論文。學生要藉由實習或出國，才會看到業界較多的面向。不過美國產學脫節的情形也跟台灣差不多，尤其 PhD，我自己做研究的時候，我感覺學術界和產業界是非常不相關的（至少在我在的通訊領域是這樣）。Facebook 很重視實習生，會讓他們解決 bug、做實驗、最後他們的成果會直接到用戶手中。很多實習生都以去我那組為第一志願（Core Machine Learning Team）。但是我覺得進 Facebook 應該把握機會去看其他的業務，像是用戶增長或廣告。雖然這些工作用到的技術層面沒有那麼高，但是能學習到一家公司的商業邏輯和核心的產品，我覺得比學習機器學習更難得。',
        },
      ],
    },
    {
      bigtitle: '四、給學弟妹的建議',
      sections: [
        {
          title: ' 在FB 工作的人有很多人是 PhD 嗎？大概有多少人是研究所或大學畢業？',
          section:
            '每個組不一樣，像 ML、search team 就很多 PhD，但我第一個待的 data infrastructure 組大約三成，主要看那個組的數學與技術難度。用戶推廣、廣告組這類較倚賴生活經驗的組別，PhD 就比較少。至於要不要唸 PhD，首先我們需要了解 PhD 不是要解決問題，是要做出新的東西，但那些東西不一定有用。當年博班畢業時我也有考慮過教職，但總覺得相較於工程師做的通常是應用價值較高的東西，博士以降的研究產出對其他人的直接影響往往較少，所以需要更大的熱忱，不是每個人都適合。',
        },
        {
          title: '學長的 PhD 跟找到的工作內容沒什麼相關，會有什麼影響嗎？',
          section:
            'PhD 主要影響職涯的一開始跟後段。「一開始」是起薪會比較高，但是想想跟碩士一畢業就在工作的人相比，博士學位可能還是贏不過五年的工作經驗。「後段」則是比較有機會當上主管，或是晉升更高的職位（如： Director），因為你的資歷比較好看。PhD 的訓練讓你講出來的話都是有根據，就像寫 paper 時每一句話都要有 reference，不能瞎扯。我其實不後悔讀 PhD，那段時間其實滿開心的，但對我來說經濟上沒有太大的好處。',
        },
        {
          title: '研究所選擇走通信的動機 ',
          section:
            '高中很喜歡物理，大學時選了系上半導體、物理相關的課，也有修物理系的量子物理。但是後來修到半導體工程時，覺得有點無聊繁瑣，決定換一個領域試試。當時覺得通信的數學很漂亮，Fourier Transform、Z Transform、線性代數的邏輯性充滿美感。研究所畢業後本來也沒打算出國，但我的指導教授馮世邁說出國對未來的發展比較好，所以後來還是出國了。申請 PhD 時雖然我的成績不算最頂尖，但因為研究做得頗有成果（碩士發了五篇 paper），就成功去了 CalTech。',
        },
        {
          title: '如果研究所在台灣唸，但想去美國找工作，難度會不會很高？',
          section:
            '有先例，但門檻相對高很多。公司要在不一定有足夠資訊了解你這個人的情形下，幫你拿到 H1B 簽證。台大在台灣可能很有名，但美國的公司不一定會覺得這是一個很好的保證（相較於美國本地的大學畢業生）。也有些案例在大學或碩士到美國的 FB 實習，後來轉正職，這或許是台灣學生可以走的一條路。另外也可以多參與 open source 專案。之前有位中國的 PhD 做 Hadoop Hive，貢獻在專案中高居前三名，我們就直接把他招募進來。由此可見在 open source 專案有清楚可見的產出，也是獲得聘用的一條路。',
        },
        {
          title: '準備 FB 面試所需的演算法跟程式',
          section:
            '那時去做 FB 的 puzzle 題目去練 (現在收掉了)，而且之前在用 ASP 寫計中寫借教室平台，也有去接 php 的案子，在面試 FB 的時候面試官有關注到，算是無心插柳。',
        },
        {
          title: '有關 open source',
          section:
            '假如有看到一個看好的 open source project，可以去嘗試在上面解 bug、issue，這個跟公司面試的那種小演算法題目差很多，倒是跟公司裡叫你做的事比較像一點，通常都是幾十萬行的 code，要去解一些奇怪的問題或是實現一個新的 feature。通常公司裡的那些東西都是幾個月的時間就把大架構刻出來，接下來幾年的時間就在裡面 iterate。所以通常在裡面只有 5% 的機會把一個東西從零開始寫起來，其他都是在大架構下面改小東西。也是有很會做這種事的人，但不會寫像 ACM 這種智力測驗跟從零開始寫一些小架構跟邏輯和一些精妙的演算法，這種事情跟寫演算法題目用的腦是不太一樣的。',
        },
        {
          title: '現在各國都在往 CS 領域發展，這樣會有人才飽和的現象嗎，還是這個領域其實也在成長？',
          section:
            '這個領域其實也一直在變大，當然也需要更多人。但是也有可能供給會跑過需求，像前幾年 FB bootcamp 出來的人都說要做 Big Data，現在是都要做 Machine Learning。但我覺得不是大問題，因為 Software 的東西很容易轉。我覺得對你們沒有什麼關係，因為你們很聰明，很容易站到一個不錯的位子，CS目前是很有經濟價值，也還會再推動一陣子。',
        },
        {
          title: 'FB 發 paper 對公司有什麼好處，是隱藏利益，還是純粹一起研究進步？',
          section:
            '有些東西很難學，但也有些是會先申請專利再發 paper，而且 Pull Request 數會對公司的對外形象有影響 (美國會統計每個公司的這種創新成分等等)，對某些人而言可能是衡量要不要加入這家公司的關鍵。',
        },
        {
          title: 'FB 招募 Master, PhD 的標準有不一樣嗎？',
          section:
            '有可能會問 PhD 的研究，但主要標準可能差不多，大部分應該是看你會不會寫 code，因為找人進來就是要做事，能不能持續產出。出 paper 的部門就不太一樣，有些人招之前就知道他們是誰，所以已經要他們了，面試內容就不太一樣，但如果是大學畢業的話應該也是會問 coding，跟對 Machine Learning 的理解之類的。',
        },
        {
          title: '“人的身段要軟，不要怕學習新的東西，才是成功之道 ”',
          section:
            '人能一直轉方向滿重要的，即使已經讀到 PhD 那麼多的，因為現在東西變太快了，很多都是紅一下就消失了，所以你沒辦法死守一個東西，就做一輩子，很難找到一個東西一直具有經濟價值，可以一直做下去。',
        },
        {
          title: '給大學部的學生什麼建議？尤其是對電機系的東西沒有太大興趣，GPA也不是很漂亮的人？',
          section:
            '對 CS 有興趣的話，可以去做 open source, 想辦法找實習，或做 ACM 競賽題，把那些學紮實一點。對大學部的話，其實我覺得應該多玩一點，專題也就找比較有興趣的來做，我以前就是很認真在圖書館讀書，現在想想那些時間如果拿去玩也不會怎麼樣。人的機遇都是很 non-linear，陰錯陽差就走到某些地方，所以如果可以比較 diverse，就比較有機會在某些地方開花。我以前修過很多專題，大概做過八個，有李琳山的，貝蘇章的，鍾孝文的，賴飛羆的，就可以多方嘗試，有聯誼之類的或好玩的事情就去做，盡量豐富一點。',
        },
      ],
    },
  ],

  annotation: ['特別感謝：陳俊仰', '撰寫： 楊程皓 吳奕萱 毛弘仁'],
  id: 'column_1806',
}
