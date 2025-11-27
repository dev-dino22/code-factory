import styled from "@emotion/styled";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import Toast, { TOAST_DEFAULT_TIME } from "./Toast";

type ToastType = {
  mode: "ERROR" | "SUCCESS" | "WARN";
  message: string;
};
type ToastStateType = {
  id: `${string}-${string}`;
  timeSet: number;
} & ToastType;

type ContextType = (toast: ToastType, timeSet?: number) => void;

const ToastContext = createContext<ContextType | undefined>(undefined);

function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastStateType[]>([]);

  const showToast = useCallback(
    (toast: ToastType, timeSet: number = TOAST_DEFAULT_TIME) => {
      const id: `${string}-${string}` = `${Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0")}-${Date.now()}`;

      setToasts((prev) => [{ ...toast, id: id, timeSet: timeSet }, ...prev]);
    },
    []
  );

  const removeToast = (toastId: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  };

  return (
    <ToastContext.Provider value={showToast}>
      {toasts.length > 0 && (
        <S.Container>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              mode={toast.mode}
              onRemove={() => removeToast(toast.id)}
              timeSet={toast.timeSet}
            />
          ))}
        </S.Container>
      )}
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

export const useShowToast = () => {
  const showToast = useContext(ToastContext);

  if (!showToast) {
    throw new Error("컨텍스트는 Provider 내부에서만 사용할 수 있습니다.");
  }

  return showToast;
};

const S = {
  Container: styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 300;

    padding: 16px;
  `,
};
