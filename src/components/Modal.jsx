import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = () => {
    onSubmit(widgetName, widgetText);
    setWidgetName("");
    setWidgetText("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Add Widget</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Widget Name
          </label>
          <input
            type="text"
            value={widgetName}
            placeholder="Enter the widget"
            onChange={(e) => setWidgetName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Widget Text
          </label>
          <textarea
            value={widgetText}
            placeholder="Enter the Text"
            onChange={(e) => setWidgetText(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>

          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
