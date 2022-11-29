export default function CardAbout({item}){
    return(
        <div className="card">
            <h4 className="card__title">{item.title}</h4>
            <p className="card__text">{item.description}</p>
        </div>
    )
}