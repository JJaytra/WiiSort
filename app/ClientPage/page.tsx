"use client";

import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth";
const ClientPage = async () => {
  const session = await getServerSession(options);

  return (
    <div>
      ClientPage
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default ClientPage;
