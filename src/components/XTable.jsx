import React, { useState } from "react";
import "./styles.css";

const XTable = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(initialData);
  const [sortDirection, setSortDirection] = useState(null);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return (sortDirection === "asc" ? a.views - b.views : b.views - a.views);
      }
      return (sortDirection === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date));
    });
    setData(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return (sortDirection === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date));
      }
      return (sortDirection === "asc" ? b.views - a.views : a.views - b.views);
    });
    setData(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="container">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
