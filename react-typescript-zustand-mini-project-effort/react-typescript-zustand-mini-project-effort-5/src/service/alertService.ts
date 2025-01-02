export const showAlert = (message: string) => {
  const { openAlert } = useAlertStore.getState();
  openAlert(message);
};

export const hideAlert = () => {
  const { closeAlert } = useAlertStore.getState();
  closeAlert();
};