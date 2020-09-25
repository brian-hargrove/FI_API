let urlDrivers = 'http://ergast.com/api/f1/drivers.json';
let urlCircuits = 'http://ergast.com/api/f1/circuits.json';

let nationList = document.querySelector('ul');
// //Search Form
// const searchTerm = document.querySelector('.search');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

// // //Results Navigation
// // const nextBtn = document.querySelector('.next');
// // const previousBtn = document.querySelector('.prev');
// // const nav = document.querySelector('nav');

// // //Results section
// const section = document.querySelector('section');

// // nav.style.display = 'none'; // will hide the next and previous buttons upon starting page before results are shown

// // let pageNumber = 0;
// // let displayNav = false;

// searchForm.addEventListener('submit', fetchResults); 
// nextBtn.addEventListener('click', nextPage); 
// previousBtn.addEventListener('click', previousPage);



// fetch(urlCircuits)
// .then(function(circuits){
//     return circuits.json();
// }).then(function(json){
//     console.log('circuit:',json);
// })

// function fetchResults(e) {
//     console.log(e);
//     e.preventDeFault();
//     url=urlDrivers + 
// }

fetch(urlDrivers)
.then(function(drivers){
    //console.log(drivers);
    return drivers.json();
}).then(function(json){
    console.log('driver:',json);
    let nations = json.MRData.DriverTable.Drivers;
    console.log('n:', nations);


for (n of nations) {
    let listItem = document.createElement('li');
    listItem.innerHTML='<p>'+ n.familyName + " " + n.givenName + "<br>" + n.nationality +'</p>';
    let link = document.createElement('a');
    nationList.appendChild(listItem);

    

}
});

// function displayDrivers(json){
//     let nations = json.MRData.DriverTable.Drivers;
//     console.log("nations:",nations)
    
    
// }