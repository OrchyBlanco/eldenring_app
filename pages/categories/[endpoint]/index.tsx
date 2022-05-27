import Link from "next/link";
import { useRouter } from "next/router";

export default function Categories() {
  const router = useRouter();
  const id = "Test";
  return (
    <>
      {router.query.endpoint}
      <Link
        href={"/categories/[endpoint]/[id]"}
        as={`/categories/${router.query.endpoint}/${id}`}
      >
        <a>Init</a>
      </Link>
    </>
  );
}
