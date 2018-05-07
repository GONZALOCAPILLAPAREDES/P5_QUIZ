const quizzes = [
    {   id: 1,
        question: "Capital de Italia",
        answer: "Roma"
    },
    {   id: 2,
        question: "Capital de Francia",
        answer: "Paris"
    },
    {   id: 3,
        question: "Capital de España",
        answer: "Madrid"
    },
    {   id: 4,
        question: "Capital de Portugal",
        answer: "Lisboa"
    }];


/* Proximo valor para el id*/
let nextId = quizzes.length + 1;

/* Crea un nuevo quiz con los parametros definidos*/
exports.create = quiz => {

    const newQuiz = {
        id: nextId++,
        question: (quiz.question || "").trim(),
        answer: (quiz.answer || "").trim()
    };

    quizzes.push(newQuiz);

    return newQuiz;
};

/* Actualiza el quiz pasado por parametro */
exports.update = (quiz) => {

    const index = quizzes.findIndex(q => quiz.id === q.id);

    if (index >= 0) {
        quizzes[index] = {
            id: quiz.id,
            question: (quiz.question || "").trim(),
            answer: (quiz.answer || "").trim()
        };
    }
};

/*Devuelve todos los quizzes*/
exports.findAll = () => quizzes;

/*Encuentra un quiz cuyo id pasamos como parametro*/
exports.findById = (id) => {

    return quizzes.find(quiz => quiz.id === id);
};

/*Elimina un quiz*/
exports.destroy = (quiz) => {

    const index = quizzes.findIndex(q => quiz.id === q.id);

    if (index >= 0) {
        quizzes.splice(index,1);
    }
};