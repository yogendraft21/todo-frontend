const getNotes = async()=>{
    const url = "https://nice-red-fossa-gown.cyclic.app/todo"
    const res  =await fetch(url,{
        headers:{
            'Content-type':'application/json',
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
            
    })
    const data = await res.json();
    display(data)
}
getNotes();

const display = (data)=>{
    let note = document.getElementById("note")
    data.forEach((el)=>{
        let div = document.createElement("div")
        let id = document.createElement("h3")
        id.innerText = el._id;
        let title = document.createElement("h3")
        title.innerText = el.taskname;
        let data  = document.createElement("p")
        data.innerText = el.status
        let tag = document.createElement("p")
        tag.innerText = el.tag;
        let h = document.createElement("hr")
        div.append(id,title,data,tag,h)
        note.append(div)
    })
}

const add  = document.getElementById("add")
add.addEventListener('click',()=>{
    addTodo();
})



const addTodo = async()=>{
    const url = "https://nice-red-fossa-gown.cyclic.app/create";

    const tname = document.getElementById("taskname").value
    const status = document.getElementById("status").value
    const tag = document.getElementById("tag").value
    const payload = {
        taskname:tname,
        status:status,
        tag:tag
    }
    const res = await fetch(url,{
        method:'POST',
        body : JSON.stringify(payload),
        headers:{
            'Content-type':'application/json',
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    alert("Created")
    const data = res.json();
    console.log(data)
}


const del = document.getElementById("del")
add.addEventListener('click',()=>{
    delTodo();
})
const delTodo = async()=>{
    // console.log("hello")
    const id = document.getElementById("todo_id").value;
    const url = `https://nice-red-fossa-gown.cyclic.app/delete/${id}`;
    try {
        const res = await fetch(url,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
    })
   
    const data = await res.json();
    alert("Deleted")
    console.log(data)
    } catch (error) {
        console.log("something wrong")
    }
    
}
const updateTodo = async()=>{
    // console.log("hello")
    const id = document.getElementById("todo_id").value;
    const url = `https://nice-red-fossa-gown.cyclic.app/edit/${id}`;

    const tname = document.getElementById("taskname").value
    const status = document.getElementById("status").value
    const tag = document.getElementById("tag").value
    const payload = {
        taskname:tname,
        status:status,
        tag:tag
    }
    try {
        const res = await fetch(url,{
            method:'PATCH',
            body:JSON.stringify(payload),
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
    })
   
    const data = await res.json();
    console.log(data)
    alert("Updated")
    } catch (error) {
        console.log("something wrong")
    }
    
}