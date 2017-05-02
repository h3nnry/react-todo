import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCaWAcG5lpLqPXz5xwTiKMxDk64vlwhqSk",
    authDomain: "h3nry-todo-app.firebaseapp.com",
    databaseURL: "https://h3nry-todo-app.firebaseio.com",
    projectId: "h3nry-todo-app",
    storageBucket: "h3nry-todo-app.appspot.com",
    messagingSenderId: "709804140302"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'John',
        age: 55
    }
});

firebaseRef.update({
    'user/name': 'Solo',
    'app/name': 'ToDo ApplicatioN'
});

firebaseRef.child('app').update({
    name: 'Todo AppLicaTion'
});

// firebaseRef.remove();
firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//     name: 'Todo AppLicaTion',
//     version: null
// });

// firebaseRef.once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e)
// });

// var logData = (snapshot) => {
//     console.log('Got entire database', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
// firebaseRef.off(logData);
// firebaseRef.update({isRunning: false});

firebaseRef.child('user').on('value', (snapshot) => {
    console.log('User ref changed', snapshot.val());
});
firebaseRef.child('user').update({name: 'Mike'});
firebaseRef.child('app').update({name: 'Other name.'});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('Child was added', snapshot.key, snapshot.val());
});
todosRef.push({
    text: 'Text 1'
})
todosRef.push({
    text: 'Text 2'
})