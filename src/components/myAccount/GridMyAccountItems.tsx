import { RemixiconComponentType, RiAlignItemBottomLine, RiArrowRightSLine, RiBillLine, RiLockPasswordLine, RiSettings4Line } from "@remixicon/react"
import Link from "next/link"

const GridMyAccountItems = () => {

    const items: {
        label: string,
        value: string,
        icon: RemixiconComponentType,
        link: string,
    }[] = [
            {
                label: "Account Settings",
                value: "Edit Account Details",
                icon: RiSettings4Line,
                link: "/my-account/account-settings"
            },
            {
                label: 'Reset Password',
                icon: RiLockPasswordLine,
                value: 'Change Password',
                link: '/my-account/reset-password'
            },
            {
                label: 'Billing & Payments',
                icon: RiBillLine,
                value: 'Purchase or Renew Plans',
                link: '/my-account/billing'
            },
            {
                label: 'Access Tool',
                icon: RiAlignItemBottomLine,
                value: 'Go to SEO Audit Tool',
                link: '/dashboard/billing'
            }
        ]

    return (
        <div
            className="flex md:flex-nowrap md:flex-row flex-col gap-7"
        >
            {
                items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-1 bg-white p-6 shadow-2xl shadow-gray-200 hover:shadow-gray-300 hover:scale-105 transition-all rounded-md"
                    >
                        <div
                            className="flex flex-nowrap w-full justify-between items-center gap-8"
                        >
                            <p className="text-lg font-bold">{item.label}</p>
                            <item.icon
                                size={26}
                                className="text-accent2"
                            />
                        </div>
                        <p className="opacity-50 text-sm">{item.value}</p>
                        <Link href={item.link}>
                            <button
                                className="mt-3 bg-background drop-shadow-xl w-max p-2 rounded-full hover:bg-accent2 hover:text-background"
                            >
                                <RiArrowRightSLine size={25} />
                            </button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default GridMyAccountItems