import React from 'react';
import { motion } from 'framer-motion';

function Vector1(props) {
    const pathAnimation = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: 'easeOut',
            },
        },
    };

    const textAnimation = {
        hidden: {
            y: 5,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
                delay: 1.5,
            },
        },
    };

    return (
        <div className="absolute inset-10 w-fit h-fit">
            <motion.div className="mb-2" variants={textAnimation} initial="hidden" animate="visible">
                <p className="text-white rounded-md text-md -translate-x-6 font-bold">Air Force One</p>
                <p className="text-white rounded-md text-xs -translate-x-6  leading-[0.5em]">Nike Classic</p>
            </motion.div>
            <svg
                width={178}
                height={154}
                viewBox="0 0 178 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // {...props}
                className="w-[5em] h-[5em]"
            >
                <motion.path
                    d="M120.181 133.249l-3.458 3.612 3.458-3.612zM44 88l4.51-2.16L44 88zm4.273-85.097a5 5 0 00-6.87-1.676L2.949 24.601a5 5 0 105.195 8.545l34.18-20.776 20.777 34.18a5 5 0 108.545-5.194L48.273 2.903zM178 143.5c-27.036 0-42.097-2.122-54.362-13.863l-6.915 7.224C132.143 151.622 151.036 153.5 178 153.5v-10zM129.5 67c8.886 0 15.201 3.73 19.42 9.184C153.251 81.782 155.5 89.4 155.5 97h10c0-9.4-2.751-19.282-8.67-26.934C150.799 62.27 141.614 57 129.5 57v10zm26 30c0 8.137-4.188 15.614-11.566 21.399-7.404 5.806-17.814 9.699-29.394 10.399-22.943 1.387-50.14-9.795-66.03-42.959l-9.02 4.322c17.689 36.914 48.742 50.245 75.654 48.619 13.348-.807 25.766-5.302 34.96-12.511C159.323 119.04 165.5 108.875 165.5 97h-10zM48.51 85.84c-5.21-10.874-6.501-25.37-5.705-40.133.79-14.645 3.595-28.944 6.053-39.022l-9.716-2.37C36.6 14.737 33.655 29.688 32.82 45.168c-.829 15.362.38 31.866 6.67 44.993l9.02-4.322zm75.128 43.797c-7.979-7.638-19.798-17.423-20.139-32.748l-9.998.222c.453 20.328 16.319 33.142 23.222 39.75l6.915-7.224zm-20.139-32.748c-.179-8.005 2.008-15.55 6.283-20.981C113.946 70.618 120.334 67 129.5 67V57c-12.162 0-21.473 4.97-27.576 12.722-5.992 7.613-8.642 17.568-8.423 27.39l9.998-.223z"
                    fill="url(#paint0_linear_119_7)"
                    variants={pathAnimation}
                    initial="hidden"
                    animate="visible"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_119_7"
                        x1={97}
                        y1={-12.5}
                        x2={97}
                        y2={145}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FBB454" />
                        <stop offset={0.0001} stopColor="#3B44F6" />
                        <stop offset={1} stopColor="#72FFFF" />
                    </linearGradient>
                </defs>
            </svg>
            {/* <svg
                width="187"
                height="199"
                viewBox="0 0 187 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[5em] h-[5em]"
            >
                <motion.path
                    d="M181 185C170.274 192.89 148.665 193 135.5 191C115.806 188.008 95.5989 173.833 88.2778 156.667C80.9567 139.5 76.9719 118.952 93.7778 105C108.444 95.5 120.091 100.382 122 110.5C123.612 119.044 118 123.945 110.5 129.5C93.656 141.977 60.3103 132.494 44.4445 124.111C20.5269 111.474 10.3137 88.6597 6.8889 62.6667C4.17645 42.0799 9.75968 25.5407 18 7"
                    stroke="url(#paint0_linear_102_12)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    variants={pathAnimation}
                    initial="hidden"
                    animate="visible"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_102_12"
                        x1="89.0984"
                        y1="7"
                        x2="89.0984"
                        y2="191.59"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#31E1F7" />
                        <stop offset="1" stopColor="#6FEDD6" />
                    </linearGradient>
                </defs>
            </svg> */}
        </div>
    );
}

export default Vector1;
