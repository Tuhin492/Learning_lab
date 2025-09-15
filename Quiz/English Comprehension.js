const partsofspeech = [
{ // 1
  question: "The teacher decided to ______ the test due to heavy rain.",
  answers: ["put up", "put off", "put out", "put in"],
  correct: "put off",
  description: "'Put off' means to postpone or delay. The test was postponed because of heavy rain."
},
{ // 2
  question: "She always ______ some money for emergencies.",
  answers: ["puts aside", "puts down", "puts on", "puts out"],
  correct: "puts aside",
  description: "'Put aside' means to save something for future use, especially money."
},
{ // 3
  question: "We ______ at a hotel during our trip.",
  answers: ["put down", "put forward", "put up", "put out"],
  correct: "put up",
  description: "'Put up' in this context means to stay temporarily in a place like a hotel."
},
{ // 4
  question: "I cannot ______ his rude behaviour anymore.",
  answers: ["put forward", "put off", "put up with", "put in"],
  correct: "put up with",
  description: "'Put up with' means to tolerate something unpleasant or annoying."
},
{ // 5
  question: "The firefighters quickly ______ the fire before it spread.",
  answers: ["put on", "put up", "put out", "put aside"],
  correct: "put out",
  description: "'Put out' means to extinguish a fire."
},
{ // 6
  question: "He always tries to ______ others to feel superior.",
  answers: ["put in", "put down", "put on", "put up"],
  correct: "put down",
  description: "'Put down' means to belittle or insult someone."
},
{ // 7
  question: "She ______ a lot of effort to complete the project.",
  answers: ["put across", "put by", "put in", "put off"],
  correct: "put in",
  description: "'Put in' means to invest time or effort into something."
},
{ // 8
  question: "He ______ an interesting idea during the discussion.",
  answers: ["put forward", "put aside", "put out", "put up with"],
  correct: "put forward",
  description: "'Put forward' means to suggest or present an idea."
},
{ // 9
  question: "She ______ a beautiful dress for the party.",
  answers: ["put down", "put on", "put across", "put up"],
  correct: "put on",
  description: "'Put on' means to dress in or wear something."
},
{ // 10
  question: "The teacher explained the topic well and ______ the concept clearly.",
  answers: ["put across", "put off", "put down", "put in"],
  correct: "put across",
  description: "'Put across' means to communicate or explain something clearly."
},

{ // News: Singular or Plural?( May 29, 2024)
    question: "What time _____ on TV?",
    answers: ["is the news", "are the news", "is news", "is the new"],
    correct: "is the news",
    description: "News is an uncountable noun, we treat it as a singular noun in sentences. Thus we use is instead of are."
},
{ // Phrasal Verbs with Look (Jun 2, 2024)
        question: "During her trip abroad, Sarah asked her neighbor to ____ her plants.",
        answers: ["look after", "look down on", "look up to"],
        correct: "look after"
    },
    { // Phrasal Verbs with Look (Jun 2, 2024)
        question: "As a child, I always ____ my older sister because she was so kind and smart.",
        answers: ["looked after", "looked down on", "looked up to"],
        correct: "looked up to",
        description: "Look up to means to admire or respect someone. For example I really look up to my grandmother for all the wisdom she has shared with me."
    },
    { // Phrasal Verbs with Look (Jun 2, 2024)
        question: "It's not nice to _____ people just because they have less money than you.",
        answers: ["look after", "look down on", "look up"],
        correct: "look down on",
        description: "Look down on means to think that you are better or more important than someone else. For example she tends to look down on people who don't have a college degree."
    },
    { // Phrasal Verbs with Look (Jun 2, 2024)
        question: "When my parents go on vacation, I have to _____ my little brother.",
        answers: ["look after", "look down on", "look up to"],
        correct: "look after",
        description: "Look after means to take care of someone or something. For example Can you look after my dog while I'm away?"
    },
    { //Perfecting Your Grammar: Verbs After 'Would Rather' (May 28, 2024)
        question: "She would rather _____ time with her family than go out with friends.",
        answers: ["spend", "to spend", "spending", "spends"],
        correct: "spend",
        description: "After 'would rather' we use a bare infinitive without 'to' We don't use 'would rather' with an -ing form or a to-infinitive and it doesn't change regardless of the subject."
    },
    { //Perfecting Your Grammar: Verbs After 'Would Rather' (May 28, 2024)
        question: "I would rather _____ to the park than stay at home",
        answers: ["go", "to go", "going"],
        correct: "go",
        description: "We use <b>would rather</b> to express a preferring one thing to another. For example<br>I would rather eat at home than go out.<br>She would rather read a book than watch TV.<br>They would rather walk than drive.<br>After 'would rather' we use a bare infinitive without 'to' We don't use 'would rather' with an -ing form or a to-infinitive and it doesn't change regardless of the subject."
    },
    // ADVERB PRACTICE QUIZ | TEST YOUR ENGLISH (May 30, 2022)
{ // 10
    question: "Which sentence is NOT correct?",
    answers: ["He was wrongly accused of the crime.", "You've spelt my name wrong.", "He filed in the from wrongly.", "That's not the answer. You wrong guessed."],
    correct: "That's not the answer. You wrong guessed.",
    description: "'Wrong' is both an adjective and adverb meaning that something is not correct. When we use 'wrong' as an adverb, it never comes before the verb it modifies.<br><br>Whereas 'wrongly' is always an adverb, and it can be used both before and after the word it modifies. For example <br>(before) <br>He was <u>wrongly</u> <b>accused</b> of the crime.<br>(after)<br>He filed in the <b>from</b> <u>wrongly</u>."
},
{ // 9
    question: "Which sentence is correct?",
    answers: ["There was scarcely any traffic", "There was scarcely no traffic"],
    correct: "There was scarcely any traffic",
    description: "'Scarcely' is a negative word, and 'no' should not be used after 'scarcely'."
},
{ // 8
    question: "Which of the following is NOT an adverb?",
    answers: ["kindly", "lonely", "early", "alone"],
    correct: "lonely",
    description: "'Lonely' is an adjective. kindly, early, alone are both adjective and adverb."
},
{ // 7
    question: "Which of the following is NOT an adverb?",
    answers: ["terribly", "quietly", "friendly", "carefully"],
    correct: "friendly",
    description: "'Friendly' is always an adjective. terribly, quietly, and carefully are always adverb."
},
{ // 6
    question: "Which sentence is NOT correct?",
    answers: ["Have you talked to Emma lately?", "His health hasn't been too good lately.", "The meeting started a bit lately."],
    correct: "The meeting started a bit lately.",
    description: "The meeting started a bit late."
},
{ // 5
    question: "I arrived ______ and missed the start of the movie.",
    answers: ["late", "lately"],
    correct: "late",
    description: "'Late' is both an adjective and adverb. 'Late' as adverb means 'not on time'.<br>'Lately' is also an adverb, it means 'recently', 'in the recent past'."
},
{ // 4
    question: "Which sentence uses the adverb \u0022strangly\u0022 correctly?",
    answers: ["His voice sounded strangely on the phone.", "Bob's been acting very strangely lately.", "I always feel strangely in unfamiliar surroundings."],
    correct: "Bob's been acting very strangely lately.",
    description: "The verb \u0022sound\u0022 of the sentence \u0022His voice sounded strangely on the phone.\u0022 and the verb \u0022feel\u0022 in the sentence \u0022I always feel strangely in unfamiliar surroundings.\u0022 are linking verbs. Therefore we have to use the adjective \u0022strange\u0022 after them.<br><br><b>His voice sounded strange on the phone.</b><br><b>I always feel strange in unfamiliar surroundings.</b>"
},
{ // 3
    question: "He ______ pleasantly.",
    answers: ["smiled", "seemed", "looked"],
    correct: "smiled",
    description: "Some verbs are linking verbs (such as seemed, looked). They link the subject of the sentence with an adjective. Adverbs are not used to describe this type of verb."
},
{ // 2
    question: "We _____ ever go to the theater.",
    answers: ["hard", "hardly"],
    correct: "hardly",
    description: "'Hardly' is an adverb. It has a totally different meaning from the adverb hard. It means 'almost no', or 'almost not'."
},
{ // 1
    question: "I'm going to have to work very ______ to pass that exam.",
    answers: ["hard", "hardly", "good"],
    correct: "hard",
    description: "'Hard' is both an adjective and an adverb. When it is an adverb, it means 'a lot' or 'with great energy & determination'. 'Good' is not an adverb and 'hardly' has a different meaning."
},
{ // Economic or Economical? Do you know the difference between these adjectives? (May 27, 2024)
    question: "It would be more _____ to buy groceries in bulk.",
    answers: ["Economic", "Economical"],
    correct: "Economical",
    description: "Economical means using resources carefully and avoid waste. It is often used to describe actions or things that save money or resources such as being frugal or efficient. For example<br>She is very economical with her spending.<br>Hybrid cars are more economical than traditional gas-guzzlers."
},
{ // Economic or Economical? Do you know the difference between these adjectives? (May 27, 2024)
    question: "LED bulbs are an _____ alternative to traditional incandescent lights",
    answers: ["Economic", "Economical"],
    correct: "Economical",
    description: "Economical means using resources carefully and avoid waste. It is often used to describe actions or things that save money or resources such as being frugal or efficient. For example<br>She is very economical with her spending.<br>Hybrid cars are more economical than traditional gas-guzzlers."
},
{ // Economic or Economical? Do you know the difference between these adjectives? (May 27, 2024)
    question: "The _____ crisis caused widespread job losses.",
    answers: ["Economic", "Economical"],
    correct: "Economic",
    description: "Economic is an adjective that related to the economy, finances or the management of resources. For example<br>The economic policy was designed to reduce inflation.<br>Economic growth is crucial for the development of a country."
},
{ // Think You Know Idioms? Answer These 3 Questions! (May 26, 2024)
    question: "They threw themselves ______ into the charity event.",
    answers: ["heart and soul", "hand to mouth", "hand in glove"],
    correct: "heart and soul",
    description: "'Heart and Soul' means to be completely engrossed in something."
},
{ // Think You Know Idioms? Answer These 3 Questions! (May 26, 2024)
    question: "After the paint fight, the kids were splattered with colors from _____",
    answers: ["eye to eye", "head to toe", "hand to mouth"],
    correct: "head to toe",
    description: "Head to toe means completely covering one's body"
},
{ // Think You Know Idioms? Answer These 3 Questions! (May 26, 2024)
    question: "In terms of customer service, this company stands _____ above the rest.",
    answers: ["head to toe", "hand to mouth", "head and shoulders"],
    correct: "head and shoulders",
    description: "'Be/stand head and shoulders above' means to be much better than other people or things"
},
{ // Think You Know Idioms? Answer These 3 Questions! (May 26, 2024)
    question: "The detective and the forensic expert worked _____ to solve the mystery",
    answers: ["hand in glove", "eye to eye", "heart and soul"],
    correct: "hand in glove",
    description: "'Hand in glove' closely connected with someone especially in an <b>illegal activity</b>. It is most often used with the verb 'work'."
},
// B1 Grammar Quiz | Still, Already, Yet (Jan 27, 2025)
{ // 10
    question: "Have you started this exercise ______?",
    answers: ["still", "yet", "already"],
    correct: "yet",
    description: "'Yet' is used to ask if this thing that we are expecting to happen has already happened."
},
{ // 9
    question: "I've ______ seen this film<br>Let's watch something else.",
    answers: ["still", "yet", "already"],
    correct: "already",
    description: "'Already' is used to indicate that something has happened before now, often earlier than expected."
},
{ // 8
    question: "They say they updated the software, but it ______ hasn't fixed the problem.",
    answers: ["still", "yet", "already"],
    correct: "still",
    description: "'Still' is used in negative sentences to emphasize that a situation continues to exist despite expectations or attempts to change it."
},
{ // 7
    question: "It's time to leave, but<br>I'm not ready ______.",
    answers: ["still", "yet", "already"],
    correct: "yet",
    description: "'Yet' is used in negative sentences to say that something that we are expecting to happen has not happened."
},
{ // 6
    question: "It's only, Monday, but I'm _____ looking forward to the weekend.",
    answers: ["still", "yet", "already"],
    correct: "already",
    description: "'Already' is used to say that something is happening sooner than expected or earlier than usual."
},
{ // 5
    question: "He's had a long nap, but he _____ feels tired.",
    answers: ["still", "yet", "already"],
    correct: "still",
    description: "'Still' is used to say that something continues to be true despite expectations to the contrary."
},
{ // 4
    question: "We ______ haven't discussed the topic.",
    answers: ["still", "yet", "already"],
    correct: "still",
    description: "'Still' is used in negative sentences to emphasize that something has not happened and continues to not happen."
},
{ // 3
    question: "We haven't discussed the topic _____.",
    answers: ["still", "yet", "already"],
    correct: "yet",
    description: "'Yet' is used in negative sentences and questions to say that something has not happened but is expected to happen."
},
{ // 2
    question: "We have _____ discussed the topic.",
    answers: ["still", "yet", "already"],
    correct: "already",
    description: "'Already' is used to say that something has happened earlier than expected or before the present moment."
},
{ // 1
    question: "She is retired, but she_____ takes art classes.",
    answers: ["still", "yet", "already"],
    correct: "still",
    description: "'Still' is used to say that something continues to happen, despite the circumstances."
},

// Ready for a Challenge? Test Your Grammar in Our Mixed Quiz Adventure! (Premiered Nov 22, 2023)
{
    question: "The car broke down, _____ we had to call for roadside assistance.",
    answers: ["so", "although", "because", "but"],
    correct: "so"
},
{
    question: "Harry: \u0022Does your sister work here?\u0022<br>Me: \u0022______\u0022",
    answers: ["Yes, she do", "Yes, she have", "No, she hasn't", "No, she doesn't"],
    correct: "No, she doesn't"
},
{
    question: "Despite the obstacles, _____, I must keep pursuing my dreams.",
    answers: ["somewhere or other", "anyway or other", "somehow or other", "on one way or another"],
    correct: "somehow or other"
},
{
    question: "I'm sorry if I bothered you; I ____ the wrong number while trying to call my sister.",
    answers: ["decoded", "dialled", "directed", "done"],
    correct: "dialled"
},
{
    question: "\u0022Thanks for covering for me at the meeting.\u0022<br>\u0022______; we're part of the same team.\u0022",
    answers: ["Don't mention it", "You mention it", "No mention of it", "You don't mention it"],
    correct: "Don't mention it"
},
{
    question: "She is translating the stories....",
    answers: ["has been written by her brother", "that has ben written by her brother", "what have been written by her brother", "which have been written by her brother"],
    correct: "which have been written by her brother"
},
{
    question: "_____ of these books are on my reading list for this year.",
    answers: ["Everything / Something", "Some / Everything / All", "Every / Some / All", "Both / Some / All"],
    correct: "Both / Some / All"
},
{
    question: "Change the sentence to the passive voice.<br>The coach scolded him for arriving late.",
    answers: ["The coach is scolded for arriving late", "He was scolded for arriving late", "He is scolded for arriving late", "The coach was scolded for arriving late"],
    correct: "He was scolded for arriving late"
},
{
    question: "____ good friends you have!",
    answers: ["How", "How a", "What", "What a"],
    correct: "What"
},
{
    question: "The restaurant's service was ____ than I thought, and the food took forever to arrive.",
    answers: ["worse", "more worse", "worst", "the worst"],
    correct: "worse"
},
{
    question: "_____ andes are ____ longest continental mountain range in the world.",
    answers: ["- / the", "the / -", "the / the", "- / a"],
    correct: "the / the"
},
{
    question: "Ann Accidently _____ the cup when she ____ up",
    answers: ["drops / will wash", "dropped / was washing", "will drop / will wash", "drops / was washing"],
    correct: "dropped / was washing"
},
{
    question: "I much prefer classical music ____ pop music",
    answers: ["than", "over", "on", "to"],
    correct: "to"
},
{
    question: "It is necessary ____ him to do it ____ this year.",
    answers: ["of / in", "to / -", "for / -", "to / by"],
    correct: "for / -"
},
{
    question: "Did you hear a dog ____ in the neighborhood last night?",
    answers: ["barked", "barking", "to bark", "barks"],
    correct: "barking"
},
{
    question: "I saw you _____ the key under the doormat.",
    answers: ["to put", "put", "puts", "will put"],
    correct: "put"
},
{
    question: "Dental problems can arise in children who eat _____ sugar",
    answers: ["few", "a few", "a lot", "a lot of"],
    correct: "a lot of"
},
{
    question: "The car is as ____ as mine",
    answers: ["fast", "faster", "fastest", "the fastest"],
    correct: "fast"
},
// Test Your Language Skills: Can You Nail This Grammar Quiz? (Premiered Nov 20, 2023)
{
    question: "_____ north sea separates _____ British isles from _____ Europe.",
    answers: ["- / the / the", "The / the / -", "The / the / the", "- / the / -"],
    correct: "The / the / -"
},
{
    question: "______ type of tornado can destroy everything on its way.",
    answers: ["The strongest", "Stronger", "The most strongest", "Strongest"],
    correct: "The strongest"
},
{
    question: "The bus will arrive at the station in ______.",
    answers: ["a quarter of an hour", "one quarter of an hour", "a quarter of one hour", "a quarter of hour"],
    correct: "a quarter of an hour"
},
{
    question: "He hurt his leg during practice and sadly, he _____ take part in the competition.",
    answers: ["ought", "couldn't", "could", "won't be able"],
    correct: "couldn't"
},
{
    question: "He reluctantly agreed _____ the group on the mountain hike.",
    answers: ["join", "joining", "to join", "joins"],
    correct: "to join"
},
{
    question: "'Who's that book _____?' 'The author is George Orwell.'",
    answers: ["on", "by", "at", "in"],
    correct: "by"
},
{
    question: "'_____ did you cook for dinner last night?'<br>'I tried a new recipe I found online.'",
    answers: ["what", "when", "who", "how much"],
    correct: "what"
},
{
    question: "What ____ you talk about during the family dinner last night?",
    answers: ["do", "done", "does", "did"],
    correct: "did"
},
{
    question: "I find that reading a book before bed helps me relax and sleep very ____.",
    answers: ["good", "better", "well", "best"],
    correct: "well"
},
{
    question: "Studying for exams can be mentally _____, so taking breaks is essential",
    answers: ["tired", "tiring", "tire", "tires"],
    correct: "tiring"
},
{
    question: "He left ____ school ____ the age of 18",
    answers: ["- / at", "before / of", "for / on", "for / in"],
    correct: "- / at"
},
{
    question: "I wanted to go to the beach, _____ it started raining heavily.",
    answers: ["so", "but", "and", "because"],
    correct: "but"
},
{
    question: "She couldn't attend the meeting _____ she had a doctor's appointment.",
    answers: ["so", "but", "and", "because"],
    correct: "because"
},
{
    question: "He changed his diet _____ the advice of a nutritionist.",
    answers: ["with", "on", "in", "at"],
    correct: "on"
},
{
    question: "I met ____ at the park, and we enjoyed a lonely afternoon picnic together.",
    answers: ["a friend of my", "a friend of me", "a friend of mine", "one my friend"],
    correct: "a friend of mine"
},
{
    question: "'______ did the accommodation cost?'<br>'It was $110 per night.'",
    answers: ["How often", "How many", "How long", "How much"],
    correct: "How much"
},
{
    question: "____ you planning to join the hiking trip?",
    answers: ["Do", "Are", "Is", "Was"],
    correct: "Are"
},
{
    question: "She had read about it ____ the newspaper",
    answers: ["on", "at", "in", "for"],
    correct: "in"
},
// How Well Do You Really Know English? Take the Quiz Now! ( Dec 25, 2023 )
    {
        question: "She was completely blind _____ the faults for her children.",
        answers: ["of", "for", "on", "to"],
        correct: "to",
        description: "Blind to something means 'not noticing or realizing something'"
    },
    {
        question: "She's feeling overwhelmed with the workload but she won't ______ to avoid appearing incapable.",
        answers: ["tell so", "say so", "tell", "say"],
        correct: "say so",
        description: "We use 'so' after certain verbs of thinking and speaking to avoid repeating a positive clause.<br>She won't say so = She won't say she's feeling overwhelmed with the workload."
    },
    {
        question: "Despite the unexpected setbacks, the team decided to keep calm and _____ with the project.",
        answers: ["bring up", "come on", "carry on", "call for"],
        correct: "carry on",
        description: "The phrasal verb 'carry on doing something' means to continue doing a specific action or activity."
    },
    {
        question: "The contract expires in six months or when the projects is completed, ____ happens first.",
        answers: ["however", "whatever", "whichever", "whenever"],
        correct: "whichever",
        description: "'whichever happens first' means that out of two or more events or situation, the one that occurs earlier in time will be the one that matters or is relevant."
    },
    {
        question: "Our lawn is getting quite long; we should _____ this weekend.",
        answers: ["have our grass cut", "got cut our grass", "got our grass to cut", "have to cut our grass"],
        correct: "have our grass cut",
        description: "We usually use 'have something done' when we are talking about playing someone to do something for us. It's often used for services. The form is subject + have + object + past participle"
    },
    {
        question: "We ______ taken a map; now we're lost in the city.",
        answers: ["could have", "should have", "might have", "may have"],
        correct: "should have",
        description: "'should have' is used to express regret or a missed opportunity"
    },
    {
        question: "Choose the correct synonyms",
        answers: ["prudent - careless", "hazard - assurance", "tolerance - prejudice", "destructive - damaging"],
        correct: "destructive - damaging"
    },
    {
        question: "We never expected our peaceful town to be a site for ______ terrible things.",
        answers: ["such", "such a", "so", "so much"],
        correct: "such",
        description: "we use 'such' + adjective + uncountable noun or phural noun"
    },
    {
        question: "She decided to wears the red dress to the party, and it really _____ her",
        answers: ["fits", "matches", "suits", "hangs"],
        correct: "suits",
        description: "'suits' is commonly used when referring to clothing that compliments or looks good on someone."
    },
    {
        question: "_____ must have been something bad in the news because everyone in the office seems concerned.",
        answers: ["It", "There",],
        correct: "There",
        description: "We say 'there' to say that something exists somewhere"
    },
    {
        question: "After the divorce, Mark now lives _____ in a small house by the lake.",
        answers: ["by himself", "himself", "his own", "him"],
        correct: "by himself"
    },
    {
        question: "Which word is a correct past simple verb?",
        answers: ["runned", "fleed", "catched", "gripped"],
        correct: "gripped",
        description: "others except 'gripped' are not correct past test form. These are ran, caught and fled"
    },

    { // 1
  question: "Fill in the blanks with appropriate prepositions.<br><br> You should abstain ___ such acts.",
  answers: ["from", "by", "for", "with"],
  correct: "from",
  description: "The correct phrase is 'abstain from', meaning to refrain from doing something."
},
{ // 2
  question: "Fill in the blanks with appropriate prepositions.<br><br> The servant was loyal ___ his master.",
  answers: ["with", "to", "by", "at"],
  correct: "to",
  description: "The correct phrase is 'loyal to someone'."
},
{ // 3
  question: "Fill in the blanks with appropriate prepositions.<br><br> Mr. Sen is rich ____ wealth.",
  answers: ["of", "by", "in", "for"],
  correct: "in",
  description: "The idiom is 'rich in wealth/resources'."
},
{ // 4
  question: "Fill in the blanks with appropriate prepositions.<br><br> He was not satisfied _____ his job.",
  answers: ["in", "with", "at", "by"],
  correct: "with",
  description: "The correct usage is 'satisfied with something'."
},
{ // 5
  question: "Fill in the blanks with appropriate prepositions.<br><br> The teacher spoke _____ the subject.",
  answers: ["about", "in", "by", "on"],
  correct: "on",
  description: "Both 'on the subject' and 'about the subject' are correct, but 'spoke on the subject' is more formal."
},
{ // 6
  question: "Fill in the blanks with appropriate prepositions.<br><br> Poverty results _____ laziness.",
  answers: ["for", "from", "in", "to"],
  correct: "from",
  description: "The phrase 'results from' indicates cause."
},
{ // 7
  question: "Fill in the blanks with appropriate prepositions.<br><br> The student was confident _____ success.",
  answers: ["for", "with", "of", "at"],
  correct: "of",
  description: "The correct phrase is 'confident of success'."
},
{ // 8
  question: "Fill in the blanks with appropriate prepositions.<br><br> The man was acquitted ____ all charges.",
  answers: ["with", "from", "of", "by"],
  correct: "of",
  description: "The legal phrase is 'acquitted of charges'."
},
{ // 9
  question: "Fill in the blanks with appropriate prepositions.<br><br> This matter admits ____ no delay.",
  answers: ["in", "to", "of", "at"],
  correct: "of",
  description: "The idiom is 'admits of no delay', meaning allows no delay."
},
{ // 10
  question: "Fill in the blanks with appropriate prepositions.<br><br> There is an exception ____ this rule.",
  answers: ["from", "to", "beyond", "of"],
  correct: "to",
  description: "The correct phrase is 'an exception to a rule'."
},

{ // 1
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> She has decided to _____ her studies to focus on work.",
  answers: ["give up", "take up", "go on", "hold back"],
  correct: "give up",
  description: "The correct phrasal verb is 'give up', meaning to stop doing something."
},
{ // 2
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> They _____ the issue during the meeting.",
  answers: ["brought out", "brought down", "brought up", "brought in"],
  correct: "brought up",
  description: "The phrasal verb 'bring up' means to mention or raise a topic."
},
{ // 3
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> He promised to _____ the work by next week.",
  answers: ["carry on", "carry out", "carry off", "carry in"],
  correct: "carry out",
  description: "The phrase 'carry out' means to perform or complete a task."
},
{ // 4
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> Please _____ the form before submitting it.",
  answers: ["fill up", "fill in", "fill out", "fill over"],
  correct: "fill in",
  description: "'Fill in' is used for completing information on a form."
},
{ // 5
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> They _____ a new policy in response to the issue.",
  answers: ["put over", "put in", "put out", "put forward"],
  correct: "put forward",
  description: "The phrasal verb 'put forward' means to propose or suggest."
},
{ // 6
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> She decided to _____ her vacation until next month.",
  answers: ["put off", "put out", "put on", "put down"],
  correct: "put off",
  description: "'Put off' means to postpone something."
},
{ // 7
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> He _____ his father in appearance.",
  answers: ["takes after", "takes over", "takes in", "takes on"],
  correct: "takes after",
  description: "'Take after' means to resemble someone in looks or character."
},
{ // 8
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> The project has been _____ due to lack of funds.",
  answers: ["held up", "held in", "held on", "held down"],
  correct: "held up",
  description: "'Held up' means delayed."
},
{ // 9
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> She _____ the invitation as she was too busy.",
  answers: ["turned in", "turned up", "turned down", "turned over"],
  correct: "turned down",
  description: "'Turn down' means to reject or refuse."
},
{ // 10
  question: "Fill in the blanks with appropriate phrasal verbs.<br><br> He is trying to _____ new skills for his job.",
  answers: ["pick on", "pick in", "pick up", "pick out"],
  correct: "pick up",
  description: "'Pick up' means to learn something gradually."
},

{ // 1
  question: "Fill in the blanks with double prepositions.<br><br> He kept ____ telling me to give ____ smoking.",
  answers: ["on, up", "at, to", "on, to", "at, up"],
  correct: "on, up",
  description: "'Keep on doing something' means to continue, and 'give up' means to stop."
},
{ // 2
  question: "Fill in the blanks with double prepositions.<br><br> The house consists _____ five rooms, all of them leading _____ the hall.",
  answers: ["of, towards", "of, to", "on, in", "of, into"],
  correct: "of, to",
  description: "'Consists of' is correct for composition, and 'leading to' indicates direction."
},
{ // 3
  question: "Fill in the blanks with double prepositions.<br><br> Mohan never agrees _____ me _____ anything.",
  answers: ["to, for", "with, for", "with, on", "to, in"],
  correct: "with, on",
  description: "The correct phrase is 'agree with someone on something'."
},
{ // 4
  question: "Fill in the blanks with double prepositions.<br><br> He is terribly absorbed _____ his work _____ bacteria.",
  answers: ["with, of", "with, on", "in, with", "in, on"],
  correct: "in, with",
  description: "The correct usage is 'absorbed in work' and 'with bacteria'."
},
{ // 5
  question: "Fill in the blanks with double prepositions.<br><br> I refuse to be classed _____ the man _____ the street.",
  answers: ["with, of", "with, into", "to, of", "with, in"],
  correct: "with, in",
  description: "The correct phrase is 'classed with someone in something'."
},
{ // 6
  question: "Fill in the blanks with double prepositions.<br><br> I sent two hundred rupees _____ my younger brother _____ money order.",
  answers: ["to, by", "to, through", "for, through", "for, by"],
  correct: "to, by",
  description: "Money is sent 'to someone by money order'."
},
{ // 7
  question: "Fill in the blanks with double prepositions.<br><br> It was because _____ you that he was able to see his plans ______ .",
  answers: ["of, on", "to, with", "of, through", "to, through"],
  correct: "of, through",
  description: "The correct expression is 'because of someone' and 'see plans through'."
},
{ // 8
  question: "Fill in the blanks with double prepositions.<br><br> He is a brute form _____ man all that you may say _____ his praise.",
  answers: ["on, by", "of, for", "in, for", "in, by"],
  correct: "of, for",
  description: "The correct usage is 'form of man' and 'say something for his praise'."
},
{ // 9
  question: "Fill in the blanks with double prepositions.<br><br> The boy is apprenticed ____ Mr. Smith, a carpenter _____ trade.",
  answers: ["of, to", "to, by", "on, in", "to, in"],
  correct: "to, in",
  description: "'Apprenticed to someone in a trade' is the correct usage."
},
{ // 10
  question: "Fill in the blanks with double prepositions.<br><br> I shall stand _____ you ____ thick and thin.",
  answers: ["beside, in", "beside, through", "to, in", "through, in"],
  correct: "by, through",
  description: "The idiom is 'stand by someone through thick and thin'."
},
{ // 11
  question: "Fill in the blanks with double prepositions.<br><br> He shook me _____ the hand and helped me _____ my coat.",
  answers: ["by, on", "with, in", "at, on", "off, on"],
  correct: "by, on",
  description: "The correct phrase is 'shake someone by the hand' and 'help someone on with their coat'."
},
{ // 12
  question: "Fill in the blanks with double prepositions.<br><br> If you spend _____ your means, you will run _____ debt.",
  answers: ["above, in", "beyond, into", "above, into", "beyond, in"],
  correct: "beyond, into",
  description: "The phrase is 'spend beyond your means' and 'run into debt'."
},
{ // 14
  question: "Fill in the blanks with double prepositions.<br><br> He will accept no compromise ____ the enemy any _____ terms.",
  answers: ["with, at", "from, at", "with, on", "of, on"],
  correct: "with, on",
  description: "The correct phrase is 'compromise with someone on terms'."
},
{ // 15
  question: "Fill in the blanks with double prepositions.<br><br> This almirah is made _____ iron but curd is made _____ milk.",
  answers: ["of, of", "of, from", "from, of", "in, of"],
  correct: "of, from",
  description: "'Made of' for solid materials and 'made from' for substances transformed from something else."
},
{ // 1
  question: "Fill in the blanks with appropriate group verbs.<br><br> He seems to be ____ .",
  answers: ["well out", "pull off", "run off", "well off"],
  correct: "well off",
  description: "'Well off' means wealthy or in good circumstances."
},
{ // 2
  question: "Fill in the blanks with appropriate group verbs.<br><br> They ____ against the gross injustice meted out to them.",
  answers: ["cried up", "cried out", "cried away", "cried off"],
  correct: "cried out",
  description: "'Cry out against' means to protest or object strongly."
},
{ // 3
  question: "Fill in the blanks with appropriate group verbs.<br><br> The rope ____ while they were hauling up the pillar.",
  answers: ["gave in", "gave up", "gave way", "gave away"],
  correct: "gave way",
  description: "'Gave way' means broke or collapsed."
},
{ // 4
  question: "Fill in the blanks with appropriate group verbs.<br><br> She was ____ for coming home late.",
  answers: ["told off", "turned off", "put off", "sent off"],
  correct: "told off",
  description: "'Told off' means reprimanded."
},
{ // 5
  question: "Fill in the blanks with appropriate group verbs.<br><br> The patient ____ after a long time.",
  answers: ["came by", "came of", "came off", "came round"],
  correct: "came round",
  description: "'Came round' means regained consciousness."
},

{ // 16
  question: "Fill in the blanks with appropriate prepositions.<br><br> The lion jumped ..... a deer.",
  answers: ["over", "on", "to", "upon"],
  correct: "on",
  description: "'Jumped on' is correct for attacking prey."
},
{ // 17
  question: "Fill in the blanks with appropriate prepositions.<br><br> We should not jeer ..... the man.",
  answers: ["for", "against", "at", "on"],
  correct: "at",
  description: "'Jeer at' is the correct phrasal use."
},
{ // 18
  question: "Fill in the blanks with appropriate prepositions.<br><br> I was not vexed ..... her.",
  answers: ["at", "on", "with", "of"],
  correct: "with",
  description: "'Vexed with someone' is correct."
},
{ // 19
  question: "Fill in the blanks with appropriate prepositions.<br><br> He copied the passage word ..... word.",
  answers: ["for", "by", "to", "against"],
  correct: "for",
  description: "'Word for word' is the correct expression."
},
{ // 20
  question: "Fill in the blanks with appropriate prepositions.<br><br> We must not hanker ..... wealth.",
  answers: ["on", "at", "for", "after"],
  correct: "after",
  description: "'Hanker after' means to desire something strongly."
},

{ // 1
  question: "Fill in the blanks with appropriate prepositions.<br><br> The man was absorbed ______ his work.",
  answers: ["at", "in", "with", "within"],
  correct: "in",
  description: "'Absorbed in' means fully engaged or interested in."
},
{ // 2
  question: "Fill in the blanks with appropriate prepositions.<br><br> She accused the man ______ stealing.",
  answers: ["on", "for", "of", "by"],
  correct: "of",
  description: "'Accused of' is the correct idiomatic expression."
},
{ // 3
  question: "Fill in the blanks with appropriate prepositions.<br><br> He is averse ______ hardwork.",
  answers: ["of", "for", "to", "from"],
  correct: "to",
  description: "'Averse to' means having a strong dislike of or opposition to."
},
{ // 4
  question: "Fill in the blanks with appropriate prepositions.<br><br> I'm accustomed ______ hot weather.",
  answers: ["for", "from", "with", "to"],
  correct: "to",
  description: "'Accustomed to' means used to."
},
{ // 5
  question: "Fill in the blanks with appropriate prepositions.<br><br> Are you afraid ______ the dog?",
  answers: ["from", "of", "with", "by"],
  correct: "of",
  description: "'Afraid of' is the standard expression."
},
{ // 6
  question: "Fill in the blanks with appropriate prepositions.<br><br> We believe ______ God.",
  answers: ["on", "for", "in", "to"],
  correct: "in",
  description: "'Believe in' is the correct preposition to indicate faith or trust."
},
{ // 7
  question: "Fill in the blanks with appropriate prepositions.<br><br> He takes pride ______ his strength.",
  answers: ["on", "for", "in", "of"],
  correct: "in",
  description: "'Take pride in' is the correct idiomatic expression."
},
{ // 8
  question: "Fill in the blanks with appropriate prepositions.<br><br> She is very careful ______ her health.",
  answers: ["of", "In", "for", "to"],
  correct: "of",
  description: "'Careful of' is used when referring to concern or attention towards something."
},
{ // 9
  question: "Fill in the blanks with appropriate prepositions.<br><br> You shouldn't be absent ______ the class.",
  answers: ["from", "in", "for", "to"],
  correct: "from",
  description: "'Absent from' is the correct usage."
},
{ // 10
  question: "Fill in the blanks with appropriate prepositions.<br><br> She complained ______ the weather.",
  answers: ["of", "for", "on", "about"],
  correct: "about",
  description: "'Complain about' is the standard expression."
},
{ // 11
  question: "Fill in the blanks with appropriate prepositions.<br><br> I'm ashamed ______ my conduct.",
  answers: ["with", "about", "of", "for"],
  correct: "of",
  description: "'Ashamed of' is the correct expression."
},
{ // 12
  question: "Fill in the blanks with appropriate prepositions.<br><br> I confide ______ you.",
  answers: ["in", "on", "with", "to"],
  correct: "in",
  description: "'Confide in' means to share private matters with someone trusted."
},
{ // 13
  question: "Fill in the blanks with appropriate prepositions.<br><br> We must conform ______ the rules.",
  answers: ["with", "by", "to", "at"],
  correct: "to",
  description: "'Conform to' is the correct phrase for following rules."
},
{ // 14
  question: "Fill in the blanks with appropriate prepositions.<br><br> He'll comply ______ request.",
  answers: ["to", "of", "at", "with"],
  correct: "with",
  description: "'Comply with' is the standard usage."
},
{ // 15
  question: "Fill in the blanks with appropriate prepositions.<br><br> I must congratulate you ______ your success.",
  answers: ["on", "about", "of", "for"],
  correct: "on",
  description: "'Congratulate on' is the correct expression."
},


{ // 1
  question: "Fill in the blanks with appropriate prepositions.<br><br> Please look ........ the word in the dictionary.",
  answers: ["at", "up", "into", "for"],
  correct: "up",
  description: "'Look up' means to search for information."
},
{ // 2
  question: "Fill in the blanks with appropriate prepositions.<br><br> He suffered ...... a loss in business.",
  answers: ["with", "of", "from", "no preposition"],
  correct: "from",
  description: "'Suffer from' is the correct expression for experiencing something bad."
},
{ // 3
  question: "Fill in the blanks with appropriate prepositions.<br><br> Don't jump ...... the conclusion so early.",
  answers: ["in", "to", "at", "into"],
  correct: "to",
  description: "'Jump to a conclusion' is the correct idiom."
},
{ // 4
  question: "Fill in the blanks with appropriate prepositions.<br><br> She is very bad ...... grammar.",
  answers: ["on", "of", "at", "in"],
  correct: "at",
  description: "'Bad at' is used to describe lack of skill."
},
{ // 5
  question: "Fill in the blanks with appropriate prepositions.<br><br> I can speak ....... authority on Gandhiji.",
  answers: ["with", "on", "upon", "at"],
  correct: "with",
  description: "'Speak with authority' is the correct expression."
},
{ // 6
  question: "Fill in the blanks with appropriate prepositions.<br><br> None of the officers was ...... suspicion.",
  answers: ["over", "on", "above", "upon"],
  correct: "above",
  description: "'Above suspicion' is the correct expression."
},
{ // 7
  question: "Fill in the blanks with appropriate prepositions.<br><br> We should stick ....... our ideals till end.",
  answers: ["on", "against", "for", "to"],
  correct: "to",
  description: "'Stick to' means to adhere or remain faithful to something."
},
{ // 8
  question: "Fill in the blanks with appropriate prepositions.<br><br> He had to part ....... his earthly possessions.",
  answers: ["from", "to", "of", "with"],
  correct: "with",
  description: "'Part with' means to give up or relinquish something."
},
{ // 9
  question: "Fill in the blanks with appropriate prepositions.<br><br> He was honourably acquitted ....... all charges.",
  answers: ["of", "off", "from", "with"],
  correct: "of",
  description: "'Acquitted of charges' is the correct expression."
},
{ // 10
  question: "Fill in the blanks with appropriate prepositions.<br><br> I went to Goa ....... holidays.",
  answers: ["by", "for", "on", "in"],
  correct: "for",
  description: "'Go somewhere for holidays' is correct."
},
{ // 11
  question: "Fill in the blanks with appropriate prepositions.<br><br> Mohan is slow ....... his work.",
  answers: ["at", "for", "about", "to"],
  correct: "at",
  description: "'Slow at' means not quick in performing something."
},
{ // 12
  question: "Fill in the blanks with appropriate prepositions.<br><br> There is no cure ........ this disease.",
  answers: ["from", "with", "of", "for"],
  correct: "for",
  description: "'No cure for' is the standard expression."
},
{ // 13
  question: "Fill in the blanks with appropriate prepositions.<br><br> The young man was enchanted ...... the beauty of the lady.",
  answers: ["at", "by", "with", "in"],
  correct: "by",
  description: "'Enchanted by' is correct when referring to being delighted or captivated."
},
{ // 14
  question: "Fill in the blanks with appropriate prepositions.<br><br> Be content ....... what you have.",
  answers: ["with", "by", "of", "in"],
  correct: "with",
  description: "'Content with' is the correct phrase."
},
{ // 15
  question: "Fill in the blanks with appropriate prepositions.<br><br> My sister got divorce ...... her husband.",
  answers: ["from", "of", "to", "against"],
  correct: "from",
  description: "'Divorce from' is correct usage."
},
{ // 16
  question: "Fill in the blanks with appropriate prepositions.<br><br> Well dressed up, she called ...... me.",
  answers: ["at", "off", "on", "up"],
  correct: "on",
  description: "'Call on' means to visit someone."
},
{ // 17
  question: "Fill in the blanks with appropriate prepositions.<br><br> This newspaper is likely to have a million readers ..... the next year.",
  answers: ["by", "till", "until", "to"],
  correct: "by",
  description: "'By the next year' indicates before or at that time."
},
{ // 18
  question: "Fill in the blanks with appropriate prepositions.<br><br> ....... being a politician, he is a doctor.",
  answers: ["Beside", "Besides", "Except", "For"],
  correct: "Besides",
  description: "'Besides' means 'in addition to'."
},
{ // 19
  question: "Fill in the blanks with appropriate prepositions.<br><br> The prisoner was ....... chain.",
  answers: ["with", "by", "on", "in"],
  correct: "in",
  description: "'In chains' is the correct expression."
},
{ // 20
  question: "Fill in the blanks with appropriate prepositions.<br><br> He was charged ..... murder.",
  answers: ["from", "of", "off", "with"],
  correct: "with",
  description: "'Charged with' is the standard expression."
},
{ // 21
  question: "Fill in the blanks with appropriate prepositions.<br><br> Monkeys live ...... trees.",
  answers: ["on", "upon", "in", "into"],
  correct: "in",
  description: "'Live in trees' is correct."
},
{ // 22
  question: "Fill in the blanks with appropriate prepositions.<br><br> The godown is infested ....... rats.",
  answers: ["of", "about", "with", "in"],
  correct: "with",
  description: "'Infested with' is the correct phrase."
},
{ // 23
  question: "Fill in the blanks with appropriate prepositions.<br><br> They abandoned the man ...... the wolves.",
  answers: ["to", "with", "for", "towards"],
  correct: "to",
  description: "'Abandoned to' means left helplessly."
},
{ // 24
  question: "Fill in the blanks with appropriate prepositions.<br><br> Your mistake admits ..... no excuse.",
  answers: ["in", "with", "of", "no preposition"],
  correct: "of",
  description: "'Admit of no excuse' is the correct expression."
},
{ // 25
  question: "Fill in the blanks with appropriate prepositions.<br><br> The writer accuses the national government ..... resorting violence.",
  answers: ["of", "for", "to", "on"],
  correct: "of",
  description: "'Accuse of' is correct usage."
},
{ // 26
  question: "Fill in the blanks with appropriate prepositions.<br><br> The rich shouldn't look down ...... the poor.",
  answers: ["at", "on", "over", "upon"],
  correct: "on",
  description: "'Look down on' is the correct phrase."
},
{ // 27
  question: "Fill in the blanks with appropriate prepositions.<br><br> Our examination commences ....... Monday next.",
  answers: ["from", "on", "at", "by"],
  correct: "on",
  description: "'Commences on Monday' is correct."
},
{ // 28
  question: "Fill in the blanks with appropriate prepositions.<br><br> Bacon, the father of english essay, had a thirst ...... knowledge.",
  answers: ["of", "in", "with", "for"],
  correct: "for",
  description: "'Thirst for knowledge' is correct."
},
{ // 29
  question: "Fill in the blanks with appropriate prepositions.<br><br> I beg to differ ...... you on the subject.",
  answers: ["at", "with", "to", "for"],
  correct: "with",
  description: "'Differ with someone' is correct."
},
{ // 30
  question: "Fill in the blanks with appropriate prepositions.<br><br> The minister dwelt ...... the subject of political development at length.",
  answers: ["over", "at", "with", "on"],
  correct: "on",
  description: "'Dwelt on' is correct usage."
},
{ // 31
  question: "Fill in the blanks with appropriate prepositions.<br><br> They ordered ....... a few cups of tea.",
  answers: ["about", "for", "of", "no preposition"],
  correct: "no preposition",
  description: "No preposition is needed here; 'ordered a few cups of tea' is correct."
},
{ // 32
  question: "Fill in the blanks with appropriate prepositions.<br><br> The boy resembles ...... his father.",
  answers: ["with", "to", "in", "no preposition"],
  correct: "no preposition",
  description: "'Resemble' does not take a preposition."
},
{ // 33
  question: "Fill in the blanks with appropriate prepositions.<br><br> We gathered ....... the pandal.",
  answers: ["below", "beneath", "at", "under"],
  correct: "at",
  description: "'Gathered at the pandal' is correct."
},
{ // 34
  question: "Fill in the blanks with appropriate prepositions.<br><br> He said this ...... my face.",
  answers: ["to", "at", "on", "before"],
  correct: "to",
  description: "'Said to someone' is correct."
},
{ // 35
  question: "Fill in the blanks with appropriate prepositions.<br><br> He is a brahmin ....... caste.",
  answers: ["in", "at", "by", "under"],
  correct: "by",
  description: "'A Brahmin by caste' is the correct expression."
},

{ // 1
  question: "Fill in the blanks with appropriate verbs.<br><br> Neither of these men _____ come here.",
  answers: ["has", "have"],
  correct: "has",
  description: "Neither is singular, so 'has' is correct."
},
{ // 2
  question: "Fill in the blanks with appropriate verbs.<br><br> Ram as well as Mohan _____ to blame.",
  answers: ["is", "are"],
  correct: "is",
  description: "'As well as' does not make the subject plural; singular verb 'is' is correct."
},
{ // 3
  question: "Fill in the blanks with appropriate verbs.<br><br> The ship with all the passengers and crew members _____ reached the shore.",
  answers: ["has", "have"],
  correct: "has",
  description: "The subject 'ship' is singular; verb should be singular 'has'."
},
{ // 4
  question: "Fill in the blanks with appropriate verbs.<br><br> No man or woman _____ found there.",
  answers: ["was", "were"],
  correct: "was",
  description: "The nearest subject 'woman' is singular; singular verb 'was' is correct."
},
{ // 5
  question: "Fill in the blanks with appropriate verbs.<br><br> None of these girls _____ qualified for the post.",
  answers: ["is", "are"],
  correct: "is",
  description: "'None' is singular here, so 'is' is correct."
},
{ // 6
  question: "Fill in the blanks with appropriate verbs.<br><br> One of the criminals _____ arrested.",
  answers: ["was", "were"],
  correct: "was",
  description: "'One of the criminals' is singular; verb 'was' is correct."
},
{ // 7
  question: "Fill in the blanks with appropriate verbs.<br><br> Either he or his friends _____ answerable for it.",
  answers: ["is", "are"],
  correct: "are",
  description: "Verb agrees with the nearer subject 'friends' (plural)."
},
{ // 8
  question: "Fill in the blanks with appropriate verbs.<br><br> Either the principal or the secretary _____ ever attended the meeting.",
  answers: ["have", "has"],
  correct: "has",
  description: "Verb agrees with nearer subject 'secretary' (singular)."
},
{ // 9
  question: "Fill in the blanks with appropriate verbs.<br><br> Neither the students nor their teacher _____ hurt in the accident.",
  answers: ["was", "were"],
  correct: "was",
  description: "Verb agrees with nearer subject 'teacher' (singular)."
},
{ // 10
  question: "Fill in the blanks with appropriate verbs.<br><br> Half of the food _____ sold.",
  answers: ["is", "are"],
  correct: "is",
  description: "'Food' is uncountable; singular verb 'is' is correct."
},
{ // 11
  question: "Fill in the blanks with appropriate verbs.<br><br> Two-thirds of the apple _____ rotten.",
  answers: ["is", "are"],
  correct: "is",
  description: "The subject 'apple' is singular; 'is' is correct."
},
{ // 12
  question: "Fill in the blanks with appropriate verbs.<br><br> Neither of you _____ correct.",
  answers: ["is", "are"],
  correct: "is",
  description: "'Neither' is singular; 'is' is correct."
},
{ // 13
  question: "Fill in the blanks with appropriate verbs.<br><br> Each of us _____ responsible.",
  answers: ["am", "is", "are"],
  correct: "is",
  description: "'Each' is singular; 'is' is correct."
},
{ // 14
  question: "Fill in the blanks with appropriate verbs.<br><br> Either he or you _____ spoiled the game.",
  answers: ["has", "have"],
  correct: "have",
  description: "Verb agrees with nearer subject 'you' (plural)."
},
{ // 15
  question: "Fill in the blanks with appropriate verbs.<br><br> He or I _____ to suffer.",
  answers: ["has", "have"],
  correct: "have",
  description: "Verb agrees with nearer subject 'I' (plural in grammar); 'have' is correct."
},
{ // 16
  question: "Fill in the blanks with appropriate verbs.<br><br> Ram and I _____ classmates.",
  answers: ["is", "am", "are"],
  correct: "are",
  description: "Compound subject 'Ram and I' is plural; 'are' is correct."
},
{ // 17
  question: "Fill in the blanks with appropriate verbs.<br><br> Neither of them _____ participating in the debate.",
  answers: ["is", "are"],
  correct: "is",
  description: "'Neither' is singular; 'is' is correct."
},
{ // 18
  question: "Fill in the blanks with appropriate verbs.<br><br> Both you and your brother _____ guilty.",
  answers: ["is", "are"],
  correct: "are",
  description: "'Both' makes the subject plural; 'are' is correct."
},
{ // 19
  question: "Fill in the blanks with appropriate verbs.<br><br> She and you _____ to be present there.",
  answers: ["has", "have"],
  correct: "have",
  description: "Compound subject 'she and you' is plural; 'have' is correct."
},
{ // 20
  question: "Fill in the blanks with appropriate verbs.<br><br> He and I _____ living in the same house.",
  answers: ["is", "am", "are"],
  correct: "are",
  description: "Compound subject 'He and I' is plural; 'are' is correct."
},


]

