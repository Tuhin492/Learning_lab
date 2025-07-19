// This file contains FSS act, rules as well as regulations.
const fssact2006overview = [ // Introduction and overview of FSSA 2006
    {
        question: "Food Safety and Standards Act 2006 makes shift from",
        answers: ["Multi level of control to single line of control", "single line of control to multi level of control", "Multi level of control to few level of control", "single line of control to few level of control"],
        correct: "Multi level of control to single line of control",
        description: "The Food Safety and Standards Act, 2006 marks a shift from a multi-level to a single line of control with focus on self-compliance rather than a pure regulatory regime."
    },
    {
        question: "Food Safety is the primary responsibility of-",
        answers: ["Food Authority", "Food Business Operator", "Food Analyst", "Commissioner of Food Safety"],
        correct: "Food Business Operator",
        description: "Food Safety is the primary responsibility of FBO, as it knows best how the food is manufactured and how safety can be compromised. FSSA has taken this concept from PFA"
    },
    {
        question: "How many Schedules are there in the FSS Act?",
        answers: ["1", "2", "3", "4"],
        correct: "2",
        description: "First and second schedule of FSS Act contains zones and repealed order respectively."
    },
    {
        question: "What is the second schedule of FSS Act says?",
        answers: ["Zones", "Repealed orders", "Both", "None"],
        correct: "Repealed orders",
        description: "<b>Alert!</b> The second schedule of FSS Act contains the orders that the FSS Act 2006 has repealed in the year 2006. However there was a miscommunication here, the second schedule originally contains 8 orders but it should have been 7.<br>FSSAI later clarified that FSS Act did not repealed Essential Commodities Act, 1955"
    },
    {
        question: "What is the first schedule of FSS Act says?",
        answers: ["Zones", "Repealed orders", "Both", "None"],
        correct: "Zones",
        description: "THE FIRST SCHEDULE [Refer section 5(1)(e)]<br>This contains that India is divided into 5 zones and also specify which states falls into which zones."
    },
    {
        question: "Offences and Penalties are mentioned at which chapter of the FSS Act?",
        answers: ["Chapter 4", "Chapter 7", "Chapter 9", "Chapter 11"],
        correct: "Chapter 9",
        description: "Chapter 9: Offences and Penalties<br>Chapter 9 contains section 48-67"
    },
    {
        question: "Analysis of Food is mentioned in which chapter of FSS Act?",
        answers: ["Chapter 5", "Chapter 7", "Chapter 8", "Chapter 11"],
        correct: "Chapter 8",
        description: "Chapter 8: Analysis of Food<br>Chapter 8 contains section 43-47"
    },
    {
        question: "Which chapter of FSS Act talks about the commissioner of food safety, Designated Officer and Food Safety Officer?",
        answers: ["Chapter 4", "Chapter 7", "Chapter 8", "Chapter 9"],
        correct: "Chapter 7",
        description: "Chapter 7:  Enforcement of the Act<br>Chapter 7 contains section 29-42"
    },
    {
        question: "Which chapter of FSS Act is related to FBOs?",
        answers: ["Chapter 4", "Chapter 12", "Chapter 6", "Chapter 9"],
        correct: "Chapter 6",
        description: "Chapter 6: Special Responsibilities as of Food Safety<br>This chapter contains section 26-28"
    },
    {
        question: "\u0022General Provisions as to Articles of Food\u0022 is the chapter ____ of FSS Act.",
        answers: ["2", "3", "4", "5"],
        correct: "4",
        description: "Chapter 4: General Provisions as to Articles of Food<br>This chapter contains section 19-24."
    },
    {
        question: "Which of the following chapter of FSS Act contains a single section?",
        answers: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
        correct: "Chapter 3",
        description: "Chapter 3 of FSS Act contains only the section 18."
    },
    {
        question: "Which chapter of FSS Act is the smallest?",
        answers: ["Chapter 1", "Chapter 3", "Chapter 5", "Chapter 8"],
        correct: "Chapter 5",
        description: "Chapter 5: Provisions Relating to Import.<br>This chapter contains single section i.e., section 25(All imports of articles of food to be subject to this Act)"
    },
    {
        question: "How many sections are there in the second chapter of FSS Act 2006?",
        answers: ["14", "16", "5", "10"],
        correct: "14",
        description: "section 4-17<br>second chapter of FSSA: Food Safety and Standards Authority of India"
    },
    {
        question: "How many sections are there in the first chapter of FSS Act 2006?",
        answers: ["1", "3", "5", "7"],
        correct: "3"
    },
    {
        question: "How many chapters are there in FSS Act?",
        answers: ["10", "12", "11", "15"],
        correct: "12"
    },
]

