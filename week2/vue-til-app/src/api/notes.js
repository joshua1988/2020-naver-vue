import { notes } from "./";
import store from "../store/index";

// 학습 노트 관련 API 함수 파일
function fetchNotes() {
  return notes.get("/", {
    headers: {
      // Authorization: "$123"
      Authorization: store.state.token
    }
  });
}

function createNote(note) {
  return notes.post("/", note, {
    headers: {
      // Authorization: "$123"
      Authorization: store.state.token
    }
  });
}

export { fetchNotes };
