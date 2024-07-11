import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  return (
    <div className="h-full p-36 flex flex-col items-center justify-center">
      <div className="relative h-28 w-28">
        <Image 
          src="/logo.png"
          alt="Empty"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <p className="text-muted-foreground text-sm text-center p-8">
        {label}
      </p>
    </div>
  );
}