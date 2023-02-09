import React, { useState, useEffect, useRef, ReactPortal } from 'react'
import * as ReactDOM from 'react-dom';

type TPortalCallback = ({ children }: PortalProps) => ReactPortal | null;

interface PortalProps {
    children: React.ReactNode,
}

interface StatePortal {
    render: TPortalCallback,
    remove: (element?: Element) => boolean | null,
}

const usePortal = (element: Element) => {
    const [portal, setPortal] = React.useState<StatePortal>({
        render: () => null,
        remove: () => null,
    });

    const createPortal = React.useCallback<(element: Element) => StatePortal>((element) => {
        const Portal: TPortalCallback = ({ children }) => ReactDOM.createPortal(children, element) as ReactPortal;
        const remove = (element: any) => element && ReactDOM.unmountComponentAtNode(element);
        return {
            render: Portal,
            remove
        };
    }, []);

    useEffect(() => {
        element && portal.remove();
        const newPortal = createPortal(element);
        setPortal(newPortal);

        return () => {
            newPortal.remove(element)
        }
    }, [element]);

    return portal.render;
};

export default usePortal