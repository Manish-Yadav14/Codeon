import axios from "axios";
import CodeEditor from "@/components/Editor/CodeEditor";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Testcases = {
  testcaseId: string;
  problemId: string;
  input: { [key: string]: any };
  output: number[];
};

type Problems = {
  problemId: string;
  slug: string;
  title: string;
  statement: string;
  difficulty: string;
  topics: string[];
  testcases: Testcases[];
};

function Dashboard() {
  const navigate = useNavigate();
  const { problemSlug } = useParams<{ problemSlug: string }>();
  const [problem, setProblem] = useState<Problems | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log(problemSlug);

  const getProblemFromSlug = async () => {
    if (!problemSlug) return;
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/problems/${problemSlug}`
      );
      setProblem(res.data);
      console.log(res.data.testcases);
    } catch (error) {
      setError((error as Error).message || "Failed to fetch problem details");
      navigate("/problems"); // Redirect to a 404 page if the slug is invalid
    } finally {
      setIsLoading(false);
    }
  };

  // Function to render inputs dynamically
  const renderInput = (input: { [key: string]: any }) => {
    return Object.keys(input).map((key) => {
      const value = input[key];
      if (Array.isArray(value)) {
        return (
          <div key={key}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </div>
        );
      } else if (typeof value === "object") {
        return (
          <div key={key}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </div>
        );
      } else {
        return (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        );
      }
    });
  };

  useEffect(() => {
    if (problemSlug) {
      getProblemFromSlug();
    } else navigate("/problems");
  }, [problemSlug, navigate]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="bg-[rgba(30,30,30,255)] w-full h-[100vh] flex justify-between items-center">
        <div className="w-1/2 h-full border rounded-md text-white m-2 p-6 overflow-y-auto">
          {problem && (
            <div className="flex flex-col items-start justify-center m-1 p-1">
              <h1 className="text-3xl font-bold">{problem.title}</h1>
              <p className="">
              {problem.difficulty==="Easy" && <p className="text-green-500 bg-[#2e2d2d] p-1 px-2 mt-4 rounded-md mr-3">{problem.difficulty}</p>} 
              {problem.difficulty==="Medium" && <p className="text-yellow-500 bg-[#2e2d2d] p-1 px-2 mt-4 rounded-md mr-3">{problem.difficulty}</p>} 
              {problem.difficulty==="hard" && <p className="text-red-500 bg-[#2e2d2d] p-1 px-2 mt-4 rounded-md mr-3">{problem.difficulty}</p>} 
              </p>
            </div>
          )}
          <p className="text-xl m-1 p-1">
            {problem?.statement.split("\n").map((line, index) => (
              <div key={index}>
                {line} <br />
              </div>
            ))}
          </p>

          {/* Render testcases */}
          <div className="mt-6 m-1 p-1">
            <h3 className="text-lg font-semibold">Testcases:-</h3>
            {problem?.testcases.length === 0 ? (
              <p>No testcases available</p>
            ) : (
              problem?.testcases.map((testcase,index) => (
                <div
                  key={testcase.testcaseId}
                  className="mt-4 p-2 bg-slate-700 rounded-md"
                >
                  <h1>Example {index+1}</h1>
                  {/* Dynamically render input */}
                  <div className="mt-1">
                    <strong>Input:</strong>
                    <p className="ml-2">{renderInput(testcase.input)}</p>
                  </div>

                  <p>
                    <strong>Output:</strong> {JSON.stringify(testcase.output)}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="m-1 mt-6 p-1 text-xl flex justify-start items-center">
            Topics:- <br />
           {problem?.topics.map((topic)=>
            (<p className="p-2 m-1 text-md bg-[#2e2d2d] border border-gray-700 rounded-xl">
              {topic}</p>))}
          </div>
        </div>
        <div className="h-[100vh]">
          <CodeEditor />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
