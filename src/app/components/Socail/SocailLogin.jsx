"use client"
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

import AuthContext from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
const SocailLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const { replace, refresh } = useRouter();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const handleLogin = () => {
    googleLogin().then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);

      refresh();
      replace(from);
    });
  };
  return (
    <div className="mx-auto w-1/2">
      <button
        onClick={handleLogin}
        className="w-full -mt-20 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
      >
        <FaGoogle className="inline "></FaGoogle> Continue With Google
      </button>
    </div>
  );
};

export default SocailLogin;
