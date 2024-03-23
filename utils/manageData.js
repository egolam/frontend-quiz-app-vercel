import data from "@/data.json";

export function getQuestions(subject){
    return data.filter((sub) => sub.title === subject)[0].questions
}

export function getLength(subject){
    return getQuestions(subject).length
}

export function getQuestion(subject,index){
    return getQuestions(subject)[index]
}
