const text = `
<?xml version="1.0" encoding="utf-8"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
   <teiHeader>
      <fileDesc>
         <titleStmt>
            <title>萬葉集第一、ニ</title>
            <author>藤原定家</author>
            <editor>合同会社AMANE</editor>
            <funder>関西大学</funder>
            <respStmt>
               <resp when="2020-09">TEI Encoding</resp>
               <name>合同会社AMANE</name>
            </respStmt>
            <respStmt>
               <resp when="2020-09">TEI Consulting</resp>
               <name>Kiyonori Nagasaki</name>
               <orgName>KU-ORCASユニット４「古典籍資料の情報資源化」</orgName>
              
            </respStmt>
            <respStmt>
               <resp when="2020-09">廣瀬本万葉集監修</resp>
               <name>乾善彦</name>
               <orgName>KU-ORCASユニット４「古典籍資料の情報資源化」</orgName>
            </respStmt>
         </titleStmt>
         <publicationStmt>
            <publisher>関西大学</publisher>
            <authority>合同会社AMANE</authority>
            <availability>
               <licence target="https://creativecommons.org/publicdomain/mark/1.0/"
                  >クリエイティブ・コモンズ・ライセンス0（CC0）</licence>
            </availability>
         </publicationStmt>
         <sourceDesc>
            <msDesc>
               <msIdentifier>
                  <institution>関西大学</institution>
                  <repository>関西大学図書館</repository>
                  <idno>210464909</idno>
               </msIdentifier>
            </msDesc>
         </sourceDesc>
      </fileDesc>
      <profileDesc>
         <creation><date when="1781-02-06">天明元年十二月二十四日</date></creation>
         <handNotes>
            <handNote>梨園春日冒預書写</handNote>
         </handNotes>
         <langUsage>
            <language ident="jpn">日本語</language>
         </langUsage>
      </profileDesc>
      <encodingDesc>
         <editorialDecl>
            <p><list>
                  <item> 1.
                     長歌・短歌・その他の本文という3種類のテキストを基本として構成されるものとして，それぞれ&lt;ab&gt;エレメント，&lt;lg&gt;エレメント，&lt;p&gt;エレメントでマークアップするとともに，長歌・短歌は@type属性で明示する．作者については@corresp属性でxml:id参照を付与する． </item>
                  <item> 2.
                     登場する人名は，&lt;back&gt;中の&lt;listPerson&gt;に&lt;person&gt;としてリストし，それぞれにxml:idを付与して他の箇所から参照できるようにする． </item>
                  <item> 3.
                     短歌の本文と訓の対応は，&lt;lg&gt;内でそれぞれ&lt;l&gt;でマークアップし，@xml:id/@correp属性で参照する．長歌の傍訓は，現在ルビのマークアップに際してよく用いられている&lt;seg&gt;タグと@type属性のruby,
                     rt, rbを用いて，傍訓とその対象を記述する． </item>
                  <item> 4.
                     本文以外のテキスト（ここでは便宜上，これを「書き入れ」と称する）については，種類に応じて&lt;note&gt;，&lt;add&gt;，&lt;corr&gt;エレメントを用いてマークアップを行う．&lt;note&gt;には内容的にみていくつかのタイプがあるため，これを@type属性で区別する．また，位置情報が重要になる場合もあるため，可能な限り，@place属性で位置情報を記述する．位置情報の値は，TEIガイドラインで提供されている値を用いることを基本とするが，上下左右の余白に記述されている場合は，margin-*というプレフィックスを値につけることで対応する． </item>
                  <item> 5. &lt;note&gt;の@typeは，本資料の書き入れの状況に鑑み，以下のように設定した．また，朱字については，今回は対象外とする．
                     　合点（異文，異訓，摘句），注，異文，異訓，訓，送り，割書 　なお，合点についてはさらに3つに細分化されるが，これは@subtype属性を用いて記述する．
                     　それぞれの由来については@resp属性で示す． </item>
                  <item> 6. 補入については，&lt;add&gt;エレメントを用い，@place属性をすべて付与する． </item>
                  <item> 7.
                     訂正については，ミセケチがある場合は&lt;del&gt;で削除を示して追記には&lt;add&gt;を付与し，全体を&lt;subst&gt;で囲んでいる．また，ミセケチがない場合は&lt;corr&gt;で訂正を示し，訂正の対象になっているものを&lt;sic&gt;，両者を&lt;choice&gt;で囲むことで訂正対象と訂正との関係を明示している．すなわち，以下のようになる．
                     ・ミセケチあり：
                     &lt;subst&gt;&lt;del&gt;誤字&lt;/del&gt;&lt;add&gt;訂正文字&lt;/add&gt;&lt;/subst&gt;
                     ・ミセケチなし：
                     &lt;choice&gt;&lt;sic&gt;誤字&lt;/sic&gt;&lt;corr&gt;訂正文字&lt;/corr&gt;&lt;/choice&gt;としている．いずれも，その由来については@resp属性で示す． </item>
                  <item> 8.
                     書き入れは，本文の任意の箇所が対象になることが多い．それを機械的に確認できるのであれば，機械的な分析を通じた発見の可能性はより大きくなる．そこで，&lt;note&gt;の対象になるテキストを明示するようにマークアップすることとする．具体的には，本文中の対象の始点に&lt;note&gt;エレメントを挿入し，終点には，@type=”noteEnd”属性を持たせた空タグの&lt;anchor&gt;エレメントを入れる．また，始点と終点がわかりにくい場合には，&lt;anchor&gt;に@xml:id
                     属性を付与し，&lt;note&gt;エレメントに用意されている@targetEndから参照することで，始点と終点の関係を明示できるようにする． </item>
                  <item> 9.
                     書き入れの中には，定家本を由来とするものと，そうでないものとの少なくとも2種類が存在することが想定される．それについては，@resp属性で示して機械的に区別できるようにする． </item>
                  <item> 10.
                     割書（割注）については，&lt;note&gt;タグでマークアップを行う．割書中の改行は，通常の改行&lt;lb/&gt;と区別するために，&lt;milestone
                     unit="wbr"/&gt;を用いる[ ]． </item>
                  <item> 11. インデントの大きさの表現には@styleを用い，emを単位として位置を大まかに確認できるようにする． </item>
                  <item> 12. 既存の研究成果や研究活動との親和性を少しでも確保するため，旧国歌大観番号をxml:idとして付与することで，参照をしやすいようにする． </item>
                  <item> 13.
                     &lt;pb/&gt;エレメントは，頁ごとに対応させ，既存の頁の数え方にあわせた値を持たせることを基本とし，後述するように，頁画像段位で，IIIFに対応するための@source属性と@corresp属性を付与する． </item>
                  <item> 14. IIIF Manifestとテキストデータの対応づけについては，まず，Manifest
                     URIが&lt;facsimile&gt;に，Canvas URIが&lt;surface&gt;に，フルサイズ画像のIIIF Image API
                     URIが&lt;graphic&gt;に対応するように，それぞれのURIを@source属性で記述する．その上で，テキストの位置と画像コマの対応については，&lt;surface&gt;にxml:id属性を付与し，その値を&lt;pb/&gt;
                     から@corresp属性で参照させて，各画像コマ中のテキストの始まりと&lt;pb/&gt;タグが対応づけられるようにする． </item>
               </list>
            </p>
         </editorialDecl>
      </encodingDesc>
   </teiHeader>
   <text>
      <body style="writing-mode:vertical-rl">
         <ab/>
         <div n="廣瀬本万葉集第二巻">
            <pb corresp="#page2805960"
               facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0044.tif/full/full/0/default.jpg"
               n="四六丁表" source="#page2805960"/>
            <div corresp="#盤姫皇后">
               <div xml:id="旧国歌大観番号八五">
                  <p xml:id="p00076">相聞</p>
                  <p xml:id="p00077">難波高津宮御宇天皇代<note resp="#万葉集" type="割書" xml:id="note00001"
                        >大鷦鷯天皇　謚曰仁徳天皇</note></p>
                  <p style="text-indent:3em" xml:id="p00078">盤姫皇后思　天皇御作歌四首</p>
                  <lg type="短歌" xml:id="manyo0085">
                     <l xml:id="manyo0085_01"><lb/>君之行氣長成奴山多都祢迎加将行待尓可将待</l>
                     <l corresp="#manyo0085_01" xml:id="manyokun0085_01"><lb/>キミカユキケナカクナリヌヤマタツネ
                           <note place="right" resp="#定家" type="注" xml:id="note00002"
                           >或本ムカヘニ</note>ムカヘカ<anchor type="noteEnd"/>ユカムマチニカマタ <note place="right"
                           resp="#定家" subtype="異訓" type="合点" xml:id="note00003">〽ム</note>モ<anchor
                           type="noteEnd"/></l>
                  </lg>
                  <p style="text-indent:3em" xml:id="p00079">右一首哥山上憶良臣類聚哥林載<note place="right"
                        resp="#定家" type="異文" xml:id="note00004">焉</note> 焉<anchor type="noteEnd"
                     /></p>
               </div>
               <pb corresp="#page2805961"
                  facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0045.tif/full/full/0/default.jpg"
                  n="四六丁裏" source="#page2805961"/>
               <div xml:id="旧国歌大観番号八六">
                  <lg type="短歌" xml:id="manyo0086">
                     <l xml:id="manyo0086_01"><lb/>如此許戀乍<note place="margin-head" resp="#定家"
                           subtype="貼紙" type="注" xml:id="note00005">かくばかり恋つゝもあらは− <milestone
                              unit="wbr"/>ナルベシ　不有者不ハ如何</note>不<anchor type="noteEnd"
                        />有者高山之磐根四巻手死奈麻死物呼</l>
                     <l corresp="#manyo0086_01" xml:id="manyokun0086_01"
                        ><lb/>カクハカリコヒツヽアラスハタカヤマノイハネシマキテシナマシモノヲ</l>
                  </lg>
                  <p style="text-indent:3em" xml:id="p00080">右一首哥山上憶良臣類聚歌林載焉</p>
               </div>
               <div xml:id="旧国歌大観番号八七">
                  <lg type="短歌" xml:id="manyo0087">
                     <l xml:id="manyo0087_01"><lb/>在管裳君乎者将待打靡吾黒髪尓霜乃置萬代日</l>
                     <l corresp="#manyo0087_01" xml:id="manyokun0087_01"><lb/>アリツヽモキミヲハマタムウチナヒ <note
                           place="right" resp="#定家" type="注" xml:id="note00006">或本キ</note>ク<anchor
                           type="noteEnd"/>ワカクロカミニシモ <note place="right" resp="#定家" type="注"
                           xml:id="note00007">ノ字無之</note>ノ<anchor type="noteEnd"/>ヲキマヨヒ</l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号八八">
                  <lg type="短歌" xml:id="manyo0088">
                     <l xml:id="manyo0088_01"><lb/>秋田之穂上尓霧相朝霞何時邊乃方二我戀将息</l>
                     <l corresp="#manyo0088_01" xml:id="manyokun0088_01"><lb/>アキノタノホノウヘニキリ <note
                           place="right" resp="#定家" type="注" xml:id="note00008">或アフ</note>アヒ<anchor
                           type="noteEnd"/>アサカスミイツヘノカタニワカコヒヤマム</l>
                  </lg>
                  <p style="text-indent:3em" xml:id="p00081">右一首古歌集中出</p>
               </div>
               <pb n="四七丁表"/>
               <div xml:id="旧国歌大観番号八九">
                  <p style="text-indent:3em" xml:id="p00082">或本歌曰</p>
                  <lg type="短歌" xml:id="manyo0089">
                     <l xml:id="manyo0089_01"><lb/>居明而君乎者持待奴婆珠能吾黒髪尓霜者零騰文</l>
                     <l corresp="#manyo0089_01" xml:id="manyokun0089_01"><lb/>ヰアカシテキミヲハマタムヌ<note
                           place="right" resp="#定家" type="異訓" xml:id="note00009">マ</note>マ<anchor
                           type="noteEnd"/> タマノワカクロカミニシモハ<note place="right" resp="#定家"
                           targetEnd="#note0001e" type="注" xml:id="note00010">或本フル</note>
                        <note place="left" resp="#定家" targetEnd="#note0002e" type="注"
                           xml:id="note00011">伊本御本云フルヲタィ</note> ヲク<anchor type="noteEnd"
                           xml:id="note0001e"/>トモ<anchor type="noteEnd" xml:id="note0002e"/></l>
                  </lg>
               </div>
            </div>
            <div corresp="#軽太郎女">
               <div xml:id="旧国歌大観番号九〇">
                  <p style="text-indent:2em" xml:id="p00083">古事記曰軽太子姧軽太郎女故其太子流於伊豫陽也</p>
                  <p style="text-indent:2em" xml:id="p00084">此時衣通王不堪戀慕而追<subst>
                        <del>羅</del>
                        <add rend="right" resp="#定家" xml:id="add00004">徃</add>
                     </subst>時歌曰</p>
                  <lg type="短歌" xml:id="manyo0090">
                     <l xml:id="manyo0090_01"><lb/>君之行氣長久成奴山多豆乃迎乎将徃待尓者不待</l>
                     <pb corresp="#page2805962"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0046.tif/full/full/0/default.jpg"
                        n="四七丁裏" source="#page2805962"/>
                     <l corresp="#manyo0090_01" xml:id="manyokun0090"
                        ><lb/>キミカユキケナカクナリヌヤマタツノムカヘヲユカムマチニハマタシ</l>
                  </lg>
                  <p style="text-indent:3em" xml:id="p00085">此云山多豆者是今造木者也</p>
                  <p style="text-indent:3em" xml:id="p00086">右一首歌古事記與類聚歌林所説不同 <note place="right"
                        resp="#定家" type="注" xml:id="note00012">伊云哥主</note>歌<add place="right"
                        resp="#定家" xml:id="add00001">主</add><anchor type="noteEnd"/></p>
                  <p style="text-indent:3em" xml:id="p00087">亦異焉因檢日本紀曰難波高津宮御宇大</p>
                  <p style="text-indent:3em" xml:id="p00088">鷦鷯天皇廿二年春正月天皇語皇后納八田</p>
                  <p style="text-indent:3em" xml:id="p00089">皇女将為妃時皇后不聽爰天皇歌以乞於皇</p>
                  <p style="text-indent:3em" xml:id="p00090">后云々</p>
                  <pb n="四八丁表"/>
                  <p style="text-indent:3em" xml:id="p00091">卅年秋九月乙卯朔乙丑 <note place="margin-head"
                        resp="#定家" type="注" xml:id="note00013">履中天皇母<milestone unit="wbr"
                           />皇后磐之媛<milestone unit="wbr"/>菖城襲津彦女也 <milestone unit="wbr"
                        />二年三月戊寅/立</note>皇后<anchor type="noteEnd"/>遊行紀伊國到熊野</p>
                  <p style="text-indent:3em" xml:id="p00092">岬被其處之<note place="right" resp="#定家"
                        type="訓" xml:id="note00014">ミツナカシハ</note>
                     <note place="left" resp="#定家" type="注" xml:id="note00015">ミヲリノハィ</note>
                        御綱葉<anchor type="noteEnd"/><anchor type="noteEnd"/>而還於是天皇伺皇后不</p>
                  <p style="text-indent:3em" xml:id="p00093">在而娶 <note place="margin-head"
                        resp="#定家" type="注" xml:id="note00016">皇后八田皇女<milestone unit="wbr"
                           />卅八年正月<milestone unit="wbr"/>戊寅立</note> 八田皇女<anchor type="noteEnd"
                     />納於宮中時皇后到難波濟</p>
                  <p style="text-indent:3em" xml:id="p00094">聞天皇合八田皇女大恨之云々</p>
                  <p style="text-indent:3em" xml:id="p00095">亦曰 <note place="right" resp="#定家"
                        type="訓" xml:id="note00017">トヲツアスカヲアサツマ</note>遠飛鳥<anchor type="noteEnd"/>宮御宇
                        <note place="margin-head" resp="#定家" targetEnd="#note0003e" type="注"
                        xml:id="note00018">允恭天皇 <milestone unit="wbr"/>仁徳第四<milestone unit="wbr"
                           />皇子<milestone unit="wbr"/>母同履中</note>
                     <note place="right" resp="#定家" targetEnd="#note0016e" type="訓"
                        xml:id="note00019">ヲアサツマワカコノ</note>雄朝嬬稚子<anchor type="noteEnd"
                        xml:id="note0016e"/> 宿祢天皇<anchor type="noteEnd" xml:id="note0003e"/></p>
                  <p style="text-indent:3em" xml:id="p00096">廿三年春三月甲<note place="right" resp="#定家"
                        subtype="異文" type="合点" xml:id="note00020">〽子</note>午<anchor type="noteEnd"/>
                        朔庚午<anchor type="noteBeginning" xml:id="notestart0001"/>木梨<subst>
                        <del>軽</del>
                        <add rend="right" resp="#定家" xml:id="add00005">軽</add>
                     </subst>皇子<anchor type="noteEnd" xml:id="noteEnd0001"/>為大</p>
                  <p style="text-indent:3em" xml:id="p00097">子容姿佳麗見者自感同母妹<subst>
                        <del>軽</del>
                        <add rend="right" resp="#定家" xml:id="add00006">軽</add>
                     </subst>太娘皇女亦</p>
                  <pb corresp="#page2805963"
                     facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0047.tif/full/full/0/default.jpg"
                     n="四八丁裏" source="#page2805963"/>
                  <note place="margin-head" resp="#定家" target="#notestart0001"
                     targetEnd="#noteEnd0001" type="注" xml:id="note00021">木梨軽皇子<milestone unit="wbr"
                        />廿三年三月立<milestone unit="wbr"/> 為皇太子允/恭第一皇子<milestone unit="wbr"
                        />母皇后忍坂<milestone unit="wbr"/>
                     <note place="margin-right" resp="#定家" targetEnd="#note0011e" type="注"
                        xml:id="note00022"><note place="right" resp="#定家" targetEnd="#note0013e"
                           type="訓" xml:id="note00023">ワカノケフタマタ</note>
                        <note place="right" resp="#定家" targetEnd="#note0015e" type="注"
                           xml:id="note00024">應神御子第八</note> 稚野毛二<note corresp="#0014" place="right"
                           resp="#定家" type="注" xml:id="note00025">派</note> 派<anchor type="noteEnd"
                           xml:id="note0013e"/><anchor type="noteEnd" xml:id="note0014e"/>皇子<anchor
                           type="noteEnd" xml:id="note0015e"/>女也</note>
                     <note place="margin-right" resp="#定家" targetEnd="#note0012e" type="注"
                        xml:id="note00026">衣通姫姉二人納之</note> 大中姫<anchor type="noteEnd"
                        xml:id="note0011e"/><anchor type="noteEnd" xml:id="note0012e"/>
                     <milestone unit="wbr"/>允恭四十二年<milestone unit="wbr"/>天皇崩 <milestone unit="wbr"
                        />太子暴虐<milestone unit="wbr"/>百姓不従穴穂皇子殺之即帝位云々是為安康</note>
                  <p style="text-indent:3em" xml:id="p00098">艶妙也云々 </p>
                  <p style="text-indent:3em" xml:id="p00099">遂竊通乃悒懐少息廿四年夏六月御羮汁凝</p>
                  <p style="text-indent:3em" xml:id="p00100">以作氷天皇異之卜其所由卜者曰有内乱盖親</p>
                  <p style="text-indent:3em" xml:id="p00101">々相姧乎云々</p>
                  <p style="text-indent:3em" xml:id="p00102">仍移<note place="right" resp="#定家"
                        type="注" xml:id="note00027">第二皇女母皆同 <note resp="#定家" type="割書"
                           xml:id="note00028">五男<milestone unit="wbr"/>四女</note></note>太娘皇女<anchor
                        type="noteEnd"/> 於伊豫者今案二代二<note place="right" resp="#定家" type="異文"
                        xml:id="note00029">時</note>尓<anchor type="noteEnd"/>不見此</p>
                  <p style="text-indent:3em" xml:id="p00103">歌也</p>
               </div>
            </div>
            <div corresp="#天智天皇">
               <div xml:id="旧国歌大観番号九一">
                  <p xml:id="p00104">近江大津宮御宇天皇代<note resp="#万葉集" type="割書" xml:id="note00030"><note
                           place="right" resp="#定家" type="訓" xml:id="note00031">アメノミコトアケワケ</note>
                           天命開別<anchor type="noteEnd"/>天皇謚曰天智天皇</note></p>
                  <pb n="四九丁表"/>
                  <p style="text-indent:3em" xml:id="p00105">天皇賜鏡王女御謌一首</p>
                  <lg type="短歌" xml:id="manyo0091">
                     <l xml:id="manyo0091_01"><lb/>妹之家毛継而見麻思乎山跡有大嶋嶺尓家母有猿尾</l>
                     <l corresp="#manyo0091_01" xml:id="manyokun0091_01"><lb/>イモカイヘモ<note
                           place="right" resp="#定家" type="異訓" xml:id="note00032">ツキテミ</note>
                           タエスミ<anchor type="noteEnd"/>マシヲヤマトナルオホシマミネニイヘモアラマシヲ</l>
                  </lg>
                  <p style="text-indent:4em" xml:id="p00106">一云妹之當継而毛見武尓</p>
                  <p style="text-indent:4em" xml:id="p00107">一云家居麻之乎</p>
               </div>
            </div>
            <div corresp="#鏡王女">
               <div xml:id="旧国歌大観番号九二">
                  <p style="text-indent:3em" xml:id="p00108">鏡王女奉和御歌一首</p>
                  <lg type="短歌" xml:id="manyo0092">
                     <l xml:id="manyo0092_01"><lb/>秋山之樹下隠逝水乃吾許曽益目御念従者</l>
                     <pb corresp="#page2805964"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0048.tif/full/full/0/default.jpg"
                        n="四九丁裏" source="#page2805964"/>
                     <l corresp="#manyo0092_01" xml:id="manyokun0092_01"
                        ><lb/>アキヤマノコノシタカクレユクミツノワレコソマサメミオモヒヨリハ</l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号九三">
                  <p style="text-indent:3em" xml:id="p00109">内大臣藤原卿娉鏡王女時鏡王女贈内大臣歌一首</p>
                  <lg type="短歌" xml:id="manyo0093">
                     <l xml:id="manyo0093_01"><lb/>玉匣覆乎安美美開而行者君名者雖有吾名之惜裳モ</l>
                     <l corresp="#manyo0093_01" xml:id="manyokun0093_01"><lb/>タマクシケオホフ <note
                           place="right" resp="#定家" type="注" xml:id="note00033">コト伊</note>ヲヤ<anchor
                           type="noteEnd"/>スミアケテイカハキミカナハアレトワカナ <note place="right" resp="#定家"
                           type="異訓" xml:id="note00034">ノ</note>ヲ<anchor type="noteEnd"/>ヽシモ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#内大臣藤原卿">
               <div xml:id="旧国歌大観番号九四">
                  <p style="text-indent:3em" xml:id="p00110">内大臣藤原卿報贈鏡王女哥一首</p>
                  <lg type="短歌" xml:id="manyo0094">
                     <l xml:id="manyo0094_01"><lb/>玉匣将見圓山乃狭名葛佐不寐者遂尓有勝麻之目</l>
                     <l corresp="#manyo0094_01" xml:id="manyokun0094_01"><lb/>タマクシケミムマトヤマノサ <note
                           place="right" resp="#定家" subtype="異訓" type="合点" xml:id="note00035"
                           >〽ナ</note>ネ<anchor type="noteEnd"/>カツラサネスハ <note place="right" resp="#定家"
                           type="注" xml:id="note00036">ツヰニ伊</note>ツラキ<anchor type="noteEnd"/>アリ
                           <note place="right" resp="#定家" targetEnd="#note0037e" type="注"
                           xml:id="note00037">或カテ</note>カセ<anchor type="noteEnd" xml:id="note0037e"
                        />マシ <note place="right" resp="#定家" targetEnd="#note00038e" type="異訓"
                           xml:id="note00038">ヤ</note>
                        <note place="left" resp="#定家" subtype="異訓" targetEnd="#note00039e" type="合点"
                           xml:id="note00039">〽モ</note> ヲ<anchor type="noteEnd" xml:id="note00038e"
                           /><anchor type="noteEnd" xml:id="note00039e"/></l>
                  </lg>
                  <pb n="五〇丁表"/>
                  <p style="text-indent:3em" xml:id="p00111">或本歌曰玉匣三室戸山乃</p>
               </div>
               <div xml:id="旧国歌大観番号九五">
                  <p style="text-indent:3em" xml:id="p00112">内大臣藤原卿娶釆女安見児時作歌一首</p>
                  <lg type="短歌" xml:id="manyo0095">
                     <l xml:id="manyo0095_01"><lb/>吾者毛也安見児得有皆人乃得難尓為云<note place="left" resp="#定家"
                           type="訓" xml:id="note00040">ヤスミコ</note> 安見<add place="right" resp="#定家"
                           xml:id="add00002">児</add><anchor type="noteEnd"/>衣多利</l>
                     <l corresp="#manyo0095_01" xml:id="manyokun0095_01"><lb/>ワレハモヤヽ <note
                           place="right" resp="#定家" targetEnd="#note0004e" type="注"
                           xml:id="note00041">或スラヲ</note>スミ <note place="left" resp="#定家"
                           targetEnd="#note0005e" type="注" xml:id="note00042">コィ</note>ヲ <anchor
                           type="noteEnd" xml:id="note0004e"/><anchor type="noteEnd"
                           xml:id="note0005e"/> エタリミナヒトノエカテニストイフヤス<note place="right" resp="#定家"
                           type="異訓" xml:id="note00043">ミコ</note> ラミ<anchor type="noteEnd"/>エタリ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#久米禅師">
               <div xml:id="旧国歌大観番号九六">
                  <p style="text-indent:3em" xml:id="p00113">久米禅師娉石川郎女時哥五首</p>
                  <lg type="短歌" xml:id="manyo0096">
                     <l xml:id="manyo0096_01"><lb/>水薦苅信濃乃真弓吾引者宇真人佐備而不欲 <lb/>常将言可聞<note resp="#万葉集"
                           type="割書" xml:id="note00044">禅師</note></l>
                     <pb corresp="#page2805965"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0049.tif/full/full/0/default.jpg"
                        n="五〇丁裏" source="#page2805965"/>
                     <l corresp="#manyo0096_01" xml:id="manyokun0096_01">
                        <lb/><note place="right" resp="#定家" subtype="摘句" targetEnd="#note0017e"
                           type="合点" xml:id="note00045">〽ミコモカルナナノヽイユミ</note> ミコモカルシナノヽマユミワカヒ<note
                           place="right" resp="#定家" subtype="異訓" type="合点" xml:id="note00046"
                           >〽カ</note>ケ<anchor type="noteEnd"/> ハ<note place="right" resp="#定家"
                           type="異訓" xml:id="note00047">ム</note>ウ<anchor type="noteEnd"/>マヒトサヒテ
                           <note place="right" resp="#定家" type="注" xml:id="note00048"
                           >或イナト</note><note place="left" resp="#定家" type="注" xml:id="note00049"
                           >伊云御本云イナト</note> イネト<anchor type="noteEnd"/><anchor type="noteEnd"
                           />イハムカモ<anchor type="noteEnd" xml:id="note0017e"/></l>
                  </lg>
               </div>
            </div>
            <div corresp="#石川郎女">
               <div xml:id="旧国歌大観番号九七">
                  <lg type="短歌" xml:id="manyo0097">
                     <l xml:id="manyo0097_01"><lb/>三薦苅信濃乃真弓不引為而強佐由行事乎知 <lb/>跡言莫君二<note resp="#万葉集"
                           type="割書" xml:id="note00050">郎女</note></l>
                     <l corresp="#manyo0097_01" xml:id="manyokun0097_01"><lb/>
                        <note place="margin-head" resp="#定家" targetEnd="#note0008e" type="注"
                           xml:id="note00051">伊云依<milestone unit="wbr"/>御本<milestone unit="wbr"
                           />読入</note> ミコモカルシナノヽマユミヒカスシテヒサユワサ <note place="right" resp="#定家"
                           targetEnd="#note00052e" type="異訓" xml:id="note00052">ル</note>ヲ<anchor
                           type="noteEnd" xml:id="note00052e"/>
                        <note place="right" resp="#定家" targetEnd="#note00053e" type="異訓"
                           xml:id="note00053">ワサ</note>シル<anchor type="noteEnd" xml:id="note00053e"
                        />ト <note place="right" resp="#定家" targetEnd="#note00054e" type="異訓"
                           xml:id="note00054">ヲ</note>イ<anchor type="noteEnd" xml:id="note00054e"
                           />ハナクニ<anchor type="noteEnd" xml:id="note0008e"/></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号九八">
                  <lg type="短歌" xml:id="manyo0098">
                     <l xml:id="manyo0098_01"><lb/>梓弓引者随意依目友後心乎知勝奴鴨<note resp="#万葉集" type="割書"
                           xml:id="note00055">郎女</note></l>
                     <l corresp="#manyo0098_01" xml:id="manyokun0098_01"
                        ><lb/>アツサユミヒカハネカヒニヨラメトモノチノコヽロヲシリカネヌカモ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#久米禅師">
               <div xml:id="旧国歌大観番号九九">
                  <lg type="短歌" xml:id="manyo0099">
                     <l xml:id="manyo0099_01"><lb/>梓弓都良絃取波氣引人者後心乎知人曽引<note resp="#万葉集" type="割書"
                           xml:id="note00056">禅師</note></l>
                     <pb n="五一丁表"/>
                     <l corresp="#manyo0099_01" xml:id="manyokun0099_01"><lb/>アツサユミツ<note
                           place="right" resp="#定家" type="異訓" xml:id="note00057">ラ</note> ル<anchor
                           type="noteEnd"/>ヲトリハケヒクヒトハノチノコヽロヲシルヒトソヒク</l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一〇〇">
                  <lg type="短歌" xml:id="manyo0100">
                     <l xml:id="manyo0100_01"><lb/>東人之荷向篋乃荷之緒尓毛妹情尓乗尓家留香聞<note resp="#万葉集" type="割書"
                           xml:id="note00058">禅師</note></l>
                     <l corresp="#manyo0100_01" xml:id="manyokun0100_01"><lb/>アツマ<note place="right"
                           resp="#定家" type="異訓" xml:id="note00059">ツノヽ</note>ヒト<anchor
                           type="noteEnd"/>
                        <note place="right" resp="#定家" type="注" xml:id="note00060"
                           >伊云御本云ニキノハラノヽニノヲニモ</note>サキノハコノカノヲニモ<anchor type="noteEnd"
                        />イモカコヽロニノリニケルカモ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#大伴宿祢">
               <div xml:id="旧国歌大観番号一〇一">
                  <p style="text-indent:3em" xml:id="p00114">大伴宿祢娉巨勢郎女時謌一首</p>
                  <p style="text-indent:3em" xml:id="p00115">大伴宿祢諱曰安麿也難波朝右大臣大紫大伴長徳</p>
                  <p style="text-indent:3em" xml:id="p00116">卿之第六子<note place="right" resp="#定家"
                        type="訓" xml:id="note00061">ナラノ</note>平城<anchor type="noteEnd"
                     />朝任大納言兼大将軍薨也</p>
                  <lg type="短歌" xml:id="manyo0101">
                     <l xml:id="manyo0101_01"><lb/>玉葛實不成樹尓波千磐破神曽著常云不成樹別尓</l>
                     <pb corresp="#page2805966"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0050.tif/full/full/0/default.jpg"
                        n="五一丁裏" source="#page2805966"/>
                     <l corresp="#manyo0101_01" xml:id="manyokun0101_01"
                        ><lb/>タマカツラミナラヌキニハチハヤフルカミソツクトイフナラヌキコトニ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#巨勢郎女">
               <div xml:id="旧国歌大観番号一〇二">
                  <p style="text-indent:3em" xml:id="p00117">巨勢郎女報贈謌一首<note resp="#万葉集" type="割書"
                        xml:id="note00062">即近江朝大納言巨勢人卿之女也</note></p>
                  <lg type="短歌" xml:id="manyo0102">
                     <l xml:id="manyo0102_01"><lb/><note place="right" resp="#定家" subtype="摘句"
                           type="合点" xml:id="note00063">〽タマカツラハナノミサキテナラサラハ</note>
                           玉葛花耳開而不成有者誰戀尓有目吾孤非念乎<anchor type="noteEnd"/></l>
                     <l corresp="#manyo0102_01" xml:id="manyokun0102_01"><lb/>タマカツラハナノミサキテミ <note
                           place="right" resp="#定家" subtype="異訓" targetEnd="#note0018e" type="合点"
                           xml:id="note00064">伊〽ナラスア <note place="right" resp="#定家" subtype="異訓"
                              targetEnd="#note0019e" type="合点" xml:id="note00065">〽ラ</note> レ<anchor
                              type="noteEnd" xml:id="note0019e"/>ハ</note>ナラスハ <anchor type="noteEnd"
                           xml:id="note0018e"/>タカコヒニアラメワカコヒオモフヲ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#天武天皇">
               <div xml:id="旧国歌大観番号一〇三">
                  <p xml:id="p00118">明日香清御原宮御宇天皇代<note resp="#万葉集" type="割書" xml:id="note00066"
                           >天渟<note place="right" resp="#定家" subtype="異文" targetEnd="#note00067e"
                           type="合点" xml:id="note00067"> 〽名</note>中<anchor type="noteEnd"
                           xml:id="note00067e"/>原<note place="right" resp="#定家"
                           targetEnd="#note00068e" type="訓" xml:id="note00068">オキノ</note> 瀛真<anchor
                           type="noteEnd" xml:id="note00068e"/>人天皇<milestone unit="wbr"
                        />謚曰天武天皇</note></p>
                  <p style="text-indent:3em" xml:id="p00119">天皇賜藤原夫人御歌一首</p>
                  <lg type="短歌" xml:id="manyo0103">
                     <l xml:id="manyo0103_01"><lb/>吾里尓大雪落有大原乃古尓之郷尓落巻者後</l>
                     <pb n="五二丁表"/>
                     <l corresp="#manyo0103_01" xml:id="manyokun0103_01"><lb/>ワカサトニオホユキフレリオホハラノ
                           <note place="right" resp="#定家" type="注" xml:id="note00069"
                           >或本フレル</note>フリニシ<anchor type="noteEnd"/>サトニフラマクハノチ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#藤原夫人">
               <div xml:id="旧国歌大観番号一〇四">
                  <p style="text-indent:3em" xml:id="p00120">藤原夫人奉和歌一首</p>
                  <lg type="短歌" xml:id="manyo0104">
                     <l xml:id="manyo0104_01"><lb/>吾岡之於可美尓言而令落雪之摧之彼所尓塵家武</l>
                     <l corresp="#manyo0104_01" xml:id="manyokun0104_01"><lb/>ワカヲカノオカミニイヒテフラシ <note
                           place="right" resp="#定家" type="注" xml:id="note00070">伊云御本云<milestone
                              unit="wbr"/>メシ</note>ムル<anchor type="noteEnd"/> ユキノクタ<note
                           place="right" resp="#定家" type="注" xml:id="note00071">或ケノ</note>ケテ<anchor
                           type="noteEnd"/>ソ <note place="right" resp="#定家" type="注"
                           xml:id="note00072">コ歟</note>ラ<anchor type="noteEnd"/>ニチルカモ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#大伯皇女">
               <div xml:id="旧国歌大観番号一〇五">
                  <p xml:id="p00121">藤原宮御宇高天原廣野姫天皇代</p>
                  <p style="text-indent:3em" xml:id="p00122">天皇謚曰持統天皇元年丁亥十一<note place="right"
                        resp="#定家" type="注" xml:id="note00073">月歟</note>年<anchor type="noteEnd"
                     />譲位軽太子</p>
                  <p style="text-indent:3em" xml:id="p00123">尊号曰太上天皇也</p>
                  <pb corresp="#page2805967"
                     facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0051.tif/full/full/0/default.jpg"
                     n="五二丁裏" source="#page2805967"/>
                  <p style="text-indent:3em" xml:id="p00124"><note place="right" resp="#定家" type="注"
                        xml:id="note00074">天武第三子母大田皇女天智女</note>大津皇子<anchor type="noteEnd"/>
                        竊下於伊勢神宮上来時<note place="right" resp="#定家" targetEnd="#note0006e" type="注"
                        xml:id="note00075">伊勢　天武第一女</note>
                     <note place="left" resp="#定家" targetEnd="#note0007e" type="注"
                        xml:id="note00076">母同大津皇子</note>大 <note place="right" resp="#定家"
                        subtype="異文" targetEnd="#note0009e" type="合点" xml:id="note00077"
                        >〽来</note>伯<anchor type="noteEnd" xml:id="note0009e"/> 皇女<anchor
                        type="noteEnd" xml:id="note0006e"/><anchor type="noteEnd" xml:id="note0007e"
                     />御作歌二首</p>
                  <lg type="短歌" xml:id="manyo0105">
                     <l xml:id="manyo0105_01"><lb/>吾勢祜乎倭邊遣登佐夜深而鷄鳴露尓吾立所霑之</l>
                     <l corresp="#manyo0105_01" xml:id="manyokun0105_01"><lb/><note place="right"
                           resp="#定家" subtype="摘句" type="合点" xml:id="note00078">〽アカツキツユ</note>ワカセコヲ
                           ヤマトヘヤルトサヨフケテアカツキツユニワカタチヌレ<note place="right" resp="#定家" subtype="異訓"
                           type="合点" xml:id="note00079">〽ヌ</note>シ<anchor type="noteEnd"/><anchor
                           type="noteEnd"/></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一〇六">
                  <lg type="短歌" xml:id="manyo0106">
                     <l xml:id="manyo0106_01"><lb/>二人行杼去過難寸秋山乎如何君之獨越武</l>
                     <l corresp="#manyo0106_01" xml:id="manyokun0106_01"><lb/>フタリ<note place="right"
                           resp="#定家" type="注" xml:id="note00080">伊云御本云ユ</note>
                        <note place="right" resp="#定家" type="注" xml:id="note00081">或ユ</note>イ<anchor
                           type="noteEnd"/><anchor type="noteEnd"/> ケトユキスキカタキアキヤマヲイカテカキミカヒトリ<note
                           place="right" resp="#定家" type="注" xml:id="note00082"
                           >或コエケム</note>コユラム<anchor type="noteEnd"/></l>
                  </lg>
               </div>
            </div>
            <div corresp="#大津皇子">
               <div xml:id="旧国歌大観番号一〇七">
                  <p style="text-indent:3em" xml:id="p00125">大津皇子贈石川郎女御歌一首</p>
                  <lg type="短歌" xml:id="manyo0107">
                     <l xml:id="manyo0107_01"><lb/>足日木乃山之四付二妹待跡吾立所沾山之四附二</l>
                     <pb n="五三丁表"/>
                     <l corresp="#manyo0107_01" xml:id="manyokun10107_01"><lb/>
                        <note place="right" resp="#定家" subtype="摘句" type="合点" xml:id="note00083"
                           >〽山の溜</note>アシヒキノ ヤマノシツクニイモマツトワレタチヌレヌヤマノシツクニ<anchor type="noteEnd"/></l>
                  </lg>
               </div>
            </div>
            <div corresp="#石川郎女">
               <div xml:id="旧国歌大観番号一〇八">
                  <p style="text-indent:3em" xml:id="p00126">石川郎女奉和哥一首</p>
                  <lg type="短歌" xml:id="manyo0108">
                     <l xml:id="manyo0108_01">
                        <lb/><seg type="ruby" xml:id="seg00001"><seg type="rb" xml:id="seg00002"
                              >吾乎待跡君之沾計武足日木能山之四附二成益物乎</seg>
                           <lb/>
                           <seg rend="right" type="rt" xml:id="seg00003"
                              >ワレヲマツトキミカヌレケムアシヒキノヤマノシツクニナラマシモノヲ</seg></seg></l>
                     <l corresp="#manyo0108_01" xml:id="manyokun0108_01"
                        ><lb/>ワレヲマツトキミカヌレケムアシヒキノヤマノシツクニナラマシモノヲ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#大津皇子">
               <div xml:id="旧国歌大観番号一〇九">
                  <p style="text-indent:3em" xml:id="p00127">大津皇子竊婚石川女郎時津守連通占露</p>
                  <p style="text-indent:3em" xml:id="p00128">其事皇子御作歌一首<note resp="#万葉集" type="割書"
                        xml:id="note00084">未詳</note></p>
                  <lg type="短歌" xml:id="manyo0109">
                     <l xml:id="manyo0109_01"><lb/>大船之津守之占尓将告登波益為尓知而我二人宿之</l>
                     <pb corresp="#page2805968"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0052.tif/full/full/0/default.jpg"
                        n="五三丁裏" source="#page2805968"/>
                     <l corresp="#manyo0109_01" xml:id="manyokun0109_01"><lb/>オホフネノツモリノウラニツ <note
                           place="right" resp="#定家" type="異訓" xml:id="note00085">ケ</note>キ<anchor
                           type="noteEnd"/>ムトハマサシニシリテワカフタリネシ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#日並皇子">
               <div xml:id="旧国歌大観番号一一〇">
                  <p style="text-indent:3em" xml:id="p00129">日並皇子尊贈賜石川女郎御歌一首<note resp="#万葉集"
                        type="割書" xml:id="note00086">女郎字曰大名<milestone unit="wbr"/>児也</note></p>
                  <lg type="短歌" xml:id="manyo0110">
                     <l xml:id="manyo0110_01"><lb/><note place="right" resp="#定家" subtype="摘句"
                           type="合点" xml:id="note00087">〽カルクサノツカノアヒタ</note>
                           大名児彼方野邊尓苅草乃束之間毛吾忘目八<anchor type="noteEnd"/></l>
                     <l corresp="#manyo0110_01" xml:id="manyokun0110_01"><lb/>オホナコ<note
                           place="right" resp="#定家" type="注" xml:id="note00088">伊云御本云 <milestone
                              unit="wbr"/>ノ</note>カ<anchor type="noteEnd"
                        />ヲチカタノヘニカルクサノツカノアヒタモワレワスレメヤ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#弓削皇子">
               <div xml:id="旧国歌大観番号一一一">
                  <p style="text-indent:3em" xml:id="p00130">幸于吉野宮時<note place="right" resp="#定家"
                        type="注" xml:id="note00089">母同大津皇子</note> 弓削皇子<anchor type="noteEnd"
                     />贈與額田王歌一首</p>
                  <lg type="短歌" xml:id="manyo0111">
                     <l xml:id="manyo0111_01"><lb/>古尓戀流鳥鴨弓絃葉乃三井能上従鳴渡逝久</l>
                     <l corresp="#manyo0111_01" xml:id="manyokun0111_01"><lb/><note place="right"
                           resp="#定家" subtype="摘句" type="合点" xml:id="note00090">
                           〽ユツルハノミヰノウヘヨリ</note>イニシヘニコフルトリカモユツルハノミヰノウヘヨリナキワタリユク<anchor type="noteEnd"
                        /></l>
                  </lg>
               </div>
            </div>
            <pb n="五四丁表"/>
            <div corresp="#額田王">
               <div xml:id="旧国歌大観番号一一二">
                  <p style="text-indent:3em" xml:id="p00131">額田王奉和歌一首<note resp="#万葉集" type="割書"
                        xml:id="note00091">従倭京進之</note></p>
                  <lg type="短歌" xml:id="manyo0112">
                     <l xml:id="manyo0112_01"><lb/><note place="head" resp="#定家"
                           targetEnd="#note0010e" type="注" xml:id="note00092">伊云依假<milestone
                              unit="wbr"/>名本読入</note>古尓戀良武鳥者霍公鳥<note place="right" resp="#定家"
                           type="注" xml:id="note00093">伊云御本云<milestone unit="wbr"/>益</note> 盖<anchor
                           type="noteEnd"/>哉鳴之吾<note place="right" resp="#定家" subtype="異文" type="合点"
                           xml:id="note00094">〽恋</note>念<anchor type="noteEnd"/> 流<note
                           place="right" resp="#定家" type="注" xml:id="note00095">伊云御本云<milestone
                              unit="wbr"/>暮</note>基<anchor type="noteEnd"/>騰<anchor type="noteEnd"
                           xml:id="note0010e"/></l>
                     <l corresp="#manyo0112_01" xml:id="manyokun0112_01"><lb/>イニシヘニコフラムトリハホトヽキス
                           <note place="right" resp="#定家" type="注" xml:id="note00096"
                           >伊云御本云マシテ</note><note place="right" resp="#定家" type="注"
                           xml:id="note00097">今案マシテ</note>ケタシ<anchor type="noteEnd"/><anchor
                           type="noteEnd"/> ヤナキシワカ<note place="right" resp="#定家" subtype="異訓"
                           type="合点" xml:id="note00098">〽コフル</note>オモヘル<anchor type="noteEnd"
                        />コト</l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一一三">
                  <p style="text-indent:3em" xml:id="p00132">従吉野折取蘿生松折柯遣時額田王奉入歌一首</p>
                  <lg type="短歌" xml:id="manyo0113">
                     <l xml:id="manyo0113_01"><lb/>三吉野乃玉松之枝者波思吉香聞君之御言乎持而加欲 <lb/>波久</l>
                     <l corresp="#manyo0103_01" xml:id="manyokun0113_01"><lb/>ミヨシノヽタマヽツ<note
                           place="right" resp="#定家" type="注" xml:id="note00099">伊云御本云 <milestone
                              unit="wbr"/>カ</note>ノ<anchor type="noteEnd"/>エハヽシキカモキミカミコトヲモチテカヨハ
                           <note place="right" resp="#定家" type="注" xml:id="note00100"
                           >或本ス</note>ク<anchor type="noteEnd"/></l>
                  </lg>
               </div>
            </div>
            <pb corresp="#page2805969"
               facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0053.tif/full/full/0/default.jpg"
               n="五四丁裏" source="#page2805969"/>
            <div corresp="#但馬皇女">
               <div xml:id="旧国歌大観番号一一四">
                  <p style="text-indent:3em" xml:id="p00133"><note place="right" resp="#定家" type="注"
                        xml:id="note00101">天武第四女　母内大臣鎌−女氷上娘</note>但馬皇女<anchor type="noteEnd"/>
                        在<note place="left" resp="#定家" type="注" xml:id="note00102"
                        >天武第二子母尼子</note>高市皇子<anchor type="noteEnd"/> 宮時思<note place="right"
                        resp="#定家" type="注" xml:id="note00103">天武第五皇子</note><note place="left"
                        resp="#定家" type="注" xml:id="note00104">母大臣蘇我明兄女</note> 穂積皇子<anchor
                        type="noteEnd"/><anchor type="noteEnd"/>御作謌</p>
                  <p style="text-indent:3em" xml:id="p00134">一首</p>
                  <lg type="短歌" xml:id="manyo0114">
                     <l xml:id="manyo0114_01"><lb/><note place="right" resp="#定家" subtype="摘句"
                           type="合点" xml:id="note00105">〽穂向ノヨスルカタヨリ</note> 秋田之穂向乃所縁君尓因奈名事痛有登母<anchor
                           type="noteEnd"/></l>
                     <l corresp="#manyo0114_01" xml:id="manyokun0114_01"
                        ><lb/>アキノタノホムケノヨスルカタヨリニキミニヨリナヽ <note place="right" resp="#定家" type="注"
                           xml:id="note00106" targetEnd="#note00106e">或コチタカリトモ</note>
                        <note place="left" resp="#定家" type="注" xml:id="note00107"
                           targetEnd="#note00107e">伊云コトカタクトモ</note><note place="left" resp="#定家"
                           type="注" xml:id="note00108" targetEnd="#note00108e">御本云コトタカフトモ </note>コト<subst>
                           <del>カタ</del>
                           <add rend="right" resp="#定家" xml:id="add00007">タカ</add>
                        </subst>クトモ <anchor type="noteEnd" xml:id="note00108e"/><anchor
                           type="noteEnd" xml:id="note00107e"/><anchor type="noteEnd"
                           xml:id="note00106e"/></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一一五">
                  <p style="text-indent:3em" xml:id="p00135"><note place="right" resp="#定家" type="注"
                        xml:id="note00109">叙一品　知太政官事　　霊亀元年七月薨</note> 勅叙積皇子<anchor type="noteEnd"
                     />遣近江志賀山寺時但馬皇女御作</p>
                  <p style="text-indent:3em" xml:id="p00136">歌一首</p>
                  <lg type="短歌" xml:id="manyo0115">
                     <l xml:id="manyo0115_01"><lb/>遺居而戀管不有者追及武道之阿廻尓標結吾勢</l>
                     <pb n="五五丁表"/>
                     <l corresp="#manyo0115_01" xml:id="manyokun0115_01">
                        <lb/>ヲクレヰテコヒツヽアラスハヲヒユカムミチノクマワニ<note place="right" resp="#定家" type="注"
                           xml:id="note00110">伊云御本云シメハユヒコセ</note> シメユヘワカセ<anchor type="noteEnd"
                        /></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一一六">
                  <p style="text-indent:3em" xml:id="p00137">但馬皇女在高市皇子宮時竊接穂積皇子事</p>
                  <p style="text-indent:3em" xml:id="p00138">既形而御作歌一首</p>
                  <lg type="短歌" xml:id="manyo0116">
                     <l xml:id="manyo0116_01"><lb/>人事乎繁美許知痛美己<note place="right" resp="#定家" type="注"
                           xml:id="note00111">伊云御本云無母字</note> 母<anchor type="noteEnd"/>世尓未渡朝川渡</l>
                     <l corresp="#manyo0116_01" xml:id="manyokun0116_01"><lb/>ヒトコトヲシケミ <note
                           place="left" resp="#定家" type="注" xml:id="note00112">伊云コトイタミ</note>コチ<note
                           place="right" resp="#定家" type="注" xml:id="note00113">或本タミ</note>フミ<anchor
                           type="noteEnd"/><anchor type="noteEnd"/> オ<note place="right" resp="#定家"
                           type="注" xml:id="note00114">伊云御本云<milestone unit="wbr"
                           />〽ノカ</note>ヒノ<anchor type="noteEnd"/>ヨニイマタワタラヌアサカハワタル</l>
                  </lg>
               </div>
            </div>
            <div corresp="#舎人皇子">
               <div xml:id="旧国歌大観番号一一七">
                  <p style="text-indent:3em" xml:id="p00139"><note place="right" resp="#定家" type="注"
                        xml:id="note00115">天武第八皇子母新田部皇女天智女叙一品</note>舎人皇子<anchor type="noteEnd"
                     />御哥一首</p>
                  <lg type="短歌" xml:id="manyo0117">
                     <l xml:id="manyo0117_01"><lb/>大夫哉片戀将為跡嘆友鬼乃益卜雄尚戀二家里</l>
                     <pb corresp="#page2805970"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0054.tif/full/full/0/default.jpg"
                        n="五五丁裏" source="#page2805970"/>
                     <l corresp="#manyo0117_01" xml:id="manyokun0117_01"
                        ><lb/>マスラヲヤカタコヒセムトナケヽトモヲニノマスラヲナ <note place="right" resp="#定家" type="異訓"
                           xml:id="note00116">ヲ</note>ホ<anchor type="noteEnd"/>コヒニケリ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#舎人娘子">
               <div xml:id="旧国歌大観番号一一八">
                  <p style="text-indent:3em" xml:id="p00140">舎人娘子奉和謌一首</p>
                  <lg type="短歌" xml:id="manyo0118">
                     <l xml:id="manyo0118_01">
                        <lb/><seg type="ruby" xml:id="seg00004"><seg type="rb" xml:id="seg00005"
                              >嘆管大夫之戀礼許曽吾髪乃 <note place="right" resp="#定家" type="注"
                                 xml:id="note00117">伊云依御本案之漬字歟</note>須<anchor type="noteEnd"
                              />而奴礼計礼</seg>
                           <lb/><seg rend="left" type="rt" xml:id="seg00006">ナケキツヽマスラヲノコヒシケレハコソワカ
                                 <note place="right" resp="#定家" type="異訓" xml:id="note00118"
                                 >カミユイノ</note>ユフカミノ<anchor type="noteEnd"/> マチテヌレケ<add place="right"
                                 resp="#定家" xml:id="add00003">ム</add>レ</seg></seg></l>
                     <l corresp="#manyo0118_01" xml:id="manyokun0118_01">
                        <lb/><note place="right" resp="#定家" type="注" xml:id="note00119"
                           >伊云御本伊云假名本云</note> ナケキツヽマスラヲノカクコフレコソワカユフカミノマチテヌレケレ<anchor type="noteEnd"
                        /></l>
                  </lg>
               </div>
            </div>
            <div corresp="#弓削皇子">
               <div xml:id="旧国歌大観番号一一九">
                  <p style="text-indent:3em" xml:id="p00141">弓削皇子思<note place="left" resp="#定家"
                        type="注" xml:id="note00120">天武第二女母同穂積皇子　朱鳥元遣伊勢神宮</note> 記皇女<anchor
                        type="noteEnd"/>御歌四首</p>
                  <lg type="短歌" xml:id="manyo0119">
                     <l xml:id="manyo0119_01"><lb/><note place="right" resp="#定家" type="注"
                           xml:id="note00121">伊云御本云吉</note>芳<anchor type="noteEnd"
                        />野河逝瀬之早見須臾毛不通事無有巨勢濃香問</l>
                     <l corresp="#manyo0119_01" xml:id="manyokun0119_01"
                        ><lb/>ヨシノカハユクセヲハヤミシハラクモタユルコトナクアリコセヌカモ</l>
                  </lg>
               </div>
               <pb n="五六丁表"/>
               <div xml:id="旧国歌大観番号一二〇">
                  <lg type="短歌" xml:id="manyo0120">
                     <l xml:id="manyo0120_01"><lb/>吾妹児尓戀乍不有者秋芽之喚而散去流花尓有猿尾</l>
                     <l corresp="#manyo0120_01" xml:id="manyokun0120_01"><lb/>ワ<note place="right"
                           resp="#定家" subtype="異訓" type="合点" xml:id="note00122">〽カ</note> キ<anchor
                           type="noteEnd"/><note place="right" resp="#定家" subtype="異訓" type="合点"
                           xml:id="note00123">〽セ</note>モ<anchor type="noteEnd"/>
                           コニコヒツヽアラスハアキハキノサキテチリヌルハナ<note place="right" resp="#定家" subtype="異訓"
                           type="合点" xml:id="note00124">伊云〽ニアラマシヲ</note> ヽラマシヲ<anchor type="noteEnd"
                        /></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一二一">
                  <lg type="短歌" xml:id="manyo0121">
                     <l xml:id="manyo0121_01"><lb/>暮去者塩来奈武住吉乃淺鹿乃浦尓玉藻苅手名</l>
                     <l corresp="#manyo0121_01" xml:id="manyokun0121_01"><note place="right"
                           resp="#定家" subtype="摘句" type="合点" xml:id="note00125"
                           >〽すみよしのあさかのうらにたまもかりてな</note> ユフサレハシホミチキナムスミヨシノアサカノウラニタマモカリテナ<anchor
                           type="noteEnd"/></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一二二">
                  <lg type="短歌" xml:id="manyo0122">
                     <l xml:id="manyo0122_01"><lb/>大船之泊流登麻里能<note place="right" resp="#定家" type="異文"
                           xml:id="note00126">絶</note>記<anchor type="noteEnd"/>多日二物念痩奴人能児故尓</l>
                     <l corresp="#manyo0122_01" xml:id="manyokun0122_01"
                        ><lb/>オホフネノトマルトマリノタユタヒニモノオモヒヤセヌヒトノコユへニ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#三方沙弥">
               <div xml:id="旧国歌大観番号一二三">
                  <p style="text-indent:3em" xml:id="p00142"><note place="right" resp="#定家" type="訓"
                        xml:id="note00127">ミカタノ</note>三方<anchor type="noteEnd"
                     />沙弥娶園臣生羽之女未羅幾時臥病作歌三首</p>
                  <pb corresp="#page2805971"
                     facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0055.tif/full/full/0/default.jpg"
                     n="五六丁裏" source="#page2805971"/>
                  <lg type="短歌" xml:id="manyo0123">
                     <l xml:id="manyo0123_01"><lb/>多氣婆奴礼多香根者長寸妹之髪比来不見尓<note place="right" resp="#定家"
                           type="注" xml:id="note00128">掻伊</note>格<anchor type="noteEnd"/>入津
                           <lb/>良武香<note resp="#万葉集" type="割書" xml:id="note00129">三方沙弥</note></l>
                     <l corresp="#manyo0123_01" xml:id="manyokun0123_01"><lb/>タケハヌレタカネハナカキイモカヽミコノコロ
                           <note place="right" resp="#定家" targetEnd="#note0026e" type="注"
                           xml:id="note00130">或ミネハカキツ</note>ミヌニ<note place="right" resp="#定家"
                           targetEnd="#note0027e" type="注" xml:id="note00131">伊云御本云<milestone
                              unit="wbr"/>カキイレツラムカ</note> ミタリツ<anchor type="noteEnd"
                           xml:id="note0026e"/>ラムカ<anchor type="noteEnd" xml:id="note0027e"/></l>
                  </lg>
               </div>
            </div>
            <div corresp="#園臣生羽女">
               <div xml:id="旧国歌大観番号一二四">
                  <lg type="短歌" xml:id="manyo0124">
                     <l xml:id="manyo0124_01"><lb/>人皆者今波長跡多計登雖言君之見師髪乱有等母<note resp="#万葉集" type="割書"
                           xml:id="note00132">娘子</note></l>
                     <l corresp="#manyo0124_01" xml:id="manyokun0124_01"
                        ><lb/>ヒトハミナイマハナカシトタケトイヘトキミカミシカミヽタレタレトモ</l>
                  </lg>
               </div>
            </div>
            <div corresp="#三方沙弥">
               <div xml:id="旧国歌大観番号一二五">
                  <lg type="短歌" xml:id="manyo0125">
                     <l xml:id="manyo0125_01"><lb/>橘之蔭履路乃八衢尓物乎曽念妹尓不相而<note resp="#万葉集" type="割書"
                           xml:id="note00133">三方沙弥</note></l>
                     <l xml:id="manyokun0125_01"><lb/><note place="right" resp="#定家" subtype="摘句"
                           type="合点" xml:id="note00134">〽橘乃カケフムミチ</note>
                           タチハナノカケフムミチノヤチマタニモノヲソオモフイモニアハスシテ<anchor type="noteEnd"/></l>
                  </lg>
               </div>
            </div>
            <pb n="五七丁表"/>
            <div corresp="#石川女郎">
               <div xml:id="旧国歌大観番号一二六">
                  <p style="text-indent:3em" xml:id="p00143">石川女郎贈大伴宿祢田主歌一首<note resp="#万葉集"
                        type="割書" xml:id="note00135">即佐保大納言大伴卿之第<milestone unit="wbr"
                        />二子母曰巨勢朝臣也</note></p>
                  <lg type="短歌" xml:id="manyo0126">
                     <l xml:id="manyo0126_01"><lb/>遊士跡吾者聞流乎屋戸不借吾乎還利於曽能風流士</l>
                     <l corresp="#manyo0126_01" xml:id="manyokun0126_01"><lb/><note place="right"
                           resp="#定家" type="注" xml:id="note00136">或タハレヲトハ</note> アソヒヲトワ<anchor
                           type="noteEnd"/>レハキケルヲヤトカサスワレヲカヘセリヲソノ<note place="right" resp="#定家"
                           type="注" xml:id="note00137">伊云タハフレヲ</note> タハレヲ<anchor type="noteEnd"
                        /></l>
                  </lg>
                  <p style="text-indent:3em" xml:id="p00144">大伴<note place="right" resp="#定家"
                        type="送り" xml:id="note00138">ノ</note>田主字曰仲郎 <note place="right" resp="#定家"
                        type="送り" xml:id="note00139">ト</note>容姿佳艶<note place="right" resp="#定家"
                        type="送り" xml:id="note00140">ニシテ</note> 風流秀絶<note place="right" resp="#定家"
                        type="送り" xml:id="note00141"><note place="right" resp="#定家"
                           targetEnd="#note0020e" type="注" xml:id="note00142">同本云御本云無<milestone
                              unit="wbr"/>ヿ字</note>ナリ<anchor type="noteEnd" xml:id="note0020e"
                        /></note>見人聞</p>
                  <p style="text-indent:3em" xml:id="p00145">者靡不歎息也時有石川女郎<note place="right"
                        resp="#定家" type="訓" xml:id="note00143">ミ</note>自<anchor type="noteEnd"
                     />成雙栖之感</p>
                  <p style="text-indent:3em" xml:id="p00146">恒悲獨守之難<note place="right" resp="#定家"
                        type="送り" xml:id="note00144">ヲ</note> 意<note place="right" resp="#定家"
                        type="送り" xml:id="note00145">ニ</note>欲<note place="right" resp="#定家"
                        type="送り" xml:id="note00146">ニ</note> 寄<note place="right" resp="#定家"
                        type="送り" xml:id="note00147">ト</note>書<note place="right" resp="#定家"
                        type="送り" xml:id="note00148">ヲ</note> 未逢良信<note place="right" resp="#定家"
                        type="送り" xml:id="note00149">ニ</note>爰作</p>
                  <p style="text-indent:3em" xml:id="p00147">方便<note place="right" resp="#定家"
                        type="送り" xml:id="note00150">ヲ</note>而<note place="right" resp="#定家"
                        type="異文" xml:id="note00151">与</note>似<anchor type="noteEnd"/>
                        賤嫗己提堝子而到寝側<note place="right" resp="#定家" type="送り" xml:id="note00152"
                        >ニ</note><note place="right" resp="#定家" targetEnd="#note0021e" type="訓"
                        xml:id="note00153">ムセヒ</note>哽<anchor type="noteEnd" xml:id="note0021e"/>
                        音<note place="right" resp="#定家" type="送り" xml:id="note00154">ヲ</note>
                     <note place="right" resp="#定家" targetEnd="#note0022e" type="訓"
                        xml:id="note00155">ヌキアシヽ</note>蹢足<anchor type="noteEnd" xml:id="note0022e"
                     /></p>
                  <pb corresp="#page2805972"
                     facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0056.tif/full/full/0/default.jpg"
                     n="五七丁裏" source="#page2805972"/>
                  <p style="text-indent:3em" xml:id="p00148">叩戸諮曰東隣<note place="right" resp="#定家"
                        type="送り" xml:id="note00156">ノ</note>貧女将取火 <note place="right" resp="#定家"
                        type="送り" xml:id="note00157">ヲ</note>来<note place="right" resp="#定家"
                        type="送り" xml:id="note00158">ト</note>矣於是仲郎暗</p>
                  <p style="text-indent:3em" xml:id="p00149"><note place="right" resp="#定家"
                        targetEnd="#note0023e" type="異文" xml:id="note00159">裏</note>悲<anchor
                        type="noteEnd" xml:id="note0023e"/>非識冒隠之形慮外不堪拘接之計 <note place="right"
                        resp="#定家" type="訓" xml:id="note00160">マヽ</note>任<anchor type="noteEnd"
                     />念</p>
                  <p style="text-indent:3em" xml:id="p00150">取火就跡歸去也<note place="right" resp="#定家"
                        type="訓" xml:id="note00161">アケテノチ</note>明後<anchor type="noteEnd"
                     />女郎既恥自媒之可愧復</p>
                  <p style="text-indent:3em" xml:id="p00151">恨心契之<note place="right" resp="#定家"
                        type="訓" xml:id="note00162">コトヲ</note>弗<anchor type="noteEnd"
                     />果因作斯謌以贈諺戯焉</p>
               </div>
            </div>
            <div corresp="#大伴宿祢">
               <div xml:id="旧国歌大観番号一二七">
                  <p style="text-indent:3em" xml:id="p00152">大伴宿祢田主報贈歌一首</p>
                  <lg type="短歌" xml:id="manyo0127">
                     <l xml:id="manyo0127_01"><lb/>遊士尓吾者有家里屋戸不借令還吾曽風流士者有</l>
                     <l corresp="#manyo0127_01" xml:id="manyokun0127_01"><lb/>ア<note
                           xml:id="note00163" place="right" resp="#定家" type="注">伊云御本云<milestone
                              unit="wbr"/>ハレ</note>ソヒ <anchor type="noteEnd"
                        />ヲニワレハアリケリヤトカサスカヘセルワレソタハレヲニハアル</l>
                  </lg>
               </div>
            </div>
            <pb n="五八丁表"/>
            <div corresp="#石川女郎">
               <div xml:id="旧国歌大観番号一二八">
                  <p style="text-indent:3em" xml:id="p00153">同石川女郎更贈大伴田主中郎哥一首</p>
                  <lg type="短歌" xml:id="manyo0128">
                     <l xml:id="manyo0128_01"><lb/>吾聞之耳尓好似葦若末乃足痛吾勢勤多<note place="left" resp="#定家"
                           type="注" xml:id="note00164">伊云扶倍</note>校位<anchor type="noteEnd"/>思</l>
                  </lg>
                  <p style="text-indent:3em" xml:id="p00154">右依中郎足疾贈此歌問<note place="right"
                        resp="#定家" type="注" xml:id="note00165">伊云御本云訊</note>
                     <choice>
                        <corr rend="left" resp="#定家" xml:id="note00166">訊</corr>
                        <sic>誶</sic>
                     </choice><anchor type="noteEnd"/>也</p>
               </div>
               <div xml:id="旧国歌大観番号一二九">
                  <p style="text-indent:2em" xml:id="p00155">大伴皇子宮侍石川女郎贈大伴宿祢<note place="left"
                        resp="#定家" type="異文" xml:id="note00167">奈</note>宿<anchor type="noteEnd"
                     />奈麿</p>
                  <p style="text-indent:2em" xml:id="p00156">歌一首</p>
                  <p style="text-indent:3em" xml:id="p00157">女郎字曰山田郎女也宿奈麿宿祢者大納言</p>
                  <p style="text-indent:3em" xml:id="p00158">兼大将軍卿第三子</p>
                  <pb corresp="#page2805973"
                     facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0057.tif/full/full/0/default.jpg"
                     n="五八丁裏"/>
                  <lg type="短歌" xml:id="manyo0129">
                     <l xml:id="manyo0129_01"><lb/>古之嫗尓為而也如此許戀尓那沈如手童兒<note resp="#万葉集" type="割書"
                           xml:id="note00168">一云戀乎大尓忍金 <milestone unit="wbr"/>手武多和良波乃如<milestone
                              unit="wbr"/>思金</note></l>
                     <l corresp="#manyo0129_01" xml:id="manyokun0129_01"><lb/>イニシヘノヲムナニシテヤカクハカリ
                           <note place="left" resp="#定家" targetEnd="#note0028e" type="注"
                           xml:id="note00169">同本云御本云コヒニシツマムテワラ<milestone unit="wbr"/>ハノコト</note>コヒニシ
                           <note place="left" resp="#定家" subtype="異訓" targetEnd="#note0030e"
                           type="合点" xml:id="note00170">〽マム</note>ツメ<anchor type="noteEnd"
                           xml:id="note0030e"/>ル <note place="right" resp="#定家"
                           targetEnd="#note0029e" type="注" xml:id="note00171"
                           >伊云テハラハノコト</note>テワラハノコト<anchor type="noteEnd" xml:id="note0028e"
                           /><anchor type="noteEnd" xml:id="note0029e"/></l>
                  </lg>
               </div>
            </div>
            <div corresp="#長皇子">
               <div xml:id="旧国歌大観番号一三〇">
                  <p style="text-indent:3em" xml:id="p00159">長皇子與皇弟御歌一首</p>
                  <lg type="短歌" xml:id="manyo0130">
                     <l><lb/><note place="left" resp="#定家" type="注" xml:id="note00172"
                           >伊云御本云ニフノカハセヲハワタラテユク／＼ト</note>丹生乃河瀬者不渡而由久遊久登<anchor type="noteEnd"/>
                           戀痛吾弟乞通来<note place="right" resp="#定家" type="注" xml:id="note00173"
                           >伊云袮</note>尓<anchor type="noteEnd"/></l>
                     <l><lb/></l>
                  </lg>
               </div>
            </div>
            <div corresp="#柿本人麻呂">
               <div xml:id="旧国歌大観番号一三一">
                  <p style="text-indent:3em" xml:id="p00160">柿本朝臣人麿従石見國別妻上来時歌二首<note resp="#万葉集"
                        type="割書" xml:id="note00174">并短哥</note></p>
                  <ab type="長歌" xml:id="manyo0131">
                     <lb/><seg type="ruby" xml:id="seg00007"><seg type="rb" xml:id="seg00008"><note
                              place="right" resp="#定家" subtype="摘句" targetEnd="#note0024e" type="合点"
                              xml:id="note00175">〽石見乃海つのヽうらわ</note> 石見乃海角乃浦廻乎浦無等人社見良目瀉<note
                              place="right" resp="#定家" type="異文" xml:id="note00176">無</note>无<anchor
                              type="noteEnd"/>等 <anchor type="noteEnd" xml:id="note0024e"/><note
                              resp="#万葉集" type="割書" xml:id="note00177">一云礒<milestone unit="wbr"
                              />无登</note></seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00009">イハミノウミツノヽウラハ<note
                              place="right" resp="#定家" type="異訓" xml:id="note00178">ヲ</note>
                              ニ<anchor type="noteEnd"/>ウラナシトヒトコソミラメカタナシト</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00010"><seg type="rb" xml:id="seg00011"
                              >人社見良目能咲八師浦者無友縦畫屋師滷者<note resp="#万葉集" type="割書" xml:id="note00179"
                              >一云礒者</note>無勒</seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00012"
                           >ヒトコソミラメヨシヱヤシウラハナクトモヨシヱヤシシカタハナクトモ</seg></seg>
                     <pb corresp="#page2805973"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0057.tif/full/full/0/default.jpg"
                        n="五九丁表"/>
                     <lb/><seg type="ruby" xml:id="seg00013"><seg type="rb" xml:id="seg00014"
                              >鯨魚取海邊乎指而<note place="right" resp="#定家" type="注" xml:id="note00180"
                              >ニキ</note>和<anchor type="noteEnd"/>多豆乃荒礒乃上尓香青生玉藻</seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00015"
                           >クチラトルアマヘヲサシテワタツミノアライソノウヘニカアオヽフルタマモ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00016"><seg type="rb" xml:id="seg00017"
                           >息津藻朝羽振風社依米夕羽振流浪社来縁浪之共</seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00018"
                           >オキツモアサハフリカセコソヨラメユフハフルナミコソキヨレナミノトモ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00019"><seg type="rb" xml:id="seg00020">彼<note
                              place="right" resp="#定家" type="注" xml:id="note00181"
                              >伊云御本云無縁字</note>縁<anchor type="noteEnd"/>此縁依王藻成依宿之妹乎 <note resp="#万葉集"
                              type="割書" xml:id="note00182">一云波之伎余思<milestone unit="wbr"
                              />妹之手本乎</note>露霜乃置而</seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00021"
                           >カシコモコヽモタマモナスヤトリシイモヲツユシモノヲキテ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00022"><seg type="rb" xml:id="seg00023"
                           >之来者此道乃八十隈毎萬段顧為騰弥遠尓里者放奴</seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00024"
                           >シクレハコノミチノヤソクマコトニヨロツタヒカヘリミスレトイヤトヲニサトハヽナレヌ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00025"><seg type="rb" xml:id="seg00026"
                           >益高尓山毛越来奴夏草之念思奈要而志怒布良武</seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00027"
                           >イヤタカニヤマモコエキヌナツクサノオモヒシナエテシヌフラム</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00028"><seg type="rb" xml:id="seg00029"
                              >妹之<note place="right" resp="#定家" type="注" xml:id="note00183"
                              >伊云御本云内</note>門<anchor type="noteEnd"/>将見靡此山</seg>
                        <lb/><seg rend="left" type="rt" xml:id="seg00030">イモカヽトミムナヒケコノヤマ</seg></seg>
                  </ab>
               </div>
               <div xml:id="旧国歌大観番号一三二">
                  <p style="text-indent:3em" xml:id="p00161">反歌二首</p>
                  <pb corresp="#page2805974"
                     facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0058.tif/full/full/0/default.jpg"
                     n="五九丁裏"/>
                  <lg type="短歌" xml:id="manyo0132">
                     <l xml:id="manyo0132_01"><lb/>石見乃也高角山之木際従我振袖乎妹見都良武香</l>
                     <l corresp="#manyo0132_01" xml:id="manyokun0132_01"><lb/><note place="right"
                           resp="#定家" subtype="摘句" targetEnd="#note00184e" type="合点"
                           xml:id="note00184">〽イハミノヤタカツノ山ハカフルソテ</note>
                           イハミノヤタカツノヤマノコノマヨリワカフルソテヲイモミツ<note place="right" resp="#定家" subtype="異訓"
                           targetEnd="#note00185e" type="合点" xml:id="note00185">或〽ラムカ</note>
                           ルカモ<anchor type="noteEnd" xml:id="note00184e"/><anchor type="noteEnd"
                           xml:id="note00185e"/></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一三三">
                  <lg type="短歌" xml:id="manyo0133">
                     <l xml:id="manyo0133_01"><lb/><note place="right" resp="#定家" subtype="摘句"
                           type="合点" xml:id="note00186">〽サヽノハヽミ山モサヤニ</note>
                           小竹之葉者三山毛清尓乱友吾者妹思別来礼婆<anchor type="noteEnd"/></l>
                     <l corresp="#manyo0133_01" xml:id="manyokun0133_01"
                        ><lb/>サヽノハヽミヤマモサヤニミタルトモワレハイモオモフワカレキヌレハ</l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一三四">
                  <p style="text-indent:3em" xml:id="p00162">或本反哥曰</p>
                  <lg type="短歌" xml:id="manyo0134">
                     <l xml:id="manyo0134_01"><lb/>石見尓有高角山乃木間従文吾袂振乎妹見監鴨</l>
                     <l corresp="#manyo0134_01" xml:id="manyokun0134_01"><lb/>イハミニアルタカツノヤマノコノマヨリモ
                           <note place="right" resp="#定家" type="注" xml:id="note00187"
                           >伊云御本云ワカソテフルヲイモミケモカモ</note>ワカフルソテヲイモミラムカモ<anchor type="noteEnd"/></l>
                  </lg>
               </div>
               <pb corresp="#page2805974"
                  facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0058.tif/full/full/0/default.jpg"
                  n="六〇丁表" source="#page2805976"/>
               <div xml:id="旧国歌大観番号一三五">
                  <ab type="長歌" xml:id="manyo0135">
                     <lb/><seg type="ruby" xml:id="seg00031"><seg type="rb" xml:id="seg00032"
                           >角障経石見之海乃言佐敝久辛乃埼有伊久里尓曽</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00033"
                           >ツノサフルイハミノウミノコトサヘクカラノサキナルイクリニソ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00034"><seg type="rb" xml:id="seg00035"
                           >深海松生流荒礒尓曽玉藻者生流玉藻成靡寐之</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00036"
                           >フカミルオフルアライソニソタマモハオフルタマモナスナヒキネシ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00037"><seg type="rb" xml:id="seg00038"
                           >児乎深海松乃深目手思騰左宿夜者幾毛不有延都多</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00039"
                           >コヲフカミルノフカメテオモフトサヌルヨハイクラモアラスハフツタ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00040"><seg type="rb" xml:id="seg00041"
                           >乃別之来者肝向心乎痛念乍顧為騰大舟之渡乃山之黄</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00042"
                           >ノワカレシクレハキモムカヒコヽロヲイタミオモヒツヽカヘリミヲ <note place="right" resp="#定家" type="異訓"
                              xml:id="note00188">スレト</note>スルヽ<anchor type="noteEnd"
                           />オホフネノワタリノヤマノモミチ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00043"><seg type="rb" xml:id="seg00044"
                              >葉乃散之<note place="left" resp="#定家" type="異訓" xml:id="note00189"
                              >マカヒ</note>乱<anchor type="noteEnd"/> 尓妹袖清尓毛不見<note place="left"
                              resp="#定家" type="異文" xml:id="note00190">儒</note>嬬<anchor
                              type="noteEnd"/>隠有屋上乃 <note resp="#万葉集" type="割書" xml:id="note00191"
                                 >一云室<milestone unit="wbr"/>上山</note>山乃</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00045"
                           >ハノチリシミタレニイモカソテサヤニモミエスカクレナルヤカミノヤマノ</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00046"><seg type="rb" xml:id="seg00047"
                           >自雲間渡相月乃雖惜隠比来者天傳入日刺奴礼大夫跡</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00048"
                           >クモマヨリワタリアフツキノオシメトモカクロヒクレハアマツタフイリヒサシヌレマスラヲト</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00049"><seg type="rb" xml:id="seg00050"
                              >念有吾毛敷妙乃衣袖者通<note place="left" resp="#定家" targetEnd="#note0025e"
                              type="注" xml:id="note00192">伊云御本云無而沾二字有御字可尋 <note resp="#定家" type="割書"
                                 xml:id="note00193">今案可霑一字<milestone unit="wbr"
                              />而誤上二字欤</note></note> 而沾<anchor type="noteEnd" xml:id="note0025e"
                           />奴</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00051"
                           >オモヘルワレモシキタヘノコロモノソテハカヨヒテヌレヌ</seg></seg>
                  </ab>
               </div>
               <pb corresp="#page2805975"
                  facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0059.tif/full/full/0/default.jpg"
                  n="六〇丁裏" source="#page2805977"/>
               <div xml:id="旧国歌大観番号一三六">
                  <p style="text-indent:3em" xml:id="p00163">反歌二首</p>
                  <lg type="短歌" xml:id="manyo0136">
                     <l xml:id="manyo0136_01"><lb/>青駒之足掻乎速雲居曽妹之當乎過而来計類<note resp="#万葉集" type="割書"
                           xml:id="note00194">一云當者<milestone unit="wbr"/>隠来計留</note></l>
                     <l corresp="#manyo0136_01" xml:id="manyokun0136_01"
                        ><lb/>アヲコマノアカキヲハヤミクモヰニソイモカアタリヲスキテキニケル</l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一三七">
                  <lg type="短歌" xml:id="manyo0137">
                     <l xml:id="manyo0137_01"><lb/>秋山尓落黄葉須臾者勿散乱曽妹之當将見<note resp="#万葉集" type="割書"
                           xml:id="note00195">一云知里勿<milestone unit="wbr"/>乱曽</note></l>
                     <l corresp="#manyo0137_01" xml:id="manyokun0137_01"><lb/>アキヤマニオツルモミチハシハラク <note
                           place="right" resp="#定家" subtype="異訓" type="合点" xml:id="note00196"
                           >〽ハ</note>モ<anchor type="noteEnd"/>チリナミタレソ <note place="right" resp="#定家"
                           type="注" xml:id="note00197">伊云御本云イモヽミルヘク同本云御本云<milestone unit="wbr"
                           />如今本</note>イモカアタリミム<anchor type="noteEnd"/></l>
                  </lg>
               </div>
               <div xml:id="旧国歌大観番号一三八">
                  <p style="text-indent:3em" xml:id="p00164">或本歌一首<note resp="#万葉集" type="割書"
                        xml:id="note00198">并短哥</note></p>
                  <ab type="長歌" xml:id="manyo0138">
                     <lb/><seg type="ruby" xml:id="seg00052"><seg type="rb" xml:id="seg00053"
                           >石見之海津乃浦乎無美浦無跡人社見良米瀉無跡人</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00054"
                           >イハミノウミつのうらをなみうらなしと人こそみらめかたなしと人</seg></seg>
                     <pb corresp="#page2805975"
                        facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0059.tif/full/full/0/default.jpg"
                        n="六一丁表" source="#page2805978"/>
                     <lb/><seg type="ruby" xml:id="seg00055"><seg type="rb" xml:id="seg00056"
                           >社見良目者咲八師浦者雖無縦恵夜思瀉者雖無勇魚取</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00057"
                           >こそみらめよしゑやしうらはなけれとよしゑやしかたはなけれとくちらとる</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00058"><seg type="rb" xml:id="seg00059"
                           >海邊乎指而柔田津乃荒礒之上尓 <note place="right" resp="#定家" type="注"
                              xml:id="note00199">伊云敷同本云御本云蚊</note>蚊<anchor type="noteEnd"
                           />青生玉藻息都藻</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00060"><note place="right"
                              resp="#定家" type="異訓" xml:id="note00200">アマ</note>うみ<anchor
                              type="noteEnd"/> へをさしてにきたつのあらいそのうへにかあをゝふるたまもおきつも</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00061"><seg type="rb" xml:id="seg00062"
                           >明来者浪己曽来依夕去者風己曽来依浪之共波依玉藻</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00063"
                           >あけくれはなみこそきよれゆふされはかせこそきよれなみのともなみよるたまも</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00064"><seg type="rb" xml:id="seg00065"
                           >成靡吾宿之敷妙之妹之手本乎露霜乃置而之来者</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00066"
                           >なりなひきわれかやとりししきたへのいもかたもとをつゆしものおきてゝくれは</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00067"><seg type="rb" xml:id="seg00068"
                           >此道之八十隈毎萬段顧雖為弥遠尓里放来奴益高尓</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00069"
                           >このみちのやそくまことによろつたひかへりみすれというやと <note place="right" resp="#定家" type="異訓"
                              xml:id="note00201">ほ</note>を<anchor type="noteEnd"
                           />にさとはなれきぬいやたかに</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00070"><seg type="rb" xml:id="seg00071"
                           >山毛越来奴早敷屋師吾嬬乃児我夏草乃思志萎而</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00072">山もこえきぬ<note place="right"
                              resp="#定家" type="異訓" xml:id="note00202">はしきやし</note> さしきやのし<anchor
                              type="noteEnd"/>わかつまのこかなつくさのおもひしなえて</seg></seg>
                     <lb/><seg type="ruby" xml:id="seg00073"><seg type="rb" xml:id="seg00074"
                           >将嘆角里将見靡此山</seg>
                        <lb/><seg rend="right" type="rt" xml:id="seg00075"
                        >なけゝともつのゝさとみむなひけこの山</seg></seg>
                  </ab>
               </div>
               <pb corresp="#page2805976"
                  facs="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0060.tif/full/full/0/default.jpg"
                  n="六一丁裏"/>
               <div xml:id="旧国歌大観番号一三九">
                  <p style="text-indent:3em" xml:id="p00165">反謌一首</p>
                  <lg type="短歌" xml:id="manyo0139">
                     <l xml:id="manyo0139_01"><lb/><note place="right" resp="#定家" subtype="摘句"
                           type="合点" xml:id="note00203">〽いはみのうみうつたの山のこのまよりわかふるそてをいもみつらむか</note>
                           石見之海打歌山乃木際従吾振袖乎妹将見香<anchor type="noteEnd"/></l>
                     <l corresp="#manyo0139_01" xml:id="manyokun0139_01"><lb/><note place="left"
                           resp="#定家" type="注" xml:id="note00204">伊云御本云イハミノウミ</note> イハミ<note
                           place="right" resp="#定家" type="注" xml:id="note00205">或ウミ</note>ナル<anchor
                           type="noteEnd"/><anchor type="noteEnd"/>ウツタノヤマノ <note place="right"
                           resp="#定家" type="注" xml:id="note00206">或コスヘ</note>コノマ<anchor
                           type="noteEnd"/>ヨリワカフルソテヲイモミツラムカ</l>
                  </lg>
                  <p style="text-indent:3em" xml:id="p00166">右歌<note place="right" resp="#定家"
                        type="異文" xml:id="note00207">躰</note>體<anchor type="noteEnd"/>雖同句々相替因此重載</p>
               </div>
            </div>
            <div corresp="#依羅娘子">
               <div xml:id="旧国歌大観番号一四〇">
                  <p style="text-indent:3em" xml:id="p00167">柿本朝臣人麿妻依羅娘子與人麿相別歌一首</p>
                  <lg type="短歌" xml:id="manyo0140">
                     <l xml:id="manyo0140_01">勿念跡君者雖言相時何時跡知而加吾不戀有乎</l>
                     <l corresp="#manyo0140_01" xml:id="manyokun0140_01">オモフナトキミハイ<note
                           place="right" resp="#定家" type="注" xml:id="note00208"> 伊本云同本御本如今<milestone
                              unit="wbr"/>ヘ</note>フ<anchor type="noteEnd"/>トモアハムトキイツトシリテカワカコヒサラム</l>
                  </lg>
               </div>
            </div>
         </div>
      </body>
      <back>
         <listBibl>
            <bibl xml:id="万葉集">万葉集</bibl>
         </listBibl>
         <listPerson>
            <person xml:id="磐姫皇后">
               <name>磐姫皇后</name>
            </person>
            <person xml:id="軽太郎女">
               <name>軽太郎女</name>
            </person>
            <person xml:id="天智天皇">
               <name>天智天皇</name>
            </person>
            <person xml:id="鏡王女">
               <name>鏡王女</name>
            </person>
            <person xml:id="内大臣藤原卿">
               <name>内大臣藤原卿</name>
            </person>
            <person xml:id="久米禅師">
               <name>久米禅師</name>
            </person>
            <person xml:id="石川郎女">
               <name>石川郎女</name>
            </person>
            <person xml:id="大伴宿祢">
               <name>大伴宿祢</name>
            </person>
            <person xml:id="巨勢郎女">
               <name>巨勢郎女</name>
            </person>
            <person xml:id="天武天皇">
               <name>天武天皇</name>
            </person>
            <person xml:id="藤原夫人">
               <name>藤原夫人</name>
            </person>
            <person xml:id="大伯皇女">
               <name>大伯皇女</name>
            </person>
            <person xml:id="大津皇子">
               <name>大津皇子</name>
            </person>
            <person xml:id="日並皇子">
               <name>草壁皇子</name>
            </person>
            <person xml:id="弓削皇子">
               <name>弓削皇子</name>
            </person>
            <person xml:id="額田王">
               <name>額田王</name>
            </person>
            <person xml:id="但馬皇女">
               <name>但馬皇女</name>
            </person>
            <person xml:id="舎人皇子">
               <name>舎人皇子</name>
            </person>
            <person xml:id="舎人娘子">
               <name>舎人娘子</name>
            </person>
            <person xml:id="三方沙弥">
               <name>三方沙弥</name>
            </person>
            <person xml:id="園臣生羽女">
               <name>園臣生羽女</name>
            </person>
            <person xml:id="石川女郎">
               <name>石川女郎</name>
            </person>
            <person xml:id="大伴宿祢田主">
               <name>大伴宿祢田主</name>
            </person>
            <person xml:id="長皇子">
               <name>長皇子</name>
            </person>
            <person xml:id="柿本人麻呂">
               <name>柿本人麻呂</name>
            </person>
            <person xml:id="定家">
               <name>藤原定家</name>
            </person>
         </listPerson>
      </back>
   </text>
   <facsimile source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/books/210464810/manifest.json">
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805960"
         xml:id="page2805960">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0044.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805961"
         xml:id="page2805961">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0045.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805962"
         xml:id="page2805962">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0046.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805963"
         xml:id="page2805963">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0047.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805964"
         xml:id="page2805964">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0048.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805965"
         xml:id="page2805965">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0049.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805966"
         xml:id="page2805966">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0050.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805967"
         xml:id="page2805967">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0051.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805968"
         xml:id="page2805968">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0052.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805969"
         xml:id="page2805969">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0053.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805970"
         xml:id="page2805970">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0054.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805971"
         xml:id="page2805971">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0055.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805972"
         xml:id="page2805972">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0056.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805973"
         xml:id="page2805973">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0057.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805974"
         xml:id="page2805974">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0058.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805975"
         xml:id="page2805975">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0059.tif/full/full/0/default.jpg"
         />
      </surface>
      <surface source="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810/page2805976"
         xml:id="page2805976">
         <graphic
            url="https://www.iiif.ku-orcas.kansai-u.ac.jp/iiif/2/210464810%2F0060.tif/full/full/0/default.jpg"
         />
      </surface>
   </facsimile>
</TEI>
`
