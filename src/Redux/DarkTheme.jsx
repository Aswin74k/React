import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './ThemeSlice';

const DarkTheme = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    return (
        <div
            style={{
                backgroundColor: mode === "light" ? "#fff" : "#000",
                color: mode === "light" ? "#000" : "#fff",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1>{mode.toUpperCase()} MODE</h1>

            <button
                onClick={() => dispatch(toggleTheme())}
                style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    background: mode === "light" ? "#333" : "#eee",
                    color: mode === "light" ? "#fff" : "#000",
                }}
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default DarkTheme
