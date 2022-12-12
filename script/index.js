let signup = document.getElementById("signup")

signup.addEventListener("click",()=>{
    userSignup();
})

const userSignup=async()=>{
    const url = "https://nice-red-fossa-gown.cyclic.app/signup"

    let email = document.getElementById("sign_email").value
    let password = document.getElementById("sign_password").value

    let payload = {
        email:email,
        password:password
    }
    console.log(payload)
    const res  = await fetch(url,{
        method:'POST',
        body:JSON.stringify(payload),
        headers:{
            'Content-type':"application/json"
        }
    })
        const data  = await res.json()
    console.log(data)
}
let login = document.getElementById("login")

login.addEventListener("click",()=>{
    userlogin();
})

const userlogin=async()=>{
    const url = "https://nice-red-fossa-gown.cyclic.app/login"

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let payload = {
        email:email,
        password:password
    }
    console.log(payload)
    const res  = await fetch(url,{
        method:'POST',
        body:JSON.stringify(payload),
        headers:{
            'Content-type':"application/json"
        }
    })
    const data  = await res.json()
    console.log(data.length)
    if(data.email!=""){

        localStorage.setItem("token",(data.token))
        alert("Login Success")
        location.href="./notes.html"
    }
    else{
        alert("Invalid Creadetial")
    }
}