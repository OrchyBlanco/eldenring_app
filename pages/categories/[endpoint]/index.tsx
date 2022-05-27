import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Categories({ serverData }: any) {

  const router=useRouter()
  return (
    <>
      <div>
        {serverData.data.map((category:any) => {
          return (
            <>
              <Link
                href={"/categories/[endpoint]/[id]"}
                as={`/categories/${router.query.endpoint}/${category.id}`}
              >
                <a><Button variant="outlined" color="info" sx={{m:1}}>{category.name}</Button></a>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const endpoint = context.query.endpoint;
  const response = await fetch(
    `https://eldenring.fanapis.com/api/${endpoint}?limit=307`
  );
  const serverData = await response.json();

  return { props: { serverData } };
}
