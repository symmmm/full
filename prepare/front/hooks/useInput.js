import { useState, useCallback } from "react";


const useInput = (isV=Null) => {
    const [V,sV] = useState('');
    const handler = useCallback((e)=>{
        sV(e.target.value);
    },[])
    return [V, handler,sV];
}

export default useInput;