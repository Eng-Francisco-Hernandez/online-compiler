import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

interface CodeEditorProps {
  code: string;
  onChange: (changedCode: string) => void;
}

export default function CodeEditor(props: CodeEditorProps) {
  const { code, onChange } = props;

  return (
    <AceEditor
      enableBasicAutocompletion
      enableLiveAutocompletion
      enableSnippets
      mode="javascript"
      theme="monokai"
      name="codeEditor"
      fontSize={18}
      width={"100%"}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      tabSize={2}
      setOptions={{ useWorker: false }}
      value={code}
      onChange={onChange}
    />
  );
}
