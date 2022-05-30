import { useState, useEffect } from "react";
import { patchVotes } from "../api";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import { Button } from "@mui/material";

function VoteButton({ article_id, votes, setSingleArticle }) {
  const [displayedVotes, setDisplayedVotes] = useState(0);
  const [haveBeenClicked, setHaveBeenClicked] = useState(false);
  const [changeToVote, setChangeToVote] = useState(0);

  useEffect(() => {
    if (!haveBeenClicked) return;

    patchVotes(article_id, changeToVote).then((article) => {
      setSingleArticle(article);
      setDisplayedVotes(article.votes);
    });
    setHaveBeenClicked(false);
  }, [
    haveBeenClicked,
    article_id,
    displayedVotes,
    votes,
    setSingleArticle,
    changeToVote,
  ]);

  // if (!article_id) return null;
  const handleClick = (e, newVote) => {
    e.preventDefault();
    setHaveBeenClicked(true);
    setChangeToVote(newVote);
    setDisplayedVotes(votes + newVote);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        style={{ margin: "10px" }}
        variant="outlined"
        startIcon={<ThumbUpOffAltRoundedIcon />}
        onClick={() => handleClick(1)}
      />
      <Button
        style={{ margin: "10px" }}
        variant="outlined"
        startIcon={<ThumbDownRoundedIcon />}
        onClick={() => handleClick(-1)}
      />

      {/* <p className="vote-text">vote:{displayedVotes || votes}</p> */}
    </div>
  );
}

export default VoteButton;

// import { useState, useEffect } from "react";
// import { patchVotes } from "../api";

// function VoteButton({ article_id, votes, setSingleArticle }) {
//   const [displayedVotes, setDisplayedVotes] = useState(0);
//   const [haveBeenClicked, setHaveBeenClicked] = useState(false);
//   const [changeToVote, setChangeToVote] = useState(0);

//   useEffect(() => {
//     if (!haveBeenClicked) return;

//     patchVotes(article_id, changeToVote).then((article) => {
//       setSingleArticle(article);
//       setDisplayedVotes(article.votes);
//     });
//     setHaveBeenClicked(false);
//   }, [
//     haveBeenClicked,
//     article_id,
//     displayedVotes,
//     votes,
//     setSingleArticle,
//     changeToVote,
//   ]);

//   if (!article_id) return null;
//   const handleClick = (e, newVote) => {
//     e.preventDefault();
//     setHaveBeenClicked(true);
//     setChangeToVote(newVote);
//     setDisplayedVotes(votes + newVote);
//   };
//   return (
//     <div>
//       <button className="green-button" onClick={() => handleClick(1)}>
//         👍🏽
//       </button>
//       <button className="red-button" onClick={() => handleClick(-1)}>
//         👎🏽
//       </button>
//       <p className="vote-text">vote:{displayedVotes || votes}</p>
//     </div>
//   );
// }

// export default VoteButton;
