import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'

// Allowing credentials true for axios 
axios.defaults.withCredentials = true;

// Calling global context from React
// import url from "../core/index";
const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()

// Creating global Context
export const useGlobalState = () => useContext(GlobalStateContext)
export const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

// Making Global State component
export function GlobalStateProvider({ children }) {
    const url = "http://localhost:3001";
    const [data, setData] = useState({
        user: null,
        role: null,
        loginStatus: false,
    })

    useEffect(() => {
        axios({
            method: "get",
            url: url + `/getProfile`,
            // withCredentials: true
        }).then((res) => {
            console.log("context response", res.data.profile, res.status);
            if (res.status === 200) {

                setData((prev) => ({
                    ...prev,
                    loginStatus: true,
                    user: res.data.profile,
                    role: res.data.profile.role
                }))
                console.log('check', res.data.profile.role)
            }
        }).catch((err) => {
            // return setData((prev) => ({ ...prev, role: "loggedout" }));
            setData((prev) => ({ ...prev, loginStatus: false, user: null, role: null, role: "loggedout" }))
            console.log(err,"loggedout err");
            // console.log(JSON.stringify("Error===========", err.response.status));
            // console.log(err);
            // if (!err.response || err.response.status !== 200) {
            //     setData((prev) => ({ ...prev, role: "loggedout" }));
            // }
        })

        // return () => {
        //     console.log("cleanup");
        // }
    }, []);

    return (
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
}
