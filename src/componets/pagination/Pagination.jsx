// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      <div className="page-info">
        <p>{`Page ${currentPage} of ${totalPages}`}</p>
      </div>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
