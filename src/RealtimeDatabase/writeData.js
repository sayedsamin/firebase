import { ref, set } from "firebase/database";
import { database } from "../firebase.js";
const writeWithSet = async (path, data) => {
    try {
        set(ref(database, path), data);
    }
    catch (error) {
        console.error(error);
    }
};
writeWithSet("/dev/users/1", { name: "John" });
