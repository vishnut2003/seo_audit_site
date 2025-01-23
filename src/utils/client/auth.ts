import axios from "axios";
import { Session } from "next-auth";

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

export async function getUserSession () {
    return new Promise<Session>(async (resolve, reject) => {
        try {
            const response = await axios.get('/api/auth/session');
            const session = response.data as Session;
            return resolve(session);
        } catch (err) {
            return reject(err);
        }
    })
}