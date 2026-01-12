export default function PriceBlock() {
  return (
    <div className="flex overflow-hidden text-sm">
      <div className="w-1/2 bg-white text-center py-2">
        <div className="text-gray-500 mb-1">Обычная цена</div>
        <div className="text-2xl text-gray-800">
          <span className="line-through">99.98</span>
          <span className="text-sm"> BYN</span>
        </div>
      </div>

      <div className="w-1/2 text-center py-2 text-white bg-linear-to-r from-orange-400 to-red-500">
        <div className="text-xs mb-1 uppercase">Цена по акции</div>
        <div className="text-3xl font-bold">
          49.99 <span className="text-sm font-normal">BYN</span>
        </div>
      </div>
    </div>
  );
}
