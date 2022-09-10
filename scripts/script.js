function getClicked(event) {
    let item = event.target.innerText
    document.getElementById('user').innerHTML = item
}



function handleValidation(event) {      // this is a validation function
    event.preventDefault()
    let username = document.getElementById('name').value
    let email = document.getElementById('email').value
   let password = document.getElementById('password').value 
    let phone = document.getElementById('phone').value

    console.log(username.length, "username")

    if (username === '') {
        alert("Please enter a username")
        return false
    }
    else if (email === '') {
        alert("Please enter a email")
        return false
    }
    else if (password === '') {
        alert("Please enter a password")
        return false
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters")
        return false
    }
    else if (phone === '') {
        alert("Please enter a phone number")
        return false
    }

    else if (phone.length < 10 && phone.length > 10) {
        alert("mobile number must be  10 characters")
    }
    else {
        alert("Form submitted successfully")
        return true
    }
}


function onMouse(){
    console.log("hovereed")
}