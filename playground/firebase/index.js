import firebase from 'firebase';

var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
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