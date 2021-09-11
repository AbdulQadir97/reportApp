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
      LoginEmail: userLogEmail,
      LoginPass: userLogPass
    }
    let LoggedUser = retrieveLoginData.filter((v) => {
      if (v.useremail === loginData.LoginEmail && v.userpassword === loginData.LoginPass ) { 
        window.location = "./profile.html"
        return v
      }
    
    });
   
    console.log(LoggedUser)
    sessionStorage.setItem('LoggedUser', JSON.stringify(LoggedUser))
  
  
  }

  const createTeam = () => {

    let teamName = document.getElementById('teamName').value
    let teamCategory = document.getElementById('teamCategory').value
    let memberNames = [document.getElementById('memberName').value]
    let memberEmails = [document.getElementById('memberEmails').value]
    memberNames.toString().split(',');
    memberEmails.toString().split(',')
  
    let teamLeaderEmail = JSON.parse(sessionStorage.getItem('LoggedUser'))
    if(teamName === "" || teamCategory === "" || memberEmails === "")
    {
        alert("Please Fill the Fields First!")
    }
    else
    {
        let teamData = {teamLeader: teamLeaderEmail[0].useremail, name: teamName, category: teamCategory, membername: memberNames, memberemail: memberEmails, teamPass:teamLeaderEmail[0].useremail}
        let teamDataStored = localStorage.getItem('Teams')

    if (teamDataStored === null) {
       teamDataStored = [];
    }
    else {
      teamDataStored = JSON.parse(teamDataStored)
  
  
    }
    teamDataStored.push(teamData)
  
    localStorage.setItem('Teams', JSON.stringify(teamDataStored));
  }
}

  const showProfile = () => {

    let dataReceived = JSON.parse(sessionStorage.getItem('LoggedUser'))
    let teamDataReceived = JSON.parse(localStorage.getItem('Teams'))
    if(dataReceived[0].useremail === teamDataReceived[0].teamLeader)
    {
      for(let i = 0; i <= teamDataReceived.length; i++){
      let displayContent = document.getElementById('Owncontent');
      let mainContent = document.createElement('div')
      mainContent.classList.add('col-md-12', 'mt-2', 'profileRow')
      mainContent.innerHTML = `<h4> ${teamDataReceived[i].category} </h4> <b>members:</b> ${teamDataReceived[i].membername }`;
      displayContent.appendChild(mainContent)
      }
    }
  }
 
  
  const logout = ()=> {
    sessionStorage.clear('LoggedUser')
    window.location = "./login.html"
  }
  

  