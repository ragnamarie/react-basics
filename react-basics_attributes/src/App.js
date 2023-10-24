import React from "react";
import "./styles.css";

export default function App() {
  return <Article>Replace me with an article</Article>;
}

export function Article() {
  return (
    <article>
      <h2 className="article__title">random features</h2>
      <label htmlFor="type">type something</label>
      <input type="text" id="type" name="type"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Succession_(TV_series)"
      ></a>
    </article>
  );
}
