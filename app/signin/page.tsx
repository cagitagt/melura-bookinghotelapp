import { Metadata } from "next";
import Link from "next/link";
import { LoginGoogleButton } from "@/components/login-button";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-taupe-50 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
            Melura Hotel
          </span>
          <h1 className="font-playfair text-4xl font-normal text-taupe-900 mt-3">
            Welcome Back
          </h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-10 bg-taupe-300" />
            <span className="w-1.5 h-1.5 rotate-45 border border-taupe-400" />
            <span className="h-px w-10 bg-taupe-300" />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-taupe-100 p-8">
          <p className="text-center text-taupe-600 text-sm mb-8">
            Sign in to manage your reservations and stays.
          </p>

          <LoginGoogleButton />

          <p className="text-center text-xs text-taupe-400 mt-8 leading-relaxed">
            By continuing, you agree to Melura&apos;s{" "}
            <Link href="#" className="underline hover:text-taupe-600">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-taupe-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <p className="text-center text-xs text-taupe-400 mt-8">
          <Link href="/" className="hover:text-taupe-700 transition-colors duration-200">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;