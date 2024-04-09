import './home.css';

const Home = () => (
  <div className="home">
    <div className="welcome-card">
      <h1 className="main-h">Welcome to My Calculator Website!</h1>
      <p className="home-p">
        Enjoy a hassle-free and user-friendly
        calculator experience.
      </p>
      <p className="home-p">
        Here are some features of our calculator:
        <ul className="home-ul">
          <li className="home-li">Basic arithmetic operations such as addition, subtraction, and more.</li>
          <li className="home-li">Clear button for easy resetting of the calculator.</li>
          <li className="home-li">Responsive design for seamless usage across various devices.</li>
        </ul>
      </p>
      <p className="home-p">
        Start using our calculator now and simplify your calculations!
      </p>
    </div>
  </div>
);

export default Home;
