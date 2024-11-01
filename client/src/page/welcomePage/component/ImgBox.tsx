import React from 'react'

interface ImgBoxProps {
  imgUrl: string;
}

const ImgBox: React.FC<ImgBoxProps> = ({ imgUrl }) => {
  return (
    <div>
      <img src={imgUrl} alt="random" />
    </div>
  )
}

export default ImgBox