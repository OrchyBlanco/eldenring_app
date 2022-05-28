import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Categories from "../pages/categories/[endpoint]/index";
import { createMockRouter } from "../utils/test/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Categories", () => {
  let props: any;
  beforeEach(() => {
    props = {
      success: true,
      count: 2,
      total: 90,
      data: [
        {
          id: "17f699db6b0l0hzn9xsxxwtgyfky3",
          name: "Ash Of War: Prelate's Charge",
          image:
            "https://eldenring.fanapis.com/images/ashes/17f699db6b0l0hzn9xsxxwtgyfky3.png",
          description:
            'This Ash of War grants an armament the Flame affinity and the following skill:"Prelate\'s Charge: Slam armament into the ground to create a surge of flames, then charge in. Hold to continue the charge."Usable on large and colossal axes and hammers.',
          affinity: "Flame",
          skill: "Prelate's Charge",
        },
        {
          id: "17f69632311l0hzna19sl4rzmmvk4",
          name: "Ash Of War: Barrage",
          image:
            "https://eldenring.fanapis.com/images/ashes/17f69632311l0hzna19sl4rzmmvk4.png",
          description:
            'This Ash of War grants no affinity to an armament, but imparts the following skill:"Barrage: Archery skill using a bow held horizontally. Ready the bow, then fire off a rapid succession of shots faster than the eye can see."Usable on light bows.',
          affinity: "Standard",
          skill: "Barrage",
        },
      ],
    };
  });

  test('renders h1 "ashes" ', () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({ query: { endpoint: "ashes" } })}
      >
        <Categories serverData={props} />
      </RouterContext.Provider>
    );
    expect(screen.getByText("ashes")).toBeInTheDocument();
  });

  test('has an anchor tag with href="/categories"', () => {
    ///categories/ashes/17f699db6b0l0hzn9xsxxwtgyfky3
    render(
      <RouterContext.Provider
        value={createMockRouter({ query: { endpoint: "weapons" } })}
      >
        <Categories serverData={props} />
      </RouterContext.Provider>
    );
    expect(screen.getByText("Ash Of War: Prelate's Charge")).toHaveAttribute;
  });
});
