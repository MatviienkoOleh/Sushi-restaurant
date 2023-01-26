import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./About.module.css";

const About = () => {
  const [firstAnswer, setFirsAnswer] = useState(false);
  const [secondAnswer, setSecondAnswer] = useState(false);
  const [thirdAnswer, setThirdAnswer] = useState(false);
  const [foursAnswer, setFoursAnswer] = useState(false);
  const [fifthAnswer, setFifthAnswer] = useState(false);

  return (
    <div>
      <Header />
      <main className={styles.about}>
        <h2 className={styles.headers}>About Us</h2>
        <p className={styles.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          praesentium id quibusdam iusto blanditiis alias dignissimos asperiores
          aliquam vel velit eaque, accusantium minima tenetur. Dolorem quasi ad
          perferendis laborum? Perferendis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Laudantium praesentium id quibusdam
          iusto blanditiis alias dignissimos asperiores aliquam vel velit eaque,
          accusantium minima tenetur. Dolorem quasi ad perferendis laborum?
          Perferendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium praesentium id quibusdam iusto blanditiis alias dignissimos
          asperiores aliquam vel velit eaque, accusantium minima tenetur.
          Dolorem quasi ad perferendis laborum? Perferendis. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Laudantium praesentium id
          quibusdam iusto blanditiis alias dignissimos asperiores aliquam vel
          velit eaque, accusantium minima tenetur. Dolorem quasi ad perferendis
          laborum? Perferendis. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium praesentium id quibusdam iusto blanditiis
          alias dignissimos asperiores aliquam vel velit eaque, accusantium
          minima tenetur. Dolorem quasi ad perferendis laborum? Perferendis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          praesentium id quibusdam iusto blanditiis alias dignissimos asperiores
          aliquam vel velit eaque, accusantium minima tenetur. Dolorem quasi ad
          perferendis laborum? Perferendis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Laudantium praesentium id quibusdam
          iusto blanditiis alias dignissimos asperiores aliquam vel velit eaque,
          accusantium minima tenetur. Dolorem quasi ad perferendis laborum?
          Perferendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium praesentium id quibusdam iusto blanditiis alias dignissimos
          asperiores aliquam vel velit eaque, accusantium minima tenetur.
          Dolorem quasi ad perferendis laborum? Perferendis.
        </p>
        <h2 className={styles.headers}>FAQ</h2>
        <ul className={styles.faq}>
          <li
            className={styles.listItem}
            onClick={() => setFirsAnswer(!firstAnswer)}
          >
            How to make Order ?
          </li>
          <li
            className={styles.listAnswers}
            style={firstAnswer ? { display: "flex" } : { display: "none" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            voluptas sapiente omnis, ratione ab facilis pariatur ipsum
            voluptatem vel error ipsa repellendus dignissimos amet numquam nobis
            unde? Architecto, saepe commodi?
          </li>
          <li
            className={styles.listItem}
            onClick={() => setSecondAnswer(!secondAnswer)}
          >
            How to contact with us ?
          </li>
          <li
            className={styles.listAnswers}
            style={secondAnswer ? { display: "flex" } : { display: "none" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            voluptas sapiente omnis, ratione ab facilis pariatur ipsum
            voluptatem vel error ipsa repellendus dignissimos amet numquam nobis
            unde? Architecto, saepe commodi?
          </li>
          <li
            className={styles.listItem}
            onClick={() => setThirdAnswer(!thirdAnswer)}
          >
            Where do you take food for your dishes?
          </li>
          <li
            className={styles.listAnswers}
            style={thirdAnswer ? { display: "flex" } : { display: "none" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            voluptas sapiente omnis, ratione ab facilis pariatur ipsum
            voluptatem vel error ipsa repellendus dignissimos amet numquam nobis
            unde? Architecto, saepe commodi? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Et voluptas sapiente omnis, ratione ab
            facilis pariatur ipsum voluptatem vel error ipsa repellendus
            dignissimos amet numquam nobis unde? Architecto, saepe commodi?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            voluptas sapiente omnis, ratione ab facilis pariatur ipsum
            voluptatem vel error ipsa repellendus dignissimos amet numquam nobis
            unde? Architecto, saepe commodi?
          </li>
          <li
            className={styles.listItem}
            onClick={() => setFoursAnswer(!foursAnswer)}
          >
            Where can I find you?
          </li>
          <li
            className={styles.listAnswers}
            style={foursAnswer ? { display: "flex" } : { display: "none" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            voluptas sapiente omnis, ratione ab facilis pariatur ipsum
            voluptatem vel error ipsa repellendus dignissimos amet numquam nobis
            unde? Architecto, saepe commodi? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Et voluptas sapiente omnis, ratione ab
            facilis pariatur ipsum voluptatem vel error ipsa repellendus
            dignissimos amet numquam nobis unde? Architecto, saepe commodi?
          </li>
          <li
            className={styles.listItem}
            onClick={() => setFifthAnswer(!fifthAnswer)}
          >
            How might I get in touch with you?
          </li>
          <li
            className={styles.listAnswers}
            style={fifthAnswer ? { display: "flex" } : { display: "none" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            voluptas sapiente omnis, ratione ab facilis pariatur ipsum
            voluptatem vel error ipsa repellendus dignissimos amet numquam nobis
            unde? Architecto, saepe commodi?
          </li>
        </ul>
        <h2 className={styles.headers}>Terms and Conditions</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros
          dolor, rutrum eu felis sed, sagittis lacinia leo. Aliquam erat
          volutpat. Duis sodales quam turpis, id vulputate purus vehicula a.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer
          quis nisl volutpat, bibendum nisl nec, volutpat neque. Proin sodales
          pellentesque quam sed interdum. Fusce commodo faucibus risus sit amet
          consequat. Morbi ut aliquet ipsum. Nunc fermentum sagittis eros ut
          lacinia. Sed fermentum nibh arcu, sit amet porttitor purus laoreet
          eget. Nulla vel ullamcorper ipsum, in consectetur nibh. Nulla porta
          lectus ac ex interdum, sed euismod odio molestie. Integer consequat at
          metus et volutpat. Nam fermentum lorem quis nibh pulvinar, in volutpat
          metus malesuada. Nam efficitur enim in dui maximus ultricies. Sed
          maximus ultricies risus, eget convallis risus auctor eget. Nam in odio
          mi. Aenean aliquam mauris turpis, quis imperdiet nibh auctor vitae.
          Morbi ac lectus dui. Duis id ultrices eros, vitae faucibus mi. Vivamus
          odio velit, lobortis in velit eget, tristique vehicula justo. Ut
          tincidunt nisi id sagittis maximus. Morbi finibus, nisi a efficitur
          placerat, urna ipsum semper tortor, ut gravida neque purus a lorem.
          Fusce aliquet facilisis sodales. Morbi diam urna, pulvinar nec purus
          consequat, feugiat hendrerit turpis. Aenean sagittis pellentesque
          ipsum, vel finibus tellus tincidunt non. Morbi et magna eget quam
          venenatis fringilla. Integer eleifend enim viverra, elementum est nec,
          tempor arcu. Morbi vel aliquet eros, vel maximus felis. Sed vel
          commodo erat. Praesent efficitur enim ac eros aliquam vulputate. Proin
          enim nibh, tempus a varius ut, elementum ut metus. Vestibulum
          vulputate, massa ut luctus ultrices, mi turpis vehicula tortor, eu
          volutpat massa nibh ut eros. Morbi efficitur dui eget scelerisque
          maximus. Ut sed iaculis nibh, et porttitor ex. Quisque posuere porta
          lorem, eu ultrices sem. Nullam ut dapibus tellus. Mauris suscipit
          pretium est, a pellentesque urna commodo vel. Suspendisse pellentesque
          a purus quis facilisis. Aliquam semper augue in risus iaculis
          consequat. Phasellus consectetur imperdiet tempus. Duis quis sapien
          tellus. Sed non justo ac massa luctus mattis. Vestibulum porta lectus
          a erat euismod commodo. Donec ante sem, porttitor a lectus ac,
          dignissim ultrices urna. Phasellus dignissim porttitor sodales. Donec
          faucibus in urna sed semper. Aliquam tristique sapien ante, eu
          imperdiet arcu efficitur tempus. Maecenas ac felis volutpat, pretium
          odio vel, tincidunt enim. Sed consequat justo a luctus fermentum.
          Pellentesque facilisis sollicitudin lectus vel tincidunt. Ut eu sapien
          ultricies, auctor nulla eu, efficitur lectus. Suspendisse commodo ex
          in augue mollis, eu rhoncus leo hendrerit. Curabitur vestibulum sapien
          dui, in ullamcorper dui semper eu. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec vitae arcu et massa aliquet
          porttitor. Curabitur nec ex quis felis lacinia varius. Nulla vel nunc
          vitae leo tristique blandit. Integer sit amet risus mattis, sodales
          ligula et, facilisis nisl. In ut lorem enim. Vivamus justo lacus,
          tempor eu lobortis et, tristique eu risus.
        </p>
        <h2 className={styles.headers}>Privacy Policy</h2>
        <p className={styles.paragraph}>
          rem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros
          dolor, rutrum eu felis sed, sagittis lacinia leo. Aliquam erat
          volutpat. Duis sodales quam turpis, id vulputate purus vehicula a.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer
          quis nisl volutpat, bibendum nisl nec, volutpat neque. Proin sodales
          pellentesque quam sed interdum. Fusce commodo faucibus risus sit amet
          consequat. Morbi ut aliquet ipsum. Nunc fermentum sagittis eros ut
          lacinia. Sed fermentum nibh arcu, sit amet porttitor purus laoreet
          eget. Nulla vel ullamcorper ipsum, in consectetur nibh. Nulla porta
          lectus ac ex interdum, sed euismod odio molestie. Integer consequat at
          metus et volutpat. Nam fermentum lorem quis nibh pulvinar, in volutpat
          metus malesuada. Nam efficitur enim in dui maximus ultricies. Sed
          maximus ultricies risus, eget convallis risus auctor eget. Nam in odio
          mi. Aenean aliquam mauris turpis, quis imperdiet nibh auctor vitae.
          Morbi ac lectus dui. Duis id ultrices eros, vitae faucibus mi. Vivamus
          odio velit, lobortis in velit eget, tristique vehicula justo. Ut
          tincidunt nisi id sagittis maximus. Morbi finibus, nisi a efficitur
          placerat, urna ipsum semper tortor, ut gravida neque purus a lorem.
          Fusce aliquet facilisis sodales. Morbi diam urna, pulvinar nec purus
          consequat, feugiat hendrerit turpis. Aenean sagittis pellentesque
          ipsum, vel finibus tellus tincidunt non. Morbi et magna eget quam
          venenatis fringilla. Integer eleifend enim viverra, elementum est nec,
          tempor arcu. Morbi vel aliquet eros, vel maximus felis. Sed vel
          commodo erat. Praesent efficitur enim ac eros aliquam vulputate. Proin
          enim nibh, tempus a varius ut, elementum ut metus. Vestibulum
          vulputate, massa ut luctus ultrices, mi turpis vehicula tortor, eu
          volutpat massa nibh ut eros. Morbi efficitur dui eget scelerisque
          maximus. Ut sed iaculis nibh, et porttitor ex. Quisque posuere porta
          lorem, eu ultrices sem. Nullam ut dapibus tellus.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
