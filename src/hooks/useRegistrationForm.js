import { useState } from "react"
import { isEmailValid, isPasswordStrong, isUserIDValid } from "../utils/validators";

const initialState = {//Name, Email, User ID, Role (Admin/User) & Password + Confirm Password
    name: "",
    email: "",
    userId: "",
    role: "User",
    password: "",
    confirmPassword: ""
}

export default function useRegistrationFrom(){
    const [fields, setFields] = useState(initialState);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value)

        setFields((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const validate = () => {
        const errorObj = {};

        if(!fields.name.trim()) errorObj.name = "Name is required!."
        if(!isEmailValid(fields.email)) errorObj.email = "Please match conditions."
        if (!isUserIDValid(fields.userId)) errorObj.userId = "Please match conditions.";
        if(!isPasswordStrong(fields.password)) errorObj.password = "Please match conditions.";

        if(fields.password !== fields.confirmPassword) errorObj.confirmPassword = "Passwords do not match";

        console.log(errorObj);
        setErrors(errorObj);
        
        return Object.keys(errorObj).length === 0
    }

    const resetForm = () => {
    setFields(initialState);
    setErrors({});
  };

    return {
        fields,
        handleChange,
        validate,
        errors,
        resetForm
    }
}