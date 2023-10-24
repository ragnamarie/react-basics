import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle>Replace me with your Component!</HelloWorldArticle>;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>
        <p>bonjour!</p>
      </h1>
    </article>
  );
}
