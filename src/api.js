import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://kamz-be-project.herokuapp.com/api/",
});

export const getArticles = (topic, sort_by, order) => {
  let path = "/articles";

  if (topic) {
    path += `/?topic=${topic}`;
  }
  // console.log({ path });
  console.log(path, sort_by, order);
  let params = {};
  if (sort_by && order) {
    params = {
      sort_by,
      order,
    };
  }
  return articlesApi
    .get(path, {
      params: params,
    })
    .then(({ data }) => {
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

export const getComments = (article_id) => {
  let path = `/articles/${article_id}/comments`;

  return articlesApi.get(path).then(({ data }) => {
    return data.comments;
  });
};

export const postedComments = (article_id, newComment, username) => {
  let path = `/articles/${article_id}/comments`;

  return articlesApi
    .post(path, { body: newComment, username: username })
    .then(({ data }) => {
      return data.comment;
    });
};
