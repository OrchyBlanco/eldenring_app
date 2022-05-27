
import { useRouter } from "next/router";
export default function Element() {
    const router = useRouter();
    return (
      <>
       {router.query.id}
       <p>{router.query.name}</p>
      </>
    );
  }