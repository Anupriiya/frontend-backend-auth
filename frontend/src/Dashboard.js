function Dashboard() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    window.location.href = "/login";
    return null;
  }

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
