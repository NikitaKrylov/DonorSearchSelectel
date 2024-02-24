import './Article.scss'

const Article = ( {data} ) => {
    return (
        <div className="article">
            <img src={data.photo} className="article__img"></img>
            <div className="article__topics">
                <span className="article__topic">Познавательно</span>
                <span className="article__topic">Донорам</span>
            </div>
            <h3 className="article__title">{data.title}</h3>
            <a className="article__link">Читать</a>
        </div>
      );
}
 
export default Article;