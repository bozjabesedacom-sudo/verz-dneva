// 365 izbranih SSP verzov za Božja Beseda
// Vrstni red je premešan, teme niso zapisane v datoteki.

const verses = [
  {
    "reference": "Psalm 103,11–12",
    "text": "Zakaj kakor je nebo visoko nad zemljo, je njegova dobrota silna nad tistimi, ki se ga bojijo. Kakor je vzhod oddaljen od zahoda, oddaljuje od nas naša hudodelstva.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Jakob 1,19",
    "text": "Zavedajte se, moji ljubi bratje, da mora biti vsak človek hiter za poslušanje, počasen za govorjenje, počasen za jezo,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "Psalm 8,4–5",
    "text": "Ko gledam nebo, delo tvojih prstov, luno in zvezde, ki si jih utrdil: Kaj je človek, da se ga spominjaš, sin človekov, da ga obiskuješ?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+8"
  },
  {
    "reference": "Psalm 146,5",
    "text": "Blagor mu, komur je Bog Jakobov v pomoč in je njegovo upanje v Gospodu, njegovem Bogu,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+146"
  },
  {
    "reference": "Galačanom 5,13–14",
    "text": "Vi ste namreč poklicani k svobodi, bratje. Le da vam svoboda ne bo pretveza za življenje po mesu, temveč služíte drug drugemu po ljubezni. Saj je celotna postava izpolnjena v eni zapovedi, namreč: Ljubi svojega bližnjega kakor samega sebe.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+5"
  },
  {
    "reference": "1 Kroniška 16,11",
    "text": "Iščite Gospoda in njegovo moč, vedno iščite njegovo obličje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Krn+16"
  },
  {
    "reference": "2 Mojzes 33,14",
    "text": "In je rekel:»Moje obličje bo šlo in naklonil ti bom počitek.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Mz+33"
  },
  {
    "reference": "1 Samuel 12,24",
    "text": "Samo bojte se Gospoda in mu služite v zvestobi z vsem svojim srcem, kajti, glejte, kako velike reči je storil z vami!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Sam+12"
  },
  {
    "reference": "Psalm 84,6",
    "text": "Blagor človeku, čigar moč je v tebi, v njegovem srcu so ceste.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+84"
  },
  {
    "reference": "2 Korinčanom 5,17",
    "text": "Če je torej kdo v Kristusu, je nova stvaritev. Staro je minilo. Glejte, nastalo je novo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+5"
  },
  {
    "reference": "Pregovori 27,17",
    "text": "Železo se brusi z železom, človek brusi svojega bližnjega.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+27"
  },
  {
    "reference": "Efežanom 3,12",
    "text": "V njem imamo srčnost in dostop v popolnem zaupanju po veri vanj.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+3"
  },
  {
    "reference": "2 Samuel 7,28",
    "text": "In zdaj, Gospod Bog, ti si Bog in tvoje besede so resnica in napovedal si svojemu služabniku te dobrine.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Sam+7"
  },
  {
    "reference": "1 Janez 4,18",
    "text": "V ljubezni ni strahu, temveč popolna ljubezen prežene strah. Strah je namreč povezan s kaznijo, in kdor se boji, ni dosegel popolnosti v ljubezni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+4"
  },
  {
    "reference": "Psalm 143,10",
    "text": "Úči me izpolnjevati tvojo voljo, saj si ti moj Bog! Tvoj dobri duh naj me vodi po ravni deželi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+143"
  },
  {
    "reference": "Psalm 144,1",
    "text": "Davidov. Slavljen bodi Gospod, moja skala, ki uči moje roke za boj, moje prste za vojno;",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+144"
  },
  {
    "reference": "Psalm 119,165",
    "text": "Velika je blaginja za tiste, ki ljubijo tvojo postavo, zanje ni nevarnosti, da bi se spotaknili.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Jeremija 29,13",
    "text": "Iskali me boste in me boste našli. Ko me boste iskali z vsem srcem,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "1 Tesaloničanom 5,11",
    "text": "Zato tolažíte drug drugega in drug drugega izgrajujte, kakor to že delate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "Psalm 125,1",
    "text": "Stopniška pesem. Tisti, ki zaupajo v Gospoda, so kakor gora Sion, ta ne omahuje, na veke ostane.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+125"
  },
  {
    "reference": "Jakob 1,5",
    "text": "Če pa komu od vas manjka modrosti, naj jo prosi od Boga, ki jo vsem rad daje in ne sramoti – in dana mu bo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "Izaija 61,10",
    "text": "Silno se veselim v Gospodu, moja duša se raduje v mojem Bogu. Zakaj odel me je z oblačilom odrešenja, ovil me je z ogrinjalom pravičnosti, kakor ženina, ki si nadene venec, kakor nevesto, ki se okrasi z nakitom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+61"
  },
  {
    "reference": "Janez 14,6",
    "text": "Jezus mu je dejal:»Jaz sem pot, resnica in življenje. Nihče ne pride k Očetu drugače kot po meni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "Mihej 7,8",
    "text": "Ne vesêli se, moja sovražnica, nad menoj! Če sem padel, spet vstanem, če sedim v temi, je Gospod moja luč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mih+7"
  },
  {
    "reference": "Hebrejcem 12,28",
    "text": "Ker torej prejemamo neomajno kraljestvo, bodimo hvaležni in tako Bogu s spoštovanjem in strahom služimo, kakor je njemu všeč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+12"
  },
  {
    "reference": "Psalm 59,17–18",
    "text": "Jaz pa bom opeval tvojo moč, zjutraj bom vriskal zaradi tvoje dobrote, ker si mi bil trdnjava, zavetišče na dan, ko sem bil v stiski. Moja moč, hočem ti prepevati, kajti Bog je moja trdnjava, Bog, ki mi izkazuje dobroto.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+59"
  },
  {
    "reference": "Psalm 71,5",
    "text": "zakaj ti si moje upanje, o Gospod, moje zaupanje, Gospod, od moje mladosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+71"
  },
  {
    "reference": "Psalm 29,11",
    "text": "Gospod daje moč svojemu ljudstvu, Gospod bo blagoslovil svoje ljudstvo z mirom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+29"
  },
  {
    "reference": "Izaija 49,15–16",
    "text": "Mar pozabi žena svojega otročiča in se ne usmili otroka svojega telesa? A tudi če bi one pozabile, jaz te ne pozabim. Glej, na obe dlani sem te napisal, tvoje obzidje je vedno pred menoj.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+49"
  },
  {
    "reference": "Pregovori 3,7",
    "text": "Ne imej sam sebe za modrega, boj se Gospoda in varuj se hudega.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+3"
  },
  {
    "reference": "Filipljanom 4,6–7",
    "text": "Nič ne skrbite, ampak ob vsaki priložnosti izražajte svoje želje Bogu z molitvijo in prošnjo, z zahvaljevanjem. In Božji mir, ki presega vsak um, bo varoval vaša srca in vaše misli v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Sofonija 3,17",
    "text": "Gospod, tvoj Bog, je v tvoji sredi, tvoj močni rešitelj. Veselí se nad teboj v radosti, nemí v svoji ljubezni, vriska nad teboj v prepevanju.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Sof+3"
  },
  {
    "reference": "3 Mojzes 19,18",
    "text": "Ne maščuj se in ne bodi zamerljiv do sinov svojega ljudstva, temveč ljubi svojega bližnjega kakor samega sebe; jaz sem Gospod.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=3+Mz+19"
  },
  {
    "reference": "Rimljanom 5,8",
    "text": "Bog pa izkazuje svojo ljubezen do nas s tem, da je Kristus umrl za nas, ko smo bili še grešniki.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Psalm 100,1–5",
    "text": "Psalm v zahvalo. Vzklikajte Gospodu, vsa zemlja, služite Gospodu z veseljem, pridite predenj z vriskanjem! Spoznajte, da je Gospod Bog: on nas je naredil in mi smo njegovi, njegovo ljudstvo, čreda njegove paše. Pridite k njegovim vratom z zahvalo, v njegove dvore s hvalnico! Zahvaljujte se mu, slavite njegovo ime! Zakaj Gospod je dober, na veke traja njegova dobrota, od roda do roda njegova zvestoba.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+100"
  },
  {
    "reference": "Izaija 26,12",
    "text": "Gospod, ti nam pripravljaš mir, kajti vse, kar se je z nami zgodilo, si nam ti naredil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+26"
  },
  {
    "reference": "Efežanom 4,2–3",
    "text": "v vsej ponižnosti, krotkosti in potrpežljivosti. V ljubezni prenašajte drug drugega. Prizadevajte si, da ohranite edinost Duha z vezjo miru:",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+4"
  },
  {
    "reference": "Rimljanom 8,18",
    "text": "Mislim namreč, da se trpljenje sedanjega časa ne dá primerjati s slavo, ki se bo razodela v nas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Efežanom 5,2",
    "text": "in živite v ljubezni, kakor je tudi Kristus vzljubil nas in je daroval sam sebe za nas kot blago dišečo daritev in žrtev Bogu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+5"
  },
  {
    "reference": "1 Janez 1,4",
    "text": "To vam pišemo zato, da bi bilo naše veselje dopolnjeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+1"
  },
  {
    "reference": "5 Mojzes 7,9",
    "text": "Vedi torej, da je Gospod, tvoj Bog, Bog, zvesti Bog, ki ohranja zavezo in dobroto tistim, ki ga ljubijo in izpolnjujejo njegove zapovedi, do tisočega rodu,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+7"
  },
  {
    "reference": "Matej 17,20",
    "text": "»Zato, ker imate malo vere,«jim je dejal.»Resnično, povem vam: Če bi imeli vero kakor gorčično zrno, bi rekli tej gori: ›Prestavi se od tod tja!‹, in se bo prestavila in nič vam ne bo nemogoče.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+17"
  },
  {
    "reference": "Pregovori 2,6",
    "text": "Kajti Gospod daje modrost, iz njegovih ust prihajata spoznanje in razumnost.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+2"
  },
  {
    "reference": "Janez 17,17",
    "text": "Posveti jih v resnici; tvoja beseda je resnica.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+17"
  },
  {
    "reference": "Marko 5,36",
    "text": "Jezus je slišal od strani, kaj so rekli, in je dejal predstojniku shodnice:»Ne boj se, samó veruj!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mr+5"
  },
  {
    "reference": "Psalm 105,1",
    "text": "Zahvaljujte se Gospodu, kličite njegovo ime, dajte spoznati med ljudstvi njegova dela.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+105"
  },
  {
    "reference": "Rimljanom 3,23–24",
    "text": "saj so vsi grešili in so brez Božje slave, opravičeni pa so zastonj po njegovi milosti, prek odkupitve v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+3"
  },
  {
    "reference": "Rimljanom 5,1",
    "text": "Ker smo torej opravičeni iz vere, živimo v miru z Bogom po našem Gospodu Jezusu Kristusu,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Matej 10,29–31",
    "text": "Ali ne prodajajo dveh vrabcev za en novčič? In vendar nobeden od njiju ne pade na zemljo brez vašega Očeta. Vam pa so celo vsi lasje na glavi prešteti. Ne bojte se torej! Vi ste vredni več kakor veliko vrabcev.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+10"
  },
  {
    "reference": "Matej 5,9",
    "text": "Blagor tistim, ki delajo za mir, kajti imenovani bodo Božji sinovi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+5"
  },
  {
    "reference": "Pregovori 17,17",
    "text": "Prijatelj ljubi v vsakršnih časih in brat se izkaže v stiski.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+17"
  },
  {
    "reference": "1 Tesaloničanom 1,3",
    "text": "Pred našim Bogom in Očetom imamo neprenehoma v spominu vaše delo vere, napor ljubezni in vztrajnost upanja v našega Gospoda Jezusa Kristusa.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+1"
  },
  {
    "reference": "Janez 15,12–13",
    "text": "To je moja zapoved, da se ljubite med seboj, kakor sem vas jaz ljubil. Nihče nima večje ljubezni, kakor je ta, da dá življenje za svoje prijatelje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Psalm 126,3",
    "text": "Velike reči je Gospod storil za nas, bili smo veseli.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+126"
  },
  {
    "reference": "Pregovori 11,14",
    "text": "Kjer ni izvedenosti, ljudstvo propada, kjer je veliko svetovalcev, je blaginja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+11"
  },
  {
    "reference": "1 Korinčanom 13,4–7",
    "text": "Ljubezen je potrpežljiva, dobrotljiva je ljubezen, ni nevoščljiva, ljubezen se ne ponaša, se ne napihuje, ni brezobzirna, ne išče svojega, ne da se razdražiti, ne misli hudega. Ne veseli se krivice, veseli pa se resnice. Vse prenaša, vse veruje, vse upa, vse prestane.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "Jozue 1,5",
    "text": "Nihče se ti ne bo mogel ustavljati vse dni tvojega življenja; kakor sem bil z Mojzesom, bom tudi s teboj. Ne bom te pozabil, ne bom te zapustil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "1 Korinčanom 16,14",
    "text": "Pri vas naj se vse dela iz ljubezni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+16"
  },
  {
    "reference": "Izaija 40,29",
    "text": "Omagujočemu daje moč, onemoglemu povečuje vzdržljivost.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "Psalm 4,9",
    "text": "V miru bom hkrati legel in spal, saj ti sam, Gospod, me pustiš varno prebivati.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+4"
  },
  {
    "reference": "Matej 8,26",
    "text": "Dejal jim je:»Kaj se bojite, maloverni?«Tedaj je vstal, zapretil vetrovom in jezeru in nastala je globoka tišina.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+8"
  },
  {
    "reference": "Pregovori 8,11",
    "text": "Kajti modrost je boljša od biserov, nobena želja ji ni enakovredna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+8"
  },
  {
    "reference": "Razodetje 19,7",
    "text": "Veselimo se in radujmo ter mu izkažimo čast, zakaj prišla je Jagnjetova svatba in njegova nevesta se je pripravila.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Raz+19"
  },
  {
    "reference": "2 Mojzes 14,14",
    "text": "Gospod se bo bojeval za vas, vi pa ostanite mirni!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Mz+14"
  },
  {
    "reference": "Hebrejcem 10,35–36",
    "text": "Ne zavrzite torej svoje zaupnosti, ki jo čaka veliko plačilo. Kajti stanovitnost vam je potrebna, pa boste izpolnili Božjo voljo in tako dosegli, kar je obljubljeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "Izaija 12,4–5",
    "text": "Tisti dan boste rekli: Zahvaljujte se Gospodu, kličite njegovo ime, oznanjajte med narodi njegova dela, razglašajte, da je vzvišeno njegovo ime. Pojte Gospodu, ker je storil velika dela, naj bodo znana po vsej zemlji.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+12"
  },
  {
    "reference": "Jeremija 1,8",
    "text": "Nikar se jih ne boj, saj sem jaz s teboj, da te rešujem, govori Gospod.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+1"
  },
  {
    "reference": "Izaija 32,17–18",
    "text": "Delo pravičnosti bo mir, sad pravičnosti bo počitek in varnost na veke. Moje ljudstvo bo prebivalo v mirnem kraju, v varnih domovih in brezskrbnih počivališčih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+32"
  },
  {
    "reference": "Filipljanom 3,13–14",
    "text": "Ne mislim, bratje, da sem to dosegel. Eno pa: pozabljam, kar je za menoj, in se iztegujem proti temu, kar je pred menoj, ter tečem proti cilju po nagrado, h kateri nas od zgoraj kliče Bog v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+3"
  },
  {
    "reference": "Janez 1,12",
    "text": "Tistim pa, ki so jo sprejeli, je dala moč, da postanejo Božji otroci, vsem, ki verujejo v njeno ime",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+1"
  },
  {
    "reference": "Psalm 84,13",
    "text": "Gospod nad vojskami, blagor človeku, ki zaupa vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+84"
  },
  {
    "reference": "Pregovori 13,20",
    "text": "Kdor hodi z modrimi, bo moder, kdor se druži z norci, bo propadel.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+13"
  },
  {
    "reference": "Janez 13,34–35",
    "text": "Novo zapoved vam dam, da se ljubite med seboj! Kakor sem vas jaz ljubil, tako se tudi vi ljubite med seboj! Po tem bodo vsi spoznali, da ste moji učenci, če boste med seboj imeli ljubezen.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+13"
  },
  {
    "reference": "Matej 6,9–13",
    "text": "Vi torej molíte takóle: Oče naš, ki si v nebesih, posvečeno bodi tvoje ime. Pridi tvoje kraljestvo. Zgôdi se tvoja volja kakor v nebesih tako na zemlji. Daj nam danes naš vsakdanji kruh; in odpústi nam naše dolge, kakor smo tudi mi odpustili svojim dolžnikom; in ne vpelji nas v skušnjavo, temveč reši nas hudega.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+6"
  },
  {
    "reference": "Jakob 3,17",
    "text": "Modrost pa, ki je od zgoraj, je najprej čista, nato miroljubna, prizanesljiva, dovzetna, polna usmiljenja in dobrih sadov, brez razločevanja in hinavščine.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+3"
  },
  {
    "reference": "Nehemija 8,10",
    "text": "Dalje jim je rekel:»Pojdite, nasitite se s tolstim mesom in se napijte sladkega vina. Pošljite delež tudi tistemu, ki nima nič pripravljeno. Kajti svet je ta dan našemu Gospodu. Ne bodite žalostni, kajti Gospodovo veselje je vaša moč.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Neh+8"
  },
  {
    "reference": "1 Janez 3,18",
    "text": "Otroci, ne ljubimo z besedo, tudi ne z jezikom, ampak v dejanju in resnici.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+3"
  },
  {
    "reference": "Psalm 66,1–2",
    "text": "Zborovodju. Pesem. Psalm. Vzklikajte Bogu, vsa zemlja, pojte slavo njegovega imena, dajte slavo njegovi hvalnici.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+66"
  },
  {
    "reference": "Pregovori 1,7",
    "text": "Strah Gospodov je začetek znanja, modrost in vzgojo zaničujejo bedaki.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+1"
  },
  {
    "reference": "Janez 10,10",
    "text": "Tat prihaja samo zato, da krade, kolje in uničuje. Jaz sem prišel, da bi imeli življenje in ga imeli v obilju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+10"
  },
  {
    "reference": "Janez 15,11",
    "text": "To sem vam povedal, da bo moje veselje v vas in da bo vaše veselje dopolnjeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Psalm 42,6",
    "text": "Zakaj si potrta, moja duša, in se vznemirjaš v meni? Upaj v Boga, zakaj še ga bom hvalil, svojega rešitelja",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+42"
  },
  {
    "reference": "2 Korinčanom 13,13",
    "text": "Milost Gospoda Jezusa Kristusa in ljubezen Boga in občestvo Svetega Duha z vami vsemi!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+13"
  },
  {
    "reference": "Galačanom 2,20",
    "text": "ne živim več jaz, ampak Kristus živi v meni. Kolikor pa zdaj živim v mesu, živim v veri v Božjega Sina, ki me je vzljubil in daroval zame sam sebe.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+2"
  },
  {
    "reference": "Rimljanom 8,31",
    "text": "Kaj bomo torej rekli k vsemu temu? Če je Bog za nas, kdo je zoper nas?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "2 Samuel 22,31",
    "text": "To je Bog, njegova pot je popolna, Gospodov izrek je prečiščen, ščit je vsem, ki se zatekajo k njemu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Sam+22"
  },
  {
    "reference": "Psalm 19,8–9",
    "text": "Gospodova postava je popolna, poživlja dušo; Gospodovo pričevanje je zanesljivo, nevednega dela modrega. Gospodovi ukazi so pravi, razveseljujejo srce; Gospodova zapoved je jasna, razsvetljuje oči.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+19"
  },
  {
    "reference": "Psalm 51,12",
    "text": "Čisto srce, o Bog, mi ustvari, stanovitnega duha obnovi v moji notranjosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+51"
  },
  {
    "reference": "Psalm 39,8",
    "text": "In zdaj, kaj naj upam, o Gospod? Moje pričakovanje velja tebi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+39"
  },
  {
    "reference": "Psalm 18,2–3",
    "text": "Rekel je: Ljubim te, Gospod, moja moč, Gospod, moja skala, moja trdnjava, moj osvoboditelj; moj Bog, moja pečina, kamor se zatekam, moj ščit, rog moje rešitve, moje zavetje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+18"
  },
  {
    "reference": "Janez 8,12",
    "text": "Spet jim je Jezus spregovoril:»Jaz sem luč sveta. Kdor hodi za menoj, ne bo hodil v temi, temveč bo imel luč življenja.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+8"
  },
  {
    "reference": "2 Korinčanom 4,8–9",
    "text": "Od vseh strani pritiskajo na nas, pa nismo utesnjeni. Ne vidimo poti, pa jo še najdemo. Preganjajo nas, pa nismo zapuščeni. Ob tla nas mečejo, pa nismo uničeni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+4"
  },
  {
    "reference": "Janez 6,35",
    "text": "Jezus jim je dejal:»Jaz sem kruh življenja. Kdor pride k meni, gotovo ne bo lačen, in kdor vame veruje, gotovo nikoli ne bo žejen.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+6"
  },
  {
    "reference": "2 Timoteju 1,7",
    "text": "Bog nam ni dal duha boječnosti, temveč duha moči, ljubezni in razumnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Tim+1"
  },
  {
    "reference": "1 Tesaloničanom 5,18",
    "text": "V vsem se zahvaljujte: kajti to je Božja volja v Kristusu Jezusu glede vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "Psalm 31,25",
    "text": "Bodite močni, vaše srce naj se opogumi, vsi vi, ki pričakujete Gospoda!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+31"
  },
  {
    "reference": "Psalm 33,1",
    "text": "Vriskajte, pravični, v Gospodu, iskrenim pristaja hvala;",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+33"
  },
  {
    "reference": "Matej 6,25–26",
    "text": "»Zato vam pravim: Ne skrbite za svoje življenje, kaj boste jedli ali kaj boste pili, in ne za svoje telo, kaj boste oblekli. Ali ni življenje več kot jed in telo več kot obleka? Poglejte ptice neba! Ne sejejo in ne žanjejo niti ne spravljajo v žitnice, in vendar jih vaš nebeški Oče hrani. Ali niste vi več vredni kot one?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+6"
  },
  {
    "reference": "1 Janez 3,1",
    "text": "Poglejte, kakšno ljubezen nam je podaril Oče: Božji otroci se imenujemo in to tudi smo. Svet nas zato ne spoznava, ker ni spoznal njega.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+3"
  },
  {
    "reference": "Rimljanom 15,7",
    "text": "Zato sprejemajte drug drugega, kakor je tudi Kristus sprejel vas, v Božjo slavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "1 Tesaloničanom 3,12",
    "text": "Vam pa naj Gospod nakloni rast in preobilje v ljubezni, s katero ljubite drug drugega in vse, prav kakor jo čutimo mi do vas,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+3"
  },
  {
    "reference": "Psalm 9,2",
    "text": "Gospod, slavil te bom z vsem svojim srcem, pripovedoval bom o vseh tvojih čudovitih delih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+9"
  },
  {
    "reference": "Psalm 24,1",
    "text": "Davidov psalm. Gospodova je zemlja in kar jo napolnjuje, zemeljski krog in njegovi prebivalci.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+24"
  },
  {
    "reference": "Pridigar 4,9–10",
    "text": "Boljše je, da sta dva kakor eden, ker imata dobro plačilo za svoj trud: če namreč eden pade, ga njegov tovariš vzdigne, gorje pa enemu, če pade, ker ni drugega, da bi ga vzdignil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prd+4"
  },
  {
    "reference": "Psalm 61,3–4",
    "text": "Od konca zemlje kličem k tebi, ko moje srce upada; na skalo, ki je zame previsoka, me pelji. Zakaj bil si mi zatočišče, močen stolp pred sovražnikom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+61"
  },
  {
    "reference": "Psalm 18,30",
    "text": "Zares, s teboj napodim sovražna krdela, s svojim Bogom preskočim zidovje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+18"
  },
  {
    "reference": "Habakuk 2,3",
    "text": "Kajti še je videnje za določeni čas, bliža se svoji izpolnitvi in ne vara. Če odlaša, ga le čakaj, kajti zagotovo pride, ne bo zamudilo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Hab+2"
  },
  {
    "reference": "Jeremija 17,7–8",
    "text": "Blagoslovljen mož, ki zaupa v Gospoda in je Gospod njegovo zaupanje. Je kakor drevo, zasajeno ob vodi, ki steza svoje korenine k potoku, ne boji se, ko pride vročina, njegovo listje ostane zeleno; v sušnem letu ne trpi pomanjkanja in ne neha roditi sadu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+17"
  },
  {
    "reference": "Pregovori 15,1",
    "text": "Mil odgovor pomirja togoto, žaljiva beseda pa zbuja jezo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+15"
  },
  {
    "reference": "2 Kroniška 15,7",
    "text": "Bodite torej močni! Vaše roke naj ne omagajo, kajti za vaše delo vas čaka nagrada.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Krn+15"
  },
  {
    "reference": "1 Peter 4,8",
    "text": "Predvsem se med seboj goreče ljubite, ker ljubezen pokrije množico grehov.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+4"
  },
  {
    "reference": "2 Korinčanom 4,16–18",
    "text": "Zato ne omagujemo. Nasprotno, čeprav naš zunanji človek razpada, se naš notranji iz dneva v dan obnavlja. Naša trenutna lahka stiska nam namreč pripravlja čez vso mero težko, večno bogastvo slave, ker se ne oziramo na to, kar se vidi, ampak na to, kar se ne vidi. Kar se namreč vidi, je začasno, kar pa se ne vidi, je večno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+4"
  },
  {
    "reference": "Marko 4,39–40",
    "text": "In vstal je, zapretil vetru in rekel jezeru:»Utihni! Molči!«In veter se je polegel in nastala je globoka tišina. Njim pa je rekel:»Kaj ste strahopetni? Ali še nimate vere?«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mr+4"
  },
  {
    "reference": "5 Mojzes 6,5–7",
    "text": "Ljubi Gospoda, svojega Boga, z vsem srcem, z vso dušo in z vso močjo! Te besede, ki ti jih danes zapovedujem, naj bodo v tvojem srcu. Ponavljaj jih svojim sinovom in govôri o njih, ko bivaš v svoji hiši in ko hodiš po poti, ko legaš in ko vstajaš!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+6"
  },
  {
    "reference": "Psalm 20,8",
    "text": "Ti na vozove, oni na konje, mi pa se zanašamo na ime Gospoda, našega Boga.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+20"
  },
  {
    "reference": "Janez 3,16",
    "text": "Bog je namreč svet tako vzljubil, da je dal svojega edinorojenega Sina, da bi se nihče, kdor vanj veruje, ne pogubil, ampak bi imel večno življenje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+3"
  },
  {
    "reference": "Izaija 35,3–4",
    "text": "Okrepíte utrujene roke, utrdíte klecava kolena. Recite njim, ki so plahega srca:»Bódite močni, nikar se ne bojte! Glejte, vaš Bog! Maščevanje prihaja, Božje povračilo, on prihaja, da vas reši!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+35"
  },
  {
    "reference": "Luka 10,20",
    "text": "Vendar se ne veselite nad tem, da so vam duhovi pokorni, ampak se veselite, ker so vaša imena zapisana v nebesih.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+10"
  },
  {
    "reference": "Filipljanom 2,3–4",
    "text": "Ne delajte ničesar iz prepirljivosti in ne iz praznega slavohlepja, ampak imejte v ponižnosti drug drugega za boljšega od sebe. Naj nobeden ne gleda samo nase, temveč tudi na druge.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+2"
  },
  {
    "reference": "Rimljanom 8,28",
    "text": "Sicer pa vemo, da njim, ki ljubijo Boga, vse pripomore k dobremu, namreč njim, ki so bili poklicani po njegovem načrtu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Matej 5,12",
    "text": "Veselite in radujte se, kajti vaše plačilo v nebesih je veliko. Tako so namreč preganjali že preroke, ki so bili pred vami.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+5"
  },
  {
    "reference": "Psalm 27,1",
    "text": "Davidov psalm. Gospod je moja luč in moja rešitev, koga bi se moral bati? Gospod je trdnjava mojega življenja, pred kom bi moral trepetati?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "Pregovori 3,5–6",
    "text": "Zaupaj v Gospoda z vsem svojim srcem, na svojo razumnost pa se ne zanašaj. Na vseh svojih poteh ga spoznavaj in on bo uravnaval tvoje steze.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+3"
  },
  {
    "reference": "Filipljanom 4,8–9",
    "text": "Sicer pa, bratje, vse, kar je resnično, kar je vzvišeno, kar je pravično, kar je čisto, kar je ljubeznivo, kar je častno, kar je količkaj krepostno in hvalevredno, vse to imejte v mislih. Kar ste se od mene naučili, prejeli, slišali in videli, to delajte. In Bog miru bo z vami.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Rimljanom 12,9–10",
    "text": "Ljubezen naj bo brez hinavščine. Odklanjajte zlo, oklepajte pa se dobrega. Drug drugega ljubíte z bratovsko ljubeznijo. Tekmujte v medsebojnem spoštovanju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+12"
  },
  {
    "reference": "Luka 1,37",
    "text": "Bogu namreč ni nič nemogoče.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+1"
  },
  {
    "reference": "Žalostinke 3,25–26",
    "text": "Gospod je dober tistim, ki upajo vanj, duši, ki ga išče. Dobro je mirno čakati na rešitev Gospodovo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Psalm 30,5",
    "text": "Pojte Gospodu, njegovi zvesti, slavite spomin njegove svetosti!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+30"
  },
  {
    "reference": "Psalm 130,5",
    "text": "Upam v Gospoda, moja duša upa, čakam na njegovo besedo,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+130"
  },
  {
    "reference": "Izaija 40,31",
    "text": "tisti pa, ki zaupajo v Gospoda, obnavljajo svojo moč, vzdigujejo trup kakor orli, tekajo, pa ne opešajo, hodijo, pa ne omagajo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "1 Korinčanom 6,19–20",
    "text": "Mar ne veste, da je vaše telo tempelj Svetega Duha, ki je v vas in ki ga imate od Boga? Ne pripadate sebi, saj ste bili odkupljeni za visoko ceno. Zato poveličujte Boga v svojem telesu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+6"
  },
  {
    "reference": "Psalm 28,7",
    "text": "Gospod je moja moč in moj ščit, vanj je zaupalo moje srce; prejel sem pomoč in srce mi vriska, s svojo pesmijo se mu zahvaljujem.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+28"
  },
  {
    "reference": "Luka 21,19",
    "text": "S svojo stanovitnostjo si boste pridobili svoje življenje.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+21"
  },
  {
    "reference": "Kološanom 3,16",
    "text": "Kristusova beseda naj bogato prebiva med vami. V vsej modrosti se med seboj poučujte in spodbujajte. S psalmi, hvalnicami in duhovnimi pesmimi v svojih srcih hvaležno prepevajte Bogu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Juda 1,2",
    "text": "Usmiljenje vam in mir in ljubezen v obilju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jud+1"
  },
  {
    "reference": "Matej 5,44",
    "text": "Jaz pa vam pravim: Ljubíte svoje sovražnike in molíte za tiste, ki vas preganjajo,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+5"
  },
  {
    "reference": "Filipljanom 2,13",
    "text": "Bog je namreč tisti, ki po svojem blagohotnem načrtu udejanja v vas hotenje in delovanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+2"
  },
  {
    "reference": "Psalm 95,1–2",
    "text": "Pojdite, vriskajmo Gospodu, vzklikajmo skali našega odrešenja. Stopimo predenj s hvalo, vzklikajmo mu s slavospevi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+95"
  },
  {
    "reference": "Pregovori 16,9",
    "text": "Človekovo srce načrtuje svojo pot, a Gospod vodi njegove korake.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+16"
  },
  {
    "reference": "Kološanom 3,15",
    "text": "In Kristusov mir naj kraljuje v vaših srcih, saj ste bili tudi poklicani vanj v enem telesu, in bodite hvaležni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Galačanom 6,9",
    "text": "Ne naveličajmo se, ko delamo dobro; kajti če se ne utrudimo, bomo ob svojem času želi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+6"
  },
  {
    "reference": "Rimljanom 12,12",
    "text": "Veselite se v upanju, potrpite v stiski, vztrajajte v molitvi,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+12"
  },
  {
    "reference": "Pregovori 18,10",
    "text": "Gospodovo ime je utrjen stolp, pravični se zateka vanj in je na varnem.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+18"
  },
  {
    "reference": "1 Korinčanom 16,13",
    "text": "Budni bodite, stojte trdni v veri, možati bodite, bodite močni!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+16"
  },
  {
    "reference": "Psalm 9,10–11",
    "text": "Tako je Gospod zatiranemu zavetje, zavetje v času njegove stiske. Kateri poznajo tvoje ime, zaupajo vate, kajti ti, Gospod, ne zapustiš njih, ki te iščejo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+9"
  },
  {
    "reference": "Habakuk 3,17–19",
    "text": "Kajti smokva ne bo cvetela in na trtah ne bo grozdja, pridelek oljke bo odpovedal in polja ne bodo dajala živeža, drobnica bo izginila iz staj in v hlevih ne bo živine. Vendar se bom veselil v Gospodu, se radoval v Bogu moje rešitve. Gospod Bog je moja moč, dela mi noge kakor košutam in mi daje stopiti na moje višine. (Zborovodju, na godala.)",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Hab+3"
  },
  {
    "reference": "Psalm 47,2",
    "text": "Vsa ljudstva, ploskajte z rokami, vzklikajte Bogu z glasom vriskanja!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+47"
  },
  {
    "reference": "Efežanom 4,32",
    "text": "Bodite drug do drugega dobrosrčni in usmiljeni ter drug drugemu odpuščajte, kakor je tudi vam Bog milostno odpustil v Kristusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+4"
  },
  {
    "reference": "Psalm 23,1–4",
    "text": "Davidov psalm. Gospod je moj pastir, nič mi ne manjka. Na zelenih pašnikih mi daje ležišče; k vodam počitka me vodi. Mojo dušo poživlja, vodi me po pravih stezah zaradi svojega imena. Tudi če bi hodil po globeli smrtne sence, se ne bojim hudega, ker si ti z menoj, tvoja palica in tvoja opora, ti me tolažita.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+23"
  },
  {
    "reference": "Matej 19,26",
    "text": "Jezus pa se je ozrl vanje in jim rekel:»Pri ljudeh to ni mogoče, pri Bogu pa je vse mogoče.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+19"
  },
  {
    "reference": "Matej 21,21–22",
    "text": "Jezus jim je odgovoril in rekel:»Resnično, povem vam: Če boste imeli vero in ne boste dvomili, boste delali ne samo to, kar se je zgodilo s tole smokvo, ampak tudi če boste rekli tej gori: ›Vzdigni se in se vrzi v morje,‹ se bo zgodilo. Če boste verovali, boste prejeli vse, kar boste prosili v molitvi.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+21"
  },
  {
    "reference": "Efežanom 2,10",
    "text": "Njegova stvaritev smo, ustvarjeni v Kristusu Jezusu za dobra dela; zanje nas je Bog vnaprej pripravil, da bi v njih živeli.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+2"
  },
  {
    "reference": "1 Timoteju 1,5",
    "text": "Namen te zapovedi pa je ljubezen, ki izvira iz čistega srca, dobre vesti in iskrene vere.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tim+1"
  },
  {
    "reference": "Psalm 68,4",
    "text": "Pravični pa se veselijo, vriskajo pred Bogom, poskakujejo od veselja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+68"
  },
  {
    "reference": "Izaija 50,10",
    "text": "Kdo izmed vas se boji Gospoda? Naj posluša glas njegovega služabnika. Kdor hodi v temí in nima luči, naj zaupa v Gospodovo ime, naj se opira na svojega Boga.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+50"
  },
  {
    "reference": "Izaija 30,21",
    "text": "Tvoja ušesa bodo slišala za teboj besedo, ki bo pravila:»To je pot, po njej hodite!«če boste morali iti na desno ali na levo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+30"
  },
  {
    "reference": "Psalm 56,4",
    "text": "Na dan, ko se bojim, zaupam vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+56"
  },
  {
    "reference": "Psalm 46,11",
    "text": "Odnehajte in spoznajte, da sem jaz Bog, vzvišen med narodi, vzvišen na zemlji.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+46"
  },
  {
    "reference": "Rimljanom 4,20–21",
    "text": "Ob Božji obljubi ni podvomil v neveri, marveč se je v svoji veri še okrepil in izkazal čast Bogu, popolnoma prepričan, da more Bog to, kar je obljubil, tudi uresničiti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+4"
  },
  {
    "reference": "Visoka pesem 8,7",
    "text": "Velike vode ne morejo pogasiti ljubezni in reke je ne morejo preplaviti. Če bi kdo dal za ljubezen vse bogastvo svoje hiše, bi ga še vedno zaničevali. Zaročenkini bratje",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Vp+8"
  },
  {
    "reference": "1 Mojzes 50,20",
    "text": "Hoteli ste mi sicer storiti húdo, Bog pa je to obrnil na dobro, da naredi to, kar je očitno danes: da ohrani pri življenju številno ljudstvo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Mz+50"
  },
  {
    "reference": "Psalm 145,18",
    "text": "Gospod je blizu vsem, ki ga kličejo, vsem, ki ga kličejo v zvestobi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+145"
  },
  {
    "reference": "1 Peter 1,8–9",
    "text": "Njega ljubite, čeprav ga niste videli. Verujete vanj, čeprav ga zdaj ne vidite, veselite se v neizrekljivem in poveličanem veselju, ko dosegate namen svoje vere, namreč odrešitev duš.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+1"
  },
  {
    "reference": "Psalm 48,15",
    "text": "Zares, to je Bog, naš Bog na vekov veke; on nas bo vodil prek smrti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+48"
  },
  {
    "reference": "Rimljanom 8,38–39",
    "text": "Kajti prepričan sem: ne smrt ne življenje, ne angeli ne poglavarstva, ne sedanjost ne prihodnost, ne moči, ne visokost, ne globokost ne kakršna koli druga stvar nas ne bo mogla ločiti od Božje ljubezni v Kristusu Jezusu, našem Gospodu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Pridigar 3,12–13",
    "text": "Spoznal sem, da ni dobrega v njih, razen da se veselijo in delajo dobro v svojem življenju. Tudi to, da človek jé in pije in se veseli dobrega pri vsem svojem trudu, je Božji dar.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prd+3"
  },
  {
    "reference": "Psalm 55,23",
    "text": "Vrzi svoje breme na Gospoda, on bo skrbel zate, nikoli ne bo dopustil, da bi pravični omahnil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+55"
  },
  {
    "reference": "Psalm 119,49–50",
    "text": "Spomni se za svojega služabnika besede, na katero si postavil moje pričakovanje. To je moja tolažba v moji bedi, da me tvoj izrek poživlja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Pregovori 21,21",
    "text": "Kdor se poganja za pravičnostjo in dobroto, najde življenje, pravičnost in čast.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+21"
  },
  {
    "reference": "Rimljanom 10,9–10",
    "text": "Kajti če boš s svojimi usti priznal, da je Jezus Gospod, in boš v svojem srcu veroval, da ga je Bog obudil od mrtvih, boš rešen. S srcem namreč verujemo, in tako smo deležni pravičnosti, z usti pa izpovedujemo vero, in tako smo deležni odrešenja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+10"
  },
  {
    "reference": "1 Korinčanom 13,13",
    "text": "Za zdaj pa ostanejo vera, upanje, ljubezen, to troje. In največja od teh je ljubezen.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "Psalm 136,1",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+136"
  },
  {
    "reference": "Jozue 21,45",
    "text": "Tudi nobena beseda od vsega dobrega, kar je Gospod govoril v prid Izraelovi hiši, ni ostala neizpolnjena; vse so se izpolnile.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+21"
  },
  {
    "reference": "Psalm 90,17",
    "text": "Milina Gospoda, našega Boga, naj bo nad nami! Delo naših rok utrdi nad nami, delo naših rok, utrdi ga!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+90"
  },
  {
    "reference": "Psalm 56,11",
    "text": "V Boga, katerega besedo hvalim, v Gospoda, katerega besedo hvalim,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+56"
  },
  {
    "reference": "Jozue 1,8",
    "text": "Naj knjiga te postave ne zapusti tvojih ust, temveč jo premišljuj dan in noč, da boš storil povsem, kakor je zapisano v njej. Le tako boš imel uspeh na svoji poti, le tako boš uspeval.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "Janez 20,29",
    "text": "Jezus mu je rekel:»Ker si me videl, veruješ? Blagor tistim, ki niso videli, pa so začeli verovati!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+20"
  },
  {
    "reference": "Mihej 6,8",
    "text": "Oznanil ti je, o človek, kaj je dobro, kaj Gospod hoče od tebe: nič drugega, kakor da ravnaš pravično, da ljubiš dobrohotnost in ponižno hodiš s svojim Bogom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mih+6"
  },
  {
    "reference": "2 Korinčanom 9,15",
    "text": "Hvala Bogu za njegov neopisljivi dar!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+9"
  },
  {
    "reference": "Psalm 121,1–2",
    "text": "Stopniška pesem. Svoje oči vzdigujem h goram: od kod bo prišla moja pomoč? Moja pomoč je od Gospoda, ki je naredil nebo in zemljo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+121"
  },
  {
    "reference": "2 Korinčanom 5,7",
    "text": "saj v veri hodimo in ne v gledanju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+5"
  },
  {
    "reference": "Filipljanom 4,4",
    "text": "Veselite se v Gospodu zmeraj; ponavljam vam, veselite se.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Jeremija 31,3",
    "text": "Iz daljave se mi je prikazal Gospod: Z večno ljubeznijo te ljubim, zato ti tako dolgo izkazujem dobroto.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+31"
  },
  {
    "reference": "Matej 7,12",
    "text": "»Tako torej vse, kar hočete, da bi ljudje storili vam, tudi vi storite njim! To je namreč postava in preroki.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+7"
  },
  {
    "reference": "Psalm 119,9",
    "text": "Kako lahko ohrani mladenič svojo pot čisto? Če bo izpolnjeval tvojo besedo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Psalm 85,9",
    "text": "Poslušam, kaj govori Gospod Bog: Zares, govori o miru svojemu ljudstvu in svojim zvestim in naj se ne obračajo k norosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+85"
  },
  {
    "reference": "Hebrejcem 12,1",
    "text": "Ker nas torej obdaja tako velik oblak pričevalcev, tudi mi odstranimo vsakršno breme in greh, ki nas zlahka prevzame, ter vztrajno tecimo v tekmi, ki nas čaka.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+12"
  },
  {
    "reference": "Janez 15,5",
    "text": "Jaz sem trta, vi mladike. Kdor ostane v meni in jaz v njem, ta rodi obilo sadu, kajti brez mene ne morete storiti ničesar.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Pregovori 16,3",
    "text": "Gospodu priporočaj svoja dela in tvoji načrti se bodo uresničili.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+16"
  },
  {
    "reference": "Rut 1,16–17",
    "text": "Ruta pa je rekla:»Ne sili me, naj te zapustim in odidem od tebe. Kamor pojdeš ti, pojdem jaz; kjer boš prenočevala ti, bom prenočevala jaz; tvoje ljudstvo bo moje ljudstvo in tvoj Bog bo moj Bog. Kjer boš ti umrla, bom umrla jaz in tam bom pokopana. Tako naj mi stori Gospod in tako doda, če me ne bo edinole smrt ločila od tebe.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rut+1"
  },
  {
    "reference": "Izaija 41,13",
    "text": "Kajti jaz sem Gospod, tvoj Bog, ki te držim za desnico in ti pravim:»Ne boj se, jaz ti bom pomagal.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+41"
  },
  {
    "reference": "Rimljanom 5,3–5",
    "text": "Pa ne samo to, ampak se celo ponašamo s stiskami, saj vemo, da stiska rodi potrpljenje, potrpljenje preizkušenost, preizkušenost upanje. Upanje pa ne osramoti, ker je Božja ljubezen izlita v naša srca po Svetem Duhu, ki nam je bil dan.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Zaharija 4,6",
    "text": "Odgovoril je in mi povedal, rekoč:»To je Gospodova beseda Zerubabélu: ›Ne s silo in ne z močjo, temveč z mojim duhom,‹ govori Gospod nad vojskami.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Zah+4"
  },
  {
    "reference": "Jeremija 33,3",
    "text": "Kliči me in ti bom odgovoril; povedal ti bom velike in nedoumljive reči, ki jih nisi poznal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+33"
  },
  {
    "reference": "Jakob 1,2–3",
    "text": "Moji bratje, kadar pridete v razne preizkušnje, imejte to za čisto veselje, saj spoznavate, da preizkušenost vaše vere ustvarja stanovitnost.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "2 Kroniška 16,9",
    "text": "Kajti Gospodove oči se sprehajajo po vsej zemlji, da okrepijo tiste, ki so mu z vsem srcem predani. V tem si ravnal neumno; odslej se boš namreč moral vojskovati!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Krn+16"
  },
  {
    "reference": "Psalm 33,20–22",
    "text": "Naša duša pričakuje Gospoda, on je naša pomoč in naš ščit. Zares, v njem se veseli naše srce, kajti v njegovo sveto ime zaupamo. Tvoja dobrota, Gospod, naj bo nad nami, kakor smo upali vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+33"
  },
  {
    "reference": "Psalm 118,14",
    "text": "Gospod je moja moč in moja pesem, bil mi je v rešitev.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Psalm 91,2",
    "text": "pravi Gospodu:»Moje zatočišče in moja trdnjava, moj Bog, ki vanj zaupam.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+91"
  },
  {
    "reference": "Psalm 139,13–14",
    "text": "Zares, ti si ustvaril moje ledvice, me stkal v materinem telesu. Zahvaljujem se ti, ker sem tako čudovito ustvarjen, čudovita so tvoja dela, moja duša to dobro pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+139"
  },
  {
    "reference": "2 Korinčanom 1,3–4",
    "text": "Slavljen Bog, Oče našega Gospoda Jezusa Kristusa, Oče usmiljenja in Bog vse tolažbe. On nas tolaži v vsaki naši stiski, tako da moremo mi tolažiti tiste, ki so v kakršni koli stiski, in sicer s tolažbo, s kakršno nas same tolaži Bog.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+1"
  },
  {
    "reference": "Rimljanom 15,4",
    "text": "Kar koli je bilo namreč napisano pred nami, je bilo napisano v naše poučenje, da bi oprti na potrpežljivost in na tolažbo, ki jo daje Pismo, imeli upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "5 Mojzes 31,6",
    "text": "Bodite krepki in pogumni, ne bojte se in ne trepetajte pred njimi! Kajti Gospod, tvoj Bog, hodi s teboj; ne bo te pustil samega in ne bo te zapustil.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "Marko 11,22–24",
    "text": "In Jezus jim je odgovoril:»Imejte vero v Boga! Resnično, povem vam: Kdor bo rekel tej gori: ›Vzdigni se in se vrzi v morje‹ in ne bo dvomil v svojem srcu, temveč verjel, da se bo zgodilo, kar pravi, se mu bo zgodilo. Zato vam pravim: Za vse, kar molite in prosite, verjemite, da ste že prejeli, in se vam bo zgodilo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mr+11"
  },
  {
    "reference": "Psalm 131,2",
    "text": "Nasprotno, potešil in pomiril sem svojo dušo kakor otrok v naročju svoje matere, kakor otrok je v meni moja duša.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+131"
  },
  {
    "reference": "Luka 18,27",
    "text": "Dejal je:»Kar je nemogoče pri ljudeh, je mogoče pri Bogu.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+18"
  },
  {
    "reference": "1 Tesaloničanom 5,16–18",
    "text": "Zmeraj se veselite. Neprenehoma molíte. V vsem se zahvaljujte: kajti to je Božja volja v Kristusu Jezusu glede vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "Marko 9,23",
    "text": "Jezus mu je dejal:»Glede tega ›če moreš‹ pa – vse je mogoče tistemu, ki veruje.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mr+9"
  },
  {
    "reference": "Psalm 118,24",
    "text": "To je dan, ki ga je naredil Gospod, radujmo se in se ga veselimo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Nehemija 1,11",
    "text": "Oh, moj Gospod, prosim, naj vendar tvoje uho prisluhne prošnji tvojega služabnika in molitvi tvojih služabnikov, ki se hočejo bati tvojega imena. Bodi danes, prosim, naklonjen svojemu služabniku in mu izkaži usmiljenje pred tem možem!«Bil sem tedaj točaj pri kralju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Neh+1"
  },
  {
    "reference": "Hebrejcem 6,19",
    "text": "To upanje je za nas kakor varno in zanesljivo sidro duše, ki sega v notranjost, za zagrinjalo,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+6"
  },
  {
    "reference": "Psalm 37,23–24",
    "text": "Zaradi Gospoda so koraki moža trdni, nad njegovo potjo ima veselje. Če pade, ne obstane na tleh, ker Gospod podpira njegovo roko.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "Psalm 126,5",
    "text": "Tisti, ki sejejo s solzami, žanjejo z vriskanjem.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+126"
  },
  {
    "reference": "1 Samuel 18,3",
    "text": "Jonatan pa je sklenil zavezo z Davidom, ker ga je ljubil kakor svojo dušo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Sam+18"
  },
  {
    "reference": "Job 19,25",
    "text": "Jaz vem, da je moj Odkupitelj živ in se bo poslednji vzdignil nad prah.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Job+19"
  },
  {
    "reference": "2 Samuel 22,30",
    "text": "Zares, s teboj napodim sovražna krdela, s svojim Bogom preskočim zidovje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Sam+22"
  },
  {
    "reference": "Izaija 55,6",
    "text": "Iščite Gospoda, dokler se daje najti, kličite ga, dokler je blizu!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+55"
  },
  {
    "reference": "Psalm 96,1–2",
    "text": "Pojte Gospodu novo pesem, pojte Gospodu, vsa zemlja! Pojte Gospodu, njegovo ime slavite, oznanjujte dan za dnem njegovo odrešenje!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+96"
  },
  {
    "reference": "Psalm 119,18",
    "text": "Odpri mi oči, da bom gledal čudovita dela tvoje postave.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Pregovori 10,12",
    "text": "Sovraštvo zbuja prepire, ljubezen pa pokriva vse napake.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+10"
  },
  {
    "reference": "Izaija 43,18–19",
    "text": "Ne spominjajte se prejšnjih reči, ne mislite na nekdanje reči. Glejte, nekaj novega storim, zdaj klije, mar ne opazite? Da, speljal bom pot skozi puščavo in reke skozi pustinjo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "Rimljanom 13,8",
    "text": "Ne bodite nikomur dolžniki, razen če gre za medsebojno ljubezen; kdor namreč ljubi drugega, je izpolnil postavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+13"
  },
  {
    "reference": "Psalm 34,18–19",
    "text": "Vpili so, in Gospod je uslišal, iz vseh njihovih stisk jih je rešil. Blizu je Gospod tistim, ki so skrušenega srca, in tiste, ki so potrtega duha, rešuje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "Psalm 147,1",
    "text": "Aleluja! Zakaj dobro je prepevati našemu Bogu, zakaj prijeten je, hvalnica je primerna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+147"
  },
  {
    "reference": "Psalm 62,6–7",
    "text": "Le pri Bogu se umiri, moja duša, kajti od njega je moje upanje. Le on je moja skala in moja rešitev, moja trdnjava: ne bom omahoval.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+62"
  },
  {
    "reference": "Pregovori 14,29",
    "text": "Kdor je počasen za jezo, kaže veliko razsodnost, kdor je nagle jeze, povzdiguje bedaštvo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+14"
  },
  {
    "reference": "Psalm 32,11",
    "text": "Veselite se v Gospodu, radujte se, pravični, vriskajte vsi, ki ste iskreni v srcu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+32"
  },
  {
    "reference": "Psalm 32,8",
    "text": "Modril te bom in te učil na poti, po kateri moraš hoditi, svetoval bom, moje oko je nad tabo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+32"
  },
  {
    "reference": "Mihej 7,7",
    "text": "Jaz pa se oziram na Gospoda, čakam na Boga moje rešitve, moj Bog me bo uslišal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mih+7"
  },
  {
    "reference": "2 Korinčanom 12,10",
    "text": "Vesel sem torej slabotnosti, žalitev, potreb, preganjanj in stisk za Kristusa. Kajti močan sem tedaj, ko sem slaboten.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+12"
  },
  {
    "reference": "1 Samuel 2,2",
    "text": "Nihče ni svet kakor Gospod, zakaj nikogar ni razen tebe, ni je Skale, kakor je naš Bog.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Sam+2"
  },
  {
    "reference": "Psalm 73,24",
    "text": "S svojim nasvetom me vodi, potem pa me vzemi v slavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+73"
  },
  {
    "reference": "Psalm 73,26",
    "text": "Moje meso in moje srce gresta h koncu, skala mojega srca in moj delež je Bog na veke.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+73"
  },
  {
    "reference": "4 Mojzes 6,24–26",
    "text": "Gospod naj te blagoslovi in te varuje. Gospod naj da sijati svoje obličje nad tabo in naj ti bo milostljiv. Gospod naj dvigne svoje obličje nadte in ti podeli mir.‹",
    "chapter": "https://www.biblija.net/biblija.cgi?m=4+Mz+6"
  },
  {
    "reference": "Matej 18,20",
    "text": "Kjer sta namreč dva ali so trije zbrani v mojem imenu, tam sem sredi med njimi.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+18"
  },
  {
    "reference": "Izaija 43,2",
    "text": "Ko pojdeš čez vodo, bom s teboj, ko čez reke, te ne poplavijo, ko pojdeš skoz ogenj, ne zgoriš in plamen te ne bo ožgal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "Psalm 25,4–5",
    "text": "Svoje poti, Gospod, mi daj spoznati, svojih steza me úči. Vodi me v svoji resnici in me úči, saj si ti Bog moje rešitve; vate upam ves dan.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+25"
  },
  {
    "reference": "Rimljanom 12,18",
    "text": "Če je mogoče, kolikor je odvisno od vas, živite v miru z vsemi ljudmi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+12"
  },
  {
    "reference": "Psalm 27,14",
    "text": "Upaj v Gospoda, bodi močan, tvoje srce naj se opogumi, upaj v Gospoda.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "Pregovori 4,23",
    "text": "Z vso skrbjo varuj svoje srce, kajti iz njega izvira življenje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+4"
  },
  {
    "reference": "Psalm 150,6",
    "text": "Vse, kar diha, naj hvali Gospoda. Aleluja!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+150"
  },
  {
    "reference": "Luka 18,1",
    "text": "Povedal jim je še priliko, kako morajo vedno moliti in se ne naveličati.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+18"
  },
  {
    "reference": "Hebrejcem 12,2",
    "text": "Uprimo oči v Jezusa, začetnika in dopolnitelja vere. On je zaradi veselja, ki ga je čakalo, pretrpel križ, preziral sramoto in sédel na desnico Božjega prestola.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+12"
  },
  {
    "reference": "5 Mojzes 32,4",
    "text": "Skala je, popolno je njegovo delo, zakaj vsa njegova pota so prava; zvest Bog je in v njem ni krivice, pravičen je in iskren.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+32"
  },
  {
    "reference": "Luka 8,50",
    "text": "Ko je Jezus to slišal, mu je odgovoril:»Ne boj se! Samo veruj in bo rešena.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+8"
  },
  {
    "reference": "1 Samuel 16,7",
    "text": "Gospod pa je rekel Samuelu:»Ne glej na njegov videz ne na njegovo visoko postavo, kajti odklonil sem ga. Zares, Gospod ne vidi, kakor vidi človek. Človek namreč vidi, kar je pred očmi, Gospod pa vidi v srce.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Sam+16"
  },
  {
    "reference": "Psalm 145,1–3",
    "text": "Davidova hvalnica. Povzdigoval te bom, moj Bog, o Kralj, slavil bom tvoje ime na vekov veke. Vsak dan te bom slavil, hvalil bom tvoje ime na vekov veke. Velik je Gospod in zelo hvaljen, njegova veličina je nedoumljiva.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+145"
  },
  {
    "reference": "Izaija 30,15",
    "text": "Kajti tako vam je rekel Gospod Bog, Sveti Izraelov: Če se spreobrnete in ostanete mirni, boste rešeni, v mirovanju in zaupanju je vaša moč, pa niste hoteli.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+30"
  },
  {
    "reference": "Psalm 37,5",
    "text": "Izroči svojo pot Gospodu, zaupaj vanj, in on bo storil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "Psalm 30,6",
    "text": "Zakaj njegova jeza traja le trenutek, njegova dobrohotnost vse življenje; zvečer se naseli jokanje, proti jutru pa pride vriskanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+30"
  },
  {
    "reference": "Rimljanom 15,13",
    "text": "Bog upanja pa naj vas napolni z vsem veseljem in mirom v verovanju, da bi bili v môči Svetega Duha polni upanja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "Psalm 107,1",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+107"
  },
  {
    "reference": "Hebrejcem 11,6",
    "text": "Brez vere namreč ne moremo biti Bogu všeč, kajti kdor prihaja k Bogu, mora verovati, da on biva in poplača tiste, ki ga iščejo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+11"
  },
  {
    "reference": "Izaija 43,4",
    "text": "Ker si drag v mojih očeh, spoštovan in te ljubim, dam ljudi v zameno zate in ljudstva v zameno za tvoje življenje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "Psalm 34,5",
    "text": "Iskal sem Gospoda, in me je uslišal, vseh mojih strahov me je rešil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "Izaija 41,10",
    "text": "Ne boj se, saj sem s teboj, nikar se plaho ne oziraj, saj sem jaz tvoj Bog. Okrepil te bom in ti pomagal, podpiral te bom z desnico svoje pravičnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+41"
  },
  {
    "reference": "Psalm 44,6",
    "text": "S teboj odbijamo svoje nasprotnike, s tvojim imenom poteptamo naše napadalce.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+44"
  },
  {
    "reference": "Efežanom 3,20",
    "text": "Njemu pa, ki more po môči, katera deluje v nas, v vsem napraviti neznansko več od tega, kar prosimo ali mislimo,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+3"
  },
  {
    "reference": "Kološanom 2,6–7",
    "text": "Kakor ste torej sprejeli Gospoda Kristusa Jezusa, v njem živite, ukoreninjeni in sezidani v njem ter utrjeni v veri, kakor ste bili v njej poučeni, polni zahvaljevanja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+2"
  },
  {
    "reference": "Janez 15,7",
    "text": "Če ostanete v meni in moje besede ostanejo v vas, prosíte, kar koli hočete, in se vam bo zgodilo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Hebrejcem 10,23",
    "text": "Oklepajmo se neomajne izpovedi upanja, ker je on, ki je dal obljubo, zvest.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "Pregovori 15,22",
    "text": "Kjer ni posvetovanja, se načrti izjalovijo, kjer je veliko svetovalcev, se uresničijo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+15"
  },
  {
    "reference": "Hebrejcem 13,6",
    "text": "Zato smo lahko pogumni in govorimo: Gospod je moj pomočnik, ne bom se bal; kaj mi more storiti človek?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+13"
  },
  {
    "reference": "1 Kroniška 29,11",
    "text": "Tvoji, o Gospod, so veličina, moč, čast, sijaj in veličastvo. Tvoje je namreč vse, kar je v nebesih in na zemlji. Tvoje, o Gospod, je kraljestvo in ti se vzdiguješ kot glava nad vse.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Krn+29"
  },
  {
    "reference": "Izaija 26,3–4",
    "text": "Kdor ti je predan, mu ohranjaš mir, mir, ker zaupa vate. Zaupajte v Gospoda vekomaj, kajti samo Gospod Bog je večna skala.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+26"
  },
  {
    "reference": "1 Korinčanom 14,33",
    "text": "kajti Bog ni Bog zmešnjave, ampak miru. Kakor v vseh Cerkvah svetih",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+14"
  },
  {
    "reference": "1 Samuel 17,47",
    "text": "In vsa ta množica bo spoznala, da Gospod ne rešuje z mečem in sulico, kajti boj je Gospodov, in dal vas bo nam v roke.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Sam+17"
  },
  {
    "reference": "Efežanom 2,8–9",
    "text": "Z milostjo ste namreč odrešeni po veri, in to ni iz vas, ampak je Božji dar. Niste odrešeni iz del, da se ne bi kdo hvalil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+2"
  },
  {
    "reference": "Jozue 1,9",
    "text": "Ali ti nisem ukazal, krepak in odločen bodi? Ne boj se in se ne plaši; kjer koli boš hodil, bo s teboj Gospod, tvoj Bog.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "Psalm 112,7",
    "text": "Ne boji se zlobne govorice, njegovo srce je trdno, gotovo v Gospodu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+112"
  },
  {
    "reference": "Psalm 1,1–3",
    "text": "Blagor človeku, ki ne hodi po nasvetu krivičnih, ne stopa na pot grešnikov in ne poseda v družbi porogljivcev, temveč se veseli v Gospodovi postavi in premišljuje njegovo postavo podnevi in ponoči. Tak je kakor drevo, zasajeno ob vodnih strugah, ki daje svoj sad ob svojem času in njegovo listje ne ovene; vse, kar dela, uspeva.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+1"
  },
  {
    "reference": "Hebrejcem 11,1",
    "text": "Je pa vera obstoj resničnosti, v katere upamo, zagotovilo stvari, ki jih ne vidimo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+11"
  },
  {
    "reference": "1 Janez 4,7",
    "text": "Ljubi, ljubimo se med seboj, ker je ljubezen od Boga in ker je vsak, ki ljubi, iz Boga rojen in Boga pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+4"
  },
  {
    "reference": "Psalm 63,4–5",
    "text": "zakaj tvoja dobrota je boljša kakor življenje, moje ustnice te smejo slaviti. Tako te bom slavil v svojem življenju, v tvojem imenu bom vzdigoval svoje roke.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+63"
  },
  {
    "reference": "Psalm 147,11",
    "text": "Gospodu so po volji takšni, ki se ga bojijo, ki pričakujejo njegovo dobroto.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+147"
  },
  {
    "reference": "1 Peter 5,10",
    "text": "Bog vse milosti, ki vas je po Kristusu Jezusu poklical v svojo večno slavo, vas bo po kratkem trpljenju sam izpopolnil, utrdil, okrepil in postavil na temelj.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+5"
  },
  {
    "reference": "1 Janez 4,19",
    "text": "Mi ljubimo, ker nas je on prvi vzljubil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+4"
  },
  {
    "reference": "1 Kroniška 16,34",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Krn+16"
  },
  {
    "reference": "Izaija 40,8",
    "text": "Trava se posuši, cvetica ovene, beseda našega Boga pa obstane na veke.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "Janez 16,33",
    "text": "To sem vam povedal, da bi imeli mir v meni. Na svetu imate stisko, toda bodite pogumni: jaz sem svet premagal.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+16"
  },
  {
    "reference": "Job 28,28",
    "text": "Človeku pa pravi: Glej, strah Gospodov je modrost, ogibati se hudega je razumnost!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Job+28"
  },
  {
    "reference": "2 Kroniška 20,15",
    "text": "Rekel je:»Pozorno prisluhnite, vsi Judovci in jeruzalemski prebivalci in kralj Józafat! Tako vam govori Gospod: Ne bojte se in se ne plašite pred to veliko množico, kajti ne boste se bojevali vi, temveč Bog.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Krn+20"
  },
  {
    "reference": "Matej 22,37–39",
    "text": "Rekel mu je:» Ljubi Gospoda, svojega Boga, z vsem srcem, z vso dušo in z vsem mišljenjem. To je največja in prva zapoved. Druga pa je njej podobna: Ljubi svojega bližnjega kakor samega sebe.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+22"
  },
  {
    "reference": "Pridigar 7,9",
    "text": "Ne predajaj se žalosti v svojem duhu, kajti žalost se zadržuje v prsih norcev.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prd+7"
  },
  {
    "reference": "Matej 6,31–34",
    "text": "Ne skrbite torej in ne govorite: ›Kaj bomo jedli ali kaj bomo pili ali kaj bomo oblekli?‹ Po vsem tem sprašujejo pogani. Saj vaš nebeški Oče ve, da vse to potrebujete. Iščite najprej Božje kraljestvo in njegovo pravičnost in vse to vam bo navrženo. Ne skrbite za jutri, kajti jutrišnji dan bo skrbel sam zase. Dovolj je dnevu njegovo zlo.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+6"
  },
  {
    "reference": "Janez 15,9",
    "text": "Kakor je Oče mene ljubil, sem tudi jaz vas ljubil. Ostanite v moji ljubezni!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Kološanom 3,16–17",
    "text": "Kristusova beseda naj bogato prebiva med vami. V vsej modrosti se med seboj poučujte in spodbujajte. S psalmi, hvalnicami in duhovnimi pesmimi v svojih srcih hvaležno prepevajte Bogu. In vse, kar koli delate v besedi ali v dejanju, vse delajte v imenu Gospoda Jezusa in se po njem zahvaljujte Bogu Očetu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Matej 7,24–25",
    "text": "»Zato je vsak, ki posluša te moje besede in jih uresničuje, podoben preudarnemu možu, ki je zidal svojo hišo na skalo. Ulila se je ploha, pridrlo je vodovje in zapihali so vetrovi ter se zagnali v to hišo, in vendar ni padla, ker je imela temelje na skali.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+7"
  },
  {
    "reference": "Efežanom 1,3",
    "text": "Slavljen Bog in Oče našega Gospoda Jezusa Kristusa, ki nas je v nebesih v Kristusu blagoslovil z vsakršnim duhovnim blagoslovom:",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+1"
  },
  {
    "reference": "Izaija 54,10",
    "text": "Kajti gore se bodo premaknile in griči omajali, moja milost pa se ne bo odmaknila od tebe in moja zaveza miru se ne bo omajala, pravi tvoj usmiljeni, Gospod.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+54"
  },
  {
    "reference": "Psalm 92,2–3",
    "text": "Dobro je zahvaljevati se Gospodu, prepevati tvojemu imenu, Najvišji, oznanjati zjutraj tvojo dobroto, tvojo zvestobo ponoči",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+92"
  },
  {
    "reference": "2 Tesaloničanom 3,16",
    "text": "Sam Gospod miru pa naj vam dá mir, in sicer zmeraj in v vseh okoliščinah. Gospod naj bo z vami vsemi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Tes+3"
  },
  {
    "reference": "Hebrejcem 13,1–2",
    "text": "Vztrajajte v bratski ljubezni. Ne pozabite na gostoljubnost. Ker so bili nekateri gostoljubni, so namreč pogostili angele, ne da bi se zavedali.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+13"
  },
  {
    "reference": "Izaija 45,5",
    "text": "Jaz sem Gospod in drugega ni, razen mene ni nobenega Boga, opasal sem te, ne da bi me bil poznal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+45"
  },
  {
    "reference": "Rimljanom 8,1",
    "text": "Zdaj ni torej nobene obsodbe za tiste, ki so v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Pregovori 19,20",
    "text": "Poslušaj nasvet in sprejemaj vzgojo, da boš nekoč postal moder.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+19"
  },
  {
    "reference": "Habakuk 3,18",
    "text": "Vendar se bom veselil v Gospodu, se radoval v Bogu moje rešitve.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Hab+3"
  },
  {
    "reference": "Matej 5,14–16",
    "text": "Vi ste luč sveta. Mesto, ki stoji na gori, se ne more skriti. Svetilke tudi ne prižigajo in ne postavljajo pod mernik, temveč na podstavek, in sveti vsem, ki so v hiši. Takó naj vaša luč sveti pred ljudmi, da bodo videli vaša dobra dela in slavili vašega Očeta, ki je v nebesih.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+5"
  },
  {
    "reference": "Ezra 7,10",
    "text": "Ezra je namreč pripravil svoje srce, da bi preiskoval Gospodovo postavo in izpolnjeval ter v Izraelu učil zakon in pravo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ezr+7"
  },
  {
    "reference": "Psalm 94,19",
    "text": "Ko se v meni množijo vznemirljive misli, mi tvoje tolažbe razveseljujejo dušo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+94"
  },
  {
    "reference": "Psalm 133,1",
    "text": "Davidova stopniška pesem. Glejte, kako dobro in kako prijetno je, če bratje složno prebivajo skupaj!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+133"
  },
  {
    "reference": "Matej 6,6",
    "text": "Kadar pa ti moliš, pojdi v svojo sobo, zapri vrata in môli k svojemu Očetu, ki je na skrivnem. In tvoj Oče, ki vidi na skrivnem, ti bo povrnil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+6"
  },
  {
    "reference": "Psalm 103,8",
    "text": "Usmiljen in milostljiv je Gospod, počasen v jezi in bogat v dobroti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Pregovori 12,18",
    "text": "Kdor govori lahkomiselno, prebada kakor meč, jezik modrih pa ozdravlja rane.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+12"
  },
  {
    "reference": "Psalm 16,11",
    "text": "Daješ mi spoznati pot življenja; polnost veselja je pred tvojim obličjem, večne radosti na tvoji desnici.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+16"
  },
  {
    "reference": "Luka 12,22–24",
    "text": "Nato je rekel svojim učencem:»Zato vam pravim: Ne skrbite za življenje, kaj boste jedli, in ne za telo, kaj boste oblekli. Saj je življenje več kot jed in telo več kot obleka. Pomislite na vrane: ne sejejo in ne žanjejo. Nimajo ne shrambe ne žitnice in vendar jih Bog hrani. Koliko več kakor ptice ste vredni vi!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+12"
  },
  {
    "reference": "Psalm 63,2",
    "text": "O Bog, moj Bog si ti, željno te iščem, po tebi žeja mojo dušo; moje telo medli po tebi na suhi, izčrpani zemlji brez vode.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+63"
  },
  {
    "reference": "Nahum 1,7",
    "text": "Gospod je dober, utrdba ob dnevu stiske, in pozna tiste, ki se zatekajo k njemu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Nah+1"
  },
  {
    "reference": "5 Mojzes 31,8",
    "text": "Gospod hodi pred teboj; on bo s teboj; ne bo te pustil samega in ne bo te zapustil. Nikar se ne boj in se ne pláši!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "Rimljanom 8,6",
    "text": "Toda meseno mišljenje je smrt, duhovno mišljenje pa življenje in mir.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Kološanom 3,3",
    "text": "Kajti umrli ste in vaše življenje je skrito s Kristusom v Bogu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Galačanom 6,2",
    "text": "Nosíte bremena drug drugemu in tako boste izpolnili Kristusovo postavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+6"
  },
  {
    "reference": "Psalm 103,1–2",
    "text": "Davidov psalm. Slávi, moja duša, Gospoda, vsa moja notranjost njegovo sveto ime. Slávi, moja duša, Gospoda, ne pozabi nobenega dejanja njega,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Jeremija 29,11",
    "text": "Vem za načrte, ki jih imam z vami, govori Gospod: načrte blaginje in ne nesreče, da vam dam prihodnost in upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "Izaija 25,1",
    "text": "Gospod, ti si moj Bog, slavim te in hvalim tvoje ime, ker uresničuješ čudovite sklepe, oddavnaj zvesto in zanesljivo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+25"
  },
  {
    "reference": "Hebrejcem 10,24",
    "text": "Mislimo drug na drugega, takó da se spodbujajmo k ljubezni in dobrim delom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "Pregovori 23,18",
    "text": "Tako si boš zagotovil prihodnost, tvoje upanje se ne bo izjalovilo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+23"
  },
  {
    "reference": "Efežanom 6,10",
    "text": "Sicer pa zajemajte moč v Gospodu in sili njegove moči.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+6"
  },
  {
    "reference": "Psalm 119,105",
    "text": "Tvoja beseda je svetilka mojim nogam, luč moji stezi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Jakob 1,12",
    "text": "Blagor človeku, ki stanovitno prenaša preizkušnjo, kajti ko bo postal preizkušen, bo prejel venec življenja, ki ga je Bog obljubil njim, kateri ga ljubijo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "1 Peter 5,7",
    "text": "Vso svojo skrb vrzite nanj, saj on skrbi za vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+5"
  },
  {
    "reference": "Izaija 43,1–2",
    "text": "Zdaj pa tako govori Gospod, tvoj stvarnik, o Jakob, tvoj upodabljavec, o Izrael: Nikar se ne boj, saj sem te odkupil, poklical sem te po imenu: moj si! Ko pojdeš čez vodo, bom s teboj, ko čez reke, te ne poplavijo, ko pojdeš skoz ogenj, ne zgoriš in plamen te ne bo ožgal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "Luka 11,9–10",
    "text": "Tudi jaz vam pravim: Prosíte in vam bo dano! Iščite in boste našli! Trkajte in se vam bo odprlo! Kajti vsak, kdor prosi, prejme; in kdor išče, najde; in kdor trka, se mu bo odprlo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+11"
  },
  {
    "reference": "Psalm 71,14",
    "text": "Jaz pa bom vedno pričakoval, pridajal bom k vsej tvoji hvali.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+71"
  },
  {
    "reference": "Efežanom 5,20",
    "text": "V imenu našega Gospoda Jezusa Kristusa se nenehoma zahvaljujte Bogu Očetu za vse.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+5"
  },
  {
    "reference": "1 Peter 2,9",
    "text": "Vi pa ste izvoljeni rod, kraljevsko duhovništvo, svet narod, ljudstvo za Božjo last, da bi oznanjali odlike tistega, ki vas je poklical iz teme v svojo čudovito luč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+2"
  },
  {
    "reference": "Izaija 12,2",
    "text": "Glej, Bog je moja rešitev, zaupam in se ne bojim, kajti moja moč in moja pesem je Gospod Bog, bil je moja rešitev.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+12"
  },
  {
    "reference": "Kološanom 3,12–14",
    "text": "Kot Božji izvoljenci, sveti in ljubljeni, si torej oblecite čim globlje usmiljenje, dobrotljivost, ponižnost, krotkost, potrpežljivost. Prenašajte drug drugega in odpuščajte drug drugemu, če se ima kateri kaj pritožiti proti kateremu. Kakor je Gospod odpustil vam, tako tudi vi odpuščajte. Nad vsem tem pa naj bo ljubezen, ki je vez popolnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Matej 6,27",
    "text": "Kdo izmed vas pa more s svojo skrbjo podaljšati svoje življenje za en sam komolec?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+6"
  },
  {
    "reference": "1 Kroniška 28,20",
    "text": "Potem je David rekel sinu Salomonu:»Bodi močan in pogumen ter pojdi na delo! Ne boj se in se ne plaši, saj je Gospod Bog, moj Bog, s teboj. Ne bo se ti odtegnil in te ne bo zapustil, dokler ne bo končano vse delo službe v Gospodovi hiši.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Krn+28"
  },
  {
    "reference": "Galačanom 5,22–23",
    "text": "Sad Duha pa je: ljubezen, veselje, mir, potrpežljivost, blágost, dobrotljivost, zvestoba, krotkost, samoobvladanje. Zoper te stvari ni postave.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+5"
  },
  {
    "reference": "Luka 1,46–47",
    "text": "In Marija je rekla:»Moja duša poveličuje Gospoda in moj duh se raduje v Bogu, mojem Odrešeniku,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+1"
  },
  {
    "reference": "Pregovori 9,10",
    "text": "Začetek modrosti je strah Gospodov, spoznanje svetih je razumnost.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+9"
  },
  {
    "reference": "Psalm 46,2–3",
    "text": "Bog nam je zatočišče in moč, pomoč v stiskah, vedno navzoča. Zato se ne bojimo, ko se zemlja spreminja in se gore majejo v osrčju morja;",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+46"
  },
  {
    "reference": "Psalm 118,8–9",
    "text": "Bolje se je zatekati h Gospodu kakor zaupati v človeka. Bolje se je zatekati h Gospodu kakor zaupati v kneze.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Filipljanom 4,13",
    "text": "Vse zmorem v njem, ki mi daje moč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Izaija 55,11",
    "text": "takó bo z mojo besedo, ki prihaja iz mojih ust: ne vrne se k meni brez uspeha, temveč bo storila, kar sem hotel, in uspela v tem, za kar sem jo poslal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+55"
  },
  {
    "reference": "Psalm 116,1–2",
    "text": "Ljubim Gospoda, ker posluša moj glas, mojo prošnjo za milost. Zakaj svoje uho je nagnil k meni, v svojih dneh ga bom klical.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+116"
  },
  {
    "reference": "Pregovori 18,24",
    "text": "Kdor ima mnogo prijateljev, se mora izpriditi, toda obstaja prijatelj, ki je bolj vdan kakor brat.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+18"
  },
  {
    "reference": "Janez 14,1",
    "text": "»Vaše srce naj se ne vznemirja. Verujete v Boga, tudi vame verujte!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "2 Kroniška 7,14",
    "text": "pa se bo moje ljudstvo, ki kliče nase moje ime, ponižalo, molilo in iskalo moje obličje ter se odvrnilo od svojih hudobnih poti, bom prisluhnil iz nebes, jim odpustil greh in ozdravil njihovo deželo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Krn+7"
  },
  {
    "reference": "Matej 7,7–8",
    "text": "»Prosíte in vam bo dano! Iščite in boste našli! Trkajte in se vam bo odprlo! Kajti vsak, kdor prosi, prejme; in kdor išče, najde; in kdor trka, se mu bo odprlo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+7"
  },
  {
    "reference": "Psalm 34,2",
    "text": "Slavil bom Gospoda ob vsakem času, njegova hvalnica bo vedno v mojih ustih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "1 Kralji 3,9",
    "text": "Daj torej svojemu služabniku poslušno srce, da bo znal vladati tvojemu ljudstvu in razločevati med dobrim in hudim! Kajti kdo bi sicer mogel vladati temu tvojemu mogočnemu ljudstvu?«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kr+3"
  },
  {
    "reference": "Janez 14,27",
    "text": "Mir vam zapuščam, svoj mir vam dajem. Ne dajem vam ga, kakor ga daje svet. Vaše srce naj se ne vznemirja in ne plaši.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "Filipljanom 1,6",
    "text": "Prepričan sem, da bo on, ki je začel v vas dobro delo, to delo dokončal do dneva Kristusa Jezusa.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+1"
  },
  {
    "reference": "Psalm 43,3",
    "text": "Pošlji svojo luč in svojo zvestobo, ti naj me vodita; naj me pripeljeta k tvoji sveti gori, k tvojemu bivališču.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+43"
  },
  {
    "reference": "Joel 2,25",
    "text": "Povrnil vam bom letine, ki so vam jih požrle kobilice rojivka, skakalka, glodalka in grizljivka, moja velika vojska, ki sem jo poslal proti vam.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jl+2"
  },
  {
    "reference": "Matej 11,28–30",
    "text": "Pridite k meni vsi, ki ste utrujeni in obteženi, in jaz vam bom dal počitek. Vzemite nase moj jarem in učite se od mene, ker sem krotak in v srcu ponižen, in našli boste počitek svojim dušam; kajti moj jarem je prijeten in moje breme je lahko.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+11"
  },
  {
    "reference": "Marko 10,27",
    "text": "Jezus se je ozrl vanje in rekel:»Pri ljudeh je to nemogoče, ne pa pri Bogu, kajti pri Bogu je vse mogoče.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mr+10"
  },
  {
    "reference": "1 Peter 1,22",
    "text": "Ker ste v poslušnosti resnici očistili svoje duše za iskreno bratoljubje, se goreče in iz čistega srca ljubíte med seboj,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+1"
  },
  {
    "reference": "Rimljanom 8,37",
    "text": "Toda v vseh teh preizkušnjah zmagujemo po njem, ki nas je vzljubil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Rimljanom 12,15",
    "text": "Veselite se s tistimi, ki se veselijo, in jokajte s tistimi, ki jočejo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+12"
  },
  {
    "reference": "Žalostinke 3,22–23",
    "text": "Dobrota Gospodova je, da nismo popolnoma pokončani, da njegovo usmiljenje ni prenehalo; nova je vsako jutro, velika je tvoja zvestoba.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Psalm 138,3",
    "text": "Na dan, ko sem klical, si me uslišal, povečal si moč v moji duši.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+138"
  },
  {
    "reference": "Rimljanom 1,17",
    "text": "V njem se namreč razodeva Božja pravičnost, iz vere v vero, kakor je zapisano: Pravični bo živel iz vere.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+1"
  },
  {
    "reference": "Pregovori 16,24",
    "text": "Prijazni izreki so satovje medu, sladki za dušo in zdravi za kosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+16"
  },
  {
    "reference": "Jeremija 1,5",
    "text": "»Preden sem te upodobil v materinem telesu, sem te poznal; preden si prišel iz materinega naročja, sem te posvetil, te postavil za preroka narodom.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+1"
  },
  {
    "reference": "Psalm 119,11",
    "text": "Tvoj izrek hranim v svojem srcu, da ne bi grešil zoper tebe.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Janez 11,25–26",
    "text": "Jezus ji je rekel:»Jaz sem vstajenje in življenje: kdor vame veruje, bo živel, tudi če umre; in vsakdo, ki živi in vame veruje, vekomaj ne bo umrl. Veruješ v to?«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+11"
  },
  {
    "reference": "Psalm 86,11",
    "text": "Úči me, Gospod, svojo pot, hodil bom v tvoji resnici, zedini moje srce, da se bo balo tvojega imena.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+86"
  },
  {
    "reference": "Ezekiel 36,26",
    "text": "Dam vam novo srce in novega duha denem v vašo notranjost. Odstranim kamnito srce iz vašega telesa in vam dam meseno srce.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ezk+36"
  },
  {
    "reference": "2 Korinčanom 12,9",
    "text": "a mi je rekel:»Dovolj ti je moja milost. Moč se dopolnjuje v slabotnosti.«Zato se bom zelo rad ponašal s svojimi slabotnostmi, da bi se v meni utaborila Kristusova moč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+12"
  },
  {
    "reference": "Matej 24,13",
    "text": "Kdor pa bo vztrajal do konca, bo rešen.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+24"
  },
  {
    "reference": "Luka 10,41–42",
    "text": "Gospod ji je odgovoril:»Marta, Marta, skrbi in vznemirja te veliko stvari, a le eno je potrebno. Marija si je izvolila dobri del, ki ji ne bo odvzet.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+10"
  }
];
