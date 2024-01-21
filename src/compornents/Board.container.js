import BoardUI from './Board.presenter';
import { useState } from 'react';

function BoardContainer() {
  const [toDoTitile, setTodoTitile] = useState('');
  const [toDoList, setToDoList] = useState('');
  const [toDos, setToDos] = useState([{}]); // todolist 값들을 저장, 배열안의 객체(JSON형태)

  const onChangeTitle = (e) => {
    setTodoTitile(e.target.value);
  };
  const onChangeList = (e) => {
    setToDoList(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const addBtn = () => {
    if (toDoTitile === '' && toDoList === '') {
      return;
    }
    const newTodo = {
      id: toDos.length + 1,
      title: toDoTitile,
      list: toDoList,
      done: false,
    };
    setToDos([...toDos, newTodo]);
    setTodoTitile('');
    setToDoList('');
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
