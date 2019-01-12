import React from 'react'
import SideMenuView from '../components/sideMenu/sideMenu'
import SideMenuMobile from '../components/sideMenu/sideMenuMobile'
import Note from '../components/note'
import Media from 'react-media'

export default class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return <Media query = {{ maxWidth: 800 }} >

        { matches => matches ? (

            <SideMenuMobile createNote = { this.props.createNote } saveNote = { this.props.saveNote } disabled = { this.props.disabled } removeNote = { this.props.removeNote } >
            {
                Object.entries(this.props.savedNotes).map( ( entry, index ) => { 
                    if ( entry != null )
                    return <Note key = { index } loadNote = { () => this.props.loadNote(entry[0]) }>{ entry[0] }</Note>
                } )
            }
            </SideMenuMobile>

        ) : (

            <SideMenuView createNote = { this.props.createNote } saveNote = { this.props.saveNote } disabled = { this.props.disabled } removeNote = { this.props.removeNote } >
            {
                Object.entries(this.props.savedNotes).map( ( entry, index ) => { 
                    if ( entry != null )
                    return <Note key = { index } loadNote = { () => this.props.loadNote(entry[0]) }>{ entry[0] }</Note>
                } )
            }
            </SideMenuView>

        )}
        </Media>
        
        
    }
}