function todoz(){
	var todo = [];

	var res = prompt('What would like to do?');
	while(res !== 'quit'){

		if(res === 'list'){
		echo(todo);
		} else if (res === 'add') {
			var newTodo = prompt('add somthing');
			todo.push(newTodo);
		}
		res = prompt('What would like to do?');
	}
}



// var todos = [];

// var input = prompt('What would you like to do?');
// while (input !== 'exit'){
// if(input === 'list') {
//  	echo(todos);
// } else if (input === 'new') {
// 	var newTodo = prompt('add new');
// 	todos.push(newTodo);
// }
// input = prompt('What would you like to do?');
// }