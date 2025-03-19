import React from "react";
import { shallow } from "enzyme";
import { Text } from "react-native";
import Button from "../../components/Button";

describe("Button", () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it("renders correctly with default props", () => {
    const wrapper = shallow(
      <Button onPress={mockOnPress}>
        <Text>Test Button</Text>
      </Button>
    );

    expect(wrapper.find("Text").text()).toBe("Test Button");
  });

  it("renders with primary variant", () => {
    const wrapper = shallow(
      <Button onPress={mockOnPress} variant="primary">
        <Text>Primary Button</Text>
      </Button>
    );

    const button = wrapper.find("Pressable");
    expect(button.prop("style")).toEqual(
      expect.objectContaining({ backgroundColor: "#0EA5E9" })
    );
  });

  it("renders with secondary variant", () => {
    const wrapper = shallow(
      <Button onPress={mockOnPress} variant="secondary">
        <Text>Secondary Button</Text>
      </Button>
    );

    const button = wrapper.find("Pressable");
    expect(button.prop("style")).toEqual(
      expect.objectContaining({ backgroundColor: "#E2E8F0" })
    );
  });

  it("renders with danger variant", () => {
    const wrapper = shallow(
      <Button onPress={mockOnPress} variant="danger">
        <Text>Danger Button</Text>
      </Button>
    );

    const button = wrapper.find("Pressable");
    expect(button.prop("style")).toEqual(
      expect.objectContaining({ backgroundColor: "#EF4444" })
    );
  });

  it("calls onPress when pressed", () => {
    const wrapper = shallow(
      <Button onPress={mockOnPress}>
        <Text>Test Button</Text>
      </Button>
    );

    wrapper.find("Pressable").simulate("press");
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    const wrapper = shallow(
      <Button onPress={mockOnPress} disabled>
        <Text>Disabled Button</Text>
      </Button>
    );

    wrapper.find("Pressable").simulate("press");
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
