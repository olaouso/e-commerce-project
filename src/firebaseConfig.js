import * as firebase from 'firebase';
import 'firebase/database';


const firebaseConfig = {
      
      apiKey: "AIzaSyBHrtHZ9BoIVWHZWfkeRT4qxrcRt20Gy1I",
      authDomain: "e-commerce-with-ola.firebaseapp.com",
      databaseURL: "https://e-commerce-with-ola.firebaseio.com",
      projectId: "e-commerce-with-ola",
      storageBucket: "e-commerce-with-ola.appspot.com",
      messagingSenderId: "944817541027",
      appId: "1:944817541027:web:52a148427b268fed4ad416"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();

