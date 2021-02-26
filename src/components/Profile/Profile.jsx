import MyPosts from "./MyPosts/MyPosts"
import classes from "./profile.module.css";

const Profile = () => {
    return (
        <div className={classes.profile}>
            Profile

            <MyPosts />
        </div>
    );
}

export default Profile;