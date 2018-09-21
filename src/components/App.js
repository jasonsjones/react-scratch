import React from 'react';

const GlobalHeader = () => {
    return <header className="" />;
};

const App = () => {
    return (
        <div>
            <GlobalHeader />
            <div style={{ width: '960px', margin: '5rem auto 0' }}>
                <h1 className="">Hello React Sandbox!</h1>
            </div>
        </div>
    );
};

export default App;
