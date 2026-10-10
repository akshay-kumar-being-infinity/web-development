var users = [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "jane.png"
    }
];

var id = 0;

function toggleUser(){
    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");

    id = (id + 1) % 2;

    userName.innerHTML = users[id].name;
    userGender.innerHTML = users[id].gender;
    userImage.src = users[id].image;
}