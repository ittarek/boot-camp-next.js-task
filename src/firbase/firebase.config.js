// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_apiKey,
  authDomain:process.env.NEXT_PUBLIC_authDomain,
  projectId:process.env.NEXT_PUBLIC_projectId,
  storageBucket:process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId:process.env.NEXT_PUBLIC_messagingSenderId,
  appId:process.env.NEXT_PUBLIC_appId,
  measurementId:process.env.NEXT_PUBLIC_measurementId,
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;




// / *  

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCuM8gpfLNHBQlyI8RvFbclFM3EYRhjZj0",
//   authDomain: "news-app-next-38e00.firebaseapp.com",
//   projectId: "news-app-next-38e00",
//   storageBucket: "news-app-next-38e00.appspot.com",
//   messagingSenderId: "1040600784926",
//   appId: "1:1040600784926:web:c09701a982dba15e678e0f",
//   measurementId: "G-3QVH27M9QS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// * 