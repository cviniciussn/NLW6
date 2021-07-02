import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import "../styles/room.scss";

/* import useAuths from '../hooks/useAuths';
 */
import { Button } from "./../components/Button";
import { RoomCode } from "../components/RoomCode";
import { useHistory, useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { useRoom } from "../hooks/useRoom";
import { database } from "../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  /*   const { user } = useAuths(); */
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();

  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    window.confirm("Deseja mesmo encerrar a sala?") &&
      (await database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
      }));

    history.push("/");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span> {questions.length} pergunta(s)</span>}
        </div>

        {questions.map((question) => {
          return (
            <div className="question-list">
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            </div>
          );
        })}
      </main>
    </div>
  );
}
