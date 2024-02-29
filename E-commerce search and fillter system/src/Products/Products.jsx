import './Products.css'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Products() {
    return (
        <>
            <section className='card-container'>
                <section className='card'>
                    <img src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg" alt="" />
                    <div className="card-details">
                        <h3 className="card-title">Sandals</h3>
                        <section className='card-reviews'>
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />
                            <AiFillStar className='rating-star' />
                            <span className='total-reviews'>4</span>
                        </section>
                    </div>
                    <section className='card-price'>
                        <div className="price">
                            <del>$300</del><span>200</span>
                        </div>
                        <div className="bag">
                            <BsFillBagHeartFill />
                        </div>
                    </section>
                </section>

            </section>
        </>
    )
}
