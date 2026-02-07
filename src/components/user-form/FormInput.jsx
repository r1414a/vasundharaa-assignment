import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function FormInput({ label, name, value, onChange, placeholder, type, showToggle=false, onToggle, error }) {
    return (
         <div className="">
      <label className="block mb-1 text-sm font-medium">{label}</label>

      <div className="relative">
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="w-full border border-[#b8b8b8] rounded-md px-3 h-9 placeholder:text-sm"
        />

        

        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
          >
            {type === "password" ? <FaEye className="text-black/80 text-md"/> : <FaEyeSlash className="text-black/80 text-md"/>}
          </button>
        )}

      </div>
        {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
    )
}