"use client";

import css from "./error.module.css";

export default function ErrorMessage({ message }: { message: string }){
    return <p className={css.text}>Could not fetch note details. {message}</p>
}