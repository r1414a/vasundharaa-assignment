import useRegistrationFrom from "../../hooks/useRegistrationForm";
import FormInput from "./FormInput";

import { useState } from "react";

const ROLES = ["Admin", "User"]

export default function RegistrationForm() {//Name, Email, User ID, Role (Admin/User) & Password + Confirm Password
    const { fields, handleChange, validate, errors, resetForm } = useRegistrationFrom();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    console.log(fields)

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!validate()) return;

        console.log("User Registered:", fields);
        alert("User registered successfully!");

        resetForm();
    }
    return (
        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-6 border border-[#b8b8b8] rounded-md space-y-4 my-10">
            <h2 className="text-xl font-bold text-center">User Registration</h2>

            <div className="flex gap-2">
            <FormInput
                label="Name"
                name="name"
                type="text"
                value={fields.name}
                placeholder="Rupesh Chincholkar"
                onChange={handleChange}
                error={errors.name}
            />

            <FormInput
                label="Email"
                name="email"
                type="email"
                value={fields.email}
                placeholder="rupesh@vasundharaa.in"
                onChange={handleChange}
                error={errors.email}
            />

            </div>


        <div className="flex gap-2">

            <div className="w-1/2 flex flex-col gap-1">
            <FormInput
                label="User ID"
                name="userId"
                value={fields.userId}
                placeholder="678883"
                onChange={handleChange}
                error={errors.userId}
            />
            <ul className="text-gray-600 text-xs font-bold list-disc list-inside">
                    <li>only numbers (0-9) allowed.</li>
                    <li>Should be 6-digit long.</li>
                </ul>
            </div>
                {/* <label className="text-sm font-medium">User ID</label>
                <input
                    type="text"
                    name="userId"
                    pattern="\d{6}"
                    className="border border-[#b8b8b8] px-3 h-9 rounded-md placeholder:text-sm"
                    value={fields.userId}
                    onChange={handleChange}
                    placeholder="678883"
                    maxLength={6}
                    title="Please enter a 6-digit User ID"
                />

                
            </div> */}

            <div className="w-1/2 flex flex-col gap-1">
                <label className="text-sm font-medium">Role</label>

                <div className="flex gap-6 border border-[#b8b8b8] px-3 h-9 rounded-md">
                    {
                        ROLES.map((role) => (
                            <label key={role} className="flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    name="role"
                                    value={role}
                                    checked={fields.role === role}
                                    onChange={handleChange}
                                />
                                {role}
                            </label>
                        ))
                    }
                </div>
            </div>

            </div>

        <div className="">
            <div className="flex gap-2">
            <FormInput
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={fields.password}
                placeholder="P4sswo3d"
                onChange={handleChange}
                showToggle
                onToggle={() => setShowPassword((p) => !p)}
                error={errors.password}
            />

            <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={fields.confirmPassword}
                placeholder="P4sswo3d"
                onChange={handleChange}
                showToggle
                onToggle={() => setShowConfirmPassword((p) => !p)}
                error={errors.confirmPassword}
            />
            </div>
                    <ul className="mt-1 text-gray-600 font-bold text-xs list-disc list-inside">
                    <li>Should have atleast 6 characters</li>
                    <li>Atleast 1 uppercase letter</li>
                    <li>Atleast 1 number</li>
                </ul>
            </div>

            

            <button
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-2 rounded"
            >
                Register
            </button>
        </form>
    )
}
