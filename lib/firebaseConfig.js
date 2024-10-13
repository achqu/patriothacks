import { initializeApp } from 'firebase/app';
import { Account, Client, ID, Avatars, Databases, Query } from 'react-native-appwrite';
 
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const config = {
  //apiKey: 'api-key',
  endpoint: 'https://cloud.appwrite.io/v1',
  authDomain: 'platesaver-b26a8.firebaseapp.com',
  databaseURL: 'https://platesaver-b26a8.firebaseio.com',
  projectId: '670b4264002f70d03605', //'platesaver-b26a8',
  databaseId: '670b46940029525ba557',
  storageBucket: 'platesaver-b26a8.appspot.com',
  userCollectionId: '670b46f000220ba8604e',
  storageId: '670b4af60032dbcdce84',
  //messagingSenderId: 'sender-id',
  //appId: 'app-id',
  //measurementId: 'G-measurement-id',
  platform: 'com.aoa.platesaver'
};

//const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
  
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username

    )
    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password);

    const newUser = await  databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )
    return newUser;
  }
  catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return session;
  }
  catch (error) {
    throw new Error(error);
  }
}

export const checkActiveSession = async() => {
  try {
    const session = await account.getSession('current'); // Get the current session
    return session !== null; // Return true if there is an active session
  }
  catch (error) {
    if (error.code === 401) {
      return false; // No active session
    }
    throw error;
  }
}

export const deleteSessions = async () => {
  try {
    // Get the list of all sessions
    const sessions = await account.listSessions();

    // Delete each session
    await Promise.all(
      sessions.sessions.map(async (session) => {
        await account.deleteSession(session.$id);
      })
    );

    console.log('All sessions deleted successfully');
  } catch (error) {
    console.error('Error deleting sessions:', error.message);
    throw error; // Re-throw the error for further handling
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if(!currentUser) throw Error;

    return currentUser.documents[0];
  }
  catch (error) {
    console.log(error);
  }
}