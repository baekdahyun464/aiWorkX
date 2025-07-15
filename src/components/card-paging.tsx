import { useState } from 'react';
import { cardListData } from './data';
import Card from './card';
import Paging from './layout/paging';

export default function CardPaging() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalItems = cardListData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = cardListData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="card-paging">
      <div className="card-list">
        {currentItems.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
