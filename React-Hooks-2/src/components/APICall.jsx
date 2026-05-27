import { useState, useEffect } from "react";

export const APICall = () => {
    const [resourceType, setResourceType] = useState("Posts");
    const [apiData, setApiData] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setApiData(json))
    }, [resourceType])
    
    const showPosts = () => {
        setResourceType("Posts")
    }
    
    const showUsers = () => {
        setResourceType("Users")
    }
    
    const showComments = () => {
        setResourceType("Comments")        
    }
    
    return (
        <>
          <button onClick = {showPosts}>Posts</button>
          <button onClick = {showUsers}>Users</button>
          <button onClick = {showComments}>Comments</button>
          
          <h2>{resourceType}</h2>
          
          {apiData.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
          })}
        </>
    )
    
}