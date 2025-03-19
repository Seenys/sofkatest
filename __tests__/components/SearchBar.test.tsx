import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  const mockOnChangeText = jest.fn();

  beforeEach(() => {
    mockOnChangeText.mockClear();
  });

  it("renders correctly with default props", () => {
    const wrapper = shallow(
      <SearchBar value="" onChangeText={mockOnChangeText} />
    );

    expect(wrapper.find("TextInput").prop("placeholder")).toBe("Buscar...");
    expect(wrapper.find('AntDesign[name="search1"]')).toHaveLength(1);
    expect(wrapper.find('AntDesign[name="close"]')).toHaveLength(0);
  });

  it("renders with custom placeholder", () => {
    const wrapper = shallow(
      <SearchBar
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Buscar productos..."
      />
    );

    expect(wrapper.find("TextInput").prop("placeholder")).toBe(
      "Buscar productos..."
    );
  });

  it("shows clear button when there is text", () => {
    const wrapper = shallow(
      <SearchBar value="test" onChangeText={mockOnChangeText} />
    );

    expect(wrapper.find('AntDesign[name="close"]')).toHaveLength(1);
  });

  it("calls onChangeText when typing", () => {
    const wrapper = shallow(
      <SearchBar value="" onChangeText={mockOnChangeText} />
    );

    wrapper.find("TextInput").simulate("changeText", "test");
    expect(mockOnChangeText).toHaveBeenCalledWith("test");
  });

  it("clears input when clear button is pressed", () => {
    const wrapper = shallow(
      <SearchBar value="test" onChangeText={mockOnChangeText} />
    );

    wrapper.find("Pressable").simulate("press");
    expect(mockOnChangeText).toHaveBeenCalledWith("");
  });
});
