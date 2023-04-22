
function addAccount() {
    user = {
        accountnumber: acnum.value,
        username: uname.value,
        password: pass.value,
        place: pname.value,
        country: cname.value,
        Branch:bname.value
    }
    if (acnum.value in localStorage) {
        alert("user already exist")
    }

    else  {
        localStorage.setItem(acnum.value, JSON.stringify(user))
        alert("user added successfully")
        window.location = "index.html"
    }
}

function login() {

    a1 = acnum1.value
    p1 = pass1.value
    if (a1 in localStorage) {
        user1 = JSON.parse(localStorage.getItem(a1))
        if (p1 == user1.password) {
            window.location = "home.html"
            alert("login successful")

        }
        else {
            alert("password wrong")
        }
    }
    else {
        alert("no account found")
        window.location = "signup1.html"
    }
    
    

}





