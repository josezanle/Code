import Link from "next/link";

const Logo = () => (
  <>
    <Link href="/">
      <a>WBW</a>
    </Link>
    <style jsx>{`
      a {
        width: 400px;
        color: white;
        font-size: 2em;
        margin: auto 0;
      }
    `}</style>
  </>
);

export default Logo;