const spottingerrorinsentence = [
{ // 1
  question: "Spot the error.<br><br> Neither of the two brothers (a) / is interested to take over (b) / the family business. (c) / No error (d)",
  answers: ["Neither of the two brothers", "is interested to take over", "the family business", "No error"],
  correct: "is interested to take over",
  description: "The phrase 'interested to take over' is incorrect. It should be 'interested in taking over'."
},
{ // 2
  question: "Spot the error.<br><br> The teacher as well as the students (a) / has emphasised on (b) / maintaining discipline in school. (c) / No error (d)",
  answers: ["The teacher as well as the students", "has emphasised on", "maintaining discipline in school", "No error"],
  correct: "has emphasised on",
  description: "The correct usage is 'emphasised maintaining discipline', not 'emphasised on'."
},
{ // 3
  question: "Spot the error.<br><br> She has been working in the company (a) / for five years before (b) / she decided to start her own business. (c) / No error (d)",
  answers: ["She has been working in the company", "for five years before", "she decided to start her own business", "No error"],
  correct: "for five years before",
  description: "Present perfect continuous ('has been working') cannot be used with 'before'. It should be 'She had been working ... for five years before'."
},
{ // 4
  question: "Spot the error.<br><br> Each of the members of the team (a) / is expected contributing (b) / equally to the project. (c) / No error (d)",
  answers: ["Each of the members of the team", "is expected contributing", "equally to the project", "No error"],
  correct: "is expected contributing",
  description: "It should be 'is expected to contribute', not 'is expected contributing'."
},
{ // 5
  question: "Spot the error.<br><br> The manager and the HR officer (a) / were in the meeting room (b) / to discuss about the new policies. (c) / No error (d)",
  answers: ["The manager and the HR officer", "were in the meeting room", "to discuss about the new policies", "No error"],
  correct: "to discuss about the new policies",
  description: "The word 'about' is unnecessary. It should be 'to discuss the new policies'."
},

{ // 1
  question: "Spot the error.<br><br> Never have I seen (a) / such a breathtaking view (b) / like this. (c) / No error (d)",
  answers: ["Never have I seen", "such a breathtaking view", "like this", "No error"],
  correct: "like this",
  description: "The phrase is incorrect. It should be 'such a breathtaking view as this' instead of 'like this'."
},
{ // 2
  question: "Spot the error.<br><br> If he had studied harder, (a) / he would pass the exam (b) / last year. (c) / No error (d)",
  answers: ["If he had studied harder", "he would pass the exam", "last year", "No error"],
  correct: "he would pass the exam",
  description: "With 'If he had studied', the correct form is 'he would have passed the exam', not 'he would pass'."
},
{ // 3
  question: "Spot the error.<br><br> The report was submitted (a) / by the team members on time (b) / but no feedback received till date. (c) / No error (d)",
  answers: ["The report was submitted", "by the team members on time", "but no feedback received till date", "No error"],
  correct: "but no feedback received till date",
  description: "The part is incomplete. It should be 'but no feedback has been received till date'."
},
{ // 4
  question: "Spot the error.<br><br> The manager requested that (a) / the employees arrive early, (b) / and be prepared for the meeting. (c) / No error (d)",
  answers: ["The manager requested that", "the employees arrive early", "and be prepared for the meeting", "No error"],
  correct: "No error",
  description: "This sentence is correct. 'Requested that' is followed by a subjunctive verb, so 'arrive' and 'be prepared' are correct."
},
{ // 5
  question: "Spot the error.<br><br> He said that he (a) / would finish the project (b) / by the next week. (c) / No error (d)",
  answers: ["He said that he", "would finish the project", "by the next week", "No error"],
  correct: "by the next week",
  description: "The correct expression is 'by the following week' or simply 'by next week', not 'by the next week'."
},

{ // 1
  question: "Spot the Error.<br><br> I went to see the film (a) / because he had told (b) / me that it was too good. (c) / No error (d)",
  answers: ["I went to see the film", "because he had told", "me that it was too good", "No error"],
  correct: "No error",
  description: "The sentence is correct; no error exists."
},
{ // 2
  question: "Spot the Error.<br><br> I feel that I have (a) / given you very trouble (b) / in this matter. (c) / No error (d)",
  answers: ["I feel that I have", "given you very trouble", "in this matter", "No error"],
  correct: "given you very trouble",
  description: "It should be 'given you very much trouble' or 'caused you much trouble'."
},
{ // 3
  question: "Spot the Error.<br><br> Hardly had he went out (a) / of the class when a group(b) / of angry students attacked him. (c) / No error(d)",
  answers: ["Hardly had he went out", "of the class when a group", "of angry students attacked him", "No error"],
  correct: "Hardly had he went out",
  description: "It should be 'Hardly had he gone out' (past participle after 'had')."
},
{ // 4
  question: "Spot the Error.<br><br> He seldom (a) / or ever (b) / tells a lie. (c) / No error (d)",
  answers: ["He seldom", "or ever", "tells a lie", "No error"],
  correct: "or ever",
  description: "Correct phrase is 'seldom or ever' → should be 'seldom, if ever'."
},
{ // 5
  question: "Spot the Error.<br><br> The servant quickly (a) / did the work to (b) / please his master (c) / No error (d)",
  answers: ["The servant quickly", "did the work to", "please his master", "No error"],
  correct: "did the work to",
  description: "It should be 'did the work to please his master' is correct. No error actually, so alternative: 'No error'."
},
{ // 6
  question: "Spot the Error.<br><br> You are kindly (a) / requested to (b) / reply sharp .(c) / No error (d)",
  answers: ["You are kindly", "requested to", "reply sharp", "No error"],
  correct: "reply sharp",
  description: "It should be 'reply sharply' (adverb form)."
},
{ // 7
  question: "Spot the Error.<br><br> I and my friends performed (a) / the task as good as we could (b) / however it did not turnout to be satisfactory. (c) / No error (d)",
  answers: ["I and my friends performed", "the task as good as we could", "however it did not turnout to be satisfactory", "No error"],
  correct: "the task as good as we could",
  description: "It should be 'the task as well as we could'. 'As good as' is incorrect here."
},
{ // 8
  question: "Spot the Error.<br><br> I advised my son (a) / to engage two coolies instead of one (b) / because the luggage was too much heavy for a single coolie. (c) / No error (e)",
  answers: ["I advised my son", "to engage two coolies instead of one", "because the luggage was too much heavy for a single coolie", "No error"],
  correct: "because the luggage was too much heavy for a single coolie",
  description: "Correct form is 'too heavy', not 'too much heavy'."
},
{ // 9
  question: "Spot the Error.<br><br> No sooner the bell rang (a) / than the teacher (b) / entered the class (c) / No error. (d)",
  answers: ["No sooner the bell rang", "than the teacher", "entered the class", "No error"],
  correct: "No sooner the bell rang",
  description: "It should be 'No sooner had the bell rung than...' (inversion with past perfect)."
},
{ // 10
  question: "Spot the Error.<br><br> No sooner did (a) / the train arrived at the station (b) / than the passengers (c) / rushed towards it. (d) / No error (e)",
  answers: ["No sooner did", "the train arrived at the station", "than the passengers", "rushed towards it", "No error"],
  correct: "the train arrived at the station",
  description: "It should be 'the train arrive' (base form) after 'No sooner did'."
},
{ // 11
  question: "Spot the Error.<br><br> Never I have listened (a) / to such beautiful music (b) / as the piece we heard on the radio (c) / last night. (d) / No error (e)",
  answers: ["Never I have listened", "to such beautiful music", "as the piece we heard on the radio", "last night", "No error"],
  correct: "Never I have listened",
  description: "Correct form is 'Never have I listened' (inversion after 'Never')."
},
{ // 12
  question: "Spot the Error.<br><br> Hardly had (a) / I left the house (b) / than it began (c) / to rain. (d) / No error (e)",
  answers: ["Hardly had", "I left the house", "than it began", "to rain", "No error"],
  correct: "I left the house",
  description: "It should be 'I left' → 'Hardly had I left the house' is correct, actually no error in this part; often tricky."
},
{ // 13
  question: "Spot the Error.<br><br> No sooner had the hockey match started (a) / when it began (b) / to rain. (c) / No error (d)",
  answers: ["No sooner had the hockey match started", "when it began", "to rain", "No error"],
  correct: "when it began",
  description: "After 'No sooner...', we use 'than', not 'when'."
},
{ // 14
  question: "Spot the Error.<br><br> Scarcely had (a) / I arrived than (b) / the train left (c) / No error (d)",
  answers: ["Scarcely had", "I arrived than", "the train left", "No error"],
  correct: "I arrived than",
  description: "Correct form: 'Scarcely had I arrived when the train left'."
},
{ // 15
  question: "Spot the Error.<br><br> Hardly as I stepped out of my house (a) / when I saw some policemen (b)/coming towards my house.(c)/ No error (d)",
  answers: ["Hardly as I stepped out of my house", "when I saw some policemen", "coming towards my house", "No error"],
  correct: "Hardly as I stepped out of my house",
  description: "Correct form: 'Hardly had I stepped out of my house when...'."
},

{ // 21
  question: "Spot the errors.<br><br> Such a story (a)/ has been never (b)/ written before (c)/ no error (d)",
  answers: ["Such a story", "has been never", "written before", "no error"],
  correct: "has been never",
  description: "Correct form: 'has never been written'."
},
{ // 22
  question: "Spot the errors.<br><br> The house is enough big (a)/ to accommodate (b)/ all the students (c)/ no error (d)",
  answers: ["The house is enough big", "to accommodate", "all the students", "no error"],
  correct: "The house is enough big",
  description: "It should be 'big enough', not 'enough big'."
},
{ // 23
  question: "Spot the errors.<br><br> He is one (a)/ of the men (b)/ who work here (c)/ no error (d)",
  answers: ["He is one", "of the men", "who work here", "no error"],
  correct: "no error",
  description: "This sentence is correct."
},
{ // 24
  question: "Spot the errors.<br><br> There are not (a)/ less than twenty students (b)/ in the class (c)/ no error (d)",
  answers: ["There are not", "less than twenty students", "in the class", "no error"],
  correct: "less than twenty students",
  description: "It should be 'fewer than twenty students'."
},
{ // 25
  question: "Spot the errors.<br><br> There is hardly (a)/ some sugar (b)/ in my tea (c)/ no error (d)",
  answers: ["There is hardly", "some sugar", "in my tea", "no error"],
  correct: "some sugar",
  description: "Correct form: 'hardly any sugar'."
},
{ // 26
  question: "Spot the errors.<br><br> Each of the students (a)/ was instructed to (b)/ submit their notebooks (c)/ no error (d)",
  answers: ["Each of the students", "was instructed to", "submit their notebooks", "no error"],
  correct: "submit their notebooks",
  description: "Singular form is preferred: 'submit his/her notebook'."
},
{ // 27
  question: "Spot the errors.<br><br> He pulled me (a)/ by my hand (b)/ and took me in (c)/ no error (d)",
  answers: ["He pulled me", "by my hand", "and took me in", "no error"],
  correct: "and took me in",
  description: "It should be 'and led me in' instead of 'took me in'."
},
{ // 28
  question: "Spot the errors.<br><br> I lived in United States (a)/ before I came to India (b)/ ten years ago (c)/ no error (d)",
  answers: ["I lived in United States", "before I came to India", "ten years ago", "no error"],
  correct: "I lived in United States",
  description: "It should be 'the United States'."
},
{ // 29
  question: "Spot the errors.<br><br> I went to Puri (a)/ with some of my colleagues (b)/ and enjoyed a lot there.(c)/ no error (d)",
  answers: ["I went to Puri", "with some of my colleagues", "and enjoyed a lot there", "no error"],
  correct: "and enjoyed a lot there",
  description: "Better: 'and enjoyed it a lot there'."
},
{ // 30
  question: "Spot the errors.<br><br> Has the police (a)/ gone to the village (b)/ to investigate the case? (c)/ no error (d)",
  answers: ["Has the police", "gone to the village", "to investigate the case", "no error"],
  correct: "Has the police",
  description: "It should be 'Have the police' (plural subject)."
},

{ // 1
  question: "Spot the errors.<br><br> He not only abused us (a)/ but also some others (b)/ who were present there. (c)/ no error (d)",
  answers: ["He not only abused us", "but also some others", "who were present there", "no error"],
  correct: "but also some others",
  description: "It should be 'but also abused some others' to maintain parallel structure with 'abused us'."
},
{ // 2
  question: "Spot the errors.<br><br> She was never taken (a)/ to any of the family parties (b) that her parents attended to. (c)/ no error (d)",
  answers: ["She was never taken", "to any of the family parties", "that her parents attended to", "no error"],
  correct: "that her parents attended to",
  description: "The phrase 'attended to' is incorrect here; it should be 'that her parents attended'."
},
{ // 3
  question: "Spot the errors.<br><br> He is one of the workers (a)/ who were dismissed (b)/ from his job for incompetence. (c)/ no error (d)",
  answers: ["He is one of the workers", "who were dismissed", "from his job for incompetence", "no error"],
  correct: "from his job for incompetence",
  description: "It should be 'who was dismissed from their jobs' to match plural workers properly."
},
{ // 4
  question: "Spot the errors.<br><br> We had much time (a)/ for shopping at the mall (b)/ before our flight took off. (c)/ no error (d)",
  answers: ["We had much time", "for shopping at the mall", "before our flight took off", "no error"],
  correct: "We had much time",
  description: "It should be 'We had a lot of time' instead of 'much time' in affirmative sentences."
},
{ // 5
  question: "Spot the errors.<br><br> You could finish your assignment (a)/ on time if you had not (b)/ wasted time in idle pursuits (c)/ no error (d)",
  answers: ["You could finish your assignment", "on time if you had not", "wasted time in idle pursuits", "no error"],
  correct: "no error",
  description: "The sentence is grammatically correct; no error."
},

{ // 1
  question: "Spot the errors.<br><br> If all of you quarrel (a)/ among yourselves we can not (b)/ be able to solve your problems. (c)/ No error (d)",
  answers: ["If all of you quarrel", "among yourselves we can not", "be able to solve your problems", "No error"],
  correct: "be able to solve your problems",
  description: "It should be 'we cannot solve your problems'; 'be able to' is redundant here."
},
{ // 2
  question: "Spot the errors.<br><br> She has invited me (a)/ to the party (b)/ to be hold next week. (c)/ No error (d)",
  answers: ["She has invited me", "to the party", "to be hold next week", "No error"],
  correct: "to be hold next week",
  description: "It should be 'to be held next week'."
},
{ // 3
  question: "Spot the errors.<br><br> We should drink several glass (a)/ of water daily (b)/ if we want to remain healthy. (c)/ No error (d)",
  answers: ["We should drink several glass", "of water daily", "if we want to remain healthy", "No error"],
  correct: "We should drink several glass",
  description: "It should be 'several glasses' (plural)."
},
{ // 4
  question: "Spot the errors.<br><br> The children complained of (a)/ being beaten by a snake (b)/ while playing in the field. (c)/ No error (d)",
  answers: ["The children complained of", "being beaten by a snake", "while playing in the field", "No error"],
  correct: "being beaten by a snake",
  description: "It should be 'being bitten by a snake'; snakes bite, they do not beat."
},
{ // 5
  question: "Spot the errors.<br><br> On my request she (a)/ introduced me to her friend (b)/ who is a singer and a composer. (c)/ No error (d)",
  answers: ["On my request she", "introduced me to her friend", "who is a singer and a composer", "No error"],
  correct: "No error",
  description: "This sentence is grammatically correct."
},
{ // 6
  question: "Spot the errors.<br><br> The burglars were caught just as (a)/ they were about to (b)/ escape from the jail. (c)/ No error (d)",
  answers: ["The burglars were caught just as", "they were about to", "escape from the jail", "No error"],
  correct: "No error",
  description: "This sentence is correct as written."
},
{ // 7
  question: "Spot the errors.<br><br> The teacher drew (a)/ the attention of the boys (b)/ of the importance of regular practice. (c)/ No error (d)",
  answers: ["The teacher drew", "the attention of the boys", "of the importance of regular practice", "No error"],
  correct: "of the importance of regular practice",
  description: "It should be 'to the importance of regular practice'."
},
{ // 8
  question: "Spot the errors.<br><br> He has had (a)/ four breads (b)/ and a cup of coffee so far. (c)/ No error (d)",
  answers: ["He has had", "four breads", "and a cup of coffee so far", "No error"],
  correct: "four breads",
  description: "'Bread' is uncountable; it should be 'four pieces of bread'."
},
{ // 9
  question: "Spot the errors.<br><br> This room is (a)/ nice decorated (b)/ for the event. (c)/ No error (d)",
  answers: ["This room is", "nice decorated", "for the event", "No error"],
  correct: "nice decorated",
  description: "It should be 'nicely decorated' (adverb modifying the verb 'is decorated')."
},
{ // 10
  question: "Spot the errors.<br><br> How many bananas (a)/ and milk (b)/ have you bought? (c)/ No error (d)",
  answers: ["How many bananas", "and milk", "have you bought", "No error"],
  correct: "and milk",
  description: "It should be 'and how much milk' because 'milk' is uncountable."
},

{ // 16
  question: "Find the error.<br><br> Priyanka’s efforts (A)/ will bring her more success (B)/ than you. (C)/ No error (D)",
  answers: ["Priyanka’s efforts", "will bring her more success", "than you", "No error"],
  correct: "than you",
  description: "Comparison should be 'than yours', not 'than you'."
},
{ // 17
  question: "Find the error.<br><br> The Board of Directors (A)/ wants all possible facilities (B)/ and allowances for themselves. (C)/ No error (D)",
  answers: ["The Board of Directors", "wants all possible facilities", "and allowances for themselves", "No error"],
  correct: "and allowances for themselves",
  description: "'The Board' is singular; should be 'for itself' not 'for themselves'."
},
{ // 18
  question: "Find the error.<br><br> The unfortunate (A)/ who is deprived of (B)/ the basic needs want love only. (C)/ No error (D)",
  answers: ["The unfortunate", "who is deprived of", "the basic needs want love only", "No error"],
  correct: "the basic needs want love only",
  description: "Singular subject 'The unfortunate who...' takes 'wants', not 'want'."
},
{ // 19
  question: "Find the error.<br><br> Police caught the boy (A)/ whom they thought (B)/ was a criminal. (C)/ No error (D)",
  answers: ["Police caught the boy", "whom they thought", "was a criminal", "No error"],
  correct: "No error",
  description: "Sentence is correct; no error."
},
{ // 20
  question: "Find the error.<br><br> The weather of Delhi (A)/ is not so good (B)/ as Odisha. (C)/ No error (D)",
  answers: ["The weather of Delhi", "is not so good", "as Odisha", "No error"],
  correct: "as Odisha",
  description: "Comparative requires 'as good as Odisha'."
},
{ // 21
  question: "Find the error.<br><br> He is the boy (A)/ who they say (B)/ the police arrested. (C)/ No error (D)",
  answers: ["He is the boy", "who they say", "the police arrested", "No error"],
  correct: "who they say",
  description: "Correct form: 'whom they say the police arrested'."
},
{ // 22
  question: "Find the error.<br><br> One should take (A)/ good care of (B)/ his health. (C)/ No error (D)",
  answers: ["One should take", "good care of", "his health", "No error"],
  correct: "his health",
  description: "To remain gender-neutral, use 'their' instead of 'his'."
},
{ // 23
  question: "Find the error.<br><br> I never distinguish (A)/ between (B)/ you and he. (C)/ No error (D)",
  answers: ["I never distinguish", "between", "you and he", "No error"],
  correct: "you and he",
  description: "Correct pronoun after preposition: 'you and him'."
},
{ // 24
  question: "Find the error.<br><br> India sent some aircrafts (A)/ to Afghanistan to bring (B)/ the Indians back. (C)/ No error (D)",
  answers: ["India sent some aircrafts", "to Afghanistan to bring", "the Indians back", "No error"],
  correct: "India sent some aircrafts",
  description: "'Aircraft' is both singular and plural; 'aircrafts' is incorrect."
},
{ // 25
  question: "Find the error.<br><br> Our headmaster is (A)/ regarded as a (B)/ man of letter. (C)/ No error (D)",
  answers: ["Our headmaster is", "regarded as a", "man of letter", "No error"],
  correct: "man of letter",
  description: "Correct phrase: 'man of letters' (plural)."
},
{ // 26
  question: "Find the error.<br><br> All the necessary information (A)/ regarding the (B)/ form fill up of the examinations are here. (C)/ No error (D)",
  answers: ["All the necessary information", "regarding the", "form fill up of the examinations are here", "No error"],
  correct: "form fill up of the examinations are here",
  description: "Singular subject 'information' takes singular verb 'is', not 'are'."
},
{ // 27
  question: "Find the error.<br><br> The English (A)/ defeated French (B)/ in the battle of waterloo. (C)/ No error (D)",
  answers: ["The English", "defeated French", "in the battle of waterloo", "No error"],
  correct: "in the battle of waterloo",
  description: "Proper noun 'Waterloo' should be capitalized."
},
{ // 28
  question: "Find the error.<br><br> The hosts took great pain (A)/ to see that all the guests (B)/ were waited upon properly. (C)/ No error (D)",
  answers: ["The hosts took great pain", "to see that all the guests", "were waited upon properly", "No error"],
  correct: "were waited upon properly",
  description: "Correct form: 'were waited upon' → 'were attended to'."
},
{ // 29
  question: "Find the error.<br><br> She revenged on (A)/ her enemy for (B)/ the murder of her father. (C)/ No error (D)",
  answers: ["She revenged on", "her enemy for", "the murder of her father", "No error"],
  correct: "She revenged on",
  description: "'Revenge' is used without 'on': better 'took revenge on'."
},
{ // 30
  question: "Find the error.<br><br> She made me (A)/ drink the cup of coffee (B)/ to the dreg. (C)/ No error (D)",
  answers: ["She made me", "drink the cup of coffee", "to the dreg", "No error"],
  correct: "to the dreg",
  description: "Correct phrase is 'to the dregs', not 'to the dreg'."
},

{ // 1
  question: "Spot the error:<br><br>Raja as well as his friends / are playing football / in the ground",
  answers: ["Raja as well as his friends", "are playing football", "in the ground", "No error"],
  correct: "in the ground",
  description: "The correct phrase is 'on the ground' not 'in the ground'."
},
{ // 2
  question: "Spot the error:<br><br>Many a student / have turned up / with his admit card",
  answers: ["Many a student", "have turned up", "with his admit card", "No error"],
  correct: "have turned up",
  description: "'Many a' is always followed by singular verb, so it should be 'has turned up'."
},
{ // 3
  question: "Spot the error:<br><br>Your remarks have / no relevance to / the matter in hand",
  answers: ["Your remarks have", "no relevance to", "the matter in hand", "No error"],
  correct: "the matter in hand",
  description: "The correct idiom is 'the matter at hand'."
},
{ // 4
  question: "Spot the error:<br><br>I will help her / if she will be / loyal to me",
  answers: ["I will help her", "if she will be", "loyal to me", "No error"],
  correct: "if she will be",
  description: "After 'if', simple present is used, so it should be 'if she is loyal to me'."
},
{ // 5
  question: "Spot the error:<br><br>I told to him yesterday / that I did not find / him at home",
  answers: ["I told to him yesterday", "that I did not find", "him at home", "No error"],
  correct: "I told to him yesterday",
  description: "'Told' is not followed by 'to'. It should be 'I told him yesterday'."
},
{ // 6
  question: "Spot the error:<br><br>It is / as good or perhaps / better than that",
  answers: ["It is", "as good or perhaps", "better than that", "No error"],
  correct: "as good or perhaps",
  description: "Correct construction is 'as good as, or perhaps better than'."
},
{ // 7
  question: "Spot the error:<br><br>I deny the allegation / that less people / are buying our books",
  answers: ["I deny the allegation", "that less people", "are buying our books", "No error"],
  correct: "that less people",
  description: "It should be 'fewer people' instead of 'less people'."
},
{ // 8
  question: "Spot the error:<br><br>The children ran away / seeing the ferocious tiger / in terrible fear",
  answers: ["The children ran away", "seeing the ferocious tiger", "in terrible fear", "No error"],
  correct: "in terrible fear",
  description: "The sentence wrongly suggests the tiger was in fear. It should be 'the children ran away in terrible fear'."
},
{ // 9
  question: "Spot the error:<br><br>This is only / the first part the book / consists four parts",
  answers: ["This is only", "the first part the book", "consists four parts", "No error"],
  correct: "the first part the book",
  description: "It should be 'the first part of the book'."
},
{ // 10
  question: "Spot the error:<br><br>She is curious / the jokes / in this magazine",
  answers: ["She is curious", "the jokes", "in this magazine", "No error"],
  correct: "She is curious",
  description: "It should be 'curious about the jokes'."
},
{ // 11
  question: "Spot the error:<br><br>The plane was / struck / by lightning and / completely destroyed",
  answers: ["The plane was", "struck", "by lightning and", "completely destroyed", "No error"],
  correct: "No error",
  description: "The sentence is correct."
},
{ // 12
  question: "Spot the error:<br><br>I intended to reach Patna / as soon, / if not / sooner than you",
  answers: ["I intended to reach Patna", "as soon,", "if not", "sooner than you", "No error"],
  correct: "as soon,",
  description: "The comma is wrong. It should be 'as soon as, if not sooner than you'."
},
{ // 13
  question: "Spot the error:<br><br>Passing by the / damaged house, / a brick from the roof / fell on my head",
  answers: ["Passing by the", "damaged house,", "a brick from the roof", "fell on my head", "No error"],
  correct: "Passing by the",
  description: "Misplaced modifier – it wrongly suggests 'a brick' was passing by. It should be 'While I was passing by the damaged house...'."
},
{ // 14
  question: "Spot the error:<br><br>Nothing / has or / could be more unfortunate / than her illness",
  answers: ["Nothing", "has or", "could be more unfortunate", "than her illness", "No error"],
  correct: "has or",
  description: "The correct form is 'has been or could be more unfortunate'."
},
{ // 15
  question: "Spot the error:<br><br>She congratulated me for / my brilliant success / in / the examination",
  answers: ["She congratulated me for", "my brilliant success", "in", "the examination", "No error"],
  correct: "She congratulated me for",
  description: "Correct usage is 'congratulated me on my brilliant success'."
},

{ // 1
  question: "Spot the error:<br><br>He is good in mathematics / but struggles with / solving complex problems",
  answers: ["He is good in mathematics", "but struggles with", "solving complex problems", "No error"],
  correct: "He is good in mathematics",
  description: "It should be 'good at mathematics'."
},
{ // 2
  question: "Spot the error:<br><br>None of the two answers / that he wrote / was correct",
  answers: ["None of the two answers", "that he wrote", "was correct", "No error"],
  correct: "None of the two answers",
  description: "It should be 'Neither of the two answers'."
},
{ // 3
  question: "Spot the error:<br><br>The committee / are meeting tomorrow / to discuss the new policy",
  answers: ["The committee", "are meeting tomorrow", "to discuss the new policy", "No error"],
  correct: "are meeting tomorrow",
  description: "When committee is used as a unit, it takes singular verb: 'The committee is meeting tomorrow'."
},
{ // 4
  question: "Spot the error:<br><br>One must be careful / with his words / while speaking in public",
  answers: ["One must be careful", "with his words", "while speaking in public", "No error"],
  correct: "with his words",
  description: "Pronoun 'his' is incorrect; it should be 'one must be careful with one's words'."
},
{ // 5
  question: "Spot the error:<br><br>The furnitures in the room / are very old / and replaceable",
  answers: ["The furnitures in the room", "are very old", "and replaceable", "No error"],
  correct: "The furnitures in the room",
  description: "Furniture is uncountable. It should be 'The furniture in the room'."
},
{ // 6
  question: "Spot the error:<br><br>The data / has already been processed / by the researchers",
  answers: ["The data", "has already been processed", "by the researchers", "No error"],
  correct: "has already been processed",
  description: "'Data' is plural, so it should be 'have already been processed'."
},
{ // 7
  question: "Spot the error:<br><br>Every student in all the classes / were asked to submit / the assignments by Friday",
  answers: ["Every student in all the classes", "were asked to submit", "the assignments by Friday", "No error"],
  correct: "were asked to submit",
  description: "With 'every student', singular verb is used: 'was asked'."
},
{ // 8
  question: "Spot the error:<br><br>She gave me an useful / information / about the upcoming event",
  answers: ["She gave me an useful", "information", "about the upcoming event", "No error"],
  correct: "She gave me an useful",
  description: "It should be 'a useful'."
},
{ // 9
  question: "Spot the error:<br><br>He has not yet / returned the money / that was lent by him last month",
  answers: ["He has not yet", "returned the money", "that was lent by him last month", "No error"],
  correct: "that was lent by him last month",
  description: "It should be 'that he borrowed last month'."
},
{ // 10
  question: "Spot the error:<br><br>Each of the boys / has been given / a reward for their performance",
  answers: ["Each of the boys", "has been given", "a reward for their performance", "No error"],
  correct: "a reward for their performance",
  description: "Pronoun should agree: 'Each ... his performance'."
},
{ // 11
  question: "Spot the error:<br><br>The number of students / in the class have decreased / significantly this year",
  answers: ["The number of students", "in the class have decreased", "significantly this year", "No error"],
  correct: "in the class have decreased",
  description: "'The number of' takes singular verb: 'has decreased'."
},
{ // 12
  question: "Spot the error:<br><br>He dislikes to read books / which are based / on historical events",
  answers: ["He dislikes to read books", "which are based", "on historical events", "No error"],
  correct: "He dislikes to read books",
  description: "Correct usage: 'He dislikes reading books'."
},
{ // 13
  question: "Spot the error:<br><br>They both / admire her / for her determinations and hard works",
  answers: ["They both", "admire her", "for her determinations and hard works", "No error"],
  correct: "for her determinations and hard works",
  description: "Both nouns are uncountable: 'determination and hard work'."
},
{ // 14
  question: "Spot the error:<br><br>The team captain, as well as the players, / were awarded trophies / for their outstanding performance",
  answers: ["The team captain, as well as the players,", "were awarded trophies", "for their outstanding performance", "No error"],
  correct: "were awarded trophies",
  description: "With 'as well as', the verb agrees with the first subject: 'was awarded'."
},
{ // 15
  question: "Spot the error:<br><br>The audience / was clapping enthusiastically / at the end of the performance",
  answers: ["The audience", "was clapping enthusiastically", "at the end of the performance", "No error"],
  correct: "No error",
  description: "The sentence is correct."
},

{ // 1
  question: "Spot the error:<br><br>If you had worked / hard at school you / would have a better job now",
  answers: ["If you had worked", "hard at school you", "would have a better job now", "No error"],
  correct: "would have a better job now",
  description: "It should be 'would have had a better job now' (3rd conditional requires 'would have + past participle')."
},
{ // 2
  question: "Spot the error:<br><br>If I had money / ten years ago I / would have been given you a loan",
  answers: ["If I had money", "ten years ago I", "would have been given you a loan", "No error"],
  correct: "would have been given you a loan",
  description: "Correct form: 'I would have given you a loan'."
},
{ // 3
  question: "Spot the error:<br><br>If you heat / ice for some while / it would melt",
  answers: ["If you heat", "ice for some while", "it would melt", "No error"],
  correct: "it would melt",
  description: "Zero conditional: 'If you heat ice, it melts' (not 'would melt')."
},
{ // 4
  question: "Spot the error:<br><br>If I spoke / Italian I would / be working in Italy",
  answers: ["If I spoke", "Italian I would", "be working in Italy", "No error"],
  correct: "No error",
  description: "The sentence is correct (2nd conditional)."
},
{ // 5
  question: "Spot the error:<br><br>If he was to / work so hard he / would not be so fat",
  answers: ["If he was to", "work so hard he", "would not be so fat", "No error"],
  correct: "If he was to",
  description: "It should be 'If he were to work so hard...'."
},
{ // 6
  question: "Spot the error:<br><br>Had I invited / to the party I would / have gone there",
  answers: ["Had I invited", "to the party I would", "have gone there", "No error"],
  correct: "Had I invited",
  description: "Correct form: 'Had I been invited...'."
},
{ // 7
  question: "Spot the error:<br><br>If I were / in your shoes / I will not accept the offer",
  answers: ["If I were", "in your shoes", "I will not accept the offer", "No error"],
  correct: "I will not accept the offer",
  description: "Conditional mismatch: should be 'I would not accept the offer'."
},
{ // 8
  question: "Spot the error:<br><br>If you give / me another chance / I would not let it go",
  answers: ["If you give", "me another chance", "I would not let it go", "No error"],
  correct: "I would not let it go",
  description: "First conditional requires 'If you give..., I will not let it go'."
},
{ // 9
  question: "Spot the error:<br><br>But for my help / he could not finish / the difficult task in time",
  answers: ["But for my help", "he could not finish", "the difficult task in time", "No error"],
  correct: "he could not finish",
  description: "It should be 'he could not have finished'."
},
{ // 10
  question: "Spot the error:<br><br>Had you been invited / you could see / the famous writer",
  answers: ["Had you been invited", "you could see", "the famous writer", "No error"],
  correct: "you could see",
  description: "It should be 'you could have seen'."
},
{ // 11
  question: "Spot the error:<br><br>A great misfortune / befell upon the people / as a result of the flood",
  answers: ["A great misfortune", "befell upon the people", "as a result of the flood", "No error"],
  correct: "befell upon the people",
  description: "'Befell' does not take 'upon'. Correct: 'befell the people'."
},
{ // 12
  question: "Spot the error:<br><br>This is the man / whom everybody said / was off his wits",
  answers: ["This is the man", "whom everybody said", "was off his wits", "No error"],
  correct: "whom everybody said",
  description: "Correct form: 'who everybody said...'."
},
{ // 13
  question: "Spot the error:<br><br>He wanted to get / the better hand / over his rival",
  answers: ["He wanted to get", "the better hand", "over his rival", "No error"],
  correct: "the better hand",
  description: "Correct idiom: 'get the better of his rival'."
},
{ // 14
  question: "Spot the error:<br><br>The behavior of many boys and girls / is not what / they should be",
  answers: ["The behavior of many boys and girls", "is not what", "they should be", "No error"],
  correct: "they should be",
  description: "Correct: 'is not what it should be'."
},
{ // 15
  question: "Spot the error:<br><br>Mother wiped all the glasses / with some short / pieces of clothes",
  answers: ["Mother wiped all the glasses", "with some short", "pieces of clothes", "No error"],
  correct: "pieces of clothes",
  description: "It should be 'pieces of cloth'."
},
{ // 16
  question: "Spot the error:<br><br>He cleaned his shoes carefully / so that not to bring / any dirt into the room",
  answers: ["He cleaned his shoes carefully", "so that not to bring", "any dirt into the room", "No error"],
  correct: "so that not to bring",
  description: "Correct: 'so as not to bring'."
},
{ // 17
  question: "Spot the error:<br><br>They gave me neither money / nor they helped me / in any way",
  answers: ["They gave me neither money", "nor they helped me", "in any way", "No error"],
  correct: "nor they helped me",
  description: "It should be 'nor did they help me'."
},
{ // 18
  question: "Spot the error:<br><br>He denied not only / having borrowed money from me / but also ever met me",
  answers: ["He denied not only", "having borrowed money from me", "but also ever met me", "No error"],
  correct: "but also ever met me",
  description: "Correct form: 'but also having ever met me'."
},
{ // 19
  question: "Spot the error:<br><br>I reminded him repeatedly / of my need / lest he should not forget it",
  answers: ["I reminded him repeatedly", "of my need", "lest he should not forget it", "No error"],
  correct: "lest he should not forget it",
  description: "Lest already expresses prevention, so 'not' is wrong: 'lest he should forget it'."
},
{ // 20
  question: "Spot the error:<br><br>The tall building was / reduced to shambles / in a few seconds",
  answers: ["The tall building was", "reduced to shambles", "in a few seconds", "No error"],
  correct: "No error",
  description: "The sentence is correct."
},

{ // 1
  question: "Spot the error.<br><br>When I will / arrive home I will / surely call you",
  answers: ["When I will", "arrive home I will", "surely call you", "no error"],
  correct: "When I will",
  description: "In conditional/future clauses, 'When I will arrive' is incorrect. It should be 'When I arrive'."
},
{ // 2
  question: "Spot the error.<br><br>We have been / living in this flat / since three years.",
  answers: ["We have been", "living in this flat", "since three years.", "no error"],
  correct: "since three years.",
  description: "'Since' is used with a point of time, not a period. It should be 'for three years'."
},
{ // 3
  question: "Spot the error.<br><br>Neither you come / here nor do / anything for us",
  answers: ["Neither you come", "here nor do", "anything for us", "no error"],
  correct: "Neither you come",
  description: "The correct structure is 'Neither do you come here nor do anything for us'."
},
{ // 4
  question: "Spot the error.<br><br>This is the song that / he has been listening repeatedly / throughout the day",
  answers: ["This is the song that", "he has been listening repeatedly", "throughout the day", "no error"],
  correct: "he has been listening repeatedly",
  description: "Correct usage is 'he has been listening to repeatedly'. 'Listening' requires 'to'."
},
{ // 5
  question: "Spot the error.<br><br>Although it was raining / but the referee decided / to continue the match",
  answers: ["Although it was raining", "but the referee decided", "to continue the match", "no error"],
  correct: "but the referee decided",
  description: "'Although' itself shows contrast; using 'but' is redundant. Correct: 'Although it was raining, the referee decided...'"
},
{ // 6
  question: "Spot the error.<br><br>Rahim along with his / classmates have come / to submit the application",
  answers: ["Rahim along with his", "classmates have come", "to submit the application.", "no error"],
  correct: "classmates have come",
  description: "When the subject is 'Rahim along with his classmates', the verb should agree with 'Rahim'. Correct: 'has come'."
},
{ // 7
  question: "Spot the error.<br><br>I have never been / allowed to see a movie / when I was a child",
  answers: ["I have never been", "allowed to see a movie", "when I was a child.", "no error"],
  correct: "I have never been",
  description: "The tense is inconsistent. It should be 'I was never allowed to see a movie when I was a child'."
},
{ // 8
  question: "Spot the error.<br><br>She was waiting for two hours / before she was allowed / to enter the hall",
  answers: ["She was waiting for two hours", "before she was allowed", "to enter the hall", "no error"],
  correct: "She was waiting for two hours",
  description: "Correct tense: 'She had been waiting for two hours before she was allowed...'"
},
{ // 9
  question: "Spot the error.<br><br>He called me / yesterday when I / slept soundly",
  answers: ["He called me", "yesterday when I", "slept soundly.", "no error"],
  correct: "slept soundly.",
  description: "Past continuous is needed here: 'when I was sleeping soundly'."
},
{ // 10
  question: "Spot the error.<br><br>The great leader bade / all the party workers / to follow the principles of Gandhiji.",
  answers: ["The great leader bade", "all the party workers", "to follow the principles of Gandhiji.", "no error"],
  correct: "to follow the principles of Gandhiji.",
  description: "'Bade' is followed directly by verb without 'to'. Correct: 'bade them follow the principles of Gandhiji'."
},

{ // 1
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The company has been launched / a new software / that solves the issue.",
  answers: ["The company has been launched", "a new software", "that solves the issue.", "No error"],
  correct: "The company has been launched",
  description: "Incorrect tense and usage. Correct: 'The company has launched a new software...'"
},
{ // 2
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>He doesn’t know that / how to install / the anti-virus software.",
  answers: ["He doesn’t know that", "how to install", "the anti-virus software.", "No error"],
  correct: "He doesn’t know that",
  description: "The word 'that' is unnecessary. Correct: 'He doesn’t know how to install the anti-virus software.'"
},
{ // 3
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Each of the laptops / are checked / before delivery.",
  answers: ["Each of the laptops", "are checked", "before delivery.", "No error"],
  correct: "are checked",
  description: "The subject 'Each' is singular, so the verb should be 'is checked'."
},
{ // 4
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The technician / already has given / the report to the manager.",
  answers: ["The technician", "already has given", "the report to the manager.", "No error"],
  correct: "already has given",
  description: "Word order error. Correct form: 'has already given'."
},
{ // 5
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>This data / is very important / for our analysis.",
  answers: ["This data", "is very important", "for our analysis.", "No error"],
  correct: "No error",
  description: "The sentence is correct. 'Data' can be treated as singular in modern usage."
},
{ // 6
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Neither the CPU / nor the RAM / are functioning properly.",
  answers: ["Neither the CPU", "nor the RAM", "are functioning properly.", "No error"],
  correct: "are functioning properly.",
  description: "With 'Neither...nor', the verb agrees with the nearer subject 'RAM' (singular). Correct: 'is functioning properly'."
},
{ // 7
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>There is / many problems / in the current system.",
  answers: ["There is", "many problems", "in the current system.", "No error"],
  correct: "There is",
  description: "Plural subject requires 'There are'. Correct: 'There are many problems in the current system.'"
},
{ // 8
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>I am learning / how to operate this machine / for last five months.",
  answers: ["I am learning", "how to operate this machine", "for last five months.", "No error"],
  correct: "for last five months.",
  description: "Time expression should be 'for the last five months' and verb tense should be present perfect continuous."
},
{ // 9
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The printer / need to be / replaced immediately.",
  answers: ["The printer", "need to be", "replaced immediately.", "No error"],
  correct: "need to be",
  description: "Singular subject 'printer' requires 'needs to be'."
},
{ // 10
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The programme was / too lengthy / than expected.",
  answers: ["The programme was", "too lengthy", "than expected.", "No error"],
  correct: "than expected.",
  description: "The correct phrase is 'longer than expected' or 'too lengthy compared to expected'. 'Too...than' is incorrect."
},

{ // 1
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Neither the manager nor his assistants / have submitted / their reports / for the month.",
  answers: ["Neither the manager nor his assistants", "have submitted", "their reports", "for the month.", "No error"],
  correct: "have submitted",
  description: "With 'Neither...nor', the verb agrees with the nearer subject 'assistants'. Correct: 'Neither the manager nor his assistants have submitted...' (✅ Actually correct). But many sources suggest singular agreement with 'Neither...nor' when subjects differ in number. Strict correction: 'has submitted'."
},
{ // 2
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Scarcely had he arrived / when the meeting / had started without / informing him.",
  answers: ["Scarcely had he arrived", "when the meeting", "had started without", "informing him.", "No error"],
  correct: "had started without",
  description: "After 'Scarcely...had', we use 'when' → 'Scarcely had he arrived when the meeting started'. The second 'had' is incorrect."
},
{ // 3
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The number of applicants / have increased / significantly since / last year.",
  answers: ["The number of applicants", "have increased", "significantly since", "last year.", "No error"],
  correct: "have increased",
  description: "Subject 'The number' is singular, so verb should be 'has increased'."
},
{ // 4
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>He is one of those writers / who has consistently / won the admiration / of critics.",
  answers: ["He is one of those writers", "who has consistently", "won the admiration", "of critics.", "No error"],
  correct: "who has consistently",
  description: "Relative clause refers to 'writers' (plural). Correct: 'who have consistently won...'"
},
{ // 5
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>No sooner had the sun risen / when the birds / started chirping / in the garden.",
  answers: ["No sooner had the sun risen", "when the birds", "started chirping", "in the garden.", "No error"],
  correct: "when the birds",
  description: "After 'No sooner', use 'than' not 'when'. Correct: 'No sooner had the sun risen than the birds started chirping...'"
},
{ // 6
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Not only the players / but the coach also / were disappointed / with the result.",
  answers: ["Not only the players", "but the coach also", "were disappointed", "with the result.", "No error"],
  correct: "were disappointed",
  description: "Verb should agree with the nearest subject 'coach' (singular). Correct: 'was disappointed'."
},
{ // 7
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The quality of the apples / are not / as good as we expected / this season.",
  answers: ["The quality of the apples", "are not", "as good as we expected", "this season.", "No error"],
  correct: "are not",
  description: "Subject 'The quality' is singular. Correct: 'is not'."
},
{ // 8
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Neither of the two answers / seem to be / completely / correct.",
  answers: ["Neither of the two answers", "seem to be", "completely", "correct.", "No error"],
  correct: "seem to be",
  description: "Subject 'Neither' is singular. Correct: 'seems to be'."
},
{ // 9
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>More than one student / have failed / the internal assessment / this time.",
  answers: ["More than one student", "have failed", "the internal assessment", "this time.", "No error"],
  correct: "have failed",
  description: "'More than one' takes singular verb. Correct: 'has failed'."
},
{ // 10
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>I have been living in Delhi / since five years / and know the city / very well.",
  answers: ["I have been living in Delhi", "since five years", "and know the city", "very well.", "No error"],
  correct: "since five years",
  description: "Use 'for' with a period of time. Correct: 'for five years'."
},
{ // 11
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Despite of working hard / he failed to / achieve the target / this quarter.",
  answers: ["Despite of working hard", "he failed to", "achieve the target", "this quarter.", "No error"],
  correct: "Despite of working hard",
  description: "Correct usage: 'Despite working hard' (no 'of')."
},
{ // 12
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>She told me / that she prefers tea / than coffee / in the morning.",
  answers: ["She told me", "that she prefers tea", "than coffee", "in the morning.", "No error"],
  correct: "than coffee",
  description: "Correct usage: 'She prefers tea to coffee'."
},
{ // 13
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The professor gave / me an advice / on how to improve / my writing.",
  answers: ["The professor gave", "me an advice", "on how to improve", "my writing.", "No error"],
  correct: "me an advice",
  description: "'Advice' is uncountable. Correct: 'gave me some advice'."
},
{ // 14
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Neither she nor I / am going / to the conference / tomorrow.",
  answers: ["Neither she nor I", "am going", "to the conference", "tomorrow.", "No error"],
  correct: "No error",
  description: "The sentence is correct. With 'Neither...nor', verb agrees with the subject closer to it. Here: 'I am going'."
},
{ // 15
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The jury / was divided in / opinion about / the case.",
  answers: ["The jury", "was divided in", "opinion about", "the case.", "No error"],
  correct: "was divided in",
  description: "Correct phrase: 'divided in their opinions' or 'divided on opinion'."
},
{ // 16
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>The meeting scheduled / for today / it has been postponed / until next week.",
  answers: ["The meeting scheduled", "for today", "it has been postponed", "until next week.", "No error"],
  correct: "it has been postponed",
  description: "Superfluous subject. Correct: 'The meeting scheduled for today has been postponed...'"
},
{ // 17
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>He denied to say / anything against / the organisation / during the interview.",
  answers: ["He denied to say", "anything against", "the organisation", "during the interview.", "No error"],
  correct: "He denied to say",
  description: "Correct usage: 'He denied saying anything...' or 'He refused to say...'"
},
{ // 18
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>It is high time / you improve / your communication / skills.",
  answers: ["It is high time", "you improve", "your communication", "skills.", "No error"],
  correct: "you improve",
  description: "After 'It is high time', past tense is used. Correct: 'It is high time you improved...'"
},
{ // 19
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>Each of these cars / have different / features that make them / attractive.",
  answers: ["Each of these cars", "have different", "features that make them", "attractive.", "No error"],
  correct: "have different",
  description: "Subject 'Each' is singular. Correct: 'has different features...'"
},
{ // 20
  question: "Identify the part of the sentence that contains an error. If there is no error, choose ‘No error’.<br><br>I am used to / work late / at night when necessary / to meet deadlines.",
  answers: ["I am used to", "work late", "at night when necessary", "to meet deadlines.", "No error"],
  correct: "work late",
  description: "Correct usage: 'I am used to working late...'"
},

{ // 1
  question: "Spot the error.<br><br>She thinks that / this painting is more attractive / of the two on display.",
  answers: ["She thinks that", "this painting is more attractive", "of the two on display", "No error"],
  correct: "of the two on display",
  description: "Use 'the more attractive' or 'the most attractive'; 'more attractive of the two' is incorrect. It should be 'the more attractive of the two'."
},
{ // 2
  question: "Spot the error.<br><br>The old man's room was untidy / with many furniture / thrown around carelessly.",
  answers: ["The old man's room was untidy", "with many furniture", "thrown around carelessly", "No error"],
  correct: "with many furniture",
  description: "'Furniture' is an uncountable noun, so 'many furniture' is wrong. It should be 'much furniture'."
},
{ // 3
  question: "Spot the error.<br><br>No sooner had / the manager arrived / when the meeting started.",
  answers: ["No sooner had", "the manager arrived", "when the meeting started", "No error"],
  correct: "when the meeting started",
  description: "After 'No sooner', the correct structure is 'than', not 'when'."
},
{ // 4
  question: "Spot the error.<br><br>As she prefers novels than magazines / her sister often brings / her detective stories.",
  answers: ["As she prefers novels than magazines", "her sister often brings", "her detective stories", "No error"],
  correct: "As she prefers novels than magazines",
  description: "The correct expression is 'prefers X to Y', not 'prefers X than Y'."
},
{ // 5
  question: "Spot the error.<br><br>He asked me / where did I go / after the class was over.",
  answers: ["He asked me", "where did I go", "after the class was over", "No error"],
  correct: "where did I go",
  description: "In indirect speech, the clause should be 'where I went', not 'where did I go'."
},
{ // 6
  question: "Spot the error.<br><br>People who are too anxious / for their diet / sometimes end up falling ill.",
  answers: ["People who are too anxious", "for their diet", "sometimes end up falling ill", "No error"],
  correct: "for their diet",
  description: "The correct preposition is 'about' their diet, not 'for'."
},
{ // 7
  question: "Spot the error.<br><br>The health of the athlete / has not improved / since he got injured last week.",
  answers: ["The health of the athlete", "has not improved", "since he got injured last week", "No error"],
  correct: "No error",
  description: "The sentence is grammatically correct."
},
{ // 8
  question: "Spot the error.<br><br>After we agreed upon / the main ideas, there remained / nothing more to argue about.",
  answers: ["After we agreed upon", "the main ideas, there remained", "nothing more to argue about", "No error"],
  correct: "After we agreed upon",
  description: "The verb 'agree' does not take 'upon' when followed by an object. It should be 'agreed on the main ideas'."
},
{ // 9
  question: "Spot the error.<br><br>They dust the shelves, / lay the plates and clean up, / do the laundry and stitch the buttons.",
  answers: ["They dust the shelves,", "lay the plates and clean up,", "do the laundry and stitch the buttons.", "No error"],
  correct: "lay the plates and clean up,",
  description: "The verb should be 'set the plates' (not 'lay the plates') when referring to preparing a table."
},
{ // 10
  question: "Spot the error.<br><br>I shall wait here / at the gate / until you will return from the office.",
  answers: ["I shall wait here", "at the gate", "until you will return from the office", "No error"],
  correct: "until you will return from the office",
  description: "After 'until', the simple present tense should be used, not 'will'. Correct: 'until you return'."
},

{ // 1
  question: "Spot the error.<br><br>If I would have known you were coming / I would have baked a cake / for you.",
  answers: ["If I would have known you were coming", "I would have baked a cake", "for you", "No error"],
  correct: "If I would have known you were coming",
  description: "The correct form is 'If I had known you were coming'; 'would have' cannot follow 'if'."
},
{ // 2
  question: "Spot the error.<br><br>I wish I shall be able to / attend the meeting tomorrow / without any problem.",
  answers: ["I wish I shall be able to", "attend the meeting tomorrow", "without any problem", "No error"],
  correct: "I wish I shall be able to",
  description: "After 'I wish', we use past tense or 'could'. Correct: 'I wish I could attend…'."
},
{ // 3
  question: "Spot the error.<br><br>She looked after the new project / after she had took over / the department.",
  answers: ["She looked after the new project", "after she had took over", "the department", "No error"],
  correct: "after she had took over",
  description: "'Had took' is incorrect; it should be 'had taken'."
},
{ // 4
  question: "Spot the error.<br><br>She likes jogging / to swim / and biking.",
  answers: ["She likes jogging", "to swim", "and biking", "No error"],
  correct: "to swim",
  description: "Parallel structure is required: 'jogging, swimming, and biking'."
},
{ // 5
  question: "Spot the error.<br><br>If he came to the party / he could see / many of his friends.",
  answers: ["If he came to the party", "he could see", "many of his friends", "No error"],
  correct: "If he came to the party",
  description: "For present unreal condition, it should be 'If he came… he would see…'."
},
{ // 6
  question: "Spot the error.<br><br>It is essential that / he completes the report / by tomorrow.",
  answers: ["It is essential that", "he completes the report", "by tomorrow", "No error"],
  correct: "he completes the report",
  description: "In subjunctive mood after 'essential that', the verb should be base form: 'he complete', not 'completes'."
},
{ // 7
  question: "Spot the error.<br><br>The team called off the meeting / because they were not able / to reach to a conclusion.",
  answers: ["The team called off the meeting", "because they were not able", "to reach to a conclusion", "No error"],
  correct: "to reach to a conclusion",
  description: "The correct phrase is 'reach a conclusion', not 'reach to a conclusion'."
},
{ // 8
  question: "Spot the error.<br><br>In her free time, she enjoys / reading books, hiking / and to draw pictures.",
  answers: ["In her free time, she enjoys", "reading books, hiking", "and to draw pictures", "No error"],
  correct: "and to draw pictures",
  description: "After 'enjoys', all verbs must be gerunds: 'reading, hiking, and drawing'."
},
{ // 9
  question: "Spot the error.<br><br>Had he known about the traffic / he would leave / earlier.",
  answers: ["Had he known about the traffic", "he would leave", "earlier", "No error"],
  correct: "he would leave",
  description: "In past conditional, it should be 'he would have left'."
},
{ // 10
  question: "Spot the error.<br><br>If she is here / she would help us / with the project.",
  answers: ["If she is here", "she would help us", "with the project", "No error"],
  correct: "If she is here",
  description: "Mixed conditional error. It should be either 'If she were here, she would help…' or 'If she is here, she will help…'."
},

{ // 1
  question: "Spot the error.<br><br>I went to see the film / because he had told / me that it was too good.",
  answers: ["I went to see the film", "because he had told", "me that it was too good", "No error"],
  correct: "me that it was too good",
  description: "The phrase 'too good' is incorrect here; it should be 'very good'."
},
{ // 2
  question: "Spot the error.<br><br>I feel that I have / given you very trouble / in this matter.",
  answers: ["I feel that I have", "given you very trouble", "in this matter", "No error"],
  correct: "given you very trouble",
  description: "The correct expression is 'given you much trouble', not 'very trouble'."
},
{ // 3
  question: "Spot the error.<br><br>Hardly had he went out / of the class when a group / of angry students attacked him.",
  answers: ["Hardly had he went out", "of the class when a group", "of angry students attacked him", "No error"],
  correct: "Hardly had he went out",
  description: "After 'had', past participle is required: 'gone out', not 'went out'."
},
{ // 4
  question: "Spot the error.<br><br>He seldom / or ever / tells a lie.",
  answers: ["He seldom", "or ever", "tells a lie", "No error"],
  correct: "or ever",
  description: "The idiomatic expression is 'seldom or never', not 'seldom or ever'."
},
{ // 5
  question: "Spot the error.<br><br>The servant quickly / did the work to / please his master.",
  answers: ["The servant quickly", "did the work to", "please his master", "No error"],
  correct: "No error",
  description: "This sentence is grammatically correct."
},
{ // 6
  question: "Spot the error.<br><br>You are kindly / requested to / reply sharp.",
  answers: ["You are kindly", "requested to", "reply sharp", "No error"],
  correct: "reply sharp",
  description: "It should be 'reply sharply' (adverb needed)."
},
{ // 7
  question: "Spot the error.<br><br>I and my friends performed / the task as good as we could / however it did not turnout to be satisfactory.",
  answers: ["I and my friends performed", "the task as good as we could", "however it did not turnout to be satisfactory", "No error"],
  correct: "the task as good as we could",
  description: "It should be 'as well as we could', not 'as good as'."
},
{ // 8
  question: "Spot the error.<br><br>I advised my son / to engage two coolies instead of one / because the luggage was too much heavy for a single coolie.",
  answers: ["I advised my son", "to engage two coolies instead of one", "because the luggage was too much heavy for a single coolie", "No error"],
  correct: "because the luggage was too much heavy for a single coolie",
  description: "It should be 'too heavy', not 'too much heavy'."
},
{ // 9
  question: "Spot the error.<br><br>No sooner the bell rang / than the teacher / entered the class.",
  answers: ["No sooner the bell rang", "than the teacher", "entered the class", "No error"],
  correct: "No sooner the bell rang",
  description: "The correct structure is 'No sooner did the bell ring…' not 'No sooner the bell rang'."
},
{ // 10
  question: "Spot the error.<br><br>No sooner did / the train arrived at the station / than the passengers / rushed towards it.",
  answers: ["No sooner did", "the train arrived at the station", "than the passengers", "rushed towards it"],
  correct: "the train arrived at the station",
  description: "After 'did', base form is required: 'arrive', not 'arrived'."
},
{ // 11
  question: "Spot the error.<br><br>Never I have listened / to such beautiful music / as the piece we heard on the radio / last night.",
  answers: ["Never I have listened", "to such beautiful music", "as the piece we heard on the radio", "last night"],
  correct: "Never I have listened",
  description: "Correct form: 'Never have I listened…' (inversion required)."
},
{ // 12
  question: "Spot the error.<br><br>Hardly had / I left the house / than it began / to rain.",
  answers: ["Hardly had", "I left the house", "than it began", "to rain"],
  correct: "than it began",
  description: "The correct phrase is 'Hardly had… when', not 'Hardly had… than'."
},
{ // 13
  question: "Spot the error.<br><br>No sooner had the hockey match started / when it began / to rain.",
  answers: ["No sooner had the hockey match started", "when it began", "to rain", "No error"],
  correct: "when it began",
  description: "It should be 'No sooner… than', not 'No sooner… when'."
},
{ // 14
  question: "Spot the error.<br><br>Scarcely had / I arrived than / the train left.",
  answers: ["Scarcely had", "I arrived than", "the train left", "No error"],
  correct: "I arrived than",
  description: "The structure is 'Scarcely had… when', not 'Scarcely had… than'."
},
{ // 15
  question: "Spot the error.<br><br>Hardly as I stepped out of my house / when I saw some policemen / coming towards my house.",
  answers: ["Hardly as I stepped out of my house", "when I saw some policemen", "coming towards my house", "No error"],
  correct: "Hardly as I stepped out of my house",
  description: "It should be 'Hardly had I stepped out…', not 'Hardly as I stepped out…'."
},
]


















