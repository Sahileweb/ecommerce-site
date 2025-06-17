import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAw8dg46fbZ1su6E_4AjlE3mIC-0Qz6G24",
  authDomain: "ecommerce-76d40.firebaseapp.com",
  projectId: "ecommerce-76d40",
  storageBucket: "ecommerce-76d40.appspot.com",
  messagingSenderId: "1008801064844",
  appId: "1:1008801064844:web:83e9d06814ad244c6f58a9",
  measurementId: "G-NSQ87S9RRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form submit
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  console.log("Email:", email);
  console.log("Password:", password);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert(" Registered: " + userCredential.user.email);
    e.target.reset();
  } catch (error) {
    alert(" Something went wrong: " + error.message);
    console.error(error);
  }
});



// document.getElementById('signupForm').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const email = e.target.email.value;
//   const password = e.target.password.value;

//   console.log("Email:", email);
//   console.log("Password:", password);

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     alert("✅ Registered: " + userCredential.user.email);
//     e.target.reset();
//   } catch (error) {
//     alert("❌ Something went wrong: " + error.message);
//     console.error(error);
//   }
// });
