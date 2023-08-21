import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizID } from "../topics/topicsSlice";

export const asyncAddQuiz = createAsyncThunk(
  "quizzes/asyncAddQuiz",
  async (newQuiz, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { id, name, topicId, cardIds } = newQuiz;
    dispatch(addQuiz(newQuiz));

    dispatch(addQuizID({ quizId: id, topicId }));
  }
);

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;

      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds
      };
    }
  }
});

export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
