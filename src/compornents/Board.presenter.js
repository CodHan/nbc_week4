export default function BoardUI(props) {
  return (
    <div className="wrap">
      <h1>안녕 투두야</h1>
      <form onSubmit={props.Submit}>
        <input
          type="text"
          placeholder="제목"
          onChange={props.Title}
          value={props.StateTitle}
        />

        <input
          type="text"
          placeholder="할일"
          onChange={props.List}
          value={props.StateList}
        />
        <button onClick={props.Btn}>등록</button>
      </form>
      <div>
        <ul>
          {props.StatetoDos.map(function (item) {
            if (item.done === false) {
              return (
                <li key={item.id}>
                  제목:{item.title}
                  할일:{item.list}
                  <button onClick={() => props.DelBtn(item.id)}>삭제</button>
                  <button onClick={() => props.TorF(item.id)}>
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
          {props.StatetoDos.map(function (item) {
            if (item.done === true) {
              return (
                <li key={item.id}>
                  제목:{item.title}
                  할일:{item.list}
                  <button onClick={() => props.DelBtn(item.id)}>삭제</button>
                  <button onClick={() => props.TorF(item.id)}>
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
