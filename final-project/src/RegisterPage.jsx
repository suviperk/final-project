import { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
  event.preventDefault();

  const result = registerSchema.safeParse(formData);

  if (!result.success) {
    const fieldErrors = {};

    result.error.issues.forEach((issue) => {
      const fieldName = issue.path[0];
      fieldErrors[fieldName] = issue.message;
    });

    setErrors(fieldErrors);
    setSuccessMessage("");
    setApiResponse(null);
    return;
  }

  setErrors({});
  setSuccessMessage("");
  setLoading(true);

  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    const data = await response.json();

    setApiResponse(data);
    setSuccessMessage("Form submitted and sent to server successfully! ");
  } catch (error) {
    console.error(error);
    setSuccessMessage("Something went wrong while sending data ");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="mx-auto max-w-md w-full py-16">
      <h1 className="text-center mb-14">Register Page</h1>
    

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-1"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-1"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-1"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button type="submit"
        className="mt-4 rounded-lg bg-red-500 px-6 py-2 text-white hover:bg-red-600"
        >Submit</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default RegisterPage;