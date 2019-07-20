import React from 'react'
import { render } from '@testing-library/react'

import DummyPage from '../index'

describe(<DummyPage />, () => {
  let el

  beforeEach(() => {
    el = render(<DummyPage />).container
  })

  describe('when state A', () => {
    it('should do sth when the X button is clicked', () => {
      expect(el).not.toBeNull()
    })

    it('should call api when the Y button is clicked', () => {
      expect(el).not.toBeNull()
    })
  })
})
