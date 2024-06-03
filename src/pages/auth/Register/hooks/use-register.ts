import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const handleRegister = async (payload: any): Promise<any> => {
    console.log(payload)
    return await axios.post("http://localhost:3000/auth/register", payload)
        .then((data) => data).catch((err) => {throw err});
    
}
export const useRegisterUser = () => {
    return useMutation({
        mutationFn: handleRegister
    });
}