import {useState} from "react";
import Bloglist from "./Bloglist";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'halvard', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'petter', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'halvard', id: 3 }
  ]);

  const handleClick = () => {
    
  };

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All blogs" />
      
      <Bloglist blogs={blogs.filter((i) => {
        if(i.author != "halvard")
          return false;
        return true;
      })} title="KEKS blogs" />
    </div>
  );
}

export default Home;
