import React from "react";
import { prisma } from "../db/prismaconnection";

async function MitroList() {
  const data = await prisma.users.findMany();
  console.log(data);
  return <div></div>;
}

export default MitroList;