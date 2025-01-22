import Image from "next/image";
import styles from "./page.module.css";
import { data } from "./data";
import PaginatedData from "./paginateddata";

export default function Home() {
  return (
    <PaginatedData data={data} />
  );
}