const synonymandantonym = [
  { // 1
  question: "In each of the following questions, choose the word same in meaning to the given word.<br>Homage",
  answers: ["Disdain", "Tribute", "Zeal", "Donation"],
  correct: "Tribute",
  description: "Homage means special honor or respect shown; synonym is 'Tribute'."
},
{ // 2
  question: "In each of the following questions, choose the word same in meaning to the given word.<br>Modest",
  answers: ["Humble", "Sufficient", "Meagre", "Sober"],
  correct: "Humble",
  description: "Modest means having a humble opinion of oneself."
},
{ // 3
  question: "In each of the following questions, choose the word same in meaning to the given word.<br>Opulent",
  answers: ["Hard-working", "Rich", "Comfortable", "Obscure"],
  correct: "Rich",
  description: "Opulent refers to great wealth, luxury, or abundance."
},
{ // 4
  question: "In each of the following questions, choose the word same in meaning to the given word.<br>Pertinacious",
  answers: ["Accumulating", "Stagnating", "Persistent", "Manageable"],
  correct: "Persistent",
  description: "Pertinacious means holding firmly to an opinion or course of action; synonym is 'Persistent'."
},
{ // 5
  question: "In each of the following questions, choose the word same in meaning to the given word.<br>Precocious",
  answers: ["Humble", "Premature", "Preventing", "Procastinating"],
  correct: "Premature",
  description: "Precocious refers to a child developing certain abilities earlier than usual; synonym is 'Premature'."
},

{ // 1
  question: "Find the synonym of the underlined word.<br><br>The <u>bizarre</u> behaviour of the captain annoyed the other team members.",
  answers: ["inconspicuous", "ordinary", "strange", "passionate"],
  correct: "strange",
  description: "Bizarre means very unusual or strange."
},
{ // 2
  question: "Find the synonym of the underlined word.<br><br> The board changed its decision so <u>abruptly</u> that it caused great confusion among the workers.",
  answers: ["anticipated", "foreseen", "unexpectedly", "intended"],
  correct: "unexpectedly",
  description: "Abruptly means suddenly or unexpectedly."
},
{ // 3
  question: "Find the synonym of the underlined word.<br><br> We are not going to <u>abandon</u> this project.",
  answers: ["give up completely", "change", "modify slightly", "postpone"],
  correct: "give up completely",
  description: "Abandon means to give up completely."
},
{ // 4
  question: "Find the synonym of the underlined word.<br><br> Birds are <u>abundant</u> in the tall vegetation.",
  answers: ["plentiful", "scarce", "inadequate", "insufficient"],
  correct: "plentiful",
  description: "Abundant means present in large quantities; plentiful."
},
{ // 5
  question: "Find the synonym of the underlined word. <br><br>I was so <u>absorbed</u> in the novel that I forgot about my duty.",
  answers: ["engrossed", "obliged", "enlivened", "devastated"],
  correct: "engrossed",
  description: "Absorbed means fully engrossed or deeply involved."
},
{ // 6
  question: "Find the synonym of the underlined word.<br><br> I started drinking again after six years of <u>abstinence</u>.",
  answers: ["absence", "avoidance", "sickness", "pretension"],
  correct: "avoidance",
  description: "Abstinence means the practice of avoiding something, especially alcohol or pleasure."
},
{ // 7
  question: "Find the synonym of the underlined word.<br><br> Her very presence in the party <u>accelerated</u> my heartbeat.",
  answers: ["diminished", "aborted", "quickened", "decreased"],
  correct: "quickened",
  description: "Accelerated means made quicker or faster."
},
{ // 8
  question: "Find the synonym of the underlined word. <br><br>Narendra Modi is more <u>accessible</u> than any other prime minister in the world.",
  answers: ["acceptable", "probable", "reachable", "accessory"],
  correct: "reachable",
  description: "Accessible means easy to approach or reachable."
},
{ // 9
  question: "Find the synonym of the underlined word. <br><br>Reduction of inflation was a remarkable <u>accomplishment</u>.",
  answers: ["nourishment", "achievement", "job", "sermon"],
  correct: "achievement",
  description: "Accomplishment means something achieved successfully; achievement."
},
{ // 10
  question: "Find the synonym of the underlined word. <br><br>During several years he worked in Dubai, he <u>accumulated</u> a fortune.",
  answers: ["amassed", "destroyed", "expanded", "increased"],
  correct: "amassed",
  description: "Accumulate means to gather or collect something gradually; synonym is amassed."
},

{ // 22
  question: "Choose the synonym:<br><br>ALLEVIATE",
  answers: ["Worsen", "Relieve", "Aggravate", "Intensify"],
  correct: "Relieve",
  description: "Alleviate means to relieve or reduce severity."
},
{ // 23
  question: "Choose the synonym:<br><br>IMPECCABLE",
  answers: ["Flawed", "Expensive", "Faultless", "Defective"],
  correct: "Faultless",
  description: "Impeccable means flawless or perfect."
},
{ // 24
  question: "Choose the synonym:<br><br>EPHEMERAL",
  answers: ["Permanent", "Brief", "Enduring", "Persistent"],
  correct: "Brief",
  description: "Ephemeral means short-lived or brief."
},
{ // 25
  question: "Choose the synonym:<br><br>UBIQUITOUS",
  answers: ["Rare", "Omnipresent", "Hidden", "Obscure"],
  correct: "Omnipresent",
  description: "Ubiquitous means present everywhere."
},
{ // 26
  question: "Choose the antonym:<br><br>INTRINSIC",
  answers: ["External", "Inherent", "Essential", "Necessary"],
  correct: "External",
  description: "Antonym of intrinsic (internal, essential) is external."
},
{ // 27
  question: "Choose the antonym:<br><br>OBSCURE",
  answers: ["Concealed", "Hidden", "Obvious", "Unclear"],
  correct: "Obvious",
  description: "Obscure means unclear; antonym is obvious."
},
{ // 28
  question: "Choose the antonym:<br><br>AUGMENT",
  answers: ["Increase", "Enlarge", "Diminish", "Expand"],
  correct: "Diminish",
  description: "Augment means increase; antonym is diminish."
},
{ // 29
  question: "Choose the antonym:<br><br>BENIGN",
  answers: ["Kind", "Harsh", "Gentle", "Compassionate"],
  correct: "Harsh",
  description: "Benign means gentle or kind; antonym is harsh."
},
{ // 30
  question: "Choose the antonym:<br><br>ELOQUENT",
  answers: ["Articulate", "Expressive", "Reticent", "Fluent"],
  correct: "Reticent",
  description: "Eloquent means fluent and expressive; antonym is reticent (silent/reserved)."
},

]

