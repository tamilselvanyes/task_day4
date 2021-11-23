/* Question 
How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" }; */
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1"};
var equal =true;
// comparing the length of the keys in the JSON
if(Object.keys(obj1).length==Object.keys(obj2).length){
    //Taking the key in object 2 and comparing the value of the same key in the object 2
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            equal=false;
            break;
        }
    }
}
else {
    equal=false;
}
console.log("JSON objects are equal....."+equal);
