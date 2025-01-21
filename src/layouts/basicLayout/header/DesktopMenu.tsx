import Link from "next/link"
import menuItems from "./menuItems"

const DesktopMenu = () => {
  return (
    <div className="flex-container-row gap-12">
        {
            menuItems.map((menuItem, index) => (
                <div>
                    <Link href={menuItem.url}>
                        <p className="hover:underline underline-offset-4">{menuItem.text}</p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default DesktopMenu