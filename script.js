const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why was the math book sad? Because it had too many problems.",
    "Why don’t programmers like nature? It has too many bugs.",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the stadium get hot after the game? All of the fans left!",
    "Why did the cookie go to the doctor? Because it felt crummy!",
    "What do you call a fish wearing a bowtie? Sofishticated!",
    "Why did the man run around his bed? Because he was trying to catch up on his sleep!",
    "Why do cows have hooves instead of feet? Because they lactose!",
    "Why did the computer go to the doctor? Because it had a virus!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don’t oysters donate to charity? Because they are shellfish!",
    "What do you call a lazy kangaroo? A pouch potato!",
    "Why can’t you give Elsa a balloon? Because she will let it go!",
    "Why did the picture go to jail? Because it was framed!",
    "What do you call a pile of cats? A meowtain!",
    "How do you organize a space party? You planet!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why was the broom late? It swept in!",
    "Why do bees have sticky hair? Because they use honeycombs!",
    "What did the zero say to the eight? Nice belt!",
    "What do you call a dog magician? A labracadabrador!",
    "Why did the musician get kicked out of the band? He was too flat!",
    "How does a scientist freshen her breath? With experi-mints!",
    "Why did the computer keep freezing? It left its Windows open!",
    "What do you call an alligator in a vest? An investi-gator!",
    "Why did the man put his money in the blender? Because he wanted to make some liquid assets!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans!",
    "What do you call an elephant that doesn’t matter? An irrelephant!",
    "Why can’t you hear a pterodactyl go to the bathroom? Because the ‘P’ is silent!",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why was the computer cold? It left its Windows open!",
    "Why did the grape stop in the middle of the road? Because it ran out of juice!",
    "What did one hat say to the other? You stay here, I’ll go on ahead!",
    "Why do fish always know how much they weigh? Because they have their own scales!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don’t skeletons ever use cell phones? They don’t have the guts to call!",
    "Why did the bicycle fall asleep? It was two-tired!",
    "What do you call a can opener that doesn’t work? A can’t opener!",
    "Why did the man stare at the can of orange juice? Because it said 'concentrate'!",
    "What’s brown and sticky? A stick!",
    "How do you catch a squirrel? Climb a tree and act like a nut!"
];

// Example: To log a random joke to the console
let rand = jokes[Math.floor(Math.random() * jokes.length)];
console.log(rand)

document.getElementById('tarea').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action of a new line
        document.getElementById('button').click(); // Trigger the button click
    }
});

document.getElementById('button').addEventListener('click',function(){
    const input=document.getElementById('tarea').value;
     const index=parseInt(input)

     if (!isNaN(index) && index >= 0 && index < jokes.length) {
        // Display the corresponding joke
        alert(jokes[index]);  // You can change alert to any display method you prefer
    } else {
        alert("Please enter a valid number between 0 and " + (jokes.length - 1));
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, I will tell you a joke..";
    const target = document.getElementById("aname");
    
    // Setting the text after a short delay to allow the typing animation to play
    setTimeout(() => {
        target.textContent = text; // Add the text to the div
    }, 50); // Short delay before showing the text
});

document.getElementById('button2').addEventListener('click',function(){
    let index = Math.floor(Math.random() * jokes.length);

     if (!isNaN(index) && index >= 0 && index < jokes.length) {
        // Display the corresponding joke
        alert(jokes[index]);  // You can change alert to any display method you prefer
    } else {
        alert("Please enter a valid number between 0 and " + (jokes.length - 1));
    }
})

// Get a random index
let index = Math.floor(Math.random() * jokes.length);

// Use the index to get the corresponding joke
let randomJoke = jokes[index];

// Log the index and the joke to the console
console.log("Index:", index);
console.log("Joke:", randomJoke);
