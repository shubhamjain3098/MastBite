import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Shubham Jain",
        location: "Bengaluru",
        avatar_url: "https://via.placeholder.com/150", // fallback image
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/shubhamjain3098");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center hover:shadow-xl transition">
        <img
          src={avatar_url}
          alt={name}
          className="w-28 h-28 mx-auto rounded-full border-4 border-orange-500 mb-4"
        />
        <h1 className="text-xl font-bold">{name}</h1>
        <h2 className="text-gray-600 mb-2">📍 {location}</h2>
        <h3 className="text-sm text-gray-500">📧 shubhamjain11099@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
