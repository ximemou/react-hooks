import React from 'react';

const Link = ({className, href,children}) => {


    const onClick = (event) => {
        // para que al hacer command click abra una nueva tab
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        window.history.pushState({},'', href);

        //avisa que la url cambio
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };


    return(
   <a onClick={onClick} 
      className={className} 
      href={href}
    >
        {children}
   
    </a> 
) 
};

export default Link;