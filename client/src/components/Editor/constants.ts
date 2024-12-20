export const LANGUAGE_VERSIONS =new Map<string,string>([ 
  ["javascript", "1.32.3"],
  ["typescript" , "5.0.3"],
  ["c++","10.2.0"],
  ["python", "3.10.0"],
  ["java", "15.0.2"],
  ["csharp", "6.12.0"],
  ["php", "8.2.3"],
]);


export const CODE_SNIPPETS = new Map<string,string>([
    ["javascript",`function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`],
    ["typescript", `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`],
    ["c++", `#include<bits/stdc++.h> \nusing namespace std; \nint main(){ \n\n \tcout<<"Hello World!"; \n\n} `],
    ["python", `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`],
    ["java", `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`],
    ["csharp",'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n'],
    ["php", "<?php\n\n$name = 'Alex';\necho $name;\n"],
]);