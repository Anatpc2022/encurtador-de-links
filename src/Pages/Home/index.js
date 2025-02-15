import { FiLink } from "react-icons/fi";
import "./home.css";
import Menu from "../../components/Menu";
import { useState } from "react";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });
      setData(response.data);
      setShowModal(true);
      saveLink("@encurtaLink", response.data);
      setLink("");
    } catch (error) {
      alert("Ops parece que algo deu errado!");
      setLink("");
    }
  }
  return (
    <div className="container_home">
      <div className="logo">
        <img src="/logo.png" alt="logo link" />
        <h1>Ana Link</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>
      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
