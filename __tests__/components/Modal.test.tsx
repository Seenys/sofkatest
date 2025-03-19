import React from "react";
import { shallow } from "enzyme";
import Modal from "../../components/Modal";

describe("Modal", () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnConfirm.mockClear();
  });

  it("renders correctly with default props", () => {
    const wrapper = shallow(
      <Modal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        title="Test Modal"
        message="Test Message"
      />
    );

    expect(wrapper.find("Text").at(0).text()).toBe("Test Modal");
    expect(wrapper.find("Text").at(1).text()).toBe("Test Message");
    expect(wrapper.find("Button").at(0).prop("children")).toBe("Cancelar");
    expect(wrapper.find("Button").at(1).prop("children")).toBe("Confirmar");
  });

  it("renders with custom button text", () => {
    const wrapper = shallow(
      <Modal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        title="Test Modal"
        message="Test Message"
        confirmText="Delete"
        cancelText="Cancel"
      />
    );

    expect(wrapper.find("Button").at(0).prop("children")).toBe("Cancel");
    expect(wrapper.find("Button").at(1).prop("children")).toBe("Delete");
  });

  it("calls onClose when cancel button is pressed", () => {
    const wrapper = shallow(
      <Modal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        title="Test Modal"
        message="Test Message"
      />
    );

    wrapper.find("Button").at(0).simulate("press");
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onConfirm when confirm button is pressed", () => {
    const wrapper = shallow(
      <Modal
        visible={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        title="Test Modal"
        message="Test Message"
      />
    );

    wrapper.find("Button").at(1).simulate("press");
    expect(mockOnConfirm).toHaveBeenCalled();
  });

  it("does not render when visible is false", () => {
    const wrapper = shallow(
      <Modal
        visible={false}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        title="Test Modal"
        message="Test Message"
      />
    );

    expect(wrapper.find("View")).toHaveLength(0);
  });
});
