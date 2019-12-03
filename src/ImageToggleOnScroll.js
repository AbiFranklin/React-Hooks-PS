import React, {useRef, useEffect, useState} from 'react';

const ImageToggleOnScroll = (props) => {
    const imgRef = useRef(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setLoading(false);
        return (() => {
            window.removeEventListener("scroll", scrollHandler)
        })
    })

    const [inView, setInView] = useState(false)

    const isInView = () => {
        if (imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false
    }

    const scrollHandler = () => {
        setInView(()=>{return isInView()})
    }

    return loading ? null : (
          <img 
          src={inView ? props.secondaryImg : props.primaryImg}
          alt=""
          ref={imgRef} />
    );
};

export default ImageToggleOnScroll;