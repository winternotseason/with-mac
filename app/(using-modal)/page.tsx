import AppIcon from "../_component/app-icon";
import MainHeader from "../_component/main-header";
import MainNav from "../_component/main-nav";

export default function Home() {
  return (
    <div className="bg-mac w-full h-full bg-cover">
      <MainHeader />
      <div className="pt-8 pl-3">
        <AppIcon src="/calculator.png" name="계산기" />
        <AppIcon src="/weather.png" name="날씨" />
        <AppIcon src="/git.png" name="github" />
        <AppIcon src="/blog.png" name="블로그" />
      </div>
      <MainNav />
    </div>
  );
}
