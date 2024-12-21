import * as yup from "yup";
export const signUPSchema = yup
  .object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name cannot exceed 50 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name cannot exceed 50 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^[0-9]{11}$/,
        "Phone number must be 11 digits and contain only numbers"
      ),
    address: yup
      .string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters")
      .max(100, "Address cannot exceed 100 characters"),
  })
  .required();
