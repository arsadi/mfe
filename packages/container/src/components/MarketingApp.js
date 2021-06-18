import React, { useRef, useEffect } from 'react';
import { mount as MarketingShow } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        MarketingShow(ref.current);
    })

    return <div ref={ref} />
}