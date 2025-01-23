import { RegisterFormEntryInterface } from "@/interfaces/user";
import axios from "axios";

export async function validateRegisterFormData ({password, repassword}: {
    password: string,
    repassword: string,
}) {
    return new Promise<void>((resolve, reject) => {
        try {
            // validate if password is same
            if (password !== repassword) {
                return reject("Password not matching")
            }

            return resolve()
        } catch (err) {
            console.log(err);
        }
    })
}

export async function submitRegisterFormData (formData: RegisterFormEntryInterface) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            const response = await axios.post('/api/auth/create-user', {formData});
            console.log(response);
            resolve();
        } catch (err) {
            console.log(err);
        }
    })
}