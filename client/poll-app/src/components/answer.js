import { Button, TextInput } from '@mantine/core';

const Answer = (props) => {

    const id = props.id;

    return (
            <div style={{ flex: 1, margin: '2%' }}>
                <TextInput onChange={e => props.onAnswerChange(e, id)} rightSection={<Button onClick={() => props.removeAnswer(id)}>Remove</Button>}></TextInput>
            </div>
    );
}

export default Answer;