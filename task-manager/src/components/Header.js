import PropTypes from "prop-types";
import Button from "./Button";
import Tasks from "./Tasks";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("object");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="ADD" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task manager",
};

// using CSS in JS or JSx
// const HeadingStyle = { backgroundColor: "black", color: "red" };

Header.propTypes = { title: PropTypes.string.isRequired };
export default Header;
