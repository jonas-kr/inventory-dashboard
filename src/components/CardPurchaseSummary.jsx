import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardPurchaseSummary = () => {
  const isLoading = false;

  // ✅ Example static data
  const purchaseData = [
    { date: "2025-01-01", totalPurchased: 4200, changePercentage: 5 },
    { date: "2025-01-07", totalPurchased: 4800, changePercentage: 8 },
    { date: "2025-01-14", totalPurchased: 4600, changePercentage: -4 },
    { date: "2025-04-21", totalPurchased: 5200, changePercentage: 12 },
    { date: "2025-05-28", totalPurchased: 5100, changePercentage: -2 },
    { date: "2025-06-01", totalPurchased: 5700, changePercentage: 9 },
    { date: "2025-07-01", totalPurchased: 2000, changePercentage: -29 },
    { date: "2025-07-01", totalPurchased: 6000, changePercentage: -29 },

  ];

  const lastDataPoint = purchaseData[purchaseData.length - 1];

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Purchase Summary
            </h2>
            <hr />
          </div>

          {/* BODY */}
          <div>
            {/* BODY HEADER */}
            <div className="mb-4 mt-7 px-7">
              <p className="text-xs text-gray-400">Purchased</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {numeral(lastDataPoint.totalPurchased).format("$0.00a")}
                </p>
                <p
                  className={`text-sm ${lastDataPoint.changePercentage >= 0
                      ? "text-green-500"
                      : "text-red-500"
                    } flex ml-3`}
                >
                  {lastDataPoint.changePercentage >= 0 ? (
                    <TrendingUp className="w-5 h-5 mr-1" />
                  ) : (
                    <TrendingDown className="w-5 h-5 mr-1" />
                  )}
                  {Math.abs(lastDataPoint.changePercentage)}%
                </p>
              </div>
            </div>

            {/* CHART */}
            <ResponsiveContainer width="100%" height={200} className="p-2">
              <AreaChart
                data={purchaseData}
                margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
              >
                <XAxis dataKey="date" tick={false} axisLine={false} />
                <YAxis tickLine={false} tick={false} axisLine={false} />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString("en")}`]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                  }}
                />
                <Area
                  type="linear"
                  dataKey="totalPurchased"
                  stroke="#8884d8"
                  fill="#8884d8"
                  dot={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;
