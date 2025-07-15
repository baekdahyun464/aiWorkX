import './table.scss';

type TableProps = {
  col: string[];
  data: (string | number | React.ReactNode)[][];
};

export default function Table({ col, data }: TableProps) {
  return (
    <table className="table">
      {/* table 데이터길이별 자동넓이 */}
      <colgroup>
        {data[0]?.map((cell, idx) => {
          let width = 'auto';

          if (typeof cell === 'string') {
            const len = cell.length;
            width = `${len * 10}px`;
          } else if (typeof cell === 'number') {
            width = '60px';
          } else {
            width = '120px';
          }
          return <col key={idx} style={{ width }} />;
        })}
      </colgroup>
      {/* table 데이터길이별 자동넓이 */}

      <thead>
        <tr>
          {col.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
