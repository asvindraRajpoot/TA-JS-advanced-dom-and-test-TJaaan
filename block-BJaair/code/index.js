let form=document.querySelector('form');
let root=document.querySelector('.notice-board');



function createCard(event){
    let article=document.createElement('article');
    let a=document.createElement('a');
    a.addEventListener('click',(event)=>{
        event.target.setAttribute('contentEditable',true);
    })
    a.innerText=event.target.firstElementChild.value;
    let p=document.createElement('p');
   // p.setAttribute('contentEditable',true);
    p.addEventListener('click',(event)=>{
        event.target.setAttribute('contentEditable',true);
    })
    p.innerText=event.target.firstElementChild.nextElementSibling.value
    article.append(a,p);
    root.append(article);
    
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.firstElementChild.value,event.target.firstElementChild.nextElementSibling.value);
    createCard(event); 
    event.target.firstElementChild.value="";
    event.target.firstElementChild.nextElementSibling.value="";
})

