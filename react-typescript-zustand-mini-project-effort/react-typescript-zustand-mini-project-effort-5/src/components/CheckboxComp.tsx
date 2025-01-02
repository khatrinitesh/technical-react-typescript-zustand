import React from 'react';
import useCheckboxStore from '../store/useCheckboxStore';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const CheckboxComp:React.FC = () => {
    const {checked,toggleCheckbox} = useCheckboxStore();
  return (
    <>
        <div className="flex items-center space-x-2">
      <motion.div
        className={`w-6 h-6 border-2 ${checked ? 'bg-blue-500' : 'bg-white'} border-gray-500 rounded`}
        onClick={toggleCheckbox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {checked && (
          <motion.div
            className="flex justify-center items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FaCheck className="text-white" />
          </motion.div>
        )}
      </motion.div>
      <label className="text-gray-700">Accept Terms</label>
    </div>
    </>
  );
}

export default CheckboxComp;
