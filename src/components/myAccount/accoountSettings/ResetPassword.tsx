import { Button } from "@/components/ui/button"

function ResetPassword() {
  return (
    <div
        className="space-y-4"
    >
        <Button
            className="bg-accent2 hover:bg-accent1"
        >
            Send Reset Link
        </Button>

        <p
            className="text-sm text-foreground opacity-70"
        >We will send a reset password link to your registered email address.</p>
    </div>
  )
}

export default ResetPassword