"use client";

import css from "./SignUpPage.module.css";
import { register, RegisterRequest } from "../../../lib/api/clientApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApiError } from "../../api/api";
import { useAuthStore } from "@/lib/store/authStore";

export default function SignUpPage() {
  const router = useRouter();
    const [error, setError] = useState('');
    const setUser = useAuthStore((state) => state.setUser)

  const handleSubmit = async (formData: FormData) => {
    setError("");
    try {
      const formValues = Object.fromEntries(formData) as unknown as RegisterRequest;
      const res = await register(formValues);
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
      
      if (status === 409 || message === "User exists") {
        setError("An account with this email already exists. Please sign in.");
      } else if (status === 400 || message === "Invalid credentials") {
        setError("Invalid email or password. Try again.");
      } else {
        setError(message);
      }
    }
  };

    return (
    <main className={css.mainContent}>
      <h1 className={css.formTitle}>Sign up</h1>
      <form action={handleSubmit} className={css.form}>
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
            Register
          </button>
        </div>
        {error && <p className={css.error}>{error}</p>}
      </form>
    </main>
  );
}