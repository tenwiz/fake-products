import { useEffect, useState } from "react";

// Debounce hook
export function useDebounce<T>(value: T, delay?: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  // Set debouncedValue to value (passed in) after the specified delay
  useEffect(() => {
    // Set timeout
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    // Return a cleanup function that will be called every time
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
