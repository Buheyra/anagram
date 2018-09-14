let anagrams = [];

let genAnagrams = (word, anagram = '') => {
    
    for(let i = 0; i < word.length; i++){
        anagram+= word[i];
        genAnagrams(word.slice(0,i) + word.slice(i + 1));
    }
    
}


genAnagrams('ABC');

console.log(anagrams);





