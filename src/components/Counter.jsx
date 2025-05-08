import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

    const reset = () => setCount(0);

    return (
        <div style={styles.container}>
            <h2>Counter: {count}</h2>
            <div style={styles.buttonContainer}>
                <button onClick={increment} style={styles.button}>Increment</button>
                <button onClick={decrement} style={styles.button}>Decrement</button>
                <button onClick={reset} style={styles.button}>Reset</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'Arial',
    },
    buttonContainer: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
    },
};

export default Counter;
