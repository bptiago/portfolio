import { Link } from "@mui/material";

export default function Card() {
  return (
    <div
      className="max-w-80 rounded hover:shadow-xl"
      style={{ transition: "all", transitionDuration: "0.3s" }}
    >
      <div
        className="h-60 flex items-center justify-center p-4"
        style={{
          background: "#F9F8FD",
        }}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt at
          magnam volup
        </div>
      </div>
      <div className="p-6 rounded-b" style={{ background: "#1976D2" }}>
        <h1 className="text-white w-fit font-semibold text-lg">titulo</h1>
        <Link
          href="#"
          underline="hover"
          sx={{ color: "white" }}
          className="hover:tracking-wide transition-all"
        >
          github.com
        </Link>
      </div>
    </div>
  );
}
