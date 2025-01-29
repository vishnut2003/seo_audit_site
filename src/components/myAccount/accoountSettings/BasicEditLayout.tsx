import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEventHandler, FormEvent } from "react"

function BasicEditLayout({
    label,
    subLabel,
    inputPlaceholder,
    value,
    onChange,
    inputType,
    onSubmit,
    buttonDisable
}: {
    label: string,
    subLabel: string,
    inputPlaceholder: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    inputType: string,
    onSubmit: (e: FormEvent) => any,
    buttonDisable: boolean,
}) {
  return (
    <div 
        className="bg-background px-7 py-6 rounded-md flex md:flex-row flex-col justify-center items-start gap-4 shadow-xl shadow-gray-200"
    >
        
        {/* first col */}
        <div
            className="md:w-[400px] flex flex-col gap-2"
        >
            <Label
               className="text-lg font-bold"
            >
                {label}
            </Label>
            <Label
                className="leading-[20px] opacity-60"
            >
                {subLabel}
            </Label>
        </div>

        {/* second col */}
        <form
            onSubmit={onSubmit}
            className="w-full flex flex-col gap-2 items-end"
        >
            <Input
                placeholder={inputPlaceholder}
                onChange={onChange}
                value={value}
                type={inputType}
            />
            <Button
                className="bg-accent1"
                disabled={buttonDisable}
            >
                Save
            </Button>
        </form>
    </div>
  )
}

export default BasicEditLayout