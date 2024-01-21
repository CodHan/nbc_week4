import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

export default function BoardUI(props) {
  return (
    <div className="wrap">
      <header className="header">
        <form onSubmit={props.Submit}>
          <p>안녕 투두야</p>
          <input
            type="text"
            placeholder="제목"
            autoFocus
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
      </header>
      <div className="main">
        <div className="ing">
          <h1>진행중</h1>
          <ul className="list">
            {props.StatetoDos.map(function (item) {
              if (item.done === false) {
                return (
                  <li key={item.id}>
                    제목:{item.title}
                    &nbsp;&nbsp;&nbsp;할일:{item.list}
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
        <div className="compleate">
          <h1>완료함</h1>
          <ul className="list">
            {props.StatetoDos.map(function (item) {
              if (item.done === true) {
                return (
                  <li key={item.id}>
                    제목:{item.title}
                    &nbsp;&nbsp;&nbsp;할일:{item.list}
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

      <footer>
        <div className="footer">
          <a href="https://github.com/CodHan" target="_blank">
            <p>
              <FontAwesomeIcon icon={faGithubAlt} />
              &nbsp;GITHUB
            </p>
          </a>
          <a href="https://velog.io/@qpscm662/posts" target="_blank">
            <p>
              <FontAwesomeIcon icon={faBlog} />
              &nbsp;VELOG
            </p>
          </a>
        </div>
      </footer>
    </div>
  );
}
