import { Link } from "@mui/material";
import { ComponentPropsWithoutRef } from "react";

type CardProps = {
  title: string;
  description?: string;
  url: string;
} & ComponentPropsWithoutRef<"div">;

export default function Card({ title, description, url }: CardProps) {
  return (
    <div
      className="w-full min-w-54 rounded hover:shadow-[0_0px_20px_0px_rgba(25,118,210,0.25)] border hover:cursor-pointer"
      style={{ transition: "all", transitionDuration: "0.3s" }}
    >
      <div
        className="h-60 flex items-center justify-center p-4"
        style={{
          background: "#F9F8FD",
        }}
      >
        <div className="text-center">{description}</div>
      </div>
      <div className="p-6 border-t" style={{ background: "#ffffff" }}>
        <h1 className="highlight-color w-fit font-semibold text-lg">{title}</h1>
        <Link
          href={url}
          underline="hover"
          sx={{ color: "black" }}
          className="hover:tracking-wide transition-all"
        >
          github.com
        </Link>
      </div>
    </div>
  );
}
