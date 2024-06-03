import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const handleLogin = (payload: any): Promise<any> => {
    return axios.post("http://localhost:3000/auth/login", payload)
        .then((data) => console.log(data)).catch((err) => {
            throw err
        });
}

export const useLoginUser = () => {
    return useMutation({
        mutationFn: handleLogin
    })
}