import { useFormStatus } from "react-dom";

export default function SubmitButton({ estilo, rotulo }: { estilo: string, rotulo: string }) {

  const { pending } = useFormStatus();

  return (
    <button
      className={estilo}
      type="submit"
      aria-disabled={pending}
    >
      {rotulo}
    </button>
  );
}