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
                    text: 'Create new react app'
                };
                var res = reducers.todosReducer(df([]), df(action));

                expect(res.length).toEqual(1);
                expect(res[0].text).toEqual(action.text);
            });

            it('should toggle todo', () => {
                var todos = [{
                    id: '111',
                    text: 'some text',
                    completed: true,
                    createdAt: '111',
                    completedAt: '222'
                }];
                var action = {
                    type: 'TOGGLE_TODO',
                    id: '111'
                };
                var res = reducers.todosReducer(df(todos), df(action));

                expect(res[0].completed).toEqual(false);
                expect(res[0].completedAt).toEqual(undefined);
            });
        });
    });
});