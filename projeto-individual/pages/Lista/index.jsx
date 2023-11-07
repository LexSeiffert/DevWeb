import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Lista = () => {
  return (
    <div className="bg">
      <p>
        Bem-vindo ao seu gerenciador de tarefas favorito! Aqui, você pode criar,
        concluir e excluir suas tarefas de maneira fácil e intuitiva. <br />{" "}
        <br />
        Vamos começar?
      </p>
      <br />
      <Link to="/lista">
        <h2>Clique Aqui</h2>
      </Link>
    </div>
  );
};

export default Lista;
