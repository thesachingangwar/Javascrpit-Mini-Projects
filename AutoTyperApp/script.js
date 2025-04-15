const span = document.querySelector('span')

const wordList = ['Developer', 'Student', 'freelancer']
let characterIndex = 0;
wordIndex = 0;
let reverseType = false;
let skipUpdate = 0;

const intervalId = setInterval(() => {

    if (skipUpdate){
        skipUpdate--
        return 
    }

    if (characterIndex === wordList[wordIndex].length) {
        reverseType = true;
        
        
      
        
    } else {
        span.innerText = span.innerText + wordList[wordIndex][characterIndex];
        characterIndex++
        skipUpdate = 2;
        
    }

    if (reverseType === true) {
        span.innerText = span.innerText.slice(0, span.innerText.length - 1)
       
       

       
    }

    if (span.innerText.length === 0 && reverseType) {
        reverseType = false;
        characterIndex = 0;
        wordIndex++
    }
    if (wordIndex === wordList.length) {
        wordIndex = 0;
    }




}, 200)

