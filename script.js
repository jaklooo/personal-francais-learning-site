document.addEventListener('DOMContentLoaded', () => {

    // --- DATABÁZA SLOVÍČOK S KATEGÓRIAMI ---
    const categories = {
        'favorites': {
            name: 'Zopakuj si ⭐',
            description: 'Vaše označené slovíčka na opakovanie',
            color: '#FFD700'  // Zlatá farba
        },
        'b1-intensif': {
            name: 'B1+ Intensif',
            description: 'Pokročilá slovná zásoba pre úroveň B1 a vyššie',
            color: '#2E7D8A'
        }
    };

    const wordData = [
        { fr: "la lumière", sk: ["svetlo", "osvetlenie"], sentence_fr: "Peux-tu allumer la lumière, s'il te plaît ?", sentence_sk: "Môžeš, prosím, zapnúť svetlo?", category: 'b1-intensif' },
        { fr: "baisser", sk: ["znížiť", "stíšiť", "skloniť"], sentence_fr: "Il faut baisser le son de la musique.", sentence_sk: "Treba stíšiť hudbu.", category: 'b1-intensif' },
        { fr: "diminuer", sk: ["zmenšiť", "znížiť"], sentence_fr: "Le nombre de participants a diminué.", sentence_sk: "Počet účastníkov sa znížil.", category: 'b1-intensif' },
        { fr: "trier les déchets", sk: ["triediť odpad"], sentence_fr: "Il est important de trier les déchets pour le recyclage.", sentence_sk: "Pre recykláciu je dôležité triediť odpad.", category: 'b1-intensif' },
        { fr: "l'emballage", sk: ["obal"], sentence_fr: "Jette l'emballage dans la poubelle jaune.", sentence_sk: "Hoď obal do žltého koša.", category: 'b1-intensif' },
        { fr: "recyclable", sk: ["recyklovateľný"], sentence_fr: "Ce carton est recyclable.", sentence_sk: "Tento kartón je recyklovateľný.", category: 'b1-intensif' },
        { fr: "dégradable", sk: ["rozložiteľný"], sentence_fr: "J'utilise des sacs dégradables.", sentence_sk: "Používam rozložiteľné tašky.", category: 'b1-intensif' },
        { fr: "les produits locaux", sk: ["miestne produkty"], sentence_fr: "J'achète des produits locaux au marché.", sentence_sk: "Na trhu kupujem miestne produkty.", category: 'b1-intensif' },
        { fr: "se déplacer", sk: ["presúvať sa", "pohybovať sa"], sentence_fr: "Je préfère me déplacer à vélo en ville.", sentence_sk: "V meste sa najradšej presúvam na bicykli.", category: 'b1-intensif' },
        { fr: "un déplacement", sk: ["presun", "cestovanie"], sentence_fr: "C'est un déplacement professionnel.", sentence_sk: "Toto je pracovná cesta.", category: 'b1-intensif' },
        { fr: "propre", sk: ["čistý"], sentence_fr: "Ma chambre est toujours propre.", sentence_sk: "Moja izba je vždy čistá.", category: 'b1-intensif' },
        { fr: "sale", sk: ["špinavý"], sentence_fr: "Tes chaussures sont sales.", sentence_sk: "Tvoje topánky sú špinavé.", category: 'b1-intensif' },
        { fr: "réfléchir", sk: ["premýšľať", "rozmýšľať"], sentence_fr: "Je dois réfléchir à ta proposition.", sentence_sk: "Musím premýšľať o tvojom návrhu.", category: 'b1-intensif' },
        { fr: "surtout", sk: ["hlavne", "predovšetkým"], sentence_fr: "J'aime les fruits, surtout les fraises.", sentence_sk: "Mám rád ovocie, hlavne jahody.", category: 'b1-intensif' },
        { fr: "sauvage", sk: ["divoký", "divý"], sentence_fr: "On a vu un animal sauvage dans la forêt.", sentence_sk: "V lese sme videli divoké zviera.", category: 'b1-intensif' },
        { fr: "une promesse", sk: ["sľub"], sentence_fr: "Il a fait une promesse à son ami.", sentence_sk: "Dal sľub svojmu kamarátovi.", category: 'b1-intensif' },
        // ... a takto by pokračoval celý zoznam viac ako 200 slovíčok.
        // V plnom kóde budú pridané všetky slová, ktoré ste uviedli.
        { fr: "le fossé", sk: ["priekopa", "jama"], sentence_fr: "La voiture est tombée dans le fossé.", sentence_sk: "Auto spadlo do priekopy.", category: 'b1-intensif' },
        { fr: "mélanger", sk: ["miešať", "zmiešať"], sentence_fr: "Il faut bien mélanger la salade.", sentence_sk: "Treba dobre premiešať šalát.", category: 'b1-intensif' },
        { fr: "menacer", sk: ["vyhrážať sa", "ohrozovať"], sentence_fr: "La pollution menace notre planète.", sentence_sk: "Znečistenie ohrozuje našu planétu.", category: 'b1-intensif' },
        { fr: "une menace", sk: ["hrozba"], sentence_fr: "C'est une menace sérieuse pour la sécurité.", sentence_sk: "Je to vážna bezpečnostná hrozba.", category: 'b1-intensif' },
        { fr: "gâcher", sk: ["mrhať", "p kaziť"], sentence_fr: "Ne va pas gâcher cette opportunité.", sentence_sk: "Nepremárni túto príležitosť.", category: 'b1-intensif' },
        { fr: "tout à coup", sk: ["zrazu", "náhle"], sentence_fr: "Tout à coup, la pluie a commencé à tomber.", sentence_sk: "Zrazu začalo pršať.", category: 'b1-intensif' },
        { fr: "des prix modérés", sk: ["mierne ceny"], sentence_fr: "Ce restaurant propose des plats à des prix modérés.", sentence_sk: "Táto reštaurácia ponúka jedlá za mierne ceny.", category: 'b1-intensif' },
        { fr: "intact", sk: ["nedotknutý", "neporušený"], sentence_fr: "Le village est resté intact après la tempête.", sentence_sk: "Dedina zostala po búrke nedotknutá.", category: 'b1-intensif' },
        { fr: "soit", sk: ["buď", "teda"], sentence_fr: "Tu peux choisir soit le bleu, soit le rouge.", sentence_sk: "Môžeš si vybrať buď modrú, alebo červenú.", category: 'b1-intensif' },
        { fr: "le péage", sk: ["mýto"], sentence_fr: "On doit payer le péage sur cette autoroute.", sentence_sk: "Na tejto diaľnici musíme platiť mýto.", category: 'b1-intensif' },
        { fr: "auquel", sk: ["ktorému", "na ktorý"], sentence_fr: "C'est le projet auquel je participe.", sentence_sk: "Toto je projekt, na ktorom sa podieľam.", category: 'b1-intensif' },
        { fr: "l'essence", sk: ["benzín"], sentence_fr: "Je dois mettre de l'essence dans la voiture.", sentence_sk: "Musím natankovať benzín do auta.", category: 'b1-intensif' },
        { fr: "l'usure", sk: ["opotrebenie"], sentence_fr: "L'usure des pneus est normale.", sentence_sk: "Opotrebenie pneumatík je normálne.", category: 'b1-intensif' },
        { fr: "un véhicule", sk: ["vozidlo"], sentence_fr: "Un véhicule de police est arrivé sur les lieux.", sentence_sk: "Na miesto dorazilo policajné vozidlo.", category: 'b1-intensif' },
        { fr: "une liaison", sk: ["spojenie", "vzťah"], sentence_fr: "Il y a une bonne liaison de train entre les deux villes.", sentence_sk: "Medzi oboma mestami je dobré vlakové spojenie.", category: 'b1-intensif' },
        { fr: "un lien", sk: ["odkaz", "puto"], sentence_fr: "Clique sur ce lien pour voir la vidéo.", sentence_sk: "Klikni na tento odkaz pre zobrazenie videa.", category: 'b1-intensif' },
        { fr: "relier", sk: ["spojiť", "prepájať"], sentence_fr: "Ce pont va relier les deux rives.", sentence_sk: "Tento most spojí oba brehy.", category: 'b1-intensif' },
        { fr: "quelque part", sk: ["niekde"], sentence_fr: "Mes clés doivent être quelque part ici.", sentence_sk: "Moje kľúče musia byť niekde tu.", category: 'b1-intensif' },
        { fr: "nulle part", sk: ["nikde"], sentence_fr: "Je ne trouve mon téléphone nulle part.", sentence_sk: "Nikde neviem nájsť svoj telefón.", category: 'b1-intensif' },
        { fr: "lourd", sk: ["ťažký"], sentence_fr: "Ce sac est très lourd.", sentence_sk: "Táto taška je veľmi ťažká.", category: 'b1-intensif' },
        { fr: "léger", sk: ["ľahký"], sentence_fr: "Je cherche un repas léger pour ce soir.", sentence_sk: "Hľadám ľahké jedlo na večer.", category: 'b1-intensif' },
        { fr: "doux", sk: ["jemný", "sladký", "mäkký"], sentence_fr: "Ce pull est très doux.", sentence_sk: "Tento sveter je veľmi jemný.", category: 'b1-intensif' },
        { fr: "fin", sk: ["tenký", "jemný"], sentence_fr: "Elle a les cheveux très fins.", sentence_sk: "Má veľmi jemné vlasy.", category: 'b1-intensif' },
        { fr: "mince", sk: ["štíhly"], sentence_fr: "Il est grand et mince.", sentence_sk: "Je vysoký a štíhly.", category: 'b1-intensif' },
        { fr: "épais", sk: ["hrubý"], sentence_fr: "J'ai besoin d'un manteau épais pour l'hiver.", sentence_sk: "Na zimu potrebujem hrubý kabát.", category: 'b1-intensif' },
        { fr: "maigre", sk: ["chudý"], sentence_fr: "Le chat est un peu maigre.", sentence_sk: "Tá mačka je trochu chudá.", category: 'b1-intensif' },
        { fr: "gros", sk: ["veľký", "tučný"], sentence_fr: "C'est un gros problème.", sentence_sk: "To je veľký problém.", category: 'b1-intensif' },
        { fr: "grossier", sk: ["hrubý", "neslušný"], sentence_fr: "Son comportement était vraiment grossier.", sentence_sk: "Jeho správanie bolo naozaj hrubé.", category: 'b1-intensif' },
        { fr: "l'hébergement", sk: ["ubytovanie"], sentence_fr: "Avez-vous trouvé un hébergement pour les vacances ?", sentence_sk: "Našli ste si ubytovanie na prázdniny?", category: 'b1-intensif' },
        { fr: "respirer", sk: ["dýchať"], sentence_fr: "Il est important de bien respirer.", sentence_sk: "Je dôležité správne dýchať.", category: 'b1-intensif' },
        { fr: "bouffer", sk: ["jesť (hovorovo)"], sentence_fr: "On va bouffer quoi ce soir ?", sentence_sk: "Čo budeme dnes večer jesť?", category: 'b1-intensif' },
        { fr: "saisir", sk: ["chytiť", "uchopiť"], sentence_fr: "Il faut saisir cette chance.", sentence_sk: "Treba sa chopiť tejto šance.", category: 'b1-intensif' },
        { fr: "se diriger", sk: ["smerovať", "ísť smerom"], sentence_fr: "Le groupe se dirige vers la sortie.", sentence_sk: "Skupina smeruje k východu.", category: 'b1-intensif' },
        { fr: "soigneusement", sk: ["starostlivo", "opatrne"], sentence_fr: "Emballez-le soigneusement.", sentence_sk: "Zabaľte to starostlivo.", category: 'b1-intensif' },
        { fr: "même en plein hiver", sk: ["dokonca aj uprostred zimy"], sentence_fr: "Il fait du jogging même en plein hiver.", sentence_sk: "Behá dokonca aj uprostred zimy.", category: 'b1-intensif' },
        { fr: "d'ailleurs", sk: ["mimochodom", "ostatne"], sentence_fr: "J'aime ce film. D'ailleurs, je l'ai vu trois fois.", sentence_sk: "Mám rád tento film. Mimochodom, videl som ho trikrát.", category: 'b1-intensif' },
        { fr: "la facette", sk: ["stránka", "aspekt"], sentence_fr: "C'est une autre facette de sa personnalité.", sentence_sk: "To je ďalšia stránka jeho osobnosti.", category: 'b1-intensif' },
        { fr: "transpirer", sk: ["potiť sa"], sentence_fr: "Je transpire beaucoup quand il fait chaud.", sentence_sk: "Veľmi sa potím, keď je teplo.", category: 'b1-intensif' },
        { fr: "un parka", sk: ["parka", "bunda"], sentence_fr: "Mets ton parka, il fait froid dehors.", sentence_sk: "Obleč si parku, vonku je zima.", category: 'b1-intensif' },
        { fr: "une fermeture Éclair", sk: ["zips"], sentence_fr: "La fermeture Éclair de ma veste est cassée.", sentence_sk: "Zips na mojej bunde je pokazený.", category: 'b1-intensif' },
        { fr: "geler", sk: ["mrznúť"], sentence_fr: "L'eau va geler cette nuit.", sentence_sk: "Voda dnes v noci zamrzne.", category: 'b1-intensif' },
        { fr: "ainsi de suite", sk: ["a tak ďalej"], sentence_fr: "On a mangé, dansé, chanté, et ainsi de suite.", sentence_sk: "Jedli sme, tancovali, spievali a tak ďalej.", category: 'b1-intensif' },
        { fr: "épargner", sk: ["šetriť", "ušetriť"], sentence_fr: "J'essaie d'épargner de l'argent chaque mois.", sentence_sk: "Snažím sa každý mesiac ušetriť peniaze.", category: 'b1-intensif' },
        { fr: "bien entendu", sk: ["samozrejme"], sentence_fr: "Bien entendu, vous pouvez venir.", sentence_sk: "Samozrejme, môžete prísť.", category: 'b1-intensif' },
        { fr: "devancer", sk: ["predbehnúť"], sentence_fr: "Le coureur a devancé tous ses concurrents.", sentence_sk: "Bežec predbehol všetkých svojich súperov.", category: 'b1-intensif' },
        { fr: "branché", sk: ["moderný", "trendy"], sentence_fr: "C'est un café très branché.", sentence_sk: "Je to veľmi moderná kaviareň.", category: 'b1-intensif' },
        { fr: "jouir du soleil", sk: ["užívať si slnko"], sentence_fr: "Allons à la plage pour jouir du soleil.", sentence_sk: "Poďme na pláž užiť si slnko.", category: 'b1-intensif' },
        { fr: "trempé", sk: ["premočený"], sentence_fr: "Je suis rentré trempé à cause de la pluie.", sentence_sk: "Vrátil som sa domov premočený kvôli dažďu.", category: 'b1-intensif' },
        { fr: "être mouillé", sk: ["byť mokrý"], sentence_fr: "Mes cheveux sont encore mouillés.", sentence_sk: "Moje vlasy sú ešte mokré.", category: 'b1-intensif' },
        { fr: "se livrer", sk: ["oddať sa", "venovať sa"], sentence_fr: "Il aime se livrer à la lecture le soir.", sentence_sk: "Večer sa rád oddáva čítaniu.", category: 'b1-intensif' },
        { fr: "jurer", sk: ["prisahať", "nadávať"], sentence_fr: "Je te jure que je dis la vérité.", sentence_sk: "Prisahám ti, že hovorím pravdu.", category: 'b1-intensif' },
        { fr: "durer", sk: ["trvať"], sentence_fr: "Le film va durer deux heures.", sentence_sk: "Film bude trvať dve hodiny.", category: 'b1-intensif' },
        { fr: "le sommeil", sk: ["spánok"], sentence_fr: "Le sommeil est essentiel pour la santé.", sentence_sk: "Spánok je nevyhnutný pre zdravie.", category: 'b1-intensif' },
        { fr: "défiler", sk: ["prechádzať (v zástupe)", "posúvať"], sentence_fr: "Fais défiler les photos sur l'écran.", sentence_sk: "Posúvaj fotky na obrazovke.", category: 'b1-intensif' },
        { fr: "la messagerie", sk: ["odkazová schránka", "správy"], sentence_fr: "J'ai un nouveau message sur ma messagerie.", sentence_sk: "Mám novú správu v schránke.", category: 'b1-intensif' },
        { fr: "percevoir", sk: ["vnímať"], sentence_fr: "Je commence à percevoir un changement.", sentence_sk: "Začínam vnímať zmenu.", category: 'b1-intensif' },
        { fr: "un siècle", sk: ["storočie"], sentence_fr: "Nous vivons au 21ème siècle.", sentence_sk: "Žijeme v 21. storočí.", category: 'b1-intensif' },
        { fr: "discrètement", sk: ["diskrétne", "nenápadne"], sentence_fr: "Il est parti discrètement.", sentence_sk: "Odišiel nenápadne.", category: 'b1-intensif' },
        { fr: "réussir ses vacances", sk: ["mať vydarenú dovolenku"], sentence_fr: "Avec ce beau temps, on va réussir nos vacances.", sentence_sk: "S týmto pekným počasím budeme mať vydarenú dovolenku.", category: 'b1-intensif' },
        { fr: "l'intention", sk: ["úmysel"], sentence_fr: "Je n'avais pas l'intention de te blesser.", sentence_sk: "Nemal som v úmysle ti ublížiť.", category: 'b1-intensif' },
        { fr: "un avis", sk: ["názor"], sentence_fr: "Quel est ton avis sur la question ?", sentence_sk: "Aký je tvoj názor na túto otázku?", category: 'b1-intensif' },
        { fr: "le char à voile", sk: ["plážová plachetnica"], sentence_fr: "Faire du char à voile sur la plage est excitant.", sentence_sk: "Jazdiť na plážovej plachetnici je vzrušujúce.", category: 'b1-intensif' },
        { fr: "les sports de glisse", sk: ["šmykľavé/boardové športy"], sentence_fr: "Le surf et le snowboard sont des sports de glisse.", sentence_sk: "Surfovanie a snowboarding sú boardové športy.", category: 'b1-intensif' },
        { fr: "bouger", sk: ["hýbať sa"], sentence_fr: "Il faut bouger pour rester en forme.", sentence_sk: "Pre udržanie kondície sa treba hýbať.", category: 'b1-intensif' },
        { fr: "le son", sk: ["zvuk"], sentence_fr: "Le son de la mer est relaxant.", sentence_sk: "Zvuk mora je relaxačný.", category: 'b1-intensif' },
        { fr: "entourer", sk: ["obklopiť", "obkolesiť"], sentence_fr: "La maison est entourée d'un grand jardin.", sentence_sk: "Dom je obklopený veľkou záhradou.", category: 'b1-intensif' },
        { fr: "la ferme", sk: ["farma"], sentence_fr: "Les enfants ont visité la ferme.", sentence_sk: "Deti navštívili farmu.", category: 'b1-intensif' },
        { fr: "le port de pêche", sk: ["rybársky prístav"], sentence_fr: "On peut acheter du poisson frais au port de pêche.", sentence_sk: "V rybárskom prístave sa dá kúpiť čerstvá ryba.", category: 'b1-intensif' },
        { fr: "un drapeau", sk: ["vlajka"], sentence_fr: "Le drapeau français est bleu, blanc, rouge.", sentence_sk: "Francúzska vlajka je modrá, biela, červená.", category: 'b1-intensif' },
        { fr: "cocher", sk: ["zaškrtnúť", "označiť"], sentence_fr: "Veuillez cocher la case correspondante.", sentence_sk: "Prosím, zaškrtnite príslušné políčko.", category: 'b1-intensif' },
        { fr: "la planche à voile", sk: ["windsurfing"], sentence_fr: "J'apprends à faire de la planche à voile.", sentence_sk: "Učím sa windsurfing.", category: 'b1-intensif' },
        { fr: "la randonnée", sk: ["turistika", "túra"], sentence_fr: "Nous avons fait une belle randonnée en montagne.", sentence_sk: "Urobili sme si peknú túru v horách.", category: 'b1-intensif' },
        { fr: "visionner", sk: ["pozrieť si (film)"], sentence_fr: "On va visionner un film ce soir.", sentence_sk: "Dnes večer si pozrieme film.", category: 'b1-intensif' },
        { fr: "la colonne", sk: ["stĺpec", "stĺp"], sentence_fr: "Écris ton nom dans la première colonne.", sentence_sk: "Napíš svoje meno do prvého stĺpca.", category: 'b1-intensif' },
        { fr: "la glisse", sk: ["šmyk", "kĺzanie"], sentence_fr: "Attention à la glisse sur le sol mouillé.", sentence_sk: "Pozor na pošmyknutie na mokrej podlahe.", category: 'b1-intensif' },
        { fr: "ci-dessous", sk: ["nižšie", "dolu"], sentence_fr: "Vous trouverez plus d'informations ci-dessous.", sentence_sk: "Viac informácií nájdete nižšie.", category: 'b1-intensif' },
        { fr: "le port de plaisance", sk: ["prístav jácht"], sentence_fr: "Le port de plaisance est plein de beaux bateaux.", sentence_sk: "Prístav jácht je plný krásnych lodí.", category: 'b1-intensif' },
        { fr: "la forêt enchantée", sk: ["začarovaný les"], sentence_fr: "Le conte parle d'une forêt enchantée.", sentence_sk: "Rozprávka hovorí o začarovanom lese.", category: 'b1-intensif' },
        { fr: "un îlot", sk: ["ostrovček"], sentence_fr: "On a pique-niqué sur un petit îlot.", sentence_sk: "Urobili sme si piknik na malom ostrovčeku.", category: 'b1-intensif' },
        { fr: "sensibiliser", sk: ["zvyšovať povedomie", "scitlivieť"], sentence_fr: "Cette campagne vise à sensibiliser les jeunes au recyclage.", sentence_sk: "Cieľom tejto kampane je zvýšiť povedomie mladých o recyklácii.", category: 'b1-intensif' },
        { fr: "les remparts", sk: ["hradby"], sentence_fr: "On peut se promener sur les remparts de la vieille ville.", sentence_sk: "Po hradbách starého mesta sa dá prechádzať.", category: 'b1-intensif' },
        { fr: "les terres", sk: ["pôda", "územia"], sentence_fr: "Ce sont des terres agricoles.", sentence_sk: "Toto sú poľnohospodárske pôdy.", category: 'b1-intensif' },
        { fr: "flâner", sk: ["túlať sa", "flákať sa"], sentence_fr: "J'aime flâner dans les rues de Paris.", sentence_sk: "Rád sa túlam ulicami Paríža.", category: 'b1-intensif' },
        { fr: "l'embarquement", sk: ["nalodenie", "nástup"], sentence_fr: "L'embarquement pour le vol de Nice va commencer.", sentence_sk: "Nástup na let do Nice sa čoskoro začne.", category: 'b1-intensif' },
        { fr: "en selle", sk: ["v sedle"], sentence_fr: "Allez, en selle ! La balade à vélo nous attend.", sentence_sk: "Poďme, do sediel! Čaká nás cyklistický výlet.", category: 'b1-intensif' },
        { fr: "le cadre", sk: ["rám", "prostredie"], sentence_fr: "Le cadre de ce restaurant est magnifique.", sentence_sk: "Prostredie tejto reštaurácie je nádherné.", category: 'b1-intensif' },
        { fr: "un tee-shirt", sk: ["tričko"], sentence_fr: "Il porte un tee-shirt blanc.", sentence_sk: "Má na sebe biele tričko.", category: 'b1-intensif' },
        { fr: "éteindre", sk: ["vypnúť", "zhasnúť"], sentence_fr: "N'oublie pas d'éteindre la lumière.", sentence_sk: "Nezabudni zhasnúť svetlo.", category: 'b1-intensif' },
        { fr: "paraître", sk: ["javiť sa", "zdá sa"], sentence_fr: "Il paraît fatigué aujourd'hui.", sentence_sk: "Dnes sa zdá unavený.", category: 'b1-intensif' },
        { fr: "distraire", sk: ["rozptýliť", "zabaviť"], sentence_fr: "Cette musique me distrait de mon travail.", sentence_sk: "Táto hudba ma rozptyľuje od práce.", category: 'b1-intensif' },
        { fr: "détruire", sk: ["zničiť"], sentence_fr: "Le feu a détruit la maison.", sentence_sk: "Oheň zničil dom.", category: 'b1-intensif' },
        { fr: "souffrir", sk: ["trpieť"], sentence_fr: "Il a beaucoup souffert après son accident.", sentence_sk: "Po nehode veľmi trpel.", category: 'b1-intensif' },
        { fr: "se plaindre", sk: ["sťažovať sa"], sentence_fr: "Il se plaint tout le temps de son travail.", sentence_sk: "Stále sa sťažuje na svoju prácu.", category: 'b1-intensif' },
        { fr: "peindre", sk: ["maľovať"], sentence_fr: "J'aime peindre des paysages.", sentence_sk: "Rád maľujem krajinky.", category: 'b1-intensif' },
        { fr: "se faire plein de copains", sk: ["nájsť si veľa kamarátov"], sentence_fr: "En colonie de vacances, il est facile de se faire plein de copains.", sentence_sk: "V letnom tábore je ľahké nájsť si veľa kamarátov.", category: 'b1-intensif' },
        { fr: "se balader", sk: ["prechádzať sa"], sentence_fr: "On va se balader dans le parc.", sentence_sk: "Ideme sa prechádzať do parku.", category: 'b1-intensif' },
        { fr: "excepté", sk: ["okrem", "s výnimkou"], sentence_fr: "Tout le monde est venu, excepté Paul.", sentence_sk: "Všetci prišli, okrem Paula.", category: 'b1-intensif' },
        { fr: "se mettre au soleil", sk: ["ísť na slnko", "opaľovať sa"], sentence_fr: "J'adore me mettre au soleil sur la plage.", sentence_sk: "Zbožňujem byť na slnku na pláži.", category: 'b1-intensif' },
        { fr: "décrire", sk: ["opísať"], sentence_fr: "Pouvez-vous me décrire l'agresseur ?", sentence_sk: "Môžete mi opísať útočníka?", category: 'b1-intensif' },
        { fr: "partager", sk: ["zdieľať", "deliť sa"], sentence_fr: "Il faut apprendre à partager avec les autres.", sentence_sk: "Treba sa naučiť deliť s ostatnými.", category: 'b1-intensif' },
        { fr: "un coup", sk: ["úder", "rana", "pohárik"], sentence_fr: "Il a reçu un coup à la tête.", sentence_sk: "Dostal ranu do hlavy.", category: 'b1-intensif' },
        { fr: "une femme d'affaires", sk: ["podnikateľka"], sentence_fr: "C'est une femme d'affaires très respectée.", sentence_sk: "Je to veľmi rešpektovaná podnikateľka.", category: 'b1-intensif' },
        { fr: "vers", sk: ["smerom k", "okolo (čas)"], sentence_fr: "Il est rentré vers minuit.", sentence_sk: "Vrátil sa domov okolo poloci.", category: 'b1-intensif' },
        { fr: "la coupe du monde", sk: ["majstrovstvá sveta"], sentence_fr: "La France a gagné la coupe du monde en 2018.", sentence_sk: "Francúzsko vyhralo majstrovstvá sveta v roku 2018.", category: 'b1-intensif' },
        { fr: "la victoire", sk: ["víťazstvo"], sentence_fr: "C'est une victoire historique pour l'équipe.", sentence_sk: "Je to historické víťazstvo pre tím.", category: 'b1-intensif' },
        { fr: "être en folie", sk: ["šalieť (od radosti)"], sentence_fr: "Les supporters étaient en folie après le but.", sentence_sk: "Fanúšikovia po góle šaleli.", category: 'b1-intensif' },
        { fr: "une foule", sk: ["dav"], sentence_fr: "Il y avait une foule immense dans la rue.", sentence_sk: "Na ulici bol obrovský dav.", category: 'b1-intensif' },
        { fr: "pleurer", sk: ["plakať"], sentence_fr: "Le film était si triste qu'elle a commencé à pleurer.", sentence_sk: "Film bol taký smutný, že začala plakať.", category: 'b1-intensif' },
        { fr: "le bonheur", sk: ["šťastie"], sentence_fr: "Le bonheur se trouve dans les choses simples.", sentence_sk: "Šťastie sa nachádza v jednoduchých veciach.", category: 'b1-intensif' },
        { fr: "s'embrasser", sk: ["bozkávať sa", "objať sa"], sentence_fr: "Les amoureux se sont embrassés sur le pont.", sentence_sk: "Zamilovaní sa bozkávali na moste.", category: 'b1-intensif' },
        { fr: "retourner", sk: ["vrátiť (sa)", "otočiť"], sentence_fr: "J'ai dû retourner à la maison chercher mes clés.", sentence_sk: "Musel som sa vrátiť domov po kľúče.", category: 'b1-intensif' },
        { fr: "un interrogatoire", sk: ["výsluch"], sentence_fr: "Le suspect a subi un long interrogatoire.", sentence_sk: "Podozrivý podstúpil dlhý výsluch.", category: 'b1-intensif' },
        { fr: "un témoin", sk: ["svedok"], sentence_fr: "La police recherche un témoin de l'accident.", sentence_sk: "Polícia hľadá svedka nehody.", category: 'b1-intensif' },
        { fr: "il était assez tard", sk: ["bolo dosť neskoro"], sentence_fr: "Il était assez tard quand nous sommes partis.", sentence_sk: "Bolo dosť neskoro, keď sme odchádzali.", category: 'b1-intensif' },
        { fr: "soudain", sk: ["náhle", "zrazu"], sentence_fr: "Soudain, la lumière s'est éteinte.", sentence_sk: "Náhla zhaslo svetlo.", category: 'b1-intensif' },
        { fr: "pousser un cri", sk: ["vykríknuť", "skríknuť"], sentence_fr: "Elle a poussé un cri de surprise.", sentence_sk: "Vykríkla od prekvapenia.", category: 'b1-intensif' },
        { fr: "un fauteuil", sk: ["kreslo"], sentence_fr: "Le grand-père s'est endormi dans son fauteuil.", sentence_sk: "Starý otec zaspal vo svojom kresle.", category: 'b1-intensif' },
        { fr: "frapper", sk: ["udrieť", "klopať"], sentence_fr: "Quelqu'un frappe à la porte.", sentence_sk: "Niekto klope na dvere.", category: 'b1-intensif' },
        { fr: "s'enfuir", sk: ["ujsť", "utiecť"], sentence_fr: "Le voleur s'est enfui avant l'arrivée de la police.", sentence_sk: "Zlodej utiekol pred príchodom polície.", category: 'b1-intensif' },
        { fr: "avoir lieu", sk: ["konať sa", "odohrávať sa"], sentence_fr: "Le concert aura lieu demain soir.", sentence_sk: "Koncert sa bude konať zajtra večer.", category: 'b1-intensif' },
        { fr: "le feu", sk: ["oheň", "semafor"], sentence_fr: "Il faut s'arrêter au feu rouge.", sentence_sk: "Treba zastaviť na červenom semafore.", category: 'b1-intensif' },
        { fr: "gêner", sk: ["prekážať", "obťažovať"], sentence_fr: "Est-ce que la musique te gêne ?", sentence_sk: "Prekáža ti tá hudba?", category: 'b1-intensif' },
        { fr: "un piéton", sk: ["chodec"], sentence_fr: "La voiture s'est arrêtée pour laisser passer le piéton.", sentence_sk: "Auto zastavilo, aby nechalo prejsť chodca.", category: 'b1-intensif' },
        { fr: "freiner", sk: ["brzdiť"], sentence_fr: "Il a dû freiner brusquement.", sentence_sk: "Musel prudko zabrzdiť.", category: 'b1-intensif' },
        { fr: "heurter", sk: ["naraziť do", "vraziť do"], sentence_fr: "Le vélo a heurté un arbre.", sentence_sk: "Bicykel narazil do stromu.", category: 'b1-intensif' },
        { fr: "le trottoir", sk: ["chodník"], sentence_fr: "Marche sur le trottoir, c'est plus sûr.", sentence_sk: "Kráčaj po chodníku, je to bezpečnejšie.", category: 'b1-intensif' },
        { fr: "le savon", sk: ["mydlo"], sentence_fr: "Lave-toi les mains avec du savon.", sentence_sk: "Umy si ruky mydlom.", category: 'b1-intensif' },
        { fr: "ralentir", sk: ["spomaliť"], sentence_fr: "Il faut ralentir à l'approche de l'école.", sentence_sk: "Pri blížiacej sa škole treba spomaliť.", category: 'b1-intensif' },
        { fr: "brûler", sk: ["horieť", "páliť"], sentence_fr: "Attention, la casserole est chaude, ne te brûle pas !", sentence_sk: "Pozor, hrniec je horúci, nepopáľ sa!", category: 'b1-intensif' },
        { fr: "la pâte", sk: ["cesto", "cestoviny"], sentence_fr: "J'ai préparé de la pâte à pizza.", sentence_sk: "Pripravil som cesto na pizzu.", category: 'b1-intensif' },
        { fr: "une peau de banane", sk: ["banánová šupka"], sentence_fr: "Il a glissé sur une peau de banane.", sentence_sk: "Pošmykol sa na banánovej šupke.", category: 'b1-intensif' },
        { fr: "une canette", sk: ["plechovka"], sentence_fr: "Jette la canette dans la poubelle de recyclage.", sentence_sk: "Hoď plechovku do recyklačného koša.", category: 'b1-intensif' },
        { fr: "l'interviewé(e)", sk: ["respondent", "ten, s kým sa robí rozhovor"], sentence_fr: "L'interviewé a répondu à toutes les questions du journaliste.", sentence_sk: "Respondent odpovedal na všetky otázky novinára.", category: 'b1-intensif' },
        { fr: "le parcours d'un emballage", sk: ["cesta obalu"], sentence_fr: "Le schéma montre le parcours d'un emballage, de l'usine au recyclage.", sentence_sk: "Schéma ukazuje cestu obalu, od továrne po recykláciu.", category: 'b1-intensif' },
        { fr: "l'usine de recyclage", sk: ["recyklačná továreň"], sentence_fr: "Les bouteilles en plastique sont envoyées à l'usine de recyclage.", sentence_sk: "Plastové fľaše sa posielajú do recyklačnej továrne.", category: 'b1-intensif' },
        { fr: "le schéma", sk: ["schéma", "nákres"], sentence_fr: "Le professeur a dessiné un schéma au tableau.", sentence_sk: "Profesor nakreslil na tabuľu schému.", category: 'b1-intensif' },
        { fr: "le métal est fondu", sk: ["kov je roztavený"], sentence_fr: "Dans le haut fourneau, le métal est fondu à très haute température.", sentence_sk: "Vo vysokej peci je kov roztavený pri veľmi vysokej teplote.", category: 'b1-intensif' },
        { fr: "broyer", sk: ["drviť", "mlieť"], sentence_fr: "La machine sert à broyer les vieux plastiques.", sentence_sk: "Stroj slúži na drvenie starých plastov.", category: 'b1-intensif' },
        { fr: "ramollir", sk: ["zmäknúť", "zmäkčiť"], sentence_fr: "Laisse le beurre ramollir à température ambiante.", sentence_sk: "Nechaj maslo zmäknúť pri izbovej teplote.", category: 'b1-intensif' },
        { fr: "démarrer", sk: ["naštartovať", "začať"], sentence_fr: "J'ai du mal à démarrer la voiture ce matin.", sentence_sk: "Dnes ráno mám problém naštartovať auto.", category: 'b1-intensif' },
        { fr: "un annuaire", sk: ["adresár", "telefónny zoznam"], sentence_fr: "J'ai cherché son numéro dans l'annuaire.", sentence_sk: "Hľadal som jeho číslo v telefónnom zozname.", category: 'b1-intensif' },
        { fr: "une poche", sk: ["vrecko"], sentence_fr: "J'ai mes clés dans ma poche.", sentence_sk: "Mám kľúče vo vrecku.", category: 'b1-intensif' },
        { fr: "émouvant", sk: ["dojímavý"], sentence_fr: "C'était un discours très émouvant.", sentence_sk: "Bol to veľmi dojímavý prejav.", category: 'b1-intensif' },
        { fr: "un prospectus", sk: ["leták", "prospekt"], sentence_fr: "J'ai reçu un prospectus pour un nouveau magasin.", sentence_sk: "Dostal som leták na nový obchod.", category: 'b1-intensif' },
        { fr: "mériter", sk: ["zaslúžiť si"], sentence_fr: "Après tout ce travail, tu mérites des vacances.", sentence_sk: "Po všetkej tej práci si zaslúžiš dovolenku.", category: 'b1-intensif' },
        { fr: "bêtement", sk: ["hlúpo"], sentence_fr: "J'ai bêtement oublié mon portefeuille à la maison.", sentence_sk: "Hlúpo som si zabudol peňaženku doma.", category: 'b1-intensif' },
        { fr: "le mégot", sk: ["ošpak", "ohorok"], sentence_fr: "Ne jetez pas vos mégots par terre.", sentence_sk: "Nehadžte ošpaky na zem.", category: 'b1-intensif' },
        { fr: "les bénévoles", sk: ["dobrovoľníci"], sentence_fr: "Les bénévoles ont nettoyé la plage.", sentence_sk: "Dobrovoľníci vyčistili pláž.", category: 'b1-intensif' },
        { fr: "ramasser", sk: ["zbierať", "zdvihnúť"], sentence_fr: "Il faut ramasser les déchets.", sentence_sk: "Treba pozbierať odpadky.", category: 'b1-intensif' },
        { fr: "la banlieue", sk: ["predmestie"], sentence_fr: "Il habite en banlieue parisienne.", sentence_sk: "Býva na parížskom predmestí.", category: 'b1-intensif' },
        { fr: "une incivilité", sk: ["nezdvorilosť", "neslušnosť"], sentence_fr: "Jeter des papiers par terre est une incivilité.", sentence_sk: "Hádzať papiere na zem je neslušnosť.", category: 'b1-intensif' },
        { fr: "les règles", sk: ["pravidlá"], sentence_fr: "Il faut respecter les règles du jeu.", sentence_sk: "Treba rešpektovať pravidlá hry.", category: 'b1-intensif' },
        { fr: "le comportement", sk: ["správanie"], sentence_fr: "Son comportement est exemplaire.", sentence_sk: "Jeho správanie je príkladné.", category: 'b1-intensif' },
        { fr: "la saleté", sk: ["špina", "nečistota"], sentence_fr: "Il y a beaucoup de saleté dans cette rue.", sentence_sk: "V tejto ulici je veľa špiny.", category: 'b1-intensif' },
        { fr: "une chasuble", sk: ["rozlišovačka", "vesta"], sentence_fr: "Les bénévoles portent une chasuble jaune.", sentence_sk: "Dobrovoľníci nosia žltú vestu.", category: 'b1-intensif' },
        { fr: "une pince", sk: ["kliešte"], sentence_fr: "Il utilise une pince pour ramasser les déchets.", sentence_sk: "Na zbieranie odpadkov používa kliešte.", category: 'b1-intensif' },
        { fr: "traquer", sk: ["stopovať", "prenasledovať"], sentence_fr: "La police traque les criminels.", sentence_sk: "Polícia prenasleduje zločincov.", category: 'b1-intensif' },
        { fr: "le moindre", sk: ["najmenší"], sentence_fr: "Je n'ai pas la moindre idée.", sentence_sk: "Nemám ani najmenšiu potuchu.", category: 'b1-intensif' },
        { fr: "s'investir", sk: ["angažovať sa", "investovať (čas, energiu)"], sentence_fr: "Elle s'investit beaucoup dans cette association.", sentence_sk: "Veľmi sa angažuje v tomto združení.", category: 'b1-intensif' },
        { fr: "un expatrié", sk: ["emigrant", "cudzinec žijúci v zahraničí"], sentence_fr: "Il y a beaucoup d'expatriés français à Londres.", sentence_sk: "V Londýne je veľa francúzskych emigrantov.", category: 'b1-intensif' },
        { fr: "rassembler", sk: ["zhromaždiť"], sentence_fr: "Le professeur a rassemblé les élèves dans la cour.", sentence_sk: "Učiteľ zhromaždil žiakov na dvore.", category: 'b1-intensif' },
        { fr: "l'antenne", sk: ["pobočka", "anténa"], sentence_fr: "Notre association a une antenne dans plusieurs villes.", sentence_sk: "Naše združenie má pobočku vo viacerých mestách.", category: 'b1-intensif' },
        { fr: "réel", sk: ["skutočný", "reálny"], sentence_fr: "C'est un problème réel qui demande une solution.", sentence_sk: "Je to skutočný problém, ktorý si vyžaduje riešenie.", category: 'b1-intensif' },
        { fr: "confier", sk: ["zveriť"], sentence_fr: "Je peux te confier un secret ?", sentence_sk: "Môžem ti zveriť tajomstvo?", category: 'b1-intensif' },
        { fr: "autant", sk: ["rovnako veľa", "toľko"], sentence_fr: "Travaille autant que tu peux.", sentence_sk: "Pracuj toľko, koľko môžeš.", category: 'b1-intensif' },
        { fr: "les meubles", sk: ["nábytok"], sentence_fr: "Nous avons acheté de nouveaux meubles.", sentence_sk: "Kúpili sme nový nábytok.", category: 'b1-intensif' },
        { fr: "gras", sk: ["tučný", "mastný"], sentence_fr: "Ce plat est un peu trop gras pour moi.", sentence_sk: "Toto jedlo je na mňa príliš mastné.", category: 'b1-intensif' },
        { fr: "infliger", sk: ["spôsobiť", "uvaliť (trest)"], sentence_fr: "Le juge va lui infliger une amende.", sentence_sk: "Sudca mu udelí pokutu.", category: 'b1-intensif' },
        { fr: "la honte", sk: ["hanba"], sentence_fr: "Il a ressenti de la honte après son erreur.", sentence_sk: "Po svojej chybe pocítil hanbu.", category: 'b1-intensif' },
        { fr: "la gêne", sk: ["rozpaky", "nepohodlie"], sentence_fr: "Il y avait une certaine gêne dans la salle.", sentence_sk: "V miestnosti vládli isté rozpaky.", category: 'b1-intensif' },
        { fr: "un claquement de doigts", sk: ["lusknutie prstami"], sentence_fr: "Il a disparu en un claquement de doigts.", sentence_sk: "Zmizol lusknutím prstov.", category: 'b1-intensif' },
        { fr: "rejoindre", sk: ["pridať sa k", "stretnúť sa s"], sentence_fr: "Tu veux nous rejoindre au restaurant ?", sentence_sk: "Chceš sa k nám pridať v reštaurácii?", category: 'b1-intensif' },
        { fr: "la propreté", sk: ["čistota"], sentence_fr: "La propreté des rues est l'affaire de tous.", sentence_sk: "Čistota ulíc je záležitosťou všetkých.", category: 'b1-intensif' },
        { fr: "souligner", sk: ["podčiarknuť", "zdôrazniť"], sentence_fr: "Je voudrais souligner l'importance de ce point.", sentence_sk: "Chcel by som zdôrazniť dôležitosť tohto bodu.", category: 'b1-intensif' },
        { fr: "attirer", sk: ["prilákať", "pútať"], sentence_fr: "Le festival attire des milliers de visiteurs chaque année.", sentence_sk: "Festival každý rok priláka tisíce návštevníkov.", category: 'b1-intensif' },
        { fr: "désormais", sk: ["odteraz", "od tejto chvíle"], sentence_fr: "Désormais, je ferai plus attention.", sentence_sk: "Odteraz si budem dávať väčší pozor.", category: 'b1-intensif' },
        { fr: "un trentenaire", sk: ["tridsiatnik"], sentence_fr: "C'est un jeune trentenaire dynamique.", sentence_sk: "Je to mladý dynamický tridsiatnik.", category: 'b1-intensif' },
        { fr: "un quadragénaire", sk: ["štyridsiatnik"], sentence_fr: "Le nouveau directeur est un quadragénaire.", sentence_sk: "Nový riaditeľ je štyridsiatnik.", category: 'b1-intensif' },
        { fr: "un quinquagénaire", sk: ["päťdesiatnik"], sentence_fr: "Il approche de la cinquantaine, c'est bientôt un quinquagénaire.", sentence_sk: "Blíži sa k päťdesiatke, čoskoro bude päťdesiatnik.", category: 'b1-intensif' },
        { fr: "un sexagénaire", sk: ["šesťdesiatnik"], sentence_fr: "Mon voisin est un sexagénaire très actif.", sentence_sk: "Môj sused je veľmi aktívny šesťdesiatnik.", category: 'b1-intensif' },
        { fr: "un septuagénaire", sk: ["sedemdesiatnik"], sentence_fr: "Le septuagénaire profite de sa retraite.", sentence_sk: "Sedemdesiatnik si užíva dôchodok.", category: 'b1-intensif' },
        { fr: "un octogénaire", sk: ["osemdesiatnik"], sentence_fr: "L'octogénaire a raconté des histoires de sa jeunesse.", sentence_sk: "Osemdesiatnik rozprával príbehy zo svojej mladosti.", category: 'b1-intensif' },
        { fr: "un nonagénaire", sk: ["deväťdesiatnik"], sentence_fr: "Le nonagénaire a fêté ses 95 ans.", sentence_sk: "Deväťdesiatnik oslávil 95 rokov.", category: 'b1-intensif' },
        { fr: "un centenaire", sk: ["storočný človek"], sentence_fr: "Le village a célébré son premier centenaire.", sentence_sk: "Dedina oslávila svojho prvého storočného obyvateľa.", category: 'b1-intensif' },
        { fr: "consécutif", sk: ["nasledujúci", "po sebe idúci"], sentence_fr: "Il a plu pendant trois jours consécutifs.", sentence_sk: "Pršalo tri dni po sebe.", category: 'b1-intensif' },
        { fr: "à titre individuel", sk: ["individuálne", "ako jednotlivec"], sentence_fr: "Il a agi à titre individuel, pas au nom de l'entreprise.", sentence_sk: "Konal ako jednotlivec, nie v mene firmy.", category: 'b1-intensif' },
        { fr: "une piste", sk: ["stopa", "dráha", "zjazdovka"], sentence_fr: "La police suit une nouvelle piste.", sentence_sk: "Polícia sleduje novú stopu.", category: 'b1-intensif' },
        { fr: "un impôt", sk: ["daň"], sentence_fr: "Chaque citoyen doit payer des impôts.", sentence_sk: "Každý občan musí platiť dane.", category: 'b1-intensif' },
        { fr: "une taxe", sk: ["poplatok", "daň"], sentence_fr: "Il y a une nouvelle taxe sur les boissons sucrées.", sentence_sk: "Je tu nový poplatok na sladené nápoje.", category: 'b1-intensif' },
        { fr: "une amende", sk: ["pokuta"], sentence_fr: "J'ai eu une amende pour excès de vitesse.", sentence_sk: "Dostal som pokutu za prekročenie rýchlosti.", category: 'b1-intensif' },
        { fr: "d'après vous", sk: ["podľa vás"], sentence_fr: "D'après vous, qui est le coupable ?", sentence_sk: "Kto je podľa vás vinník?", category: 'b1-intensif' },
        { fr: "garder", sk: ["strážiť", "nechať si", "udržať"], sentence_fr: "Tu peux garder ce livre, je l'ai déjà lu.", sentence_sk: "Túto knihu si môžeš nechať, už som ju čítal.", category: 'b1-intensif' },
        { fr: "l'espace", sk: ["priestor", "vesmír"], sentence_fr: "Il n'y a pas assez d'espace pour tout le monde.", sentence_sk: "Nie je tu dosť miesta pre všetkých.", category: 'b1-intensif' },
        { fr: "le sachet", sk: ["vrecko", "sáčko"], sentence_fr: "Je voudrais un sachet de thé, s'il vous plaît.", sentence_sk: "Chcel by som vrecko čaju, prosím.", category: 'b1-intensif' },
        { fr: "le pot", sk: ["dóza", "kelímok", "kvetináč"], sentence_fr: "J'ai acheté un pot de confiture.", sentence_sk: "Kúpil som dózu džemu.", category: 'b1-intensif' },
        { fr: "le bocal", sk: ["zaváraninový pohár"], sentence_fr: "Les cornichons sont dans un bocal.", sentence_sk: "Uhorky sú v zaváraninovom pohári.", category: 'b1-intensif' },
        { fr: "la brique", sk: ["kartón (napr. od mlieka)"], sentence_fr: "N'oublie pas d'acheter une brique de lait.", sentence_sk: "Nezabudni kúpiť kartón mlieka.", category: 'b1-intensif' },
        { fr: "le flacon de parfum", sk: ["flakón parfumu"], sentence_fr: "Elle a reçu un joli flacon de parfum.", sentence_sk: "Dostala pekný flakón parfumu.", category: 'b1-intensif' },
        { fr: "la boîte de conserve", sk: ["konzerva"], sentence_fr: "J'ai ouvert une boîte de conserve de thon.", sentence_sk: "Otvoril som konzervu tuniaka.", category: 'b1-intensif' },
        { fr: "la capsule de café", sk: ["kávová kapsula"], sentence_fr: "Ces capsules de café sont recyclables.", sentence_sk: "Tieto kávové kapsule sú recyklovateľné.", category: 'b1-intensif' },
        { fr: "le gobelet en plastique", sk: ["plastový pohár"], sentence_fr: "Évitons d'utiliser des gobelets en plastique.", sentence_sk: "Vyhýbajme sa používaniu plastových pohárov.", category: 'b1-intensif' },
        { fr: "le paquet", sk: ["balík", "balíček"], sentence_fr: "J'ai reçu un paquet ce matin.", sentence_sk: "Dnes ráno som dostal balík.", category: 'b1-intensif' },
        { fr: "progressivement", sk: ["postupne"], sentence_fr: "La situation s'améliore progressivement.", sentence_sk: "Situácia sa postupne zlepšuje.", category: 'b1-intensif' },
        { fr: "petit à petit", sk: ["krok za krokom", "pomaly"], sentence_fr: "Petit à petit, l'oiseau fait son nid.", sentence_sk: "Pomaly ďalej zájdeš (dosl. vtáčik si stavia hniezdo kúsok po kúsku).", category: 'b1-intensif' },
        { fr: "pas à pas", sk: ["krok za krokom"], sentence_fr: "Nous allons résoudre ce problème pas à pas.", sentence_sk: "Tento problém vyriešime krok za krokom.", category: 'b1-intensif' },
        { fr: "un pas", sk: ["krok"], sentence_fr: "Fais un pas en avant.", sentence_sk: "Urob krok vpred.", category: 'b1-intensif' },
        { fr: "mener", sk: ["viesť"], sentence_fr: "Il mène une vie tranquille.", sentence_sk: "Vedie pokojný život.", category: 'b1-intensif' },
        { fr: "guider", sk: ["sprevádzať", "viesť"], sentence_fr: "Le guide va nous guider à travers la ville.", sentence_sk: "Sprievodca nás prevedie mestom.", category: 'b1-intensif' },
        { fr: "amener", sk: ["priviesť (niekoho)"], sentence_fr: "Tu peux amener tes amis à la fête.", sentence_sk: "Môžeš priviesť svojich priateľov na oslavu.", category: 'b1-intensif' },
        { fr: "conduire", sk: ["šoférovať", "viesť"], sentence_fr: "Je dois conduire prudemment quand il pleut.", sentence_sk: "Musím šoférovať opatrne, keď prší.", category: 'b1-intensif' },
        { fr: "pendre", sk: ["visieť", "zavesiť"], sentence_fr: "J'ai pendu le tableau au mur.", sentence_sk: "Zavesil som obraz na stenu.", category: 'b1-intensif' },
        { fr: "être suspendu", sk: ["byť zavesený", "visieť"], sentence_fr: "Le pont est suspendu au-dessus de la rivière.", sentence_sk: "Most visí nad riekou.", category: 'b1-intensif' },
        { fr: "d'un autre côté", sk: ["na druhej strane"], sentence_fr: "J'aime la ville, mais d'un autre côté, la campagne est plus calme.", sentence_sk: "Mám rád mesto, ale na druhej strane, vidiek je pokojnejší.", category: 'b1-intensif' },
        { fr: "cependant", sk: ["avšak", "jednako"], sentence_fr: "Il est riche, cependant il n'est pas heureux.", sentence_sk: "Je bohatý, avšak nie je šťastný.", category: 'b1-intensif' },
        { fr: "atteindre", sk: ["dosiahnuť"], sentence_fr: "Il a finalement atteint son objectif.", sentence_sk: "Konečne dosiahol svoj cieľ.", category: 'b1-intensif' },
        { fr: "parvenir à", sk: ["podariť sa", "dosiahnuť"], sentence_fr: "Elle est parvenue à le convaincre.", sentence_sk: "Podarilo sa jej ho presvedčiť.", category: 'b1-intensif' },
        { fr: "croire en", sk: ["veriť v (niekoho/niečo)"], sentence_fr: "Je crois en tes capacités.", sentence_sk: "Verím v tvoje schopnosti.", category: 'b1-intensif' },
        { fr: "peuplé", sk: ["zaľudnený", "osídlený"], sentence_fr: "C'est un quartier très peuplé.", sentence_sk: "Je to veľmi zaľudnená štvrť.", category: 'b1-intensif' },
        { fr: "s'affirmer", sk: ["presadiť sa"], sentence_fr: "Il a du mal à s'affirmer en public.", sentence_sk: "Má problém presadiť sa na verejnosti.", category: 'b1-intensif' },
        { fr: "une vague", sk: ["vlna"], sentence_fr: "Les vagues sont hautes aujourd'hui.", sentence_sk: "Vlny sú dnes vysoké.", category: 'b1-intensif' },
        { fr: "la bouillabaisse", sk: ["bouillabaisse (rybia polievka)"], sentence_fr: "La bouillabaisse est une spécialité de Marseille.", sentence_sk: "Bouillabaisse je špecialita z Marseille.", category: 'b1-intensif' },
        { fr: "une huître", sk: ["ustrica"], sentence_fr: "J'ai mangé des huîtres pour la première fois.", sentence_sk: "Prvýkrát som jedol ustrice.", category: 'b1-intensif' },
        { fr: "la quête", sk: ["hľadanie", "pátranie"], sentence_fr: "Le chevalier est parti en quête du Graal.", sentence_sk: "Rytier sa vydal na pátranie po grále.", category: 'b1-intensif' },
        { fr: "la fée", sk: ["víla"], sentence_fr: "La fée a exaucé son vœu.", sentence_sk: "Víla splnila jeho želanie.", category: 'b1-intensif' },
        { fr: "un chevalier", sk: ["rytier"], sentence_fr: "Le chevalier a sauvé la princesse.", sentence_sk: "Rytier zachránil princeznú.", category: 'b1-intensif' },
        { fr: "plonger", sk: ["potápať sa", "ponoriť sa"], sentence_fr: "J'aime plonger dans la mer.", sentence_sk: "Rád sa potápam v mori.", category: 'b1-intensif' },
        { fr: "une cabane", sk: ["búda", "chatka"], sentence_fr: "Les enfants ont construit une cabane dans les arbres.", sentence_sk: "Deti si postavili domček na strome.", category: 'b1-intensif' },
        { fr: "l'épuisement", sk: ["vyčerpanie"], sentence_fr: "Il souffre d'épuisement professionnel.", sentence_sk: "Trpí syndrómom vyhorenia.", category: 'b1-intensif' },
        { fr: "une voix off", sk: ["hlas komentátora (mimo obrazu)"], sentence_fr: "Le documentaire est raconté par une voix off.", sentence_sk: "Dokument je rozprávaný hlasom komentátora.", category: 'b1-intensif' },
        { fr: "filer", sk: ["uháňať", "zmiznúť (hovorovo)"], sentence_fr: "Je dois filer, je suis en retard.", sentence_sk: "Musím letieť, meškám.", category: 'b1-intensif' },
        { fr: "une ambiance", sk: ["atmosféra", "nálada"], sentence_fr: "Il y a une bonne ambiance dans ce café.", sentence_sk: "V tejto kaviarni je dobrá atmosféra.", category: 'b1-intensif' },
        { fr: "à gogo", sk: ["hojne", "nadostač"], sentence_fr: "Il y avait des boissons à gogo.", sentence_sk: "Bolo tam hojne nápojov.", category: 'b1-intensif' },
        { fr: "le ski de fond", sk: ["bežkovanie"], sentence_fr: "Le ski de fond est un excellent exercice.", sentence_sk: "Bežkovanie je výborné cvičenie.", category: 'b1-intensif' },
        { fr: "le gaspillage", sk: ["plytvanie", "mrhanie"], sentence_fr: "Le gaspillage alimentaire est un gros problème.", sentence_sk: "Plytvanie potravinami je veľký problém.", category: 'b1-intensif' },
        { fr: "augmenter", sk: ["zvýšiť", "stúpať"], sentence_fr: "Les prix ont encore augmenté.", sentence_sk: "Ceny opäť stúpli.", category: 'b1-intensif' },
        { fr: "économiser", sk: ["šetriť"], sentence_fr: "J'économise pour acheter une nouvelle voiture.", sentence_sk: "Šetrím si na nové auto.", category: 'b1-intensif' },
        { fr: "dépenser", sk: ["míňať"], sentence_fr: "Il dépense trop d'argent.", sentence_sk: "Míňa príliš veľa peňazí.", category: 'b1-intensif' },
        { fr: "gaspiller", sk: ["plytvať", "mrhať"], sentence_fr: "Il ne faut pas gaspiller l'eau.", sentence_sk: "Netreba plytvať vodou.", category: 'b1-intensif' },
        { fr: "allumer", sk: ["zapnúť", "zažať"], sentence_fr: "Peux-tu allumer la télévision ?", sentence_sk: "Môžeš zapnúť televízor?", category: 'b1-intensif' },
        { fr: "glisser", sk: ["šmyknúť sa", "kĺzať"], sentence_fr: "Attention, le sol est mouillé, tu pourrais glisser.", sentence_sk: "Pozor, podlaha je mokrá, mohol by si sa pošmyknúť.", category: 'b1-intensif' },
        { fr: "se dépêcher", sk: ["ponáhľať sa"], sentence_fr: "Dépêchez-vous, le train va partir !", sentence_sk: "Ponáhľajte sa, vlak odchádza!", category: 'b1-intensif' },
        { fr: "se mettre en colère", sk: ["nahnevať sa"], sentence_fr: "Il se met en colère pour un rien.", sentence_sk: "Nahnevá sa pre maličkosť.", category: 'b1-intensif' },
        { fr: "sinon", sk: ["inak", "v opačnom prípade"], sentence_fr: "Dépêche-toi, sinon on va être en retard.", sentence_sk: "Ponáhľaj sa, inak budeme meškať.", category: 'b1-intensif' },
        { fr: "rater", sk: ["zmeškať", "pokaziť"], sentence_fr: "J'ai raté mon bus ce matin.", sentence_sk: "Dnes ráno som zmeškal autobus.", category: 'b1-intensif' },
        { fr: "un dessin", sk: ["kresba", "kreslený film"], sentence_fr: "J'aime regarder les dessins animés.", sentence_sk: "Rád pozerám kreslené filmy.", category: 'b1-intensif' },
        { fr: "supprimer", sk: ["odstrániť", "vymazať"], sentence_fr: "J'ai supprimé les anciens fichiers.", sentence_sk: "Vymazal som staré súbory.", category: 'b1-intensif' },
        { fr: "s'ennuyer", sk: ["nudiť sa"], sentence_fr: "Les enfants commencent à s'ennuyer.", sentence_sk: "Deti sa začínajú nudiť.", category: 'b1-intensif' },
        { fr: "postuler", sk: ["uchádzať sa (o prácu)"], sentence_fr: "J'ai postulé pour un nouvel emploi.", sentence_sk: "Uchádzal som sa o novú prácu.", category: 'b1-intensif' },
        { fr: "disponible", sk: ["dostupný", "k dispozícii"], sentence_fr: "Je suis disponible pour un entretien la semaine prochaine.", sentence_sk: "Budúci týždeň som k dispozícii na pohovor.", category: 'b1-intensif' },
        { fr: "le commandant de bord", sk: ["kapitán lietadla"], sentence_fr: "Le commandant de bord a souhaité la bienvenue aux passagers.", sentence_sk: "Kapitán privítal cestujúcich.", category: 'b1-intensif' },
        { fr: "une éclaircie", sk: ["vyjasnenie"], sentence_fr: "La météo annonce des éclaircies pour l'après-midi.", sentence_sk: "Počasie na popoludnie hlási vyjasnenie.", category: 'b1-intensif' },
        { fr: "apparaître", sk: ["objaviť sa", "zjaviť sa"], sentence_fr: "Le soleil a finalement apparu.", sentence_sk: "Slnko sa konečne objavilo.", category: 'b1-intensif' },
        { fr: "camper", sk: ["kempovať", "táboriť"], sentence_fr: "Nous allons camper près du lac.", sentence_sk: "Ideme kempovať pri jazere.", category: 'b1-intensif' },
        { fr: "s'organiser", sk: ["zorganizovať sa"], sentence_fr: "Il faut bien s'organiser pour le voyage.", sentence_sk: "Na cestu sa treba dobre zorganizovať.", category: 'b1-intensif' },
        { fr: "d'occasion", sk: ["z druhej ruky", "použitý"], sentence_fr: "J'ai acheté une voiture d'occasion.", sentence_sk: "Kúpil som si ojazdené auto.", category: 'b1-intensif' },
        { fr: "la friperie", sk: ["second-hand obchod"], sentence_fr: "On trouve des vêtements uniques à la friperie.", sentence_sk: "V sekáči sa dajú nájsť jedinečné kúsky oblečenia.", category: 'b1-intensif' },
        { fr: "le ménage", sk: ["upratovanie", "domácnosť"], sentence_fr: "C'est mon tour de faire le ménage.", sentence_sk: "Som na rade s upratovaním.", category: 'b1-intensif' },
        { fr: "loger", sk: ["ubytovať", "bývať"], sentence_fr: "Nous allons loger chez des amis.", sentence_sk: "Budeme bývať u priateľov.", category: 'b1-intensif' },
        { fr: "être enceinte", sk: ["byť tehotná"], sentence_fr: "Elle a annoncé qu'elle est enceinte.", sentence_sk: "Oznámila, že je tehotná.", category: 'b1-intensif' },
        { fr: "un menteur", sk: ["klamár"], sentence_fr: "Ne le crois pas, c'est un grand menteur.", sentence_sk: "Never mu, je to veľký klamár.", category: 'b1-intensif' },
        { fr: "un tricheur", sk: ["podvodník (v hre)"], sentence_fr: "Personne n'aime jouer avec un tricheur.", sentence_sk: "Nikto sa nerád hrá s podvodníkom.", category: 'b1-intensif' },
        { fr: "un escroc", sk: ["podvodník", "špekulant"], sentence_fr: "Il a été victime d'un escroc.", sentence_sk: "Stal sa obeťou podvodníka.", category: 'b1-intensif' },
        { fr: "un imposteur", sk: ["podvodník", "samozvanec"], sentence_fr: "Il s'est fait passer pour un médecin, c'est un imposteur.", sentence_sk: "Vydával sa za lekára, je to podvodník.", category: 'b1-intensif' },
        { fr: "un mytho", sk: ["klamár", "bájkar (hovorovo)"], sentence_fr: "Il raconte n'importe quoi, c'est un mytho.", sentence_sk: "Rozpráva čokoľvek, je to klamár.", category: 'b1-intensif' },
        { fr: "le déchirement", sk: ["rozorvanosť", "bolesť"], sentence_fr: "Le départ de ses enfants a été un déchirement.", sentence_sk: "Odchod jeho detí bol bolestivý.", category: 'b1-intensif' },
        { fr: "se piquer", sk: ["pichnúť sa"], sentence_fr: "Je me suis piqué avec une rose.", sentence_sk: "Pichol som sa o ružu.", category: 'b1-intensif' },
        { fr: "s'endormir", sk: ["zaspať"], sentence_fr: "Je m'endors facilement devant la télé.", sentence_sk: "Ľahko zaspím pred televízorom.", category: 'b1-intensif' },
        { fr: "le laisser-passer", sk: ["priepustka"], sentence_fr: "Il faut un laisser-passer pour entrer.", sentence_sk: "Na vstup je potrebná priepustka.", category: 'b1-intensif' },
        { fr: "un séjour", sk: ["pobyt"], sentence_fr: "Nous avons passé un agréable séjour à Paris.", sentence_sk: "V Paríži sme strávili príjemný pobyt.", category: 'b1-intensif' },
        { fr: "attraper", sk: ["chytiť"], sentence_fr: "J'ai réussi à attraper le bus.", sentence_sk: "Podarilo sa mi chytiť autobus.", category: 'b1-intensif' },
        { fr: "révéler", sk: ["odbaliť", "prezradiť"], sentence_fr: "Il a refusé de révéler ses sources.", sentence_sk: "Odmietol prezradiť svoje zdroje.", category: 'b1-intensif' },
        { fr: "les racines", sk: ["korene"], sentence_fr: "Il est fier de ses racines.", sentence_sk: "Je hrdý na svoje korene.", category: 'b1-intensif' },
        { fr: "l'appartenance", sk: ["príslušnosť"], sentence_fr: "Le sentiment d'appartenance à un groupe est important.", sentence_sk: "Pocit príslušnosti k skupine je dôležitý.", category: 'b1-intensif' },
        { fr: "patiemment", sk: ["trpezlivo"], sentence_fr: "Il attend patiemment son tour.", sentence_sk: "Trpezlivo čaká, kým príde na rad.", category: 'b1-intensif' },
        { fr: "un morceau", sk: ["kúsok"], sentence_fr: "Tu veux un morceau de gâteau ?", sentence_sk: "Chceš kúsok koláča?", category: 'b1-intensif' },
        { fr: "coller", sk: ["lepiť"], sentence_fr: "J'ai collé l'affiche sur le mur.", sentence_sk: "Nalepil som plagát na stenu.", category: 'b1-intensif' },
        { fr: "valider", sk: ["potvrdiť", "schváliť"], sentence_fr: "N'oubliez pas de valider votre ticket.", sentence_sk: "Nezabudnite si označiť lístok.", category: 'b1-intensif' },
        { fr: "rendre hommage", sk: ["vzdávať hold"], sentence_fr: "Une cérémonie a été organisée pour rendre hommage aux victimes.", sentence_sk: "Na počesť obetí sa konala ceremónia.", category: 'b1-intensif' },
        { fr: "une expulsion", sk: ["vyhostenie", "vylúčenie"], sentence_fr: "L'expulsion du joueur a changé le match.", sentence_sk: "Vylúčenie hráča zmenilo zápas.", category: 'b1-intensif' },
        { fr: "le dérangement", sk: ["vyrušovanie", "obťažovanie"], sentence_fr: "Excusez-moi pour le dérangement.", sentence_sk: "Ospravedlňte ma za vyrušovanie.", category: 'b1-intensif' },
        { fr: "cadien et créole", sk: ["cajunský a kreolský"], sentence_fr: "La Louisiane est célèbre pour sa culture cadienne et créole.", sentence_sk: "Louisiana je známa svojou cajunskou a kreolskou kultúrou.", category: 'b1-intensif' },
        { fr: "tant que", sk: ["pokiaľ", "kým"], sentence_fr: "Tant que tu es là, je suis heureux.", sentence_sk: "Pokiaľ si tu, som šťastný.", category: 'b1-intensif' },
        { fr: "s'installer", sk: ["usadiť sa", "nasťahovať sa"], sentence_fr: "Ils ont décidé de s'installer à la campagne.", sentence_sk: "Rozhodli sa usadiť na vidieku.", category: 'b1-intensif' },
        { fr: "les tempes grises", sk: ["šedivé spánky"], sentence_fr: "Il a les tempes grises, mais il est encore jeune.", sentence_sk: "Má šedivé spánky, ale je stále mladý.", category: 'b1-intensif' },
        { fr: "la peine", sk: ["trápenie", "námaha", "trest"], sentence_fr: "Ça ne vaut pas la peine de s'inquiéter.", sentence_sk: "Nestojí za to sa znepokojovať.", category: 'b1-intensif' },
        { fr: "la communauté", sk: ["komunita", "spoločenstvo"], sentence_fr: "Il est très actif dans sa communauté.", sentence_sk: "Je veľmi aktívny vo svojej komunite.", category: 'b1-intensif' },
        { fr: "l'espoir", sk: ["nádej"], sentence_fr: "Il ne faut jamais perdre espoir.", sentence_sk: "Nikdy netreba strácať nádej.", category: 'b1-intensif' },
        { fr: "le départ", sk: ["odchod", "štart"], sentence_fr: "Le départ du train est à 10h.", sentence_sk: "Odchod vlaku je o 10:00.", category: 'b1-intensif' },
        { fr: "stressant", sk: ["stresujúci"], sentence_fr: "Mon travail est très stressant.", sentence_sk: "Moja práca je veľmi stresujúca.", category: 'b1-intensif' },
        { fr: "le coin", sk: ["roh", "kút"], sentence_fr: "La pharmacie est au coin de la rue.", sentence_sk: "Lekáreň je na rohu ulice.", category: 'b1-intensif' },
        { fr: "une basket", sk: ["teniska"], sentence_fr: "J'ai acheté de nouvelles baskets pour courir.", sentence_sk: "Kúpil som si nové tenisky na behanie.", category: 'b1-intensif' },
        { fr: "le lancer du poids", sk: ["vrh guľou"], sentence_fr: "Le lancer du poids est une discipline athlétique.", sentence_sk: "Vrh guľou je atletická disciplína.", category: 'b1-intensif' },
        { fr: "une combinaison de ski", sk: ["lyžiarska kombinéza"], sentence_fr: "N'oublie pas ta combinaison de ski.", sentence_sk: "Nezabudni si lyžiarsku kombinézu.", category: 'b1-intensif' },
        { fr: "le but", sk: ["gól", "cieľ"], sentence_fr: "L'équipe a marqué un but à la dernière minute.", sentence_sk: "Tím strelil gól v poslednej minúte.", category: 'b1-intensif' },
        { fr: "un maillot de bain", sk: ["plavky"], sentence_fr: "J'ai oublié mon maillot de bain.", sentence_sk: "Zabudol som si plavky.", category: 'b1-intensif' },
        { fr: "un filet", sk: ["sieť"], sentence_fr: "Le ballon a terminé dans le filet.", sentence_sk: "Lopta skončila v sieti.", category: 'b1-intensif' },
        { fr: "un bâton", sk: ["palica"], sentence_fr: "Il utilise des bâtons de marche pour la randonnée.", sentence_sk: "Na turistiku používa trekingové palice.", category: 'b1-intensif' },
        { fr: "le saut en hauteur", sk: ["skok do výšky"], sentence_fr: "Il a battu le record du monde de saut en hauteur.", sentence_sk: "Prekonal svetový rekord v skoku do výšky.", category: 'b1-intensif' },
        { fr: "un terrain de football", sk: ["futbalové ihrisko"], sentence_fr: "Le match se joue sur le terrain de football principal.", sentence_sk: "Zápas sa hrá na hlavnom futbalovom ihrisku.", category: 'b1-intensif' },
        { fr: "une balle", sk: ["loptička (menšia)"], sentence_fr: "J'ai besoin d'une balle de tennis.", sentence_sk: "Potrebujem tenisovú loptičku.", category: 'b1-intensif' },
        { fr: "un ballon", sk: ["lopta (väčšia)"], sentence_fr: "Les enfants jouent avec un ballon.", sentence_sk: "Deti sa hrajú s loptou.", category: 'b1-intensif' },
        { fr: "une boule", sk: ["guľa"], sentence_fr: "On joue à la pétanque avec des boules en métal.", sentence_sk: "Petang sa hrá s kovovými guľami.", category: 'b1-intensif' },
        { fr: "la longueur", sk: ["dĺžka"], sentence_fr: "Quelle est la longueur de la piscine ?", sentence_sk: "Aká je dĺžka bazéna?", category: 'b1-intensif' },
        { fr: "la largeur", sk: ["šírka"], sentence_fr: "La largeur de la route est de 5 mètres.", sentence_sk: "Šírka cesty je 5 metrov.", category: 'b1-intensif' },
        { fr: "patiner", sk: ["korčuľovať sa"], sentence_fr: "J'aime patiner sur la glace en hiver.", sentence_sk: "V zime sa rád korčuľujem na ľade.", category: 'b1-intensif' },
        { fr: "la patinoire", sk: ["klzisko"], sentence_fr: "On va à la patinoire ce soir ?", sentence_sk: "Ideme dnes večer na klzisko?", category: 'b1-intensif' },
        { fr: "le patinage", sk: ["korčuľovanie"], sentence_fr: "Le patinage artistique est un sport magnifique.", sentence_sk: "Krasokorčuľovanie je nádherný šport.", category: 'b1-intensif' },
        { fr: "lancer", sk: ["hodiť", "spustiť"], sentence_fr: "Il a lancé la balle très loin.", sentence_sk: "Hodil loptu veľmi ďaleko.", category: 'b1-intensif' },
        { fr: "un concurrent", sk: ["súper", "konkurent"], sentence_fr: "Il a battu tous ses concurrents.", sentence_sk: "Porazil všetkých svojich súperov.", category: 'b1-intensif' },
        { fr: "une épreuve", sk: ["skúška", "disciplína"], sentence_fr: "C'est une épreuve difficile.", sentence_sk: "Je to ťažká skúška.", category: 'b1-intensif' },
        { fr: "se rendre compte", sk: ["uvedomiť si"], sentence_fr: "Je me suis rendu compte de mon erreur.", sentence_sk: "Uvedomil som si svoju chybu.", category: 'b1-intensif' },
        { fr: "un entretien", sk: ["pohovor", "údržba"], sentence_fr: "J'ai un entretien d'embauche demain.", sentence_sk: "Zajtra mám pracovný pohovor.", category: 'b1-intensif' },
        { fr: "afin de", sk: ["aby", "s cieľom"], sentence_fr: "Je travaille dur afin de réussir.", sentence_sk: "Tvrdo pracujem, aby som uspel.", category: 'b1-intensif' },
        { fr: "la beauté", sk: ["krása"], sentence_fr: "La beauté de ce paysage est incroyable.", sentence_sk: "Krása tejto krajiny je neuveriteľná.", category: 'b1-intensif' },
        { fr: "bien que", sk: ["hoci", "aj keď"], sentence_fr: "Bien qu'il soit fatigué, il continue de travailler.", sentence_sk: "Hoci je unavený, pokračuje v práci.", category: 'b1-intensif' },
        { fr: "la jeunesse", sk: ["mladosť"], sentence_fr: "Il faut profiter de sa jeunesse.", sentence_sk: "Treba si užiť mladosť.", category: 'b1-intensif' },
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

    // --- SYSTÉM OBĽÚBENÝCH SLOVÍČOK ---
    let favoriteWords = new Set();

    // Načítaj obľúbené slovíčka z localStorage
    function loadFavorites() {
        const saved = localStorage.getItem('favoriteWords');
        if (saved) {
            favoriteWords = new Set(JSON.parse(saved));
        }
    }

    // Ulož obľúbené slovíčka do localStorage
    function saveFavorites() {
        localStorage.setItem('favoriteWords', JSON.stringify([...favoriteWords]));
    }

    // Pridaj/odstráň slovíčko z obľúbených
    function toggleFavorite(wordFr) {
        if (favoriteWords.has(wordFr)) {
            favoriteWords.delete(wordFr);
        } else {
            favoriteWords.add(wordFr);
        }
        saveFavorites();
        
        // Aktualizuj UI vo všetkých sekciách
        updateAllFavoritesUI(wordFr);
        
        // Ak je aktívna kategória "favorites", aktualizuj zobrazenie
        if (currentCategory === 'favorites') {
            selectCategory('favorites');
        }
    }

    // Aktualizuj UI obľúbených vo všetkých sekciách súčasne
    function updateAllFavoritesUI(wordFr) {
        const isFav = isFavorite(wordFr);
        
        // Aktualizuj hviezdičky v zozname slov
        const wordCards = document.querySelectorAll('.word-card');
        wordCards.forEach(card => {
            const star = card.querySelector('.favorite-star');
            if (star && star.dataset.word === wordFr) {
                if (isFav) {
                    star.classList.add('favorite');
                    card.classList.add('favorite');
                } else {
                    star.classList.remove('favorite');
                    card.classList.remove('favorite');
                }
            }
        });
        
        // Aktualizuj flashcard ak zobrazuje aktuálne slovo
        if (flashcardWords[currentCardIndex] && flashcardWords[currentCardIndex].fr === wordFr) {
            const flashcardStar = document.getElementById('flashcard-star');
            const flashcard = document.querySelector('.flashcard');
            
            if (isFav) {
                flashcardStar.classList.add('favorite');
                flashcard.classList.add('favorite');
            } else {
                flashcardStar.classList.remove('favorite');
                flashcard.classList.remove('favorite');
            }
        }
    }

    // Skontroluj, či je slovíčko obľúbené
    function isFavorite(wordFr) {
        return favoriteWords.has(wordFr);
    }

    // Načítaj obľúbené pri štarte
    loadFavorites();


    // --- SEKCE 1: ZOZNAM SLOVÍČOK S KATEGÓRIAMI ---
    const wordListContainer = document.getElementById('word-list-container');
    const categoryButtonsContainer = document.getElementById('category-buttons');
    const modal = document.getElementById('word-card-modal');
    const modalContent = document.getElementById('modal-card-inner');
    const closeModal = document.querySelector('.close-modal');

    let currentCategory = null;
    let filteredWords = [];

    // Funkcia na vytvorenie kategóriových tlačidiel
    function createCategoryButtons() {
        categoryButtonsContainer.innerHTML = '';
        
        Object.keys(categories).forEach(categoryId => {
            const category = categories[categoryId];
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.dataset.category = categoryId;
            button.textContent = category.name;
            
            button.addEventListener('click', () => {
                selectCategory(categoryId);
            });
            
            categoryButtonsContainer.appendChild(button);
        });
    }

    // Funkcia na výber kategórie
    function selectCategory(categoryId) {
        currentCategory = categoryId;
        const category = categories[categoryId];
        
        // Aktualizuj vzhľad tlačidiel
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-category="${categoryId}"]`).classList.add('selected');
        
        // Zobraz informácie o kategórií
        showCategoryInfo(category);
        
        // Vyfiltruj a zobraz slovíčka
        if (categoryId === 'favorites') {
            // Pre kategóriu obľúbených - filter podľa obľúbených slovíčok
            filteredWords = wordData.filter(word => favoriteWords.has(word.fr));
        } else {
            // Pre ostatné kategórie - filter podľa category property
            filteredWords = wordData.filter(word => word.category === categoryId);
        }
        
        displayWords(filteredWords);
        
        // Zobraz kontajner so slovíčkami
        wordListContainer.style.display = 'grid';
    }

    // Funkcia na zobrazenie informácií o kategórií
    function showCategoryInfo(category) {
        // Odstráň existujúce info
        const existingInfo = document.querySelector('.category-info');
        if (existingInfo) {
            existingInfo.remove();
        }
        
        // Vytvor nové info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'category-info';
        infoDiv.innerHTML = `
            <h4>${category.name}</h4>
            <p>${category.description}</p>
        `;
        
        // Vlož pred kontajner so slovíčkami
        wordListContainer.parentNode.insertBefore(infoDiv, wordListContainer);
    }

    // --- FLASHCARD KATEGÓRIE ---
    function createFlashcardCategoryButtons() {
        flashcardCategoryButtonsContainer.innerHTML = '';
        
        Object.keys(categories).forEach(categoryId => {
            const category = categories[categoryId];
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.dataset.category = categoryId;
            button.style.backgroundColor = category.color;
            button.innerHTML = `
                <i class="fas fa-clone"></i>
                ${category.name}
            `;
            
            button.addEventListener('click', () => selectFlashcardCategory(categoryId));
            flashcardCategoryButtonsContainer.appendChild(button);
        });
    }

    function selectFlashcardCategory(categoryId) {
        currentFlashcardCategory = categoryId;
        
        // Aktualizuj vzhľad tlačidiel
        document.querySelectorAll('#flashcard-category-buttons .category-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`#flashcard-category-buttons [data-category="${categoryId}"]`).classList.add('selected');
        
        // Vyfiltruj slovíčka pre flashcards
        if (categoryId === 'favorites') {
            // Pre kategóriu obľúbených - filter podľa obľúbených slovíčok
            flashcardWords = wordData.filter(word => favoriteWords.has(word.fr));
        } else {
            // Pre ostatné kategórie - filter podľa category property
            flashcardWords = wordData.filter(word => word.category === categoryId);
        }
        
        // Resetuj index a zobraz prvé flashcard
        currentCardIndex = 0;
        showFlashcard(currentCardIndex);
    }

    // Funkcia na zobrazenie slovíčok
    function displayWords(words) {
        wordListContainer.innerHTML = '';
        words.forEach((word, index) => {
            createWordCard(word, index);
        });
    }

    function createWordCard(word, index) {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.dataset.index = index;
        card.dataset.wordFr = word.fr;

        // Ak je slovíčko obľúbené, pridaj triedu favorite
        const favoriteClass = isFavorite(word.fr) ? 'favorite' : '';

        card.innerHTML = `
            <div class="word-card-fr">${word.fr}</div>
            <div class="word-card-sk">${Array.isArray(word.sk) ? word.sk.join(', ') : word.sk}</div>
            <i class="fas fa-volume-up speaker-icon" data-word="${word.fr}"></i>
            <i class="fas fa-star favorite-star ${favoriteClass}" data-word="${word.fr}"></i>
        `;
        
        // Ak je obľúbené, pridaj triedu favorite aj na kartu
        if (isFavorite(word.fr)) {
            card.classList.add('favorite');
        }
        
        // Kliknutie na kartu (nie na ikony) otvorí modal
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('speaker-icon') && !e.target.classList.contains('favorite-star')) {
                openModal(word);
            }
        });

        // Kliknutie na ikonu reproduktora
        card.querySelector('.speaker-icon').addEventListener('click', (e) => {
            e.stopPropagation(); // Zastaví propagáciu, aby sa neotvoril modal
            speak(e.target.dataset.word);
        });

        // Kliknutie na hviezdičku
        card.querySelector('.favorite-star').addEventListener('click', (e) => {
            e.stopPropagation(); // Zastaví propagáciu, aby sa neotvoril modal
            
            const wordFr = e.target.dataset.word;
            toggleFavorite(wordFr);
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
    const flashcardStar = document.getElementById('flashcard-star');
    const flashcardCategoryButtonsContainer = document.getElementById('flashcard-category-buttons');
    const prevBtn = document.getElementById('prev-flashcard');
    const nextBtn = document.getElementById('next-flashcard');
    const speakBtn = document.getElementById('speak-flashcard');
    let currentCardIndex = 0;
    let currentFlashcardCategory = null;
    let flashcardWords = [];
    
    function showFlashcard(index) {
        if (flashcardWords.length === 0) {
            // Ak nie sú zvolené žiadne slová, zobraz správu
            let textElement = flashcardFront.querySelector('.flashcard-text');
            if (!textElement) {
                textElement = document.createElement('div');
                textElement.className = 'flashcard-text';
                flashcardFront.appendChild(textElement);
            }
            textElement.textContent = 'Vyberte kategóriu';
            flashcardBack.textContent = 'Select category';
            
            // Skry hviezdičku
            flashcardStar.style.display = 'none';
            return;
        }
        
        const word = flashcardWords[index];
        
        // Najdi textový obsah v flashcard-front (bez hviezdičky)
        let textElement = flashcardFront.querySelector('.flashcard-text');
        if (!textElement) {
            // Ak neexistuje, vytvor ho
            textElement = document.createElement('div');
            textElement.className = 'flashcard-text';
            flashcardFront.appendChild(textElement);
        }
        textElement.textContent = word.fr;
        
        flashcardBack.textContent = Array.isArray(word.sk) ? word.sk.join(', ') : word.sk;
        flashcard.classList.remove('is-flipped');
        
        // Ukáž hviezdičku a aktualizuj ju
        flashcardStar.style.display = 'block';
        const star = flashcardStar;
        star.dataset.word = word.fr;
        
        if (isFavorite(word.fr)) {
            star.classList.add('favorite');
            flashcard.classList.add('favorite');
        } else {
            star.classList.remove('favorite');
            flashcard.classList.remove('favorite');
        }
    }
    
    // Klik na flashcard (ale nie na hviezdičku)
    flashcard.addEventListener('click', (e) => {
        if (!e.target.classList.contains('flashcard-favorite-star')) {
            flashcard.classList.toggle('is-flipped');
        }
    });

    // Klik na hviezdičku vo flashcard
    flashcardStar.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const wordFr = e.target.dataset.word;
        toggleFavorite(wordFr);
    });

    nextBtn.addEventListener('click', () => {
        if (flashcardWords.length > 0) {
            currentCardIndex = (currentCardIndex + 1) % flashcardWords.length;
            showFlashcard(currentCardIndex);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (flashcardWords.length > 0) {
            currentCardIndex = (currentCardIndex - 1 + flashcardWords.length) % flashcardWords.length;
            showFlashcard(currentCardIndex);
        }
    });
    
    speakBtn.addEventListener('click', () => {
        if (flashcardWords.length > 0 && flashcardWords[currentCardIndex]) {
            speak(flashcardWords[currentCardIndex].fr);
        }
    });
    
    
    // --- SEKCE 3: UČIŤ SA ---
    const presentationBtns = document.querySelectorAll('.presentation-btn');
    const presentationContent = document.getElementById('presentation-content');

    const presentations = {
        presentation1: `
            <div class="emoji-header">📌 Prečo sú francúzske členy také dôležité?</div>
            <p>Vo francúzštine podstatné meno málokedy stojí samé. Člen pred ním hovorí:</p>
            <ul>
                <li>O <strong>rode</strong> (mužský / ženský)</li>
                <li>O <strong>čísle</strong> (jednotné / množné)</li>
                <li>O tom, či ide o niečo <strong>konkrétne</strong>, <strong>všeobecné</strong>, alebo o <strong>časť niečoho</strong></li>
            </ul>
            <p><em>Slovenčina články nemá, preto sa treba naučiť automaticky ich pridávať.</em></p>

            <div class="emoji-header">1️⃣ Neurčité členy (articles indéfinis)</div>
            <p>Používame, keď hovoríme:</p>
            <ul>
                <li>O niečom <strong>prvýkrát</strong> alebo <strong>neurčito</strong></li>
                <li>O <strong>jednom z mnohých</strong> (nie o konkrétnom)</li>
            </ul>
            
            <table>
                <tr>
                    <th>Rod / číslo</th>
                    <th>Člen</th>
                    <th>Príklady</th>
                </tr>
                <tr>
                    <td>mužský, j.č.</td>
                    <td><code>un</code></td>
                    <td>un livre (kniha), un garçon (chlapec)</td>
                </tr>
                <tr>
                    <td>ženský, j.č.</td>
                    <td><code>une</code></td>
                    <td>une table (stôl), une fille (dievča)</td>
                </tr>
                <tr>
                    <td>množné číslo (oboje rody)</td>
                    <td><code>des</code></td>
                    <td>des livres (knihy), des enfants (deti)</td>
                </tr>
            </table>

            <div class="example-box">
                <div class="emoji-header">✏️ Príklady vo vetách:</div>
                <p><code>J'achète un pain.</code> (Kupujem jeden chlieb / nejaký chlieb.)</p>
                <p><code>Elle a une idée.</code> (Má jeden nápad / nejaký nápad.)</p>
                <p><code>Nous avons des amis en France.</code> (Máme nejakých priateľov vo Francúzsku.)</p>
            </div>

            <div class="negation-box">
                <div class="emoji-header">🚫 Negácia:</div>
                <p>V záporných vetách sa <code>un, une, des</code> → <code>de</code> (alebo <code>d'</code> pred samohláskou/nemým h):</p>
                <p><code>Je n'ai pas de voiture.</code> (Nemám auto.)</p>
                <p><code>Il n'y a pas <strong>d'</strong>eau.</code> (Niet vody.)</p>
            </div>

            <div class="emoji-header">2️⃣ Určité členy (articles définis)</div>
            <p>Používame, keď:</p>
            <ul>
                <li>Hovoríme o <strong>konkrétnej veci</strong>, ktorú už poslucháč pozná</li>
                <li>O niečom, čo sme už <strong>predtým spomenuli</strong></li>
                <li>O veciach <strong>všeobecne</strong> (všeobecné tvrdenia)</li>
            </ul>

            <table>
                <tr>
                    <th>Rod / číslo</th>
                    <th>Člen</th>
                    <th>Príklady</th>
                </tr>
                <tr>
                    <td>mužský, j.č.</td>
                    <td><code>le</code></td>
                    <td>le livre (tá kniha)</td>
                </tr>
                <tr>
                    <td>ženský, j.č.</td>
                    <td><code>la</code></td>
                    <td>la voiture (to auto)</td>
                </tr>
                <tr>
                    <td>pred samohláskou/nemým h</td>
                    <td><code>l'</code></td>
                    <td>l'arbre (strom), l'hôtel (hotel)</td>
                </tr>
                <tr>
                    <td>množné číslo (oboje rody)</td>
                    <td><code>les</code></td>
                    <td>les enfants (deti)</td>
                </tr>
            </table>

            <div class="example-box">
                <div class="emoji-header">✏️ Príklady vo vetách:</div>
                <p><code>Le chien de Marie est grand.</code> (Marien pes je veľký.)</p>
                <p><code>Regarde la lune.</code> (Pozri na mesiac.)</p>
                <p><code>J'aime les pommes.</code> (Mám rád jablká – všeobecne všetky.)</p>
                <p><code><strong>L'</strong>homme que tu as vu est mon oncle.</code> (Ten muž, ktorého si videl, je môj strýko.)</p>
            </div>

            <div class="emoji-header">3️⃣ Čiastočné členy (articles partitifs)</div>
            <p>Používame, keď:</p>
            <ul>
                <li>Hovoríme o <strong>neurčitom množstve</strong> niečoho, čo sa nedá presne spočítať (jedlo, tekutiny, abstraktné veci)</li>
                <li>Je to ako slovenské <em>"nejaký / trochu / časť"</em></li>
            </ul>

            <table>
                <tr>
                    <th>Forma</th>
                    <th>Použitie</th>
                    <th>Príklady</th>
                </tr>
                <tr>
                    <td><code>du</code></td>
                    <td>mužský j.č.</td>
                    <td>du pain (chlieb)</td>
                </tr>
                <tr>
                    <td><code>de la</code></td>
                    <td>ženský j.č.</td>
                    <td>de la confiture (džem)</td>
                </tr>
                <tr>
                    <td><code>de l'</code></td>
                    <td>pred samohláskou/nemým h</td>
                    <td>de l'eau (voda)</td>
                </tr>
                <tr>
                    <td><code>des</code></td>
                    <td>množné číslo (počítateľné)</td>
                    <td>des légumes (zelenina)</td>
                </tr>
            </table>

            <div class="example-box">
                <div class="emoji-header">✏️ Príklady vo vetách:</div>
                <p><code>Je veux du fromage.</code> (Chcem syr.)</p>
                <p><code>Nous achetons de la viande.</code> (Kupujeme mäso.)</p>
                <p><code>Il boit <strong>de l'</strong>eau.</code> (Pije vodu.)</p>
                <p><code>Elle mange des fraises.</code> (Je jahody.)</p>
            </div>

            <div class="negation-box">
                <div class="emoji-header">🚫 Negácia:</div>
                <p><code>Je ne veux pas de fromage.</code> (Nechcem syr.)</p>
                <p><code>Il n'y a pas <strong>d'</strong>eau.</code> (Niet vody.)</p>
            </div>

            <div class="emoji-header">🔹 Tipy a nuansy</div>
            
            <div class="tip-box">
                <h4>Zachovanie člena pri záľubách</h4>
                <p>Po slovesách <code>aimer</code>, <code>adorer</code>, <code>préférer</code>, <code>détester</code> používame určitý člen, aj keď v slovenčine by sme ho vynechali:</p>
                <p><code>J'aime le chocolat.</code> (Mám rád čokoládu.)</p>
                <p><code>Elle préfère les fleurs rouges.</code> (Uprednostňuje červené kvety.)</p>
            </div>

            <div class="tip-box">
                <h4>Všeobecné pravdy</h4>
                <p>Pri faktoch a všeobecných vyjadreniach:</p>
                <p><code><strong>L'</strong>eau bout à 100 degrés.</code> (Voda vrie pri 100 stupňoch.)</p>
            </div>

            <div class="tip-box">
                <h4>Pevné slovné spojenia</h4>
                <p>Niektoré výrazy si článok vždy nechajú:</p>
                <ul>
                    <li><code>jouer du piano</code> (hrať na klavír)</li>
                    <li><code>faire de la natation</code> (plávať)</li>
                    <li><code>avoir des ennuis</code> (mať problémy)</li>
                </ul>
            </div>

            <div class="quick-table">
                <div class="emoji-header">📚 Rýchla vizuálna tabuľka</div>
                <table>
                    <tr>
                        <th>Typ článku</th>
                        <th>Mužský j.č.</th>
                        <th>Ženský j.č.</th>
                        <th>Pred samohláskou / h</th>
                        <th>Množné</th>
                    </tr>
                    <tr>
                        <td><strong>Neurčitý</strong></td>
                        <td><code>un</code></td>
                        <td><code>une</code></td>
                        <td>—</td>
                        <td><code>des</code></td>
                    </tr>
                    <tr>
                        <td><strong>Určitý</strong></td>
                        <td><code>le</code></td>
                        <td><code>la</code></td>
                        <td><code>l'</code></td>
                        <td><code>les</code></td>
                    </tr>
                    <tr>
                        <td><strong>Čiastočný</strong></td>
                        <td><code>du</code></td>
                        <td><code>de la</code></td>
                        <td><code>de l'</code></td>
                        <td><code>des</code></td>
                    </tr>
                </table>
            </div>
        `,
        presentation2: `
            <div class="emoji-header">🏠 "Maison d'être" a prechod k AVOIR</div>
            <p>Vo francúzštine väčšina slovies pohybu a zmeny stavu (známe z mnemotechnických pomôcok <strong>Maison d'être</strong> alebo <strong>Dr. & Mrs. Vandertramp</strong>) tvorí Passé Composé s pomocným slovesom <code>ÊTRE</code>.</p>
            
            <div class="tip-box">
                <p><strong>Ale!</strong><br>
                Niektoré z nich môžu mať aj <code>AVOIR</code>, ak sa stávajú <strong>prechodnými</strong> – teda majú priamy predmet (odpovedajú na otázku <em>koho? čo?</em>).</p>
            </div>

            <div class="emoji-header">🔍 Ako rozhodnúť?</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div class="example-box" style="text-align: center;">
                    <h4>ÊTRE</h4>
                    <p>Podmet koná <strong>sám od seba</strong>, na sebe<br>
                    <em>(nemá priamy predmet)</em><br>
                    → opisuje sa samotný pohyb alebo návrat</p>
                </div>
                <div class="negation-box" style="text-align: center;">
                    <h4>AVOIR</h4>
                    <p>Podmet niečo robí <strong>niekomu/niečomu</strong><br>
                    <em>(má priamy predmet)</em><br>
                    → opisuje sa činnosť zameraná na objekt</p>
                </div>
            </div>

            <div class="tip-box">
                <div class="emoji-header">💡 Tip:</div>
                <p>Ak po slovese hneď nasleduje podstatné meno <strong>bez predložky</strong> → pravdepodobne ide o <code>AVOIR</code>.</p>
            </div>

            <div class="emoji-header">📜 Podrobná tabuľka</div>
            <table>
                <tr>
                    <th>Sloveso</th>
                    <th>S ÊTRE (neprechodné)</th>
                    <th>S AVOIR (prechodné)</th>
                </tr>
                <tr>
                    <td><strong>Monter</strong><br><em>(ísť hore / stúpať)</em></td>
                    <td><code>Elle est montée au troisième étage.</code><br><em>(Išla hore na tretie poschodie.)</em></td>
                    <td><code>Elle a monté la valise.</code><br><em>(Vyniesla kufor.)</em></td>
                </tr>
                <tr>
                    <td><strong>Descendre</strong><br><em>(ísť dole / zostúpiť)</em></td>
                    <td><code>Il est descendu par l'escalier.</code><br><em>(Zišiel dole po schodoch.)</em></td>
                    <td><code>Il a descendu la poubelle.</code><br><em>(Zniesol smeti.)</em></td>
                </tr>
                <tr>
                    <td><strong>Sortir</strong><br><em>(odísť / ísť von)</em></td>
                    <td><code>Je suis sorti(e) avec des amis.</code><br><em>(Išiel som von s priateľmi.)</em></td>
                    <td><code>J'ai sorti le chien.</code><br><em>(Vyvenčil som psa.)</em></td>
                </tr>
                <tr>
                    <td><strong>Rentrer</strong><br><em>(vrátiť sa domov)</em></td>
                    <td><code>Nous sommes rentrés tard.</code><br><em>(Vrátili sme sa domov neskoro.)</em></td>
                    <td><code>Il a rentré la voiture au garage.</code><br><em>(Dal auto do garáže.)</em></td>
                </tr>
                <tr>
                    <td><strong>Passer</strong><br><em>(prejsť / stráviť)</em></td>
                    <td><code>Le bus est passé devant moi.</code><br><em>(Autobus prešiel okolo mňa.)</em></td>
                    <td><code>J'ai passé un bon week-end.</code><br><em>(Strávil som dobrý víkend.)</em></td>
                </tr>
                <tr>
                    <td><strong>Retourner</strong><br><em>(vrátiť sa)</em></td>
                    <td><code>Elle est retournée en France.</code><br><em>(Vrátila sa do Francúzska.)</em></td>
                    <td><code>Il a retourné le livre à la bibliothèque.</code><br><em>(Vrátil knihu do knižnice.)</em></td>
                </tr>
            </table>

            <div class="quick-table">
                <div class="emoji-header">🗝 Pravidlo zapamätania</div>
                <p><strong><code>AVOIR</code></strong> → vždy, keď máš priamy predmet (<em>čo? koho?</em>)</p>
                <p><strong><code>ÊTRE</code></strong> → vždy, keď opisuješ len pohyb alebo návrat bez objektu</p>
            </div>

            <div class="emoji-header">⚠️ Pozor na tieto detaily:</div>
            
            <div class="tip-box">
                <h4>Zmena významu môže byť výrazná</h4>
                <p><strong>Sortir</strong> s ÊTRE = odísť, ísť von</p>
                <p><strong>Sortir</strong> s AVOIR = vybrať, vyviesť niečo von</p>
                <div class="example-box">
                    <p><code>Elle est sortie tôt.</code> (Odišla skoro.)</p>
                    <p><code>Elle a sorti son portable.</code> (Vybrala mobil.)</p>
                </div>
            </div>

            <div class="tip-box">
                <h4>Passer má veľmi široký význam</h4>
                <p>S ÊTRE = pohyb v priestore (prejsť)</p>
                <p>S AVOIR = tráviť čas, skúšať test, prekladať niečo</p>
                <div class="example-box">
                    <p><code>J'ai passé un examen.</code> (Spravil som skúšku.)</p>
                </div>
            </div>

            <div class="tip-box">
                <h4>Priamemu predmetu môže predchádzať zámeno</h4>
                <p><code>Je l'ai monté au grenier.</code> (Vyniesol som ho na povalu.) – stále AVOIR.</p>
            </div>

            <div class="emoji-header">🧠 Trik na zapamätanie</div>
            <div class="tip-box">
                <p>Predstav si, že si <strong>režisér filmu</strong>:</p>
                <ul>
                    <li>Ak kamera sleduje len <strong>teba ako sa pohybuješ</strong> → <code>ÊTRE</code></li>
                    <li>Ak kamera sleduje <strong>teba + vec</strong>, ktorú posúvaš, nesieš, vraciaš → <code>AVOIR</code></li>
                </ul>
            </div>

            <div class="emoji-header">✏️ Extra príklady</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin: 20px 0;">
                <div class="example-box">
                    <h4>MONTER</h4>
                    <p><strong>ÊTRE:</strong><br><code>Il est monté sur le toit.</code><br><em>(Vyliezol na strechu.)</em></p>
                    <p><strong>AVOIR:</strong><br><code>Il a monté les chaises au grenier.</code><br><em>(Vyniesol stoličky na povalu.)</em></p>
                </div>
                <div class="example-box">
                    <h4>DESCENDRE</h4>
                    <p><strong>ÊTRE:</strong><br><code>Elle est descendue rapidement.</code><br><em>(Zišla rýchlo dole.)</em></p>
                    <p><strong>AVOIR:</strong><br><code>Elle a descendu les rideaux.</code><br><em>(Zvesila záclony.)</em></p>
                </div>
                <div class="example-box">
                    <h4>SORTIR</h4>
                    <p><strong>ÊTRE:</strong><br><code>Nous sommes sortis de la maison.</code><br><em>(Vyšli sme z domu.)</em></p>
                    <p><strong>AVOIR:</strong><br><code>Nous avons sorti les livres de la boîte.</code><br><em>(Vybrali sme knihy z krabice.)</em></p>
                </div>
            </div>
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
        },
        {
            question: "Je n'ai pas ___ argent.",
            options: ["d'", "de l'", "du"],
            correct: "d'",
            explanation: "V zápore ide de/d'; pred samohláskou sa píše d'."
        },
        {
            question: "J'adore ___ chocolat.",
            options: ["le", "du", "un"],
            correct: "le",
            explanation: "Pri všeobecnej obľube (aimer/adorer) sa používa určitý člen."
        },
        {
            question: "Elle boit ___ eau.",
            options: ["de l'", "du", "la"],
            correct: "de l'",
            explanation: "Partitívny člen pred samohláskou je de l'."
        },
        {
            question: "Nous avons acheté ___ pommes.",
            options: ["des", "les", "de"],
            correct: "des",
            explanation: "Neurčité množné 'nejaké jablká' = des."
        },
        {
            question: "Je ne mange pas ___ viande.",
            options: ["de", "de la", "la"],
            correct: "de",
            explanation: "V zápore sa partitívny člen mení na de."
        },
        {
            question: "C'est ___ idée intéressante.",
            options: ["une", "la", "de l'"],
            correct: "une",
            explanation: "Prvýkrát spomínaná vec v sg. ž. rod → une."
        },
        {
            question: "Ce n'est pas ___ problème.",
            options: ["un", "de", "du"],
            correct: "un",
            explanation: "Po être sa člen v zápore nemení."
        },
        {
            question: "Il y a ___ étudiants dans la salle.",
            options: ["des", "les", "de"],
            correct: "des",
            explanation: "'Sú tam nejakí študenti' → des."
        },
        {
            question: "J'ai besoin ___ sucre.",
            options: ["de", "du", "le"],
            correct: "de",
            explanation: "Väzba avoir besoin de + podst. meno → holé de (bez člena)."
        },
        {
            question: "Elle vient ___ école.",
            options: ["de l'", "du", "de la"],
            correct: "de l'",
            explanation: "Pred slovom na samohlásku → de l'."
        },
        {
            question: "Je vais ___ cinéma.",
            options: ["au", "à la", "à l'"],
            correct: "au",
            explanation: "à + le = au (kontrakcia)."
        },
        {
            question: "Ils reviennent ___ vacances.",
            options: ["de", "des", "du"],
            correct: "de",
            explanation: "Pevné spojenie de vacances (bez člena)."
        },
        {
            question: "Tu prends ___ café ?",
            options: ["un", "du", "le"],
            correct: "un",
            explanation: "Objednávanie/'jeden kus' nápoja → un."
        },
        {
            question: "Il y a beaucoup ___ monde.",
            options: ["de", "du", "des"],
            correct: "de",
            explanation: "Po kvantifikátoroch (beaucoup, peu, trop…) → de."
        },
        {
            question: "J'ai acheté ___ lait.",
            options: ["du", "le", "un"],
            correct: "du",
            explanation: "Neurčité množstvo nepočítateľného → du."
        },
        {
            question: "Elle a ___ patience.",
            options: ["de la", "la", "une"],
            correct: "de la",
            explanation: "Abstraktny nepočítateľný pojem → de la."
        },
        {
            question: "Nous préférons ___ montagnes.",
            options: ["les", "des", "de"],
            correct: "les",
            explanation: "Všeobecný plurál pri preferenciách → les."
        },
        {
            question: "___ hommes sont arrivés tôt.",
            options: ["Des", "Les", "De"],
            correct: "Des",
            explanation: "'Nejakí muži prišli' → des."
        },
        {
            question: "Je cherche ___ appartement à louer.",
            options: ["un", "le", "du"],
            correct: "un",
            explanation: "Neurčitý jednotný → un."
        },
        {
            question: "Il n'y a plus ___ pain.",
            options: ["de", "du", "le"],
            correct: "de",
            explanation: "Zápor + partitív → de."
        },
        {
            question: "Elle a mis ___ livres sur la table.",
            options: ["des", "les", "de"],
            correct: "des",
            explanation: "'Položila nejaké knihy' → des."
        },
        {
            question: "Hier, elle ___ à la maison à 20h.",
            options: ["est rentrée", "a rentré", "a rentrée"],
            correct: "est rentrée",
            explanation: "rentrer (pohyb) → pomocné être; žena → zhoda -e."
        },
        {
            question: "Ils ___ la Tour Eiffel l'an dernier.",
            options: ["ont visité", "sont visités", "ont visite"],
            correct: "ont visité",
            explanation: "visiter je tranzitívne → pomocné avoir."
        },
        {
            question: "Elle ___ tomber dans l'escalier.",
            options: ["est tombée", "a tombé", "est tombé"],
            correct: "est tombée",
            explanation: "tomber → être; žena → -e."
        },
        {
            question: "Nous ___ le métro ce matin.",
            options: ["avons pris", "sommes pris", "avons prendu"],
            correct: "avons pris",
            explanation: "prendre → avoir; príčastie pris."
        },
        {
            question: "Quand il était petit, il ___ du piano.",
            options: ["jouait", "a joué", "joue"],
            correct: "jouait",
            explanation: "Opis zvyku v minulosti → imparfait."
        },
        {
            question: "Tout à coup, la porte ___.",
            options: ["s'est ouverte", "s'est ouvert", "a ouvert"],
            correct: "s'est ouverte",
            explanation: "Zvratné s'ouvrir → être; zhoda s la porte (ž. sg.)."
        },
        {
            question: "Elles ___ déjà ___ le film.",
            options: ["ont déjà vu", "sont déjà vues", "ont déjà voir"],
            correct: "ont déjà vu",
            explanation: "voir → avoir; príčastie vu."
        },
        {
            question: "Ils se ___ à 7 heures.",
            options: ["sont levés", "ont levé", "se sont levé"],
            correct: "sont levés",
            explanation: "Zvratné sloveso → être; plurál -s."
        },
        {
            question: "Elle s'est ___ les mains.",
            options: ["lavé", "lavée", "lavées"],
            correct: "lavé",
            explanation: "Pri priamom predmete po slovese (les mains) sa príčastie nezhoduje."
        },
        {
            question: "Les fleurs que j'___ hier sont belles.",
            options: ["ai achetées", "ai acheté", "ai achetée"],
            correct: "ai achetées",
            explanation: "Zhoda s que = COD pred slovesom (fleurs, pl.) → -es."
        },
        {
            question: "Hier, ils ___ très tôt.",
            options: ["sont partis", "ont partis", "sont parti"],
            correct: "sont partis",
            explanation: "partir → être; plurál -s."
        },
        {
            question: "On n'a pas ___ erreurs.",
            options: ["de", "des", "les"],
            correct: "de",
            explanation: "Zápor + neurčité množstvo → de."
        },
        {
            question: "J'ai acheté ___ œufs.",
            options: ["des", "de", "les"],
            correct: "des",
            explanation: "Počítateľné množné 'nejaké vajcia' → des."
        },
        {
            question: "C'est ___ eau minérale.",
            options: ["de l'", "l'", "la"],
            correct: "de l'",
            explanation: "Identifikácia látky/typu často s partitívom → de l'."
        },
        {
            question: "Il a beaucoup ___ travail.",
            options: ["de", "du", "des"],
            correct: "de",
            explanation: "Po beaucoup vždy de."
        },
        {
            question: "Tu veux ___ sucre dans ton café ?",
            options: ["du", "de", "le"],
            correct: "du",
            explanation: "Neurčité množstvo nepočítateľného → du."
        },
        {
            question: "Ce ne sont pas ___ bonnes idées.",
            options: ["de", "des", "les"],
            correct: "de",
            explanation: "des → de pred príd. menom v pluráli (de bonnes idées)."
        },
        {
            question: "J'aime ___ films français.",
            options: ["les", "des", "de"],
            correct: "les",
            explanation: "Všeobecné tvrdenie o žánri/podskupine → les."
        },
        {
            question: "Il n'a pas pris ___ dessert.",
            options: ["de", "du", "le"],
            correct: "de",
            explanation: "Zápor + partitív → de."
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
        // Vytvor kategóriové tlačidlá
        createCategoryButtons();
        
        // Vytvor kategóriové tlačidlá pre flashcards
        createFlashcardCategoryButtons();
        
        // Inicializuj flashcard (bez slova)
        showFlashcard(0);
        
        // Zobraz prvú prezentáciu
        showPresentation('presentation1');

        // Načítaj prvé cvičenie
        if (exercises.length > 0) {
            loadExercise(currentExerciseIndex);
        }
    }

    initialize();

});