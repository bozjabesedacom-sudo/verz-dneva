// 365 prečiščenih dnevnih SSP verzov za Božja Beseda.
// Fokus: mir, moč, upanje, vera, ljubezen, vodstvo, hvaležnost in molitev.
// Nekateri najboljši verzi se ponovijo 2–3x čez leto.

const verses = [
  {
    "reference": "5 Mojzes 31,6",
    "text": "Bodite krepki in pogumni, ne bojte se in ne trepetajte pred njimi! Kajti Gospod, tvoj Bog, hodi s teboj; ne bo te pustil samega in ne bo te zapustil.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "1 Peter 5,7",
    "text": "Vso svojo skrb vrzite nanj, saj on skrbi za vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+5"
  },
  {
    "reference": "Janez 15,9",
    "text": "Kakor je Oče mene ljubil, sem tudi jaz vas ljubil. Ostanite v moji ljubezni!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Jakob 1,5",
    "text": "Če pa komu od vas manjka modrosti, naj jo prosi od Boga, ki jo vsem rad daje in ne sramoti – in dana mu bo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "Mihej 6,8",
    "text": "Oznanil ti je, o človek, kaj je dobro, kaj Gospod hoče od tebe: nič drugega, kakor da ravnaš pravično, da ljubiš dobrohotnost in ponižno hodiš s svojim Bogom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mih+6"
  },
  {
    "reference": "Psalm 34,18–19",
    "text": "Vpili so, in Gospod je uslišal, iz vseh njihovih stisk jih je rešil. Blizu je Gospod tistim, ki so skrušenega srca, in tiste, ki so potrtega duha, rešuje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "Psalm 103,8",
    "text": "Usmiljen in milostljiv je Gospod, počasen v jezi in bogat v dobroti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Jeremija 29,13",
    "text": "Iskali me boste in me boste našli. Ko me boste iskali z vsem srcem,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "Psalm 107,1",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+107"
  },
  {
    "reference": "Psalm 119,105",
    "text": "Tvoja beseda je svetilka mojim nogam, luč moji stezi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Rimljanom 15,13",
    "text": "Bog upanja pa naj vas napolni z vsem veseljem in mirom v verovanju, da bi bili v môči Svetega Duha polni upanja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "Janez 15,11",
    "text": "To sem vam povedal, da bo moje veselje v vas in da bo vaše veselje dopolnjeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Psalm 37,23–24",
    "text": "Zaradi Gospoda so koraki moža trdni, nad njegovo potjo ima veselje. Če pade, ne obstane na tleh, ker Gospod podpira njegovo roko.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "1 Korinčanom 16,14",
    "text": "Pri vas naj se vse dela iz ljubezni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+16"
  },
  {
    "reference": "Psalm 23,1",
    "text": "Gospod je moj pastir, nič mi ne manjka.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+23"
  },
  {
    "reference": "Janez 13,34–35",
    "text": "Novo zapoved vam dam, da se ljubite med seboj! Kakor sem vas jaz ljubil, tako se tudi vi ljubite med seboj! Po tem bodo vsi spoznali, da ste moji učenci, če boste med seboj imeli ljubezen.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+13"
  },
  {
    "reference": "Ezekiel 36,26",
    "text": "Dam vam novo srce in novega duha denem v vašo notranjost. Odstranim kamnito srce iz vašega telesa in vam dam meseno srce.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ezk+36"
  },
  {
    "reference": "Psalm 51,12",
    "text": "Čisto srce, o Bog, mi ustvari, stanovitnega duha obnovi v moji notranjosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+51"
  },
  {
    "reference": "5 Mojzes 31,8",
    "text": "Gospod hodi pred teboj; on bo s teboj; ne bo te pustil samega in ne bo te zapustil. Nikar se ne boj in se ne pláši!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "Pregovori 3,5–6",
    "text": "Zaupaj v Gospoda z vsem svojim srcem, na svojo razumnost pa se ne zanašaj. Na vseh svojih poteh ga spoznavaj in on bo uravnaval tvoje steze.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+3"
  },
  {
    "reference": "Psalm 116,1–2",
    "text": "Ljubim Gospoda, ker posluša moj glas, mojo prošnjo za milost. Zakaj svoje uho je nagnil k meni, v svojih dneh ga bom klical.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+116"
  },
  {
    "reference": "Žalostinke 3,22–23",
    "text": "Dobrota Gospodova je, da nismo popolnoma pokončani, da njegovo usmiljenje ni prenehalo; nova je vsako jutro, velika je tvoja zvestoba.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Efežanom 2,8–9",
    "text": "Z milostjo ste namreč odrešeni po veri, in to ni iz vas, ampak je Božji dar. Niste odrešeni iz del, da se ne bi kdo hvalil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+2"
  },
  {
    "reference": "2 Timoteju 1,7",
    "text": "Bog nam ni dal duha boječnosti, temveč duha moči, ljubezni in razumnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Tim+1"
  },
  {
    "reference": "Psalm 121,1–2",
    "text": "Stopniška pesem. Svoje oči vzdigujem h goram: od kod bo prišla moja pomoč? Moja pomoč je od Gospoda, ki je naredil nebo in zemljo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+121"
  },
  {
    "reference": "Jeremija 29,11",
    "text": "Vem za načrte, ki jih imam z vami, govori Gospod: načrte blaginje in ne nesreče, da vam dam prihodnost in upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "Pregovori 15,1",
    "text": "Mil odgovor pomirja togoto, žaljiva beseda pa zbuja jezo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+15"
  },
  {
    "reference": "Izaija 40,31",
    "text": "tisti pa, ki zaupajo v Gospoda, obnavljajo svojo moč, vzdigujejo trup kakor orli, tekajo, pa ne opešajo, hodijo, pa ne omagajo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "1 Korinčanom 13,4–7",
    "text": "Ljubezen je potrpežljiva, dobrotljiva je ljubezen, ni nevoščljiva, ljubezen se ne ponaša, se ne napihuje, ni brezobzirna, ne išče svojega, ne da se razdražiti, ne misli hudega. Ne veseli se krivice, veseli pa se resnice. Vse prenaša, vse veruje, vse upa, vse prestane.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "Psalm 103,11–12",
    "text": "Zakaj kakor je nebo visoko nad zemljo, je njegova dobrota silna nad tistimi, ki se ga bojijo. Kakor je vzhod oddaljen od zahoda, oddaljuje od nas naša hudodelstva.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Rimljanom 8,28",
    "text": "Sicer pa vemo, da njim, ki ljubijo Boga, vse pripomore k dobremu, namreč njim, ki so bili poklicani po njegovem načrtu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Psalm 94,19",
    "text": "Ko se v meni množijo vznemirljive misli, mi tvoje tolažbe razveseljujejo dušo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+94"
  },
  {
    "reference": "Filipljanom 4,13",
    "text": "Vse zmorem v njem, ki mi daje moč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Hebrejcem 10,23",
    "text": "Oklepajmo se neomajne izpovedi upanja, ker je on, ki je dal obljubo, zvest.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "Psalm 28,7",
    "text": "Gospod je moja moč in moj ščit, vanj je zaupalo moje srce; prejel sem pomoč in srce mi vriska, s svojo pesmijo se mu zahvaljujem.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+28"
  },
  {
    "reference": "Habakuk 3,18",
    "text": "Vendar se bom veselil v Gospodu, se radoval v Bogu moje rešitve.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Hab+3"
  },
  {
    "reference": "Psalm 91,2",
    "text": "pravi Gospodu: »Moje zatočišče in moja trdnjava, moj Bog, ki vanj zaupam.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+91"
  },
  {
    "reference": "Janez 14,27",
    "text": "Mir vam zapuščam, svoj mir vam dajem. Ne dajem vam ga, kakor ga daje svet. Vaše srce naj se ne vznemirja in ne plaši.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "Rimljanom 8,37",
    "text": "Toda v vseh teh preizkušnjah zmagujemo po njem, ki nas je vzljubil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Efežanom 4,32",
    "text": "Bodite drug do drugega dobrosrčni in usmiljeni ter drug drugemu odpuščajte, kakor je tudi vam Bog milostno odpustil v Kristusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+4"
  },
  {
    "reference": "Pregovori 4,23",
    "text": "Z vso skrbjo varuj svoje srce, kajti iz njega izvira življenje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+4"
  },
  {
    "reference": "Žalostinke 3,25–26",
    "text": "Gospod je dober tistim, ki upajo vanj, duši, ki ga išče. Dobro je mirno čakati na rešitev Gospodovo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Psalm 25,4–5",
    "text": "Svoje poti, Gospod, mi daj spoznati, svojih steza me úči. Vodi me v svoji resnici in me úči, saj si ti Bog moje rešitve; vate upam ves dan.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+25"
  },
  {
    "reference": "Psalm 145,18",
    "text": "Gospod je blizu vsem, ki ga kličejo, vsem, ki ga kličejo v zvestobi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+145"
  },
  {
    "reference": "Psalm 33,20–22",
    "text": "Naša duša pričakuje Gospoda, on je naša pomoč in naš ščit. Zares, v njem se veseli naše srce, kajti v njegovo sveto ime zaupamo. Tvoja dobrota, Gospod, naj bo nad nami, kakor smo upali vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+33"
  },
  {
    "reference": "Psalm 16,11",
    "text": "Daješ mi spoznati pot življenja; polnost veselja je pred tvojim obličjem, večne radosti na tvoji desnici.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+16"
  },
  {
    "reference": "4 Mojzes 6,24–26",
    "text": "Gospod naj te blagoslovi in te varuje. Gospod naj da sijati svoje obličje nad tabo in naj ti bo milostljiv. Gospod naj dvigne svoje obličje nadte in ti podeli mir.‹",
    "chapter": "https://www.biblija.net/biblija.cgi?m=4+Mz+6"
  },
  {
    "reference": "Psalm 32,8",
    "text": "Modril te bom in te učil na poti, po kateri moraš hoditi, svetoval bom, moje oko je nad tabo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+32"
  },
  {
    "reference": "Psalm 27,14",
    "text": "Upaj v Gospoda, bodi močan, tvoje srce naj se opogumi, upaj v Gospoda.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "Galačanom 6,9",
    "text": "Ne naveličajmo se, ko delamo dobro; kajti če se ne utrudimo, bomo ob svojem času želi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+6"
  },
  {
    "reference": "Izaija 43,1–2",
    "text": "Zdaj pa tako govori Gospod, tvoj stvarnik, o Jakob, tvoj upodabljavec, o Izrael: Nikar se ne boj, saj sem te odkupil, poklical sem te po imenu: moj si! Ko pojdeš čez vodo, bom s teboj, ko čez reke, te ne poplavijo, ko pojdeš skoz ogenj, ne zgoriš in plamen te ne bo ožgal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "Filipljanom 4,4",
    "text": "Veselite se v Gospodu zmeraj; ponavljam vam, veselite se.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "1 Janez 4,7",
    "text": "Ljubi, ljubimo se med seboj, ker je ljubezen od Boga in ker je vsak, ki ljubi, iz Boga rojen in Boga pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+4"
  },
  {
    "reference": "Izaija 54,10",
    "text": "Kajti gore se bodo premaknile in griči omajali, moja milost pa se ne bo odmaknila od tebe in moja zaveza miru se ne bo omajala, pravi tvoj usmiljeni, Gospod.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+54"
  },
  {
    "reference": "Psalm 56,4",
    "text": "Na dan, ko se bojim, zaupam vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+56"
  },
  {
    "reference": "Rimljanom 5,8",
    "text": "Bog pa izkazuje svojo ljubezen do nas s tem, da je Kristus umrl za nas, ko smo bili še grešniki.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Jozue 1,9",
    "text": "Ali ti nisem ukazal, krepak in odločen bodi? Ne boj se in se ne plaši; kjer koli boš hodil, bo s teboj Gospod, tvoj Bog.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "Matej 7,12",
    "text": "»Tako torej vse, kar hočete, da bi ljudje storili vam, tudi vi storite njim! To je namreč postava in preroki.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+7"
  },
  {
    "reference": "Jakob 1,12",
    "text": "Blagor človeku, ki stanovitno prenaša preizkušnjo, kajti ko bo postal preizkušen, bo prejel venec življenja, ki ga je Bog obljubil njim, kateri ga ljubijo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "Psalm 37,5",
    "text": "Izroči svojo pot Gospodu, zaupaj vanj, in on bo storil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "Psalm 126,3",
    "text": "Velike reči je Gospod storil za nas, bili smo veseli.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+126"
  },
  {
    "reference": "Matej 11,28–30",
    "text": "Pridite k meni vsi, ki ste utrujeni in obteženi, in jaz vam bom dal počitek. Vzemite nase moj jarem in učite se od mene, ker sem krotak in v srcu ponižen, in našli boste počitek svojim dušam; kajti moj jarem je prijeten in moje breme je lahko.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+11"
  },
  {
    "reference": "Psalm 139,13–14",
    "text": "Zares, ti si ustvaril moje ledvice, me stkal v materinem telesu. Zahvaljujem se ti, ker sem tako čudovito ustvarjen, čudovita so tvoja dela, moja duša to dobro pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+139"
  },
  {
    "reference": "Jakob 3,17",
    "text": "Modrost pa, ki je od zgoraj, je najprej čista, nato miroljubna, prizanesljiva, dovzetna, polna usmiljenja in dobrih sadov, brez razločevanja in hinavščine.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+3"
  },
  {
    "reference": "Psalm 62,6–7",
    "text": "Le pri Bogu se umiri, moja duša, kajti od njega je moje upanje. Le on je moja skala in moja rešitev, moja trdnjava: ne bom omahoval.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+62"
  },
  {
    "reference": "Sofonija 3,17",
    "text": "Gospod, tvoj Bog, je v tvoji sredi, tvoj močni rešitelj. Veselí se nad teboj v radosti, nemí v svoji ljubezni, vriska nad teboj v prepevanju.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Sof+3"
  },
  {
    "reference": "Pregovori 16,9",
    "text": "Človekovo srce načrtuje svojo pot, a Gospod vodi njegove korake.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+16"
  },
  {
    "reference": "1 Tesaloničanom 5,16–18",
    "text": "Zmeraj se veselite. Neprenehoma molíte. V vsem se zahvaljujte: kajti to je Božja volja v Kristusu Jezusu glede vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "Hebrejcem 13,6",
    "text": "Zato smo lahko pogumni in govorimo: Gospod je moj pomočnik, ne bom se bal; kaj mi more storiti človek?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+13"
  },
  {
    "reference": "Psalm 84,13",
    "text": "Gospod nad vojskami, blagor človeku, ki zaupa vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+84"
  },
  {
    "reference": "Rimljanom 8,31",
    "text": "Kaj bomo torej rekli k vsemu temu? Če je Bog za nas, kdo je zoper nas?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Psalm 118,24",
    "text": "To je dan, ki ga je naredil Gospod, radujmo se in se ga veselimo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Filipljanom 4,6–7",
    "text": "Nič ne skrbite, ampak ob vsaki priložnosti izražajte svoje želje Bogu z molitvijo in prošnjo, z zahvaljevanjem. In Božji mir, ki presega vsak um, bo varoval vaša srca in vaše misli v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "1 Korinčanom 13,13",
    "text": "Za zdaj pa ostanejo vera, upanje, ljubezen, to troje. In največja od teh je ljubezen.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "1 Peter 1,3",
    "text": "Slavljen Bog in Oče našega Gospoda Jezusa Kristusa! Po svojem velikem usmiljenju nas je prerodil za živo upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+1"
  },
  {
    "reference": "Pregovori 17,17",
    "text": "Prijatelj ljubi v vsakršnih časih in brat se izkaže v stiski.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+17"
  },
  {
    "reference": "Psalm 27,1",
    "text": "Davidov psalm. Gospod je moja luč in moja rešitev, koga bi se moral bati? Gospod je trdnjava mojega življenja, pred kom bi moral trepetati?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "Rimljanom 8,28",
    "text": "Sicer pa vemo, da njim, ki ljubijo Boga, vse pripomore k dobremu, namreč njim, ki so bili poklicani po njegovem načrtu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Psalm 46,2–3",
    "text": "Bog nam je zatočišče in moč, pomoč v stiskah, vedno navzoča. Zato se ne bojimo, ko se zemlja spreminja in se gore majejo v osrčju morja;",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+46"
  },
  {
    "reference": "Matej 22,37–39",
    "text": "Rekel mu je: » Ljubi Gospoda, svojega Boga, z vsem srcem, z vso dušo in z vsem mišljenjem. To je največja in prva zapoved. Druga pa je njej podobna: Ljubi svojega bližnjega kakor samega sebe.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+22"
  },
  {
    "reference": "Janez 14,1",
    "text": "»Vaše srce naj se ne vznemirja. Verujete v Boga, tudi vame verujte!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "Psalm 28,7",
    "text": "Gospod je moja moč in moj ščit, vanj je zaupalo moje srce; prejel sem pomoč in srce mi vriska, s svojo pesmijo se mu zahvaljujem.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+28"
  },
  {
    "reference": "Luka 18,1",
    "text": "Povedal jim je še priliko, kako morajo vedno moliti in se ne naveličati.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+18"
  },
  {
    "reference": "Rimljanom 8,28",
    "text": "Sicer pa vemo, da njim, ki ljubijo Boga, vse pripomore k dobremu, namreč njim, ki so bili poklicani po njegovem načrtu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "2 Tesaloničanom 3,16",
    "text": "Sam Gospod miru pa naj vam dá mir, in sicer zmeraj in v vseh okoliščinah. Gospod naj bo z vami vsemi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Tes+3"
  },
  {
    "reference": "Psalm 73,26",
    "text": "Moje meso in moje srce gresta h koncu, skala mojega srca in moj delež je Bog na veke.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+73"
  },
  {
    "reference": "Izaija 26,3–4",
    "text": "Kdor ti je predan, mu ohranjaš mir, mir, ker zaupa vate. Zaupajte v Gospoda vekomaj, kajti samo Gospod Bog je večna skala.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+26"
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
    "reference": "Psalm 18,2–3",
    "text": "Rekel je: Ljubim te, Gospod, moja moč, Gospod, moja skala, moja trdnjava, moj osvoboditelj; moj Bog, moja pečina, kamor se zatekam, moj ščit, rog moje rešitve, moje zavetje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+18"
  },
  {
    "reference": "Izaija 43,18–19",
    "text": "Ne spominjajte se prejšnjih reči, ne mislite na nekdanje reči. Glejte, nekaj novega storim, zdaj klije, mar ne opazite? Da, speljal bom pot skozi puščavo in reke skozi pustinjo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "2 Korinčanom 5,7",
    "text": "saj v veri hodimo in ne v gledanju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+5"
  },
  {
    "reference": "Pridigar 4,9–10",
    "text": "Boljše je, da sta dva kakor eden, ker imata dobro plačilo za svoj trud: če namreč eden pade, ga njegov tovariš vzdigne, gorje pa enemu, če pade, ker ni drugega, da bi ga vzdignil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prd+4"
  },
  {
    "reference": "Psalm 29,11",
    "text": "Gospod daje moč svojemu ljudstvu, Gospod bo blagoslovil svoje ljudstvo z mirom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+29"
  },
  {
    "reference": "Janez 15,12–13",
    "text": "To je moja zapoved, da se ljubite med seboj, kakor sem vas jaz ljubil. Nihče nima večje ljubezni, kakor je ta, da dá življenje za svoje prijatelje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Kološanom 3,15",
    "text": "In Kristusov mir naj kraljuje v vaših srcih, saj ste bili tudi poklicani vanj v enem telesu, in bodite hvaležni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Psalm 25,4–5",
    "text": "Svoje poti, Gospod, mi daj spoznati, svojih steza me úči. Vodi me v svoji resnici in me úči, saj si ti Bog moje rešitve; vate upam ves dan.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+25"
  },
  {
    "reference": "Psalm 131,2",
    "text": "Nasprotno, potešil in pomiril sem svojo dušo kakor otrok v naročju svoje matere, kakor otrok je v meni moja duša.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+131"
  },
  {
    "reference": "Psalm 34,2",
    "text": "Slavil bom Gospoda ob vsakem času, njegova hvalnica bo vedno v mojih ustih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "Hebrejcem 10,35–36",
    "text": "Ne zavrzite torej svoje zaupnosti, ki jo čaka veliko plačilo. Kajti stanovitnost vam je potrebna, pa boste izpolnili Božjo voljo in tako dosegli, kar je obljubljeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "Psalm 103,8",
    "text": "Usmiljen in milostljiv je Gospod, počasen v jezi in bogat v dobroti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Psalm 42,6",
    "text": "Zakaj si potrta, moja duša, in se vznemirjaš v meni? Upaj v Boga, zakaj še ga bom hvalil, svojega rešitelja",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+42"
  },
  {
    "reference": "Izaija 12,2",
    "text": "Glej, Bog je moja rešitev, zaupam in se ne bojim, kajti moja moč in moja pesem je Gospod Bog, bil je moja rešitev.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+12"
  },
  {
    "reference": "Janez 15,11",
    "text": "To sem vam povedal, da bo moje veselje v vas in da bo vaše veselje dopolnjeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Pregovori 21,21",
    "text": "Kdor se poganja za pravičnostjo in dobroto, najde življenje, pravičnost in čast.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+21"
  },
  {
    "reference": "Juda 1,2",
    "text": "Usmiljenje vam in mir in ljubezen v obilju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jud+1"
  },
  {
    "reference": "Ezekiel 36,26",
    "text": "Dam vam novo srce in novega duha denem v vašo notranjost. Odstranim kamnito srce iz vašega telesa in vam dam meseno srce.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ezk+36"
  },
  {
    "reference": "Matej 10,29–31",
    "text": "Ali ne prodajajo dveh vrabcev za en novčič? In vendar nobeden od njiju ne pade na zemljo brez vašega Očeta. Vam pa so celo vsi lasje na glavi prešteti. Ne bojte se torej! Vi ste vredni več kakor veliko vrabcev.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+10"
  },
  {
    "reference": "Jakob 3,17",
    "text": "Modrost pa, ki je od zgoraj, je najprej čista, nato miroljubna, prizanesljiva, dovzetna, polna usmiljenja in dobrih sadov, brez razločevanja in hinavščine.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+3"
  },
  {
    "reference": "Rimljanom 15,13",
    "text": "Bog upanja pa naj vas napolni z vsem veseljem in mirom v verovanju, da bi bili v môči Svetega Duha polni upanja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "Habakuk 3,18",
    "text": "Vendar se bom veselil v Gospodu, se radoval v Bogu moje rešitve.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Hab+3"
  },
  {
    "reference": "Hebrejcem 6,19",
    "text": "To upanje je za nas kakor varno in zanesljivo sidro duše, ki sega v notranjost, za zagrinjalo,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+6"
  },
  {
    "reference": "Efežanom 6,10",
    "text": "Sicer pa zajemajte moč v Gospodu in sili njegove moči.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+6"
  },
  {
    "reference": "Kološanom 3,16–17",
    "text": "Kristusova beseda naj bogato prebiva med vami. V vsej modrosti se med seboj poučujte in spodbujajte. S psalmi, hvalnicami in duhovnimi pesmimi v svojih srcih hvaležno prepevajte Bogu. In vse, kar koli delate v besedi ali v dejanju, vse delajte v imenu Gospoda Jezusa in se po njem zahvaljujte Bogu Očetu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Rimljanom 8,37",
    "text": "Toda v vseh teh preizkušnjah zmagujemo po njem, ki nas je vzljubil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Pregovori 4,23",
    "text": "Z vso skrbjo varuj svoje srce, kajti iz njega izvira življenje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+4"
  },
  {
    "reference": "Psalm 136,1",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+136"
  },
  {
    "reference": "Jakob 1,12",
    "text": "Blagor človeku, ki stanovitno prenaša preizkušnjo, kajti ko bo postal preizkušen, bo prejel venec življenja, ki ga je Bog obljubil njim, kateri ga ljubijo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "Rimljanom 13,8",
    "text": "Ne bodite nikomur dolžniki, razen če gre za medsebojno ljubezen; kdor namreč ljubi drugega, je izpolnil postavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+13"
  },
  {
    "reference": "Žalostinke 3,25–26",
    "text": "Gospod je dober tistim, ki upajo vanj, duši, ki ga išče. Dobro je mirno čakati na rešitev Gospodovo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Filipljanom 4,4",
    "text": "Veselite se v Gospodu zmeraj; ponavljam vam, veselite se.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Rimljanom 5,8",
    "text": "Bog pa izkazuje svojo ljubezen do nas s tem, da je Kristus umrl za nas, ko smo bili še grešniki.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Psalm 56,4",
    "text": "Na dan, ko se bojim, zaupam vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+56"
  },
  {
    "reference": "Galačanom 6,2",
    "text": "Nosíte bremena drug drugemu in tako boste izpolnili Kristusovo postavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+6"
  },
  {
    "reference": "Janez 14,27",
    "text": "Mir vam zapuščam, svoj mir vam dajem. Ne dajem vam ga, kakor ga daje svet. Vaše srce naj se ne vznemirja in ne plaši.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "Efežanom 4,32",
    "text": "Bodite drug do drugega dobrosrčni in usmiljeni ter drug drugemu odpuščajte, kakor je tudi vam Bog milostno odpustil v Kristusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+4"
  },
  {
    "reference": "2 Korinčanom 9,15",
    "text": "Hvala Bogu za njegov neopisljivi dar!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+9"
  },
  {
    "reference": "Jakob 1,5",
    "text": "Če pa komu od vas manjka modrosti, naj jo prosi od Boga, ki jo vsem rad daje in ne sramoti – in dana mu bo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "Psalm 84,13",
    "text": "Gospod nad vojskami, blagor človeku, ki zaupa vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+84"
  },
  {
    "reference": "Rimljanom 5,3–5",
    "text": "Pa ne samo to, ampak se celo ponašamo s stiskami, saj vemo, da stiska rodi potrpljenje, potrpljenje preizkušenost, preizkušenost upanje. Upanje pa ne osramoti, ker je Božja ljubezen izlita v naša srca po Svetem Duhu, ki nam je bil dan.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Psalm 27,14",
    "text": "Upaj v Gospoda, bodi močan, tvoje srce naj se opogumi, upaj v Gospoda.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "Mihej 6,8",
    "text": "Oznanil ti je, o človek, kaj je dobro, kaj Gospod hoče od tebe: nič drugega, kakor da ravnaš pravično, da ljubiš dobrohotnost in ponižno hodiš s svojim Bogom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mih+6"
  },
  {
    "reference": "Jeremija 29,13",
    "text": "Iskali me boste in me boste našli. Ko me boste iskali z vsem srcem,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "Psalm 27,1",
    "text": "Davidov psalm. Gospod je moja luč in moja rešitev, koga bi se moral bati? Gospod je trdnjava mojega življenja, pred kom bi moral trepetati?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "Jozue 1,5",
    "text": "Nihče se ti ne bo mogel ustavljati vse dni tvojega življenja; kakor sem bil z Mojzesom, bom tudi s teboj. Ne bom te pozabil, ne bom te zapustil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "Matej 5,9",
    "text": "Blagor tistim, ki delajo za mir, kajti imenovani bodo Božji sinovi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+5"
  },
  {
    "reference": "Janez 13,34–35",
    "text": "Novo zapoved vam dam, da se ljubite med seboj! Kakor sem vas jaz ljubil, tako se tudi vi ljubite med seboj! Po tem bodo vsi spoznali, da ste moji učenci, če boste med seboj imeli ljubezen.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+13"
  },
  {
    "reference": "Psalm 23,1",
    "text": "Gospod je moj pastir, nič mi ne manjka.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+23"
  },
  {
    "reference": "Jozue 1,9",
    "text": "Ali ti nisem ukazal, krepak in odločen bodi? Ne boj se in se ne plaši; kjer koli boš hodil, bo s teboj Gospod, tvoj Bog.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "1 Korinčanom 13,13",
    "text": "Za zdaj pa ostanejo vera, upanje, ljubezen, to troje. In največja od teh je ljubezen.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "Pregovori 3,5–6",
    "text": "Zaupaj v Gospoda z vsem svojim srcem, na svojo razumnost pa se ne zanašaj. Na vseh svojih poteh ga spoznavaj in on bo uravnaval tvoje steze.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+3"
  },
  {
    "reference": "1 Korinčanom 16,14",
    "text": "Pri vas naj se vse dela iz ljubezni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+16"
  },
  {
    "reference": "Filipljanom 4,6–7",
    "text": "Nič ne skrbite, ampak ob vsaki priložnosti izražajte svoje želje Bogu z molitvijo in prošnjo, z zahvaljevanjem. In Božji mir, ki presega vsak um, bo varoval vaša srca in vaše misli v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Psalm 62,6–7",
    "text": "Le pri Bogu se umiri, moja duša, kajti od njega je moje upanje. Le on je moja skala in moja rešitev, moja trdnjava: ne bom omahoval.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+62"
  },
  {
    "reference": "2 Mojzes 14,14",
    "text": "Gospod se bo bojeval za vas, vi pa ostanite mirni!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Mz+14"
  },
  {
    "reference": "Kološanom 3,12–14",
    "text": "Kot Božji izvoljenci, sveti in ljubljeni, si torej oblecite čim globlje usmiljenje, dobrotljivost, ponižnost, krotkost, potrpežljivost. Prenašajte drug drugega in odpuščajte drug drugemu, če se ima kateri kaj pritožiti proti kateremu. Kakor je Gospod odpustil vam, tako tudi vi odpuščajte. Nad vsem tem pa naj bo ljubezen, ki je vez popolnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Izaija 32,17–18",
    "text": "Delo pravičnosti bo mir, sad pravičnosti bo počitek in varnost na veke. Moje ljudstvo bo prebivalo v mirnem kraju, v varnih domovih in brezskrbnih počivališčih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+32"
  },
  {
    "reference": "Psalm 126,3",
    "text": "Velike reči je Gospod storil za nas, bili smo veseli.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+126"
  },
  {
    "reference": "Pregovori 16,9",
    "text": "Človekovo srce načrtuje svojo pot, a Gospod vodi njegove korake.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+16"
  },
  {
    "reference": "Matej 7,12",
    "text": "»Tako torej vse, kar hočete, da bi ljudje storili vam, tudi vi storite njim! To je namreč postava in preroki.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+7"
  },
  {
    "reference": "Sofonija 3,17",
    "text": "Gospod, tvoj Bog, je v tvoji sredi, tvoj močni rešitelj. Veselí se nad teboj v radosti, nemí v svoji ljubezni, vriska nad teboj v prepevanju.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Sof+3"
  },
  {
    "reference": "Psalm 51,12",
    "text": "Čisto srce, o Bog, mi ustvari, stanovitnega duha obnovi v moji notranjosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+51"
  },
  {
    "reference": "Psalm 43,3",
    "text": "Pošlji svojo luč in svojo zvestobo, ti naj me vodita; naj me pripeljeta k tvoji sveti gori, k tvojemu bivališču.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+43"
  },
  {
    "reference": "5 Mojzes 31,8",
    "text": "Gospod hodi pred teboj; on bo s teboj; ne bo te pustil samega in ne bo te zapustil. Nikar se ne boj in se ne pláši!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "Rimljanom 15,4",
    "text": "Kar koli je bilo namreč napisano pred nami, je bilo napisano v naše poučenje, da bi oprti na potrpežljivost in na tolažbo, ki jo daje Pismo, imeli upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "Psalm 103,11–12",
    "text": "Zakaj kakor je nebo visoko nad zemljo, je njegova dobrota silna nad tistimi, ki se ga bojijo. Kakor je vzhod oddaljen od zahoda, oddaljuje od nas naša hudodelstva.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Psalm 118,14",
    "text": "Gospod je moja moč in moja pesem, bil mi je v rešitev.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Psalm 94,19",
    "text": "Ko se v meni množijo vznemirljive misli, mi tvoje tolažbe razveseljujejo dušo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+94"
  },
  {
    "reference": "Psalm 116,1–2",
    "text": "Ljubim Gospoda, ker posluša moj glas, mojo prošnjo za milost. Zakaj svoje uho je nagnil k meni, v svojih dneh ga bom klical.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+116"
  },
  {
    "reference": "Izaija 35,3–4",
    "text": "Okrepíte utrujene roke, utrdíte klecava kolena. Recite njim, ki so plahega srca: »Bódite močni, nikar se ne bojte! Glejte, vaš Bog! Maščevanje prihaja, Božje povračilo, on prihaja, da vas reši!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+35"
  },
  {
    "reference": "Pregovori 15,1",
    "text": "Mil odgovor pomirja togoto, žaljiva beseda pa zbuja jezo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+15"
  },
  {
    "reference": "Psalm 121,1–2",
    "text": "Stopniška pesem. Svoje oči vzdigujem h goram: od kod bo prišla moja pomoč? Moja pomoč je od Gospoda, ki je naredil nebo in zemljo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+121"
  },
  {
    "reference": "Janez 1,12",
    "text": "Tistim pa, ki so jo sprejeli, je dala moč, da postanejo Božji otroci, vsem, ki verujejo v njeno ime",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+1"
  },
  {
    "reference": "Psalm 107,1",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+107"
  },
  {
    "reference": "Pregovori 17,17",
    "text": "Prijatelj ljubi v vsakršnih časih in brat se izkaže v stiski.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+17"
  },
  {
    "reference": "2 Timoteju 1,7",
    "text": "Bog nam ni dal duha boječnosti, temveč duha moči, ljubezni in razumnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Tim+1"
  },
  {
    "reference": "Filipljanom 3,13–14",
    "text": "Ne mislim, bratje, da sem to dosegel. Eno pa: pozabljam, kar je za menoj, in se iztegujem proti temu, kar je pred menoj, ter tečem proti cilju po nagrado, h kateri nas od zgoraj kliče Bog v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+3"
  },
  {
    "reference": "Jeremija 29,11",
    "text": "Vem za načrte, ki jih imam z vami, govori Gospod: načrte blaginje in ne nesreče, da vam dam prihodnost in upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "Psalm 103,1–2",
    "text": "Davidov psalm. Slávi, moja duša, Gospoda, vsa moja notranjost njegovo sveto ime. Slávi, moja duša, Gospoda, ne pozabi nobenega dejanja njega,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Psalm 139,13–14",
    "text": "Zares, ti si ustvaril moje ledvice, me stkal v materinem telesu. Zahvaljujem se ti, ker sem tako čudovito ustvarjen, čudovita so tvoja dela, moja duša to dobro pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+139"
  },
  {
    "reference": "Izaija 40,31",
    "text": "tisti pa, ki zaupajo v Gospoda, obnavljajo svojo moč, vzdigujejo trup kakor orli, tekajo, pa ne opešajo, hodijo, pa ne omagajo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "Janez 16,33",
    "text": "To sem vam povedal, da bi imeli mir v meni. Na svetu imate stisko, toda bodite pogumni: jaz sem svet premagal.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+16"
  },
  {
    "reference": "Psalm 31,25",
    "text": "Bodite močni, vaše srce naj se opogumi, vsi vi, ki pričakujete Gospoda!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+31"
  },
  {
    "reference": "Galačanom 6,9",
    "text": "Ne naveličajmo se, ko delamo dobro; kajti če se ne utrudimo, bomo ob svojem času želi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+6"
  },
  {
    "reference": "Žalostinke 3,22–23",
    "text": "Dobrota Gospodova je, da nismo popolnoma pokončani, da njegovo usmiljenje ni prenehalo; nova je vsako jutro, velika je tvoja zvestoba.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Hebrejcem 10,23",
    "text": "Oklepajmo se neomajne izpovedi upanja, ker je on, ki je dal obljubo, zvest.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "Psalm 16,11",
    "text": "Daješ mi spoznati pot življenja; polnost veselja je pred tvojim obličjem, večne radosti na tvoji desnici.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+16"
  },
  {
    "reference": "Jeremija 31,3",
    "text": "Iz daljave se mi je prikazal Gospod: Z večno ljubeznijo te ljubim, zato ti tako dolgo izkazujem dobroto.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+31"
  },
  {
    "reference": "Efežanom 2,8–9",
    "text": "Z milostjo ste namreč odrešeni po veri, in to ni iz vas, ampak je Božji dar. Niste odrešeni iz del, da se ne bi kdo hvalil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+2"
  },
  {
    "reference": "1 Kroniška 16,34",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Krn+16"
  },
  {
    "reference": "Psalm 32,8",
    "text": "Modril te bom in te učil na poti, po kateri moraš hoditi, svetoval bom, moje oko je nad tabo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+32"
  },
  {
    "reference": "1 Tesaloničanom 5,11",
    "text": "Zato tolažíte drug drugega in drug drugega izgrajujte, kakor to že delate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "Izaija 54,10",
    "text": "Kajti gore se bodo premaknile in griči omajali, moja milost pa se ne bo odmaknila od tebe in moja zaveza miru se ne bo omajala, pravi tvoj usmiljeni, Gospod.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+54"
  },
  {
    "reference": "Psalm 118,24",
    "text": "To je dan, ki ga je naredil Gospod, radujmo se in se ga veselimo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Psalm 4,9",
    "text": "V miru bom hkrati legel in spal, saj ti sam, Gospod, me pustiš varno prebivati.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+4"
  },
  {
    "reference": "1 Peter 4,8",
    "text": "Predvsem se med seboj goreče ljubite, ker ljubezen pokrije množico grehov.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+4"
  },
  {
    "reference": "Jeremija 1,8",
    "text": "Nikar se jih ne boj, saj sem jaz s teboj, da te rešujem, govori Gospod.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+1"
  },
  {
    "reference": "Kološanom 3,16",
    "text": "Kristusova beseda naj bogato prebiva med vami. V vsej modrosti se med seboj poučujte in spodbujajte. S psalmi, hvalnicami in duhovnimi pesmimi v svojih srcih hvaležno prepevajte Bogu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Hebrejcem 13,6",
    "text": "Zato smo lahko pogumni in govorimo: Gospod je moj pomočnik, ne bom se bal; kaj mi more storiti človek?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+13"
  },
  {
    "reference": "Psalm 46,2–3",
    "text": "Bog nam je zatočišče in moč, pomoč v stiskah, vedno navzoča. Zato se ne bojimo, ko se zemlja spreminja in se gore majejo v osrčju morja;",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+46"
  },
  {
    "reference": "Pregovori 23,18",
    "text": "Tako si boš zagotovil prihodnost, tvoje upanje se ne bo izjalovilo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+23"
  },
  {
    "reference": "Izaija 40,29",
    "text": "Omagujočemu daje moč, onemoglemu povečuje vzdržljivost.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "Izaija 43,1–2",
    "text": "Zdaj pa tako govori Gospod, tvoj stvarnik, o Jakob, tvoj upodabljavec, o Izrael: Nikar se ne boj, saj sem te odkupil, poklical sem te po imenu: moj si! Ko pojdeš čez vodo, bom s teboj, ko čez reke, te ne poplavijo, ko pojdeš skoz ogenj, ne zgoriš in plamen te ne bo ožgal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "1 Korinčanom 13,4–7",
    "text": "Ljubezen je potrpežljiva, dobrotljiva je ljubezen, ni nevoščljiva, ljubezen se ne ponaša, se ne napihuje, ni brezobzirna, ne išče svojega, ne da se razdražiti, ne misli hudega. Ne veseli se krivice, veseli pa se resnice. Vse prenaša, vse veruje, vse upa, vse prestane.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "1 Peter 5,7",
    "text": "Vso svojo skrb vrzite nanj, saj on skrbi za vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+5"
  },
  {
    "reference": "1 Janez 4,7",
    "text": "Ljubi, ljubimo se med seboj, ker je ljubezen od Boga in ker je vsak, ki ljubi, iz Boga rojen in Boga pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+4"
  },
  {
    "reference": "Psalm 112,7",
    "text": "Ne boji se zlobne govorice, njegovo srce je trdno, gotovo v Gospodu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+112"
  },
  {
    "reference": "Psalm 9,2",
    "text": "Gospod, slavil te bom z vsem svojim srcem, pripovedoval bom o vseh tvojih čudovitih delih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+9"
  },
  {
    "reference": "Psalm 37,5",
    "text": "Izroči svojo pot Gospodu, zaupaj vanj, in on bo storil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "Matej 11,28–30",
    "text": "Pridite k meni vsi, ki ste utrujeni in obteženi, in jaz vam bom dal počitek. Vzemite nase moj jarem in učite se od mene, ker sem krotak in v srcu ponižen, in našli boste počitek svojim dušam; kajti moj jarem je prijeten in moje breme je lahko.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+11"
  },
  {
    "reference": "Marko 5,36",
    "text": "Jezus je slišal od strani, kaj so rekli, in je dejal predstojniku shodnice: »Ne boj se, samó veruj!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mr+5"
  },
  {
    "reference": "Janez 15,9",
    "text": "Kakor je Oče mene ljubil, sem tudi jaz vas ljubil. Ostanite v moji ljubezni!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "5 Mojzes 31,6",
    "text": "Bodite krepki in pogumni, ne bojte se in ne trepetajte pred njimi! Kajti Gospod, tvoj Bog, hodi s teboj; ne bo te pustil samega in ne bo te zapustil.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "Rimljanom 12,12",
    "text": "Veselite se v upanju, potrpite v stiski, vztrajajte v molitvi,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+12"
  },
  {
    "reference": "1 Tesaloničanom 5,16–18",
    "text": "Zmeraj se veselite. Neprenehoma molíte. V vsem se zahvaljujte: kajti to je Božja volja v Kristusu Jezusu glede vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "1 Peter 2,9",
    "text": "Vi pa ste izvoljeni rod, kraljevsko duhovništvo, svet narod, ljudstvo za Božjo last, da bi oznanjali odlike tistega, ki vas je poklical iz teme v svojo čudovito luč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+2"
  },
  {
    "reference": "Rimljanom 8,31",
    "text": "Kaj bomo torej rekli k vsemu temu? Če je Bog za nas, kdo je zoper nas?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "4 Mojzes 6,24–26",
    "text": "Gospod naj te blagoslovi in te varuje. Gospod naj da sijati svoje obličje nad tabo in naj ti bo milostljiv. Gospod naj dvigne svoje obličje nadte in ti podeli mir.‹",
    "chapter": "https://www.biblija.net/biblija.cgi?m=4+Mz+6"
  },
  {
    "reference": "Psalm 119,105",
    "text": "Tvoja beseda je svetilka mojim nogam, luč moji stezi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+119"
  },
  {
    "reference": "Psalm 145,18",
    "text": "Gospod je blizu vsem, ki ga kličejo, vsem, ki ga kličejo v zvestobi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+145"
  },
  {
    "reference": "Psalm 92,2–3",
    "text": "Dobro je zahvaljevati se Gospodu, prepevati tvojemu imenu, Najvišji, oznanjati zjutraj tvojo dobroto, tvojo zvestobo ponoči",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+92"
  },
  {
    "reference": "Filipljanom 1,6",
    "text": "Prepričan sem, da bo on, ki je začel v vas dobro delo, to delo dokončal do dneva Kristusa Jezusa.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+1"
  },
  {
    "reference": "2 Korinčanom 4,16–18",
    "text": "Zato ne omagujemo. Nasprotno, čeprav naš zunanji človek razpada, se naš notranji iz dneva v dan obnavlja. Naša trenutna lahka stiska nam namreč pripravlja čez vso mero težko, večno bogastvo slave, ker se ne oziramo na to, kar se vidi, ampak na to, kar se ne vidi. Kar se namreč vidi, je začasno, kar pa se ne vidi, je večno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+4"
  },
  {
    "reference": "Psalm 37,23–24",
    "text": "Zaradi Gospoda so koraki moža trdni, nad njegovo potjo ima veselje. Če pade, ne obstane na tleh, ker Gospod podpira njegovo roko.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "Janez 8,12",
    "text": "Spet jim je Jezus spregovoril: »Jaz sem luč sveta. Kdor hodi za menoj, ne bo hodil v temi, temveč bo imel luč življenja.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+8"
  },
  {
    "reference": "Filipljanom 4,13",
    "text": "Vse zmorem v njem, ki mi daje moč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Nahum 1,7",
    "text": "Gospod je dober, utrdba ob dnevu stiske, in pozna tiste, ki se zatekajo k njemu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Nah+1"
  },
  {
    "reference": "Psalm 33,20–22",
    "text": "Naša duša pričakuje Gospoda, on je naša pomoč in naš ščit. Zares, v njem se veseli naše srce, kajti v njegovo sveto ime zaupamo. Tvoja dobrota, Gospod, naj bo nad nami, kakor smo upali vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+33"
  },
  {
    "reference": "Izaija 41,10",
    "text": "Ne boj se, saj sem s teboj, nikar se plaho ne oziraj, saj sem jaz tvoj Bog. Okrepil te bom in ti pomagal, podpiral te bom z desnico svoje pravičnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+41"
  },
  {
    "reference": "1 Peter 1,3",
    "text": "Slavljen Bog in Oče našega Gospoda Jezusa Kristusa! Po svojem velikem usmiljenju nas je prerodil za živo upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+1"
  },
  {
    "reference": "Psalm 34,18–19",
    "text": "Vpili so, in Gospod je uslišal, iz vseh njihovih stisk jih je rešil. Blizu je Gospod tistim, ki so skrušenega srca, in tiste, ki so potrtega duha, rešuje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "Psalm 91,2",
    "text": "pravi Gospodu: »Moje zatočišče in moja trdnjava, moj Bog, ki vanj zaupam.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+91"
  },
  {
    "reference": "Pregovori 17,17",
    "text": "Prijatelj ljubi v vsakršnih časih in brat se izkaže v stiski.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+17"
  },
  {
    "reference": "Psalm 73,26",
    "text": "Moje meso in moje srce gresta h koncu, skala mojega srca in moj delež je Bog na veke.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+73"
  },
  {
    "reference": "Psalm 103,8",
    "text": "Usmiljen in milostljiv je Gospod, počasen v jezi in bogat v dobroti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Jeremija 29,11",
    "text": "Vem za načrte, ki jih imam z vami, govori Gospod: načrte blaginje in ne nesreče, da vam dam prihodnost in upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "Galačanom 6,2",
    "text": "Nosíte bremena drug drugemu in tako boste izpolnili Kristusovo postavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+6"
  },
  {
    "reference": "Efežanom 6,10",
    "text": "Sicer pa zajemajte moč v Gospodu in sili njegove moči.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+6"
  },
  {
    "reference": "Psalm 56,4",
    "text": "Na dan, ko se bojim, zaupam vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+56"
  },
  {
    "reference": "Psalm 51,12",
    "text": "Čisto srce, o Bog, mi ustvari, stanovitnega duha obnovi v moji notranjosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+51"
  },
  {
    "reference": "Rimljanom 5,3–5",
    "text": "Pa ne samo to, ampak se celo ponašamo s stiskami, saj vemo, da stiska rodi potrpljenje, potrpljenje preizkušenost, preizkušenost upanje. Upanje pa ne osramoti, ker je Božja ljubezen izlita v naša srca po Svetem Duhu, ki nam je bil dan.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Psalm 62,6–7",
    "text": "Le pri Bogu se umiri, moja duša, kajti od njega je moje upanje. Le on je moja skala in moja rešitev, moja trdnjava: ne bom omahoval.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+62"
  },
  {
    "reference": "Psalm 118,24",
    "text": "To je dan, ki ga je naredil Gospod, radujmo se in se ga veselimo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Efežanom 2,8–9",
    "text": "Z milostjo ste namreč odrešeni po veri, in to ni iz vas, ampak je Božji dar. Niste odrešeni iz del, da se ne bi kdo hvalil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+2"
  },
  {
    "reference": "Janez 15,11",
    "text": "To sem vam povedal, da bo moje veselje v vas in da bo vaše veselje dopolnjeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Galačanom 6,9",
    "text": "Ne naveličajmo se, ko delamo dobro; kajti če se ne utrudimo, bomo ob svojem času želi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Gal+6"
  },
  {
    "reference": "Jakob 1,5",
    "text": "Če pa komu od vas manjka modrosti, naj jo prosi od Boga, ki jo vsem rad daje in ne sramoti – in dana mu bo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+1"
  },
  {
    "reference": "1 Kroniška 16,34",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Krn+16"
  },
  {
    "reference": "Mihej 6,8",
    "text": "Oznanil ti je, o človek, kaj je dobro, kaj Gospod hoče od tebe: nič drugega, kakor da ravnaš pravično, da ljubiš dobrohotnost in ponižno hodiš s svojim Bogom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mih+6"
  },
  {
    "reference": "Jeremija 31,3",
    "text": "Iz daljave se mi je prikazal Gospod: Z večno ljubeznijo te ljubim, zato ti tako dolgo izkazujem dobroto.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+31"
  },
  {
    "reference": "Psalm 126,3",
    "text": "Velike reči je Gospod storil za nas, bili smo veseli.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+126"
  },
  {
    "reference": "Janez 16,33",
    "text": "To sem vam povedal, da bi imeli mir v meni. Na svetu imate stisko, toda bodite pogumni: jaz sem svet premagal.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+16"
  },
  {
    "reference": "Psalm 112,7",
    "text": "Ne boji se zlobne govorice, njegovo srce je trdno, gotovo v Gospodu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+112"
  },
  {
    "reference": "2 Mojzes 14,14",
    "text": "Gospod se bo bojeval za vas, vi pa ostanite mirni!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Mz+14"
  },
  {
    "reference": "Psalm 37,5",
    "text": "Izroči svojo pot Gospodu, zaupaj vanj, in on bo storil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "Psalm 103,1–2",
    "text": "Davidov psalm. Slávi, moja duša, Gospoda, vsa moja notranjost njegovo sveto ime. Slávi, moja duša, Gospoda, ne pozabi nobenega dejanja njega,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Kološanom 3,16",
    "text": "Kristusova beseda naj bogato prebiva med vami. V vsej modrosti se med seboj poučujte in spodbujajte. S psalmi, hvalnicami in duhovnimi pesmimi v svojih srcih hvaležno prepevajte Bogu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Janez 14,1",
    "text": "»Vaše srce naj se ne vznemirja. Verujete v Boga, tudi vame verujte!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "1 Tesaloničanom 5,11",
    "text": "Zato tolažíte drug drugega in drug drugega izgrajujte, kakor to že delate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "Psalm 42,6",
    "text": "Zakaj si potrta, moja duša, in se vznemirjaš v meni? Upaj v Boga, zakaj še ga bom hvalil, svojega rešitelja",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+42"
  },
  {
    "reference": "Jozue 1,9",
    "text": "Ali ti nisem ukazal, krepak in odločen bodi? Ne boj se in se ne plaši; kjer koli boš hodil, bo s teboj Gospod, tvoj Bog.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "Pregovori 4,23",
    "text": "Z vso skrbjo varuj svoje srce, kajti iz njega izvira življenje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+4"
  },
  {
    "reference": "Psalm 116,1–2",
    "text": "Ljubim Gospoda, ker posluša moj glas, mojo prošnjo za milost. Zakaj svoje uho je nagnil k meni, v svojih dneh ga bom klical.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+116"
  },
  {
    "reference": "Pregovori 3,5–6",
    "text": "Zaupaj v Gospoda z vsem svojim srcem, na svojo razumnost pa se ne zanašaj. Na vseh svojih poteh ga spoznavaj in on bo uravnaval tvoje steze.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+3"
  },
  {
    "reference": "Psalm 136,1",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+136"
  },
  {
    "reference": "Janez 15,12–13",
    "text": "To je moja zapoved, da se ljubite med seboj, kakor sem vas jaz ljubil. Nihče nima večje ljubezni, kakor je ta, da dá življenje za svoje prijatelje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Psalm 23,1",
    "text": "Gospod je moj pastir, nič mi ne manjka.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+23"
  },
  {
    "reference": "Filipljanom 4,4",
    "text": "Veselite se v Gospodu zmeraj; ponavljam vam, veselite se.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Žalostinke 3,25–26",
    "text": "Gospod je dober tistim, ki upajo vanj, duši, ki ga išče. Dobro je mirno čakati na rešitev Gospodovo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Psalm 46,2–3",
    "text": "Bog nam je zatočišče in moč, pomoč v stiskah, vedno navzoča. Zato se ne bojimo, ko se zemlja spreminja in se gore majejo v osrčju morja;",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+46"
  },
  {
    "reference": "Marko 5,36",
    "text": "Jezus je slišal od strani, kaj so rekli, in je dejal predstojniku shodnice: »Ne boj se, samó veruj!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mr+5"
  },
  {
    "reference": "1 Korinčanom 16,14",
    "text": "Pri vas naj se vse dela iz ljubezni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+16"
  },
  {
    "reference": "Psalm 25,4–5",
    "text": "Svoje poti, Gospod, mi daj spoznati, svojih steza me úči. Vodi me v svoji resnici in me úči, saj si ti Bog moje rešitve; vate upam ves dan.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+25"
  },
  {
    "reference": "Psalm 29,11",
    "text": "Gospod daje moč svojemu ljudstvu, Gospod bo blagoslovil svoje ljudstvo z mirom.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+29"
  },
  {
    "reference": "1 Janez 4,7",
    "text": "Ljubi, ljubimo se med seboj, ker je ljubezen od Boga in ker je vsak, ki ljubi, iz Boga rojen in Boga pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Jn+4"
  },
  {
    "reference": "Janez 8,12",
    "text": "Spet jim je Jezus spregovoril: »Jaz sem luč sveta. Kdor hodi za menoj, ne bo hodil v temi, temveč bo imel luč življenja.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+8"
  },
  {
    "reference": "Psalm 32,8",
    "text": "Modril te bom in te učil na poti, po kateri moraš hoditi, svetoval bom, moje oko je nad tabo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+32"
  },
  {
    "reference": "Psalm 84,13",
    "text": "Gospod nad vojskami, blagor človeku, ki zaupa vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+84"
  },
  {
    "reference": "Psalm 33,20–22",
    "text": "Naša duša pričakuje Gospoda, on je naša pomoč in naš ščit. Zares, v njem se veseli naše srce, kajti v njegovo sveto ime zaupamo. Tvoja dobrota, Gospod, naj bo nad nami, kakor smo upali vate.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+33"
  },
  {
    "reference": "Matej 10,29–31",
    "text": "Ali ne prodajajo dveh vrabcev za en novčič? In vendar nobeden od njiju ne pade na zemljo brez vašega Očeta. Vam pa so celo vsi lasje na glavi prešteti. Ne bojte se torej! Vi ste vredni več kakor veliko vrabcev.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+10"
  },
  {
    "reference": "Janez 13,34–35",
    "text": "Novo zapoved vam dam, da se ljubite med seboj! Kakor sem vas jaz ljubil, tako se tudi vi ljubite med seboj! Po tem bodo vsi spoznali, da ste moji učenci, če boste med seboj imeli ljubezen.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+13"
  },
  {
    "reference": "Psalm 31,25",
    "text": "Bodite močni, vaše srce naj se opogumi, vsi vi, ki pričakujete Gospoda!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+31"
  },
  {
    "reference": "1 Korinčanom 13,13",
    "text": "Za zdaj pa ostanejo vera, upanje, ljubezen, to troje. In največja od teh je ljubezen.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "Hebrejcem 13,6",
    "text": "Zato smo lahko pogumni in govorimo: Gospod je moj pomočnik, ne bom se bal; kaj mi more storiti človek?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+13"
  },
  {
    "reference": "Izaija 41,10",
    "text": "Ne boj se, saj sem s teboj, nikar se plaho ne oziraj, saj sem jaz tvoj Bog. Okrepil te bom in ti pomagal, podpiral te bom z desnico svoje pravičnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+41"
  },
  {
    "reference": "Psalm 107,1",
    "text": "Zahvaljujte se Gospodu, ker je dober, ker na veke traja njegova dobrota.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+107"
  },
  {
    "reference": "2 Tesaloničanom 3,16",
    "text": "Sam Gospod miru pa naj vam dá mir, in sicer zmeraj in v vseh okoliščinah. Gospod naj bo z vami vsemi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Tes+3"
  },
  {
    "reference": "2 Korinčanom 9,15",
    "text": "Hvala Bogu za njegov neopisljivi dar!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+9"
  },
  {
    "reference": "Matej 22,37–39",
    "text": "Rekel mu je: » Ljubi Gospoda, svojega Boga, z vsem srcem, z vso dušo in z vsem mišljenjem. To je največja in prva zapoved. Druga pa je njej podobna: Ljubi svojega bližnjega kakor samega sebe.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+22"
  },
  {
    "reference": "Luka 18,1",
    "text": "Povedal jim je še priliko, kako morajo vedno moliti in se ne naveličati.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+18"
  },
  {
    "reference": "Izaija 40,31",
    "text": "tisti pa, ki zaupajo v Gospoda, obnavljajo svojo moč, vzdigujejo trup kakor orli, tekajo, pa ne opešajo, hodijo, pa ne omagajo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "Psalm 34,2",
    "text": "Slavil bom Gospoda ob vsakem času, njegova hvalnica bo vedno v mojih ustih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "Filipljanom 3,13–14",
    "text": "Ne mislim, bratje, da sem to dosegel. Eno pa: pozabljam, kar je za menoj, in se iztegujem proti temu, kar je pred menoj, ter tečem proti cilju po nagrado, h kateri nas od zgoraj kliče Bog v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+3"
  },
  {
    "reference": "Efežanom 4,32",
    "text": "Bodite drug do drugega dobrosrčni in usmiljeni ter drug drugemu odpuščajte, kakor je tudi vam Bog milostno odpustil v Kristusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ef+4"
  },
  {
    "reference": "Kološanom 3,15",
    "text": "In Kristusov mir naj kraljuje v vaših srcih, saj ste bili tudi poklicani vanj v enem telesu, in bodite hvaležni.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Jeremija 1,8",
    "text": "Nikar se jih ne boj, saj sem jaz s teboj, da te rešujem, govori Gospod.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+1"
  },
  {
    "reference": "Janez 14,27",
    "text": "Mir vam zapuščam, svoj mir vam dajem. Ne dajem vam ga, kakor ga daje svet. Vaše srce naj se ne vznemirja in ne plaši.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+14"
  },
  {
    "reference": "2 Korinčanom 4,16–18",
    "text": "Zato ne omagujemo. Nasprotno, čeprav naš zunanji človek razpada, se naš notranji iz dneva v dan obnavlja. Naša trenutna lahka stiska nam namreč pripravlja čez vso mero težko, večno bogastvo slave, ker se ne oziramo na to, kar se vidi, ampak na to, kar se ne vidi. Kar se namreč vidi, je začasno, kar pa se ne vidi, je večno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+4"
  },
  {
    "reference": "Luka 1,37",
    "text": "Bogu namreč ni nič nemogoče.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Lk+1"
  },
  {
    "reference": "1 Peter 1,3",
    "text": "Slavljen Bog in Oče našega Gospoda Jezusa Kristusa! Po svojem velikem usmiljenju nas je prerodil za živo upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+1"
  },
  {
    "reference": "Psalm 16,11",
    "text": "Daješ mi spoznati pot življenja; polnost veselja je pred tvojim obličjem, večne radosti na tvoji desnici.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+16"
  },
  {
    "reference": "Filipljanom 1,6",
    "text": "Prepričan sem, da bo on, ki je začel v vas dobro delo, to delo dokončal do dneva Kristusa Jezusa.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+1"
  },
  {
    "reference": "Pregovori 23,18",
    "text": "Tako si boš zagotovil prihodnost, tvoje upanje se ne bo izjalovilo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+23"
  },
  {
    "reference": "Psalm 91,2",
    "text": "pravi Gospodu: »Moje zatočišče in moja trdnjava, moj Bog, ki vanj zaupam.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+91"
  },
  {
    "reference": "1 Peter 4,8",
    "text": "Predvsem se med seboj goreče ljubite, ker ljubezen pokrije množico grehov.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+4"
  },
  {
    "reference": "Nahum 1,7",
    "text": "Gospod je dober, utrdba ob dnevu stiske, in pozna tiste, ki se zatekajo k njemu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Nah+1"
  },
  {
    "reference": "Pridigar 4,9–10",
    "text": "Boljše je, da sta dva kakor eden, ker imata dobro plačilo za svoj trud: če namreč eden pade, ga njegov tovariš vzdigne, gorje pa enemu, če pade, ker ni drugega, da bi ga vzdignil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prd+4"
  },
  {
    "reference": "Psalm 139,13–14",
    "text": "Zares, ti si ustvaril moje ledvice, me stkal v materinem telesu. Zahvaljujem se ti, ker sem tako čudovito ustvarjen, čudovita so tvoja dela, moja duša to dobro pozna.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+139"
  },
  {
    "reference": "Rimljanom 8,37",
    "text": "Toda v vseh teh preizkušnjah zmagujemo po njem, ki nas je vzljubil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Izaija 26,3–4",
    "text": "Kdor ti je predan, mu ohranjaš mir, mir, ker zaupa vate. Zaupajte v Gospoda vekomaj, kajti samo Gospod Bog je večna skala.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+26"
  },
  {
    "reference": "Janez 15,9",
    "text": "Kakor je Oče mene ljubil, sem tudi jaz vas ljubil. Ostanite v moji ljubezni!",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+15"
  },
  {
    "reference": "Rimljanom 8,31",
    "text": "Kaj bomo torej rekli k vsemu temu? Če je Bog za nas, kdo je zoper nas?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+8"
  },
  {
    "reference": "Izaija 43,18–19",
    "text": "Ne spominjajte se prejšnjih reči, ne mislite na nekdanje reči. Glejte, nekaj novega storim, zdaj klije, mar ne opazite? Da, speljal bom pot skozi puščavo in reke skozi pustinjo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
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
    "reference": "Juda 1,2",
    "text": "Usmiljenje vam in mir in ljubezen v obilju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jud+1"
  },
  {
    "reference": "Pregovori 16,9",
    "text": "Človekovo srce načrtuje svojo pot, a Gospod vodi njegove korake.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+16"
  },
  {
    "reference": "Psalm 118,14",
    "text": "Gospod je moja moč in moja pesem, bil mi je v rešitev.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+118"
  },
  {
    "reference": "Rimljanom 5,8",
    "text": "Bog pa izkazuje svojo ljubezen do nas s tem, da je Kristus umrl za nas, ko smo bili še grešniki.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+5"
  },
  {
    "reference": "Psalm 27,14",
    "text": "Upaj v Gospoda, bodi močan, tvoje srce naj se opogumi, upaj v Gospoda.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "Izaija 41,10",
    "text": "Ne boj se, saj sem s teboj, nikar se plaho ne oziraj, saj sem jaz tvoj Bog. Okrepil te bom in ti pomagal, podpiral te bom z desnico svoje pravičnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+41"
  },
  {
    "reference": "Jeremija 29,13",
    "text": "Iskali me boste in me boste našli. Ko me boste iskali z vsem srcem,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jer+29"
  },
  {
    "reference": "Filipljanom 4,6–7",
    "text": "Nič ne skrbite, ampak ob vsaki priložnosti izražajte svoje želje Bogu z molitvijo in prošnjo, z zahvaljevanjem. In Božji mir, ki presega vsak um, bo varoval vaša srca in vaše misli v Kristusu Jezusu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Rimljanom 12,9–10",
    "text": "Ljubezen naj bo brez hinavščine. Odklanjajte zlo, oklepajte pa se dobrega. Drug drugega ljubíte z bratovsko ljubeznijo. Tekmujte v medsebojnem spoštovanju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+12"
  },
  {
    "reference": "1 Tesaloničanom 5,16–18",
    "text": "Zmeraj se veselite. Neprenehoma molíte. V vsem se zahvaljujte: kajti to je Božja volja v Kristusu Jezusu glede vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Tes+5"
  },
  {
    "reference": "Kološanom 3,16–17",
    "text": "Kristusova beseda naj bogato prebiva med vami. V vsej modrosti se med seboj poučujte in spodbujajte. S psalmi, hvalnicami in duhovnimi pesmimi v svojih srcih hvaležno prepevajte Bogu. In vse, kar koli delate v besedi ali v dejanju, vse delajte v imenu Gospoda Jezusa in se po njem zahvaljujte Bogu Očetu.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Žalostinke 3,22–23",
    "text": "Dobrota Gospodova je, da nismo popolnoma pokončani, da njegovo usmiljenje ni prenehalo; nova je vsako jutro, velika je tvoja zvestoba.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Žal+3"
  },
  {
    "reference": "Izaija 43,1–2",
    "text": "Zdaj pa tako govori Gospod, tvoj stvarnik, o Jakob, tvoj upodabljavec, o Izrael: Nikar se ne boj, saj sem te odkupil, poklical sem te po imenu: moj si! Ko pojdeš čez vodo, bom s teboj, ko čez reke, te ne poplavijo, ko pojdeš skoz ogenj, ne zgoriš in plamen te ne bo ožgal.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+43"
  },
  {
    "reference": "Filipljanom 4,13",
    "text": "Vse zmorem v njem, ki mi daje moč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Flp+4"
  },
  {
    "reference": "Sofonija 3,17",
    "text": "Gospod, tvoj Bog, je v tvoji sredi, tvoj močni rešitelj. Veselí se nad teboj v radosti, nemí v svoji ljubezni, vriska nad teboj v prepevanju.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Sof+3"
  },
  {
    "reference": "Pregovori 15,1",
    "text": "Mil odgovor pomirja togoto, žaljiva beseda pa zbuja jezo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+15"
  },
  {
    "reference": "Rimljanom 15,13",
    "text": "Bog upanja pa naj vas napolni z vsem veseljem in mirom v verovanju, da bi bili v môči Svetega Duha polni upanja.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "Psalm 28,7",
    "text": "Gospod je moja moč in moj ščit, vanj je zaupalo moje srce; prejel sem pomoč in srce mi vriska, s svojo pesmijo se mu zahvaljujem.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+28"
  },
  {
    "reference": "Psalm 4,9",
    "text": "V miru bom hkrati legel in spal, saj ti sam, Gospod, me pustiš varno prebivati.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+4"
  },
  {
    "reference": "Janez 1,12",
    "text": "Tistim pa, ki so jo sprejeli, je dala moč, da postanejo Božji otroci, vsem, ki verujejo v njeno ime",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jn+1"
  },
  {
    "reference": "Matej 7,12",
    "text": "»Tako torej vse, kar hočete, da bi ljudje storili vam, tudi vi storite njim! To je namreč postava in preroki.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+7"
  },
  {
    "reference": "Psalm 9,2",
    "text": "Gospod, slavil te bom z vsem svojim srcem, pripovedoval bom o vseh tvojih čudovitih delih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+9"
  },
  {
    "reference": "Izaija 12,2",
    "text": "Glej, Bog je moja rešitev, zaupam in se ne bojim, kajti moja moč in moja pesem je Gospod Bog, bil je moja rešitev.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+12"
  },
  {
    "reference": "Rimljanom 13,8",
    "text": "Ne bodite nikomur dolžniki, razen če gre za medsebojno ljubezen; kdor namreč ljubi drugega, je izpolnil postavo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+13"
  },
  {
    "reference": "Hebrejcem 10,35–36",
    "text": "Ne zavrzite torej svoje zaupnosti, ki jo čaka veliko plačilo. Kajti stanovitnost vam je potrebna, pa boste izpolnili Božjo voljo in tako dosegli, kar je obljubljeno.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "4 Mojzes 6,24–26",
    "text": "Gospod naj te blagoslovi in te varuje. Gospod naj da sijati svoje obličje nad tabo in naj ti bo milostljiv. Gospod naj dvigne svoje obličje nadte in ti podeli mir.‹",
    "chapter": "https://www.biblija.net/biblija.cgi?m=4+Mz+6"
  },
  {
    "reference": "Psalm 27,1",
    "text": "Davidov psalm. Gospod je moja luč in moja rešitev, koga bi se moral bati? Gospod je trdnjava mojega življenja, pred kom bi moral trepetati?",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+27"
  },
  {
    "reference": "5 Mojzes 31,6",
    "text": "Bodite krepki in pogumni, ne bojte se in ne trepetajte pred njimi! Kajti Gospod, tvoj Bog, hodi s teboj; ne bo te pustil samega in ne bo te zapustil.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "Psalm 131,2",
    "text": "Nasprotno, potešil in pomiril sem svojo dušo kakor otrok v naročju svoje matere, kakor otrok je v meni moja duša.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+131"
  },
  {
    "reference": "Psalm 92,2–3",
    "text": "Dobro je zahvaljevati se Gospodu, prepevati tvojemu imenu, Najvišji, oznanjati zjutraj tvojo dobroto, tvojo zvestobo ponoči",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+92"
  },
  {
    "reference": "1 Peter 5,7",
    "text": "Vso svojo skrb vrzite nanj, saj on skrbi za vas.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+5"
  },
  {
    "reference": "2 Korinčanom 5,7",
    "text": "saj v veri hodimo in ne v gledanju.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Kor+5"
  },
  {
    "reference": "Habakuk 3,18",
    "text": "Vendar se bom veselil v Gospodu, se radoval v Bogu moje rešitve.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Hab+3"
  },
  {
    "reference": "2 Timoteju 1,7",
    "text": "Bog nam ni dal duha boječnosti, temveč duha moči, ljubezni in razumnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=2+Tim+1"
  },
  {
    "reference": "1 Korinčanom 13,4–7",
    "text": "Ljubezen je potrpežljiva, dobrotljiva je ljubezen, ni nevoščljiva, ljubezen se ne ponaša, se ne napihuje, ni brezobzirna, ne išče svojega, ne da se razdražiti, ne misli hudega. Ne veseli se krivice, veseli pa se resnice. Vse prenaša, vse veruje, vse upa, vse prestane.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Kor+13"
  },
  {
    "reference": "Ezekiel 36,26",
    "text": "Dam vam novo srce in novega duha denem v vašo notranjost. Odstranim kamnito srce iz vašega telesa in vam dam meseno srce.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ezk+36"
  },
  {
    "reference": "Izaija 40,29",
    "text": "Omagujočemu daje moč, onemoglemu povečuje vzdržljivost.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+40"
  },
  {
    "reference": "Matej 11,28–30",
    "text": "Pridite k meni vsi, ki ste utrujeni in obteženi, in jaz vam bom dal počitek. Vzemite nase moj jarem in učite se od mene, ker sem krotak in v srcu ponižen, in našli boste počitek svojim dušam; kajti moj jarem je prijeten in moje breme je lahko.«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+11"
  },
  {
    "reference": "Psalm 103,11–12",
    "text": "Zakaj kakor je nebo visoko nad zemljo, je njegova dobrota silna nad tistimi, ki se ga bojijo. Kakor je vzhod oddaljen od zahoda, oddaljuje od nas naša hudodelstva.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+103"
  },
  {
    "reference": "Kološanom 3,12–14",
    "text": "Kot Božji izvoljenci, sveti in ljubljeni, si torej oblecite čim globlje usmiljenje, dobrotljivost, ponižnost, krotkost, potrpežljivost. Prenašajte drug drugega in odpuščajte drug drugemu, če se ima kateri kaj pritožiti proti kateremu. Kakor je Gospod odpustil vam, tako tudi vi odpuščajte. Nad vsem tem pa naj bo ljubezen, ki je vez popolnosti.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Kol+3"
  },
  {
    "reference": "Psalm 43,3",
    "text": "Pošlji svojo luč in svojo zvestobo, ti naj me vodita; naj me pripeljeta k tvoji sveti gori, k tvojemu bivališču.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+43"
  },
  {
    "reference": "Psalm 34,18–19",
    "text": "Vpili so, in Gospod je uslišal, iz vseh njihovih stisk jih je rešil. Blizu je Gospod tistim, ki so skrušenega srca, in tiste, ki so potrtega duha, rešuje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+34"
  },
  {
    "reference": "Hebrejcem 6,19",
    "text": "To upanje je za nas kakor varno in zanesljivo sidro duše, ki sega v notranjost, za zagrinjalo,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+6"
  },
  {
    "reference": "1 Peter 2,9",
    "text": "Vi pa ste izvoljeni rod, kraljevsko duhovništvo, svet narod, ljudstvo za Božjo last, da bi oznanjali odlike tistega, ki vas je poklical iz teme v svojo čudovito luč.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=1+Pt+2"
  },
  {
    "reference": "Rimljanom 12,12",
    "text": "Veselite se v upanju, potrpite v stiski, vztrajajte v molitvi,",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+12"
  },
  {
    "reference": "Pregovori 21,21",
    "text": "Kdor se poganja za pravičnostjo in dobroto, najde življenje, pravičnost in čast.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Prg+21"
  },
  {
    "reference": "Izaija 35,3–4",
    "text": "Okrepíte utrujene roke, utrdíte klecava kolena. Recite njim, ki so plahega srca: »Bódite močni, nikar se ne bojte! Glejte, vaš Bog! Maščevanje prihaja, Božje povračilo, on prihaja, da vas reši!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+35"
  },
  {
    "reference": "Psalm 94,19",
    "text": "Ko se v meni množijo vznemirljive misli, mi tvoje tolažbe razveseljujejo dušo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+94"
  },
  {
    "reference": "5 Mojzes 31,8",
    "text": "Gospod hodi pred teboj; on bo s teboj; ne bo te pustil samega in ne bo te zapustil. Nikar se ne boj in se ne pláši!«",
    "chapter": "https://www.biblija.net/biblija.cgi?m=5+Mz+31"
  },
  {
    "reference": "Psalm 121,1–2",
    "text": "Stopniška pesem. Svoje oči vzdigujem h goram: od kod bo prišla moja pomoč? Moja pomoč je od Gospoda, ki je naredil nebo in zemljo.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+121"
  },
  {
    "reference": "Psalm 145,18",
    "text": "Gospod je blizu vsem, ki ga kličejo, vsem, ki ga kličejo v zvestobi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+145"
  },
  {
    "reference": "Psalm 18,2–3",
    "text": "Rekel je: Ljubim te, Gospod, moja moč, Gospod, moja skala, moja trdnjava, moj osvoboditelj; moj Bog, moja pečina, kamor se zatekam, moj ščit, rog moje rešitve, moje zavetje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+18"
  },
  {
    "reference": "Rimljanom 15,4",
    "text": "Kar koli je bilo namreč napisano pred nami, je bilo napisano v naše poučenje, da bi oprti na potrpežljivost in na tolažbo, ki jo daje Pismo, imeli upanje.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Rim+15"
  },
  {
    "reference": "Hebrejcem 10,23",
    "text": "Oklepajmo se neomajne izpovedi upanja, ker je on, ki je dal obljubo, zvest.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Heb+10"
  },
  {
    "reference": "Jakob 3,17",
    "text": "Modrost pa, ki je od zgoraj, je najprej čista, nato miroljubna, prizanesljiva, dovzetna, polna usmiljenja in dobrih sadov, brez razločevanja in hinavščine.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Jak+3"
  },
  {
    "reference": "Izaija 32,17–18",
    "text": "Delo pravičnosti bo mir, sad pravičnosti bo počitek in varnost na veke. Moje ljudstvo bo prebivalo v mirnem kraju, v varnih domovih in brezskrbnih počivališčih.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+32"
  },
  {
    "reference": "Psalm 37,23–24",
    "text": "Zaradi Gospoda so koraki moža trdni, nad njegovo potjo ima veselje. Če pade, ne obstane na tleh, ker Gospod podpira njegovo roko.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Ps+37"
  },
  {
    "reference": "Izaija 54,10",
    "text": "Kajti gore se bodo premaknile in griči omajali, moja milost pa se ne bo odmaknila od tebe in moja zaveza miru se ne bo omajala, pravi tvoj usmiljeni, Gospod.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Iz+54"
  },
  {
    "reference": "Jozue 1,5",
    "text": "Nihče se ti ne bo mogel ustavljati vse dni tvojega življenja; kakor sem bil z Mojzesom, bom tudi s teboj. Ne bom te pozabil, ne bom te zapustil.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Joz+1"
  },
  {
    "reference": "Matej 5,9",
    "text": "Blagor tistim, ki delajo za mir, kajti imenovani bodo Božji sinovi.",
    "chapter": "https://www.biblija.net/biblija.cgi?m=Mt+5"
  }
];
