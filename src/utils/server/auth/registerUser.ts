import { dbConnect } from "@/database/DBConfig";
import { RegisterFormEntryInterface } from "@/interfaces/user";
import UserModel from "@/models/UserModel";
import bcrypt from 'bcrypt';
import { v4 as uuid } from "uuid";

interface ReturnUserData extends RegisterFormEntryInterface {
    id: string,
}

export async function registerUser(formData?: RegisterFormEntryInterface) {
    return new Promise<ReturnUserData | { error: string }>(async (resolve, reject) => {
        try {

            if (!formData) {
                return resolve({
                    error: "Invalid Data",
                });
            }

            const { name, email, password } = formData;

            await dbConnect();

            const emailExist = await UserModel.findOne({ email });
            if (emailExist) {
                return resolve({
                    error: "Email already exist!",
                });
            }

            // hash password
            const saltRound = 10;
            const salt = await bcrypt.genSalt(saltRound)
            const hashPassword = await bcrypt.hash(password, salt);

            // create userId
            const userId = uuid();

            // write to database
            await UserModel.create({ name, email, password: hashPassword, userId });

            return resolve({ ...formData, id: userId });

        } catch (err) {
            return reject(err);
        }
    })
}