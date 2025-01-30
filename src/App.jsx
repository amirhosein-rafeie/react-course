import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthDate: "",
    country: "",
    bio: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ** important **
    alert(`Form sent: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>فرم ثبت‌نام</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="نام"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="نام خانوادگی"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="شماره تلفن"
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="رمز عبور"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="تایید رمز عبور"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="radio-group">
            <p>جنسیت:</p>
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="radio-input"
            />
            <label htmlFor="male">مرد</label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="radio-input"
            />
            <label htmlFor="female">زن</label>
          </div>

          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">کشور خود را انتخاب کنید</option>
            <option value="iran">ایران</option>
            <option value="turkey">ترکیه</option>
            <option value="germany">آلمان</option>
            <option value="usa">آمریکا</option>
          </select>

          <textarea
            name="bio"
            placeholder="درباره خودتان بنویسید..."
            value={formData.bio}
            onChange={handleChange}
          />

          <div className="terms-container">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="checkbox"
            />
            <label>قوانین را می‌پذیرم.</label>
          </div>

          <button type="submit">ثبت‌نام</button>
        </form>
      </div>
    </div>
  );
}

export default App;
