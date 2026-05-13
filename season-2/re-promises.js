const api= 'https://api.github.com/users/akshaymarch7';

const data_from_api= fetch(api);

console.log(data_from_api);

data_from_api.then(function(data){  //attaching a call back function
    console.log(data);
});