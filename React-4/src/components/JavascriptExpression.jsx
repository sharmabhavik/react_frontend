export const JavascriptExpression = () => {
    const name = "Bhavik Sharma";
    let isAvailable = true;
    let yearsOfExperience = 20;    
    
    return (
    <div>
        <h1>{name}</h1>
        <p>Status: {isAvailable ? "Available to talk" : "Not available"}</p>
        <p>CollegeEnd: {2025 - yearsOfExperience}</p>
        <p>Gmail: {name.toLowerCase().replace(" ", ".")}@gmail.com</p>
        <h2></h2>
        <p></p>
    </div>
    )
}