const onwordsubstitution = [
{ // 19
  question: "Choose the one-word substitution:<br><br>A person who talks too much",
  answers: ["Eloquent", "Taciturn", "Garrulous", "Reticent"],
  correct: "Garrulous",
  description: "Garrulous means excessively talkative."
},
{ // 20
  question: "Choose the one-word substitution:<br><br>A person who opposes war or violence",
  answers: ["Pessimist", "Fatalist", "Pacifist", "Philanthropist"],
  correct: "Pacifist",
  description: "A pacifist opposes war and violence."
},
{ // 21
  question: "Choose the one-word substitution:<br><br>A government by the rich",
  answers: ["Democracy", "Autocracy", "Plutocracy", "Bureaucracy"],
  correct: "Plutocracy",
  description: "Plutocracy = government by the wealthy."
},
]

const phrasesandidioms = [
{ // 1
  question: "Fill in the blanks with the most appropriate words.<br><br>His new job has given him a new ........ of life.",
  answers: ["lease", "turn", "span", "tenure"],
  correct: "lease",
  description: "The correct phrase is 'a new lease of life', meaning a fresh start or renewed enthusiasm."
},
{ // 2
  question: "Fill in the blanks with the most appropriate words.<br><br>Man may work from ........ to sun, But woman's work is never done.",
  answers: ["moon", "earth", "sun", "cloud"],
  correct: "sun",
  description: "The expression is 'from sun to sun', meaning all day long."
},
{ // 3
  question: "Fill in the blanks with the most appropriate words. <br><br>The students were racing ........ the clock to finish the paper before the deadline.",
  answers: ["before", "behind", "beyond", "against"],
  correct: "against",
  description: "The phrase 'racing against the clock' means to try to finish something quickly before a deadline."
},
{ // 4
  question: "Fill in the blanks with the most appropriate words.<br><br> My grandfather is alive and ..........",
  answers: ["dancing", "kicking", "flirting", "jumping"],
  correct: "kicking",
  description: "The idiom 'alive and kicking' means healthy and active."
},
{ // 5
  question: "Fill in the blanks with the most appropriate words. <br><br>These trousers cost me ...............",
  answers: ["an arm and a leg", "an eye and an ear", "throat and neck", "tongue and lips"],
  correct: "an arm and a leg",
  description: "The phrase 'cost an arm and a leg' means very expensive."
},
{ // 6
  question: "Fill in the blanks with the most appropriate words. <br><br>An ....... critic has no experience in the subject but he is ready to give plenty of advice.",
  answers: ["ambitious", "armchair", "egotist", "amateur"],
  correct: "armchair",
  description: "An 'armchair critic' is someone who judges without having practical experience."
},
{ // 7
  question: "Fill in the blanks with the most appropriate words. <br><br>All the stuff in his room were at ....... after the death of his wife.",
  answers: ["threes and fours", "fours and fives", "fives and sixes", "sixes and sevens"],
  correct: "sixes and sevens",
  description: "The phrase 'at sixes and sevens' means in a state of confusion or disorder."
},
{ // 8
  question: "Fill in the blanks with the most appropriate words. <br><br>He fell asleep at the ........ and met with an accident.",
  answers: ["steering", "bonnet", "hood", "wheels"],
  correct: "steering",
  description: "The correct phrase is 'asleep at the steering wheel', meaning the driver dozed off while driving."
},
{ // 9
  question: "Fill in the blanks with the most appropriate words. <br><br>Your first day as a manager is going to be a real .......... of fire.",
  answers: ["baptism", "stunt", "crucifixion", "test"],
  correct: "baptism",
  description: "The idiom 'baptism of fire' means a difficult new experience that tests someone's abilities."
},
{ // 10
  question: "Fill in the blanks with the most appropriate words. <br><br>The community decided to .......... him because he refused to conform to their standards.",
  answers: ["blackmail", "blackball", "blackout", "blackburn"],
  correct: "blackball",
  description: "To 'blackball' someone means to exclude or ostracize them socially or professionally."
},

{ // 11
  question: "Fill in the blanks with appropriate words.<br><br> ____ I to live without music, I would die.",
  answers: ["Should", "Would", "Was", "Were"],
  correct: "Should",
  description: "Conditional structure uses 'Should I...' for 'If I were to...'."
},
{ // 12
  question: "Fill in the blanks with appropriate words.<br><br> Indians ____ on their rich culture.",
  answers: ["pride", "are proud", "take pride", "pride themselves"],
  correct: "take pride",
  description: "'Take pride in' is the correct idiomatic expression."
},
{ // 13
  question: "Fill in the blanks with appropriate words.<br><br> The whole syllabus will not be covered ____ additional classes are not provided.",
  answers: ["though", "if", "after", "unless"],
  correct: "unless",
  description: "'Unless' indicates a condition for the syllabus to be covered."
},
{ // 14
  question: "Fill in the blanks with appropriate words.<br><br> Doctors try to ____ patients.",
  answers: ["heel", "heal", "hill", "hale"],
  correct: "heal",
  description: "'Heal' means to cure or make well."
},
{ // 15
  question: "Fill in the blanks with appropriate words.<br><br> As your eyesight is weak, you ____ use spectacles.",
  answers: ["could", "should", "ought to", "must"],
  correct: "should",
  description: "'Should' indicates advice or recommendation."
},

{ // 1
  question: "Choose the right option.<br><br> My watch is better than _____.",
  answers: ["you", "your", "yours", "yourself"],
  correct: "yours",
  description: "Possessive pronoun 'yours' is correct to compare ownership."
},
{ // 2
  question: "Choose the right option.<br><br> The _____ of Nepal is triangular.",
  answers: ["colour", "colours", "colourful", "colouring"],
  correct: "colour",
  description: "Singular noun 'colour' is correct here."
},
{ // 3
  question: "Choose the right option.<br><br> One should keep _____ word.",
  answers: ["his", "her", "his or her", "None of the above"],
  correct: "his or her",
  description: "To remain gender-neutral, 'his or her' is correct."
},
{ // 4
  question: "Choose the right option.<br><br> They are my _____.",
  answers: ["sister-in-law", "sisters-in-law", "sister-in-laws", "sisters-in-laws"],
  correct: "sisters-in-law",
  description: "Plural of 'sister-in-law' is 'sisters-in-law'."
},
{ // 5
  question: "Choose the right option.<br><br> _____ of the work has been done.",
  answers: ["Two-three", "Two-threes", "Two-third", "Two-thirds"],
  correct: "Two-thirds",
  description: "Fraction requires hyphenated plural form: 'Two-thirds'."
},
{ // 6
  question: "Choose the right option.<br><br> Tanushree is senior _____.",
  answers: ["than I", "than me", "to me", "to I"],
  correct: "to me",
  description: "Correct idiom: 'senior to someone'."
},
{ // 7
  question: "Choose the right option.<br><br> I have seen ______ basketball player.",
  answers: ["an American black tall", "a black tall American", "a tall black American", "None of the above"],
  correct: "a tall black American",
  description: "Correct adjective order: size + color + nationality."
},
{ // 8
  question: "Choose the right option.<br><br> Let ______ try once more.",
  answers: ["they", "them", "their", "theirs"],
  correct: "them",
  description: "'Let' is followed by object pronoun 'them'."
},
{ // 9
  question: "Choose the right option.<br><br> We can select a coordinator ______ we want.",
  answers: ["whichever", "whoever", "whomever", "None of the above"],
  correct: "whichever",
  description: "We use 'whichever' for choice among options."
},
{ // 10
  question: "Choose the right option.<br><br> All were attentive but ______.",
  answers: ["he", "him", "his", "himself"],
  correct: "he",
  description: "Subject pronoun 'he' is correct after 'but'."
},
{ // 11
  question: "Choose the right option.<br><br> This is the first time ______ he has delivered a speech on stage.",
  answers: ["when", "which", "that", "since"],
  correct: "that",
  description: "Correct relative pronoun in 'first time that...'."
},
{ // 12
  question: "Choose the right option.<br><br> Each of the girls beautified ______ before the party.",
  answers: ["herself", "themselves", "itself", "oneself"],
  correct: "herself",
  description: "Singular 'each' takes singular reflexive pronoun 'herself'."
},
{ // 13
  question: "Choose the right option.<br><br> She has told me something ______ is very important.",
  answers: ["what", "which", "that", "it"],
  correct: "which",
  description: "'Which' is used to introduce a relative clause describing 'something'."
},
{ // 14
  question: "Choose the right option.<br><br> Who is the man ______ has won the lottery?",
  answers: ["who", "whom", "which", "that"],
  correct: "who",
  description: "Subject relative pronoun 'who' is correct here."
},
{ // 15
  question: "Choose the right option.<br><br> It is ______ who is talking to you.",
  answers: ["I", "me", "mine", "myself"],
  correct: "I",
  description: "Subject pronoun 'I' is correct after 'It is'."
},


{ // 16
  question: "Choose the right meaning:<br><br>Jump on the bandwagon",
  answers: ["To oppose something", "To support something trendy", "To hesitate in making decisions", "To start a new project"],
  correct: "To support something trendy",
  description: "Jump on the bandwagon = support something fashionable or popular."
},
{ // 17
  question: "Choose the right meaning:<br><br>A blessing in disguise",
  answers: ["A problem that becomes worse", "Something bad that turns out to be good", "A fortunate event", "A hidden danger"],
  correct: "Something bad that turns out to be good",
  description: "Blessing in disguise = something that seems bad initially but has a positive outcome."
},
{ // 18
  question: "Choose the right meaning:<br><br>To bury the hatchet",
  answers: ["To solve a crime", "To hide something valuable", "To make peace", "To confront someone"],
  correct: "To make peace",
  description: "Bury the hatchet = end a quarrel and reconcile."
},
]

const spellingerror = [
  
]