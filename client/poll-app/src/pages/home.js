import { Link } from "react-router-dom";
import { Button } from '@mantine/core';

const Home = () => {
    return (
        <>
            <Link to="new-poll"><Button>Create a new poll</Button></Link>
        </>
    );
}

export default Home;