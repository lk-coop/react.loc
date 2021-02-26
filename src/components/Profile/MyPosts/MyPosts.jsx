import classes from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div className={classes.last_posts}>
            <h2 className={"section_title " + classes.title}>Последние посты</h2>
            <div className={classes.display}>
                <Post message="Lorem ipsum del soro 500 symbols, React js" />
                <Post message="Yeah, react js so good technology for web dev!" />
                <Post message="Check your payment" />
            </div>
        </div>
    );
}

export default MyPosts;