#  Smart Goal Planner

![React](https://img.shields.io/badge/React-18-blue)
![JSON Server](https://img.shields.io/badge/API-json--server-green)
![Status](https://img.shields.io/badge/status-In%20Progress-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

A personal finance dashboard where users can create, track, and manage multiple savings goals. Built using React + JSON Server to simulate full CRUD functionality with persistent data.

---

## Demo

>  Live demo link (optional): _Coming soon or deployed URL_  
>  Include screenshots of your app in action (optional)

---

## Features

-  Create, update, and delete savings goals
-  Make deposits toward any goal
-  Visual progress tracking (saved vs target amount)
-  Deadline tracking with alerts:
  - Goals expiring within 30 days
  - Overdue goals
-  Dashboard overview:
  - Total number of goals
  - Total saved amount
  - Completed goals
  - Time left per goal

---

##  Tech Stack

-  React (Vite)
-  JSON Server
- CSS or Tailwind (optional)

---

## 📁Folder Structure

```bash
vite-project/
├── public/
├── src/
│   ├── components/
│   │   ├── AddGoalForm.jsx
│   │   ├── DepositForm.jsx
│   │   ├── GoalList.jsx
│   │   ├── GoalCard.jsx
│   │   └── Overview.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json
└── README.md
