var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect('TodoApi').toExist();
    });

    describe('filterTodos', () => {
        var todos = [{
            id:55,
            text: 'test set',
            completed: true
        }, {
            id:56,
            text: 'other text',
            completed: false
        }, {
            id:57,
            text: 'test set',
            completed: true
        }];

        it('should return all items if showCompled checked', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return only not completed  items if showCompled not checked', () => {
            var filteredTodos = TodoApi.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        if('should sort completed status', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should sort todos by searchText', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, 'test');

            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });
    });
});