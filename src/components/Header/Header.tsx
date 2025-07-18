// 헤더 컴포넌트

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center relative py-8">
      <div className="text-orange-700 text-2xl sm:text-3xl lg:text-4xl font-bold absolute left-1/2 -translate-x-1/2">
        점심 뭐 먹지?
      </div>
    </header>
  );
}
