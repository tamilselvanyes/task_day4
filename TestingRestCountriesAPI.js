var request = new XMLHttpRequest();
request.open('GET' ,  ' https://restcountries.com/v3.1/all'); //As the API in the question is not working have used the latest API
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    //Question 2  display all the country flags in console
    for(let i =0 ; i < data.length ; i++){
        console.log(data[i].flag); 
    }
    //Question 3 print all countries name, region, sub region and population
    for(let i =0 ; i < data.length ; i++){
        console.log(data[i].name.common +"   "+  data[i].region +"  "+  data[i].subregion +"   "+ data[i].population);
    }


}