import React from 'react';
import './Home.css';
import { useContext } from 'react';
import { categoryContex } from '../../App';

const Home = () => {
     const homeStyle = {
        padding: "20px",
        background: "#f8f8f8",
     }
     const [category,setCategory] = useContext(categoryContex);
    return (
        <div style={homeStyle}>
            <h3>FInd Countries with Region</h3>
            <button onClick={()=>setCategory('Asia')}>Asia</button>
            <button onClick={()=>setCategory('Africa')}>Africa</button>
            <button onClick={()=>setCategory('Europe')}>Europe</button>
            <button onClick={()=>setCategory('Oceania')}>Oceania</button>
            <button onClick={()=>setCategory('Americas')}>America</button>
        </div>
    );
};

export default Home;