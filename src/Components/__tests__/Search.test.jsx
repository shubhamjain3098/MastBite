import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mmockResListData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("shoud render the body component with search", () => {
  render(<Body />);
});
