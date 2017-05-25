angular 
	.module("MusicApp") // referencing the app thats created in the app-module.js
	.controller("MusicCtrl", MusicCtrl); // creates the controller

MusicCtrl.$inject = ["AppSvc", "BetaSvc"]; // this is the place where we tell the controller that it relies on the service! 
										// we added the second service here - BetaSvc - as a string

function MusicCtrl(AppSvc, BetaSvc) { //this is the code in the controller - here we've also include the services being used
	var self = this; // shuld always be here and first 
	self.about = AppSvc.about;
	self.music = AppSvc.music;
	self.aboutBeta = BetaSvc.about;
};