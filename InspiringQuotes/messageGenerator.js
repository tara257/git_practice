const math = require('mathjs');

let messageStorage = ["The internet is a great way to get on the net. — Bob Dole",
                    "If you take out the killings, Washington actually has a very low crime rate. — Marion Barry",
                    "I think that gay marriage is something that should be between a man and a woman. — Arnold Schwarzenegger",
                    "It's like an Alcatraz around my neck. — William The Refrigerator -Perry",
                    "Smoking kills. If you're killed, you've lost a very important part of your life. — Brooke Shields",
                    "Whenever I watch TV and see those poor starving kids all over the world, I can't help but cry. I mean, I'd love to be skinny like that, but not with all those flies and death and stuff. — Mariah Carey",
                    "I'm not going to have some reporters pawing through our papers. We are the president. — Hillary Clinton",
                    "That lowdown scoundrel deserves to be kicked to death by a jackass, and I'm just the one to do it. — A congressional candidate in Texas",
                    "I think that the film Clueless was very deep. I think it was deep in the way that it was very light. I think lightness has to come from a very deep place if it's true lightness. — Alicia Silverstone",
                    "Outside of the killings, DC has one of the lowest crime rates in the country. — Marion Barry",
                    "We didn't underestimate them. They were just a lot better than we thought. — Bobby Robson",
                    "It's time for the human race to enter the solar system. — Dan Quayle",
                    "I get to go to lots of overseas places, like Canada. — Britney Spears",
                    "Is this chicken or is this fish? I know it's tuna, but it says 'Chicken of the Sea.' — Jessica Simpson",
                    "So, where's the Cannes Film Festival being held this year? — Christina Aguilera",
                    "I’ve never really wanted to go to Japan. Simply because I don’t like eating fish. And I know that\’s very popular out there in Africa. — Britney Spears",
                    "I love California. I practically grew up in Phoenix. — Dan Quayle",
                    "Rarely is the question asked: Is our children learning? — George W. Bush",
                    "I think war is a dangerous place. — George W. Bush",
                    "I've now been in 57 states — I think one left to go. — Barack Obama"
]

console.log(messageStorage.length);

function randomNum(max){ //generates randomnumber
    return Math.floor(Math.random()* max);
    
}


function randomNumIndex(str){
    let words = str.split(/\s+/);
    let max = words.length -1;
    let rangeArray=[];

    let minRange = randomNum(max);
    let maxRange = randomNum(max);
    

    if( minRange > maxRange){
        [minRange, maxRange] = [maxRange, minRange]; //generated 2 numbers
    }
    //get the range in the string
    for (let i =minRange; i<=maxRange; i++){
        rangeArray.push(words[i]);
    }
    let sentence = rangeArray.join(" ");
    return sentence;
}



function GeneratedMessage(){
    
    let string1 = randomNumIndex(messageStorage[randomNum(19)]);
    let string2 = randomNumIndex(messageStorage[randomNum(19)]);
    let string3 = randomNumIndex(messageStorage[randomNum(19)]);
    let TheMessage = [string1, string2, string3].join(' ');
    return TheMessage;

}
console.log(GeneratedMessage());




