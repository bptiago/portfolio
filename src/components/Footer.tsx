import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="border-t p-6 flex justify-center gap-x-8">
      <a href="https://github.com/bptiago" target="_blank">
        <div className="flex items-center gap-x-1 underline underline-offset-2 hover:no-underline text-sm">
          <GitHubIcon fontSize="small" />
          GitHub
        </div>
      </a>

      <a href="https://www.linkedin.com/in/bptiago/" target="_blank">
        <div className="flex items-center gap-x-1 underline underline-offset-2 hover:no-underline text-sm">
          <LinkedInIcon fontSize="small" />
          LinkedIn
        </div>
      </a>
    </div>
  );
}
