import { FormEvent, useEffect, useState } from "react"
import BasicEditLayout from "./BasicEditLayout"
import { getSession } from "next-auth/react";

function EmailUpdate() {

    const [accountEmail, setAccountEmail] = useState<string>("Loading...");
    const [trackChange, setTrackChange] = useState<string>("");

    useEffect(() => {
        getSession().then((session) => {
            if (session?.user?.email) {
                setAccountEmail(session.user.email);
                setTrackChange(session.user.email);
            } else {
                setAccountEmail('');
                setTrackChange('');
            }
        })
    }, []);

    return (
        <BasicEditLayout
            label="Email Address"
            subLabel="This is the account email that will be used to verify"
            inputPlaceholder="Enter your Email Address"
            value={accountEmail}
            onChange={(e) => setAccountEmail(e.target.value)}
            inputType="email"
            onSubmit={(e: FormEvent) => {
                e.preventDefault();
                console.log(accountEmail)
            }}
            buttonDisable={accountEmail === trackChange}
        />
    )
}

export default EmailUpdate