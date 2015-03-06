/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var user = require("./user/");

var vasya = new user.User("Vasya");
var petya = new user.User("Petya");


vasya.hello(petya);
petya.hello(vasya);

console.log(1);


console.log(2);
