import Link from "next/link";

const Meals = () => {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/hamburguer">Hamburguer</Link>
      </p>
      <p>
        <Link href="/meals/pad-thai">Pad Thai</Link>
      </p>
      <p>
        <Link href="/meals/sloppy-joe">Sloppy Joe</Link>
      </p>
      <main>
        <p>
          <Link href="/meals/share">Share</Link>
        </p>
        <p>
          <Link href="/community">Community</Link>
        </p>
      </main>
    </main>
  );
};

export default Meals;
