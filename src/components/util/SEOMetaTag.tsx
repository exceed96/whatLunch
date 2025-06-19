import { Helmet } from "react-helmet-async";

export default function SEOMetaTag() {
  return (
    <>
      <Helmet>
        <title>점심 뭐 먹지?</title>
        <meta
          name="description"
          content="오늘 뭐 먹을지 못 고르는 당신이여 여기로 와라"
        />
      </Helmet>
    </>
  );
}
