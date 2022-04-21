import { useState } from "react";

function VoteButton() {
  const [vote, setVote] = useState(0);
  return (
    <div>
      <button
        className="green-button"
        onClick={() => setVote((currentVote) => currentVote + 1)}
      >
        👍🏽
      </button>
      <button
        className="red-button"
        onClick={() => setVote((currentVote) => currentVote - 1)}
      >
        👎🏽
      </button>
      <p>vote:{vote}</p>
    </div>
  );
}

export default VoteButton;
