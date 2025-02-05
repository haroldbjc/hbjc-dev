import { ModeToggle } from "@/components/theme-toggle";
import { FlowerIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <FlowerIcon />
        <p>
          如此绚丽的花朵，不该在绽放之前就枯萎。我会赠予你璀聚的祝福，而你的灵魂，也将会绽放更耀眼的光辉。
        </p>
        <p>~ 爱莉希雅</p>
        <ModeToggle />
      </main>
    </div>
  );
}
