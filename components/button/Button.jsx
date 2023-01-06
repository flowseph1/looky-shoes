import React from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

function Button({ children, href, intent, size }) {
    const buttonClasses = cva(
        'text-white flex items-center justify-center transition-shadow duration-500 cursor-pointer',
        {
            variants: {
                intent: {
                    primary:
                        'rounded-full bg-gradient-to-r from-indigo-600 to-purple-600  shadow-md shadow-indigo-600/50 hover:shadow-lg hover:shadow-indigo-600/50',
                    secondary: 'bg-gradient-to-r from-zinc-800 to-neutral-800 rounded-md shadow-contour',
                    tertiary:
                        'rounded-full bg-gradient-to-r from-neutral-600/50 to-gray-600/50 hover:shadow-lg hover:shadow-slate-600/20',
                },
                size: {
                    small: 'text-xs px-3 h-7',
                    medium: 'text-sm px-4 h-8',
                    large: 'text-md px-6 h-12',
                },
            },
            defaultVariants: {
                intent: 'primary',
                size: 'medium',
            },
        }
    );

    return (
        <Link href="">
            <div className={buttonClasses({ intent, size })}>{children}</div>
        </Link>
    );
}

export default Button;
