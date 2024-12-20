import { Button } from "../ui/button";
import axios from "axios";
import { editor } from "monaco-editor";
import { LANGUAGE_VERSIONS } from "./constants";

interface OutputProps{
    output:string[];
    language:string;
    editorRef:React.MutableRefObject<editor.IStandaloneCodeEditor | null>;
    setOutput:Function;
}

const Output:React.FC<OutputProps> = ({output,setOutput,editorRef,language})=> {

    const runCode = async()=>{
        const version = LANGUAGE_VERSIONS.get(language);
        const code = editorRef.current?.getValue();
        const res = await axios.post('http://localhost:5000/execute',{language,version,code});
        setOutput(res.data.output.split('\n'));
    }

    return (
        <div className="h-[31vh] m-1 border rounded-md">
            <div className="flex justify-start items-center">
                <h1 className="m-2 text-white text-xl">Output</h1>
                <Button onClick={runCode} className="h-7 ml-4">Run</Button>
            </div>
            <div className="text-gray-400 m-2 p-1">{output.map((line,index)=>(
            <div key={index}>{line}</div>
            ))}</div>
        </div>
    )
}

export default Output