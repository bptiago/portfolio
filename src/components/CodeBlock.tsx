import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock() {
  const codeString = `class Person {
    private String name;
    private int age;

    public Person() {
        this.name = "Tiago Prestes";
        this.age = Year.now().getValue() - 2003;
    }
};`;

  const custom = {
    padding: "1.5rem",
    borderRadius: "30px",
  };

  return (
    <SyntaxHighlighter
      customStyle={custom}
      language="java"
      style={atomOneDark}
      showLineNumbers={true}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}
