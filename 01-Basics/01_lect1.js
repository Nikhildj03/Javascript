console.log("Nikhil");

const accountId = 111222;
let accountName = "NikhilK";
var accountPassword = "abc";
let accountState = "Maharashtra";
let accountEmail = "nikhil@gmail.com";

// When the User wan to change his detail
accountName = "KK";
accountPassword = 123;
accountState = "Up";
accountEmail = "KK@gmail.com"

console.table  ( [ accountId , accountName , accountPassword, accountState , accountEmail ]);


/*
 Prefer not to use var
 because of issue in block scope and functional scope 
*/