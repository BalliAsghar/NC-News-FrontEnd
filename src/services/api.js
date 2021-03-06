import axios from "axios";

const NewsAPI = axios.create({
  baseURL: "https://balli-test-news.herokuapp.com/api",
});

const getArticles = async (topic, p) => {
  const params = {
    topic: topic,
    p: p,
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

const login = async (username) => {
  const { data } = await NewsAPI.get(`/users/${username}`);
  return data;
};

const likeComment = async (id) => {
  const data = {
    inc_votes: 1,
  };
  try {
    const resopnse = await NewsAPI.patch(`/comments/${id}`, data);
    return resopnse;
  } catch (error) {
    return error;
  }
};

const deleteComment = async (id) => {
  try {
    const resopnse = await NewsAPI.delete(`/comments/${id}`);
    return resopnse.status;
  } catch (error) {
    return error;
  }
};

const likeArticle = async (id) => {
  const data = {
    inc_votes: 1,
  };
  try {
    const resopnse = await NewsAPI.patch(`/articles/${id}`, data);
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
  login,
  likeComment,
  deleteComment,
  likeArticle,
};

export default ApiServices;
