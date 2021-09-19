import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import {useState,useEffect} from 'react';


const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList=()=>{
  const [articles,setArticles]=useState(null);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);
      try{
        const response=await axios.get(
          'http://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3cf1f',
        );
      
      setArticles(response.data.articles);
    } catch(e){
      console.log(e);
    }
    setLoading(false);
  };
fetchData();
 },[] );

if (loading){
  return <NewsListBlock>대기 중...</NewsListBlock>;
}
if(!articles){
  return null;
}

return(
  <NewsListBlock>
    {articles.map(article=>(
      <NewsItem key={articles.url} article={article}/>
    )
    )}
  </NewsListBlock>
);
};
export default NewsList;


const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};
export default NewsList;
