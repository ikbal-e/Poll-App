import { Button, TextInput } from '@mantine/core';

const Answer = (props) => {

    const id = props.id;

    return (
            <div style={{ flex: 1, margin: '2%' }}>
                fasfasf
                <TextInput label="Answer" rightSection={<Button onClick={() => props.removeAnswer(id)}>Remove</Button>}></TextInput>
            </div>
    );
}

export default Answer;