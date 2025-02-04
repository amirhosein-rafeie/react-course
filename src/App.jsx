import React, { useState } from "react";
import "./App.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const phoneRegex = /^09[0-9]{9}$/;
const dateRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

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

  const [errors, setErrors] = useState({});

  const vlidateForm = () => {
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "نام الزامی است";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "نام خانوادگی الزامی است";
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = "فرمت ایمیل نامعتبر است";
    }

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "فرمت شماره تلفن نامعتبر است";
    }

    if (!passwordRegex.test(formData.password)) {
      errors.password =
        "در رمزعبور از عدد و کاراکتر استفاده کنید. طول رمز عبور باید 6 باشد.";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "رمزها باید یکسان باشند";
    }

    if (!dateRegex.test(formData.birthDate)) {
      errors.birthDate = "فرمت تاریخ نامعتبر است";
    }

    if (!formData.gender) {
      errors.gender = "جنسیت الزامی است";
    }

    if (!formData.country) {
      errors.country = "کشور الزامی است";
    }

    if (!formData.terms) {
      errors.terms = "لطفا با قوانین موافقت کنید";
    }

    if (formData.bio && formData.bio.length < 4) {
      errors.bio = "حداقل 3 کاراکتر وارد کنید";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ** important **
    if (vlidateForm()) {
      alert(`Form sent: ${JSON.stringify(formData)}`);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>فرم ثبت‌نام</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="نام"
                value={formData.firstName}
                onChange={handleChange}
              />
              <p className="error">{errors.firstName}</p>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="نام خانوادگی"
                value={formData.lastName}
                onChange={handleChange}
              />
              <p className="error">{errors.lastName}</p>
            </div>
          </div>

          <input
            name="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{errors.email}</p>

          <input
            type="text"
            name="phone"
            placeholder="شماره تلفن"
            value={formData.phone}
            onChange={handleChange}
          />
          <p className="error">{errors.phone}</p>

          <div>
            <input
              type="password"
              name="password"
              placeholder="رمز عبور"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="error">{errors.password}</p>
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="تایید رمز عبور"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <p className="error">{errors.confirmPassword}</p>
          </div>

          <div>
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
            <p className="error">{errors.gender}</p>
          </div>

          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <p className="error">{errors.birthDate}</p>

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
          <p className="error">{errors.country}</p>

          <textarea
            name="bio"
            placeholder="درباره خودتان بنویسید..."
            value={formData.bio}
            onChange={handleChange}
          />
          <p className="error">{errors.bio}</p>

          <div>
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
            <p className="error">{errors.terms}</p>
          </div>

          <button type="submit">ثبت‌نام</button>
        </form>
      </div>
    </div>
  );
}

export default App;
