import { useEffect, useState } from "react";
import { FiShoppingCart, FiUsers, FiDollarSign, FiBox } from "react-icons/fi";
import { fetchDashboardStats } from "../../services/dashboardService";
import Loader from "../../components/Loader";
import SalesChart from "./SalesChart";
import RecentOrders from "./RecentOrders";
import CustomersStats from "../../components/CustomersStats";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Error loading dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Sales" value={`$${stats.totalSales}`} icon={<FiDollarSign />} />
        <DashboardCard title="Total Orders" value={stats.totalOrders} icon={<FiShoppingCart />} />
        <DashboardCard title="Total Customers" value={stats.totalCustomers} icon={<FiUsers />} />
        <DashboardCard title="Total Products" value={stats.totalProducts} icon={<FiBox />} />
      </div>

      {/* Charts & Tables */}
      <SalesChart salesData={stats.salesData} />
      <RecentOrders orders={stats.recentOrders} />
      <CustomersStats customers={stats.customers} />
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => (
  <div className="p-4 bg-white shadow-lg rounded-lg flex items-center">
    <div className="text-3xl text-blue-500 mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

export default Dashboard;
