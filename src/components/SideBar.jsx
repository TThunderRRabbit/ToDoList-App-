export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="user-identity">
        <img src="user-avatar.png" alt="User Avatar" className="avatar" />
        <p className="username">John Does</p>
      </div>

      <button className="add-task-btn">+ Add Task</button>

      <div className="search-section">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="navigation">
        <div className="nav-item">Today</div>
        <div className="nav-item">Upcoming</div>
      </div>

      <div className="projects">
        <h3 className="projects-header">My Projects</h3>
        <ul className="project-list">
          <li className="project-item">Project 1</li>
          <li className="project-item">Project 2</li>
          <li className="project-item">Project 3</li>
        </ul>
      </div>
    </div>
  );
}
