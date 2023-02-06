import dynamic from "next/dynamic";
import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Select,
} from "semantic-ui-react";
import {
  programs,
  selectLanguageSettings,
  themeSettings,
} from "@/utils/util-constants/util-constants";

const CodeEditor = dynamic(
  () => import("@/components/code-editor/CodeEditor"),
  { ssr: false }
);

const Terminal = dynamic(() => import("@/components/terminal/Terminal"), {
  ssr: false,
});

export default function Index() {
  const [code, setCode] = useState(
    programs.find((item) => item.key === "nodejs")!.program
  );
  const [result, setResult] = useState("$ ");
  const [language, setLanguage] = useState("nodejs");
  const [theme, setTheme] = useState("solarized_dark");

  const compileCode = async () => {
    setResult(" ... Loading ...");
    try {
      const response = await fetch(`/api/compiler`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code, language: language }),
      });
      const parsedResponse = await response.json();
      setResult(parsedResponse.output);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="main-container">
      <Header as="h2" dividing>
        Online compiler
      </Header>
      <Grid columns="2">
        <Grid.Column>
          <Grid columns="3">
            <Grid.Column>
              <Menu compact style={{ marginRight: "20px" }}>
                <Select
                  placeholder="Language"
                  options={selectLanguageSettings}
                  value={language}
                  onChange={(e: any, { value }) => {
                    setCode(
                      programs.find((item) => item.key === value)!.program
                    );
                    setLanguage(value as any);
                  }}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Menu compact>
                <Select
                  placeholder="Theme"
                  value={theme}
                  options={themeSettings}
                  onChange={(e: any, { value }) => setTheme(value as any)}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={compileCode} primary>
                Run
              </Button>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
      <Grid columns="2" stackable>
        <Grid.Column>
          <CodeEditor
            language={language}
            theme={theme}
            code={code}
            onChange={(changedCode: string) => setCode(changedCode)}
          />
        </Grid.Column>
        <Grid.Column>
          <Terminal result={result} />
        </Grid.Column>
      </Grid>
      <Grid columns="1" style={{ marginTop: "0" }}>
        <Grid.Column
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Header style={{ marginTop: "15px" }} as="h4" floated="right">
            Built by Francisco Hernández
          </Header>
          <Menu.Item
            href="https://github.com/Eng-Francisco-Hernandez/online-compiler"
            position="right"
            target="_blank"
          >
            <Icon link name="github" inverted size="big" />
          </Menu.Item>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
