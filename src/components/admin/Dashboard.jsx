import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Enregistrement des composants de chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [dailySubmissions, setDailySubmissions] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("/api/dashboard")
      .then((response) => {
        const data = response.data;
        setStats(data.stats || {});
        setUsers(data.users || []);
        setSubmissions(data.submissions || []);
        setTrending(data.trending || []);
        setDailySubmissions(data.dailySubmissions || []);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du tableau de bord :",
          error
        );
      });
  }, []);

  const prepareDailySubmissionsChartData = () => {
    const labels = dailySubmissions.map((s) => s.date);
    const dataValues = dailySubmissions.map((s) => s.count);

    return {
      labels,
      datasets: [
        {
          label: "Submissions par Jour",
          data: dataValues,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
          tension: 0.4,
          borderWidth: 2,
        },
      ],
    };
  };

  const prepareBarChartData = () => {
    const counts = submissions.reduce((acc, curr) => {
      const date = new Date(curr.created_at);
      const month = date.getMonth(); // 0 = Janvier
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const data = monthNames.map((_, i) => counts[i] || 0);

    return {
      labels: monthNames,
      datasets: [
        {
          label: "Soumissions",
          data,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  const preparePieChartData = () => {
    const statusCounts = submissions.reduce(
      (acc, submission) => {
        acc[submission.status] = (acc[submission.status] || 0) + 1;
        return acc;
      },
      { approved: 0, pending: 0, rejected: 0 }
    );

    return {
      labels: ["Approved", "Pending", "Rejected"],
      datasets: [
        {
          data: [
            statusCounts.approved,
            statusCounts.pending,
            statusCounts.rejected,
          ],
          backgroundColor: ["#0F3556", "#870670", "#CAB284"],
          hoverOffset: 4,
        },
      ],
    };
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black">Dashboard</h1>
        <Button variant="outline" className="bg-[#0f3556] text-white">
          <Filter className="w-4 h-4 mr-2" />
          Filter Période
        </Button>
      </div>

      {/* Carte Résumé Statistique */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <Card key={key} className="shadow-lg rounded-lg hover:shadow-xl transition-all">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-center mb-2 capitalize">
                {key.replace("_", " ")}
              </h3>
              <p className="text-2xl font-bold text-center">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ✅ Graphiques en Ligne, Barres et Secteurs (Réduits) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* ✅ Submissions par Jour */}
        <Card className="shadow-lg rounded-lg hover:shadow-xl transition-all">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-center mb-2">
              Submissions par Jour (7 derniers jours)
            </h3>
            <div className="h-[250px]">
              <Line
                data={prepareDailySubmissionsChartData()}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    title: { display: false },
                  },
                  scales: {
                    y: { ticks: { stepSize: 1 } },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* ✅ Graphique Barres */}
        <Card className="shadow-lg rounded-lg hover:shadow-xl transition-all">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-center mb-2">
              Répartition Mensuelle
            </h3>
            <div className="h-[250px]">
              <Bar
                data={prepareBarChartData()}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    title: { display: false },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* ✅ Graphique Secteurs */}
        <Card className="shadow-lg rounded-lg hover:shadow-xl transition-all">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-center mb-2">
              Statut des Soumissions
            </h3>
            <div className="h-[250px]">
              <Pie
                data={preparePieChartData()}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: "bottom" },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
