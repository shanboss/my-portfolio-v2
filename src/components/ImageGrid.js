import Image from "next/image";

export default function ImageGrid({ size = 100 }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="aspect-square">
        <Image src="/cyberManuBlue.png" width={size} height={size} alt="Manu" />
      </div>
      <div className="aspect-square">
        <Image
          src="/cyberManuGreen.png"
          width={size}
          height={size}
          alt="Manu"
        />
      </div>
      <div className="aspect-square">
        <Image src="/cyberManuRed.png" width={size} height={size} alt="Manu" />
      </div>
      <div className="aspect-square">
        <Image src="/cyberManuBlue.png" width={size} height={size} alt="Manu" />
      </div>
    </div>
  );
}
