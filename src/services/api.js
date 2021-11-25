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

const getCommentsByArticleID = async (id, p) => {
  const params = {
    p: p,
  };
  try {
    const resopnse = await NewsAPI.get(`/articles/${id}/comments`, { params });
    return resopnse;
  } catch (error) {
    return error;
  }
};

const postCommentOnArticle = async (id, username, comment) => {
  const data = {
    username,
    body: comment,
  };

  try {
    const resopnse = await NewsAPI.post(`/articles/${id}/comments`, data);
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
  postCommentOnArticle,
};

export default ApiServices;
