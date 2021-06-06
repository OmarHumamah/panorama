function wellcomeAndAge (){

alert("Welcom to Panorama, we glad you are hear.")


var age = prompt ("Are you +18?" + '\xa0\xa0\xa0' + "type your age.") 



while( age < 18 ){
var age = prompt ("Are you +18? type your age.")


}
return wellcomeAndAge

}



function starExcite(){
var exi = prompt("How excited you are from 1 - 5?" )
var num = parseInt(exi, 6);

while(exi > 5){var exi = prompt("How excited you are from 1 - 5?" + '\xa0\xa0\xa0' + "Less than 5 please!" )
var num = parseInt(exi, 6);}

for (var i=1; i<=num ;i++){
document.getElementById('star'+i).style.display='inline';
}

  return starExcite
}


wellcomeAndAge();
starExcite();


document.write("Visit us again Soon!")



