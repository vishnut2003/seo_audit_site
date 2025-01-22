'use client';

import LoginForm from "@/components/auth/LoginForm"
import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button"
import { RiArrowLeftSLine } from "@remixicon/react";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

const AuthPage = () => {
    const [currentForm, setCurrentForm] = useState<"login" | "register">("login")
    return (
        <div className="outer-wrapper h-dvh w-screen">
            <div className="w-full max-w-screen-lg flex justify-center items-stretch rounded-sm overflow-hidden shadow-2xl">

                {/* Left col */}
                <div className="w-full bg-accent1 p-10 text-background flex flex-col justify-between">
                    <div className="flex flex-col justify-start gap-10">
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold">Welcome Back! Ready to Dive In?</h2>
                            <p className="text-base font-light leading-7">Access your dashboard, manage your tools, and unlock powerful insights. Log in now to continue optimizing</p>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <p>{currentForm === "login" ? "Don't have an Account?" : "Already a User?"}</p>
                            <Button
                                onClick={() => setCurrentForm(prev => prev === "login" ? "register" : "login")}
                                className="bg-background text-foreground hover:bg-accent1 hover:text-background border border-background font-semibold"
                            >{currentForm === "login" ? "Register" : "Login"}</Button>
                        </div>
                    </div>

                    {/* backto home */}
                    <div>
                        <Link
                            className="flex gap-3"
                            href={'/'}
                        >
                            <RiArrowLeftSLine size={20} />
                            Go to Home
                        </Link>
                    </div>
                </div>

                {/* Right col */}
                <div className="w-[70%] p-10 space-y-5">
                    <h2 className="text-xl font-extrabold">{currentForm === "login" ? "Welcome Back" : "Create an Account"}</h2>
                    {
                        currentForm === "login" ? <LoginForm /> : <RegisterForm />
                    }

                    {/* Horizontal line */}
                    <div className="flex justify-center items-center gap-3">
                        <div className="w-full h-[1px] bg-gray-200"></div>
                        <p className="text-xs min-w-max font-semibold text-gray-400">OR CONTINUE WITH</p>
                        <div className="w-full h-[1px] bg-gray-200"></div>
                    </div>

                    {/* Social Auth */}
                    <div
                        className="flex justify-center items-center gap-5"
                    >
                        {/* Google */}
                        <Button
                            className="bg-background hover:bg-gray-100 flex justify-between items-center text-foreground"
                        >
                            <Image
                                src={'/social-icons/google-icon.png'}
                                alt="Google auth icon"
                                width={500}
                                height={500}
                                className="w-5"
                            />
                            <p className="w-full text-center text-sm">Google</p>
                        </Button>

                        {/* Gitub */}
                        <Button
                            className="bg-background hover:bg-gray-100 flex justify-between items-center text-foreground"
                        >
                            <Image
                                src={'/social-icons/github-icon.png'}
                                alt="Google auth icon"
                                width={500}
                                height={500}
                                className="w-5"
                            />
                            <p className="w-full text-center text-sm">Github</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage