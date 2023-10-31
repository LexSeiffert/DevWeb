import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home() {
  const { user } = useParams();
  console.log("PARAMS: ", user);

  return (
    <>
      <h1>Home</h1>
      {user == undefined ? <h2>Olá visitante</h2> : <h2>Olá {user}</h2>}

      <nav>
        <ul>
          <li>
            <a href="https://www.google.com" target="_blank">
              Google
            </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
