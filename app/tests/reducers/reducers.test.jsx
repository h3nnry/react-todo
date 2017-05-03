var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'cat'
            };
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });

        describe('showCompletedReducer', () => {
            if('should showCompleted status ge flipped', () => {
                    var action = {
                        type: 'TOGGLE_SHOW_COMLETED'
                    };
                    var res = reducers.showCompletedReducer(df(false), df(action));

                    expect(res).toEqual(true);
                });
        });

        describe('todosReducer', () => {
            it('should add new todo', () => {
                var action = {
                    type: 'ADD_TODO',
                    todo: {
                        id: 'abc123',
                        text: 'Something todo',
                        completed: false,
                        createdAt: 9874623
                    }
                };
                var res = reducers.todosReducer(df([]), df(action));

                expect(res.length).toEqual(1);
                expect(res[0]).toEqual(action.todo);
            });

            it('should toggle todo', () => {
                var todos = [{
                    id: '111',
                    text: 'some text',
                    completed: true,
                    createdAt: '111',
                    completedAt: '222'
                }];
                var updates = {
                    completed: false,
                    completedAt: null
                };
                var action = {
                    type: 'UPDATE_TODO',
                    id: todos[0].id,
                    updates

                };
                var res = reducers.todosReducer(df(todos), df(action));

                expect(res[0].completed).toEqual(updates.completed);
                expect(res[0].completedAt).toEqual(updates.completedAt);
                expect(res[0].text).toEqual(todos[0].text)
            });
            it('should add existing todos', () => {
                var todos = [{
                    id: '123',
                    text: 'anyone',
                    completed: false,
                    createdAt: undefined,
                    completedAt: 32000
                }];
                var action = {
                    type: 'ADD_TODOS',
                    todos
                };
                var res = reducers.todosReducer(df([]), df(action));

                expect(res.length).toEqual(1);
                expect(res[0]).toEqual(todos[0]);
            });
        });
    });
});