import {Blog} from '../cmps/Blog'
import {Sidebar} from '../cmps/Sidebar'
import {Rightbar} from '../cmps/Rightbar'

export const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
      <Sidebar />
      <Blog/>
      <Rightbar/>
      </div>
    </div>
  );
};
