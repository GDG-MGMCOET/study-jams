import Icon from "@mdi/react";
import { mdiWhatsapp, mdiInstagram, mdiLinkedin } from "@mdi/js";

export default function Header() {
  return (
    <>
      <header className="bg-white ">
        <div className="container flex items-center justify-between p-5 mx-auto">
          <img
            src="./Logo light.png"
            alt="GDG MGM COET Logo"
            className="h-14"
          />
          <div className="flex gap-2 ">
            <Icon path={mdiWhatsapp} size={1.5} color="#25d366" />
            <Icon path={mdiInstagram} size={1.5} color="#c32aa3" />
            <Icon path={mdiLinkedin} size={1.5} color="#007bb5" />
          </div>
        </div>
        <div className="text-white bg-blue">
          <div className="container flex justify-around py-2 mx-auto">
            <p>Gen AI Study Jams & Arcade is Live !!</p>
            <p>
              Last Update : <span>16 July'24</span> <span>10:00</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
