import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBS2HK5QC4U5Jl51uOQx_foB1y4osjvy2M",
  authDomain: "hussen-portfolio.firebaseapp.com",
  projectId: "hussen-portfolio",
  storageBucket: "hussen-portfolio.appspot.com",
  messagingSenderId: "934384552556",
  appId: "1:934384552556:web:5f7b8e797fb445ebcd2649"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const Firestore = firebase.firestore()
const Storage = firebase.storage()

export { Firestore, Storage }