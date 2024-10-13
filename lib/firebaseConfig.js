import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  //apiKey: 'api-key',
  authDomain: 'platesaver-b26a8.firebaseapp.com',
  databaseURL: 'https://platesaver-b26a8.firebaseio.com',
  projectId: 'platesaver-b26a8',
  storageBucket: 'platesaver-b26a8.appspot.com',
  //messagingSenderId: 'sender-id',
  //appId: 'app-id',
  //measurementId: 'G-measurement-id',
  platform: 'com.aoa.platesaver'
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
