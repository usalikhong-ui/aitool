const ALL_BOOKS = [
  {id: 'book_compass', nameKey: 'book_compass_name', price: 3, contentKey: 'book_compass_content'},
  {id: 'book_garden', nameKey: 'book_garden_name', price: 3, contentKey: 'book_garden_content'},
  {id: 'book_emotions', nameKey: 'book_emotions_name', price: 5, contentKey: 'book_emotions_content'},
  {id: 'book_mindfulness', nameKey: 'book_mindfulness_name', price: 5, contentKey: 'book_mindfulness_content'},
];

const BOOK_CONTENT = {
  'zh-TW': {
    book_compass_content: `第一章：失落的星光
艾拉的村莊坐落在靜語森林的邊緣，那裡的天空夜晚總是比別處更黑，星星也因此顯得格外明亮。艾拉從小就對星星著迷，她的祖母告訴她，每一顆星星都有自己的故事，而墜落的星星，則會帶來改變命運的力量。
一個風暴肆虐的夜晚，一道前所未有的強光劃破天際，伴隨著雷鳴般的巨響，一顆星星墜落在森林深處。第二天，村莊恢復了平靜，但艾拉發現，天空中的「守護者之星」消失了。與此同時，她在家中閣樓的一個舊木箱裡，找到了一枚古老的黃銅羅盤。這羅盤的指針並不指向北方，而是微微顫動，指向森林深處，彷彿在回應那顆失落的星光。

第二章：羅盤的指引
艾拉握著羅盤，決心找回村莊的守護星。她告別家人，獨自踏入了充滿未知與傳說的靜語森林。森林裡，光線昏暗，古木參天，羅盤的指針是她唯一的嚮導。
旅途中，她遇到了一隻會說話的狐狸，名叫芬尼克。芬尼克警告她，墜星之地被一個古老的陰影守護著，它會吞噬所有靠近的光芒。但看到艾拉堅定的眼神，芬尼克決定與她同行。「也許，」牠說，「我這輩子總得做一件瘋狂而有意義的事。」

第三章：陰影的迷宮
越靠近森林中心，四周就越是寂靜，連鳥鳴都消失了。空氣中瀰漫著一股寒意，陰影在樹木間扭曲成怪異的形狀。艾拉和芬尼克發現，他們陷入了一個由陰影構成的迷宮，羅盤的指針開始瘋狂旋轉。
在絕望之際，艾拉想起了祖母的話：「當你迷失時，傾聽內心的光。」她閉上眼睛，不再依賴羅盤，而是感受內心那股尋找星光的渴望。當她再次睜開眼，她看到迷宮的牆壁上，有一些微弱的苔蘚在發光，它們連接成一條幾乎看不見的小徑。那是生命在陰影中開闢的道路。

第四章：星核之心
跟隨發光的小徑，他們終於走出了迷宮，來到一片空地。空地的中央，一個巨大的坑洞裡，躺著那顆墜落的星星。它不再發光，外殼焦黑，看起來像一塊普通的石頭。而坑洞邊緣，一個由純粹黑暗構成的巨大陰影正在蠕動，那就是芬尼克所說的守護者。
陰影對艾拉發出低吼，它因孤獨和被遺忘而充滿憤怒。它守護著這顆不再發光的星星，是因為這是它唯一的陪伴。艾拉沒有害怕，她慢慢走上前，將羅盤放在星核上。她輕聲對陰影說：「光並不是消失了，只是需要被重新喚醒。你不是想吞噬它，你只是太久沒有感受到溫暖了。」

第五章：重燃的光
艾拉的話語似乎觸動了陰影。她將手放在羅盤上，集中精神，將自己對星空的熱愛、對村莊的思念，以及旅途中的勇氣全部注入其中。羅盤發出微弱的光芒，滲入星核。奇蹟發生了，星核的裂縫中透出溫暖的光，越來越亮，最終照亮了整片空地。
陰影在光芒中發出滿足的嘆息，它的形體漸漸縮小，化作一個溫順的小影子，依偎在星核旁。它不再是吞噬光的怪物，而是真正找到了歸宿的守護者。

第六章：歸途與新生
艾拉知道，她無法將星星帶回天空，但她找到了更重要的東西。她對芬尼克微笑，將羅盤收好。回村的路上，她發現森林不再那麼陰森，陽光透過樹葉的縫隙灑下，充滿生機。芬尼克將她送到森林邊緣，深深地看了她一眼，「記住，真正的羅盤，永遠在你心裡。」說完，便轉身消失在林中了。
回到村莊，人們發現，雖然「守護者之星」沒有回來，但村莊裡的每一個人心中，都點亮了一顆屬於自己的、永不熄滅的星光。艾拉明白，真正的守護並非來自天上，而是源於內心被點燃的希望與勇氣。而她的冒險，才剛剛開始。她時常拿出那枚黃銅羅盤，它的指針不再指向任何地方，只是靜靜地待著，像一個忠實的朋友，提醒她那趟不可思議的旅程。`,
    book_garden_content: `序言：你的內心花園
想像一下，在你的內心深處，有一座屬於你自己的花園。有時候，它陽光明媚，繁花盛開；有時候，它也會經歷風雨，雜草叢生。這本書，就是一份園藝指南，邀請你一起學習如何照料這座獨一無二的心靈花園。

第一章：練習「在場」的藝術
我們常常為過去懊悔，為未來焦慮，卻唯獨錯過了正在發生的「現在」。正念，就是將注意力帶回此刻的練習。找一個舒服的姿勢坐下，閉上眼睛，感受你的呼吸。一呼一吸，就像花園裡溫柔的微風。當思緒飄走，不用苛責，只需像牽著一個好奇的孩子一樣，溫柔地把它帶回你的呼吸上。每天練習五分鐘，你會發現，你的花園土壤會變得更加肥沃。

第二章：給情緒澆水，而非淹沒
情緒就像天氣，有晴有雨，沒有好壞之分。當悲傷、憤怒或焦慮來臨時，不要試圖築起高牆阻擋它們。想像你正在給一株需要水的植物澆水。承認它的存在：「哦，悲傷來了。」感受它在身體裡的感覺，是胸口發緊，還是喉嚨哽咽？靜靜地陪伴它，不加評判。你會發現，被溫柔注視的情緒，就像得到適量水分的植物，會平靜下來，而不會釀成洪水。

第三章：拔除「比較」的雜草
「比較」是心靈花園中最具破壞力的雜草。它悄悄生長，吸取你的養分，讓你忘記自己花朵的獨特之美。當你發現自己又在拿自己的成就、外貌或生活與他人比較時，輕輕地對自己說：「這是一株比較的雜草。」然後，將注意力轉向自己擁有的東西。也許你有一朵開得特別燦爛的向日葵（你的善良），或是一片充滿香氣的薄荷（你的幽默感）。欣賞你自己的花園，而不是羨慕別人的。

第四章：種下「感恩」的種子
感恩是最高效的肥料，能讓你的花園充滿生機。每天睡前，花幾分鐘時間，想出三件今天值得感謝的小事。可能是一杯溫暖的咖啡，一句朋友的問候，或是窗外一抹美麗的晚霞。把這些「感恩種子」種下，你會發現，即使在陰天，你的花園裡也總有幾朵小花在悄然綻放，提醒你生活中的美好。

第五章：建立「界線」的籬笆
一個健康的花園需要籬笆，以防被隨意踐踏。學會對那些消耗你過多精力的人和事說「不」，就是為你的花園建立籬笆。設立界線不是自私，而是自我關懷。它意味著你了解自己的能量是有限的，並選擇將它用在滋養你花園內最珍貴的植物上。一個有籬笆保護的花園，才能安全、茁壯地成長。

第六章：修剪枯萎的枝葉
在花園裡，枯萎的葉子和凋謝的花朵會消耗植物的能量。在心靈花園裡，這些枯枝敗葉就是我們緊抓不放的舊有信念、不再服務於我們的習慣，或是早已結束的關係。學會「放手」，就是修剪的過程。這需要勇氣，但修剪之後，新的枝葉才有空間生長，讓花園重新充滿活力。定期檢視你的內心，看看有哪些需要被溫柔地放下。

結語：花園一直在這裡
你的心靈花園，永遠在你之內，等待你的照料。無論外界如何變化，你總可以回到這個寧靜的地方，拔草、澆水、播種。你就是自己最好的園丁。願你的花園，四季常青，繁花似錦。`,
    book_emotions_content: `第一章：認識你的情緒光譜
情緒並非敵人，而是信差。它們攜帶著關於我們內在世界與外在環境的重要資訊。傳統上，我們將情緒簡單分為「好」與「壞」，例如快樂是好的，悲傷是壞的。然而，這種二分法限制了我們對自身經驗的理解。本書將情緒視為一個光譜，從高能量到低能量，從愉悅到不愉悅，每個情緒都有其獨特的功能與價值。\n例如，「憤怒」是一種高能量、不愉悅的情緒。它常常在我們的界線被侵犯或目標被阻礙時出現，像一個警報器，驅使我們採取行動保護自己。「焦慮」則是對未來不確定性的反應，它提醒我們為潛在的挑戰做準備。理解每種情緒背後的功能，是情緒管理的第一步。

第二章：ABC認知行為模型
情緒並非由事件本身直接引起，而是由我們對事件的「信念」或「詮釋」（Beliefs）所引發。這是認知行為療法（CBT）的核心觀點，稱為ABC模型。\n A (Activating Event)：發生的事件。\n B (Beliefs)：你對該事件的詮釋、想法與信念。\n C (Consequences)：你的情緒與行為結果。\n例如，考試不及格（A），可能引發「我真是個失敗者」（B），從而導致沮喪（C）。但若信念是「這次準備不夠充分，下次我需要改變學習方法」（B），則可能引發決心與計畫（C）。關鍵在於辨識並挑戰那些導致負面情緒的非理性信念（B），我們稱之為「認知重建」。

第三章：情緒調節的實用策略
1. 標籤化（Labeling）：僅僅是用語言命名你的感受（例如，「我現在感到很失望」），就能降低杏仁核（大腦的情緒中樞）的活躍程度，讓你從情緒中抽離出來，以一個觀察者的角度看待它。\n2. 重新評估（Reappraisal）：改變你對一個情況的看法，以改變你對它的情緒反應。例如，將「公開演講是一場審判」的想法，重新評估為「這是一個分享我知識的機會」。\n3. 問題解決（Problem-Solving）：如果情緒是由一個具體問題引發的，那麼將注意力轉向解決方案。將問題分解成小步驟，並專注於你可以控制的部分。\n4. 情緒疏導（Emotional Release）：找到健康的管道來釋放強烈的情緒，例如運動、寫作、藝術創作或與信任的人交談。壓抑情緒往往會導致其在未來以更具破壞性的方式爆發。

第四章：培養情緒復原力
情緒復原力（Emotional Resilience）並不是指從不感受負面情緒，而是指在經歷逆境後能有效恢復的能力。這是一種可以透過練習而增強的技能。\n建立復原力的關鍵包括：\n- 建立穩固的社會支持網絡。\n- 培養樂觀但務實的思維模式。\n- 將挑戰視為成長的機會。\n- 保持規律的作息與運動習慣。\n- 練習正念與自我關懷。\n情緒管理是一段終身的旅程，而非一個終點。透過持續的學習與練習，我們可以學會與我們的所有情緒和諧共處，讓它們成為引導我們人生的智慧羅盤，而非控制我們的風暴。`,
    book_mindfulness_content: `第一章：什麼是正念？
正念（Mindfulness）是一種有意識地、不加評判地，將注意力帶到當下此刻的練習。它不是要你清空思緒，也不是要你達到某種特殊的狀態。恰恰相反，正念是完全地接納當下的一切，無論是內在的念頭、情緒、身體感受，還是外在的聲音、光線和氣味。\n想像一下，你正坐在溪邊。你的念頭和情緒就像溪水中的葉子，來來去去。正念練習，就是學習坐在岸邊，靜靜地觀察這些葉子漂過，而不是跳進溪流裡被它們沖走。這種「觀察而不糾纏」的能力，是所有正念練習的核心。

第二章：錨點：呼吸
在正念練習中，我們需要一個「錨點」來穩定我們漂泊的注意力，而最常用、也最方便的錨點就是我們的呼吸。\n練習：找一個舒服的姿勢坐下或躺下。將注意力輕輕地放在你的呼吸上。感受空氣從鼻腔吸入，胸腔或腹部隨之起伏，再感受空氣被呼出。你不需要控制呼吸，只需觀察它自然的節奏。\n當你發現自己的思緒飄走了（這非常正常！），請溫柔地、不加責備地，再次將注意力帶回到你的呼吸上。每一次你將走神的注意力帶回來，都是一次成功的正念練習，就像在健身房鍛鍊你的「專注力肌肉」。

第三章：身體掃描
身體是我們體驗當下的直接媒介。身體掃描（Body Scan）是一個幫助我們重新與身體連結，並覺察細微感受的經典練習。\n練習：躺下來，閉上眼睛。從左腳的腳趾開始，將你的注意力像溫暖的探照燈一樣，緩慢地掃過身體的每一個部位：腳掌、腳踝、小腿、膝蓋……一直到頭頂。在每一個部位，只是去感受那裡的任何感覺——可能是溫暖、冰冷、麻、痛，或者沒有任何感覺。重點是「感受」，而非「思考」。這個練習能幫助我們安住在身體裡，減少焦慮。

第四章：生活中的正念
正念不僅僅是靜坐。你可以將正念的品質帶入日常生活的任何一個片刻。\n- 正念飲食：下一次吃飯時，試著關掉電視和手機。專心感受食物的顏色、香氣、口感和味道。慢慢咀嚼，感受食物滋養你的身體。\n- 正念行走：散步時，感受腳底與地面的接觸，感受微風拂過皮膚，留意周圍的景象與聲音。\n- 正念聆聽：與人交談時，全神貫注地聆聽對方，而不是在心裡準備下一句要說什麼。\n透過將這些微小的正念時刻融入一天，你會發現，即使在忙碌的生活中，也能找到無數個可以讓心靈稍作停泊的寧靜港灣。這就是正念的力量：將平凡的時刻，轉化為覺知的體驗。`
  },
  'zh-CN': {
    book_compass_content: `第一章：失落的星光
艾拉的村庄坐落在静语森林的边缘，那里的天空夜晚总是比别处更黑，星星也因此显得格外明亮。艾拉从小就对星星着迷，她的祖母告诉她，每一颗星星都有自己的故事，而坠落的星星，则会带来改变命运的力量。
一个风暴肆虐的夜晚，一道前所未有的强光划破天际，伴随着雷鸣般的巨响，一颗星星坠落在森林深处。第二天，村庄恢复了平静，但艾拉发现，天空中的“守护者之星”消失了。与此同时，她在家中阁楼的一个旧木箱里，找到了一枚古老的黄铜罗盘。这罗盘的指针并不指向北方，而是微微颤动，指向森林深处，仿佛在回应那颗失落的星光。

第二章：罗盘的指引
艾拉握着罗盘，决心找回村庄的守护星。她告别家人，独自踏入了充满未知与传说的静语森林。森林里，光线昏暗，古木参天，罗盘的指针是她唯一的向导。
旅途中，她遇到了一只会说话的狐狸，名叫芬尼克。芬尼克警告她，坠星之地被一个古老的阴影守护着，它会吞噬所有靠近的光芒。但看到艾拉坚定的眼神，芬尼克决定与她同行。“也许，”它说，“我这辈子总得做一件疯狂而有意义的事。”

第三章：阴影的迷宫
越靠近森林中心，四周就越是寂静，连鸟鸣都消失了。空气中弥漫着一股寒意，阴影在树木间扭曲成怪异的形状。艾拉和芬尼克发现，他们陷入了一个由阴影构成的迷宫，罗盘的指针开始疯狂旋转。
在绝望之际，艾拉想起了祖母的话：“当你迷失时，倾听内心的光。”她闭上眼睛，不再依赖罗盘，而是感受内心那股寻找星光的渴望。当她再次睁开眼，她看到迷宫的墙壁上，有一些微弱的苔藓在发光，它们连接成一条几乎看不见的小径。那是生命在阴影中开辟的道路。

第四章：星核之心
跟随发光的小径，他们终于走出了迷宫，来到一片空地。空地的中央，一个巨大的坑洞里，躺着那颗坠落的星星。它不再发光，外壳焦黑，看起来像一块普通的石头。而坑洞边缘，一个由纯粹黑暗构成的巨大阴影正在蠕动，那就是芬尼克所说的守护者。
阴影对艾拉发出低吼，它因孤独和被遗忘而充满愤怒。它守护着这颗不再发光的星星，是因为这是它唯一的陪伴。艾拉没有害怕，她慢慢走上前，将罗盘放在星核上。她轻声对阴影说：“光并不是消失了，只是需要被重新唤醒。你不是想吞噬它，你只是太久没有感受到温暖了。”

第五章：重燃的光
艾拉的话语似乎触动了阴影。她将手放在罗盘上，集中精神，将自己对星空的热爱、对村庄的思念，以及旅途中的勇气全部注入其中。罗盘发出微弱的光芒，渗入星核。奇迹发生了，星核的裂缝中透出温暖的光，越来越亮，最终照亮了整片空地。
阴影在光芒中发出满足的叹息，它的形体渐渐缩小，化作一个温顺的小影子，依偎在星核旁。它不再是吞噬光的怪物，而是真正找到了归宿的守护者。

第六章：归途与新生
艾拉知道，她无法将星星带回天空，但她找到了更重要的东西。她对芬尼克微笑，将罗盘收好。回村的路上，她发现森林不再那么阴森，阳光透过树叶的缝隙洒下，充满生机。芬尼克将她送到森林边缘，深深地看了她一眼，“记住，真正的罗盘，永远在你心里。”说完，便转身消失在林中了。
回到村庄，人们发现，虽然“守护者之星”没有回来，但村庄里的每一个人心中，都点亮了一颗属于自己的、永不熄灭的星光。艾拉明白，真正的守护并非来自天上，而是源于内心被点燃的希望与勇气。而她的冒险，才刚刚开始。她时常拿出那枚黄铜罗盘，它的指针不再指向任何地方，只是静静地待着，像一个忠实的朋友，提醒她那趟不可思议的旅程。`,
    book_garden_content: `序言：你的内心花园
想象一下，在你的内心深处，有一座属于你自己的花园。有时候，它阳光明媚，繁花盛开；有时候，它也会经历风雨，杂草丛生。这本书，就是一份园艺指南，邀请你一起学习如何照料这座独一无二的心灵花园。

第一章：练习“在场”的艺术
我们常常为过去懊悔，为未来焦虑，却唯独错过了正在发生的“现在”。正念，就是将注意力带回此刻的练习。找一个舒服的姿势坐下，闭上眼睛，感受你的呼吸。一呼一吸，就像花园里温柔的微风。当思绪飘走，不用苛责，只需像牵着一个好奇的孩子一样，温柔地把它带回你的呼吸上。每天练习五分钟，你会发现，你的花园土壤会变得更加肥沃。

第二章：给情绪浇水，而非淹没
情绪就像天气，有晴有雨，没有好坏之分。当悲伤、愤怒或焦虑来临时，不要试图筑起高墙阻挡它们。想象你正在给一株需要水的植物浇水。承认它的存在：“哦，悲伤来了。”感受它在身体里的感觉，是胸口发紧，还是喉咙哽咽？静静地陪伴它，不加评判。你会发现，被温柔注视的情绪，就像得到适量水分的植物，会平静下来，而不会酿成洪水。

第三章：拔除“比较”的杂草
“比较”是心灵花园中最具破坏力的杂草。它悄悄生长，吸取你的养分，让你忘记自己花朵的独特之美。当你发现自己又在拿自己的成就、外貌或生活与他人比较时，轻轻地对自己说：“这是一株比较的杂草。”然后，将注意力转向自己拥有的东西。也许你有一朵开得特别灿烂的向日葵（你的善良），或是一片充满香气的薄荷（你的幽默感）。欣赏你自己的花园，而不是羡慕别人的。

第四章：种下“感恩”的种子
感恩是最高效的肥料，能让你的花园充满生机。每天睡前，花几分钟时间，想出三件今天值得感谢的小事。可能是一杯温暖的咖啡，一句朋友的问候，或是窗外一抹美丽的晚霞。把这些“感恩种子”种下，你会发现，即使在阴天，你的花园里也总有几朵小花在悄然绽放，提醒你生活中的美好。

第五章：建立“界线”的篱笆
一个健康的花园需要篱笆，以防被随意践踏。学会对那些消耗你过多精力的人和事说“不”，就是为你的花园建立篱笆。设立界线不是自私，而是自我关怀。它意味着你了解自己的能量是有限的，并选择将它用在滋养你花园内最珍贵的植物上。一个有篱笆保护的花园，才能安全、茁壮地成长。

第六章：修剪枯萎的枝叶
在花园里，枯萎的叶子和凋谢的花朵会消耗植物的能量。在心灵花园里，这些枯枝败叶就是我们紧抓不放的旧有信念、不再服务于我们的习惯，或是早已结束的关系。学会“放手”，就是修剪的过程。这需要勇气，但修剪之后，新的枝叶才有空间生长，让花园重新充满活力。定期检视你的内心，看看有哪些需要被温柔地放下。

结语：花园一直在这里
你的心灵花园，永远在你之内，等待你的照料。无论外界如何变化，你总可以回到这个宁静的地方，拔草、浇水、播种。你就是自己最好的园丁。愿你的花园，四季常青，繁花似锦。`,
    book_emotions_content: `第一章：认识你的情绪光谱
情绪并非敌人，而是信差。它们携带着关于我们内在世界与外在环境的重要信息。传统上，我们将情绪简单分为“好”与“坏”，例如快乐是好的，悲伤是坏的。然而，这种二分法限制了我们对自身经验的理解。本书将情绪视为一个光谱，从高能量到低能量，从愉悦到不愉悦，每个情绪都有其独特的功能与价值。\n例如，“愤怒”是一种高能量、不愉悦的情绪。它常常在我们的界线被侵犯或目标被阻碍时出现，像一个警报器，驱使我们采取行动保护自己。“焦虑”则是对未来不确定性的反应，它提醒我们为潜在的挑战做准备。理解每种情绪背后的功能，是情绪管理的第一步。

第二章：ABC认知行为模型
情绪并非由事件本身直接引起，而是由我们对事件的“信念”或“诠释”（Beliefs）所引发。这是认知行为疗法（CBT）的核心观点，称为ABC模型。\n A (Activating Event)：发生的事件。\n B (Beliefs)：你对该事件的诠释、想法与信念。\n C (Consequences)：你的情绪与行为结果。\n例如，考试不及格（A），可能引发“我真是个失败者”（B），从而导致沮丧（C）。但若信念是“这次准备不够充分，下次我需要改变学习方法”（B），则可能引发决心与计划（C）。关键在于辨识并挑战那些导致负面情绪的非理性信念（B），我们称之为“认知重建”。

第三章：情绪调节的实用策略
1. 标签化（Labeling）：仅仅是用语言命名你的感受（例如，“我现在感到很失望”），就能降低杏仁核（大脑的情绪中枢）的活跃程度，让你从情绪中抽离出来，以一个观察者的角度看待它。\n2. 重新评估（Reappraisal）：改变你对一个情况的看法，以改变你对它的情绪反应。例如，将“公开演讲是一场审判”的想法，重新评估为“这是一个分享我知识的机会”。\n3. 问题解决（Problem-Solving）：如果情绪是由一个具体问题引发的，那么将注意力转向解决方案。将问题分解成小步骤，并专注于你可以控制的部分。\n4. 情绪疏导（Emotional Release）：找到健康的渠道来释放强烈的情绪，例如运动、写作、艺术创作或与信任的人交谈。压抑情绪往往会导致其在未来以更具破坏性的方式爆发。

第四章：培养情绪复原力
情绪复原力（Emotional Resilience）并非指从不感受负面情绪，而是指在经历逆境后能有效恢复的能力。这是一种可以通过练习而增强的技能。\n建立复原力的关键包括：\n- 建立稳固的社会支持网络。\n- 培养乐观但务实的思维模式。\n- 将挑战视为成长的机会。\n- 保持规律的作息与运动习惯。\n- 练习正念与自我关怀。\n情绪管理是一段终身的旅程，而非一个终点。通过持续的学习与练习，我们可以学会与我们的所有情绪和谐共处，让它们成为引导我们人生的智慧罗盘，而非控制我们的风暴。`,
    book_mindfulness_content: `第一章：什么是正念？
正念（Mindfulness）是一种有意识地、不加评判地，将注意力带到当下此刻的练习。它不是要你清空思绪，也不是要你达到某种特殊的状态。恰恰相反，正念是完全地接纳当下的一切，无论是内在的念头、情绪、身体感受，还是外在的声音、光线和气味。\n想象一下，你正坐在溪边。你的念头和情绪就像溪水中的叶子，来来去去。正念练习，就是学习坐在岸边，静静地观察这些叶子漂过，而不是跳进溪流里被它们冲走。这种“观察而不纠缠”的能力，是所有正念练习的核心。

第二章：锚点：呼吸
在正念练习中，我们需要一个“锚点”来稳定我们漂泊的注意力，而最常用、也最方便的锚点就是我们的呼吸。\n练习：找一个舒服的姿势坐下或躺下。将注意力轻轻地放在你的呼吸上。感受空气从鼻腔吸入，胸腔或腹部随之起伏，再感受空气被呼出。你不需要控制呼吸，只需观察它自然的节奏。\n当你发现自己的思绪飘走了（这非常正常！），请温柔地、不加责备地，再次将注意力带回到你的呼吸上。每一次你将走神的注意力带回来，都是一次成功的正念练习，就像在健身房锻炼你的“专注力肌肉”。

第三章：身体扫描
身体是我们体验当下的直接媒介。身体扫描（Body Scan）是一个帮助我们重新与身体连结，并觉察细微感受的经典练习。\n练习：躺下来，闭上眼睛。从左脚的脚趾开始，将你的注意力像温暖的探照灯一样，缓慢地扫过身体的每一个部位：脚掌、脚踝、小腿、膝盖……一直到头顶。在每一个部位，只是去感受那里的任何感觉——可能是温暖、冰冷、麻、痛，或者没有任何感觉。重点是“感受”，而非“思考”。这个练习能帮助我们安住在身体里，减少焦虑。

第四章：生活中的正念
正念不仅仅是静坐。你可以将正念的品质带入日常生活的任何一个片刻。\n- 正念饮食：下一次吃饭时，试着关掉电视和手机。专心感受食物的颜色、香气、口感和味道。慢慢咀嚼，感受食物滋养你的身体。\n- 正念行走：散步时，感受脚底与地面的接触，感受微风拂过皮肤，留意周围的景象与声音。\n- 正念聆听：与人交谈时，全神贯注地聆听对方，而不是在心里准备下一句要说什么。\n通过将这些微小的正念时刻融入一天，你会发现，即使在忙碌的生活中，也能找到无数个可以让心灵稍作停泊的宁静港湾。这就是正念的力量：将平凡的时刻，转化为觉知的体验。`
  },
  'en': {
    book_compass_content: `Chapter 1: The Lost Starlight
Elara's village nestled on the edge of the Whispering Woods, where the night sky was always darker than elsewhere, making the stars seem exceptionally bright. From a young age, Elara was fascinated by the stars. Her grandmother told her that every star had its own story, and a fallen star brought the power to change one's destiny.
One stormy night, an unprecedentedly bright light streaked across the sky, followed by a thunderous roar, as a star fell deep into the forest. The next day, peace returned to the village, but Elara noticed that the "Guardian Star" was missing from the sky. At the same time, in an old wooden chest in her attic, she found an ancient brass compass. Its needle didn't point north but trembled slightly, pointing deep into the forest, as if responding to the lost starlight.

Chapter 2: The Compass's Guidance
Clutching the compass, Elara was determined to retrieve the village's guardian star. She bid her family farewell and ventured alone into the Whispering Woods, a place of unknowns and legends. Inside the forest, the light was dim, ancient trees towered, and the compass needle was her only guide.
Along the way, she met a talking fox named Finnick. Finnick warned her that the place where the star fell was guarded by an ancient shadow that devoured all light that came near. But seeing the determination in Elara's eyes, Finnick decided to accompany her. "Perhaps," he said, "I ought to do something crazy and meaningful in my life."

Chapter 3: The Labyrinth of Shadows
The closer they got to the heart of the forest, the quieter it became; even the birdsong vanished. A chill filled the air, and shadows twisted into grotesque shapes among the trees. Elara and Finnick found themselves in a labyrinth made of shadows, and the compass needle began to spin wildly.
In despair, Elara remembered her grandmother's words: "When you are lost, listen to the light within." She closed her eyes, no longer relying on the compass, but on the yearning in her heart to find the starlight. When she opened her eyes again, she saw faint glowing moss on the labyrinth walls, forming a nearly invisible path. It was a path carved by life through the shadows.

Chapter 4: The Heart of the Star Core
Following the glowing path, they finally emerged from the labyrinth into a clearing. In the center of the clearing, in a large crater, lay the fallen star. It no longer shone, its shell was charred, and it looked like an ordinary stone. At the edge of the crater, a huge shadow of pure darkness writhed—the guardian Finnick had spoken of.
The shadow growled at Elara, filled with anger from loneliness and being forgotten. It guarded the star that no longer shone because it was its only companion. Elara was not afraid. She walked forward slowly and placed the compass on the star core. She whispered to the shadow, "The light hasn't disappeared; it just needs to be reawakened. You don't want to devour it; you've just been without warmth for too long."

Chapter 5: The Rekindled Light
Elara's words seemed to touch the shadow. She placed her hand on the compass, focused her mind, and poured all her love for the starry sky, her longing for her village, and the courage from her journey into it. The compass emitted a faint glow that seeped into the star core. A miracle happened. Warm light shone from the cracks of the core, growing brighter until it illuminated the entire clearing.
The shadow sighed in contentment in the light, its form gradually shrinking into a gentle little shadow that nestled beside the star core. It was no longer a monster that devoured light but a guardian that had truly found its home.

Chapter 6: Return and Rebirth
Elara knew she couldn't return the star to the sky, but she had found something more important. She smiled at Finnick and put the compass away. On the way back to the village, she noticed the forest was no longer so gloomy. Sunlight filtered through the leaves, full of life. Finnick escorted her to the edge of the forest, gave her a long look, and said, "Remember, the real compass is always within your heart." Then, he turned and disappeared into the woods.
Back in the village, the people found that although the "Guardian Star" had not returned, a star of their own, one that would never be extinguished, had been lit in each of their hearts. Elara understood that true protection comes not from the heavens, but from the hope and courage ignited within. And her adventure had only just begun. She often took out the brass compass. Its needle no longer pointed anywhere, but rested silently, like a faithful friend, reminding her of that incredible journey.`,
    book_garden_content: `Prologue: Your Inner Garden
Imagine, deep within you, there is a garden that belongs only to you. Sometimes, it's sunny and full of blooming flowers; other times, it weathers storms and becomes overgrown with weeds. This book is a gardening guide, inviting you to learn how to care for this unique garden of the mind.

Chapter 1: The Art of Being Present
We often regret the past and worry about the future, but we miss the "now" that is happening. Mindfulness is the practice of bringing your attention back to the present moment. Find a comfortable position, close your eyes, and feel your breath. In and out, like a gentle breeze in the garden. When your mind wanders, don't scold it; gently guide it back to your breath, like leading a curious child. Practice for five minutes a day, and you'll find the soil of your garden becoming more fertile.

Chapter 2: Watering Emotions, Not Drowning in Them
Emotions are like the weather—sunny, rainy, neither good nor bad. When sadness, anger, or anxiety arrives, don't try to build a wall to block them. Imagine you are watering a plant that needs water. Acknowledge its presence: "Oh, sadness is here." Feel it in your body—a tightness in your chest, a lump in your throat. Sit with it quietly, without judgment. You'll find that an emotion, when gently observed, is like a plant given the right amount of water. It will calm down instead of becoming a flood.

Chapter 3: Uprooting the Weed of Comparison
Comparison is the most destructive weed in the mind's garden. It grows silently, sucks your nutrients, and makes you forget the unique beauty of your own flowers. When you find yourself comparing your achievements, appearance, or life to others, gently tell yourself, "This is a weed of comparison." Then, shift your focus to what you have. Perhaps you have a particularly bright sunflower (your kindness) or a fragrant patch of mint (your sense of humor). Appreciate your own garden instead of envying others'.

Chapter 4: Planting Seeds of Gratitude
Gratitude is the most effective fertilizer, capable of bringing vitality to your garden. Every night before bed, take a few minutes to think of three small things you were grateful for today. It could be a warm cup of coffee, a friend's greeting, or a beautiful sunset. Plant these "seeds of gratitude," and you'll find that even on cloudy days, a few small flowers will be quietly blooming in your garden, reminding you of the good in life.

Chapter 5: Building a Fence of Boundaries
A healthy garden needs a fence to prevent it from being trampled. Learning to say "no" to people and things that drain your energy is building a fence for your garden. Setting boundaries is not selfish; it's self-care. It means you understand that your energy is finite and you choose to use it to nourish the most precious plants within your garden. A garden protected by a fence can grow safely and strongly.

Chapter 6: Pruning Withered Leaves
In a garden, withered leaves and faded flowers consume a plant's energy. In the garden of the mind, these are the old beliefs we cling to, habits that no longer serve us, or relationships that have ended. Learning to "let go" is the process of pruning. It takes courage, but after pruning, new shoots have space to grow, revitalizing the garden. Regularly check in with yourself to see what needs to be gently let go.

Epilogue: The Garden is Always Here
Your mind garden is always within you, waiting for your care. No matter how the outside world changes, you can always return to this peaceful place to weed, water, and sow. You are your own best gardener. May your garden be evergreen and full of blossoms in all seasons.`,
    book_emotions_content: `Chapter 1: Understanding Your Emotional Spectrum
Emotions are not enemies; they are messengers. They carry vital information about our inner world and our external environment. Traditionally, we categorize emotions as "good" or "bad"—happiness is good, sadness is bad. However, this dichotomy limits our understanding of our own experiences. This book views emotions as a spectrum, ranging from high to low energy and from pleasant to unpleasant, with each emotion having its unique function and value.\nFor example, "anger" is a high-energy, unpleasant emotion. It often arises when our boundaries are violated or our goals are blocked, acting like an alarm that motivates us to take action to protect ourselves. "Anxiety" is a response to future uncertainty, reminding us to prepare for potential challenges. Understanding the function behind each emotion is the first step toward managing them.

Chapter 2: The ABC Model of Cognitive Behavior
Emotions are not directly caused by events themselves but by our "Beliefs" or interpretations of those events. This is the core idea of Cognitive Behavioral Therapy (CBT), known as the ABC model.\n A (Activating Event): The event that occurs.\n B (Beliefs): Your interpretations, thoughts, and beliefs about the event.\n C (Consequences): Your emotional and behavioral outcomes.\nFor example, failing an exam (A) might trigger the belief "I am a total failure" (B), leading to depression (C). However, if the belief is "I didn't prepare enough; I need to change my study method next time" (B), the consequence might be determination and planning (C). The key is to identify and challenge the irrational beliefs (B) that lead to negative emotions, a process called "cognitive restructuring."

Chapter 3: Practical Strategies for Emotion Regulation
1. Labeling: Simply naming your feelings in words (e.g., "I feel disappointed right now") can reduce the activity in the amygdala (the brain's emotional center), allowing you to detach from the emotion and observe it from a distance.\n2. Reappraisal: Changing how you think about a situation to alter your emotional response to it. For instance, reframing the thought "Public speaking is a trial" to "This is an opportunity to share my knowledge."\n3. Problem-Solving: If an emotion is triggered by a specific problem, shift your focus to solutions. Break the problem down into smaller steps and concentrate on what you can control.\n4. Emotional Release: Find healthy outlets to release intense emotions, such as exercise, writing, creative arts, or talking to a trusted person. Suppressing emotions often leads to them erupting more destructively in the future.

Chapter 4: Cultivating Emotional Resilience
Emotional resilience does not mean never feeling negative emotions; it is the ability to recover effectively after experiencing adversity. It is a skill that can be strengthened through practice.\nKey components of building resilience include:\n- Establishing a strong social support network.\n- Fostering an optimistic but realistic mindset.\n- Viewing challenges as opportunities for growth.\n- Maintaining regular routines and physical exercise.\n- Practicing mindfulness and self-compassion.\nManaging emotions is a lifelong journey, not a destination. Through continuous learning and practice, we can learn to live harmoniously with all our emotions, allowing them to be a wise compass for our lives rather than a storm that controls us.`,
    book_mindfulness_content: `Chapter 1: What is Mindfulness?
Mindfulness is the practice of paying attention to the present moment, on purpose and non-judgmentally. It is not about emptying your mind or achieving a special state. On the contrary, mindfulness is about fully accepting everything as it is in the present, whether it's internal thoughts, emotions, and bodily sensations, or external sounds, sights, and smells.\nImagine you are sitting by a stream. Your thoughts and feelings are like leaves floating by on the water. The practice of mindfulness is learning to sit on the bank and simply watch these leaves drift past, without jumping into the stream and being carried away by them. This ability to "observe without entanglement" is at the heart of all mindfulness practices.

Chapter 2: The Anchor: Your Breath
In mindfulness practice, we need an "anchor" to stabilize our wandering attention. The most common and convenient anchor is our breath.\nPractice: Find a comfortable position, either sitting or lying down. Gently place your attention on your breath. Feel the air entering through your nostrils, the rise and fall of your chest or abdomen, and the sensation of the air as you exhale. You don't need to control your breath; just observe its natural rhythm.\nWhen you notice your mind has wandered (which is perfectly normal!), gently and without self-criticism, guide your attention back to your breath. Every time you bring your attention back, you are successfully practicing mindfulness, like strengthening your "attention muscle" at the gym.

Chapter 3: The Body Scan
The body is our direct medium for experiencing the present moment. The Body Scan is a classic practice that helps us reconnect with our bodies and notice subtle sensations.\nPractice: Lie down and close your eyes. Begin at the toes of your left foot. Slowly, like a warm spotlight, move your attention through every part of your body: the sole of the foot, the ankle, the calf, the knee... all the way to the crown of your head. In each area, simply notice whatever sensations are present—warmth, coolness, tingling, pain, or perhaps no sensation at all. The goal is to "feel," not to "think." This practice helps ground us in our bodies and can reduce anxiety.

Chapter 4: Mindfulness in Daily Life
Mindfulness is not just about formal meditation. You can bring a mindful quality to any moment of your daily life.\n- Mindful Eating: The next time you have a meal, try turning off the TV and your phone. Pay full attention to the colors, smells, textures, and tastes of your food. Chew slowly, and notice the feeling of the food nourishing your body.\n- Mindful Walking: When you go for a walk, feel the sensation of your feet on the ground. Notice the feeling of the breeze on your skin and the sights and sounds around you.\n- Mindful Listening: When talking with someone, give them your full attention instead of planning what you're going to say next.\nBy incorporating these small moments of mindfulness into your day, you will discover that even in a busy life, there are countless quiet harbors where your mind can rest. This is the power of mindfulness: transforming ordinary moments into experiences of awareness.`
  },
  'ja': {
    book_compass_content: `第一章：失われた星の光
エララの村は囁きの森の端にあり、そこの夜空はいつも他所より暗く、そのため星がひときわ明るく見えた。エララは幼い頃から星に夢中で、祖母は「星には一つ一つ物語があり、堕ちた星は運命を変える力をもたらす」と教えてくれた。
嵐の夜、空を切り裂く未曾有の光と共に雷鳴が轟き、一つの星が森の奥深くに墜落した。翌日、村は静けさを取り戻したが、エララは空から「守護者の星」が消えていることに気づいた。時を同じくして、彼女は屋根裏の古い木箱から古びた真鍮の羅針盤を見つけた。その針は北を指さず、微かに震えながら森の奥深くを指し示し、まるで失われた星の光に応えているかのようだった。

第二章：羅針盤の導き
羅針盤を手に、エララは村の守護星を取り戻す決意をした。家族に別れを告げ、未知と伝説に満ちた囁きの森へ一人で足を踏み入れた。森の中は薄暗く、古木が天を突き、羅針盤の針だけが彼女の唯一の道標だった。
旅の途中、彼女は話す狐のフィニックに出会った。フィニックは、星が墜ちた場所は古代の影に守られており、近づく光をすべて飲み込んでしまうと警告した。しかし、エララの固い決意を見て、フィニックは同行することにした。「たぶん、」彼は言った、「僕も一生に一度くらい、無茶で意味のあることをしてみるべきかもしれない。」

第三章：影の迷宮
森の中心に近づくほど、周囲は静まり返り、鳥の声さえ聞こえなくなった。空気は冷気を帯び、木々の間で影が不気味な形に歪んでいた。エララとフィニックは影でできた迷宮に迷い込み、羅針盤の針は狂ったように回転し始めた。
絶望の中、エララは祖母の言葉を思い出した。「道に迷ったら、内なる光に耳を澄ませなさい。」彼女は目を閉じ、羅針盤に頼るのをやめ、心の中にある星の光を探し求める渇望を感じた。再び目を開けると、迷宮の壁に微かに光る苔があり、それらが繋がり、ほとんど見えない小道を作っていた。それは、生命が影の中で切り開いた道だった。

第四章：星核の心
光る小道をたどり、彼らはついに迷宮を抜け、開けた場所に出た。その中央の巨大なクレーターに、墜ちた星が横たわっていた。もはや光を放たず、外殻は黒焦げで、ただの石のように見えた。そしてクレーターの縁では、純粋な闇でできた巨大な影が蠢いていた。それがフィニックの言っていた守護者だった。
影はエララに唸り声を上げた。孤独と忘却からくる怒りに満ちていた。光らなくなった星を守っていたのは、それが唯一の仲間だったからだ。エララは恐れなかった。彼女はゆっくりと歩み寄り、羅針盤を星核の上に置いた。そして影に優しく語りかけた。「光は消えたわけじゃない。ただ、もう一度目覚めさせてあげる必要があるだけ。あなたは光を喰らいたいんじゃない、ただ温もりを感じていない時間が長すぎただけなの。」

第五章：再燃する光
エララの言葉は影に届いたようだった。彼女は羅針盤に手を置き、精神を集中させ、星空への愛、村への想い、そして旅で得た勇気のすべてを注ぎ込んだ。羅針盤は微かな光を放ち、星核に浸透していった。奇跡が起きた。星核の亀裂から温かい光が漏れ出し、次第に明るくなり、ついに空き地全体を照らし出した。
影は光の中で満足のため息をつき、その体は徐々に縮んで、おとなしい小さな影となり、星核のそばに寄り添った。もはや光を喰らう怪物ではなく、真の安住の地を見つけた守護者だった。

第六章：帰路と新生
エララは星を空に返すことはできないと知っていたが、もっと大切なものを見つけた。彼女はフィニックに微笑み、羅針盤をしまった。村への帰り道、森はもはや不気味ではなく、木漏れ日が生命力に満ちて降り注いでいた。フィニックは彼女を森の端まで送り届け、深く見つめて言った。「覚えておいて、本当の羅針盤は、いつも君の心の中にある。」そう言うと、彼は振り返り、森の中に消えていった。
村に戻ると、人々は「守護者の星」は戻らなかったが、村人一人一人の心の中に、自分だけの、決して消えることのない星の光が灯ったことに気づいた。エララは、真の守りとは天から来るものではなく、心の中に灯された希望と勇気から生まれるのだと理解した。そして彼女の冒険は、まだ始まったばかりだった。彼女は時々、その真鍮の羅針盤を取り出した。その針はもはやどこも指さず、静かにそこにあるだけで、忠実な友のように、あの信じられない旅を彼女に思い出させた。`,
    book_garden_content: `序章：あなたの心の庭
想像してみてください。あなたの心の奥底に、あなただけの庭があります。時には陽光が降り注ぎ、花が咲き乱れ、また時には嵐に見舞われ、雑草が生い茂ることもあります。この本は、そのユニークな心の庭を手入れする方法を学ぶための園芸ガイドです。

第一章：「今にいる」ことの芸術
私たちはしばしば過去を悔やみ、未来を憂いますが、まさに今起きている「現在」を見過ごしてしまいます。マインドフルネスとは、注意を現在の瞬間に引き戻す練習です。心地よい姿勢で座り、目を閉じ、自分の呼吸を感じてみましょう。吸って、吐いて。それは庭を吹き抜ける優しいそよ風のようです。思考がさまよいだしても、自分を責める必要はありません。好奇心旺盛な子供の手を引くように、優しく呼吸に連れ戻してあげましょう。毎日5分間練習すれば、庭の土壌がより豊かになることに気づくでしょう。

第二章：感情に水をやる、溺れるのではなく
感情は天気のようなもの。晴れもあれば雨もあり、良いも悪いもありません。悲しみ、怒り、不安が訪れたとき、壁を築いてそれらを遮ろうとしないでください。水を必要としている植物に水をやっていると想像してみてください。「ああ、悲しみがやってきた」と、その存在を認めます。胸が締め付けられるか、喉が詰まるか、体での感覚を感じてみましょう。評価を加えず、静かに寄り添います。優しく見守られた感情は、適量の水を得た植物のように、洪水になることなく静まっていくことに気づくでしょう。

第三章：「比較」という雑草を抜く
「比較」は心の庭で最も破壊的な雑草です。それは静かに成長し、あなたの養分を吸い取り、あなた自身の花のユニークな美しさを忘れさせます。自分の成果や外見、生活を他人と比べていることに気づいたら、「これは比較という雑草だ」と優しく自分に言い聞かせましょう。そして、自分が持っているものに注意を向けます。あなたには特に明るく咲いているひまわり（あなたの優しさ）や、香り高いミントの茂み（あなたのユーモア）があるかもしれません。他人の庭を羨むのではなく、自分の庭を鑑賞しましょう。

第四章：「感謝」の種をまく
感謝は最も効果的な肥料であり、あなたの庭を活気づかせることができます。毎晩寝る前に数分間、今日感謝すべき3つの些細なことを見つけてみましょう。温かいコーヒー、友人からの挨拶、窓の外の美しい夕焼けかもしれません。これらの「感謝の種」をまくと、曇りの日でも、庭には常にいくつかの小さな花が静かに咲き、人生の素晴らしさを思い出させてくれることに気づくでしょう。

第五章：「境界線」という柵を立てる
健康な庭には、無断で踏み荒らされないための柵が必要です。あなたのエネルギーを過剰に消費する人や物事に「いいえ」と言うことを学ぶのは、庭のために柵を立てることです。境界線を設定することは自己中心的ではなく、自己愛です。それは自分のエネルギーが有限であることを理解し、庭の最も貴重な植物を育むためにそれを使うことを選択することを意味します。柵で守られた庭こそが、安全に、力強く成長できるのです。

第六章：枯れた枝葉を剪定する
庭では、枯れた葉やしおれた花は植物のエネルギーを消費します。心の庭において、これらは私たちが手放せずにいる古い信念、もはや役に立たない習慣、あるいは終わってしまった関係です。 「手放す」ことを学ぶのが剪定のプロセスです。勇気がいりますが、剪定後には新しい芽が育つスペースができ、庭は再び活気を取り戻します。定期的に自分の心を見つめ、優しく手放す必要があるものは何かを確認しましょう。

終章：庭はいつもここにある
あなたの心の庭は、常にあなたの中にあり、あなたの手入れを待っています。外の世界がどう変わろうとも、あなたはこの静かな場所に戻り、草を抜き、水をやり、種をまくことができます。あなたは自分自身の最高の庭師です。あなたの庭が、四季を通じて緑豊かで、花々に満ちあふれますように。`,
    book_emotions_content: `第一章：感情のスペクトルを理解する
感情は敵ではなく、メッセンジャーです。それらは私たちの内なる世界と外の環境に関する重要な情報を運んでいます。伝統的に、私たちは感情を「良い」「悪い」と単純に分類します。例えば、幸福は良い、悲しみは悪いといった具合です。しかし、この二分法は私たち自身の経験の理解を制限します。本書では、感情をスペクトルとして捉えます。高エネルギーから低エネルギー、快から不快まで、各感情には独自の機能と価値があります。\n例えば、「怒り」は高エネルギーで不快な感情です。それはしばしば私たちの境界線が侵害されたり、目標が妨げられたりしたときに現れ、警報のように自己防衛の行動を促します。「不安」は未来の不確実性への反応であり、潜在的な挑戦に備えるよう私たちに注意を促します。各感情の背後にある機能を理解することが、感情管理の第一歩です。

第二章：ABC認知行動モデル
感情は出来事自体によって直接引き起こされるのではなく、出来事に対する私たちの「信念」や「解釈」（Beliefs）によって引き起こされます。これは認知行動療法（CBT）の中核的な考え方であり、ABCモデルと呼ばれます。\n A (Activating Event)：活性化出来事。\n B (Beliefs)：出来事に対するあなたの解釈、思考、信念。\n C (Consequences)：あなたの感情的および行動的結果。\n例えば、試験に失敗した（A）ことが、「私は完全な失敗者だ」（B）という信念を引き起こし、その結果として抑うつ（C）につながるかもしれません。しかし、信念が「今回は準備が不十分だった、次回は勉強方法を変える必要がある」（B）であれば、結果は決意と計画（C）になる可能性があります。鍵となるのは、否定的な感情を引き起こす非合理的な信念（B）を特定し、それに挑戦することです。これを「認知の再構成」と呼びます。

第三章：感情調節の実践的戦略
1. ラベリング：自分の感情に言葉で名前を付けるだけ（例：「今、私は失望している」）で、扁桃体（脳の感情中枢）の活動を低下させ、感情から距離を置いて観察者の視点で見ることができます。\n2. 再評価：状況についての考え方を変えることで、それに対する感情的反応を変えること。例えば、「スピーチは審判の場だ」という考えを、「私の知識を共有する機会だ」と再評価します。\n3. 問題解決：感情が特定の問題によって引き起こされている場合、解決策に注意を向けます。問題を小さなステップに分解し、自分がコントロールできる部分に集中します。\n4. 感情の解放：運動、執筆、芸術創作、信頼できる人との会話など、強い感情を解放するための健康的なはけ口を見つけます。感情を抑圧すると、将来的にさらに破壊的な形で噴出することがよくあります。

第四章：感情的な回復力を育む
感情的な回復力（エモーショナル・レジリエンス）とは、決して否定的な感情を感じないことではなく、逆境を経験した後に効果的に回復する能力のことです。これは練習によって強化できるスキルです。\n回復力を築くための重要な要素には以下が含まれます：\n- 強固な社会的支援ネットワークを築く。\n- 楽観的でありながら現実的な思考パターンを育む。\n- 挑戦を成長の機会と見なす。\n- 規則正しい生活習慣と運動を維持する。\n- マインドフルネスとセルフコンパッションを実践する。\n感情の管理は目的地ではなく、生涯にわたる旅です。継続的な学習と実践を通じて、私たちはすべての感情と調和して生きることを学び、それらが私たちをコントロールする嵐ではなく、人生を導く賢明な羅針盤となるようにすることができます。`,
    book_mindfulness_content: `第一章：マインドフルネスとは？
マインドフルネスとは、意図的に、判断を加えず、現在の瞬間に注意を向ける練習です。それは心を空にすることでも、特別な状態に達することでもありません。むしろ、マインドフルネスは、内なる思考、感情、身体的感覚であれ、外の音、光、匂いであれ、現在のすべてを完全に受け入れることです。\n小川のほとりに座っていると想像してみてください。あなたの思考や感情は、水に浮かぶ葉っぱのように、現れては去っていきます。マインドフルネスの練習とは、岸辺に座って、それらの葉が通り過ぎるのを静かに観察することを学ぶことであり、流れに飛び込んで流されることではありません。この「執着せずに観察する」能力が、すべてのマインドフルネス練習の中核です。

第二章：アンカーとしての呼吸
マインドフルネスの練習では、さまよう注意を安定させるための「アンカー」が必要です。最も一般的で便利なアンカーは、私たちの呼吸です。\n練習：快適な姿勢で座るか横になります。注意をそっと呼吸に向けてください。鼻から空気が吸い込まれ、胸や腹部が上下し、そして空気が吐き出されるのを感じます。呼吸をコントロールする必要はありません。ただ、その自然なリズムを観察するだけです。\n心がさまよっていることに気づいたら（それはごく普通のことです！）、優しく、自己批判せずに、再び注意を呼吸に戻してください。注意がそれたのを戻すたびに、あなたはマインドフルネスを成功させており、ジムで「集中力の筋肉」を鍛えているようなものです。

第三章：ボディスキャン
身体は、私たちが現在を体験するための直接的な媒体です。ボディスキャンは、私たちが身体と再びつながり、微細な感覚に気づくのを助ける古典的な練習です。\n練習：横になり、目を閉じます。左足のつま先から始め、温かいスポットライトのように、注意を身体の各部位にゆっくりと移動させます：足の裏、足首、ふくらはぎ、膝…頭のてっぺんまで。各部位で、そこにあるどんな感覚でもただ感じ取ってください——温かさ、冷たさ、しびれ、痛み、あるいは何の感覚もないかもしれません。重要なのは「考える」ことではなく「感じること」です。この練習は、私たちが身体に根差し、不安を和らげるのに役立ちます。

第四章：日常生活におけるマインドフルネス
マインドフルネスは、ただ座って行う瞑想だけではありません。マインドフルな質を、日常生活のあらゆる瞬間に持ち込むことができます。\n- マインドフルな食事：次の食事の際、テレビや携帯電話の電源を切ってみてください。食べ物の色、香り、食感、味に集中します。ゆっくりと咀嚼し、食べ物があなたの身体を養うのを感じてください。\n- マインドフルな歩行：散歩に行くとき、足の裏が地面に触れる感覚、肌をなでる風、周りの景色や音に注意を向けます。\n- マインドフルな傾聴：誰かと話すとき、次に何を言おうか心の中で準備するのではなく、相手の話に完全に集中します。\nこれらの小さなマインドフルな瞬間を一日の中に組み込むことで、忙しい生活の中でも、心が少し休息できる静かな港が無数にあることに気づくでしょう。これがマインドフルネスの力です：平凡な瞬間を、気づきの体験に変えることです。`
  }
};
