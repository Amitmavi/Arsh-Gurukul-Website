import "./Location.css";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3464.211793133605!2d76.78588437554221!3d29.74258307507693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDQ0JzMzLjMiTiA3NsKwNDcnMTguNSJF!5e0!3m2!1sen!2sin!4v1750336316341!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Gurukul Location"
      ></iframe>
    </section>
  );
};

export default Location;
