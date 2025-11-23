"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label
} from "recharts";
import { Experiment } from "@/lib/types/experiments";
import { useMemo, useId } from "react";
import { calculateHistogramData } from "@/lib/utils";

interface HistogramProps {
    data: Experiment[];
    xAxis: string;
}

export default function Histogram({ data, xAxis }: HistogramProps) {
    const chartData = useMemo(() => calculateHistogramData(data, xAxis), [data, xAxis]);
    const descriptionId = useId();
    
    const minCount = chartData.length > 0 ? Math.min(...chartData.map(d => d.count)) : 0;
    const maxCount = chartData.length > 0 ? Math.max(...chartData.map(d => d.count)) : 0;

    return (
        <>
            <div 
                className="h-[400px] w-full"
                role="img"
                aria-label={`Histogram showing distribution of ${xAxis}`}
                aria-describedby={descriptionId}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name">
                            <Label value={xAxis} offset={0} position="bottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Count" angle={-90} position="left" />
                        </YAxis>
                        <Tooltip />
                        <Bar dataKey="count" fill="#00693E" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div id={descriptionId} className="sr-only">
                A histogram chart displaying the frequency distribution of {xAxis} values. 
                {chartData.length > 0 
                    ? `The chart shows ${chartData.length} bins with counts ranging from ${minCount} to ${maxCount}.`
                    : 'No data available to display.'}
            </div>
            
            {/* Data table alternative for screen readers */}
            <table className="sr-only">
                <caption>
                    Histogram data for {xAxis}
                    {chartData.length > 0 
                        ? ` - ${chartData.length} bins with counts ranging from ${minCount} to ${maxCount}`
                        : ' - No data available'}
                </caption>
                <thead>
                    <tr>
                        <th>Range</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {chartData.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
