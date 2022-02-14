import { Button, TextInput, Popover, Center, Checkbox } from '@mantine/core';
import { useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import Answer from './answer';

const Question = () => {

    const [answers, setAnswers] = useState([{ id: uniqueId(), text: '' }, { id: uniqueId(), text: '' }]);

    const [requireCheck, setRequireCheck] = useState(true);
    const [multiSelectCheck, setMultiSelectCheck] = useState(false);

    const [opened, setOpened] = useState(false);

    const questionInputStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const addAnswer = () => {
        setAnswers([...answers, { id: uniqueId() }]);
        console.log(answers);
    }

    const onAnswerChange = (event, id) => {
        setAnswers(answers.map(x => x.id === id ? { ...x, text: event.target.value } : x));

        console.log(answers);

    }

    const removeAnswer = (id) => {
        setAnswers(x => x.filter((value, i) => value.id !== id))
    }

    return (
        <div style={questionInputStyle}>
            <div style={{ flex: 1, margin: '2%' }}>
                <TextInput label="Question" placeholder="Question"
                    rightSection={
                        <Popover
                            opened={opened}
                            onClose={() => setOpened(false)}
                            target={<Button onClick={() => setOpened((o) => !o)}>Change Type</Button>}
                            width={150}
                            position="bottom"
                            withArrow
                        >
                            <div style={{ display: 'flex' }}>
                                <Center style={{ height: 100, width: 150, display: 'flex', flexDirection: 'column' }}>
                                    <Button variant="subtle"> Selection </Button>
                                    <Button variant="subtle"> Text Area </Button>
                                </Center>
                            </div>
                        </Popover>
                    } />
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                    <Checkbox
                        label="Required"
                        checked={requireCheck}
                        onChange={(event) => setRequireCheck(event.currentTarget.checked)}
                    />
                    <Checkbox
                        style={{ marginLeft: 10 }}
                        label="Multiple Selection"
                        checked={multiSelectCheck}
                        onChange={(event) => setMultiSelectCheck(event.currentTarget.checked)}
                    />
                </div>

                <p>Answers</p>
                {answers?.map((v, i) =>
                    <div key={v.id}>
                        <Answer key={v.id} id={v.id} onAnswerChange={onAnswerChange} removeAnswer={removeAnswer}></Answer>
                    </div>
                )}
                <Button variant='outline' onClick={addAnswer}>+ Answer</Button>
                {JSON.stringify(answers)}
            </div>
        </div>
    );
}

export default Question;