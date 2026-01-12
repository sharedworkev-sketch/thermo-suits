export default function HeaderTop() {
  return (
    <div className="flex p-6 gap-6 justify-between text-sm">
      <div className="flex gap-4 justify-center items-center w-1/2">
        <img className="max-w-8" src="/icons/order-icon-top1.webp" alt="" />
        <span>Доставка по всей РБ за несколько дней</span>
      </div>
      <div className="flex gap-4 justify-center items-center w-1/2">
        <img className="max-w-8" src="/icons/order-icon-top2.webp" alt="" />
        <span>Оплата при получении товара</span>
      </div>
    </div>
  );
}
