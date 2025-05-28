
'use client';

import { useEffect, useState } from "react";
import Navbar from '@/Compoents/Navbar/Navbar';
import Footer from "@/Compoents/footer/footer";
import Loader from "@/Compoents/loader/loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
