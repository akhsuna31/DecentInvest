'use client'
import React,{ PureComponent } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ArrowUpWideNarrow } from 'lucide-react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
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
  const demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };
  return (
    <div className='bg-black h-screen flex flex-col'>
      <Navbar />
      <Sidebar />

      <div className="flex-grow p-6">
        <h1 className="mt-24 ml-12 font-archivo text-[34px] leading-[36px] font-bold text-white">
          Key Metrics
        </h1>
        <div className='mt-24 '>
          <div className="w-[450px] h-[228px] bg-[#171A1F] rounded-[6px] shadow-[0px_0px_1px_rgba(0,0,0,0.5),0px_0px_2px_rgba(0,0,0,0.5)] text-white flex flex-col">
            <p className='text-[18px] text-[#E6E6E6]'>Total Portfolio Value</p>
            <h1 className="font-archivo text-[40px] leading-[56px] font-bold text-[#171A1FF]">
              $150,000
            </h1>
            <p className='text-[#39FF14] flex gap-2'>
            <ArrowUpWideNarrow/>
            5%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

