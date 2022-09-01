import React, { FC, ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import { MemoryRouter } from 'react-router-dom'
import store from '../redux-store'

const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { route?: string }
) => {
  const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <Provider store={store}>
        <RecoilRoot>
          <MemoryRouter initialEntries={[options?.route || '/']}>
            {children}
          </MemoryRouter>
        </RecoilRoot>
      </Provider>
    )
  }

  return rtlRender(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'
export default render
