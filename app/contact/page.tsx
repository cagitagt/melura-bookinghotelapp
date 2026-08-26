import { Metadata } from "next";
import HeaderSection from "@/components/HeaderSection";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div>
      <HeaderSection
        title="Contact"
        subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium iusto nam!"
      />
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-taupe-500">
              Contact Us
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-normal text-taupe-900 mt-3 mb-6">
              Get In Touch Today
            </h2>
            <p className="text-taupe-600 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              sit totam fugit dolores quia quibusdam!
            </p>

            <ul className="space-y-8">
              <li className="flex gap-5 items-start">
                <div className="flex-none w-12 h-12 rounded-full border border-taupe-300 flex items-center justify-center">
                  <IoMailOutline className="size-5 text-taupe-700" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-sm uppercase tracking-wide text-taupe-400 mb-1">
                    Email
                  </h4>
                  <p className="text-taupe-800">email-us@exaple.com</p>
                </div>
              </li>

              <li className="flex gap-5 items-start">
                <div className="flex-none w-12 h-12 rounded-full border border-taupe-300 flex items-center justify-center">
                  <IoCallOutline className="size-5 text-taupe-700" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-sm uppercase tracking-wide text-taupe-400 mb-1">
                    Phone
                  </h4>
                  <p className="text-taupe-800">+62 88687678868</p>
                </div>
              </li>

              <li className="flex gap-5 items-start">
                <div className="flex-none w-12 h-12 rounded-full border border-taupe-300 flex items-center justify-center">
                  <IoLocationOutline className="size-5 text-taupe-700" />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-sm uppercase tracking-wide text-taupe-400 mb-1">
                    Address
                  </h4>
                  <p className="text-taupe-800">Lake Como, Italy</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;