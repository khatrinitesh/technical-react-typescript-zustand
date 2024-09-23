import React from "react";
import { useAlertStore } from "../../../store/useAlert";

const RepositoryApp = () => {
  return(
    <>
    <AlertBlock/>
    <AlertButton label="show alert 1" alertMsg='Enim nulla ad quis pariatur 1.'/>
    <AlertButton label="show alert 2" alertMsg='Enim nulla ad quis pariatur 2.'/>
    <AlertButton label="show alert 3" alertMsg='Enim nulla ad quis pariatur 3.'/>
    </>
  )
};

export default RepositoryApp;

const AlertBlock: React.FC = () => {
  const { message, clearAlert } = useAlertStore();

  if (!message) return null;
  return (
    <>
      <div className="alert">
        <span>{message}</span>
        <button onClick={clearAlert}>Close</button>
      </div>
    </>
  );
};

const AlertButton:React.FC<AlertProps> = ({label,alertMsg}) => {
    const {showAlert} = useAlertStore();
    return(
        <>
        <button onClick={() => showAlert(alertMsg)} className="alert-button">{label}</button>
        </>
    )

}