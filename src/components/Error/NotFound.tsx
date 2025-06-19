import logoIcon from "@/assets/icon/lunchIcon.svg";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col items-center">
        <img src={logoIcon} alt="logo icon" className="w-24 h-24" />
        <h1 className="text-xl lg:text-2xl">
          요청하신 페이지를 찾을 수 없어요!
        </h1>
      </section>
      <section>
        <Button
          onClick={() => {
            navigate("/");
          }}
          className="text-xl lg:text-2xl"
        >
          선택으로 넘어가기!
        </Button>
      </section>
    </>
  );
}
