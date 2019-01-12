import React from 'react'
import Radium from 'radium'
import SaveIcon from '@material-ui/icons/SaveAlt'
import NewIcon from '@material-ui/icons/FiberNew'
import RemoveIcon from '@material-ui/icons/RemoveCircle'

const SideMenuMobile = (props) => {
    return <div style = { styles.container }>
        
        <div style = { styles.buttons } >
            <button type = "click" onClick = { props.saveNote } style = { styles.button } key = "1" disabled = { props.disabled } ><SaveIcon /></button>
            <button type = "click" onClick = { props.createNote } style = { styles.button } key = "2" ><NewIcon /></button>
            <button type = "click" onClick = { props.removeNote } style = { styles.button } key = "3" disabled = { props.disabled } ><RemoveIcon /></button>
        </div>

        <article style = { styles.header } key = "k1" >Aktualne notatki:</article>
       
        <div style = { styles.wrapper } >
            
            { props.children }
        
        </div>
    </div>
}

const styles = {
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#002a42',
        display: 'flex',
        justifyContet: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    buttons: {
        width: '100%',
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        borderSizing: 'box-border'
    },
    header: {
        textAlign: 'center',
        marginTop: 15,
        color: '#72cbff',
        fontSize: '24px',
        fontStyle: 'bold',
        letterSpacing: '2px',
        cursor: 'default',
        ':hover':{
            color: 'white'
        }
    },
    button: {
        width: '20%',
        margin: 15,
        minHeight: 50,
        backgroundColor: '#72cbff',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        ':active':{
            backgroundColor: 'black',
            color: '#72cbff',
        },
        ':hover': {
            cursor: 'pointer',
            boxSizing: 'border-box',
            outline: '4px solid black'
        }
    },
    wrapper: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        overflowY: 'scroll',
        marginTop: 20,
        boxSizing: 'border-box'
    }
}

export default Radium(SideMenuMobile)