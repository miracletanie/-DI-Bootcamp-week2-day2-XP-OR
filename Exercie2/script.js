let verbe = prompt("What is your verbe?");

verbe = verbe.toLowerCase();

if (verbe.length >= 3 && verbe.endsWith("ing") == false) {
    console.log(`${verbe}ing`)
}else if (verbe.length >= 3 && verbe.endsWith("ing") == true ){
    console.log(`${verbe}ly`)
}else{
    console.log(`${verbe}`)
}