const fssact2006c1 = [ // Chapter I Primilinary
    { // 3
        question: "____ means a person engaged in the business of manufacturing any article of food for sale and includes any person who obtains such article from another person and packs and labels it for sale or only labels it for such purposes.",
        answers: ["manufacturer", "operator", "FBO", "None of the above"],
        correct: "manufacturer"
    },
    { // 3
        question: "____ means a process or adoption or any treatment for conversion of  ingredients into an article of food, which includes any sub-process, incidental or  ancillary to the manufacture of an article of food.",
        answers: ["manufacture", "sale", "import", "None of the above"],
        correct: "manufacture"
    },
    { // 3
        question: "Licence is granted under which section of FSSA 2006",
        answers: ["30", "31", "33", "34"],
        correct: "31"
    },
    { // 3
        question: "any tag, brand, mark, pictorial or other descriptive matter, written,  printed, stencilled, marked, embossed, graphic, perforated, stamped or impressed on  or attached to container, cover, lid or crown of any food package and includes a  product insert; is known as",
        answers: ["label", "license", "package", "standard"],
        correct: "label"
    },
    { // 3
        question: "Any substance, including a food additive used in the manufacture or preparation of food and present in the final product, possibly in a modified form; is called",
        answers: ["additive", "ingredient", "food", "hazard"],
        correct: "ingredient"
    },
    { // 3
        question: "____ means a notice issued under section 32 of this act",
        answers: ["improvement notice", "vacancy notice", "Emergency prohibition notice", "analysis notice"],
        correct: "improvement notice"
    },
    { // 3
        question: "____ means bringing into India any article of food by land, sea or air",
        answers: ["import", "export", "advertisement", "None of the above"],
        correct: "import"
    },    
    { // 3
        question: "\u0022Hazard\u0022 has no effect upon health",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "\u0022Hazard\u0022 has potential to cause adverse health effect",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "A biological, chemical or physical agent in, or condition of, food with the potential to cause adverse health effect; is called",
        answers: ["hazard", "extraneous matter", "contaminant", "adulterant"],
        correct: "hazard"
    },
    {  // 3
        question: "____ means adoptation of Good Manufacturing Practices, Good Hygienic Practices, Hazard Analysis and Critical Control Point and such other practices as may be specified by regulation, for the food business",
        answers: ["Food Safety Management System", "Food Safety", "Food safety concern", "Food Management"],
        correct: "Food Safety Management System"
    },
    {  // 3
        question: "As per fssa 2006 \u0022FSMS\u0022 means",
        answers: ["Adoptation of GMP, GHP and HACCP", "Adoptation of GMP, GHP, HACCP and such other practices specified by regulations", "Adoptation of GMP and HACCP as specified by regulations, for the food business", "Adoptation food safety, GMP, GHP as specified by regulations, for the food business"],
        correct: "Adoptation of GMP, GHP, HACCP and such other practices specified by regulations"
    },
    { // 3
        question: "\u0022A systematic and functionally independent examination of food safety measures and related results meet with objectives of food safety and the claims made in that behalf\u0022.",
        answers: ["food safety audit", "food safety examination", "food safety", "food safety measures"],
        correct: "food safety audit"
    },
    { // 3
        question: "As per fssa 2006 \u0022____ means assurance that food is acceptable for human consumption according to its intended use\u0022.",
        answers: ["food safety", "food safety management system", "food assurance", "food safety audit"],
        correct: "food safety"
    },
    { // 3
        question: "Food testing is done in",
        answers: ["Accredited food laboratory, recognised by Food Authority", "Accredited laboratory", "Institute", "All of them"],
        correct: "Accredited food laboratory, recognised by Food Authority"
    },
    { // 3
        question: "Which of the following is true about food laboratory?",
        answers: ["food laboratory is any food laboratory or institute established by government or any agency", "NABL accreditation is mandatory", "Recognition by Food Authority is optional", "All of them"],
        correct: "food laboratory is any food laboratory or institute established by government or any agency"
    },
    { // 3
        question: "Which of the following is true about food laboratory?",
        answers: ["It shall be established by Government", "NABL accreditation is optional only if accredited by equivalent body", "Recognition by Food Authority is optional", "All of them"],
        correct: "NABL accreditation is optional only if accredited by equivalent body"
    },
    { // 3
        question: "Which of the following is true about food laboratory?",
        answers: ["It shall be established by Government", "NABL accreditation is mandatory", "It is recognisable by Food Authority via section 43", "All of them"],
        correct: "It is recognisable by Food Authority via section 43"
    },
    { // 3
        question: "Which of the following is true about food laboratory?",
        answers: ["food laboratory is any food laboratory or institute established by government or any agency", "NABL accreditation is optional only if accredited by equivalent body", "It is recognisable by Food Authority via section 43", "All of them"],
        correct: "All of them"
    },
    { // 3
        question: "Any food laboratory or Institute established by the Central or a State Government or any other agency and accredited by National Accreditation Board for Testing and Calibration Laboratories or an equivalent accreditation agency and recognized by the Food Authority under section 43; is",
        answers: ["Food Laboratory", "NABL laboratory", "Institute", "Laboratory"],
        correct: "Food Laboratory"
    },
    { // 3
        question: "Food Business is carried out by",
        answers: ["Food Safety Officer", "Food Business Operator", "Food Analyst", "Designated Officer"],
        correct: "Food Business Operator"
    },    
    { // 3
        question: "A person by whom the business is carried on or owned and is responsible for ensuring the compliance of this Act, rules and regulations made thereunder; is known as",
        answers: ["Food Business Operator", "Food Safety Officer", "Commissioner of Food Safety", "Designated Officer"],
        correct: "Food Business Operator"
    },
    { // 3
        question: "Any undertaking, whether for profit or not and whether public or private, carrying out any of the activities related to any stage of manufacture, processing, packaging, storage, transportation, distribution of food, import and includes food services, catering services, sale of food or food ingredients; is called",
        answers: ["Food Business", "Food Catering", "Manufacturing", "Premises"],
        correct: "Food Business"
    },
    { // 3
        question: "____ means the Food Safety and Standards Authority of India established under section 4",
        answers: ["Food Authority", "Central Advisory Committee", "Food on wheel", "Central Government"],
        correct: "Food Authority",
        description: "as per section 3(1)(m)"
    },    
    { // 3
        question: "Which of the following about 'food additive' is true?",
        answers: ["not normally consumed as food by itself", "intentionally added for technological purposes", "not a typical ingredient of food", "can or cannot have nutritional value", "does not include contaminant", "does not added for the purpose of maintaining or improving nutritional qualities", "All the them"],
        correct: "All the them"
    },
    { // 3
        question: "Under section 45 which of the following is appointed?",
        answers: ["Commissioner of food safety", "Designated officer", "Food safety officer", "Food Analyst"],
        correct: "Food Analyst"
    },
    { // 3
        question: "Food Analyst is appointed under which section?",
        answers: ["Section 30", "Section 36", "Section 37", "Section 45"],
        correct: "Section 45"
    },
    { // 3
        question: "Contaminants falls under food additive",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Contaminants cannot be considered as food additive",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Any substance not normally consumed as a food by itself or used as a typical ingredient of the food, whether or not it has nutritive value, the intentional addition of which to food for a technological (including organoleptic) purpose in the manufacture, processing, preparation, treatment, packing, packaging, transport or holding of such food results, or may be reasonably expected to result (directly or indirectly) in it or its by-products becoming a component of or otherwise affecting the characteristics of such food but does not include \u0022contaminants\u0022 or substances added to food for maintaining or improving nutritional qualities; is called",
        answers: ["food", "food additve", "sub-standard food", "ingredient"],
        correct: "food additve"
    },
    { // 3
        question: "Psychotropic substances is not a food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Psychotropic substances is considered as food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Narcotic substances is not a food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Narcotic substances is considered as food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Cosmetics is not a food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Cosmetics is considered as food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Medicinal products is not a food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Medicinal products is considered as food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Drugs is not a food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Drugs is considered as food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Plants prior to harvesting is not a food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Plants prior to harvesting is considered as food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Live animal is not a food",
        answers: ["True", "False"],
        correct: "True",
        description: "<b>Alert!</b> Live animal are not food unless they are prepared or processed for placing on the market for human consumption<br><br>Live Shrimp Salad is served as food in Thailand which is live animal and prepared for human consumption"
    },
    { // 3
        question: "Live animal is considered as food",
        answers: ["True", "False"],
        correct: "False",
        description: "<b>Alert!</b> Live animal are not food unless they are prepared or processed for placing on the market for human consumption<br><br>Live Shrimp Salad is served as food in Thailand which is live animal and prepared for human consumption"
    },
    { // 3
        question: "Chewing gum is not a food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Chewing gum is considered as food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Alcoholic drink is not a food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Alcoholic drink is considered as food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Packaged drinking water is not a food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Packaged drinking water is considered as food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Infant food is not a food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Infant food is considered as food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Genetically modified or engineered food is not a food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Genetically modified or engineered food is considered as food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Which of the following about 'food' is true?",
        answers: ["Intended for human consumption", "Processed, partially processed or unprocessed", "includes primary food, genetically modified/engineered food", "does not include animal feed, live animal (unless prepared for human consumption)", "All of them"],
        correct: "All of them"
    },
    { // 3
        question: "____ is intended for human consumption",
        answers: ["food additive", "ingredient", "food", "substance"],
        correct: "food"
    },
    { // 3
        question: "Primary food is not a food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Primary food is considered as food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Which of the following statement is true?",
        answers: ["Live animals are food as long as they are alive", "Live animal are food", "Live animals are not food unless they are prepared or processed for placing on the market for human consumption", "Live animals cannot be food at any form"],
        correct: "Live animals are not food unless they are prepared or processed for placing on the market for human consumption",
        description: "Live Shrimp Salad is served as food in Thailand which is live animal and prepared for human consumption"
    },
    { // 3
        question: "Animal feed is not a food",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Animal feed is considered as food",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Any substance, whether processed, partially processed or unprocessed, which is intended for human consumption and includes primary food to the extent defined in clause (zk), generally modified or engineered food or food containing such ingredients, infant food, packaged drinking water, alcoholic drink, chewing gum, and any substance, including water used into the food during its manufacture, preparation or treatment but does not include any animal feed. live animals unless they are prepared or processed for placing on the market for human consumption, plants prior to harvesting, drugs and medicinal products, cosmetics, narcotic or psychotropic substances: are called",
        answers: ["food", "food additive", "adulterant", "contaminant"],
        correct: "food"
    },
    { // 3
        question: "Extraneous matter does not render the food as unsafe",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Extraneous matter renders the food as unsafe",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Which of the following about 'extraneous matter' is true?",
        answers: ["These matters can come into food from raw and packaging materials", "Occurs from the processing", "Does not render food as unsafe", "All of them"],
        correct: "All of them"
    },
    { // 3
        question: "Which of the following statement about 'contaminant' is true",
        answers: ["Occurs in food as a result of production, manufacture, processing, packing, transport etc.", "environmental contamination is not considered as contaminant", "It includes insect fragments, rodent hairs and other extraneous matter", "All of them"],
        correct: "Occurs in food as a result of production, manufacture, processing, packing, transport etc."
    },
    { // 3
        question: "Which of the following statement about 'contaminant' is true",
        answers: ["It can be both added or not added to food", "Occurs in food as a result of production, manufacture, processing, packing, transport etc.", "It can be of environmental contamination", "does not include insect fragments, rodent hairs and other extraneous matter", "All of them"],
        correct: "All of them"
    },
    { // 3
        question: "Contaminant does not includes Insect fragment",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Contaminant includes Insect fragment",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Insect fragment is an example of contaminant",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Insect fragment falls under contaminant",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Contaminant does not includes Rodent hairs",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Contaminant includes Rodent hairs",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Rodent hairs is an example of contaminant",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Rodent hairs falls under contaminant",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Contaminant does not includes extraneous matter",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 3
        question: "Contaminant includes extraneous matter",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Extraneous matter is an example of contaminant",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "Extraneous matter falls under contaminant",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 3
        question: "____ does not render such article of food as unsafe.",
        answers: ["extraneous matter", "hazard", "adulterant"],
        correct: "extraneous matter",
        description: "extraneous matter, sub-standard food does not render a food as unsafe."
    },
    { // 3
        question: "Any matter contained in an article of food which may be carried from the raw materials, packaging materials or process systems used for its manufacture or which is added to it, but such matter does not render such article of food unsafe; is called",
        answers: ["contaminant", "extraneous matter", "ingredient", "adulterant"],
        correct: "extraneous matter"
    },
    { // 3
        question: "Any matter contained in an article of food which may be carried from the raw materials, packaging materials or process systems used for its manufacture or which is added to it, but such matter does not render such article of food unsafe; is called",
        answers: ["contaminant", "extraneous matter", "ingredient", "primary food"],
        correct: "extraneous matter"
    },
    { // 3
        question: "Under section 36 which of the following is appointed?",
        answers: ["Commissioner of food safety", "Designated officer", "Food safety officer", "Food Analyst"],
        correct: "Designated officer"
    },
    { // 3
        question: "Designated officer is appointed under which section?",
        answers: ["Section 30", "Section 36", "Section 37", "Section 45"],
        correct: "Section 36"
    },    
    {// 3
        question: "Any substance, whether or not added to food, but which is present in such food as a result of the production (including operations carried out in crop husbandry, or veterinary medicine), manufacture, processing, preparation, treatment, packing, packaging, transport or holding of such food or as a result of environmental contamination and does not include insect fragments, rodent hairs ad other extraneous matter; is called",
        answers: ["contaminant", "misbranded food", "ingredient", "hazard"],
        correct: "contaminant"
    },
    {// 3
        question: "Any substance, whether or not added to food, but which is present in such food as a result of the production (including operations carried out in crop husbandry, or veterinary medicine), manufacture, processing, preparation, treatment, packing, packaging, transport or holding of such food or as a result of environmental contamination and does not include insect fragments, rodent hairs ad other extraneous matter; is called",
        answers: ["contaminant", "food additive", "ingredient", "primary food", "hazard"],
        correct: "contaminant"
    },
    {// 3
        question: "Any substance, whether or not added to food, but which is present in such food as a result of the production (including operations carried out in crop husbandry, or veterinary medicine), manufacture, processing, preparation, treatment, packing, packaging, transport or holding of such food or as a result of environmental contamination and does not include insect fragments, rodent hairs ad other extraneous matter; is called",
        answers: ["contaminant", "food additive", "unsafe food", "primary food"],
        correct: "contaminant"
    },
    { // 3
        question: "As per FSSA 2006 'contaminant' is intentionally added substance in food.",
        answers: ["True", "False"],
        correct: "False",
        description: "As per the definition of 'contaminant' any substance, whether or not added to food....."
    },
    { // 3
        question: "Persons and families purchasing and receiving food in order to meet their personal needs; is",
        answers: ["manufacturer", "food safety officer", "consumer", "food business operator"],
        correct: "consumer"
    },    
    {// 3, 30
        question: "Commissioner of Food Safety appointed under ____ section",
        answers: ["36", "30", "37", "45"],
        correct: "30"
    },
    { // 3
        question: "Any representation which states, suggests or implies that a food has particular qualities relating to its origin, nutritional properties, nature, processing, composition or otherwise; is known as",
        answers: ["standard", "claim", "substandard food", "notification"],
        correct: "claim"
    },
    { // 3
        question: "Any representation which states, suggests or implies that a food has particular qualities relating to its origin, nutritional properties, nature, processing, composition or otherwise; is known as",
        answers: ["standard", "claim", "advertisement", "misbranded food"],
        correct: "claim"
    },
    { // 3
        question: "Chairperson means",
        answers: ["Chairperson of Central Advisory Committee", "Chairperson of Food Authority", "Chairperson of Central Government", "Chairperson of Food Industry"],
        correct: "Chairperson of Food Authority",
        description: "section 3(1)(c)"
    },
    { // 3
        question: "Any audio or visual publicity, representation or pronouncement made by means of any light, sound, smoke, gas, print, electronic media, internet or website and includes through any notice, circular, label, wrapper, invoice or other documents, is called",
        answers: ["food safety audit", "advertisement", "sale", "notification"],
        correct: "advertisement",
        description: "section 3(1)(b)"
    },
    { // 3
        question: "Any audio or visual publicity, representation or pronouncement made by means of any light, sound, smoke, gas, print, electronic media, internet or website and includes through any notice, circular, label, wrapper, invoice or other documents, is called",
        answers: ["label", "advertisement", "claim", "food safety audit"],
        correct: "advertisement",
        description: "section 3(1)(b)"
    },
    { // 3
        question: "Any material which is or could be employed for making the food unsafe or sub-standard or mis-branded or containing extraneous matter is",
        answers: ["contaminant", "ingredient", "foreign particles", "adulterant"],
        correct: "adulterant",
        description: "section 3(1)(a)"
    },
    { // 3
        question: "Any material which is or could be employed for making the food unsafe or sub-standard or mis-branded or containing extraneous matter is",
        answers: ["hazard", "contaminant", "extraneous matter", "adulterant"],
        correct: "adulterant",
        description: "section 3(1)(a)"
    },
    { // 3
        question: "Which section of FSSA 2006 mentions different definitions?",
        answers: ["section 1", "section 2", "section 3", "section 4"],
        correct: "section 3"
    },

    { // 2
        question: "The expedient in the public interest that the _____ should take under its control the food Industry",
        answers: ["State Government", "Union", "Food Authority", "Central and State Government"],
        correct: "Union",
        description: "The Union Government i.e., Central Government should take the authority of Food Industry.<br>As mentioned in section 2 of FSSA 2006 the Union should take control over Food Industry (since it is necessary and advantageous) for the benefit of the general public.<br>\u0022It is hereby declared that it is expedient in the public interest that the Union should take under its control the food industry.\u0022<br><br><br>Additional information:<br>It is seen that this type of section is present in every other law."
    },

    { // 1
        question: "FSSA 2006 extends to",
        answers: ["Part of India", "Whole of India", "Major Zones mentioned in schedule 1", "Whole world"],
        correct: "Whole of India",
        description: "Section 1(2) of FSSA 2006 mentions \u0022It extends to the whole of India\u0022."
    },
]

