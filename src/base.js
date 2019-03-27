import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxSfnR6B13wOwFgV-wt4AMJmGTY-rdsMM",
    authDomain: "e-commercehc.firebaseapp.com",
    databaseURL: "https://e-commercehc.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base