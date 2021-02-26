import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.left}>
                <div className={classes.avatar}>
                    <img src="https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png" alt="Avatar"/>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.author}>author name</div>
                <div className={classes.text}>{props.message}</div>
            </div>
        </div>
    );
}

export default Post;