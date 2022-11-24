import React from 'react';
import AddTask from './AddTask';

const Task = () => {
  const [inputValue, setInputValue] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [active, setActive] = React.useState(false);

  const Add = () => {
    setTasks([...tasks, { name: inputValue, checked: false }]);
    setInputValue('');
    setActive('');
  };
  const ClickActive = () => {
    setActive(!active);
  };
  const ClickActiveAll = () => {
    setTasks(tasks.map((task) => ({ ...task, checked: true })));
  };

  const toggleTaskChecked = (index) => {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return {
            ...task,
            checked: !task.checked,
          };
        }

        return task;
      }),
    );
  };

  const onRemove = (index) => {
    if (window.confirm('Вы действительно хотите удалить?') === true) {
      console.log(index);
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };
  const Clear = () => {
    if (window.confirm('Вы действительно хотите удалить?') === true) {
      setTasks([]);
    }
  };

  return (
    <div className="body">
      <div className="header">
        <h2>Список задач</h2>
        {active ? (
          <svg
            style={{ marginTop: '20px' }}
            onClick={ClickActive}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#DB4C3F" />
          </svg>
        ) : (
          <svg
            style={{ marginTop: '20px' }}
            onClick={ClickActive}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" fill="white" stroke="#DB4C3F" strokeWidth="2" />
          </svg>
        )}
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Введите текст задачи..."
        />
        {active ? (
          <button onClick={inputValue ? Add : ''} className="btn">
            +
          </button>
        ) : (
          ''
        )}

        {tasks.map((task, index) => (
          <div key={index} className="addTask">
            <li style={{ listStyleType: 'none' }}>
              <AddTask task={task} onChange={toggleTaskChecked} onRemove={onRemove} index={index} />
            </li>
          </div>
        ))}
      </div>
      <hr className="geometriya" style={{ marginTop: '415px' }} />
      <button onClick={ClickActiveAll} className="btn-1">
        <img
          className="ticks"
          src="https://lumpics.ru/wp-content/uploads/2019/11/messendzher-viber-status-soobshheniya-dostavleno-.png"
        />
        Отметить все
      </button>

      <button onClick={Clear} className="btn-2">
        <svg
          className="cross"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.79125 5.49922L10.7291 1.56996C10.9016 1.39749 10.9984 1.16357 10.9984 0.91966C10.9984 0.675751 10.9016 0.441832 10.7291 0.269362C10.5567 0.0968925 10.3228 0 10.0789 0C9.83503 0 9.60115 0.0968925 9.4287 0.269362L5.5 4.20778L1.5713 0.269362C1.39885 0.0968925 1.16497 -1.81726e-09 0.921092 0C0.677217 1.81726e-09 0.443332 0.0968925 0.270887 0.269362C0.0984416 0.441832 0.00156287 0.675751 0.00156287 0.91966C0.00156287 1.16357 0.0984416 1.39749 0.270887 1.56996L4.20875 5.49922L0.270887 9.42848C0.185052 9.51363 0.116923 9.61493 0.0704302 9.72654C0.0239371 9.83815 0 9.95787 0 10.0788C0 10.1997 0.0239371 10.3194 0.0704302 10.431C0.116923 10.5426 0.185052 10.6439 0.270887 10.7291C0.35602 10.8149 0.457307 10.8831 0.568903 10.9296C0.6805 10.9761 0.800198 11 0.921092 11C1.04199 11 1.16168 10.9761 1.27328 10.9296C1.38488 10.8831 1.48616 10.8149 1.5713 10.7291L5.5 6.79065L9.4287 10.7291C9.51384 10.8149 9.61512 10.8831 9.72672 10.9296C9.83832 10.9761 9.95801 11 10.0789 11C10.1998 11 10.3195 10.9761 10.4311 10.9296C10.5427 10.8831 10.644 10.8149 10.7291 10.7291C10.8149 10.6439 10.8831 10.5426 10.9296 10.431C10.9761 10.3194 11 10.1997 11 10.0788C11 9.95787 10.9761 9.83815 10.9296 9.72654C10.8831 9.61493 10.8149 9.51363 10.7291 9.42848L6.79125 5.49922Z"
            fill="#CACACA"
          />
        </svg>
        Очистить
      </button>
    </div>
  );
};
export default Task;
