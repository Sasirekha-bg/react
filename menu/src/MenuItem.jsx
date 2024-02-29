import './menuItem.css';

export default function MenuItem({ item }) {
    return (
        <div className='card'>
            <img src={item.img} alt="" />
            <div>
                <div className='title'>
                    <h2>{item.title}</h2>
                    <p>$ {item.price}</p>
                </div>
                <div className='desc'>
                    <p>{item.desc}</p>
                </div>
            </div>
        </div>
  );
}