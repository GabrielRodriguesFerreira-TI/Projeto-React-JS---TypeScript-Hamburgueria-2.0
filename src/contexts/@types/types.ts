import { Control, FieldValues, FormState, UseFormClearErrors, UseFormGetFieldState, UseFormGetValues, UseFormHandleSubmit, UseFormRegister, UseFormReset, UseFormResetField, UseFormSetError, UseFormSetFocus, UseFormSetValue, UseFormTrigger, UseFormUnregister, UseFormWatch } from "react-hook-form";

export interface iCounterContextProps {
  children: React.ReactNode;
}
export interface iUserForm {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
}

export type UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> = {
  watch: UseFormWatch<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
  getFieldState: UseFormGetFieldState<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
  clearErrors: UseFormClearErrors<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  resetField: UseFormResetField<TFieldValues>;
  reset: UseFormReset<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  unregister: UseFormUnregister<TFieldValues>;
  control: Control<TFieldValues, TContext>;
  register: UseFormRegister<TFieldValues>;
  setFocus: UseFormSetFocus<TFieldValues>;
};