import { useEffect, useRef } from 'react';
import { fromCallback } from '../../../../../node_modules/@types/bluebird';

const useInterval = (fromCallback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, callback);

    useEffect(() => {
        function tick(){
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, delay);
};

export default useInterval