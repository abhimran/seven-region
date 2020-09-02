import React from 'react';

const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        width: "100%",
        backgroundColor: "#fec600",
        textAlign: "center"
    }
    return (
        <div style={headerStyle}>
            <h1>Mixit Up</h1>
        </div>
    );
};

export default Header;