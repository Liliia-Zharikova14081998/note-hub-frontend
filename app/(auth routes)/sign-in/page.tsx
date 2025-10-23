"use client";

import css from "./SignInPage.module.css";
import { login, LoginRequest } from "../../../lib/api/clientApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApiError } from "../../api/api";
import { useAuthStore } from "@/lib/store/authStore";

export default function SignInPage() {
    const router = useRouter();
    const [error, setError] = useState('');
  const setUser = useAuthStore((state) => state.setUser)
  
  const handleSubmit = async (formData: FormData) => {
    setError("");
        try {
          const formValues = Object.fromEntries(formData) as unknown as LoginRequest;
          const res = await login(formValues);
          if (res) {
            setUser(res)
            router.push('/profile');
          } 
        } catch (error) {
          const status = (error as ApiError).response?.status
          const message =
          (error as ApiError).response?.data?.message ||
            (error as ApiError).message ||
            'Oops... some error';
          
        if (status === 401 || message === "Invalid credentials") {
        setError("Incorrect email or password. Please try again.");
      } else if (status === 404 || message === "User not found") {
        setError("Account not found. Please register first.");
      } else {
        setError(message);
      } 
        }
      };
    
    return (
    <main className={css.mainContent}>
 <form action={handleSubmit} className={css.form}>
    <h1 className={css.formTitle}>Sign in</h1>

    <div className={css.formGroup}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" className={css.input} required />
    </div>

    <div className={css.formGroup}>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" className={css.input} required />
    </div>

    <div className={css.actions}>
      <button type="submit" className={css.submitButton}>
        Log in
      </button>
    </div>

    {error &&<p className={css.error}>{error}</p>}
  </form>
</main>
    );
}

