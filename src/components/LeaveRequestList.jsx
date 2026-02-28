import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../utils/firebase';

function LeaveRequestList() {

    const [allLeaves, setAllLeaves] = useState([])

    const getAllLeaves = async () => {
        const q = query(
            collection(db, "Leaves")
        );

        const snapshot = await getDocs(q);


        const leaves = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return leaves;
    };

    useEffect(() => {

        const fetchLeaves = async () => {
            const data = await getAllLeaves();
            setAllLeaves(data);
        };

        fetchLeaves();
    }, []);


    return (
        <table className="w-full border border-gray-300 border-collapse text-center mt-[30px]">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 font-semibold border-b">Name</th>
                    <th className="px-4 py-2 font-semibold border-b">Duration</th>
                    <th className="px-4 py-2 font-semibold border-b">Status</th>
                    <th className="px-4 py-2 font-semibold border-b">Details</th>
                </tr>
            </thead>
            {
                allLeaves.map((item, index) => {
                    return (
                        <tbody key={index}>
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b">{item.employee_name}</td>
                                {
                                    item.type_of_leave == "Full Day" ?
                                        <td className="px-4 py-2 border-b">{item.from.split('-').reverse().join('-')} <b>to</b> {item.to.split('-').reverse().join('-')}</td>
                                        :
                                        <td className="px-4 py-2 border-b">{item.date.split('-').reverse().join('-')} ({item.session})</td>
                                }
                                <td className="px-4 py-2 border-b bg-yellow-400">{item.status}</td>
                                <td className="px-4 py-2 border-b hover:no-underline underline text-[#2563eb] cursor-pointer" onClick={() => {
                                    setIsOpen(true)
                                    viewHandler(item.id)
                                }}>View</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}

export default LeaveRequestList