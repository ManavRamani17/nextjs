import React from "react";

async function Prime({params}: {params: Promise<{ start: string; end: string }>}) {
  const { start, end } = await params;

  const startNum = Number(start);
  const endNum = Number(end);

  const primeNumbers: number[] = [];

  for (let i = startNum; i <= endNum; i++) {
    if (i < 2) continue;

    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  return (
    <div className="min-h-screen bg-cyan-900 p-5">
      <h1 className="text-3xl text-white text-center mb-6">
        Prime Numbers from {startNum} to {endNum}
      </h1>

      <div className="flex flex-col items-center gap-4">
        {primeNumbers.length > 0 ? (
          primeNumbers.map((num) => (
            <div
              key={num}
              className="border border-white bg-cyan-700 text-white rounded-lg p-4 w-3/4 hover:scale-105 duration-500"
            >
              <h2 className="text-2xl text-center">
                Prime Number: {num}
              </h2>
            </div>
          ))
        ) : (
          <h2 className="text-white text-xl">
            No Prime Numbers Found
          </h2>
        )}
      </div>
    </div>
  );
}

export default Prime;