import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
// import Form from './components/form';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    // inputValue: '123',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // formSubmitHandler = data => {
  //   setTimeout(() => {
  //     console.log(data);
  //   }, 1000);
  // };

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <Container>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* 
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Прозвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}

        <h1>Состояние компонента</h1>

        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <br />
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </Container>
    );
  }
}

export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
