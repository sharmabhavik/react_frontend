export const Product = ({title, price, inStocks, Categories}) => {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>Price: {price}</p>
                <p>In Stock: {inStocks? "Yes": "No"}</p>
                <p>Categories: {Categories.join(", ")}</p>
            </div>
        </>
    )
}