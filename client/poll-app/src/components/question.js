import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import Answer from './answer';

const Question = () => {

    const [answers, setAnswers] = useState([]);

    const questionInputStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const addAnswer = () => {
        setAnswers([...answers, {id : Date.now().toLocaleString()}]);
        console.log(answers);
    }

    const removeAnswer = (id) => {
        console.log(id);
        setAnswers(x => x.filter((value, i) => value.id !== id))
    }

    return (
        <div style={questionInputStyle}>
            <div style={{ flex: 1, margin: '2%' }}>
                <TextInput label="Question" placeholder="Question"
                    rightSection={<Button onClick={addAnswer}>Hey</Button>} />
                <p>Answers</p>
                {answers?.map((v, i) => 
                     <div key={v.id}>
                        <Answer key={v.id} id={v.id} removeAnswer={removeAnswer}></Answer>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Question;