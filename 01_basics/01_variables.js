const accountId = 4455 
let accountName = "deepu"
var accountEmail = "deepu@example.com"
/* Prefer not to use var because
of issue in block scope and functional scope */


accountCity = "Mumbai"

//accountId = 4 //not allowed
accountName = "shetty"

accountEmail = "deepa@example.com"

console.log(accountId);

console.table([accountId,accountName,accountEmail]);