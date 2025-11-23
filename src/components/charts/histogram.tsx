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
import { useMemo } from "react";
import { calculateHistogramData } from "@/lib/utils";

interface HistogramProps {
    data: Experiment[];
    xAxis: string;
}

export default function Histogram({ data, xAxis }: HistogramProps) {
    const chartData = useMemo(() => calculateHistogramData(data, xAxis), [data, xAxis]);

    return (
        <div className="h-[400px] w-full">
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
    );
}
