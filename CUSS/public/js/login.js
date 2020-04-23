var objPeople = [
    { // Object @ 0 index
        username: "admin",
        password: "admin"
    },
    { // Object @ 1 index
        username: "matt",
        password: "academy"
    },
    { // Object @ 2 index
        username: "chris",
        password: "forever"
    }

]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    for(var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(username == objPeople[i].username && password == objPeople[i].password) {
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

function signUpInfo()
{
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    Object.defineProperty(obj, "property3", {value : 'some value',
        writable : true,
        enumerable : true,
        configurable : true});
}
