import * as firebase from 'firebase';

const config = {
    apikey: "AIzaSyByKKK201Y9xe_60xHB5eSTGLsOadix648",
    authDomain: "vue-chat-app-6361c.firebaseapp.com",
    databaseURL: "https://vue-chat-app-6361c.firebaseio.com",
    projectId: "vue-chat-app-6361c",
    storageBucket: "vue-chat-app-6361c.appspot.com"
};

firebase.initializeApp(config);

export default firebase;