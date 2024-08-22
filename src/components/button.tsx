import { Text, Pressable, PressableProps, ActivityIndicator } from "react-native";
import clsx from 'clsx';


type Variantes = "primary" | "secondary" | "tertiary"

type TouchableOpacityProps = PressableProps & {
  title: string;
  variant?: Variantes;
  isLoading?: Boolean;
}

const ButtonComponent: React.FC<TouchableOpacityProps> = ({ title, isLoading, variant = "primary", ...rest }) => {
  return (
    <Pressable
      {...rest}
      className={clsx(
        "items-center justify-center h-14 my-2 rounded-input",
        { "bg-success-500 mt-4": variant === "primary" },
        { "bg-secondary-300 mt-4": variant === "secondary" },
        { "bg-white": variant === "tertiary" }

      )}
    >
      <Text
        className={clsx(
          "justify-center items-center",
          { "text-white font-bold": variant === "primary" },
          { "text-white font-bold": variant === "secondary" },
          { "text-gray-600 underline italic": variant === "tertiary" }
        )}
      >
        {isLoading ? <ActivityIndicator className="text-gray-600" /> : title}
      </Text>
    </Pressable >
  )
}


export { ButtonComponent };