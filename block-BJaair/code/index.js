let form=document.querySelector('form');
let root=document.querySelector('.notice-board');

let cardsData=JSON.parse(localStorage.getItem('cards'))||[];



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let title =event.target.firstElementChild.value;
    let  category =event.target.firstElementChild.nextElementSibling.value;
    cardsData.push({title,category});
    localStorage.setItem('cards',JSON.stringify(cardsData));
    createCard(cardsData,root); 
    event.target.firstElementChild.value="";
    event.target.firstElementChild.nextElementSibling.value="";
})

function handleEdit(event,info,id,label){
    console.log('handle edit')
    let elm=event.target;
    let input=document.createElement('input');
    input.value=info;
    input.addEventListener('keyup',(e)=>{
        if(e.keyCode===13){
            let updatedValue=e.target.value;
            cardsData[id][label]=updatedValue;
            createCard(cardsData,root);
            localStorage.setItem('cards',JSON.stringify(cardsData));
        }
    })
    input.addEventListener('blur',(e)=>{
        let updatedValue=e.target.value;
        cardsData[id][label]=updatedValue;
        createCard(cardsData,root);
        localStorage.setItem('cards',JSON.stringify(cardsData));
    })
    let parent=event.target.parentElement;
    parent.replaceChild(input,elm);
}



function createCard(data=cardsData,root=root){
    root.innerHTML="";
    let fragment= new DocumentFragment();
    data.forEach((cardsInfo,index)=>{
        let article=document.createElement('article');
        let a=document.createElement('a');
        a.addEventListener('dblclick',(event)=>{
            handleEdit(event,cardsInfo.category,index,'category');
        })
        a.innerText=cardsInfo.category;
        let p=document.createElement('p');
        p.addEventListener('dblclick',(event)=>{
            handleEdit(event,cardsInfo.title,index,'title')
        })
        p.innerText=cardsInfo.title;
        article.append(a,p);
        fragment.appendChild(article);


    });
    root.append(fragment);

 
    
}


createCard(cardsData,root);
