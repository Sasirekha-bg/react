

export default function Collections({gentsFashion}){
    return(
        <div className="MenSection">
            <h2>{gentsFashion.title}</h2>
            <div className="men-cards">
            <img src={gentsFashion.image1} alt={gentsFashion.title} />
            <img src={gentsFashion.image2} alt={gentsFashion.title} />
            <img src={gentsFashion.image3} alt={gentsFashion.title} />
            <img src={gentsFashion.image4} alt={gentsFashion.title} />
            <img src={gentsFashion.image5} alt={gentsFashion.title} />
            <img src={gentsFashion.image6} alt={gentsFashion.title} />
            </div>
        </div>
    )
}