import { dbConnect } from "@/database/DBConfig";
import { LoginFormEntryInterface } from "@/interfaces/user";
import UserModel, { UserModelInterface } from "@/models/UserModel";
import bcrypt from 'bcrypt';

interface ReturnUserData extends UserModelInterface {
    id: string,
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
                    ...user,
                }
                delete user.userId;

                return resolve(userData);
            } else {
                return reject()
            }
        } catch (err) {
            return reject(err);
        }
    })
}