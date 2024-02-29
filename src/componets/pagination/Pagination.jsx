// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageChange(number)} className={currentPage === number ? 'active' : ''}>
          {number}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
