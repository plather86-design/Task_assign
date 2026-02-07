# EMS – Employee Management System

EMS (Employee Management System) is a **React-based web application** designed to manage employees and their tasks through an **Admin Panel** and an **Employee Panel**.  

The app works without a backend and uses **Browser Local Storage** with a **JSON file** for initial data persistence.

---

## 🚀 Features

### 👨‍💼 Admin Panel
- Add new employees
- Assign tasks to employees
- Manage and view employee task data

### 👨‍💻 Employee Panel
- View assigned tasks
- **Accept tasks** before taking action
- Once a task is accepted, two options become available:
  - **Complete Task**
  - **Mark as Failed**

---

## 💾 Data Persistence

- All data is stored in **Browser Local Storage**
- When opened in a **new browser**, initial data is loaded from a **JSON file**
- Data is then automatically saved to local storage, allowing the app to function **without a backend**

---

## 🛠 Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Browser Local Storage
- JSON (for initial data)

---

## ▶️ Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/EMS.git
cd EMS
npm install
