import { useEffect } from 'react';
import { useState } from 'react';

export const CleanUp = () => {
    const [resourceType, setResourceType] = useState("Posts");
    
    useEffect(() => {
        console.log("Rendered")
        
        return () => {
            console.log("Return after cleanup")
        }
    }, [resourceType])
    
    // const goFromHere = () => {
    //     console.log("I am here amnd you gop there")
    // }
    // goFromHere();
    
    
    const showPosts = () => {
        setResourceType("Posts")
    }
    
    const showUsers = () => {
        setResourceType("Users")
    }
    
    const showComments = () => {
        setResourceType("Comments")        
    }
    
    // Without CleanUp
    useEffect(() => {
    window.addEventListener("resize", () => {
        console.log("resized")
    })
    }, [])
    
    
    // With CleanUp
   /*  useEffect(() => {
    const handleResize = () => {
        console.log("resized")
    }

    window.addEventListener("resize", handleResize)

    return () => {
        window.removeEventListener("resize", handleResize)
    }
    }, []) */
    
    return (
        <div>
          <button onClick = {showPosts}>Posts</button>
          <button onClick = {showUsers}>Users</button>
          <button onClick = {showComments}>Comments</button>
          
          <h2>{resourceType}</h2>
        </div>
    )
}