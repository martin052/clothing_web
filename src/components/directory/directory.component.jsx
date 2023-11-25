import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
// import TypingText from "./typing-text/typingText.jsx";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {/* <TypingText  />  */}
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}></DirectoryItem>
      ))}
    </div>
  );
};

export default Directory;
