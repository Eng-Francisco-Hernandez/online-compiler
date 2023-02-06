import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-textile";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-dart";

import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";

import "ace-builds/src-noconflict/ext-language_tools";
import { coreLanguageSettings } from "@/utils/util-constants/util-constants";

interface CodeEditorProps {
  code: string;
  language: string;
  theme: string;
  onChange: (changedCode: string) => void;
}

export default function CodeEditor(props: CodeEditorProps) {
  const { code, language, theme, onChange } = props;

  return (
    <AceEditor
      enableBasicAutocompletion
      enableLiveAutocompletion
      enableSnippets
      mode={coreLanguageSettings.find((item) => item.key === language)!.mode}
      theme={theme}
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
