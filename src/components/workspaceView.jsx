import React from 'react'
import Radium from 'radium'
import Media from 'react-media'

const WorkspaceView = (props) => {
    return <Media query = {{ maxWidth: 800 }} >

    { matches => matches ? (
        <div style = {  [ styles.container, { width: '100%' } ]  } >

        <div style = { styles.flex }>

            <article style = { styles.header } >Nazwa:</article>
            <input type = "text" maxLength = "24" style = { styles.name } onChange = { props.onChange } disabled = { props.disabled } name = "currentNote" value = { props.currentNote } ></input>

        </div>

        <textarea style = { props.input } onChange = { props.onChange } disabled = { props.disabled } name = "text" value = { props.text } ></textarea>

        </div>
    ) : (
        <div style = {  [ styles.container, { width: '80%' } ]  } >

        <div style = { styles.flex }>

            <article style = { styles.header } >Nazwa:</article>
            <input type = "text" maxLength = "24"  style = { styles.name } onChange = { props.onChange } disabled = { props.disabled } name = "currentNote" value = { props.currentNote } ></input>

        </div>

        <textarea style = { props.input } onChange = { props.onChange } disabled = { props.disabled } name = "text" value = { props.text } ></textarea>

        </div>
    )}

    </Media>
}

const styles = {
    container: {
        height: '100%',
    },
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        letterSpacing: '1px',
        fontStyle: 'bold'
    },
    name: {
        width: '100%',
        border: 'none',
        outline: 'none',
        resize: 'none',
        fontSize: 20,
        letterSpacing: '1px',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        lineHeight: '100%',
        textAlign: 'center',
        height: '10%'
    }
}

export default Radium(WorkspaceView)