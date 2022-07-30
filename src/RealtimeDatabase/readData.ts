import {ref, onValue, Database} from "firebase/database";
import { database } from "../firebase.js";

const dbRef = ref(database, "/dev/users");

onValue(dbRef, (snapshot) => {
    console.log(typeof snapshot.val());
}
);