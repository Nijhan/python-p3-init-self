import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import AddGoalForm from "./components/AddGoalForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  const addGoal = (goal) => {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    })
      .then((res) => res.json())
      .then((newGoal) => setGoals([...goals, newGoal]));
  };

  const updateGoal = (id, updatedFields) => {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updated) =>
        setGoals(goals.map((g) => (g.id === id ? updated : g)))
      );
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" }).then(() =>
      setGoals(goals.filter((g) => g.id !== id))
    );
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <AddGoalForm addGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <Overview goals={goals} />
      <GoalList
        goals={goals}
        onUpdate={updateGoal}
        onDelete={deleteGoal}
      />
    </div>
  );
}

export default App;
