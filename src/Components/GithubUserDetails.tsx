import {useState} from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const GithubUserDetails = observer(() => {
    const { rootStore: { githubUserDetails } } = useStore();
    const [text, setText] = useState('');

    const onClickButton = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        githubUserDetails.fetchGithubUserDetails(text);
    }

    return (
        <div>
            <div>
                User Name: {githubUserDetails.getUserDetails?.name} <br/>
                User Location: {githubUserDetails.getUserDetails?.location}
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="githubuser">
                    <Form.Label>Search Github User</Form.Label>
                    <Form.Control value = {text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter Github user name" />
                </Form.Group>
                <Button onClick={onClickButton} variant="primary" type="submit">
                    Search User
                </Button>
            </Form>
        </div>
    )
})