import DeliveryPayment from "@/components/DeliveryPayment";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import OrderForm from "@/components/OrderForm";
import PriceBlock from "@/components/PriceBlock";
import ProductDescription from "@/components/ProductDescription";
import ProductFeatures from "@/components/ProductFeatures";
import ProductTitle from "@/components/ProductTitle";
import StockLeft from "@/components/StockLeft";
import TimerBlock from "@/components/TimerBlock";

export default function Home() {
  return (
    <main className="max-w-120 bg-white leading-tight m-auto">
      <HeaderTop />
      <img src="header.webp" alt="" />

      <PriceBlock />
      <TimerBlock />
      <OrderForm />
      <StockLeft />

      <ProductTitle />
      <img src="pled_2.webp" alt="" />
      <ProductFeatures />
      <img src="pled_3.webp" alt="" />
      <ProductDescription />
      <img src="pled_4.webp" alt="" />
      <ProductDescription />

      <img src="garant.webp" alt="" />
      <DeliveryPayment />

      <img src="header.webp" alt="" />
      <PriceBlock />
      <TimerBlock />
      <OrderForm />
      <StockLeft />

      <Footer />
    </main>
  );
}
