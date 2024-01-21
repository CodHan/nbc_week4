import BoardUI from './Board.presenter';
import { useState } from 'react';

function BoardContainer() {
  const [toDoTitile, setTodoTitile] = useState('');
  const [toDoList, setToDoList] = useState('');
  const [toDos, setToDos] = useState([
    { id: 0, title: '몰라', list: '그만하고싶다', done: false },
  ]);

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
    <BoardUI
      Title={onChangeTitle}
      List={onChangeList}
      Submit={onSubmit}
      Btn={addBtn}
      DelBtn={deleteItem}
      TorF={isDone}
      StateTitle={toDoTitile}
      StateList={toDoList}
      StatetoDos={toDos}
    />
  );
}

export default BoardContainer;
