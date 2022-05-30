import React from "react";

const Answer = ({ answer }) => {
  return (
    <div class="card-body">
      <div class="card w-96 bg-base-100 shadow-xl p-6">
        <h2 class="card-title">{answer.name}</h2>
        <p>{answer.answer}</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Answer;
