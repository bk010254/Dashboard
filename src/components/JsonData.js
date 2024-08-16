const dashboardData = [
  {
    category: "CSPM Executive Dashboard",
    widgets: [
      {
        id: 1,
        name: "Cloud Accounts",
        content: "This is a Cloud Accounts widget",
        chartType: "pie",
        chartData: [
          { name: "Connected", value: 2, color: "#8884d8" },
          { name: "Not Connected", value: 2, color: "#82ca9d" },
        ],
      },
      {
        id: 2,
        name: "Cloud Account Risk Assessment",
        content: "This is a Cloud Account Risk Assessment widget",
        chartType: "pie",
        chartData: [
          { name: "Failed", value: 1689, color: "#ff4d4f" },
          { name: "Warning", value: 681, color: "#ffa940" },
          { name: "Passed", value: 7253, color: "#82ca9d" },
        ],
      },
    ],
  },
  {
    category: "CWPP Dashboard",
    widgets: [
      {
        id: 3,
        name: "Top 5 Namespace Specific Alerts",
        content: "No Graph data available!",
        chartType: null,
        chartData: [],
      },
      {
        id: 4,
        name: "Workload Alerts",
        content: "No Graph data available!",
        chartType: null,
        chartData: [],
      },
    ],
  },
  {
    category: "Registry Scan",
    widgets: [
      {
        id: 5,
        name: "Image Risk Assessment",
        content: "This is a Registry Scan widget",
        chartType: "bar",
        chartData: [
          { name: "Critical", value: 9, fill: "#ff4d4f" },
          { name: "High", value: 160, fill: "#ffa940" },
          { name: "Medium", value: 1300, fill: "#ffec3d" },
          { name: "Low", value: 1, fill: "#73d13d" },
        ],
      },
    ],
  },
];

export default dashboardData;
