import React, { useState } from "react";
import { MyContext } from './Context.js';
import { LikedCars } from "../LikedCars/LikedAutoList.js";

export const Component = () => {

    // const [likedCars, setLikedCars] = useState([]);
    const [likedCarrs, setlikedCarrs] = useState([]);

    render() {
        return (
            <MyContext.Provider value={{likedCarrs, setlikedCarrs}}>
                <LikedCars />
            </MyContext.Provider>
        );
    };
}