import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyCaWAcG5lpLqPXz5xwTiKMxDk64vlwhqSk",
        authDomain: "h3nry-todo-app.firebaseapp.com",
        databaseURL: "https://h3nry-todo-app.firebaseio.com",
        projectId: "h3nry-todo-app",
        storageBucket: "h3nry-todo-app.appspot.com",
        messagingSenderId: "709804140302"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;