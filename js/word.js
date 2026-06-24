/***********************************************************************
Much of the contents of this .js file should be handled by an API layer in a
"real world" setting. This would prevent users from using the dev tools to dig
in and see the dictionary as well as the selected word. For our educational
purposes, this file will suffice.
***********************************************************************/

const hashString = (string) => {
	/* Hashing function that returns a number based on a string input. */
    
    let hash = 0;
    // For each character in the input string...
	for (const char of string) {
        // ...use bitwise operation (<<) to shift the current hash value left by 5 (taking the binary of the input and adding 5 zeros to it).
        // Then subtract the current value of the hash and add in the character code value.
		hash = (hash << 5) - hash + char.charCodeAt(0);

        // Then use the "|=" bitwise operator to ensure that the produced number is a 32bit int.
		hash |= 0;
	}
    
    // return the absolute value of our hashed number (if the number is negative, flip it to postive)
	return Math.abs(hash);
};

/*A large list of 5 letter words was pulled together and pre-shuffled.*/
//prettier-ignore
const dictionary = [
    "bogie", "opery", "renew", "draws", "tacky", "chack", "sheep", "heaty", "merge", "apart", "zonal", "pharm", "epoch", "while", "regex", "serum", "below", "ravin", "smash",
    "kicky", "mouth", "jiffy", "grads", "elogy", "lamed", "blown", "vapor", "runty", "marsh", "spoon", "slosh", "clonk", "table", "state", "runed", "choir", "shred", "convo",
    "flake", "scray", "acute", "mower", "skate", "child", "derpy", "stone", "swath", "whale", "music", "undue", "trial", "visor", "hoard", "giver", "greed", "swiss", "album",
    "cough", "bride", "trunk", "loved", "yeast", "gassy", "await", "bland", "cared", "feign", "leave", "stock", "annoy", "toast", "weary", "wheat", "lotus", "quirk", "brook",
    "vouch", "geese", "fence", "sweet", "river", "share", "death", "smart", "smith", "agree", "giant", "pound", "maker", "super", "boost", "peace", "alter", "every", "carry",
    "knife", "adult", "major", "drive", "sharp", "ratio", "early", "front", "storm", "group", "place", "wound", "worst", "draft", "label", "risky", "raise", "blind", "laser",
    "voice", "store", "since", "bring", "shoot", "being", "elite", "cycle", "value", "prime", "drift", "frame", "focus", "power", "rural", "there", "doubt", "cloud", "motor",
    "curve", "chair", "above", "cover", "track", "trust", "layer", "craft", "chart", "might", "robot", "ocean", "spent", "third", "where", "large", "night", "still", "theme",
    "upper", "anger", "other", "youth", "south", "error", "awake", "teeth", "sense", "happy", "taste", "fault", "plate", "tight", "watch", "harsh", "earth", "apply", "input",
    "allow", "shock", "write", "grade", "score", "cable", "serve", "fixed", "hence", "ahead", "those", "board", "shirt", "quite", "video", "often", "chain", "reach", "party",
    "press", "image", "depth", "steel", "fruit", "cream", "later", "cloth", "order", "knock", "skill", "dozen", "shift", "grass", "enemy", "forth", "radio", "china", "first",
    "glass", "brown", "grace", "badly", "thing", "local", "begun", "sugar", "judge", "urban", "argue", "known", "woman", "would", "elect", "empty", "prove", "seven", "house",
    "human", "scope", "start", "media", "among", "trade", "union", "phone", "worth", "refer", "eight", "title", "prior", "index", "doing", "organ", "short", "basis", "limit",
    "cause", "paper", "march", "shall", "trend", "extra", "visit", "throw", "quiet", "these", "pitch", "exact", "plant", "point", "coast", "count", "whole", "drove", "piece",
    "swear", "joint", "after", "virus", "women", "drama", "total", "young", "drink", "hotel", "cross", "modem", "fully", "suite", "delay", "kenny", "light", "about", "valid",
    "lunch", "aside", "event", "logic", "water", "vital", "basic", "fight", "honey", "quick", "queen", "worry", "blood", "issue", "tower", "scale", "scene", "adopt", "steam",
    "juice", "white", "spend", "ready", "began", "heart", "fatal", "usage", "under", "fluid", "chest", "pilot", "admit", "abuse", "never", "meant", "found", "think", "right",
    "route", "grand", "ideal", "panel", "minor", "chase", "loyal", "horse", "sport", "range", "beach", "speed", "black", "cheap", "avoid", "floor", "debut", "flash", "gross",
    "thick", "model", "wrong", "split", "space", "final", "blame", "crash", "stick", "noted", "build", "dance", "court", "offer", "again", "sight", "great", "learn", "birth",
    "price", "worse", "begin", "force", "crime", "glove", "moral", "coach", "today", "treat", "mayor", "match", "bench", "breed", "until", "three", "award", "block", "plane",
    "prize", "level", "metal", "could", "print", "maybe", "mount", "array", "legal", "honor", "realm", "favor", "speak", "agent", "apple", "tough", "magic", "shown", "guide",
    "keeps", "money", "fresh", "month", "waste", "crown", "sheet", "wrote", "mouse", "break", "equal", "lower", "smile", "nurse", "lucky", "eager", "chief", "movie", "topic",
    "royal", "rough", "stage", "crowd", "dress", "staff", "story", "taken", "broad", "dying", "sleep", "twice", "inner", "enter", "brave", "small", "upset", "meter", "built",
    "whose", "exist", "check", "sound", "occur", "style", "grown", "heavy", "smoke", "north", "photo", "pride", "paint", "green", "brief", "ought", "labor", "bread", "rapid",
    "feast", "noise", "micro", "which", "shape", "world", "loose", "unity", "round", "enjoy", "entry", "asset", "novel", "train", "arise", "truth", "fleet", "given", "teach",
    "phase", "dream", "stand", "brain", "usual", "funny", "actor", "aware", "adapt", "touch", "catch",
];

// Get today's date. Using the date allows for a reliable, consistent value from day-to-day.
// Many computing systems use "UTC Time" to ensure consistant behavior working with dates. In this case, 
// we are okay with relying on the user's timezone and the word should change at midnight.
const today = new Date();

// Create a string using the date information.
const todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}. The ${today.getDay()} day of the week.`;

// Hash the date string and use modulus to create an index that is in range of the dictionary array.
// "in range" meaning that we are avoiding the "Index out of range" exception that would happen if we
// ended up with a number that is larger than the array itself.
const index = hashString(todayString) % dictionary.length;
const todayWord = dictionary[index];

/*
WORD SELECTION PROCESS:
- Use random-words-api to pull down 20 words
- Manually remove words that are a little too "crazy"
- add/combine the arrays 

    // const url = 'https://random-words-api.kushcreates.com/api?language=en&category=wordle&length=5&type=lowercase&words=20'; // Didn't care much for the results from this API
    const url = 'https://random-word-api.herokuapp.com/word?length=5&number=20&diff=1&lang=en';
    const words = fetch(url)
        .then(response => response.json())
        .then(data => {
            const words = [];

            data.forEach(wordList => {
                words.push(wordList);
            });

            // print an array to the console
            console.log(`["${words.join('", "')}"]`);
        })
*/
