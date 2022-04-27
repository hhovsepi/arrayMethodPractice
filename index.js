let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// isolate each word into an array by splitting at \s

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// how many words in our story?

let count = 0;
storyWords.forEach(word => {
  count++
});

// do any words contain a bad word?

storyWords = storyWords.filter(word => {
  if(word.includes(unnecessaryWord) == false) {
 return word;
  }
})

// do any words contain a misspelled word?

storyWords = storyWords.map(word => {
  if(word.match(misspelledWord) != null) {
    word = 'beautiful'
    return word
  }
  return word
})

// do any words contain a bad word?

let badWordIndex = storyWords.findIndex(word => {
  if (word.match(badWord) != null) {
    return word;
  }
})

// uh oh! a bad word in index 78, let's replace it!

storyWords[78] = storyWords[78].replace(storyWords[78], "really");

// how can we make the story simple? Let's check if the story has any words > 10 characters

let lengthCheck = storyWords.every(word => {
  if(word.length < 10) {
    return true
  }
})

// lets get rid of the words > 10 characters to make our story easy to read!

storyWords = storyWords.map(word => {
  if(word.length > 10) {
    word = word.replace(word, "stunning");
    return word;
  }
  return word;
})

//put it all back together, enjoy the story!
story = storyWords.join(" ");
console.log(story);
return story;
