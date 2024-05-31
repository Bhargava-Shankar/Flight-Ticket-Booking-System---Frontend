import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const handleLogin = async (payload: any): Promise<any> => {
    return await axios.post("http://localhost:3000/auth/login", payload)
        .then((data) => console.log(data)).catch((err) => alert(err));
}

export const useLoginUser = () => {
    return useMutation({
        mutationFn: handleLogin
    })
}