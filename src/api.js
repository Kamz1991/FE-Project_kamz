import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://kamz-backend-projct.herokuapp.com/api",
});

export const getArticles = () => {
  return articlesApi.get("/articles").then(({ data }) => {
    console.log(data.articles, ">>>>>>>>");
    return data.articles;
  });
};
