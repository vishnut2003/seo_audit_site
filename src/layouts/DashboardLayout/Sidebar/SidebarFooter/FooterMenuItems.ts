import { RemixiconComponentType, RiHome2Line } from "@remixicon/react";

export interface footerMenuIterface {
    name: string,
    icon: RemixiconComponentType,
    link: string,
}

const footerMenuItems: footerMenuIterface[] = [
    {
        name: 'Go to Home',
        icon: RiHome2Line,
        link: '/',
    }
]

export default footerMenuItems;