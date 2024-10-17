import React from 'react'
import { Card, Typography } from '@material-tailwind/react'
const TABLE_HEAD = ["InvestmentID", "Company Name", "Amount Invested", "Status", "Action"];

const TABLE_ROWS = [
    {
        Investment_ID: "INV001",
        Company_name: "Tech Innovations",
        Amt_Invested: "$10,000",
        date: "23/04/18",
    },
    {
        Investment_ID: "INV002",
        Company_name: "Green Solutions",
        Amt_Invested: "$10,000",
        date: "23/04/18",
    },
    {
        Investment_ID: "INV003",
        Company_name: "Health Tech",
        Amt_Invested: "$10,000",
        date: "19/09/17",
    },
    {
        Investment_ID: "INV004",
        Company_name: "EduStart",
        Amt_Invested: "$10,000",
        date: "24/12/08",
    },
    {
        Investment_ID: "INV005",
        Company_name: "FinTech Corp",
        Amt_Invested: "$10,000",
        date: "04/10/21",
    },
];
export function DefaultTable() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ Investment_ID, Company_name, Amt_Invested, date }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={Investment_ID}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {Investment_ID}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {Company_name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {Amt_Invested}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {date}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        <button class="w-[70px] h-[36px] px-3 flex items-center justify-center font-inter text-[14px] leading-[22px] font-normal text-white bg-[#636AE8] opacity-100 border-none rounded-[6px] hover:bg-[#4850E4] active:bg-[#2C35E0] disabled:opacity-40">
                                            Details
                                        </button>
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}
