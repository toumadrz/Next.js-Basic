import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid ms-3">
      <Link href="/" className="navbar-brand fw-bold text-light fs-3">
          <Image src="/logoo.png" width={50} height={50} ></Image>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
          <li className="nav-item">
              <Link href="/" className="nav-link text-light">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/promotions" className="nav-link text-light">
                โปรโมชัน
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link text-light">
                สินค้า
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-light">
                เกี่ยวกับเรา
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}