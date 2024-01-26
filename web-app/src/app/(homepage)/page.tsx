import Banner from "@/components/homepage/Banner";
import Comments from "@/components/homepage/Comments";
import GrowCollection from "@/components/homepage/GrowCollection";
import JoinUs from "@/components/homepage/JoinUs";
import SaleCardBanner from "@/components/homepage/SaleCardBanner";

export default function Home() {
  return (
    <main>
      <Banner />
      <SaleCardBanner />
      <JoinUs/>
      <Comments/>
      <GrowCollection/>
    </main>
  );
}
