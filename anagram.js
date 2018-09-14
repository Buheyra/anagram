

let anagrams = [];





function genAnagrams(word, anagram=''){
    
    
    
    
    if(!word){
        
        
        
     
      anagrams.push(anagram);
        
        
        
        
    }
    for(let i = 0; i < word.length; i++){
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      genAnagrams( word.slice(0, i) + word.slice(i + 1), anagram + word[i] );
    }
    
    
    
}
genAnagrams('ABC');



console.log(anagrams);




