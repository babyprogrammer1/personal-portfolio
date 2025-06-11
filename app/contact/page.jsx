"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";


// Modal component
function Modal({ open, onClose, message, isError }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white text-primary rounded-lg shadow-lg p-6 min-w-[280px] max-w-[90vw] flex flex-col items-center">
        <p className={isError ? "text-red-600" : "text-green-600"}>{message}</p>
        <button
          className="mt-6 px-4 py-2 rounded bg-accent text-white hover:bg-accent-hover transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const form = e.target;
    const data = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      service: form.service.value || form.service?.selectedOptions?.[0]?.value || "",
      message: form.message.value,
    };
    try {
      await emailjs.send(
        "service_o305roe",
        "template_wq5h7yj",
        data,
        "rEMJV0NUlJcAvvWVZ"
      );
      setSuccess("Message sent successfully!");
      setModalOpen(true);
      form.reset();
    } catch (err) {
      setError("Failed to send message.");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Modal
        open={modalOpen && (!!success || !!error)}
        onClose={() => {
          setModalOpen(false);
          setSuccess("");
          setError("");
        }}
        message={success || error}
        isError={!!error}
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" }
        }}
        className="h-screen flex items-center py-24 xl:py-0"
      >
        <div className="container mx-auto w-full h-full xl:mt-14 flex flex-col
          items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent
          scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
          <div className="w-full">
            <div className="flex flex-col xl:flex-row gap-6">
              {/* info text */}
              <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
                <div>
                  <h2 className="h2 mb-6">Get In <span className="text-accent">Touch</span></h2>
                  <p className="max-w-[460px] mb-6">
                    Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
                  </p>
                </div>
                {/* contact info */}
                <div className="flex flex-col gap-8">
                  {/* location */}
                  <div className="flex items-center gap-4 text-lg">
                    <span className="text-accent"><HiOutlineMapPin className="text-2xl" /></span>
                    <span>Ilorin, Nigeria</span>
                  </div>
                  {/* phone*/}
                  <div className="flex items-center gap-4 text-lg">
                    <span className="text-accent"><HiOutlinePhone className="text-2xl" /></span>
                    <span>+234 816 338 4651</span>
                  </div>
                  {/* email */}
                  <div className="flex items-center gap-4 text-lg" >
                    <span className="text-accent"><HiOutlineMail className="text-2xl" /></span>
                    <span>rafiuayomide1811@gmail.com</span>
                  </div>
                </div>
              </div>
              {/* form */}
              <div className="flex-1">
                <form className="flex flex-col gap-6 items-start" onSubmit={handleSubmit}>
                  {/* first and last name */}
                  <div className="flex flex-col xl:flex-row gap-6 w-full">
                    <div className="w-full">
                      <Label htmlFor="name">
                        First Name <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        required
                        className="mt-2 mb-4" />
                    </div>
                    <div className="w-full">
                      <Label htmlFor="lastname">
                        Last Name <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        required
                        className="mt-2 mb-4" />
                    </div>
                  </div>
                  {/* email */}
                  <div className="w-full">
                    <Label htmlFor="email">
                      Email <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="yourmail@gmail.com"
                      required
                      className="mt-2 mb-4"
                    />
                  </div>
                  {/* select */}
                  <div className="w-full">
                    <Label htmlFor="service">
                      I'm interested in <span className="text-accent">*</span>
                    </Label>
                    <Select id="service" name="service" required className="mt-2 mb-4">
                      <SelectTrigger
                        id="service"
                        className="w-full !h12 bg-white/5 border-white/10 px-4"
                      >
                        <SelectValue placeholder="Choose here" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-white/12">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="web-development">Web Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* textarea */}
                  <div className="w-full">
                    <Label htmlFor="message">
                      Message <span className="text-accent">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      required
                      className="min-h-[160px] bg-white/5 border-white/10 mt-2 mb-4
                    focus-visible:border-accent focus-visible:ring-accent
                    focus-visible:ring-[1px] resize-none p-4 selection:bg-accent
                    placeholder:text-white/50"
                    />
                  </div>
                  {/* submit btn */}
                  <button
                    type="submit"
                    className="btn btn-lg btn-accent flex items-center gap-2"
                    disabled={loading}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{loading ? "Sending..." : "Send Message"}</span>
                      <HiOutlineArrowLongRight className="text-xl" />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;