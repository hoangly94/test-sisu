import React, { useState } from 'react'

const useForceRerender = () => {
    const [state, setState] = useState(false);
    return () => setState(!state);
};

export default useForceRerender