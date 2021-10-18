import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const useFirebase=()=>{
    const[user,setuser]=useState('')
    const auth=getAuth();
}