import React from "react";

const BlogComp = (p) => {
  return (
    <div>
      <div>
        <img src={p.img} alt="" />
      </div>
      <div>{p.date}</div>
      <div>
        <h2>{p.header}</h2>
        <p>
          We are dedicated in creating added value for our customers by
          implementing modern technology in our work.{" "}
        </p>
        <ul>
          <li>Urgent transport solutions </li>
          <li>Reliable & experienced staffs </li>
          <li>Urgent transport solutions</li>
          <li> Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="mt-[200px]">
      <BlogComp />
      <BlogComp />
      <BlogComp />
      <button>More Blog</button>
    </div>
  );
};

export default Blog;
