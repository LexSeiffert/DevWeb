import React from "react";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <>
      <h1>Contato</h1>

      <nav>
        <ul>
          <li>
            <a href="https://www.google.com" target="_blank">
              Google
            </a>
          </li>
          <li>
            <Link to="../login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
