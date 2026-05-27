export const Card = ({name, price= 5000}) => {
    return(
        <>
            <h1>Cart</h1>
            <h2>Product Name: {name}</h2>
            <p>Price: {price}</p>
        </>
    )
}