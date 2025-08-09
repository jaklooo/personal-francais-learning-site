document.addEventListener('DOMContentLoaded', () => {

    // --- DATABÁZA SLOVÍČOK ---
    // Poznámka: Toto je skrátený zoznam pre ukážku. Kompletný zoznam je príliš dlhý na vloženie priamo sem,
    // ale bude v plnej verzii kódu. Nižšie uvádzam štruktúru a niekoľko príkladov.
    const wordData = [
        { fr: "la lumière", sk: ["svetlo", "osvetlenie"], sentence_fr: "Peux-tu allumer la lumière, s'il te plaît ?", sentence_sk: "Môžeš, prosím, zapnúť svetlo?" },
        { fr: "baisser", sk: ["znížiť", "stíšiť", "skloniť"], sentence_fr: "Il faut baisser le son de la musique.", sentence_sk: "Treba stíšiť hudbu." },
        { fr: "diminuer", sk: ["zmenšiť", "znížiť"], sentence_fr: "Le nombre de participants a diminué.", sentence_sk: "Počet účastníkov sa znížil." },
        { fr: "trier les déchets", sk: ["triediť odpad"], sentence_fr: "Il est important de trier les déchets pour le recyclage.", sentence_sk: "Pre recykláciu je dôležité triediť odpad." },
        { fr: "l'emballage", sk: ["obal"], sentence_fr: "Jette l'emballage dans la poubelle jaune.", sentence_sk: "Hoď obal do žltého koša." },
        { fr: "recyclable", sk: ["recyklovateľný"], sentence_fr: "Ce carton est recyclable.", sentence_sk: "Tento kartón je recyklovateľný." },
        { fr: "dégradable", sk: ["rozložiteľný"], sentence_fr: "J'utilise des sacs dégradables.", sentence_sk: "Používam rozložiteľné tašky." },
        { fr: "les produits locaux", sk: ["miestne produkty"], sentence_fr: "J'achète des produits locaux au marché.", sentence_sk: "Na trhu kupujem miestne produkty." },
        { fr: "se déplacer", sk: ["presúvať sa", "pohybovať sa"], sentence_fr: "Je préfère me déplacer à vélo en ville.", sentence_sk: "V meste sa najradšej presúvam na bicykli." },
        { fr: "un déplacement", sk: ["presun", "cestovanie"], sentence_fr: "C'est un déplacement professionnel.", sentence_sk: "Toto je pracovná cesta." },
        { fr: "propre", sk: ["čistý"], sentence_fr: "Ma chambre est toujours propre.", sentence_sk: "Moja izba je vždy čistá." },
        { fr: "sale", sk: ["špinavý"], sentence_fr: "Tes chaussures sont sales.", sentence_sk: "Tvoje topánky sú špinavé." },
        { fr: "réfléchir", sk: ["premýšľať", "rozmýšľať"], sentence_fr: "Je dois réfléchir à ta proposition.", sentence_sk: "Musím premýšľať o tvojom návrhu." },
        { fr: "surtout", sk: ["hlavne", "predovšetkým"], sentence_fr: "J'aime les fruits, surtout les fraises.", sentence_sk: "Mám rád ovocie, hlavne jahody." },
        { fr: "sauvage", sk: ["divoký", "divý"], sentence_fr: "On a vu un animal sauvage dans la forêt.", sentence_sk: "V lese sme videli divoké zviera." },
        { fr: "une promesse", sk: ["sľub"], sentence_fr: "Il a fait une promesse à son ami.", sentence_sk: "Dal sľub svojmu kamarátovi." },
        // ... a takto by pokračoval celý zoznam viac ako 200 slovíčok.
        // V plnom kóde budú pridané všetky slová, ktoré ste uviedli.
        { fr: "le fossé", sk: ["priekopa", "jama"], sentence_fr: "La voiture est tombée dans le fossé.", sentence_sk: "Auto spadlo do priekopy." },
        { fr: "mélanger", sk: ["miešať", "zmiešať"], sentence_fr: "Il faut bien mélanger la salade.", sentence_sk: "Treba dobre premiešať šalát." },
        { fr: "menacer", sk: ["vyhrážať sa", "ohrozovať"], sentence_fr: "La pollution menace notre planète.", sentence_sk: "Znečistenie ohrozuje našu planétu." },
        { fr: "une menace", sk: ["hrozba"], sentence_fr: "C'est une menace sérieuse pour la sécurité.", sentence_sk: "Je to vážna bezpečnostná hrozba." },
        { fr: "gâcher", sk: ["mrhať", "p kaziť"], sentence_fr: "Ne va pas gâcher cette opportunité.", sentence_sk: "Nepremárni túto príležitosť." },
        { fr: "tout à coup", sk: ["zrazu", "náhle"], sentence_fr: "Tout à coup, la pluie a commencé à tomber.", sentence_sk: "Zrazu začalo pršať." },
        { fr: "des prix modérés", sk: ["mierne ceny"], sentence_fr: "Ce restaurant propose des plats à des prix modérés.", sentence_sk: "Táto reštaurácia ponúka jedlá za mierne ceny." },
        { fr: "intact", sk: ["nedotknutý", "neporušený"], sentence_fr: "Le village est resté intact après la tempête.", sentence_sk: "Dedina zostala po búrke nedotknutá." },
        { fr: "soit", sk: ["buď", "teda"], sentence_fr: "Tu peux choisir soit le bleu, soit le rouge.", sentence_sk: "Môžeš si vybrať buď modrú, alebo červenú." },
        { fr: "le péage", sk: ["mýto"], sentence_fr: "On doit payer le péage sur cette autoroute.", sentence_sk: "Na tejto diaľnici musíme platiť mýto." },
        { fr: "auquel", sk: ["ktorému", "na ktorý"], sentence_fr: "C'est le projet auquel je participe.", sentence_sk: "Toto je projekt, na ktorom sa podieľam." },
        { fr: "l'essence", sk: ["benzín"], sentence_fr: "Je dois mettre de l'essence dans la voiture.", sentence_sk: "Musím natankovať benzín do auta." },
        { fr: "l'usure", sk: ["opotrebenie"], sentence_fr: "L'usure des pneus est normale.", sentence_sk: "Opotrebenie pneumatík je normálne." },
        { fr: "un véhicule", sk: ["vozidlo"], sentence_fr: "Un véhicule de police est arrivé sur les lieux.", sentence_sk: "Na miesto dorazilo policajné vozidlo." },
        { fr: "une liaison", sk: ["spojenie", "vzťah"], sentence_fr: "Il y a une bonne liaison de train entre les deux villes.", sentence_sk: "Medzi oboma mestami je dobré vlakové spojenie." },
        { fr: "un lien", sk: ["odkaz", "puto"], sentence_fr: "Clique sur ce lien pour voir la vidéo.", sentence_sk: "Klikni na tento odkaz pre zobrazenie videa." },
        { fr: "relier", sk: ["spojiť", "prepájať"], sentence_fr: "Ce pont va relier les deux rives.", sentence_sk: "Tento most spojí oba brehy." },
        { fr: "quelque part", sk: ["niekde"], sentence_fr: "Mes clés doivent être quelque part ici.", sentence_sk: "Moje kľúče musia byť niekde tu." },
        { fr: "nulle part", sk: ["nikde"], sentence_fr: "Je ne trouve mon téléphone nulle part.", sentence_sk: "Nikde neviem nájsť svoj telefón." },
        { fr: "lourd", sk: ["ťažký"], sentence_fr: "Ce sac est très lourd.", sentence_sk: "Táto taška je veľmi ťažká." },
        { fr: "léger", sk: ["ľahký"], sentence_fr: "Je cherche un repas léger pour ce soir.", sentence_sk: "Hľadám ľahké jedlo na večer." },
        { fr: "doux", sk: ["jemný", "sladký", "mäkký"], sentence_fr: "Ce pull est très doux.", sentence_sk: "Tento sveter je veľmi jemný." },
        { fr: "fin", sk: ["tenký", "jemný"], sentence_fr: "Elle a les cheveux très fins.", sentence_sk: "Má veľmi jemné vlasy." },
        { fr: "mince", sk: ["štíhly"], sentence_fr: "Il est grand et mince.", sentence_sk: "Je vysoký a štíhly." },
        { fr: "épais", sk: ["hrubý"], sentence_fr: "J'ai besoin d'un manteau épais pour l'hiver.", sentence_sk: "Na zimu potrebujem hrubý kabát." },
        { fr: "maigre", sk: ["chudý"], sentence_fr: "Le chat est un peu maigre.", sentence_sk: "Tá mačka je trochu chudá." },
        { fr: "gros", sk: ["veľký", "tučný"], sentence_fr: "C'est un gros problème.", sentence_sk: "To je veľký problém." },
        { fr: "grossier", sk: ["hrubý", "neslušný"], sentence_fr: "Son comportement était vraiment grossier.", sentence_sk: "Jeho správanie bolo naozaj hrubé." },
        { fr: "l'hébergement", sk: ["ubytovanie"], sentence_fr: "Avez-vous trouvé un hébergement pour les vacances ?", sentence_sk: "Našli ste si ubytovanie na prázdniny?" },
        { fr: "respirer", sk: ["dýchať"], sentence_fr: "Il est important de bien respirer.", sentence_sk: "Je dôležité správne dýchať." },
        { fr: "bouffer", sk: ["jesť (hovorovo)"], sentence_fr: "On va bouffer quoi ce soir ?", sentence_sk: "Čo budeme dnes večer jesť?" },
        { fr: "saisir", sk: ["chytiť", "uchopiť"], sentence_fr: "Il faut saisir cette chance.", sentence_sk: "Treba sa chopiť tejto šance." },
        { fr: "se diriger", sk: ["smerovať", "ísť smerom"], sentence_fr: "Le groupe se dirige vers la sortie.", sentence_sk: "Skupina smeruje k východu." },
        { fr: "soigneusement", sk: ["starostlivo", "opatrne"], sentence_fr: "Emballez-le soigneusement.", sentence_sk: "Zabaľte to starostlivo." },
        { fr: "même en plein hiver", sk: ["dokonca aj uprostred zimy"], sentence_fr: "Il fait du jogging même en plein hiver.", sentence_sk: "Behá dokonca aj uprostred zimy." },
        { fr: "d'ailleurs", sk: ["mimochodom", "ostatne"], sentence_fr: "J'aime ce film. D'ailleurs, je l'ai vu trois fois.", sentence_sk: "Mám rád tento film. Mimochodom, videl som ho trikrát." },
        { fr: "la facette", sk: ["stránka", "aspekt"], sentence_fr: "C'est une autre facette de sa personnalité.", sentence_sk: "To je ďalšia stránka jeho osobnosti." },
        { fr: "transpirer", sk: ["potiť sa"], sentence_fr: "Je transpire beaucoup quand il fait chaud.", sentence_sk: "Veľmi sa potím, keď je teplo." },
        { fr: "un parka", sk: ["parka", "bunda"], sentence_fr: "Mets ton parka, il fait froid dehors.", sentence_sk: "Obleč si parku, vonku je zima." },
        { fr: "une fermeture Éclair", sk: ["zips"], sentence_fr: "La fermeture Éclair de ma veste est cassée.", sentence_sk: "Zips na mojej bunde je pokazený." },
        { fr: "geler", sk: ["mrznúť"], sentence_fr: "L'eau va geler cette nuit.", sentence_sk: "Voda dnes v noci zamrzne." },
        { fr: "ainsi de suite", sk: ["a tak ďalej"], sentence_fr: "On a mangé, dansé, chanté, et ainsi de suite.", sentence_sk: "Jedli sme, tancovali, spievali a tak ďalej." },
        { fr: "épargner", sk: ["šetriť", "ušetriť"], sentence_fr: "J'essaie d'épargner de l'argent chaque mois.", sentence_sk: "Snažím sa každý mesiac ušetriť peniaze." },
        { fr: "bien entendu", sk: ["samozrejme"], sentence_fr: "Bien entendu, vous pouvez venir.", sentence_sk: "Samozrejme, môžete prísť." },
        { fr: "devancer", sk: ["predbehnúť"], sentence_fr: "Le coureur a devancé tous ses concurrents.", sentence_sk: "Bežec predbehol všetkých svojich súperov." },
        { fr: "branché", sk: ["moderný", "trendy"], sentence_fr: "C'est un café très branché.", sentence_sk: "Je to veľmi moderná kaviareň." },
        { fr: "jouir du soleil", sk: ["užívať si slnko"], sentence_fr: "Allons à la plage pour jouir du soleil.", sentence_sk: "Poďme na pláž užiť si slnko." },
        { fr: "trempé", sk: ["premočený"], sentence_fr: "Je suis rentré trempé à cause de la pluie.", sentence_sk: "Vrátil som sa domov premočený kvôli dažďu." },
        { fr: "être mouillé", sk: ["byť mokrý"], sentence_fr: "Mes cheveux sont encore mouillés.", sentence_sk: "Moje vlasy sú ešte mokré." },
        { fr: "se livrer", sk: ["oddať sa", "venovať sa"], sentence_fr: "Il aime se livrer à la lecture le soir.", sentence_sk: "Večer sa rád oddáva čítaniu." },
        { fr: "jurer", sk: ["prisahať", "nadávať"], sentence_fr: "Je te jure que je dis la vérité.", sentence_sk: "Prisahám ti, že hovorím pravdu." },
        { fr: "durer", sk: ["trvať"], sentence_fr: "Le film va durer deux heures.", sentence_sk: "Film bude trvať dve hodiny." },
        { fr: "le sommeil", sk: ["spánok"], sentence_fr: "Le sommeil est essentiel pour la santé.", sentence_sk: "Spánok je nevyhnutný pre zdravie." },
        { fr: "défiler", sk: ["prechádzať (v zástupe)", "posúvať"], sentence_fr: "Fais défiler les photos sur l'écran.", sentence_sk: "Posúvaj fotky na obrazovke." },
        { fr: "la messagerie", sk: ["odkazová schránka", "správy"], sentence_fr: "J'ai un nouveau message sur ma messagerie.", sentence_sk: "Mám novú správu v schránke." },
        { fr: "percevoir", sk: ["vnímať"], sentence_fr: "Je commence à percevoir un changement.", sentence_sk: "Začínam vnímať zmenu." },
        { fr: "un siècle", sk: ["storočie"], sentence_fr: "Nous vivons au 21ème siècle.", sentence_sk: "Žijeme v 21. storočí." },
        { fr: "discrètement", sk: ["diskrétne", "nenápadne"], sentence_fr: "Il est parti discrètement.", sentence_sk: "Odišiel nenápadne." },
        { fr: "réussir ses vacances", sk: ["mať vydarenú dovolenku"], sentence_fr: "Avec ce beau temps, on va réussir nos vacances.", sentence_sk: "S týmto pekným počasím budeme mať vydarenú dovolenku." },
        { fr: "l'intention", sk: ["úmysel"], sentence_fr: "Je n'avais pas l'intention de te blesser.", sentence_sk: "Nemal som v úmysle ti ublížiť." },
        { fr: "un avis", sk: ["názor"], sentence_fr: "Quel est ton avis sur la question ?", sentence_sk: "Aký je tvoj názor na túto otázku?" },
        { fr: "le char à voile", sk: ["plážová plachetnica"], sentence_fr: "Faire du char à voile sur la plage est excitant.", sentence_sk: "Jazdiť na plážovej plachetnici je vzrušujúce." },
        { fr: "les sports de glisse", sk: ["šmykľavé/boardové športy"], sentence_fr: "Le surf et le snowboard sont des sports de glisse.", sentence_sk: "Surfovanie a snowboarding sú boardové športy." },
        { fr: "bouger", sk: ["hýbať sa"], sentence_fr: "Il faut bouger pour rester en forme.", sentence_sk: "Pre udržanie kondície sa treba hýbať." },
        { fr: "le son", sk: ["zvuk"], sentence_fr: "Le son de la mer est relaxant.", sentence_sk: "Zvuk mora je relaxačný." },
        { fr: "entourer", sk: ["obklopiť", "obkolesiť"], sentence_fr: "La maison est entourée d'un grand jardin.", sentence_sk: "Dom je obklopený veľkou záhradou." },
        { fr: "la ferme", sk: ["farma"], sentence_fr: "Les enfants ont visité la ferme.", sentence_sk: "Deti navštívili farmu." },
        { fr: "le port de pêche", sk: ["rybársky prístav"], sentence_fr: "On peut acheter du poisson frais au port de pêche.", sentence_sk: "V rybárskom prístave sa dá kúpiť čerstvá ryba." },
        { fr: "un drapeau", sk: ["vlajka"], sentence_fr: "Le drapeau français est bleu, blanc, rouge.", sentence_sk: "Francúzska vlajka je modrá, biela, červená." },
        { fr: "cocher", sk: ["zaškrtnúť", "označiť"], sentence_fr: "Veuillez cocher la case correspondante.", sentence_sk: "Prosím, zaškrtnite príslušné políčko." },
        { fr: "la planche à voile", sk: ["windsurfing"], sentence_fr: "J'apprends à faire de la planche à voile.", sentence_sk: "Učím sa windsurfing." },
        { fr: "la randonnée", sk: ["turistika", "túra"], sentence_fr: "Nous avons fait une belle randonnée en montagne.", sentence_sk: "Urobili sme si peknú túru v horách." },
        { fr: "visionner", sk: ["pozrieť si (film)"], sentence_fr: "On va visionner un film ce soir.", sentence_sk: "Dnes večer si pozrieme film." },
        { fr: "la colonne", sk: ["stĺpec", "stĺp"], sentence_fr: "Écris ton nom dans la première colonne.", sentence_sk: "Napíš svoje meno do prvého stĺpca." },
        { fr: "la glisse", sk: ["šmyk", "kĺzanie"], sentence_fr: "Attention à la glisse sur le sol mouillé.", sentence_sk: "Pozor na pošmyknutie na mokrej podlahe." },
        { fr: "ci-dessous", sk: ["nižšie", "dolu"], sentence_fr: "Vous trouverez plus d'informations ci-dessous.", sentence_sk: "Viac informácií nájdete nižšie." },
        { fr: "le port de plaisance", sk: ["prístav jácht"], sentence_fr: "Le port de plaisance est plein de beaux bateaux.", sentence_sk: "Prístav jácht je plný krásnych lodí." },
        { fr: "la forêt enchantée", sk: ["začarovaný les"], sentence_fr: "Le conte parle d'une forêt enchantée.", sentence_sk: "Rozprávka hovorí o začarovanom lese." },
        { fr: "un îlot", sk: ["ostrovček"], sentence_fr: "On a pique-niqué sur un petit îlot.", sentence_sk: "Urobili sme si piknik na malom ostrovčeku." },
        { fr: "sensibiliser", sk: ["zvyšovať povedomie", "scitlivieť"], sentence_fr: "Cette campagne vise à sensibiliser les jeunes au recyclage.", sentence_sk: "Cieľom tejto kampane je zvýšiť povedomie mladých o recyklácii." },
        { fr: "les remparts", sk: ["hradby"], sentence_fr: "On peut se promener sur les remparts de la vieille ville.", sentence_sk: "Po hradbách starého mesta sa dá prechádzať." },
        { fr: "les terres", sk: ["pôda", "územia"], sentence_fr: "Ce sont des terres agricoles.", sentence_sk: "Toto sú poľnohospodárske pôdy." },
        { fr: "flâner", sk: ["túlať sa", "flákať sa"], sentence_fr: "J'aime flâner dans les rues de Paris.", sentence_sk: "Rád sa túlam ulicami Paríža." },
        { fr: "l'embarquement", sk: ["nalodenie", "nástup"], sentence_fr: "L'embarquement pour le vol de Nice va commencer.", sentence_sk: "Nástup na let do Nice sa čoskoro začne." },
        { fr: "en selle", sk: ["v sedle"], sentence_fr: "Allez, en selle ! La balade à vélo nous attend.", sentence_sk: "Poďme, do sediel! Čaká nás cyklistický výlet." },
        { fr: "le cadre", sk: ["rám", "prostredie"], sentence_fr: "Le cadre de ce restaurant est magnifique.", sentence_sk: "Prostredie tejto reštaurácie je nádherné." },
        { fr: "un tee-shirt", sk: ["tričko"], sentence_fr: "Il porte un tee-shirt blanc.", sentence_sk: "Má na sebe biele tričko." },
        { fr: "éteindre", sk: ["vypnúť", "zhasnúť"], sentence_fr: "N'oublie pas d'éteindre la lumière.", sentence_sk: "Nezabudni zhasnúť svetlo." },
        { fr: "paraître", sk: ["javiť sa", "zdá sa"], sentence_fr: "Il paraît fatigué aujourd'hui.", sentence_sk: "Dnes sa zdá unavený." },
        { fr: "distraire", sk: ["rozptýliť", "zabaviť"], sentence_fr: "Cette musique me distrait de mon travail.", sentence_sk: "Táto hudba ma rozptyľuje od práce." },
        { fr: "détruire", sk: ["zničiť"], sentence_fr: "Le feu a détruit la maison.", sentence_sk: "Oheň zničil dom." },
        { fr: "souffrir", sk: ["trpieť"], sentence_fr: "Il a beaucoup souffert après son accident.", sentence_sk: "Po nehode veľmi trpel." },
        { fr: "se plaindre", sk: ["sťažovať sa"], sentence_fr: "Il se plaint tout le temps de son travail.", sentence_sk: "Stále sa sťažuje na svoju prácu." },
        { fr: "peindre", sk: ["maľovať"], sentence_fr: "J'aime peindre des paysages.", sentence_sk: "Rád maľujem krajinky." },
        { fr: "se faire plein de copains", sk: ["nájsť si veľa kamarátov"], sentence_fr: "En colonie de vacances, il est facile de se faire plein de copains.", sentence_sk: "V letnom tábore je ľahké nájsť si veľa kamarátov." },
        { fr: "se balader", sk: ["prechádzať sa"], sentence_fr: "On va se balader dans le parc.", sentence_sk: "Ideme sa prechádzať do parku." },
        { fr: "excepté", sk: ["okrem", "s výnimkou"], sentence_fr: "Tout le monde est venu, excepté Paul.", sentence_sk: "Všetci prišli, okrem Paula." },
        { fr: "se mettre au soleil", sk: ["ísť na slnko", "opaľovať sa"], sentence_fr: "J'adore me mettre au soleil sur la plage.", sentence_sk: "Zbožňujem byť na slnku na pláži." },
        { fr: "décrire", sk: ["opísať"], sentence_fr: "Pouvez-vous me décrire l'agresseur ?", sentence_sk: "Môžete mi opísať útočníka?" },
        { fr: "partager", sk: ["zdieľať", "deliť sa"], sentence_fr: "Il faut apprendre à partager avec les autres.", sentence_sk: "Treba sa naučiť deliť s ostatnými." },
        { fr: "un coup", sk: ["úder", "rana", "pohárik"], sentence_fr: "Il a reçu un coup à la tête.", sentence_sk: "Dostal ranu do hlavy." },
        { fr: "une femme d'affaires", sk: ["podnikateľka"], sentence_fr: "C'est une femme d'affaires très respectée.", sentence_sk: "Je to veľmi rešpektovaná podnikateľka." },
        { fr: "vers", sk: ["smerom k", "okolo (čas)"], sentence_fr: "Il est rentré vers minuit.", sentence_sk: "Vrátil sa domov okolo poloci." },
        { fr: "la coupe du monde", sk: ["majstrovstvá sveta"], sentence_fr: "La France a gagné la coupe du monde en 2018.", sentence_sk: "Francúzsko vyhralo majstrovstvá sveta v roku 2018." },
        { fr: "la victoire", sk: ["víťazstvo"], sentence_fr: "C'est une victoire historique pour l'équipe.", sentence_sk: "Je to historické víťazstvo pre tím." },
        { fr: "être en folie", sk: ["šalieť (od radosti)"], sentence_fr: "Les supporters étaient en folie après le but.", sentence_sk: "Fanúšikovia po góle šaleli." },
        { fr: "une foule", sk: ["dav"], sentence_fr: "Il y avait une foule immense dans la rue.", sentence_sk: "Na ulici bol obrovský dav." },
        { fr: "pleurer", sk: ["plakať"], sentence_fr: "Le film était si triste qu'elle a commencé à pleurer.", sentence_sk: "Film bol taký smutný, že začala plakať." },
        { fr: "le bonheur", sk: ["šťastie"], sentence_fr: "Le bonheur se trouve dans les choses simples.", sentence_sk: "Šťastie sa nachádza v jednoduchých veciach." },
        { fr: "s'embrasser", sk: ["bozkávať sa", "objať sa"], sentence_fr: "Les amoureux se sont embrassés sur le pont.", sentence_sk: "Zamilovaní sa bozkávali na moste." },
        { fr: "retourner", sk: ["vrátiť (sa)", "otočiť"], sentence_fr: "J'ai dû retourner à la maison chercher mes clés.", sentence_sk: "Musel som sa vrátiť domov po kľúče." },
        { fr: "un interrogatoire", sk: ["výsluch"], sentence_fr: "Le suspect a subi un long interrogatoire.", sentence_sk: "Podozrivý podstúpil dlhý výsluch." },
        { fr: "un témoin", sk: ["svedok"], sentence_fr: "La police recherche un témoin de l'accident.", sentence_sk: "Polícia hľadá svedka nehody." },
        { fr: "il était assez tard", sk: ["bolo dosť neskoro"], sentence_fr: "Il était assez tard quand nous sommes partis.", sentence_sk: "Bolo dosť neskoro, keď sme odchádzali." },
        { fr: "soudain", sk: ["náhle", "zrazu"], sentence_fr: "Soudain, la lumière s'est éteinte.", sentence_sk: "Náhla zhaslo svetlo." },
        { fr: "pousser un cri", sk: ["vykríknuť", "skríknuť"], sentence_fr: "Elle a poussé un cri de surprise.", sentence_sk: "Vykríkla od prekvapenia." },
        { fr: "un fauteuil", sk: ["kreslo"], sentence_fr: "Le grand-père s'est endormi dans son fauteuil.", sentence_sk: "Starý otec zaspal vo svojom kresle." },
        { fr: "frapper", sk: ["udrieť", "klopať"], sentence_fr: "Quelqu'un frappe à la porte.", sentence_sk: "Niekto klope na dvere." },
        { fr: "s'enfuir", sk: ["ujsť", "utiecť"], sentence_fr: "Le voleur s'est enfui avant l'arrivée de la police.", sentence_sk: "Zlodej utiekol pred príchodom polície." },
        { fr: "avoir lieu", sk: ["konať sa", "odohrávať sa"], sentence_fr: "Le concert aura lieu demain soir.", sentence_sk: "Koncert sa bude konať zajtra večer." },
        { fr: "le feu", sk: ["oheň", "semafor"], sentence_fr: "Il faut s'arrêter au feu rouge.", sentence_sk: "Treba zastaviť na červenom semafore." },
        { fr: "gêner", sk: ["prekážať", "obťažovať"], sentence_fr: "Est-ce que la musique te gêne ?", sentence_sk: "Prekáža ti tá hudba?" },
        { fr: "un piéton", sk: ["chodec"], sentence_fr: "La voiture s'est arrêtée pour laisser passer le piéton.", sentence_sk: "Auto zastavilo, aby nechalo prejsť chodca." },
        { fr: "freiner", sk: ["brzdiť"], sentence_fr: "Il a dû freiner brusquement.", sentence_sk: "Musel prudko zabrzdiť." },
        { fr: "heurter", sk: ["naraziť do", "vraziť do"], sentence_fr: "Le vélo a heurté un arbre.", sentence_sk: "Bicykel narazil do stromu." },
        { fr: "le trottoir", sk: ["chodník"], sentence_fr: "Marche sur le trottoir, c'est plus sûr.", sentence_sk: "Kráčaj po chodníku, je to bezpečnejšie." },
        { fr: "le savon", sk: ["mydlo"], sentence_fr: "Lave-toi les mains avec du savon.", sentence_sk: "Umy si ruky mydlom." },
        { fr: "ralentir", sk: ["spomaliť"], sentence_fr: "Il faut ralentir à l'approche de l'école.", sentence_sk: "Pri blížiacej sa škole treba spomaliť." },
        { fr: "brûler", sk: ["horieť", "páliť"], sentence_fr: "Attention, la casserole est chaude, ne te brûle pas !", sentence_sk: "Pozor, hrniec je horúci, nepopáľ sa!" },
        { fr: "la pâte", sk: ["cesto", "cestoviny"], sentence_fr: "J'ai préparé de la pâte à pizza.", sentence_sk: "Pripravil som cesto na pizzu." },
        { fr: "une peau de banane", sk: ["banánová šupka"], sentence_fr: "Il a glissé sur une peau de banane.", sentence_sk: "Pošmykol sa na banánovej šupke." },
        { fr: "une canette", sk: ["plechovka"], sentence_fr: "Jette la canette dans la poubelle de recyclage.", sentence_sk: "Hoď plechovku do recyklačného koša." },
        { fr: "l'interviewé(e)", sk: ["respondent", "ten, s kým sa robí rozhovor"], sentence_fr: "L'interviewé a répondu à toutes les questions du journaliste.", sentence_sk: "Respondent odpovedal na všetky otázky novinára." },
        { fr: "le parcours d'un emballage", sk: ["cesta obalu"], sentence_fr: "Le schéma montre le parcours d'un emballage, de l'usine au recyclage.", sentence_sk: "Schéma ukazuje cestu obalu, od továrne po recykláciu." },
        { fr: "l'usine de recyclage", sk: ["recyklačná továreň"], sentence_fr: "Les bouteilles en plastique sont envoyées à l'usine de recyclage.", sentence_sk: "Plastové fľaše sa posielajú do recyklačnej továrne." },
        { fr: "le schéma", sk: ["schéma", "nákres"], sentence_fr: "Le professeur a dessiné un schéma au tableau.", sentence_sk: "Profesor nakreslil na tabuľu schému." },
        { fr: "le métal est fondu", sk: ["kov je roztavený"], sentence_fr: "Dans le haut fourneau, le métal est fondu à très haute température.", sentence_sk: "Vo vysokej peci je kov roztavený pri veľmi vysokej teplote." },
        { fr: "broyer", sk: ["drviť", "mlieť"], sentence_fr: "La machine sert à broyer les vieux plastiques.", sentence_sk: "Stroj slúži na drvenie starých plastov." },
        { fr: "ramollir", sk: ["zmäknúť", "zmäkčiť"], sentence_fr: "Laisse le beurre ramollir à température ambiante.", sentence_sk: "Nechaj maslo zmäknúť pri izbovej teplote." },
        { fr: "démarrer", sk: ["naštartovať", "začať"], sentence_fr: "J'ai du mal à démarrer la voiture ce matin.", sentence_sk: "Dnes ráno mám problém naštartovať auto." },
        { fr: "un annuaire", sk: ["adresár", "telefónny zoznam"], sentence_fr: "J'ai cherché son numéro dans l'annuaire.", sentence_sk: "Hľadal som jeho číslo v telefónnom zozname." },
        { fr: "une poche", sk: ["vrecko"], sentence_fr: "J'ai mes clés dans ma poche.", sentence_sk: "Mám kľúče vo vrecku." },
        { fr: "émouvant", sk: ["dojímavý"], sentence_fr: "C'était un discours très émouvant.", sentence_sk: "Bol to veľmi dojímavý prejav." },
        { fr: "un prospectus", sk: ["leták", "prospekt"], sentence_fr: "J'ai reçu un prospectus pour un nouveau magasin.", sentence_sk: "Dostal som leták na nový obchod." },
        { fr: "mériter", sk: ["zaslúžiť si"], sentence_fr: "Après tout ce travail, tu mérites des vacances.", sentence_sk: "Po všetkej tej práci si zaslúžiš dovolenku." },
        { fr: "bêtement", sk: ["hlúpo"], sentence_fr: "J'ai bêtement oublié mon portefeuille à la maison.", sentence_sk: "Hlúpo som si zabudol peňaženku doma." },
        { fr: "le mégot", sk: ["ošpak", "ohorok"], sentence_fr: "Ne jetez pas vos mégots par terre.", sentence_sk: "Nehadžte ošpaky na zem." },
        { fr: "les bénévoles", sk: ["dobrovoľníci"], sentence_fr: "Les bénévoles ont nettoyé la plage.", sentence_sk: "Dobrovoľníci vyčistili pláž." },
        { fr: "ramasser", sk: ["zbierať", "zdvihnúť"], sentence_fr: "Il faut ramasser les déchets.", sentence_sk: "Treba pozbierať odpadky." },
        { fr: "la banlieue", sk: ["predmestie"], sentence_fr: "Il habite en banlieue parisienne.", sentence_sk: "Býva na parížskom predmestí." },
        { fr: "une incivilité", sk: ["nezdvorilosť", "neslušnosť"], sentence_fr: "Jeter des papiers par terre est une incivilité.", sentence_sk: "Hádzať papiere na zem je neslušnosť." },
        { fr: "les règles", sk: ["pravidlá"], sentence_fr: "Il faut respecter les règles du jeu.", sentence_sk: "Treba rešpektovať pravidlá hry." },
        { fr: "le comportement", sk: ["správanie"], sentence_fr: "Son comportement est exemplaire.", sentence_sk: "Jeho správanie je príkladné." },
        { fr: "la saleté", sk: ["špina", "nečistota"], sentence_fr: "Il y a beaucoup de saleté dans cette rue.", sentence_sk: "V tejto ulici je veľa špiny." },
        { fr: "une chasuble", sk: ["rozlišovačka", "vesta"], sentence_fr: "Les bénévoles portent une chasuble jaune.", sentence_sk: "Dobrovoľníci nosia žltú vestu." },
        { fr: "une pince", sk: ["kliešte"], sentence_fr: "Il utilise une pince pour ramasser les déchets.", sentence_sk: "Na zbieranie odpadkov používa kliešte." },
        { fr: "traquer", sk: ["stopovať", "prenasledovať"], sentence_fr: "La police traque les criminels.", sentence_sk: "Polícia prenasleduje zločincov." },
        { fr: "le moindre", sk: ["najmenší"], sentence_fr: "Je n'ai pas la moindre idée.", sentence_sk: "Nemám ani najmenšiu potuchu." },
        { fr: "s'investir", sk: ["angažovať sa", "investovať (čas, energiu)"], sentence_fr: "Elle s'investit beaucoup dans cette association.", sentence_sk: "Veľmi sa angažuje v tomto združení." },
        { fr: "un expatrié", sk: ["emigrant", "cudzinec žijúci v zahraničí"], sentence_fr: "Il y a beaucoup d'expatriés français à Londres.", sentence_sk: "V Londýne je veľa francúzskych emigrantov." },
        { fr: "rassembler", sk: ["zhromaždiť"], sentence_fr: "Le professeur a rassemblé les élèves dans la cour.", sentence_sk: "Učiteľ zhromaždil žiakov na dvore." },
        { fr: "l'antenne", sk: ["pobočka", "anténa"], sentence_fr: "Notre association a une antenne dans plusieurs villes.", sentence_sk: "Naše združenie má pobočku vo viacerých mestách." },
        { fr: "réel", sk: ["skutočný", "reálny"], sentence_fr: "C'est un problème réel qui demande une solution.", sentence_sk: "Je to skutočný problém, ktorý si vyžaduje riešenie." },
        { fr: "confier", sk: ["zveriť"], sentence_fr: "Je peux te confier un secret ?", sentence_sk: "Môžem ti zveriť tajomstvo?" },
        { fr: "autant", sk: ["rovnako veľa", "toľko"], sentence_fr: "Travaille autant que tu peux.", sentence_sk: "Pracuj toľko, koľko môžeš." },
        { fr: "les meubles", sk: ["nábytok"], sentence_fr: "Nous avons acheté de nouveaux meubles.", sentence_sk: "Kúpili sme nový nábytok." },
        { fr: "gras", sk: ["tučný", "mastný"], sentence_fr: "Ce plat est un peu trop gras pour moi.", sentence_sk: "Toto jedlo je na mňa príliš mastné." },
        { fr: "infliger", sk: ["spôsobiť", "uvaliť (trest)"], sentence_fr: "Le juge va lui infliger une amende.", sentence_sk: "Sudca mu udelí pokutu." },
        { fr: "la honte", sk: ["hanba"], sentence_fr: "Il a ressenti de la honte après son erreur.", sentence_sk: "Po svojej chybe pocítil hanbu." },
        { fr: "la gêne", sk: ["rozpaky", "nepohodlie"], sentence_fr: "Il y avait une certaine gêne dans la salle.", sentence_sk: "V miestnosti vládli isté rozpaky." },
        { fr: "un claquement de doigts", sk: ["lusknutie prstami"], sentence_fr: "Il a disparu en un claquement de doigts.", sentence_sk: "Zmizol lusknutím prstov." },
        { fr: "rejoindre", sk: ["pridať sa k", "stretnúť sa s"], sentence_fr: "Tu veux nous rejoindre au restaurant ?", sentence_sk: "Chceš sa k nám pridať v reštaurácii?" },
        { fr: "la propreté", sk: ["čistota"], sentence_fr: "La propreté des rues est l'affaire de tous.", sentence_sk: "Čistota ulíc je záležitosťou všetkých." },
        { fr: "souligner", sk: ["podčiarknuť", "zdôrazniť"], sentence_fr: "Je voudrais souligner l'importance de ce point.", sentence_sk: "Chcel by som zdôrazniť dôležitosť tohto bodu." },
        { fr: "attirer", sk: ["prilákať", "pútať"], sentence_fr: "Le festival attire des milliers de visiteurs chaque année.", sentence_sk: "Festival každý rok priláka tisíce návštevníkov." },
        { fr: "désormais", sk: ["odteraz", "od tejto chvíle"], sentence_fr: "Désormais, je ferai plus attention.", sentence_sk: "Odteraz si budem dávať väčší pozor." },
        { fr: "un trentenaire", sk: ["tridsiatnik"], sentence_fr: "C'est un jeune trentenaire dynamique.", sentence_sk: "Je to mladý dynamický tridsiatnik." },
        { fr: "un quadragénaire", sk: ["štyridsiatnik"], sentence_fr: "Le nouveau directeur est un quadragénaire.", sentence_sk: "Nový riaditeľ je štyridsiatnik." },
        { fr: "un quinquagénaire", sk: ["päťdesiatnik"], sentence_fr: "Il approche de la cinquantaine, c'est bientôt un quinquagénaire.", sentence_sk: "Blíži sa k päťdesiatke, čoskoro bude päťdesiatnik." },
        { fr: "un sexagénaire", sk: ["šesťdesiatnik"], sentence_fr: "Mon voisin est un sexagénaire très actif.", sentence_sk: "Môj sused je veľmi aktívny šesťdesiatnik." },
        { fr: "un septuagénaire", sk: ["sedemdesiatnik"], sentence_fr: "Le septuagénaire profite de sa retraite.", sentence_sk: "Sedemdesiatnik si užíva dôchodok." },
        { fr: "un octogénaire", sk: ["osemdesiatnik"], sentence_fr: "L'octogénaire a raconté des histoires de sa jeunesse.", sentence_sk: "Osemdesiatnik rozprával príbehy zo svojej mladosti." },
        { fr: "un nonagénaire", sk: ["deväťdesiatnik"], sentence_fr: "Le nonagénaire a fêté ses 95 ans.", sentence_sk: "Deväťdesiatnik oslávil 95 rokov." },
        { fr: "un centenaire", sk: ["storočný človek"], sentence_fr: "Le village a célébré son premier centenaire.", sentence_sk: "Dedina oslávila svojho prvého storočného obyvateľa." },
        { fr: "consécutif", sk: ["nasledujúci", "po sebe idúci"], sentence_fr: "Il a plu pendant trois jours consécutifs.", sentence_sk: "Pršalo tri dni po sebe." },
        { fr: "à titre individuel", sk: ["individuálne", "ako jednotlivec"], sentence_fr: "Il a agi à titre individuel, pas au nom de l'entreprise.", sentence_sk: "Konal ako jednotlivec, nie v mene firmy." },
        { fr: "une piste", sk: ["stopa", "dráha", "zjazdovka"], sentence_fr: "La police suit une nouvelle piste.", sentence_sk: "Polícia sleduje novú stopu." },
        { fr: "un impôt", sk: ["daň"], sentence_fr: "Chaque citoyen doit payer des impôts.", sentence_sk: "Každý občan musí platiť dane." },
        { fr: "une taxe", sk: ["poplatok", "daň"], sentence_fr: "Il y a une nouvelle taxe sur les boissons sucrées.", sentence_sk: "Je tu nový poplatok na sladené nápoje." },
        { fr: "une amende", sk: ["pokuta"], sentence_fr: "J'ai eu une amende pour excès de vitesse.", sentence_sk: "Dostal som pokutu za prekročenie rýchlosti." },
        { fr: "d'après vous", sk: ["podľa vás"], sentence_fr: "D'après vous, qui est le coupable ?", sentence_sk: "Kto je podľa vás vinník?" },
        { fr: "garder", sk: ["strážiť", "nechať si", "udržať"], sentence_fr: "Tu peux garder ce livre, je l'ai déjà lu.", sentence_sk: "Túto knihu si môžeš nechať, už som ju čítal." },
        { fr: "l'espace", sk: ["priestor", "vesmír"], sentence_fr: "Il n'y a pas assez d'espace pour tout le monde.", sentence_sk: "Nie je tu dosť miesta pre všetkých." },
        { fr: "le sachet", sk: ["vrecko", "sáčko"], sentence_fr: "Je voudrais un sachet de thé, s'il vous plaît.", sentence_sk: "Chcel by som vrecko čaju, prosím." },
        { fr: "le pot", sk: ["dóza", "kelímok", "kvetináč"], sentence_fr: "J'ai acheté un pot de confiture.", sentence_sk: "Kúpil som dózu džemu." },
        { fr: "le bocal", sk: ["zaváraninový pohár"], sentence_fr: "Les cornichons sont dans un bocal.", sentence_sk: "Uhorky sú v zaváraninovom pohári." },
        { fr: "la brique", sk: ["kartón (napr. od mlieka)"], sentence_fr: "N'oublie pas d'acheter une brique de lait.", sentence_sk: "Nezabudni kúpiť kartón mlieka." },
        { fr: "le flacon de parfum", sk: ["flakón parfumu"], sentence_fr: "Elle a reçu un joli flacon de parfum.", sentence_sk: "Dostala pekný flakón parfumu." },
        { fr: "la boîte de conserve", sk: ["konzerva"], sentence_fr: "J'ai ouvert une boîte de conserve de thon.", sentence_sk: "Otvoril som konzervu tuniaka." },
        { fr: "la capsule de café", sk: ["kávová kapsula"], sentence_fr: "Ces capsules de café sont recyclables.", sentence_sk: "Tieto kávové kapsule sú recyklovateľné." },
        { fr: "le gobelet en plastique", sk: ["plastový pohár"], sentence_fr: "Évitons d'utiliser des gobelets en plastique.", sentence_sk: "Vyhýbajme sa používaniu plastových pohárov." },
        { fr: "le paquet", sk: ["balík", "balíček"], sentence_fr: "J'ai reçu un paquet ce matin.", sentence_sk: "Dnes ráno som dostal balík." },
        { fr: "progressivement", sk: ["postupne"], sentence_fr: "La situation s'améliore progressivement.", sentence_sk: "Situácia sa postupne zlepšuje." },
        { fr: "petit à petit", sk: ["krok za krokom", "pomaly"], sentence_fr: "Petit à petit, l'oiseau fait son nid.", sentence_sk: "Pomaly ďalej zájdeš (dosl. vtáčik si stavia hniezdo kúsok po kúsku)." },
        { fr: "pas à pas", sk: ["krok za krokom"], sentence_fr: "Nous allons résoudre ce problème pas à pas.", sentence_sk: "Tento problém vyriešime krok za krokom." },
        { fr: "un pas", sk: ["krok"], sentence_fr: "Fais un pas en avant.", sentence_sk: "Urob krok vpred." },
        { fr: "mener", sk: ["viesť"], sentence_fr: "Il mène une vie tranquille.", sentence_sk: "Vedie pokojný život." },
        { fr: "guider", sk: ["sprevádzať", "viesť"], sentence_fr: "Le guide va nous guider à travers la ville.", sentence_sk: "Sprievodca nás prevedie mestom." },
        { fr: "amener", sk: ["priviesť (niekoho)"], sentence_fr: "Tu peux amener tes amis à la fête.", sentence_sk: "Môžeš priviesť svojich priateľov na oslavu." },
        { fr: "conduire", sk: ["šoférovať", "viesť"], sentence_fr: "Je dois conduire prudemment quand il pleut.", sentence_sk: "Musím šoférovať opatrne, keď prší." },
        { fr: "pendre", sk: ["visieť", "zavesiť"], sentence_fr: "J'ai pendu le tableau au mur.", sentence_sk: "Zavesil som obraz na stenu." },
        { fr: "être suspendu", sk: ["byť zavesený", "visieť"], sentence_fr: "Le pont est suspendu au-dessus de la rivière.", sentence_sk: "Most visí nad riekou." },
        { fr: "d'un autre côté", sk: ["na druhej strane"], sentence_fr: "J'aime la ville, mais d'un autre côté, la campagne est plus calme.", sentence_sk: "Mám rád mesto, ale na druhej strane, vidiek je pokojnejší." },
        { fr: "cependant", sk: ["avšak", "jednako"], sentence_fr: "Il est riche, cependant il n'est pas heureux.", sentence_sk: "Je bohatý, avšak nie je šťastný." },
        { fr: "atteindre", sk: ["dosiahnuť"], sentence_fr: "Il a finalement atteint son objectif.", sentence_sk: "Konečne dosiahol svoj cieľ." },
        { fr: "parvenir à", sk: ["podariť sa", "dosiahnuť"], sentence_fr: "Elle est parvenue à le convaincre.", sentence_sk: "Podarilo sa jej ho presvedčiť." },
        { fr: "croire en", sk: ["veriť v (niekoho/niečo)"], sentence_fr: "Je crois en tes capacités.", sentence_sk: "Verím v tvoje schopnosti." },
        { fr: "peuplé", sk: ["zaľudnený", "osídlený"], sentence_fr: "C'est un quartier très peuplé.", sentence_sk: "Je to veľmi zaľudnená štvrť." },
        { fr: "s'affirmer", sk: ["presadiť sa"], sentence_fr: "Il a du mal à s'affirmer en public.", sentence_sk: "Má problém presadiť sa na verejnosti." },
        { fr: "une vague", sk: ["vlna"], sentence_fr: "Les vagues sont hautes aujourd'hui.", sentence_sk: "Vlny sú dnes vysoké." },
        { fr: "la bouillabaisse", sk: ["bouillabaisse (rybia polievka)"], sentence_fr: "La bouillabaisse est une spécialité de Marseille.", sentence_sk: "Bouillabaisse je špecialita z Marseille." },
        { fr: "une huître", sk: ["ustrica"], sentence_fr: "J'ai mangé des huîtres pour la première fois.", sentence_sk: "Prvýkrát som jedol ustrice." },
        { fr: "la quête", sk: ["hľadanie", "pátranie"], sentence_fr: "Le chevalier est parti en quête du Graal.", sentence_sk: "Rytier sa vydal na pátranie po grále." },
        { fr: "la fée", sk: ["víla"], sentence_fr: "La fée a exaucé son vœu.", sentence_sk: "Víla splnila jeho želanie." },
        { fr: "un chevalier", sk: ["rytier"], sentence_fr: "Le chevalier a sauvé la princesse.", sentence_sk: "Rytier zachránil princeznú." },
        { fr: "plonger", sk: ["potápať sa", "ponoriť sa"], sentence_fr: "J'aime plonger dans la mer.", sentence_sk: "Rád sa potápam v mori." },
        { fr: "une cabane", sk: ["búda", "chatka"], sentence_fr: "Les enfants ont construit une cabane dans les arbres.", sentence_sk: "Deti si postavili domček na strome." },
        { fr: "l'épuisement", sk: ["vyčerpanie"], sentence_fr: "Il souffre d'épuisement professionnel.", sentence_sk: "Trpí syndrómom vyhorenia." },
        { fr: "une voix off", sk: ["hlas komentátora (mimo obrazu)"], sentence_fr: "Le documentaire est raconté par une voix off.", sentence_sk: "Dokument je rozprávaný hlasom komentátora." },
        { fr: "filer", sk: ["uháňať", "zmiznúť (hovorovo)"], sentence_fr: "Je dois filer, je suis en retard.", sentence_sk: "Musím letieť, meškám." },
        { fr: "une ambiance", sk: ["atmosféra", "nálada"], sentence_fr: "Il y a une bonne ambiance dans ce café.", sentence_sk: "V tejto kaviarni je dobrá atmosféra." },
        { fr: "à gogo", sk: ["hojne", "nadostač"], sentence_fr: "Il y avait des boissons à gogo.", sentence_sk: "Bolo tam hojne nápojov." },
        { fr: "le ski de fond", sk: ["bežkovanie"], sentence_fr: "Le ski de fond est un excellent exercice.", sentence_sk: "Bežkovanie je výborné cvičenie." },
        { fr: "le gaspillage", sk: ["plytvanie", "mrhanie"], sentence_fr: "Le gaspillage alimentaire est un gros problème.", sentence_sk: "Plytvanie potravinami je veľký problém." },
        { fr: "augmenter", sk: ["zvýšiť", "stúpať"], sentence_fr: "Les prix ont encore augmenté.", sentence_sk: "Ceny opäť stúpli." },
        { fr: "économiser", sk: ["šetriť"], sentence_fr: "J'économise pour acheter une nouvelle voiture.", sentence_sk: "Šetrím si na nové auto." },
        { fr: "dépenser", sk: ["míňať"], sentence_fr: "Il dépense trop d'argent.", sentence_sk: "Míňa príliš veľa peňazí." },
        { fr: "gaspiller", sk: ["plytvať", "mrhať"], sentence_fr: "Il ne faut pas gaspiller l'eau.", sentence_sk: "Netreba plytvať vodou." },
        { fr: "allumer", sk: ["zapnúť", "zažať"], sentence_fr: "Peux-tu allumer la télévision ?", sentence_sk: "Môžeš zapnúť televízor?" },
        { fr: "glisser", sk: ["šmyknúť sa", "kĺzať"], sentence_fr: "Attention, le sol est mouillé, tu pourrais glisser.", sentence_sk: "Pozor, podlaha je mokrá, mohol by si sa pošmyknúť." },
        { fr: "se dépêcher", sk: ["ponáhľať sa"], sentence_fr: "Dépêchez-vous, le train va partir !", sentence_sk: "Ponáhľajte sa, vlak odchádza!" },
        { fr: "se mettre en colère", sk: ["nahnevať sa"], sentence_fr: "Il se met en colère pour un rien.", sentence_sk: "Nahnevá sa pre maličkosť." },
        { fr: "sinon", sk: ["inak", "v opačnom prípade"], sentence_fr: "Dépêche-toi, sinon on va être en retard.", sentence_sk: "Ponáhľaj sa, inak budeme meškať." },
        { fr: "rater", sk: ["zmeškať", "pokaziť"], sentence_fr: "J'ai raté mon bus ce matin.", sentence_sk: "Dnes ráno som zmeškal autobus." },
        { fr: "un dessin", sk: ["kresba", "kreslený film"], sentence_fr: "J'aime regarder les dessins animés.", sentence_sk: "Rád pozerám kreslené filmy." },
        { fr: "supprimer", sk: ["odstrániť", "vymazať"], sentence_fr: "J'ai supprimé les anciens fichiers.", sentence_sk: "Vymazal som staré súbory." },
        { fr: "s'ennuyer", sk: ["nudiť sa"], sentence_fr: "Les enfants commencent à s'ennuyer.", sentence_sk: "Deti sa začínajú nudiť." },
        { fr: "postuler", sk: ["uchádzať sa (o prácu)"], sentence_fr: "J'ai postulé pour un nouvel emploi.", sentence_sk: "Uchádzal som sa o novú prácu." },
        { fr: "disponible", sk: ["dostupný", "k dispozícii"], sentence_fr: "Je suis disponible pour un entretien la semaine prochaine.", sentence_sk: "Budúci týždeň som k dispozícii na pohovor." },
        { fr: "le commandant de bord", sk: ["kapitán lietadla"], sentence_fr: "Le commandant de bord a souhaité la bienvenue aux passagers.", sentence_sk: "Kapitán privítal cestujúcich." },
        { fr: "une éclaircie", sk: ["vyjasnenie"], sentence_fr: "La météo annonce des éclaircies pour l'après-midi.", sentence_sk: "Počasie na popoludnie hlási vyjasnenie." },
        { fr: "apparaître", sk: ["objaviť sa", "zjaviť sa"], sentence_fr: "Le soleil a finalement apparu.", sentence_sk: "Slnko sa konečne objavilo." },
        { fr: "camper", sk: ["kempovať", "táboriť"], sentence_fr: "Nous allons camper près du lac.", sentence_sk: "Ideme kempovať pri jazere." },
        { fr: "s'organiser", sk: ["zorganizovať sa"], sentence_fr: "Il faut bien s'organiser pour le voyage.", sentence_sk: "Na cestu sa treba dobre zorganizovať." },
        { fr: "d'occasion", sk: ["z druhej ruky", "použitý"], sentence_fr: "J'ai acheté une voiture d'occasion.", sentence_sk: "Kúpil som si ojazdené auto." },
        { fr: "la friperie", sk: ["second-hand obchod"], sentence_fr: "On trouve des vêtements uniques à la friperie.", sentence_sk: "V sekáči sa dajú nájsť jedinečné kúsky oblečenia." },
        { fr: "le ménage", sk: ["upratovanie", "domácnosť"], sentence_fr: "C'est mon tour de faire le ménage.", sentence_sk: "Som na rade s upratovaním." },
        { fr: "loger", sk: ["ubytovať", "bývať"], sentence_fr: "Nous allons loger chez des amis.", sentence_sk: "Budeme bývať u priateľov." },
        { fr: "être enceinte", sk: ["byť tehotná"], sentence_fr: "Elle a annoncé qu'elle est enceinte.", sentence_sk: "Oznámila, že je tehotná." },
        { fr: "un menteur", sk: ["klamár"], sentence_fr: "Ne le crois pas, c'est un grand menteur.", sentence_sk: "Never mu, je to veľký klamár." },
        { fr: "un tricheur", sk: ["podvodník (v hre)"], sentence_fr: "Personne n'aime jouer avec un tricheur.", sentence_sk: "Nikto sa nerád hrá s podvodníkom." },
        { fr: "un escroc", sk: ["podvodník", "špekulant"], sentence_fr: "Il a été victime d'un escroc.", sentence_sk: "Stal sa obeťou podvodníka." },
        { fr: "un imposteur", sk: ["podvodník", "samozvanec"], sentence_fr: "Il s'est fait passer pour un médecin, c'est un imposteur.", sentence_sk: "Vydával sa za lekára, je to podvodník." },
        { fr: "un mytho", sk: ["klamár", "bájkar (hovorovo)"], sentence_fr: "Il raconte n'importe quoi, c'est un mytho.", sentence_sk: "Rozpráva čokoľvek, je to klamár." },
        { fr: "le déchirement", sk: ["rozorvanosť", "bolesť"], sentence_fr: "Le départ de ses enfants a été un déchirement.", sentence_sk: "Odchod jeho detí bol bolestivý." },
        { fr: "se piquer", sk: ["pichnúť sa"], sentence_fr: "Je me suis piqué avec une rose.", sentence_sk: "Pichol som sa o ružu." },
        { fr: "s'endormir", sk: ["zaspať"], sentence_fr: "Je m'endors facilement devant la télé.", sentence_sk: "Ľahko zaspím pred televízorom." },
        { fr: "le laisser-passer", sk: ["priepustka"], sentence_fr: "Il faut un laisser-passer pour entrer.", sentence_sk: "Na vstup je potrebná priepustka." },
        { fr: "un séjour", sk: ["pobyt"], sentence_fr: "Nous avons passé un agréable séjour à Paris.", sentence_sk: "V Paríži sme strávili príjemný pobyt." },
        { fr: "attraper", sk: ["chytiť"], sentence_fr: "J'ai réussi à attraper le bus.", sentence_sk: "Podarilo sa mi chytiť autobus." },
        { fr: "révéler", sk: ["odbaliť", "prezradiť"], sentence_fr: "Il a refusé de révéler ses sources.", sentence_sk: "Odmietol prezradiť svoje zdroje." },
        { fr: "les racines", sk: ["korene"], sentence_fr: "Il est fier de ses racines.", sentence_sk: "Je hrdý na svoje korene." },
        { fr: "l'appartenance", sk: ["príslušnosť"], sentence_fr: "Le sentiment d'appartenance à un groupe est important.", sentence_sk: "Pocit príslušnosti k skupine je dôležitý." },
        { fr: "patiemment", sk: ["trpezlivo"], sentence_fr: "Il attend patiemment son tour.", sentence_sk: "Trpezlivo čaká, kým príde na rad." },
        { fr: "un morceau", sk: ["kúsok"], sentence_fr: "Tu veux un morceau de gâteau ?", sentence_sk: "Chceš kúsok koláča?" },
        { fr: "coller", sk: ["lepiť"], sentence_fr: "J'ai collé l'affiche sur le mur.", sentence_sk: "Nalepil som plagát na stenu." },
        { fr: "valider", sk: ["potvrdiť", "schváliť"], sentence_fr: "N'oubliez pas de valider votre ticket.", sentence_sk: "Nezabudnite si označiť lístok." },
        { fr: "rendre hommage", sk: ["vzdávať hold"], sentence_fr: "Une cérémonie a été organisée pour rendre hommage aux victimes.", sentence_sk: "Na počesť obetí sa konala ceremónia." },
        { fr: "une expulsion", sk: ["vyhostenie", "vylúčenie"], sentence_fr: "L'expulsion du joueur a changé le match.", sentence_sk: "Vylúčenie hráča zmenilo zápas." },
        { fr: "le dérangement", sk: ["vyrušovanie", "obťažovanie"], sentence_fr: "Excusez-moi pour le dérangement.", sentence_sk: "Ospravedlňte ma za vyrušovanie." },
        { fr: "cadien et créole", sk: ["cajunský a kreolský"], sentence_fr: "La Louisiane est célèbre pour sa culture cadienne et créole.", sentence_sk: "Louisiana je známa svojou cajunskou a kreolskou kultúrou." },
        { fr: "tant que", sk: ["pokiaľ", "kým"], sentence_fr: "Tant que tu es là, je suis heureux.", sentence_sk: "Pokiaľ si tu, som šťastný." },
        { fr: "s'installer", sk: ["usadiť sa", "nasťahovať sa"], sentence_fr: "Ils ont décidé de s'installer à la campagne.", sentence_sk: "Rozhodli sa usadiť na vidieku." },
        { fr: "les tempes grises", sk: ["šedivé spánky"], sentence_fr: "Il a les tempes grises, mais il est encore jeune.", sentence_sk: "Má šedivé spánky, ale je stále mladý." },
        { fr: "la peine", sk: ["trápenie", "námaha", "trest"], sentence_fr: "Ça ne vaut pas la peine de s'inquiéter.", sentence_sk: "Nestojí za to sa znepokojovať." },
        { fr: "la communauté", sk: ["komunita", "spoločenstvo"], sentence_fr: "Il est très actif dans sa communauté.", sentence_sk: "Je veľmi aktívny vo svojej komunite." },
        { fr: "l'espoir", sk: ["nádej"], sentence_fr: "Il ne faut jamais perdre espoir.", sentence_sk: "Nikdy netreba strácať nádej." },
        { fr: "le départ", sk: ["odchod", "štart"], sentence_fr: "Le départ du train est à 10h.", sentence_sk: "Odchod vlaku je o 10:00." },
        { fr: "stressant", sk: ["stresujúci"], sentence_fr: "Mon travail est très stressant.", sentence_sk: "Moja práca je veľmi stresujúca." },
        { fr: "le coin", sk: ["roh", "kút"], sentence_fr: "La pharmacie est au coin de la rue.", sentence_sk: "Lekáreň je na rohu ulice." },
        { fr: "une basket", sk: ["teniska"], sentence_fr: "J'ai acheté de nouvelles baskets pour courir.", sentence_sk: "Kúpil som si nové tenisky na behanie." },
        { fr: "le lancer du poids", sk: ["vrh guľou"], sentence_fr: "Le lancer du poids est une discipline athlétique.", sentence_sk: "Vrh guľou je atletická disciplína." },
        { fr: "une combinaison de ski", sk: ["lyžiarska kombinéza"], sentence_fr: "N'oublie pas ta combinaison de ski.", sentence_sk: "Nezabudni si lyžiarsku kombinézu." },
        { fr: "le but", sk: ["gól", "cieľ"], sentence_fr: "L'équipe a marqué un but à la dernière minute.", sentence_sk: "Tím strelil gól v poslednej minúte." },
        { fr: "un maillot de bain", sk: ["plavky"], sentence_fr: "J'ai oublié mon maillot de bain.", sentence_sk: "Zabudol som si plavky." },
        { fr: "un filet", sk: ["sieť"], sentence_fr: "Le ballon a terminé dans le filet.", sentence_sk: "Lopta skončila v sieti." },
        { fr: "un bâton", sk: ["palica"], sentence_fr: "Il utilise des bâtons de marche pour la randonnée.", sentence_sk: "Na turistiku používa trekingové palice." },
        { fr: "le saut en hauteur", sk: ["skok do výšky"], sentence_fr: "Il a battu le record du monde de saut en hauteur.", sentence_sk: "Prekonal svetový rekord v skoku do výšky." },
        { fr: "un terrain de football", sk: ["futbalové ihrisko"], sentence_fr: "Le match se joue sur le terrain de football principal.", sentence_sk: "Zápas sa hrá na hlavnom futbalovom ihrisku." },
        { fr: "une balle", sk: ["loptička (menšia)"], sentence_fr: "J'ai besoin d'une balle de tennis.", sentence_sk: "Potrebujem tenisovú loptičku." },
        { fr: "un ballon", sk: ["lopta (väčšia)"], sentence_fr: "Les enfants jouent avec un ballon.", sentence_sk: "Deti sa hrajú s loptou." },
        { fr: "une boule", sk: ["guľa"], sentence_fr: "On joue à la pétanque avec des boules en métal.", sentence_sk: "Petang sa hrá s kovovými guľami." },
        { fr: "la longueur", sk: ["dĺžka"], sentence_fr: "Quelle est la longueur de la piscine ?", sentence_sk: "Aká je dĺžka bazéna?" },
        { fr: "la largeur", sk: ["šírka"], sentence_fr: "La largeur de la route est de 5 mètres.", sentence_sk: "Šírka cesty je 5 metrov." },
        { fr: "patiner", sk: ["korčuľovať sa"], sentence_fr: "J'aime patiner sur la glace en hiver.", sentence_sk: "V zime sa rád korčuľujem na ľade." },
        { fr: "la patinoire", sk: ["klzisko"], sentence_fr: "On va à la patinoire ce soir ?", sentence_sk: "Ideme dnes večer na klzisko?" },
        { fr: "le patinage", sk: ["korčuľovanie"], sentence_fr: "Le patinage artistique est un sport magnifique.", sentence_sk: "Krasokorčuľovanie je nádherný šport." },
        { fr: "lancer", sk: ["hodiť", "spustiť"], sentence_fr: "Il a lancé la balle très loin.", sentence_sk: "Hodil loptu veľmi ďaleko." },
        { fr: "un concurrent", sk: ["súper", "konkurent"], sentence_fr: "Il a battu tous ses concurrents.", sentence_sk: "Porazil všetkých svojich súperov." },
        { fr: "une épreuve", sk: ["skúška", "disciplína"], sentence_fr: "C'est une épreuve difficile.", sentence_sk: "Je to ťažká skúška." },
        { fr: "se rendre compte", sk: ["uvedomiť si"], sentence_fr: "Je me suis rendu compte de mon erreur.", sentence_sk: "Uvedomil som si svoju chybu." },
        { fr: "un entretien", sk: ["pohovor", "údržba"], sentence_fr: "J'ai un entretien d'embauche demain.", sentence_sk: "Zajtra mám pracovný pohovor." },
        { fr: "afin de", sk: ["aby", "s cieľom"], sentence_fr: "Je travaille dur afin de réussir.", sentence_sk: "Tvrdo pracujem, aby som uspel." },
        { fr: "la beauté", sk: ["krása"], sentence_fr: "La beauté de ce paysage est incroyable.", sentence_sk: "Krása tejto krajiny je neuveriteľná." },
        { fr: "bien que", sk: ["hoci", "aj keď"], sentence_fr: "Bien qu'il soit fatigué, il continue de travailler.", sentence_sk: "Hoci je unavený, pokračuje v práci." },
        { fr: "la jeunesse", sk: ["mladosť"], sentence_fr: "Il faut profiter de sa jeunesse.", sentence_sk: "Treba si užiť mladosť." },
    ];


    // --- HLAVNÁ LOGIKA APLIKÁCIE ---

    let frenchVoice = null;

    // Robustnejšia metóda na nájdenie a nastavenie francúzskeho hlasu.
    // Vytvoríme "sľub" (Promise), ktorý sa splní, až keď je hlas naozaj nájdený.
    const voicePromise = new Promise((resolve, reject) => {
        if ('speechSynthesis' in window) {
            const getAndSetVoice = () => {
                const voices = window.speechSynthesis.getVoices();
                if (voices.length > 0) {
                    // Prioritný zoznam pre kvalitnejšie hlasy
                    const priorityVoices = [
                        'Amelie', // Dobrý hlas na Apple zariadeniach
                        'Google français',
                        'Microsoft Julie'
                    ];
                    // Hľadáme prioritný hlas
                    frenchVoice = voices.find(voice => priorityVoices.some(pv => voice.name.includes(pv)) && voice.lang.startsWith('fr-'));
                    
                    // Ak sa nenašiel prioritný, hľadáme akýkoľvek fr-FR alebo fr-CA
                    if (!frenchVoice) {
                        frenchVoice = voices.find(voice => voice.lang === 'fr-FR' || voice.lang === 'fr-CA');
                    }
                    // Ak stále nič, berieme prvý dostupný francúzsky hlas
                    if (!frenchVoice) {
                        frenchVoice = voices.find(voice => voice.lang.startsWith('fr-'));
                    }

                    if (frenchVoice) {
                        console.log(`Francúzsky hlas úspešne nájdený a nastavený: ${frenchVoice.name}`);
                        resolve(frenchVoice);
                    }
                }
            };

            getAndSetVoice(); // Prvý pokus
            if (!frenchVoice) {
                window.speechSynthesis.onvoiceschanged = () => {
                    getAndSetVoice();
                    // Ak sa hlas nájde po tejto udalosti, sľub sa splní
                    if(frenchVoice) resolve(frenchVoice);
                };
            }
             // Ak sa ani po určitom čase hlas nenájde, sľub odmietneme
            setTimeout(() => {
                if (!frenchVoice) {
                    reject(new Error("Francúzsky hlas sa nepodarilo načítať v časovom limite."));
                }
            }, 2000); // Čakáme max 2 sekundy

        } else {
            reject(new Error("Syntéza reči nie je v tomto prehliadači podporovaná."));
        }
    });

    voicePromise.catch(error => console.error(error));


    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.app-section');
    const homeSection = document.getElementById('home-section');

    // Navigácia medzi sekciami
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            
            // Skry všetky sekcie a zruš aktívny stav tlačidiel
            sections.forEach(section => section.classList.remove('active'));
            navButtons.forEach(btn => btn.classList.remove('active'));

            // Zobraz cieľovú sekciu a aktivuj tlačidlo
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                homeSection.classList.remove('active'); // Skry úvodnú obrazovku
                targetSection.classList.add('active');
                button.classList.add('active');
            }
        });
    });

    // Asynchrónna funkcia na prehrávanie zvuku, ktorá používa vybraný hlas zo settings
    async function speak(text, lang = 'fr-FR') {
        try {
            window.speechSynthesis.cancel(); // Zastaví predchádzajúce prehrávanie

            const utterance = new SpeechSynthesisUtterance(text);
            
            // Použij vybraný hlas zo settings, ak je dostupný
            if (frenchVoice) {
                utterance.voice = frenchVoice;
            } else {
                // Fallback - počkáme na pripravený hlas
                try {
                    const voice = await voicePromise;
                    utterance.voice = voice;
                } catch (error) {
                    console.warn("Nepodarilo sa načítať hlas z voicePromise:", error);
                }
            }
            
            utterance.lang = lang;
            utterance.rate = 0.9;
            
            window.speechSynthesis.speak(utterance);

        } catch (error) {
            console.error("Chyba pri prehrávaní zvuku:", error);
            // Fallback, ak by sa hlas nenašiel - skúsi to s predvoleným nastavením
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
            alert("Nepodarilo sa načítať špecifický francúzsky hlas. Používa sa predvolený hlas prehliadača.");
        }
    }


    // --- SEKCE 1: ZOZNAM SLOVÍČOK ---
    const wordListContainer = document.getElementById('word-list-container');
    const modal = document.getElementById('word-card-modal');
    const modalContent = document.getElementById('modal-card-inner');
    const closeModal = document.querySelector('.close-modal');

    function createWordCard(word, index) {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.dataset.index = index;

        card.innerHTML = `
            <div class="word-card-fr">${word.fr}</div>
            <div class="word-card-sk">${Array.isArray(word.sk) ? word.sk.join(', ') : word.sk}</div>
            <i class="fas fa-volume-up speaker-icon" data-word="${word.fr}"></i>
        `;
        
        // Kliknutie na kartu (nie na ikonu) otvorí modal
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('speaker-icon')) {
                openModal(word);
            }
        });

        // Kliknutie na ikonu reproduktora
        card.querySelector('.speaker-icon').addEventListener('click', (e) => {
            e.stopPropagation(); // Zastaví propagáciu, aby sa neotvoril modal
            speak(e.target.dataset.word);
        });

        wordListContainer.appendChild(card);
    }

    function openModal(word) {
        // Bezpečné ošetrenie apostrofov pre vloženie do HTML onclick atribútu
        const safeWordFr = word.fr.replace(/'/g, "\\'");
        const safeSentenceFr = word.sentence_fr.replace(/'/g, "\\'");

        modalContent.innerHTML = `
            <div class="modal-card" id="modal-flipper">
                <div class="modal-card-face modal-card-front">
                    <div class="close-card-button"></div>
                    <h3 class="modal-card-fr-big">${word.fr}</h3>
                    <p class="modal-card-sk-big">${Array.isArray(word.sk) ? word.sk.join(', ') : word.sk}</p>
                    <i class="fas fa-volume-up speaker-icon" onclick="event.stopPropagation(); window.speak('${safeWordFr}')"></i>
                </div>
                <div class="modal-card-face modal-card-back">
                    <div class="close-card-button"></div>
                    <p class="modal-card-sentence-fr">"${word.sentence_fr}"</p>
                    <p class="modal-card-sentence-sk">"${word.sentence_sk}"</p>
                    <i class="fas fa-volume-up speaker-icon" onclick="event.stopPropagation(); window.speak('${safeSentenceFr}')"></i>
                </div>
            </div>
        `;
        modal.style.display = 'block';
        
        // Pridanie funkcionality pre nový krížik
        modalContent.querySelectorAll('.close-card-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Zastaví otáčanie karty
                modal.style.display = "none";
            });
        });

        document.getElementById('modal-flipper').addEventListener('click', function(e) {
            // Otočí kartu len ak sa nekliklo na interaktívny prvok
            if (!e.target.classList.contains('speaker-icon') && !e.target.classList.contains('close-card-button')) {
                this.classList.toggle('is-flipped');
            }
        });
    }

    closeModal.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
    // Globálna funkcia pre onclick v modale
    window.speak = speak;


    // --- SEKCE 2: FLASHCARDS ---
    const flashcard = document.querySelector('.flashcard');
    const flashcardInner = document.querySelector('.flashcard-inner');
    const flashcardFront = document.querySelector('.flashcard-front');
    const flashcardBack = document.querySelector('.flashcard-back');
    const prevBtn = document.getElementById('prev-flashcard');
    const nextBtn = document.getElementById('next-flashcard');
    const speakBtn = document.getElementById('speak-flashcard');
    let currentCardIndex = 0;
    
    function showFlashcard(index) {
        const word = wordData[index];
        flashcardFront.textContent = word.fr;
        flashcardBack.textContent = Array.isArray(word.sk) ? word.sk.join(', ') : word.sk;
        flashcard.classList.remove('is-flipped');
    }
    
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('is-flipped');
    });

    nextBtn.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % wordData.length;
        showFlashcard(currentCardIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + wordData.length) % wordData.length;
        showFlashcard(currentCardIndex);
    });
    
    speakBtn.addEventListener('click', () => {
        speak(wordData[currentCardIndex].fr);
    });
    
    
    // --- SEKCE 3: UČIŤ SA ---
    const presentationBtns = document.querySelectorAll('.presentation-btn');
    const presentationContent = document.getElementById('presentation-content');

    const presentations = {
        presentation1: `
            <h3>Použitie francúzskych členov</h3>
            <p>Vo francúzštine, na rozdiel od slovenčiny, sa pred podstatnými menami takmer vždy používa člen. Členy nám hovoria o rode (mužský/ženský) a čísle (jednotné/množné) podstatného mena.</p>
            
            <h4>Neurčité členy (Articles indéfinis)</h4>
            <p>Používajú sa, keď hovoríme o niečom všeobecnom, neurčitom alebo prvýkrát spomínanom.</p>
            <ul>
                <li><b>UN</b> (mužský rod, jednotné číslo): <code>un garçon</code> (chlapec), <code>un livre</code> (kniha)</li>
                <li><b>UNE</b> (ženský rod, jednotné číslo): <code>une fille</code> (dievča), <code>une table</code> (stôl)</li>
                <li><b>DES</b> (množné číslo pre oba rody): <code>des garçons</code> (chlapci), <code>des filles</code> (dievčatá)</li>
            </ul>
            <p>V záporných vetách sa <code>un, une, des</code> menia na <b>DE</b> (alebo <b>D'</b> pred samohláskou): <i>Je n'ai pas <b>de</b> livre.</i></p>

            <h4>Určité členy (Articles définis)</h4>
            <p>Používajú sa, keď hovoríme o konkrétnej, známej veci alebo o niečom, čo sme už spomenuli.</p>
            <ul>
                <li><b>LE</b> (mužský rod, jednotné číslo): <code>le garçon</code> (ten chlapec)</li>
                <li><b>LA</b> (ženský rod, jednotné číslo): <code>la fille</code> (to dievča)</li>
                <li><b>L'</b> (pred slovom začínajúcim samohláskou alebo nemým 'h'): <code>l'ami</code> (ten kamarát), <code>l'hôtel</code> (ten hotel)</li>
                <li><b>LES</b> (množné číslo pre oba rody): <code>les garçons</code> (tí chlapci), <code>les filles</code> (tie dievčatá)</li>
            </ul>

            <h4>Delivé členy (Articles partitifs)</h4>
            <p>Používajú sa na vyjadrenie neurčitého množstva niečoho, čo sa nedá presne spočítať (napr. jedlo, tekutiny).</p>
            <ul>
                <li><b>DU</b> (de + le): <code>du pain</code> (chlieb, nejaký chlieb)</li>
                <li><b>DE LA</b>: <code>de la confiture</code> (džem, nejaký džem)</li>
                <li><b>DE L'</b>: <code>de l'eau</code> (voda, nejaká voda)</li>
                <li><b>DES</b>: (používa sa pre množné číslo počítateľných vecí, ale v zmysle "nejaké")</li>
            </ul>
            <p>V záporných vetách sa tiež menia na <b>DE</b>: <i>Je ne veux pas <b>de</b> café.</i></p>
        `,
        presentation2: `
            <h3>Slová z "Maison d'être" používané s AVOIR v Passé Composé</h3>
            <p>Väčšina pohybových slovies a slovies zmeny stavu, známych ako "domček slovies" alebo "Dr Mrs Vandertramp", sa v minulom čase (Passé Composé) časuje s pomocným slovesom <b>ÊTRE</b>.</p>
            <p>Existuje však niekoľko z týchto slovies, ktoré môžu byť použité aj s pomocným slovesom <b>AVOIR</b>. V takom prípade sa mení ich význam - stávajú sa <b>prechodnými</b>, čo znamená, že majú priamy predmet (niekoho/niečo).</p>

            <p>Kľúčová otázka je: Robí podmet činnosť <b>sám sebe / sám od seba</b> (použijeme ÊTRE), alebo činnosť vykonáva <b>na niekom/niečom inom</b> (použijeme AVOIR)?</p>

            <table>
              <tr>
                <th>Sloveso</th>
                <th>Použitie s ÊTRE (neprechodné)</th>
                <th>Použitie s AVOIR (prechodné)</th>
              </tr>
              <tr>
                <td><b>Monter</b> (ísť hore, stúpať)</td>
                <td>Elle <b>est montée</b> au troisième étage.<br><i>(Išla hore na tretie poschodie.)</i></td>
                <td>Elle <b>a monté</b> la valise.<br><i>(Vyniesla hore kufor.)</i></td>
              </tr>
              <tr>
                <td><b>Descendre</b> (ísť dole, zostúpiť)</td>
                <td>Il <b>est descendu</b> par l'escalier.<br><i>(Zišiel dole po schodoch.)</i></td>
                <td>Il <b>a descendu</b> la poubelle.<br><i>(Zniesol dole smeti.)</i></td>
              </tr>
              <tr>
                <td><b>Sortir</b> (ísť von, odísť)</td>
                <td>Je <b>suis sorti(e)</b> avec des amis.<br><i>(Išiel/Išla som von s priateľmi.)</i></td>
                <td>J'<b>ai sorti</b> le chien.<br><i>(Vyvenčil/a som psa.)</i></td>
              </tr>
              <tr>
                <td><b>Rentrer</b> (vrátiť sa domov)</td>
                <td>Nous <b>sommes rentrés</b> tard.<br><i>(Vrátili sme sa domov neskoro.)</i></td>
                <td>Il <b>a rentré</b> la voiture au garage.<br><i>(Dal auto do garáže.)</i></td>
              </tr>
              <tr>
                <td><b>Passer</b> (prejsť okolo)</td>
                <td>Le bus <b>est passé</b> devant moi.<br><i>(Autobus prešiel okolo mňa.)</i></td>
                <td>J'<b>ai passé</b> un bon week-end.<br><i>(Strávil/a som dobrý víkend.)</i></td>
              </tr>
               <tr>
                <td><b>Retourner</b> (vrátiť sa niekam)</td>
                <td>Elle <b>est retournée</b> en France.<br><i>(Vrátila sa do Francúzska.)</i></td>
                <td>Il <b>a retourné</b> le livre à la bibliothèque.<br><i>(Vrátil knihu do knižnice.)</i></td>
              </tr>
            </table>
            <p>Zapamätajte si: Ak za slovesom nasleduje priamy predmet (odpovedá na otázku "koho? čo?"), použite <b>AVOIR</b>. Ak nie, použite <b>ÊTRE</b>.</p>
        `
    };

    function showPresentation(id) {
        presentationContent.innerHTML = presentations[id];
        presentationBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.presentation === id);
        });
    }

    presentationBtns.forEach(button => {
        button.addEventListener('click', () => {
            showPresentation(button.dataset.presentation);
        });
    });


    // --- SEKCE 4: CVIČENIA ---
    const exerciseQuestionEl = document.getElementById('exercise-question');
    const exerciseOptionsEl = document.getElementById('exercise-options');
    const checkAnswerBtn = document.getElementById('check-answer-btn');
    const feedbackEl = document.getElementById('exercise-feedback');
    const feedbackTextEl = document.getElementById('feedback-text');
    const feedbackExplanationEl = document.getElementById('feedback-explanation');
    const nextExerciseBtn = document.getElementById('next-exercise-btn');

    const exercises = [
        {
            question: "Je ne veux pas ___ café, merci.",
            options: ["du", "de", "le"],
            correct: "de",
            explanation: "V záporných vetách sa delivý člen 'du' mení na 'de'."
        },
        {
            question: "Elle ___ la valise dans sa chambre.",
            options: ["est montée", "a monté"],
            correct: "a monté",
            explanation: "Sloveso 'monter' sa používa s 'avoir', keď má priamy predmet (vyniesla ČO? -> kufor)."
        },
        {
            question: "Hier, nous ___ au cinéma.",
            options: ["sommes allés", "avons allé"],
            correct: "sommes allés",
            explanation: "Sloveso 'aller' (ísť) je pohybové sloveso z 'Maison d'être' a vždy sa časuje s 'être'."
        },
        {
            question: "Achetons ___ pain pour le dîner.",
            options: ["le", "de", "du"],
            correct: "du",
            explanation: "Používame delivý člen 'du' na vyjadrenie neurčitého množstva nepočítateľného podstatného mena (chlieb)."
        }
    ];

    let currentExerciseIndex = 0;
    let selectedAnswer = null;

    function loadExercise(index) {
        const ex = exercises[index];
        exerciseQuestionEl.innerHTML = ex.question.replace('___', '<span class="blank"></span>');
        exerciseOptionsEl.innerHTML = '';
        ex.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => {
                selectedAnswer = option;
                // Vizuálne označenie vybranej odpovede
                document.querySelectorAll('.option-btn').forEach(b => b.style.backgroundColor = 'var(--french-white)');
                btn.style.backgroundColor = 'var(--light-gray)';
            });
            exerciseOptionsEl.appendChild(btn);
        });
        
        feedbackEl.classList.add('feedback-hidden');
        checkAnswerBtn.style.display = 'block';
        nextExerciseBtn.style.display = 'none';
        selectedAnswer = null;
    }

    checkAnswerBtn.addEventListener('click', () => {
        if (selectedAnswer === null) {
            alert("Prosím, vyberte odpoveď.");
            return;
        }

        const ex = exercises[currentExerciseIndex];
        feedbackEl.classList.remove('feedback-hidden', 'correct', 'incorrect');
        
        if (selectedAnswer === ex.correct) {
            feedbackEl.classList.add('correct');
            feedbackTextEl.textContent = "Správne!";
            feedbackTextEl.className = 'correct';
            feedbackExplanationEl.textContent = ex.explanation;
        } else {
            feedbackEl.classList.add('incorrect');
            feedbackTextEl.textContent = "Nesprávne.";
            feedbackTextEl.className = 'incorrect';
            const correctAnswerText = `Správna odpoveď je "${ex.correct}".`;
            feedbackExplanationEl.textContent = `${correctAnswerText} ${ex.explanation}`;
        }
        
        checkAnswerBtn.style.display = 'none';
        nextExerciseBtn.style.display = 'block';
    });

    nextExerciseBtn.addEventListener('click', () => {
        currentExerciseIndex = (currentExerciseIndex + 1) % exercises.length;
        loadExercise(currentExerciseIndex);
    });


    // --- SEKCIA NASTAVENÍ ---
    const voiceSelect = document.getElementById('voice-select');
    const testVoiceBtn = document.getElementById('test-voice-btn');
    const voiceDefaultOption = voiceSelect.querySelector('.default-option');

    let savedVoiceId = localStorage.getItem('selectedVoiceId');
    let availableVoices = [];

    // Funkcia na naplnenie dropdown menu dostupnými francúzskymi hlasmi
    function populateVoiceSelector() {
        const voices = window.speechSynthesis.getVoices();
        const frenchVoices = voices.filter(voice => voice.lang.startsWith('fr'));
        availableVoices = frenchVoices;

        // Vymaž existujúce možnosti (okrem predvolenej)
        const existingOptions = voiceSelect.querySelectorAll('option:not(.default-option)');
        existingOptions.forEach(option => option.remove());

        if (frenchVoices.length === 0) {
            voiceDefaultOption.textContent = 'Žiadne francúzske hlasy nie sú dostupné';
            testVoiceBtn.disabled = true;
            return;
        }

        // Pridaj francúzske hlasy do dropdown
        frenchVoices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            option.dataset.voiceIndex = index;
            voiceSelect.appendChild(option);
        });

        // Nastav uložený hlas alebo predvolený
        if (savedVoiceId && frenchVoices.some(voice => voice.name === savedVoiceId)) {
            voiceSelect.value = savedVoiceId;
        } else {
            // Ak nie je uložený hlas, nastav prvý dostupný
            voiceSelect.value = frenchVoices[0].name;
            savedVoiceId = frenchVoices[0].name;
            localStorage.setItem('selectedVoiceId', savedVoiceId);
        }

        testVoiceBtn.disabled = false;
        updateSelectedVoice();
    }

    // Funkcia na aktualizáciu vybraného hlasu
    function updateSelectedVoice() {
        const selectedVoiceName = voiceSelect.value;
        if (selectedVoiceName && selectedVoiceName !== 'default') {
            const selectedVoice = availableVoices.find(voice => voice.name === selectedVoiceName);
            if (selectedVoice) {
                frenchVoice = selectedVoice;
                savedVoiceId = selectedVoiceName;
                localStorage.setItem('selectedVoiceId', savedVoiceId);
                console.log(`Hlas zmenený na: ${selectedVoice.name}`);
            }
        }
    }

    // Event listenery pre nastavenia hlasu
    voiceSelect.addEventListener('change', updateSelectedVoice);

    testVoiceBtn.addEventListener('click', () => {
        const testText = "Bonjour ! Ceci est un test de prononciation française.";
        speak(testText);
    });

    // Naplň voice selector po načítaní hlasov
    if (window.speechSynthesis.getVoices().length > 0) {
        populateVoiceSelector();
    } else {
        window.speechSynthesis.onvoiceschanged = () => {
            populateVoiceSelector();
        };
    }

    // --- INICIALIZÁCIA APLIKÁCIE ---
    function initialize() {
        // Generuj karty so slovíčkami
        wordData.forEach(createWordCard);
        
        // Zobraz prvú flashcard
        if (wordData.length > 0) {
            showFlashcard(currentCardIndex);
        }
        
        // Zobraz prvú prezentáciu
        showPresentation('presentation1');

        // Načítaj prvé cvičenie
        if (exercises.length > 0) {
            loadExercise(currentExerciseIndex);
        }
    }

    initialize();

});