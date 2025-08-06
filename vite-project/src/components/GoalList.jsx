import React from "react";
import GoalCard from "./GoalCard";

export default function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div>
      <h2>Goals</h2>
      {goals.length === 0 ? (
        <p>No goals yet.</p>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
