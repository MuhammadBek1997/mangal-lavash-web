import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h2 className="section-title">Bosh sahifa</h2>
      <div className="nav-buttons">
        <Link to="/add" className="home-btn" >➕ Taom Qo‘shish</Link>
        <Link to="/change" className="home-btn">✏️ Taomni O‘zgartirish</Link>
      </div>
    </div>
  );
}

export default Home;
