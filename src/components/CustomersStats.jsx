import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./Card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import customerService from "../services/customerService";

const CustomersStats = () => {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    newCustomers: 0,
    activeUsers: 0,
    customerGrowth: [],
  });

  useEffect(() => {
    fetchCustomerStats();
  }, []);

  const fetchCustomerStats = async () => {
    try {
      const data = await customerService.getCustomerStats();
      setStats(data);
    } catch (error) {
      console.error("Error fetching customer stats:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Total Customers */}
      <Card className="p-4 shadow-lg">
        <h3 className="text-lg font-bold">Total Customers</h3>
        <p className="text-2xl font-semibold">{stats.totalCustomers}</p>
      </Card>

      {/* New Customers */}
      <Card className="p-4 shadow-lg">
        <h3 className="text-lg font-bold">New Customers (This Month)</h3>
        <p className="text-2xl font-semibold">{stats.newCustomers}</p>
      </Card>

      {/* Active Users */}
      <Card className="p-4 shadow-lg">
        <h3 className="text-lg font-bold">Active Users</h3>
        <p className="text-2xl font-semibold">{stats.activeUsers}</p>
      </Card>

      {/* Customer Growth Chart */}
      <Card className="col-span-1 sm:col-span-3 p-4 shadow-lg">
        <h3 className="text-lg font-bold mb-2">Customer Growth (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={stats.customerGrowth}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="customers" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default CustomersStats;
