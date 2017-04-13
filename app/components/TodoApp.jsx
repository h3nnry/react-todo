var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Improve react'
                },
                {
                    id: 2,
                    text: 'Make React apps with laravel api'
                },
                {
                    id: 3,
                    text: 'Compare React with Angular'
                },
                {
                    id: 4,
                    text: 'Compare React with Vue.js'
                }
            ]
        };
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;