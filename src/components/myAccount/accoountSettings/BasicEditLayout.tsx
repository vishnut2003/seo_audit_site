import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEventHandler } from "react"

function BasicEditLayout({
    label,
    subLabel,
    inputPlaceholder,
    value,
    onChange,
    onSubmit,
}: {
    label: string,
    subLabel: string,
    inputPlaceholder: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onSubmit: () => any
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
               children={label}
               className="text-lg font-bold"
            />
            <Label
                children={subLabel}
                className="leading-[20px] opacity-60"
            />
        </div>

        {/* second col */}
        <div
            className="w-full flex flex-col gap-2 items-end"
        >
            <Input
                placeholder={inputPlaceholder}
                onChange={onChange}
                value={value}
            />
            <Button
                children="Save"
                className="bg-accent1"
                onClick={onSubmit}
            />
        </div>
    </div>
  )
}

export default BasicEditLayout