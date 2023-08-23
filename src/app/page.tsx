import Heading from "@/components/Heading/Heading";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-8">
      <Heading title="Data Structures"/>
      <ul className="ms-8 mt-2">
        <li className="list-disc">
          <Link href="/data-structure/linkedlist" className="underline hover:text-sky-400">
            Linked List
          </Link>
        </li>
      </ul>
    </div>
  )
}
