import { useLayoutEffect, useState } from "react"

export default function WindowResizeHookComponent() {
    const [windowSize, setWindowSize] = useState({
        heigh: 0,
        width: 0
    });

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useLayoutEffect(() => {

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return windowSize;
}