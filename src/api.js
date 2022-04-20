import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://kamz-be-project.herokuapp.com/api/",
});

export const getArticles = (topic) => {
  let path = "/articles";
  if (topic) {
    path += `/?topic=${topic}`;
  }
  return articlesApi.get(path).then(({ data }) => {
    return data.articles;
  });
};
