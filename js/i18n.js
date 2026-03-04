/* ============================================
   ENROSADIRA - Manual i18n (EN/IT/DE)
   Auto-detect + persistent language switch
   ============================================ */

(function () {
  'use strict';

  var SUPPORTED_LANGS = ['en', 'it', 'de'];
  var STORAGE_KEY = 'enrosadira_lang';
  var currentLang = 'en';
  var originalTitle = document.title;
  var textNodes = [];

  var translations = {
    it: {},
    de: {}
  };

  Object.assign(translations.it, {
    'Enrosadira — Hospitality Intelligence for the Dolomites': "Enrosadira — Intelligenza per l'ospitalita nelle Dolomiti",
    'Consulting — Enrosadira': 'Consulenza — Enrosadira',
    'Products — Enrosadira': 'Prodotti — Enrosadira',
    'Legal — Enrosadira': 'Legale — Enrosadira',
    'Services': 'Servizi',
    'Insights': 'Approfondimenti',
    'Approach': 'Approccio',
    'Contact': 'Contatti',
    'Products': 'Prodotti',
    'Consulting': 'Consulenza',
    'Results': 'Risultati',
    'Team': 'Team',
    'Name': 'Nome',
    'Email': 'Email',
    'Company': 'Azienda',
    'Message': 'Messaggio',
    'Send Message': 'Invia messaggio',
    'Sending...': 'Invio in corso...',
    'Sent!': 'Inviato!',
    'Hospitality intelligence for the Dolomites': "Intelligenza per l'ospitalita nelle Dolomiti",
    'Bolzano, South Tyrol': 'Bolzano, Alto Adige',
    'Bolzano, South Tyrol, Italy': 'Bolzano, Alto Adige, Italia',
    '39100 (BZ), Italy': '39100 (BZ), Italia',
    '39100 Bolzano (BZ), Italy': '39100 Bolzano (BZ), Italia',
    'Privacy Policy': 'Informativa privacy',
    'Impressum': 'Note legali',
    '© 2026 Enrosadira. All rights reserved.': '© 2026 Enrosadira. Tutti i diritti riservati.',
    'Back to Enrosadira': 'Torna a Enrosadira',
    'Back to Home': 'Torna alla home',
    'Please enter your name.': 'Inserisci il tuo nome.',
    'Name must be at least 2 characters.': 'Il nome deve contenere almeno 2 caratteri.',
    'Please enter your email.': 'Inserisci la tua email.',
    'Please enter a valid email address.': 'Inserisci un indirizzo email valido.',
    'Please enter a message.': 'Inserisci un messaggio.',
    'Message must be at least 10 characters.': 'Il messaggio deve contenere almeno 10 caratteri.',
    'Error — try again': 'Errore — riprova',
    'Toggle menu': 'Apri menu',
    'LinkedIn (coming soon)': 'LinkedIn (prossimamente)',
    'LinkedIn coming soon': 'LinkedIn presto disponibile',
    'Start a Conversation': 'Inizia una conversazione',
    'Email: info.enrosadira@gmail.com': 'Email: info.enrosadira@gmail.com'
  });

  Object.assign(translations.de, {
    'Enrosadira — Hospitality Intelligence for the Dolomites': 'Enrosadira — Hospitality-Intelligenz fuer die Dolomiten',
    'Consulting — Enrosadira': 'Beratung — Enrosadira',
    'Products — Enrosadira': 'Produkte — Enrosadira',
    'Legal — Enrosadira': 'Rechtliches — Enrosadira',
    'Services': 'Leistungen',
    'Insights': 'Einblicke',
    'Approach': 'Ansatz',
    'Contact': 'Kontakt',
    'Products': 'Produkte',
    'Consulting': 'Beratung',
    'Results': 'Ergebnisse',
    'Team': 'Team',
    'Name': 'Name',
    'Email': 'E-Mail',
    'Company': 'Unternehmen',
    'Message': 'Nachricht',
    'Send Message': 'Nachricht senden',
    'Sending...': 'Wird gesendet...',
    'Sent!': 'Gesendet!',
    'Hospitality intelligence for the Dolomites': 'Hospitality-Intelligenz fuer die Dolomiten',
    'Bolzano, South Tyrol': 'Bozen, Suedtirol',
    'Bolzano, South Tyrol, Italy': 'Bozen, Suedtirol, Italien',
    '39100 (BZ), Italy': '39100 (BZ), Italien',
    '39100 Bolzano (BZ), Italy': '39100 Bozen (BZ), Italien',
    'Privacy Policy': 'Datenschutzerklaerung',
    'Impressum': 'Impressum',
    '© 2026 Enrosadira. All rights reserved.': '© 2026 Enrosadira. Alle Rechte vorbehalten.',
    'Back to Enrosadira': 'Zurueck zu Enrosadira',
    'Back to Home': 'Zurueck zur Startseite',
    'Please enter your name.': 'Bitte geben Sie Ihren Namen ein.',
    'Name must be at least 2 characters.': 'Der Name muss mindestens 2 Zeichen lang sein.',
    'Please enter your email.': 'Bitte geben Sie Ihre E-Mail ein.',
    'Please enter a valid email address.': 'Bitte geben Sie eine gueltige E-Mail-Adresse ein.',
    'Please enter a message.': 'Bitte geben Sie eine Nachricht ein.',
    'Message must be at least 10 characters.': 'Die Nachricht muss mindestens 10 Zeichen lang sein.',
    'Error — try again': 'Fehler — bitte erneut versuchen',
    'Toggle menu': 'Menue umschalten',
    'LinkedIn (coming soon)': 'LinkedIn (demnaechst)',
    'LinkedIn coming soon': 'LinkedIn bald verfuegbar',
    'Start a Conversation': 'Gespräch starten',
    'Email: info.enrosadira@gmail.com': 'E-Mail: info.enrosadira@gmail.com'
  });

  Object.assign(translations.it, {
    'Data-driven hospitality intelligence for the Dolomites': "Intelligenza per l'ospitalita nelle Dolomiti basata sui dati",
    'Discover Our Approach': 'Scopri il nostro approccio',
    'Scroll': 'Scorri',
    'Economics, not guesswork': 'Economia, non supposizioni',
    'In an industry driven by intuition and tradition, we bring the rigour of economic science. Enrosadira was founded by economists who understand both advanced analytics and the unique dynamics of Dolomite hospitality.': "In un settore guidato da intuizione e tradizione, portiamo il rigore della scienza economica. Enrosadira e stata fondata da economisti che comprendono sia l'analisi avanzata sia le dinamiche uniche dell'ospitalita dolomitica.",
    'We believe every marketing euro should be traceable to measurable outcomes. Our approach combines advanced analytics, economic modelling, and deep local knowledge to deliver strategies that actually work.': 'Crediamo che ogni euro investito nel marketing debba essere collegato a risultati misurabili. Il nostro approccio combina analisi avanzata, modellazione economica e conoscenza profonda del territorio per offrire strategie che funzionano davvero.',
    'From family-run rifugios to luxury resort groups, we help hospitality businesses make decisions grounded in evidence rather than guesswork.': "Dai rifugi a gestione familiare ai gruppi di resort di lusso, aiutiamo le strutture ricettive a prendere decisioni basate su evidenze e non su intuizioni.",
    'What We Do': 'Cosa facciamo',
    'From automation to advanced analytics — specialized tools for Dolomite hospitality': "Dall'automazione all'analisi avanzata — strumenti specializzati per l'ospitalita dolomitica",
    'Automation Processes': 'Processi di automazione',
    "In-house CRM software to automate offers to customers. Streamline every step from initial inquiry to confirmed booking with intelligent workflow automation.": 'Software CRM proprietario per automatizzare le offerte ai clienti. Snellisci ogni fase dalla prima richiesta alla prenotazione confermata con workflow intelligenti.',
    'Digital Marketing': 'Marketing digitale',
    'Full-service digital marketing: from account management to room sales on Chinese platforms. All-inclusive strategy — not just Google Ads, but every channel that moves the needle.': 'Marketing digitale completo: dalla gestione account alla vendita camere su piattaforme cinesi. Strategia all-inclusive — non solo Google Ads, ma ogni canale che genera risultati.',
    'Market Insights': 'Insight di mercato',
    'Economic analysis with the depth and context that automated tools consistently miss — grounded in how Dolomite hospitality actually works.': "Analisi economica con profondita e contesto che gli strumenti automatici spesso non colgono — basata su come funziona davvero l'ospitalita nelle Dolomiti.",
    'Cost Optimization & Strategic Consulting': 'Ottimizzazione dei costi e consulenza strategica',
    'Isolate the true effect of your pricing and policy changes versus what would have happened anyway. We apply research-grade analytical methods to deliver intelligence you can act on — not opinions.': 'Isoliamo il vero effetto delle tue modifiche di pricing e policy rispetto a cio che sarebbe successo comunque. Applichiamo metodi analitici di livello accademico per fornirti indicazioni operative, non opinioni.',
    'Enrosadira Software': 'Software Enrosadira',
    "Our automation tools, built in-house for Dolomite hospitality. See what's under the hood.": "I nostri strumenti di automazione, sviluppati internamente per l'ospitalita dolomitica. Scopri come funzionano.",
    'Explore Products': 'Esplora i prodotti',
    'Enrosadira Consulting': 'Consulenza Enrosadira',
    'See the real questions we answer — from pricing and promotions to marketing and staffing.': 'Scopri le domande reali a cui rispondiamo — da prezzi e promozioni a marketing e staffing.',
    'See Examples': 'Vedi esempi',
    'How we combine prediction, economic analysis, and cutting-edge methods to drive results': 'Come combiniamo previsione, analisi economica e metodi avanzati per generare risultati',
    'Predictive Intelligence': 'Intelligenza predittiva',
    'Stochastic gradient-boosted ensembles and deep feedforward architectures extract nonlinear structure from high-dimensional feature spaces — forecasting demand, scoring guest segments, and surfacing latent patterns across your data.': 'Ensemble stocastici gradient-boosted e architetture deep feedforward estraggono strutture non lineari da spazi ad alta dimensionalita — prevedendo la domanda, valutando i segmenti ospite e facendo emergere pattern latenti nei tuoi dati.',
    'These models optimise predictive fidelity. They tell you what will happen next, but not why. Even a model with near-perfect out-of-sample accuracy can confuse coincidence with mechanism.': "Questi modelli ottimizzano l'accuratezza predittiva. Ti dicono cosa accadra, ma non perche. Anche un modello con precisione quasi perfetta fuori campione puo confondere coincidenza e meccanismo causale.",
    'Features': 'Caratteristiche',
    'Hidden': 'Nascosto',
    'Prediction': 'Previsione',
    'Causal Insights': 'Insight causali',
    'Ad spend increased and bookings followed — but so did seasonal demand, exchange-rate shifts, and new inbound flight capacity. Observed correlation across these dimensions cannot identify which variable drove the outcome.': 'La spesa pubblicitaria e aumentata e le prenotazioni sono cresciute — ma sono aumentati anche domanda stagionale, variazioni del cambio e nuovi voli in ingresso. La correlazione osservata non identifica quale variabile abbia guidato il risultato.',
    'We apply econometric identification strategies to isolate the causal treatment effect of each decision, controlling for confounding variation. The result is a precise estimate of the incremental revenue attributable to your intervention — not to market conditions moving at the same time.': "Applichiamo strategie di identificazione econometrica per isolare l'effetto causale di ogni decisione, controllando i fattori confondenti. Il risultato e una stima precisa del ricavo incrementale attribuibile al tuo intervento — non alle condizioni di mercato concomitanti.",
    'Causal Machine Learning': 'Machine learning causale',
    'Causal machine learning combines the predictive power of modern algorithms with the rigour of economic reasoning — moving beyond correlation to isolate what actually drives results.': 'Il machine learning causale combina il potere predittivo degli algoritmi moderni con il rigore del ragionamento economico — superando la correlazione per isolare cio che genera davvero i risultati.',
    'The result is precision at the individual level — revealing which guest segments, properties, and channels respond most to a given action, and where every additional euro of spend generates the highest return.': "Il risultato e una precisione a livello individuale — mostrando quali segmenti, strutture e canali rispondono di piu a una determinata azione e dove ogni euro aggiuntivo genera il massimo ritorno.",
    'Causation': 'Causalita',
    'Causal': 'Causale',
    'Effect size by segment': 'Entita effetto per segmento'
  });

  Object.assign(translations.de, {
    'Data-driven hospitality intelligence for the Dolomites': 'Datengetriebene Hospitality-Intelligenz fuer die Dolomiten',
    'Discover Our Approach': 'Unseren Ansatz entdecken',
    'Scroll': 'Scrollen',
    'Economics, not guesswork': 'Oekonomie statt Bauchgefuehl',
    'In an industry driven by intuition and tradition, we bring the rigour of economic science. Enrosadira was founded by economists who understand both advanced analytics and the unique dynamics of Dolomite hospitality.': 'In einer Branche, die von Intuition und Tradition gepraegt ist, bringen wir die Strenge der Wirtschaftswissenschaft ein. Enrosadira wurde von Oekonomen gegruendet, die sowohl fortgeschrittene Analytik als auch die besonderen Dynamiken der Dolomiten-Hotellerie verstehen.',
    'We believe every marketing euro should be traceable to measurable outcomes. Our approach combines advanced analytics, economic modelling, and deep local knowledge to deliver strategies that actually work.': 'Wir sind ueberzeugt, dass jeder Marketing-Euro auf messbare Ergebnisse zurueckfuehrbar sein muss. Unser Ansatz verbindet fortgeschrittene Analytik, oekonomische Modellierung und tiefes lokales Wissen, um Strategien zu liefern, die wirklich funktionieren.',
    'From family-run rifugios to luxury resort groups, we help hospitality businesses make decisions grounded in evidence rather than guesswork.': 'Von familiengefuehrten Rifugi bis zu Luxus-Resortgruppen helfen wir Hospitality-Betrieben, evidenzbasierte Entscheidungen statt Vermutungen zu treffen.',
    'What We Do': 'Was wir tun',
    'From automation to advanced analytics — specialized tools for Dolomite hospitality': 'Von Automatisierung bis Advanced Analytics — spezialisierte Werkzeuge fuer die Dolomiten-Hotellerie',
    'Automation Processes': 'Automatisierungsprozesse',
    "In-house CRM software to automate offers to customers. Streamline every step from initial inquiry to confirmed booking with intelligent workflow automation.": 'Eigene CRM-Software zur Automatisierung von Angeboten an Gaeste. Optimieren Sie jeden Schritt von der ersten Anfrage bis zur bestaetigten Buchung mit intelligenter Workflow-Automatisierung.',
    'Digital Marketing': 'Digitales Marketing',
    'Full-service digital marketing: from account management to room sales on Chinese platforms. All-inclusive strategy — not just Google Ads, but every channel that moves the needle.': 'Digitalmarketing im Full-Service: vom Account-Management bis zum Zimmerverkauf auf chinesischen Plattformen. Ganzheitliche Strategie — nicht nur Google Ads, sondern jeder Kanal, der Wirkung zeigt.',
    'Market Insights': 'Markteinblicke',
    'Economic analysis with the depth and context that automated tools consistently miss — grounded in how Dolomite hospitality actually works.': 'Wirtschaftliche Analyse mit Tiefe und Kontext, die automatisierte Tools oft uebersehen — basierend darauf, wie Hospitality in den Dolomiten tatsaechlich funktioniert.',
    'Cost Optimization & Strategic Consulting': 'Kostenoptimierung und strategische Beratung',
    'Isolate the true effect of your pricing and policy changes versus what would have happened anyway. We apply research-grade analytical methods to deliver intelligence you can act on — not opinions.': 'Wir isolieren den echten Effekt Ihrer Preis- und Policy-Aenderungen von dem, was ohnehin passiert waere. Dabei nutzen wir analytische Methoden auf Forschungsniveau und liefern belastbare Entscheidungsgrundlagen statt Meinungen.',
    'Enrosadira Software': 'Enrosadira Software',
    "Our automation tools, built in-house for Dolomite hospitality. See what's under the hood.": 'Unsere Automatisierungstools, intern entwickelt fuer die Dolomiten-Hotellerie. Sehen Sie, was darunter steckt.',
    'Explore Products': 'Produkte entdecken',
    'Enrosadira Consulting': 'Enrosadira Beratung',
    'See the real questions we answer — from pricing and promotions to marketing and staffing.': 'Sehen Sie die realen Fragen, die wir beantworten — von Preisen und Promotionen bis zu Marketing und Staffing.',
    'See Examples': 'Beispiele ansehen',
    'How we combine prediction, economic analysis, and cutting-edge methods to drive results': 'Wie wir Prognose, wirtschaftliche Analyse und modernste Methoden kombinieren, um Ergebnisse zu erzielen',
    'Predictive Intelligence': 'Praediktive Intelligenz',
    'Stochastic gradient-boosted ensembles and deep feedforward architectures extract nonlinear structure from high-dimensional feature spaces — forecasting demand, scoring guest segments, and surfacing latent patterns across your data.': 'Stochastische Gradient-Boosted-Ensembles und tiefe Feedforward-Architekturen extrahieren nichtlineare Strukturen aus hochdimensionalen Merkmalsraeumen — fuer Nachfrageprognosen, Segment-Scoring und das Aufdecken latenter Muster in Ihren Daten.',
    'These models optimise predictive fidelity. They tell you what will happen next, but not why. Even a model with near-perfect out-of-sample accuracy can confuse coincidence with mechanism.': 'Diese Modelle optimieren die Prognoseguete. Sie sagen, was als Naechstes passiert, aber nicht warum. Selbst ein Modell mit nahezu perfekter Out-of-Sample-Genauigkeit kann Zufall mit Mechanismus verwechseln.',
    'Features': 'Merkmale',
    'Hidden': 'Ausgeblendet',
    'Prediction': 'Prognose',
    'Causal Insights': 'Kausale Einblicke',
    'Ad spend increased and bookings followed — but so did seasonal demand, exchange-rate shifts, and new inbound flight capacity. Observed correlation across these dimensions cannot identify which variable drove the outcome.': 'Die Werbeausgaben stiegen und die Buchungen folgten — gleichzeitig stiegen aber auch saisonale Nachfrage, Wechselkursbewegungen und neue Flugkapazitaeten. Beobachtete Korrelation kann nicht zeigen, welche Variable das Ergebnis wirklich getrieben hat.',
    'We apply econometric identification strategies to isolate the causal treatment effect of each decision, controlling for confounding variation. The result is a precise estimate of the incremental revenue attributable to your intervention — not to market conditions moving at the same time.': 'Wir wenden oekonometrische Identifikationsstrategien an, um den kausalen Effekt jeder Entscheidung zu isolieren und stoerende Einfluesse zu kontrollieren. Das Ergebnis ist eine praezise Schaetzung des inkrementellen Umsatzes durch Ihre Massnahme — nicht durch gleichzeitige Marktbewegungen.',
    'Causal Machine Learning': 'Kausales Machine Learning',
    'Causal machine learning combines the predictive power of modern algorithms with the rigour of economic reasoning — moving beyond correlation to isolate what actually drives results.': 'Kausales Machine Learning verbindet die Prognosekraft moderner Algorithmen mit der Strenge oekonomischer Logik — und geht ueber Korrelation hinaus, um echte Wirkungstreiber zu isolieren.',
    'The result is precision at the individual level — revealing which guest segments, properties, and channels respond most to a given action, and where every additional euro of spend generates the highest return.': 'Das Ergebnis ist Praezision auf individueller Ebene — es zeigt, welche Segmente, Betriebe und Kanaele am staerksten auf eine Massnahme reagieren und wo jeder zusaetzliche Euro den hoechsten Ertrag liefert.',
    'Causation': 'Kausalitaet',
    'Causal': 'Kausal',
    'Effect size by segment': 'Effektgroesse je Segment'
  });

  Object.assign(translations.it, {
    'Our Approach': 'Il nostro approccio',
    'A rigorous, four-stage methodology grounded in economic science': 'Una metodologia rigorosa in quattro fasi, fondata sulla scienza economica',
    'Data Collection & Market Assessment': 'Raccolta dati e valutazione del mercato',
    'We gather comprehensive market data — occupancy rates, pricing dynamics, competitor positioning, seasonal patterns, and guest demographics — to build a complete picture of your competitive landscape.': 'Raccogliamo dati di mercato completi — tassi di occupazione, dinamiche di prezzo, posizionamento competitivo, pattern stagionali e demografia degli ospiti — per costruire una visione completa del tuo contesto competitivo.',
    'Economic Modelling & Impact Analysis': 'Modellazione economica e analisi di impatto',
    'Using econometric techniques, we build models that isolate true cause-and-effect relationships. We answer: what would have happened without this campaign? Where is spend generating zero incremental return?': "Usando tecniche econometriche, costruiamo modelli che isolano relazioni reali di causa-effetto. Rispondiamo a domande come: cosa sarebbe successo senza questa campagna? Dove la spesa non genera ritorno incrementale?",
    'Strategy Design & Implementation': 'Progettazione e implementazione strategica',
    'Evidence-based strategies tailored to your property, market position, and goals. We provide clear roadmaps with measurable milestones — not vague recommendations.': 'Strategie basate su evidenze, su misura per la tua struttura, il tuo posizionamento e i tuoi obiettivi. Forniamo roadmap chiare con milestone misurabili — non raccomandazioni vaghe.',
    'Continuous Monitoring & Optimization': 'Monitoraggio continuo e ottimizzazione',
    'Markets evolve, and so do our strategies. We continuously monitor performance, refine models, and adapt recommendations to ensure sustained results across seasons.': 'I mercati evolvono, e cosi fanno le nostre strategie. Monitoriamo costantemente le performance, aggiorniamo i modelli e adattiamo le raccomandazioni per garantire risultati nel tempo.',
    'The Team': 'Il team',
    'Economists and analysts rooted in South Tyrol, with international expertise': 'Economisti e analisti radicati in Alto Adige, con esperienza internazionale',
    'Founding Partner & Lead Economist': 'Partner fondatore e capo economista',
    'Data Analyst & Econometrician': 'Data analyst ed econometrico',
    'Marketing Strategist': 'Stratega marketing',
    'Rooted in the Dolomites': 'Radicati nelle Dolomiti',
    "The Dolomites are not just where we work — they're where we live. We understand the rhythm of seasonal tourism, the nuances of the South Tyrolean hospitality market, and the unique challenges that come with operating in one of the world's most iconic mountain destinations.": "Le Dolomiti non sono solo il luogo in cui lavoriamo — sono il luogo in cui viviamo. Conosciamo il ritmo del turismo stagionale, le sfumature del mercato ricettivo altoatesino e le sfide uniche di operare in una delle destinazioni montane piu iconiche al mondo.",
    'From the ski season dynamics of Val Gardena to the summer hiking peaks of Alta Badia, our insights are grounded in genuine local knowledge. This gives our clients an analytical edge that no outside consultancy can replicate.': 'Dalle dinamiche della stagione sciistica in Val Gardena ai picchi estivi di escursionismo in Alta Badia, i nostri insight si basano su conoscenza locale autentica. Questo offre ai nostri clienti un vantaggio analitico che nessuna consulenza esterna puo replicare.',
    'Start the Conversation': 'Inizia la conversazione',
    "Ready to make data-driven decisions? Whether you're exploring a new market, questioning your marketing ROI, or planning next season's strategy — we'd like to hear from you.": 'Pronto a prendere decisioni guidate dai dati? Che tu stia esplorando un nuovo mercato, mettendo in discussione il ROI del marketing o pianificando la prossima stagione — ci farebbe piacere sentirti.'
  });

  Object.assign(translations.de, {
    'Our Approach': 'Unser Ansatz',
    'A rigorous, four-stage methodology grounded in economic science': 'Eine strenge Vier-Stufen-Methodik auf Grundlage der Wirtschaftswissenschaft',
    'Data Collection & Market Assessment': 'Datenerhebung und Marktbewertung',
    'We gather comprehensive market data — occupancy rates, pricing dynamics, competitor positioning, seasonal patterns, and guest demographics — to build a complete picture of your competitive landscape.': 'Wir erfassen umfassende Marktdaten — Auslastung, Preisdynamik, Wettbewerbspositionierung, saisonale Muster und Gaestedemografie — um ein vollstaendiges Bild Ihres Wettbewerbsumfelds zu erstellen.',
    'Economic Modelling & Impact Analysis': 'Oekonomische Modellierung und Wirkungsanalyse',
    'Using econometric techniques, we build models that isolate true cause-and-effect relationships. We answer: what would have happened without this campaign? Where is spend generating zero incremental return?': 'Mit oekonometrischen Verfahren erstellen wir Modelle, die echte Ursache-Wirkung-Beziehungen isolieren. Wir beantworten: Was waere ohne diese Kampagne passiert? Wo erzeugt Budget keinen inkrementellen Ertrag?',
    'Strategy Design & Implementation': 'Strategieentwicklung und Umsetzung',
    'Evidence-based strategies tailored to your property, market position, and goals. We provide clear roadmaps with measurable milestones — not vague recommendations.': 'Evidenzbasierte Strategien, zugeschnitten auf Ihren Betrieb, Ihre Marktposition und Ihre Ziele. Wir liefern klare Roadmaps mit messbaren Meilensteinen — keine vagen Empfehlungen.',
    'Continuous Monitoring & Optimization': 'Kontinuierliches Monitoring und Optimierung',
    'Markets evolve, and so do our strategies. We continuously monitor performance, refine models, and adapt recommendations to ensure sustained results across seasons.': 'Maerkte veraendern sich — unsere Strategien auch. Wir ueberwachen kontinuierlich die Performance, verfeinern Modelle und passen Empfehlungen an, um nachhaltige Ergebnisse ueber alle Saisons sicherzustellen.',
    'The Team': 'Das Team',
    'Economists and analysts rooted in South Tyrol, with international expertise': 'Oekonomen und Analysten mit Wurzeln in Suedtirol und internationaler Expertise',
    'Founding Partner & Lead Economist': 'Gruendungspartner und Lead-Economist',
    'Data Analyst & Econometrician': 'Data-Analyst und Oekonometriker',
    'Marketing Strategist': 'Marketingstratege',
    'Rooted in the Dolomites': 'Verwurzelt in den Dolomiten',
    "The Dolomites are not just where we work — they're where we live. We understand the rhythm of seasonal tourism, the nuances of the South Tyrolean hospitality market, and the unique challenges that come with operating in one of the world's most iconic mountain destinations.": 'Die Dolomiten sind nicht nur unser Arbeitsort — sie sind unser Zuhause. Wir verstehen den Rhythmus des saisonalen Tourismus, die Besonderheiten des Suedtiroler Hospitality-Marktes und die speziellen Herausforderungen eines der ikonischsten Bergreiseziele der Welt.',
    'From the ski season dynamics of Val Gardena to the summer hiking peaks of Alta Badia, our insights are grounded in genuine local knowledge. This gives our clients an analytical edge that no outside consultancy can replicate.': 'Von den Skisaison-Dynamiken in Val Gardena bis zu den Sommer-Hoechstzeiten in Alta Badia basieren unsere Einblicke auf echtem lokalem Wissen. Das verschafft unseren Kunden einen analytischen Vorteil, den keine externe Beratung replizieren kann.',
    'Start the Conversation': 'Gespräch starten',
    "Ready to make data-driven decisions? Whether you're exploring a new market, questioning your marketing ROI, or planning next season's strategy — we'd like to hear from you.": 'Bereit fuer datenbasierte Entscheidungen? Egal ob Sie einen neuen Markt erschliessen, den Marketing-ROI hinterfragen oder die naechste Saison planen — wir freuen uns auf Ihre Nachricht.'
  });

  Object.assign(translations.it, {
    'The questions that': 'Le domande che',
    'actually matter': 'contano davvero',
    'Revenue went up, costs went down, bookings climbed — but was it your decision or the market? We separate signal from noise so you know exactly what works.': 'Ricavi in aumento, costi in calo, prenotazioni in crescita — ma e stata la tua decisione o il mercato? Separiamo il segnale dal rumore per capire con precisione cosa funziona.',
    'Core consulting scenarios': 'Scenari di consulenza principali',
    'Evidence-based recommendations': 'Raccomandazioni basate su evidenze',
    'Decisions left to guesswork': 'Decisioni lasciate alle supposizioni',
    'Tailored to your property': 'Su misura per la tua struttura',
    'Every hospitality business makes decisions under uncertainty. Prices change, promotions launch, staff levels shift — and the numbers move. The hard part is knowing whether your decision caused the result, or whether the market would have moved anyway.': "Ogni attivita ricettiva prende decisioni in condizioni di incertezza. I prezzi cambiano, le promozioni partono, i livelli di staff variano — e i numeri si muovono. La parte difficile e capire se il risultato dipende dalla tua decisione o se il mercato si sarebbe mosso comunque.",
    'We apply the methods of causal economics to isolate the true impact of each choice, so you act on evidence rather than intuition.': "Applichiamo i metodi dell'economia causale per isolare il vero impatto di ogni scelta, cosi puoi agire su evidenze e non su intuizioni.",
    'Here are six real scenarios we work on with clients.': 'Ecco sei scenari reali su cui lavoriamo con i clienti.',
    'Real Questions, Real Answers': 'Domande reali, risposte reali',
    'Each scenario below is a pattern we see across Dolomite hospitality — and the kind of analysis we deliver': "Ogni scenario qui sotto rappresenta un modello ricorrente nell'ospitalita dolomitica — e il tipo di analisi che forniamo.",
    'Beverage Pricing': 'Prezzi beverage',
    'A restaurant raises the price of bottled water by one euro and orders drop. But that same month brought fewer tourists to the valley. Was it the price change, or the quieter season?': "Un ristorante aumenta di un euro il prezzo dell'acqua in bottiglia e gli ordini calano. Ma nello stesso mese sono arrivati meno turisti in valle. E stato il prezzo o la stagione piu debole?",
    'We measure the actual causal impact of the pricing decision — separating what you control from what the market did on its own.': 'Misuriamo il reale impatto causale della decisione di prezzo — separando cio che controlli da cio che il mercato ha fatto da solo.',
    'In-House Dining': 'Ristorazione interna',
    'A hotel offers dining discounts to get guests eating in-house instead of down the road. Covers go up. But is the discount actually shifting behaviour, or were guests already staying in?': 'Un hotel offre sconti ristorante per spingere gli ospiti a cenare in struttura invece che fuori. I coperti aumentano. Ma lo sconto sta davvero cambiando il comportamento o gli ospiti sarebbero rimasti comunque?',
    'We design and evaluate the experiment to determine whether the promotion drives incremental revenue — so you stop guessing and start optimising.': "Progettiamo e valutiamo l'esperimento per capire se la promozione genera ricavo incrementale — cosi smetti di andare a intuito e inizi a ottimizzare.",
    'Marketing Attribution': 'Attribuzione marketing',
    'You doubled your ad budget and bookings went up. But so did tourist arrivals across the whole valley, and a new direct flight opened from Munich. How much of the lift was actually your spend?': 'Hai raddoppiato il budget advertising e le prenotazioni sono salite. Ma sono aumentati anche gli arrivi turistici in tutta la valle ed e stato aperto un nuovo volo diretto da Monaco. Quanto della crescita dipende davvero dalla tua spesa?',
    'We separate what your marketing spend delivered from what the market brought for free — so every euro is traceable to an outcome.': 'Separiamo cio che ha prodotto la tua spesa marketing da cio che il mercato ha portato gratuitamente — cosi ogni euro e tracciabile a un risultato.',
    'Seasonal Staffing': 'Staffing stagionale',
    'You cut housekeeping hours in shoulder season and review scores dipped. But scores always dip in shoulder season when the mix of guests changes. Was it the staffing cut or the seasonal pattern?': 'Riduci le ore housekeeping in bassa stagione e i punteggi recensioni calano. Ma i punteggi calano sempre in bassa stagione quando cambia il mix ospiti. E stato il taglio staff o il pattern stagionale?',
    'We isolate the staffing effect from the seasonal baseline so you set the right level — without overspending or risking reviews.': 'Isoliamo l effetto dello staffing dalla baseline stagionale cosi puoi impostare il livello corretto — senza sovraspendere o rischiare le recensioni.',
    'Loyalty Programme': 'Programma fedelta',
    "You introduced a returning-guest discount and repeat bookings rose 18%. But repeat bookings were already trending upward before the programme launched. How much of the increase is actually the discount?": "Hai introdotto uno sconto per ospiti di ritorno e le prenotazioni repeat sono salite del 18%. Ma il trend era gia in crescita prima del lancio del programma. Quanto dell'aumento dipende davvero dallo sconto?",
    "We measure the programme's true incremental impact — accounting for the pre-existing trend so you know what the discount is really worth.": "Misuriamo il vero impatto incrementale del programma — tenendo conto del trend preesistente, cosi sai quanto vale davvero lo sconto.",
    'Spa & Wellness Upsell': 'Upsell spa e wellness',
    'You started offering spa packages at check-in and wellness revenue climbed. But the spa was also renovated last quarter. Is the revenue lift from the upsell pitch or the new facilities?': "Hai iniziato a proporre pacchetti spa al check-in e i ricavi wellness sono saliti. Ma la spa e stata anche rinnovata nel trimestre precedente. L aumento deriva dall'upsell o dalle nuove strutture?",
    'We untangle the upsell pitch from the renovation effect — so you know which investment is actually driving the return.': "Separiamo l'effetto della proposta upsell da quello della ristrutturazione — cosi sai quale investimento sta davvero generando ritorno.",
    'Have a question like these?': 'Hai una domanda simile?',
    "Every property has decisions that deserve better evidence. Tell us yours and we'll show you what the data can reveal.": 'Ogni struttura ha decisioni che meritano evidenze migliori. Raccontaci la tua e ti mostreremo cosa possono rivelare i dati.'
  });

  Object.assign(translations.de, {
    'The questions that': 'Die Fragen, die',
    'actually matter': 'wirklich zaehlen',
    'Revenue went up, costs went down, bookings climbed — but was it your decision or the market? We separate signal from noise so you know exactly what works.': 'Umsaetze stiegen, Kosten sanken, Buchungen nahmen zu — aber war es Ihre Entscheidung oder der Markt? Wir trennen Signal von Rauschen, damit klar wird, was wirklich wirkt.',
    'Core consulting scenarios': 'Kernszenarien der Beratung',
    'Evidence-based recommendations': 'Evidenzbasierte Empfehlungen',
    'Decisions left to guesswork': 'Entscheidungen ohne fundierte Grundlage',
    'Tailored to your property': 'Auf Ihren Betrieb zugeschnitten',
    'Every hospitality business makes decisions under uncertainty. Prices change, promotions launch, staff levels shift — and the numbers move. The hard part is knowing whether your decision caused the result, or whether the market would have moved anyway.': 'Jeder Hospitality-Betrieb entscheidet unter Unsicherheit. Preise aendern sich, Promotionen starten, Personalniveaus verschieben sich — und die Kennzahlen bewegen sich. Die Schwierigkeit liegt darin zu erkennen, ob Ihre Entscheidung den Effekt verursacht hat oder der Markt sich ohnehin so entwickelt haette.',
    'We apply the methods of causal economics to isolate the true impact of each choice, so you act on evidence rather than intuition.': 'Wir nutzen Methoden der kausalen Oekonomie, um den echten Effekt jeder Entscheidung zu isolieren, damit Sie auf Evidenz statt auf Intuition handeln.',
    'Here are six real scenarios we work on with clients.': 'Hier sind sechs reale Szenarien, an denen wir mit Kunden arbeiten.',
    'Real Questions, Real Answers': 'Reale Fragen, reale Antworten',
    'Each scenario below is a pattern we see across Dolomite hospitality — and the kind of analysis we deliver': 'Jedes Szenario unten ist ein Muster, das wir in der Dolomiten-Hotellerie sehen — und die Art von Analyse, die wir liefern.',
    'Beverage Pricing': 'Getraenkepreisgestaltung',
    'A restaurant raises the price of bottled water by one euro and orders drop. But that same month brought fewer tourists to the valley. Was it the price change, or the quieter season?': 'Ein Restaurant erhoeht den Preis fuer Flaschenwasser um einen Euro, und die Bestellungen sinken. Im selben Monat kamen jedoch weniger Touristen ins Tal. Lag es an der Preisaenderung oder an der ruhigeren Saison?',
    'We measure the actual causal impact of the pricing decision — separating what you control from what the market did on its own.': 'Wir messen den tatsaechlichen kausalen Effekt der Preisentscheidung — und trennen, was Sie steuern, von dem, was der Markt alleine getan hat.',
    'In-House Dining': 'Inhouse-Gastronomie',
    'A hotel offers dining discounts to get guests eating in-house instead of down the road. Covers go up. But is the discount actually shifting behaviour, or were guests already staying in?': 'Ein Hotel bietet Restaurant-Rabatte an, damit Gaeste im Haus statt auswaerts essen. Die Tischbelegungen steigen. Aber verschiebt der Rabatt wirklich Verhalten oder waeren die Gaeste ohnehin geblieben?',
    'We design and evaluate the experiment to determine whether the promotion drives incremental revenue — so you stop guessing and start optimising.': 'Wir konzipieren und evaluieren das Experiment, um festzustellen, ob die Promotion inkrementellen Umsatz erzeugt — so wird aus Raten echte Optimierung.',
    'Marketing Attribution': 'Marketing-Attribution',
    'You doubled your ad budget and bookings went up. But so did tourist arrivals across the whole valley, and a new direct flight opened from Munich. How much of the lift was actually your spend?': 'Sie haben Ihr Werbebudget verdoppelt, und die Buchungen stiegen. Gleichzeitig stiegen aber auch die Touristenzahlen im gesamten Tal, und ein neuer Direktflug aus Muenchen startete. Wie viel des Uplifts stammt wirklich aus Ihrem Budget?',
    'We separate what your marketing spend delivered from what the market brought for free — so every euro is traceable to an outcome.': 'Wir trennen, was Ihr Marketingbudget geliefert hat, von dem, was der Markt kostenlos mitgebracht hat — damit jeder Euro einem Ergebnis zugeordnet werden kann.',
    'Seasonal Staffing': 'Saisonale Personalplanung',
    'You cut housekeeping hours in shoulder season and review scores dipped. But scores always dip in shoulder season when the mix of guests changes. Was it the staffing cut or the seasonal pattern?': 'Sie reduzieren Housekeeping-Stunden in der Nebensaison und die Bewertungswerte sinken. Doch in der Nebensaison sinken Werte oft ohnehin durch veraenderten Gaestemix. Lag es am Personalabbau oder am saisonalen Muster?',
    'We isolate the staffing effect from the seasonal baseline so you set the right level — without overspending or risking reviews.': 'Wir isolieren den Personaleffekt von der saisonalen Baseline, damit Sie das richtige Niveau setzen — ohne Ueberausgaben oder Risiko bei Bewertungen.',
    'Loyalty Programme': 'Loyalitaetsprogramm',
    "You introduced a returning-guest discount and repeat bookings rose 18%. But repeat bookings were already trending upward before the programme launched. How much of the increase is actually the discount?": 'Sie haben einen Rabatt fuer wiederkehrende Gaeste eingefuehrt und Wiederholungsbuchungen stiegen um 18 %. Doch der Trend zeigte bereits vorher nach oben. Wie viel des Anstiegs ist wirklich auf den Rabatt zurueckzufuehren?',
    "We measure the programme's true incremental impact — accounting for the pre-existing trend so you know what the discount is really worth.": 'Wir messen den echten inkrementellen Effekt des Programms — unter Beruecksichtigung des bestehenden Trends, damit klar ist, was der Rabatt wirklich wert ist.',
    'Spa & Wellness Upsell': 'Spa- und Wellness-Upsell',
    'You started offering spa packages at check-in and wellness revenue climbed. But the spa was also renovated last quarter. Is the revenue lift from the upsell pitch or the new facilities?': 'Sie bieten beim Check-in Spa-Pakete an und der Wellness-Umsatz steigt. Gleichzeitig wurde das Spa im letzten Quartal renoviert. Kommt der Umsatzanstieg vom Upsell oder von den neuen Einrichtungen?',
    'We untangle the upsell pitch from the renovation effect — so you know which investment is actually driving the return.': 'Wir entwirren den Effekt des Upsell-Pitches vom Renovierungseffekt — damit klar ist, welche Investition den Ertrag wirklich treibt.',
    'Have a question like these?': 'Haben Sie eine Frage wie diese?',
    "Every property has decisions that deserve better evidence. Tell us yours and we'll show you what the data can reveal.": 'Jeder Betrieb hat Entscheidungen, die bessere Evidenz verdienen. Erzaehlen Sie uns Ihre, und wir zeigen, was die Daten offenlegen.'
  });

  Object.assign(translations.it, {
    'Hospitality automation,': "Automazione per l'ospitalita,",
    'engineered': 'progettata con metodo',
    "From first inquiry to confirmed booking — software built by the people who understand Dolomite hospitality from the inside.": "Dalla prima richiesta alla prenotazione confermata — software costruito da chi conosce dall'interno l'ospitalita dolomitica.",
    'View Plans': 'Vedi piani',
    'Request a Demo': 'Richiedi demo',
    'Average offer generation time': 'Tempo medio di generazione offerta',
    'Faster inquiry-to-booking cycle': 'Ciclo richiesta-prenotazione piu rapido',
    'Manual data entry required': 'Inserimento dati manuale richiesto',
    'Automated guest communication': 'Comunicazione ospiti automatizzata',
    'Inquiry Pipeline': 'Pipeline richieste',
    'Every inquiry captured. Nothing slips through.': 'Ogni richiesta viene acquisita. Nulla va perso.',
    'Incoming requests from email, web forms, OTAs, and messaging platforms flow into a single unified pipeline. The system classifies, prioritises, and routes each inquiry automatically.': "Le richieste in arrivo da email, form web, OTA e piattaforme di messaggistica confluiscono in un'unica pipeline. Il sistema classifica, prioritizza e instrada ogni richiesta automaticamente.",
    'Multi-channel ingestion with automatic deduplication': 'Acquisizione multicanale con deduplicazione automatica',
    'Guest-language detection and routing rules': 'Rilevamento lingua ospite e regole di instradamento',
    'Priority scoring based on stay value and lead time': 'Prioritizzazione basata su valore soggiorno e anticipo',
    'Messaging': 'Messaggistica',
    'Classify & Route': 'Classifica e instrada',
    'Prioritised Queue': 'Coda prioritaria',
    'Auto-Offer Generation': 'Generazione offerte automatica',
    'Offer Engine': 'Motore offerte',
    'Personalised offers, generated instantly': 'Offerte personalizzate generate istantaneamente',
    "The system builds tailored proposals from your live availability, rate plans, and guest history. Beautifully formatted, sent in the guest's language, ready before your front desk opens the inbox.": "Il sistema crea proposte su misura partendo da disponibilita live, piani tariffari e storico ospite. Formattate in modo professionale, inviate nella lingua dell'ospite, pronte prima che il front desk apra la inbox.",
    'Dynamic rate selection from connected PMS': 'Selezione dinamica tariffe da PMS connesso',
    'Multi-language templates with brand consistency': 'Template multilingua con coerenza del brand',
    'Upsell logic for room upgrades and add-ons': 'Logiche upsell per upgrade camere e add-on',
    'Book': 'Prenota',
    'Revenue Intelligence': 'Intelligence ricavi',
    "See what drives bookings. Cut what doesn't.": 'Vedi cosa guida le prenotazioni. Riduci cio che non funziona.',
    'Live dashboards connect your pipeline performance to actual revenue outcomes. Track conversion by channel, measure response-time impact, and identify bottlenecks before they cost you guests.': 'Dashboard live collegano le performance della pipeline ai risultati di ricavo. Traccia conversione per canale, misura impatto dei tempi di risposta e identifica colli di bottiglia prima che costino ospiti.',
    'Channel attribution with conversion funnels': 'Attribuzione canali con funnel di conversione',
    'Response-time vs. booking-rate analysis': 'Analisi tempo risposta vs tasso prenotazione',
    'Exportable reports for ownership and investors': 'Report esportabili per proprieta e investitori',
    'Conversion': 'Conversione',
    'Avg Response': 'Risposta media',
    'Revenue': 'Ricavi',
    'Bookings': 'Prenotazioni',
    'Simple, transparent pricing': 'Prezzi semplici e trasparenti',
    'One platform, three tiers. Scale as your property grows.': 'Una piattaforma, tre livelli. Scala insieme alla crescita della tua struttura.',
    'For small properties getting started with automation.': "Per piccole strutture che iniziano con l'automazione.",
    '/mo': '/mese',
    'Billed annually. €109/mo monthly.': 'Fatturato annualmente. €109/mese con piano mensile.',
    'Up to 50 inquiries / month': 'Fino a 50 richieste / mese',
    'Automated offer generation': 'Generazione offerte automatica',
    'Email + web form ingestion': 'Acquisizione da email + form web',
    'Basic conversion dashboard': 'Dashboard conversione base',
    '2 language templates': '2 template lingua',
    'Get Started': 'Inizia ora',
    'For established hotels with serious volume.': 'Per hotel strutturati con volumi elevati.',
    'Billed annually. €279/mo monthly.': 'Fatturato annualmente. €279/mese con piano mensile.',
    'Unlimited inquiries': 'Richieste illimitate',
    'OTA + messaging channel sync': 'Sincronizzazione canali OTA + messaggistica',
    'PMS integration (ASA, Mews, etc.)': 'Integrazione PMS (ASA, Mews, ecc.)',
    'Upsell logic + smart room assignment': 'Logiche upsell + assegnazione intelligente camere',
    'Full analytics + channel attribution': 'Analytics completa + attribuzione canali',
    '5 language templates': '5 template lingua',
    'Multi-property groups and hotel chains.': 'Gruppi multi-struttura e catene alberghiere.',
    'Custom': 'Custom',
    'Tailored to portfolio size and needs.': 'Su misura per dimensione portfolio e necessita.',
    'Everything in Professional': 'Tutto incluso nel Professional',
    'Multi-property management console': 'Console gestione multi-struttura',
    'Custom API integrations': 'Integrazioni API personalizzate',
    'Dedicated onboarding + support': 'Onboarding e supporto dedicati',
    'SLA guarantee + priority escalation': 'Garanzia SLA + escalation prioritaria',
    'Contact Sales': 'Contatta le vendite',
    'Ready to automate your front desk?': 'Pronto ad automatizzare il front desk?',
    'Book a 20-minute demo and see the platform running with your own property data.': 'Prenota una demo di 20 minuti e vedi la piattaforma in funzione con i dati reali della tua struttura.'
  });

  Object.assign(translations.de, {
    'Hospitality automation,': 'Hospitality-Automatisierung,',
    'engineered': 'praezise entwickelt',
    "From first inquiry to confirmed booking — software built by the people who understand Dolomite hospitality from the inside.": 'Von der ersten Anfrage bis zur bestaetigten Buchung — Software, entwickelt von Menschen, die Dolomiten-Hospitality von innen kennen.',
    'View Plans': 'Tarife ansehen',
    'Request a Demo': 'Demo anfragen',
    'Average offer generation time': 'Durchschnittliche Angebotszeit',
    'Faster inquiry-to-booking cycle': 'Schnellerer Anfrage-zu-Buchung-Zyklus',
    'Manual data entry required': 'Manuelle Dateneingabe erforderlich',
    'Automated guest communication': 'Automatisierte Gaestekommunikation',
    'Inquiry Pipeline': 'Anfrage-Pipeline',
    'Every inquiry captured. Nothing slips through.': 'Jede Anfrage wird erfasst. Nichts geht verloren.',
    'Incoming requests from email, web forms, OTAs, and messaging platforms flow into a single unified pipeline. The system classifies, prioritises, and routes each inquiry automatically.': 'Eingehende Anfragen aus E-Mail, Webformularen, OTAs und Messaging-Plattformen fliessen in eine einheitliche Pipeline. Das System klassifiziert, priorisiert und verteilt jede Anfrage automatisch.',
    'Multi-channel ingestion with automatic deduplication': 'Multikanal-Erfassung mit automatischer Deduplizierung',
    'Guest-language detection and routing rules': 'Erkennung der Gaestesprache und Routing-Regeln',
    'Priority scoring based on stay value and lead time': 'Priorisierung nach Aufenthaltswert und Vorlaufzeit',
    'Messaging': 'Messaging',
    'Classify & Route': 'Klassifizieren und routen',
    'Prioritised Queue': 'Priorisierte Warteschlange',
    'Auto-Offer Generation': 'Automatische Angebotserstellung',
    'Offer Engine': 'Angebots-Engine',
    'Personalised offers, generated instantly': 'Personalisierte Angebote, sofort erstellt',
    "The system builds tailored proposals from your live availability, rate plans, and guest history. Beautifully formatted, sent in the guest's language, ready before your front desk opens the inbox.": 'Das System erstellt individuelle Angebote aus Live-Verfuegbarkeit, Ratenplaenen und Gaestehistorie. Professionell formatiert, in der Sprache des Gasts versendet und bereit, bevor Ihr Front Desk den Posteingang oeffnet.',
    'Dynamic rate selection from connected PMS': 'Dynamische Tarifauswahl aus angebundenem PMS',
    'Multi-language templates with brand consistency': 'Mehrsprachige Vorlagen mit Markenkonsistenz',
    'Upsell logic for room upgrades and add-ons': 'Upsell-Logik fuer Upgrades und Zusatzleistungen',
    'Book': 'Buchen',
    'Revenue Intelligence': 'Umsatz-Intelligenz',
    "See what drives bookings. Cut what doesn't.": 'Sehen Sie, was Buchungen treibt. Streichen Sie, was nicht wirkt.',
    'Live dashboards connect your pipeline performance to actual revenue outcomes. Track conversion by channel, measure response-time impact, and identify bottlenecks before they cost you guests.': 'Live-Dashboards verknuepfen Pipeline-Performance mit realen Umsatzresultaten. Verfolgen Sie Conversion je Kanal, messen Sie den Effekt der Antwortzeit und erkennen Sie Engpaesse, bevor sie Gaeste kosten.',
    'Channel attribution with conversion funnels': 'Kanal-Attribution mit Conversion-Funnels',
    'Response-time vs. booking-rate analysis': 'Analyse Antwortzeit vs Buchungsrate',
    'Exportable reports for ownership and investors': 'Exportierbare Reports fuer Eigentuemer und Investoren',
    'Conversion': 'Conversion',
    'Avg Response': 'Durchschn. Antwort',
    'Revenue': 'Umsatz',
    'Bookings': 'Buchungen',
    'Simple, transparent pricing': 'Einfache, transparente Preise',
    'One platform, three tiers. Scale as your property grows.': 'Eine Plattform, drei Stufen. Skalieren Sie mit dem Wachstum Ihres Betriebs.',
    'For small properties getting started with automation.': 'Fuer kleinere Betriebe mit Einstieg in die Automatisierung.',
    '/mo': '/Monat',
    'Billed annually. €109/mo monthly.': 'Jaehrliche Abrechnung. €109/Monat bei monatlicher Zahlung.',
    'Up to 50 inquiries / month': 'Bis zu 50 Anfragen / Monat',
    'Automated offer generation': 'Automatisierte Angebotserstellung',
    'Email + web form ingestion': 'E-Mail- und Webformular-Erfassung',
    'Basic conversion dashboard': 'Basis-Conversion-Dashboard',
    '2 language templates': '2 Sprachvorlagen',
    'Get Started': 'Jetzt starten',
    'For established hotels with serious volume.': 'Fuer etablierte Hotels mit hohem Volumen.',
    'Billed annually. €279/mo monthly.': 'Jaehrliche Abrechnung. €279/Monat bei monatlicher Zahlung.',
    'Unlimited inquiries': 'Unbegrenzte Anfragen',
    'OTA + messaging channel sync': 'OTA- und Messaging-Kanal-Sync',
    'PMS integration (ASA, Mews, etc.)': 'PMS-Integration (ASA, Mews usw.)',
    'Upsell logic + smart room assignment': 'Upsell-Logik + intelligente Zimmerzuweisung',
    'Full analytics + channel attribution': 'Vollstaendige Analytik + Kanal-Attribution',
    '5 language templates': '5 Sprachvorlagen',
    'Multi-property groups and hotel chains.': 'Multi-Property-Gruppen und Hotelketten.',
    'Custom': 'Individuell',
    'Tailored to portfolio size and needs.': 'Auf Portfolio-Groesse und Anforderungen zugeschnitten.',
    'Everything in Professional': 'Alles aus Professional',
    'Multi-property management console': 'Management-Konsole fuer mehrere Betriebe',
    'Custom API integrations': 'Individuelle API-Integrationen',
    'Dedicated onboarding + support': 'Dediziertes Onboarding + Support',
    'SLA guarantee + priority escalation': 'SLA-Garantie + priorisierte Eskalation',
    'Contact Sales': 'Sales kontaktieren',
    'Ready to automate your front desk?': 'Bereit, Ihr Front Desk zu automatisieren?',
    'Book a 20-minute demo and see the platform running with your own property data.': 'Buchen Sie eine 20-Minuten-Demo und sehen Sie die Plattform mit Ihren eigenen Betriebsdaten im Einsatz.'
  });

  Object.assign(translations.it, {
    '1. Data Controller': '1. Titolare del trattamento',
    'Enrosadira, 39100 Bolzano (BZ), Italy. Email: info.enrosadira@gmail.com': 'Enrosadira, 39100 Bolzano (BZ), Italia. Email: info.enrosadira@gmail.com',
    '2. Data Collected': '2. Dati raccolti',
    'When you use our contact form, we collect: your name, email address, company name (optional), and message content. This data is processed by Formspree, Inc. acting as a data processor on our behalf.': 'Quando usi il modulo di contatto raccogliamo: nome, indirizzo email, nome azienda (opzionale) e contenuto del messaggio. Questi dati sono trattati da Formspree, Inc. in qualita di responsabile del trattamento per nostro conto.',
    '3. Purpose of Processing': '3. Finalita del trattamento',
    'Your personal data is processed solely for the purpose of responding to your inquiry. We do not use your data for marketing purposes unless you explicitly opt in.': 'I tuoi dati personali sono trattati esclusivamente per rispondere alla tua richiesta. Non utilizziamo i tuoi dati per finalita di marketing salvo tuo consenso esplicito.',
    '4. Legal Basis': '4. Base giuridica',
    'Processing is based on your consent (Art. 6(1)(a) GDPR) provided when you submit the contact form, and on our legitimate interest in responding to business inquiries (Art. 6(1)(f) GDPR).': "Il trattamento si basa sul tuo consenso (Art. 6(1)(a) GDPR) fornito con l'invio del modulo di contatto e sul nostro legittimo interesse a rispondere a richieste commerciali (Art. 6(1)(f) GDPR).",
    '5. Data Retention': '5. Conservazione dei dati',
    'Contact form submissions are retained for 12 months after the last communication, then deleted. You may request deletion at any time.': 'Le richieste inviate tramite modulo di contatto sono conservate per 12 mesi dopo l ultima comunicazione, poi cancellate. Puoi richiedere la cancellazione in qualsiasi momento.',
    '6. Third-Party Services': '6. Servizi di terze parti',
    'This website uses:': 'Questo sito utilizza:',
    "— served via Google's CDN. Google may log your IP address. See Google's Privacy Policy for details.": "— erogato tramite CDN di Google. Google puo registrare il tuo indirizzo IP. Consulta l'informativa privacy di Google per i dettagli.",
    '— processes contact form submissions. Data may be transferred to the United States under Standard Contractual Clauses.': '— elabora gli invii del modulo di contatto. I dati possono essere trasferiti negli Stati Uniti sulla base delle Clausole Contrattuali Standard.',
    '— loaded via jsDelivr CDN. No personal data is collected by these libraries.': '— caricato tramite CDN jsDelivr. Queste librerie non raccolgono dati personali.',
    '7. Your Rights': '7. I tuoi diritti',
    'Under the GDPR, you have the right to: access your data, rectify inaccuracies, request deletion, restrict processing, data portability, and object to processing. To exercise these rights, contact us at info.enrosadira@gmail.com.': 'Ai sensi del GDPR hai diritto a: accesso ai dati, rettifica, cancellazione, limitazione del trattamento, portabilita e opposizione. Per esercitare questi diritti, contattaci a info.enrosadira@gmail.com.',
    '8. Cookies': '8. Cookie',
    'This website does not use cookies for tracking or analytics. No cookie consent banner is required.': 'Questo sito non utilizza cookie di tracciamento o analytics. Non e necessario un banner di consenso cookie.',
    '9. Updates': '9. Aggiornamenti',
    'This privacy policy may be updated periodically. Last updated: February 2026.': 'Questa informativa privacy puo essere aggiornata periodicamente. Ultimo aggiornamento: febbraio 2026.',
    'Company Information': 'Informazioni societarie',
    'Italy': 'Italia',
    'Phone: +39 0471 000 000': 'Telefono: +39 0471 000 000',
    'Dispute Resolution': 'Risoluzione delle controversie',
    'The European Commission provides a platform for online dispute resolution (ODR):': 'La Commissione europea mette a disposizione una piattaforma per la risoluzione online delle controversie (ODR):',
    '. We are not obligated and not willing to participate in dispute resolution proceedings before a consumer arbitration board.': '. Non siamo obbligati ne disponibili a partecipare a procedure di risoluzione delle controversie davanti a un organismo di arbitrato per i consumatori.'
  });

  Object.assign(translations.de, {
    '1. Data Controller': '1. Verantwortlicher',
    'Enrosadira, 39100 Bolzano (BZ), Italy. Email: info.enrosadira@gmail.com': 'Enrosadira, 39100 Bozen (BZ), Italien. E-Mail: info.enrosadira@gmail.com',
    '2. Data Collected': '2. Erhobene Daten',
    'When you use our contact form, we collect: your name, email address, company name (optional), and message content. This data is processed by Formspree, Inc. acting as a data processor on our behalf.': 'Wenn Sie unser Kontaktformular nutzen, erfassen wir: Ihren Namen, Ihre E-Mail-Adresse, den Firmennamen (optional) und den Nachrichteninhalt. Diese Daten werden von Formspree, Inc. als Auftragsverarbeiter in unserem Auftrag verarbeitet.',
    '3. Purpose of Processing': '3. Zweck der Verarbeitung',
    'Your personal data is processed solely for the purpose of responding to your inquiry. We do not use your data for marketing purposes unless you explicitly opt in.': 'Ihre personenbezogenen Daten werden ausschliesslich zur Beantwortung Ihrer Anfrage verarbeitet. Wir verwenden Ihre Daten nicht fuer Marketingzwecke, es sei denn, Sie stimmen ausdruecklich zu.',
    '4. Legal Basis': '4. Rechtsgrundlage',
    'Processing is based on your consent (Art. 6(1)(a) GDPR) provided when you submit the contact form, and on our legitimate interest in responding to business inquiries (Art. 6(1)(f) GDPR).': 'Die Verarbeitung basiert auf Ihrer Einwilligung (Art. 6(1)(a) DSGVO), die Sie mit dem Absenden des Kontaktformulars erteilen, sowie auf unserem berechtigten Interesse an der Beantwortung geschaeftlicher Anfragen (Art. 6(1)(f) DSGVO).',
    '5. Data Retention': '5. Speicherdauer',
    'Contact form submissions are retained for 12 months after the last communication, then deleted. You may request deletion at any time.': 'Kontaktformular-Eingaben werden 12 Monate nach der letzten Kommunikation aufbewahrt und anschliessend geloescht. Sie koennen jederzeit die Loeschung verlangen.',
    '6. Third-Party Services': '6. Dienste von Drittanbietern',
    'This website uses:': 'Diese Website nutzt:',
    "— served via Google's CDN. Google may log your IP address. See Google's Privacy Policy for details.": '— bereitgestellt ueber das CDN von Google. Google kann Ihre IP-Adresse protokollieren. Details finden Sie in der Datenschutzerklaerung von Google.',
    '— processes contact form submissions. Data may be transferred to the United States under Standard Contractual Clauses.': '— verarbeitet Kontaktformular-Eingaben. Daten koennen auf Basis von Standardvertragsklauseln in die USA uebermittelt werden.',
    '— loaded via jsDelivr CDN. No personal data is collected by these libraries.': '— geladen ueber das jsDelivr-CDN. Diese Bibliotheken erfassen keine personenbezogenen Daten.',
    '7. Your Rights': '7. Ihre Rechte',
    'Under the GDPR, you have the right to: access your data, rectify inaccuracies, request deletion, restrict processing, data portability, and object to processing. To exercise these rights, contact us at info.enrosadira@gmail.com.': 'Nach DSGVO haben Sie das Recht auf: Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung, Datenuebertragbarkeit und Widerspruch. Zur Ausuebung Ihrer Rechte kontaktieren Sie uns unter info.enrosadira@gmail.com.',
    '8. Cookies': '8. Cookies',
    'This website does not use cookies for tracking or analytics. No cookie consent banner is required.': 'Diese Website verwendet keine Cookies fuer Tracking oder Analytics. Ein Cookie-Banner ist nicht erforderlich.',
    '9. Updates': '9. Aktualisierungen',
    'This privacy policy may be updated periodically. Last updated: February 2026.': 'Diese Datenschutzerklaerung kann regelmaessig aktualisiert werden. Letzte Aktualisierung: Februar 2026.',
    'Company Information': 'Unternehmensangaben',
    'Italy': 'Italien',
    'Phone: +39 0471 000 000': 'Telefon: +39 0471 000 000',
    'Dispute Resolution': 'Streitbeilegung',
    'The European Commission provides a platform for online dispute resolution (ODR):': 'Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
    '. We are not obligated and not willing to participate in dispute resolution proceedings before a consumer arbitration board.': '. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
  });

  // Copy-edit pass: more native marketing tone for IT/DE.
  Object.assign(translations.it, {
    'Data-driven hospitality intelligence for the Dolomites': "Intelligenza per l'ospitalita nelle Dolomiti, guidata dai dati",
    'Discover Our Approach': 'Scopri il metodo',
    'Economics, not guesswork': 'Economia, non intuizioni',
    'Automation Processes': 'Automazione operativa',
    'Market Insights': 'Analisi di mercato',
    'Cost Optimization & Strategic Consulting': 'Ottimizzazione costi e consulenza strategica',
    'Explore Products': 'Scopri i prodotti',
    'See Examples': 'Guarda gli esempi',
    'Our Approach': 'Il nostro metodo',
    'Rooted in the Dolomites': 'Nati nelle Dolomiti',
    'Start the Conversation': 'Parliamone',
    "Ready to make data-driven decisions? Whether you're exploring a new market, questioning your marketing ROI, or planning next season's strategy — we'd like to hear from you.": 'Pronto a decidere con i dati? Che tu stia aprendo un nuovo mercato, rivedendo il ROI del marketing o pianificando la prossima stagione, scrivici.',
    'Start a Conversation': 'Parliamo del tuo progetto',
    'The questions that': 'Le domande che',
    'actually matter': 'fanno la differenza',
    'Core consulting scenarios': 'Scenari chiave di consulenza',
    'Real Questions, Real Answers': 'Domande concrete, risposte concrete',
    'Beverage Pricing': 'Pricing beverage',
    'Seasonal Staffing': 'Organico stagionale',
    'Have a question like these?': 'Hai una domanda simile?',
    'Hospitality automation,': 'Automazione hospitality,',
    'engineered': 'progettata per performare',
    'View Plans': 'Scopri i piani',
    'Request a Demo': 'Richiedi una demo',
    'Simple, transparent pricing': 'Prezzi chiari e trasparenti',
    'Contact Sales': 'Contatta il team vendite',
    'Ready to automate your front desk?': 'Vuoi automatizzare il front desk?',
    'Book a 20-minute demo and see the platform running with your own property data.': 'Prenota una demo da 20 minuti e guarda la piattaforma in azione con i dati della tua struttura.'
  });

  Object.assign(translations.de, {
    'Discover Our Approach': 'Unseren Ansatz ansehen',
    'Automation Processes': 'Prozessautomatisierung',
    'Market Insights': 'Marktanalysen',
    'Cost Optimization & Strategic Consulting': 'Kostenoptimierung und Strategieberatung',
    'Our Approach': 'Unser Vorgehen',
    'Rooted in the Dolomites': 'In den Dolomiten verwurzelt',
    'Start the Conversation': 'Lassen Sie uns sprechen',
    "Ready to make data-driven decisions? Whether you're exploring a new market, questioning your marketing ROI, or planning next season's strategy — we'd like to hear from you.": 'Bereit fuer datenbasierte Entscheidungen? Egal ob neuer Markt, Marketing-ROI oder naechste Saisonstrategie: Schreiben Sie uns.',
    'Start a Conversation': 'Gespraech vereinbaren',
    'Core consulting scenarios': 'Zentrale Beratungsszenarien',
    'Real Questions, Real Answers': 'Echte Fragen, klare Antworten',
    'Beverage Pricing': 'Getraenkepreise',
    'Seasonal Staffing': 'Saisonale Personaleinsatzplanung',
    'Have a question like these?': 'Haben Sie eine aehnliche Frage?',
    'Hospitality automation,': 'Hospitality-Automatisierung,',
    'engineered': 'praezise umgesetzt',
    'View Plans': 'Pakete ansehen',
    'Request a Demo': 'Demo buchen',
    'Contact Sales': 'Vertrieb kontaktieren',
    'Book a 20-minute demo and see the platform running with your own property data.': 'Buchen Sie eine 20-Minuten-Demo und sehen Sie die Plattform mit Ihren eigenen Betriebsdaten live.'
  });

  function normalizeText(value) {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  function isLanguageToken(token) {
    return token === 'EN' || token === 'IT' || token === 'DE' || token === '/';
  }

  function getTranslation(text, lang) {
    if (lang === 'en') return text;
    var dict = translations[lang] || {};
    return dict[text] || text;
  }

  function collectTextNodes() {
    if (!document.body) return;

    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          if (!node || !node.parentElement) return NodeFilter.FILTER_REJECT;
          var parentTag = node.parentElement.tagName;
          if (parentTag === 'SCRIPT' || parentTag === 'STYLE' || parentTag === 'NOSCRIPT') {
            return NodeFilter.FILTER_REJECT;
          }

          var key = normalizeText(node.nodeValue);
          if (!key || isLanguageToken(key)) return NodeFilter.FILTER_REJECT;

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var node;
    while ((node = walker.nextNode())) {
      textNodes.push({
        node: node,
        original: node.nodeValue,
        key: normalizeText(node.nodeValue)
      });
    }
  }

  function updateTextNodes(lang) {
    textNodes.forEach(function (entry) {
      var leading = (entry.original.match(/^\s*/) || [''])[0];
      var trailing = (entry.original.match(/\s*$/) || [''])[0];
      var translated = getTranslation(entry.key, lang);
      entry.node.nodeValue = leading + translated + trailing;
    });
  }

  function updateTitle(lang) {
    var titleKey = normalizeText(originalTitle);
    document.title = getTranslation(titleKey, lang);
  }

  function updateAttributeTranslations(lang) {
    var menuLabel = getTranslation('Toggle menu', lang);
    document.querySelectorAll('#navHamburger').forEach(function (el) {
      el.setAttribute('aria-label', menuLabel);
    });

    var linkedInLabel = getTranslation('LinkedIn (coming soon)', lang);
    var linkedInTitle = getTranslation('LinkedIn coming soon', lang);
    document.querySelectorAll('span[aria-label*="LinkedIn"]').forEach(function (el) {
      el.setAttribute('aria-label', linkedInLabel);
      el.setAttribute('title', linkedInTitle);
    });
  }

  function wireLanguageControls() {
    document.querySelectorAll('.nav__lang, .footer__lang').forEach(function (container) {
      var isNav = container.classList.contains('nav__lang');
      var activeClass = isNav ? 'nav__lang-active' : 'footer__lang-active';
      var itemClass = isNav ? 'nav__lang-item' : 'footer__lang-item';

      container.querySelectorAll('.' + activeClass + ', .' + itemClass).forEach(function (el) {
        var code = normalizeText(el.textContent).toLowerCase();
        if (SUPPORTED_LANGS.indexOf(code) === -1) return;

        if (!el.hasAttribute('data-lang-bound')) {
          el.setAttribute('data-lang-bound', '1');
          el.setAttribute('role', 'button');
          el.setAttribute('tabindex', '0');
          el.addEventListener('click', function () {
            setLanguage(code, true);
          });
          el.addEventListener('keydown', function (evt) {
            if (evt.key === 'Enter' || evt.key === ' ') {
              evt.preventDefault();
              setLanguage(code, true);
            }
          });
        }
      });
    });
  }

  function refreshLanguageControls(lang) {
    document.querySelectorAll('.nav__lang, .footer__lang').forEach(function (container) {
      var isNav = container.classList.contains('nav__lang');
      var activeClass = isNav ? 'nav__lang-active' : 'footer__lang-active';
      var itemClass = isNav ? 'nav__lang-item' : 'footer__lang-item';

      container.querySelectorAll('.' + activeClass + ', .' + itemClass).forEach(function (el) {
        var code = normalizeText(el.textContent).toLowerCase();
        if (SUPPORTED_LANGS.indexOf(code) === -1) return;

        var isActive = code === lang;
        el.classList.toggle(activeClass, isActive);
        el.classList.toggle(itemClass, !isActive);
        el.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    });
  }

  function detectLanguage() {
    var url = new URL(window.location.href);
    var queryLang = (url.searchParams.get('lang') || '').toLowerCase();
    if (SUPPORTED_LANGS.indexOf(queryLang) !== -1) return queryLang;

    try {
      var saved = (localStorage.getItem(STORAGE_KEY) || '').toLowerCase();
      if (SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (err) {
      // Ignore storage access issues.
    }

    var browserLang = (navigator.language || 'en').toLowerCase();
    if (browserLang.indexOf('it') === 0) return 'it';
    if (browserLang.indexOf('de') === 0) return 'de';
    return 'en';
  }

  function setLanguage(lang, persist) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = 'en';

    currentLang = lang;
    document.documentElement.lang = lang;
    updateTextNodes(lang);
    updateTitle(lang);
    updateAttributeTranslations(lang);
    refreshLanguageControls(lang);

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (err) {
        // Ignore storage access issues.
      }
    }
  }

  function init() {
    collectTextNodes();
    wireLanguageControls();
    var initial = detectLanguage();
    setLanguage(initial, true);
  }

  window.enrosadiraI18n = {
    getLanguage: function () {
      return currentLang;
    },
    translateText: function (englishText) {
      return getTranslation(englishText, currentLang);
    },
    setLanguage: function (lang) {
      setLanguage((lang || '').toLowerCase(), true);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
