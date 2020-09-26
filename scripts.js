let urlDrivers = 'http://ergast.com/api/f1/drivers.json';
let urlNations = 'http://ergast.com/api/f1/drivers.json';
// let urlCircuits = 'http://ergast.com/api/f1/circuits.json';

let nationList = document.querySelector('.results');
// let dropList = document.querySelector('#nation');
let dropdown = document.getElementById('national-dropdown');
dropdown.length = 0;

let defaultOption=document.createElement('option');
defaultOption.text = "Choose Nationality";

//dropdown.addEventListener(defaultOption);
//dropdown.selectedIndex=0;

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
    let listItem = document.createElement('p');
    listItem.innerHTML= n.familyName + " " + n.givenName + "<br>" + n.nationality;
    nationList.appendChild(listItem);
}


// let seen = {};
//     jQuery('.nationality').children().each(function(){
//         var txt=jQuery(this).attr('value');
//         if(seen[txt]){
//             jQuery(this).remove();
//         }else{
//             seen[txt]=true;
//         }
//     });    


for (m of nations) {
    let dropdownList = document.createElement('option');
    
    
        let x = document.getElementById('national-dropdown');
        console.log("x:",x);
        
        let listLength = x.length;
        for (var i=0;i<listLength;i++){
            for(var j=0;j<listLength;j++){
                if(x.options[i].value == x.options[j].value && i !=j){
                    x.remove(j);
                    listLength--;
                }
            }
        }

    dropdownList.innerHTML=m.nationality;
    dropdownList.value=m.nationality;
    dropdown.appendChild(dropdownList);
        console.log('75:', dropdownList);    

    let country=document.getElementById('national-dropdown');
   


    
    
}
});

