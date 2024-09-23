export const handleClick = async (arr, setArr, value, setValue) => {
    if (!isValueOkay(value)) return;
    const domainPattern = /\.[a-z]{2,}$/i;
    if (!domainPattern.test(value.trim())) {
        alert("Please add a domain extension like .com, .io, etc.");
        return;
    }
    const valExists = arr.find(a => a[0].toLowerCase() === value.trim().toLowerCase())
    if(!valExists){
        setArr([...arr, [value, false]]);
        setValue(" ")
       await chrome.storage.sync.set({ dagrind_list: [...arr, [value, false]] }).then(() => {
            console.log("New Array is set!");
          });

       
    }
  };
  
const isValueOkay = (value) => {
    if(value.trim().split(' ').length > 1) return
    const pattern = /<[^>]+>|[&<>"']/g;
    return value.trim() !== "" && !pattern.test(value);
  };

