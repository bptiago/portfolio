import FingerprintIcon from "@mui/icons-material/Fingerprint";
import NavigationTabs from "./NavigationTabs";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-100 py-4 px-20 bg-white border-b">
      <div className="flex justify-center sm:justify-between items-center mx-auto">
        <a href="#home">
          <div className="hidden sm:flex justify-between items-center gap-2">
            <FingerprintIcon fontSize="large" color="primary" />
            <span className="font-semibold text-2xl">tiago</span>
          </div>
        </a>

        <div>
          <NavigationTabs
            labels={["home", "contato", "atividade", "projetos"]}
          />
        </div>
      </div>
    </header>
  );
}
