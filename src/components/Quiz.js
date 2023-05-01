import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Quiz(props) {

    const location = useLocation();
    const subject = location.state;

    const [userInput, setUserInput] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [totalQuestion, setTotalQuestion] = useState();
    const [correct, setCorrect] = useState();
    const [wrong, setWrong] = useState();

    let question = [{
        ques: 'what is the capital of India ?',
        options: ['Mumbai', 'Kolkata', 'Bengaluru', 'Delhi'],
        answer: 'Delhi'
    },
    {
        ques: 'who is the prime minister of India ?',
        options: ['Virat Kohli', 'Sonia Gandhi', 'Narendra Modi', 'Rahul Gandhi'],
        answer: 'Narendra Modi'
    },
    {
        ques: '4 * 5 = ___ ?',
        options: ['20', '30', '22', '45'],
        answer: '20'
    },
    {
        ques: 'Find the missing number in series - 2, 5, 8, 11, ? , 17, 20',
        options: ['13', '14', '15', '16'],
        answer: '14'
    },
    {
        ques: 'The opposite of EMPTY is ?',
        options: ['ice', 'full', 'nice', 'good'],
        answer: 'full'
    }]

    let answer = [];
    question.map(q => { answer.push(q['answer']) });

    const handleChange = (value, key) => {
        setUserInput([...userInput, {
            questionNumber: key, userValue: value
        }]);

        console.log('change:', value, key)
    }

    const handleSubmit = () => {

        setTotalQuestion(question.length);
        let count = 0;
        userInput.map(u => {
            const { questionNumber, userValue } = u;
            if (answer[questionNumber] == userValue) {
                count = count + 1;
            }
        })

        setCorrect(count);
        setWrong(userInput.length - count);
        setShowResult(true);
    }

    return (
        <div>
            <h1>{subject} Quiz</h1>
            {
                question.map((q, key) => {
                    const { ques, options } = q;
                    return (
                        <div style={{ textAlign: 'justify', marginLeft: '20px', marginBottom: '0px' }}>
                            <p> {key + 1}. {ques}</p>

                            <form style={{ marginBottom: '30px' }}>
                                <label>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" className="radio" value="1" onChange={() => { handleChange(options[0], key) }} /> {options[0]}
                                </label><br />

                                <label><input type="checkbox" id="vehicle1" name="vehicle1" className="radio" value="1" onChange={() => { handleChange(options[1], key) }} />
                                    {options[1]} </label><br />

                                <label> <input type="checkbox" id="vehicle1" name="vehicle1" className="radio" value="1" onChange={() => { handleChange(options[2], key) }} />
                                    {options[2]} </label><br />

                                <label> <input type="checkbox" id="vehicle1" name="vehicle1" className="radio" value="1" onChange={() => { handleChange(options[3], key) }} />
                                    {options[3]} </label><br />
                            </form>
                        </div>
                    )
                })
            }

            <div style={{ textAlign: 'left', marginLeft: '30px', marginBottom: '50px' }}>
                <button style={{ marginBottom: '20px', padding: '8px', backgroundColor: 'slateblue' }} onClick={handleSubmit}>Submit</button>
                {
                    showResult &&
                    <div style={{ marginBottom: '50px' }}>
                        <p>Total number question: {totalQuestion}</p>
                        <p>Total attempt question: {correct + wrong}</p>
                        <p>Correct answer: {correct} </p>
                        <p>Wrong answer: {wrong}</p>
                        <p>Marks: {correct}</p>
                    </div>
                }
            </div>
        </div>

    )
}

export default Quiz