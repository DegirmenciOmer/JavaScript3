/**
 * 
 * Only provide the basic structure in the HTML file. All other DOM elements are to be created 
    using JavaScript
 * No CSS frameworks are allowed!
 * Sometimes the strings you get back from the API contains HTML entities (like &quote;). 
 * Find out a way to turn this into regular text
 * Make use of the following endpoint: https://opentdb.com/api.php?amount=5
 */

 async function getTriviaData (url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const body  = document.body;
        const header = createAndAppend('header', body);
        const main = createAndAppend('main', body);
        const h1 = createAndAppend('h1', header);
        const headerDescription = createAndAppend('p', header);
        h1.textContent = 'Lets play Some Trivia!' 
        headerDescription.textContent = 'Try your best to figure out the answer. If you really have no clue, click on the questions to reveal the answer.' 
        const questionsUl = createAndAppend('ul', main);
        const questions = data.results;
        getAnswers(questions, questionsUl);
    }
    catch (err) {
        console.log(err);
    }
 }


getTriviaData('https://opentdb.com/api.php?amount=5');

