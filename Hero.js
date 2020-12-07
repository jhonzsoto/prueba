import React from 'react'
const Hero =({handleLogOut})=>{
    return(
        <section className="hero">
            <nav>
                <h2>welcome</h2>
                <button onClick={handleLogOut}>salir</button>
            </nav>
        </section>
    );
};

export default Hero;