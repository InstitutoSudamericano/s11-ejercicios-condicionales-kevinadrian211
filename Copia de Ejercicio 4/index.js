let firstname;
let subject;
let like;
let message;

firstname="Kevin Naula"
subject="Metodología"
like=true
message="Hola mi nombre es "+firstname+" de la matería de "+subject;

if(like=true){
    message+=" Y esta materia me gusta";
}
else{
    message+=" Y esta materia no me gusta.";
}

alert(message);