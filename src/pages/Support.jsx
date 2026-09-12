import React from "react";
import {
  Mail,
  HelpCircle,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <HelpCircle className="w-7 h-7 text-indigo-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              Help & Support
            </h1>
          </div>

          <p className="text-gray-500">
            Need help with ExpenseTracker? Feel free to reach out to us
            through any of the contact options below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Email */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  Email Support
                </h2>

                <a
                  href="mailto:harshmotiramani2002@gmail.com"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <ExternalLink className="w-6 h-6 text-indigo-600" />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  LinkedIn
                </h2>

                <a
                  href="https://www.linkedin.com/in/harsh-motiramani-1877232a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Connect with us
                </a>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-xl">
                <ExternalLink className="w-6 h-6 text-gray-700" />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  GitHub
                </h2>

                <a
                  href="https://github.com/harshmotiramani2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  View our projects
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <MessageCircle className="w-6 h-6 text-purple-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Need assistance?
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed">
                If you're experiencing issues with your account, transactions,
                income, expenses, or any other feature, please contact us.
                We're happy to help you resolve the issue.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;