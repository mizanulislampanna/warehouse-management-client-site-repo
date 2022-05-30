import React from "react";
import Answer from "./Answer";

const Blog = () => {
  const answers = [
    {
      id: 1,
      name: "What are differences between JavaScript and nodejs?",
      answer:
        "Javascript is a programming language that is used for writing scripts on the website but NodeJS is a Javascript runtime environment. JavaScript is used for client side and NodeJS is used for server side. Nodejs does not have capability to add HTML tags but JavaScript can add HTML tags using DOM.",
    },
    {
      id: 2,
      name: "When should we use NodeJS and when should MongoDB?",
      answer:
        "NodeJS is JavaScript runtime environment and MongoDB is a NoSQL database. NodeJS is used for server side where it can get, post, update or delete any data from database. When it comes to store something we will use MondoDB and to access data from database we will use NodeJS ",
    },
    {
      id: 3,
      name: "What are the differences between NoSQL and SQL?",
      answer:
        "NoSQL have dynamic schema where SQL have static schema. NoSQL are horizontally scalable but SQL are vertically scalable. NoSQL is used for storing data in the form of JSON but SQL is used for storing data in the form of SQL.",
    },
    {
      id: 4,
      name: "What is JWT and how does it work?",
      answer:
        "The full form of JWT is JSON Web Token. It is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. When an user logs in jwt creates a token for that user and using that token it verifies if user is authorized or not. If not it takes action..   ",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer}></Answer>
        ))}
      </div>
    </div>
  );
};

export default Blog;
