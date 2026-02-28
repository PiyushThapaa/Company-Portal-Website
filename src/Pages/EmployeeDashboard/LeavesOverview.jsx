import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import CTAButton from '../../components/CTAButton'
import LeaveModal from '../../components/LeaveModal';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

function LeavesOverview() {
    const [isOpen, setIsOpen] = useState(false);
    const [leaves, setLeaves] = useState([])
    const { user } = useContext(AuthContext);

    const getMyLeaves = async (uid) => {
        const q = query(
            collection(db, "Leaves"),
            where("employee_id", "==", uid)
        );

        const snapshot = await getDocs(q);


        const leaves = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return leaves;
    };

    useEffect(() => {
        if (!user) return;

        const fetchLeaves = async () => {
            const data = await getMyLeaves(user.uid);
            setLeaves(data);
        };

        fetchLeaves();
    }, [user]);

    return (
        <div className='mx-auto'>
            <Header role={"Employee ID"} id={11223} />
            <main className='mx-[30px]'>
                <h1 className='text-[40px] font-bold text-center'>Leaves Overview</h1>
                <div className='text-right my-[30px]'>
                    <Link to={'/leave-apply-form'} className='bg-black text-white px-5 py-3 rounded-[10px] cursor-pointer whitespace-nowrap'>Apply for Leave</Link>
                </div>
                <table className="w-full border border-gray-300 border-collapse text-center mt-[30px]">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 font-semibold border-b">Type of Leave</th>
                            <th className="px-4 py-2 font-semibold border-b">Duration</th>
                            <th className="px-4 py-2 font-semibold border-b">Status</th>
                            <th className="px-4 py-2 font-semibold border-b">Details</th>
                        </tr>
                    </thead>
                    {
                        leaves.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border-b">{item.type_of_leave}</td>
                                        {
                                            item.type_of_leave == "Full Day" ?
                                                <td className="px-4 py-2 border-b">{item.from} <b>to</b> {item.to}</td>
                                                :
                                                <td className="px-4 py-2 border-b">{item.date} ({item.session})</td>
                                        }
                                        <td className="px-4 py-2 border-b bg-yellow-400">{item.status}</td>
                                        <td className="px-4 py-2 border-b hover:no-underline underline text-[#2563eb] cursor-pointer" onClick={() => setIsOpen(true)}>View</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </main>
            <div className={`flex items-center justify-center`}>
                {isOpen && <LeaveModal onClose={() => setIsOpen(false)} />}
            </div>
        </div>
    )
}

export default LeavesOverview