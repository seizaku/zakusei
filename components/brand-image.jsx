
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { useTheme } from "next-themes"
import Image from "next/image";
import { useState, useEffect } from "react";

const BrandImage = ({...props}) => {
  const [theme, setTheme] = useState('dark');
  const themeMode = useTheme().theme;
  useEffect(() => {
    const Theme = () => {
      setTheme(`${themeMode}`);
    }
    Theme();
  }, [themeMode]);

  return (
    <Image height={32} width={32} {...props} src={`/zakusei-${theme}.svg`}/>
  )
}

export default BrandImage