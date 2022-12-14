import { iCounterContextProps } from "./@types/types";
import { CartProviders } from "./cartContext";
import { UserProvider } from "./userContext";

export const Providers = ({ children }: iCounterContextProps) => {
  return (
    <CartProviders>
      <UserProvider>{children}</UserProvider>
    </CartProviders>
  );
};
