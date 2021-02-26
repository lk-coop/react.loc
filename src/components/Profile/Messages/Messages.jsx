import { NavLink } from 'react-router-dom';
import classes from './messages.module.css';

/**
 * 
 * @param {id, name} props 
 */
const DialogItem = (props) => {
    const path = '/messages/' + props.id;

    return (
        <div className={classes.item}>
            <NavLink to={path} className={classes.name}>{props.name}</NavLink>
        </div>
    );
}

/**
 * 
 * @param {id, text} props 
 */
const Message = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.text}>{props.text}</div>
        </div>
    );  
}


const Messages = () => {
    let dialogs = [
        {id: 1, name: 'Dmitriy React'},
        {id: 2, name: 'Ilya Kantor'},
        {id: 3, name: 'Alexey Pokazanov'},
        {id: 4, name: 'Igor\'r Petrochenko'},
        {id: 5, name: 'Vladilen Minin'},
    ].map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> );


    let messages = [
        {id: 1, text: 'Message 1'},
        {id: 2, text: 'Message 2'}
    ].map( message => <Message id={message.id} text={message.text} /> );


    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_list}>
                {dialogs}
            </div>
            <div className={classes.dialog_messages}>
                {messages}
            </div>
        </div>
    );
}

export default Messages;