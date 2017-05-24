(
	function() {
	angular.module("App", []);
}
)()
//angular.module statement is inside an anonymous function. the parens here on lines 1 and 5 tell us that this is a group of statements. 
//the opening and closing parens on line 5 denote that whats in front of it is a function
// so this is saying inside the parens on 1 and 5 there is code to be executed. the extra parens on line 5 tell us to execute the above code.
// without the last open/closed parens, we'd be defining a function but not executing it. 
// the module shpould be the first angular file thats seen 
// if you forget the brackets on 3/the second parameter, youll get an error because the module hasnt been created