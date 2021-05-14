import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

const FirebaseContext = createContext({
    database: null
});

const FirebaseContextProvider = ({ children }) => {
    const [database, setDatabase] = useState(null);
    const firebaseConfig = {
        apiKey: "AIzaSyALJzvwZRsm4SLMGdEXbvx1cfRHRGmMegM",
        authDomain: "wedding-contact-tracing.firebaseapp.com",
        databaseURL: "https://wedding-contact-tracing-default-rtdb.firebaseio.com",
        projectId: "wedding-contact-tracing",
        storageBucket: "wedding-contact-tracing.appspot.com",
        messagingSenderId: "86654696669",
        appId: "1:86654696669:web:e63d1dbadb085de4de6f34"
    };

    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
        setDatabase(firebase.database())
    }, [])

    return (
        <FirebaseContext.Provider value={{ database: database }}>
            {children}
        </FirebaseContext.Provider>
    )
};

const useFirebase = () => {
    return useContext(FirebaseContext);
}

export { useFirebase, FirebaseContextProvider };
