const dataRegister = () => {
  let userName = document.getElementById('RegUserName').value;
  let userEmail = document.getElementById('RegUserEmail').value;
  let userPassword = document.getElementById('RegUserPassword').value;
  if (userName === "" || userEmail === "" || userPassword === "") {
    alert("Please Fill the Fields First!")
  }
  else {
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
    if (v.useremail === loginData.LoginEmail && v.userpassword === loginData.LoginPass) {
      window.location = "./profile.html"
      return v
    }

  });

  sessionStorage.setItem('LoggedUser', JSON.stringify(LoggedUser))



}

const createTeam = () => {

  let teamName = document.getElementById('teamName').value
  let teamCategory = document.getElementById('teamCategory').value
  let teamLeaderData = JSON.parse(sessionStorage.getItem('LoggedUser'))
  if (teamName === "" || teamCategory === "") {
    alert("Please Fill the Fields First!")
  }
  else {
    let teamData = { teamLeader: teamLeaderData[0].username, name: teamName, category: teamCategory, teamPass: teamLeaderData[0].useremail }
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

  ownTeam()


}

const logout = () => {
  sessionStorage.clear('LoggedUser')
  window.location = "./login.html"
}

const ownTeam = () => {
  let loggedUser = JSON.parse(sessionStorage.getItem('LoggedUser'))
  let getTeamData = JSON.parse(localStorage.getItem('Teams'))
  for (const teamData of getTeamData) {

    if (loggedUser[0].username === teamData.teamLeader) {
      let displayContent = document.getElementById('Owncontent');
      let mainContent = document.createElement('div')
      mainContent.classList.add('col-md-12', 'mt-2', 'profileRow')
      mainContent.innerHTML = `<h4> ${teamData.category} </h4> <b>members:</b> ${teamData.teamLeader}`;
      displayContent.appendChild(mainContent)
    }
  }
}

