'use client';

import Image from 'next/image';
import React from 'react'



const LikeThread = () => {
    const [isLiked, setIsLiked] = React.useState(false)

    const handleLikeToggle = () => {

        setIsLiked((prev) => !prev);
    
    }

    return (
        <Image
            src={`/assets/heart-${isLiked ? 'filled' : 'gray'}.svg`}
            alt='heart'
            width={24}
            height={24}
            className='cursor-pointer object-contain'
            onDoubleClick={handleLikeToggle}
        />
    )
}

export default LikeThread