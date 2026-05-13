const api = 'https://api.github.com/users/akshaymarch7'

const user = fetch(api);  // fetch returns promise by default
//{data:undefined}
console.log(user);


//Attaching CallBack Function
user.then(function (data) {
    console.log(data);

});


//writing lean code
fetch(api)
    .then((data) => console.log("modern", data))