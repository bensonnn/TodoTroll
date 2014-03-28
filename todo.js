$(function() {

	function TodoController() {
		this.index = 0
	}

	TodoController.prototype = {
		bindEvents : function() {
			$("form").submit(this.create.bind(this));
			$("ul").on("click", this.delete.bind(this))
		},
		create: function(key) {
			event.preventDefault();
			if ($('input').val() != "") {
				var todo = new Todo($('input').val(), this.index)
				this.index++
				$('input').val("")
				TodoList.add(todo)
			}
		},
		delete: function(key){
			if ($(key.target).hasClass("delete"))  {
				console.log(TodoList.todos)
				console.log($(key.target).next().text())
				TodoList.delete($(key.target).next().text())
			}
		}

	}

	var TodoView =  {
		update: function(todos) {
			$('li').remove();
			todos.forEach(function(todo) {
				$('ul').append('<li style="background-color:' + todo.color + '">' + todo.text + '<span class="delete">&times;</span><span class="index">' + todo.index + '</span></li>')
			})
		}
	}


	function Todo(text, index) {
		this.text = text;
		if (text == 'cornify') 
			cornify();
		if (text == 'rick' )
			this.text = 'rick<iframe width="420" height="315" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameborder="0" allowfullscreen></iframe>'
		this.index = index;
		this.complete = false;
		this.color = ColorGen.color();
	}
	
	
	Todo.prototype = {
		finish : function() {
			this.complete = true;
		},
		unfinish : function() {
			this.complete = false;
		}
	}


	var TodoList = {
		todos : [],
		add   : function(todo) {
			this.todos.push(todo)
			// console.log(this.todos)
			TodoView.update(this.todos)				
		},
		delete : function(index) {
			console.log(index)
			this.todos = _.reject(this.todos, function(todo){ return todo.index == index; })
			TodoView.update(this.todos)
		}
	}

	var controller = new TodoController();
	controller.bindEvents();

})