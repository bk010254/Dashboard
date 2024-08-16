import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import ActionBar from "./NavMenu/ActionBar";
import dashboardData from "./JsonData";
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [data, setData] = useState(dashboardData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (categoryIndex) => {
    setSelectedCategoryIndex(categoryIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCategoryIndex(null);
  };

  const addWidget = (widgetName, widgetText) => {
    if (selectedCategoryIndex !== null) {
      const newWidget = {
        id: Date.now(),
        name: widgetName,
        content: widgetText,
        chartType: null,
        chartData: [],
      };
      const newData = [...data];
      newData[selectedCategoryIndex].widgets.push(newWidget);
      setData(newData);
      closeModal();
    }
  };

  const removeWidget = (categoryIndex, widgetIndex) => {
    const newData = [...data];
    newData[categoryIndex].widgets.splice(widgetIndex, 1);
    setData(newData);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <ActionBar onSearch={handleSearch} />
        {filteredData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mt-6">
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.widgets.map((widget, widgetIndex) => (
                <div key={widget.id} className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-lg font-semibold flex justify-between">
                    {widget.name}
                    <button
                      className="text-red-500"
                      onClick={() => removeWidget(categoryIndex, widgetIndex)}
                    >
                      Remove
                    </button>
                  </h2>
                  {widget.chartType === "pie" ? (
                    <div className="flex items-center">
                      <PieChart width={150} height={150}>
                        <Pie
                          data={widget.chartData}
                          cx={75}
                          cy={75}
                          innerRadius={40}
                          outerRadius={60}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {widget.chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                      <ul className="ml-4 text-sm">
                        {widget.chartData.map((entry, index) => (
                          <li key={index}>
                            <span className="font-semibold">{entry.name}:</span>{" "}
                            {entry.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : widget.chartType === "bar" ? (
                    <div>
                      <BarChart
                        width={300}
                        height={150}
                        data={widget.chartData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                      <ul className="mt-4 text-sm">
                        {widget.chartData.map((entry, index) => (
                          <li key={index}>
                            <span className="font-semibold">{entry.name}:</span>{" "}
                            {entry.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : widget.chartData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <FontAwesomeIcon
                        icon={faChartBar}
                        size="4x"
                        color="gray"
                      />
                      <p className="text-gray-500 mt-2">
                        No Graph Data Available
                      </p>
                    </div>
                  ) : (
                    <p className="mt-4">{widget.content}</p>
                  )}
                </div>
              ))}
              <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
                <button
                  className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-4"
                  onClick={() => openModal(categoryIndex)}
                >
                  <FaPlus size={15} /> Add Widget
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={addWidget} />
    </>
  );
};

export default Dashboard;
