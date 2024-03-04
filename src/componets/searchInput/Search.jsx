// import React, { useState } from 'react';
// import Articles from '../articlesData/Articles';

// const SearchComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     // Filter articles based on input value
//     const filteredSuggestions = Articles.filter(article =>
//       article.title.toLowerCase().includes(value.toLowerCase())
//     );

//     setSuggestions(filteredSuggestions);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Search articles..."
//       />

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map(article => (
//             <li key={article.id}>{article.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchComponent;
