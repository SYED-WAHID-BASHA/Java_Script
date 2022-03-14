// let btn_click=document.querySelector('button');
// btn_click.addEventListener('click',Addtodos);
// let todo_list=document.querySelector('.todos');
// var count=0;

// function Addtodos(){

    
//     let input_text=document.querySelector('input').value;
//     document.querySelector('input').value=" ";

//     let para=document.createElement('p');
//     para.innerHTML=input_text;
//     para.setAttribute('key',count);
//     count++;
//     todo_list.appendChild(para);

//     para.addEventListener('click',para.remove);

// }


async function  get_data(){
    try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
    } catch(error){
        console.log(error);
    }
}

async function get_user() {
    let user = await get_data();
    let completed ='';
    let pending = '';
    user.forEach(element => {
        if (element.completed == true) {
            completed += `<li> ${element.title}`
        } else {
            pending += `<li> ${element.title}`
        }
    });

    let comp_btn = document.querySelector('#completed_btn');
    comp_btn.addEventListener('click', compTask);

    let pend_btn = document.querySelector('#pending_btn');
    pend_btn.addEventListener('click', pendTask);

    function compTask() {
        document.querySelector('.todos')
        .innerHTML=completed;
    }

    function pendTask() {
        document.querySelector('.todos')
        .innerHTML=pending;
    }
}

get_user();
