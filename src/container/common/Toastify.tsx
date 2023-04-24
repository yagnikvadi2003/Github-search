import React from "react";
import { ToastContainer } from "react-toastify";
import { ToastifyProps } from "../../@types/Type";

const Toastify: React.FC<ToastifyProps> = ({
    position,
    autoClose,
    hideProgressBar,
    newestOnTop,
    closeOnClick,
    rtl,
    pauseOnFocusLoss,
    draggable,
    pauseOnHover,
    ...props
}): JSX.Element => {
    return (
        <ToastContainer
            position={position || "bottom-right"}
            autoClose={autoClose || 5000}
            hideProgressBar={hideProgressBar || false}
            newestOnTop={newestOnTop || false}
            closeOnClick={closeOnClick || true}
            rtl={rtl || false}
            pauseOnFocusLoss={pauseOnFocusLoss || true}
            draggable={draggable || true}
            pauseOnHover={pauseOnHover || true}
            {...props}
        />
    );
};

export default Toastify;
