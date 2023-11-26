import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
// import TypingText from "./typing-text/typingText.jsx";
const categories = [
  {
    id: 1,
    title: "Bracelets",
    imageUrl: "https://i.ibb.co/8MX0x4P/20230912-184727.jpg",
    route: "shop/bracelets",
  },
  {
    id: 2,
    title: "Key rings",
    imageUrl: "https://i.ibb.co/gPYXKnY/Untitled.png",
    route: "shop/key-rings",
  },
  // {
  //   "id": 3,
  //   "title": "sneakers",
  //   "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  // },
  // {
  //   "id": 4,
  //   "title": "Women",
  //   "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  // },
  // {
  //   "id": 5,
  //   "title": "Kids",
  //   "imageUrl": "https://wallpapercave.com/wp/wp8575689.jpg"
  // }
];
const Directory = () => {
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
