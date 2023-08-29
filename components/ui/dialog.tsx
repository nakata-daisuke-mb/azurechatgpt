import { FC, ReactNode, useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode;
}

export const Dialog: FC<DialogProps> = ({ isOpen, onClose, onConfirm, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative z-10 bg-background text-foreground p-6 rounded-lg w-96">
        {children}
        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-200 text-black px-4 py-2 mr-2 rounded"
            onClick={onClose}
          >
            キャンセル
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            設定
          </button>
        </div>
      </div>
    </div>
  );
};

interface DialogTitleProps {
  children: ReactNode;
}

export const DialogTitle: FC<DialogTitleProps> = ({ children }) => {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
};

interface DialogContentProps {
  children: ReactNode;
}

export const DialogContent: FC<DialogContentProps> = ({ children }) => {
  return <div>{children}</div>;
};
