import { ReactNode } from "react";
import { TextInput, TextInputProps, View, Platform } from "react-native";
import clsx from 'clsx';

import { colors } from "@/styles/colors";

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = {
  children: ReactNode;
  variant?: Variants;
}

function Input({ children, variant = "primary" }: InputProps) {
  return (
    <View
      className={clsx(
        "w-full h-14 flex-row items-center gap-2 bg-gray-300 border-gray-300 rounded-input p-4",
        { "h-14 px-4 rounded-lg border border-red-400": variant !== "primary" },
        { "bg-gray-300": variant === "secondary" },
        { "bg-gray-300": variant === "tertiary" }
      )}
    >
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-gray-600 text-lg font-regular "
      placeholderTextColor={colors.gray[700]}
      cursorColor={colors.primary[500]}
      selectionColor={Platform.OS === "ios" ? colors.primary[500] : undefined}
      {...rest}
    />
  )
}

Input.Field = Field;


export { Input };