
const listDiv = document.querySelector('.list-items-div');
const inputText = document.querySelector('#foo');
const form = document.querySelector('form');
const submit = document.getElementById('foo-submit');





function createListItem(){

    let items = inputText.value;

    item = document.createElement('LI')
    item.innerHTML = items;



    if (inputText.value === ""){
        return;
    } else {
        listDiv.appendChild(item);
    }
    
    inputText.value === "";
    

    let deleteItem = document.createElement('p');
    let deleteItemTxt = document.createTextNode("Delete");
    deleteItem.className = "delete";
    deleteItem.appendChild(deleteItemTxt);
    item.appendChild(deleteItem);

    let close = document.querySelectorAll('.delete');

    for (i=0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    let completed = document.createElement('span')
    let completedTxt = document.createTextNode("Completed");
    completed.appendChild(completedTxt);
    completed.className = "completed";
    item.appendChild(completed);

    let isComplete = document.querySelectorAll('.completed');
    for (i=0; i < isComplete.length; i++){
        let completedClassName = 'isCompleted';

        isComplete[i].onclick = function(){
            let parent = this.parentElement;
            let completedEl = parent.querySelector('.isCompleted');
            if(completedEl) {
                completedEl.remove();
            } else {
                let completeTask = document.createElement('div');
                completeTask.classList.add("isCompleted");
                this.parentElement.appendChild(completeTask)
            }
        }  
    }



    console.log(item);
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    createListItem();
    form.reset();
})

document.addEventListener('keyup', event =>{
    if (event.keyCode === 13){
        createListItem();
    }
})
