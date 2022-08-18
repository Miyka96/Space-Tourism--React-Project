import "./index.css";

const Home = ({children}) => {
  return (
    <div className="homeSection animate__animated animate__fadeIn">
        <div className="text_wrapper">
          <h5>so, you want to travel to</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        {children}
    </div>
  );
};

export default Home;
