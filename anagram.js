let anagrams = [];

let genAnagrams = (word, anagram = '') => {
    
    
    if(!word){
        
        
        
       anagrams.push(anagram);
        
        
        
       }
    
    for(let i = 0; i < word.length; i++){
        
        
        
        
        
        genAnagrams(word.slice(0,i) + word.slice(i + 1), anagram);
        
        
        
        
    }
    
}


genAnagrams('ABC');

console.log(anagrams);





