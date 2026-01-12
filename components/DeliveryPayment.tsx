export default function DeliveryPayment() {
  return (
    <div className="relative p-5 font-semibold overflow-hidden">
      <img className="absolute inset-0" src="sec5-bg.webp" alt="" />
      <div className="relative">
        <h3 className="text-yellow-400 text-center text-3xl font-bold py-4">
          ДОСТАВКА И ОПЛАТА
        </h3>

        <div className="flex gap-4 items-center">
          <img className="rounded-md" src="order_1.webp" alt="" />
          <div>
            <div className="text-yellow-400 text-lg">Быстрая доставка</div>
            <div className="text-white font-normal mt-2">
              Доставка почтой всего за несколько дней.
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-row-reverse mt-6 items-center">
          <img className="rounded-md" src="order_2.webp" alt="" />
          <div>
            <div className="text-yellow-400 text-lg">Удобная оплата</div>
            <div className="text-white font-normal mt-2">
              Оплата производится только при получении заказа на руки.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
