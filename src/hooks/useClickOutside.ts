import React, { useState, useEffect, useRef } from 'react'

interface useClickOutsideProps {
    ref?: React.MutableRefObject<HTMLDivElement | null>,
    exludeChildren?: boolean,
    isClearedAll?: boolean,
    includedTargets?: Array<React.MutableRefObject<HTMLDivElement | null>>,
    clickOutsideCallback?: Function,
    clickInsideCallback?: Function,
    test?: Function,
}

const useClickOutside = ({
    ref,
    exludeChildren = false,
    isClearedAll = false,
    includedTargets,
    clickOutsideCallback,
    clickInsideCallback,
}: useClickOutsideProps) => {
    !ref && (ref = useRef(null));

    const handelClearAllEvent = ()=>{
        EventStack.clear();
    }

    const handelClearLastEvent = ()=>{
        EventStack.pop();
        EventStack.getLast() && document?.addEventListener("click", EventStack.getLast().handleClickOutside)
        clickOutsideCallback?.();
    }

    const handleClickOutside = (event: any) => {
        const isContained = event && (ref?.current?.contains(event.target) || includedTargets?.some((target: any) => target.current?.contains(event.target)))
        if (!(exludeChildren && isContained)) {
            const isClickOutside = !(!ref?.current || isContained);
            
            if (isClickOutside) {
                 isClearedAll ? handelClearAllEvent(): handelClearLastEvent();
                // EventStack.isEmpty() && firstEvent && firstEvent.ref?.current?.addEventListener("click", firstEvent.handleTargetClick)
            }else{
                clickInsideCallback?.();
            }
        }

        event.stopPropagation();
    };

    const handleTargetClick = () => {
        const isNotNestedChildren = EventStack.stack.some(event => event.includedTargets?.some(e => {
            return e.current?.contains(ref?.current)
        }))

        if (!isNotNestedChildren) {
            EventStack.clear();
        }

        if (EventStack.stack.some(event => event.handleClickOutside === handleClickOutside)) {
            return;
        }

        EventStack.removeLastEventListener();

        EventStack.push({
            ref,
            includedTargets,
            handleTargetClick,
            handleClickOutside,
            clickOutsideCallback,
            clickInsideCallback,
        });
        clickInsideCallback?.();
    }

    useEffect(() => {
        ref?.current?.addEventListener("click", handleTargetClick);
        return () => {
            ref?.current?.removeEventListener("click", handleTargetClick);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return { ref, handelClearAllEvent, handelClearLastEvent };
}

interface Event {
    ref: any,
    includedTargets?: Array<any>,
    handleTargetClick: EventListenerOrEventListenerObject,
    handleClickOutside: EventListenerOrEventListenerObject,
    clickOutsideCallback?: Function,
    clickInsideCallback?: Function,
}

class EventStack {
    static stack: Array<Event> = [];
    static isEmpty() {
        return !EventStack.stack.length;
    }
    static getFirst() {
        return EventStack.stack[0];
    }
    static push(event: Event) {
        EventStack.stack.push(event);
        document.addEventListener("click", event.handleClickOutside);
        return EventStack.stack;
    }
    static get(index: number) {
        return EventStack.stack[index];
    }
    static pop() {
        EventStack.removeLastEventListener();
        return EventStack.stack.pop();
    }
    static removeLastEventListener() {
        const lastEvent = this.getLast();
        if (lastEvent) {
            // lastEvent.ref?.current?.removeEventListener("click", lastEvent.handleTargetClick);
            document.removeEventListener("click", lastEvent.handleClickOutside);
        }
        return lastEvent;
    }
    static getLast() {
        return EventStack.stack[EventStack.stack.length - 1];
    }
    static clear() {
        EventStack.stack.forEach((event, index) => {
            event.clickOutsideCallback?.();
            index && event.ref?.current?.removeEventListener("click", event.handleTargetClick, true);
            index && event.ref?.current?.removeEventListener("click", event.handleTargetClick);
            document.removeEventListener("click", event.handleClickOutside, true);
            document.removeEventListener("click", event.handleClickOutside);
        })
        EventStack.stack = [];
    }
}

export default useClickOutside;

