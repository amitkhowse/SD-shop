export const fetchDashboardStats = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalSales: 50000,
          totalOrders: 120,
          totalCustomers: 80,
          totalProducts: 150,
          recentOrders: [
            { id: "ORD001", customer: "John Doe", total: 200, status: "Completed" },
            { id: "ORD002", customer: "Jane Smith", total: 350, status: "Pending" },
            { id: "ORD003", customer: "Bob Johnson", total: 150, status: "Completed" },
          ],
        });
      }, 1000);
    });
  };
  