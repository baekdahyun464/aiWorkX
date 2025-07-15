import { useState } from 'react';

const DummyCard = ({ index }: { index: number }) => (
  <li className="card">Card #{index + 1}</li>
);

export default function Paging() {
  const ITEMS_PER_PAGE = 4;
  const TOTAL_ITEMS = 12;
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  const [page, setPage] = useState(1);

  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;

  return (
    <div>
      {/* 화살표 페이징 */}
      <div className="pagination-arrow">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
        ></button>
        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        ></button>
      </div>

      {/* 임의 콘텐츠 */}
      <ul className="card-wrap">
        {Array.from({ length: TOTAL_ITEMS })
          .slice(startIdx, endIdx)
          .map((_, i) => (
            <DummyCard key={startIdx + i} index={startIdx + i} />
          ))}
      </ul>
    </div>
  );
}
