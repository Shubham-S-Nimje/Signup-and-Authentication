import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  console.log(localStorage.getItem('token'))
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;
