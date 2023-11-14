
import React, { useState } from 'react';

const LikeDislike = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);

  };
  const handleDislike = () => {
    setLiked(false);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
};

export default LikeDislike;
