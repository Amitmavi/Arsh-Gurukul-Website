import "./Location.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.1670552548476!2d79.42518677494651!3d28.353798596684765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0072b03e53e71%3A0x27841529cd474cbc!2sBareilly%20College!5e0!3m2!1sen!2sin!4v1748059152181!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Gurukul Location"
      ></iframe>
    </section>
  );
};

export default Location;
