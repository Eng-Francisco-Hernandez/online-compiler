import dynamic from "next/dynamic";
import { Button, Container, Grid, Header } from "semantic-ui-react";
import { useState } from "react";

const CodeEditor = dynamic(
  () => import("@/components/code-editor/CodeEditor"),
  { ssr: false }
);

const Terminal = dynamic(() => import("@/components/terminal/Terminal"), {
  ssr: false,
});

export default function Index() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [language, setLanguage] = useState("nodejs");

  const compileCode = async () => {
    try {
      const response = await fetch(
        `/api/compiler`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: code, language: language }),
        }
      );
      const parsedResponse = await response.json();
      setResult(parsedResponse.output);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container style={{ marginTop: "3em", minWidth: "90%" }}>
      <Header as="h2" dividing>
        Online compiler
      </Header>
      <Grid columns="2" stackable>
        <Grid.Column>
          <CodeEditor
            code={code}
            onChange={(changedCode: string) => setCode(changedCode)}
          />
        </Grid.Column>
        <Grid.Column>
          <Terminal result={result} />
        </Grid.Column>
      </Grid>
      <Grid columns="1">
        <Grid.Column>
          <Button onClick={compileCode} primary>
            Run
          </Button>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
