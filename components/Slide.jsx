const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image})` }}></div>
  );
};

export default Slide;
