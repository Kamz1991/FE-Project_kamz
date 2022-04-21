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

export const getTopics = () => {
  let path = "/topics";
  return articlesApi.get(path).then(({ data }) => {
    return data.topics;
  });
};

export const getSingleArticle = (article_id) => {
  let path = `/articles/${article_id}`;

  return articlesApi.get(path).then(({ data }) => {
    return data.article;
  });
};
export const patchVotes = (article_id, votes) => {
  let path = `/articles/${article_id}`;
  return articlesApi.patch(path, { inc_votes: votes }).then(({ data }) => {
    return data.article;
  });
};
