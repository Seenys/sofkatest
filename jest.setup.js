import { jest } from "@jest/globals";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// Mock expo-router
jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
  router: {
    push: jest.fn(),
    back: jest.fn(),
  },
  useLocalSearchParams: () => ({}),
}));

// Mock zustand
jest.mock("zustand", () => ({
  create: (fn) => fn,
}));

// Mock react-native components
jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  return {
    ...RN,
    TextInput: "TextInput",
    View: "View",
    Text: "Text",
    Pressable: "Pressable",
    Modal: "Modal",
  };
});
