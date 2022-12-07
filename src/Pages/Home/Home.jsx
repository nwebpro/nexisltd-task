import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ListOfData from './ListOfData';
import logo from '../../assets/image/logo.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [allData, setAllData] = useState({})
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `Bearer ${ localStorage.getItem('NexisltdToken') }`
            }
        })
        .then(res => res.json())
        .then(data => setAllData(data))
    }, [])
    const allListData = Object.values(allData)

    const handleLogout = () => {
        localStorage.removeItem('NexisltdToken')
        navigate('/login')
    }

    return (
        <section className="container mx-auto px-4 lg:px-0 mb-10">
            <div className='mt-14'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="Logo" />
                    <button onClick={ handleLogout } className='text-white bg-theme-primary py-3 px-7 rounded'>Logout</button>
                </div>
                <div className='text-center mt-8 mb-20 '>
                    <h3 className='bg-theme-primary inline-block text-2xl md:text-4xl py-4 px-7 md:px-14 rounded text-white font-semibold leading-10'>Attendance information</h3>
                </div>
            </div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                        Date
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                        Employee Name
                    </th>
                    <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                        Status
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allListData.map(data => (
                            <ListOfData key={data.id} data={data} />
                        )) 
                    }
                </tbody>
            </table>
        </section>
    );
};

export default Home;