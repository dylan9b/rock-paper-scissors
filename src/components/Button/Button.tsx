interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button
      type="button"
      className="w-full md:w-40  bg-custom-black rounded-full uppercase px-8 py-4 border-2 text-custom-gold font-semibold border-custom-gold"
    >
      {label}
    </button>
  );
}
