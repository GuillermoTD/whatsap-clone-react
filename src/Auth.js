import { useState,createContext,useEffect,useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Auth = getAuth()
const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)   
    
    
    useEffect(()=>{
           return Auth.onIdTokenChanged(async (user)=>{
               if(!user){
                   console.log("Ningun usuario logueado")
                   return;
               }
               const token = await user.getIdToken()
               console.log("user token", token)
           })
    },[])

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)