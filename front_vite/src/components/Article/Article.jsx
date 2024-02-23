import './Article.scss'

const Article = () => {
    return (
        <div className="article">
            <img src="" className="article__img"></img>
            <div className="article__topics">
                <span className="article__topic">Познавательно</span>
                <span className="article__topic">Донорам</span>
            </div>
            <h3 className="article__title">Почему вашему питомцу нужно быть донором</h3>
            <a className="article__link">Читать</a>
        </div>
      );
}
 
export default Article;