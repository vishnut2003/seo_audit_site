import { dbConnect } from "@/database/DBConfig";
import { LoginFormEntryInterface } from "@/interfaces/user";
import UserModel from "@/models/UserModel";
import bcrypt from 'bcrypt';

interface ReturnUserData {
    id: string,
    name: string,
    email: string,
    image: string
}

export async function loginUser({ email, password }: LoginFormEntryInterface) {
    return new Promise<ReturnUserData>(async (resolve, reject) => {
        try {
            await dbConnect();
            const user = await UserModel.findOne({ email })

            if (!user) {
                return reject()
            }

            // Compare password
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                const userData: ReturnUserData = {
                    id: user.userId,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                }

                return resolve(userData);
            } else {
                return reject()
            }
        } catch (err) {
            return reject(err);
        }
    })
}