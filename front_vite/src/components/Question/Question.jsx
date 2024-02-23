// import './Question.scss';

// const Question = ({data}) => {
//     return (
//     <div className="questions">
//         <button className="questions__text">
//             {data.question}
//         </button> 
//         <div className="questions__icon"></div>
//     </div>

// );
// }
 
// export default Question;
// import React, { useState } from 'react';
// import './Question.scss';

// const Question = ({ data, handleSelect, isSelected }) => {
//   return (
//     <div className={`questions ${isSelected ? 'active' : ''}`}>
//       <button className="questions__text" onClick={() => handleSelect(data)}>
//         {data.question}
//       </button>
//       <div className="questions__icon"></div>
//     </div>
//   );
// };

// export default Question;
import React, { useState } from 'react';
import './Question.scss';

const Question = ({ data, handleSelect, isSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(true);
    handleSelect(data);
  };

  const handleInactive = () => {
    setIsActive(false);
  };

  return (
    <div className={`questions ${isActive ? 'active' : ''}`}>
      <button
        className="questions__text"
        onClick={handleActive}
        onMouseLeave={handleInactive}
      >
        {data.question}
      </button>
      <div className="questions__icon"></div>
    </div>
  );
};

export default Question;
