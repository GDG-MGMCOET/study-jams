import Icon from "@mdi/react";
import { mdiWhatsapp, mdiInstagram, mdiLinkedin } from "@mdi/js";
import { Tooltip } from "antd";

export default function Header({ lastUpdated }) {
  return (
    <>
      <header className="bg-white shadow-xl">
        <div className="container flex items-center justify-between p-5 mx-auto max-md:flex-col max-md:gap-5">
          <img
            src="./Logo light.png"
            alt="GDG MGM COET Logo"
            className="h-14 drop-shadow-md"
          />
          <div className="flex gap-2 drop-shadow-md ">
            <Tooltip title="Community Page" placement="bottomRight">
              <a
                className="transition-all hover:scale-125"
                href="https://gdg.community.dev/gdg-on-campus-mahatma-gandhi-missions-college-of-engineering-and-technology-noida-india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./gdg.png" alt="GDG" className="h-10" />
              </a>
            </Tooltip>
            <Tooltip title="Whatsapp">
              <a
                className="transition-all hover:scale-125"
                href="https://chat.whatsapp.com/Fv8DFFkNiySFFkTynK1ifo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiWhatsapp} size={1.5} color="#25d366" />
              </a>
            </Tooltip>
            <Tooltip title="Instagram">
              <a
                className="transition-all hover:scale-125"
                href="https://www.instagram.com/gdg_mgmcoet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiInstagram} size={1.5} color="#c32aa3" />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn" placement="bottomLeft">
              <a
                className="transition-all hover:scale-125"
                href="https://www.linkedin.com/company/gdg-mgmcoet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiLinkedin} size={1.5} color="#007bb5" />
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="text-white bg-blue">
          <div className="container flex items-center justify-around py-2 mx-auto max-md:flex-col max-md:gap-5">
            <p>Gen AI Study Jams & Arcade is Live !!</p>
            <p>
              Last Updated : <span>{lastUpdated}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
