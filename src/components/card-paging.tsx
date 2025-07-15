import { useState } from 'react';
import Card from './card';
import { cardListData } from '../testLoading.ts';

const ITEMS_PER_PAGE = 4;

export default function CardPaging() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardListData.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const currentData = cardListData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div>
      {/* 페이징 */}
      {totalPages > 1 && (
        <div className="pagination-arrow">
          <button onClick={handlePrev} disabled={currentPage === 1}></button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
          ></button>
        </div>
      )}

      <ul className="card-wrap">
        {currentData.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}
