import Link from "next/link"
import menuItems from "./menuItems"

const DesktopMenu = () => {
  return (
    <div className="flex-container-row gap-12">
        {
            menuItems.map((menuItem, index) => (
                <div key={index}>
                    <Link href={menuItem.url}>
                        <p className="font-semibold hover:underline underline-offset-8 hover:text-accent2">{menuItem.text}</p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default DesktopMenu