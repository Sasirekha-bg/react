export default function ProductCard({title,price,image}){
    return(
        <>
        <div className="card">
            <img src={image} alt="" />
            <p>{title}</p>
            <p>${price}</p>
        </div>
        </>
    )
}