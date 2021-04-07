import  { FormEvent  } from "react";

export const handleErrorImage = (event: FormEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      "https://image.freepik.com/free-vector/404-error-sign_23-2147508325.jpg";
  };