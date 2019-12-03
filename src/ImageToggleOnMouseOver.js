import React, {useRef} from 'react';

const ImageToggleOnMouseOver = (props) => {
    const imgRef = useRef(null)

    return (
          <img 
          onMouseOver={() => {
              imgRef.current.src = props.secondaryImg
          }}
          onMouseOut={()=>{
              imgRef.current.src = props.primaryImg
          }}
          src={props.primaryImg} 
          alt=""
          ref={imgRef} />
    );
};

export default ImageToggleOnMouseOver;