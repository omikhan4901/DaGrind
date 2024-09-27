export const handleEnable = async (isDisabled, setIsDisabled) => {
    await chrome.storage.sync.set({ dagrind_enable: !isDisabled }).then(() => {
      console.log("Set to: " + !isDisabled);
      setIsDisabled(!isDisabled);
    });
  };