import Button from "@/components/ui/Button";
import Providers from "./Providers";
import Link from "next/link";
export default function NotFound() {
  return (
    <html lang="en" >
      <body className="bg-primary h-screen w-screen flex items-center justify-center">
        <Providers>
          <div className="flex flex-col items-center gap-4">
            <p>No se ha encontrado la Página</p>

            <Link href="/">
              <Button className=" text-white">Volver al inicio</Button>
            </Link>
          </div>

        </Providers>
      </body>
    </html>
  );
}
