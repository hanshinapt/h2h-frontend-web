import { useEffect } from "react";

interface useClickOutsideProps {
    targetRef: React.RefObject<HTMLElement>;
    onClose: () => void;
}

const useClickOutside = ({ targetRef, onClose }: useClickOutsideProps) => {
    const handleClick = (e: MouseEvent) => {
        if (
            targetRef.current &&
            !targetRef.current.contains(e.target as Element)
        ) {
            e.stopPropagation();
            onClose();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);
};

export default useClickOutside;
