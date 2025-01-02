import React from 'react';
import useAlertStore from '../store/useAlertStore';
import { FaTimes } from 'react-icons/fa';

const AlertDialogComp = () => {

    const {isOpen,message,closeAlert} = useAlertStore();

    if(!isOpen) return null;
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Alert</h2>
          <button onClick={closeAlert} className="text-gray-500 hover:text-gray-800">
            <FaTimes />
          </button>
        </div>
        <p className="mt-4 text-gray-800">{message}</p>
        <div className="mt-4 text-right">
          <button
            onClick={closeAlert}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default AlertDialogComp;
