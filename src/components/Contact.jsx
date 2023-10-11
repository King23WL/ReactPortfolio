import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("msg sent");
  };
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#209CEE] text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-[#209CEE] hover:border-[#209CEE] px-4 py-3 my-8 mx-auto flex items-center rounded"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
