import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`),
        data,
        { merge: true });
}

export const saveRestraunt = async (data) => {
    await setDoc(
        doc(firestore, 'restaurant', `${Date.now()}`),
        data,
        { merge: true });
}

export const listRestaurant = async () => {
    const restaurants = await getDocs(
        query(collection(firestore, "restaurant"), orderBy("id", "desc"))
    );
    return restaurants.docs.map((doc) => doc.data());
}

export const listItem = async () => {
    const restaurants = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    return restaurants.docs.map((doc) => doc.data());
}