import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useState, useEffect, useContext, createContext } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import key from "./key";
export const firebaseApp = initializeApp(key);

export const AuthContext = createContext();
export const db = getFirestore();
export const auth = getAuth();
export const userId = auth.currentUser ? auth.currentUser.uid : "";

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};

export function getUser() {
  return auth.currentUser;
}

export async function addNote(noteModel) {
  const docRef = await addDoc(collection(db, "notes"), noteModel);
  console.log(docRef.id);
}

export async function getAllNotesByUserId(userId) {
  const q = query(collection(db, "notes"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const notes = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    notes.push(doc);
  });
  console.log("get all notes for ", userId, notes);
  return notes;
}

export const getNotesByUserIdQuery = query(
  collection(db, "notes"),
  where("userId", "==", userId)
);

export async function deleteNote(noteId) {
  await deleteDoc(doc(db, "notes", noteId));
}
