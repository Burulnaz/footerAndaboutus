import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <section
          className="media"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <h2>Go Travel</h2>
          <div
            className="social-media"
            style={{
              display: "flex",
              paddingTop: "2%",
            }}
          >
            <InstagramIcon />
            <FacebookIcon />
            <GoogleIcon />
            <WhatsAppIcon />
            <TelegramIcon />
            <YouTubeIcon />
          </div>
        </section>
        <hr />
        <section
          className="links"
          style={{
            display: "flex",
            justifyContent: "space-around",
            lineHeight: "150%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          {/* block-1 start */}
          <div className="block-1">
            <h4>
              <PublicIcon />
              GO TRAVEL
            </h4>
            <p>
              Go Travel, это забота <br /> о вашем здоровье <br /> и невероятные
              эмоции
            </p>
          </div>
          {/* block-1 end */}
          {/* block-2 start */}
          <div className="block-2">
            <h4>Туры</h4>
            <div>
              <span>Пляжные</span>
            </div>
            <div>
              <span>Экскурсионные </span>
            </div>
            <div>
              <span>Оздоровительные</span>
            </div>
            <span>Спортивные</span>
          </div>
          {/* block-2 end */}
          {/* block-3 start */}
          <div className="block-3">
            <h4>ПОЛЕЗНЫЕ ССЫЛКИ</h4>
            <div>
              <span>Цены</span>
            </div>
            <div>
              <span>Настройки</span>
            </div>
            <div>
              <span>Заказы</span>
            </div>
            <span>Помощь</span>
          </div>
          {/* block-3 end */}
          {/* block-4 start */}
          <div className="block-4">
            <h4>КОНТАКТ</h4>
            <div>
              <span>
                <HomeIcon /> Кыргызстан, Бишкек 10012
              </span>
            </div>
            <div>
              <span>
                <MailOutlineIcon /> travel@gmail.com
              </span>
            </div>
            <div>
              <span>
                <LocalPhoneIcon /> + 996 504 90 07 74
              </span>
            </div>
            <div>
              <span>
                <LockIcon /> + 996 777 90 30 76
              </span>
            </div>
          </div>
          {/* block-4 end */}
        </section>
        <section
          className="end"
          style={{
            width: "100%",
            height: "9vw",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            textAlign: "center",
            paddingTop: "5%",
          }}
        >
          <span>© 2021 С любовью: GoTravel.com</span>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
