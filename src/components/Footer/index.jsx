import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer bg-brand-goldDark  footer-horizontal footer-center  text-black p-10 relative">
      <aside>
        {/* <div className="absolute left-4 bottom-0 hidden lg:block">
          <Image
            src="/Videos/Images/sicily.png"
            alt="Description"
            width={200}
            height={200}
            className="fill-current text-brand-dark "
          />
        </div> */}
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/chef_gabbo_privatechef?igsh=YmhseTlwdHA4bHl4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Videos/Images/instagram.png"
              alt="Description"
              width={30}
              height={30}
              className="fill-current text-brand-dark"
            />
          </a>
        </div>
        <p className="font-bold">
          Chef Gabbo & Co.
          <br />
          Saltelling since 1991
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}
