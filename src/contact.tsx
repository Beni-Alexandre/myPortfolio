import { useState } from "react";
import { Send } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [result, setResult] = useState<"idle" | "Sending" | "Sent" | "error">(
    "idle"
  );
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult("Sending");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "bfda3bc5-7777-452f-a676-d8838af007ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12 mt-[64px] animate-fade-in min-h-screen items-center justify-center">
        <h1 className="text-2xl md:text-3xl mb-8">Contact Me</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={result === "Sending"}
            >
              {result === "Sending" ? "Sending..." : "Send Message"}

              <Send className="ml-2 h-5 w-5" />
            </button>
            <span className="{block mt-4 }">
              {result === "Sent" && (
                <p className="text-green-600">Message received, Thank you!</p>
              )}
              {result === "error" && (
                <p className="text-red-600">An error has occured, Try again!</p>
              )}
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
