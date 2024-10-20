import { Tooltip } from "antd";

export default function Footer() {
  return (
    <footer className="py-3 font-bold text-center shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-gray">
      <p>
        © GDG On Campus MGM COET 2024 |{" "}
        <Tooltip
          title=" Jeetu Gupta, Hriday Budhiraja, Suraj Sharma, Tushar, Himashu Pandey"
          placement="top"
          className="cursor-pointer"
        >
          Contributors ( Hover me )
        </Tooltip>
      </p>
    </footer>
  );
}
