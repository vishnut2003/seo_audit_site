import { RiErrorWarningLine, RiEyeLine } from "@remixicon/react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { ChangeEvent, FormEvent, useState } from "react"
import { submitRegisterFormData, validateRegisterFormData } from "@/utils/client/auth"
import { RegisterFormEntryInterface } from "@/interfaces/user"

const RegisterForm = () => {
    const [rePassword, setRePassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState<RegisterFormEntryInterface>({
        name: "",
        email: "",
        password: "",
    })

    function handleOncange (e: ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    async function _submitUserData (e: FormEvent) {
        try {
            e.preventDefault();

            // Validate form data
            await validateRegisterFormData({
                password: formData.password,
                repassword: rePassword,
            })

            // submit data
            await submitRegisterFormData(formData);

        } catch (err) {
            if (typeof err === 'string') {
                setErrorMessage(err);
                setTimeout(() => setErrorMessage(''), 5000)
            } else {
                console.log(err);
            }
        }
    }

    return (
        <form 
            className="space-y-4"
            onSubmit={_submitUserData}
        >
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    required
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleOncange}
                    placeholder="Enter Your Name"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    required
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOncange}
                    placeholder="Enter Email Address"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className='relative'>
                    <Input
                        required
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleOncange}
                        placeholder="Enter Password"
                    />

                    <button 
                        type="button"
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        <RiEyeLine size={20} />
                    </button>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="repassword">Re Enter Password</Label>
                <Input
                    required
                    id="repassword"
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder="Re Enter Password"
                />
            </div>

            <div className=''>
                <div className='flex justify-start items-center gap-2'>
                    <Checkbox />
                    <Label>Remember me</Label>
                </div>
            </div>

            <Button className='w-full py-5 bg-accent1 hover:bg-accent1'>
                Register
            </Button>

            {
                errorMessage &&
                <div
                    className="text-sm bg-red-100 text-red-500 flex justify-center items-center gap-2 py-3 px-4 rounded-sm"
                >
                    <RiErrorWarningLine size={15}/>
                    <p>{errorMessage}</p>
                </div>
            }
        </form>
    )
}

export default RegisterForm