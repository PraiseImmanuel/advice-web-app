import React from "react";

const Divider = () => {
    return(
        <picture style={{ padding: '2.25rem 0 1rem'}}>
            <source media="(min-width:465px)" srcSet="/images/pattern-divider-mobile.svg" style={{width: '100%'}} />
            <img src="/images/pattern-divider-desktop.svg" alt="divider" style={{width: '100%'}} />
        </picture>
    );
};

export default Divider;