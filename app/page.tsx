import Image from "next/image";

export default function Home() {

  function x() {

  }

  return (
    <div className="bg-blue-700">
      <p>Matheus Viana</p>
      <Image
        src={"/coruja-azul.png"}
        alt="coruja"
        height="300"
        width={300} />
    </div>
  );
}
