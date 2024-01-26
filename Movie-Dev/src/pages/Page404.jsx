import Img404 from "../assets/img/404-page.png";
function Page404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 text-white">
      <img src={Img404} alt="" className="w-4/5" />
      <h1 className="text-5xl select-none">404 - Not Found!</h1>
    </div>
  );
}

export default Page404;
