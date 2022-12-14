export interface iButton {
  children: React.ReactNode;
  type?: string;
  to: string;
  variant?: "buttonRegister" | "buttonLogin" | "linkRegister" | "linkLogin" | "buttonList";
}

export interface iProps {
  typeButton?: string;
  typelink?: string;
}
