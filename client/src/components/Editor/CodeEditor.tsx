import { useState } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useRef } from "react";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";
import LanguageSelector from "./LanguageSelector";

function CodeEditor() {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [language,setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output,setOutput] = useState([])


  function handleEditorChange( value: string | undefined,_event: editor.IModelContentChangedEvent) {
    if(value) setCode(value);
  }

  const onMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
    const model = editor.getModel(); // Get the current model
    if (model) {
      console.log(model.getLanguageId()); // Get the current language ID
    }
  };

  const onSelectLang = (language:string)=>{
    setLanguage(language);
    const snippet = CODE_SNIPPETS.get(language);
    if(snippet) setCode(snippet)
  }


  return (
    <>
    <div className="border rounded-md p-2">
      <LanguageSelector language={language} onSelectLang={onSelectLang}/>
      <MonacoEditor
        width="55vw"
        height="60vh"
        theme="vs-dark"
        language={language}
        value={code}
        defaultValue={CODE_SNIPPETS.get(language)}
        onChange={handleEditorChange}
        onMount={onMount}
      />
    </div>
    <Output output={output} language={language} editorRef = {editorRef} setOutput={setOutput}/>
    </>
  );
}

export default CodeEditor;
