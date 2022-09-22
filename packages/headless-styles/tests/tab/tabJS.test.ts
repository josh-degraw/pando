import { unstable_getJSTabProps } from '../../src'

jest.mock('@pluralsight/shared', () => {
  return {
    tabs: true,
  }
})

describe('Tab JS - unstable_getJSTabProps', () => {
  test('should accept no options', () => {
    const props = unstable_getJSTabProps()
    expect(props?.tab.cssProps).toContain('font-size: 1rem')
    expect(props?.tab.styles.fontSize).toEqual('1rem')
  })

  test('should accept a small size option', () => {
    const props = unstable_getJSTabProps({ size: 's' })
    expect(props?.tab.cssProps).toContain('font-size: 0.875rem')
    expect(props?.tab.styles.fontSize).toEqual('0.875rem')
  })
})