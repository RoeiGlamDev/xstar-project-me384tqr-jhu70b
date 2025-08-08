import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col mb-6">
      <label className={text-lg font-semibold text-orange-600 mb-2 ${isFocused ? 'text-orange-800' : ''}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 border-orange-300 rounded-lg p-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 ${error ? 'border-red-500' : 'border-orange-300'}}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? 'error-message' : undefined}
      />
      {error && <span id="error-message" className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;