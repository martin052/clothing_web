import Directory from '../../components/directory/directory.component';

const Home = () => {
    const categories = [
        {
          "id": 1,
          "title": "Bracelets",
          "imageUrl": "https://i.ibb.co/8MX0x4P/20230912-184727.jpg"
        },
        {
          "id": 2,
          "title": "Key rings",
          "imageUrl": "https://i.ibb.co/gPYXKnY/Untitled.png"
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
      return <Directory categories={categories} />;
        
      
  };


export default Home;