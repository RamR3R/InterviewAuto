import React from 'react';

const MarksTable = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Marks</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.subject}</td>
              <td className="border px-4 py-2">{item.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksTable;
