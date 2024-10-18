import React, { useState } from "react";
import { createPoll } from "./contract";

const App = () => {
    const [title, setTitle] = useState("");
    const [options, setOptions] = useState(["", ""]);

    const handleCreatePoll = async (e) => {
        e.preventDefault();
        await createPoll(title, options);
        setTitle("");
        setOptions(["", ""]);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    return (
        <div>
            <h1>Create Poll</h1>
            <form onSubmit={handleCreatePoll}>
                <input
                    type="text"
                    placeholder="Poll Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                {options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        required
                    />
                ))}
                <button type="submit">Create Poll</button>
            </form>
        </div>
    );
};

export default App;
