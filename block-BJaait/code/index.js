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
    let start="";
    let end="";
    let index=0;
    console.log(e.target);
    for(let i=0;i<lists.length;i++){
        console.log(lists[i].innerText,i);
        lists[i].addEventListener('dragstart',(e)=>{
            // e.preventDefault();
            console.log('dragStart has been triggered',e.target.innerText);
           
          start=e.target.innerText;
          index=i;
         
           
        });
        lists[i].addEventListener('dragend',(e)=>{
            console.log('dragEnd has been triggered',e.target.innerText);
        });
        lists[i].addEventListener('dragover',(e)=>{
            e.preventDefault();
            console.log('dragOver has been triggered');
        });
        lists[i].addEventListener('dragenter',(e)=>{
            console.log('dragEnter has been triggered');
        });
        lists[i].addEventListener('dragleave',(e)=>{
            console.log('dragLeave has been triggered');
        });
        lists[i].addEventListener('drop',(e)=>{
            console.log('drop has been triggered',e.target.innerText);
            end=e.target.innerText;
            e.target.innerText=start;
            lists[index].firstElementChild.innerText=end;
            
           
        });
    }

}

