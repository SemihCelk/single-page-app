import Header from "@/components/layouts/Header";

export default function layoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}

      {/* <Footer /> */}
    </div>
  );
}
