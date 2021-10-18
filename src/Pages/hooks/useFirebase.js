import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../firebase/initializeAuthen";

initializeAuthentication();
const useFirebase=()=>{
    const[user,setUser]=useState({})
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const auth=getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
        const user=result.user
        setUser(email,password)
    })
    .catch((error)=>{
        const errorMassage=error.massage
    })
    signInWithEmailAndPassword(auth, email ,password)
    .then((result)=>{
        const user=result.user
    })
    return{
        user,

    }
}


export default useFirebase;