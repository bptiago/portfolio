import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ColoredTabs from "./ColoredTabs";

export default function Navbar() {
  return (
    <header className="w-100 p-10">
      <div className="flex justify-between items-center mx-auto">
        <div className="flex justify-between items-center gap-2">
          <FingerprintIcon fontSize="large" color="primary" />
          <span className="font-semibold text-2xl">tiago</span>
        </div>
        <div>
          <ColoredTabs labels={["home", "contato", "projetos"]} />
        </div>
      </div>
    </header>
  );
}
