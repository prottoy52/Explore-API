const loadTodo =()=>{
    const url="https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTodo(data))
}


const displayTodo=(todos)=>{
    console.log(todos)

// {userId: 7, id: 127, title: 'voluptatem libero consectetur rerum ut', completed: true}
// completed : true
// id:127
// title: "voluptatem libero consectetur rerum ut"
// userId: 7
// [[Prototype]] :Object

//1. get the container
const todoContainer=document.getElementById("todo-container");
todoContainer.innerHTML='';

// 2. loop through todos
todos.forEach(todo => {
    console.log(todo)

    const todoCard=document.createElement('div')
    todoCard.innerHTML=`
    <div class="todo-Card">
    <p>${todo.completed==true? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`} </p>
   <h4>${todo.title}</h4>
    </div>
    `
    todoContainer.append(todoCard)
})
}

loadTodo();



