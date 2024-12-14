"use client";

import { useState } from "react";

export default function Use() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/classify-deed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deed: inputText }),
      });

      const data = await response.json();

      if (response.ok) {
        const classification = data.result || "Unable to classify.";
        setResult(classification);

        if (classification === "good") {
          setGoodCount((prev) => prev + 1);
        } else if (classification === "bad") {
          setBadCount((prev) => prev + 1);
        }
      } else {
        setResult("Error: " + (data.message || "Unable to classify the deed."));
      }
    } catch (error) {
      console.error("Error calling API:", error);
      setResult("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  const getSantaMessage = () => {
    if (goodCount > badCount) {
      return "Santa is happy! You will get presents! 🎁";
    } else {
      return "Santa is disappointed. Try doing more good deeds! 🎅";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Classify Your Deed</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Input what you have done!
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">What deed have you done?</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Describe your deed..."
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-4 py-2 rounded ${
                    isLoading ? "bg-gray-400" : "bg-green-500 text-white"
                  }`}
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {result && (
        <p className="mt-6 text-center">
          Your deed is classified as: <strong>{result}</strong>
        </p>
      )}

      <div className="mt-8 text-center">
        <p>
          <strong>Good Deeds:</strong> {goodCount}
        </p>
        <p>
          <strong>Bad Deeds:</strong> {badCount}
        </p>
        <p className="mt-4 text-lg font-bold">{getSantaMessage()}</p>
      </div>
    </div>
  );
}
