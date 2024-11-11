import * as React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import {
  LinePlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const xLabels = [
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
];

export default function TinyLineChart({data }) {
  return (
    <div>
      <ChartContainer
        width={840}
        height={300}
        series={[{ type: "line", data: data }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            stroke: "#8884d8",
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: "#8884d8",
            scale: "0.6",
            fill: "#fff",
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
      </ChartContainer>
    </div>
  );
}
