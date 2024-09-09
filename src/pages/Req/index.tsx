import { FormEvent, useState } from 'react';
import axios from 'axios';
import Main from '../../components/Main';

export default function Req() {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState(0);

    async function handlePost(event : FormEvent) { // useCallback armazena e executa quando alguma coisa mudar
        event.preventDefault();
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            content
        });
        setTitle(res.data.title);
        setContent(res.data.content);
        setId(res.data.id)
    }


    return (
        <>
            <Main>
                <form onSubmit={(e) => handlePost(e)}>
                    <input value={title} onChange={e => setTitle(e.target.value)}></input>
                    <input value={content} onChange={e => setContent(e.target.value)}></input>
                    <button>Enviar</button>
                </form>
                <ul>
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{content}</li>
                </ul>
            </Main>
        </>
    )
}