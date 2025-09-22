import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Welcome to{" "}
          <span className="font-semibold text-orange-600">MastBite</span>, your
          one-stop solution for ordering delicious meals from your favorite
          restaurants. Our mission is to make food ordering fast, reliable, and
          enjoyable for everyone.
        </p>

        {/* Mission Section */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At MastBite, we aim to connect people with great food at the tap of
            a button. Whether you’re craving street food, healthy meals, or fine
            dining, our platform ensures quick and seamless access to the best
            restaurants around you.
          </p>
        </div>

        {/* Team / User Info */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Meet the Developer
          </h2>
          <div className="flex justify-center">
            <UserClass name={"Shubham Jain"} location={"Bangalore"} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
