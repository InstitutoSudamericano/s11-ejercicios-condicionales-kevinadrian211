let firstname;
let age;
let isMarried;

firstname="Kevin";
age=20;
isMarried=false;

let message = "Hola minombre es "+firstname+" tengo"+age+" años";

if (isMarried==false){
    message+=" no estoy casado";
}
else{
    message+=" estoy casado";
}

if(age>=18){
    message+="mayor de edad";
}
else{
    message+="menor de edad";
}

alert(message);