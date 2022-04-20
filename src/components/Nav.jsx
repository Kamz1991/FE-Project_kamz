import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link to="/cooking">Cooking</Link>
      <Link to="/coding">Coding</Link>
      <Link to="/football">Football</Link>
    </nav>
  );
};
export default Nav;
