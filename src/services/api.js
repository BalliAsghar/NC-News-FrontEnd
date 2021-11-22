import axios from "axios";

const NewsAPI = axios.create({
  baseURL: "https://balli-nc-news.herokuapp.com/api",
});

const getAllArticles = async () => {
  try {
    const resopnse = await NewsAPI.get("/articles");
    return resopnse.data.Articles;
  } catch (error) {
    return error;
  }
};

const ApiServices = {
  getAllArticles,
};

export default ApiServices;
