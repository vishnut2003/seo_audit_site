import { registerUser } from "@/utils/server/auth/registerUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "Register",
            credentials: {
                name: { type: "text" },
                email: { type: "email" },
                password: { type: "password" }
            },
            async authorize(credentials) {
                try {
                    const userData = await registerUser(credentials)

                    // handle failed login
                    if ('error' in userData) {
                        return {
                            error: userData.error,
                            id: '',
                        }
                    }

                    return userData;
                } catch (err) {
                    return null;
                }
            },
        }),
        CredentialsProvider({
            id: "Login",
            credentials: {
                email: { type: "email" },
                password: { type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials)
                return null;
            },
        })
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user }) {
            if ('error' in user && typeof user.error === 'string') {
                throw new Error(user.error);
            } else {
                return true;
            }
        }
    },
    pages: {
        signIn: '/auth',
        newUser: '/my-account',
        signOut: '/auth',
        error: '/auth'
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST }