import Image from "next/image";

export default function Home() {

  function x() {

  }

  return (
    <div className="h-full col-span-7 row-span-7 h-full flex flex-row content-center justify-center items-center">
      <Image
        src={"/coruja-azul.png"}
        alt="coruja"
        height="300"
        width={300} />
    </div>
  );
}
