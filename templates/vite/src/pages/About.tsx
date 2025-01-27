import Card from "../components/Card";
import ClickMeBox from "../components/ClickMeBox";

const About = () => {
  return (
    <>
      <ClickMeBox title="About" />
      <Card className="mt-4">
        <div className="p-4">
          <h3 className="text-xl font-medium text-gray-900">Why make this?</h3>
          <p className="mt-1 text-gray-500">
            I found myself recreating the same app over and over again. Every
            time I'd explore and expand my toolset, only to come back to{" "}
            <i>Vite + extras</i>. So, I thought it time to make my own CRA tool
            to speed up the process.
          </p>
          <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
          <p className="mt-1 text-gray-500">
            This template covers the basics of routing (<i>react-router-dom</i>
            ), state management (<i>redux toolkit</i>), and some development
            ease-of-use tools.
          </p>
        </div>
      </Card>
    </>
  );
};
export default About;
