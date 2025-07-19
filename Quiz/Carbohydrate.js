const propertiesofcarbohydrates = [ // Carbohydrate overview and properties of carbohydrates
    {
    question: "What is the primary function of carbohydrates in the human diet?",
    answers: ["Energy source", "Building muscle", "Enhancing brain function", "Promoting bone health"],
    correct: "Energy source"
    },
    {
    question: "True or False: Carbohydrates are the body's preferred source of energy.",
    answers: ["True", "False"],
    correct: "True"
    }, 
    {
    question: "True or False: Carbohydrates can be classified as either simple or complex.",
    answers: ["True", "False"],
    correct: "True"
    },  
    {
    question: "What is the main source of carbohydrates in a typical Western diet?",
    answers: ["Fruits and vegetables", "Grains and cereals", "Meat and dairy products", "Sugars and sweets"],
    correct: "Grains and cereals"
    }, 
    {
    question: "What is the term for the unit of measurement for the sweetness of a carbohydrate?",
    answers: ["Glucose", "Fructose", "Saccharide", "Glycemic index"],
    correct: "Glycemic index"
    },
    {
    question: "True or False: Carbohydrates have 4 calories per gram.",
    answers: ["True", "False"],
    correct: "True"
    }, 
    {
    question: "What is the recommended daily intake of carbohydrates as a percentage of total daily calories in a balanced diet?",
    answers: ["10-15%", "25-35%", "50-60%", "75-85%"],
    correct: "25-35%"
    },  
    {
    question: "What is the term for the process of breaking down carbohydrates into glucose to be used for energy?",
    answers: ["Glycogenesis", "Glycogenolysis", "Glycolysis", "Gluconeogenesis"],
    correct: "Glycolysis"
    }, 
    {
    question: "True or False: Fiber is considered a carbohydrate, but it is fully digested and absorbed in the small intestine.",
    answers: ["True", "False"],
    correct: "False"
    }, 
]











