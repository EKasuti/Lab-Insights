"use client";

import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label
} from "recharts";
import { Experiment } from "@/lib/types/experiments";

interface ScatterPlotProps {
    data: Experiment[];
    xAxis: string;
    yAxis: string;
}

export default function ScatterPlot({ data, xAxis, yAxis }: ScatterPlotProps) {
    // data transformation
    const chartData = data.map((d) => {
        let x: number | null = null;
        if (xAxis in d.inputs) {
            x = d.inputs[xAxis as keyof typeof d.inputs] as number;
        } else if (xAxis in d.outputs) {
            x = d.outputs[xAxis as keyof typeof d.outputs] as number;
        }
        let y: number | null = null;
        if (yAxis in d.inputs) {
            y = d.inputs[yAxis as keyof typeof d.inputs] as number;
        } else if (yAxis in d.outputs) {
            y = d.outputs[yAxis as keyof typeof d.outputs] as number;
        }
        return {
            id: d.id,
            x,
            y,
        };
    });

    return (
        <div className="h-[400px] w-full">
            <div 
                role="img" 
                aria-label={`Scatter plot showing relationship between ${xAxis} and ${yAxis} for ${data.length} experiments`}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name={xAxis}>
                            <Label value={xAxis} offset={0} position="bottom" />
                        </XAxis>
                        <YAxis type="number" dataKey="y" name={yAxis}>
                            <Label value={yAxis} angle={-90} position="left" />
                        </YAxis>
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter name="Experiments" data={chartData} fill="#00693E" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            <div className="sr-only">
                <table>
                    <caption>Experiment data showing {xAxis} vs {yAxis}</caption>
                    <thead>
                        <tr>
                            <th>Experiment ID</th>
                            <th>{xAxis}</th>
                            <th>{yAxis}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chartData.map((point) => (
                            <tr key={point.id}>
                                <td>{point.id}</td>
                                <td>{point.x ?? 'N/A'}</td>
                                <td>{point.y ?? 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
