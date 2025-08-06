import React from "react";

export default function GoalCard({ goal, onUpdate, onDelete }) {
  const progress = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100).toFixed(1);
  const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isComplete = goal.savedAmount >= goal.targetAmount;
  const isOverdue = daysLeft < 0 && !isComplete;
  const isWarning = daysLeft <= 30 && daysLeft >= 0 && !isComplete;

  return (
    <div style={{ border: "1px solid #aaa", margin: "1em 0", padding: "1em" }}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <progress value={goal.savedAmount} max={goal.targetAmount} style={{ width: "100%" }}></progress>
      <p>{progress}% Complete</p>
      <p>Deadline: {goal.deadline}</p>
      {isComplete && <p style={{ color: "green" }}>✅ Goal Complete</p>}
      {isWarning && <p style={{ color: "orange" }}>⚠️ Less than 30 days left!</p>}
      {isOverdue && <p style={{ color: "red" }}>❌ Overdue</p>}
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}
