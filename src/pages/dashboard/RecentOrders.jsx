const RecentOrders = ({ orders }) => {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg mt-6">
        <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">${order.total}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded text-white ${order.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentOrders;
  