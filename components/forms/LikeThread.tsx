'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { likeThread , unlikeThread } from '@/lib/actions/thread.actions';

type LikeThreadProps = {
  threadId: string;
  user: any;
};

const LikeThread: React.FC<LikeThreadProps> = ({ threadId, user }) => {
  const isAlreadyLiked = user?.likedThreads?.includes(threadId);  
  const [isLiked, setIsLiked] = useState(isAlreadyLiked);
  console.log('isLiked:', isLiked);

  const handleLikeToggle = async () => {
    try {
      if (isLiked) {
        // Implement unlike functionality here if needed
        await unlikeThread(threadId, user._id).then(() => {
            console.log('Unliking thread:', threadId);
            setIsLiked(false);
        });
       
      } else {
        await likeThread(threadId, user._id);
        console.log('Liking thread:', threadId);
        setIsLiked(true);
      }
    //   setIsLiked(prev => !prev);
    } catch (err) {
      console.error('Error while toggling like:', err);
    }
  };

  return (
    <Image
      src={`/assets/heart-${isLiked ? 'filled' : 'gray'}.svg`}
      alt='heart'
      width={24}
      height={24}
      className='cursor-pointer object-contain'
      onClick={handleLikeToggle}
    />
  );
};

export default LikeThread;
