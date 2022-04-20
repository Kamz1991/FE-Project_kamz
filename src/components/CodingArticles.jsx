// import { useEffect, useState } from "react";
// import { getArticles } from "../api";
// import { Link } from "react-router-dom";

// const CodingArticles = () => {
//   const [codingArticles, setCodingArticles] = useState([]);
//   useEffect(() => {
//     getArticles().then((articlesFromAPi) => {
//       setCodingArticles(articlesFromAPi);
//     });
//   }, []);

//   if (codingArticles.topic === "coding") {
//     return (
//       <main>
//         <h1>
//           <Link to="/">Articles Home</Link>
//         </h1>

//         <h2>List of our Coding articles</h2>
//         {codingArticles.map((article) => {
//           return (
//             <ul>
//               <li key={article.article_id}>
//                 <h2>{article.title}</h2>
//                 <p>topic: {article.topic}</p>
//                 <p>votes: {article.votes}</p>
//                 <p>author: {article.author}</p>
//               </li>
//             </ul>
//           );
//         })}
//       </main>
//     );
//   }
// };

// export default CodingArticles;
