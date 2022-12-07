import React from 'react';

const ListOfData = ({ data }) => {
    const { name, attendance } = data
    const attendanceStatus =  Object.values(attendance)
    const attendanceDates =  Object.keys(attendance)
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {attendanceDates[5]}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                { name }
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm capitalize">
                { attendanceStatus[5].status }
            </td>
        </tr>
    );
};

export default ListOfData;