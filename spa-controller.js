angular 
	.module("SpaApp") // referencing the app thats created in the app-module.js
	.controller("SpaCtrl", SpaCtrl); // note this doesnt use the array syntax [] found in the app module, syntax is "Name", function with code

SpaCtrl.$inject = [];

function SpaCtrl() {
	var self = this; 
};