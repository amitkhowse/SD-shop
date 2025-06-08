const Table = ({ columns, data, actions }) => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 text-left">{col}</th>
              ))}
              {actions && <th className="px-4 py-2">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2">{row[col]}</td>
                ))}
                {actions && (
                  <td className="px-4 py-2">
                    {actions.map((action, actionIndex) => (
                      <button key={actionIndex} onClick={() => action.onClick(row)} className="px-2 py-1 bg-blue-500 text-white rounded-md mx-1">
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            )) : (
              <tr><td colSpan={columns.length + 1} className="text-center py-4">No Data Found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  