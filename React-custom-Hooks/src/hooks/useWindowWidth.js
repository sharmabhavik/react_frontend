import { useState, useEffect} from "react"


function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        
    function resizeWidth(){
        setWidth(window.innerWidth);
    }
    
    window.addEventListener("resize", resizeWidth);
    
    return () => {
        window.removeEventListener("resize", resizeWidth);
    }}, [])
    
    
    return width;
}

export default useWindowWidth;