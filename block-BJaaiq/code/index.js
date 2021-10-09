let container=document.querySelector('.container');

const nOfQuote=5;
let start=0;


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



 function scrollHandle(){

    if(window.scrollY+window.innerHeight>= window.document.documentElement.scrollHeight && start<quotes.length){
      addContent();
    }
 }

window.addEventListener('scroll',scrollHandle);
window.addEventListener('DOMContentLoaded',()=>{
    alert(`The content of DOM is loaded`);
    addContent();
})