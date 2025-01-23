import { RegisterFormEntryInterface } from "@/interfaces/user";
import { signIn } from "next-auth/react"

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
    return new Promise<void>(async (resolve) => {
        try {

            await signIn("Register", {
                // form data
                ...formData,
                callbackUrl: "/my-account",
            })
            resolve();
        } catch (err) {
            console.log(err);
        }
    })
}