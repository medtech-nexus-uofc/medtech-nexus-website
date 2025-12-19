import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-rose-pink text-3xl font-bold">Page Not Found!</h1>
      <Link href="/">
        <h1 className="bg-lavender flex h-10 w-36 items-center justify-center rounded-xl font-bold text-white drop-shadow-md hover:scale-105">
          Return to Home
        </h1>
      </Link>
    </div>
  );
}
