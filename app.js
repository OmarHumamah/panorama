alert("Welcom to Panorama, we glad you are hear.")


var age = prompt ("Are you +18?" + '\xa0\xa0\xa0' + "type your age.") 



while( age < 18 ){
var age = prompt ("Are you +18? type your age.")

}




// /* var answer = prompt("Do you like photograph.")

// if (answer == "yes") { alert("Then you are the rghit place.") }

// else if (answer == "no") { alert("You will like it here.") }

// else { alert("Try to discoer our page.") }

// console.log(answer) */


var exi = prompt("How excited you are from 1 - 5?" )
var num = parseInt(exi, 6);

while(exi > 5){var exi = prompt("How excited you are from 1 - 5?" + '\xa0\xa0\xa0' + "Less than 5 please!" )
var num = parseInt(exi, 6);}

for (var i=1; i<=num ;i++){
document.getElementById('star'+i).style.display='inline';
}

document.write("Visit us again Soon!")

// var x = prompt("num")
// x = n

