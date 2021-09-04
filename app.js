const dataRegister = () => {
    let userName = document.getElementById('RegUserName').value;
    let userEmail = document.getElementById('RegUserEmail').value;
    let userPassword = document.getElementById('RegUserPassword').value;
    if(userName === "" || userEmail === "" || userPassword === "")
    {
        alert("Please Fill the Fields First!")
    }
    else
    {
    let userData = { username: userName, useremail: userEmail, userpassword: userPassword }
    let storedData = localStorage.getItem('RegisterUsers')

    if (storedData === null) {
        storedData = [];
    }
    else {
        storedData = JSON.parse(storedData)
  
  
    }
    storedData.push(userData)
  
    localStorage.setItem('RegisterUsers', JSON.stringify(storedData));
    window.location = "./login.html"
}
}

const memberLogin = () => {

    let retrieveLoginData = JSON.parse(localStorage.getItem('RegisterUsers'))
    let userLogEmail = document.getElementById("LogUserEmail").value
    let userLogPass = document.getElementById("LogUserPassword").value;
    let loginData = {
      LoginName: userLogEmail,
      LoginPass: userLogPass
    }
    let LoggedUser = retrieveLoginData.filter((v) => {
      if (v.useremail === loginData.LoginName && v.userpassword === loginData.LoginPass ) { 
        window.location = "./profile.html"
        return v
      }
    
    });
   
    console.log(LoggedUser)
    sessionStorage.setItem('LoggedUser', JSON.stringify(LoggedUser))
  
  
  }

  const showProfile = () => {

    let dataReceived = JSON.parse(sessionStorage.getItem('LoggedUser'))
    let displayContent = document.getElementById('content');
    displayContent.innerHTML = `USER NAME: ${dataReceived[0].username} </br>  Email: ${dataReceived[0].useremail} </br>  USER PASSWORD: ${dataReceived[0].userpassword}`;
    console.log(dataReceived)
  
  
  }

  const logout = ()=> {
    sessionStorage.clear('LoggedUser')
    window.location = "./login.html"
  }
  

  