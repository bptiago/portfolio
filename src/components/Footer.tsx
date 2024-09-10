import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="border-t p-6 flex justify-center gap-x-8">
      <a href="https://github.com/bptiago" target="_blank">
        <div className="flex items-center gap-x-1 underline underline-offset-2 hover:no-underline">
          <GitHubIcon fontSize="medium" />
          GitHub
        </div>
      </a>

      <a href="https://www.linkedin.com/in/bptiago/" target="_blank">
        <div className="flex items-center gap-x-1 underline underline-offset-2 hover:no-underline">
          <LinkedInIcon fontSize="medium" />
          LinkedIn
        </div>
      </a>
    </div>
  );
}
