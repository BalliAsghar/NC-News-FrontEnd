import axios from "axios";

const NewsAPI = axios.create({
  baseURL: "https://balli-nc-news.herokuapp.com/api",
});

const getArticles = async (topic) => {
  const params = {
    topic: topic,
  };

  try {
    const resopnse = await NewsAPI.get("/articles", { params });
    return resopnse;
  } catch (error) {
    return error;
  }
};

const getTopics = async () => {
  try {
    const resopnse = await NewsAPI.get("/topics");
    return resopnse;
  } catch (error) {
    return error;
  }
};

const getArticlesByID = async (id) => {
  try {
    const resopnse = await NewsAPI.get(`/articles/${id}`);
    return resopnse;
  } catch (error) {
    return error;
  }
};

const getCommentsByArticleID = async (id) => {
  try {
    const resopnse = await NewsAPI.get(`/articles/${id}/comments`);
    return resopnse;
  } catch (error) {
    return error;
  }
};

const ApiServices = {
  getArticles,
  getTopics,
  getArticlesByID,
  getCommentsByArticleID,
};

export default ApiServices;
