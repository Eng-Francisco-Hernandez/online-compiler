import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-terminal";

interface TerminalProps {
  result?: string;
}

export default function Terminal(props: TerminalProps) {
  const { result } = props;

  return (
    <AceEditor
      theme="terminal"
      name="codeResult"
      fontSize={18}
      width={"100%"}
      tabSize={2}
      value={result}
      readOnly
      focus={false}
      showGutter={false}
      showPrintMargin={false}
      highlightActiveLine={false}
    />
  );
}
