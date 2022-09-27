import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div classesName={classes.image}>
      <Image
        src="/images/site/daria.png"
        alt="An image showing Daria"
        width={300}
        height={300}
      />
      </div>
      <h1>Hi, I'm Daria</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
export default Hero;
