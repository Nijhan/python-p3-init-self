import React, { useState } from "react";

export default function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return;

    const updatedAmount = Number(goal.savedAmount) + Number(amount);
    onDeposit(goalId, { savedAmount: updatedAmount });
    setAmount("");
    setGoalId("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}
