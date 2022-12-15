export interface iButton {
  children: React.ReactNode;
  type?: string;
  to: string;
  variant?:
    | "buttonRegister"
    | "buttonLogin"
    | "linkRegister"
    | "linkLogin"
    | "buttonList"
    | "buttonRemoveModal"
    | "buttonClearSearch";
  onClickProps?: () => void;
}

export interface iProps {
  typeButton?: string;
  typelink?: string;
}
