'use client';

import { Session } from "next-auth";
import BasicEditLayout from "./BasicEditLayout"
import { FormEvent, useEffect, useState } from "react"
import { getSession } from "next-auth/react";

function NameUpdate() {
    const [accountName, setAccountName] = useState<string>("Loading...");
    const [trackChange, setTrackChange] = useState<string>("");

    useEffect(() => {
        getSession().then((session) => {
            if (session?.user?.name) {
                setAccountName(session.user.name);
                setTrackChange(session.user.name);
            } else {
                setAccountName("");
                setTrackChange("");
            }
        });
    }, []);

    return (
        <BasicEditLayout
            label="Account name"
            subLabel="This is the account name that will be visible in your dashboard"
            inputPlaceholder="Enter your name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            inputType="text"
            onSubmit={(e: FormEvent) => {
                e.preventDefault();
                console.log(accountName)
            }}
            buttonDisable={accountName === trackChange}
        />
    )
}

export default NameUpdate