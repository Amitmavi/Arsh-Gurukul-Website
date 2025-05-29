import "./SliderMessage.css";

function SliderMessage() {
  const gayatriMantra = `ॐ भूर्भुवः स्वः ।
तत्सवितुर्वरेण्यं ।
भर्गो देवस्य धीमहि ।
धियो यो नः प्रचोदयात् ।`;

  // Repeat the mantra multiple times for smooth sliding
  const repeatedMantra = Array(4).fill(gayatriMantra).join("   ");

  return (
    <div className="slider-container">
      <div className="slider-content" aria-label="Gayatri Mantra">
        {repeatedMantra}
      </div>
    </div>
  );
}

export default SliderMessage;
