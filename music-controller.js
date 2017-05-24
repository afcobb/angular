angular 
	.module("MusicApp") // referencing the app thats created in the app-module.js
	.controller("MusicCtrl", MusicCtrl); // creates the controller

MusicCtrl.$inject = [];

function MusicCtrl() { //this is the code in the controller
	var self = this; // shuld always be here and first 
	self.music = [ 
		{ artistName: "Can", albumTitle: "Future Days", genre: "Krautrock", pubYear: 1973, 
		recordLabel: "UAR", stars: 4 },// we have to define each row of the array using objects
		{ artistName: "Led Zeppelin", albumTitle: "Mothership - Deluxe Edition", genre: "Rock", pubYear: 2007, 
		recordLabel: "Atlantic", stars: 5 },
		{ artistName: "Kate Bush", albumTitle: "Hounds of Love", genre: "Pop", pubYear: 1985, 
		recordLabel: "Manhattan Records", stars: 5 },
		{ artistName: "Chance the Rapper", albumTitle: "Colouring Book", genre: "Rap/HipHop", pubYear: 2016, 
		recordLabel: "Self-Released", stars: 5 },
		{ artistName: "Townes Van Zandt", albumTitle: "High, Low, and In Between", genre: "Country", pubYear: 1971, 
		recordLabel: "Poppy", stars: 4.5 },
		{ artistName: "Manchester Orchestra", albumTitle: "Mean Everything To Nothing", genre: "Indie Rock", pubYear: 2009, 
		recordLabel: "Favorite Gentlemen", stars: 3.5 },
	];
};