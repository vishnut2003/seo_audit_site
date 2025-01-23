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
                console.log(credentials);
                return null;
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
    pages: {
        signIn: '/auth',
        newUser: '/my-account',
        signOut: '/auth',
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST }