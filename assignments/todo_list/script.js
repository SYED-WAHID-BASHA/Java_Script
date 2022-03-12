let btn_click=document.querySelector('button');
btn_click.addEventListener('click',Addtodos);
let todo_list=document.querySelector('.todos');
var count=0;

function Addtodos(){

    
    let input_text=document.querySelector('input').value;
    document.querySelector('input').value=" ";

    let para=document.createElement('p');
    para.innerHTML=input_text;
    para.setAttribute('key',count);
    count++;
    todo_list.appendChild(para);

    para.addEventListener('click',para.remove);

}
