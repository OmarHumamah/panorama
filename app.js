/* alert("Welcom to Panorama, we glad you are hear.")

var age = prompt ("Are you +18?" + '\xa0\xa0\xa0' + "type your age.")

console.log(age)
while((age) <= 18 ){
var age = prompt ("Are you +18? type your age.")
}

var answer = prompt("Do you like photograph.")

if (answer == "yes") { alert("Then you are the rghit place.") }

else if (answer == "no") { alert("You will like it here.") }

else { alert("Try to discoer our page.") }

console.log(answer)
*/

var exi = prompt("How excited you are from 1 - 10?" )
var num = parseInt(exi, 3);
console.log(num)
for (var i=0; i<num ;i++){
document.getElementById('star-'+i).style.display='block';
}

document.write("Visit us again Soon!")