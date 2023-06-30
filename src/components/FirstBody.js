import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FirstBody = () => {

    const data = [
        {
            name: 'M',
            uv: 0,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'T',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'W',
            uv: 1500,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'T',
            uv: 2500,
            // pv: 3908,
            amt: 2000,
        },
        {
            name: 'F',
            uv: 2700,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'S',
            uv: 2000,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'S',
            uv: 0,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div className='firstbody'>
            <div className='firstbodyCards'>
                <h5>in training workers</h5>
                <div className='cardelements'>
                    <div className='cardtext'>
                        <h3>34343</h3>
                        <div className='trend'>
                            <div className='percentage'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z" fill="#018E42" />
                                    <path d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z" fill="#018E42" />
                                    <path d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z" fill="#018E42" />
                                </svg>
                                <span>20%</span>
                            </div>
                            <span>234</span>
                        </div>
                    </div>
                    <ResponsiveContainer width="55%" height={100}>
                        <AreaChart
                            width={135}
                            height={100}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <Area type="monotone" dataKey="uv" fill="green" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='firstbodyCards'>
                <h5>
                    video watch-time (hrs)
                </h5>
                <div className='cardelements'>
                    <div className='cardtext'>
                        <h3>2,433</h3>
                        <div className='trend'>
                            <div className='percentage'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z" fill="#018E42" />
                                    <path d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z" fill="#018E42" />
                                    <path d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z" fill="#018E42" />
                                </svg>
                                <span>20%</span>
                            </div>
                            <span>435</span>
                        </div>
                    </div>
                    <ResponsiveContainer width="55%" height={100}>
                        <AreaChart
                            width={135}
                            height={100}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <Area type="monotone" dataKey="uv" fill="green" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='firstbodyCards'>
                <h5>
                    % workers passing quiz
                </h5>
                <div className='cardelements'>
                    <div className='cardtext'>
                        <h3>95%</h3>
                        <div className='trend'>
                            <div className='percentage'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z" fill="#018E42" />
                                    <path d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z" fill="#018E42" />
                                    <path d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z" fill="#018E42" />
                                </svg>
                                <span>20%</span>
                            </div>
                            <span>24%</span>
                        </div>
                    </div>
                    <ResponsiveContainer width="55%" height={100}>
                        <AreaChart
                            width={135}
                            height={100}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <Area type="monotone" dataKey="uv" fill="green" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='firstbodyCards'>
                <h5>
                    avg. days taken
                </h5>
                <div className='cardelements'>
                    <div className='cardtext'>
                        <h3>6</h3>
                        <div className='trend'>
                            <div className='percentage'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.99998 10.1667C4.87331 10.1667 4.74665 10.12 4.64665 10.02C4.45331 9.82667 4.45331 9.50667 4.64665 9.31334L6.77998 7.18001C6.88665 7.07334 7.02665 7.02001 7.17998 7.03334C7.32665 7.04667 7.45998 7.12667 7.54665 7.25334L8.27331 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3466 5.98001C11.54 6.17334 11.54 6.49334 11.3466 6.68667L8.54665 9.48667C8.43998 9.59334 8.29998 9.64667 8.14665 9.63334C7.99998 9.62001 7.86665 9.54001 7.77998 9.41334L7.05331 8.32001L5.35331 10.02C5.25331 10.12 5.12665 10.1667 4.99998 10.1667Z" fill="#018E42" />
                                    <path d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66669C9.39335 6.83333 9.16669 6.60666 9.16669 6.33333C9.16669 6.05999 9.39335 5.83333 9.66669 5.83333H11C11.2734 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2734 8.16666 11 8.16666Z" fill="#018E42" />
                                    <path d="M9.99998 15.1667H5.99998C2.37998 15.1667 0.833313 13.62 0.833313 10V6.00001C0.833313 2.38001 2.37998 0.833344 5.99998 0.833344H9.99998C13.62 0.833344 15.1666 2.38001 15.1666 6.00001V10C15.1666 13.62 13.62 15.1667 9.99998 15.1667ZM5.99998 1.83334C2.92665 1.83334 1.83331 2.92668 1.83331 6.00001V10C1.83331 13.0733 2.92665 14.1667 5.99998 14.1667H9.99998C13.0733 14.1667 14.1666 13.0733 14.1666 10V6.00001C14.1666 2.92668 13.0733 1.83334 9.99998 1.83334H5.99998Z" fill="#018E42" />
                                </svg>
                                <span>20%</span>
                            </div>
                            <span>3</span>
                        </div>
                    </div>
                    <ResponsiveContainer width="55%" height={100}>
                        <AreaChart
                            width={135}
                            height={100}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <Area type="monotone" dataKey="uv" fill="green" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default FirstBody
