import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
const Compose: React.FC<ComposeProps> = () => {
    const history = useHistory();
    const [username, setUsername] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value)
    const handMessageChange = (e.React.ChangeEvent<HTMLTextAreaElement>) =>
setMessage(e.target.value);

const fireChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let res = await fetch("/api.chirps", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ username, message })
    })
    if (res.ok) {
        history.push('/');
    } else {
        console.log('oh nooooooo');
    }
}

return (
    <main className="container">
        <section className="row my-2 justify-content-center">
            <div className="col-md-8">
                <form className="form-group p-3 shadow border rounded">
                    <label htmlFor="username">Username</label>
                    <input
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Who goes there?"
                        id="username"
                        type="text"
                        className="form-control"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        rows={6}
                        placeholder="What say you?"
                        className="form-control"
                        id="message"
                    />
                    <button
                        onClick={fireChirp}
                        className="btn btn-outline-primary btn-block mt-3 w-50 mx-auto shadow-sm"
                    >
                        Fire Chirp!
                </button>
                </form>
            </div>
        </section>
    </main>
);
};

interface ComposeProps { }

export default Compose;