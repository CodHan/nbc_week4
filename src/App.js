import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoTitile, setTodoTitile] = useState('');
  const [toDoList, setToDoList] = useState('');
  const [toDos, setToDos] = useState([
    { id: 0, title: '몰라', list: '그만하고싶다', done: false },
  ]);
  const [complete, setcomplete] = useState([]);

  const onChangeTitle = (e) => {
    setTodoTitile(e.target.value);
  };
  const onChangeList = (e) => {
    setToDoList(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDoTitile === '' && toDoList === '') {
      return;
    }
  };
  const addBtn = () => {
    const newTodo = {
      id: toDos.length + 1,
      title: toDoTitile,
      list: toDoList,
      done: false,
    };
    setToDos([...toDos, newTodo]);
  };

  const deleteItem = (id) => {
    const deleteTodolist = toDos.filter((deltodo) => deltodo.id !== id);
    setToDos(deleteTodolist);
  };
  const isDone = (id) => {
    const isDoneTodolist = toDos.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setToDos(isDoneTodolist);
  };
  return (
    <div>
      <h1>안녕 투두야</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="제목"
          onChange={onChangeTitle}
          value={toDoTitile}
        />
        <input
          type="text"
          placeholder="할일"
          onChange={onChangeList}
          value={toDoList}
        />
        <button onClick={addBtn}>등록</button>
      </form>
      <div>
        <ul>
          {toDos.map(function (item) {
            if (item.done === false) {
              return (
                <li key={item.id}>
                  제목:{item.title}
                  할일:{item.list}
                  <button onClick={() => deleteItem(item.id)}>삭제</button>
                  <button onClick={() => isDone(item.id)}>
                    {item.done ? '취소' : '완료'}
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>완료함</h1>
      <div>
        <ul>
          {toDos.map(function (item) {
            if (item.done === true) {
              return (
                <li key={item.id}>
                  제목:{item.title}
                  할일:{item.list}
                  <button onClick={() => deleteItem(item.id)}>삭제</button>
                  <button onClick={() => isDone(item.id)}>
                    {item.done ? '취소' : '완료'}
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
