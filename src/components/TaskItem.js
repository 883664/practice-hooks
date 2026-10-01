export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "done" : ""}>{task.title}</span>
      </label>
      <button onClick={() => onDelete(task.id)}>Xóa</button>
    </li>
  );
}