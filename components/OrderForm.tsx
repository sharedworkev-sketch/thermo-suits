"use client";

import { useState } from "react";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Спасибо! Ваша заявка принята.");
        setName("");
        setPhone("");
      } else {
        setError(data.error || "Ошибка отправки формы");
      }
    } catch (err) {
      setError("Ошибка отправки формы");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-[#2b2e36] text-white px-6 py-6 text-center"
    >
      <p className="text-lg mb-4 leading-relaxed">
        НАШИ МЕНЕДЖЕРЫ СВЯЖУТСЯ С ВАМИ ДЛЯ КОНСУЛЬТАЦИИ И ПОМОГУТ СДЕЛАТЬ ЗАКАЗ
      </p>

      <h2 className="text-yellow-400 text-3xl font-bold mb-1">
        ОСТАВЬТЕ ЗАЯВКУ
      </h2>
      <p className="text-md mb-6 opacity-80">
        и получите тепло и комфорт зимой
      </p>

      <input
        type="text"
        placeholder="Введите ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-5 py-5 text-sm text-black bg-white text-center"
      />
      <input
        type="tel"
        placeholder="Введите ваш телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-full px-5 py-5 text-sm text-black bg-white text-center"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full text-2xl bg-yellow-400 hover:bg-yellow-500 transition rounded-full py-4 font-bold text-black shadow-lg"
      >
        {loading ? "Отправка..." : "ЗАКАЗАТЬ СО СКИДКОЙ"}
      </button>

      {success && <div className="text-green-400 mt-2">{success}</div>}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
}
