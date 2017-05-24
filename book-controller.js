angular 
	.module("BookApp") // referencing the app thats created in the app-module.js
	.controller("BookCtrl", BookCtrl); // creates the controller

BookCtrl.$inject = [];

function BookCtrl() { //this is the code in the controller
	var self = this; 
	self.book = [
	{ Id: 1, Code: 'java', Description: 'Java Programming', ListPrice: '57.50'},
	{ Id: 2, Code: 'jsp', Description: 'Java Servlets and JSP', ListPrice: '57.50'},
	{ Id: 3, Code: 'mysql', Description: 'MySQL', ListPrice: '54.50'},
	{ Id: 4, Code: 'android', Description: 'Android Programming', ListPrice: '57.50'},
	{ Id: 5, Code: 'html5', Description: 'HTML5 and CSS3', ListPrice: '54.50'},
	{ Id: 6, Code: 'oracle', Description: 'Oracle and PL/SQL', ListPrice: '54.50'},
	{ Id: 7, Code: 'javascript', Description: 'JavaScript and jQuery', ListPrice: '54.50'}
];
};