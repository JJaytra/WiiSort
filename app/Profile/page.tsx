import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(options);

  // if no session, send them to log in, if they log in, send them back to this page
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Profile");
  }
  return (
    <div>
      ProfilePage
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default ProfilePage;
