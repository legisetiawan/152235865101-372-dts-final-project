import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";

function ProtectedComponent({ children }) {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);
  if (isLoading) {
    return;
  } else {
    return children;
  }
}

export default ProtectedComponent;
