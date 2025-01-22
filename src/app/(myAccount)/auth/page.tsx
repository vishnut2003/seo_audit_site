'use client';

import { Suspense } from "react"
import AuthComponent from "./SuspenseComponent"

const AuthPage = () => {
    return (
        <Suspense>
            <AuthComponent />
        </Suspense>
    )
}

export default AuthPage