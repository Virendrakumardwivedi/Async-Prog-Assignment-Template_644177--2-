let singdata=JSON.parse(localStorage.getItem("userCreds"))||[]


 function data(e, p, n, nu){
    this.email=e;
    this.password=p;
    this.name=n;
    this.number=nu;
}


function signupfun(e){
    e.preventDefault();

    let form = document.getElementById("sin")

    let email = form.email.value;
    let password = form.pass.value;
    let name = form.user.value;
    let number = form.num.value;

    let p1 = new data (email,password,name,number)
    singdata.push(p1)

    localStorage.setItem("userCreds",JSON.stringify(singdata))
    
}

