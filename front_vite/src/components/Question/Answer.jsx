// import './Answer.scss';


// const Answer = ({ data }) => {
//     return (<div className="answer">
//         <div className="answer__icon"></div>
//         <p className="answer__text">{data.answer}</p>
//     </div>);
// };

// export default Answer;
import React from 'react';
import './Answer.scss';

const Answer = ({ answer }) => {
  return (
    <div className="answer">
      <div className="answer__icon"></div>
      <p className="answer__text">{answer}</p>
    </div>
  );
};

export default Answer;
