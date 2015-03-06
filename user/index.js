/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var lang = require("./lang");

function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    console.log(lang.hello + ", " + who.name);
};

exports.User = User;