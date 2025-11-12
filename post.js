const loadpost = ()=> {
    const url="https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        //console.log(data)
        displayposts(data)
    })
}

// {
//     {userId: 10, id: 96, title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi', body: 'in non odio excepturi sint eum\nlabore voluptates v…aque rerum\nveniam non exercitationem delectus aut'}
// }

const displayposts=(posts)=>{
    //1.get the container and empty the container
    const postContainer=document.getElementById('post-container')
    postContainer.innerHTML=''

    posts.forEach(post=>{
        console.log(post)

        //2.create element
        const postCard=document.createElement('div')
        postCard.innerHTML=`
        <div class="post-Card">
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    </div>
        `
        //3.add to the container
        postContainer.append(postCard)
    })
}



// const displayposts=(posts)=>{
//     // console.log(displayposts)

//         //1.get the container

//     const postContainer=document.getElementById('post-container')
//     postContainer.innerHTML=''
//     console.log(postContainer)
//     for(let i=0;i<posts.length;i++){
//         console.log(posts[i].title)
//     }
//           //2.create html element

//      posts.forEach(post => {
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         console.log(li)

//         //3.add li into container
//         postContainer.appendChild(li);
//     });
// }
      







