'use client';

import { useState } from "react";
import SidebarFooter from "../Sidebar/SidebarFooter/SidebarFooter";
import SidebarMenu from "../Sidebar/SidebarMenu/SidebarMenu";
import { RiArrowLeftLine, RiBarChartHorizontalLine } from "@remixicon/react";
import { motion } from "framer-motion";

const MobileSidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="flex justify-center items-center">

            {/* Toggle button */}
            <button
                className="md:hidden"
                onClick={() => setSidebar(true)}>
                <RiBarChartHorizontalLine size={25} />
            </button>

            {/* Sidebar */
                sidebar &&
                <motion.div
                    initial={{ x: '-150%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'linear', stiffness: 300 }}
                    className='fixed left-0 top-0 w-[90%] h-full bg-accent1 text-background z-50 transition-all max-w-[350px] text-foregroundwhite flex md:hidden flex-col justify-start overflow-hidden'
                >

                    <div className="w-full py-5 px-6 flex justify-between gap-3 items-center">
                        <h2 className="font-bold text-3xl whitespace-nowrap">SEO Audit</h2>
                        <RiArrowLeftLine
                            onClick={() => setSidebar(false)}
                            size={25} />
                    </div>

                    <div className="w-full h-full min-h-0 py-5 px-6">
                        <div className="w-full">
                            <SidebarMenu />
                        </div>
                    </div>

                    <SidebarFooter />
                </motion.div>
            }

        </div >
    )
}

export default MobileSidebar