// 메인 페이지 컴포넌트

import Main from "@/components/Main/Main";
import SEOMetaTag from "@/components/util/SEOMetaTag";

export default function HomePage() {
  return (
    <>
      <SEOMetaTag />
      <Main />
    </>
  );
}
