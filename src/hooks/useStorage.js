import { useState } from "react";

export const useStorage = (key) => {
    let temp = {};
    try {
        temp = JSON.parse(localStorage.getItem(key));
    } catch (err) {
        temp = {};
    }
    const [storage, setStorage] = useState(temp);

    const handleStorage = (data) => {
        setStorage(data);
        localStorage.setItem(key, JSON.stringify(data));
    };

    return [storage, handleStorage];
};
