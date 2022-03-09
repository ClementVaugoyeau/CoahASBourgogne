import React, { useState, useEffect, PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from "recharts";

const data = [
  {
    name: 'Janvier',
    victoire: 3,
    defaite: -1,
    amt: 2400,
  },
  {
    name: 'Février',
    victoire: 3,
    defaite: 1,
    amt: 2210,
  },
  {
    name: 'Mars',
    victoire: 2,
    defaite: -1,
    amt: 2290,
  },
  {
    name: 'Avril',
    victoire: 2,
    defaite: 3,
    amt: 2000,
  },
  {
    name: 'Mai',
    victoire: -1,
    defaite: 4,
    amt: 2181,
  },
  {
    name: 'Juin',
    victoire: 2,
    defaite: -3,
    amt: 2,
  },
  {
    name: 'Juillet',
    victoire: 3,
    defaite: 4,
    amt: 2100,
  },
];





function Histogramme() {





    return (

        <div >
            <div  >Balance</div>


            <div >
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 50,
                    right: 50,
                    left: 0,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/*<Legend />*/}
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="victoire" fill="#28a745" />
                <Bar dataKey="defaite" fill="#DC3545" />
            </BarChart>
            </div>
        </div>
    );
}

export default Histogramme;
