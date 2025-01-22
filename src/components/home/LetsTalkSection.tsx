import { RiPhoneFill } from "@remixicon/react"

const LetsTalkSection = () => {
  return (
    <div className="outer-wrapper bg-gradient-to-r from-accent1 to-accent2 p-5 min-h-[400px]">
        <div className="inner-wrapper text-background justify-center">
            {/* Left col */}
            <div className="max-w-[600px] w-full text-center flex items-center flex-col gap-7">
                <h2
                    className="text-3xl font-extrabold"
                >Let&apos;s Connect and Try a Demo</h2>

                <p>We&apos;re here to answer your questions, discuss your goals, and help bring your ideas to life. Let&apos;s collaborate today!</p>

                <button className="button-style-secondary w-max">
                    <RiPhoneFill size={20}/>
                    Let&apos;s Talk!
                </button>
            </div>
        </div>
    </div>
  )
}

export default LetsTalkSection