import React, { useState } from "react";

const Marquee = () => {
  const [enableAnimation, setEnableAnimation] = useState(false);

  const toggleAnimation = () => {
    setEnableAnimation((prev) => !prev);
  };

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold">Fit content + position absolute :last-child</h2>
      <input
        id="enable-animation-5"
        type="checkbox"
        checked={enableAnimation}
        onChange={toggleAnimation}
        className="mt-2"
      />
      <label htmlFor="enable-animation-5" className="ml-2">Enable animation</label>

      <div className={`marquee marquee--fit-content marquee--pos-absolute ${enableAnimation && 'enable-animation'}`}>
        <ul className="marquee__content">
          <li className="marquee__item">1</li>
          <li className="marquee__item">2</li>
          <li className="marquee__item">3</li>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <li className="marquee__item">1</li>
          <li className="marquee__item">2</li>
          <li className="marquee__item">3</li>
        </ul>
      </div>
    </section>
  );
};

export default Marquee;
