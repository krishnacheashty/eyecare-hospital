import { useEffect, useState } from "react"
import initializeAuthentication from "../firebase/firebase.init";
import { GoogleAuthProvider ,getAuth, signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";

initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const[error,setError]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
           setError(error)
        })
    }

    

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              
            }
          });
    },[auth])
    /* registrition from e name value neyar jonno */
    const handelNameFieldChange=e=>{
        setName(e.target.value)
    }
    /* for mailvalue */
    const handelEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    /* for password value */
    const handelPasswordChange=e=>{
        setPassword(e.target.value)
    }
        /* for registration from handel  */
    const handelRegistration=e=>{
        e.preventDefault();
        if(password<6){
            setError("please give more then then 6 character")
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user)
            setError('')
            getName();
        })
        .catch((error)=>{
            const errorMassage=error.massage
            setError(errorMassage)
        })

    }
    const handelLogin=e=>{
        e.preventDefault();
        console.log("ok")
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            const user=result.user;
            console.log(user)
            setError('')
        })
        .catch((error) => {
            
            setError("you give wrong Email or Password");
          });
    }
    const getName=()=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then((result)=>{

        })

    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            
        })
    }


    return{
        user,
        signInUsingGoogle,
        logOut,
        handelRegistration,
        handelEmailChange,
        handelPasswordChange,
        handelLogin,
        handelNameFieldChange,
        error

    }


}

export default useFirebase;