import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ColoredTabs from "./ColoredTabs";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-100 py-4 px-20 bg-white border-b">
      <div className="flex justify-center sm:justify-between items-center mx-auto">
        <a href="/">
          <div className="hidden sm:flex justify-between items-center gap-2">
            <FingerprintIcon fontSize="large" color="primary" />
            <span className="font-semibold text-2xl">tiago</span>
          </div>
        </a>

        <div>
          <ColoredTabs labels={["home", "contato", "projetos"]} />
        </div>
      </div>
    </header>
  );
}
