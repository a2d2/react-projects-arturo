import SingleQuestion from './SingleQuestion';
import React from 'react';
const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>CCN CATEGORIES</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        );
      })}
    </section>
  );
};
export default Questions;