const fssact2006c2 = [ // Chapter II Food Safety and Standards Authority of India
    { // 17
        question: "According to FSSA 2006, can any act or proceeding of the Food Authority be questioned on the ground of a vacancy or defect in its constitution?",
        answers: ["Yes, any act or proceeding can be invalidated on such grounds.", "Yes, but only if there is a major defect.", "No, acts or proceedings cannot be questioned or invalidated merely on the ground of a vacancy or defect in the constitution.", "Yes, but only with the approval of the Chairperson."],
        correct: "No, acts or proceedings cannot be questioned or invalidated merely on the ground of a vacancy or defect in the constitution."
    },
    { // 17
        question: "Who can attend in food authority meeting?",
        answers: ["Chairperson of food authority", "CEO", "members of food authority", "Chairperson of Scientific committee (if invited)", "All of them"],
        correct: "All of them"
    },
    { // 17
        question: "Who don't have a right to vote in food authority meeting?",
        answers: ["CEO and Chairperson of Scientific committee", "CEO and members of food authority", "CEO and Chairperson of food authrity", "Chairperson of food authority and Chairperson of Scientific Committee"],
        correct: "CEO and Chairperson of Scientific committee"
    },
    { // 17
        question: "Can the Chairperson of the Scientific Committee vote in the meetings of the Food Authority?",
        answers: ["Yes, always.", "Yes, but only if the Chairperson of the Food Authority is absent.", "No, the Chairperson of the Scientific Committee can attend meetings (if invited) but does not have a right to vote.", "No, the Chairperson of the Scientific Committee is not allowed to attend the meetings."],
        correct: "No, the Chairperson of the Scientific Committee can attend meetings (if invited) but does not have a right to vote."
    },
    { // 17
        question: "What role does the Chief Executive Officer (CEO) play in the meetings of the Food Authority?",
        answers: ["The CEO can preside over meetings.", "The CEO can vote on all matters.", "The CEO takes part in the meetings but does not have a right to vote.", "The CEO is not allowed to attend the meetings."],
        correct: "The CEO takes part in the meetings but does not have a right to vote."
    },
    { // 17
        question: "Can CEO take part in Food Authority meeting?",
        answers: ["Yes", "No"],
        correct: "Yes"
    },
    { // 17
        question: "Who authenticates all orders and decisions of the Food Authority?",
        answers: ["Chairperson", "CEO", "Both of them together", "Any of them"],
        correct: "CEO"
    },
    { // 17
        question: "In case of an equality of vote made by present members upon resolving questioners during food authority meeting, what step is taken?",
        answers: ["Chairperson or person presiding over gets a second or casting vote", "CEO gets casting vote", "Chairperson of Scientific Committee gets casting vote", "Any of them"],
        correct: "Chairperson or person presiding over gets a second or casting vote"
    },
    { // 17
        question: "How are decisions of arising question made at a meeting of the Food Authority?",
        answers: ["by majority of votes of members", "by consensus of all members", "by secret ballot", "by decision of Chairperson or nominated/chosen member"],
        correct: "by majority of votes of members",
        description: "All questions which come up before any meeting of the Food Authority shall be  decided by a majority of votes of the Members present and voting, and in the event of an  equality of votes, the Chairperson or the person presiding over the meeting shall have the  right to exercise a second or casting vote. "
    },
    { // 17
        question: "If the Chairperson of the Food Authority is unable to attend a meeting, then who presides over the meeting?",
        answers: ["CEO", "any member nominated by the Chairperson, or if no nomination is made, a Member chosen by the members present", "Chairperson of Scientific Committee", "Meeting is canceled"],
        correct: "any member nominated by the Chairperson, or if no nomination is made, a Member chosen by the members present",
        description: "If the Chairperson is unable to attend a meeting of the Food Authority, any other  Member nominated by the Chairperson in this behalf and, in the absence of such nomination or where there is no Chairperson, any Member chosen by the Members present from amongst  themselves, shall preside at the meeting."
    },
    { // 17
        question: "Food Authority meeting shall be directed by",
        answers: ["Chairperson", "CEO", "Central Advisory Committee", "Any of them"],
        correct: "Chairperson"
    },
    { // 17
        question: "Where does the Food Authority meeting be held?",
        answers: ["at zones specified in first schedule by rotation", "at head office or any of its offices", "at department of health and welfare", "at public places"],
        correct: "at head office or any of its offices"
    },
    
    { // 16
        question: "Food Authority shall keep confidential information provided by third parties as private",
        answers: ["True", "False"],
        correct: "True",
        description: "Alert! Food Authority shall not disclose confidential information given by third parties to public. However if it is necessary in order to protect the public health, food authority can public these information."
    },
    { // 16
        question: "___may from time-to-time give such directions, on matters relating to food safety and standards, to the Commissioners of food safety, who shall be bound by such directions while exercising his powers under this Act.",
        answers: ["Food Authority", "Central Advisory Committee", "Scientific Committee", "Central Government"],
        correct: "Food Authority"
    },
    { // 16
        question: "Which of the following the Food Authority make public without undue delay?",
        answers: ["Opinions of Scientific committee/panels immediately after adaptation", "Annual declarations of interest made by members of either food authority or scientific committee/panels or CAC or CEO himself", "The results of its scientific studies", "Annual reports of its activities", "All of the above"],
        correct: "All of the above"
    },
    { // 16
        question: "Which of the following is function of Food Authority?",
        answers: ["Regulate and monitor every areas of handled food to ensure safe and wholesome food", "make regulations to specify standards, guidelines and other relevant procedures", "search, collect, collate, analyse and summarise relevant scientific and technical data", "provide scientific advice, technical support, messages on health and nutritional risks to government", "establish a system of network of organisation to facilitate scientific co-operation framework", "Take all such steps to spread reliable information, opinions of scientific committee/panels, annual reports of FSSAI's activity, annual declarations of interest, results of scientific studies, - to public", "provide training program in food safety to persons intend to involve in food business", "time-to-time give directions to commissioners of food safety", "keep any confidential information (received from third parties) as private; and only can disclose if it is necessary to protect public health", "All of the above"],
        correct: "All of the above",
        description: "The duties and functions of food authority is outlined in section 16 of FSSA 2006"
    },
    { // 16
        question: "Who shall take all steps to ensure that the public, consumers, interested parties and all levels of panchayats receive rapid, reliable, objective and  comprehensive information through appropriate methods and means?",
        answers: ["Food Authority", "Central Advisory Committee", "Scientific Committee", "Central Government"],
        correct: "Food Authority"
    },
    { // 16
        question: "Food Authority provided scientific and technical advice to Central and State Government assisting in",
        answers: ["implementing crisis management procedures with regard to food safety", "framing policy and rules in areas direct/indirect to food safety and nutrition", "improving co-operation with international organisations", "All of the above"],
        correct: "All of the above"
    },
    { // 16
        question: "Food Authority must forward messages on health and nutritional risks of food to",
        answers: ["Central Government", "State Governments", "Commissioners of Food Safety", "All of them"],
        correct: "All of them"
    },
    { // 16
        question: "In framing policies and rules by Central or State Government direct/indirect to food safety and nutrition, who shall provide guidelines to the government?",
        answers: ["Food Authority", "Commissioners of food safety", "All of them", "Any of them"],
        correct: "Food Authority"
    },
    { // 16
        question: "What type of advice does the Food Authority provide to the Central and State Governments according to Section 16 of the FSSA 2006?",
        answers: ["Financial advice for food businesses", "Scientific advice and technical support in matters related to food safety and nutrition.", "Marketing strategies for food products.", "Legal advice on food trade policies."],
        correct: "Scientific advice and technical support in matters related to food safety and nutrition."
    },
    { // 16
        question: "Food Authority shall provide scientific advice and technical support to",
        answers: ["Central Government", "Statement Government", "Both", "None"],
        correct: "Both",
        description: "The Food Authority shall provide scientific advice and technical support to the Central Government   and the State Governments in matters of framing the policy and rules in   areas which have a direct or indirect bearing on food safety and nutrition;"
    },
    { // 16
        question: "Who shall specify guidelines, standards, procedures, limits of use and such other criterias in regulations?",
        answers: ["Food Authority", "Central Advisory Committee", "Scientific Committee", "Central Government"],
        correct: "Food Authority"
    },
    { // 16
        question: "It shall be the duty of the Food Authority to regulate and monitor the manufacture,  processing, distribution, sale and import of food so as to ensure safe and wholesome food.",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 16
        question: "It shall be the duty of the ________ to regulate and monitor the manufacture, processing, distribution, sale and import of food so as to ensure safe and wholesome food.",
        answers: ["Food Authority", "Central Advisory Committee", "Scientific Committee", "Central Government"],
        correct: "Food Authority"
    },
    { // 16
        question: "Who shall ensure safe and wholesome food by regulating and monitoring the manufacture, processing, distribution, sale, and import of food.",
        answers: ["Food Authority", "Central Advisory Committee", "Scientific Committee", "Central Government"],
        correct: "Food Authority"
    },
    { // 16
        question: "What is the primary duty of the Food Authority?",
        answers: ["To regulate food prices.", "To ensure safe and wholesome food by regulating and monitoring the manufacture, processing, distribution, sale, and import of food.", "To promote the sale of processed foods.", "To provide financial assistance to food businesses."],
        correct: "To ensure safe and wholesome food by regulating and monitoring the manufacture, processing, distribution, sale, and import of food."
    },    
    { // 16
        question: "Functions of Food Authority were defined in which section of FSSA 2006?",
        answers: ["14", "15", "16", "17"],
        correct: "16",
        description: "Section 16: Duties and functions of Food Authority"
    },

    { // 15
        question: "Which of the following is true about the term of the members of the Scientific Committee and the Scientific Panels?",
        answers: ["It is fixed and non-renewable", "It is three years and can be renewed", "It is five years and can be renewed", "It is decided on a case-by-case basis"],
        correct: "It is three years and can be renewed"
    },
    { // 15
        question: "_____ shall specify the procedure for the operation and cooperation of the Scientific Committee and Scientific Panels?",
        answers: ["Food Authority's internal policies", "Regulations", "Central Advisory Committee", "Chairperson of Food Authority"],
        correct: "Regulations"
    },
    { // 15
        question: "How do the Scientific Committee and the Scientific Panel make decisions?",
        answers: ["By unanimous consent", "By a majority of their members", "By the decision of the Chairperson after hearing other member's opinions", "By external arbitration"],
        correct: "By a majority of their members"
    },
    { // 15
        question: "How is the Chairperson of the Scientific Committee or Scientific Panel selected?",
        answers: ["Appointed by the Food Authority", "Elected by the members from amongst themselves", "Nominated by the government", "Selected by an external committee"],
        correct: "Elected by the members from amongst themselves"
    },
    { // 15
        question: "Where is the vacancy notice for the Scientific Committee and Scientific Panel published?",
        answers: ["In government gazettes only", "On social media platforms", "In relevant leading scientific publications and on the Food Authority's website", "In newspapers only"],
        correct: "In relevant leading scientific publications and on the Food Authority's website"
    },
    { // 15
        question: "For how long are the members of the Scientific Committee and the Scientific Panel appointed?",
        answers: ["Five years", "Two years", "Three years", "Four years"],
        correct: "Three years",
        description: "for a  period of three years, which shall be renewable for such period, and the vacancy notice shall  be published in the relevant leading scientific publications and on the Food Authority’s  website for a call for expressions of interest. "
    },
    { // 15
        question: "Who appoints the members of the Scientific Committee and the Scientific Panels?",
        answers: ["Central Advisory Committee", "The Food Authority", "The Government of India", "The Ministry of Health"],
        correct: "The Food Authority",
        description: "The members of the Scientific Committee, who are not members of the Scientific  Panel and the members of the Scientific Panel shall be appointed by the Food Authority."
    },
    
    { // 14
        question: "How does the Scientific Committee ensure the harmonization of working methods of the Scientific Panels?",
        answers: ["By conducting audits", "By adopting uniform working procedures", "By outsourcing to third-party experts", "By implementing government regulations"],
        correct: "By adopting uniform working procedures"
    },
    { // 14
        question: "What action does the Scientific Committee take for subjects not covered by any specific Scientific Panel?",
        answers: ["Refers the matter to the Food Authority directly", "Sets up working groups", "Declines to provide an opinion", "Conducts surveys and polls"],
        correct: "Sets up working groups"
    },
    { // 14
        question: "What is a key power granted to the Scientific Committee under the FSS Act 2006?",
        answers: ["Licensing of food businesses", "Issuing fines for food safety violations", "Organizing public hearings", "Conducting market research on food products"],
        correct: "Organizing public hearings"
    },
    { // 14
        question: "How many independent scientific experts are there in Scientific committee?",
        answers: ["5", "6", "7", "8"],
        correct: "6"
    },
    { // 14
        question: "What does the Scientific Committee primarily provide to the Food Authority?",
        answers: ["Legal advice", "Scientific opinions", "Financial support", "Policy recommendations"],
        correct: "Scientific opinions"
    },
    { // 14
        question: "What type of experts does the Scientific Committee include apart from the Chairpersons of the Scientific Panels?",
        answers: ["Experts affiliated with multiple Scientific Panels", "Independent scientific experts not affiliated with any Scientific Panel", "Members of the Food Safety Enforcement Team", "Representatives from food industry associations"],
        correct: "Independent scientific experts not affiliated with any Scientific Panel"
    },
    { // 14
        question: "Scientific Committee is constituted by?",
        answers: ["Central Advisory Committee", "The Scientific Panels", "The Food Authority", "The Government of India"],
        correct: "The Food Authority"
    },
    { // 14
        question: "Who appoints the members of the Scientific Committee?",
        answers: ["Central Advisory Committee", "The Scientific Panels", "The Food Authority", "The Government of India"],
        correct: "The Food Authority"
    },
    { // 14
        question: "What is the main purpose of the Scientific Committee's coordination as per Section 14?",
        answers: ["To standardize food packaging", "To ensure consistency in the scientific opinion procedure and harmonization of working methods", "To monitor the food supply chain", "To promote food export"],
        correct: "To ensure consistency in the scientific opinion procedure and harmonization of working methods"
    },
    { // 14
        question: "When can the Scientific Committee set up working groups?",
        answers: ["Only when requested by the government", "When necessary, especially for subjects not covered by any Scientific Panel", "To oversee the daily operations of the Food Authority", "For training new members of the Food Authority"],
        correct: "When necessary, especially for subjects not covered by any Scientific Panel"
    },
    { // 14
        question: "Which of the following is NOT a function of the Scientific Committee?",
        answers: ["Providing scientific opinions on multi-sectoral issues", "Ensuring consistency in the scientific opinion procedure", "Conducting food quality tests", "Harmonizing working methods of the Scientific Panels"],
        correct: "Conducting food quality tests"
    },
    { // 14
        question: "What is one of the responsibilities of the Scientific Committee?",
        answers: ["Conducting food inspections", "Organizing public hearings when necessary", "Enforcing food safety laws", "Issuing food licenses"],
        correct: "Organizing public hearings when necessary"
    },
    { // 14
        question: "What is the composition of the Scientific Committee?",
        answers: ["Chairpersons of the Scientific Panels", "Six independent scientific experts", "Members of the Food Authority only", "Chairpersons of the Scientific Panels and six independent scientific experts"],
        correct: "Chairpersons of the Scientific Panels and six independent scientific experts"
    },    

    { // 13
        question: "Which of the following about Scientific Panel is true?",
        answers: ["Food Authority can establish as many scientific panel as it considers; even can change panel's name", "Food Authority can add new members or omit existing members from any scientific panel", "The panels consists of independent scientific experts; and the panel can invite relevant industry or consumer representatives for its own deliberations", "All of the above"],
        correct: "All of the above"
    },
    { // 13
        question: "The name of Scientific Panel can be changed",
        answers: ["True", "False"],
        correct: "True",
        description: "Food Authority can change the name of any scientific panel if necessary"
    },
    { // 13
        question: "Can Chairperson of any Scientific Panel able to add new members or omit existing members from scientific panels?",
        answers: ["Yes", "No"],
        correct: "No",
        description: "Food Authority has the power to add new members or omit existing members from scientific panels?"
    },
    { // 13
        question: "Food Authority can not change existing scientific panel's name",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 13
        question: "Can Food Authority change existing scientific panel's name?",
        answers: ["Yes", "No"],
        correct: "Yes"
    },
    { // 13
        question: "Can Food Authority add new members or omit existing members from scientific panels?",
        answers: ["Yes", "No"],
        correct: "Yes"
    },
    { // 13
        question: "Food Authority don't have the power to establish new scientific panels",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 13
        question: "Food Authority can establish as many scientific panels as it considers",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 13
        question: "Scientific Panel can not invite relevant industry and consumer representatives for its deliberations",
        answers: ["True", "False"],
        correct: "False"
    },
    { // 13
        question: "Scientific Panel, if want, can invite relevant industry and consumer representatives for its deliberations",
        answers: ["True", "False"],
        correct: "True"
    },
    { // 13
        question: "Scientific panel consists of",
        answers: ["independent scientific experts", "scientific experts", "Food Analysts", "Technical Officers"],
        correct: "independent scientific experts"
    },
    { // 13
        question: "Who can establish scientific panel?",
        answers: ["Central Government", "Statement Government", "Food Authority", "Food Authority with the consent of Central Government"],
        correct: "Food Authority"
    },    

    { // 12
        question: "Which of the following about Central Advisory Committee is correct",
        answers: ["CAC shall meet regularly at the invitation of CEO", "The CAC meetings shall be arranged for not less than 3 times a year", "CAC meetings can also be arrange by the request of at least 1/3 CAC members", "All of the above"],
        correct: "All of the above"
    },
    { // 12
        question: "Apart from invitation by CEO, the Central Advisory Committee meetings can be arranged by the request of _____ members of CAC.",
        answers: ["at least one-third", "at least one-fourth", "at least half", "all"],
        correct: "at least one-third"
    },
    { // 12
        question: "Central Advisory Committee meetings shall be held",
        answers: ["not less than 3 times a year", "3 times a year", "not less than 2 times a year", "2 times a year"],
        correct: "not less than 3 times a year"
    },
    { // 12
        question: "Central Advisory Committee meeting invitations are send by",
        answers: ["Chairperson of Central Advisory Committee", "Chairperson of Food Authority", "Chairperson of Scientific Committee", "Any members of Central Advisory Committee"],
        correct: "Chairperson of Central Advisory Committee",
        description: "CAC meeting can invitations can be send by CEO i.e., Chairperson of CAC. Alternatively, by the request of at least 1/3 members of CAC, the meeting can be organised."
    },
    { // 12
        question: "Central Advisory Committee meeting invitations are send by",
        answers: ["CEO of FSSAI", "Chairperson of Food Authority", "Chairperson of Scientific Committee", "Any members of Central Advisory Committee"],
        correct: "CEO of FSSAI",
        description: "CAC meeting can invitations can be send by CEO i.e., Chairperson of CAC. Alternatively, by the request of at least 1/3 members of CAC, the meeting can be organised."
    },
    { // 12
        question: "Who can advice Food Authority",
        answers: ["Central Advisory Committee", "State Government", "Codes Alimentarius Commission", "No one but its own members"],
        correct: "Central Advisory Committee"
    },
    { // 12
        question: "Who bridges between Central food authority and state food authorities?",
        answers: ["Central Advisory Committee", "Codex Alimentarius Commission", "Central Government", "Food Authority"],
        correct: "Central Advisory Committee"
    },
    { // 12
        question: "Central Advisory Committee shall ensure close co-operation between",
        answers: ["Central Government and State Government", "Central Food Authority and State Food Authorities", "Food Authority and Central Government", "Central Government and State Food Authorities"],
        correct: "Central Food Authority and State Food Authorities",
        description: "As per section 12(1): \u0022The Central Advisory Committee shall ensure close co-operation between the Food Authority and the enforcement agencies and organisations operating in the field of food.\u0022<br><br>here enforcement agencies means state food authority"
    },

    { // 11
        question: "Commissioner of food safety is not a member of CAC",
        answers: ["True", "False"],
        correct: "False",
        description: "All commissioner of food safety are members of CAC"
    },
    { // 11
        question: "Commissioner of food safety is a member of CAC",
        answers: ["True", "False"],
        correct: "True",
        description: "All commissioner of food safety are members of CAC"
    },
    { // 11
        question: "Representatives of different Ministries or Departments of Central Government in Agriculture, Animal Husbandry and Dairying, Bio-technology, Commerce and Industry, etc. are _______ to the Central Advisory Committee",
        answers: ["members", "invitees", "both", "none"],
        correct: "invitees"
    },
    { // 11
        question: "Is CEO of FSSAI is an ex-officio?",
        answers: ["True", "False"],
        correct: "True",
        description: "CEO of Food Authority is an ex-officio member since he holds two positions at the same time which are being CEO of FSSAI and Chairperson of CAC"
    },
    { // 11
        question: "Central Advisory Committee consist members of",
        answers: ["2 members each to represent food industry, agriculture, consumers, relevant research bodies and food laboratories", "All Commissioners of food safety", "CEO of FSSAI", "Chairperson of Scientific Committee", "All the the above"],
        correct: "All the the above"
    },
    { // 11
        question: "Who is the Chairperson of Central Advisory Committee?",
        answers: ["CEO of Food Authority", "Chairperson of Food Authority", "Any member of Food Authority", "Any ex-officio member of Food Authority"],
        correct: "CEO of Food Authority",
        description: "Alert! CEO of FSSAI is the (ex-officio) chairperson of CAC. Since CEO holds two position at same time thus he is considered as ex-officio.<br><br>As per section 11(4): \u0022The Chief Executive Officer shall be ex officio Chairperson of the Central Advisory Committee.\u0022"
    },
    { // 11
        question: "Who established Central Advisory Committee?",
        answers: ["Food Authority", "Food Industry", "State Government", "Central Government"],
        correct: "Food Authority",
        description: "section 11(1)"
    },
    

      
    { // 4
        question: "Does Food safety & Standards Act 2006 has specified in this act that the head office of FSSAI shall be establish in Delhi?",
        answers: ["No, it was dependent upon the FSSAI chairperson and its members of the time", "No, it was dependent upon the central government of the time", "Yes, it is as per section 4", "Yes, it is as per section 5"],
        correct: "Yes, it is as per section 4",
        description: "Section 4(3) of FSSA states 'The head office of the Food Authority shall be at Delhi'."
    },
    
      
]

