import { LANGUAGE_VERSIONS } from "./constants"

interface LanguageSelectorProps {
    language:string,
    onSelectLang: (language: string) => any;
}

const LanguageSelector:React.FC<LanguageSelectorProps> =  ({language,onSelectLang})=> {
  
  return (
    <select value={language} onChange={(e)=>onSelectLang(e.target.value)} className="bg-[rgba(30,30,30,255)] text-white w-30 p-1 outline-none">  
        {LANGUAGE_VERSIONS.size > 0 ? (
            Array.from(LANGUAGE_VERSIONS).map(([key,value])=>(
                <option key={key} value={key} >
                    {key}
                </option>
            ))
        ):(
            <option key="javascript">javascript</option>  
        )}
    </select>
  )
}

export default LanguageSelector