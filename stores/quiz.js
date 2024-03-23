import { create } from "zustand";

const initialState = {
    score: 0,
    chosenAnswer: "",
    submittedAnswer: "",
    questionIndex: 0,
}

export const useQuizStore = create((set) => ({
    ...initialState,

    addScore: () => set((state) =>  ({score : state.score + 1})),
    setChosenAnswer: (text) => set({chosenAnswer: text}),
    setSubmittedAnswer: (chosenAnswer) => set({submittedAnswer: chosenAnswer}),
    nextQuestion: () => set((state) => ({questionIndex: state.questionIndex + 1})),

    reset: () => set(initialState)

}))