import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      {/* aboutus start */}
      <div className="aboutus">
        <div className="up">
          <img
            style={{ width: "100%", height: "500px" }}
            src="https://tripplanet.ru/wp-content/uploads/asia/kyrgyzstan/bishkek/dostoprimechatelnosti-bishkeka.jpg"
            alt="юрта"
          />
          <div className="caption">
            <h1 style={{ marginLeft: "20%", paddingBottom: "20%" }}>О нас</h1>
            <span>Для исследователей повсюду.</span>
          </div>
        </div>
      </div>
      {/* aboutus end */}
      {/* content start */}
      <div className="content">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2924.058030167434!2d74.58435237606176!3d42.871619302629675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1683884052639!5m2!1sru!2skg"
            style={{ width: "200%", height: "100%", marginRight: "5%" }}
          ></iframe>
        </div>
        <div className="blocks-text" style={{ marginLeft: "30%" }}>
          <div style={{ marginBottom: "3%" }}>
            <span>
              Мы считаем, что путешествия доступны каждому. Это помогает нам{" "}
              <br /> познавать себя и окружающий мир.
            </span>
          </div>
          <div style={{ marginBottom: "3%" }}>
            <span>
              Наша цель — помочь большему количеству людей из разных слоев
              общества <br /> испытать радость исследования. Потому что мы
              верим, что это строит более <br /> добрый, инклюзивный и открытый
              мир.
            </span>
          </div>
          <div style={{ marginBottom: "3%" }}>
            <span>
              Как и вы, путешествия заложены в нашей ДНК. В Go Travel мы верим,
              что <br /> путешествия открывают дверь к величайшим и самым
              незабываемым <br /> впечатлениям, которые может предложить жизнь.
              И мы узнали, что лучшее <br /> путешествие — это когда вы выходите
              из себя, оставляете позади <br /> повседневность, погружаетесь в
              себя, а не просто смотрите <br /> на достопримечательности.
            </span>
          </div>
          <div style={{ marginBottom: "3%" }}>
            <span>
              Как путешественники, вы находитесь в пути, и мы в Go Travel тоже в
              пути. <br /> За последние два года путешествия изменились. Мы
              глубоко размышляем не <br /> только о том, как мы путешествуем, но
              и о том, почему мы путешествуем и как <br /> лучше всего
              обслуживать путешественников в их путешествии, и мы <br />
              приближаемся к нашему 50-летию со страстью и стремлением помочь
              <br /> другим сделать это.
            </span>
          </div>
        </div>
      </div>
      {/* content end*/}
    </div>
  );
};

export default AboutUs;
