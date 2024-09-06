import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);

    function handleDown() {
        setNum(num - 1);
    }

    function handleUp() {
        setNum(num + 1);
    }

    return (
        <>
            <button onClick={handleDown}>Clique aqui</button>
            {num}
            <button onClick={handleUp}>Clique aqui</button>
        </>
    )
}
