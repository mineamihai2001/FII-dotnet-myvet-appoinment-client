import { useState } from "react";

export const useUser = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const handleUser = (data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(user));
    };

    return [user, handleUser];
};
