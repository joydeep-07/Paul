import { useNavigation } from "react-router-dom";

const LoadingBar = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={`fixed top-0 left-0 h-[2px] z-[10000] bg-[var(--accent-primary)] transition-all duration-300 ${
        isLoading ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
    />
  );
};

export default LoadingBar;
