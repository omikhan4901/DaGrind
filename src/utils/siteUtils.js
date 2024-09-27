export const siteChanged = async (name, arr,  checked, setChecked, setArr)=> {
    const arrIdx = arr.findIndex(e => e[0].toLowerCase() === name.toLowerCase())
    console.log(arrIdx)
    arr[arrIdx] = [arr[arrIdx][0], !checked]
    setArr(arr)
    setChecked(!checked)
    await chrome.storage.sync.set({ dagrind_list: arr })
  
  }
  
 export  const deleteSite = async (name, arr, setArr) => {
    const newArr = arr.filter((e) => e[0].toLowerCase() !== name.toLowerCase());
    setArr(newArr);
  
    await chrome.storage.sync.set({ dagrind_list: newArr })
  }