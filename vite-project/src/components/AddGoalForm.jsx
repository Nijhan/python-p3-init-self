import React, { useState } from "react";

export default function AddGoalForm({ addGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: 0,
    category: "",
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addGoal(formData);
    setFormData({
      name: "",
      targetAmount: "",
      savedAmount: 0,
      category: "",
      deadline: "",
      createdAt: new Date().toISOString().split("T")[0],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}
