import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RiBarChartHorizontalLine, RiCloseLargeLine } from '@remixicon/react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleSidebar}
            >
                <RiBarChartHorizontalLine 
                    className='rotate-180'
                />
            </button>
            {isOpen && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'linear', stiffness: 300 }}
                    className='fixed left-0 top-0 w-[90%] h-full bg-background z-50 p-10'
                >
                    <div
                        className='flex justify-between items-center'
                    >
                        <h2
                            className='text-2xl font-black'
                        >Logo</h2>

                        <RiCloseLargeLine
                            onClick={toggleSidebar}
                            size={20}
                        />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MobileMenu;