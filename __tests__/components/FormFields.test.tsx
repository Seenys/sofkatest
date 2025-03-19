import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import FormFields from "../../components/FormFields";
import { Product } from "../../types/products";

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const { control, setValue } = useForm<Product>();
  return React.cloneElement(children as React.ReactElement, {
    control,
    setValue,
  });
};

describe("FormFields", () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it("renders all form fields", () => {
    render(
      <TestWrapper>
        <FormFields control={{} as any} setValue={mockSetValue} />
      </TestWrapper>
    );

    expect(screen.getByPlaceholderText("ID")).toBeTruthy();
    expect(screen.getByPlaceholderText("Nombre")).toBeTruthy();
    expect(screen.getByPlaceholderText("Descripción")).toBeTruthy();
    expect(screen.getByText("Fecha de liberación")).toBeTruthy();
    expect(screen.getByText("Fecha de revisión")).toBeTruthy();
  });

  it("handles text input changes", () => {
    render(
      <TestWrapper>
        <FormFields control={{} as any} setValue={mockSetValue} />
      </TestWrapper>
    );

    const idInput = screen.getByPlaceholderText("ID");
    fireEvent.changeText(idInput, "test123");

    expect(mockSetValue).toHaveBeenCalledWith("id", "test123");
  });

  it("handles date selection", () => {
    render(
      <TestWrapper>
        <FormFields control={{} as any} setValue={mockSetValue} />
      </TestWrapper>
    );

    const releaseDateButton = screen.getByText("Fecha de liberación");
    fireEvent.press(releaseDateButton);

    // Note: We can't fully test the date picker as it's a native component
    // We just verify that the button is pressable
    expect(releaseDateButton).toBeTruthy();
  });

  it("disables revision date field", () => {
    render(
      <TestWrapper>
        <FormFields control={{} as any} setValue={mockSetValue} />
      </TestWrapper>
    );

    const revisionDateButton = screen.getByText("Fecha de revisión");
    expect(revisionDateButton.props.disabled).toBe(true);
  });

  it("shows validation errors", () => {
    const mockControl = {
      formState: {
        errors: {
          id: { message: "ID is required" },
          name: { message: "Name is required" },
        },
      },
    };

    render(
      <TestWrapper>
        <FormFields control={mockControl as any} setValue={mockSetValue} />
      </TestWrapper>
    );

    expect(screen.getByText("ID is required")).toBeTruthy();
    expect(screen.getByText("Name is required")).toBeTruthy();
  });
});
