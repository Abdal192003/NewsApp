import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [backgroundColor, setbackgroundColor] = useState("white");
    const [color, setColor] = useState("black");
    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(false);


    const updateNews = async () => {
        setloading(true)
        props.setProgress(10);
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}`);
        const parsedData = await data.json();
        setArticles(parsedData.articles)
        setloading(false)
        props.setProgress(100);
    }


    useEffect(() => {
        updateNews();
    }, [page,props.category])


    const toggleMode = () => {
        if (backgroundColor == "white") {
            setbackgroundColor("black")
            setColor("white")
        } else {
            setbackgroundColor("white")
            setColor("black")
        }
        console.log("You clicked me ")
    }

    const clickedNext = async () => {
        setloading(true)
        setPage(page + 1);
        setloading(false)
    }

    const clickedPrev = async () => {
        setloading(true)
        setPage(page-1);
        setloading(false)
    }


    return (
        <div className="parentDiv" style={{ backgroundColor: backgroundColor, color:color }}>
            <div className='container my-4'>
                <h2 style={{ color:color }} className='text-center'>News Top Headline</h2>

                {/* New syntax in i came to know  if loading is true then show spinner if not then don't show */}
                {loading && <Spinner />}

                <button type="button" className="btn btn-primary" onClick={toggleMode}>Enable Dark Mode</button>
                <br />
                <br />
                <div className="row">
                    {articles.map((element, index) => {
                        return <div className="col-md-4" key={element.url || index}>
                            <NewsItem title={element.title} description={element.description} url={element.urlToImage} info={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
            </div>
            <div class="d-flex justify-content-around">
                <button type="button" disabled={page==1} className="btn btn-dark" onClick={clickedPrev}>Prev &larr;</button>
                <button type="button" className="btn btn-dark" onClick={clickedNext}>Next &rarr;</button>
            </div>
            <br />
            <strong style={{ color:color, }}>MADE  BY  ABDAL AHMAD KHAN</strong>
        </div>
    )
}


