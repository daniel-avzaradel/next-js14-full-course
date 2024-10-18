import classes from './NewPost.module.css';

function NewPost() {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </div>
    </form>
  );
}

export default NewPost;