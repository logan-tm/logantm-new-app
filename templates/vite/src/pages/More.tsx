import Card from "../components/Card";
import ClickMeBox from "../components/ClickMeBox";

const More = () => {
  return (
    <>
      <ClickMeBox title="More" />
      <Card className="mt-4">
        <div className="p-4">
          <h3 className="text-xl font-medium text-gray-900">
            Check out these UI libraries
          </h3>
          <p className="mt-1 text-gray-500">
            All are copy-paste, no install component libraries.
          </p>
          <div className="mx-auto max-w-lg mt-2">
            <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-sm">
              <li className="p-4">
                <a href="https://ui.shadcn.com" target="_blank">
                  <h4 className="text-lg font-medium leading-loose">
                    shadcn/ui
                  </h4>
                </a>
                {/* <p className="text-gray-500">
                  A fantastic, open-source modern UI component library.
                </p> */}
              </li>
              <li className="p-4">
                <a href="https://sailboatui.com" target="_blank">
                  <h4 className="text-lg font-medium leading-loose">
                    SailboatUI
                  </h4>
                </a>
                {/* <p className="text-gray-500">
                  A fantastic, open-source modern UI component library.
                </p> */}
              </li>
              <li className="p-4">
                <a href="https://hyperui.dev" target="_blank">
                  <h4 className="text-lg font-medium leading-loose">HyperUI</h4>
                </a>
                {/* <p className="text-gray-500">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p> */}
              </li>
              <li className="p-4">
                <a
                  href="https://tailwind-starter-kit.vercel.app/"
                  target="_blank"
                >
                  <h4 className="text-lg font-medium leading-loose">
                    Tailwind Starter Kit
                  </h4>
                </a>
                {/* <p className="text-gray-500">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p> */}
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};
export default More;
