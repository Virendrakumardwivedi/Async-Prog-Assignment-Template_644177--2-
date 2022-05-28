

let alldata = JSON.parse(localStorage.getItem("userCreds"))

function data(e, p,){
    this.email=e;
    this.password=p;
}


function logfun(e){
    e.preventDefault();

    let form= document.getElementById("log")

    let email = form.email.value;
    let password = form.pass.value;

    for(let i=0; i<alldata.length; i++){
        console.log(alldata[i])

        if(alldata[i].email == email && alldata[i].password==password){
            alert("Login Success")
            window.location.href="index.html";
            break;
        }
        else{
            alert("invalid Credentials")
            console.log("invalid Credentials");

        }
    }
    
}

