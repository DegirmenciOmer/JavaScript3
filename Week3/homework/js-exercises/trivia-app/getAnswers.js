
 function getAnswers(ask, askUl){
    ask.forEach((question, index) => {
        const questionsAnswers = createAndAppend('li', askUl);
        question = createAndAppend('h3', questionsAnswers, {class: 'questions'});
        question.textContent = `${ask[index].question}`;
        question.onclick = (answer) => {
        answer.textContent ='';
        answer = createAndAppend('p', questionsAnswers, {class: 'answers'});
        answer.textContent = `${ask[index].correct_answer}`;
        }
    });
 }
