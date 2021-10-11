import React from 'react';

function Form() {
  return (
    <div className="form">
      <div className="form__group">
        <label id="name-label" className="form__label" for="name">
          Name
        </label>
        <input
          class="form__control"
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          required
        />
      </div>

      <div className="form__group">
        <label id="email-label" className="form__label" for="email" required>
          Email
        </label>
        <input
          class="form__control"
          type="email"
          id="email"
          name="email"
          placeholder="Your Email.."
          required
        />
      </div>

      <div className="form__group">
        <label id="age-label" className="form__label" for="age">
          Age
        </label>
        <input
          className="form__control"
          id="number"
          type="number"
          min="0"
          max="130"
          for="age"
          name="age"
          placeholder="Your age..."
          required
        />
      </div>

      <div className="form__group">
        <p>Which option best describes your current role?</p>
        <select className="form__control" id="dropdown" name="role" required>
          <option disabled selected value>
            Select current role
          </option>
          <option value="ceo">CEO</option>
          <option value="manager">Manager</option>
          <option value="it">IT</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form__group">
        <p>Would you recommend KBVentures services?</p>
        <label className="form__label">
          <input
            className="form__input"
            type="radio"
            id="user-recommend"
            name="user-recommend"
            value="definitely"
            checked
          />
          &nbsp; definitely
        </label>
        <label className="form__label">
          <input
            className="form__input"
            type="radio"
            id="user-recommend"
            name="user-recommend"
            value="maybe"
          />
          &nbsp;Maybe
        </label>
        <label className="form__label">
          <input
            className="form__input"
            type="radio"
            id="user-recommend"
            name="user-recommend"
            value="not sure"
          />
          &nbsp;Not sure
        </label>
        <label className="form__label">
          <input
            className="form__input"
            type="radio"
            id="user-recommend"
            name="user-recommend"
            value="no"
          />
          &nbsp;No
        </label>
      </div>

      <div className="form__group">
        <p>Which project were you most interested in?</p>
        <select
          className="form__control"
          id="dropdown"
          name="interested"
          required
        >
          <option disabled selected value>
            Select One:
          </option>
          <option value="timestampmicroservice">
            Time Stamp Micro Service
          </option>
          <option value="reactfronttoback">React Front To Back</option>
          <option value="javascriptfundamentals">
            Javascript Fundamentals
          </option>
        </select>
      </div>

      <div className="form__group">
        <p>
          What would you like to see improved?
          <span>(Check all that apply)</span>
        </p>
        <label className="form__label">
          <input
            type="checkbox"
            className="form__input"
            value="documentation"
          />
          &nbsp;Documentation
        </label>
        <label className="form__label">
          <input type="checkbox" className="form__input" value="algorithms" />
          &nbsp;Algorithms
        </label>
        <label className="form__label">
          <input
            type="checkbox"
            className="form__input"
            value="datastructures"
          />
          &nbsp;Data Structures
        </label>
      </div>
      <div class="form__group">
        <textarea
          className="form__control"
          id="textarea"
          name="textarea"
          cols="30"
          rows="5"
        >
          Enter your comment here...
        </textarea>
      </div>
      <input
        className="submit-button"
        id="submit"
        type="submit"
        value="Submit"
      />
    </div>
  );
}

export default Form;
