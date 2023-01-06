import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowDropRightLine } from 'react-icons/ri';

function RightArrow({ handleClick }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
            className="h-full flex items-center justify-center absolute right-0 w-20
                bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] z-10 rounded-tr-xl rounded-br-xl"
        >
            <motion.div
                whileTap={{ scale: 0.7 }}
                className="flex justify-center items-center w-10 h-10
                    bg-gradient-to-bl from-[#181717] to-[#111111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]
                    rounded-lg cursor-pointer transition-all"
            >
                <RiArrowDropRightLine
                    size={30}
                    color="rgba(255,255,255,0.9)"
                    className="drop-shadow-[0_0_15px_#a32adb]"
                />
            </motion.div>
        </motion.div>
    );
}

export default RightArrow;
