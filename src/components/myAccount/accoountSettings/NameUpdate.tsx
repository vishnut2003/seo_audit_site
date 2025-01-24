'use client';

import BasicEditLayout from "./BasicEditLayout"
import { useState } from "react"

function NameUpdate() {

    const [accountName, setAccountName] = useState<string>("")

    return (
        <BasicEditLayout
            label="Account name"
            subLabel="This is the account name that will be visible in your dashboard"
            inputPlaceholder="Enter your name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            onSubmit={() => console.log(accountName)}
        />
    )
}

export default NameUpdate