const monoandoligosaccharides = [ // Monosaccharides, Disaccharides and Oligosaccharides

/*Introduction to Carbohydrate*/


    {
    question: "Which of the following is a simple carbohydrate?",
    answers: ["Starch", "Cellulose", "Glucose", "Maltose"],
    correct: "Glucose"
    },          
    {
    question: "Which type of carbohydrate is commonly found in fruits, honey, and some root vegetables?",
    answers: ["Monosaccharides", "Disaccharides", "Oligosaccharides", "Polysaccharides"],
    correct: "Monosaccharides"
    },                          
    {
    question: "Which of the following is an example of a disaccharide?",
    answers: ["Glucose", "Lactose", "Maltose", "Cellulose"],
    correct: "Maltose"
    },  


    
/*Monosaccharides*/ 


    // Stereoisomers
     { // 42
        question: "D-glucose and D-galactose are epimers at",
        answers: ["C-1", "C-2", "C-4", "C-5"],
        correct: "C-4",
        description: "D-glucose and D-galactose are epimers at C-4 position"
    },
    { // 41
        question: "D-glucose and D-mannose are epimers at",
        answers: ["C-1", "C-2", "C-4", "C-5"],
        correct: "C-2",
        description: "D-glucose and D-mannose are epimers at C-2 position"
    },
    { // 40
        question: "Two monosaccharide with same carbon number having -H and -OH differ at only one chiral carbon, is called",
        answers: ["Epimers", "Anomers", "Enantiomers", "None"],
        correct: "Epimers",
        description: "wo monosaccharide with same carbon number having -H and -OH differ at only one chiral carbon. e.g. D-glucose and D-mannose at C-2 position; D-glucose and D-galactose at C-4 position,."
    },
    { // 39
        question: "\u03B2-configuration of sugar is when -OH is at: ",
        answers: ["left", "right", "up", "down"],
        correct: "up",
        description: "-OH below at C-1 is \u03B1-configuration and -OH top at C-1 is \u03B2-confuiguration."
    },
    { // 38
        question: "\u03B1-configuration of sugar is when -OH is at: ",
        answers: ["left", "right", "up", "down"],
        correct: "down",
        description: "-OH below at C-1 is \u03B1-configuration and -OH top at C-1 is \u03B2-confuiguration."
    },
    { // 37
        question: "\u03B1 and \u03B2 stereoisomers are known as",
        answers: ["Enantiomers", "Anomers", "Epimers", "Pyran-furan form"],
        correct: "Anomers"
    },
    { // 36
        question: "D-configuration of monosaccharide is when -OH is at",
        answers: ["left", "right", "up", "down"],
        correct: "right",
        description: "Enantiomers are mirror image (opposite configurations at all chiral centers); -OH at left is L-configuration and -OH at right is D-configuration. D and L configuration refers to the last chiral carbon in the molecule."
    },
    { // 35
        question: "L-configuration of monosaccharide is when -OH is at",
        answers: ["left", "right", "up", "down"],
        correct: "left",
        description: "Enantiomers are mirror image (opposite configurations at all chiral centers); -OH at left is L-configuration and -OH at right is D-configuration. D and L configuration refers to the last chiral carbon in the molecule."
    },
    { // 34
        question: "Most hexose sugars of living organisms are which enantiomer?",
        answers: ["D-isomer", "L-isomer", "there's no such thing"],
        correct: "D-isomer",
        description: "Most hexoses of living organisms are D-isomers."
    },
    { // 33
        question: "Mirror image like Stereoisomers are known as:",
        answers: ["Enantiomers", "Anomers", "Epimers", "Pyran-furan form"],
        correct: "Enantiomers",
        description: "Enantiomers are mirror image (opposite configurations at all chiral centers); -OH at left is L-configuration and -OH at right is D-configuration. D and L configuration refers to the last chiral carbon in the molecule."
    },
    { // 32
        question: "In general monosaccharide with n number of chiral carbon has ______ number of stereoisomers",
        answers: ["2n+2", "2n", "3n", "3n-1"],
        correct: "2n",
        description: "In general monosaccharide with n number of chiral carbon has 2n number of stereoisomers e.g. triose has 1 chiral carbon therefore has 2 stereoisomers (2n≈21=2)whereas aldohexoses have 4 chiral carbon making 16 possible stereoismers."
    },
    { // 31
        question: "In general monosaccharide with n number of chiral carbon has ______ number of stereoisomers",
        answers: ["n", "2n", "2n+1", "2n-1"],
        correct: "2n",
        description: "In general monosaccharide with n number of chiral carbon has 2n number of stereoisomers e.g. triose has 1 chiral carbon therefore has 2 stereoisomers (2n≈21=2)whereas aldohexoses have 4 chiral carbon making 16 possible stereoismers."
    },
    // Projections
    { // 30
        question: "In case of a 6C aldose sugar the furan ring is formed between:",
        answers: ["C1 aldehyde + C4 hydroxyl group", "C1 aldehyde + C5 hydroxyl group", "C2 aldehyde + C4 hydroxyl group", "C1 aldehyde + C6 hydroxyl group"],
        correct: "C1 aldehyde + C4 hydroxyl group",
        description: "Furan ring: five member ring [C1 aldehyde + C4 hydroxyl group]"
    },
    { // 29
        question: "In case of a 6C aldose sugar the pyran ring is formed between:",
        answers: ["C1 aldehyde + C5 hydroxyl group", "C1 aldehyde + C4 hydroxyl group", "C1 aldehyde + C6 hydroxyl group", "C2 aldehyde + C5 hydroxyl group"],
        correct: "C1 aldehyde + C5 hydroxyl group",
        description: "Pyran ring: six member ring [C1 aldehyde + C5 hydroxyl group]"
    },
    { // 28
        question: "Furan ring is _____ member ring.",
        answers: ["3", "4", "5", "6"],
        correct: "5",
        description: "Furan ring: five member ring [C1 aldehyde + C4 hydroxyl group]"
    },
    { // 27
        question: "Pyran ring is ____ member ring.",
        answers: ["3", "4", "5", "6"],
        correct: "6",
        description: "Pyran ring: six member ring [C1 aldehyde + C5 hydroxyl group]"
    },
    { // 26
        question: "\u03B1 and \u03B2 configuration is present in which carbon of carbohydrate?",
        answers: ["1", "2", "5", "6"],
        correct: "1",
        description: "Unlike open structure ring structure contain additional asymmetric carbon at C-1 position. thus more stereoisomer can form (\u03B1 and \u03B2 configuration)."
    },
    { // 25
        question: "Additional stereoisomer occurs at C-1 position of carbohydrate in which projection?",
        answers: ["Fisher", "Howarth", "Both", "None"],
        correct: "Howarth",
        description: "Unlike open structure ring structure contain additional asymmetric carbon at C-1 position. thus more stereoisomer can form (\u03B1 and \u03B2 configuration)."
    },
    { // 24
        question: "The cyclic structure contains more stereoisomer as compare to open structure of carbohydrate at which carbon postition?",
        answers: ["1", "2", "5", "6"],
        correct: "1",
        description: "Unlike open structure ring structure contain additional asymmetric carbon at C-1 position. thus more stereoisomer can form (\u03B1 and \u03B2 configuration)."
    },
    { // 23
        question: "In Howarth projection of carbohydrate the carbonyl group forms ______ bond with oxygen of hydroxyl group (-OH) to form a ring.",
        answers: ["covalent", "hydrogen", "ionic", "glycosidic"],
        correct: "covalent",
        description: "In Howarth projection of carbohydrate the carbonyl group forms covalent bond with oxygen of hydroxyl group (-OH) to form a ring."
    },
    { // 22
        question: "In Howarth projection the _______ group forms covalent bond with oxygen of hydroxyl group (-OH) to form a ring.",
        answers: ["Carbonyl", "Hydroxyl", "Amide", "None of the above"],
        correct: "Carbonyl",
        description: "Carbonyl group i.e., aldehyde group for hemiacetal and ketone group for hemiketal<br><br>In Howarth projection of carbohydrate the carbonyl group forms covalent bond with oxygen of hydroxyl group (-OH) to form a ring."
    },
    { // 21
        question: "In Howarth projection the carbonyl group forms covalent bond with _____ to form a ring.",
        answers: ["oxygen of hydroxyl group (-OH)", "hydrogen of hydroxyl group (-OH)", "nitrogen of amide group (-NH2)", "hydrogen of amide group (-NH2)"],
        correct: "oxygen of hydroxyl group (-OH)",
        description: "In Howarth projection of carbohydrate the carbonyl group forms covalent bond with oxygen of hydroxyl group (-OH) to form a ring."
    },
    // Aldose & Ketose sugars
    { // 20
        question: "DHA is:",
        answers: ["1C", "2C", "3C", "4C"],
        correct: "3C"
    },
    { // 19
        question: "Dihydroxyacetone is:",
        answers: ["1C", "2C", "3C", "4C"],
        correct: "3C"
    },
    { // 18
        question: "Glyceraldehyde is:",
        answers: ["1C", "2C", "3C", "4C"],
        correct: "3C"
    },
    { // 17
        question: "Dihydroxyacetoneis a _____ sugar",
        answers: ["Aldose", "Ketose"],
        correct: "Ketose"
    },
    { // 16
        question: "_____ is the simplest Ketose",
        answers: ["Glyceraldehyde", "Dihydroxyacetone", "Erythrulose", "Erythrose"],
        correct: "Dihydroxyacetone"
    },
    { // 15
        question: "Glyceraldehyde is a _____ sugar",
        answers: ["Aldose", "Ketose"],
        correct: "Aldose"
    },
    { // 14
        question: "_____ is the simplest aldose",
        answers: ["Glyceraldehyde", "Dihydroxyacetone", "Erythrulose", "Erythrose"],
        correct: "Glyceraldehyde"
    },
    { // 13
        question: "What is the distinguishing functional group in a ketose sugar?",
        answers: ["Aldehyde group", "Ketone group", "Carboxyl group", "Amine group"],
        correct: "Ketone group"
    },
    { // 12
        question: "What functional group is present at the terminal position in an aldose sugar?",
        answers: ["Ketone group", "Carboxyl group", "Aldehyde group", "Hydroxyl group"],
        correct: "Aldehyde group",
        description: "Both aldose and ketose have at least 2 or more hydroxyl groups; the difference is aldose sugar has carbonyl group (specifically aldehyde group) at terminal [when in open chain] whereas ketose sugar has carbonyl group (specifically ketone group) at C-2 position."
    },
    { // 11
        question: "Where is the carbonyl group located in a ketose sugar?",
        answers: ["At the terminal position", "At the C-2 position", "At the C-4 position", "At the C-6 position"],
        correct: "At the C-2 position",
        description: "Both aldose and ketose have at least 2 or more hydroxyl groups; the difference is aldose sugar has carbonyl group (specifically aldehyde group) at terminal [when in open chain] whereas ketose sugar has carbonyl group (specifically ketone group) at C-2 position."
    },
    { // 10
        question: "Where is the carbonyl group located in an aldose sugar when in an open-chain form?",
        answers: ["At the C-2 position", "At the terminal position", "At the C-4 position", "At the C-3 position"],
        correct: "At the terminal position",
        description: "Both aldose and ketose have at least 2 or more hydroxyl groups; the difference is aldose sugar has carbonyl group (specifically aldehyde group) at terminal [when in open chain] whereas ketose sugar has carbonyl group (specifically ketone group) at C-2 position."
    },
    { // 9
        question: "What is a common structural feature of both aldose and ketose sugars?",
        answers: ["Presence of at least one amino group", "Presence of at least two or more hydroxyl groups", "Presence of at least one or more hydroxyl groups", "Presence of at least two amino group"],
        correct: "Presence of at least two or more hydroxyl groups"
    },
    { // 8
        question: "Both aldose and ketose have at least _____ hydroxyl groups",
        answers: ["1", "2", "3", "0"],
        correct: "2",
        description: "Both aldose and ketose have at least 2 or more hydroxyl groups"
    },
    // Introduction to monosaccharides
    { // 7
        question: "Which suffix is commonly found in the names of monosaccharides?",
        answers: ["-ase", "-ose", "-ite", "-ine"],
        correct: "-ose"
    },
    { // 6
        question: "What are the two families of monosaccharides?",
        answers: ["Aldose and Ketose", "Glucose and Fructose", "Starch and Cellulose", "Proteins and Lipids"],
        correct: "Aldose and Ketose"
    },
    { // 5
        question: "What are monosaccharides?",
        answers: ["Single polyhydroxy aldehyde or ketone units", "Complex polyhydroxy aldehyde or ketone units", "Two polyhydroxy aldehyde or ketone units", "All of the above"],
        correct: "Single polyhydroxy aldehyde or ketone units"
    },
    { // 4
        question: "Which two compounds are used in photosynthesis to produce carbohydrates?",
        answers: ["CO<sub>2</sub> and O<sub>2</sub>", "H<sub>2</sub>O and O<sub>2</sub>", "CO<sub>2</sub> and H<sub>2</sub>O", "H<sub>2</sub>O and ATP"],
        correct: "CO<sub>2</sub> and H<sub>2</sub>O",
        description: "Carbohydrates are produced by photosynthesis with CO2 and H2O."
    },
    { // 3
        question: "How are carbohydrates produced in nature?",
        answers: ["Through respiration", "Through photosynthesis", "Through fermentation", "Through oxidation"],
        correct: "Through photosynthesis",
        description: "Carbohydrates are produced by photosynthesis with CO2 and H2O."
    },
    { // 2
        question: "What is the general formula for carbohydrates?",
        answers: ["C<sub>n</sub>H<sub>2n</sub>O<sub>n</sub> or (CH<sub>2</sub>O)<sub>n</sub>", "C<sub>n</sub>H<sub>2n-2</sub>O<sub>n</sub> or (CH<sub>3</sub>O)<sub>n</sub>", "C<sub>n</sub>H<sub>2n+2</sub>O<sub>n</sub> or CH<sub>2</sub>O", "C<sub>n</sub>H<sub>2n+1</sub>O<sub>n</sub> or (CH<sub>3</sub>O)<sub>n</sub>"],
        correct: "C<sub>n</sub>H<sub>2n</sub>O<sub>n</sub> or (CH<sub>2</sub>O)<sub>n</sub>",
        description: "Carbohydrates are Polyhydroxy aldehydes or ketones.[CnH2nOn or (CH2O)n]."
    },
    { // 1
    question: "What are carbohydrates chemically classified as?",
    answers: ["Amino acids", "Polyhydroxy aldehydes or ketones", "Triglycerides", "Nucleic acids"],
    correct: "Polyhydroxy aldehydes or ketones",
    description: "Carbohydrates are Polyhydroxy aldehydes or ketones.[CnH2nOn or (CH2O)n]."
    },
    
]










const polysaccharides = [ // Polysaccharides
    {
    question: "What is the general term for complex carbohydrates composed of multiple sugar units?",
    answers: ["Monosaccharides", "Disaccharides", "Oligosaccharides", "Polysaccharides"],
    correct: "Polysaccharides"
    }, 
    {
    question: "Which carbohydrate is known for its role in providing dietary fiber and aiding in digestion?",
    answers: ["Glycogen", "Starch", "Cellulose", "Maltose"],
    correct: "Cellulose"
    },
    {
    question: "True or False: Complex carbohydrates are composed of long chains of monosaccharides.",
    answers: ["True", "False"],
    correct: "True"
    },
    {
    question: "Which type of carbohydrate can be found in grains, legumes, and potatoes?",
    answers: ["Simple sugars", "Fiber", "Starch", "Cellulose"],
    correct: "Starch"
    },
    {
    question: "Which carbohydrate is the storage form of glucose in animals?",
    answers: ["Glycogen", "Starch", "Cellulose", "Maltose"],
    correct: "Glycogen"
    }, 
]



