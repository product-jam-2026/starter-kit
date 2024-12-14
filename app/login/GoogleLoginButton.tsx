"use client";

declare global {
  interface Window {
    handleSignInWithGoogle: (response: any) => void;
  }
}

import { NEXT_PUBLIC_GOOGLE_CLIENT_ID } from "@/lib/config";
import { createClient } from "@/lib/supabase/client";
import { useEffect } from "react";

if (window !== undefined) window.handleSignInWithGoogle = () => {};

const GoogleLoginButton = () => {
  const supabase = createClient();

  useEffect(() => {
    window.handleSignInWithGoogle = async (response) => {
      console.log("handleSignInWithGoogle", response);
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: response.credential,
      });
      console.log(data, error);
    };
  }, []);

  // You can customize the button here:
  // https://developers.google.com/identity/gsi/web/tools/configurator
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-auto_prompt="false"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="medium"
        data-logo_alignment="left"
      />
    </>
  );
};

export default GoogleLoginButton;
