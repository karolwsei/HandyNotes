import React from 'react'
import TopBar from './components/topBar'
import SideMenu from './containers/SideMenu'
import WorkspaceView from './components/workspaceView'
import Radium from 'radium'
import Media from 'react-media'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            currentNote: "",
            savedNotes: {},
            isDisabled: true
        }
    }

    changeText = ( event ) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    saveNote = () => {
        if( this.state.text != "" && this.state.currentNote != ""){
            localStorage.setItem(this.state.currentNote, this.state.text);
            this.fetchData();
        }
    }

    createNote = () => {
        this.setState({
            text: "", 
            currentNote: "",
            isDisabled: false
        })
    }

    fetchData = () => {
        let _savedNotes = {};
        let storage = Object.entries(localStorage);
        for( let x = 0; x < storage.length; x++){
            _savedNotes[storage[x][0]] = storage[x][1]
        }
        this.setState({
            'savedNotes': _savedNotes
        })
    }

    loadNote = ( key ) => {
        console.log(key)
        let note = localStorage.getItem( key );
        this.setState({
            text: note,
            currentNote: key,
            isDisabled: false
        })
    }

    removeNote = () => {
        localStorage.removeItem(this.state.currentNote);
        this.setState({
            text: '',
            currentNote: "",
            isDisabled: true
        })
        this.fetchData();
    }
    
    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            <div style = { styles.container }>
                <TopBar />
                <Media query={{ maxWidth: 800 }} >
                    
                    { matches => matches ? (
                        <div style = { styles.block }>

                            <WorkspaceView 
                                input = { this.state.isDisabled ? styles.input : styles.focus } 
                                onChange = { this.changeText } 
                                currentNote = { this.state.currentNote }
                                text = { this.state.text }
                                disabled = { this.state.isDisabled } />

                            <SideMenu 
                                saveNote = { this.saveNote } 
                                createNote = { this.createNote } 
                                savedNotes = { this.state.savedNotes } 
                                loadNote = { this.loadNote } 
                                removeNote = { this.removeNote }
                                disabled = { this.state.isDisabled } />

                        </div>
                    ) : (
                        <div style = { styles.flex }>
                            
                            <SideMenu 
                                saveNote = { this.saveNote } 
                                createNote = { this.createNote } 
                                savedNotes = { this.state.savedNotes } 
                                loadNote = { this.loadNote } 
                                removeNote = { this.removeNote }
                                disabled = { this.state.isDisabled } />

                            <WorkspaceView 
                                input = { this.state.isDisabled ? styles.input : styles.focus } 
                                onChange = { this.changeText } 
                                currentNote = { this.state.currentNote }
                                text = { this.state.text }
                                disabled = { this.state.isDisabled } />

                        </div>
                    )}
                    
                </Media>     
            </div>
        )
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    flex: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    block: {
        width: '100%',
        height: '45%',
        display: 'block',
    },
    input: {
        width: '100%',
        height: '95%',
        border: 'none',
        outline: 'none',
        padding: 15,
        resize: 'none',
        fontSize: 20,
        letterSpacing: '1px',
        backgroundColor: '#404142',
        boxSizing: 'border-box'
    },
    focus: {
        width: '100%',
        height: '95%',
        border: 'none',
        outline: 'none',
        resize: 'none',
        fontSize: 20,
        letterSpacing: '1px',
        backgroundColor: 'black',
        color: '#72cbff',
        padding: 15,
        boxSizing: 'border-box'
    },
}

export default Radium(App)