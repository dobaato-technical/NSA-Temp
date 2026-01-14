"use client";

import Image from "next/image";

const CONTACT_INFO = {
  phone: "+977-1-4241066",
  email: "info@nepalstrokeassociation.org",
  address: "Kathmandu, Nepal",
  emergencyHotline: "1166",
};

export default function UnderDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Blob Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl w-full space-y-6">
          {/* Header with Logo */}
          <div className="text-left flex items-center justify-center space-x-3">
            <div className="flex justify-center">
              <div className="relative w-32 h-32 ">
                <Image
                  src="/NSALogo.png"
                  alt="Nepal Stroke Association Logo"
                  width={120}
                  height={120}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl uppercase font-bold text-[#005A9E]">
                Nepal Stroke Association
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                We&apos;re Launching Something Amazing
              </p>
            </div>
          </div>

          {/* Main Card with SVG and Content */}
          <div className="bg-white  overflow-hidden ">
            <div className="flex flex-col items-center p-2 space-y-12 ">
              {/* Image on Top - Centered */}
              <div className="relative w-full max-w-[400px] h-auto">
                <Image
                  src="/under-devlopment.svg"
                  alt="Under Development"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-xl animate-float"
                  priority
                />
              </div>

              {/* Content Below.. */}
              <div className="w-full space-y-12 flex flex-col items-start ">
                <div className="flex items-center justify-between w-full gap-10">
                  <div className="space-y-4 flex flex-col text-start">
                    <h2 className="text-3xl sm:text-5xl uppercase font-bold bg-gradient-to-r from-[#005A9E] to-[#0084D1]  bg-clip-text text-transparent">
                      Coming Soon
                    </h2>
                    <p className="text-gray-700 leading-tight text-base ">
                      We&apos;re working hard to bring you an enhanced digital
                      experience with improved features, better content, and
                      powerful new tools designed specifically for you.
                    </p>
                  </div>

                  {/* Progress Section */}
                  <div className="space-y-6 p-6 w-full rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        Development Progress
                      </span>
                      <span className="text-2xl font-bold text-[#005A9E]">
                        75%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#005A9E] via-[#0084D1] to-[#005A9E] h-full rounded-full"
                        style={{
                          width: "75%",
                          animation: "pulse 2.5s ease-in-out infinite",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-6 mb-6 w-full">
                  <h3 className="text-3xl font-bold text-[#005A9E] uppercase tracking-wider text-center">
                    🚀 What&apos;s Coming
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      "Improved User Experience",
                      "Enhanced Security",
                      "Better Resources",
                      "Advanced Features",
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 w-full sm:w-auto"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#005A9E] to-[#0084D1] flex items-center justify-center">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl uppercase font-bold text-[#005A9E] mb-2">
                Stay Connected
              </h2>
              <p className="text-gray-600">
                Reach out to us through any of these channels
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2  gap-4">
              {/* Phone Card */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#005A9E] hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#005A9E] to-[#0084D1] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005A9E] to-[#0084D1] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-lg font-bold text-[#005A9E]">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#005A9E] hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#005A9E] to-[#0084D1] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005A9E] to-[#0084D1] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm font-bold text-[#005A9E] break-all">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-3 py-8">
            <p className="text-gray-700 font-medium">
              Thank you for your patience. We&apos;ll be launching very soon!
            </p>
            <p className="text-sm text-gray-500">
              Nepal Stroke Association © 2026 • Dedicated to Stroke Prevention &
              Care
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
