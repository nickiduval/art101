/*
* Author: Nicki Duval
* Created: 26 April 2022
* License: Public Domain
*/

//scrambleUserName - a function that takes user input and sorts letters

function scrambleUserName() {
  var userName = window.prompt("Hi. What is your name?");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

document.writeln("Your fixed name is... ",
  scrambleUserName(), "</br>");
