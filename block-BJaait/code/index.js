let root=document.querySelector('ul');
let form=document.querySelector('form');
let lists=document.getElementsByTagName('div');


function createList(e){

    let listBox=document.createElement('div');
    listBox.setAttribute('draggable',true);
    let li=document.createElement('li');
    li.innerText=e.target.firstElementChild.value
    listBox.append(li);
    root.append(listBox);
    dragAndDrop(lists,e);
    
}


function handleSubmit(e){
    e.preventDefault();
    createList(e)
    e.target.firstElementChild.value=""
}


form.addEventListener('submit',handleSubmit);


function dragAndDrop(lists,e){
    console.log(e.target);
    let dragover="";
    let draglast="";
    for(list of lists){
        console.log(list.innerText);
        list.addEventListener('dragstart',(e)=>{
            console.log('dragStart has been triggered',e.target.innerText);
           
        });
      
        list.addEventListener('dragover',(e)=>{
            console.log('dragOver has been triggered',e.target.innerText);
            e.preventDefault();
            dragover=e.target.innerText;
        });
        list.addEventListener('dragend',(e)=>{
            console.log('dragEnd has been triggered',e.target.innerText);
            e.target.innerText=draglast;
        });
        list.addEventListener('drop',(e)=>{
            console.log('drop has been triggered',e.target.innerText);
            draglast=e.target.innerText;
            e.target.firstElementChild.innerText=dragover;


        });
       
      
    }

}

