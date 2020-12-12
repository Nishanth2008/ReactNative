import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDCpB8HJmqSl_79bFXW8xWeDe_SVh88RO4",
  authDomain: "react-native-e518b.firebaseapp.com",
  databaseURL: "https://react-native-e518b-default-rtdb.firebaseio.com",
  projectId: "react-native-e518b",
  storageBucket: "react-native-e518b.appspot.com",
  messagingSenderId: "425961271387",
  appId: "1:425961271387:web:904ff79d9c4871612ecf7e"
};

let app = firebase.initializeApp(firebaseConfig)
export default app.database()