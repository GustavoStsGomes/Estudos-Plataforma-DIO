import React from 'react';
import { Children } from 'react';

function ComponenteA(props){     
    return(
        <div>Componente A ^^
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteA