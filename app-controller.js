angular 
	.module("App") // referencing the app thats created in the app-module.js
	.controller("AppCtrl", AppCtrl); // note this doesnt use the array syntax [] found in the app module, syntax is "Name", function with code

AppCtrl.$inject = [];

function AppCtrl() { //this function has all the controller code in it
	var self = this; //this should be the first line in the function always, prevents possibility of error being introduced by other js app
						// this is taking the value of the keyword this, stores it in a new variable called self
						// this represents a specific object, in js it has a unique flexibility that allows an outside program to change it,
						// we want to prevent this from happening, defining the variable self in this way prevents it by creating self
						// so this statement  is a preventative measure!

	self.pages = [
	{id: 1, name: "Home"}, 
	{id: 2, name:"Contact"}, 
	{id: 3, name:"CV"}, 
	{id: 4, name:"Accomplishments"}]; //array comprised of objects
	

	self.about = "Copyright (c) Alex Cobb 2017 All Rights Reserved!";
	self.copyright = "Copyright (c)";
	self.author = "Alex Cobb";
	self.rights = "2017 All Rights Reserved";
	self.getCopyright = function() {
		return self.copyright + " " + self.author + " " + self.rights;
	}
	self.counter = 0;
	self.incCounter = function() { self.counter++; } // created self.counter, then created a function called incCounter that increments it
	self.addPage = function(page) {
			self.pages.push(page); // referencing control variable called page
	}

};