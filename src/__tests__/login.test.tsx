import React from 'react'

import Login from '../containers/Login'
import render, { screen } from '../utils/test-utils'

describe('Login', () => {
  test('matches the snapshot', () => {
    const { container } = render(<Login />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <form
          class="login-form"
        >
          <h6>
            Hello there, Sign in to continue
          </h6>
          <div
            class="login-form-group"
          >
            <label
              class="form-label"
              for="email"
            >
              Email
            </label>
            <div
              class="append"
            >
              <input
                class="form-control"
                id="email"
                name="email"
                rules="[object Object]"
                value=""
              />
            </div>
          </div>
          <div
            class="login-form-group"
          >
            <label
              class="form-label"
              for="password"
            >
              Password
            </label>
            <div
              class="append"
            >
              <input
                class="form-control"
                id="password"
                name="password"
                rules="[object Object]"
                type="password"
                value=""
              />
              <button
                class="icon-btn input-icon-btn btn btn-primary"
                type="button"
              >
                <i
                  class="bi bi-eye-slash-fill"
                />
              </button>
            </div>
          </div>
          <div
            class="login-form-group"
          >
            <div
              class="form-check"
            >
              <input
                class="form-check-input"
                id="acceptTerms"
                name="acceptTerms"
                rules="[object Object]"
                type="checkbox"
                value=""
              />
              <label
                class="form-check-label"
                for="acceptTerms"
                title=""
              >
                <div>
                  By creating or logging into account, you are agreeing with our
                   
                  <a
                    href="#"
                  >
                    Terms & Conditions
                  </a>
                   and
                   
                  <a
                    href="#"
                  >
                     Privacy Policy
                  </a>
                  .
                </div>
              </label>
            </div>
          </div>
          <button
            class="btn btn-primary"
            disabled=""
            type="submit"
          >
            Next
          </button>
        </form>
        <button
          class="link-btn btn btn-link"
          type="button"
        >
          Signin with company SSO
        </button>
      </div>
    `)
  })

  test('Next button should be disabled', () => {
    render(<Login />)
    const nextBtn = screen.getByText(/next/i)
    expect(nextBtn).toBeInTheDocument()
  })
})
