import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'
// import url from "../core/index";

// Allowing credentials true for axios 
axios.defaults.withCredentials = true;

// Calling global context from React
const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()

// Creating global Context
export const useGlobalState = () => useContext(GlobalStateContext)
export const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

// Making Global State component
export function GlobalStateProvider({ children }) {

    // const url = "http://localhost:3001";

    const [data, setData] = useState({
        user: null,
        loginStatus: false,
        role: null,
    })
    

    useEffect(() => {
        axios({
            method: "get",
            url: url + `/getProfile`,

        }).then((res) => {
      
            setData(prev => ({ ...prev, loginStatus: true, user: res.data.profile, role: res.data.profile.role }));
            //     console.log('check', res.data.profile.role)
        }).catch((err) => {
            return setData((prev) => ({ ...prev, role: "loggedout" })),
            // alert( "token expair loggedout")
                // setData((prev) => ({ ...prev, loginStatus: false, user: null, role: null}))
                console.log(err, "loggedout err");
            // console.log(JSON.stringify("Error===========", err.response.status));
            // console.log(err);
            // if (!err.response || err.response.status !== 200) {
            //     setData((prev) => ({ ...prev, role: "loggedout" }));
            // }
        })

        // return () => {
        //     console.log("cleanup");
        // }
    },[]);

    return (
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
}


