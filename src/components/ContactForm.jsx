import { useEffect } from "react";
import { object, string, minLength, email, pipe } from "valibot";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

const ContactFormSchema = object({
  email: pipe(
    string(),
    minLength(1, "Please enter your email"),
    email("The email is incorrectly formatted")
  ),
  topic: pipe(
    string(),
    minLength(1, "Please enter a topic"),
    minLength(3, "Topic should be 3 symbols or longer")
  ),
  message: pipe(
    string(),
    minLength(1, "Please enter your message"),
    minLength(3, "Message should be 3 symbols or longer")
  ),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: valibotResolver(ContactFormSchema) });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        topic: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const sendEmail = async (data) => {
    // e.preventDefault();
    const { email, topic, message } = data;

    await fetch("https://fabform.io/f/JVaQdrr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, topic, message }),
    });
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(sendEmail)}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-teal-900 dark:text-stone-200"
          >
            Your email
          </label>
          <input
            className="border text-sm rounded-lg block w-full p-2.5 bg-teal-700 border-teal-900 placeholder-white text-stone-200 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            id="email"
            // value={email}
            defaultValue="email@example.com"
            {...register("email")}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="topic"
            className="block mb-2 text-sm font-bold text-teal-900 dark:text-stone-200"
          >
            Topic
          </label>
          <input
            className="border text-sm rounded-lg block w-full p-2.5 bg-teal-700 border-teal-900 placeholder-white text-stone-200 focus:ring-blue-500 focus:border-blue-500"
            id="topic"
            // value={topic}
            // onChange={(e) => setTopic(e.target.value)}
            {...register("topic")}
            defaultValue="topic"
            placeholder="e.g. Collaboration"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-bold text-teal-900 dark:text-stone-200"
          >
            Message
          </label>
          <textarea
            id="message"
            className="border text-sm rounded-lg block w-full p-2.5 bg-teal-700 border-teal-900 placeholder-white text-stone-200 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            {...register("message")}
            defaultValue="message"
            placeholder="Your message"
          />
        </div>
        <button
          className="w-full py-2 border border-gray-600 rounded-lg text-white font-bold bg-teal-600 hover:bg-teal-900 dark:hover:bg-teal-700 "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
