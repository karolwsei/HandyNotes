import React from 'react'
import Radium from 'radium'

const TopBar = () => {
    return <div style = { styles.container }><article style = { styles.header }>Notes App</article></div>        
}

const styles = {
    container: {
        backgroundColor: '#1182c4',
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: '#72cbff',
        fontSize: '24px',
        fontStyle: 'bold',
        letterSpacing: '2px',
        cursor: 'default',
        ':hover':{
            color: 'white'
        }
    },
    
    
}

export default Radium(TopBar)