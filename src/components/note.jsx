import React from 'react'
import Radiumn from 'radium'
import Media from 'react-media'

const Note = ( props ) => {
    return <Media query = {{ maxWidth: 800 }} >
    
    { matches => matches ? (
        <div style = { [ styles.container, { minWidth: '50%', minHeight: 75, maxWidth: '50%', maxHeight: 75 } ] } onClick = { props.loadNote } >
        
        <span style = { styles.header } > { props.children } </span>
    
    </div>
    ) : (
        <div style = { [ styles.container, { minWidth: '50%', minHeight: 100, maxWidth: '50%', maxHeight: 100 } ] } onClick = { props.loadNote } >
        
        <span style = { styles.header } > { props.children } </span>
    
    </div>
    )}

    </Media>
}

const styles = {
    container: {
        marginTop: 15,
        backgroundColor: '#72cbff',
        display: 'flex',
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        ':hover': {
            cursor: 'pointer',
            boxSizing: 'border-box',
            border: '4px solid black'
        }
    },
    header: {
        height: '100%',
        width: '100%',
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
    }
}

export default Radiumn(Note)