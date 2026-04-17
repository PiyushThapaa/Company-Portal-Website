import React, { useState } from 'react'
import Header from '../../components/Header'
import CTAButton from '../../components/CTAButton'
import CancelButton from '../../components/CancelButton'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, secondaryAuth } from "../../utils/firebase.js";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AddAnEmployeeForm() {

    const Navigate = useNavigate()

    const [employeeDetails, setEmployeeDetails] = useState({ name: "", email: "", password: "", confirmPassword: "", job_role: "" });

    const addEmployee = async (e) => {
        e.preventDefault();
        if (employeeDetails.name == "" || employeeDetails.email == "" || employeeDetails.password == "" || employeeDetails.confirmPassword == "" || employeeDetails.job_role == "") {
            alert("Pease fill all the fields...");
            return;
        }
        if (employeeDetails.password != employeeDetails.confirmPassword) {
            alert("Please enter same password in Confirm Password");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(
                secondaryAuth,
                employeeDetails.email,
                employeeDetails.password
            );

            // console.log("User created:", userCredential.user);
            const user = userCredential.user;

            // Add user data to Firestore
            await setDoc(doc(db, "Users", user.uid), {
                name: employeeDetails.name,
                email: employeeDetails.email,
                job_role: employeeDetails.job_role,
                role : "employee", 
                doj: new Date()
            });

            alert("Employee Added Successfully")
            Navigate("/manager-dashboard")

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='mx-auto'>
            <Header />
            <main>
                <h1 className='text-[40px] text-center font-bold'>Add an Employee</h1>
                <div className='flex justify-center'>
                    <form action="" className='border-[1px] border-black rounded-lg p-5 w-[600px] max-w-full m-5' >
                        <label htmlFor="name" className='text-sm block mt-5 font-[600]'>Name of the Employee</label>
                        <input type="text" name="name" id="name" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' onChange={e => setEmployeeDetails({ ...employeeDetails, name: e.target.value })} />
                        <label htmlFor="email" className='text-sm block mt-5 font-[600]'>Email</label>
                        <input type="email" name="email" id="email" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' onChange={e => setEmployeeDetails({ ...employeeDetails, email: e.target.value })} />
                        <label htmlFor="role" className='text-sm block mt-5 font-[600]'>Role</label>
                        <input type="text" name="role" id="role" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' onChange={e => setEmployeeDetails({ ...employeeDetails, job_role: e.target.value })} />
                        <label htmlFor="password" className='text-sm block mt-5 font-[600]'>Password</label>
                        <input type="password" name="password" id="password" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' onChange={e => setEmployeeDetails({ ...employeeDetails, password: e.target.value })} />
                        <label htmlFor="confirmpassword" className='text-sm block mt-5 font-[600]'>Confirm Password</label>
                        <input type="password" name="confirmpassword" id="confirmpassword" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' onChange={e => setEmployeeDetails({ ...employeeDetails, confirmPassword: e.target.value })} />
                        <div className='mt-10 text-center'>
                            <CTAButton text={"Add"} onClick={e => addEmployee(e)} />
                            <CancelButton />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default AddAnEmployeeForm