const fssact2006c3 = []
const fssact2006c4 = []
const fssact2006c5 = []
const fssact2006c6 = []
const fssact2006c7 = []
const fssact2006c8 = []
const fssact2006c9 = []
const fssact2006c10 = []
const fssact2006c11 = []


const fssact2006c12 = [ // Chapter XII MISCELLANEOUS
    { // 91
        question: "Who can make Food safety and Standards rules?",
        answers: ["Central Government", "Food Authority", "Both Central Government and Food Authority individually", "Both Central Government and Food Authority after arranging a meeting"],
        correct: "Central Government",
        description: "Section 91: Power of Central Government to make rules"
    },
    { // 91
        question: "Who can make Food safety and Standards rules?",
        answers: ["Central Government", "Food Authority", "Central Advisory Committee", "Both State and Central Food Authority"],
        correct: "Central Government",
        description: "Section 91: Power of Central Government to make rules"
    },
    { // 91
        question: "\u0022Power of Central Government to make rules\u0022 is which section of FSSA 2006?",
        answers: ["Section 91", "Section 22", "Section 92", "Section 66"],
        correct: "Section 91"
    },
    { // 91
        question: "\u0022Power of Central Government to make rules\u0022 is which section of FSSA 2006?",
        answers: ["Section 90", "Section 91", "Section 92", "Section 93"],
        correct: "Section 91"
    },
    { // 91
        question: "Which section empowers Central Government to make food safety & standards rules?",
        answers: ["Section 90", "Section 91", "Section 92", "Section 93"],
        correct: "Section 91",
        description: "Section 91: Power of Central Government to make rules"
    },
    { // 92
        question: "Does Food Authority require approval from Central Government for making regulations?",
        answers: ["Yes", "No"],
        correct: "Yes",
        description: "Section 92(1): The Food Authority may, with the previous approval of the Central Government and after previous publication, by notification, make regulations consistent with this Act and the rules make thereunder to carry out the provision of this Act."
    },
    { // 92
        question: "Which section empowers FSSAI to make food safety & standards regulations?",
        answers: ["Section 90", "Section 91", "Section 92", "Section 93"],
        correct: "Section 92",
        description: "Section 92: Power of Food Authority to make regulations<br>however food authority need to have the approval of central government"
    },
    { // 92
        question: "\u0022Power of Food Authority to make regulations\u0022 is which section of FSSA 2006?",
        answers: ["Section 90", "Section 91", "Section 92", "Section 93"],
        correct: "Section 92"
    },
    { // 92
        question: "\u0022Power of Food Authority to make regulations\u0022 is which section of FSSA 2006?",
        answers: ["Section 91", "Section 98", "Section 92", "Section 73"],
        correct: "Section 92"
    },
    { // 92
        question: "Who can make Food safety and Standards regulations?",
        answers: ["Central Government", "Food Authority", "Central Advisory Committee", "Both State and Central Food Authority"],
        correct: "Food Authority",
        description: "Section 92: Power of Food Authority to make regulations<br>however food authority need to have the approval of central government"
    },
    { // 92
        question: "Who can make Food safety and Standards regulations?",
        answers: ["Central Government", "Food Authority", "Both Central Government and Food Authority individually", "Both Central Government and Food Authority after arranging a meeting"],
        correct: "Food Authority",
        description: "Section 92: Power of Food Authority to make regulations<br>however food authority need to have the approval of central government"
    },
]

const fssrules2011 = [ // FSS Rules

]


const fssregulationsoverview = [ // Overview of FSS Regulations

]


const fssfoodproductsstandardsandfoodadditives = [ // Food Products Standards and Food Additives

]