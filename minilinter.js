let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
console.log(`The Story has ${storyWords.length} words`);

const betterWords = storyWords.filter(word=> !unnecessaryWords.includes(word));

let reallyCount= 0;
let veryCount= 0;
let basicallyCount= 0;

for (let i = 0;  i<betterWords.length; i++) {

    if (betterWords[i] === overusedWords[0]) {
    reallyCount ++;
    }
    else if (betterWords[i] === overusedWords[1]) {
    veryCount++;
    }
    else if (betterWords[i] === overusedWords[2]) {
    basicallyCount++;
    }
}

console.log(`Number of times really is used is : ${reallyCount}`);

console.log(`Number of times very is used is : ${veryCount}`);

console.log(`Number of times basically is used is : ${basicallyCount}`);

let overusedCount = function() {
let total = 0;
storyWords.filter(function(word){
  if (word === overusedWords[0]){
    total++;
  }else if (word === overusedWords[1]){
    total ++
  }else if (word === overusedWords[2]){
    total ++
  }
})
  return total;
};
console.log(`The total number of overused words is: ${overusedCount()}`);

let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

console.log(`The number of sentences is :${sentences}`);

console.log(betterWords.join(' '));
