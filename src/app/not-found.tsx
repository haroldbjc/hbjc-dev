import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen mx-auto p-8 sm:p-20 max-w-3xl flex flex-col">
      <h2>🐞</h2>
      <p>Oops! You hit a dead end.</p>
      <Link href="/" className="pt-8">
        -&gt; Back to my nest
      </Link>
    </div>
  );
}
