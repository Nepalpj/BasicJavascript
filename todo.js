const titles = document.querySelector("#titles");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const container = document.querySelector(".container");



let tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    :[];
    
    showAlltask(); 

function showAlltask (){
    tasks.forEach((value,index)=>{
        const div = document.createElement("div")
        div.setAttribute("class","task")
        const innerDiv = document.createElement("div")
        div.append(innerDiv)
       const p = document.createElement("p")
       p.innerHTML = value.titles;
       innerDiv.append(p)

       const span = document.createElement("span");
       span.innerText = value.description;
       innerDiv.append(span);

      const Btn = document.createElement("button")
      Btn.setAttribute("class","btnDelete");
      Btn.innerText="-";
      
      Btn.addEventListener("click", ()=>{
        removeTasks();
        tasks.splice(index,1);
        console.log(tasks);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showAlltask();
      })

      div.append(Btn);
      container.append(div);
    });
}


function removeTasks() {
    tasks.forEach(()=>{
        const div =  document.querySelector(".task");
        div.remove();

    });
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        titles: titles.value,
        description: description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAlltask();
    (titles.value = ""), (description.value = "");
    console.log(tasks);
})



// settimeout and setinterval
// const myfunc = () =>{
//     console.log("hello world")
// }
// setTimeout(myfunc, 3000);

// const BtnRemove =document.querySelector("#remove")
// // const clearId = setTimeout(() => {
// //     console.log("hello world")
// // }, 3000);
// const clearId = setInterval(() => {
//     console.log("hello world")
// }, 3000);

// // BtnRemove.addEventListener("click",()=>{
// //     clearTimeout(clearId);
// // });
// BtnRemove.addEventListener("click",()=>{
//     clearInterval(clearId);
// });

const clearID = setInterval(()=>{
    const now = new Date()
    console.log(now.toLocaleTimeString())
    document.write(now.toLocaleTimeString())
}, 1000 );

setTimeout (()=>{
    clearInterval(clearID);
}, 5000);