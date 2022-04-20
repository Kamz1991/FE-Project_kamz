const TopicSearch = ({ setCategory }) => {
  return (
    <form>
      <label htmlFor="Topic"></label>
      <select
        onChange={(e) =>
          setTopic((currtopic) => {
            const newTopic = e.target.value;

            return newTopic;
          })
        }
      >
        <option value="cooking">Electronics</option>
        <option value="Coding">Relics</option>
        <option value="football">Clothing</option>
      </select>
    </form>
  );
};
export default TopicSearch;
