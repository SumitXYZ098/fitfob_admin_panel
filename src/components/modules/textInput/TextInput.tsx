/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHelperText } from "@mui/material";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import type React from "react";
import { Controller, type Control } from "react-hook-form";

type ITextInputProps = Omit<TextFieldProps, "onChange"> & {
  label?: string;
  type?: string;
  placeholder: string;
  customClassesOuter?: string;
  onChange?: (
    value: React.ChangeEvent<
      Omit<HTMLInputElement, "value"> & { value: string }
    >,
  ) => void;

  // RHF integration
  name?: string;
  control?: Control<any>;
  errorMessage?: string;
  rules?: any;
};

const TextInput: React.FC<ITextInputProps> = ({
  label,
  type = "text",
  onChange,
  placeholder,
  customClassesOuter,
  name,
  control,
  errorMessage,
  rules,
  ...props
}) => {
  const renderInput = (
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: boolean,
    helperText?: string,
  ) => (
    <>
      <TextField
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className="text-sm! "
        error={error}
        sx={{
          "& .MuiOutlinedInput-notchedOutline, & :hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderRadius: "10px",
              borderColor: "#E5E7EB",
            },
        }}
        {...props}
      />
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </>
  );

  return (
    <fieldset className={`fieldset p-0 ${customClassesOuter || ""}`}>
      {label && (
        <legend className="fieldset text-secondary-text font-normal text-xs pt-0">
          {label}
        </legend>
      )}

      {control && name ? (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field, fieldState }) =>
            renderInput(
              field.value,
              field.onChange as any,
              Boolean(fieldState.error),
              fieldState.error?.message,
            )
          }
        />
      ) : (
        renderInput(
          "" as string,
          onChange as any,
          Boolean(errorMessage),
          errorMessage,
        )
      )}
    </fieldset>
  );
};

export default TextInput;
