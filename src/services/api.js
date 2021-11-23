import axios from "axios";

const NewsAPI = axios.create({
  baseURL: "https://balli-nc-news.herokuapp.com/api",
});

const getArticles = async () => {
  try {
    const resopnse = await NewsAPI.get("/articles");
    return resopnse.data.Articles;
  } catch (error) {
    return error;
  }
};

const getTopics = async () => {
  try {
    const resopnse = await NewsAPI.get("/topics");
    return resopnse.data.topics;
  } catch (error) {
    return error;
  }
};

const ApiServices = {
  getArticles,
  getTopics,
};

export default ApiServices;
