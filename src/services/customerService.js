const API_URL = "https://yourapi.com/api/customers"; // Replace with your API

const customerService = {
  getCustomerStats: async () => {
    try {
      const response = await fetch(`${API_URL}/stats`);
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch customer stats:", error);
      return {
        totalCustomers: 0,
        newCustomers: 0,
        activeUsers: 0,
        customerGrowth: [],
      };
    }
  },
};

export default customerService;
