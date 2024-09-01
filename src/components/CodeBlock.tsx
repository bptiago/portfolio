import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock() {
  const codeString = `class Person {
    constructor() {
        this.name = "Tiago Prestes";
        this.traits = ["ESTUDANTE", "DESENVOLVEDOR"];
        this.age = new Date().getFullYear() - 2003;
    }
};`;

  return (
    <SyntaxHighlighter language="java" style={oneLight}>
      {codeString}
    </SyntaxHighlighter>
  );
}
