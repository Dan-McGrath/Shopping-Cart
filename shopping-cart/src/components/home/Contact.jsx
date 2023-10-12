const Contact = () => {
  return (
    <section className="contact">
      <form action="">
        <div className="name">
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" placeholder="John Doe" />
        </div>
        <div className="email">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="70"
            rows="1"
            placeholder="Please leave any feedback or questions you may have!"
          ></textarea>
        </div>

        <button className="btn-submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
