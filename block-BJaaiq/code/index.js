let container=document.querySelector('.container');

const nOfQuote=5;
let start=0;
if(start===0){
    alert(`The content of DOM is loaded`);
}

function addContent(){

    for(let i=1;i<=nOfQuote;i++){
        let article=document.createElement('article');
        let q=document.createElement('q');
        q.innerText=quotes[start].quoteText
        let cite=document.createElement('cite');
        cite.innerText= quotes[start].quoteAuthor;
        article.append(q,cite);
        container.append(article);
        start++;
     
    }
    
}
addContent();


 function scrollHandle(){

    if(window.scrollY+window.innerHeight>= window.document.documentElement.scrollHeight){
      addContent();
    }
 }

window.addEventListener('scroll',scrollHandle);