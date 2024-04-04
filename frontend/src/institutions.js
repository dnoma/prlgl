const institutions = [
    "Centre for Conciliation, Mediation and Arbitration of the Algerian Chamber of Commerce and Industry",
    "Centro de Resolucão Extrajudicial de Litígios (CREL) (Centre for Extrajudicial Dispute Resolution)",
    "Cámara Arbitral de la Bolsa de Cereales de Buenos Aires",
    "Centro de Mediación y Arbitraje Comercial de la Cámara Argentina de Comercio (CEMARC)",
    "Centro Empresarial de Mediación y Arbitraje",
    "Tribunal de Arbitraje General de la Bolsa de Comercio de Buenos Aires",
    "Australian Centre for International Commercial Arbitration (ACICA)",
    "Australian Disputes Centre",
    "Chartered Institute of Arbitrators Australia",
    "International Chamber of Commerce Australia (ICC Australia)",
    "Resolution Institute", 
    "Austrian Arbitration Association (Arb|Aut)",
    "Vienna International Arbitral Centre (VIAC)",
    "Bahrain Chamber for Dispute Resolution",
    "GCC Commercial Arbitration Centre",
    "Bangladesh International Arbitration Centre (BIAC)",
    "The Belgian Centre for Arbitration and Mediation (CEPANI)",
    "Centre d’Arbitrage de Médiation et de Conciliation (CAMeC-CCIB)",
    "Chartered Institute of Arbitrators: Bermuda Branch",
    "The Botswana Institute of Arbitrators",
    "Câmara de Conciliação e Arbitragem da Associação Comercial da Bahia",
    "Câmara de Conciliação, Mediação e Arbitragem de São Paulo CIESP/FIESP",
    "Câmara de Conciliação, Mediação e Arbitragem Empresarial da Associação Comercial do Distrito Federal (CBMAE ACDF)",
    "Câmara de Mediação e Arbitragem (CAMITAL)",
    "Câmara de Mediação e Arbitragem da Associação Comercial do Paraná (ARBITAC)",
    "Câmara de Mediação e Arbitragem de São Paulo",
    "Câmara de Mediação e Arbitragem Empresarial – Brasil (CAMARB)",
    "Centro Brasileiro de Mediação e Arbitragem (CMBA)",
    "Centro de Arbitragem e Mediação da Câmara Americana de Comércio (AMCHAM)",
    "Centro de Arbitragem e Mediação da Câmara de Comércio Brasil-Canadá (CAM-CCBC)",
    "Centro de Mediação e Arbitragem de Pernambuco – CEMAPE",
    "Comitê Brasileiro de Arbitragem (CBAr)",
    "Conselho Nacional das Instituições de Mediação e Arbitragem (CONIMA)",
    "Brunei Darussalam Arbitration Centre",
    "Arbitration Court at the Bulgarian Chamber of Commerce and Industry (BCCI)",
    "Court of Arbitration at the Bulgarian Industrial Association",
    "Centre d’Arbitrage de Médiation et Conciliation de Ouagadougou (CAMC-O)",
    "Centre Burundais d’Arbitrage et de Conciliation (CEBAC)",
    "National Commercial Arbitration Centre",
    "Centre d’Arbitrage du GICAM",
    "Organisation pour l’Harmonisation en Afrique du Droit des Affaires (OHADA)",
    "The Permanent Centre of Arbitration and Mediation (CPAM) Centre Permanent d’Arbitrage et de Médiation",
    "ADR Chambers",
    "ADR Institute of Canada, Inc. (ADRIC)",
    "Arbitration Place",
    "Canadian Commercial Arbitration Centre (CCAC)",
    "Vancouver International Arbitration Centre (VanIAC)",
    "Barlavento Chamber of Commerce Arbitration and Conciliation Centre",
    "Centre d’Arbitrage, de Médiation et de Conciliation de N’Djamena (CAMC-N)",
    "Centro de Arbitraje y Mediación Región de Valparaíso",
    "Centro Nacional de Arbitrajes (CNA)",
    "Santiago Arbitration and Mediation Center (CAM Santiago)",
    "Beijing Arbitration Commission (BAC)",
    "China International Economic and Trade Arbitration Commission (CIETAC)",
    "China Maritime Arbitration Commission (CMAC)",
    "Shanghai International Economic and Trade Arbitration Commission (SHIAC)",
    "South China International Economic and Trade Arbitration Commission/ Shenzhen Court of International Arbitration (SCIA)",
    "Centro de Arbitraje y Conciliación, Cámara de Comercio de Bogotá",
    "Centro de Conciliación y Arbitraje de Cámara de Comercio de Costa Rica (CCA-CCCR)",
    "Conflict Resolution Center of the Federated Association of Engineers and Architects of Costa Rica (CRC)",
    "Permanent Arbitration Court at the Croatian Chamber of Commerce (PAC-CCC)",
    "Cyprus Chamber of Commerce and Industry",
    "The Arbitration Court Attached to the Economic Chamber of the Czech Republic and Agricultural Chamber of the Czech Republic",
    "The Exchange Court of Arbitration at the Prague Stock Exchange",
    "Le Centre d’Arbitrage du Congo (CAC)",
    "Le Centre national d’arbitrage, de conciliation et de médiation (CENACOM)",
    "Building and Construction Arbitration Board",
    "Danish Institute of Arbitration",
    "ICC Denmark",
    "Arbitration and Mediation Center of the Quito Chamber of Commerce",
    "Ecuadorian-American Chamber of Commerce – Quito",
    "Cairo Regional Centre for International Commercial Arbitration (CRCICA)",
    "Arbitration Institute of the Finland Chamber of Commerce (FAI)",
    "Association Française d’Arbitrage (AFA)",
    "Centre de Médiation et d’Arbitrage de la Chambre de Commerce et d’Industrie de Paris (CMAP)",
    "Chambre Arbitrale Internationale de Paris",
    "Chambre Arbitrale Maritime de Paris",
    "Comité Français de l’Arbitrage",
    "Delos Dispute Resolution",
    "International Court of Arbitration of the International Chamber of Commerce (ICC)",
    "Paris, Place d’Arbitrage International",
    "German Institution of Arbitration (DIS)",
    "German Maritime Arbitration Association (GMAA)",
    "Handelskammer Hamburg",
    "Schlichtungs- und Schiedsgerichtshof Deutscher Notare",
    "Waren-Verein der Hamburger Börse e.V.",
    "Ghana Arbitration Centre (GAC)",
    "Ghana Association of Certified Mediators and Arbitrators (GHACMA)",
    "Athens Chamber of Commerce & Industry Department of Arbitration",
    "Centre d'Arbitrage Régional OHADAC (CARO)",
    "Chambre de Conciliation et d’Arbitrage d’Haïti (CCAH)",
    "CAA International Arbitration Centre (CAAI)",
    "Hong Kong International Arbitration Centre (HKIAC)",
    "Hong Kong Mediation and Arbitration Centre",
    "Arbitration Court attached to the Hungarian Chamber of Commerce and Industry",
    "Iceland Chamber of Commerce",
    "Amika Council of Arbitration and Mediation",
    "Bengal National Chamber of Commerce and Industry",
    "Bombay Chamber of Commerce & Industry",
    "Cotton Association of India",
    "Federation of Indian Chambers of Commerce and Industry (FICCI)",
    "Goa Chamber of Commerce & Industry",
    "Hyderabad Kirana Merchants Association",
    "India International Arbitration Centre",
    "Indian Chamber of Commerce Council of Arbitration",
    "Indian Council of Arbitration",
    "International Arbitration & Mediation Centre (IAMC), Hyderabad",
    "International Centre for Alternative Dispute Resolution (ICADR)",
    "LCIA India",
    "Malabar Chamber of Commerce",
    "PHD Chamber of Commerce and Industry",
    "Steel Chamber of India",
    "The Bengal Chamber of Commerce and Industry",
    "The Cochin Chamber of Commerce & Industry",
    "The Cotton Textiles Export Promotion Council",
    "The Indian Chamber of Commerce and Industry, Coimbatore",
    "The Madras Chamber of Commerce and Industry",
    "The Southern India Chamber of Commerce and Industry",
    "The Travancore Chamber of Commerce",
    "BANI Arbitration Center",
    "Indonesian Capital Market Arbitration Board (BAPMI)",
    "The Chartered Institute of Arbitrators: Indonesia Chapter",
    "The Indonesian Mediation Center",
    "Arbitration Ireland - The Irish Arbitration Association",
    "Chambers Ireland",
    "Chartered Institute of Arbitrators – Irish Branch",
    "Dublin International Arbitration Centre",
    "Engineers Ireland",
    "The Royal Institute of the Architects of Ireland (RIAI)",
    "The Israeli Institute of Commercial Arbitration",
    "Camera Arbitrale Milano attached to the Milan Chamber of Commerce",
    "Italian Arbitration Association",
    "Jamaica International Arbitration Centre (JAIAC)",
    "Japan Shipping Exchange, Inc. (JSE)",
    "The Japan Commercial Arbitration Association (JCAA)",
    "Chartered Institute of Arbitrators, Kenya Branch",
    "Nairobi Centre for International Arbitration",
    "Korean Commercial Arbitration Board (KCAB)",
    "Baltic International Arbitration Court",
    "Court of Arbitration of the Latvian Chamber of Commerce and Industry",
    "Riga International Arbitration Court",
    "The Lebanese Arbitration and Mediation Center (LAMC) of the Chamber of Commerce",
    "Libyan Center for International Commercial Arbitration",
    "Vilnius Court of Commercial Arbitration",
    "Vilnius International and National Commercial Arbitration",
    "Luxembourg Arbitration Center / Luxembourg Chamber of Commerce",
    "The Permanent Court of Arbitration attached to the Economic Chamber of Macedonia",
    "Asian International Arbitration Centre (AIAC)",
    "Malaysian Rubber Board",
    "Royal Institution of Surveyors Malaysia",
    "Securities Industry Dispute Resolution Center",
    "The Chinese Chamber of Commerce & Industry of Kuala Lumpur and Selangor (KLSCCCI)",
    "The Malaysian Institute of Architects",
    "The Malaysian International Chambers of Commerce (MICCI)",
    "The Palm Oil Refiners Association of Malaysia (PORAM)",
    "Malta Arbitration Centre",
    "Mauritius International Arbitration Centre (MIAC)",
    "MCCI Arbitration and Mediation Center (MARC)",
    "Permanent Court of Arbitration (PCA) Mauritius Office",
    "Centro de Arbitraje de la Industria de la Construcción Montecito",
    "Centro de Arbitraje de México (CAM)",
    "Centro de Mediación y Arbitraje de CANACO",
    "Arbitration Court at the Chamber of Economy of Montenegro",
    "The Casablanca International Mediation and Arbitration Centre (CIMAC)",
    "Centro de Arbitragem Conciliação e Mediação (CACM)",
    "Nepal Council of Arbitration (NEPCA)",
    "Arbitrage Instituut voor Agrarisch Recht (IAR)",
    "FENEX – Nederlandse Organisatie voor Expeditie en Logistiek",
    "Koninklijke Nederlandse Vereniging voor Koffie en Thee (KNVKT)",
    "Koninklijke Vereniging het Comité van Graanhandelaren",
    "Netherlands Arbitration Institute (NAI)",
    "P.R.I.M.E. Finance Foundation",
    "Permanent Court of Arbitration (PCA)",
    "Raad van Arbitrage voor de Bouw (RvA)",
    "Scheidsgerecht van de Koninklijke Algemeene Vereeniging voor Bloembollencultuur (KAVB)",
    "Stichting Raad van Arbitrage voor Metaalnijverheid en -Handel",
    "UNUM Transport Arbitration & Mediation",
    "Arbitrators’ and Mediators’ Institute of New Zealand Inc.",
    "International Centre for Arbitration & Mediation Abuja (ICAMA)",
    "International Dispute Resolution Institute (IDRI)",
    "Lagos Chamber of Commerce International Arbitration Centre (LACIAC)",
    "Lagos Court of Arbitration",
    "Nigerian Institute of Chartered Arbitrators",
    "Regional Centre for International Commercial Arbitration – Lagos (RCICAL)",
    "The Chartered Institute of Arbitrators CIArb, UK Nigeria Branch",
    "Oslo Chamber of Commerce",
    "Center for International Investment and Commercial Arbitration",
    "Centro de Análisis y Resolución de Conflictos de la Pontificia Universidad Católica del Perú",
    "Centro de Arbitraje de la Cámara de Comercio de Lima",
    "Centro Internacional de Arbitraje Amcham Perú",
    "Dirección de Arbitraje Administrativo del Organismo Supervisor de las Contrataciones del Estado",
    "Court of Arbitration at the Polish Chamber of Commerce (PCC)",
    "Centro de Arbitragem da Câmara de Comércio e Indústria Portuguesa (CAC)",
    "Qatar International Center for Conciliation and Arbitration - QICCA",
    "The Court of International Commercial Arbitration attached to the Chamber of Commerce and Industry of Romania",
    "International Maritime Commission at the Chamber of Commerce and Industry of the Russian Federation",
    "The International Commercial Arbitration Court at the Chamber of Commerce and Industry of the Russian Federation",
    "Kigali International Arbitration Centre (KIAC)",
    "Saudi Center for Commercial Arbitration (SCCA)",
    "Belgrade Arbitration Center (BAC)",
    "Permanent Arbitration at the Chamber of Commerce and Industry of Serbia",
    "Singapore Institute of Arbitrators (SIARB)",
    "Singapore International Arbitration Centre (SIAC)",
    "Singapore International Commercial Court (SICC) Registry Services",
    "Court of Arbitration of the Slovakian Chamber of Commerce and Industry",
    "Ljubljana Arbitration Centre at the Chamber of Commerce and Industry of Slovenia (LAC)",
    "China-Africa Joint Arbitration Centre Johannesburg",
    "Commission for Conciliation, Mediation & Arbitration (CCMA)",
    "The Arbitration Foundation of Southern Africa (AFSA)",
    "The Association of Arbitrators (Southern Africa)",
    "Tokiso Dispute Settlement",
    "Corte Civil y Mercantil de Arbitraje (CIMA)",
    "Corte de Arbitraje de la Cámara Oficial de Comercio e Industria de Madrid",
    "Corte de Arbitraje de la Cámara Oficial de Comercio, Industria y Navegación",
    "Corte Española de Arbitraje",
    "Corte Vasca de Arbitraje",
    "Tribunal Arbitral de Barcelona (TAB)",
    "Institute for the Development of Commercial Law and Practice (ICLP)",
    "The Sri Lanka National Arbitration Centre (SLNAC)",
    "The Arbitration Institute of the Stockholm Chamber of Commerce",
    "Swiss Arbitration Association (ASA)",
    "Swiss Arbitration Centre",
    "The Court of Arbitration for Sport (CAS)",
    "WIPO Arbitration and Mediation Center",
    "Chinese Arbitration Association, Taipei (CAA)",
    "Tanzania Institute of Arbitrators (TIArb)",
    "The Thai Chamber of Commerce (TCC) and Board of Trade of Thailand (BOT)",
    "Dispute Resolution Centre at the Trinidad & Tobago Chamber of Industry",
    "The Local and International Arbitration Center ‘Al-Insaf’",
    "Arbitration Bureau of the Istanbul Chamber of Commerce",
    "Istanbul Arbitration Centre",
    "The Union of Chambers and Commodity Exchanges of Turkey (TOBB)",
    "International Centre for Arbitration & Mediation in Kampala (ICAMEK)",
    "International Commercial Arbitration Court at the Ukrainian Chamber of Commerce and Industry",
    "Abu Dhabi Commercial Conciliation and Arbitration Centre (ADCCAC)",
    "DIFC-LCIA Arbitration Centre",
    "Dubai International Arbitration Centre (DIAC)",
    "Arbicon ADR",
    "ARIAS (UK)",
    "Centre for Effective Dispute Resolution",
    "Chartered Institute of Arbitrators (CIArb)",
    "Federation of Oils, Seeds and Fats Associations (FOSFA)",
    "Forum for International Conciliation and Arbitration (FICA)",
    "ICC UK Arbitration and ADR Committee",
    "London Metals Exchange (LME)",
    "Royal Institution of Chartered Surveyors (RICS) Dispute Resolution Services (DRS)",
    "Scottish Arbitration Centre",
    "The Grain and Feed Trade Association",
    "The International Dispute Resolution Centre",
    "The London Court of International Arbitration (LCIA)",
    "London Court of International Arbitration (LCIA)",
    "The London Maritime Arbitrators Association (LMAA)",
    "The Society of Construction Arbitrators",
    "American Arbitration Association (AAA)",
    "International Centre for Dispute Resolution (ICDR)",
    "International Centre for Settlement of Investment Disputes (ICSID)",
    "International Institute for Conflict Prevention and Resolution (CPR)",
    "New York International Arbitration Center (NYIAC)",
    "Society of Maritime Arbitrators, Inc. (SMA)",
    "Centro de Arbitraje de la Cámara de Caracas (CACCC)",
    "Centro de Arbitraje de la Cámara de Comercio de Maracaibo (CACCM)",
    "Centro Empresarial de Conciliación y Arbitraje (CEDCA)",
    "Pacific International Arbitration Centre (PIAC)",
    "Vietnam International Arbitration Centre",
    "BVI International Arbitration Centre",
    "Africa Institute of Mediation and Arbitration (AIMA)",
    "Alternative Dispute Solutions Centre",
    "sole arbitrator to be appointed by the parties",
    "sole arbitrator to be appointed in writing by the parties",
    "sole arbitrator to be appointed by You and Us",
    "sole arbitrator to be appointed in writing by You and Us",
    "sole arbitrator to be appointed by Buyer and Seller",
    "sole arbitrator to be appointed in writing by Buyer and Seller",
    "sole arbitrator to be appointed by Supplier and Vendor",
    "sole arbitrator to be appointed in writing by Supplier and Vendor",
    "single arbitrator to be appointed by the parties",
    "single arbitrator to be appointed in writing by the parties",
    "single arbitrator to be appointed by You and Us",
    "single arbitrator to be appointed in writing by You and Us",
    "an arbitrator to be appointed by the parties"
  ];

export default institutions;