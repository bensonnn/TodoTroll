$(function() {

	function TodoController() {
		this.index = 0
	}

	TodoController.prototype = {
		bindEvents : function() {
			$("form").submit(this.create.bind(this));
			$("ul").on("click", this.delete.bind(this))
			$("#items").on("keyup", this.update.bind(this));
		},
		create: function(key) {
			event.preventDefault();
			if ($('#new').val() != "") {
				var todo = new Todo($('#new').val(), this.index)
				this.index++
				$('#new').val("")
				TodoList.add(todo)
			}
		},
		update: function(key){
			event.preventDefault();
			if(key.keyCode == 13)
			console.log($(key.target).find(".index"))
		},
		delete: function(key){
			if ($(key.target).hasClass("delete"))  {
				TodoList.delete($(key.target).next().text())
			}
		}

	}

	var TodoView =  {
		update: function(todos) {
			$('li').remove();
			todos.forEach(function(todo) {
				$('ul').append('<li style="background-color:' + todo.color + '"><input value="' + todo.text + '"><span class="delete">&times;</span><span class="index">' + todo.index + '</span></li>')
			})
		}
	}


	function Todo(text, index) {
		this.text = text;
		if (text == 'cornify')
			cornify();
		if (text == 'rick' )
			$('#items').append('<iframe width="375" height="315" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameborder="0" allowfullscreen></iframe>')
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


