const Privacy = () => (
  <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
    <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
    <p className="mb-6 text-lg text-gray-600 text-center">
      Your privacy is important to us. This Privacy Policy explains how MastBite
      collects, uses, and protects your information.
    </p>

    <div className="space-y-8">
      {/* Section 1 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may collect personal information such as your name, email address,
          phone number, and payment details when you use our services.
          Non-personal information like browser type, device information, and IP
          address may also be collected automatically.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your data helps us provide and improve our services, process
          transactions, communicate with you, and personalize your experience.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement strict security measures to protect your personal
          information. However, no method of transmission over the Internet is
          100% secure.
        </p>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
        <p className="text-gray-700 leading-relaxed">
          We may share your information with trusted third-party providers who
          assist us in operating our platform, conducting business, or serving
          users.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about this Privacy Policy, feel free to
          contact us at{" "}
          <span className="font-medium text-orange-600">
            shubhamjain11099@gmail.com
          </span>
          .
        </p>
      </section>
    </div>

    <p className="mt-10 text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} MastBite. All rights reserved.
    </p>
  </div>
);

export default Privacy;
