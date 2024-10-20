import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
import UploadAndParseCsv from "./uploadAndParseCSV";

export default function App() {
  return (
    <div className="h-full font-body bg-bg">
      <Header />
      <Hero />
      <Main />
      <Footer />
      <UploadAndParseCsv />
    </div>
  );
}
