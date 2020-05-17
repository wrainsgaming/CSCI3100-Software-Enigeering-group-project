var usernameinfo = ["admin", "chris"];

var passwordinfo =["admin","forever"]


function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    for(var i = 0; i < usernameinfo.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(username == usernameinfo[i] && password == passwordinfo[i]) {
            console.log(username + " is logged in!!!")
            window.location = 'http://localhost:5000';
            // stop the function if this is found to be true
            return
        }
    }
    console.log("incorrect username or password")
    setTimeout(function(){ alert("Username or password was wrong"); },100);
    //window.alert("Username or password was wrong");

}

function signInfo()
{
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    usernameinfo.push(username);
    passwordinfo.push(password);
    setTimeout(function(){ alert("successful sign up!"); },100);
    window.location = 'http://localhost:5000/login.html';
}


