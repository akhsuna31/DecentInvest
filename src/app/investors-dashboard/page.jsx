'use client';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ArrowUpWideNarrow } from 'lucide-react';
import { PieChart, Pie, Sector, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useMediaQuery } from 'react-responsive';
import { DefaultTable } from '../components/Recentinvest';
const data = [
  { name: 'Group A', value: 400, fill: '#CED0F8' },
  { name: 'Group B', value: 500, fill: '#636AE8' },
  { name: 'Group C', value: 300 },
];
const data2 = [
  { name: 'Group A', value: 400, fill: '#7F55E0' },
  { name: 'Group B', value: 500, fill: '#636AE8' },
  { name: 'Group C', value: 300, fill: '#22CCB2' },
  { name: 'Group C', value: 250, fill: '#E8618C' },
];

const dataBar1 = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
];
const dataBar2 = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function Page(props) {
  const isMediumOrLarger = useMediaQuery({ minWidth: 768 });
  const innerRadius = isMediumOrLarger ? 120 : 80;
  const outerRadius = isMediumOrLarger ? 180 : 120;
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className='bg-black min-h-screen flex flex-col'>
      <Navbar />
      <Sidebar />

      <div className="flex-grow p-6">
        <h1 className="mt-24 ml-4 md:ml-12 font-archivo text-[24px] md:text-[34px] leading-[30px] md:leading-[36px] font-bold text-white">
          Key Metrics
        </h1>

        {/* Container for multiple divs */}
        <div className='mt-10 md:mt-12 flex flex-wrap gap-6 justify-center'>
          {/* First div with PieChart */}
          <div className='w-full md:w-[32%] bg-[#171A1F] rounded-[6px] shadow-[0px_0px_1px_rgba(0,0,0,0.5),0px_0px_2px_rgba(0,0,0,0.5)] text-white p-4 md:p-8'>
            <div className="flex-1 flex flex-col justify-center items-center md:items-start">
              <p className='text-[16px] md:text-[18px] text-[#E6E6E6]'>Total Portfolio Value</p>
              <h1 className="font-archivo text-[32px] md:text-[40px] leading-[40px] md:leading-[56px] font-bold text-white">
                $150,000
              </h1>
              <p className='text-[#39FF14] flex gap-2'>
                <ArrowUpWideNarrow />
                5%
              </p>
            </div>

            <div className="flex-1 flex justify-center items-center w-full h-[300px] md:h-[400px] mt-8 md:mt-0">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Second div with Simple BarChart */}
          <div className='w-full md:w-[32%] bg-[#171A1F] rounded-[6px] shadow-[0px_0px_1px_rgba(0,0,0,0.5),0px_0px_2px_rgba(0,0,0,0.5)] text-white p-4 md:p-8'>
            <div className="flex-1 flex flex-col justify-center items-center md:items-start">
              <p className='text-[16px] md:text-[18px] text-[#E6E6E6]'>Total Investments</p>
              <h1 className="font-archivo text-[32px] md:text-[40px] leading-[40px] md:leading-[56px] font-bold text-white">
                $120,000
              </h1>
              <p className='text-[#39FF14] flex gap-2'>
                <ArrowUpWideNarrow />
                5%
              </p>
              <div className="flex-1 flex justify-center items-center w-full h-[300px] md:h-[400px] mt-8 md:mt-16">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataBar1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#E6E6E6" />
                    <YAxis stroke="#E6E6E6" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#636AE8" />
                    <Bar dataKey="pv" fill="#CED0F8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Third div with another Simple BarChart */}
          <div className='w-full md:w-[32%] bg-[#171A1F] rounded-[6px] shadow-[0px_0px_1px_rgba(0,0,0,0.5),0px_0px_2px_rgba(0,0,0,0.5)] text-white p-4 md:p-8'>
            <div className="flex-1 flex flex-col justify-center items-center md:items-start">
              <p className='text-[16px] md:text-[18px] text-[#E6E6E6]'>Total Loss/Gain</p>
              <h1 className="font-archivo text-[32px] md:text-[40px] leading-[40px] md:leading-[56px] font-bold text-white">
                $30,000
              </h1>
              <p className='text-[#39FF14] flex gap-2'>
                <ArrowUpWideNarrow />
                5%
              </p>
              <div className="flex-1 flex justify-center items-center w-full h-[300px] md:h-[400px] mt-8 md:mt-16">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataBar1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#E6E6E6" />
                    <YAxis stroke="#E6E6E6" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#CED0F8" />
                    <Bar dataKey="pv" fill="#636AE8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col items-center w-full md:w-[50%]'>
            <h1 className="mt-24 ml-4 md:ml-12 font-archivo text-[24px] md:text-[34px] leading-[30px] md:leading-[36px] font-bold text-white">
              Asset Distribution
            </h1>
            <div className="mt-24 flex-1 flex justify-center items-center w-full h-[600px] md:h-[600px] mt-8 md:mt-16">
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={dataBar1}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#E6E6E6" />
                  <YAxis stroke="#E6E6E6" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="uv" fill="#7F55E0" />
                  <Bar dataKey="pv" fill="#636AE8" />
                  <Bar dataKey="pv" fill="#22CCB2" />
                  <Bar dataKey="pv" fill="#E8618C" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='flex flex-col items-center md:w-[50%] w-[full]'>
            <h1 className="mt-24 font-archivo text-[24px] md:text-[34px] leading-[30px] md:leading-[36px] font-bold text-white">
              Monthly Equity Holding 2022
            </h1>
            <div className="flex-1 flex justify-center items-center w-full h-[300px] md:h-[600px] mt-8 md:mt-0">
              <ResponsiveContainer width="100%" height={500}>
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data2}
                    cx="50%"
                    cy="50%"
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className=''>
          <h1 className='mt-24 mb-16 font-archivo text-[24px] md:text-[34px] leading-[30px] md:leading-[36px] font-bold text-white'>Recent Investements</h1>
          <DefaultTable />
        </div>
        <div className=''>
          <h1 className='mt-24 mb-16 font-archivo text-[24px] md:text-[34px] leading-[30px] md:leading-[36px] font-bold text-white'>Recent Transactions</h1>
          <DefaultTable />
        </div>
      </div>
    </div>
  );
}
